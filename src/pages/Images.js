import React, { useState, useEffect } from 'react'
import api from "../services/api";
import "./Images.css"
const Images = () => {
    const [url, setUrl] = useState([])
    const [req, setReq] = useState()
    const [isFetch, setIsFetch] = useState(false)
    
    const checkLinks = (response) => {
        setUrl([])
        setReq(response.data)
        response.data.map(e => {
            if (e.link.substr(e.link.length - 3, 3) !== "com") {
                url.push(e.link)
            }
            return null
        })
        setUrl(url)
        console.log(url);
        console.log(req);
    }

    async function loadImages() {
        await api
            .get("imagem/")
            .then((response) => { checkLinks(response); setIsFetch(true) })
    }

    useEffect(() => {
        loadImages()
    }, [isFetch])

    return (
        <div className="container-Images">
            <div className="container-body-images">
                {url && url.map(e => { return <img data-aos="fade-in" data-aos-duration="800" key={Math.floor(Math.random()*1000)} src={e} alt="AAA" /> })}
            </div>
        </div>
    );
}

export default Images
