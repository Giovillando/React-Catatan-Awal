import React from "react";
import { showFormattedDate } from "../utils/data";

function ContactItemBody({ title, body, createdAt }) {
  return (
    <div className="contact-item__body">
      <h3 className="contact-item__title">{title}</h3>
      <p className="contact-item__username">{body}</p>
      <p className="contact-item__date">{showFormattedDate(createdAt)}</p>
    </div>
  );
}

export default ContactItemBody;
