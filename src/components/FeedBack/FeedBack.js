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

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => Math.round((this.state.good * 100) / this.countTotalFeedback());

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions options={this.options} onLeaveFeedback={this.addFeed} />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification title="No feedback given" />
          )}
        </Section>
      </>
    );
  }
}

export default Feedback;
