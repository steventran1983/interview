function modal(answer, question) {
    console.log(answer + question);
    document.getElementById('modalContent-body').innerHTML = `<p>${answer}</p>`;
    document.getElementById('behaviral-header-question').innerHTML = `<h4>${question}</h4>`;
    document.querySelector(".popup").style.display = "block";
}


// clsButton.addEventListener('click', closButton);
function clsButton() {
    document.querySelector(".popup").style.display = "none";
}