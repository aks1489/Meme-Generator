export default function Meme(){
    return(
        <div className="main">
            <form className="form" action="#">
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
                <button type="submit"  className="form-submit-button">Get a new meme image 🖼️</button>
            </form>
        </div>
    )
}