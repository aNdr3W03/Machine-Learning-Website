const currentYear = new Date().getFullYear();

const navitem = document.querySelectorAll('ul li');
navitem.forEach((item) => {
    item.addEventListener('click', () => {
        document.querySelector('li.active').classList.remove('active');

        item.classList.add('active');
    });
});
