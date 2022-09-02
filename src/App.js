import styled from 'styled-components';
import GlobalStyles from './assets/GlobalStyles';
import Main from './components/main';
import Scoreboard from './components/scoreboard';
import Result from './components/result';
import { usePick } from './context/pickContext';
import RulesModal from './components/rules-modal';



function App() {

  const {userPick, modalState, setModalState} = usePick();

  return (
    
    <Wrapper>
      <GlobalStyles />
      <Scoreboard />
      {
        (userPick) ? <Result /> : <Main />
      }
      <div className='rules' onClick={()=> setModalState(true)}>
        <span>RULES</span>
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
  min-height: 100vh;
  position: absolute;
  .rules{
    position: absolute;
    left: calc(50% - 3.5em);
    bottom: 30px;
    border: 1px solid #fff;
    width: 7em;
    text-align: center;
    overflow: hidden;
    color: #fff;
    padding: 8px;
    border-radius: 8px;
    cursor: pointer;
    transition: color .3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    &:hover{
      color: #000;
      &::after{
        transform: translateX(0);
      }
    }
    &::after{
      content: ' ';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: #fff;
      z-index: -200;
      transform: translateX(-100%);
      transition: all .3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
  }

`


export default App;

