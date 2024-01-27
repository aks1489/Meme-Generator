import { useState } from "react";
import memedata from "./memedata"

export default function Meme(){
    const [meme,setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImg: "http://i.imgflip.com/1bij.jpg"
    })
    const [memeUrl,setMemeUrl] = useState(memedata)
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
    
    return(
        <div className="main">
            <div className="form" action="#">
                <div className="form-input-container">
                    <div className="input-box">
                        <label htmlFor="top-text" className="form-lable">Top Text</label>
                        <input className="form-input" id="top-text" name="top-text" type="text" placeholder="Shut up" />
                    </div>
                    <div className="input-box">
                        <label htmlFor="bottom-text" className="form-lable">Bottom Text</label>
                        <input className="form-input"  id="bottom-text" name="bottom-text" type="text" placeholder="And take my money" />
                    </div>
                </div>
                <button type="submit" onClick={getMemeUrl}  className="form-submit-button">Get a new meme image 🖼️</button>
            </div>
            <div className="meme-img-section">
                <img src={meme.randomImg} alt="" className="meme-img" />
            </div>
        </div>
    )
}