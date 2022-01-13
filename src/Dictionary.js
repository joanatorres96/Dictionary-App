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

    let apiUrl= `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    axios.get(apiUrl).then(handleResponse);
}
function updateWord(event){
    setWord(event.target.value);
}


return (
    <div className="Dictionary">
 <h1 className="text-center my-5 pt-5" id="title" >Dictionary 📖</h1>
  <form className="text-center mt-2" onSubmit={searchWord}>
  <input type={"text"} placeholder="Type a word..." className="search-bar"  onChange={updateWord} />
  </form>
  <p className="mt-4 text-center">Suggested words: Banana, Dog, Carrot, Sun...</p>
  <div className="row m-5" id="info">
<div className="col-sm-6 text-left my-5">
<Results results={results} />
</div>
<div className='text-center fs-5'>
        <p> <a href='https://github.com/joanatorres96/Dictionary-App'title='Github Link' target={"_blank"} rel={"noreferrer"} className='link'>Open-source code</a>{" by "}<a href='https://cranky-poincare-a3701c.netlify.app/' target={"_blank"} rel={"noreferrer"} className='link'>Joana Torres</a>. </p>
      </div>
  </div>
  
    </div>
    );
}