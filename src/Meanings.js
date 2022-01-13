import React from "react";
import Synonyms from "./Synonyms";

export default function Meanings(props){

return(
<div className="Meanings">
   <h3 className="text-capitalize">{props.meanings.partOfSpeech}</h3> 
{props.meanings.definitions.map(function(definition, index){
return(
    <div key={index}>
    <p>
    <strong>Definition: </strong>{definition.definition}
    <p><strong>Example: </strong>{definition.example}</p>
    <Synonyms synonyms={definition.synonyms} />
    </p>
    </div>
);


})}



</div>
);



}