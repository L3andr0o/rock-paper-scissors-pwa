import React from 'react';
import styled from 'styled-components';
import { usePick } from '../context/pickContext';

export default function Result(){

    const {userPick, homePick} = usePick()

    return(
        <Wrapper>
            <div className='userPick'>{userPick}</div>
            <div className='homePick'>{homePick}</div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 80%;
    margin: 100px auto;
    display: flex;
    justify-content: space-between;
    z-index: -10 !important;
    .userPick,.homePick{
        height: 6.5em;
        width: 6.5em;
        background-color: hsl(237, 49%, 15%);
        border-radius: 50%;
        .paper,.scissors,.rock{
            animation: appear .3s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s 1 normal forwards;
        }
        @keyframes appear {
            0%{
                transform: scale(0);
            }
            100%{
                transform: scale(1);
            }
        }
    }
`