import React from "react";
import { showFormattedDate } from "../utils";

function NoteItemContent({ note }){
    return (
        <div className="note-item__content">
            <h3 className="note-item__title">{note.title}</h3>
            <p className="note-item__date">{showFormattedDate(note.createdAt)}</p>
            <p className="note-item__body">{note.body}</p>
        </div>
    );
}

export default NoteItemContent;