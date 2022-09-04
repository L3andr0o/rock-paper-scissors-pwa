import React from 'react';
import styled from 'styled-components';
import { usePick } from '../context/pickContext';

export default function Result(){

    const {userPick, homePick, winner, setUserPick} = usePick()

    return(
        <Wrapper>
            <div className='picks'>
                <div className='first-div'>
                    <div className={`userPick ${winner}`}>{userPick}</div>
                    <span>YOU PICKED</span>
                </div>
                <div className='second-div'>
                    <div className={`homePick ${winner}`}>{homePick}</div>
                    <span>THE HOUSE PICKED</span>
                </div>
            </div>
            <div className='winner'>
                <span>YOU {winner}</span>
                <button onClick={()=> setUserPick(null)}>PLAY AGAIN</button>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 80%;
    margin: 100px auto;
    position: relative;
    max-width: 400px;
    @media (min-width: 425px) {
        margin: 80px auto;
      }
    .winner{
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        width: fit-content;
        margin-top: 80px;
        transform: translateX(-100vw);
        animation: translate .3s cubic-bezier(0.175, 0.885, 0.32, 1.275) 2s 1 normal forwards;
        @keyframes translate {
            100%{transform: translateX(0%);}
        }
        span{
            color: #fff;
            font-size: 50px;
            font-weight: 700;
        }
        button{
            border: none;
            outline: none;
            background-color: #fff;
            color: hsl(229, 25%, 31%);
            padding: 10px;
            font-size: 14px;
            font-weight: 600;
            letter-spacing: 2px;
            border-radius: 5px;
            margin-top: 10px;
            cursor: pointer;
            border: 1px solid #fff;
            transition: all .3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            &:hover{
                color: #fff;
                background-color: transparent;
            }
        }
    }
    .picks{
        width: 100%;
        display: flex;
        justify-content: space-between;
        z-index: -10 !important;
        pointer-events: none;
    }
    .first-div,.second-div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: fit-content;
        span{
            color: #fff;
            margin-top: 20px;
            font-size: 14px;
            font-weight: 600;
            letter-spacing: 1px;
        }
        .userPick{
            &.WIN::after{
                width: 15em;
                height: 15em;
                position: absolute;
                content: '';
                background-color: #fff1;
                z-index: -100;
                border-radius: 50%;
                top: calc(50% - 7.5em);
                left: calc(50% - 7.5em);
                transform: scale(0);
                animation: appear .3s cubic-bezier(0.175, 0.885, 0.32, 1.275) 2s 1 normal forwards;
                @media (min-width: 768px) {
                    width: 25em;
                    height: 25em;
                    top: calc(50% - 12.5em);
                    left: calc(50% - 12.5em);
                }
            }
        }
        .homePick{
            &.LOSE::after{
                width: 15em;
                height: 15em;
                position: absolute;
                content: '';
                background-color: #fff1;
                z-index: -100;
                border-radius: 50%;
                top: calc(50% - 7.5em);
                left: calc(50% - 7.5em);
                transform: scale(0);
                animation: appear .3s cubic-bezier(0.175, 0.885, 0.32, 1.275) 2s 1 normal forwards;
                @media (min-width: 768px) {
                    width: 25em;
                    height: 25em;
                    top: calc(50% - 12.5em);
                    left: calc(50% - 12.5em);
                }
            }
            @keyframes appear {
            100%{
                transform: scale(1);
            }
        }
        }
        .userPick,.homePick{
        height: 6.5em;
        width: 6.5em;
        background-color: hsl(237, 49%, 15%);
        border-radius: 50%;
        position: relative;
        @media (min-width: 375px) {
        height: 7.5em;
        width: 7.5em;
        }
        @media (min-width: 425px) {
        height: 8.5em;
        width: 8.5em;
        }
        @media (min-width: 768px) {
        height: 10em;
        width: 10em;
        }
        .paper,.scissors,.rock{
            animation: appear .3s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s 1 normal forwards;
            transform: scale(0);
            &.housePick{
                animation: housePickAppear .3s cubic-bezier(0.165, 0.84, 0.44, 1) 1.7s 1 normal forwards;
            }
        }
        @keyframes appear {
            100%{
                transform: scale(1);
            }
        }
        @keyframes housePickAppear {
            100%{
                transform: scale(1);
            }
        }
    }
    }
`