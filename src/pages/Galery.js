import React, { useState } from 'react'

const Galery = () => {
    //const [image, setImage] = useState()
    const [url, setUrl] = useState()

    /*useEffect(() => {
        file.addEventListener('change', e => sendImage(e))
        return () => file.removeEventListener('change', e => sendImage(e))
    }, [file])*/

    async function sendImage(e) {
        const formdata = new FormData()
        formdata.append("image", e.target.files[0])
        await fetch("https://api.imgur.com/3/image/", {
            method: "post",
            headers: {
                Authorization: "Client-ID 7e6a8e8bd404818"
            },
            body: formdata
        }).then(data => data.json()).then(data => {setUrl(data.data.link); console.log(data);})
    }

    return (
        <>
            <input type="file" className="file" onChange={e => sendImage(e)}/>
            {url ? <> <img src={url} alt="galery" className="image" /> <p id="url"> {url} </p> </> : ''}
        </>
    );
}

export default Galery