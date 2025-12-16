// let filenames = {
//         'wh' : 'workHistory', //0
//         'wp' : 'workProjects', //1
//         'pp' : 'personalProjects', //2
//         'edu' : 'education', //3
//         'sk' : 'skills', //4
//         'o' : 'other', //5
//         'a' : 'links', //6
//         'wpmse' : 'workProjectMSExcel',
//         'wp1' : 'workProjectsLinks'
//     }

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
        'LOAD name',
        'LIST'
    ],
    "resumeContent": [
        '[ ] cv',
        '[ ] edu',
        '[ ] lin',
        '[ ] oth',
        '[ ] per',
        '[ ] ski',
        '[ ] wor',
        '[ ] wpl',
    ],
    "workHistoryLinks": [
        "<z>workAccusoft<z>Accusoft | Software Engineer III | Jan 2018 - Jul 2023 | Tampa Bay, FL.",
        "<z>workConduent<z>Conduent Legal and Compliance Services | Software Developer | Jul 2015 - Jun 2017 | Albany, NY.",
        "<z>workEpic<z>Epic Medical Systems | Quality Assurance | Jul 2014 - Jan 2015 | Verona, WI.",
        "<z>workJADAK<z>Internship: JADAK",
        "<z>workOptionsoft<z>Internship: Optionsoft",
    ],
    "workAccusoft": [
        "<t>Accusoft | Software Engineer III | Jan 2018 - Jul 2023 | Tampa Bay, FL.",
        "Accusoft acquired Snowbound Software in Sep 2022, and I accepted a job to continue working for them, in the same role. Worked on a team to maintain and expand functionality of a document processing API, used to convert document formats into raster and vector images. Helped write automated tests and helped maintained the CI/CD pipeline.",
    ],
    "workConduent": [
        "<t>Conduent Legal and Compliance Services | Software Developer | Jul 2015 - Jun 2017 | Albany, NY.",
        "Created web apps with PHP for data compilation, for internal use. Created automated testing frameworks for a website using Selenium. Wrote PL/SQL commands.",
    ],
    "workEpic": [
        "<t>Epic Medical Systems | Quality Assurance | Jul 2014 - Jan 2015 | Verona, WI.",
        "Tested and reported bugs on Epic products for quality assurance. Learned how to install, use, support, Epic products, and how to teach the process to doctors.",
    ],
    "workJADAK": [
        "<t>Internship: JADAK",
        "4 Month winter co-op writing embedded software and performing QA tasks.",
    ],
    "workOptionsoft": [
        "<t> Internship: Optionsoft",
        "3 Month summer co-op writing web test automation software with C# and Selenium."
    ],
    "education": [
        "Rochester Institute of Technology",
        "Bachelor of Science in Game Design and Development | Minor in Digital Literature and Technology",
        "Graduated May 2014"
    ],
    "workProjectsLinks": [
        "<z>workProjectGoogleAPI<z> Google API Mail Tagger | Shah, Dixit & Associates | Node.js | 2024",
        "<z>workProjectCharts<z>drawingML Content Layout for MS Office Charts | Accusoft/Snowbound | Java | 2022",
        "<z>workProjectMSExcel<z> MS Excel Content Layout | Accusoft/Snowbound | Java | 2021",
        "<z>workProjectThread<z> Update API to support concurrent processes | Accusoft/Snowbound | Java | 2020",
        "<z>workProjectXML<z>DOM and SAX XML Parsing | Accusoft/Snowbound | Java, C# | 2019",
        "<z>workProjectNumberFormats<z>MS Excel Custom Number Formats | Accusoft/Snowbound | Java, C# | 2018",
        "<z>workProjectPHP<z>PHP Website | Conduent Legal | PHP, PL/SQL, Javascript | 2017",
        "<z>workProjectSelenium<z>Automated Web Testing with Selenium | Conduent Legal | C# | 2016",
    ],
    "workProjectGoogleAPI": [
        "<t>Google API Mail Tagger",
        "Using Google API Cloud Console, node.js, and the company\'s MySQL database, I wrote a script to read and tag gmails. The appropriate tag was determined by the sender, and matched with an Associate in the company\'s database.",
        "Written as a part of a two week consulting job."
    ],
    "workProjectCharts": [
        "<t>drawingML Content Layout for MS Office Charts",
        "The second largest, and maybe more interesting project. Created systems and data structures for charts in MS Office. Included line, bar, area, circular, and combination plots. Included legends, titles, axis labels, and data labels. The resulting system was versatile and accurate, for the charts covered. During this project, I learned a lot about statistics and data visualization, which has transferred well to using apps like JFreeChart and D3.js.",
        "And speaking of JFreeChart, we eventually added JFreeChart to the chart project. I used this to expand the functionality of my other project, DrawingML charts for MS Office. Used to quickly make all the charts I wasn\'t able to cover with my hand-made system. Like 3D plots, and weird ones like bubble or tree map.",
        "The skills I used here were an extension of those I learned in the MS Excel Content Layout project. A combination of planning, iteration, and integrating team member\'s work."
    ],
    "workProjectMSExcel": [
        "<t>MS Excel Content Layout",
        "The project I\'m most proud of. Created a system to layout MS Excel Spreadsheets. Includes sheets, cells, headers, footers, image anchors, fonts, styles, alignment, and conditional formatting. If you don\'t know some of those features, well, I was the same before I started the project.",
        "It was a massive undertaking. A true test of my ability to create everything a giant feature and system needs. Including the administrative work of keeping managers updated, integrating team members work, and a post-work presentation.",
        "In the end, the results were better than expected (after bug fixes and iteration, of course). The new rendering system was faster, crashed less, used less memory and produced more accurate results.",
    ],
    "workProjectThread": [
        "<t>Multithreaded API Update",
        "Updated one of the company\'s major products to a multithreaded API, featuring better error report, increased speed, and additional API endpoints based on user feedback.",
        "This was something of a crash course in multithreaded programming for desktop applications. The team and I communicated constantly to learn what we needed to solve the problem.",
        "After anticipated roadblocks, all promises ended up fulfilled, and with a measurable (and noticeable) increase in performance."
    ],
    "workProjectXML": [
        "<t>DOM and SAX XML Parsing",
        "Created consistent, fast and extensible XML parsing libraries to handle regular schemas, templates, and regular XML, both DOM and SAX parsers.",
    ],
    "workProjectNumberFormats": [
        "<t>MS Excel Custom Number Formats",
        "Created a system to display content in cells of Excel spreadsheets based on a real number input and custom string format.",
        "Numbers can be displayed as dates, times, fractions, and scientific notation, in addition to following different rules depending on if they are positive, negative or zero. Covered different locales as well.",
        "It felt a little like writing my own strange regex implementation. And if you\'re thinking what I\'m thinking, using regex to solve this problem was the first thing I tried."
    ],
    "workProjectPHP": [
        "<t>PHP Website",
        "Created to search, browse, and compile data pulled from an interal SQL database. Included multiple views and filters for the data retrieved.",
        "Was my first exposure to both building a website from (almost) scratch, and front-end development. You might be able to tell from this site, but I found it kinda fun."
    ],
    "workProjectSelenium": [
        "<t>Automated Web Testing with Selenium",
        "Designed an app to run automated tests on Conduent's main web product.",
        "The instructions that ran the functions I wrote were written in Excel. I worked with the QA team to devise the excel commands, and the functions that those commands would run."
    ],
    "personalProjectLinks": [
        '<z>personalProjectBingo<z>Bingo Web App | node.js + other tools | 2026',
        '<z>personalProjectWebScraper<z>Python Web Scraper | Python | 2024',
        '<z>personalProjectWindmillSlam<z>Game Jam: Windmill Slam | Godot 4 | 2023',
        '<z>personalProjectToomWorld<z>Game Jam: TOOM WORLD | Godot 3 | 2022',
        '<z>personalProjectCube<z>Magic: The Gathering Cube | Google Sheets | 2024',
        '<z>personalProjectPortfolio<z>This Website | JavaScript | 2023-2024',
    ],
    "personalProjectBingo": [
        "<t>The Game Awards Bingo Web App",
        "<a>https://tga.zone<a> View Online at tga.zone",
        "<a>https://github.com/tybrogna/tga-bingo/<a> View source on Github",
        "Wrote server and backend for fun and learning purposes. The \"fun\" comes in from a, uh... Tradition? Where people would create a bingo card to try and guess what would happen at the erstwhile games industry press expo, E3. You guess what's going to be announced or happen at the show, and fill out the card. About a dozen friends and acquaintances would jump in discord and play. The learning comes from all the new things I used to create this. The build pipeline is done with Oracle Cloud and Docker Compose. For the backend, I used Vite, Node.js, express.js, nginx, and postgres. And the frontend is built with Preact, Bootstrap, and JavaScript. There's even a form I made to create bingo tiles easier.",
    ],
    "personalProjectWebScraper": [
        "<t>GameFAQs Web Scraper",
        "<a>https://github.com/tybrogna/gamefaqs_scraper<a>View Python Web Scraper on Github",
        "A web scraper to copy all the content from gamefaqs.com. A project for me to learn python. It saves its own progress, corrects broken links, validates scraped pages, and even has a GUI built with tkinter.",
        "Thanks to this, Python easily became one of my favorite languages. I also learned that you need to have discipline, since it can be very easy to confuse yourself if you\'re not explicit in your instructions."
    ],
    "personalProjectWindmillSlam": [
        '<t>Windmill Slam',
        '<a>https://tavoe.itch.io/windmillslam<a>Play Windmill Slam on itch.io',
        'A rogue-like deckbuilding card battle game. I programmed card effects, UI elements, and graphics effects. I distinctly remember learning about Godot\'s particle systems and making pop up notifications work with the signal system.',
        'Made in three days with a team of three. The version you see on itch.io is the result of a couple more days of polish and bug fixing.'
    ],
    "personalProjectToomWorld": [
        "<t>TOOM WORLD",
        "<a>https://tavoe.itch.io/toom-world<a>Play TOOM WORLD on itch.io",
        "A 3d first-person metroidvania shooter. I wrote the character controller, designed levels rooms, programmed weapons, powers, and enemies. Written in Godot 3 with GDscript.",
        "The responsibility for both programming how the player controlled and the levels to challenge their abilites was an incredible feeling. I ended up making the levels too hard because of that!",
        "Result of a game jam on a team of four, over one month."
    ],
    "personalProjectCube": [
        "<a>https://cubecobra.com/cube/overview/neo-mtg<a>View Neo Magic: The Gathering Cube on CubeCobra",
        "Designed a 600 card Magic: The Gathering Cube. Not exactly a technical project, but I made extensive use of Google Sheets for tracking and testing. Plus, it was fun to design, and it\'s fun to play!",
        "A cube built out of new cards printed by Wizards of the Coast between 2015 and 2024. Meant to capture the feel of the post-Magic Origins style of card design."
    ],
    "personalProjectPortfolio": [
        '<a>https://github.com/tybrogna/tybrogna.github.io<a>This Website (Github)',
        'Created a portfolio website to showcase my career and projects, the interactive site you see now is the second version.',
        "I based the UI off of a Apple II computer. I\'ve never used an Apple II, but a good friend of mine did, and I figured it was a suitably American retro computer for people to recognize, and me to recreate.",
        "There\'s a bunch of easter eggs based on Apple II commands that I wasted my time on. Not useful, but super fun. And it certainly spiraled out of control. Would have done things different with foresight, but when is that not true?"
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
        '<a>https://www.linkedin.com/in/tyler-brogna<a>LinkedIn',
    ],
    "credits" : [
        '<a>https://www.kreativekorp.com/software/fonts/apple2/<a>KreativeKorp Ultimate Apple II Font, used under KREATIVE SOFTWARE RELAY FONTS FREE USE LICENSE version 1.2f',
        '<a>https://getbootstrap.com/<a>Bootstrap'
    ]
}

let numFiles = Object.keys(filedata).length - 8 - 2 //minus already listed files, header and commands
filedata['resumeContent'].push('++ '+numFiles+' FILES NOT LISTED', '++ 8 TITLE(S)')

function generateFilenames() {
    //look ma a hash algorithm for idiots
    let filenames = new Map()
    Object.entries(filedata).forEach(([key, val]) => {
        let shortKey = key
        if (key.length >= 3) {
            shortKey = key.substring(0,3)
        }

        // if it doesn't fit, get the first letter of the name, and each captial letter
        if (filenames.has(shortKey)) {
            shortKey = key[0] + key.replace(/[a-z]/g, '') // thanks, https://stackoverflow.com/questions/6055152/
            shortKey = shortKey.toLowerCase()
        }

        //if it still doesn't fit, add a number to the end till it does
        if (filenames.has(shortKey)) {
            let tries = 0
            let appendKey = shortKey + tries.toString()
            while (filenames.has(appendKey)) {
                tries ++
                appendKey = shortKey + tries.toString()
            }
            shortKey = appendKey
        }

        filenames.set(shortKey, key)
        console.log(shortKey + ", " + key)
    });
    return filenames
}

function adjustLinks() {
    console.log('adjusting links')
    Object.values(filedata).forEach(dataArr => {
        dataArr.forEach((data, index) => {
            if (data.slice(0,3) === '<z>') {
                let linkText = data.substring(data.lastIndexOf('<z>') + 3)
                let hrefText = data.substring(3, data.indexOf('<z>', 3))
                hrefText = getByValue(filenames, hrefText)
                let newData = '<a>javascript:typeInput(\'LOAD ' + hrefText + '\')<a>' + linkText
                dataArr[index] = newData
            }
        })
    })
}

// https://stackoverflow.com/questions/47135661
function getByValue(map, searchValue) {
    for (let [key, value] of map.entries()) {
        if (value === searchValue) {
            return key;
        }
    }
}


let filenames = generateFilenames()
adjustLinks()