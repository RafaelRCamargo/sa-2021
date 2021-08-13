import React, { useState, useEffect } from 'react'
import api from "../services/api";
import "./Images.css"
const Images = () => {
    const [urls] = useState([])

    useEffect(() => {
        const url = []
        async function loadImages() {
            await api
                .get("imagem/")
                .then((response) => { checkLinks(response) })
        }
        const checkLinks = (response) => {
            response.data.map(e => {
                if (e.link.substr(e.link.length - 3, 3) !== "com") {
                    url.push(e.link)
                }
                return null
            })
        }
        console.log(url);
        loadImages()
    }, [])

    return (
        <div className="container-Images">
            <div className="container-body-images">
                {url && url.map(e => { return <img data-aos="fade-in" data-aos-duration="800" key={Math.floor(Math.random()*1000)} src={e} alt="AAA" /> })}
            </div>
        </div>
    );
}

export default Images
