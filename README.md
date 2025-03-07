# React Component Library

This project is a React Component Library that provides reusable components for building React applications.

## Installation

To install the library, run:

```bash
npm install react-component-library
```

## Usage

To use a component from the library, import it into your React application:

```jsx
import { ComponentName } from "react-component-library";

function App() {
  return (
    <div>
      <ComponentName />
    </div>
  );
}

export default App;
```

## Components

### Button

A customizable button component.

**Props:**

- `label` (string): The text to display on the button.
- `onClick` (function): The function to call when the button is clicked.

### Input

A customizable input component.

**Props:**

- `value` (string): The value of the input.
- `onChange` (function): The function to call when the input value changes.

## Contributing

Contributions are welcome! Please read the [contributing guidelines](CONTRIBUTING.md) first.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
