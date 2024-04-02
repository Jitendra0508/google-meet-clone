
import './App.scss';
import Capture from './component/cupture';
import { ReactComponent as ShareScreen } from '../src/images/share-screen.svg'
import { ReactComponent as User } from '../src/images/user.svg'

import { ReactComponent as Person } from '../src/images/lock_person.svg';
import { useState } from 'react';
import Sidebar from './component/sidebar';
import Info from './component/info';

function App() {
  const [microphone, setMicrophone] = useState(false)
  const [camra, setCamra] = useState(false)
  const [caption, setCaption] = useState(false)
  const [emoji, setEmoji] = useState(false)
  const [raiseHand, setRaiseHand] = useState(false)
  const [isSidebar, setIsSidebar] = useState(false)

  const mute = () => {
    setMicrophone(!microphone)
    // console.log(microphone)

  }
  const muteCamra = () => {
    setCamra(!camra)
  }
  const captionChange = () => {
    setCaption(!caption)
  }
  const emojiIcons = () => {
    setEmoji(!emoji)
  }
  const hand = () => {
    setRaiseHand(!raiseHand)
  }
  const openSidebar = () => {
    setIsSidebar(!isSidebar)
  }
  return (
    <div className="App">
      <div className="main-content" >
        <div className='main-vedio'>
          <div style={{ position: 'relative' }} className={isSidebar === true ? 'vedeo-fram' : 'vedio-size'}>
            <button><i className="bi bi-three-dots"></i></button>
            <Capture />
            <p className='name'>Jitendra Kushwah</p>
          </div>
          <Sidebar onClick={openSidebar} className={isSidebar === true ? "activeSidebar" : ""}>
            <Info heading='Meeting details' />
          </Sidebar>

        </div>
        <div className='bottom-icons'>
          <p>5:36 PM | pbd-bgtv-org</p>
          <div className="buttonsGroup">
            <button onClick={mute} className={microphone === true ? "mute-microphone" : ''} >
              {microphone === false ? <i className="bi bi-mic-fill"></i> : <i className="bi bi-mic-mute"></i>}
              {/* <Tooltip title='turn on microphone (ctrl + d)'/> */}
              {/* <i className="bi bi-mic-mute-fill"></i> */}
            </button>
            <button onClick={muteCamra} className={camra === true ? "mute-camera" : ''}>
              {camra === false ? <i className="bi bi-camera-video"></i> : <i className="bi bi-camera-video-off"></i>}
            </button>
            <button onClick={captionChange} className={caption === true ? "caption-mode" : ''}>
              {caption === false ? <i className="bi bi-badge-cc"></i> : <i className="bi bi-badge-cc-fill"></i>}
            </button>
            <button onClick={emojiIcons} className={emoji === true ? "active-emoji" : ''}>
              {emoji === false ? <i className="bi bi-emoji-smile"></i> : <i className="bi bi-emoji-smile-fill"></i>}
            </button>
            <button><ShareScreen /></button>
            <button onClick={hand} className={raiseHand === true ? "active-hand" : ''}>
              <svg enable-background="new 0 0 24 24" focusable="false" height="24" viewBox="0 0 24 24" width="24" className="Hdh4hc cIGbvc NMm5M"><rect fill="none" height="24" width="24"></rect><g><path d="M12,24c-3.26,0-6.19-1.99-7.4-5.02l-3.03-7.61c-0.31-0.79,0.43-1.58,1.24-1.32l0.79,0.26c0.56,0.18,1.02,0.61,1.24,1.16 L6.25,15H7V3.25C7,2.56,7.56,2,8.25,2C8.94,2,9.5,2.56,9.5,3.25V12h1V1.25C10.5,0.56,11.06,0,11.75,0S13,0.56,13,1.25V12h1V2.75 c0-0.69,0.56-1.25,1.25-1.25s1.25,0.56,1.25,1.25V12h1V5.75c0-0.69,0.56-1.25,1.25-1.25S20,5.06,20,5.75V16 C20,20.42,16.42,24,12,24z"></path></g></svg>
              {/* <svg enable-background="new 0 0 24 24" focusable="false" height="24" viewBox="0 0 24 24" width="24" className="Hdh4hc cIGbvc NMm5M"><rect fill="none" height="24" width="24"></rect><g><path d="M12,24c-3.26,0-6.19-1.99-7.4-5.02l-3.03-7.61c-0.31-0.79,0.43-1.58,1.24-1.32l0.79,0.26c0.56,0.18,1.02,0.61,1.24,1.16 L6.25,15H7V3.25C7,2.56,7.56,2,8.25,2C8.94,2,9.5,2.56,9.5,3.25V12h1V1.25C10.5,0.56,11.06,0,11.75,0S13,0.56,13,1.25V12h1V2.75 c0-0.69,0.56-1.25,1.25-1.25s1.25,0.56,1.25,1.25V12h1V5.75c0-0.69,0.56-1.25,1.25-1.25S20,5.06,20,5.75V16 C20,20.42,16.42,24,12,24z"></path></g></svg> */}
            </button>
            <button><i className="bi bi-three-dots-vertical"></i></button>
            <button className='end-call'><i className="bi bi-telephone-fill"></i></button>
          </div>
          <div className='meeting-details'>
            <button onClick={openSidebar}><i className="bi bi-info-circle"></i></button>
            <button onClick={openSidebar}><User /> <span>1</span></button>
            {/* <button><i className="bi bi-info-circle"></i></button> */}
            <button onClick={openSidebar}><i className="bi bi-chat-left-text"></i></button>
            <button onClick={openSidebar}><svg enable-background="new 0 0 24 24" focusable="false" height="24" viewBox="0 0 24 24" width="24" className="Hdh4hc cIGbvc NMm5M"><g><rect fill="none" height="24" width="24"></rect></g><g><g><g><polygon points="12,2 6.5,11 17.5,11"></polygon><circle cx="17.5" cy="17.5" r="4.5"></circle><rect height="8" width="8" x="3" y="13.5"></rect></g></g></g></svg></button>
            <button onClick={openSidebar}><Person /></button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
