import React from 'react';
import styled from 'styled-components';
import rules from '../assets/images/image-rules.svg'
import closeIcon from '../assets/images/icon-close.svg';
import { usePick } from '../context/pickContext';

export default function RulesModal(){

    const {setModalState} = usePick();

    return(
        <Wrapper>
            <h1>RULES</h1>
            <img src={rules} alt='rules' />
            <img src={closeIcon} alt='close-icon' onClick={()=>setModalState(false)} />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 200;
    background-color: #fff;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 50px;
    color: hsl(229, 25%, 31%);
    animation: appear .3s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s 1 normal forwards;
    transform: scale(0);
    @keyframes appear {
        100%{
            transform: scale(1);
        }
    }
    img:last-child{
        cursor: pointer;
    }
`