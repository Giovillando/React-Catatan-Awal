import React from "react";
import ContactList from "./ContactList";
import { getInitialData } from "../utils/data"; // Perubahan pada import data
import ContactInput from "./ContactInput";

class ContactApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: getInitialData(), // Menggunakan getInitialData() untuk mendapatkan data awal
      searchKeyword: "",
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddContactHandler = this.onAddContactHandler.bind(this);
    this.onSearchChangeHandler = this.onSearchChangeHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
  }

  onDeleteHandler(id) {
    const contacts = this.state.contacts.filter((contact) => contact.id !== id);
    this.setState({ contacts });
  }

  onAddContactHandler({ title, body }) {
    // Mengubah dari name dan tag menjadi title dan body
    this.setState((prevState) => {
      return {
        contacts: [
          ...prevState.contacts,
          {
            id: +new Date(),
            title, // Menggunakan properti title
            body, // Menggunakan properti body
            createdAt: new Date().toISOString(), // Menambah properti createdAt
            archived: false,
          },
        ],
      };
    });
  }

  onSearchChangeHandler(event) {
    this.setState({ searchKeyword: event.target.value });
  }

  onArchiveHandler(id) {
    const updatedContacts = this.state.contacts.map((contact) => {
      if (contact.id === id) {
        return { ...contact, archived: !contact.archived };
      }
      return contact;
    });
    const activeContacts = updatedContacts.filter(
      (contact) => !contact.archived
    );
    const archivedContacts = updatedContacts.filter(
      (contact) => contact.archived
    );

    this.setState({
      contacts: updatedContacts,
      activeContacts: activeContacts, // Hapus karena tidak digunakan
      archivedContacts: archivedContacts, // Hapus karena tidak digunakan
    });
  }

  render() {
    const filteredContacts = this.state.contacts.filter(
      (contact) =>
        contact.title &&
        contact.title // Menambahkan pengecekan title agar tidak null atau undefined
          .toLowerCase()
          .includes(this.state.searchKeyword.toLowerCase())
    );

    return (
      <div className="contact-app">
        <h1>Buat Catatan</h1>
        <div className="search">
          <input
            type="text"
            placeholder="Cari catatan..."
            value={this.state.searchKeyword}
            onChange={this.onSearchChangeHandler}
          />
        </div>
        <ContactInput addContact={this.onAddContactHandler} />

        <h2>Catatan Aktif</h2>
        {filteredContacts.length > 0 ? (
          <ContactList
            contacts={filteredContacts}
            onDelete={this.onDeleteHandler}
            onArchive={this.onArchiveHandler}
          />
        ) : (
          <p>Tidak ada catatan.</p>
        )}
      </div>
    );
  }
}

export default ContactApp;
