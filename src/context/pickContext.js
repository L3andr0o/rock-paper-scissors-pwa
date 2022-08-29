import { createContext, useContext, useState } from 'react';
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
    const pickHandler = (pick) =>{
        const random = Number(Math.random() * 100);
        switch(pick){
            case 'rock' : setUserPick(<Pick pick='rock' icon={rock} />);
            break
            case 'scissors' : setUserPick(<Pick pick='scissors' icon={scissors} />);
            break
            default : setUserPick(<Pick pick='paper' icon={paper} />);
        }
        (pick === 'rock' && random >= 500) 
        ? setHomePick(<Pick pick='paper' icon={paper} />)
        : setHomePick(<Pick pick='scissors' icon={scissors} />);
        (pick === 'paper' && random >= 500) 
        ? setHomePick(<Pick pick='rock' icon={rock} />)
        : setHomePick(<Pick pick='scissors' icon={scissors} />);
        (pick === 'scissors' && random >= 500) 
        ? setHomePick(<Pick pick='paper' icon={paper} />)
        : setHomePick(<Pick pick='rock' icon={rock} />);
    }

    return(
        <pickContext.Provider value={{userPick, homePick, pickHandler}}>
            {children}
        </pickContext.Provider>
    )
}

