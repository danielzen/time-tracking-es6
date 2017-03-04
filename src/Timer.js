import React from 'react';
import helpers from './helper';
import TimerActionButton from './TimerActionButton';

class Timer extends React.Component {

  componentDidMount() {
    this.forceUpdateInterval =
      setInterval(() => this.forceUpdate(), 50 /*ms*/);
  }

  componentWillUnmount() {
    clearInterval(this.forceUpdateInterval);
  }

  handleStartClick() {
    console.log('HandleStartClick');
    this.props.onStartClick(this.props.id);
  }

  handleStopClick() {
    console.log('HandleStopClick');
    this.props.onStopClick(this.props.id);
  }

  handleTrashClick() {
    this.props.onTrashClick(this.props.id);
  }

  render() {
    const elapsedString = helpers.renderElapsedString(
      this.props.elapsed, this.props.runningSince
    );
    return (
      <div className='ui centered card'>
        <div className='content'>
          <div className='header'>
            {this.props.title}
          </div>
          <div className='meta'>
            {this.props.project}
            </div>
          <div className='center aligned description'>
            <h2>
              {elapsedString}
            </h2></div>
          <div className='extra content'>
            <span
              className='right floated edit icon'
              onClick={this.props.onEditClick}
            >
              <i className='edit icon'></i>
            </span>
            <span
              className='right floated trash icon'
              onClick={this.handleTrashClick.bind(this)}
            >
              <i className='trash icon'></i>
            </span>
          </div>
        </div>
        <TimerActionButton
          timerIsRunning={!!this.props.runningSince}
          onStartClick={this.handleStartClick.bind(this)}
          onStopClick={this.handleStopClick.bind(this)}
        />
      </div>
    );
  }
}

export default Timer;
