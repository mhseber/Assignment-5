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


// donate calculate one

document.getElementById('btn-add-money')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const addMoney = document.getElementById('donationInput').value;
        const addMoneyNumber = parseFloat(addMoney);
        // const pinNumber = document.getElementById('input-pin-number').value;
        console.log(addMoney);


        if (addMoney) {
            const balance = document.getElementById('account-balance').innerText;
            const balanceNumber = parseFloat(balance)

            const newBalance = balanceNumber + addMoneyNumber;
            document.getElementById('account-balance').innerText = newBalance;
        }
        else {
            alert('failed to Donate Money')
        }



    })

// donate calculate two


document.getElementById('btn-add-money2')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const addMoney = document.getElementById('donationInput2').value;
        const addMoneyNumber = parseFloat(addMoney);
        // const pinNumber = document.getElementById('input-pin-number').value;
        console.log(addMoney);


        if (addMoney) {
            const balance = document.getElementById('account-balance2').innerText;
            const balanceNumber = parseFloat(balance)

            const newBalance = balanceNumber + addMoneyNumber;
            document.getElementById('account-balance2').innerText = newBalance;
        }
        else {
            alert('failed to Donate Money')
        }
    })

// donate calculate three

document.getElementById('btn-add-money3')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const addMoney = document.getElementById('donationInput3').value;
        const addMoneyNumber = parseFloat(addMoney);
        // const pinNumber = document.getElementById('input-pin-number').value;
        console.log(addMoney);


        if (addMoney) {
            const balance = document.getElementById('account-balance3').innerText;
            const balanceNumber = parseFloat(balance)

            const newBalance = balanceNumber + addMoneyNumber;
            document.getElementById('account-balance3').innerText = newBalance;
        }
        else {
            alert('failed to Donate Money')
        }



    })







