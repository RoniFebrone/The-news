'use client'

import './style.css'

const CardNoticia = ({ noticia }) => {
    return (
        <div className='card-noticia'>

            <div className="imagem" style={{ backgroundImage: `url(${noticia.img})` }} />

            <div> <h2>{noticia.title} </h2> </div>

            <p className='descricao' dangerouslySetInnerHTML={{ __html: noticia.text }} />
            <hr />
            <div className="publicado-em"> {new Date(noticia.createdAt).toLocaleDateString('pt-BR')} </div>
        </div>
    )
}

export default CardNoticia