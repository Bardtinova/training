import {useState} from 'react';
import './search-panel.scss';
import { ICard } from "../interfaces/ICard";

interface PropsonUpdateSearch {
    onUpdateSearch: any;
}

const SearchPanel = ({onUpdateSearch}:PropsonUpdateSearch) => {

    const [term, setTerm] = useState('');
   
    
    const UpdateSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const term = e.target.value;
        setTerm(term);
        onUpdateSearch(term);
    }

    
        return (
            <input type="text"
                    className="form-control search-input"
                    placeholder="Find emoji"
                    value = {term}
                    onChange={UpdateSearch}/>

        )
   
}

export default SearchPanel;