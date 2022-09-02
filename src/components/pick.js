import React from 'react';
import styled from 'styled-components';
import { usePick } from '../context/pickContext';


export default function Pick({pick,icon}){

    const {pickHandler} = usePick()

    return(
        <Wrapper className={pick} onClick={()=>pickHandler(pick)}>
            <div>
                <img src={icon} alt='paper' />
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 6.5em;
    height: 6.5em;
    border-radius: 50%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: 375px) {
        height: 7.5em;
        width: 7.5em;
    }
    @media (min-width: 425px) {
        height: 8.5em;
        width: 8.5em;
    }


    &.paper{
    background-color: hsl(230, 89%, 65%);
    filter: drop-shadow(0px 4px 0px hsl(230, 90%, 60%));
    }
    &.rock{
    background-color: hsl(349, 70%, 56%);
    filter: drop-shadow(0px 4px 0px hsl(349, 65%, 45%));
    }&.scissors{
    background-color: hsl(40, 84%, 53%);
    filter: drop-shadow(0px 4px 0px hsl(39, 83%, 43%));
    }

    div{
        filter: drop-shadow(0px 4px 0px #ccc);
        background-color: #fff;
        height: 78%;
        width: 78%;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            width: 2.5em;
            height: 2.5em;
        }
    }
`

