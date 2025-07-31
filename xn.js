const caixaPrincipal = document.querySelector(".caixa-principal")
const caixaPerguntas = document.querySelector(".caixa-perguntas")
const caixaAlternativas = document.querySelector(".caixa-alternativas")
const caixaResultado = document.querySelector(".caixa-resultado")
const textoResultado = document.querySelector(".texto-resultado")

const perguntas = [
  {
    enunciado: "1. Qual profissão mais combina com você?",
    alternativas: [
      {
        texto: "Modelo, atriz ou designer de moda",
        afirmacao: "Você tem um lado glamouroso e adora estar no centro das atenções.",
      },
      {
        texto: "Astronauta, veterinária ou engenheira",
        afirmacao: "Você é aventureira e gosta de desafios que fazem a diferença.",
      },
    ],
  },
  {
    enunciado: "2. Qual é o seu estilo de roupa preferido?",
    alternativas: [
      {
        texto: "Vestidos elegantes, salto alto e muito rosa",
        afirmacao: "Você adora o clássico e o feminino, sempre impecável.",
      },
      {
        texto: "Roupas práticas, tênis confortável e cores variadas",
        afirmacao: "Você prioriza o conforto e a funcionalidade no seu visual.",
      },
    ],
  },
  {
    enunciado: "3. Como você prefere passar seu tempo livre?",
    alternativas: [
      {
        texto: "Shopping, spa e festas glamourosas",
        afirmacao: "Você curte o luxo e momentos de relaxamento sofisticados.",
      },
      {
        texto: "Esportes, viagens e atividades ao ar livre",
        afirmacao: "Você é ativa e adora explorar novos lugares e experiências.",
      },
    ],
  },
  {
    enunciado: "4. Qual combinação de cores mais te representa?",
    alternativas: [
      { texto: "Rosa, dourado e branco", afirmacao: "Você tem um coração romântico e adora o tradicional." },
      { texto: "Azul, verde e roxo", afirmacao: "Você é moderna e gosta de quebrar padrões estabelecidos." },
    ],
  },
  {
    enunciado: "5. Qual tipo de aventura mais te emociona?",
    alternativas: [
      {
        texto: "Desfile de moda em Paris ou red carpet em Hollywood",
        afirmacao: "Você sonha com o mundo do glamour e da fama.",
      },
      {
        texto: "Expedição na Amazônia ou missão espacial",
        afirmacao: "Você busca aventuras que expandem horizontes e conhecimento.",
      },
    ],
  },
]

let atual = 0
let historiaFinal = ""
let contadorA = 0
let contadorB = 0

function mostraPergunta() {
  if (atual >= perguntas.length) {
    mostraResultado()
    return
  }
  const perguntaAtual = perguntas[atual]
  caixaPerguntas.textContent = perguntaAtual.enunciado
  caixaAlternativas.textContent = ""

  for (let i = 0; i < perguntaAtual.alternativas.length; i++) {
    const alternativa = perguntaAtual.alternativas[i]
    const botao = document.createElement("button")
    botao.textContent = alternativa.texto
    botao.addEventListener("click", () => respostaSelecionada(alternativa, i))
    caixaAlternativas.appendChild(botao)
  }
}

function respostaSelecionada(opcao, indice) {
  historiaFinal += opcao.afirmacao + " "
  if (indice === 0) {
    contadorA++
  } else {
    contadorB++
  }
  atual++
  mostraPergunta()
}

function mostraResultado() {
  caixaPerguntas.textContent = "Seu resultado:"
  let tipoBarbie = ""

  if (contadorA > contadorB) {
    tipoBarbie =
      "\n\n💖 Barbie Clássica – A Princesa do Glamour\nVocê é a Barbie dos sonhos! Elegante, sofisticada e sempre impecável. Adora o mundo da moda, o luxo e tudo que é cor-de-rosa. Você inspira outras pessoas com seu estilo único e sua personalidade encantadora. Sua vida é como um conto de fadas moderno!"
  } else if (contadorB > contadorA) {
    tipoBarbie =
      "\n\n🚀 Barbie Aventureira – A Exploradora dos Sonhos\nVocê é a Barbie que quebra barreiras! Corajosa, inteligente e sempre pronta para novos desafios. Não tem medo de se sujar, explorar o desconhecido e mostrar que pode ser qualquer coisa que quiser. Você é uma inspiração para quem busca aventura e inovação!"
  } else {
    tipoBarbie =
      "\n\n✨ Barbie Equilibrada – A Melhor dos Dois Mundos\nVocê consegue ser glamourosa e aventureira ao mesmo tempo! Sabe quando usar salto alto e quando calçar tênis. Você representa a Barbie moderna: versátil, autêntica e capaz de brilhar em qualquer situação. Seu equilíbrio é sua maior força!"
  }

  textoResultado.textContent = historiaFinal.trim() + tipoBarbie
  caixaAlternativas.textContent = ""
}

mostraPergunta()
