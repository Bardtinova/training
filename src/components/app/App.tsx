import React from 'react';
import {useEffect, useState} from "react";

import AppHeader from '../appHeader/AppHeader';
import SearchPanel from '../search-panel/Search-panel';
import CharInfo from '../charInfo/CharInfo';
import ItemAddForm from '../item-add-form/Item-add-form';
import {emojiLists} from "../interfaces/ICard";
import { ICard } from "../interfaces/ICard";

interface PropsCard {
  dataItem: ICard;
}

function App() {
 const [data, setData] = useState(emojiLists);
 const [term, setTerm] = useState('');
 

 const searchEmp = (items: any, term: string) => {
            if (term.length === 0) {
              return items;
            } else {
                    return items.filter((item: {
                          title: string;
                          symbol: string;
                          keywords: string;
                        }) => {
                            return item.title.indexOf(term) > -1
                        })
            }
          }

  const onUpdateSearch = (term: string) => {
       setTerm(term);
  }
  const visibleData: [] = searchEmp(data, term) 
  
  
    const addItem = (newItem: ICard) => {
      const newData = [...data];
      newData.unshift(newItem)
      setData(newData );
  }

  return (

    <div className="app">
        <AppHeader/>
        <SearchPanel onUpdateSearch = {onUpdateSearch}/>
        <ItemAddForm onAdd={addItem}/>
        <CharInfo data = {visibleData}/>
    </div>
  );
}

export default App;
