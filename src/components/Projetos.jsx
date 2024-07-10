import '../styles/projetos.css'

export default function Projetos(){
    return(
        <>
            <div id="projetos">
                <h2>Meus Projetos</h2>
                <div id='youtube'>
                    <h2><a href="https://www.youtube.com/@lan_code">Conheça meu canal no YouTube</a></h2>
                    <div id='videos'>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/Cp3tWEXwrTc?si=43cov_9Mjr_men0f" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/Ydd-G67iTjA?si=MFaBURzsRgKKO9iL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </>
    )
}