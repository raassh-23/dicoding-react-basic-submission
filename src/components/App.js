import React from 'react';
import {getInitialData} from '../utils';
import AppBody from './AppBody';
import AppHeader from './AppHeader';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      keyword: '',
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onAddHandler = this.onAddHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  onDeleteHandler(id) {
    this.setState((prevState) => ({
      notes: prevState.notes.filter((note) => note.id !== id),
    }));
  }

  onArchiveHandler(id) {
    this.setState((prevState) => ({
      notes: prevState.notes.map((note) => {
        if (note.id === id) {
          note.archived = !note.archived;
        }

        return note;
      }),
    }));
  }

  onAddHandler({title, body}) {
    const createdAt = new Date();

    this.setState((prevState) => ({
      notes: [...prevState.notes, {
        id: +createdAt,
        title,
        body,
        createdAt: createdAt.toISOString(),
        archived: false,
      }],
    }));
  }

  onSearchHandler({keyword}) {
    this.setState((prevState) => ({
      ...prevState,
      keyword,
    }));
  }

  render() {
    return (
      <div className="App">
        <AppHeader onSearchNotes={this.onSearchHandler} />
        <AppBody notes={this.state.keyword.length === 0 ?
          this.state.notes :
          this.state.notes.filter(
              (note) => note.title.toLowerCase()
                  .includes(this.state.keyword.toLowerCase()),
          )}
        onDelete={this.onDeleteHandler}
        onArchive={this.onArchiveHandler}
        onAddNote={this.onAddHandler}/>
      </div>
    );
  }
}

export default App;
