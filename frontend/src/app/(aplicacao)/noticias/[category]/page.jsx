'use client'

import GridNoticias from '@/Components/GridNoticias'

import React, { useState, useEffect } from 'react'
import axios from 'axios'



const NoticiasPage = ({ params }) => {

  const [noticias, setNoticias] = useState([]);

  const getNoticias = async () => {
    try {
      console.log("Category:", params.category);
      const result = await axios.get(`http://localhost:8080/noticias?category=${params.category}`);
      
      console.log(result);
      setNoticias(result.data)
    } catch (error) {
      alert(error.response.data.message)
    }
  }
  useEffect(() => {
    getNoticias()
  },[]);


  return (
    <div>
      <h1> { params.category }</h1>
      <GridNoticias noticias={noticias} />
    </div>
  )
}

export default NoticiasPage
