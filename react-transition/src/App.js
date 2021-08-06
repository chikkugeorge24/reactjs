import { useState } from "react";
import { Transition } from "react-transition-group";
import "./App.css";

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 }
};

function App() {
  const [showTransition, setShowTransition] = useState(false);
  const transit = () => {
    setShowTransition(!showTransition);
  };
  return (
    <div className="App">
      <button onClick={transit}>CLICK</button>
      <Transition in={showTransition} timeout={duration}>
        {state => (
          <h4 style={{ ...defaultStyle, ...transitionStyles[state] }}>
            I m In
          </h4>
        )}
      </Transition>
    </div>
  );
}

export default App;
