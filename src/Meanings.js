import React from "react";
import Synonyms from "./Synonyms";

export default function Meanings(props){

return(
<div className="Meanings">
   <h3 className="text-capitalize mt-4 fw-bold">{props.meanings.partOfSpeech}</h3> 
{props.meanings.definitions.map(function(definition, index){
return(
    <div key={index}>
    <strong>Definition: </strong>{definition.definition}
    <p className="fst-italic">{definition.example}</p> 
    <Synonyms synonyms={definition.synonyms} />
    </div>
);

})}

</div>
);



}