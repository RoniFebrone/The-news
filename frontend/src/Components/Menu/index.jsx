'use client'


import { useState } from 'react'
import { useRouter } from 'next/navigation'
import './style.css'
import { TiThMenu } from "react-icons/ti";
import { GiCoffeeMug } from "react-icons/gi";
import { IoClose } from "react-icons/io5";



export const Menu = () => {
    const [menuLateral, setMenuLateral] = useState(false)
    const router = useRouter()

    return (
        <>
            <nav className='menu'>
                <TiThMenu size={30} color='#333' onClick={() => setMenuLateral(!menuLateral)} />
                <div className='logo' onClick={() => router.push('/Home')}>
                    <div>
                        <GiCoffeeMug size={30} />
                    </div>
                    <div className='marca'>
                        the news
                    </div>
                </div>
                <button className='login' onClick={() => router.push('/login')}> Login </button>
            </nav>


            {menuLateral &&
                <div className='menu_lateral'>
                    <div className='fechar' onClick={() => setMenuLateral(!menuLateral)}>
                        <IoClose size={30} color='#333' />
                    </div>
                    <ul>
                        <li> <a href="/Home"> Home </a></li>
                        <li> <a href="/noticias/Produto"> Produto </a></li>
                        <li> <a href="/noticias/Tecnologia"> Tecnologia </a></li>
                        <li> <a href="/noticias/rh"> RH </a></li>
                        <li> <a href="/noticias/Vendas"> Vendas </a></li>
                    </ul>
                </div>
            }
        </>
    )
}

export default Menu