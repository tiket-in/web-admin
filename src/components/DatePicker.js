import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class TimePicker extends React.Component {
  
  render() {
    return (
      <DatePicker
        selected={this.props.startDate}
        onChange={this.props.handleChange}
      />
    );
  }
}

export default TimePicker;