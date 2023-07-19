import React from 'react'
import memesData from "../memesData.jsx"

export default function Meme() {

    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        memeImage: 'http://i.imgflip.com/1bij.jpg'
    })

    function memeGenerator(event) {
        const {name, value} = event.target
        setMeme(
            (prevMeme) => ({
                ...prevMeme,
                [name] : value
            })
        )
    }

    function memeImage() {
        const randomMemeIndex = Math.floor(Math.random()*100 + 1)
        const url = memesData.data.memes[randomMemeIndex].url

        setMeme(
            (prevMeme) => ({
                ...prevMeme,
                memeImage: url
            })
        )
    }

    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name = 'topText'
                    value = {meme.topText}
                    onChange={memeGenerator}

                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name = 'bottomText'
                    value = {meme.bottomText}
                    onChange = {memeGenerator}
                />
                <button 
                    className="form--button"
                    onClick={memeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img id='memeImage'  width='100%' src={meme.memeImage}/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}