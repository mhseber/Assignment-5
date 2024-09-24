// console.log('start')

// add button challenging part


function goToPage2() {
    window.location.href = 'blog.html';

};
document.getElementById('my-button').addEventListener('click', goToPage2)

document.getElementById('my-button').addEventListener('click', function () {
    window.history.back();
});

// button change color

let activeButton = null;

function changeColor(buttonId) {
    if (activeButton) {
        document.getElementById(activeButton).classList.remove('bg-[#B4F461]');
        document.getElementById(activeButton).classList.add('bg-gray-200');
    }
    activeButton = buttonId;
    document.getElementById(buttonId).classList.remove('bg-gray-200');
    document.getElementById(buttonId).classList.add('bg-[#B4F461]');
}





