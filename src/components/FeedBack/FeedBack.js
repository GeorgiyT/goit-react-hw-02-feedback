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

  addGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1
    }));
  };

  addNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1
    }));
  };

  addBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1
    }));
  };

  countTotalFeedback = () => {
    // let vasdf = this.setState(prevState => {
    //   return prevState.good + prevState.neutral + prevState.bad;
    // });

    return this.state.good + this.state.neutral + this.state.bad;

    // console.log(vasdf);
    // return vasdf;
  };

  countPositiveFeedbackPercentage = () => Math.round((this.state.good * 100) / this.countTotalFeedback());

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={{ first: "Good", second: "Neutral", third: "Bad" }}
            onLeaveFeedback={{ funcFirst: this.addGood, funcSecond: this.addNeutral, funcThird: this.addBad }}
          />
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
