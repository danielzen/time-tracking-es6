/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-unused-vars */
import React from 'react';
// import client from './client';
import './helper';
import EditableTimerList from './EditableTimerList';
import ToggleableTimerForm from './ToggleableTimerForm';
/* eslint-enable no-unused-vars */

class TimersDashboard extends React.Component {

  render() {
    return (
      <div className='ui three column centered grid'>
        <div className='column'>
          <EditableTimerList />
          <ToggleableTimerForm
            isOpen={true}/>
        </div>
      </div>
    );
  }
}

export default TimersDashboard;
