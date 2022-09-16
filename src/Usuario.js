function MenuUsuario(props){
    return(
    <div class="usuario">
        <img src={props.imagem} />
    <div class="texto">
        <strong>{props.strong}</strong>
            <span>
                {props.span}
                <ion-icon name="pencil"></ion-icon>
            </span>
        </div>
    </div>
    );
}

export default function Usuario(){
    return(
        <MenuUsuario imagem="./img/catanacomics.svg" strong="catanacomics" span="Catana"/>
    );
}
