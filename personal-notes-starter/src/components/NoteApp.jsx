import React from "react";
import { getInitialData } from "../utils";
import NoteAppHeader from "./NoteAppHeader";
import NoteAppBody from "./NoteAppBody";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      filteredNotes: getInitialData(),
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onSearchNoteHandler = this.onSearchNoteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
  }

  onDeleteHandler(id) {
    this.setState((prevState) => { 
        return {
            notes: prevState.notes.filter(note => note.id !== id),
            filteredNotes: prevState.filteredNotes.filter(note => note.id !== id),
        }
     });
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date(),
            archived: false,
          },
        ],
        filteredNotes: [
          ...prevState.filteredNotes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date(),
            archived: false,
          },
        ],
      };
    });
  }

  onSearchNoteHandler({ title }) {
    const filteredNotes = this.state.notes.filter((note) =>
      note.title.toLowerCase().includes(title.toLowerCase())
    );

    this.setState({
      filteredNotes: filteredNotes,
    });
  }

  onArchiveHandler(id) {
    this.setState((prevState) => {
      const updatedNotes = prevState.notes.map((note) => {
        if (note.id === id) {
            return { ...note, archived: !note.archived };
        }
        return note;
      });

      return {
        notes: updatedNotes,
        filteredNotes: updatedNotes,
      };
    });
  }

  render() {
    return (
      <div className="note-app">
        <NoteAppHeader searchNote={this.onSearchNoteHandler} />
        <NoteAppBody
          notes={this.state.filteredNotes}
          onDelete={this.onDeleteHandler}
          onArchive={this.onArchiveHandler}
          addNote={this.onAddNoteHandler}
        />
      </div>
    );
  }
}

export default NoteApp;
