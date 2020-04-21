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


function databaseQuestion(){
    const database =[
    {
        ques:"Why do you want this job",
        ans:"First, I realize my competency and my skill are revelant and fit to this role, so I am confident to apply for it. Second, As you know I am really passionate about software, specially database and web development. In the job description, I can see it contains all of technologies I extremely interested in, I believe in this role , I have the place where can I utilize my software skill to contribute to the team and go to success In this position,  I can work and exchange the experience with sr or pe software engineer, that will help me quick growth in my software skill that I do not have much in current position.<br>My level of SQL technical ability is a strong match for this role and I have experience of working with other developers, engineers and also vendor. I want this SQL position because I feel I can contribute to the team positively, I can bring something new in terms of my competence."
    },{
        ques:"",
        ans:""
    },{
        ques:"",
        ans:""
    },{
        ques:"",
        ans:""
    },{
        ques:"",
        ans:""
    },{
        ques:"",
        ans:""
    },{
        ques:"",
        ans:""
    },{
        ques:"",
        ans:""
    },{
        ques:"",
        ans:""
    },{
        ques:"",
        ans:""
    },{
        ques:"",
        ans:""
    },
];
    return database;
}