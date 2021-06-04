import React from 'react' 
import { useState, useEffect } from "react";
import tutorialService from '../services/tutorial.service';
import "./Search.css";
import TutorialDataService from '../services/tutorial.service';
import tutorial from '../services/tutorial.service';

function Search() {
    const [datas, setDatas] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
     fetch("http://localhost:3000")
     .then((response) => response.json())
     .then((json) => setDatas(json));
    }, []);

    const handleSearchTerm = (e) => {
        let value = e.target.value;
       value.length > 2 && setSearchTerm(value);
    };

    console.log(searchTerm);
    
    return ( 
        <>
        <div classNames="search">
        <input 
        type="element" 
        name="searchBar" 
        id="searchBar"
        placeholder= "Recherche"
        onChange={handleSearchTerm}
        />
        </div>
        <div className="search__results">
         {datas
         .filter((val) => {
             return val.title.toLowerCase().includes(searchTerm.toLowerCase());
         })
         
         .map((val) => { 
            return ( 
            <div className="search__result" key={val.id}>
             {val.title} 
            </div>
            );
            })}
        </div>
        </>
     );

}
export default Search;

