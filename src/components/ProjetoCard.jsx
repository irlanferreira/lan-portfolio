import React from 'react';

export default function ProjetoCard(props) {
    return (
        <a href={props.url} target='_blank' style={{textDecoration:'none'}}>
            <div className="card projetoCard" style={{ width: '18rem', backgroundColor:'#4f2fa9', color:'white'}}>
                <img src={props.img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.titulo}</h5>
                        <p className="card-text" style={{opacity: '0.76'}}>
                        {props.descricao}
                        </p>
                    </div>
            </div>
        </a>
    );
}