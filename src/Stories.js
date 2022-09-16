function DadosStories(props){
return(      
    <div class="story">
        <div class="imagem">
            <img src={props.imagem} />
        </div>
        <div class="usuario">
            {props.usuario}
        </div>
    </div>
    );
}

export default function Stories(){
    const dadosUsuario = [
        {imagem:"./img/9gag.svg", usuario:"9gag"},
        {imagem:"./img/meowed.svg", usuario:"meowed"},
        {imagem:"./img/barked.svg", usuario:"barked"},
        {imagem:"./img/nathanwpylestrangeplanet.svg", usuario:"nathanwpylestrangeplanet"},
        {imagem:"./img/wawawicomics.svg", usuario:"wawawicomics"},
        {imagem:"./img/respondeai.svg", usuario:"respondeai"},
        {imagem:"./img/filomoderna.svg", usuario:"filomoderna"},
        {imagem:"./img/memeriagourmet.svg", usuario:"memeriagourmet"}
    ];

    return(
    <div class="stories">
        {dadosUsuario.map((d) => <DadosStories imagem={d.imagem} usuario={d.usuario}/>)};

        <div class="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
    </div>
    );
}
