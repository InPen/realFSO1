import React from "react";


const Button = ({handleClick, text}) => {
    return(
        <button onClick={handleClick}>
            {text}
        </button>
    )
}

const Feedback = () => {
    return (
      <div>
        <h1>Give Feedback</h1>
        <Button handleClick={() => console.log("clicked")} text="Good" />
        <Button handleClick={() => console.log("clicked")} text="Neutral" />
        <Button handleClick={() => console.log("clicked")} text="Bad" />
      </div>
    );
}

export default Feedback;