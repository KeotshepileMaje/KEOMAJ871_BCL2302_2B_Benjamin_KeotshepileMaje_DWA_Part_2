// ReactDOM.render(<h1>Hello, everyone!</h1>, document.getElementById("root"))

// ReactDOM.render( 
//     <ul>
//         <li>Bananas</li>
//         <li>Orange</li>
//         <li>Apple</li>
//         <li>Lemon</li>
//     </ul>, document.getElementById('root')
// )

// const newDiv = document.createElement('h1')
// newDiv.className = 'header'
// newDiv.textContent = 'Hello, React'

// document.getElementById('root').append(newDiv)

const page = (
    <div>
        <h1 className="header">This is JSX</h1>
        <p>This is a paragraph</p>
    </div>
)
ReactDOM.render(
    page ,
    document.getElementById("root")
)
