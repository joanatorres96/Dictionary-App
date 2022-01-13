import React from "react";
import Meanings from "./Meanings";
import Phonetic from "./Phonetic";


export default function Results(props){
if(props.results){
return(
<div className="Results">
<h1 className="text-capitalize results-title">{props.results.word}</h1>
<div className="my-4">
{props.results.phonetics.map(function(phonetics, index){
return(
    <div key={index}>
        <Phonetic phonetic={phonetics} />
    </div>
);
})}
</div>
 {props.results.meanings.map(function(meanings, index){
 return(
<div key={index}>
    <Meanings meanings={meanings} />
</div>
 );
})}
</div>
);

}else{
    return null;
}

}