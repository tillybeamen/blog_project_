import "./write.css"

export default function Write() {
    return (
        <div className="write">
            <img className="writeImg"
                src="https://s.yimg.com/ny/api/res/1.2/UPeVb.HYFhEwI1C40epoyQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://media.zenfs.com/en/afrotech_articles_589/6106a1656e7ea84e2025566311499d40"
                alt="writing " />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fa-solid fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{ display: "none" }} />
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder="Tell your story..." typeof="text" className="writeInput writeText"></textarea>
                </div>
                <button className="writeSubmit">Publish</button>
            </form>
        </div>
    )
}
