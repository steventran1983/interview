window.onload = () => {
    let beQuestion = " "
    console.log(typeof (beQuestion))
    behaQuestion.forEach((qes) => {
        let question = `<li> ${qes.ques} </li>\n`;
        // let question = "Thang Cong Tu";
        beQuestion = beQuestion + question;
    })
    document.getElementById('beha').innerHTML = beQuestion;
}





const behaQuestion = [{
        ques: "Tell Me About Yourself ?",
        ans: "My Name is Thang Tran"
    },
    {
        ques: "Tell Me About the time you lead in team",
        ans: "My Name is Thang Tran"
    },
    {
        ques: "Tell Me About the time you lead in team",
        ans: "My Name is Thang Tran"
    },
    {
        ques: "Tell Me About the time you lead in team",
        ans: "My Name is Thang Tran"
    },
    {
        ques: "Tell Me About the time you lead in team",
        ans: "My Name is Thang Tran"
    },
]

const commonQuestion = [{
    ques: "",
    answer: ""
}]