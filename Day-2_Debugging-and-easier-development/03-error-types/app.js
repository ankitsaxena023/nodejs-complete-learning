const http = require("http");
const routes = require("./routes");

console.log(routes.someText);

const server = http.createServer(routes.handler);

server.listen(3000);

// Note :

// 1. Syntax error 2. Runtime error 3. Logical error

// 1. Syntax error : like in the line number 6 in the 'const' we forget t and use cons server ** it's mostly a typo, mistyped variable name or missing or extra character like }
// Solution : you need to look closely your code and where editor pointing out a mistake.s

// 2. Runtime error : in this type of error we do which should not be done like in the routes.js line number 15 we remove return then in the browser we get the error and you read the terminal where it specifies the error message

// 3. Logical error: This type error is the difficult one because it'll not cause any error but your app will not behave as expected like in the routes.js line number 27 where we parsed the body and retrieving the message with second element of the array but what if we take it from first element mistakenly mean [0] then message.txt file will give not the output as expected in fact you'll get name in the output no matter what you give in the input

//Note: for logical error we use debugger which node.js provides for accessing go to run in vs code and then start debugging or F5 then select Node.js then put the debugger pointer in the code and again refresh browser localhost:3000 page and insert input and now you can debug your code and you also get debug console where you can access your variables value and run some javascript code without changing your code

//for detail functioning go to -> 04 Improved Development Workflow and Debugging by (Course Hub Udemy) -> 051 Restarting the Debugger Automatically After Editing our App video
