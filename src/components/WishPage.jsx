import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { prompt } from "./prompt";

const supabaseUrl = import.meta.env.VITE_PROJ_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_API_KEY;
const geminiKey = import.meta.env.VITE_GEMINI_API_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);
const genAI = new GoogleGenerativeAI(geminiKey);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

const Message = ({ user, message }) => {
  return (
    <div
      className={"p-4 rounded-lg mb-4 bg-rose-50 border-l-4 border-rose-400"}
    >
      <div className={"font-bold text-rose-600"}>{user}</div>
      <div className="mt-1 text-gray-600">{message}</div>
    </div>
  );
};

const WishPage = () => {
  // Sample messages - replace with real ones
  const [formOpen, setFormOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [formData, setFormData] = useState({
    user: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    async function fetchMessages() {
      const { data, error } = await supabase
        .from("mom-dad-anniversary")
        .select();  
      if (error) console.error(error);
      else setMessages(data);
      // console.log(data);
    }
    fetchMessages();
  }, []);

  const addToSupabase = async (user, msg) => {
    const { data, error } = await supabase.from("mom-dad-anniversary").insert([
      {
        user: user,
        message: msg,
      },
    ]);
    if (error) {
      console.error(Error);
      alert("There was some error adding your message please try again.")
    }
  };

  async function validate(promptText) {
    try {
      const result = await model.generateContent(promptText);
      const response = result.response;
      const text = response.text();

      // Extract the JSON object from the response
      const jsonStart = text.indexOf("{");
      const jsonEnd = text.lastIndexOf("}") + 1;
      const jsonString = text.slice(jsonStart, jsonEnd);
      const validationResult = JSON.parse(jsonString);

      // Return the two values
      return {
        isValidUser: validationResult.user,
        isValidMessage: validationResult.message,
      };
    } catch (err) {
      console.error("Gemini Error:", err);
      alert("Some error occured :(");
      // Return a default fail-safe result if there's an error
      return {
        isValidUser: false,
        isValidMessage: false,
      };
    }
  }

  const sendData = async (e) => {
    // Make the function async
    e.preventDefault();
    // console.log("Submitted:", formData.user, formData.message);

    try {
      // Await the validation promise
      const validation = await validate(
        prompt +
          JSON.stringify({
            // Use JSON.stringify for proper formatting
            user: formData.user,
            message: formData.message,
          })
      );

      // console.log("Validation result:", validation);

      if (validation.isValidUser && validation.isValidMessage) {
        // Add the new message to your messages array
        const newMessage = {
          user: formData.user,
          message: formData.message,
        };
        setMessages((prev) => [...prev, newMessage]);
        // Reset form and close
        setFormOpen(false);
        addToSupabase(formData.user, formData.message);
        alert("Thank you for your lovely message!");
        setFormData({ user: "", message: "" });
      } else {
        if (!validation.isValidUser) {
          alert("Please enter a valid name");
        } else {
          alert("Please write a meaningful message");
        }
      }
    } catch (err) {
      console.error("Validation failed:", err);
      alert("Sorry, we couldn't validate your message. Please try again.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4 md:p-6 bg-rose-25">
      {/* Add Message Button */}
      <div className="text-center">
        <button
          onClick={() => setFormOpen(true)}
          className="bg-rose-600 mb-4 hover:bg-rose-700 text-white font-medium py-3 px-6 rounded-full shadow-md transition-colors"
        >
          Add Your Message
        </button>
      </div>
      {/* Messages Section */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h3 className="text-2xl font-bold text-center text-rose-700 mb-6">
          Messages of Love
        </h3>

        <div className="space-y-4">
          {messages.map((msg, index) => (
            <Message
              key={index}
              user={msg.user}
              message={msg.message}
              isParent={msg.isParent}
            />
          ))}
        </div>
      </div>

      {formOpen && (
        <div className="fixed inset-0 backdrop-blur bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md relative">
            <button
              onClick={() => setFormOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <h3 className="text-xl font-semibold text-rose-700 mb-4">
              Add Your Message
            </h3>

            <form onSubmit={sendData} className="flex flex-col gap-4">
              <input
                type="text"
                name="user"
                value={formData.user}
                onChange={handleChange}
                placeholder="Your Name"
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-300 focus:border-transparent"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message..."
                rows={4}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-300 focus:border-transparent"
                required
              ></textarea>

              <button
                type="submit"
                className="bg-rose-600 hover:bg-rose-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default WishPage;
