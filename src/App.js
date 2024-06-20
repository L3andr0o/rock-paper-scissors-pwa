import styled from 'styled-components';
import GlobalStyles from './assets/GlobalStyles';
import Main from './components/main';
import Scoreboard from './components/scoreboard';
import Result from './components/result';
import { usePick } from './context/pickContext';
import RulesModal from './components/rules-modal';
import React, { useEffect } from 'react';



function App() {

  const {userPick, modalState, setModalState} = usePick();

  const [isReadyForInstall, setIsReadyForInstall] = React.useState(false);

  useEffect(() => {
  window.addEventListener("beforeinstallprompt", (event) => {
    // Prevent the mini-infobar from appearing on mobile.
    event.preventDefault();
    console.log("👍", "beforeinstallprompt", event);
    // Stash the event so it can be triggered later.
    (window).deferredPrompt = event;
    // Remove the 'hidden' class from the install button container.
    setIsReadyForInstall(true);
  });
  }, []);
 
  const downloadApp = async () =>{
    console.log("👍", "butInstall-clicked");
    const promptEvent = (window).deferredPrompt;
    if (!promptEvent) {
      // The deferred prompt isn't available.
      console.log("oops, no prompt event guardado en window");
      return;
    }
    // Show the install prompt.
    promptEvent.prompt();
    // Log the result
    const result = await promptEvent.userChoice;
    console.log("👍", "userChoice", result);
    // Reset the deferred prompt variable, since
    // prompt() can only be called once.
    (window).deferredPrompt = null;
    // Hide the install button.
    setIsReadyForInstall(false);
  }

  return (
    
    <Wrapper>
      <GlobalStyles />
      <Scoreboard />
      {
        (userPick) ? <Result /> : <Main />
      }
      <div className='appBottom'>
        <button className='rules' onClick={()=> setModalState(true)}>
          <span>RULES</span>
        </button>
        {isReadyForInstall && <button className='downloadBtn' onClick={downloadApp}>DOWNLOAD</button>}
      </div>

      {
        modalState && <RulesModal /> 
      }
    </Wrapper>
    
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  min-height: 100dvh;
  position: absolute;
  .appBottom{
    position: absolute;
    left: calc(10%);
    bottom: 30px;
    width: 80%;
    display: flex;
    justify-content: space-between;
    .rules,.downloadBtn{
    border: 1px solid #fff;
    width: 7em;
    text-align: center;
    overflow: hidden;
    background-color: transparent;
    color: #fff;
    outline: none;
    padding: 8px;
    border-radius: 8px;
    cursor: pointer;
    transition: all .3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    &:hover{
      background-color: #fff;
      color: #000;
    }
  }
  }

`


export default App;

