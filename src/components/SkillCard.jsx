import React from "react";

export default function Skill(props){
    return(
        <>
            <div className="skill">
                <h2>{props.nome}</h2>
                <img src={props.img} alt="" />
                <p>{props.nivel}</p>
            </div>
        </>
    )
}