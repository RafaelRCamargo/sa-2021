import React, { useState, useEffect } from 'react'
import api from "../services/api";

const Images = () => {
    const [data, setData] = useState()

    useEffect(() => {
        async function loadImages() {
            await api
                .get("imagem/")
                .then((response) => {
                    setData(response)
                    console.log(data);
                });
            }
            loadImages()
        }, [])
        
        
        return (
            <div className="container-Images">
            <div className="container-body-images">
                {/*data.map((item) => {
                    return(
                        <div>
                            item
                        </div>
                    )
                })*/}
            </div>
        </div>
    );
}

export default Images