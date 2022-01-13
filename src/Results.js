import React from "react";
import Meanings from "./Meanings";


export default function Results(props){
if(props.results){
return(
<div className="Results">
<h1 className="text-left text-capitalize">{props.results.word}</h1>
<h4>"{props.results.phonetic}"</h4>
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