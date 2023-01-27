import React from "react";
import "./Square.css";

type SquareProps = {
  onClick?: (() => void) | undefined;
  value: string | null;
};

// const ConsoleLog = ({ children }) => {
//   console.log(children);
//   return false;
// };

function Square(props: SquareProps) {
  // let audioClick = new Audio("/drop.mp3");
  // function Click() {
  //   audioClick.play();
  // }
  return (
    <div>
      <button
        className="square"
        onClick={props.onClick}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // backgroundColor: "white",
        }}
      >
        {/* { ConsoleLog({props.onClick})} */}
        <>
          <h5>{props.value}</h5>
          {/* {Click()} */}
        </>
      </button>
      {/* {console.log(props.onClick)} */}
    </div>
  );
}

export default Square;
