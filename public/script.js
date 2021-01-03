/*jshint esversion: 6 */
window.onload = () => {
    let beQuestion_left = "";
    let beQuestion_right = "";
    for (let i = 0; i < behaQuestion.length; i++) {
        let question = `<li onclick="modal('${behaQuestion[i].ans}','${behaQuestion[i].ques}')"> ${i}. ${behaQuestion[i].ques} </li>\n`;
        if (i < 30) {
            beQuestion_left = beQuestion_left + question;
        } else {
            beQuestion_right = beQuestion_right + question;
        }
    }
    document.getElementById('behaviral-anwser-left').innerHTML = beQuestion_left;
    document.getElementById('behaviral-anwser-right').innerHTML = beQuestion_right;


    let reliability_left = "";
    let reliability_right = "";
    for (let i = 0; i < reliability.length; i++) {
        let question = `<li onclick="modal('${reliability[i].ans}','${reliability[i].ques}')"> ${i}. ${reliability[i].ques} </li>\n`;
        if (i < 10) {
            reliability_left = reliability_left + question;
        } else {
            reliability_right = reliability_right + question;
        }
    }
    document.getElementById('reliability-anwser-left').innerHTML = reliability_left;
    document.getElementById('reliability-anwser-right').innerHTML = reliability_right;

    let database_left = "";
    let database_right = "";
    for (let i = 0; i < database.length; i++) {
        let question = `<li onclick="modal('${database[i].ans}','${database[i].ques}')"> ${i}. ${database[i].ques} </li>\n`;
        if (i < 10) {
            database_left = database_left + question;
        } else {
            database_right = database_right + question;
        }
    }
    document.getElementById('database-anwser-left').innerHTML = database_left;
    document.getElementById('database-anwser-right').innerHTML = database_right;




    let team_left = "";
    let team_right = "";
    for (let i = 0; i < team.length; i++) {
        let question = `<li onclick="modal('${team[i].ans}','${team[i].ques}')"> ${i}. ${team[i].ques} </li>\n`;
        if (i < 10) {
            team_left = team_left + question;
        } else {
            team_right = team_right + question;
        }
    }
    document.getElementById('team-anwser-left').innerHTML = team_left;
    document.getElementById('team-anwser-right').innerHTML = team_right;

};

const database = [
    {
        ques: "Why do you want this job",
        ans: "First, I realize my competency and my skill are revelant and fit to this role, so I am confident to apply for it. Second, As you know I am really passionate about software, specially database and web development. In the job description, I can see it contains all of technologies I extremely interested in, I believe in this role , I have the place where can I utilize my software skill to contribute to the team and go to success In this position,  I can work and exchange the experience with sr or pe software engineer, that will help me quick growth in my software skill that I do not have much in current position.<br>My level of SQL technical ability is a strong match for this role and I have experience of working with other developers, engineers and also vendor. I want this SQL position because I feel I can contribute to the team positively, I can bring something new in terms of my competence."
    }, {
        ques: "What do you understand by database?",
        ans: "Database is an organized collection of related data where the data is stored and organized to serve some specific purpose.Exmaple company have the database to maintain all the employee information"
    }, {
        ques: "What is SQL",
        ans: "SQL (Structured Query Language) is a standardized language that is used to manage relational databases and perform various operations on the data in them. For basic operation Create, Read, Update and Delete "
    }, {
        ques: "What is DBMS",
        ans: "DBMS stands for Database Management System. It is a collection of application programs which allow the user to organize, restore and retrieve information about data efficiently and effectively."
    }, {
        ques: "WHAT IS A RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)?",
        ans: "A relational database management system (RDBMS) is a program that allows you to create, update, and administer a relational database. Most relational database management systems use the SQL language to access the database.There are two type of DMBS Relational Database Management System: The data is stored in relations (tables). Example – MySQL. In Non-relational database Management System There is no concept of relations, tuples and attributes MongoDB"
    }, {
        ques: "What are the various types of relationships in Database? Define them",
        ans: "One to One , for example 1 employee has just 1 P number and 1 P number present just 1 employee. One to many and many to many"
    }, {
        ques: "what is Normalization",
        ans: "Normalization is a technique use to organizing the data into multiple relation table to minimize no data redundancy .First Normal Form <br>-Each column should contain atomic value <br>-A column should contain value as the same type<br>-Each column should have unique name<br><br>Second normal Form <br>First satisfy the first normal form <br>Its should not have partial dependencies in the table<br> <br>Third Normal Form <br>Satisfy the 2 normal form <br>Should not contain transitive dependency          "
    }, {
        ques: "What is Teradata",
        ans: "Teradata is one of the popular Relational Database Management System. It is mainly suitable for building large scale data warehousing applications.fully scalable relational database managemtn system, its amazing support massive parallel processing therefore its utilize for large commercial data warehouse"
    }, {
        ques: "Key in database",
        ans: "The key is a attribute or set of attribute that help we uniquely identify the record or row of data in relation table Use key for: <br>- Identify any row in table data uniquely <br>- We can force identity of data and ensure integrity of data maintained <br>- Establish the relationship between the table and identify the relationship between table <br><br>Super key:That is nothing but they key, attribute or set of attribute used to identify row of data in table<br>Candidate key:It’s a minimal subset of super key is candidate key <br>Primary key:The candidate key chosen to uniquely identify row in the table called primary key <br>- No two row have the same primary key <br>- Primary key is not Null and every row must have primary key<br>Alternate key All the candidate key is not selected as primary key , they all alternative key <br>Foreign key:It just only the attribute of the table use to defines its relationship with other table <br>Composite key:A key with more than attribute call composite key , all super key have more than 1 attribute call composite key <br>compound key:If composite key has at least one attribute is foreign key so its call compound key "
    }, {
        ques: "What your experience in database",
        ans: "I remember first time I learn database in junior in college and I like sql from that time, so after join T-Mobile I have 3 years experience with oracle database. I am main person in team to develop the SQL query In many script to get data used for get system data majoriy is FM , PM, CM as well as script to drop and clean up the garbage table in DB. I  also support user get data from correct table and attribute. "
    }, {
        ques: "What are the different subsets of SQL?",
        ans: "DDL (Data Definition Language) – It allows you to perform various operations on the database such as CREATE, ALTER and DELETE objects <br>DML ( Data Manipulation Language) – It allows you to access and manipulate data. It helps you to insert, update, delete and retrieve data from the database.<br>DCL ( Data Control Language) – It allows you to control access to the database. Example – Grant, Revoke access permissions."
    },
    {
        ques: "What is the join of SQL",
        ans: "Join clause is used to combine table base on the releted column between them. There are 4 Join in SQL inner join, outer join, left join and right join. (INNER) JOIN: Returns records that have matching values in both tables<br>LEFT (OUTER) JOIN: Returns all records from the left table, and the matched records from the right table<br>RIGHT (OUTER) JOIN: Returns all records from the right table, and the matched records from the left table<br>FULL (OUTER) JOIN: Returns all records when there is a match in either left or right table"
    },
    {
        ques: "What is the difference between DELETE and TRUNCATE statements?",
        ans: "Delete command is used to delete a row in a table * Truncate is used to delete all the rows from a table.<br>You can rollback data after using delete statement * You cannot rollback data.<br>It is a DML command * It is a DDL command."
    },
    {
        ques: "What are Constraints?",
        ans: "Constraints are used to specify the limit on the data type of the table. It can be specified while creating or altering the table statement such as Notnull, foreignkey, primarykey,default"
    },
    {
        ques: "What is subquery in SQL?",
        ans: "A subquery is a query inside another query where a query is defined to retrieve data or information back from the database. Subqueries are always executed first and the result of the subquery is passed on to the main query."
    },
    {
        ques: "What is the main difference between SQL and PL/SQL?",
        ans: "SQL is a query language that allows you to issue a single query or execute a single insert/update/delete whereas PL/SQL is Oracle’s “Procedural Language” SQL, which allows you to write a full program (loops, variables, etc.) to accomplish multiple operations such as selects/inserts/updates/deletes. "
    },
    {
        ques: "What is a View?",
        ans: "A view is a virtual table which consists of a subset of data contained in a table. Since views are not present, it takes less space to store. View can have data of one or more tables combined and it depends on the relationship."
    },
    {
        ques: "Clause in SQL",
        ans: "There are several types of clauses in SQL Server. They are Order By Clause, Where Clause, Group By Clause, and Having Clause.<br>WHERE : filter the data follow by user condition<br>Group by: The GROUP BY statement groups rows that have the same values into summary rows, like find the number of customers in each country.The GROUP BY statement is usually used with aggregation function<br>Order by: The ORDER BY keyword is used to sort the result-set in ascending or descending order.<br>Having: HAVING clause is used to specify a search condition for a group or an aggregate.Having is used in a GROUP BY clause"
    },
    {
        ques: "Agrregation in SQL",
        ans: "If I am not wrong we have 5 agrregation function in SQL <br>COUNT counts how many rows are in a particular column.<br>SUM adds together all the values in a particular column.<br>MIN and MAX return the lowest and highest values in a particular column, respectively.<br>AVG calculates the average of a group of selected values."
    },
    {
        ques: "what different btw RDMS vs Non-RDMS",
        ans: "The major difference between them is how they handle data.RDMS have tables and these tables may have dependencies on each other, or relationships. A database for a store will have a table for customers and one for orders. These two tables are related, because an order is made by a customer.Non-relational databases are document-oriented. This so called document type storage allows multiple categories of data to be stored in one construct or Document<br>RDMS ogernized data in table/colum and row , other hand non-RDMS stored data in collection(table) ,document(row), key(column) value is value <br>RDMS base SQL to manage the database ,  cannot use same system syntax of SQL in non-relational database"
    },

    {
        ques: "What is a foreign key with Cascade DELETE in SQL Server?",
        ans: "A foreign key with cascade delete means that if a record in the parent table is deleted, then the corresponding records in the child table will automatically be deleted. This is called a cascade delete in SQL Server."
    },
    {
        ques: "What is ETL",
        ans: "Extract is the process of reading data from a database. In this stage, the data is collected, often from multiple and different types of sources.<br>Transform is the process of converting the extracted data from its previous form into the form it needs to be in so that it can be placed into another database. Transformation occurs by using rules or lookup tables or by combining the data with other data.<br>Load is the process of writing the data into the target database."
    },
    {
        ques: "What is software development lifecycle",
        ans: "SDLC or the Software Development Life Cycle is a process that produces software with the highest quality and lowest cost in the shortest time possible.There are several model of SDLC process such as waterfall,Agile<br>Requirement analysis<br>Planning<br>Software design such as architectural design<br>Software development<br>Testing<br>Deployment"
    }
];




const team = [
    {
        ques: "What Would You Bring to Our Team?",
        ans:"In addition to my experience, I would like bring a great attitude and a willingness to take on any task. At my last job, I was always looking for ways to help and also share the knowledge among the team. Based on what I know about legacy T-Mobile network I can help the team know and understand more about it that thing I believe our team still not familiar with because the merger just happens back few months. In addition, based on software skill I can develop some tool and application that can help the team save a ton of time and effort as I used to done with OSS team. Since I am an innovative person, I always looking into the existing paint point of the team as well as something different and try to make an innovation to help team out. I will keep an eye into team’s workload and ready to help and support if needed to sharing workload In short, If I am a part of team I afford to contribute and help the team grow fast and stronger."
    },
    {
        ques: "How do you feel about working in a team environment?",
        ans:"I am really enjoyed and exited working in a team. I consider this is a great opportunity that you can improve communication skill and build the relationship with team member. More important, I can learn a new thing, exchange the knowledge among team that make us a big improvement and get good experience. when working in team we will get more idea and solutions that make our work optimal and fast that we cannot find when we work individually. Different team members contribute different perspectives, and the synergy between team members can produce creative and productive results and better solution. Let me tell you a project that I and my college handle. That’s the major software upgrade across of system. First, we join the kickoff meeting and MOP review, ask and clarify the ambiguous implementing step and process. Review and add the test case, ask the question etc. After that 2 of us work together to discuss the workload sharing. We agree to divide equality the number of systems to each other and my responsibility to go over all the post checks in the first OSS upgrade, then I be with him in the next one in case he still get confusion in new system. I also holding the weekly call with him to review all work done, we used slack channel, skype for more convenience communication. After 2 months, 20 system has been completed. we document all and upload to SharePoint and finally, we request the lesson learn with vendor to make sure some minor issue will not repeat in next project. My manager surprise since the project is kind of huge tasks but going very smooth."
    },
    {
        ques: "What strategies would you use to motivate your team?",
        ans:"Motivation often comes from smaller recognitions, rather than large gestures. I make time to thank my teammates with email and recognition. I let them know how much their hard work means to me and the rest of the team. I want to all the team have credit from the project we join. Another way, in technical side, I used my strength such as hardworking, knowledgeable and willing to learn and try the new thing to motivate the team as well. Team can see how I improve day by day so they can plan to improve themselves. Before I join team, only bash script is used the most in OSS team, I am a first person who is bring python into team recommended everyone should learn and use it, so for now , python is bread and meal with all team member. They did add one new programming language into their coding skill. Casey, you can verify that with Anand and Deepak right. "
    },
    {
        ques: "Do you prefer to work as part of a team or independently?",
        ans:"I enjoy splitting my time between working as part of a team and working independently. In my past positions, for solving problems and handling large projects, being part of a group and working in team was usually beneficial. Diversity in team bring the creativity and innovative to generate a great solution and method. However sometimes, I found that detail-oriented tasks with highly defined processes were better accomplished independently, as it made maintaining focus easier. Each approach has its place, so I embrace them both depending on the situation at hand. "
    },
    {
        ques: "When you’re in a team situation, what role do you usually play? teamplayer",
        ans:"I am a team player, I am doing good in both contributor as well as a leader if I have a chance. Regardless of the role I am put in, I utilize my reliability, communication skills, positive attitude, and outgoing personality so that I can become a key contributor. Basically, whatever we do we aim to achieve a common goal of the team and finish project without any issue and meet a timeline. one recent project I am working on is designing the high level architecture diagram for WMS. My team contain me, product manager, 2 analyst and principal engineer. We dived up the task base on the individual strength. I was working on design the technology, protocol for all interface btw WMS and internal TMO application. We hold the meeting every 2 days to review and report the progress.  During working there were some disagreement among the team member about the design, in that situation we step back and listening each other to find better solution. After a month we are complete, and my manager really satisfy with the first concept "
    },

    {
        ques: "Describe a time when you worked well as part of a team",
        ans:"in my last position, four of my colleagues and I were tasked with a complex project. That is building up the brand-new OSS and after that is migration the node from other OSS, 4 OSS has been build up , these OSS is dedicate for Spring node (4G 5G).We had to work together, relying on each other’s strengths to complete the required work. To get started, we assessed the tasks we needed to accomplish as well as our skillsets. Then, we divvied up the workload, accordingly, ensuring we could focus our effort on areas where we shined and familiar. For the first meeting with vendor, it required all of us join to review the MOP and identify the change, the timeframe of project, what is major software upgrade what is the plan for roll back ... I am good on programing and Linux command, so I got the task to do the pre check and post check and OSS acceptance. Other one is communicating with upstream team to notify them about new OSS, and last one is work with vendor though out deployment process. This approach kept our efforts organized and ultimately led the project to success. "
    },
    {
        ques: "Have you ever had difficulty conflict working with a manager or other team members?",
        ans:"We do not want to get any issue or difficulty with team, however, from different personality and point of view so its unavoidable right. Such as last project when I have a conflict with my team member when design an API btw WMS and SAP (finance application). Currently, they exchange data, report though file base by SFTP. At you know, there are many problems happen since file transfer is never the best way to exchange data, lost file, SFTP server error, lost connection was happening frequently … So I come up with solution is develop the REST API, instead of drop and send file , we send HTTP request, more secure and reliable however, my team member not agree and the reason she concern is bout resource available and not easy to develop and implementing. I took that feedback and get an meeting with her to asking why she refuse the change, the meeting is open , I explain the insufficient of SFTP and API can solve these problem we experience so far in other way, due to resource is not available she not comfortable to deploy my idea. We step back and listening each other and agree to have better solution. We make a midterm and long term solution, short- midterm we request SAP instead of export the file, they should insert record into sharing database btw TMO and vendor, and long term is develop an API when we have more resource and infrastructure more power. Ultimately, problem is solved, and it does not happen again. So, I learn from that is even we are having conflict, disagreement but talk straight and listening to each other, brainstorming, and working together will help us go over it and achieve the common goal of team. "
    },
    {
        ques: "what would you do if a team member was not pulling their way? Not 100% contribute",
        ans:"The first I consider this is as a wider problem. If someone is not carrying out their duties and responsibility properly, it will impact the rest of the team and combined effort. To be a good team, everyone must work properly. I think talk in person; listening is the best way to solve this problem. If he/she got personal home issue, in which way I would support to bring them back right speed as soon as possible, if lack of motivation, I will try to explain how the important of their work and how it affect to the whole team is we miss their contribution"
    },
    {
        ques: "what are qualities for a good team/ team effectively? ",
        ans:"We are technical support team so the first important thing we need is technical skill, we should have a firm knowledge about our network and system. Also troubleshooting skill must have. Team should share objective and common goal , all team member should work on their project to achieve the same common goad addition, each team member needs to be communication effectively, In both speaking to all the team member during performing the task as well as listening what everyone saying. Team should be flexible and adaptable through the team task as the things can and often change very quickly. motivate and support team are also considering the key of teamwork, we are ready to help and jump in any situation if someone need help. The last one is innovative, team should have the skill thinking outside of box, something different to help the team standout, save time and effort make the daily work become easier. "
    },
    {
        ques: "Have you ever had difficulty conflict working with a manager or other team members?",
        ans:""
    },
    {
        ques: "Have you ever had difficulty conflict working with a manager or other team members?",
        ans:""
    },
    
];







const reliability = [{
    ques: "What is system Reliability",
    ans: "The System Reliability Engineer (SRE) improves and protects the software and system in company, including management of scalability, availability, latency, performance, security, and capacity, and delivery of software faster, better, and cheaper. Enable great customer experience and product innovation by continuous improvement of operational support.  In short term I think system reliability is keep the system up, running and available 24 hour by 7. As we know no products work as 100% as expected, our role just tries the best to keep Hight reliability as long as we can"
}, {
    ques: "What is DevOps",
    ans: "DevOps is a set of practices that works to automate and integrate the processes between software development and IT teams, so they can build, test, and release software faster and more reliably. Today instead of releasing big sets of features, companies are trying to see if small features can be transported to their customers through a series of releasing. This has many advantages like quick feedback from customers, better quality of software etc. To achieve this, companies are required to:<br>Increase deployment frequency<br>Lower failure rate of new releases<br>Faster mean time to recovery in the event of new release crashing<br>DevOps fulfills all these requirements and helps in achieving software delivery."
},
{
    ques: "What is CI/CD",
    ans: "Continuous Integration (CI):is a development practice that requires developers to integrate code into a shared repository several times a day. Each check-in is then verified by an automated build, allowing teams to detect problems early. Continuous integration foucs on testing automation to check that the application is not broken whenever new commits are integrated into the main branch.<br>Continuous delivery is an extension of continuous integration to make sure that you can release new changes to your customers quickly in a sustainable way"
},
{
    ques: "What is DOCKER",
    ans: "Docker is a containerization platform which packages your application and all its dependencies together in the form of containers so as to ensure that your application works seamlessly in any environment even it in development , testing phrase or production.<br>Docker containers anything that can be installed on a server.<br>This guarantees that the software will always run the same, regardless of its environment."
},
{
    ques: "What is Ansible?",
    ans: "Ansible is an open-source automation tool, or platform, used for IT tasks such as configuration management, application deployment, and provisioning. Automation is crucial these days, Automation simplifies complex tasks, not just making developers’ jobs more manageable but allowing them to focus attention on other tasks that add value to an organization. With me, ansible is python in English version, I really love it also I have the project that utilized ansible to develop the tool. "
},
{
    ques: "What is cloud",
    ans: "The cloud refers to servers that are accessed over the Internet, and the software and databases that run on those servers. Cloud servers are located in data centers all over the world. By using cloud computing, users and companies don't have to manage physical servers themselves or run software applications on their own machines. That is great benefit of cloud. <br>Usually cloud provide 3 services: Software-as-a-Service (SaaS) (saleforce), Platform-as-a-Service (PaaS) AWS Vms,digital Oacen, Infrastructure-as-a-Service (IaaS). So depending on the demand of use, user can choose the right service they want. "
},
{
    ques: "what is Jenskin",
    ans: "Jenkin is an open source automation server. With Jenkins, we can accelerate the software development process by automating it. Jenkins manages and controls software delivery processes throughout the entire lifecycle, including build, document, test, package, stage, deployment, static code analysis and much more. I think Jenskin is a part of CI. I used to build sevral test case before with Jenkin when we want to automate post check automation post check "
},
{
    ques: "What is Kubernetes",
    ans: "Kubernetes is an open source project that has become one of the most popular container orchestration tools around; it allows you to deploy and manage multi-container applications. There are many advantage from Kubernetes such as : scaling: Kubernetes allows you scaling resources not only vertically but also horizontally, easily and quickly. Clear dashboard to monitoring the container etc.. I am researching and learn about Kubernetes now, and implementing  the lab of Kubernetes cluster for my team , the lab contain 4 VMs, one for  master and three for slaves "
},
{
    ques: "what is Splunk",
    ans: "Splunk is a software technology which is used for monitoring, searching, analyzing and visualizing the machine generated data in real time. It can use to monitor and read different type of log files and stores data as events in indexers. This tool allows you to visualize data in various forms of dashboards. From our team, I did work on Splunk quite of time when integrate OSS physical host into Splunk, and also build dashboard to monitor the data transferring"
},
{
    ques: "what is Puppet",
    ans: "Pupet is a configuration management tool to ensure all the systems are configured to the desired states . Puppet also used as a deployment tool that help automatically deploy software on the system. Same as many devopos tool, puppet will have master environment contain main configuration and client environment that install in the server in the network. "
},
{
    ques: "What is the plan after you got this job",
    ans: "I will gather as much information as possible about the role and the requirements and then study that in my own time. The firsta day I start working to you, I want to already have a good understanding of the role and what you need me to do, these are the plan I prepare for new fole.  Since the daily works is regarding to JDA software component so I will priority invest that first , learn feature, functionalities and all software component WMS, warehouse labor management (WLM), and/or transportation management (TMS)<br>. Since the much we know and understand the software application the much we can easy to take advantage from it and know where troubleshoot if we have the problem,  Same time, I learn more about the Devops tool I do not have the chance to learn that before such as: Chef , Pupet Kubernetes<br>Thinking how to apply the my strength in software such as python, web development to make as much as possible the manually step become automated , that I used to make a lot of tool for my current team<br>Also , plan to deeply learning in cloud computing, first AWS then Auze if job required used both. I also plan to get a AWS devops certificate assossiatre , since it will my skill more strong as well as support this position very well <br>Last but not least, learn in out and our of the team, learning new process and also all stakeholder working with team to find the best way to support is most omportant thing I need cover as soon as possible"
},
{
    ques: "Tell me again why we should give the job to you and not someone else ? ",
    ans: "First and foremost, my competency and skill set are a match of this role. Although I see I have less experience about JDA software application but I think with my knowlege, ability, willing to lear and fast learner I strong belive I can cover that quick and hand on the project or support team soon <br>I am strong baground of DevOps, automation and also rpogramming language, THis is imporatant to adapt the work requirements as well as do further than that base on technical skill. <br>I work hard under pressure, meet strict deadlines and also work closely with other team members and deparments to achieve team objectives. You wiil not need watse your invaulable time to monitoring my performance because I am relaibale and trustworthy. <br>Last bu not least , I am in TMO around 2 years, so I understand TMO process, company culture therefore easy to integrate myselft to the team to collaborate and contribute and go success.The job is very imporant to me that mean I will work very hard in team to deliver result <br>With those point I think I am a best candidate and no one can beat me :). "
},
{
    ques: "What is about this job that your are particularly attracted to ? ",
    ans: "Apert from having the necessary skills to perform the role to a very high statndard, I am actially attracted about the ooopertunity I can improve myself and my knowledge. At you can see I am really lvoe new technology, ant this role contain most relevent technology such as Devops Automation ,docker , kubernetes , as well as it has the place I can utilize my softwaer skill scripting with bash , python. And also JDA is a great software I want to learn about that , Actually I did spend sometime weeked to research about JDA and its componenet but its very limit documentation about that, so just only way is got this job and learn more about that. Last but not least , the job will support the deploy the 5G in nation wild, and I want become the part of this revolution. "
},
{
    ques: "The End of Interview",
    ans: "How deep we manage the JDA software application ? Those is cloud base application , we own and manage that cloud ? <br>Base on the job describtion and our discussion, I see the daily work is around JDA software application WMS or WLM transportation management (TMS) , so where is the place we can utilize the devops too, or automation as well as promming language ? Could you please show me on case ? <br>Who’s the most successful recently hire and why? <br>What is the biggest challenge in the team and how this position can help to overcome that challenge?<br>What additional skill and experience do you wish I had to make me a better fit on this job?<br>Is there anything leaving you a hesitancy to hiring for this position?<br>What is the next step in the process?, What are the most important qualifications the hiring manager is looking for? "
}, 
];


const behaQuestion = [{
    ques: "What is DevOps",
    ans: "My name is Thang Tran. I currently system reliability egineer in supply chain domain. In current role help team integrate internal TMO application with the vendor warehouse management system and build the tool, machenism to monitor the system as well as interfaces. Hookup that into Splunk also for the system administrator. Handle Fault management, Performance management, configuration management, Audit of for TMO network element (BSC,RNC, enodeB about RAN side). <br>I am also main person in the team to design, develop and maintain the monitoring script and collaborate cross- functional team to build the automation tool, web GUI apllication,  I also have experience of working with other developers, engineers and also vendor<br>In addition, my daily job are troubleshoot and resolve highly complex technical design or service issues that cannot be resolved through normal operations and maintenance procedures,find the root cause analysis to drive issue resolution and limits impact to the internal user.I also provide on-site and remote support during major upgrade and integrate new node into system with vendor<br>For short 2 years I have several achievements with team , complete over 10 main projects and develop several applications, automation tools. Based on my contribution and support to users, I have over 10 stars recognition 2-time recognited front of  TSD&S department. <br>For education, I just complete master of SW from Colorado technical University  GPA 4.0. One BS computer science and 1 BS about networking engineer <br>I am passionate about new technology, cloud and DevsOp tool , especially database and software. What I am looking for in this position is an opportunity to utilize my skills, , improving it, learning new thing and collaborate, contribute to the team.  "
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
},
{
    ques: "WHY TMO",
    ans: "I have been working with TMO for 2 year and all I can say is that I’m lucky to be part of this company. The atmosphere is cool. My teammates are all kind and always ready to help if you need them. My bosses are always keeping in touch to see how I am doing with my job and provide feedback as well as recognition on the job well done. And of course, the benefits are the best from health benefits to dental to childcare, to phone service employee discount and many more to mention. "
}, {
    ques: "Does your manager know you have applied for this job?",
    ans: "Yes, he does. He knows it, before applied I did talk with him about job and explain the reason I want to apply for software position. Actually I think he does want to lost me but because of my career success he will agree and support me 100% . He is cool manager. He always stands behind me to push me go further In career path."
},
{
    ques: "What is your big failure, mistake?",
    ans: "Well, I don’t want to talk about my failure at all. Just kidding, I think everybody got mistake but how you stand up and what you learn from that mistake is more important. I can tell you the first mistake ever after I join the TMO. For last 6 months , my get project to build the dashboard to monitoring number of TT and impairment, outage used to report to director level by PowerBI software. I took that project but careless to research about PowerBI softawer. You know, to learn and used the new tool with me  is not a problem however I got the big problem to get data resource. Since the data we used is insend the NMNET security network however PowerBI just able to run in Tmobile IT network and we have inssuficent to integrate powerBI into NMNET. I try my best effort the result is 0 and have to report that to my manager and I took that responsibility when did not check carefully before say Yes.  However, I think I need to do something to fix this mistake , I proposal the new software tool is similar to PowerBI and also can working inside the NMNET. I used Elastcjs stack and graphana to build the dashboard and landing page that make centralize view for my department. After 2 weeks I complete and make the presentation front of team and director , he is Ok with that and also appreciate my hardwork. However, I get a big lesson learnfrom that this experience about overconfident and not done a completely researching before give the desicsion. "
}, {
    ques: "What challenges are you looking for in this position?",
    ans: "I can say I love challenge since it will bring to me an oporunity to improving myself Working the new team, new system, new technology , new framework, all kind of stuff are the challenge with me in this position. However, I am quick leaner, so from my perspective I will get it soon and hand-on project right away. Since now I can focus more about new tech since I did finish my master degree  so I have more time to go deeply for each all tech I like  that I do not have time before.Also I expect to practice and enhance communication skills. What highly motivate me are the challenges in front of me driving me to strive harder. I believe I have the ability to effectively meet challenges and have the flexibility and skills necessary to handle challenging jobs."
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
    ans: "First, I want to say I love challenge, because I know challenge is an opportunity make me striker harder and improve myself. I would like to said my biggest challenge at work I have is implementing the application call password change tool. The challenge is the insufficient of infrastructure, team supporting and guidance documentation. Since to implement the tool you must have the software running in background and system must have internet open to download that software. However, our system running inside NMNET and cannot connect to outside to download the software. I took a lot of time, extra 2 hours evening time and weekend to find the solution in current situation. I go through many online resource, ask expert. I note and collect pie by pie , try to test different way and finally , I got what I pay. Finally I find docker container is the best method in this scenario. So I can design and done everything in my latop, encrypt those to image and ship to the server. This challenge tech me  how important of hard work and learn the new thing is , you will get what you pay  "
}, {
    ques: "How do you work under pressure ",
    ans: "I enjoy working under pressure because I believe it helps me grow., I believe that my productivity is more than 100% under difficult and pressure situation. The pressure like stress, deadline , tough proposal my trick is keep calm and go about handling the situation is the best possible manner. For instance, I did get the callout at 1 Am about problem site status script that use for report status of all NE of TMO network. The script broken and over 4000 sites lost connectivity. And its escalate to president level, it’s a terrible pressure on my back.  I joined bridge and troubleshooting with NOC team and vendor. The tricky here is script is built in house therefore vendor refuse to support since they do not touch inhouse tool. So only way is I have to base on my experience and knowledge to solve this. I tell myself need to be keep calm and troubleshoot step by step.I replicate run the script, no issue but nothing to show. And do more about testing case.  Finally, I find the RCA is , the script query from database the site info , however , the password is expired therefore the result of query is empty. After I updated the db password, the script back to work and report the status as normal.  Keep calm and don’t panic is a good trick to due with pressure situation. "
}, {
    ques: "Tell me about time when you went above and beyond what was require at work. ",
    ans: "TO be honest, I allway work with 100% effort in any task. But in this situation I fell like I work more than 100%. I remember last year we have the outage when vendor delete the whole dataset even backup and it happened in Friday afternoon around 5 PM. We have an urgent meeting and my manager ask the engineer support because this is very important , since the whole system down and let all users in 3 markets cannot use the system to do their work. So I decide to volunteer to help even. I join the bridge with vendor to help provide the site list, in hours script and in the same time I need reply a ton of email and skype chat to guide user login to the new system to continue their work. Very stress and busy. So few initial hours , its kind very busy but after that we got better scenario. I focus more to collaborate with vendor to complete migeration and its took around next 10 hours. So until 2 PM next day, after run the assurance check list to make sure all services OK , I call my manager and report all of that. Wow that was amazing experience , I did now why I do not fell sleepy and tired during that time. My work was recognized from many users and management level. But the important is I want to share with you I show flexibility, how hard work I done and important is I always put the user supporting in the most priority "
}, {
    ques: "How you deal with the people different working style? ",
    ans: "Last 6 moths, my team had project to upload all the password system to CyberArk. I was assigned with another sr engineer in our team. The problem is our password place in different srepadsheet and if do manually its take forever since around 50 systems and one system have over 30 different password. With my experience about python,the best way to complete that is use programming language to manipulate those spreadsheet and combine to other one. However , I got the problem since the Sr engineer , she just want do manually and do not care how much time it is. First I do not understand why, I ping her and ask the reason why she reject my suggestion. I show her how quick and benefit that python can help in this project. Finally I got answer is she not confident in progarming language that why afraid to apply it into work. One, I convince her , another one I work with her to build the script, sharing knowledge about python and work together. After 2 days script is done and we try 1 spreadsheet first, just 5 second all password matching in new template. And just next 2 days , the huge number of passwords are in 1 place. We complete the project. Listerning first and patient is help me in this situation , but over than that I feel happy since I did sharing the knowledge to my collect , help her add more skill set. You know what, right now she might be better than me in python , she love it , she love it so much"
},
{
    ques: "What strategies would you use to motivate your team? ",
    ans: "In my view, I think communication, listerning first and recognize achievement is the best way to motivate the team. For example, my team had project to roll out FM post check automation , group had 5 perople and each of us handle 4 OSS. while 4 os us were engross working own system so there is one guy work very slow and seem like nothing in a week. I saw that and reach out him by a call , and after talking with him I know he has a limit about web technology therefore he was uncomfortanble to implementing the roll out.I tell him I can help him understand more the high level of the infrastrure , technology use in this project and set up 1 hour for pair review and knowledge sharing. I go ober the MOP again and ensure there is not ambiguous step no more. After 3 days, he know about and strat working his sruff and feel very interesting. The project done after 3 weeks long with 20 OSS complete. Team will be happhy with all thing we just done and contribution to the team. Last but not least , I did not forget send start reconization to whole team, sometime just small action  but contain a big meaning to other one. "
}, {
    ques: "Tell me about the time you volunteer to do project ",
    ans: "In my view, I think communication, listerning first and recognize achievement is the best way to motivate the team. For example, my team had project to roll out FM post check automation , group had 5 perople and each of us handle 4 OSS. while 4 os us were engross working own system so there is one guy work very slow and seem like nothing in a week. I saw that and reach out him by a call , and after talking with him I know he has a limit about web technology therefore he was uncomfortanble to implementing the roll out.I tell him I can help him understand more the high level of the infrastrure , technology use in this project and set up 1 hour for pair review and knowledge sharing. I go ober the MOP again and ensure there is not ambiguous step no more. After 3 days, he know about and strat working his sruff and feel very interesting. The project done after 3 weeks long with 20 OSS complete. Team will be happhy with all thing we just done and contribution to the team. Last but not least , I did not forget send start reconization to whole team, sometime just small action  but contain a big meaning to other one. "
}, {
    ques: "Tell me greatest accomplishment? ",
    ans: "Until now , my greatest accomplishment at work is success develop the password change tool for netact system and used widely in tmobile. Until now I the tool got over 10K inteactive and service the pw change for all market, region , field technical. Also help NOC 1.5 team avoid over 3000 Trouble TT from users. In addition, this is a bigest challenge I meet in my development career since there were many inssuficent infrastructure, guidance, support. However, with my hardworking and willing to learn the new technology I did complete the tool and got many many reconization from department level. I am actually pround of my hardword. One more accomplistment I want to share with you is My master degree, wow , that’s amazing. This is also a big challenge as well. I did spend a lot of time and effort , make plan for studying resonalble and do not impact to daily work. Finally, its was pay off by master degree that is on my way to my house. "
}, {
    ques: "The idea for the team ",
    ans: "Actually, I am a creative person, I usually bring a good idea to the team base on my software skill. Recently, I develop the tool that call NBI postcheck automation tool. As you know my team alway spend a lot of time and send a tons of Email and waiting to other team confirm they successful get and pull data from our system. And also do the same several test cases after major upgrade. I see that paint point and bring my idea to the my manager to buld the tool to do all that thing automatically. I start and work with other team to figure out how they can check the data from their end and transfer that to command line. The same I do with all the testcase in our system. The outcome is awesome , the team now can decreae from 2 hours to 2 mins by 1 mouse click. The main thing here I can utilize my software skill to help the team and business goal.  "
},
{
    ques: "Tell me about a time when you were asked to do something you had never done before. How did you react? What did you learn?",
    ans: "That’s great question actually, Last month my manager request me support one case that is to build a REST API to help users query site status replace for direct database login query. This kind of project I never done before , but I am very interested in this project and agree to start develop the API. Since I have experience in back-end so I need to learn and review the REST API requriment. I choose Nodejs in the back-end , define the route from use end and also find the way to get data and respond Json format to user. I spend extra hour for everyday as well as throguh weekend just focus on that. After a week I sucessful run the first test case. Also I open communicate with user to ask about testing. We open slack channel to exchange the idea to make the API more and more efficency. I completed the REST API for specific user after 2 weeks, now I still continue working to define more routes and feature for that REST so it can support to more and more users , decrase the load of database. Through this project, I add more skill to my skill set and deeply understand the dataflow run betwwen from front-end to back-end as well as how REST API working. How back-end interact with databas. This is very useful for me sunce my career goal is become full-stack developer and connect to database is very crucial point I need to cover.  "
},

{
    ques: " Recall a time when you were assigned a task outside of your job description. How did you handle the situation? What was the outcome?",
    ans: "That’s great question actually, Last month my manager request me support one case that is to build a REST API to help users query site status replace for direct database login query. This kind of project I never done before , but I am very interested in this project and agree to start develop the API. Since I have experience in back-end so I need to learn and review the REST API requriment. I choose Nodejs in the back-end , define the route from use end and also find the way to get data and respond Json format to user. I spend extra hour for everyday as well as throguh weekend just focus on that. After a week I sucessful run the first test case. Also I open communicate with user to ask about testing. We open slack channel to exchange the idea to make the API more and more efficency. I completed the REST API for specific user after 2 weeks, now I still continue working to define more routes and feature for that REST so it can support to more and more users , decrase the load of database. Through this project, I add more skill to my skill set and deeply understand the dataflow run betwwen from front-end to back-end as well as how REST API working. How back-end interact with databas. This is very useful for me sunce my career goal is become full-stack developer and connect to database is very crucial point I need to cover.  "
},

{
    ques: "What are the biggest change last 6 months ",
    ans: "The biggest change so far I had in the job is the team was re-strcutred and it reuqired we need to work as vendor agnostic. Since my team before devide into 2 speratte group , one work on Nokia vendor and one is E//. This is the big change and require we have to learn across OSS sytem, it’s not easy. However, this is a requirement and I  must adapt as soon as possible. I make the plan to learn a new system. I spend 8 hours per week to learn the how the data flow (CM/PM/FM) , what protocol E// interact with Network Eleement as well as Northbouth interface. What is the most important script place inside the system etc … I also ask the my colleage to pair with me 2 hours per week to knowledge sharing , and also I can transfer to him about Nokia … Kill 2 birds with one stone right . Along with learn the new system, I volunteer to handle the TT , this is a best way to practice and apply what you learn. Also I join some project with standby role and learn as much as I can.  My SR manager really impress with my work, he did send some email reconization front the team , but I think the most important is my hardwork and willing to learn a new thing finnally pay off. Until now I still learning the ENM , learning is never stop right"
},

{
    ques: "Tell me about a time when you had to juggle several projects at the same time. How did you organize your time? What was the result? ",
    ans: "That’s great question, as you know in operation technical support enviroment, handle multiple job is “brad and milk” we should have the plan ahead if you don’t want get crazy. Last 2 months I handled 2 major procject in the same time. One is software upgrade and one is replacement backup system. Those contains many task overlap which each other. So this is my stargy to due with kind of this situation<br>1. I list all the task in Pier system (Peir is change system specfic for Tier 2 ) <br>2. Every Monday I go over all the tasks and make the note for all the key point and add that in to-do list <br>3. I marked the level of important to every task like: “asap”,”cannot ignore”,”take it easy”  to easy to identify priority of those <br>4. List all the important meeting will happen in week <br>5. Prepare all the precheck/postcheck after acitivy done <br>6. I also spend 1-2 hours per my schedule incase with the urgent thing happen in last minutes <br>7. After the task done , I imidiately update status , add the log and close the task in Pier to aovid confusing<br>So I just follow all these step and go through 2 project very smoothly. As I said if we have the prepareation so thing much more easier "
},
{
    ques: "What are the three things that are most important to you in a job? ",
    ans: "Hardworking : I think hard work is the first thing in my current job as well as any postion right. If the current workload is quite of high, if we do not hardworking I think we cannot get the job done<br>Teamwork: THe project ususllay contain many and many taks need to be done , if without support from the team so definitely you will burn out <br>Willing to learn a new thing : new technology and software upgrade coming bi-weekly that I few, so you must ready to learn a new thing if you don’t want feel like foolish when you join the meeting or handle the project. So willing to learn and fast learning will help you overcome this problem"
},
{
    ques: "Set Goal and how to achieve that goal",
    ans: "The greatest goal I set was to graduate master degree as an honors student(sraight A)  while still working full time in a related field. <br>And finally I got my master degree with straght A last month. Reaching this goal showed me that I could dedicate myself to my career, and reach the goals that I set for myself. <br>To achieve this goal, nothing but working hard and make the reasonale plan between work and studying. I always take extra hours perday to learn day by day lecture and practice on that <br>I never wait until last minute before exam or quiz and assignment due day to start studying. Instead of that, I review and make note for lecture in free time, weekend if the workload of mine is very high and sometime required oncall. By that way, when exam comming, I just spend little time to connect all knowledge I did learn before and alway feel ready front of any exam challange. For now, I continue to update myself, I plan to get AWS assossite devops. Cloud skill is very crucial now and especially in this position, so I want to get that to make my skill more fit on this role. "
},
{
    ques: "Disagree with boss",
    ans: "I want to say I have a great manager , he always stay behind me to support what I need and reconigze me when I got the job well done, disagree with my manager is very rare case. I want to said for last three month, my manager assigned me the project to support cross functional team to build the front-end of allocation. Actually I always ready to help someone when they need but in that time I really busy in current project when I am hand one same time 2 major project. I did private talk with him and intend to push back since I don’t want that affect to my current project. <br>We talk together and he did explain for me the reason he assign that task since he want to help increase my visibility into wide deparment not only in OSS team. That;s will help me a lot in my career such as promotion and reconization. After discussed I think I in the wrong side already, I say apoplogy to him and pleasure to tak that project. <br>Even on that scenario, I was not right but I thin kthe best way to due with some disagreement is direct communication , talk straight. We are the team and need transparent right. So if I did not talk with my manager straight and still take that project with uncomfortable , so it not good right. "
},
{
    ques: "Immediate impact",
    ans: "I would follow 3 stage plan that would ensure I would make an immediate and positive impact. First, I would obtain a claer brief from my supervisor on what it is I need to do within the role to the correct statndard. Seconly, I would learn as much about technology requirement, software service in order to I had a thorough knowledge what they are and how they benefit to dailyjob. Finally I would put in extra hours work needed each day to become fully competent is the fastest time possible so that I can make a quick immediate impact and support to the team  "
},
{
    ques: "What do you want to say to the team",
    ans: " Due to pandamic, we do not have a chance to work face to face so it might be affect to team's communication. So my dvice is try the best to maintain communication among the team, collaborate and working together as much as we can."
}
];