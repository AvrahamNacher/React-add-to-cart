import App from './App'
<App check={1} />



//////////////////// in App.jsx ///////////////////
export default function App(props) {
  {props.check}
}

// can also destruct the parameter received by the function
export default function App(check) {
  {check}
}

////////////////////////////////////
///////////////////////////////////
// What about accessing a state in a function?
/// useState



///////////////////////////////////
/// component updated 3 times
// 1. first render
// 2. when update in component state value
// 3. when prop received from parent changes


// Every time the parent re-renders,
// by default, all of the children re-render as well.
// But if there is no need to re-render the child,
// you can tell the child conditions to limit when it re-renders


// useState - only allows us to update the value of the variable
// useEffect - allows us to perform multiple commands in addition to
// updating the value of the 'state' variable
// useEffect - automatically runs every time there is an update to the state