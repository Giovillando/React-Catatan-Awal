import React from "react";

function ArchiveButton({ onClick, id, archived }) {
  return (
    <div className="contact-item__archive">
      <button onClick={() => onClick(id)}>
        {archived ? "Kembalikan dari Arsip" : "Arsipkan"}
      </button>
    </div>
  );
}

export default ArchiveButton;
