import React from "react";

class ContactInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "", // Menambah state body
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this); // Mengubah nama method
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this); // Menambah method untuk body
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState({
      title: event.target.value,
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState({
      body: event.target.value, // Mengubah state body sesuai dengan input pengguna
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addContact({
      // Menggunakan properti title dan body
      title: this.state.title,
      body: this.state.body,
    });
    this.setState({
      title: "",
      body: "", // Mengosongkan input body setelah submit
    });
  }

  render() {
    return (
      <div>
        <form className="contact-input" onSubmit={this.onSubmitEventHandler}>
          <div className="title">
            <input
              type="text"
              placeholder="Ini adalah judul ..."
              value={this.state.title}
              onChange={this.onTitleChangeEventHandler}
            />
          </div>
          <div className="body">
            {" "}
            {/* Menambahkan input body */}
            <textarea
              placeholder="Tuliskan catatanmu disini ..."
              value={this.state.body}
              onChange={this.onBodyChangeEventHandler}
            />
          </div>
          <button type="submit">Tambah</button>
        </form>
      </div>
    );
  }
}

export default ContactInput;
