import React from 'react';
import scissors from '../assets/images/icon-scissors.svg';
import paper from '../assets/images/icon-paper.svg';
import rock from '../assets/images/icon-rock.svg';
import bg from '../assets/images/bg-triangle.svg';
import Pick from '../components/pick';
import styled from 'styled-components';

export default function Main(){
    return(
        <Wrapper>
        <img src={bg} alt='bg' className='bg'/>
        <div className='top'>
          <Pick pick='paper' icon={paper} />
          <Pick pick='scissors' icon={scissors} />
        </div>  
        <div className='bottom'>
          <Pick pick='rock' icon={rock}/>
        </div>
      </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 80%;
    margin: 100px auto;
    display: flex;
    flex-direction: column;
    position: relative;
    max-width: 380px;
    @media (min-width: 425px) {
        margin: 80px auto;
      }
    .bg{
      position: absolute;
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
      @media (min-width: 375px) {
        margin-top: 20px;
      }
    }
`