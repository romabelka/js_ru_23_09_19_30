import React, { Component } from 'react'
import moment from 'moment'
import DayPicker, { DateUtils } from 'react-day-picker'

import 'react-day-picker/lib/style.css'

class DayPickerFilter extends Component {
  state = {
    from: null,
    to: null
  }

  handleDayClick = (e, day) => {
    const range = DateUtils.addDayToRange(day, this.state)
    this.setState(range)
  }
  handleResetClick = e => {
    e.preventDefault()
    this.setState({
      from: null,
      to: null,
    })
  }

  render() {
    const { from, to } = this.state

    return (
      <div>
        <DayPicker
          ref="daypicker"
          numberOfMonths={ 2 }
          selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
          onDayClick={ this.handleDayClick }
        />
        { !from && !to && <p>Please select the <strong>first day</strong>.</p> }
        { from && !to && <p>Please select the <strong>last day</strong>.</p> }
        { from && to &&
        <p>
          You chose from { moment(from).format('L') } to { moment(to).format('L') }.
          { ' ' }<a href="#" onClick={ this.handleResetClick }>Reset</a>
        </p>
        }
      </div>
    )
  }
}

export default DayPickerFilter