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
        ] 
    },
    { 
        id: 2, 
        title: "Terraria", 
        image: "https://placehold.co/400x300/581c87/ffffff?text=Terraria", 
        categories: ["Sandbox", "Aventura"], 
        featured: true, 
        hasAddons: false 
    },
];

const languages = {
    pt: { name: "Português", flag: "https://flagcdn.com/w20/br.png" },
    en: { name: "English", flag: "https://flagcdn.com/w20/us.png" },
    es: { name: "Español", flag: "https://flagcdn.com/w20/es.png" },
};

const translations = {
    en: { theme_modal_title: "Select Theme", nav_games: "Games", nav_apks: "APKs", nav_announcements: "Announcements", nav_games_mobile: "Games", nav_apks_mobile: "APKs", nav_announcements_mobile: "Announcements", search_placeholder: "Search...", hero_title: "Your Adventure Starts with a Download", hero_subtitle: "Direct access to the best games and APKs. Fast, secure, and community-curated.", featured_games_title: "Featured Games", all_games_title: "All Games", search_results_title: "Search Results", genre_sandbox: "Sandbox", genre_aventura: "Adventure", genre_sobrevivência: "Survival", "genre_mundo_aberto": "Open World", no_results_title: "No games found", no_results_subtitle: "Try searching with other terms.", coming_soon_title: "Coming Soon", coming_soon_subtitle: "We are working on this section!", "404_button": "Back to Base", download_button: "Download", category_all: "All", addon_modal_title: "Add-ons for", view_all_button: "View All", theme_name_matrix: "Matrix", announcements_title: "Announcements", announcement_testing: "This site is in a testing phase. New features and games are constantly being added. Thank you for your visit!", addon_category_texturas: "Textures", addon_category_shaders: "Shaders", footer_copyright: "© 2025 GameShare. All rights reserved.", nav_terms: "Terms", terms_title: "Terms of Service", terms_p1: "GameShare acts as an aggregator and indexer of links to games and applications (APKs) publicly available on the internet. We do not host any files on our servers.", terms_p2: "All download links presented on this site redirect to third-party websites. GameShare has no control over the content of these external sites and assumes no responsibility for their security, legality, or accuracy.", terms_p3: "The user assumes full responsibility for the use of the links and for downloading any files. We recommend the use of antivirus software and the verification of all downloaded files. GameShare is not responsible for any damage that may occur to your device.", terms_p4: "Although our team strives to verify the integrity of the links, we cannot guarantee that all will always be functional or free of malicious software. If you find a broken or suspicious link, please contact us so we can review the content.", beta_notification: "This site is in a testing phase.", announcement_date_1: "August 10, 2025", announcement_title_1: "Welcome to the Beta Phase!", announcement_content_1: "This site is in a testing phase. New features and games are constantly being added. Thank you for your visit and feedback!" },
    pt: { theme_modal_title: "Selecionar Tema", nav_games: "Jogos", nav_apks: "APKs", nav_announcements: "Anúncios", nav_games_mobile: "Jogos", nav_apks_mobile: "APKs", nav_announcements_mobile: "Anúncios", search_placeholder: "Pesquisar...", hero_title: "Sua Aventura Começa com um Download", hero_subtitle: "Acesso direto aos melhores jogos e APKs. Rápido, seguro e selecionado pela comunidade.", featured_games_title: "Jogos em Destaque", all_games_title: "Todos os Jogos", search_results_title: "Resultados da Pesquisa", genre_sandbox: "Sandbox", genre_aventura: "Aventura", genre_sobrevivência: "Sobrevivência", "genre_mundo_aberto": "Mundo Aberto", no_results_title: "Nenhum jogo encontrado", no_results_subtitle: "Tente pesquisar com outros termos.", coming_soon_title: "Em Breve", coming_soon_subtitle: "Estamos trabalhando nesta seção!", "404_button": "Voltar para a Base", download_button: "Baixar", category_all: "Todos", addon_modal_title: "Add-ons para", view_all_button: "Ver Todos", theme_name_matrix: "Matriz", announcements_title: "Anúncios", announcement_testing: "Este site está em fase de testes. Novas funcionalidades e jogos são adicionados constantemente. Agradecemos a sua visita!", addon_category_texturas: "Texturas", addon_category_shaders: "Shaders", footer_copyright: "© 2025 GameShare. Todos os direitos reservados.", nav_terms: "Termos", terms_title: "Termos de Serviço", terms_p1: "O GameShare atua como um agregador e indexador de links para jogos e aplicativos (APKs) disponíveis publicamente na internet. Nós não hospedamos nenhum arquivo em nossos servidores.", terms_p2: "Todos os links de download apresentados neste site redirecionam para sites de terceiros. O GameShare não tem controle sobre o conteúdo desses sites externos e não assume qualquer responsabilidade pela sua segurança, legalidade ou precisão.", terms_p3: "O usuário assume total responsabilidade pelo uso dos links e pelo download de quaisquer arquivos. Recomendamos o uso de software antivírus e a verificação de todos os arquivos baixados. O GameShare não se responsabiliza por quaisquer danos que possam ocorrer em seu dispositivo.", terms_p4: "Embora nossa equipe se esforce para verificar a integridade dos links, não podemos garantir que todos estarão sempre funcionais ou livres de software malicioso. Se encontrar um link quebrado ou suspeito, por favor, contate-nos para que possamos revisar o conteúdo.", beta_notification: "Este site está em fase de testes.", announcement_date_1: "10 de Agosto de 2025", announcement_title_1: "Bem-vindo à Fase Beta!", announcement_content_1: "Este site está em fase de testes. Novas funcionalidades e jogos são adicionados constantemente. Agradecemos a sua visita e feedback!" },
    es: { theme_modal_title: "Seleccionar Tema", nav_games: "Juegos", nav_apks: "APKs", nav_announcements: "Anuncios", nav_games_mobile: "Juegos", nav_apks_mobile: "APKs", nav_announcements_mobile: "Anuncios", search_placeholder: "Buscar...", hero_title: "Tu Aventura Comienza con una Descarga", hero_subtitle: "Acceso directo a los mejores juegos y APKs. Rápido, seguro y seleccionado por la comunidad.", featured_games_title: "Juegos Destacados", all_games_title: "Todos los Juegos", search_results_title: "Resultados de la Búsqueda", genre_sandbox: "Sandbox", genre_aventura: "Aventura", genre_sobrevivência: "Supervivencia", "genre_mundo_aberto": "Mundo Abierto", no_results_title: "No se encontraron juegos", no_results_subtitle: "Intenta buscar con otros términos.", coming_soon_title: "Próximamente", coming_soon_subtitle: "¡Estamos trabajando en esta sección!", "404_button": "Volver a la Base", download_button: "Descargar", category_all: "Todos", addon_modal_title: "Add-ons para", view_all_button: "Ver Todos", theme_name_matrix: "Matriz", announcements_title: "Anuncios", announcement_testing: "Este sitio está en fase de pruebas. Nuevas características y juegos se añaden constantemente. ¡Gracias por su visita!", addon_category_texturas: "Texturas", addon_category_shaders: "Shaders", footer_copyright: "© 2025 GameShare. Todos los derechos reservados.", nav_terms: "Términos", terms_title: "Términos de Servicio", terms_p1: "GameShare actúa como un agregador e indexador de enlaces a juegos y aplicaciones (APKs) disponibles públicamente en Internet. No alojamos ningún archivo en nuestros servidores.", terms_p2: "Todos los enlaces de descarga presentados en este sitio redirigen a sitios web de terceros. GameShare no tiene control sobre el contenido de estos sites externos y no asume ninguna responsabilidad por su seguridad, legalidad o precisión.", terms_p3: "El usuario asume toda la responsabilidad por el uso de los enlaces y la descarga de cualquier archivo. Recomendamos el uso de software antivirus y la verificación de todos los archivos descargados. GameShare no se hace responsable de los daños que puedan ocurrir en su dispositivo.", terms_p4: "Aunque nuestro equipo se esfuerza por verificar la integridad de los enlaces, no podemos garantizar que todos estarán siempre funcionales o libres de software malicioso. Si encuentra un enlace roto o sospechoso, contáctenos para que podamos revisar el contenido.", beta_notification: "Este sitio está en fase de pruebas.", announcement_date_1: "10 de Agosto de 2025", announcement_title_1: "¡Bienvenido a la Fase Beta!", announcement_content_1: "Este sitio está en fase de pruebas. Nuevas características y juegos se añaden constantemente. ¡Gracias por su visita y comentarios!" },
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

    const addonsButtonHTML = game.hasAddons 
        ? `<button class="open-addons-btn card-button p-2 rounded-lg flex-shrink-0" data-game-id="${game.id}"><i data-lucide="box" class="w-5 h-5 text-muted"></i></button>` 
        : '';

    return `
        <div class="glass-card rounded-2xl game-card flex flex-col overflow-hidden h-full">
            <div class="relative">
                <img src="${game.image}" alt="${game.title}" class="w-full aspect-[4/3] object-cover" onerror="this.onerror=null;this.src='https://placehold.co/400x300/0D1117/E2E8F0?text=Image+Not+Found';">
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
                    <a href="#" class="w-full flex-grow card-button text-center py-2 px-3 rounded-lg font-semibold flex items-center justify-center space-x-2 text-sm">
                        <i data-lucide="download" class="w-4 h-4"></i>
                        <span data-translate-key="download_button">${translations[currentLang]?.download_button || 'Baixar'}</span>
                    </a>
                    ${addonsButtonHTML}
                </div>
            </div>
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

const setLanguage = (lang) => {
    localStorage.setItem('language', lang);
    htmlElement.lang = lang;
    const langConfig = languages[lang] || languages.pt;
    const langTranslations = translations[lang] || translations.pt;
    
    const currentLangDisplay = $('#current-lang-display');
    if(currentLangDisplay) {
        currentLangDisplay.innerHTML = `<img src="${langConfig.flag}" alt="${langConfig.name}" class="w-5 h-5 rounded-full mr-2">${langConfig.name}`;
    }

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
    const pages = [$('#page-home'), $('#page-404'), $('#page-announcements'), $('#page-terms')];
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

const router = () => {
    const path = window.location.hash.slice(1) || 'home';
    const routes = {
        'home': 'home',
        'announcements': 'announcements',
        'terms': 'terms',
        'apks': '404'
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
    
    document.body.addEventListener('click', (e) => {
        const addonsBtn = e.target.closest('.open-addons-btn');
        if (addonsBtn) openAddonsModal(parseInt(addonsBtn.dataset.gameId, 10));
    });
});
