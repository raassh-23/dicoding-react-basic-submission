import React from 'react';

class SearchBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: '',
    };

    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }

  onKeywordChangeHandler(e) {
    this.setState({
      keyword: e.target.value,
    }, () => {
      this.props.onSearchNotes(this.state);
    });
  }

  render() {
    return (
      <div className="note-search">
        <form>
          <input type="text" placeholder="Cari catatan"
            value={this.state.keyword} onChange={this.onKeywordChangeHandler} />
        </form>
      </div>
    );
  }
}

export default SearchBox;
