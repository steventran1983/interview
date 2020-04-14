/*jshint esversion: 6 */
window.onload = () => {
    let beQuestion_left = "";
    let beQuestion_right = "";
    for (let i = 0; i < behaQuestion.length; i++) {
        let question = `<li onclick="modal('${behaQuestion[i].ans}','${behaQuestion[i].ques}')"> ${behaQuestion[i].ques} </li>\n`;
        if (i < 20) {
            beQuestion_left = beQuestion_left + question;
            console.log(`${i} ${beQuestion_left} -=left=-`);
        } else {
            beQuestion_right = beQuestion_right + question;
            console.log(`${i} ${beQuestion_right} -=right=-`);
        }
    }
    document.getElementById('behaviral-anwser-left').innerHTML = beQuestion_left;
    document.getElementById('behaviral-anwser-right').innerHTML = beQuestion_right;
};





const behaQuestion = [{
        ques: "Tell Me About Yourself ?",
        ans: "My name is Thang Tran. I am currently engineer at Tier 2 OSS team. IN my current role, I am responsible for system administrator. Handle Fault management, Performance management, configuration management , Audit of all TMO network element. <br>I am also main person in the team to design, develop and maintain the monitoring script and collaborate to build the automation tool, web develop<br>In addition, daily job are troubleshoot and resolve the issue of internal TMO employee when they have problem with Nokia NetAct system and provide on-site and remote support during major upgrade and integrate new node into system with vendor<>brI join T-Mobile from 2017, first as an intern and then I got an offer for full time after I graduated bachelor’s degree. For short 2 years I have several achievements with team. Over 10 stars recognition from colleague and 2 time recognition front of  TSD&S department .I did prepare short slide to summarize all of them, if we have time, I would like to share with you about that. <br>For education, I just complete master of SW from Colorado technical University  GPA 4.0. Before of master I graduated computer science BS at May 2018 with summa cumla de  latin honor and one is network engineer at 2006. <br>I am passionate about software  and what I am looking for in this position is an opportunity to utilize my software skill, , improving software skill , learning and collaborate, contribute to the team and TMO. "
    },
    {
        ques: "Why do you want to leave?",
        ans: "My Name is Thang TranFirst, I would like to say, I am happy with my team so far. They teach me a lot of technical skill such as : Linux system, TMO telecom network infrastructure, python, java , experience etc.. I did learn a lot of thing with team. But right now, I would like to focus more about software which I love and have firm foundation about. I want to looking for something greater, something has more meaning that I can live and work with my passion that is software, even I know it will take more challenge for myself. But when you get it , So when I come back home after work , I can feel happy , enjoy proud of what I did"
    },
    {
        ques: "Why do you love software?",
        ans: `That a great question, actually it kind of hard to explain why we love something right, but on the top of my head right now I can list 3 reason why I love software.<br>The first thing, with software I can change the world around me. I can use software skill to help people around me have a life easier. For example, I use software skill to build a bunch of script and GUI application to help my team in daily job become faster, save a lot of time and effort<br>Also an important factor makes me love software is an opportunity to learn new technology. Software require keep going learning new thing, because the new stuff always coming, whether its new programming language or new framework or new architecture so the skill to adapt to new thing is very important. I love to work in software environment you know I can improve my knowledge and add the new one into skill set `
    },
    {
        ques: "What is greatest strength?",
        ans: "My greatest strength is hardworking, I am not sure I am smarter than someone, but I am pretty sure I will pay more time and effort and work harder than anyone in specific job. For example, I did spend more than 12 hours overnight to handle the system outage and always wait until system full recovery. Furthermore, I am frequently required to manage 2-3 projects at a time, and often had many different tasks going on in those different projects. Being hardworking allowed me to deliver 100% of my projects on-time as well as support internal user on troubleshooting problem as well"
    },
    {
        ques: "What is your stregth?",
        ans: "My greatest strength is hardworking and detail oriented, I am not sure I am smarter than someone, but I am pretty sure I will pay more time and effort and work harder than anyone in specific job. For example, I did spend more than 12 hours overnight to handle the system outage and always wait until system full recovery<br>Furthermore, I am frequently required to manage 2-3 projects at a time, and often had many different tasks going on in those different projects. Being oriented-detail allowed me to deliver 100% of my projects on-time as well as support internal user on troubleshooting problem as well<br>I am willing to learn and quick learning, this is also important aspect since we are in technology, the new stuff coming frequently, this strength will help me adapt the future requirement. "
    },
    {
        ques: "What is your weakness?",
        ans: "Well, I think my weakness is my articulating. My accent and pronunciation is pretty thick, sometime make a unconformable the people I talking with. However, I am working on that every day, at home, driving to workplace, I open some YouTube channel to repeat with their accent. And I think communication is the key factor to improve this and go over this weakness, that’s why I try talk as much as I can in team, as well as hold frequently for presentation such as MOP review, introduce new application tool with team. So, for now with 3 years ago when I am join TMO, I have the big step of articulating improvement, if you can understand me now that is my achievement"
    },

    {
        ques: "What work enviroment do you prefer?",
        ans: `I really like the environment in my current position. My manager is a great resource and always willing to help out when I run into an issue, but they trust me to get my work done so I have a lot of freedom in how I schedule and prioritize, which is very important to me.I think all of us have the Power of trust training, so this is is a usercase we can apply right.  Everyone has their own cubicle, so it’s often pretty quiet to get our work done, but our our team has a lot of check-in meetings and communicates frequently via Slack or talking directly if we have the question,  so we still get a lot of opportunities to bounce ideas off each other to collaborate and contribute. `
    }, {
        ques: "Tell Me About the time you lead in team",
        ans: "My Name is Thang Tran"
    }, {
        ques: "Tell Me About the time you lead in team",
        ans: "My Name is Thang Tran"
    }, {
        ques: "Tell Me About the time you lead in team",
        ans: "My Name is Thang Tran"
    }, {
        ques: "Tell Me About the time you lead in team",
        ans: "My Name is Thang Tran"
    }, {
        ques: "Tell Me About the time you lead in team",
        ans: "My Name is Thang Tran"
    }, {
        ques: "Tell Me About the time you lead in team",
        ans: "My Name is Thang Tran"
    }, {
        ques: "Tell Me About the time you lead in team",
        ans: "My Name is Thang Tran"
    }, {
        ques: "Tell Me About the time you lead in team",
        ans: "My Name is Thang Tran"
    }, {
        ques: "Tell Me About the time you lead in team",
        ans: "My Name is Thang Tran"
    }, {
        ques: "Tell Me About the time you lead in team",
        ans: "My Name is Thang Tran"
    }, {
        ques: "Tell Me About the time you lead in team",
        ans: "My Name is Thang Tran"
    }, {
        ques: "Tell Me About the time you lead in team",
        ans: "My Name is Thang Tran"
    }, {
        ques: "Tell Me About the time you lead in team",
        ans: "My Name is Thang Tran"
    }, {
        ques: "Tell Me About the time you lead in team",
        ans: "My Name is Thang Tran"
    }, {
        ques: "Tell Me About the time you lead in team",
        ans: "My Name is Thang Tran"
    }, {
        ques: "Tell Me About the time you lead in team",
        ans: "My Name is Thang Tran"
    }, {
        ques: "Tell Me About the time you lead in team",
        ans: "My Name is Thang Tran"
    }, {
        ques: "Tell Me About the time you lead in team",
        ans: "My Name is Thang Tran"
    }, {
        ques: "Tell Me About the time you lead in team",
        ans: "My Name is Thang Tran"
    }, {
        ques: "Tell Me About the time you lead in team",
        ans: "My Name is Thang Tran"
    }, {
        ques: "Tell Me About the time you lead in team",
        ans: "My Name is Thang Tran"
    }, {
        ques: "Tell Me About the time you lead in team",
        ans: "My Name is Thang Tran"
    }, {
        ques: "Tell Me About the time you lead in team",
        ans: "My Name is Thang Tran"
    },
];