import React, { Component, PropTypes } from 'react'
import moment from 'moment';
import DayPicker, { DateUtils } from "react-day-picker";
import 'react-day-picker/lib/style.css';

export default class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.handleDayMouseEnter = this.handleDayMouseEnter.bind(this);
    this.reset = this.reset.bind(this)
  }
  state = {
    isSelectingLastDay: false,
    from: null,
    to: null,
  };

  handleDayClick(e, day) {

    const { from, isSelectingLastDay } = this.state;
    if (!isSelectingLastDay) {
      this.setState({
        isSelectingLastDay: true,
        from: day,
        to: null,
      });
    }
    if (isSelectingLastDay && from && day < from) {
      this.setState({
        from: day,
        to: null,
      });
    }
    if (isSelectingLastDay && DateUtils.isSameDay(day, from)) {
      this.reset();
    }
    if (isSelectingLastDay) {

      this.setState({
        isSelectingLastDay: false,
      });
    }


    if ((this.state.from != null) && (this.state.from != null)) {
      console.log('Выбранный интервал: ' + moment(this.state.from).format('L') + ' : ' + moment(this.state.to).format('L'));
    }
  }

  handleDayMouseEnter(e, day) {
    const { isSelectingLastDay, from } = this.state;
    if (!isSelectingLastDay || (from && day < from) || DateUtils.isSameDay(day, from)) {
      return;
    }
    this.setState({
      to: day,
    });
  }

  reset() {
    this.setState({
      from: null,
      to: null,
      isSelectingLastDay: false,
    });
  }


  render() {
    const { from, to } = this.state;
    return (
        <div>
          <DayPicker
              className="Range"
              ref="daypicker"
              fromMonth={ from }
              selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
              modifiers={ {
                from: day => DateUtils.isSameDay(day, from),
                to: day => DateUtils.isSameDay(day, to),
              } }
              onDayClick={ this.handleDayClick }
              onDayMouseEnter={ this.handleDayMouseEnter }
          />
        </div>
    );
  }

}