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
    color: #fff;
    padding: 8px;
    border-radius: 8px;
  }

`


export default App;

