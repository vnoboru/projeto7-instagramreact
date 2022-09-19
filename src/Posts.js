import React from "react";

function DadosPost(props) {
  const [like, setLike] = React.useState("heart-outline");
  const [cor, setCor] = React.useState("");
  const [salvar, setSalvar] = React.useState("bookmark-outline");
  const [contar, setContar] = React.useState(props.number);

  function colocarLike() {
    if (like === "heart-outline") {
      setLike("heart");
      setCor("cor");
      setContar(props.number + 1);
    } else {
      setLike("heart-outline");
      setCor("");
      setContar(props.number);
    }
  }

  function salvarPost() {
    if (salvar === "bookmark-outline") {
      setSalvar("bookmark");
    } else {
      setSalvar("bookmark-outline");
    }
  }

  return (
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

      <div class="conteudo" onClick={colocarLike}>
        <img src={props.conteudo} />
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon name={like} onClick={colocarLike} class={cor}></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon name={salvar} onClick={salvarPost}></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img src="./img/respondeai.svg" />
          <div class="texto">
            Curtido por <strong>{props.text}</strong> e
            <strong> outras {contar} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
export default function Posts() {
  const dadosPosts = [
    {
      imagem: "./img/meowed.svg",
      usuario: "meowed",
      conteudo: "./img/gato-telefone.svg",
      text: "respondeai",
      number: 101523,
    },

    {
      imagem: "./img/barked.svg",
      usuario: "barked",
      conteudo: "./img/dog.svg",
      text: "adorable_animals",
      number: 99159,
    },
  ];

  return (
    <div class="posts">
      {dadosPosts.map((d) => (
        <DadosPost
          imagem={d.imagem}
          usuario={d.usuario}
          conteudo={d.conteudo}
          text={d.text}
          number={d.number}
        />
      ))}
    </div>
  );
}
