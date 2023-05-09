let filenames = {
        'wh' : 'workHistory', //0
        'wp' : 'workProjects', //1
        'pp' : 'personalProjects', //2
        'edu' : 'education', //3
        'sk' : 'skills', //4
        'o' : 'other', //5
        'a' : 'links', //6
    }

const todayObj = new Date()

//looks like im gonna use a giant json object after all
const filedata = {
    "header": [
        "PORTFOLIO II",
        "TXT VERSION 3.3 &nbsp &nbsp SYSTEM MASTER",
        todayObj.toLocaleString('default', { month: 'long', day : 'numeric', year: 'numeric'}),
        "DESIGNED BY TYLER BROGNA, 1992," + todayObj.toLocaleString('default', { year: 'numeric'})
        ],
    "commands": [
        'CATALOG',
        'RENAME oldname,newname',
        'MON {,C} {,I} {,O}',
        'NOMON {,C} {,I} {,O}',
        'OPEN name',
        'LIST'
        ],
    "resumeContent": [
        '[ ] a',
        '[ ] cv',
        '[ ] edu',
        '[ ] sk',
        '[ ] o',
        '[ ] pp',
        '[ ] wh',
        '[ ] wp',
        '++ 0 FILES NOT LISTED',
        '++ 8 TITLE(S)'
        ],
    "workHistory": [
        "Accusoft",
        "Software Engineer III | Sep 2022 - Present | Tampa Bay, FL.",
        "Accusoft acquired Snowbound Software in Sep 2022, and I accepted a job to continue working for them, in the same role. Additional responsibility was given toward test automation and maintaining a software pipeline.",
        "Snowbound Software",
        "Software Engineer | Jan 2018 - Sep 2022 | Waltham, MA.",
        "Worked on a team to maintain and expand functionality of a document processing API, used to convert document formats into raster and vector images.",
        "Conduent Legal and Compliance Services",
        "Software Developer | Jul 2015 - Jun 2017 | Albany, NY.",
        "Created web apps with PHP for data compliation, for internal use. Created automated testing frameworks for a website using Selenium."
        ],
    "education": [
        "Rochester Institute of Technology",
        "Bachelor of Science in Game Design and Development | Minor in Digital Literature and Technology",
        "Sep 2010 - May 2014"
        ],
    "workProjects": [
        "MS Excel Content Layout | Accusoft/Snowbound | JAVA",
        "Largest Project. Created a system to layout MS Excel Spreadsheets. Includes sheets, cells, headers, footers, image anchors, fonts, styles, alignment, and conditional formatting.",
        "DrawingML Charts for MS Office | Accusoft/Snowbound | JAVA",
        "Created systems and data structures for charts in MS Office. Included line, bar, area, circular, and combination plots. Included legends, titles, axis labels, and data labels",
        "JFreeChart for MS Office Charts | Accusoft/Snowbound | JAVA",
        "Used JFreeChart to expand the functionality of my other project, DrawingML charts for MS Office. Used to quickly make 3D charts using systems and knowledge from previous chart implementation.",
        "MS Excel Custom Number Formats | Accusoft/Snowbound | JAVA, C#",
        "Created a system to display content in cells of Excel spreadsheets based on a real number input and custom string format. Numbers can be displayed as dates, times, fractions, and scientific notation, in addition to following different rules depending on if they are positive, negative or zero."
        ],
    "personalProjects": [
        'TOOM WORLD',
        'Designed and programmed a 3D video game in one month. Part of a community game jam on itch.io Team size: four. Written in Godot with GDscript.',
        '<a>https://tavoe.itch.io/toom-world<a>Play on itch.io',
        'Bingo Web App',
        'Wrote server and backend for fun and learning purposes. Used Node.js, express.js, SQLite3.'
        ],
    "skills": [
        "Java | C# | JavaScript | C++ | GDScript | Python | SQLite3 | Node.js | Git | JFreeChart | Unity 3D | Godot | IntelliJ | Visual Studio | VS Code | Maven | Teamcity | Microsoft Office"
        ],
    "other": [
        "Martial Artist | Video Game Collector | Downhill Skiier | Small Electronics Tinkerer | Science Fiction/Fantasy Reader"
        ],
    "links" : [
        '<a>Brogna, Tyler - Resume.pdf<a>PDF Resume',
        '<a>./fullresume.html<a>HTML Resume',
        '<a>https://github.com/tybrogna<a>Github',
        '<a>https://www.linkedin.com/in/tyler-brogna-43468683/<a>LinkedIn',
        ],
    "credits" : [
        '<a>https://www.kreativekorp.com/software/fonts/apple2/<a>KreativeKorp Ultimate Apple II Font, used under KREATIVE SOFTWARE RELAY FONTS FREE USE LICENSE version 1.2f',
        '<a>https://getbootstrap.com/<a>Bootstrap'
        ]
}