import React from "react";

function ArchiveButton({ note, onArchive }){
    return (
        <button className="note-item__archive-button" onClick={() => onArchive(note.id)}>
            {note.archived === false ? "Archive" : "Pindahkan"}
        </button>
    
    );
}

export default ArchiveButton;