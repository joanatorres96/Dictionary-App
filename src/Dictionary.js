import React , {useState} from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(){
let [word, setWord] = useState (null);
let [results, setResults] = useState (null);
let [photos, setPhotos] = useState(null);

function handleResponse(response){
console.log(response.data[0]);
setResults(response.data[0]);
};

function handlePexelsResponse(response){
 setPhotos(response.data.photos);
}


function searchWord(event){
    event.preventDefault();

    let apiUrl= `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    axios.get(apiUrl).then(handleResponse);


    let pexelsApiKey="563492ad6f917000010000015fade4ded159433eaf771056ad00383a";
    let pexelsApiUrl=`https://api.pexels.com/v1/search?query=https://api.pexels.com/v1/search?query=${word}&per_page=4`;
    axios.get(pexelsApiUrl, {headers: {"Authorization" : `Bearer ${pexelsApiKey}`}}).then(handlePexelsResponse);
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
<div className="col-sm-6 text-left my-5">
  <Photos photos={photos} />
  </div>
<div className='text-center fs-5'>
        <p> <a href='https://github.com/joanatorres96/Dictionary-App'title='Github Link' target={"_blank"} rel={"noreferrer"} className='link'>Open-source code</a>{" by "}<a href='https://cranky-poincare-a3701c.netlify.app/' target={"_blank"} rel={"noreferrer"} className='link'>Joana Torres</a>. </p>
      </div>
  </div>
  
    </div>
    );
}