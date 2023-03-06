const story = [ 
    { 
        message: "Olá, bem-vindo à minha visual novel!", 
        choices: [ 
            { 
                text: "Vamos Começar", 
                next: 1 
            } 
        ]
    },
    {
        message: "Você gostaria de escolher sua própria aventura?",
        choices: [
            {
                text: "Sim",
                next: 3
            },
            {
                text: "Não",
                next: 2
            }
        ]
    },
    {
        message: "Você escolheu não, fim da história.",
        choices: [
            {
                text: "Recomeçar",
                next: 0
            },
        ]
    },
    {
        message: "Você escolheu sim! Escolheremos aleatóriamente onde sua aventura irá começar!",
        choices: [
            {
                text: "Ok!",
                next: 4
            },
        ]
    },
    {        message: "Sua aventura começa na Rússia, você tem dois caminhos para escolher a erquerda e a direita.Qual você escolhe?",
        choices: [
            {
                text: "Esquerda",
                next: 5
            },
            {
                text: "Direita",
                next: 6
            }
        ]
    },
     {
        message: "Stalin dominou a Rússia e você morreu de fome. FIM!!!",
        choices: [
            {
                text: "Recomeçar",
                next: 0
            },


        ]
    },
    {
        message: "Você agora vive em um mundo no qual todos possuem armas e cartazes do mito estão espalhados pela cidade. FIM!!!",
        choices: [
            {
                text: "Recomeçar",
                next: 0
            },

        ]
    },






    

    {
        message: "Você escolheu não. Fim da história.",
        choices: []
    }
];

let currentStoryIndex = 0;

function renderMessage(message) {
    const messageElement = document.createElement("p");
    messageElement.innerText = message;
    document.body.appendChild(messageElement);
}

function renderChoices(choices) {
    const choicesContainer = document.createElement("div");
    choices.forEach(choice => {
        const choiceButton = document.createElement("button");
        choiceButton.innerText = choice.text;
        choiceButton.addEventListener("click", () => {
            currentStoryIndex = choice.next;
            render();
        });
        choicesContainer.appendChild(choiceButton);
    });
    document.body.appendChild(choicesContainer);
}

function render() {
    document.body.innerHTML = "";
    const currentStory = story[currentStoryIndex];
    renderMessage(currentStory.message);
    renderChoices(currentStory.choices);
}

render();
