import React from 'react';
import NotesList from './NotesList';

function AppBody({notes, onDelete, onArchive}) {
  return (
    <div className="note-app__body">
      <NotesList title="Catatan Aktif"
        notes={notes.filter((note) => !note.archived)}
        onDelete={onDelete}
        onArchive={onArchive}/>
      <NotesList title="Arsip"
        notes={notes.filter((note) => note.archived)}
        onDelete={onDelete}
        onArchive={onArchive}/>
    </div>
  );
}

export default AppBody;
