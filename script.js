function createQuestionGroup(title, questions) {
  const groupContainer = document.createElement("fieldset");
  groupContainer.className = "question-group";

  const legend = document.createElement("legend");
  legend.textContent = title;
  groupContainer.appendChild(legend);

  const scale = [
    "Discordo totalmente",
    "Discordo",
    "Neutro",
    "Concordo",
    "Concordo totalmente"
  ];

  questions.forEach((q, index) => {
    const questionWrapper = document.createElement("div");
    questionWrapper.className = "question";

    const questionText = document.createElement("span");
    questionText.className = "question-text";
    questionText.textContent = q;
    questionWrapper.appendChild(questionText);

    const optionsContainer = document.createElement("div");
    optionsContainer.className = "options";

    scale.forEach((optionText, i) => {
      const radio = document.createElement("input");
      radio.type = "radio";
      radio.id = `${title}-q${index + 1}-option${i}`;
      radio.name = `${title}-q${index + 1}`;
      radio.value = i;
      radio.required = true;

      const label = document.createElement("label");
      label.htmlFor = radio.id;
      label.textContent = optionText;

      optionsContainer.appendChild(radio);
      optionsContainer.appendChild(label);
    });

    questionWrapper.appendChild(optionsContainer);
    groupContainer.appendChild(questionWrapper);
  });

  return groupContainer;
}

function renderForm(app) {
  const container = document.createElement("div");
  container.className = "container";

  const header = document.createElement("header");
  header.className = "header";

  const logo = document.createElement("img");
  logo.src = "./imagem/lths_logo_profile_final.png";
  logo.alt = "LTHS Tecnologia";
  logo.className = "logo";

  const title = document.createElement("h1");
  title.textContent = "Pesquisa de Clima Organizacional - LTHS Tecnologia";

  header.appendChild(logo);
  header.appendChild(title);
  container.appendChild(header);

  const form = document.createElement("form");

  const groups = [
    {
      title: "1. Ambiente e Condições de Trabalho",
      questions: [
        "Sinto que o ambiente remoto proporcionado pela empresa é emocionalmente agradável para trabalhar.",
        "Consigo administrar meu tempo de forma eficaz enquanto trabalho em home office.",
        "A empresa promove iniciativas que contribuem para a minha qualidade de vida enquanto trabalho remotamente.",
        "A empresa fornece os equipamentos e recursos necessários para que eu possa trabalhar adequadamente de casa.",
        "Meu espaço de trabalho em casa é adequado para realizar minhas atividades com conforto e eficiência."
      ]
    },
    {
      title: "2. Qualidade da Comunicação",
      questions: [
        "A comunicação entre os colegas e equipes é clara e eficaz.",
        "Recebo informações completas e oportunas para desempenhar minhas atividades com eficiência.",
        "Tenho conhecimento claro sobre a missão, visão e valores da empresa.",
        "Sou adequadamente informado sobre assuntos e decisões que impactam meu trabalho."
      ]
    },
    {
      title: "3. Orientação para Resultados",
      questions: [
        "Minhas metas são motivadoras e apresentam desafios adequados ao meu desenvolvimento.",
        "Compreendo claramente como minhas metas impactam os resultados da empresa.",
        "Tenho clareza sobre minhas atividades, responsabilidades e prioridades no trabalho."
      ]
    },
    {
      title: "4. Identidade e Confiança",
      questions: [
        "Os valores e objetivos da empresa estão alinhados com os meus.",
        "Sinto orgulho dos propósitos da empresa.",
        "A empresa transmite confiabilidade e credibilidade.",
        "Recomendo a empresa como um bom lugar para trabalhar."
      ]
    },
    {
      title: "5. Respeito e Diversidade",
      questions: [
        "Todos são tratados com respeito na empresa.",
        "As pessoas demonstram cuidado e consideração umas pelas outras.",
        "Sinto que estamos alinhados em relação aos valores e objetivos da equipe."
      ]
    },
    {
      title: "6. Oportunidades de Desenvolvimento",
      questions: [
        "Existem oportunidades claras de crescimento profissional na empresa.",
        "A empresa oferece treinamentos ou outras formas de desenvolvimento contínuo."
      ]
    },
    {
      title: "7. Remuneração e Benefícios",
      questions: [
        "Meu salário está compatível com o mercado de trabalho.",
        "Os reconhecimentos financeiros são concedidos de forma justa.",
        "Estou satisfeito(a) com os benefícios oferecidos pela empresa."
      ]
    },
    {
      title: "8. Liderança",
      questions: [
        "Recebo da liderança orientações e suporte necessários para desempenhar bem meu trabalho.",
        "Minha gestão reconhece e incentiva o bom desempenho.",
        "A liderança valoriza e considera ideias e sugestões de melhoria."
      ]
    }
  ];

  groups.forEach(g => form.appendChild(createQuestionGroup(g.title, g.questions)));

  const submitArea = document.createElement("div");
  submitArea.className = "submit-area";

  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.className = "btn-submit";
  submitButton.textContent = "Enviar Respostas Anônimas";

  submitArea.appendChild(submitButton);
  form.appendChild(submitArea);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    app.innerHTML = `
        <div class="thankyou">
            <img src="./imagem/lths_logo_profile_final.png" alt="LTHS Tecnologia" class="logo" />
            <h2>Obrigada por participar!</h2>
            <p>Sua resposta foi registrada anonimamente.</p>
        </div>
    `;
  });

  container.appendChild(form);
  app.appendChild(container);
}

const app = document.getElementById("app");
if (app) renderForm(app);
