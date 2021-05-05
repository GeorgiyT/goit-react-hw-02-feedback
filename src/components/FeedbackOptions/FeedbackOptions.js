import React from "react";

const FeedbackOptions = ({ options: { first, second, third }, onLeaveFeedback: { funcFirst, funcSecond, funcThird } }) => {
  return (
    <>
      <button type="button" onClick={funcFirst}>
        {first}
      </button>
      <button type="button" onClick={funcSecond}>
        {second}
      </button>
      <button type="button" onClick={funcThird}>
        {third}
      </button>
    </>
  );
};

export default FeedbackOptions;
