'use client'

import React, { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'

const CadastroNoticiaForm = () => {
    const router = useRouter();

    const [title, setTitle] = useState('')
    const [img, setImg] = useState('')
    const [text, setText] = useState('')
    const [category, setCategory] = useState('')

    const aoSubmeter =  async(e) => {
        e.preventDefault();              
        try {
            const formulario = {
                title,
                img,
                text,
                category
            }
            const result = await axios.post('http://localhost:8080/noticias', formulario)
            console.log(result)
            alert('Nova noticia cadastrada')
            router.push('/Home')
        } catch (error) {
            alert (error.response.data.message)
        }
    }

    const aoAlterarValores = (e) => {
        const { name, value } = e.target;

        if (name === 'title') {
            setTitle(value)
        }
        if (name === 'img') {
            setImg(value)
        }
        if (name === 'text') {
            setText(value)
        }
        if (name === 'category') {
            setCategory(value)
        }
    }

    return (
        <form onSubmit={aoSubmeter} action="">
            <div>
                <label htmlFor='title'> Titulo </label>
                <input type="text" name="title" onChange={aoAlterarValores} />
            </div>
            <div>
                <label htmlFor='img'> Imagem </label>
                <input type="text" name="img" onChange={aoAlterarValores} />
            </div>
            <div>
                <label htmlFor='text'> Texto </label>
                <input type="text" name="text" onChange={aoAlterarValores} />
            </div>
            <div>
                <label htmlFor='category'> Categoria </label>
                <select name="category" onChange={aoAlterarValores}>
                    <option value="Produto">Produto</option>
                    <option value="Tecnologia">Tecnologia</option>
                    <option value="rh">RH</option>
                    <option value="Vendas">Vendas</option>
                </select>
            </div>
            <button type="submit">Criar Noticia</button>
        </form>
    )
}

export default CadastroNoticiaForm