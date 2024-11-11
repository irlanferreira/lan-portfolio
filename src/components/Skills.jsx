import '../styles/skills.css'
import EUAImg from '../assets/images/eua.png'
import HTMLCSSImg from '../assets/images/htmlcss.png'
import PythonImg from '../assets/images/python.png'
import DjangoImg from '../assets/images/django.png'
import FlaskImg from '../assets/images/flask.png'
import SkillCard from './SkillCard'

export default function Skills(){
    return (
    <>
        <h2 style={{textAlign:'center', padding:'40px 0px'}}>Hard Skills</h2>
        <div id='skills'>
            <SkillCard nome='Python' img={PythonImg} nivel='Intermediário' />
            <SkillCard nome='Flask' img={FlaskImg} nivel='Intermediário' />
            <SkillCard nome='HTML & CSS' img={HTMLCSSImg} nivel='Intermediário' />
            <SkillCard nome='Django' img={DjangoImg} nivel='Iniciante' />
            <SkillCard nome='Inglês' img={EUAImg} nivel='Intermediário' />
        </div>
    </>
    )
}