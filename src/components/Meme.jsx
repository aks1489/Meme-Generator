import { useEffect, useState } from "react";
import * as htmlToImage from "html-to-image"
import download from "downloadjs";

export default function Meme(){
    const [meme,setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImg: "https://i.imgflip.com/1bij.jpg"
    })
    
    const [memeUrl, setMemeUrl] = useState([])

    // useEffect(() => {
    //     fetch("https://api.imgflip.com/get_memes")
    //         .then(res => res.json())
    //         .then(data => setMemeUrl(data.data.memes))
    // }, [])

    useEffect(() =>{
        async function getMemes(){
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setMemeUrl(data.data.memes)
        }
        getMemes()
    },[])

    function getMemeUrl(){
            const randomNumber = Math.floor(Math.random() * memeUrl.length)
            const url = memeUrl[randomNumber].url;
            setMeme(prvdata => ({
                ...prvdata,
                randomImg: url
            }))
    }

    function handleChange(event){
        const {name, value} = event.target
        setMeme(prvData => ({
            ...prvData,
            [name] : value
        }))
    }

    async function handleDownload() {
        const downloadMeme = document.getElementById("memeImgSection");
    
        await htmlToImage.toPng(downloadMeme).then(dataUrl =>{
            download(dataUrl, "meme_image.png")
        }).catch(() => console.log("error in downloading"))   
    }

    return (
        <div className="main">
            <div className="form" action="#">
                <div className="form-input-container">
                    <div className="input-box">
                        <label htmlFor="topText" className="form-lable">Top Text</label>
                        <input className="form-input" id="topText" name="topText" type="text" placeholder="Shut up" value={meme.topText} onChange={handleChange}/>
                    </div>
                    <div className="input-box">
                        <label htmlFor="bottomText" className="form-lable">Bottom Text</label>
                        <input className="form-input"  id="bottomText" name="bottomText" type="text" placeholder="And take my money" value={meme.bottomText} onChange={handleChange}/>
                    </div>
                </div>
                <button type="submit" onClick={getMemeUrl}  className="form-submit-button">Get a new meme image 🖼️</button>
            </div>
            <div className="meme-img-section" id="memeImgSection">
                <img src={meme.randomImg} alt="" className="meme-img" />
                <h2 className="imgText top">{meme.topText}</h2>
                <h2 className="imgText bottome">{meme.bottomText}</h2>
            </div>
            <div className="download-section">
                <button className="download-button" onClick={handleDownload}>Download Meme 📲</button>
            </div>
        </div>
    )
}