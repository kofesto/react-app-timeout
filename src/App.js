//import {useIdleTimer} from 'react-idle-timer';
import './App.css';
import Idle from './components/Idle';
//import Kofesto from './components/Kofesto';

function App() {
  /*
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
  */
  return (
    <>
    <h2>Hello world, welcome to react timer</h2>
    <Idle/>
    </>
  );
}

export default App;
