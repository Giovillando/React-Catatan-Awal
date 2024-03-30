import React from "react";
import ContactItem from "./ContactItem";

function ContactList({ contacts, onDelete, onArchive }) {
  return (
    <div className="contact-list">
      {contacts.map((contact) => (
        <ContactItem
          key={contact.id}
          id={contact.id}
          onDelete={onDelete}
          onArchive={onArchive}
          title={contact.title} // Menambah properti title
          body={contact.body} // Menambah properti body
          createdAt={contact.createdAt} // Menambah properti createdAt
          archived={contact.archived}
        />
      ))}
    </div>
  );
}

export default ContactList;
