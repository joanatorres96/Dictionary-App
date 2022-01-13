import React from "react";

export default function Meanings(props){

return(
<div className="Meanings">
   <h3 className="text-capitalize">{props.meanings.partOfSpeech}</h3> 
{props.meanings.definitions.map(function(definition, index){
return(
    <div key={index}>
    <h5>{definition.definition}</h5>
    <p>{definition.examples}</p>
    </div>
);


})}



</div>
);



}