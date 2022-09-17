import React from "react";

export default function Usuario() {
  const [imagem, setImagem] = React.useState("./img/catanacomics.svg");
  const [nome, setNome] = React.useState("Catana");

  function MenuUsuario(props) {
    return (
      <div class="usuario">
        <img onClick={inserirImagem} src={props.imagem} />
        <div class="texto">
          <strong>{props.strong}</strong>
          <span>
            {props.nome}
            <ion-icon onClick={inserirNome} name="pencil"></ion-icon>
          </span>
        </div>
      </div>
    );
  }

  function inserirImagem() {
    const imagemPrompt = prompt("Insira um link de imagem!");
    setImagem(imagemPrompt);
  }

  function inserirNome() {
    const nomePrompt = prompt("Insira um nome!");
    setNome(nomePrompt);
  }

  return <MenuUsuario imagem={imagem} strong="catanacomics" nome={nome} />;
}
