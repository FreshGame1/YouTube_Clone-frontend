const menuButton = document.getElementById('menu-button');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

menuButton.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('active');
});

overlay.addEventListener('click', () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
});

function toggleSubscriptions() {
    const container = document.getElementById('subscriptions-container');
    const button = document.querySelector('.expand-button');
    const svg = button.querySelector('svg');
    
    if (container.classList.contains('collapsed')) {
        container.classList.remove('collapsed');
        container.classList.add('expanded');
        button.querySelector('span:last-child').textContent = 'Minimise';
        svg.style.transform = 'rotate(180deg)';
        svg.style.transition = 'transform 0.3s ease';
    } else {
        container.classList.remove('expanded');
        container.classList.add('collapsed');
        button.querySelector('span:last-child').textContent = 'Expand';
        svg.style.transform = 'rotate(0deg)';
    }
}

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchInput = document.querySelector('.search-input');
    alert(`Searching for: ${searchInput.value}`);
    searchInput.value = '';
});