import React from 'react';
import SearchBox from './SearchBox';

function AppHeader({onSearchNotes}) {
  return (
    <div className="note-app__header">
      <h1>MyNotes</h1>
      <SearchBox onSearchNotes={onSearchNotes} />
    </div>
  );
}

export default AppHeader;
