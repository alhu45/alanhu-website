import './styles/Home.css'
import { useTypewriter, Cursor} from 'react-simple-typewriter'
import vidBackground from './assets/background.mp4'
import background from './assets/image.png'
import Navbar from './components/Navbar.jsx'
import { Link } from "react-router-dom";

function App() {
  const [typeEffect] = useTypewriter({
    words: ['printf("Hello World!");', 'System.out.println("Hello World!");', 'print("Hello World!")'],
    loop: {},
    typeSpeed: 80,
    deleteSpeed: 50,
});

  return (
    <>  
      <div className = "main">
      {/* <video className = "vid-image" src = {vidBackground} autoPlay loop muted/> */}
      <img className = "background-image" src = {background}/>
      <Navbar />
        <div className = "content">
            <h1 className = "font-3">
                <span>{typeEffect}</span>
                <Cursor />
            </h1>
            <h1 className = "font">Alan Hu</h1>
            <p className = "font-2">Computer Engineering Student at Queen's University</p>
            <div className="buttons">
                <div class="social-links">
                    <div id="linkedin" class="social-btn flex-center">
                        <a href = "https://www.linkedin.com/in/alhu45/"><svg viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"></path></svg></a><span>Connect!</span>
                    </div>

                    <div id="github" class="social-btn flex-center">
                        <a href = "https://github.com/alhu45/"><svg viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg></a><span>Github!</span>
                    </div>
                </div>
                {/* <a href = "https://www.linkedin.com/in/alan-hu-a9a92a232/"><img className = "socials" src = {linkedin}/></a>
                <a href = "https://github.com/alhu45/"><img className = "socials" src = {github}/></a> */}
            </div>
            <div className="buttons">
                <Link to = "/about"> 
                    <button class="cta">
                        <span>Check me out!</span>
                        <svg width="15px" height="10px" viewBox="0 0 13 10">
                            <path d="M1,5 L11,5"></path>
                            <polyline points="8 1 12 5 8 9"></polyline>
                        </svg>
                    </button>
                </Link>
            </div>
          </div>
      </div>
    </>
  )
}

export default App
