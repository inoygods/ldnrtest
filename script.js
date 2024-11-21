// Переключение меню
document.getElementById('menuBtn').onclick = function() {
    var dropdown = document.getElementById('menuDropdown');
    dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
};
