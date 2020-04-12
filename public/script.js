/*jshint esversion: 6 */


window.onload = () => {

    let beQuestion = "";
    behaQuestion.forEach((qes) => {
        console.log(qes.ans);
        let question = `<li onclick="modal('${qes.ans}')"> ${qes.ques} </li>\n`;
        beQuestion = beQuestion + question;
    });
    document.getElementById('beha').innerHTML = beQuestion;
};


function popUp(str) {
    console.log(str);
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
];
