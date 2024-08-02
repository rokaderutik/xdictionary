import { useState } from "react";
import "./Dictionary.css";


const dict = [
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." },
]


export default function Dictionary() {
    const [inputData, setInputData] = useState('');
    const [defination, setDefination] = useState('');

    function performSearch(e) {
        e.preventDefault();

        const searchStr = inputData.toLowerCase();
        let def = 'Word not found in the dictionary.';
        for(let i = 0; i < dict.length; i++) {
            if(dict[i].word.toLowerCase() === searchStr) {
                def = dict[i].meaning;
                break;
            }
        }
        
        setDefination(def);
    }

    return (
        <div className="wrapper">
            <h1>Dictionary App</h1>
            <form onSubmit={performSearch} className="form">
                <input 
                    type="text"
                    placeholder="Search for a word..."
                    // required
                    value={inputData}
                    onChange={(e) => setInputData(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
            <h3>Definition:</h3>
            <p>{defination}</p>
        </div>
    );
}