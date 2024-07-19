import ProjetoCard from './ProjetoCard'
import ToDoListIMG from '../assets/images/todolist.png'
import x1FitnessIMG from '../assets/images/x1fitness.png'
import ProjetoAndroid from '../assets/images/projetoandroid.png'
import '../styles/projetos.css'

export default function Projetos(){
    return(
        <>
            <div id="projetos">
                <br />
                <h2>Meus Projetos</h2>
                <br />
                <br />
                <div id='projetosCards'>
                    <ProjetoCard titulo='To-do List com Flask' img={ToDoListIMG} descricao="Projeto simples de to-do list (lista de tarefas) feito com FLask (framework python) e Bootstrap no Front-end." url="https://todoflasklan.squareweb.app/"/>
                    <ProjetoCard titulo='Landing Page - x1Fitness' img={x1FitnessIMG} descricao="Um simples website feito em HTML & CSS como projeto da faculdade." url="https://x1fitness.squareweb.app/"/>
                    <ProjetoCard titulo='Projeto Android' img={ProjetoAndroid} descricao="Website feito para exercício do curso de HTML & CSS do Curso em Vídeo." url="https://irlanferreira.github.io/projeto-android/#"/>
                    

                    
                </div>

                <div id='youtube'>
                    <h2><a href="https://www.youtube.com/@lan_code">Conheça meu canal no YouTube</a></h2>
                    <div id='videos'>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/gVeFRRNx90g" title="FLASK - Criando Rotas Com Python" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/oIwRnMT6A6o" title="DATETIME! - MANIPULANDO DATAS COM PYTHON (Guia Completo) - 2024" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </>
    )
}