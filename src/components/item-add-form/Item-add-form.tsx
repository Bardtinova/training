import {FormEventHandler, useEffect, useState} from "react";
import { ICard } from "../interfaces/ICard";

import './item-add-form.scss';


interface PropsCard {
    newItem: ICard;
}

const ItemAddForm = ({onAdd}: any) => {
    
    const [title, setTitle] = useState('');
    const [symbol, setSymbol] = useState('');
    const [keywords, setKeywords] = useState('');
    
        
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(title.length < 2 || symbol.length < 2 || keywords.length < 2 ) return;

        const newItem: ICard =  {
                title ,
                symbol ,
                keywords 
        }
        onAdd(newItem)
        setTitle('');
        setSymbol('');
        setKeywords('');
    }

    return (
        <div className="app-add-form">
            <h3>Add new values</h3>
            <form
                className="add-form d-flex"
                onSubmit = {onSubmit}>
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="Title"
                    value={title}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value )}/>
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="Symbol"
                    value={symbol}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSymbol(e.target.value )}/>
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="Keywords"
                    value={keywords}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>  setKeywords(e.target.value )}/>
                <button type="submit"
                        className="btn btn-outline-light">Add</button>
            </form>
        </div>
    )
 }

export default ItemAddForm;