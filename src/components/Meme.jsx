import memedata from "./memedata"

export default function Meme(){
    function getMemeImage(){
        if(memedata.success === true){
            const memesArray = memedata.data.memes;
            const randomNumber = Math.floor(Math.random() * memesArray.length)
            const url = memesArray[randomNumber].url
            return console.log(url)
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
                <button type="submit" onClick={getMemeImage}  className="form-submit-button">Get a new meme image 🖼️</button>
            </div>
        </div>
    )
}