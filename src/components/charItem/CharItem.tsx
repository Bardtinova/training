import {useEffect, useState} from "react";
import { ICard } from "../interfaces/ICard";

interface PropsCard {
    dataItem: ICard;
    i: number;
}

const CharItem = ({dataItem, i}: PropsCard) => {
                  
    useEffect(()=>{ 
        window.addEventListener('click', (event) => {});
        return () => {
            window.removeEventListener('click', (event) => {});
        }
     }, [dataItem])
     const [card, setCard] = useState(true);
   
           if (card) {
                return (
                    <li  key={i}
                        className="char__item">
                        <div className="char__name">{dataItem.title}</div>
                        <div className="char__name">{dataItem.symbol}</div>
                        <div className="char__name">{dataItem.keywords}</div>
                        <button className="inner" onClick={() => {setCard(false)}}>Delete</button>
                    </li>
                )
            } else {
                return null
         }
       
    
}

export default CharItem;