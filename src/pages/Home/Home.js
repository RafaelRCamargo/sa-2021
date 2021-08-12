import React from 'react';
import "./css/style.scss"

let Home = () => {
    return (
        <>
            <div className="bg-tinta-meio">
                <img src="assets/TintaMeio.svg" alt="" />
            </div>
            <section id="sobre" className="container sobre mb-2 mt-2">
                <div className="container-item">
                    <h3>Sobre a semana da arte</h3>
                    <h5 className="mt-2">A semana da arte é um evento criado pela coordenação pedagógica
                        da instituição SESI SENAI, de Florianópolis, em colaboração com os docentes,
                        que tem como objetivo unir a escola em um único projeto, onde nesse projeto,
                        a arte se torna o principal meio de comunicação e expressão, utilizando textos,
                        jogos, colagens e edições como ferramenta. </h5>
                </div>
                <div className="container-item text-center">
                    <img src="assets/teenagers-void.jpg" alt="Imagem da obra principal criada pelo grupo" />
                    <h6 className="bold">Teenager's void</h6>
                </div>
            </section>

            <section id="sobre" className="container sobre mb-2 mt-2">
                <div className="container-item">
                    <h3>Sobre o site desenvolvido</h3>
                    <h5 className="mt-2">A semana da arte é um evento criado pela coordenação pedagógica
                        da instituição SESI SENAI, de Florianópolis, em colaboração com os docentes,
                        que tem como objetivo unir a escola em um único projeto, onde nesse projeto,
                        a arte se torna o principal meio de comunicação e expressão, utilizando textos,
                        jogos, colagens e edições como ferramenta. </h5>
                </div>
                <div className="container-item text-center">
                    <img src="assets/grupo.jpeg" alt="Imagem do grupo" />
                    <h6 className="bold">Canned Chaos 3C</h6>
                </div>
            </section>

            <section id="sobre" className="container sobre mb-2 mt-2">
                <div className="container-item">
                    <h3>Teenager's void</h3>
                    <h4 className="mt-1">Estilo: Pop Art</h4>
                    <h5 className="mt-2">Evidenciando elementos da infância de muitos,
                        a obra também tem sua parte atual, com memes e imagens que viralizaram há não muito tempo.
                        Cores vivas e um filtro vintage estão presentes também. A obra faz alusão a mente de um adolescente,
                        que está repleta de coisas, que juntas, parecem um tanto quanto confusas. </h5>
                </div>
                <div className="container-item text-center">
                    <img src="assets/teenagers-void.jpg" alt="Imagem da obra" />
                    <h6 className="bold">Autor: Marcia Ravadelli</h6>
                </div>
            </section>

            <section id="sobre" className="container sobre mb-2 mt-2">
                <div className="container-item">
                    <h3>Nostalgia</h3>
                    <h4 className="mt-1">Estilo: Pop Art</h4>
                    <h5 className="mt-2">Assim como o nome já diz, a obra Nostalgia foi criada com a intenção de dar
                        um gostinho da infância do brasileiro por meio do uso da Pop Art. Utilizando várias imagens de HQ’s e
                        formas
                        coloridas, ela mostra uma representação do bairro do Limoeiro, icônico lar da Turma da Mônica, criação
                        do Mauricio de Souza. </h5>
                </div>
                <div className="container-item text-center">
                    <img src="assets/nostalgia.png" alt="Imagem da obra" />
                    <h6 className="bold">Autor: Laura Ferrari</h6>
                </div>
            </section>

            <section id="sobre" className="container sobre mb-2 mt-2">
                <div className="container-item">
                    <h3>Who's the monster?</h3>
                    <h4 className="mt-1">Estilo: Arte Urbana</h4>
                    <h5 className="mt-2">A obra demonstra como a vida das cidades destrói a arte e diminui cada vez mais sua
                        valorização,
                        trazendo um “monstro” sendo atacado por humanos e um questionamento sobre quem realmente é o monstro: a
                        cidade que destrói as expressões
                        artísticas e deprecia a arte ou um animal gigante que destrói a cidade?</h5>
                </div>
                <div className="container-item text-center">
                    <img src="assets/whos-the-monster.png" alt="Imagem da obra" />
                    <h6 className="bold">Autor: Marcia Ravadelli</h6>
                </div>
            </section>

            <section id="sobre" className="container sobre mb-2 mt-2">
                <div className="container-item">
                    <h3>Ocean Invader</h3>
                    <h4 className="mt-1">Estilo: Arte Urbana</h4>
                    <h5 className="mt-2">A obra mostra a famosa ilha da magia, cheia de criaturas inusitadas e diferentes das quais nós lemos nas histórias e lendas sobre esse lugar, como as de Franklin Cascaes.</h5>
                </div>
                <div className="container-item text-center">
                    <img src="assets/ocean-invader.jpg" alt="Imagem da obra" />
                    <h6 className="bold">Autor: Laura Ferrari</h6>
                </div>
            </section>
            <footer>
                <div className="list-item">
                    <div className="info p-3">
                        <h6 className="footer-text bolder">Devs:</h6>
                        <h6 className="footer-text">Jhonatan A. Pereira</h6>
                        <div className="social">
                            <a href="https://github.com/JhonatanAlves4" target="blank" rel="noreferrer"><img className="icon-footer" src="assets/github-square-brands.svg" alt="" /></a>
                            <a href="https://www.linkedin.com/in/jhonatan-alves-pereira-32486a19a/" target="blank" rel="noreferrer"><img className="icon-footer" src="assets/linkedin-brands.svg" alt="" /></a>
                        </div>
                        <h6 className="footer-text">Rafael R. Camargo</h6>
                        <div className="social">
                            <a href="https://github.com/RafaelRCamargo" target="blank" rel="noreferrer"><img className="icon-footer" src="assets/github-square-brands.svg" alt="" /></a>
                            <a href="https://www.linkedin.com/in/rafael-r-camargo-39059717a/" target="blank" rel="noreferrer"><img className="icon-footer" src="assets/linkedin-brands.svg" alt="" /></a>
                        </div>
                    </div>
                    <div className="info p-3">
                        <h6 className="footer-text bolder">Designers:</h6>
                        <h6 className="footer-text">Laura L. Ferrari</h6>
                        <div className="social">
                            <a href="https://github.com/blackkseaw" target="blank" rel="noreferrer"><img className="icon-footer" src="assets/github-square-brands.svg" alt="" /></a>
                            <a href="https://www.linkedin.com/in/laura-ferrari-6a25b220b/" target="blank" rel="noreferrer"><img className="icon-footer" src="assets/linkedin-brands.svg" alt="" /></a>
                        </div>
                        <h6 className="footer-text">Marcia E. Ravadelli</h6>
                        <div className="social">
                            <a href="https://github.com/Lerigou" target="blank" rel="noreferrer"><img className="icon-footer" src="assets/github-square-brands.svg" alt="" /></a>
                            <a href="https://www.linkedin.com/in/marcia-eduarda-ravadelli-38a5991b7/" target="blank" rel="noreferrer"><img className="icon-footer" src="assets/linkedin-brands.svg" alt="" /></a>
                        </div>
                    </div>
                    <div className="info p-2 text-right">
                        <h6 className="footer-text">Site desenvolvido com a UC de Desenvolvimento de Sistemas e Banco de dados, como avaliação da situação de aprendizagem (SA).</h6>
                        <h6 className="footer-text">Exposição das obras de artes produzidas pelos membros do grupo para a semana da arte, promovida pelo SESI SENAI.</h6>
                        <h6 className="footer-text">3 ano C 2021.</h6>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Home;