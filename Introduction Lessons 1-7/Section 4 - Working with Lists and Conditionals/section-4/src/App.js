import React from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends React.Component {
  state = {
    persons: [
      { id: "hjgf", name: "Max", age: 28 },
      { id: "iouy", name: "Manu", age: 28 },
      { id: "nbbvc", name: "Stephanie", age: 26 }
    ],
    otherState: "Some other state",
    showPersons: false
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons
    });
  };

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons;
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)}
                key={person.id}
                changed={event => this.nameChangeHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi I'm React app</h1>
        <p>This is really working</p>
        <button onClick={this.togglePersonsHandler} style={style}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
