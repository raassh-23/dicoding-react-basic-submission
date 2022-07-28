import React from 'react';

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
    };

    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
    this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
  }

  onTitleChangeHandler(e) {
    this.setState((prevState) => ({
      ...prevState,
      title: e.target.value.slice(0, 50),
    }));
  }

  onBodyChangeHandler(e) {
    this.setState((prevState) => ({
      ...prevState,
      body: e.target.value,
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
          <input className="note-input__title" type="text"
            placeholder="Judul catatan" value={this.state.title}
            onChange={this.onTitleChangeHandler} required />
          <textarea className="note-input__body" type="text"
            placeholder="Isi catatan" value={this.state.body}
            onChange={this.onBodyChangeHandler} required />
          <button type="submit">Tambah</button>
        </form>
      </div>
    );
  }
}

export default NoteInput;
