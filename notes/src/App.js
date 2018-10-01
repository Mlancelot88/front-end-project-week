import React, { Component } from "react";
import "./App.css";
import Menu from "./Components/Menu";
import NewNote from "./Components/NewNote";
import NoteList from "./Components/NoteList";
import { Route } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      notetitle: "",
      notebdy: "",
      id: null
    };
  }

  inputHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitNote = () => {
    let each = this.state.notes[this.state.notes.length - 1].id;
    this.setState({ id: each }, () => {
      let notes = this.state.notes.slice();
      let id = this.state.id;
      if (this.state.eachtitle !== "" || this.state.eachbody !== "") {
        id++;
        notes.push({
          id: id,
          title: this.state.eachtitle,
          text: this.state.eachbody
        });
        this.setState({ notes, eachtitle: "", eachbody: "", id });
      }
    });
  };

  render() {
    return (
      <div className="App">
        <Menu />
        <Route
          exact
          path="/"
          render={props => <NoteList {...props} notes={this.state.notes} />}
        />
        <Route
          exact
          path="/newnote"
          render={props => (
            <NewNote
              {...props}
              inputHandler={this.inputHandler}
              submitNote={this.submitNote}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
