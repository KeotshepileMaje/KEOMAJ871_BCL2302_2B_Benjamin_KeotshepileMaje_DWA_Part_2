/**
Challenge: 

- Move the `footer` into its own component called "Footer" 
  and render that component inside the Page component.
- Move the `h1` and `ol` together into another component
  called "MainContent" and render inside Page as well.
*/

function Header() {
    return (
        <header>
            <nav>
                <img src="./react-logo.png" width="40px" />
            </nav>
        </header>
    )
}

function Footer() {
    return (
        <footer>
            <small>© 2021 Ziroll development. All rights reserved.</small>
        </footer>
    )
}

function MainContent() {
    return (
        <div>
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>It's a popular library, so I'll be 
                able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer
                if I know React</li>
            </ol>
        </div>
    )
}

function Page() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))


// /*
// Challenge: Starting from scratch, build and render the 
// HTML for our section project. Check the Google slide for 
// what you're trying to build.

// We'll be adding styling to it later.

// Hints:
// * The React logo is a file in the project tree, so you can
//   access it by using `src="./react-logo.png" in your image
//   element
// * You can also set the `width` attribute of the image element
//   just like in HTML. In the slide, I have it set to 40px
//  */

// const page = (
//   <div>
//     <img src="./react-logo.png" width='50px'/>
//     <h1>Fun facts about React</h1>
//     <ul>
//       <li>Was first released in 2013 </li>
//       <li>Was originally created by Jordan Walke</li>
//       <li>Has well over 100k stars on Github</li>
//       <li>Is maintained by Facebook</li>
//       <li>Power thousands of enterprise apps, including mobile apps</li>
//     </ul>
//   </div>
// )

// ReactDOM.render( page , document.getElementById('root'))