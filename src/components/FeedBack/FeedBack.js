import React from "react";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import Notification from "../Notification/Notification";
import Section from "../Section/Section";
import Statistics from "../Statistics/Statistics";

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  options = ["Good", "Neutral", "Bad"];

  addFeed = e => {
    this.setState(prevState => ({
      [e.target.name]: prevState[e.target.name] + 1
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions options={this.options} onLeaveFeedback={this.addFeed} />
        </Section>

        <Section title="Statistics">
          {good + neutral + bad > 0 ? (
            <Statistics good={good} neutral={neutral} bad={bad} />
          ) : (
            <Notification title="No feedback given!" />
          )}
        </Section>
      </>
    );
  }
}

export default Feedback;
