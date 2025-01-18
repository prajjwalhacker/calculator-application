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
│   │   ├── Circle.tsx      # Component for rendering a circle
│   │   └── Circle.css      # Styles for the circle component
│   ├── Function/
│   │   ├── Function.tsx    # Component for defining a single function
│   │   └── Function.css    # Styles for the function component
│   ├── DynamicCurve/
│   │   ├── DynamicCurve.tsx # Component for rendering dynamic curves
│   │   └── DynamicCurve.css # Styles for the dynamic curve component
│   ├── Input/
│   │   ├── Input.tsx       # Component for user input
│   │   └── Input.css       # Styles for the input component
│   └── Output/
│       ├── Output.tsx      # Component for displaying the output
│       └── Output.css      # Styles for the output component
├── App.tsx                 # Main application logic
├── index.tsx               # Application entry point
└── styles/
    └── global.css          # Global styles (if any)

