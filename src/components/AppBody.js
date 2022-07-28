import React from 'react';
import NoteInput from './NoteInput';
import NotesList from './NotesList';

function AppBody({notes, onDelete, onArchive, onAddNote}) {
  return (
    <div className="note-app__body">
      <NoteInput onAddNote={onAddNote} />
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
