import React from 'react';
// import client from './client';
import './helper';
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

  render() {
    return (
      <div className='ui three column centered grid'>
        <div className='column'>
          <EditableTimerList
            timers={this.state.timers}
          />
          <ToggleableTimerForm />
        </div>
      </div>
    );
  }
}

export default TimersDashboard;
