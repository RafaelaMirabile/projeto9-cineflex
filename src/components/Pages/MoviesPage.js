import axios from 'axios';
import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import Banner from '../Banner';


export default function Menu(){
    const[filmes, setFilmes]= React.useState([]);
    
    useEffect(()=>{
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
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

