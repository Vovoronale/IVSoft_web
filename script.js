// Конфігурація розділів: порядок та видимість
const sectionsConfig = [
  { id: 'about', order: 1, visible: true },
  { id: 'products', order: 2, visible: true },
  { id: 'assistants', order: 3, visible: true },
  { id: 'blog', order: 4, visible: true },
  { id: 'contact', order: 5, visible: true }
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
    logo: "/temperature-half-solid.svg"
  },
  {
    id: 'dbn3',
    title: {
      uk: "ДБН В.1.1-7:2016",
      en: "DBN B.1.1-7:2016"
    },
    description: {
      uk: "ПОЖЕЖНА БЕЗПЕКА ОБ'ЄКТІВ БУДІВНИЦТВА",
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
      uk: "Конкуренція на ринку штучного інтелекту відчиняє нові можливості для користувачів. Технології розвиваються так швидко, що з'являються безліч способів застосувати їх у нашій роботі. Проєктувальникам доводиться постійно оцінювати планування, але оцінка якості часто суб'єктивна. Методи які використовують девелопери, хоч більш структуровані, але не завжди враховують повністю функціональні особливості житла. Я переконаний, що ШІ може зробити цікаву оцінку планування, а головне — швидко та об'єктивно.",
      en: "Competition in the AI market opens up new opportunities for users. Technology is developing so fast that there are many ways to apply it to our work. Designers have to constantly evaluate the layout, but the quality assessment is often subjective. The methods used by developers, although more structured, do not always take into account the full functional features of the housing. I am convinced that AI can make an interesting assessment of planning, and most importantly, quickly and objectively."
    },
    link: "/blog/Article_1.html",
    gaEvent: "blog_article1_click"
  }
];

document.addEventListener('DOMContentLoaded', function() {
  let currentLang = 'uk';

  // Функція для оновлення порядку розділів і видимості меню
  function updateSectionsOrder() {
    const container = document.getElementById('sections-container');
    const sectionsMap = {};
    sectionsConfig.forEach(config => {
      const el = document.getElementById(config.id);
      if (el) { sectionsMap[config.id] = el; }
    });
    const sortedSections = sectionsConfig.slice().sort((a, b) => a.order - b.order);
    sortedSections.forEach(config => {
      const el = sectionsMap[config.id];
      if (el) {
        el.style.display = config.visible ? '' : 'none';
        container.appendChild(el);
      }
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

  // Об'єкт з перекладами
  const translations = {
    'uk': {
      pageTitle: "IVSoft від Ivaneiko Volodymyr",
      navHome: "Головна",
      navAbout: "Про мене",
      navProducts: "Продукти",
      navAssistants: "Асистенти",
      navBlog: "Блог",
      navContact: "Контакти",
      lang: "Мова",

      // Hero
      heroGreeting: "Привіт, я",
      heroTitle: "Володимир Іванейко",
      heroSubtitle: "Інженер-конструктор | Енергоаудитор | Розробник цифрових інструментів для інженерів",
      heroIntro: "Понад 15 років проектую конструкції та розробляю інструменти, які знімають рутину з інженерів. Співзасновник LogiStruct. Автор CadEE.pro, ArmCon, DBN Assistant та інших сервісів.",
      heroButtonProducts: "Мої продукти",
      heroButtonContact: "Зв'язатися",

      // About
      aboutTitle: "Про мене",
      aboutText: "Я Володимир Іванейко — інженер-конструктор з понад 15-річним досвідом проектування будівельних конструкцій. Провідний експерт з механічної міцності та стійкості, сертифікований енергоаудитор.",
      aboutText2: "Співзасновник та співвласник компанії LogiStruct (Львів). Окрім основної інженерної діяльності, захоплююся веб-програмуванням та створенням цифрових інструментів, які автоматизують рутину і дозволяють інженерам зосередитися на якісних рішеннях.",
      aboutText3: "Мої проекти — CadEE.pro, ArmCon, LiveBeamCalculator, DBN Assistant, NormControl та інші — це результат поєднання глибокого інженерного досвіду з сучасними технологіями.",
      aboutSkillsTitle: "Ключові напрямки",
      aboutSkill1: "Проектування будівельних конструкцій",
      aboutSkill2: "Енергоаудит та теплотехніка",
      aboutSkill3: "Розробка інженерних веб-сервісів",
      aboutSkill4: "ШІ-інструменти для будівництва",
      aboutSkill5: "Розумний дім та автоматизація",

      // Products
      productsTitle: "Мої продукти",
      productsText: "Кожен із цих інструментів народився з реальної потреби у повсякденній інженерній роботі. Обирайте те, що вирішує вашу задачу.",
      productsLegal: "<strong>Юридичний дисклеймер:</strong> результати мають довідковий характер. Перевіряйте результати.",
      productsCadEEText: "CadEE.pro — онлайн-сервіс теплотехнічних розрахунків огороджувальних конструкцій та оцінки енергоефективності за українськими нормами.",
      productsNormControlText: "NormControl — перевірка чинності нормативів у PDF з експортом CSV/JSON. Тарифи через Patreon.",
      productsGeoJSONText: "IV GeoJSON — конвертація DXF у GeoJSON із прив'язкою до карти для GIS та державних сервісів.",
      productsConsequenceClassText: "Розрахунок класу наслідків за ДСТУ 8855:2019 з покроковим журналом дій та експортом PDF/DOCX.",
      productsDBNAssistantText: "DBN Assistant — ШІ-асистенти на базі MyGPT/OpenAI для аналізу будівельних норм. Двомовний.",
      productsArmConText: "ArmCon — розрахунок будівельних конструкцій. Інструмент для армування та конструювання.",
      productsLBCText: "LiveBeamCalculator — інтерактивний розрахунок моментів та поперечних сил у балці в реальному часі.",
      ctaLearnMore: "Детальніше",
      ctaOpenService: "Відкрити сервіс",
      ctaToAssistants: "До асистентів",
      ctaAllProducts: "Усі продукти",

      // Assistants
      assistantsTitle: "ШІ-асистенти",
      assistantButton: "Перейти до асистента",

      // Blog
      blogTitle: "Блог",
      blogReadMore: "Читати далі",

      // Contact
      contactTitle: "Контакти",
      contactText: "Маєте запитання, пропозицію або ідею для співпраці? Напишіть мені — завжди відкритий до спілкування.",

      // Footer
      footerText: "Усі права захищені."
    },
    'en': {
      pageTitle: "IVSoft by Ivaneiko Volodymyr",
      navHome: "Home",
      navAbout: "About",
      navProducts: "Products",
      navAssistants: "Assistants",
      navBlog: "Blog",
      navContact: "Contact",
      lang: "Language",

      // Hero
      heroGreeting: "Hi, I'm",
      heroTitle: "Volodymyr Ivaneiko",
      heroSubtitle: "Structural Engineer | Energy Auditor | Creator of Digital Tools for Engineers",
      heroIntro: "For over 15 years, I've been designing structures and building tools that take the routine out of engineering. Co-founder of LogiStruct. Creator of CadEE.pro, ArmCon, DBN Assistant and more.",
      heroButtonProducts: "My Products",
      heroButtonContact: "Get in Touch",

      // About
      aboutTitle: "About Me",
      aboutText: "I'm Volodymyr Ivaneiko — a structural engineer with over 15 years of experience in building design. Lead expert in mechanical strength and stability, certified energy auditor.",
      aboutText2: "Co-founder and co-owner of LogiStruct (Lviv). Beyond core engineering, I'm passionate about web development and creating digital tools that automate routine tasks and let engineers focus on quality decisions.",
      aboutText3: "My projects — CadEE.pro, ArmCon, LiveBeamCalculator, DBN Assistant, NormControl and others — are the result of combining deep engineering expertise with modern technology.",
      aboutSkillsTitle: "Key Expertise",
      aboutSkill1: "Structural engineering design",
      aboutSkill2: "Energy auditing & thermal calculations",
      aboutSkill3: "Engineering web service development",
      aboutSkill4: "AI tools for construction",
      aboutSkill5: "Smart home & automation",

      // Products
      productsTitle: "My Products",
      productsText: "Each of these tools was born from a real need in day-to-day engineering work. Pick the one that solves your problem.",
      productsLegal: "<strong>Legal disclaimer:</strong> results are informational. Please verify before use.",
      productsCadEEText: "CadEE.pro — online thermal calculation service for building envelopes and energy efficiency assessment per Ukrainian standards.",
      productsNormControlText: "NormControl — validity checking of standards in PDF with CSV/JSON export. Pricing via Patreon.",
      productsGeoJSONText: "IV GeoJSON — DXF to GeoJSON conversion with map calibration for GIS and government services.",
      productsConsequenceClassText: "Consequence class calculator per DSTU 8855:2019 with step-by-step action log and PDF/DOCX export.",
      productsDBNAssistantText: "DBN Assistant — AI assistants powered by MyGPT/OpenAI for analyzing building design standards. Bilingual.",
      productsArmConText: "ArmCon — structural design calculator. Reinforcement and detailing tool.",
      productsLBCText: "LiveBeamCalculator — real-time interactive calculation of bending moments and shear forces in beams.",
      ctaLearnMore: "Learn more",
      ctaOpenService: "Open service",
      ctaToAssistants: "Assistants",
      ctaAllProducts: "All products",

      // Assistants
      assistantsTitle: "AI Assistants",
      assistantButton: "Go to Assistant",

      // Blog
      blogTitle: "Blog",
      blogReadMore: "Read More",

      // Contact
      contactTitle: "Contact",
      contactText: "Have a question, suggestion, or collaboration idea? Write to me — I'm always open to conversation.",

      // Footer
      footerText: "All rights reserved."
    }
  };

  // Refresh reveal state for dynamically rendered containers
  function refreshReveal() {
    var staggerEls = document.querySelectorAll('.reveal-stagger');
    staggerEls.forEach(function(el) {
      // If already in viewport, re-add revealed class
      var rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('revealed');
      }
    });
  }

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
    renderBlogArticles();
    // Re-trigger reveal for dynamically rendered containers
    refreshReveal();
  }


  // Функція для динамічного формування блоків асистентів
function renderAssistants() {
  const container = document.getElementById('assistants-container');
  container.innerHTML = '';
  assistantsData.forEach(function(assistant) {
    const colDiv = document.createElement('div');
    colDiv.className = 'masonry-item';

    const cardDiv = document.createElement('div');
    cardDiv.className = 'card assistant-card mb-4 shadow-sm';

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    const infoDiv = document.createElement('div');
    infoDiv.className = 'assistant-info';

    const logoImg = document.createElement('img');
    logoImg.src = assistant.logo;
    logoImg.alt = assistant.title[currentLang] + " logo";
    logoImg.className = "assistant-logo";

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

    infoDiv.appendChild(logoImg);
    infoDiv.appendChild(textContainer);

    cardBody.appendChild(infoDiv);

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
  container.innerHTML = '';
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



  // Функція для прикріплення подій GA до всіх посилань та кнопок
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

  // Відсилання подій GA для кліків по навігаційних посиланнях
  document.querySelectorAll('a.nav-link').forEach(function(link) {
    if (!link.hasAttribute('data-ga-attached')) {
      link.addEventListener('click', function() {
        const target = link.getAttribute('href');
        sendAnalyticsEvent('nav_click', 'Navigation', target);
      });
      link.setAttribute('data-ga-attached', 'true');
    }
  });

  attachGlobalGAEvents();

  // Оновлюємо розташування розділів і меню за конфігурацією
  updateSectionsOrder();
  // Завантаження текстів та контенту
  updateTexts();

  // Scroll reveal via IntersectionObserver
  const revealEls = document.querySelectorAll('.reveal, .reveal-stagger');
  if (revealEls.length && 'IntersectionObserver' in window) {
    const revealObs = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          revealObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(function(el) { revealObs.observe(el); });
  } else {
    // Fallback: show everything immediately
    revealEls.forEach(function(el) { el.classList.add('revealed'); });
  }

  // Card glow effect — track mouse position (throttled via rAF)
  var glowRAF = null;
  document.addEventListener('mousemove', function(e) {
    if (glowRAF) return;
    glowRAF = requestAnimationFrame(function() {
      var cards = document.querySelectorAll('.card:hover');
      cards.forEach(function(card) {
        var rect = card.getBoundingClientRect();
        var x = ((e.clientX - rect.left) / rect.width * 100).toFixed(1);
        var y = ((e.clientY - rect.top) / rect.height * 100).toFixed(1);
        card.style.setProperty('--mouse-x', x + '%');
        card.style.setProperty('--mouse-y', y + '%');
      });
      glowRAF = null;
    });
  });
});
