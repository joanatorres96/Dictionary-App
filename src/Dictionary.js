import React , {useState} from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary(){
let [word, setWord] = useState (null);

function handleResponse(response){
console.log(response.data[0]);
};


function searchWord(event){
    event.preventDefault();
    alert(`Searching ${word}`);

    let apiUrl= `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    axios.get(apiUrl).then(handleResponse);
}
function updateWord(event){
    setWord(event.target.value);
}


return (
    <div className="Dictionary">
 <h1>Dictionary 📖</h1>
  <form onSubmit={searchWord}>
  <input type={"text"} placeholder="Enter a word..." onChange={updateWord} />
  <input type={"submit"} value={"Search"} />
  </form>
    </div>
    );
}