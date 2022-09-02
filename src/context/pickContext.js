import { createContext, useContext, useEffect, useState } from 'react';
import Pick from '../components/pick';
import scissors from '../assets/images/icon-scissors.svg';
import paper from '../assets/images/icon-paper.svg';
import rock from '../assets/images/icon-rock.svg';

export const pickContext = createContext();
export const usePick = () =>{
    const context = useContext(pickContext);
    return context
};

export default function PickProvider({children}){

    const [userPick, setUserPick] = useState(null);
    const [homePick, setHomePick] = useState(null);
    const [winner, setWinner] = useState(null);
    const [score, setScore] = useState(0);
    const [modalState, setModalState] = useState(false);

    const increaseScore = () => (setScore(Number(score + 1)));
    const decreaseScore = () => (setScore(Number(score - 1)));
    

    const pickHandler = (pick) =>{
        const random = Number(Math.random() * 100).toFixed(0);
        switch(pick){
            case 'rock' : setUserPick(<Pick pick='rock' icon={rock} />);
            break
            case 'scissors' : setUserPick(<Pick pick='scissors' icon={scissors} />);
            break
            default : setUserPick(<Pick pick='paper' icon={paper} />);
        }

        if(pick === 'rock'){
            if(random >= 50){
                setHomePick(<Pick pick='scissors housePick' icon={scissors} />);
                // setScore(Number(score + 1));
                setTimeout(increaseScore,2000)
                localStorage.setItem('score', Number(score + 1))
                setWinner('WIN');
                return
            }setHomePick(<Pick pick='paper housePick' icon={paper} />);
            setWinner('LOSE');
            if(score > 0){
                // setScore(Number(score - 1));
                setTimeout(decreaseScore,2000)
                localStorage.setItem('score', Number(score - 1))
            }
        }
            
        if(pick === 'paper' ){ 
            if(random >= 50){
                setHomePick(<Pick pick='rock housePick' icon={rock} />);
                setWinner('WIN');
                // setScore(Number(score + 1));
                setTimeout(increaseScore,2000)
                localStorage.setItem('score', Number(score + 1))
                return
            }setHomePick(<Pick pick='scissors housePick' icon={scissors} />);
            setWinner('LOSE');
            if(score > 0){
                // setScore(Number(score - 1));
                setTimeout(decreaseScore,2000)
                localStorage.setItem('score', Number(score - 1))
            }
        }

        if(pick === 'scissors'){ 
            if(random >= 50){
                setHomePick(<Pick pick='paper housePick' icon={paper} />);
                setWinner('WIN');
                // setScore(Number(score + 1));
                setTimeout(increaseScore,2000)
                localStorage.setItem('score',Number(score + 1))
                return
            }setHomePick(<Pick pick='rock housePick' icon={rock} />);
            setWinner('LOSE');
            if(score > 0){
                // setScore(Number(score - 1));
                setTimeout(decreaseScore,2000)
                localStorage.setItem('score', Number(score - 1))
            }
        }
    }

    useEffect(()=>{
        if(localStorage.getItem('score')){
            setScore(Number(localStorage.getItem('score')))
        }
    },[])

    return(
        <pickContext.Provider 
        value={{
            userPick, 
            homePick, 
            pickHandler, 
            winner, 
            setUserPick, 
            score, 
            setModalState, 
            modalState}}>
            {children}
        </pickContext.Provider>
    )
}

