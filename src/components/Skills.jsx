import '../styles/skills.css'
import EUAImg from '../assets/images/eua.png'
import HTMLCSSImg from '../assets/images/htmlcss.png'
import PythonImg from '../assets/images/python.png'
import ReactImg from '../assets/images/react.png'

export default function Skills(){
    return (
    <>
        <h1 style={{textAlign:'center', padding:'40px 0px'}}>Minhas Hard Skills</h1>
        <div id='skills'>
            <div className="skill">
                <h2>Inglês</h2>
                <img src={EUAImg} alt="" />
                <p>Intermediário</p>
            </div>
            <div className="skill">
                <h2>HTML & CSS</h2>
                <img src={HTMLCSSImg} alt="" />
                <p>Intermediário</p>
            </div>
            <div className="skill">
                <h2>React JS</h2>
                <img src={ReactImg} alt="" />
                <p>Iniciante</p>
            </div>
            <div className="skill">
                <h2>Python</h2>
                <img src={PythonImg} alt="" />
                <p>Intermediário</p>
            </div>
        </div>
    </>
    )
}