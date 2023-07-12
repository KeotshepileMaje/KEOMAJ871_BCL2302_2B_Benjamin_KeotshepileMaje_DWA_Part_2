import memesData from "../memesData.jsx"

export default function Meme() {
    /**
     * Challenge: Get a random image from the `memesData` array
     * when the "new meme image" button is clicked.
     * 
     * Log the URL of the image to the console. (Don't worry
     * about displaying the image yet)
     */
    
    function randomImage() {
        const randomMemeIndex = Math.floor(Math.random()*100 + 1)
        
        return console.log(memesData.data.memes[randomMemeIndex].url)
    }
    
    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button 
                    className="form--button"
                    onClick={randomImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
        </main>
    )
}