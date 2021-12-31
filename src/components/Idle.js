//import React from 'react';
import {useIdleTimer} from 'react-idle-timer';
//import Kofesto from './Kofesto';

function Idle(props) {
    const handleOnIdle = event => {
        console.log('user is idle', event)
        console.log('last active', getLastActiveTime())
      }
    
      const handleOnActive = event => {
        console.log('user is active', event)
        console.log('time remaining', getRemainingTime())
      }
    
      const handleOnAction = event => {
        console.log('user did something', event)
      }

      const { getRemainingTime, getLastActiveTime } = useIdleTimer({
        timeout: 1000  * 8,
        onIdle: handleOnIdle,
        onActive: handleOnActive,
        onAction: handleOnAction,
        debounce: 500,
        crossTab: true
      })
    
    return true;
}

export default Idle;
