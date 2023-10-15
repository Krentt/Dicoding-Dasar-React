import React from "react";

class NoteSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    const newTitle = event.target.value;
    this.setState({
      title: newTitle,
    });
    this.props.searchNote({ title: newTitle });
  }

  render() {
    return (
      <div className="note-search">
        <input
          type="text"
          placeholder="Cari notes..."
          value={this.state.title}
          onChange={this.onTitleChangeEventHandler}
        />
      </div>
    );
  }
}

export default NoteSearch;