import React from 'react';
// import client from './client';
import helper from './helper';
import EditableTimerList from './EditableTimerList';
import ToggleableTimerForm from './ToggleableTimerForm';
import uuid from 'uuid';

/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-undef */
class TimersDashboard extends React.Component {

  state = {
    timers: [{
      title: 'Practice squat',
      project: 'Gym Chores',
      id: uuid.v4(),
      elapsed: 5456099,
      runningSince: Date.now(),
    }, {
      title: 'Bake squash',
      project: 'Kitchen Chores',
      id: uuid.v4(),
      elapsed: 1273998,
      runningSince: null,
    }],
  };

  handleCreateFormSubmit(timer) {
    this.createTimer(timer);
  }

  createTimer(timer) {
    const t = helper.newTimer(timer);
    this.setState({
      timers: this.state.timers.concat(t),
    });
  }

  handleEditFormSubmit() {

  }

  render() {
    return (
      <div className='ui three column centered grid'>
        <div className='column'>
          <EditableTimerList
            timers={this.state.timers}
          />
          <ToggleableTimerForm
            onFormSubmit={this.handleCreateFormSubmit.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default TimersDashboard;
