import React, { useState } from "react";
import Canvas from "../Canvas/Canvas";
import "./User.css";

function User() {
  const [playerA, setPlayerA] = React.useState<string>("X");
  const [playerB, setPlayerB] = React.useState<string>("O");
  const [val, setVal] = React.useState<boolean>(false);

  let audioClick = new Audio("/click.mp3");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setVal(true);
    audioClick.play();
  };

  return (
    <div className="User">
      {val == false ? (
        <>
          <form id="form" onSubmit={handleSubmit}>
            <label className="input">
              Player A:
              <input
                type="text"
                name="name"
                id="in"
                placeholder="X"
                onChange={(event) => {
                  setPlayerA(event.target.value);
                }}
                autoFocus
              />
            </label>
            <br />
            <label className="input">
              Player B:
              <input
                type="text"
                name="name"
                id="in"
                placeholder="O"
                onChange={(event) => {
                  setPlayerB(event.target.value);
                }}
              />
            </label>

            <input id="btn-2" type="submit" value="Play!!" />
          </form>
        </>
      ) : (
        <>
          <Canvas x={playerA} y={playerB} />
        </>
      )}
    </div>
  );
}

export default User;
