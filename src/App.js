import styled from 'styled-components';
import GlobalStyles from './assets/GlobalStyles';
import Pick from './components/pick';
import Scoreboard from './components/scoreboard';
import scissors from './assets/images/icon-scissors.svg';
import paper from './assets/images/icon-paper.svg';
import rock from './assets/images/icon-rock.svg';
import bg from './assets/images/bg-triangle.svg';


function App() {
  return (
    <Wrapper>
      <GlobalStyles />
      <Scoreboard />
      <div className='step-1'>
        <img src={bg} alt='bg' className='bg'/>
        <div className='top'>
          <Pick pick='paper' icon={paper}/>
          <Pick pick='scissors' icon={scissors}/>
        </div>  
        <div className='bottom'>
          <Pick pick='rock' icon={rock}/>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  min-height: 100vh;
  position: absolute;
  background: linear-gradient(to bottom, hsl(214, 47%, 23%), hsl(237, 49%, 15%));
  z-index: -20;
  .step-1{
    width: 80%;
    margin: 100px auto;
    display: flex;
    flex-direction: column;
    position: relative;
    .bg{
      position: absolute;
      z-index: -10;
      left: 10%;
      width: 80%;
      height: 80%;
      bottom: 10%;
    }
    div{
      display: flex;
      align-items: center;
    }
    .top{
      justify-content: space-between;
    }
    .bottom{
      justify-content: center;
    }
  }

`


export default App;

