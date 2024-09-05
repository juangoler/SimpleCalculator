document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = Array.from(document.getElementsByClassName('btn'));
    const igual = document.getElementById('igual');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            display.value += button.textContent;
        });
    });

    igual.addEventListener('click', () => {
        try {
            display.value = eval(display.value);
        } catch {
            display.value = 'Erro';
        }
    });
});
