// ===================================================================================
// --- CONFIGURAÇÕES GLOBAIS ---
// ===================================================================================
const themes = [
    { id: 'gamer-dark', name: 'Gamer Dark', type: 'dark' },
    { id: 'gamer-light', name: 'Gamer Light', type: 'light' },
    { id: 'matrix-dark', name: 'Matriz', type: 'dark' },
    { id: 'minty-light', name: 'Minty Fresh', type: 'light' },
];

const gamesData = [
    { id: 1, title: "Minecraft", image: "https://placehold.co/400x300/065f46/ffffff?text=Minecraft", categories: ["Sandbox", "Sobrevivência", "Aventura", "Mundo Aberto"], featured: true, hasAddons: true, addons: [{ categoryKey: "texturas", icon: "paintbrush", files: [{ name: "Faithful 32x" }, { name: "Bare Bones" }] }, { categoryKey: "shaders", icon: "sun", files: [{ name: "BSL Shaders" }] }] },
    { id: 2, title: "Terraria", image: "https://placehold.co/400x300/581c87/ffffff?text=Terraria", categories: ["Sandbox", "Aventura"], featured: true, hasAddons: false },
      { id: 3, title: "Terraria3", image: "https://placehold.co/400x300/581c87/ffffff?text=Terraria", categories: ["Sandbox", "testev2"], featured: true, hasAddons: false },
];

const translations = {
    en: { theme_modal_title: "Select Theme", nav_games: "Games", nav_apks: "APKs", nav_announcements: "Announcements", nav_games_mobile: "Games", nav_apks_mobile: "APKs", nav_announcements_mobile: "Announcements", search_placeholder: "Search...", hero_title: "Your Adventure Starts with a Download", hero_subtitle: "Direct access to the best games and APKs. Fast, secure, and community-curated.", featured_games_title: "Featured Games", all_games_title: "All Games", search_results_title: "Search Results", genre_sandbox: "Sandbox", genre_aventura: "Adventure", genre_sobrevivência: "Survival", "genre_mundo_aberto": "Open World", no_results_title: "No games found", no_results_subtitle: "Try searching with other terms.", coming_soon_title: "Coming Soon", coming_soon_subtitle: "We are working on this section!", "404_button": "Back to Base", download_button: "Download", category_all: "All", addon_modal_title: "Add-ons for", view_all_button: "View All", theme_name_matrix: "Matrix", announcements_title: "Announcements", announcement_testing: "This site is in a testing phase. New features and games are constantly being added. Thank you for your visit!", addon_category_texturas: "Textures", addon_category_shaders: "Shaders", footer_copyright: "© 2025 GameShare. All rights reserved.", nav_terms: "Terms", terms_title: "Terms of Service", terms_p1: "GameShare acts as an aggregator and indexer of links to games and applications (APKs) publicly available on the internet. We do not host any files on our servers.", terms_p2: "All download links presented on this site redirect to third-party websites. GameShare has no control over the content of these external sites and assumes no responsibility for their security, legality, or accuracy.", terms_p3: "The user assumes full responsibility for the use of the links and for downloading any files. We recommend the use of antivirus software and the verification of all downloaded files. GameShare is not responsible for any damage that may occur to your device.", terms_p4: "Although our team strives to verify the integrity of the links, we cannot guarantee that all will always be functional or free of malicious software. If you find a broken or suspicious link, please contact us so we can review the content." },
    pt: { theme_modal_title: "Selecionar Tema", nav_games: "Jogos", nav_apks: "APKs", nav_announcements: "Anúncios", nav_games_mobile: "Jogos", nav_apks_mobile: "APKs", nav_announcements_mobile: "Anúncios", search_placeholder: "Pesquisar...", hero_title: "Sua Aventura Começa com um Download", hero_subtitle: "Acesso direto aos melhores jogos e APKs. Rápido, seguro e selecionado pela comunidade.", featured_games_title: "Jogos em Destaque", all_games_title: "Todos os Jogos", search_results_title: "Resultados da Pesquisa", genre_sandbox: "Sandbox", genre_aventura: "Aventura", genre_sobrevivência: "Sobrevivência", "genre_mundo_aberto": "Mundo Aberto", no_results_title: "Nenhum jogo encontrado", no_results_subtitle: "Tente pesquisar com outros termos.", coming_soon_title: "Em Breve", coming_soon_subtitle: "Estamos trabalhando nesta seção!", "404_button": "Voltar para a Base", download_button: "Baixar", category_all: "Todos", addon_modal_title: "Add-ons para", view_all_button: "Ver Todos", theme_name_matrix: "Matriz", announcements_title: "Anúncios", announcement_testing: "Este site está em fase de testes. Novas funcionalidades e jogos são adicionados constantemente. Agradecemos a sua visita!", addon_category_texturas: "Texturas", addon_category_shaders: "Shaders", footer_copyright: "© 2025 GameShare. Todos os direitos reservados.", nav_terms: "Termos", terms_title: "Termos de Serviço", terms_p1: "O GameShare atua como um agregador e indexador de links para jogos e aplicativos (APKs) disponíveis publicamente na internet. Nós não hospedamos nenhum arquivo em nossos servidores.", terms_p2: "Todos os links de download apresentados neste site redirecionam para sites de terceiros. O GameShare não tem controle sobre o conteúdo desses sites externos e não assume qualquer responsabilidade pela sua segurança, legalidade ou precisão.", terms_p3: "O usuário assume total responsabilidade pelo uso dos links e pelo download de quaisquer arquivos. Recomendamos o uso de software antivírus e a verificação de todos os arquivos baixados. O GameShare não se responsabiliza por quaisquer danos que possam ocorrer em seu dispositivo.", terms_p4: "Embora nossa equipe se esforce para verificar a integridade dos links, não podemos garantir que todos estarão sempre funcionais ou livres de software malicioso. Se encontrar um link quebrado ou suspeito, por favor, contate-nos para que possamos revisar o conteúdo." },
    es: { theme_modal_title: "Seleccionar Tema", nav_games: "Juegos", nav_apks: "APKs", nav_announcements: "Anuncios", nav_games_mobile: "Juegos", nav_apks_mobile: "APKs", nav_announcements_mobile: "Anuncios", search_placeholder: "Buscar...", hero_title: "Tu Aventura Comienza con una Descarga", hero_subtitle: "Acceso directo a los mejores juegos y APKs. Rápido, seguro y seleccionado por la comunidad.", featured_games_title: "Juegos Destacados", all_games_title: "Todos los Juegos", search_results_title: "Resultados de la Búsqueda", genre_sandbox: "Sandbox", genre_aventura: "Aventura", genre_sobrevivência: "Supervivencia", "genre_mundo_aberto": "Mundo Abierto", no_results_title: "No se encontraron juegos", no_results_subtitle: "Intenta buscar con otros términos.", coming_soon_title: "Próximamente", coming_soon_subtitle: "¡Estamos trabajando en esta sección!", "404_button": "Volver a la Base", download_button: "Descargar", category_all: "Todos", addon_modal_title: "Add-ons para", view_all_button: "Ver Todos", theme_name_matrix: "Matriz", announcements_title: "Anuncios", announcement_testing: "Este sitio está en fase de pruebas. Nuevas características y juegos se añaden constantemente. ¡Gracias por su visita!", addon_category_texturas: "Texturas", addon_category_shaders: "Shaders", footer_copyright: "© 2025 GameShare. Todos los derechos reservados.", nav_terms: "Términos", terms_title: "Términos de Servicio", terms_p1: "GameShare actúa como un agregador e indexador de enlaces a juegos y aplicaciones (APKs) disponibles públicamente en Internet. No alojamos ningún archivo en nuestros servidores.", terms_p2: "Todos los enlaces de descarga presentados en este sitio redirigen a sitios web de terceros. GameShare no tiene control sobre el contenido de estos sitios externos y no asume ninguna responsabilidad por su seguridad, legalidad o precisión.", terms_p3: "El usuario asume toda la responsabilidad por el uso de los enlaces y la descarga de cualquier archivo. Recomendamos el uso de software antivirus y la verificación de todos los archivos descargados. GameShare no se hace responsable de los daños que puedan ocurrir en su dispositivo.", terms_p4: "Aunque nuestro equipo se esfuerza por verificar la integridad de los enlaces, no podemos garantizar que todos estarán siempre funcionales o libres de software malicioso. Si encuentra un enlace roto o sospechoso, contáctenos para que podamos revisar el contenido." },
    ru: { theme_modal_title: "Выбрать тему", nav_games: "Игры", nav_apks: "APKs", nav_announcements: "Объявления", nav_games_mobile: "Игры", nav_apks_mobile: "APKs", nav_announcements_mobile: "Объявления", search_placeholder: "Поиск...", hero_title: "Ваше приключение начинается со скачивания", hero_subtitle: "Прямой доступ к лучшим играм и APK. Быстро, безопасно и отобрано сообществом.", featured_games_title: "Рекомендуемые Игры", all_games_title: "Все Игры", search_results_title: "Результаты поиска", genre_sandbox: "Песочница", genre_aventura: "Приключения", genre_sobrevivência: "Выживание", "genre_mundo_aberto": "Открытый мир", no_results_title: "Игры не найдены", no_results_subtitle: "Попробуйте поискать по другим терминам.", coming_soon_title: "Скоро", coming_soon_subtitle: "Мы работаем над этим разделом!", "404_button": "Вернуться на базу", download_button: "Скачать", category_all: "Все", addon_modal_title: "Аддоны для", view_all_button: "Показать все", theme_name_matrix: "Матрица", announcements_title: "Объявления", announcement_testing: "Этот сайт находится в стадии тестирования. Постоянно добавляются новые функции и игры. Спасибо за ваш визит!", addon_category_texturas: "Текстуры", addon_category_shaders: "Шейдеры", footer_copyright: "© 2025 GameShare. Все права защищены.", nav_terms: "Условия", terms_title: "Условия предоставления услуг", terms_p1: "GameShare действует как агрегатор и индексатор ссылок на игры и приложения (APK), общедоступные в Интернете. Мы не размещаем файлы на наших серверах.", terms_p2: "Все ссылки на скачивание, представленные на этом сайте, перенаправляют на сторонние веб-сайты. GameShare не контролирует содержимое этих внешних сайтов и не несет ответственности за их безопасность, законность или точность.", terms_p3: "Пользователь несет полную ответственность за использование ссылок и загрузку любых файлов. Мы рекомендуем использовать антивирусное программное обеспечение и проверять все загруженные файлы. GameShare не несет ответственности за любой ущерб, который может быть нанесен вашему устройству.", terms_p4: "Хотя наша команда стремится проверять целостность ссылок, мы не можем гарантировать, что все они всегда будут функциональными или свободными от вредоносного ПО. Если вы обнаружите неработающую или подозрительную ссылку, свяжитесь с нами, чтобы мы могли проверить контент." },
    de: { theme_modal_title: "Thema auswählen", nav_games: "Spiele", nav_apks: "APKs", nav_announcements: "Ankündigungen", nav_games_mobile: "Spiele", nav_apks_mobile: "APKs", nav_announcements_mobile: "Ankündigungen", search_placeholder: "Suchen...", hero_title: "Dein Abenteuer beginnt mit einem Download", hero_subtitle: "Direkter Zugriff auf die besten Spiele und APKs. Schnell, sicher und von der Community kuratiert.", featured_games_title: "Vorgestellte Spiele", all_games_title: "Alle Spiele", search_results_title: "Suchergebnisse", genre_sandbox: "Sandbox", genre_aventura: "Abenteuer", genre_sobrevivência: "Überleben", "genre_mundo_aberto": "Offene Welt", no_results_title: "Keine Spiele gefunden", no_results_subtitle: "Versuche es mit anderen Suchbegriffen.", coming_soon_title: "Kommt bald", coming_soon_subtitle: "Wir arbeiten an diesem Bereich!", "404_button": "Zurück zur Basis", download_button: "Herunterladen", category_all: "Alle", addon_modal_title: "Add-ons für", view_all_button: "Alle ansehen", theme_name_matrix: "Matrix", announcements_title: "Ankündigungen", announcement_testing: "Diese Seite befindet sich in der Testphase. Neue Funktionen und Spiele werden ständig hinzugefügt. Vielen Dank für Ihren Besuch!", addon_category_texturas: "Texturen", addon_category_shaders: "Shader", footer_copyright: "© 2025 GameShare. Alle Rechte vorbehalten.", nav_terms: "Bedingungen", terms_title: "Nutzungsbedingungen", terms_p1: "GameShare fungiert als Aggregator und Indexierer von Links zu Spielen und Anwendungen (APKs), die öffentlich im Internet verfügbar sind. Wir hosten keine Dateien auf unseren Servern.", terms_p2: "Alle auf dieser Website dargestellten Download-Links leiten auf Websites Dritter weiter. GameShare hat keine Kontrolle über den Inhalt dieser externen Websites und übernimmt keine Verantwortung für deren Sicherheit, Rechtmäßigkeit oder Genauigkeit.", terms_p3: "Der Benutzer übernimmt die volle Verantwortung für die Nutzung der Links und das Herunterladen von Dateien. Wir empfehlen die Verwendung von Antivirensoftware und die Überprüfung aller heruntergeladenen Dateien. GameShare ist nicht verantwortlich für Schäden, die an Ihrem Gerät entstehen können.", terms_p4: "Obwohl unser Team sich bemüht, die Integrität der Links zu überprüfen, können wir nicht garantieren, dass alle immer funktionsfähig oder frei von bösartiger Software sind. Wenn Sie einen defekten oder verdächtigen Link finden, kontaktieren Sie uns bitte, damit wir den Inhalt überprüfen können." },
    fr: { theme_modal_title: "Sélectionner un thème", nav_games: "Jeux", nav_apks: "APKs", nav_announcements: "Annonces", nav_games_mobile: "Jeux", nav_apks_mobile: "APKs", nav_announcements_mobile: "Annonces", search_placeholder: "Rechercher...", hero_title: "Votre aventure commence par un téléchargement", hero_subtitle: "Accès direct aux meilleurs jeux et APK. Rapide, sécurisé et sélectionné par la communauté.", featured_games_title: "Jeux en vedette", all_games_title: "Tous les jeux", search_results_title: "Résultats de recherche", genre_sandbox: "Bac à sable", genre_aventura: "Aventure", genre_sobrevivência: "Survie", "genre_mundo_aberto": "Monde ouvert", no_results_title: "Aucun jeu trouvé", no_results_subtitle: "Essayez de rechercher avec d'autres termes.", coming_soon_title: "Bientôt disponible", coming_soon_subtitle: "Nous travaillons sur cette section !", "404_button": "Retour à la base", download_button: "Télécharger", category_all: "Tous", addon_modal_title: "Add-ons pour", view_all_button: "Voir tout", theme_name_matrix: "Matrice", announcements_title: "Annonces", announcement_testing: "Ce site est en phase de test. De nouvelles fonctionnalités et de nouveaux jeux sont ajoutés en permanence. Merci de votre visite !", addon_category_texturas: "Textures", addon_category_shaders: "Shaders", footer_copyright: "© 2025 GameShare. Tous droits réservés.", nav_terms: "Termes", terms_title: "Conditions d'utilisation", terms_p1: "GameShare agit en tant qu'agrégateur et indexeur de liens vers des jeux et des applications (APK) publiquement disponibles sur Internet. Nous n'hébergeons aucun fichier sur nos serveurs.", terms_p2: "Tous les liens de téléchargement présentés sur ce site redirigent vers des sites Web tiers. GameShare n'a aucun contrôle sur le contenu de ces sites externes et n'assume aucune responsabilité quant à leur sécurité, leur légalité ou leur exactitude.", terms_p3: "L'utilisateur assume l'entière responsabilité de l'utilisation des liens et du téléchargement de tout fichier. Nous recommandons l'utilisation d'un logiciel antivirus et la vérification de tous les fichiers téléchargés. GameShare n'est pas responsable des dommages qui pourraient survenir sur votre appareil.", terms_p4: "Bien que notre équipe s'efforce de vérifier l'intégrité des liens, nous ne pouvons garantir qu'ils seront toujours fonctionnels ou exempts de logiciels malveillants. Si vous trouvez un lien brisé ou suspect, veuillez nous contacter afin que nous puissions examiner le contenu." },
    ja: { theme_modal_title: "テーマを選択", nav_games: "ゲーム", nav_apks: "APK", nav_announcements: "お知らせ", nav_games_mobile: "ゲーム", nav_apks_mobile: "APK", nav_announcements_mobile: "お知らせ", search_placeholder: "検索...", hero_title: "あなたの冒険はダウンロードから始まる", hero_subtitle: "最高のゲームとAPKへの直接アクセス。高速、安全、そしてコミュニティ厳選。", featured_games_title: "おすすめゲーム", all_games_title: "すべてのゲーム", search_results_title: "検索結果", genre_sandbox: "サンドボックス", genre_aventura: "アドベンチャー", genre_sobrevivência: "サバイバル", "genre_mundo_aberto": "オープンワールド", no_results_title: "ゲームが見つかりません", no_results_subtitle: "他のキーワードで検索してみてください。", coming_soon_title: "近日公開", coming_soon_subtitle: "このセクションは現在作業中です！", "404_button": "ベースに戻る", download_button: "ダウンロード", category_all: "すべて", addon_modal_title: "アドオン", view_all_button: "すべて表示", theme_name_matrix: "マトリックス", announcements_title: "お知らせ", announcement_testing: "このサイトはテスト段階です。新しい機能やゲームが常に追加されています。ご覧いただきありがとうございます！", addon_category_texturas: "テクスチャ", addon_category_shaders: "シェーダー", footer_copyright: "© 2025 GameShare. 全著作権所有。", nav_terms: "規約", terms_title: "利用規約", terms_p1: "GameShareは、インターネット上で公開されているゲームやアプリケーション（APK）へのリンクのアグリゲーターおよびインデクサーとして機能します。サーバーにファイルをホストすることはありません。", terms_p2: "このサイトに表示されるすべてのダウンロードリンクは、サードパーティのWebサイトにリダイレクトされます。GameShareは、これらの外部サイトのコンテンツを管理しておらず、そのセキュリティ、合法性、または正確性について一切の責任を負いません。", terms_p3: "ユーザーは、リンクの使用およびファイルのダウンロードについて全責任を負います。ウイルス対策ソフトウェアを使用し、ダウンロードしたすべてのファイルを確認することをお勧めします。GameShareは、お使いのデバイスに発生する可能性のあるいかなる損害についても責任を負いません。", terms_p4: "私たちのチームはリンクの整合性を確認するよう努めていますが、すべてのリンクが常に機能している、または悪意のあるソフトウェアがないことを保証することはできません。壊れたリンクや不審なリンクを見つけた場合は、コンテンツを確認できるよう、ご連絡ください。" },
};

// ===================================================================================
// --- SELETORES DE ELEMENTOS ---
// ===================================================================================
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);
const htmlElement = document.documentElement;

// ===================================================================================
// --- FUNÇÕES PRINCIPAIS ---
// ===================================================================================

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
    const langTranslations = translations[lang] || translations.pt;
    $$('[data-translate-key]').forEach(el => {
        const key = el.dataset.translateKey;
        const translation = langTranslations[key];
        if(translation === undefined) {
            // Fallback for dynamic content like nav links with icons
            const span = el.querySelector('span');
            if(span) {
                const originalKey = Object.keys(translations.en).find(k => translations.en[k] === span.textContent);
                if(originalKey) {
                    span.textContent = langTranslations[originalKey] || span.textContent;
                }
            }
            return;
        };

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
    generateThemePreviews(); // Re-generate previews for language change
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

// --- Funções de UI e Animações ---
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

// ===================================================================================
// --- ROTEADOR E INICIALIZAÇÃO ---
// ===================================================================================
const router = () => {
    const path = window.location.hash.slice(1) || 'home';
    const routes = {
        'home': 'home',
        'announcements': 'announcements',
        'terms': 'terms',
        'apks': '404' // Rota para a página "Em Breve"
    };
    const pageId = routes[path] || '404';
    showPage(pageId);
};

document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('selectedTheme') || 'gamer-dark';
    const savedLang = localStorage.getItem('language') || 'pt';
    
    setLanguage(savedLang);
    generateThemePreviews();
    setTheme(savedTheme);
    router(); // Roda o roteador na carga inicial

    // --- Listeners Gerais ---
    $('#searchBtn')?.addEventListener('click', () => { $('#searchInput')?.classList.toggle('active'); $('#searchInput')?.focus(); });
    $('#searchInput')?.addEventListener('input', updateFilters);
    $('#view-all-btn')?.addEventListener('click', () => {
        $$('#all-games-grid .game-wrapper').forEach(w => w.classList.remove('hidden'));
        $('#view-all-container')?.classList.add('hidden');
    });

    // --- Listeners de Navegação e Menus ---
    window.addEventListener('hashchange', router);
    $('#mobileMenuBtn')?.addEventListener('click', () => $('#mobileMenu')?.classList.toggle('hidden'));
    $('#langBtn')?.addEventListener('click', () => $('#langMenu')?.classList.toggle('hidden'));
    $$('.lang-option').forEach(option => option.addEventListener('click', (e) => {
        e.preventDefault();
        setLanguage(e.currentTarget.dataset.lang);
        $('#langMenu')?.classList.add('hidden');
    }));

    // --- Listeners de Modais ---
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
