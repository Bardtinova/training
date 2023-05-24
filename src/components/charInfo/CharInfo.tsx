import {useEffect, useState} from "react";
import { ICard } from "../interfaces/ICard";

import CharItem from "../charItem/charItem";

interface PropsCard {
    data: ICard[];
}


const CharInfo = ({data}: PropsCard) => {
    console.log(data)
                 
    useEffect(()=>{ 
        window.addEventListener('click', (event) => {});
        return () => {
            window.removeEventListener('click', (event) => {});
        }
     }, [data])
     const [card, setCard] = useState(true);
   
    const dataShort = data.slice(0, 51);

    const items = dataShort.map((item: {
        title: string;
        symbol: string;
        keywords: string;}, i: number) => {
         return (
            <CharItem dataItem = {item} i={i}/>
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
 