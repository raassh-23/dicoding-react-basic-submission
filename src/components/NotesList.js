import React from 'react';
import Note from './Note';

function NotesList({title, notes, onDelete, onArchive}) {
  return (
    <React.Fragment>
      <h2>{title}</h2>
      {notes.length > 0 ? (
        <div className="notes-list">
          {notes.map((note) => (
            <Note key={note.id} {...note}
              onDelete={onDelete} onArchive={onArchive} />
          ))}
        </div>) : (
        <p className='notes-list__empty-message'>Tidak ada catatan</p>
      )}
    </React.Fragment>
  );
}

export default NotesList;
