// console.log('start')

// add button challenging part


function goToPage2() {
    window.location.href = 'blog.html';

};
document.getElementById('my-button').addEventListener('click', goToPage2)

document.getElementById('my-button').addEventListener('click', function () {
    window.history.back();
});




