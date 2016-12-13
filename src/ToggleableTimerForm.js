import React from 'react';
import TimerForm from './TimerForm';

class ToggleableTimerForm extends React.Component {

  state = {
    isOpen: false
  };

  handleFormOpen() {
    this.setState({ isOpen: true });
  }

  render() {
    if (this.state.isOpen) {
      return (
        <TimerForm />
      );
    } else {
      return (
        <div className='ui basic content center aligned segment'>
          <button
            className='ui basic button icon'
            onClick={this.handleFormOpen.bind(this)}
          >
            <i className='plus icon'></i>
          </button>
        </div> );
    }
  }
}

export default ToggleableTimerForm;
