'use client'

import React from 'react'
import CardNoticia from '../CardNoticia'


export const LateralEsquerdo = () => {

    const noticia = {
        img: 'https://waffle-prod.s3.amazonaws.com/app/uploads/2024/03/11122404/image-105-1024x682.png',

        title: "Crise migratória movimenta campanha nos EUA",

        text:`De olho nas eleições. No discurso que fez ao Congresso, Joe Biden falou sobre a crise da imigração — tema que virou uma pedra no sapato do governo e que tem grande peso entre os eleitores.

        O presidente disse que não vai demonizar nenhum estrangeiro e pediu apoio para aprovar uma lei com mudanças nas políticas em regiões de fronteira.
        
        Chegando por avião. Com recordes de entradas ilegais, os republicanos batem na tecla de que o governo Biden patrocinou voos em que mais de 320 mil migrantes desembarcaram em solo americano.
        
        De fato, em janeiro de 2023, o atual presidente assinou uma lei permitindo que 30 mil cidadãos de Cuba, Haiti, Nicarágua e Venezuela chegassem todos os meses aos EUA por voos fretados e com permissões de trabalho.
        
        Decretos presidenciais: Nenhum outro presidente na história americana assinou tantas permissões a migrantes quanto Biden — que já concedeu mais de 1 milhão de vistos temporários.
        
        Zoom out: Só em 2023, foram 2,4 milhões de apreensões nas fronteiras dos EUA, com o orçamento das patrulhas passando dos US$ 25 bilhões.`,

        createdAt:new Date()
    }

    return (
        <div>
            <CardNoticia noticia = { noticia }/>
        </div>
    )
}

export default LateralEsquerdo