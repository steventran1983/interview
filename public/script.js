/*jshint esversion: 6 */
window.onload = () => {
    let beQuestion_left = "";
    let beQuestion_right = "";
    for (let i = 0; i < behaQuestion.length; i++) {
        let question = `<li onclick="modal('${behaQuestion[i].ans}','${behaQuestion[i].ques}')"> ${i}. ${behaQuestion[i].ques} </li>\n`;
        if (i < 20) {
            beQuestion_left = beQuestion_left + question;
        } else {
            beQuestion_right = beQuestion_right + question;
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
        ans: "First, I would like to say, I am happy with my team so far. They teach me a lot of technical skill such as : Linux system, TMO telecom network infrastructure, python, java , experience etc.. I did learn a lot of thing with team. But right now, I would like to focus more about software which I love and have firm foundation about. I want to looking for something greater, something has more meaning that I can live and work with my passion that is software, even I know it will take more challenge for myself. But when you get it , So when I come back home after work , I can feel happy , enjoy proud of what I did"
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
        ques: "WHY TMO",
        ans: "I have been working with TMO for 2 year and all I can say is that I’m lucky to be part of this company. The atmosphere is cool. My teammates are all kind and always ready to help if you need them. My bosses are always keeping in touch to see how I am doing with my job and provide feedback as well as recognition on the job well done. And of course, the benefits are the best from health benefits to dental to childcare, to phone service employee discount and many more to mention. "
    }, {
        ques: "Does your manager know you have applied for this job?",
        ans: "Yes, he does. He knows it, before applied I did talk with him about job and explain the reason I want to apply for software position. Actually I think he does want to lost me but because of my career success he will agree and support me 100% . He is cool manager. He always stands behind me to push me go further In career path."
    }, {
        ques: "What challenges are you looking for in this position?",
        ans: "Working the new thing, new system, new technology , new framework, all kind of stuff are the challenge with me in this position I can see. However, I am quick leaner, so from my perspective I will get it soon and hand-on project right away. Since now I can focus only in software, so I have more chance to go deeply for each one that I do not have time before. <br>Also I expect to practice and enhance further my people communication skills. What highly motivate me are the challenges in front of me driving me to strive harder. I believe I have the ability to effectively meet challenges and have the flexibility and skills necessary to handle challenging jobs. "
    }, {
        ques: "Why Should We Hire You?",
        ans: "I understand you have many candidate apply for this job and pick the right person is very important.  Base on our discussion and I researching about the position, I strong believe I am the person for this job <br>first I realize my skill set and experience are qualify most of requirement of this role. That is a good one. Second My experience with technology and software skill make me a good match for this position. As you can see In my resume, I did working on several web applications stool that help my colleague save a ton of time and effort by automation job brought to me many recognition up to department. Finally, I am passionate of new technology : cloud , kubernetes , jenkin ansible etc ...and software, and you know, when someone love in something, they will invest everything they have into it. With me I have the clear schedule and plan to invest time and effort concentrate to work, learn about software to enhance my knowledge in order to apply the best technology to project I handle in future.<br>I would love to bring my coding skills, my talent  and my passion for implementing new technologies to this position."
    }, {
        ques: "Why do you like this position?",
        ans: "First, I realize my competency and my skill are revelant and fit to this role, so I am confident to apply for it<br>Secondly, As you know I am really passionate about software, specially web development. In the job description, I can see it contains all of technologies I extremely interested in, I believe in this role , I have the place where can I utilize my software skill to contribute to the team and go to success<br>Finally, when join the team , I can work and exchange the experience with sr or pe software engineer, that will help me quick growth in my software skill that I do not have much in current position. "
    }, {
        ques: "tell me about what do done last 6 months",
        ans: "In last 6 months I complete a bunch of things let me tell you what I remember on top of my head<br>1. I finish 3 major project, 1 is individual and 2 with team members. Those are software upgrade , hardware modernization and  integration directly enodeB into our system, since before all EnodeB connect to mediator and got some low performace so we decide to move all EnodeB direct to OSS. I also support in as secondary for multiple project, contribute to team and go to success together<br>2. For initiative project , I complete 2 awsome tool , first is ATS User Dashboard that provide 11 reports for market and region team also NOC 1.5 team utilize and take avdvadge from it. This was regconized from Department level and one is NBI postcheck automation , this is full stack software so if we have time today I will go over with you , that’s very good tool <br>3. I did open some session with the team to sharing the knowledge about programing langaue , docker and ansible. Bring the new technology into the team is my hobby<br>4. is interesting one , I complete master degree and I very happy and proud of that. Its big achievement  and finally my time and effort has been paid off. "
    }, {
        ques: "Where do you see yourself in five years?",
        ans: "I usually make the short term plan rather then long term as 5 years. I consider that everyday I come the office, get the job done , commit project before deadline collborate and contribute with team is my proritize. For now, I think get this job is the most important thing I plan in hand, after that If I got this, I will spend time learn in and hour of team, meet new people and try my best to adapt job requriement that I did not cover form now."
    }, {
        ques: "What is your dream job ?",
        ans: "The first thing I can tell in my dream job is fit to my skill sets and compentency, so at least I can compelte all project and requirement.  Base on my skills and interest in new technology and software, I would like my drean job have the place where I can learn the new thing, exchange and learn experience from team member. The last one, the job must proivde an place that I can utilize my skill set and bring new technology into. I finally is good teamwork , since I consider success with the team are always important than an individual. "
    }, {
        ques: "What Makes You Unique?",
        ans: "I really enjoy learning new things and am constantly seeking out new learning opportunities. That also help me perfect fit to this position, since I see many new technologies in job description so willing to learn the new thing will help me quick accommodate those and leverange them into daily job. And also I am not afraid with a challenge , because I know challenge will me me strike harder, to overcome challanleng you need find new way , new solution so that help you improve your knowledge and skill. I  would like to bring one example to prove that, 2 years ago, manger require build the centralize webpage for all user change the password, I vonteer to take that and that in time I do not know about web development but I still pick it up. So I start my journey and spend time and effort to research and learn the new thing from front-end to back-end, logic and security. After 1 months I can bulld the website for users execute the password change through 20 system in centralized webpage . My manager appricitea that effort recognize me to wholte team as well as nominate up to department level. "
    }, {
        ques: "What Motivates You?",
        ans: "Well I can tell you, the thing is motivate me is challenge. I love challenge because it make me strike harder. During find the way ovecome challenge you should learn the new thing to update and improve yourself. Also I like the feeling when I overcome the challenge, happy and satisfy you get what you paid for. "
    }, {
        ques: "Describle you in 1 word",
        ans: "In one word, I would say I am a person of Integrity, that becuase I will always do a great job, I always contribute and foucs 100% for every tasks I have and commmit the deadline. Above of all, you can rely on me to be professional in my role"
    }, {
        ques: "Do you prefer teamwork or working independently?",
        ans: "I can honestly say that I’m comfortable both in working independently as well as in contributing to teams, and I was lucky enough in my previous job to be able to do some of both. Especially at the beginning of projects, I appreciate being able to strategize approaches with team members. Once we have our plan of action established, though, I enjoy working independently on my assigned tasks.  "
    }, {
        ques: "Tell Me About the time you lead in team",
        ans: "From the resume you can see I list one project call NBI Post check automated tool so I would like to talk about that The situation is : our team spend a lot of time and effort to do the post check after major software update, basically FM/PM/CM,  Also team have to send and waiting the confirm from NBI team to make sure the data flow is transferred to their end system, that’s extremely inconvenience and no one want that. the is a paint point that the team experience for long time. <br>So I just thinking why we don’t have the tool and it can help do all those post check automation, further can help the framework so no only the team can use but also other team can add if they need to<br>I did bring my idea and talk with my manager, and got green light from him and we bring that on the table in the team meeting and got the agree with whole team.Next step and make the plan, choose the technology, framework, design logic etc … and complete for one system. After completely done for one I set up the presentation with the team and introduce the features, take feedback and gathering new team member get involved to deployment for whole system<br>I also create the dedicate slack channel so we can discuss and answer the question if the team got the problem or not clear about steps of integrating new system, knowledge sharing is beautiful right. <br>We work together and during 2 week, with 5 of us, we can complete for post check of FM part, and currently we working for the rest of NBI check<br>And result of this project is bring the powerful tool and provide many benefits for the team such as : team member can understand how web development is, front-backend working , how is deployment application by docker container, this is most useful thing for the team because the end of the day, OSS system will use docker container to build cloud native app, so this is good preparation for feature. Also, we got the highly appreciate from Sr manager as well as director. We hope our team will be recognize in while department when the tool completely done. "
    }, {
        ques: "Tell me about the time you handle the difficult situation? ",
        ans: "One situation just pop up on my mind now is when I am with one team member woking on the OSS dashboard. Since in OSS team we have different system support from 2 vendor Nokia and Ericson. So I am done for my part with 11 reports from Nokia side and going to release , however my manager want to make the tool completely contains both side, therefore, he request me work with one sr engineer to complete the left part and we have just 3 weeks to deadline you know. <br>I send coupe of email and talking with him, divide the task and explain the framework, he said OK and just waiting for first data coming, however I am waiting for 10 days long but still do not see any improvement. Since he is sr engineer and I know he good about E// system, but I am just associate engineer so I feel my voice is not weight to him, also I do not want to report to my manager since I think we can talk and work out. I stand up and call him and ask the reason why nothing happen, first he said he busy and he does not have time but talk little bit more so I know the reason is he afraid to work on new stuff , I mean web technology , one problem about competencies and he not familiar that make him not interesting in. However, we have to delivery something in the deadline, so I tell him I can dedicate 1 hour per day to work with him, knowledge sharing and let him know the big picture of the tool. After that we work every day together, first he generate the report I help to populate into the web, also I share monitor to him follow up , and just need 1 week later he can do it from end to end. And we complete the dashboard on time. My manager is very sastify with that and we together have a presentation with directory about that tool and got many complismnet. I learn one thing here is we need to listerning first and do not afraid to talk straight. I think if we bring this problem on the table early , the project will be more perfect and we do not rush as last minute"
    }, {
        ques: "Tell me the time you are creative at work , innovative ?",
        ans: "Well , you can look back on my resume and you can see all the project I list on it are started from innovative and creative thingking. No one in the team before think about that. Other example is the dashboard I just build to my team to create landing page in splunk dashboard to keep monitoring all the secufrity log from OSS system to splunk platform. The onbstale is whenever we want to check the status of data transferring we have to login to splunk and manually use search query, that it take time and effort addition the management do not have the landing page to get the centralize overview how the system works. I saw that paint point and and bring my idea to build dashboard to mh manager. He agree and I start learn and reaserach more about splunk, also I connect to my college in spunk team and ask some knowledge sharing session. Everyday, I spend extra an hour to leran about search query, stat tstat splunk command, solunk dashboard layout , REST API etc. Just few day ago I complete the dashboard and introduced with the teram already, next I will wirte the MOP and ask somebodh join with me to get familiar with that in case if future new system integrate to Splunk , so make sure everyone in the team be able to implement that. <br>The main thing is not only inovsative but also I did shareing the new technologhy , new knowledge to the team , so will help them improve their skill set, compentcy. "
    }, {
        ques: "How do you Prioritize Your Work?",
        ans: "My to-do list helps me maintain a steady workflow, but I also realize priorities change unexpectedly. With that in mind, I try not to overload my list with too many tasks, to make room for any necessary adjustments.On one particular day recently, I had planned to spend most of my time joining the bridge to troubleshooting the case with vendor. Then I did a quick check-in with my manager. He mentioned that we have an impairment and need support immediately. I moved to other bridge and try my best to work with the vendor to recovery service to avoid impact to user as much as possible. After few hours to collecting the log and reboot the VMs , the system is full recovery, finally we got job done and bring service back to user.I did several heath check to make sure service full recovery and report with my manager.  I call the user again and we continue to troubleshooting his issue. By the end of the day, I finally find the RCA of the issue and help user resole the issue. Important thing here we should distinguish what is urgent and what is important to prioritize and organize workload efficiency and productively  "
    }, {
        ques: "How do you feel about working in a team environment?",
        ans: "I enjoy to work in the team environment, that is a great opportunity for me to improve communication skill , leadership skill as well as learn experience from team member. Let me tell you the project that me and one college handle. That’s the major software upgrade across of system. I familiar with kind of system and I take the lead. First , we together join the kick off meeting and MOP review, ask and clarify the ambiguous step and precess. Review and add the test case etc.After that 2 of us work together to discuss the workload sharing. We agree to divide equality the number of system to each other and my responsibility to go over all the postchecks in the first upgrade, then I with him in the second in case he still get confusion in new system. I also holding the weekly call with him and create the slack channel for more convenience exchange and solve the problem. We help with each other to handle the work if one got urgent task. After 2 months , 20 system has been completed. we document all in sharepoint and request the lesson learn with vendor. My manager surprise since the project is kind of huge tasks but going very smooth. He send both of us reconization stars as well  "
    }, {
        ques: "Share an example of a team project that failed",
        ans: "One of my past teams struggled with communication. Many tasks weren’t completed, deadlines passed and the project ultimately failed. I tried different methods of communication throughout the project. Through that experience, I learned how important it is to set communication expectations from the very start of a project. That way, everyone stays in contact and understands what they need to do to make the project a success"
    }, {
        ques: "Tell Me About a Time You Demonstrated Leadership Skills.",
        ans: "From the resume you can see I list one project call NBI Post check automated tool so I would like to talk about that The situation is : our team spend a lot of time and effort to do the post check after major software update, basically FM/PM/CM,  Also team have to send and waiting the confirm from NBI team to make sure the data flow is transferred to their end system, that’s extremely inconvenience and no one want that. the is a paint point that the team experience for long time. <br>So I just thinking why we don’t have the tool and it can help do all those post check automation, further can help the framework so no only the team can use but also other team can add if they need to<br>I did bring my idea and talk with my manager, and got green light from him and we bring that on the table in the team meeting and got the agree with whole team.Next step and make the plan, choose the technology, framework, design logic etc … and complete for one system. After completely done for one I set up the presentation with the team and introduce the features, take feedback and gathering new team member get involved to deployment for whole system<br>I also create the dedicate slack channel so we can discuss and answer the question if the team got the problem or not clear about steps of integrating new system, knowledge sharing is beautiful right. <br>We work together and during 2 week, with 5 of us, we can complete for post check of FM part, and currently we working for the rest of NBI check<br>And result of this project is bring the powerful tool and provide many benefits for the team such as : team member can understand how web development is, front-backend working , how is deployment application by docker container, this is most useful thing for the team because the end of the day, OSS system will use docker container to build cloud native app, so this is good preparation for feature. Also, we got the highly appreciate from Sr manager as well as director. We hope our team will be recognize in while department when the tool completely done. "
    }, {
        ques: "Tell Me About the time you lead in team",
        ans: "From the resume you can see I list one project call NBI Post check automated tool so I would like to talk about that The situation is : our team spend a lot of time and effort to do the post check after major software update, basically FM/PM/CM,  Also team have to send and waiting the confirm from NBI team to make sure the data flow is transferred to their end system, that’s extremely inconvenience and no one want that. the is a paint point that the team experience for long time. <br>So I just thinking why we don’t have the tool and it can help do all those post check automation, further can help the framework so no only the team can use but also other team can add if they need to<br>I did bring my idea and talk with my manager, and got green light from him and we bring that on the table in the team meeting and got the agree with whole team.Next step and make the plan, choose the technology, framework, design logic etc … and complete for one system. After completely done for one I set up the presentation with the team and introduce the features, take feedback and gathering new team member get involved to deployment for whole system<br>I also create the dedicate slack channel so we can discuss and answer the question if the team got the problem or not clear about steps of integrating new system, knowledge sharing is beautiful right. <br>We work together and during 2 week, with 5 of us, we can complete for post check of FM part, and currently we working for the rest of NBI check<br>And result of this project is bring the powerful tool and provide many benefits for the team such as : team member can understand how web development is, front-backend working , how is deployment application by docker container, this is most useful thing for the team because the end of the day, OSS system will use docker container to build cloud native app, so this is good preparation for feature. Also, we got the highly appreciate from Sr manager as well as director. We hope our team will be recognize in while department when the tool completely done. "
    }, {
        ques: "Do you prefer teamwork or working independently?",
        ans: "I can honestly say that I’m comfortable both in working independently as well as in contributing to teams, and I was lucky enough in my previous job to be able to do some of both. Especially at the beginning of projects, I appreciate being able to strategize approaches with team members. Once we have our plan of action established, though, I enjoy working independently on my assigned tasks.  "
    }, {
        ques: "How would you handle it if there was a problem with a member of your team not doing their fair share or work?",
        ans: "I would first talk to them privately in a non-confrontational manner, using “I” statements to suggest that there might be a problem that we should resolve together. I’d also do my best to determine the root of the issue and to see if I or other team members could improve this person’s productivity. This approach works for me about 95% of the time; in cases where it doesn’t, I ask for a private consultation with my supervisor to brainstorm other solutions."
    }, {
        ques: "How do you keep yourself organized?",
        ans: "I use several online and desktop tools to stay organized. On Monday of each week, I review my calendar and highlight the key things I need to accomplish, then note detail every task need to be done for each day in online tool as google keeps to easy looking back. I plan ahead as much as possible, but in reality, things come up at the last minute. Thus, I make sure I can adjust and respond quickly, integrating new priorities into my daily work. For example, this week I have a important project need focus, so yesterday I did review all taks I need do , post check and verify with north bouth system to ensure data follow is stable and integrity. I preapare all document regardin about the postcheck list all importrant check case also prepare the email template to send to NBI team. Everything on set so after cutover done I just follow what I did prepare. I strong believe 100% all my jobs will be faster than if someone wait unti last minutes to do the thing."
    }, {
        ques: "What is your pet peeves",
        ans: "I dislike when I see a team member refusing to carry his or her weight on a project. As team members, it is our job to help the whole team achieve success. When I see someone not doing his or her task, I communicate clearly and effectively with the team about my concerns and try to come up with a solution, such as redistributing some of the tasks"
    }, {
        ques: "Tell me about a time you worked well as part of a team",
        ans: "Well,let me tell you the previous experience when I work with the team in security consolidate project. As you know security now in TMO is the top priority, so we have to implementing some change in system unix direcotry to mitigate the vulnerability and ehance security. We did join together in MOP review with vendor to clarify the satep as well as add the diea and some rollback process. The MOP is not complicated actually but it contain many steps and need highly focus to complete. I felt like interested in and volunteer to do the FOA. I take the Mop working on that, save all the log and noted comment in confusing that I think make more sense to the team. It tooke around 3 hours and extra 1 hour to review and run some assurance postcheck. After that I request 30 mins meeting to the team and share with them all the work log as and clarify some ambiguous step in MOP, then we split to 2 system per indidual and we create CR, taks get approved from manager and start rool out. I also did not forget to tell everybody if there is any obstacle during execute the MOP feel free to contact me. After 4 days 18 OSS system have been done very smooth without any problem. This is done by teamwork , we work together, everyone put the effort, contribute and success, its really amazing right. manager is very sastify with that. I also feel happy since I am in the part of great team."
    }, {
        ques: "How do you deal with tough challenge? ",
        ans: "I dislike when I see a team member refusing to carry his or her weight on a project. As team members, it is our job to help the whole team achieve success. When I see someone not doing his or her task, I communicate clearly and effectively with the team about my concerns and try to come up with a solution, such as redistributing some of the tasks"
    }, {
        ques: "Tell me about time when you went above and beyond what was require at work. ",
        ans: "I dislike when I see a team member refusing to carry his or her weight on a project. As team members, it is our job to help the whole team achieve success. When I see someone not doing his or her task, I communicate clearly and effectively with the team about my concerns and try to come up with a solution, such as redistributing some of the tasks"
    }, {
        ques: "How you deal with the people different working style? ",
        ans: "I dislike when I see a team member refusing to carry his or her weight on a project. As team members, it is our job to help the whole team achieve success. When I see someone not doing his or her task, I communicate clearly and effectively with the team about my concerns and try to come up with a solution, such as redistributing some of the tasks"
    },
    {
        ques: "What strategies would you use to motivate your team? ",
        ans: "In my view, I think communication, listerning first and recognize achievement is the best way to motivate the team. For example, my team had project to roll out FM post check automation , group had 5 perople and each of us handle 4 OSS. while 4 os us were engross working own system so there is one guy work very slow and seem like nothing in a week. I saw that and reach out him by a call , and after talking with him I know he has a limit about web technology therefore he was uncomfortanble to implementing the roll out.I tell him I can help him understand more the high level of the infrastrure , technology use in this project and set up 1 hour for pair review and knowledge sharing. I go ober the MOP again and ensure there is not ambiguous step no more. After 3 days, he know about and strat working his sruff and feel very interesting. The project done after 3 weeks long with 20 OSS complete. Team will be happhy with all thing we just done and contribution to the team. Last but not least , I did not forget send start reconization to whole team, sometime just small action  but contain a big meaning to other one. "
    },
];