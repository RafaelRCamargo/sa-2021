import React, { useState, useEffect } from 'react'
import api from "../services/api";

const Images = () => {
    const [url, setUrl] = useState([])

    const checkLinks = (response) => {
        setUrl([])
        response.data.map(e => {
            if (e.link.substr(e.link.length - 3, 3) !== "com") {
                url.push(e.link)
            }
        })
        setUrl(url)
        console.log(url);
    }

    async function loadImages() {
        await api
            .get("imagem/")
            .then((response) => { checkLinks(response) })
    }

    useEffect(()=>{
        loadImages()
    }, [])

    return (
        <div className="container-Images">
            <div className="container-body-images">
                {url && url.map(e => { return <img key={Math.floor(Math.random()*1000)} src={e} alt="AAA" /> })}
            </div>
        </div>
    );
}

export default Images
