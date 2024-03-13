'use client'

import CardNoticia from '../CardNoticia'
import './styles.css'

const GridNoticias = ({ noticias }) => {
  return (
    <div className='grid-noticias'>
        {noticias.map(noticia => (
            <CardNoticia key={noticia.id} noticia={noticia} />
        ))}

    </div>
  )
}

export default GridNoticias