import React from 'react';
import {getInitialData} from '../utils';
import AppBody from './AppBody';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onAddHandler = this.onAddHandler.bind(this);
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

  render() {
    return (
      <div className="App">
        <AppBody notes={this.state.notes}
          onDelete={this.onDeleteHandler}
          onArchive={this.onArchiveHandler}
          onAddNote={this.onAddHandler}/>
      </div>
    );
  }
}

export default App;
