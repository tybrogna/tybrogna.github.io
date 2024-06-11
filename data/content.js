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
        "<t>Accusoft |  Software Engineer III | Jan 2018 - Jul 2023 | Tampa Bay, FL.",
        "Accusoft acquired Snowbound Software in Sep 2022, and I accepted a job to continue working for them, in the same role. Worked on a team to maintain and expand functionality of a document processing API, used to convert document formats into raster and vector images. Helped write automated tests and helped maintained the CI/CD pipeline.",
        "<t>Conduent Legal and Compliance Services | Software Developer | Jul 2015 - Jun 2017 | Albany, NY.",
        "Created web apps with PHP for data compilation, for internal use. Created automated testing frameworks for a website using Selenium. Wrote PL/SQL commands.",
        "<t>Epic Medical Systems | Quality Assurance | Jul 2014 - Jan 2015 | Verona, WI.",
        "Tested and reported bugs on Epic products for quality assurance. Learned how to install, use, support, Epic products, and how to teach the process to doctors.",
        "<t>Internship: JADAK",
        "4 Month winter co-op writing embedded software and performing QA tasks.",
        "<t> Internship: Optionsoft",
        "3 Month summer co-op writing web test automation software with C# and Selenium."
        ],
    "education": [
        "Rochester Institute of Technology",
        "Bachelor of Science in Game Design and Development | Minor in Digital Literature and Technology",
        "Graduated May 2014"
        ],
    "workProjects": [
        "<t>MS Excel Content Layout | Accusoft/Snowbound | Java",
        "The project I\'m most proud of. Created a system to layout MS Excel Spreadsheets. Includes sheets, cells, headers, footers, image anchors, fonts, styles, alignment, and conditional formatting. It was a massive undertaking, and in the end, the results were better than expected (after bug fixes and iteration, of course). The new rendering system performed faster, crashed less, used less memory and produced more accurate results.",
        "<t>DrawingML Charts for MS Office | Accusoft/Snowbound | Java",
        "The second largest, and maybe more interesting project. Created systems and data structures for charts in MS Office. Included line, bar, area, circular, and combination plots. Included legends, titles, axis labels, and data labels. The resulting system was versatile and accurate, for the charts covered. During this project, I learned a lot about statistics and data visualization, which has transferred well to using apps like JFreeChart and D3.js.",
        "<t>JFreeChart for MS Office Charts | Accusoft/Snowbound | Java",
        "Speaking of JFreeChart! I used this to expand the functionality of my other project, DrawingML charts for MS Office. Used to quickly make all the charts I wasn\'t able to cover with my hand-made system. Like 3D plots, and weird ones like bubble or tree map.",
        "<t>API Mulithreading Update",
        "Updated one of the company’s major products to a multithreaded API, featuring better error report, increased speed, and additional API endpoints based on user feedback.",
        "<t>MS Excel Custom Number Formats | Accusoft/Snowbound | Java, C#",
        "Created a system to display content in cells of Excel spreadsheets based on a real number input and custom string format. Numbers can be displayed as dates, times, fractions, and scientific notation, in addition to following different rules depending on if they are positive, negative or zero. Covered different locales as well.",
        "<t>DOM and SAX XML Parsing | Accusoft/Snowbound | Java, C#",
        "Created consistent, fast and extensible XML parsing libraries to handle regular schemas, templates, and regular XML, both DOM and SAX parsers.",
        "<t>PHP Website | Conduent Legal | PHP, PL/SQL, Javascript",
        "Created to search, browse, and compile data pulled from an interal SQL database. Included multiple views and filters for the data retrieved.",
        "<t>Automated Web Testing with Selenium | Conduent Legal | C#",
        "Designed an app to run automated tests on Conduent's main web product. Wrote tests for the app using Excel."
        ],
    "personalProjects": [
        '<a>https://github.com/tybrogna/gamefaqs_scraper<a>Python Web Scraper (Github)',
        'A web scraper to copy all the content from gamefaqs.com. A project for me to learn python. It saves its own progress, corrects broken links, validates scraped pages, and even has a GUI built with tkinter.',
        '<a>https://tavoe.itch.io/windmillslam<a>Game Jam: Windmill Slam (itch.io)',
        'A rogue-like deckbuilding card battle game. Result of a game jam on a team of three, over three days. I programmed card effects, UI elements, and graphics effects. Written in Godot 4 with GDScript.',
        '<a>https://tavoe.itch.io/toom-world<a>Game Jam: TOOM WORLD (itch.io)',
        'A 3d first-person metroidvania shooter. Result of a game jam on a team of four, over one month. I wrote the character controller, designed levels rooms, programmed weapons, powers, and enemies. Written in Godot 3 with GDscript.',
        '<t>Bingo Web App',
        'Wrote server and backend for fun and learning purposes. Used Node.js, express.js, SQLite3.',
        '<a>https://cubecobra.com/cube/overview/neo-mtg<a>Magic: The Gathering Cube (View on CubeCobra)',
        'Designed a 600 card Magic: The Gathering Cube. Not exactly a technical project, but I made extensive use of Google Sheets for tracking and testing. Plus, it was fun to design, and it\'s fun to play!',
        '<a>https://github.com/tybrogna/tybrogna.github.io<a>This Website (Github)',
        'Created a portfolio website to showcase my career and projects, the interactive site you see now is the second version. Used Javascript.'
        ],
    "skills": [
        "Java | C# | JavaScript | C++ | cmake | GDScript | Python | SQLite3 | Node.js | Git | JFreeChart | Unity 3D | Godot | IntelliJ | Visual Studio | VS Code | Maven | Teamcity | WordPress | Google API | Microsoft Office"
        ],
    "other": [
        "Martial Artist | Video Game Collector | Downhill Skier | Small Electronics Tinkerer | Science Fiction/Fantasy Reader"
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