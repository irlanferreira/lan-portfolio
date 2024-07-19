import '../styles/Contato.css'
import emailIcon from '../assets/images/icons/email.png'
import instagramIcon from '../assets/images/icons/instagram.png'
import githubIcon from '../assets/images/icons/github.png'
import linkedinIcon from '../assets/images/icons/linkedin.png'

export default function Contato(){
    return(
        <>
            <div id="contato">
                <h5>Entre em contato comigo</h5>
                <div id="meios_contato" className='d-flex justify-content-evenly flex-wrap' >
                    <div id="esquerda">
                        <a href="mailto:irlanferreiradasilva2@gmail.com" target='_blank'><p><img src={emailIcon} alt="" />irlanferreiradasilva2@gmail.com</p></a>

                        <a href="https://www.instagram.com/irlan.py" target='_blank'><p><img src={instagramIcon} alt="" />irlan.py</p></a>
                    </div>

                    <div id="direita">
                        <a href="https://github.com/irlanferreira" target='_blank'><p><img src={githubIcon} alt="" />irlanferreira</p></a>

                        <a href="https://www.linkedin.com/in/irlan-ferreira-b66b80263/" target='_blank'><p><img src={linkedinIcon} alt=""/>Irlan Ferreira</p></a>
                    </div>
                </div>
            </div>
        </>
    )
}