import React from "react";
import './createsucces.css'
export const CreateSucces = ({ onClose, phrase }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
            <h3>¡Éxito!</h3>
            <p>Frase: {phrase}</p>
        </div>
        <button onClick={() => onClose(false)} className="modal-button">
          Back
        </button>
      </div>
    </div>
  );
};
