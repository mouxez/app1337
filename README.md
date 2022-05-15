👋 Hey there,
I'm happy to share with you my version of how the "1337 FELLOWSHIP App" might look like.
In case of any questions 💬 please feel free to reach me using telegram @mouxez or by email mouxez@gmail.com

The project is a Single Page Application which provides an opportunity to see a list of 1337 colleagues in a grid or list view. The page adapts to any screen size. If there are links to social networks or professional resources, they will be displayed. It is also possible to contact each fellow by email.

# Getting Started with the App
This project was bootstrapped with Create React App TypeScript.
Besides React and TypeScript, I decided to use Ant Design (enterprize class components, easy to integrate, maintain and style) as a main UI library, CSS modules for styling (CRA's built-in tool where all class names and animation names are scoped locally. helps avoid overlapping styles and class names), Axios for requests (helps to send HTTP requests to REST endpoints and reduces the amount of code) and some tools for code styling such as ESlint, Prettier (tools which helps to improve the code quality and fix bugs beforehand itself to avoid it from coming at runtime).

Features:
- Responsive design, works on mobile and tablets;
- Switch between a grid and a different view (such as list);
- The project has Heroku pipeline which triggers on push to master branch and deploys the project [https://app-1337.herokuapp.com](https://app-1337.herokuapp.com).
- Typescript (there is no any's✨);
- Unit tests;

To run the App:
 in the project directory you have to create your own .env file and set the REACT_APP_API_KEY variable value. 
### `npm i && npm start`
Runs the app in the development mode.[http://localhost:3000](http://localhost:3000)

### `npm test`
Launches the test runner in the interactive watch mode.