const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Carlinhos é um gato pequeno, pobre e tem um sonho construir uma empresa!! Qual passo seria seguro para ele fazer??? ",
        alternativas:[
            {
                texto:"planejar como vai conquistar",
                afirmacoes: "em primeiro momento decide planejar como vai conquistar, como ideia inicial decidiu juntar dinheiro para usar na empresa escolhendo."

            },
            {
                texto:"fazer um emprestimo e ir na fé",
                afirmacoes: "em primeiro momento fazer um emprestimo e ir na fé para quitar as dividas futuras decidiu"
            }
             
            ]
    },
    {
        enunciado: "Carlinhos esta pensando como construir sua empresa ele fica na duvida qual ideia de inicio seria melhor",
        alternativas:[
            {
                texto:"vender docinhos no começo para que embreve possa usar esse dinheiro para a empresa",
                afirmacoes:"vender docinhos"
            },
            {
                texto:"vender coxinha",
                afirmacoes:"vender coxinha"
            }
            
            ]
    },
    {
        enunciado: "Depois de carlinhos ter juntado dinheiro para sua empresa ele percebe que nao escolheu qual tipo de empresa ele vai ser melhor",
        alternativas:[
            {
                texto:"escolher o que ele gosta de fazer",
                afirmacoes:"para escolher o objetivo da empresa usou o metodo de escolher o que ele gosta de fazer, nessa aventura"
            },
            {
                texto:"escolher qualquer coisa",
                afirmacoes:"para escolher o objetivo da empresa usou o metodo de escolher qualquer coisa e"
            }
            
            ]
    },
    {
        enunciado: "Carlinhos descobriu que gostava muito de fazer doce entao a profissao que ele busca é",
        alternativas:[
            {
                texto:"Confeitaria",
                afirmacoes:"descobriu que gostava de Confeitaria, Carlinhos esta muito feliz com tudo isso e deseja dar o nome da empresa de Carlinhos empreendimentos"
            },
            {
                texto:"Ser policial",
                afirmacoes:"descobriu que gostava de Ser policial, Carlinhos esta muito feliz com tudo isso e deseja dar o nome da empresa de Carlinhos empreendimentos"
            }
            
            ]
    },
    {
        enunciado: "Carlinhos esta muito feliz por descobrir o objetivo da empresa a empresa de confeitaria e decide dar um nome a empresa",
        alternativas:[
            {
                texto:"Carlinhos empreendimentos na Confeitaria ",
                afirmacoes:"na Confeitaria"
            },
            {
                texto:"chazinho de boldo do delegado Carlinhos",
                afirmacoes:"na delegacia"
            }
            
            ]
    }
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

 function mostraPergunta () {
    if(atual >=perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas [atual]
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas (){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa))
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacoes;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();

}

function mostraResultado(){
    caixaPerguntas.textContent = "carlos fez suas escolhas e...";
    caixaResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();