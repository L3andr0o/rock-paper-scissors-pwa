import React from 'react';
import styled from 'styled-components';
import logo from '../assets/images/logo.svg';
import { usePick } from '../context/pickContext';

export default function Scoreboard(){

    const {userPick} = usePick()

    return(
        <Wrapper>
            <div className='logo'>
                <img src={logo} alt='logo'/>
            </div>
            <div className='score' >
                <h3>SCORE</h3>
                {userPick ? <h3>0</h3> : <h3>1</h3>}
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 80%;
    height: 6em;
    position: relative;
    border: 3px solid  hsl(217, 16%, 45%);
    border-radius: 5px;
    margin: 30px auto;
    padding: 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    .logo{
        height: 4em;
        display: flex;
        align-items: center;
        img{
            height: 3em;
        }
    }
    .score{
        background-color: #fff;
        height: 100%;
        padding: 10px;
        display: flex;
        flex-direction: column;
        text-align: center;
        width: 4em;
        border-radius: 3px;
        h3{
            &:first-child{
                font-size: 12px;
                font-weight: 600;
                letter-spacing: 1px;
                color: hsl(229, 64%, 46%);
            }
            &:last-child{
                color: hsl(229, 25%, 31%);
                font-size: 40px;
                line-height: 0;
                margin-top: 18px;
            }
        }
    }
`