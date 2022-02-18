import React from 'react';
import IconSearch from '../IconSearch/IconSearch';

import './SearchTextInput.scss';

interface SearchProps {
    placeholder: string;
};

const SearchTextInput = (props: SearchProps) => {
    const { placeholder } = props;
    return <div className="search">
        <input className="search__input" placeholder={placeholder}/>
        <div className="search__icon">
            <IconSearch  />
        </div>
    </div>
};

export default SearchTextInput;