import React from "react";
import "./StatusPopup.css";
import success from "../../images/tick-circle.svg";
import error from "../../images/cross-circle.svg";

function StatusPopup({
  statusMessage,
  statusImage,
  statusPopupOpen,
  setStatusPopupOpen,
}) {
  const imageSrc = statusImage ? success : error;

  const handleClosePopup = () => {
    setStatusPopupOpen(false);
  };

  return (
    <div className={`popup ${statusPopupOpen ? "popup_open" : ""}`}>
      <div className="popup__overlay"></div>
      <div className="popup__content">
        <button
          className="popup__btn-close"
          onClick={handleClosePopup}
        ></button>
        <img className="popup__image" src={imageSrc} alt="Статус запроса" />
        <p className="popup__message">{statusMessage}</p>
      </div>
    </div>
  );
}

export default StatusPopup;
