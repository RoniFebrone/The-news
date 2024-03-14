'use client'


import React from 'react'
import './styles.css'

const Noticia = (props) => {
    return (
        <div className='noticia'>

            <div className="imagem" style={{ backgroundImage: `url(${props.noticia.img})` }} />

            <div className='titulo'>{props.noticia.title} </div>
            
            <div className="publicado-em"> {new Date(props.noticia.createdAt).toLocaleDateString('pt-BR')} </div>

            <div
                className='descricao'
                dangerouslySetInnerHTML={{ __html: props.noticia.text }} />


        </div>
    )
}

export default Noticia