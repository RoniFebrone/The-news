'use client'


import React from 'react'
import './styles.css'

const Noticia = (props) => {
    return (
        <div className='Noticia'>
            <div className='titulo'>{props.noticia.title} </div>
            <div className="container_img">
                <img src={props.noticia.img} alt="noticia" />
            </div>
            <div className='descricao' dangerouslySetInnerHTML={{ __html: props.noticia.text }} />
        </div>
    )
}

export default Noticia