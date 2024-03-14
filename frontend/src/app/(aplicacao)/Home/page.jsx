'use client'


import Noticia from '../../../Components/Noticia'
import './styles.css'

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import LateralDireito from '@/Components/LateralEsquerdo'
import LateralEsquerdo from '@/Components/LateralDireito'



const HomePage = () => {

    const [noticias, setNoticias] = useState([]);

    const getNoticias = async () => {
        try {
            const result = await axios.get('http://localhost:8080/noticias');
            setNoticias(result.data)
        } catch (error) {
            alert(error.response.data.message)
        }
    }
    useEffect(() => {
        getNoticias()
    }, []);


    return (
        <div className='grid-home'>
            <div>
                <  LateralDireito/>
            </div>
            <div>
                {noticias.map(noticia =>
                    <Noticia key={noticia.id} noticia={noticia} />)
                }
            </div>
            <div>
                <LateralEsquerdo />
            </div>
        </div>
    )
}

export default HomePage