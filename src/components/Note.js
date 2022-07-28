import React from 'react';
import {showFormattedDate} from '../utils';
import Button from './Button';

function Note({id, title, body, createdAt, archived,
  onDelete, onArchive}) {
  return (
    <div className="note-item">
      <div className="note-item__content">
        <h3 className="note-item__title">{title}</h3>
        <p className="note-item__date">{showFormattedDate(createdAt)}</p>
        <p className="note-item__body">{body}</p>
      </div>
      <div className="note-item__action">
        <Button text="Delete"
          buttonClass="note-item__delete-button"
          onClick={onDelete}
          id={id} />
        <Button text={archived ? 'Pindahkan' : 'Arsipkan'}
          buttonClass="note-item__archive-button"
          onClick={onArchive}
          id={id} />
      </div>
    </div>
  );
}

export default Note;
