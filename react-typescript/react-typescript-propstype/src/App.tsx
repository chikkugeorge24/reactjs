import "./App.css";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";

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
      <Status status="loading" />
      <Heading>PlaceHolder Text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicaprio</Heading>
      </Oscar>
    </div>
  );
}

export default App;
