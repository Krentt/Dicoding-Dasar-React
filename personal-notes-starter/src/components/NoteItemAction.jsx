import React from "react";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchieveButton";

function NoteItemAction({ onDelete, note, onArchive }){
    return(
        <div className="note-item__action">
            <DeleteButton id={note.id} onDelete={onDelete}/>
            <ArchiveButton note={note} onArchive={onArchive}/>
        </div>
    );
}

export default NoteItemAction;