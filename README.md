# Calculator App

## Project Description

The **Calculator App** is a React.js-based application designed to perform sequential mathematical computations. Users input a number, and the application processes this value through a series of functions. Each function is defined by a mathematical equation containing only the allowed operators:

- Addition (`+`)
- Subtraction (`-`)
- Multiplication (`*`)
- Division (`/`)

### Key Features:
1. **Dynamic Calculation Chain**: Each function in the chain uses the result of the previous function as its input.
2. **Output Display**: The result from the final function in the sequence is displayed in an output container.
3. **Validation**: Only supported operators (`+`, `-`, `*`, `/`) are allowed in equations, ensuring error-free calculations.

This project showcases:
- Modular and reusable components.
- Real-time calculation updates.
- Validation for equation integrity.

---

## Technologies Used
- **React.js**: For building the user interface.
- **CSS**: For styling the application.
- **JavaScript**: For equation parsing and calculations.

---

## How to Use
1. Input a number in the provided input field.
2. The app processes the number through the defined series of functions.
3. View the result in the output container.

---

## Folder Structure
```plaintext
src/
├── components/
│   ├── Circle/
│   │   ├── Circle.tsx         # Component for rendering a circle
│   │   └── Circle.css         # Styles for the circle component
│   ├── Function/
│   │   ├── Function.tsx       # Component defining a single function
│   │   └── Function.css       # Styles for the function component
│   ├── DynamicCurve/
│   │   ├── DynamicCurve.tsx   # Component for rendering dynamic curves
│   │   └── DynamicCurve.css   # Styles for the dynamic curve component
│   ├── Input/
│   │   ├── Input.tsx          # Component for user input
│   │   └── Input.css          # Styles for the input component
│   └── Output/
│       ├── Output.tsx         # Component for displaying the output
│       └── Output.css         # Styles for the output component
├── constants/
│   └── equationRegex.tsx      # Regular expressions for validating equations
├── utility/
│   └── data.tsx               # Shared utility data or functions
├── App.tsx                    # Main application logic
├── index.tsx                  # Application entry point
└── styles/
    └── global.css             # Global styles (if applicable)


# Calculator Application

This project is a React-based calculator application built to demonstrate the usage of React for implementing functional components and managing state. Below are the guidelines to set up and run the project on your local machine.

## Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v14 or later is recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) for package management

## Steps to Run the Project

### 1. Clone the Repository

```bash
git clone https://github.com/prajjwalhacker/calculator-application.git
```

### 2. Navigate to the Project Directory

```bash
cd calculator-application
```

### 3. Install Dependencies

Using npm:
```bash
npm install
```

Or using yarn:
```bash
yarn install
```

### 4. Start the Development Server

Using npm:
```bash
npm start
```

Or using yarn:
```bash
yarn start
```

This will start the application and open it in your default web browser. If it doesn't, navigate to [http://localhost:3000](http://localhost:3000) manually.

### 5. Build for Production

To create an optimized production build, run:

Using npm:
```bash
npm run build
```

Or using yarn:
```bash
yarn build
```

The production-ready files will be in the `dist/` directory.



