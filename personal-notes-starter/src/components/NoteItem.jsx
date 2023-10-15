import React from "react";
import NoteItemContent from "./NoteItemContent";
import NoteItemAction from "./NoteItemAction";

function NoteItem({ note, onDelete, onArchive }){
    return (
        <div className="note-item">
            <NoteItemContent note={note}/>
            <NoteItemAction onDelete={onDelete} note={note} onArchive={onArchive} />
        </div>
    )
}

export default NoteItem;