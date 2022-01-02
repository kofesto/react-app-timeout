// import {useIdleTimer} from 'react-idle-timer';
// import {useNavigate} from 'react-router-dom';
import Idle from "./Idle"

function Home() {
    /*
    let navigate = useNavigate();
    const handleOnIdle = event => {
        console.log('user is idle', event)
        console.log('last active', getLastActiveTime());
        //<Route path="/" element={<Navigate replace to="/timer" />} />
        navigate('/timer');
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
        <div>
            <Idle/>
            <h2>Hello world, welcome to react timer</h2>
        </div>
    )
}

export default Home
