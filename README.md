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
