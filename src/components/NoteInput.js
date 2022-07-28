import React from 'react';

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
    };

    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onInputChangeHandler = this.onInputChangeHandler.bind(this);
  }

  onInputChangeHandler(e) {
    this.setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  onSubmitHandler(e) {
    e.preventDefault();
    this.props.onAddNote(this.state);
    this.setState({
      title: '',
      body: '',
    });
  }

  render() {
    return (
      <div className="note-input">
        <h2>Catatan Baru</h2>
        <form onSubmit={this.onSubmitHandler}>
          <p className="note-input__title__char-limit">
            {`Sisa karakter: ${50 - this.state.title.length}`}
          </p>
          <input className="note-input__title" type="text" name="title"
            placeholder="Judul catatan" value={this.state.title}
            onChange={this.onInputChangeHandler} required />
          <textarea className="note-input__body" type="text" name="body"
            placeholder="Isi catatan" value={this.state.body}
            onChange={this.onInputChangeHandler} required />
          <button type="submit">Tambah</button>
        </form>
      </div>
    );
  }
}

export default NoteInput;
