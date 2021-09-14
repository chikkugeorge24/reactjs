import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";

function App() {
  const person = {
    first: "firstName",
    last: "lastName",
  };

  const personList = [
    {
      first: "John",
      last: "Mathew",
    },
    {
      first: "Chikku",
      last: "George",
    },
  ];
  return (
    <div className="App">
      <Greet name="Chikku" messageCount={10} isloggedIn={true} />
      <Person name={person} />
      <PersonList names={personList} />
    </div>
  );
}

export default App;
