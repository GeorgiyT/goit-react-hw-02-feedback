import React from "react";
import PropTypes from "prop-types";
import style from "./Statistics.module.css";

const Statistics = ({ good, neutral, bad }) => {
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => Math.round((good * 100) / countTotalFeedback());

  return (
    <div className={style.text}>
      <p className={style.text__good}>
        Good: <span>{good}</span>
      </p>
      <p>
        Neutral: <span>{neutral}</span>
      </p>
      <p className={style.text__bad}>
        Bad: <span>{bad}</span>
      </p>
      <p>
        Total: <span>{countTotalFeedback()}</span>
      </p>
      <p>
        Positive Feedback: <span> {countPositiveFeedbackPercentage()}</span>
      </p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired
};

export default Statistics;
