import {useEffect, useState} from "react";
import { ICard } from "../interfaces/ICard";

interface PropsCard {
    data: ICard[];
}


const CharInfo = ({data}: PropsCard) => {
    console.log(data)
    const [card, setCard] = useState(data)
  
    console.log(card)
              
    //useEffect(()=>{ card }, [card])
   
    //emojiLists.slice(0, card);

    const items = card.map((item: {
        title: string;
        symbol: string;
        keywords: string;}, i: number) => {
        return (
            <li  key={i}
                className="char__item">
                <div className="char__name">{item.title}</div>
                <div className="char__name">{item.symbol}</div>
                <div className="char__name">{item.keywords}</div>
                <button className="inner">Delete</button>
            </li>
        )
    })
           
    return (
        <div className="char__list">
                <ul className="char__grid">
                    {items}
                </ul>
        </div>
    )
}

export default CharInfo;
 