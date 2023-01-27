import React, { useEffect, useState } from "react";
import "./Modal.css";

type ModalProps = {
  winner: any;
};

function Modal(props: ModalProps) {
  const [audioCheer] = useState(new Audio("/cheer.mp3"));
  const [active, setActive] = React.useState<boolean>(true);
  const [play, setPlay] = React.useState<boolean>(true);

  useEffect(() => {
    play ? audioCheer.play() : audioCheer.pause();
  }, [play]);

  function closeModal() {
    setPlay(false);
    setActive(false);
  }

  return (
    <div>
      {active ? (
        <>
          <div className="overlay">
            <div className="modal">
              {props.winner == "Draw!" ? (
                <>Oops, Match Draw!!</>
              ) : (
                <>yaayyyyyy! {props.winner} wins. 🥳🥳</>
              )}

              <br />
              <button id="bt" onClick={closeModal}>
                Go back!
              </button>
            </div>
          </div>
        </>
      ) : (
        <>{audioCheer.pause()}</>
      )}
    </div>
  );
}

export default Modal;
