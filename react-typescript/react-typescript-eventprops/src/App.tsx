import "./App.css";
import Button from "./components/Button";
import Container from "./components/Container";
import Input from "./components/Input";

function App() {
  return (
    <div className="App">
      <Button handleClick={(event, id) => console.log("CLICKED", event, id)} />
      <Input
        handleChange={(event) => console.log("INPUT CHANGE", event)}
        value=""
      />
      <Container styles={{ border: "1px solid black", padding: "1px" }} />
    </div>
  );
}

export default App;
