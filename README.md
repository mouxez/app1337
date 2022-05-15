👋 Hi there,
I'm happy to share with you my version of how the "Show 1337 Fellows App" might look like.
In case of any questions 💬 please feel free to reach me using telegram @mouxez or by email mouxez@gmail.com

# Getting Started with the App
This project was bootstrapped with Create React App TypeScript.
Besides React and TypeScript, I decided to use Ant Design as a main UI library, Axios for requests and some tools for code styling (Eslint, Prettier, Husky).

The project has Azure pipeline which triggers on master branch push and builds the project, but deploy is on Heroku using Heroku CLI manually [https://app-1337.herokuapp.com](https://app-1337.herokuapp.com). At that moment during deployment it shows an "error R14 (memory quota exceeded)". I decided to add more memory up to 1024mb but it still not properly working. I will try to fix it.

To run the App:
 in the project directory you have to create you own .env file and set the REACT_APP_API_KEY variable. 
### `npm i && npm start`
Runs the app in the development mode.[http://localhost:3000](http://localhost:3000)

Launches the test runner in the interactive watch mode.
### `npm test`
