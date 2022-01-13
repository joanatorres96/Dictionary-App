import React from "react";

export default function Phonetic(props){
    return(
       <div className="Phonetic">
      <span className="phonetic-text">"{props.phonetic.text}" </span><a href={props.phonetic.audio} target="_blank" className="link" id="audio">Listen 🔊</a>
       </div>
    );
}