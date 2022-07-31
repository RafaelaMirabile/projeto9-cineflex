import axios from 'axios';
import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import Banner from "../MovieList/Banner"



export default function MoviesPage(){
    const[filmes, setFilmes]= React.useState([]);
    
    useEffect(()=>{
        const promise = axios.get("https://mock-api.driven.com.br/api/v7/cineflex/movies");
        promise.then((response) => setFilmes(response.data))},[])

    return(
        <>
            <p>Selecione o filme</p>
            <div className='menu'>
                {filmes.map((banner)=> 
                <Link to = {`/sessoes/${banner.id}`} key={banner.id}> 
                        <Banner filmesBanner ={banner.posterURL}/>
                </Link>
                )}
            </div>
        </>
    )
}

