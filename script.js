const STORAGE_KEY = "lths-pesquisa-clima-2026";

const escalaConcordancia = [
  {
    value: "1",
    number: "1",
    label: "Discordo totalmente"
  },
  {
    value: "2",
    number: "2",
    label: "Discordo"
  },
  {
    value: "3",
    number: "3",
    label: "Nem concordo nem discordo"
  },
  {
    value: "4",
    number: "4",
    label: "Concordo"
  },
  {
    value: "5",
    number: "5",
    label: "Concordo totalmente"
  },
  {
    value: "na",
    number: "—",
    label: "Não se aplica"
  }
];

const sections = [
  {
    id: "engajamento",
    title: "Engajamento e vínculo",
    description:
      "Avalie sua conexão com o trabalho, sua motivação e sua intenção de permanência.",
    questions: [
      {
        id: "engajamento_contribuicao",
        type: "likert",
        text:
          "Sinto que meu trabalho contribui para os objetivos da LTHS Tecnologia.",
        required: true
      },
      {
        id: "engajamento_orgulho",
        type: "likert",
        text:
          "Tenho orgulho do trabalho que realizamos como empresa.",
        required: true
      },
      {
        id: "engajamento_motivacao",
        type: "likert",
        text:
          "Sinto-me motivado(a) a entregar um trabalho de qualidade.",
        required: true
      },
      {
        id: "engajamento_permanencia",
        type: "likert",
        text:
          "Pretendo continuar trabalhando na empresa nos próximos dois anos.",
        required: true
      }
    ]
  },
  {
    id: "clareza",
    title: "Clareza e condições de trabalho",
    description:
      "Considere as expectativas, prioridades, autonomia e recursos disponíveis.",
    questions: [
      {
        id: "clareza_expectativas",
        type: "likert",
        text:
          "Tenho clareza sobre o que é esperado de mim no trabalho.",
        required: true
      },
      {
        id: "clareza_prioridades",
        type: "likert",
        text:
          "Consigo identificar claramente minhas prioridades e responsabilidades.",
        required: true
      },
      {
        id: "clareza_recursos",
        type: "likert",
        text:
          "Tenho acesso aos recursos, sistemas e informações necessários para trabalhar bem.",
        required: true
      },
      {
        id: "clareza_autonomia",
        type: "likert",
        text:
          "Tenho autonomia adequada para tomar decisões relacionadas às minhas atividades.",
        required: true
      }
    ]
  },
  {
    id: "lideranca",
    title: "Liderança e gestão",
    description:
      "Avalie o suporte, o reconhecimento e a atuação da liderança.",
    questions: [
      {
        id: "lideranca_suporte",
        type: "likert",
        text:
          "Recebo da liderança o suporte necessário para desempenhar bem meu trabalho.",
        required: true
      },
      {
        id: "lideranca_feedback",
        type: "likert",
        text:
          "Recebo feedbacks claros e úteis sobre meu desempenho.",
        required: true
      },
      {
        id: "lideranca_reconhecimento",
        type: "likert",
        text:
          "A liderança reconhece contribuições e bons resultados de maneira adequada.",
        required: true
      },
      {
        id: "lideranca_coerencia",
        type: "likert",
        text:
          "As decisões da liderança são coerentes com os valores comunicados pela empresa.",
        required: true
      }
    ]
  },
  {
    id: "comunicacao",
    title: "Comunicação e colaboração",
    description:
      "Considere como as informações circulam e como as pessoas trabalham em conjunto.",
    questions: [
      {
        id: "comunicacao_informacoes",
        type: "likert",
        text:
          "Recebo informações importantes em tempo adequado para realizar meu trabalho.",
        required: true
      },
      {
        id: "comunicacao_transparencia",
        type: "likert",
        text:
          "Mudanças e decisões que afetam meu trabalho são comunicadas com transparência.",
        required: true
      },
      {
        id: "comunicacao_colaboracao",
        type: "likert",
        text:
          "Existe colaboração efetiva entre colegas, equipes e áreas.",
        required: true
      },
      {
        id: "comunicacao_compartilhamento",
        type: "likert",
        text:
          "As pessoas compartilham conhecimentos e informações relevantes.",
        required: true
      }
    ]
  },
  {
    id: "inclusao",
    title: "Respeito, inclusão e segurança psicológica",
    description:
      "Avalie se o ambiente permite participação, respeito e expressão de opiniões.",
    questions: [
      {
        id: "inclusao_respeito",
        type: "likert",
        text:
          "As pessoas são tratadas com respeito, independentemente de suas características ou posições.",
        required: true
      },
      {
        id: "inclusao_opiniao",
        type: "likert",
        text:
          "Sinto segurança para expressar opiniões, dúvidas ou discordâncias.",
        required: true
      },
      {
        id: "inclusao_erros",
        type: "likert",
        text:
          "Os erros são tratados como oportunidades de aprendizado e melhoria.",
        required: true
      },
      {
        id: "inclusao_ideias",
        type: "likert",
        text:
          "Minhas ideias e sugestões são ouvidas e consideradas.",
        required: true
      }
    ]
  },
  {
    id: "desenvolvimento",
    title: "Desenvolvimento, reconhecimento e recompensas",
    description:
      "Considere oportunidades de aprendizado, carreira, remuneração e reconhecimento.",
    questions: [
      {
        id: "desenvolvimento_aprendizado",
        type: "likert",
        text:
          "Tenho oportunidades adequadas para aprender e desenvolver novas competências.",
        required: true
      },
      {
        id: "desenvolvimento_carreira",
        type: "likert",
        text:
          "Consigo visualizar possibilidades de crescimento ou evolução profissional.",
        required: true
      },
      {
        id: "desenvolvimento_justica",
        type: "likert",
        text:
          "O reconhecimento pelo desempenho é realizado de maneira justa.",
        required: true
      },
      {
        id: "desenvolvimento_remuneracao",
        type: "likert",
        text:
          "Considero minha remuneração e meus benefícios compatíveis com minhas responsabilidades.",
        required: true
      }
    ]
  },
  {
    id: "bem_estar",
    title: "Bem-estar e modelo de trabalho",
    description:
      "Avalie carga de trabalho, equilíbrio e condições do modelo presencial, remoto ou híbrido.",
    questions: [
      {
        id: "bem_estar_carga",
        type: "likert",
        text:
          "Minha carga de trabalho é sustentável na maior parte do tempo.",
        required: true
      },
      {
        id: "bem_estar_equilibrio",
        type: "likert",
        text:
          "Consigo manter um equilíbrio saudável entre vida profissional e pessoal.",
        required: true
      },
      {
        id: "bem_estar_cuidado",
        type: "likert",
        text:
          "Percebo que a empresa demonstra preocupação com o bem-estar das pessoas.",
        required: true
      },
      {
        id: "bem_estar_modelo",
        type: "likert",
        text:
          "O modelo de trabalho adotado oferece condições adequadas para realizar minhas atividades.",
        required: true
      }
    ]
  },
  {
    id: "comentarios",
    title: "Recomendação e comentários finais",
    description:
      "Para concluir, deixe sua avaliação geral e sugestões de melhoria.",
    questions: [
      {
        id: "enps",
        type: "nps",
        text:
          "Em uma escala de 0 a 10, qual é a probabilidade de você recomendar a LTHS Tecnologia como um bom lugar para trabalhar?",
        required: true
      },
      {
        id: "comentario_continuar",
        type: "textarea",
        text:
          "O que a empresa deveria continuar fazendo?",
        placeholder:
          "Descreva práticas, comportamentos ou iniciativas que considera positivas.",
        required: false,
        maxlength: 800
      },
      {
        id: "comentario_melhoria",
        type: "textarea",
        text:
          "Qual mudança teria maior impacto positivo na sua experiência de trabalho?",
        placeholder:
          "Compartilhe sua principal sugestão de melhoria.",
        required: false,
        maxlength: 800
      },
      {
        id: "tempo_empresa",
        type: "select",
        text:
          "Há quanto tempo você trabalha na empresa?",
        required: false,
        options: [
          {
            value: "",
            label: "Prefiro não informar"
          },
          {
            value: "menos_6_meses",
            label: "Menos de 6 meses"
          },
          {
            value: "6_12_meses",
            label: "De 6 meses a 1 ano"
          },
          {
            value: "1_2_anos",
            label: "De 1 a 2 anos"
          },
          {
            value: "mais_2_anos",
            label: "Mais de 2 anos"
          }
        ]
      },
      {
        id: "modelo_trabalho",
        type: "select",
        text:
          "Qual é o seu modelo de trabalho predominante?",
        required: false,
        options: [
          {
            value: "",
            label: "Prefiro não informar"
          },
          {
            value: "remoto",
            label: "Remoto"
          },
          {
            value: "hibrido",
            label: "Híbrido"
          },
          {
            value: "presencial",
            label: "Presencial"
          }
        ]
      }
    ]
  }
];

const app = document.getElementById("app");

function estadoInicial() {
  return {
    currentSection: 0,
    answers: {}
  };
}

function carregarRascunho() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (!saved) {
      return estadoInicial();
    }

    const parsed = JSON.parse(saved);

    if (
      typeof parsed.currentSection !== "number" ||
      !parsed.answers
    ) {
      return estadoInicial();
    }

    parsed.currentSection = Math.min(
      Math.max(parsed.currentSection, 0),
      sections.length - 1
    );

    return parsed;
  } catch {
    return estadoInicial();
  }
}

let state = carregarRascunho();

function salvarRascunho() {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(state)
    );
  } catch {
    return;
  }
}

function apagarRascunho() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    return;
  }
}

function possuiRascunho() {
  return Object.keys(state.answers).length > 0;
}

function totalObrigatorias() {
  return sections.reduce((total, section) => {
    return total + section.questions.filter(question => {
      return question.required;
    }).length;
  }, 0);
}

function totalRespondidas() {
  return sections.reduce((total, section) => {
    return total + section.questions.filter(question => {
      if (!question.required) {
        return false;
      }

      const value = state.answers[question.id];

      return (
        value !== undefined &&
        value !== null &&
        String(value).trim() !== ""
      );
    }).length;
  }, 0);
}

function templateMarca() {
  return `
    <div class="company-brand">
      <div class="company-logo">
        <img
          src="./imagem/lths_logo_profile_final.png"
          alt="Logo da LTHS Tecnologia"
        >
      </div>

      <div class="company-brand-text">
        <strong>LTHS Tecnologia</strong>
        <span>Pesquisa de clima e engajamento</span>
      </div>
    </div>
  `;
}

function renderWelcome() {
  const hasDraft = possuiRascunho();

  app.innerHTML = `
    <div class="intro-page">
      <header class="intro-header">
        ${templateMarca()}

        <div class="demo-badge">
          <span></span>
          Projeto demonstrativo
        </div>
      </header>

      <main class="intro-main">
        <section class="intro-card">
          <div class="intro-hero">
            <span class="intro-label">
              Pesquisa de Clima 2026
            </span>

            <h1>
              Sua percepção ajuda a construir um ambiente melhor
            </h1>

            <p>
              Esta pesquisa busca compreender a experiência das pessoas
              em temas como liderança, comunicação, desenvolvimento,
              inclusão, bem-estar e engajamento.
            </p>
          </div>

          <div class="intro-content">
            <h2>Antes de começar</h2>

            <p>
              Responda considerando sua experiência recente na empresa.
              Não existem respostas certas ou erradas: o mais importante
              é que sua avaliação seja sincera.
            </p>

            <div class="survey-details">
              <article class="detail-card">
                <div class="detail-icon">◷</div>

                <div>
                  <strong>6 a 8 minutos</strong>
                  <span>Tempo estimado de preenchimento</span>
                </div>
              </article>

              <article class="detail-card">
                <div class="detail-icon">8</div>

                <div>
                  <strong>8 etapas</strong>
                  <span>Perguntas organizadas por tema</span>
                </div>
              </article>

              <article class="detail-card">
                <div class="detail-icon">✓</div>

                <div>
                  <strong>Participação voluntária</strong>
                  <span>Você pode sair e continuar depois</span>
                </div>
              </article>
            </div>

            <div class="privacy-box">
              <div class="privacy-icon"></div>

              <div>
                <strong>Confidencialidade das respostas</strong>

                <p>
                  A pesquisa não solicita nome ou e-mail. Em uma aplicação
                  real, os resultados devem ser apresentados somente de
                  forma agrupada, com pelo menos cinco participantes.
                  Comentários podem ser apresentados integralmente, portanto
                  evite inserir nomes ou informações que identifiquem pessoas.
                </p>
              </div>
            </div>

            <div class="demo-warning">
              Esta é uma versão demonstrativa para portfólio. As respostas
              ficam salvas apenas neste navegador durante o preenchimento
              e não são enviadas para banco de dados, e-mail ou servidor.
            </div>

            <div class="intro-actions">
              <button
                id="startSurvey"
                class="primary-button"
                type="button"
              >
                ${hasDraft ? "Continuar pesquisa" : "Iniciar pesquisa"}
                <span>→</span>
              </button>

              ${
                hasDraft
                  ? `
                    <button
                      id="restartSurvey"
                      class="secondary-button"
                      type="button"
                    >
                      Começar novamente
                    </button>
                  `
                  : ""
              }
            </div>

            ${
              hasDraft
                ? `
                  <div class="draft-message">
                    <span></span>
                    Encontramos um rascunho salvo neste navegador.
                  </div>
                `
                : ""
            }
          </div>
        </section>
      </main>
    </div>
  `;

  document
    .getElementById("startSurvey")
    .addEventListener("click", renderSurvey);

  const restartButton =
    document.getElementById("restartSurvey");

  if (restartButton) {
    restartButton.addEventListener("click", () => {
      state = estadoInicial();
      apagarRascunho();
      renderWelcome();
    });
  }
}

function renderLikertQuestion(question, index) {
  const options = escalaConcordancia
    .map(option => {
      const checked =
        state.answers[question.id] === option.value;

      return `
        <label class="likert-option">
          <input
            type="radio"
            name="${question.id}"
            value="${option.value}"
            ${checked ? "checked" : ""}
          >

          <span class="likert-button">
            <span class="likert-number">
              ${option.number}
            </span>

            <span class="likert-label">
              ${option.label}
            </span>
          </span>
        </label>
      `;
    })
    .join("");

  return `
    <fieldset
      id="card-${question.id}"
      class="question-card"
    >
      <legend class="question-title">
        <span class="question-number">
          ${index + 1}
        </span>

        <span>${question.text}</span>

        <em class="required-indicator">
          Obrigatória
        </em>
      </legend>

      <div class="likert-grid">
        ${options}
      </div>
    </fieldset>
  `;
}

function renderNpsQuestion(question, index) {
  const options = Array.from(
    {
      length: 11
    },
    (_, number) => {
      const value = String(number);
      const checked = state.answers[question.id] === value;

      return `
        <label class="nps-option">
          <input
            type="radio"
            name="${question.id}"
            value="${value}"
            ${checked ? "checked" : ""}
          >

          <span class="nps-button">
            ${number}
          </span>
        </label>
      `;
    }
  ).join("");

  return `
    <fieldset
      id="card-${question.id}"
      class="question-card"
    >
      <legend class="question-title">
        <span class="question-number">
          ${index + 1}
        </span>

        <span>${question.text}</span>

        <em class="required-indicator">
          Obrigatória
        </em>
      </legend>

      <div class="nps-scale">
        ${options}
      </div>

      <div class="nps-labels">
        <span>0 — Nada provável</span>
        <span>10 — Extremamente provável</span>
      </div>
    </fieldset>
  `;
}

function renderTextareaQuestion(question, index) {
  return `
    <fieldset
      id="card-${question.id}"
      class="question-card"
    >
      <legend class="question-title">
        <span class="question-number">
          ${index + 1}
        </span>

        <span>${question.text}</span>

        <em class="required-indicator">
          Opcional
        </em>
      </legend>

      <div class="textarea-wrapper">
        <textarea
          id="${question.id}"
          name="${question.id}"
          maxlength="${question.maxlength}"
          placeholder="${question.placeholder}"
        ></textarea>

        <span class="character-counter">
          <span id="counter-${question.id}">0</span>/${question.maxlength}
        </span>
      </div>
    </fieldset>
  `;
}

function renderSelectQuestion(question, index) {
  const options = question.options
    .map(option => {
      return `
        <option value="${option.value}">
          ${option.label}
        </option>
      `;
    })
    .join("");

  return `
    <fieldset
      id="card-${question.id}"
      class="question-card"
    >
      <legend class="question-title">
        <span class="question-number">
          ${index + 1}
        </span>

        <span>${question.text}</span>

        <em class="required-indicator">
          Opcional
        </em>
      </legend>

      <select
        id="${question.id}"
        name="${question.id}"
        class="select-field"
      >
        ${options}
      </select>
    </fieldset>
  `;
}

function renderQuestion(question, index) {
  if (question.type === "likert") {
    return renderLikertQuestion(question, index);
  }

  if (question.type === "nps") {
    return renderNpsQuestion(question, index);
  }

  if (question.type === "textarea") {
    return renderTextareaQuestion(question, index);
  }

  return renderSelectQuestion(question, index);
}

function atualizarInformacaoProgresso() {
  const progressText =
    document.getElementById("answeredProgress");

  if (progressText) {
    progressText.textContent =
      `${totalRespondidas()} de ${totalObrigatorias()} respostas obrigatórias`;
  }
}

function registrarEventosCampos(section) {
  document
    .querySelectorAll('input[type="radio"]')
    .forEach(input => {
      input.addEventListener("change", event => {
        state.answers[event.target.name] =
          event.target.value;

        salvarRascunho();

        document
          .getElementById(`card-${event.target.name}`)
          ?.classList.remove("error");

        document.getElementById("formError").hidden = true;

        atualizarInformacaoProgresso();
      });
    });

  section.questions
    .filter(question => question.type === "textarea")
    .forEach(question => {
      const textarea = document.getElementById(question.id);
      const counter = document.getElementById(
        `counter-${question.id}`
      );

      textarea.value = state.answers[question.id] || "";
      counter.textContent = textarea.value.length;

      textarea.addEventListener("input", event => {
        state.answers[question.id] = event.target.value;
        counter.textContent = event.target.value.length;
        salvarRascunho();
      });
    });

  section.questions
    .filter(question => question.type === "select")
    .forEach(question => {
      const select = document.getElementById(question.id);

      select.value = state.answers[question.id] || "";

      select.addEventListener("change", event => {
        state.answers[question.id] = event.target.value;
        salvarRascunho();
      });
    });
}

function validarSecao(section) {
  const missing = section.questions.filter(question => {
    if (!question.required) {
      return false;
    }

    const value = state.answers[question.id];

    return (
      value === undefined ||
      value === null ||
      String(value).trim() === ""
    );
  });

  document.querySelectorAll(".question-card").forEach(card => {
    card.classList.remove("error");
  });

  if (missing.length === 0) {
    return true;
  }

  missing.forEach(question => {
    document
      .getElementById(`card-${question.id}`)
      ?.classList.add("error");
  });

  const formError = document.getElementById("formError");

  formError.textContent =
    missing.length === 1
      ? "Responda à pergunta obrigatória antes de continuar."
      : `Responda às ${missing.length} perguntas obrigatórias antes de continuar.`;

  formError.hidden = false;

  document
    .getElementById(`card-${missing[0].id}`)
    ?.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });

  return false;
}

function renderSurvey() {
  const section = sections[state.currentSection];

  const progress = Math.round(
    ((state.currentSection + 1) / sections.length) * 100
  );

  const questions = section.questions
    .map((question, index) => {
      return renderQuestion(question, index);
    })
    .join("");

  const isLast =
    state.currentSection === sections.length - 1;

  app.innerHTML = `
    <div class="survey-page">
      <header class="survey-header">
        ${templateMarca()}

        <div class="survey-header-actions">
          <div class="confidential-badge">
            <span></span>
            Respostas confidenciais
          </div>

          <button
            id="saveAndExit"
            class="exit-button"
            type="button"
          >
            ←
            <span>Salvar e sair</span>
          </button>
        </div>
      </header>

      <main class="survey-main">
        <div class="progress-panel">
          <div class="progress-information">
            <strong>
              Etapa ${state.currentSection + 1} de ${sections.length}
            </strong>

            <span id="answeredProgress">
              ${totalRespondidas()} de ${totalObrigatorias()}
              respostas obrigatórias
            </span>
          </div>

          <div class="progress-track">
            <div
              class="progress-value"
              style="width: ${progress}%"
            ></div>
          </div>
        </div>

        <form id="surveyForm" class="survey-card" novalidate>
          <div class="section-header">
            <span class="section-number">
              Seção ${state.currentSection + 1}
            </span>

            <h1>${section.title}</h1>
            <p>${section.description}</p>
          </div>

          ${
            section.id !== "comentarios"
              ? `
                <div class="scale-guide">
                  <span>
                    Selecione a opção que melhor representa sua percepção.
                  </span>

                  <strong>
                    1 = Discordo totalmente · 5 = Concordo totalmente
                  </strong>
                </div>
              `
              : ""
          }

          <div class="questions-container">
            ${questions}
          </div>

          <div
            id="formError"
            class="form-error"
            role="alert"
            hidden
          ></div>

          <div class="survey-navigation">
            <button
              id="previousButton"
              class="navigation-button previous"
              type="button"
            >
              ←
              ${
                state.currentSection === 0
                  ? "Voltar ao início"
                  : "Etapa anterior"
              }
            </button>

            <button
              class="navigation-button next"
              type="submit"
            >
              ${isLast ? "Concluir pesquisa" : "Próxima etapa"}
              →
            </button>
          </div>
        </form>

        <div class="autosave-message">
          <span></span>
          Suas respostas são salvas automaticamente neste navegador.
        </div>
      </main>
    </div>
  `;

  registrarEventosCampos(section);

  document
    .getElementById("saveAndExit")
    .addEventListener("click", () => {
      salvarRascunho();
      renderWelcome();
    });

  document
    .getElementById("previousButton")
    .addEventListener("click", () => {
      if (state.currentSection === 0) {
        salvarRascunho();
        renderWelcome();
        return;
      }

      state.currentSection -= 1;
      salvarRascunho();
      renderSurvey();

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });

  document
    .getElementById("surveyForm")
    .addEventListener("submit", event => {
      event.preventDefault();

      if (!validarSecao(section)) {
        return;
      }

      if (isLast) {
        finalizarPesquisa();
        return;
      }

      state.currentSection += 1;
      salvarRascunho();
      renderSurvey();

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
}

function finalizarPesquisa() {
  apagarRascunho();
  state = estadoInicial();

  app.innerHTML = `
    <div class="thankyou-page">
      <section class="thankyou-card">
        <div class="success-icon">✓</div>

        <h1>Pesquisa concluída</h1>

        <p>
          Obrigada por dedicar seu tempo e compartilhar sua percepção.
          Em uma pesquisa real, os resultados seriam analisados de forma
          agrupada para apoiar planos de melhoria.
        </p>

        <div class="submission-notice">
          Esta foi uma simulação de portfólio. Nenhuma resposta foi
          enviada ou armazenada em servidor.
        </div>

        <button
          id="answerAgain"
          class="primary-button"
          type="button"
        >
          Responder novamente
        </button>
      </section>
    </div>
  `;

  document
    .getElementById("answerAgain")
    .addEventListener("click", renderWelcome);
}

renderWelcome();