const menuButton = document.getElementById('menu-button');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

const userAvatarButton = document.getElementById('user-avatar-button');
const userMenu = document.getElementById('user-menu');
const switchAccountButton = document.getElementById('switch-account-button');
const accountSwitchMenu = document.getElementById('account-switch-menu');
const backButton = document.getElementById('back-button');

const notificationsButton = document.getElementById('notifications-button');
const notificationsMenu = document.getElementById('notifications-menu');

const themeToggle = document.querySelector('.theme-toggle');
const languageToggle = document.querySelector('.language-toggle');
const themeMenu = document.querySelector('.theme-menu');
const languageMenu = document.querySelector('.language-menu');
const themeValue = document.getElementById('theme-value');
const languageValue = document.getElementById('language-value');

menuButton.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('active');
});

overlay.addEventListener('click', () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
    userMenu.classList.remove('active');
    notificationsMenu.classList.remove('active');
    accountSwitchMenu.classList.remove('active');
});

userAvatarButton.addEventListener('click', (e) => {
    e.stopPropagation();
    userMenu.classList.toggle('active');
    notificationsMenu.classList.remove('active');
    accountSwitchMenu.classList.remove('active');
});

switchAccountButton.addEventListener('click', (e) => {
    e.stopPropagation();
    userMenu.classList.remove('active');
    accountSwitchMenu.classList.add('active');
});

backButton.addEventListener('click', (e) => {
    e.stopPropagation();
    accountSwitchMenu.classList.remove('active');
    userMenu.classList.add('active');
});

notificationsButton.addEventListener('click', (e) => {
    e.stopPropagation();
    notificationsMenu.classList.toggle('active');
    userMenu.classList.remove('active');
    accountSwitchMenu.classList.remove('active');
});

document.addEventListener('click', (e) => {
    if (!userMenu.contains(e.target) && !userAvatarButton.contains(e.target) && 
        !accountSwitchMenu.contains(e.target)) {
        userMenu.classList.remove('active');
        accountSwitchMenu.classList.remove('active');
    }
    
    if (!notificationsMenu.contains(e.target) && !notificationsButton.contains(e.target)) {
        notificationsMenu.classList.remove('active');
    }
});

function toggleSubscriptions() {
    const container = document.getElementById('subscriptions-container');
    const button = document.querySelector('.expand-button');
    const svg = button.querySelector('svg');
    const buttonText = button.querySelector('span:last-child');
    
    if (container.classList.contains('collapsed')) {
        container.classList.remove('collapsed');
        container.classList.add('expanded');
        buttonText.textContent = 'Minimise';
        svg.style.transform = 'rotate(180deg)';
    } else {
        container.classList.remove('expanded');
        container.classList.add('collapsed');
        buttonText.textContent = 'Expand';
        svg.style.transform = 'rotate(0deg)';
    }
}

const searchForm = document.querySelector('.search-container');
searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchInput = document.querySelector('.search-input');
    alert(`Searching for: ${searchInput.value}`);
    searchInput.value = '';
});

document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.querySelector('.theme-toggle');
    const languageToggle = document.querySelector('.language-toggle');
    const themeMenu = document.querySelector('.theme-menu');
    const languageMenu = document.querySelector('.language-menu');
    const themeValue = document.getElementById('theme-value');
    const languageValue = document.getElementById('language-value');

    function initializeSettings() {
        const savedTheme = localStorage.getItem('theme') || 'device';
        const savedLang = localStorage.getItem('language') || 'en';
        
        applyTheme(savedTheme);
        
        const themeItem = document.querySelector(`.theme-menu .dropdown-item[data-theme="${savedTheme}"]`);
        const langItem = document.querySelector(`.language-menu .dropdown-item[data-lang="${savedLang}"]`);
        
        if (themeItem) {
            themeValue.textContent = themeItem.textContent;
        }
        
        if (langItem) {
            languageValue.textContent = langItem.textContent;
        }
    }

    themeToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        themeMenu.classList.toggle('active');
        languageMenu.classList.remove('active');
    });

    languageToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        languageMenu.classList.toggle('active');
        themeMenu.classList.remove('active');
    });

    document.querySelectorAll('.theme-menu .dropdown-item').forEach(item => {
        item.addEventListener('click', function() {
            const theme = this.getAttribute('data-theme');
            themeValue.textContent = this.textContent;
            applyTheme(theme);
            themeMenu.classList.remove('active');
        });
    });

    document.querySelectorAll('.language-menu .dropdown-item').forEach(item => {
        item.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            languageValue.textContent = this.textContent;
            applyLanguage(lang);
            languageMenu.classList.remove('active');
        });
    });

    document.addEventListener('click', function() {
        themeMenu.classList.remove('active');
        languageMenu.classList.remove('active');
    });

    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }

    function applyLanguage(lang) {
        console.log('Language changed to:', lang);
        localStorage.setItem('language', lang);
    }

    initializeSettings();
});
