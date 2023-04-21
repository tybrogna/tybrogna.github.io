const todayObj = new Date()
const headerJSON = [
        "PORTFOLIO II",
        "TXT VERSION 3.3 &nbsp &nbsp SYSTEM ONLINE",
        todayObj.toLocaleString('default', { month: 'long', day : 'numeric', year: 'numeric'}),
        "OWNERSHIP OF TYLER BROGNA, 1992," + todayObj.toLocaleString('default', { year: 'numeric'})
    ]

const commandsJSON = [
        'CATALOG',
        'MON',
        'NOMON',
        'OPEN',
    ]

const resumeContentJSON = [
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
    ]

const workHistoryJSON = [
        "Accusoft",
        "Software Engineer III | Jan 2018 - Present | Tampa Bay, FL.",
        "Previously employed by Snowbound Sofware, acquired by Accusoft in Sep 2022. Worked on a team to maintain and expand functionality of a document processing API, used to convert document formats into raster and vector images.",
        "Conduent Legal and Compliance Services",
        "Software Developer | Jul 2015 - Jun 2017 | Albany, NY.",
        "Created web apps with PHP for data compliation, for interal use. Created automated testing frameworks for a website using Selenium."
    ]

const educationJSON = [
        "Rochester Institute of Technology",
        "Bachelor of Science in Game Design and Development | Minor in Digital Literature and Technology",
        "Sep 2010 - May 2014"
    ]

const workProjectsJSON = [
        "MS Excel Content Layout | Accusoft/Snowbound | JAVA",
        "Largest Project. Created a system to layout MS Excel Spreadsheet. Includes sheets, cells, headers, footers, image anchors, fonts, styles, alignment, and conditional formatting.",
        "DrawingML Charts for MS Office | Accusoft/Snowbound | JAVA",
        "Created systems and data structures for charts in MS Office. Included line, bar, area, circular, and combination plots. Included legends, titles, axis labels, and data labels",
        "JFreeChart for MS Office Charts | Accusoft/Snowbound | JAVA",
        "Charts again, but leveraging the power of JFreeChart. Used to quickly make 3D charts using systems and knowledge from previous chart implementation.",
        "MS Excel Custom Number Formats | Accusoft/Snowbound | JAVA, C#",
        "Number parsing and formatting system for MS Excel. Handled all real numbers, localized dates, localized times, fractions and scientific notation."
    ]

const personalProjectsJSON = [
        'TOOM WORLD',
        'Designed and programmed a 3D video game in one month. Part of a community game jam on itch.io Team size: three. Written in Godot with GDscript.',
        '<a>https://tavoe.itch.io/toom-world<a>Play on itch.io',
        'Bingo Web App',
        'Wrote server and backend to learn. Used Node.js, express.js, SQLite3.'
    ]

const skillsJSON = [
    "Java | C# | JavaScript | C++ | GDScript | Python | SQLite3 | Node.js | Git | JFreeChart | Unity 3D | Godot | IntelliJ | Visual Studio | VS Code | Maven | Teamcity | Microsoft Office"
    ]

const otherJSON = [
     "Martial Artist | Video Game Collector | Downhill Skiier | Small Electronics Tinkerer | Science Fiction/Fantasy Reader"
]

const linksJSON = [
    '<a>https://www.linkedin.com/in/tyler-brogna-43468683/<a>LinkedIn',
    '<a>Brogna, Tyler - Resume.pdf<a>Download Paper Resume',
    ]