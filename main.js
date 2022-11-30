window.addEventListener('load', () => {
    todos = JSON.parse(localstorage.getItem('todos')) || [];
})