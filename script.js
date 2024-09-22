document.querySelectorAll('li a').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
        
        const submenu = this.parentElement.nextElementSibling; // Selecciona el submenú que sigue al <li>
        
        // Alternar la visibilidad del submenú
        if (submenu && submenu.classList.contains('sub-menu')) {
            submenu.classList.toggle('show');
        }
    });
});
