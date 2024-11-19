const donateBtns = document.querySelectorAll(".donate-btn");



const updateNavbarBalance = (amountBalance) =>{
const navbarBalance = parseFloat(document.getElementById("balance").innerText);
const remainingBalance = navbarBalance - amountBalance;
document.getElementById("balance").innerText = remainingBalance
};

const addToDonationHistory = (amountBalance, cardTitle) =>{
    
    const historyContainer = document.getElementById("history-container");
    const addHistory = document.createElement("div");
    addHistory.classList.add("border", "p-4", "rounded-lg", "shadow-sm");
    addHistory.innerHTML = `
    <h3 class="font-semibold"> Title : ${cardTitle} </h3>
    <p>Donation Amount : ${amountBalance} </p>
    <p>Date: ${new Date().toLocaleString()} </p>
    `;
    historyContainer.appendChild(addHistory);
}



const handleDonate = (button) => {
    
    const cardElement = button.closest(".card-container");
    const amountBalance = parseFloat(cardElement.querySelector(".input-amount").value);
    updateNavbarBalance(amountBalance)

    

    const cardBalance= parseFloat(cardElement.querySelector(".card-balance").innerText);
    const newCardBalance = cardBalance + amountBalance;

    

    cardElement.querySelector(".card-balance").innerText = newCardBalance.toFixed(2);
    cardElement.querySelector(".input-amount").value = "";

    const cardTitle= cardElement.querySelector(".card-title").innerText;
    addToDonationHistory(amountBalance, cardTitle)
    

    if(isNaN(amountBalance) || amountBalance <= 0 || navbarBalance < amountBalance){
        alert("Please give the valid input.")
        
    }

    
};


donateBtns.forEach((btn) => {

    btn.addEventListener("click", (e)=>{
        handleDonate(e.target)
    })
})
    