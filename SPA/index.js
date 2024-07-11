document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');

    document.getElementById('home').addEventListener('click', () => {
        content.innerHTML = `
            <h1>Welcome to the Home Page</h1>
            <p>This is the content of the home page.</p>
        `;
    });

    document.getElementById('about').addEventListener('click', () => {
        content.innerHTML = `
            <h1>About Us</h1>
            <p>This is the content of the about page.</p>
        `;
    });

    document.getElementById('contact').addEventListener('click', () => {
        content.innerHTML = `
            <h1>Contact Us</h1>
            <p>This is the content of the contact page.</p>
        `;
    });
});
