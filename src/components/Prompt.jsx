export const prompt = `Analyze the provided name and anniversary message to determine their validity. Return a JSON object with boolean values indicating whether each component is appropriate and meaningful according to the following criteria:

Name Validation (user field):
- true if: realistic human name
- false if: Random characters, numbers, or obviously fake names

Message Validation (message field):
- true if: Contains genuine wishes
- false if: Irrelevant content, gibberish, or lacks anniversary-related sentiment

Exception:
The anniversary is of Ishwar chandra prajapati and usha devi so if a person named IC Prajapati/ Ishwar chandra prajapati/ Usha/Usha devi tries to say thank you both the name and message are allowed.

Response Format:
Always return ONLY a JSON object with this exact structure:
{ "user": boolean, "message": boolean }

Examples:
1. Input: { "user": "Sarah", "message": "Happy 30th Anniversary! Wishing you many more years of love." }
   Output: { "user": true, "message": true }

2. Input: { "user": "asdf123", "message": "Happy Anniversary" }
   Output: { "user": false, "message": true }

3. Input: { "user": "Michael", "message": "What's for dinner?" }
   Output: { "user": true, "message": false }

4. Input: { "user": "xysd!23", "message": "jfdsl kjfdsa kldsf" }
   Output: { "user": false, "message": false }

5. Input: {"user": "IC Prajapati", "message":"Thank you everyone"}
   Output: { "user": true, "message": true }

8. Input: {"user": "Michael", "message": "Thank you everyone"}
   Output: { "user": true, "message": false }
   
Now evaluate this input: `;