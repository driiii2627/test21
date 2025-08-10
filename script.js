const themes = [
    { id: 'gamer-dark', name: 'Gamer Dark', type: 'dark' },
    { id: 'gamer-light', name: 'Gamer Light', type: 'light' },
    { id: 'matrix-dark', name: 'Matriz', type: 'dark' },
    { id: 'minty-light', name: 'Minty Fresh', type: 'light' },
];

const gamesData = [
    { 
        id: 1, 
        title: "Minecraft", 
        image: "https://placehold.co/400x300/065f46/ffffff?text=Minecraft", 
        categories: ["Sandbox", "Sobrevivência", "Aventura", "Mundo Aberto"], 
        featured: true, 
        hasAddons: true, 
        addons: [
            { 
                categoryKey: "texturas", 
                icon: "paintbrush", 
                files: [{ name: "Faithful 32x" }, { name: "Bare Bones" }] 
            }, 
            { 
                categoryKey: "shaders", 
                icon: "sun", 
                files: [{ name: "BSL Shaders" }] 
            }
        ],
        useShorteners: false,
        defaultLink: "#",
        downloadLinks: {},
        hasInfo: true,
        info: {
            version: "1.21.0",
            size: "150 MB",
            requirements: "Android 5.0+"
        }
    },
    { 
        id: 2, 
        title: "Terraria", 
        image: "https://placehold.co/400x300/581c87/ffffff?text=Terraria", 
        categories: ["Sandbox", "Aventura"], 
        featured: true, 
        hasAddons: false,
        useShorteners: true,
        defaultLink: "#",
        downloadLinks: {
            linkvertise: "https://linkvertise.com/your-link",
            encurtanet: "https://encurta.net/your-link"
        },
        hasInfo: false
    },
];

const apksData = [
    { id: 1, title: "Gerenciador de Arquivos Pro", image: "https://placehold.co/400x300/1d4ed8/ffffff?text=Files", version: "v2.5.1", updated: "2025-08-09" },
    { id: 2, title: "Editor de Vídeo Max", image: "https://placehold.co/400x300/be123c/ffffff?text=Video", version: "v1.10.0", updated: "2025-08-08" },
    { id: 3, title: "Player de Música Ultra", image: "https://placehold.co/400x300/059669/ffffff?text=Music", version: "v3.2", updated: "2025-08-10" },
    { id: 4, title: "tes", image: "https://placehold.co/400x300/059669/ffffff?text=abc", version: "v3.2", updated: "2026-08-10" },
    { id: 5, title: "teste", image: "https://placehold.co/400x300/059669/ffffff?text=sla", version: "v3.2", updated: "2024-08-10" },
];

const languages = {
    pt: { name: "Português", flag: "https://flagcdn.com/w20/br.png" },
    en: { name: "English", flag: "https://flagcdn.com/w20/us.png" },
    es: { name: "Español", flag: "https://flagcdn.com/w20/es.png" },
};

const translations = {
    en: { theme_modal_title: "Select Theme", nav_games: "Games", nav_apks: "APKs", nav_announcements: "Announcements", nav_games_mobile: "Games", nav_apks_mobile: "APKs", nav_announcements_mobile: "Announcements", search_placeholder: "Search...", hero_title: "Your Adventure Starts with a Download", hero_subtitle: "Direct access to the best games and APKs. Fast, secure, and community-curated.", featured_games_title: "Featured Games", all_games_title: "All Games", search_results_title: "Search Results", genre_sandbox: "Sandbox", genre_aventura: "Adventure", genre_sobrevivência: "Survival", "genre_mundo_aberto": "Open World", no_results_title: "No games found", no_results_subtitle: "Try searching with other terms.", coming_soon_title: "Coming Soon", coming_soon_subtitle: "We are working on this section!", "404_button": "Back to Base", download_button: "Download", category_all: "All", addon_modal_title: "Add-ons for", view_all_button: "View All", theme_name_matrix: "Matrix", announcements_title: "Announcements", announcement_testing: "This site is in a testing phase. New features and games are constantly being added. Thank you for your visit!", addon_category_texturas: "Textures", addon_category_shaders: "Shaders", footer_copyright: "© 2025 GameShare. All rights reserved.", nav_terms: "Terms", terms_title: "Terms of Service", terms_p1: "GameShare acts as an aggregator and indexer of links to games and applications (APKs) publicly available on the internet. We do not host any files on our servers.", terms_p2: "All download links presented on this site redirect to third-party websites. GameShare has no control over the content of these external sites and assumes no responsibility for their security, legality, or accuracy.", terms_p3: "The user assumes full responsibility for the use of the links and for downloading any files. We recommend the use of antivirus software and the verification of all downloaded files. GameShare is not responsible for any damage that may occur to your device.", terms_p4: "Although our team strives to verify the integrity of the links, we cannot guarantee that all will always be functional or free of malicious software. If you find a broken or suspicious link, please contact us so we can review the content.", beta_notification: "This site is in a testing phase.", announcement_date_1: "August 10, 2025", announcement_title_1: "Welcome to the Beta Phase!", announcement_content_1: "This site is in a testing phase. New features and games are constantly being added. Thank you for your visit and feedback!", nav_privacy: "Privacy", privacy_title: "Privacy Policy", privacy_p1: "Your privacy is important to us. This privacy policy explains what personal data GameShare collects from you and how we use it.", privacy_p2: "Data We Collect: GameShare uses your browser's local storage to save your preferences, such as the visual theme (light/dark) and selected language. We do not collect personally identifiable information like name, email, or IP address.", privacy_p3: "How We Use Data: The locally saved data is used exclusively to improve your browsing experience on the site, ensuring your preferences are maintained between visits. This data is not shared with third parties.", privacy_p4: "Cookies: If you consent, we may use anonymous cookies for analytics purposes to understand how users interact with the site and how we can improve it. This consent is optional.", consent_title: "Your Privacy", consent_text: "We use local storage to save your preferences. By continuing, you agree to our Terms of Service and Privacy Policy.", consent_analytics: "Allow cookies for analytics (optional)", consent_accept: "Accept and Continue", apks_title: "Popular APKs", apks_wip_warning: "This section is under development. More APKs will be added soon!", download_options_title: "Download Options", info_title: "Information", info_version: "Version", info_size: "Size", info_requirements: "Requirements", nav_about: "About", nav_about_mobile: "About", about_title: "About GameShare", about_subtitle: "Our mission is to democratize access to incredible games.", about_our_mission_title: "Our Mission", about_our_mission_p1: "We believe that everyone, regardless of their financial situation, should have the opportunity to explore vast worlds and live great adventures. GameShare was born from this ideal: to be a bridge that facilitates access to games and applications, simply and directly.", about_our_mission_p2: "GameShare is one of our most complex and ambitious projects, and we are happy to share it with you. Each link here is a door to a new experience, and our community is the key to keeping this universe always growing.", about_creators_title: "Developers", about_creator_role_founder_dev: "Founder & Developer", about_creator_role_founder: "Founder" },
    pt: { theme_modal_title: "Selecionar Tema", nav_games: "Jogos", nav_apks: "APKs", nav_announcements: "Anúncios", nav_games_mobile: "Jogos", nav_apks_mobile: "APKs", nav_announcements_mobile: "Anúncios", search_placeholder: "Pesquisar...", hero_title: "Sua Aventura Começa com um Download", hero_subtitle: "Acesso direto aos melhores jogos e APKs. Rápido, seguro e selecionado pela comunidade.", featured_games_title: "Jogos em Destaque", all_games_title: "Todos os Jogos", search_results_title: "Resultados da Pesquisa", genre_sandbox: "Sandbox", genre_aventura: "Aventura", genre_sobrevivência: "Sobrevivência", "genre_mundo_aberto": "Mundo Aberto", no_results_title: "Nenhum jogo encontrado", no_results_subtitle: "Tente pesquisar com outros termos.", coming_soon_title: "Em Breve", coming_soon_subtitle: "Estamos trabalhando nesta seção!", "404_button": "Voltar para a Base", download_button: "Baixar", category_all: "Todos", addon_modal_title: "Add-ons para", view_all_button: "Ver Todos", theme_name_matrix: "Matriz", announcements_title: "Anúncios", announcement_testing: "Este site está em fase de testes. Novas funcionalidades e jogos são adicionados constantemente. Agradecemos a sua visita!", addon_category_texturas: "Texturas", addon_category_shaders: "Shaders", footer_copyright: "© 2025 GameShare. Todos os direitos reservados.", nav_terms: "Termos", terms_title: "Termos de Serviço", terms_p1: "O GameShare atua como um agregador e indexador de links para jogos e aplicativos (APKs) disponíveis publicamente na internet. Nós não hospedamos nenhum arquivo em nossos servidores.", terms_p2: "Todos os links de download apresentados neste site redirecionam para sites de terceiros. O GameShare não tem controle sobre o conteúdo desses sites externos e não assume qualquer responsabilidade pela sua segurança, legalidade ou precisão.", terms_p3: "O usuário assume total responsabilidade pelo uso dos links e pelo download de quaisquer arquivos. Recomendamos o uso de software antivírus e a verificação de todos os arquivos baixados. O GameShare não se responsabiliza por quaisquer danos que possam ocorrer em seu dispositivo.", terms_p4: "Embora nossa equipe se esforce para verificar a integridade dos links, não podemos garantir que todos estarão sempre funcionais ou livres de software malicioso. Se encontrar um link quebrado ou suspeito, por favor, contate-nos para que possamos revisar o conteúdo.", beta_notification: "Este site está em fase de testes.", announcement_date_1: "10 de Agosto de 2025", announcement_title_1: "Bem-vindo à Fase Beta!", announcement_content_1: "Este site está em fase de testes. Novas funcionalidades e jogos são adicionados constantemente. Agradecemos a sua visita e feedback!", nav_privacy: "Privacidade", privacy_title: "Política de Privacidade", privacy_p1: "A sua privacidade é importante para nós. Esta política de privacidade explica quais dados pessoais o GameShare coleta de você e como os usamos.", privacy_p2: "Dados que Coletamos: O GameShare utiliza o armazenamento local (localStorage) do seu navegador para salvar as suas preferências, como o tema visual (claro/escuro) e o idioma selecionado. Não coletamos informações de identificação pessoal como nome, e-mail ou endereço IP.", privacy_p3: "Como Usamos os Dados: Os dados salvos localmente são usados exclusivamente para melhorar a sua experiência de navegação no site, garantindo que as suas preferências sejam mantidas entre as visitas. Estes dados não são partilhados com terceiros.", privacy_p4: "Cookies: Se você consentir, poderemos usar cookies anónimos para fins de análise, para entendermos como os utilizadores interagem com o site e como podemos melhorá-lo. Este consentimento é opcional.", consent_title: "Sua Privacidade", consent_text: "Usamos o armazenamento local para salvar as suas preferências. Ao continuar, você concorda com nossos Termos de Serviço e Política de Privacidade.", consent_analytics: "Permitir cookies para análise (opcional)", consent_accept: "Aceitar e Continuar", apks_title: "APKs Populares", apks_wip_warning: "Esta secção está em desenvolvimento. Mais APKs serão adicionados em breve!", download_options_title: "Opções de Download", info_title: "Informações", info_version: "Versão", info_size: "Tamanho", info_requirements: "Requisitos", nav_about: "Sobre", nav_about_mobile: "Sobre", about_title: "Sobre o GameShare", about_subtitle: "Nossa missão é democratizar o acesso a jogos incríveis.", about_our_mission_title: "Nossa Missão", about_our_mission_p1: "Acreditamos que todos, independentemente da sua condição financeira, devem ter a oportunidade de explorar vastos mundos e viver grandes aventuras. O GameShare nasceu desse ideal: ser uma ponte que facilita o acesso a jogos e aplicativos, de forma simples e direta.", about_our_mission_p2: "GameShare é um dos nossos projetos mais complexos e ambiciosos, e estamos felizes em compartilhar isso com vocês. Cada link aqui é uma porta para uma nova experiência, e nossa comunidade é a chave para manter este universo sempre a crescer.", about_creators_title: "Developers", about_creator_role_founder_dev: "Fundador & Desenvolvedor", about_creator_role_founder: "Fundador" },
    es: { theme_modal_title: "Seleccionar Tema", nav_games: "Juegos", nav_apks: "APKs", nav_announcements: "Anuncios", nav_games_mobile: "Juegos", nav_apks_mobile: "APKs", nav_announcements_mobile: "Anuncios", search_placeholder: "Buscar...", hero_title: "Tu Aventura Comienza con una Descarga", hero_subtitle: "Acceso directo a los mejores juegos y APKs. Rápido, seguro y seleccionado por la comunidad.", featured_games_title: "Juegos Destacados", all_games_title: "Todos los Juegos", search_results_title: "Resultados de la Búsqueda", genre_sandbox: "Sandbox", genre_aventura: "Aventura", genre_sobrevivência: "Supervivencia", "genre_mundo_aberto": "Mundo Abierto", no_results_title: "No se encontraron juegos", no_results_subtitle: "Intenta buscar con otros términos.", coming_soon_title: "Próximamente", coming_soon_subtitle: "¡Estamos trabajando en esta sección!", "404_button": "Volver a la Base", download_button: "Descargar", category_all: "Todos", addon_modal_title: "Add-ons para", view_all_button: "Ver Todos", theme_name_matrix: "Matriz", announcements_title: "Anuncios", announcement_testing: "Este sitio está en fase de pruebas. Nuevas características y juegos se añaden constantemente. ¡Gracias por su visita!", addon_category_texturas: "Texturas", addon_category_shaders: "Shaders", footer_copyright: "© 2025 GameShare. Todos los derechos reservados.", nav_terms: "Términos", terms_title: "Términos de Servicio", terms_p1: "GameShare actúa como un agregador e indexador de enlaces a juegos y aplicaciones (APKs) disponibles públicamente en Internet. No alojamos ningún archivo en nuestros servidores.", terms_p2: "Todos los enlaces de descarga presentados en este sitio redirigen a sitios web de terceros. GameShare no tiene control sobre el contenido de estos sites externos y no asume ninguna responsabilidad por su seguridad, legalidad o precisión.", terms_p3: "El usuario asume toda la responsabilidad por el uso de los enlaces y la descarga de cualquier archivo. Recomendamos el uso de software antivirus y la verificación de todos los archivos descargados. GameShare no se hace responsable de los daños que puedan ocurrir en su dispositivo.", terms_p4: "Aunque nuestro equipo se esfuerza por verificar la integridad de los enlaces, no podemos garantizar que todos estarán siempre funcionales o libres de software malicioso. Si encuentra un enlace roto o sospechoso, contáctenos para que podamos revisar el contenido.", beta_notification: "Este sitio está en fase de pruebas.", announcement_date_1: "10 de Agosto de 2025", announcement_title_1: "¡Bienvenido a la Fase Beta!", announcement_content_1: "Este sitio está en fase de pruebas. Nuevas características y juegos se añaden constantemente. ¡Gracias por su visita y comentarios!", nav_privacy: "Privacidad", privacy_title: "Política de Privacidad", privacy_p1: "Su privacidad es importante para nosotros. Esta política de privacidad explica qué datos personales recopila GameShare de usted y cómo los usamos.", privacy_p2: "Datos que Recopilamos: GameShare utiliza el almacenamiento local (localStorage) de su navegador para guardar sus preferencias, como el tema visual (claro/oscuro) y el idioma seleccionado. No recopilamos información de identificación personal como nombre, correo electrónico o dirección IP.", privacy_p3: "Cómo Usamos los Datos: Los datos guardados localmente se utilizan exclusivamente para mejorar su experiencia de navegación en el sitio, asegurando que sus preferencias se mantengan entre visitas. Estos datos no se comparten con terceros.", privacy_p4: "Cookies: Si usted da su consentimiento, podemos utilizar cookies anónimas con fines analíticos para comprender cómo los usuarios interactúan con el sitio y cómo podemos mejorarlo. Este consentimiento es opcional.", consent_title: "Su Privacidad", consent_text: "Utilizamos el almacenamiento local para guardar sus preferencias. Al continuar, usted acepta nuestros Términos de Servicio y Política de Privacidad.", consent_analytics: "Permitir cookies para análisis (opcional)", consent_accept: "Aceptar y Continuar", apks_title: "APKs Populares", apks_wip_warning: "Esta sección está en desarrollo. ¡Más APKs se añadirán pronto!", download_options_title: "Opciones de Descarga", info_title: "Información", info_version: "Versión", info_size: "Tamaño", info_requirements: "Requisitos", nav_about: "Sobre", nav_about_mobile: "Sobre", about_title: "Sobre GameShare", about_subtitle: "Nuestra misión es democratizar el acceso a juegos increíbles.", about_our_mission_title: "Nuestra Misión", about_our_mission_p1: "Creemos que todos, independientemente de su situación financiera, deben tener la oportunidad de explorar vastos mundos y vivir grandes aventuras. GameShare nació de este ideal: ser un puente que facilite el acceso a juegos y aplicaciones, de forma sencilla y directa.", about_our_mission_p2: "GameShare es uno de nuestros proyectos más complejos y ambiciosos, y estamos felices de compartirlo con ustedes. Cada enlace aquí es una puerta a una nueva experiencia, y nuestra comunidad es la clave para mantener este universo siempre en crecimiento.", about_creators_title: "Developers", about_creator_role_founder_dev: "Fundador y Desarrollador", about_creator_role_founder: "Fundador" },
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);
const htmlElement = document.documentElement;

const createGameCardHTML = (game) => {
    const currentLang = localStorage.getItem('language') || 'pt';
    const categoriesHTML = game.categories.map(category => {
        const key = `genre_${category.toLowerCase().replace(/ /g, '_')}`;
        const translatedCategory = translations[currentLang]?.[key] || category;
        return `<span class="category-tag text-xs font-semibold px-2.5 py-1 rounded-full cursor-pointer" data-category="${category}">${translatedCategory}</span>`;
    }).join('');

    const downloadButtonHTML = game.useShorteners && Object.keys(game.downloadLinks).length > 0
        ? `<button class="w-full flex-grow card-button text-center py-2 px-3 rounded-lg font-semibold flex items-center justify-center space-x-2 text-sm open-download-modal-btn" data-game-id="${game.id}">
              <i data-lucide="download" class="w-4 h-4"></i>
              <span data-translate-key="download_button">${translations[currentLang]?.download_button || 'Baixar'}</span>
          </button>`
        : `<a href="${game.defaultLink || '#'}" class="w-full flex-grow card-button text-center py-2 px-3 rounded-lg font-semibold flex items-center justify-center space-x-2 text-sm">
              <i data-lucide="download" class="w-4 h-4"></i>
              <span data-translate-key="download_button">${translations[currentLang]?.download_button || 'Baixar'}</span>
          </a>`;

    const addonsButtonHTML = game.hasAddons 
        ? `<button class="card-button p-2 rounded-lg flex-shrink-0 open-addons-btn" data-game-id="${game.id}"><i data-lucide="box" class="w-5 h-5 text-muted"></i></button>` 
        : '';
    
    const infoButtonHTML = game.hasInfo
        ? `<button class="card-action-btn open-info-btn" title="Info" data-game-id="${game.id}">
              <i data-lucide="info" class="w-5 h-5"></i>
          </button>`
        : '';

    return `
        <div class="glass-card rounded-2xl game-card flex flex-col overflow-hidden h-full group">
            <div class="relative">
                <img src="${game.image}" alt="${game.title}" class="w-full aspect-[4/3] object-cover" onerror="this.onerror=null;this.src='https://placehold.co/400x300/0D1117/E2E8F0?text=Image+Not+Found';">
                <div class="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    ${infoButtonHTML}
                </div>
            </div>
            <div class="p-3 flex flex-col flex-grow card-content">
                <div class="flex-grow">
                    <h3 class="font-bold text-lg mb-2 text-primary truncate">${game.title}</h3>
                    <div class="category-container relative h-7 flex items-center overflow-hidden mb-2">
                        <div class="category-list absolute flex items-center gap-2 whitespace-nowrap">
                            ${categoriesHTML}
                        </div>
                    </div>
                </div>
                <div class="flex items-center gap-2">
                    ${downloadButtonHTML}
                    ${addonsButtonHTML}
                </div>
            </div>
        </div>
    `;
};

const createApkCardHTML = (apk) => {
    return `
        <div class="glass-card apk-card-image rounded-2xl flex flex-col justify-end p-4 h-48 overflow-hidden" style="background-image: url('${apk.image}')">
            <div class="relative z-10">
                 <h3 class="font-bold text-lg text-white">${apk.title}</h3>
                 <p class="text-sm text-slate-300">Version ${apk.version} | Updated: ${apk.updated}</p>
            </div>
            <a href="#" class="absolute top-4 right-4 card-button p-2 rounded-lg z-10">
                <i data-lucide="download" class="w-5 h-5 text-muted"></i>
            </a>
        </div>
    `;
};

const renderGames = () => {
    const featuredGrid = $('#featured-games-grid');
    const allGamesGrid = $('#all-games-grid');
    const viewAllContainer = $('#view-all-container');

    if (featuredGrid) {
        featuredGrid.innerHTML = gamesData
            .filter(g => g.featured)
            .map(game => `<div class="game-wrapper" data-title="${game.title}" data-categories="${game.categories.join(',')}">${createGameCardHTML(game)}</div>`)
            .join('');
    }
    
    if (allGamesGrid) {
        const allGamesHTML = gamesData.map((game, index) => {
            const isVisibleInitially = index < 14;
            return `<div class="game-wrapper ${isVisibleInitially ? '' : 'hidden'}" data-title="${game.title}" data-categories="${game.categories.join(',')}">${createGameCardHTML(game)}</div>`;
        }).join('');
        allGamesGrid.innerHTML = allGamesHTML;
    }
    
    if(viewAllContainer) viewAllContainer.classList.toggle('hidden', gamesData.length <= 14);

    lucide.createIcons();
    initCategoryAnimation();
};

const renderApks = () => {
    const apkGrid = $('#all-apks-grid');
    if (apkGrid) {
        apkGrid.innerHTML = apksData.map(createApkCardHTML).join('');
        lucide.createIcons();
    }
};

const setLanguage = (lang) => {
    localStorage.setItem('language', lang);
    htmlElement.lang = lang;
    const langConfig = languages[lang] || languages.pt;
    const langTranslations = translations[lang] || translations.pt;
    
    $$('[data-translate-key]').forEach(el => {
        const key = el.dataset.translateKey;
        const translation = langTranslations[key];
        if(translation === undefined) return;

        const span = el.querySelector('span');
        if (el.placeholder) {
            el.placeholder = translation;
        } else if (span) {
            span.textContent = translation;
        } else {
            el.textContent = translation;
        }
    });
    generateCategoryFilters();
    renderGames();
    generateThemePreviews();
};

const setTheme = (themeId) => {
    htmlElement.dataset.theme = themeId;
    localStorage.setItem('selectedTheme', themeId);
    $$('#themeGrid .theme-preview').forEach(preview => {
        preview.classList.toggle('active', preview.dataset.themeId === themeId);
    });
};

const generateThemePreviews = () => {
    const themeGrid = $('#themeGrid');
    if(!themeGrid) return;
    const currentLang = localStorage.getItem('language') || 'pt';
    
    themeGrid.innerHTML = themes.map(theme => {
        let themeName = theme.name;
        if (theme.id === 'matrix-dark') {
            themeName = translations[currentLang]?.theme_name_matrix || theme.name;
        }

        return `
        <div class="theme-preview rounded-lg p-3" data-theme-id="${theme.id}">
            <div class="flex items-center justify-between mb-2">
                 <h3 class="font-bold text-sm preview-text">${themeName}</h3>
                 <i data-lucide="${theme.type === 'dark' ? 'moon' : 'sun'}" class="w-4 h-4 preview-icon"></i>
            </div>
            <div class="flex h-8 rounded overflow-hidden">
                <div class="palette-bg"></div>
                <div class="palette-accent1"></div>
                <div class="palette-accent2"></div>
                <div class="palette-button"></div>
            </div>
        </div>
    `}).join('');
    
    $$('#themeGrid .theme-preview').forEach(preview => {
        const themeId = preview.dataset.themeId;
        preview.setAttribute('data-theme', themeId);
        preview.addEventListener('click', () => setTheme(themeId));
    });
    lucide.createIcons();
};

const showPage = (pageId) => {
    const pages = [$('#page-home'), $('#page-apks'), $('#page-404'), $('#page-announcements'), $('#page-terms'), $('#page-privacy'), $('#page-about')];
    pages.forEach(page => {
        if (page) page.classList.add('hidden');
    });

    const pageToShow = $(`#page-${pageId}`);
    if (pageToShow) {
        pageToShow.classList.remove('hidden');
    } else {
        const page404 = $('#page-404');
        if (page404) page404.classList.remove('hidden');
    }
};

const initCategoryAnimation = () => {
    $$('.category-container').forEach(container => {
        const list = container.querySelector('.category-list');
        if (!list || list.children.length < 2) return;

        if (container.intervalId) clearInterval(container.intervalId);
        if (container.resizeObserver) container.resizeObserver.disconnect();

        const checkAndAnimate = () => {
            const isOverflowing = list.scrollWidth > container.clientWidth;
            container.classList.toggle('is-overflowing', isOverflowing);

            if (isOverflowing && !container.intervalId) {
                 container.intervalId = setInterval(() => {
                    const firstTag = list.children[0];
                    if (!firstTag) return;
                    const tagWidth = firstTag.offsetWidth;
                    const gap = parseInt(window.getComputedStyle(list).gap) || 8;

                    list.style.transition = 'transform 0.5s ease-in-out';
                    list.style.transform = `translateX(-${tagWidth + gap}px)`;

                    setTimeout(() => {
                        list.style.transition = 'none';
                        list.appendChild(firstTag);
                        list.style.transform = 'translateX(0)';
                    }, 500);
                }, 2500);
            } else if (!isOverflowing && container.intervalId) {
                clearInterval(container.intervalId);
                container.intervalId = null;
                list.style.transition = 'none';
                list.style.transform = 'translateX(0)';
            }
        };
        
        setTimeout(checkAndAnimate, 50);
        container.resizeObserver = new ResizeObserver(checkAndAnimate);
        container.resizeObserver.observe(container);
    });
};

const updateFilters = () => {
    const searchInput = $('#searchInput');
    if (!searchInput) return;

    const searchTerm = searchInput.value.toLowerCase();
    const activeCategory = $('.category-filter.active')?.dataset.category;
    const isFiltering = searchTerm.length > 0 || (activeCategory && activeCategory !== 'Todos');

    const featuredSection = $('#featured-games-grid')?.closest('section');
    const allGamesSection = $('#all-games-grid')?.closest('section');
    const viewAllContainer = $('#view-all-container');
    const noResultsMessage = $('#noResultsMessage');

    if (featuredSection) {
        featuredSection.style.display = isFiltering ? 'none' : 'block';
    }
    if (viewAllContainer) {
        viewAllContainer.style.display = isFiltering ? 'none' : (gamesData.length > 14 ? 'block' : 'none');
    }
    
    const allGamesTitle = allGamesSection?.querySelector('.section-title');
    if (allGamesTitle) {
        const lang = localStorage.getItem('language') || 'pt';
        allGamesTitle.textContent = isFiltering 
            ? translations[lang].search_results_title
            : translations[lang].all_games_title;
    }

    let visibleCount = 0;
    $$('#all-games-grid .game-wrapper').forEach((wrapper, index) => {
        const title = wrapper.dataset.title.toLowerCase();
        const categories = wrapper.dataset.categories.split(',');

        const searchMatch = title.includes(searchTerm);
        const categoryMatch = !activeCategory || activeCategory === 'Todos' || categories.includes(activeCategory);
        
        const matchesFilter = searchMatch && categoryMatch;

        if (isFiltering) {
            wrapper.classList.remove('hidden');
            wrapper.style.display = matchesFilter ? 'block' : 'none';
            if (matchesFilter) visibleCount++;
        } else {
            wrapper.style.display = 'block';
            wrapper.classList.toggle('hidden', index >= 14);
        }
    });

    if (noResultsMessage) {
        noResultsMessage.style.display = (isFiltering && visibleCount === 0) ? 'block' : 'none';
    }
};

const generateCategoryFilters = () => {
    const categoryFilterBar = $('#category-filter-bar');
    if(!categoryFilterBar) return;

    const categories = new Set(gamesData.flatMap(game => game.categories));
    const currentLang = localStorage.getItem('language') || 'pt';
    const allText = translations[currentLang]?.category_all || "Todos";
    
    let filterButtonsHTML = `<button class="category-filter active px-4 py-2 rounded-lg text-sm font-semibold" data-category="Todos">${allText}</button>`;
    categories.forEach(category => {
        const key = `genre_${category.toLowerCase().replace(/ /g, '_')}`;
        const translatedCategory = translations[currentLang]?.[key] || category;
        filterButtonsHTML += `<button class="category-filter px-4 py-2 rounded-lg text-sm font-semibold" data-category="${category}">${translatedCategory}</button>`;
    });
    categoryFilterBar.innerHTML = filterButtonsHTML;
    
    $$('.category-filter').forEach(button => {
        button.addEventListener('click', (e) => {
            const category = e.currentTarget.dataset.category;
            $$('.category-filter').forEach(btn => btn.classList.toggle('active', btn.dataset.category === category));
            updateFilters();
        });
    });
};

const openAddonsModal = (gameId) => {
    const addonsModal = $('#addonsModal');
    if(!addonsModal) return;
    const game = gamesData.find(g => g.id === gameId);
    if (!game || !game.hasAddons) return;

    const currentLang = localStorage.getItem('language') || 'pt';
    $('#addonsModalTitle').textContent = `${translations[currentLang]?.addon_modal_title || 'Add-ons para'} ${game.title}`;
    
    let addonsHTML = '';
    game.addons.forEach(category => {
        const categoryKey = `addon_category_${category.categoryKey}`;
        const translatedCategoryTitle = translations[currentLang]?.[categoryKey] || category.categoryKey;

        addonsHTML += `
            <div class="mb-6 last:mb-0">
                <div class="flex items-center mb-3">
                    <i data-lucide="${category.icon}" class="w-5 h-5 mr-3 text-muted"></i>
                    <h3 class="text-xl font-bold text-primary">${translatedCategoryTitle}</h3>
                </div>
                <div class="space-y-3">
        `;
        category.files.forEach(file => {
            addonsHTML += `
                <div class="addon-item rounded-lg p-3 flex justify-between items-center transition-all hover:border-[var(--accent-violet)] hover:bg-[var(--button-hover-bg)]">
                    <span class="font-medium">${file.name}</span>
                    <a href="#" class="addon-download-btn p-2 rounded-lg">
                        <i data-lucide="download" class="w-5 h-5 text-muted"></i>
                    </a>
                </div>
            `;
        });
        addonsHTML += '</div></div>';
    });
    
    $('#addonsModalContent').innerHTML = addonsHTML;
    lucide.createIcons();
    addonsModal.classList.remove('hidden');
};

const openDownloadModal = (gameId) => {
    const downloadModal = $('#downloadModal');
    if(!downloadModal) return;
    const game = gamesData.find(g => g.id === gameId);
    if (!game) return;

    const currentLang = localStorage.getItem('language') || 'pt';
    $('#downloadModalTitle').textContent = `${translations[currentLang]?.download_options_title || 'Opções de Download'} - ${game.title}`;
    
    const linksContainer = $('#downloadLinksContainer');
    linksContainer.innerHTML = '';

    for (const shortener in game.downloadLinks) {
        const url = game.downloadLinks[shortener];
        const button = document.createElement('a');
        button.href = url;
        button.target = "_blank";
        button.rel = "noopener noreferrer";
        button.className = "download-option-btn";
        
        button.textContent = `Download via ${shortener.charAt(0).toUpperCase() + shortener.slice(1)}`; 
        
        linksContainer.appendChild(button);
    }
    
    downloadModal.classList.remove('hidden');
};

const openInfoModal = (gameId) => {
    const infoModal = $('#infoModal');
    if(!infoModal) return;
    const game = gamesData.find(g => g.id === gameId);
    if (!game || !game.hasInfo) return;

    const currentLang = localStorage.getItem('language') || 'pt';
    $('#infoModalTitle').textContent = `${translations[currentLang]?.info_title || 'Informações'} - ${game.title}`;
    
    const infoContent = $('#infoModalContent');
    infoContent.innerHTML = `
        <div class="flex justify-between">
            <span class="font-semibold text-muted">${translations[currentLang]?.info_version || 'Versão'}:</span>
            <span>${game.info.version}</span>
        </div>
        <div class="flex justify-between">
            <span class="font-semibold text-muted">${translations[currentLang]?.info_size || 'Tamanho'}:</span>
            <span>${game.info.size}</span>
        </div>
        <div class="flex justify-between">
            <span class="font-semibold text-muted">${translations[currentLang]?.info_requirements || 'Requisitos'}:</span>
            <span>${game.info.requirements}</span>
        </div>
    `;
    
    infoModal.classList.remove('hidden');
};

const router = () => {
    const path = window.location.hash.slice(1) || 'home';
    const routes = {
        'home': 'home',
        'announcements': 'announcements',
        'terms': 'terms',
        'privacy': 'privacy',
        'apks': 'apks',
        'about': 'about'
    };
    const pageId = routes[path] || '404';
    showPage(pageId);
};

const setupCategoryScroller = () => {
    const scrollContainer = $('#category-filter-bar');
    const leftBtn = $('#scroll-left');
    const rightBtn = $('#scroll-right');

    if (!scrollContainer || !leftBtn || !rightBtn) return;

    const checkScroll = () => {
        const hasOverflow = scrollContainer.scrollWidth > scrollContainer.clientWidth;
        if (!hasOverflow) {
            leftBtn.classList.add('hidden');
            rightBtn.classList.add('hidden');
            return;
        }
        
        leftBtn.classList.remove('hidden');
        rightBtn.classList.remove('hidden');

        leftBtn.style.opacity = scrollContainer.scrollLeft > 0 ? '1' : '0';
        leftBtn.style.pointerEvents = scrollContainer.scrollLeft > 0 ? 'auto' : 'none';

        const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
        rightBtn.style.opacity = scrollContainer.scrollLeft < maxScrollLeft - 1 ? '1' : '0';
        rightBtn.style.pointerEvents = scrollContainer.scrollLeft < maxScrollLeft - 1 ? 'auto' : 'none';
    };

    leftBtn.addEventListener('click', () => {
        scrollContainer.scrollBy({ left: -200, behavior: 'smooth' });
    });

    rightBtn.addEventListener('click', () => {
        scrollContainer.scrollBy({ left: 200, behavior: 'smooth' });
    });

    scrollContainer.addEventListener('scroll', checkScroll);
    window.addEventListener('resize', checkScroll);
    checkScroll();
};

const handleBetaNotification = () => {
    const notification = $('#notification-toast');
    if (!notification) return;

    if (!localStorage.getItem('betaNotificationSeen')) {
        notification.classList.remove('hidden');
        notification.classList.add('show');
        
        setTimeout(() => {
            notification.classList.remove('show');
            notification.classList.add('hide');
            setTimeout(() => notification.classList.add('hidden'), 500);
            localStorage.setItem('betaNotificationSeen', 'true');
        }, 5000);
    }
};

const generateLangMenu = () => {
    const langMenu = $('#langMenu');
    if (!langMenu) return;
    langMenu.innerHTML = Object.keys(languages).map(langKey => {
        const lang = languages[langKey];
        return `
            <a href="#" class="lang-option flex items-center px-4 py-2 text-sm text-inherit" data-lang="${langKey}">
                <img src="${lang.flag}" alt="${lang.name}" class="w-5 h-5 rounded-full mr-3">
                <span>${lang.name}</span>
            </a>
        `;
    }).join('');

    $$('.lang-option').forEach(option => {
        option.addEventListener('click', (e) => {
            e.preventDefault();
            setLanguage(e.currentTarget.dataset.lang);
            $('#langMenu')?.classList.add('hidden');
        });
    });
};

const handleConsent = () => {
    const consentModal = $('#consent-modal');
    if (!consentModal) return;

    if (!localStorage.getItem('consentGiven')) {
        consentModal.classList.remove('hidden');
    }

    $('#accept-consent-btn')?.addEventListener('click', () => {
        localStorage.setItem('consentGiven', 'true');
        const analyticsAllowed = $('#analytics-consent').checked;
        localStorage.setItem('analyticsConsent', analyticsAllowed);
        consentModal.classList.add('hidden');
    });
};

const setupScrollAnimations = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, {
        threshold: 0.1
    });

    $$('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
};

document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('selectedTheme') || 'gamer-dark';
    const savedLang = localStorage.getItem('language') || 'pt';
    
    generateLangMenu();
    setLanguage(savedLang);
    generateThemePreviews();
    setTheme(savedTheme);
    router();
    setupCategoryScroller();
    handleBetaNotification();
    handleConsent();
    renderApks();
    setupScrollAnimations();

    $('#searchBtn')?.addEventListener('click', () => { $('#searchInput')?.classList.toggle('active'); $('#searchInput')?.focus(); });
    $('#searchInput')?.addEventListener('input', updateFilters);
    $('#view-all-btn')?.addEventListener('click', () => {
        $$('#all-games-grid .game-wrapper').forEach(w => w.classList.remove('hidden'));
        $('#view-all-container')?.classList.add('hidden');
    });

    window.addEventListener('hashchange', router);
    $('#mobileMenuBtn')?.addEventListener('click', () => $('#mobileMenu')?.classList.toggle('hidden'));
    $('#langBtn')?.addEventListener('click', () => $('#langMenu')?.classList.toggle('hidden'));
    
    $('#themeSelectorBtn')?.addEventListener('click', () => $('#themeModal')?.classList.remove('hidden'));
    $('#closeThemeModalBtn')?.addEventListener('click', () => $('#themeModal')?.classList.add('hidden'));
    $('#themeModal .modal-backdrop')?.addEventListener('click', () => $('#themeModal')?.classList.add('hidden'));
    
    $('#closeAddonsModalBtn')?.addEventListener('click', () => $('#addonsModal')?.classList.add('hidden'));
    $('#addonsModal .modal-backdrop')?.addEventListener('click', () => $('#addonsModal')?.classList.add('hidden'));

    $('#closeDownloadModalBtn')?.addEventListener('click', () => $('#downloadModal')?.classList.add('hidden'));
    $('#downloadModal .modal-backdrop')?.addEventListener('click', () => $('#downloadModal')?.classList.add('hidden'));

    $('#closeInfoModalBtn')?.addEventListener('click', () => $('#infoModal')?.classList.add('hidden'));
    $('#infoModal .modal-backdrop')?.addEventListener('click', () => $('#infoModal')?.classList.add('hidden'));
    
    document.body.addEventListener('click', (e) => {
        const addonsBtn = e.target.closest('.open-addons-btn');
        if (addonsBtn) {
            openAddonsModal(parseInt(addonsBtn.dataset.gameId, 10));
        }

        const downloadBtn = e.target.closest('.open-download-modal-btn');
        if (downloadBtn) {
            openDownloadModal(parseInt(downloadBtn.dataset.gameId, 10));
        }

        const infoBtn = e.target.closest('.open-info-btn');
        if (infoBtn) {
            openInfoModal(parseInt(infoBtn.dataset.gameId, 10));
        }
    });
});
