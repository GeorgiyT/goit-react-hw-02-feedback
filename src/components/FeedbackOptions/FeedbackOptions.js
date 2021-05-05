import React from "react";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(el => (
        <button key={el} type="button" name={el.toLowerCase()} onClick={onLeaveFeedback}>
          {el}
        </button>
      ))}
    </>
  );
};

export default FeedbackOptions;
