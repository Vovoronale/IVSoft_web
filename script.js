// Об'єкт з перекладами та HTML-вмістом для деяких секцій
const translations = {
  'uk': {
    pageTitle: "DBN Assistant",
    navHome: "Головна",
    navAssistants: "Асистенти",
    navCompanies: "Фірми",
    navOtherProjects: "Інші Проекти",
    navUsage: "Як користуватися асистентами",
    navAbout: "Про проект",
    navContact: "Контакти",
    lang: "Мова",
    heroTitle: "Вітаємо на сайті DBN Assistant",
    heroSubtitle: "Ваші ШІ-асистенти на базі MyGPT від OpenAI для швидкого пошуку відповідей за нормами проектування",
    heroButton: "Дізнатися більше",
    assistantsTitle: "Наші ШІ Асистенти",
    assistantButton: "Перейти до асистента",
    companiesTitle: "Фірми, які користуються нашими послугами",
    companiesText: "Наші послуги використовують провідні фірми в галузі будівництва та проектування.",
    otherProjectsTitle: "Інші Проекти",
    otherProjectsText: "Ознайомтесь з іншими проектами, що допомагають впроваджувати інновації в галузі будівництва.",
    usageSectionTitle: "Як користуватися асистентами",
    // Вміст із HTML-розміткою для секції "Як користуватися асистентами"
    usageSectionContent: `
      <h3>Як правильно формулювати запитання до ШІ</h3>
      <p>Наш ШІ-асистент допомагає знаходити відповіді на ваші запитання швидко та ефективно. Щоб отримати точні та корисні відповіді, слідуйте цим правилам при формулюванні запитів:</p>
      <ol>
        <li><strong>Формулюйте запит чітко та конкретно</strong>
          <p>Неправильно: "Розкажи про будівництво"<br>
          Правильно: "Які вимоги ДБН до проєктування захисних споруд цивільної оборони?"</p>
        </li>
        <li><strong>Уточнюйте контекст</strong>
          <p>Якщо ваше питання стосується конкретної галузі, технології чи умов, додайте ці уточнення.<br>
          Наприклад: "Які нормативи пожежної безпеки діють для громадських будівель в Україні у 2024 році?"</p>
        </li>
        <li><strong>Уникайте двозначності</strong>
          <p>Неправильно: "Як зробити проєкт?"<br>
          Правильно: "Які параметри мають відповідати ДБН з енергоефективності при термомодернізації будівлі?"</p>
        </li>
        <li><strong>Задавайте одне питання за раз</strong>
          <p>Неправильно: "Які є класи вогнестійкості будівель та як вони впливають на експлуатацію?"<br>
          Правильно: "Які класи вогнестійкості будівель передбачені ДБН?" (Окремо можна запитати про їхній вплив на експлуатацію)</p>
        </li>
        <li><strong>Вказуйте необхідний рівень деталізації</strong>
          <p>Наприклад: "Поясни коротко" або "Наведи детальні нормативні посилання".</p>
        </li>
        <li><strong>Не використовуйте загальних слів</strong>
          <p>Замість: "Розкажи про технології"<br>
          Краще: "Які технології підвищення енергоефективності відповідають сучасним ДБН?"</p>
        </li>
        <li><strong>Перевіряйте граматику і логіку запиту</strong>
          <p>Чітко структурований запит допоможе ШІ зрозуміти вас правильно.</p>
        </li>
        <li><strong>Вказуйте, для чого вам потрібна відповідь</strong>
          <p>Наприклад: "Мені потрібно пояснення для звіту про відповідність ДБН з пожежної безпеки".<br>
          Або: "Хочу підготувати аналітичний огляд змін у нормативних вимогах до захисних споруд".</p>
        </li>
      </ol>
      <p>Дотримуючись цих правил, ви зможете отримувати більш точні та корисні відповіді від нашого ШІ-асистента. Успіхів!</p>
    `,
    aboutTitle: "Про проект",
    aboutText: "Наш сайт створено для того, щоб заощадити ваш час у пошуку відповідей за нормами проектування ДБН. Завдяки інтеграції сучасних технологій ШІ на базі MyGPT від OpenAI, кожен асистент спеціалізується на конкретних нормах, що дозволяє:",
    aboutList1: "<strong>Професіоналам</strong> – швидко перевіряти відповідність проектних рішень нормативам;",
    aboutList2: "<strong>Студентам</strong> – ефективно вивчати норми та будівельні стандарти;",
    aboutList3: "<strong>Звичайним користувачам</strong> – перевіряти, чи відповідає житло вимогам безпеки;",
    aboutList4: "<strong>Аматорам та професійним будівельникам</strong> – отримувати консультації щодо проектних рішень.",
    aboutConclusion: "Мета проекту – зробити доступ до інформації про ДБН зручним, зрозумілим і ефективним для кожного.",
    contactTitle: "Контакти",
    contactText: "Якщо у вас виникли запитання або ви маєте пропозиції щодо покращення роботи сайту, зв'яжіться з нами за наступними контактами:",
    formName: "Ім'я",
    formNamePlaceholder: "Ваше ім'я",
    formEmail: "Email",
    formEmailPlaceholder: "Ваш email",
    formMessage: "Повідомлення",
    formMessagePlaceholder: "Ваше повідомлення",
    formButton: "Відправити",
    footerText: "© 2025 DBN Assistant. Всі права захищені."
  },
  'en': {
    pageTitle: "DBN Assistant",
    navHome: "Home",
    navAssistants: "Assistants",
    navCompanies: "Companies",
    navOtherProjects: "Other Projects",
    navUsage: "How to Use Assistants",
    navAbout: "About",
    navContact: "Contact",
    lang: "Language",
    heroTitle: "Welcome to DBN Assistant",
    heroSubtitle: "Your AI assistants powered by MyGPT from OpenAI for quick compliance searches",
    heroButton: "Learn More",
    assistantsTitle: "Our AI Assistants",
    assistantButton: "Go to Assistant",
    companiesTitle: "Companies Using Our Services",
    companiesText: "Our services are trusted by leading companies in the construction and design industry.",
    otherProjectsTitle: "Other Projects",
    otherProjectsText: "Discover other innovative projects that are revolutionizing the construction industry.",
    usageSectionTitle: "How to Use Assistants",
    usageSectionContent: `
      <h3>How to Formulate Questions to AI</h3>
      <p>Our AI assistant helps you find answers quickly and efficiently. To receive accurate and useful answers, follow these guidelines when formulating your queries:</p>
      <ol>
        <li><strong>Formulate your query clearly and specifically</strong>
          <p>Incorrect: "Tell me about construction"<br>
          Correct: "What are the DBN requirements for designing protective civil defense structures?"</p>
        </li>
        <li><strong>Clarify the context</strong>
          <p>If your question relates to a specific field, technology, or conditions, include those details.<br>
          For example: "What fire safety standards apply to public buildings in Ukraine in 2024?"</p>
        </li>
        <li><strong>Avoid ambiguity</strong>
          <p>Incorrect: "How to create a project?"<br>
          Correct: "What energy efficiency parameters must be met according to DBN during building thermomodernization?"</p>
        </li>
        <li><strong>Ask one question at a time</strong>
          <p>Incorrect: "What are the fire resistance classes of buildings and how do they affect usage?"<br>
          Correct: "What fire resistance classes are specified in DBN?" (You can ask separately about their impact on usage)</p>
        </li>
        <li><strong>Specify the required level of detail</strong>
          <p>For example: "Explain briefly" or "Provide detailed regulatory references."</p>
        </li>
        <li><strong>Avoid generic terms</strong>
          <p>Instead of: "Tell me about technologies"<br>
          Better: "Which energy efficiency technologies meet current DBN?"</p>
        </li>
        <li><strong>Check your query's grammar and logic</strong>
          <p>A well-structured query helps the AI understand you correctly.</p>
        </li>
        <li><strong>Indicate the purpose of your query</strong>
          <p>For example: "I need an explanation for a report on DBN fire safety compliance"<br>
          Or: "I want to prepare an analytical review of changes in the regulatory requirements for protective structures."</p>
        </li>
      </ol>
      <p>By following these rules, you will receive more accurate and useful answers from our AI assistant. Good luck!</p>
    `,
    aboutTitle: "About the Project",
    aboutText: "Our site is designed to save you time in finding compliance answers for DBN design standards. Thanks to modern AI technology powered by MyGPT from OpenAI, each assistant specializes in specific standards, which allows:",
    aboutList1: "<strong>Professionals</strong> – quickly verify project compliance;",
    aboutList2: "<strong>Students</strong> – efficiently study standards and building codes;",
    aboutList3: "<strong>General users</strong> – check if their housing meets safety requirements;",
    aboutList4: "<strong>DIY and professional builders</strong> – get consultancy on design solutions.",
    aboutConclusion: "The project aims to make DBN information accessible, clear, and effective for everyone.",
    contactTitle: "Contact",
    contactText: "If you have any questions or suggestions to improve our website, please contact us:",
    formName: "Name",
    formNamePlaceholder: "Your name",
    formEmail: "Email",
    formEmailPlaceholder: "Your email",
    formMessage: "Message",
    formMessagePlaceholder: "Your message",
    formButton: "Send",
    footerText: "© 2025 DBN Assistant. All rights reserved."
  }
};

// Дані для асистентів (централізовано)
const assistantsData = [
  {
    id: 'dbn1',
    title: {
      uk: "Асистент ДБН-1",
      en: "DBN-1 Assistant"
    },
    description: {
      uk: "Інтерактивна підтримка для професіоналів та студентів, що працюють з нормами ДБН-1.",
      en: "Interactive support for professionals and students working with DBN-1 standards."
    },
    link: "assistant_dbn1.html"
  },
  {
    id: 'dbn2',
    title: {
      uk: "Асистент ДБН-2",
      en: "DBN-2 Assistant"
    },
    description: {
      uk: "Оптимізуйте пошук відповідей для норм ДБН-2 – зручно для звичайних користувачів та аматорів.",
      en: "Optimize your search for DBN-2 compliance – perfect for general users and enthusiasts."
    },
    link: "assistant_dbn2.html"
  },
  {
    id: 'dbn3',
    title: {
      uk: "Асистент ДБН-3",
      en: "DBN-3 Assistant"
    },
    description: {
      uk: "Ефективна підтримка для професійних будівельників, що вивчають проектні рішення за нормами ДБН-3.",
      en: "Effective support for professional builders studying design solutions under DBN-3."
    },
    link: "assistant_dbn3.html"
  }
];

document.addEventListener('DOMContentLoaded', function() {
  let currentLang = 'uk';
  
  // Функція для оновлення текстових елементів згідно з обраною мовою.
  // innerHTML використовується для підтримки HTML-розмітки.
  function updateTexts() {
    document.querySelectorAll('[data-i18n]').forEach(function(el) {
      const key = el.getAttribute('data-i18n');
      if (translations[currentLang][key]) {
        // Якщо це тег <title>, оновлюємо document.title
        if (el.tagName.toLowerCase() === 'title') {
          document.title = translations[currentLang][key];
        } else {
          el.innerHTML = translations[currentLang][key];
        }
      }
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el) {
      const key = el.getAttribute('data-i18n-placeholder');
      if (translations[currentLang][key]) {
        el.placeholder = translations[currentLang][key];
      }
    });
    renderAssistants();
    // Оновлюємо вміст секції "Як користуватися асистентами" із підтримкою HTML
    document.getElementById('usageSectionContent').innerHTML = translations[currentLang]['usageSectionContent'];
  }
  
  // Функція для динамічного формування блоків асистентів
  function renderAssistants() {
    const container = document.getElementById('assistants-container');
    container.innerHTML = '';
    assistantsData.forEach(function(assistant) {
      const colDiv = document.createElement('div');
      colDiv.className = 'col-md-4';
      
      const cardDiv = document.createElement('div');
      cardDiv.className = 'card assistant-card mb-4 shadow-sm';
      
      const cardBody = document.createElement('div');
      cardBody.className = 'card-body';
      
      const cardTitle = document.createElement('h5');
      cardTitle.className = 'card-title';
      cardTitle.innerHTML = assistant.title[currentLang];
      
      const cardText = document.createElement('p');
      cardText.className = 'card-text';
      cardText.innerHTML = assistant.description[currentLang];
      
      const cardLink = document.createElement('a');
      cardLink.href = assistant.link;
      cardLink.className = 'btn btn-outline-primary';
      cardLink.innerHTML = translations[currentLang]['assistantButton'];
      
      cardBody.appendChild(cardTitle);
      cardBody.appendChild(cardText);
      cardBody.appendChild(cardLink);
      cardDiv.appendChild(cardBody);
      colDiv.appendChild(cardDiv);
      container.appendChild(colDiv);
    });
  }
  
  // Обробка кліків по перемикачу мови
  document.querySelectorAll('.language-switch').forEach(function(el) {
    el.addEventListener('click', function(e) {
      e.preventDefault();
      const lang = el.getAttribute('data-lang');
      if (lang && translations[lang]) {
        currentLang = lang;
        updateTexts();
      }
    });
  });
  
  // Налаштування фону hero-секції (можна змінити URL тут)
  const heroBackgroundImage = "https://source.unsplash.com/1600x900/?architecture,building";
  document.querySelector('.hero').style.backgroundImage = `url(${heroBackgroundImage})`;
  
  // Початкове завантаження текстів і блоків
  updateTexts();
});
