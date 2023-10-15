import React from "react";

class NoteInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: '',
            titleLength: 0,
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event){
        this.setState(() => {
            if (event.target.value.length <= 50){
                return {
                    title: event.target.value,
                    titleLength: event.target.value.length
                }
            }
        });
    }

    onBodyChangeEventHandler(event){
        this.setState(() => {
            return {
                body: event.target.value,
            }
        })
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
        this.setState({
            title: '',
            body: '',
        });
    }

    render() {
        return (
            <form className="note-input" onSubmit={this.onSubmitEventHandler}>
                <h2>Buat Catatan</h2>
                <p className="note-input__title__char-limit">Sisa karakter: {50 - this.state.titleLength}</p>
                <input type="text" className="note-input__title" placeholder="Ini adalah judul..." value={this.state.title} onChange={this.onTitleChangeEventHandler}></input>
                <textarea className="note-input__body" placeholder="Tuiskan catatanmu di sini..." value={this.state.body} onChange={this.onBodyChangeEventHandler}></textarea>
                <button type="submit">Buat</button>
            </form>
        )
    }
}

export default NoteInput;