### React.StrictMode

Activates additional checks and warnings , works only in development not in production

Runs twice in development mode

### App.css

Whatever logic is added to app.css will be added after index.css (It overrides the index.css)

Basically Its not scope to certain components

### Why Vite ?

(Vite)[https://vitejs.dev/]

```sh
npm create vite@latest app-name -- --template react
npm install
npm run dev

```

http://localhost:5173/

### Vite Setup

need to use .jsx extension(which is optional in normal react)

index.html in the source instead of public

assets still in public

instead of index.js, need to use main.jsx

to spin up dev server - "npm run dev"

rest the same - imports/exports, deployment, assets, etc...

on build , dist folder is created instead of the build folder like in react

### Advanced React

Need for state ?

- Value doesnt update with vanilla js logic as component does not re render

returns an array with two elements: the current state value and a function that we can use to update the state
-accepts default value as an argument
-state update triggers re-render

### Initial Render and Re-Renders

When application loads initial render takes place

coming to re render , they happen to change when component's state or props change

### General rules of hooks

-They need to start with "use"
-Component Must be Uppercase
-Dont call hooks Conditionally
-dont setup hooks in if() conditions
-Set functions dont updtate state immediately
-Invoke inside function/component body

### auto batching

-Even though we have 3 handler functions its gonna create only onr re-render

-Value in log is one less than the value on screen.

-The actual state update will be performed as part of the next rendering cycle. Be mindful when you need to set state value based on a different state value.

- To solve this we must us a function

```js
const handleClick = () => {
  setValue((currentState) => {
    const newState = currentState + 1;
    return newState;
  });
};
```

### Use Effect

it allows you to perform side effects in function components

Eg: Subscriptions , fetching data ,e vent listners , timers etc.

- useEffect hook
- accepts two arguments (second optional)
- first argument - cb function
- second argument - dependency array
- by default runs on each render (initial and re-render)
- cb can't return promise (so can't make it async)
- if dependency array empty [] runs only on initial render

### Fetch Data

```js
import { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const FetchData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // you can also setup function outside
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const users = await response.json();
        setUsers(users);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <section>
      <h3>github users</h3>
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h5>{login}</h5>
                <a href={html_url}>profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default FetchData;
```

Data Fetching :

- usually three options

  - loading - waiting for data to arrive (display loading state)
  - error - there was an error (display error message)
  - success - received data (display data)

- DON'T ADD fetchData to dependency array !!!
- IT WILL TRIGGER INFINITE LOOP !!!

## Truthy and Falsy Values

In JavaScript, a value is considered "truthy" if it is evaluated to true when used in a boolean context. A value is considered "falsy" if it is evaluated to false when used in a boolean context.

Here is a list of values that are considered falsy in JavaScript:

false
0 (zero)
"" (empty string)
null
undefined
NaN (Not a Number)
All other values, including objects and arrays, are considered truthy.

## Short Circuit Evaluation

In JavaScript, short-circuit evaluation is a technique that allows you to use logical operators (such as && and ||) to perform conditional evaluations in a concise way.

The && operator (logical AND) returns the first operand if it is "falsy", or the second operand if the first operand is "truthy".

For example:

```js
const x = 0;
const y = 1;

console.log(x && y); // Output: 0 (the first operand is falsy, so it is returned)
console.log(y && x); // Output: 0 (the second operand is falsy, so it is returned)
```

The || operator (logical OR) returns the first operand if it is "truthy", or the second operand if the first operand is "falsy".

For example:
f

```js
const x = 0;
const y = 1;

console.log(x || y); // Output: 1 (the first operand is falsy, so the second operand is returned)
console.log(y || x); // Output: 1 (the first operand is truthy, so it is returned)
```

## Logical Operator

The ! operator is a logical operator in JavaScript that negates a boolean value. It is equivalent to the not operator in other programming languages.

For example:

```js
let isTrue = true;
let isFalse = false;

console.log(!isTrue); // outputs: false
console.log(!isFalse); // outputs: true
```

You can use the ! operator to test if a value is not truthy or falsy:

## Ternary Operator

Vanilla JS

In JavaScript, the ternary operator is a way to concisely express a simple conditional statement. It is often called the "conditional operator" or the "ternary conditional operator".

Here is the basic syntax for using the ternary operator:

```js
condition ? expression1 : expression2;
```

If condition is truthy, the operator will return expression1. If condition is falsy, it will return expression2.

-Use effect doesnt work in conditional statements , it renders everytime

## You Might Not Need an Effect

[You Might Not Need an Effect](https://beta.reactjs.org/learn/you-might-not-need-an-effect)

- will still utilize useEffect
- there is still plenty of code using useEffect

- fetching data
  replaced by libraries - react query, rtk query, swr or next.js

## Use Ref

- lot like use state , preserves values between renders but does not trigger re render like when we use with usestate.

## Custom Hooks

- same rules as regular hooks
- reuse functionality
- re-use functionality

## Rules for custom hooks

- must be named with "use" prefix and capitalized first letter (e.g., `useFriendStatus`)
- cannot call other hooks inside them
- should return values from React state variables

- data:user .....This means i want to call this user only in the particular component

## Use Reducer Hook

- can call this anything doesnt need to be reducer only

## Performance

When Component Re-Renders :

- When the component's state or props change, React will re-render the component to reflect these changes.

- When the parent element re-renders, even if the component's state or props have not changed.

- React.memo(Component) - returns memoized component
