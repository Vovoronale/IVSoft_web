// Конфігурація розділів: порядок та видимість
const sectionsConfig = [
  { id: 'quick-nav', order: 1, visible: true },
  { id: 'products', order: 2, visible: true },
  { id: 'assistants', order: 3, visible: true },
  { id: 'companies', order: 4, visible: true },
  { id: 'other-projects', order: 5, visible: true },
  { id: 'support', order: 6, visible: true },
  { id: 'usage', order: 7, visible: true },
  { id: 'about', order: 8, visible: true },
  { id: 'contact', order: 9, visible: true },
  { id: 'blog', order: 10, visible: true }
];

// Дані для асистентів із додатковим полем для GA event
const assistantsData = [
  {
    id: 'dbn1',
    title: {
      uk: "ДБН В.2.2-5:2023",
      en: "DBN B.2.2-5:2023"
    },
    description: {
      uk: "ЗАХИСНІ СПОРУДИ ЦИВІЛЬНОГО ЗАХИСТУ",
      en: "Protective structures of civil defense"
    },
    link: "https://chatgpt.com/g/g-679fe1d48b6c8191a2b9b2dc0e38e431-dbn-v-2-2-5-2023",
    gaEvent: "assistant_dbn1_click",
    logo: "/shield-alt-solid.svg"
  },
  {
    id: 'dbn2',
    title: {
      uk: "ДБН В.2.6-31:2021",
      en: "DBN B.2.6-31:2021"
    },
    description: {
      uk: "ТЕПЛОВА ІЗОЛЯЦІЯ ТА ЕНЕРГОЕФЕКТИВНІСТЬ БУДІВЕЛЬ",
      en: "Thermal insulation and energy efficiency of buildings"
    },
    link: "https://chatgpt.com/g/g-679f8359022c819185183f9d67dba80e-dbn-v-2-6-31-2021",
    gaEvent: "assistant_dbn2_click",
    logo: "/temperature-half-solid.svg" // або "fas fa-sun"
  },
  {
    id: 'dbn3',
    title: {
      uk: "ДБН В.1.1-7:2016",
      en: "DBN B.1.1-7:2016"
    },
    description: {
      uk: "ПОЖЕЖНА БЕЗПЕКА ОБ’ЄКТІВ БУДІВНИЦТВА",
      en: "Fire safety of construction objects"
    },
    link: "https://chatgpt.com/g/g-679a43e723088191ba0208ec2f058393-dbn-v-1-1-7-2016",
    gaEvent: "assistant_dbn3_click",
    logo: "/fire-solid.svg"
  },
  {
    id: 'dbn4',
    title: {
      uk: "ДБН В.2.2-15:2019",
      en: "DBN B.2.2-15:2019"
    },
    description: {
      uk: "Житлові будинки. Основні положення",
      en: "Residential buildings. Main provisions"
    },
    link: "https://chatgpt.com/g/g-67a9239a7a28819197664b900dcb30e9-dbn-v-2-2-15-2019",
    gaEvent: "assistant_dbn4_click",
    logo: "/building-regular.svg"
  },
  {
    id: 'dbn5',
    title: {
      uk: "ДБН В.2.5-67:2013",
      en: "DBN В.2.5-67:2013"
    },
    description: {
      uk: "Опалення, вентиляція та кондиціонування",
      en: "Heating, ventilation and air conditioning"
    },
    link: "https://chatgpt.com/g/g-67bb9c7d29e481919219dfe99e246a96-dbn-v-2-5-67-2013",
    gaEvent: "assistant_dbn5_click",
    logo: "/Hvac.svg"
  }
];

const blogArticles = [
  {
    id: 'article1',
    title: {
      uk: "Аналізуємо планування будівель за допомогою ШІ",
      en: "Analysing building layouts using AI"
    },
    summary: {
      uk: "Конкуренція на ринку штучного інтелекту відчиняє нові можливості для користувачів. Технології розвиваються так швидко, що з’являються безліч способів застосувати їх у нашій роботі. Проєктувальникам доводиться постійно оцінювати планування, але оцінка якості часто суб’єктивна. Методи які використовують девелопери, хоч більш структуровані, але не завжди враховують повністю функціональні особливості житла. Я переконаний, що ШІ може зробити цікаву оцінку планування, а головне — швидко та об’єктивно.",
      en: "Competition in the AI market opens up new opportunities for users. Technology is developing so fast that there are many ways to apply it to our work. Designers have to constantly evaluate the layout, but the quality assessment is often subjective. The methods used by developers, although more structured, do not always take into account the full functional features of the housing. I am convinced that AI can make an interesting assessment of planning, and most importantly, quickly and objectively."
    },
    link: "/blog/Article_1.html",
    gaEvent: "blog_article1_click"
  }
  // Додайте більше статей за потребою
];

document.addEventListener('DOMContentLoaded', function() {
  let currentLang = 'uk';
  
  // Функція для оновлення порядку розділів і видимості меню
  function updateSectionsOrder() {
    const container = document.getElementById('sections-container');
    // Отримуємо всі розділи за їх id
    const sectionsMap = {};
    sectionsConfig.forEach(config => {
      const el = document.getElementById(config.id);
      if (el) { sectionsMap[config.id] = el; }
    });
    // Сортуємо за порядком
    const sortedSections = sectionsConfig.slice().sort((a, b) => a.order - b.order);
    // Оновлюємо розташування розділів та приховуємо/відображаємо їх
    sortedSections.forEach(config => {
      const el = sectionsMap[config.id];
      if (el) {
        el.style.display = config.visible ? '' : 'none';
        container.appendChild(el);
      }
      // Оновлюємо відповідний пункт меню
      const navLink = document.querySelector(`a[data-target-section="${config.id}"]`);
      if (navLink) {
        navLink.parentElement.style.display = config.visible ? '' : 'none';
      }
    });
  }
  
  // Функція для відсилання подій до Google Analytics
  function sendAnalyticsEvent(action, category, label) {
    if (typeof gtag === 'function') {
      gtag('event', action, {
        'event_category': category,
        'event_label': label
      });
    }
  }
  
  // Об’єкт з перекладами та HTML-вмістом
  const translations = {
    'uk': {
      pageTitle: "DBN Assistant",
      navHome: "Головна",
      navAssistants: "Асистенти",
      navProducts: "Продукти",
      navCompanies: "Партнери",
      navOtherProjects: "Інші Проекти",
      navSupport: "Підтримати нас",
      navUsage: "Як користуватися асистентами",
      navAbout: "Про проект",
      navContact: "Контакти",
      lang: "Мова",
      heroTitle: "Вітаємо на порталі DBN Assistant",
      heroSubtitle: "AI-асистенти на від OpenAI допомагають швидко знаходити відповіді на питання щодо норм проектування.",
      heroButton: "Дізнатися більше",
      capabilitiesTitle: "Що ви отримуєте",
      capability1: "Швидкі відповіді по нормах через спеціалізованих ШІ-асистентів.",
      capability2: "Теплотехнічні розрахунки та енергоефективність за українськими нормами.",
      capability3: "Перевірку чинності нормативів у PDF + експорт CSV/JSON.",
      capability4: "DXF→GeoJSON з прив’язкою до карти для GIS та держсервісів.",
      capability5: "Розрахунок класу наслідків з журналом дій і звітами PDF/DOCX.",
      quickNavTitle: "Швидка навігація",
      quickNavAuthor: "Автор",
      quickNavPartnersPage: "Партнери (стор.)",
      productsTitle: "Продукти IVSoft",
      productsText: "Оберіть продукт під задачу: теплотехніка та енергоефективність, контроль чинності нормативів, конвертація DXF→GeoJSON, розрахунок класу наслідків, DBN Assistant.",
      productsLegal: "<strong>Юридичний дисклеймер:</strong> результати мають довідковий характер. Перевіряйте результати.",
      productsCadEEText: "CadEE.pro — онлайн-сервіс теплотехнічних розрахунків огороджувальних конструкцій та оцінки енергоефективності за українськими нормами. Розвиток через Patreon.",
      productsNormControlText: "NormControl — перевірка чинності нормативів у PDF → перевірка → експорт CSV/JSON. Тарифи через Patreon (Free/Standard/Pro).",
      productsGeoJSONText: "IV GeoJSON — DXF→GeoJSON із прив’язкою до карти: контури + опорні точки → коректні координати для GIS/державних сервісів.",
      productsConsequenceClassText: "IVSoft “Розрахунок класу наслідків” — ДСТУ 8855:2019, покроковий журнал дій, експорт PDF/DOCX.",
      productsDBNAssistantText: "DBN Assistant — ШІ-асистенти/агенти для аналізу норм на базі MyGPT/OpenAI. Двомовність.",
      ctaLearnMore: "Детальніше",
      ctaOpenService: "Відкрити сервіс",
      ctaToAssistants: "До асистентів",
      ctaAllProducts: "Усі продукти",
      ctaPartnersPage: "Сторінка партнерів",
      authorCardTitle: "Автор проекту",
      ctaAuthorPage: "Сторінка автора",
      assistantsTitle: "Наші ШІ Асистенти",
      assistantButton: "Перейти до асистента",
      companiesTitle: "Партнери, які користуються нашими послугами",
      companiesText: "Наші послуги використовують провідні фірми в галузі будівництва та проектування.",
      otherProjectsTitle: "Інші Проекти",
      otherProjectsText: "Ознайомтесь з іншими проектами, що допомагають впроваджувати інновації в галузі будівництва.",
      supportTitle: "Підтримати нас на Patreon",
      supportText: "Підтримайте наш проект, оформивши підписку на Patreon. Це допоможе нам додавати нові ДБН, покращувати існуючі та регулярно повідомляти про оновлення і розробку нових можливостей.",
      patreonButton: "Підписатися на Patreon",
      coffeeButton: "Купити каву",
      usageSectionTitle: "Як користуватися асистентами",
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
      authorInfo: "Автор проекту: Іванейко Володимир. Детальніше: <a href='https://www.linkedin.com/in/володимир-іванейко-607650254' target='_blank' class='ga-link' data-ga-event='linkedin_click'>LinkedIn</a>. Сторінка автора: <a href='/author/' class='ga-link' data-ga-event='author_page_click'>/author/</a>.",
      contactTitle: "Контакти",
      contactText: "Якщо у вас виникли запитання або ви маєте пропозиції щодо покращення роботи сайту, зв'яжіться з нами за наступними контактами:",
      formName: "Ім'я",
      formNamePlaceholder: "Ваше ім'я",
      formEmail: "Email",
      formEmailPlaceholder: "Ваш email",
      formMessage: "Повідомлення",
      formMessagePlaceholder: "Ваше повідомлення",
      formButton: "Відправити",
      navBlog: "БЛОГ",
      blogTitle: "БЛОГ",
      blogReadMore: "Читати далі",
      footerText: "© 2025 DBN Assistant. Всі права захищені."
    },
    'en': {
      pageTitle: "DBN Assistant",
      navHome: "Home",
      navAssistants: "Assistants",
      navProducts: "Products",
      navCompanies: "Partners",
      navOtherProjects: "Other Projects",
      navSupport: "Support Us",
      navUsage: "How to Use Assistants",
      navAbout: "About",
      navContact: "Contact",
      lang: "Language",
      heroTitle: "Welcome to DBN Assistant",
      heroSubtitle: "Your AI assistants powered by MyGPT from OpenAI for quick compliance searches",
      heroButton: "Learn More",
      capabilitiesTitle: "What you get",
      capability1: "Fast answers on standards via specialized AI assistants.",
      capability2: "Thermal calculations and energy efficiency under Ukrainian norms.",
      capability3: "Validity checks of standards in PDF + CSV/JSON export.",
      capability4: "DXF→GeoJSON with map calibration for GIS/government services.",
      capability5: "Consequence class calculator with action log and PDF/DOCX reports.",
      quickNavTitle: "Quick navigation",
      quickNavAuthor: "Author",
      quickNavPartnersPage: "Partners (page)",
      productsTitle: "IVSoft Products",
      productsText: "Choose a product for your task: thermal calculations & energy efficiency, validity control of standards, DXF→GeoJSON conversion, consequence class calculator, DBN Assistant.",
      productsLegal: "<strong>Legal disclaimer:</strong> results are informational. Please verify the results.",
      productsCadEEText: "CadEE.pro is an online service for thermal calculations of building envelopes and energy efficiency assessment according to Ukrainian standards. Supported via Patreon.",
      productsNormControlText: "NormControl checks the validity of standards in PDF → verification → CSV/JSON export. Pricing via Patreon (Free/Standard/Pro).",
      productsGeoJSONText: "IV GeoJSON converts DXF→GeoJSON with map calibration: closed contours + control points → correct GIS coordinates.",
      productsConsequenceClassText: "IVSoft “Consequence Class Calculator” — DSTU 8855:2019, step-by-step action log, PDF/DOCX export.",
      productsDBNAssistantText: "DBN Assistant — AI assistants/agents based on MyGPT/OpenAI for analyzing design standards. Bilingual.",
      ctaLearnMore: "Learn more",
      ctaOpenService: "Open service",
      ctaToAssistants: "Assistants",
      ctaAllProducts: "All products",
      ctaPartnersPage: "Partners page",
      authorCardTitle: "Project author",
      ctaAuthorPage: "Author page",
      assistantsTitle: "Our AI Assistants",
      assistantButton: "Go to Assistant",
      companiesTitle: "Partners Using Our Services",
      companiesText: "Our services are trusted by leading companies in the construction and design industry.",
      otherProjectsTitle: "Other Projects",
      otherProjectsText: "Discover other innovative projects that are revolutionizing the construction industry.",
      supportTitle: "Support Us on Patreon",
      supportText: "Support our project via a Patreon subscription or buy me a coffee. It helps us develop new ideas and improve the service.",
      patreonButton: "Subscribe on Patreon",
      coffeeButton: "Buy Me a Coffee",
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
      authorInfo: "Project author: Ivaneiko Volodymyr. More info: <a href='https://www.linkedin.com/in/володимир-іванейко-607650254' target='_blank' class='ga-link' data-ga-event='linkedin_click'>LinkedIn</a>. Author page: <a href='/author/' class='ga-link' data-ga-event='author_page_click'>/author/</a>.",
      contactTitle: "Contact",
      contactText: "If you have any questions or suggestions to improve our website, please contact us:",
      formName: "Name",
      formNamePlaceholder: "Your name",
      formEmail: "Email",
      formEmailPlaceholder: "Your email",
      formMessage: "Message",
      formMessagePlaceholder: "Your message",
      formButton: "Send",
      navBlog: "Blog",
      blogTitle: "Blog",
      blogReadMore: "Read More",
      footerText: "© 2025 DBN Assistant. All rights reserved."
    }
  };
  
  // Функція для оновлення текстових елементів (з підтримкою HTML)
  function updateTexts() {
    document.querySelectorAll('[data-i18n]').forEach(function(el) {
      const key = el.getAttribute('data-i18n');
      if (translations[currentLang][key]) {
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
    document.getElementById('usageSectionContent').innerHTML = translations[currentLang]['usageSectionContent'];
    // Додаємо генерацію блогу
    renderBlogArticles();
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

    // Контейнер для логотипу та текстової інформації
    const infoDiv = document.createElement('div');
    infoDiv.className = 'assistant-info';

    // Створення елемента для логотипу
    const logoImg = document.createElement('img');
    logoImg.src = assistant.logo;
    logoImg.alt = assistant.title[currentLang] + " logo";
    logoImg.className = "assistant-logo";

    // Контейнер для тексту (назва і опис)
    const textContainer = document.createElement('div');
    textContainer.className = 'assistant-text';

    const cardTitle = document.createElement('h5');
    cardTitle.className = 'card-title';
    cardTitle.innerHTML = assistant.title[currentLang];

    const cardText = document.createElement('p');
    cardText.className = 'card-text';
    cardText.innerHTML = assistant.description[currentLang];

    textContainer.appendChild(cardTitle);
    textContainer.appendChild(cardText);

    // Додаємо логотип і текст до infoDiv
    infoDiv.appendChild(logoImg);
    infoDiv.appendChild(textContainer);

    // Додаємо infoDiv до карточки
    cardBody.appendChild(infoDiv);

    // Створення кнопки для переходу до асистента
    const cardLink = document.createElement('a');
    cardLink.href = assistant.link;
    cardLink.className = 'btn btn-outline-primary ga-link';
    cardLink.setAttribute('data-ga-event', assistant.gaEvent);
    cardLink.innerHTML = translations[currentLang]['assistantButton'];
    cardLink.addEventListener('click', function() {
      sendAnalyticsEvent('assistant_click', 'Assistants', assistant.gaEvent);
    });
    
    cardBody.appendChild(cardLink);
    cardDiv.appendChild(cardBody);
    colDiv.appendChild(cardDiv);
    container.appendChild(colDiv);
  });
}

// Функція для динамічного формування списку статей блогу
function renderBlogArticles() {
  const container = document.getElementById('blog-container');
  container.innerHTML = ''; // Очищення контейнера
  blogArticles.forEach(function(article) {
    const colDiv = document.createElement('div');
    colDiv.className = 'col-md-4';
    
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card mb-4 shadow-sm';
    
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    
    const cardTitle = document.createElement('h5');
    cardTitle.className = 'card-title';
    cardTitle.innerHTML = article.title[currentLang];
    
    const cardText = document.createElement('p');
    cardText.className = 'card-text';
    cardText.innerHTML = article.summary[currentLang];
    
    const cardLink = document.createElement('a');
    cardLink.href = article.link;
    cardLink.className = 'btn btn-outline-primary ga-link';
    // Використовуємо переклад для тексту кнопки (або стандартне значення)
    cardLink.innerHTML = translations[currentLang]['blogReadMore'] || 'Читати далі';
    cardLink.setAttribute('data-ga-event', article.gaEvent);
    cardLink.addEventListener('click', function() {
      sendAnalyticsEvent('blog_article_click', 'Blog', article.gaEvent);
    });
    
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(cardLink);
    cardDiv.appendChild(cardBody);
    colDiv.appendChild(cardDiv);
    container.appendChild(colDiv);
  });
}


  
  // Функція для прикріплення подій GA до всіх посилань та кнопок, які ще не отримали атрибут data-ga-attached
  function attachGlobalGAEvents() {
    document.querySelectorAll('a.ga-link').forEach(function(link) {
      if (!link.hasAttribute('data-ga-attached')) {
        link.addEventListener('click', function() {
          const eventName = link.getAttribute('data-ga-event') || link.innerText.trim();
          sendAnalyticsEvent('link_click', 'Link', eventName);
        });
        link.setAttribute('data-ga-attached', 'true');
      }
    });
  }
  
  // Обробка кліків для перемикання мови
  document.querySelectorAll('.language-switch').forEach(function(el) {
    el.addEventListener('click', function(e) {
      e.preventDefault();
      const lang = el.getAttribute('data-lang');
      if (lang && translations[lang]) {
        currentLang = lang;
        updateTexts();
        attachGlobalGAEvents();
      }
    });
  });
  
  // Відсилання подій GA для кліків по навігаційних посиланнях (якщо ще не прикріплено)
  document.querySelectorAll('a.nav-link').forEach(function(link) {
    if (!link.hasAttribute('data-ga-attached')) {
      link.addEventListener('click', function() {
        const target = link.getAttribute('href');
        sendAnalyticsEvent('nav_click', 'Navigation', target);
      });
      link.setAttribute('data-ga-attached', 'true');
    }
  });
  
  // Додаткове прикріплення подій GA до всіх посилань і кнопок
  attachGlobalGAEvents();
  
  // Задаємо фон для hero-секції
  //const heroBackgroundImage = "/default-hero.PNG";
 // document.querySelector('.hero').style.backgroundImage = `url(${heroBackgroundImage})`;
  
  // Оновлюємо розташування розділів і меню за конфігурацією
  updateSectionsOrder();
  // Завантаження текстів та контенту
  updateTexts();
});
