import "./App.css";
import CSSTransitionComponent from "./components/CSSTransition";
import TransitionComponent from "./components/Transition";
import TransitionGroupComponent from "./components/TransitionGroup";
function App() {
  return (
    <>
      <TransitionComponent />
      <CSSTransitionComponent />
      <TransitionGroupComponent />
    </>
  );
}

export default App;
