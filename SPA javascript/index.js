document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');
    const container = document.getElementById('container');

    const setContent = (html) => {
        container.classList.remove('fade-in');
        container.classList.add('fade-out');
        setTimeout(() => {
            content.innerHTML = html;
            container.classList.remove('fade-out');
            container.classList.add('fade-in');
        }, 500);
    };

    document.getElementById('home').addEventListener('click', () => {
        setContent(`
            <h1>Welcome to the Home Page!</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam fuga maiores repudiandae provident odio praesentium vitae atque quibusdam libero aliquid corrupti, saepe quis fugiat nobis temporibus! Nulla cumque similique necessitatibus!</p>
        `);
    });

    document.getElementById('about').addEventListener('click', () => {
        setContent(`
            <h1>About?</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam fuga maiores repudiandae provident odio praesentium vitae atque quibusdam libero aliquid corrupti, saepe quis fugiat nobis temporibus! Nulla cumque similique necessitatibus!</p>
        `);
    });

    document.getElementById('contact').addEventListener('click', () => {
        setContent(`
            <h1>Contact</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam fuga maiores repudiandae provident odio praesentium vitae atque quibusdam libero aliquid corrupti, saepe quis fugiat nobis temporibus! Nulla cumque similique necessitatibus!</p>
        `);
    });
});
