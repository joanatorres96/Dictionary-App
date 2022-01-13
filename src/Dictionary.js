import React , {useState} from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary(){
let [word, setWord] = useState (null);
let [results, setResults] = useState (null);

function handleResponse(response){
console.log(response.data[0]);
setResults(response.data[0]);
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
 <h1 className="text-center mt-5" >Dictionary 📖</h1>
  <form className="text-center mt-2" onSubmit={searchWord}>
  <input type={"text"} placeholder="Enter a word..." onChange={updateWord} />
  <input type={"submit"} value={"Search"} />
  </form>
  <div className="row m-5">
<div className="col-sm-6 text-left">
<Results results={results} />
</div>
  </div>
  
    </div>
    );
}