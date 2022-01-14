import React from "react";

export default function Synonyms(props){
    
    if(props.synonyms){
return(
    <div className="mb-4 mt-1 Synonyms">
    {props.synonyms.map(function(synonym, index){
     return(
       <li className="synonymsLi" key={index}>{synonym}</li>
     );})}
    </div>
    );
} 
else{
    return null;
}
}