function display() {
    const element = document.querySelector('.display-episode-review');
    const button = document.querySelector('.display-button');

    if (element.style.display === 'none') {
        element.style.display = 'block';
        button.style.transform = 'rotate(90deg)';
    } else {
        element.style.display = 'none';
        button.style.transform = 'rotate(360deg)';
    }
}

function display2() {
    const element = document.querySelector('.display-episode-review2');
    const button = document.querySelector('.display-button2');

    if (element.style.display === 'none') {
        element.style.display = 'block';
        button.style.transform = 'rotate(90deg)';
    } else {
        element.style.display = 'none';
        button.style.transform = 'rotate(360deg)';
    }
}