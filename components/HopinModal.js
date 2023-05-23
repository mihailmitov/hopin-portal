import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const HopinModal = ({ show, title, onClose, children }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleClose = (e) => {
    e.preventDefault();
    console.log("🚀🚀🚀🚀🚀🚀 ~ handleClose ~");
    onClose();
  };
  // const hopinSrc = 'https://registration.hopin.com/widgets/registration/11_30_test_10_5_2023?widget_id=aCAKiC6FSQhdA63QObpJRk5B5' + window.location.search.replace('?', '&');
  const hopinSrc = 'https://registration.hopin.com/widgets/registration/11_30_test_10_5_2023?widget_id=aCAKiC6FSQhdA63QObpJRk5B5'

  const modalContent = show ? (
    <div className="fooclass">
      <button
        className="font-4xl bg-blue-500 p-6 text-green-500"
        onClick={handleClose}
      >
        Close
      </button>
      <p className="font-4xl bg-white p-6 text-green-500">{title}</p>
      {/* <div className="overflow-hidden pt-[500px] relative w-screen h-screen">
        <iframe
          className="absolute left-0 top-0 h-full w-full border-0"
          src="https://registration.hopin.com/widgets/registration/11_30_test_10_5_2023?widget_id=aCAKiC6FSQhdA63QObpJRk5B5"
        ></iframe>
      </div> */}
      <div id="aCAKiC6FSQhdA63QObpJRk5B5" class="hopin-container">
      <iframe
          className="absolute left-0 top-0 h-full w-full border-0"
          src={hopinSrc}
        ></iframe>
      </div>
      <div>{children}</div>
    </div>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  }

  return null;
};

export default HopinModal;
