export default function Meme(){
    return(
        <form className="form" action="">
            <div className="form-input-container">
                <label htmlFor="top-text">Top Text</label>
                <input className="form-imput-box" id="top-text" name="top-text" type="text" value="Shut up"/>
                <label htmlFor="bottom-text">Bottom Text</label>
                <input className="form-input-box" id="bottom-text" name="bottom-text" type="text" value="And take my money" />
            </div>
            <div className="form-submit">
                <button type="submit" className="form-submit-button">Get a new meme image 🖼️</button>
            </div>
        </form>
    )
}