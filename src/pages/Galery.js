import React, { useState } from 'react'
import api from "../services/api";

import './Galery.css';

const Galery = () => {
    const [url, setUrl] = useState("a.com")

    async function sendImage(e) {
        const formdata = new FormData()
        formdata.append("image", e.target.files[0])
        await fetch("https://api.imgur.com/3/image/", {
            method: "post",
            headers: {
                Authorization: "Client-ID 7e6a8e8bd404818"
            },
            body: formdata
        })
            .then(data => data.json())
            .then(data => { setUrl(data.data.link); console.log(data) })
            .catch(erro => console.log("erro", erro))
    }

    async function saveImage() {
        if (document.querySelector('.name').value) {
            if (document.querySelector('.email').value) {
                {
                    url ? (await api
                        .post("imagem/", {
                            nome: document.querySelector('.name').value,
                            email: document.querySelector('.email').value,
                            link: url,
                            day: Date.now()
                        })
                        .then((response) => console.log(response))
                        .catch((error) => console.log(error))) : alert("Preencha todos os campos!");
                }
            } else {
                alert("Preencha todos os campos!");
            }
        } else {
            alert("Preencha todos os campos!");
        }

    }

    async function loadImages() {
        await api
            .get("imagem/")
            .then((response) => setUrl(response.data[1].link));
    }

    return (
        <div className="container-galery">
            <div className="container-body-galery">
                <div className="name-input">
                    <label htmlFor="name-text">Nome:</label>
                    <br />
                    <input type="text" id="name-text" className="name" placeholder="Paulo Battistella" />
                </div>
                <div className="email-input">
                    <label htmlFor="email-input">Email:</label>
                    <br />
                    <input type="email" className="email" placeholder="paulo@paulo.com" />
                </div>

                <div className="buttons">
                    <div className="file-input">
                        <input type="file" name="file-input" id="file-input" className="file" onChange={(e) => sendImage(e)} />
                        <label className="file-input__label" htmlFor="file-input">
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="upload"
                                className="svg-inline--fa fa-upload fa-w-16"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                            >
                                <path
                                    fill="currentColor"
                                    d="M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
                                ></path>
                            </svg>
                            <span>Upload</span>
                        </label>
                    </div>

                    <button type="button" className="save-button" onClick={e => saveImage(e)}>
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="save" className="svg-inline--fa fa-save fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM224 416c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64zm96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48z"></path></svg>
                        Salvar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Galery