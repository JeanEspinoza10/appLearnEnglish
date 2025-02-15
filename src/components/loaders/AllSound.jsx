import React from "react";

export const AllSound = ({ onClose, soundBase64 }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h3>All Phrases Sounds</h3> 
          <audio
          src={`data:audio/mp3;base64,${soundBase64}`}
          controls
          >
          </audio>
        </div>
        <button onClick={() => onClose(false)} className="modal-button">
          Back
        </button>
      </div>
    </div>
  );
};
