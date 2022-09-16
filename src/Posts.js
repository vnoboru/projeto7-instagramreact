function DadosPost(props){
    return(
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.imagem} />
                    {props.usuario}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={props.conteudo} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src="./img/respondeai.svg" />
                    <div class="texto">
                        Curtido por <strong>{props.text}</strong> e
                        <strong> outras {props.number} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default function Posts(){
        const dadosPosts = [
            {imagem:"./img/meowed.svg",
            usuario:"meowed",
            conteudo:"./img/gato-telefone.svg",
            text: "respondeai",
            number: "101.523"
            },

            {imagem:"./img/barked.svg",
            usuario:"barked",
            conteudo:"./img/dog.svg",
            text: "adorable_animals",
            number: "99.159"
            }
        ];

    return(
        <div class="posts">
            {dadosPosts.map((d) =>
            <DadosPost
                imagem={d.imagem}
                usuario={d.usuario}
                conteudo={d.conteudo}
                text={d.text}
                number={d.number}
            />)};
        </div>
    );
}
