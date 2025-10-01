1. JSX is a syntax used in React that looks like HTML but works in JavaScript.
 it’s used:
a.Makes writing React components easier and more readable.
b.Lets you mix HTML-like code with JavaScript.
c.React converts JSX into normal JavaScript that the browser can understand.


2. a.Props are used to pass data from parent to child components. State is used to store local data inside a component.
b.Props are read-only and cannot be changed by the component itself. State is mutable and can be updated using setState or useState.
c.Props make components reusable by giving them dynamic data. State makes components interactive because it can change over time.


3.useState is a React hook to store data in a component.

It gives two things: the current value and a function to update it.
Example: const [count, setCount] = useState(0);
count is the value, setCount updates it.
When you update the state, the component re-renders automatically.
It’s used to make components interactive.


4.To share state between components, you lift the state up to their common parent.
The parent stores the state using useState.
The parent passes the state and update function as props to child components.
Children can read the state or update it by calling the parent’s function.
This way, multiple components can use the same state.


5.React uses camelCase for event names onClick, onChange.
You pass a function to handle the event, not a string.
Example: <button onClick={handleClick}>Click Me</button>
Event handling in React is similar to HTML but uses JSX syntax and functions.
