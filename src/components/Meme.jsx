export default function Meme(){
    return(
        <div className="main">
            <form className="form" action="">
                {/* <label htmlFor="top-text">Top Text</label> */}
                <input className="form-input" id="top-text" name="top-text" type="text" placeholder="Shut up" />
                {/* <label htmlFor="bottom-text">Bottom Text</label> */}
                <input className="form-input" id="bottom-text" name="bottom-text" type="text" placeholder="And take my money" />
                <button type="submit" className="form-submit-button">Get a new meme image 🖼️</button>
            </form>
        </div>
    )
}