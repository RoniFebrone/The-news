'use client'


const CardNoticia = ({ noticia }) => {
    return (
        <div>
            <div>{noticia.title} </div>
            
            <div >
                <img src={noticia.img} alt="noticia" />
            </div>

            <div className='descricao' dangerouslySetInnerHTML={{ __html: noticia.text }} />
        </div>
    )
}

export default CardNoticia