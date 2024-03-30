import React from "react";
import ContactItemBody from "./ContactItemBody";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchiveButton";
import { showFormattedDate } from "../utils/data";

function ContactItem({
  imageUrl,
  title,
  body,
  createdAt,
  id,
  onDelete,
  onArchive,
  archived,
}) {
  return (
    <div className="contact-item">
      <ContactItemBody title={title} body={body} createdAt={createdAt} />
      <ArchiveButton id={id} onClick={onArchive} archived={archived} />
      <DeleteButton id={id} onDelete={onDelete} />
    </div>
  );
}

export default ContactItem;
