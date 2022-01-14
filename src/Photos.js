import React from "react";

export default function Photos(props){
if (props.photos){
    return(
        <div className="Photos">
            <div className="row mt-3">
            {props.photos.map(function (photo, index){
                return(
                    <div className="col-md-6" key={index}>
                        <a href={photo.src.original} target={"_blank"} rel={"noreferrer"}>
                   <img src={photo.src.tiny} className="img-fluid images"/>
                        </a>
                   </div>
                );
            })}
            </div>
        </div>
    );
}else{
    return null;
}

}