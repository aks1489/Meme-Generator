import { useState } from "react";
import memedata from "./memedata"

export default function Meme(){
    const [meme,setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImg: "http://i.imgflip.com/1bij.jpg"
    })
    // eslint-disable-next-line no-unused-vars
    const [memeUrl] = useState(memedata)
    function getMemeUrl(){
        if(memeUrl.success === true){
            const memesArray = memeUrl.data.memes;
            const randomNumber = Math.floor(Math.random() * memesArray.length)
            const url = memesArray[randomNumber].url;
            setMeme(prvdata => ({
                ...prvdata,
                randomImg: url
            }))
            return console.log(memeUrl)
        }else{
            console.log("not connected with database")
        }
    }

    function handleChange(event){
        const {name, value} = event.target
        setMeme(prvData => ({
            ...prvData,
            [name] : value
        }))
    }
    return(
        <div className="main">
            <div className="form" action="#">
                <div className="form-input-container">
                    <div className="input-box">
                        <label htmlFor="top-text" className="form-lable">Top Text</label>
                        <input className="form-input" id="topText" name="topText" type="text" placeholder="Shut up" value={meme.topText} onChange={handleChange}/>
                    </div>
                    <div className="input-box">
                        <label htmlFor="bottom-text" className="form-lable">Bottom Text</label>
                        <input className="form-input"  id="bottomText" name="bottomText" type="text" placeholder="And take my money" value={meme.bottomText} onChange={handleChange}/>
                    </div>
                </div>
                <button type="submit" onClick={getMemeUrl}  className="form-submit-button">Get a new meme image 🖼️</button>
            </div>
            <div className="meme-img-section">
                <img src={meme.randomImg} alt="" className="meme-img" />
                <h2 className="imgText top">{meme.topText}</h2>
                <h2 className="imgText bottome">{meme.bottomText}</h2>
            </div>
        </div>
    )
}