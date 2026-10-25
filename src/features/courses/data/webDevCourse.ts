import { CourseData } from '../../../types/course.types';

export const webDevCourse: CourseData = {
  id: 'webdev',
  titleEn: 'Basic Web Development',
  titleMy: 'အခြေခံ ဝဘ်ဖွံ့ဖြိုးရေး (Web Development)',
  badgeEmoji: '🌐',
  targetAgeEn: 'Ages 10+ & Beginners',
  targetAgeMy: 'အသက် ၁၀ နှစ်နှင့်အထက် နှင့် စတင်လေ့လာသူများ',
  descriptionEn: 'Learn how to build real websites from scratch! Master the holy trinity of the web: HTML for structure, CSS for styling and design, and JavaScript for dynamic interactivity.',
  descriptionMy: 'တကယ့် Website များကို အစမှအဆုံး ကိုယ်တိုင် တည်ဆောက်နည်းကို လေ့လာပါ! အဆောက်အအုံဖွဲ့စည်းပုံအတွက် HTML၊ လှပသော ဒီဇိုင်းအတွက် CSS နှင့် အပြန်အလှန် လှုပ်ရှားမှုအတွက် JavaScript တို့ကို ကျွမ်းကျင်စွာ တတ်မြောက်နိုင်ပါသည်။',
  category: 'Engineering & Code',
  color: '#ffc436',
  bgLight: '#fff8e6',
  lessons: [
    // -------------------------------------------------------------------------
    // Lesson 1: How Websites Work
    // -------------------------------------------------------------------------
    {
      id: 'web-1',
      lessonNumber: 1,
      titleEn: 'How Websites Work',
      titleMy: 'Website များ မည်သို့ အလုပ်လုပ်သနည်း?',
      shortIntroEn: 'What happens in that split-second between typing a URL and seeing a webpage appear? Discover the magic of clients, servers, and HTTP.',
      shortIntroMy: 'Website လိပ်စာတစ်ခု ရိုက်ထည့်လိုက်တာနဲ့ ဖန်သားပြင်ပေါ်မှာ စာမျက်နှာ ပေါ်လာတဲ့ ကြားက စက္ကန့်ပိုင်းလေးအတွင်း ဘာတွေဖြစ်ပျက်သွားသလဲ? Clients, Servers နှင့် HTTP အကြောင်း လေ့လာကြမယ်။',
      learningObjectivesEn: [
        'Understand the Client-Server model of the World Wide Web.',
        'Learn what an IP address, Domain Name (DNS), and HTTP request are.',
        'Discover the roles of HTML, CSS, and JavaScript as the 3 building blocks of every webpage.'
      ],
      learningObjectivesMy: [
        'World Wide Web ၏ Client-Server စနစ်ကို နားလည်စေရန်။',
        'IP Address, Domain Name (DNS) နှင့် HTTP Request များ၏ အလုပ်လုပ်ပုံကို သိရှိစေရန်။',
        'Website တစ်ခု၏ အဓိက အုတ်မြစ် ၃ ခုဖြစ်သော HTML, CSS နှင့် JavaScript တို့၏ အခန်းကဏ္ဍများကို ခွဲခြားသိစေရန်။'
      ],
      explanationEn: [
        'Whenever you open Google Chrome, Safari, or Firefox and type in a web address like `https://nyanlearn.org`, you are acting as the **Client** (the requester).',
        'Your computer sends a message across the internet asking: *"Hey, can I please see the webpage files?"* That request travels through fiber optic cables and Wi-Fi to a powerful computer running 24/7 called a **Web Server**.',
        'The server finds the requested files and sends them back to your browser. Your browser then reads three core ingredients: **HTML** (the skeleton structure), **CSS** (the stylish clothes and colors), and **JavaScript** (the interactive muscles and brain). Together, they assemble into the interactive page on your screen!'
      ],
      explanationMy: [
        'Google Chrome, Safari သို့မဟုတ် Firefox ကို ဖွင့်ပြီး `https://nyanlearn.org` ဟု ရိုက်ထည့်လိုက်တိုင်း သင်သည် **Client (တောင်းဆိုသူ)** အဖြစ် ဆောင်ရွက်နေခြင်း ဖြစ်သည်။',
        'သင့်ကွန်ပျူတာက အင်တာနက်ကြိုးများနှင့် Wi-Fi လှိုင်းများမှတစ်ဆင့် *"ဟယ်လို၊ စာမျက်နှာဖိုင်တွေကို ကြည့်ခွင့်ပြုပါ"* ဟု မက်ဆေ့ခ်ျ ပို့လိုက်သည်။ အဆိုပါ တောင်းဆိုချက်သည် တစ်နေ့ ၂၄ နာရီ မနားတမ်း ဖွင့်ထားသော **Web Server** ဟုခေါ်သည့် ကွန်ပျူတာကြီးထံသို့ ရောက်ရှိသွားသည်။',
        'Server က သက်ဆိုင်ရာ ဖိုင်များကို သင့် Browser ထံ ပြန်လည် ပေးပို့သည်။ သင့် Browser က အဓိက အစိတ်အပိုင်း ၃ မျိုးကို ဖတ်ရှု တည်ဆောက်ပေးသည်: **HTML** (အရိုးခေါင်း ဖွဲ့စည်းပုံ)၊ **CSS** (လှပသော အဝတ်အစားနှင့် အရောင်အသွေး)၊ နှင့် **JavaScript** (လှုပ်ရှားတုံ့ပြန်နိုင်သော ကြွက်သားနှင့် ဉာဏ်ရည်)။ ဤ ၃ မျိုး ပေါင်းစပ်လိုက်သောအခါ ဖန်သားပြင်ပေါ်တွင် လှပသော Website အဖြစ် ပေါ်လာခြင်း ဖြစ်သည်။'
      ],
      diagram: {
        type: 'client-server-roundtrip',
        captionEn: 'Client Request -> DNS Lookup -> Web Server -> HTML, CSS, JS Response!',
        captionMy: 'Client တောင်းဆိုချက် -> DNS ရှာဖွေမှု -> Web Server -> HTML, CSS, JS ပြန်လည်ပေးပို့ခြင်း!',
        altEn: 'Diagram showing user laptop sending HTTP GET request across internet cloud to server rack which returns files',
        altMy: 'Client ကွန်ပျူတာနှင့် Web Server အကြား အချက်အလက် အပြန်အလှန် ပို့ဆောင်ပုံပြ ပုံ'
      },
      analogyEn: {
        title: 'Ordering at a Drive-Thru Restaurant',
        description: 'You are the customer in the car (the Client). You speak into the intercom box ordering a burger (the HTTP Request). The chef in the kitchen prepares your meal (the Web Server). Then the server hands you the bag with a bun, patty, and drink (the HTML, CSS, and JS files)!'
      },
      analogyMy: {
        title: 'Drive-Thru ဆိုင်တွင် အစားအစာ မှာယူခြင်း ဥပမာ',
        description: 'သင်သည် ကားပေါ်မှ ဖောက်သည် (Client) ဖြစ်သည်။ စပီကာမှတစ်ဆင့် ဘာဂါ မှာလိုက်သည် (HTTP Request)။ မီးဖိုချောင်ထဲက စားဖိုမှူးက အစားအစာ ပြင်ဆင်ပေးသည် (Web Server)။ ထို့နောက် သင့်ထံသို့ ဘာဂါ၊ အကြော်နှင့် ဖျော်ရည် ထည့်ထားသော အိတ်ကို ကမ်းပေးလိုက်သည် (HTML, CSS, JS ဖိုင်များ)!'
      },
      workedExampleEn: {
        title: 'The Trinity of a Web Button',
        scenario: 'See how HTML, CSS, and JavaScript work together on a simple "Click Me" button.',
        steps: [
          { stepNumber: 1, instruction: 'HTML sets the structure', outcome: '`<button id="btn">Click Me</button>` creates a plain, unstyled grey button.' },
          { stepNumber: 2, instruction: 'CSS adds the beauty', outcome: '`#btn { background: #6c47ff; color: white; border-radius: 12px; }` makes it bright purple and sleek.' },
          { stepNumber: 3, instruction: 'JavaScript adds interactivity', outcome: '`btn.onclick = () => alert("Hello!");` makes a cheerful popup appear when clicked.' },
          { stepNumber: 4, instruction: 'Unified experience', outcome: 'A complete, gorgeous, and interactive web element is born!' }
        ]
      },
      workedExampleMy: {
        title: 'ဝဘ် ခလုတ်လေးတစ်ခု၏ အခြေခံ ၃ မျိုး ဥပမာ',
        scenario: '"Click Me" ခလုတ်လေးတစ်ခုတွင် HTML, CSS, JS တို့ ပူးပေါင်းဆောင်ရွက်ပုံ။',
        steps: [
          { stepNumber: 1, instruction: 'HTML က ဖွဲ့စည်းပုံကို သတ်မှတ်သည်', outcome: '`<button id="btn">Click Me</button>` သည် ရိုးရိုး မီးခိုးရောင် ခလုတ်တစ်ခုကို ဖန်တီးပေးသည်။' },
          { stepNumber: 2, instruction: 'CSS က အလှဆင်ပေးသည်', outcome: '`#btn { background: #6c47ff; color: white; border-radius: 12px; }` က ခရမ်းရောင် လှလှလေး ပြောင်းပေးသည်။' },
          { stepNumber: 3, instruction: 'JavaScript က လှုပ်ရှားမှု ထည့်ပေးသည်', outcome: '`btn.onclick = () => alert("မင်္ဂလာပါ!");` က နှိပ်လိုက်သည့်အခါ နှုတ်ဆက်စာသား ပေါ်လာစေသည်။' },
          { stepNumber: 4, instruction: 'ပြီးပြည့်စုံသော ရလဒ်', outcome: 'လှပပြီး အသုံးပြုနိုင်သော ဝဘ်ခလုတ်လေးတစ်ခု အောင်မြင်စွာ ဖြစ်ပေါ်လာသည်။' }
        ]
      },
      activity: {
        type: 'classification-sorter',
        titleEn: 'HTML vs CSS vs JavaScript Sorter',
        titleMy: 'HTML, CSS, JS အခန်းကဏ္ဍ ခွဲခြားခြင်း',
        instructionsEn: 'Drag each web building block responsibility to HTML, CSS, or JavaScript!',
        instructionsMy: 'တာဝန်တစ်ခုစီကို သက်ဆိုင်ရာ HTML, CSS သို့မဟုတ် JavaScript အောက်သို့ ခွဲခြားထည့်ပါ။',
        initialData: [
          { task: 'Defines headings, paragraphs, and image tags', category: 'html' },
          { task: 'Sets background colors, margins, and custom fonts', category: 'css' },
          { task: 'Handles button clicks and plays sound effects', category: 'js' },
          { task: 'Creates hyperlinks that connect to other pages', category: 'html' }
        ]
      },
      quizQuestions: [
        {
          id: 'q-w1-1',
          questionEn: 'In web architecture, who is the "Client"?',
          questionMy: 'Web ဗိသုကာတွင် "Client" ဆိုသည်မှာ အဘယ်သူနည်း?',
          options: [
            { id: 'a', textEn: 'The user’s web browser (like Chrome or Safari) requesting webpages', textMy: 'စာမျက်နှာများကို တောင်းဆိုသော အသုံးပြုသူ၏ Web Browser (Chrome သို့မဟုတ် Safari)' },
            { id: 'b', textEn: 'The power cord plugged into the wall', textMy: 'နံရံတွင် ထိုးထားသော လျှပ်စစ်မီးကြိုး' },
            { id: 'c', textEn: 'A factory that manufactures computer mice', textMy: 'Mouse ထုတ်လုပ်သော စက်ရုံ' },
            { id: 'd', textEn: 'A submarine cable under the Pacific ocean', textMy: 'ပင်လယ်ကြမ်းပြင်ရှိ ရေအောက် ကေဘယ်ကြိုး' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Correct! The client is your browser software initiating requests to servers.',
          explanationMy: 'မှန်ကန်ပါတယ်! Client ဆိုသည်မှာ Server ထံသို့ စာမျက်နှာများ တောင်းဆိုသော သင့် Browser ဖြစ်သည်။'
        },
        {
          id: 'q-w1-2',
          questionEn: 'What are the three core programming technologies of the World Wide Web?',
          questionMy: 'World Wide Web ၏ အဓိက အခြေခံ နည်းပညာ ၃ မျိုးမှာ အဘယ်နည်း?',
          options: [
            { id: 'a', textEn: 'HTML (Structure), CSS (Styling), and JavaScript (Interactivity)', textMy: 'HTML (ဖွဲ့စည်းပုံ), CSS (အလှဆင်ခြင်း), JavaScript (လှုပ်ရှားအပြန်အလှန်ပြုမှု)' },
            { id: 'b', textEn: 'Word, Excel, and PowerPoint', textMy: 'Word, Excel, and PowerPoint' },
            { id: 'c', textEn: 'Bluetooth, Wi-Fi, and Radio waves', textMy: 'Bluetooth, Wi-Fi, and Radio waves' },
            { id: 'd', textEn: 'Camera, Microphone, and Speaker', textMy: 'Camera, Microphone, and Speaker' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Spot on! HTML, CSS, and JS work together as the holy trinity of web development.',
          explanationMy: 'မှန်ပါတယ်! HTML, CSS နှင့် JS တို့သည် Web ရေးဆွဲရာတွင် မရှိမဖြစ် အဓိက အုတ်မြစ် ၃ ခု ဖြစ်ကြသည်။'
        },
        {
          id: 'q-w1-3',
          questionEn: 'What role does a "Web Server" play?',
          questionMy: '"Web Server" သည် မည်သည့် အခန်းကဏ္ဍမှ ပါဝင်သနည်း?',
          options: [
            { id: 'a', textEn: 'It stores website files and serves them across the internet when clients request them', textMy: 'Website ဖိုင်များကို သိမ်းဆည်းထားပြီး Client များ တောင်းဆိုသောအခါ ပေးပို့ပေးသည်' },
            { id: 'b', textEn: 'It cleans your computer screen with liquid soap', textMy: 'ကွန်ပျူတာ မျက်နှာပြင်ကို ဆပ်ပြာဖြင့် သန့်ရှင်းပေးသည်' },
            { id: 'c', textEn: 'It turns off your home Wi-Fi at night', textMy: 'ညဘက်တွင် Wi-Fi ကို ပိတ်ပစ်သည်' },
            { id: 'd', textEn: 'It types keyboard keys automatically', textMy: 'ကီးဘုတ်ကို အလိုအလျောက် ရိုက်ပေးသည်' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Awesome! Web servers host website data and respond to incoming HTTP requests 24/7.',
          explanationMy: 'အရမ်းတော်တယ်! Web Server များသည် ဖိုင်များကို အင်တာနက်ပေါ်တွင် ၂၄ နာရီ သိမ်းဆည်း၍ ဝန်ဆောင်မှုပေးသော ကွန်ပျူတာများ ဖြစ်ကြသည်။'
        }
      ],
      summaryEn: [
        'Websites run on a Client-Server architecture over the internet.',
        'Clients (browsers) request pages; Web Servers store and serve the files.',
        'Every website is built with HTML (skeleton), CSS (skin/style), and JavaScript (muscles/brain).'
      ],
      summaryMy: [
        'Website များသည် Client-Server စနစ်ဖြင့် အင်တာနက်ပေါ်တွင် အလုပ်လုပ်ကြသည်။',
        'Client (Browser) က တောင်းဆိုပြီး Web Server က ဖိုင်များကို ပြန်လည်ပေးပို့သည်။',
        'Website တိုင်းကို HTML (အရိုးခေါင်း)၊ CSS (အသားအရည်/အဝတ်အစား) နှင့် JavaScript (ကြွက်သား/ဦးနှောက်) ဖြင့် တည်ဆောက်ထားသည်။'
      ]
    },

    // -------------------------------------------------------------------------
    // Lesson 2: HTML and Page Structure
    // -------------------------------------------------------------------------
    {
      id: 'web-2',
      lessonNumber: 2,
      titleEn: 'HTML and Page Structure',
      titleMy: 'HTML နှင့် စာမျက်နှာ ဖွဲ့စည်းပုံ',
      shortIntroEn: 'HTML is the universal building skeleton of the web! Learn about tags, elements, and how to structure a webpage.',
      shortIntroMy: 'HTML ဆိုတာ ဝဘ်လောကရဲ့ တည်ဆောက်မှု အရိုးခေါင်းဖြစ်ပါတယ်! Tags တွေ၊ Elements တွေနဲ့ စာမျက်နှာ ဖွဲ့စည်းပုံကို စတင်လေ့လာကြမယ်။',
      learningObjectivesEn: [
        'Understand what HTML stands for (HyperText Markup Language).',
        'Learn the anatomy of an HTML element: Opening Tag, Content, and Closing Tag.',
        'Understand the basic document structure: `<!DOCTYPE html>`, `<html>`, `<head>`, and `<body>`.'
      ],
      learningObjectivesMy: [
        'HTML (HyperText Markup Language) ၏ အဓိပ္ပာယ်ကို နားလည်စေရန်။',
        'HTML Element တစ်ခု၏ ဖွဲ့စည်းပုံ: အဖွင့် Tag (`<tag>`), အကြောင်းအရာ (Content) နှင့် အပိတ် Tag (`</tag>`) တို့ကို သိရှိစေရန်။',
        'အခြေခံ စာမျက်နှာ ဖွဲ့စည်းပုံ: `<!DOCTYPE html>`, `<html>`, `<head>` နှင့် `<body>` တို့ကို နားလည်စေရန်။'
      ],
      explanationEn: [
        '**HTML** stands for **HyperText Markup Language**. It is not a programming language like Python that does math — it is a **Markup Language** that labels and organizes content on a page.',
        'HTML works using **Tags** enclosed in angle brackets: `<tagname>`. Most tags travel in pairs: an **Opening Tag** (like `<p>`) and a **Closing Tag** with a forward slash (like `</p>`). The text inside the sandwich is the element’s content!',
        'Every webpage has two main chambers: 1. The `<head>` (the backstage area where title and settings live, invisible on the page), and 2. The `<body>` (the visible stage where everything you see — text, buttons, pictures — actually appears).'
      ],
      explanationMy: [
        '**HTML** ၏ အပြည့်အစုံမှာ **HyperText Markup Language** ဖြစ်သည်။ ၎င်းသည် Python ကဲ့သို့ သင်္ချာတွက်သော ဘာသာစကားမဟုတ်ဘဲ စာမျက်နှာပေါ်ရှိ အကြောင်းအရာများကို အညွှန်းတပ်ပြီး နေရာချပေးသော **Markup Language** ဖြစ်သည်။',
        'HTML သည် ထောင့်ချိုးကွင်းအတွင်း ရေးရသော **Tags** များကို အသုံးပြုသည်: `<tagname>`။ Tag အများစုသည် အတွဲလိုက် လာလေ့ရှိသည်: **အဖွင့် Tag** (ဥပမာ `<p>`) နှင့် မျဉ်းစောင်းပါသော **အပိတ် Tag** (ဥပမာ `</p>`)။ အလယ်တွင် ထည့်ထားသော စာသားသည် ၎င်း Element ၏ အကြောင်းအရာ ဖြစ်သည်။',
        'စာမျက်နှာတိုင်းတွင် အဓိက အခန်း ၂ ခန်း ရှိသည်: ၁။ `<head>` (ခေါင်းစဉ်နှင့် ဆက်တင်များပါပြီး စာမျက်နှာပေါ်တွင် တိုက်ရိုက် မမြင်ရသော အပိုင်း)၊ ၂။ `<body>` (စာသားများ၊ ခလုတ်များ၊ ရုပ်ပုံများ အားလုံး မြင်တွေ့ရသော မျက်နှာစာ အပိုင်း)။'
      ],
      diagram: {
        type: 'html-element-anatomy',
        captionEn: 'Element Anatomy: <p> (Opening Tag) + "Hello World" (Content) + </p> (Closing Tag)!',
        captionMy: 'Element ဖွဲ့စည်းပုံ: <p> (အဖွင့် Tag) + "မင်္ဂလာပါ" (အကြောင်းအရာ) + </p> (အပိတ် Tag)!',
        altEn: 'Diagram breaking down an HTML paragraph element into opening tag, text content, and closing tag',
        altMy: 'HTML Element တစ်ခု၏ အဖွင့်၊ အကြောင်းအရာနှင့် အပိတ် အစိတ်အပိုင်းများ ပြသထားသော ပုံ'
      },
      analogyEn: {
        title: 'Building with Cardboard Storage Boxes',
        description: 'Think of an HTML document like nested cardboard gift boxes: The biggest outer box is `<html>`. Inside it are two boxes: `<head>` (for the label and gift receipt) and `<body>` (holding all the actual wonderful toys and treats inside)!'
      },
      analogyMy: {
        title: 'လက်ဆောင် သေတ္တာဆင့်များ ဥပမာ',
        description: 'HTML စာမျက်နှာသည် တစ်ခုထဲတစ်ခု ထပ်ထားသော သေတ္တာများနှင့် တူပါသည်: အကြီးဆုံး အပြင်သေတ္တာမှာ `<html>` ဖြစ်သည်။ ၎င်းအတွင်း၌ သေတ္တာ ၂ လုံး ရှိသည်: `<head>` (တံဆိပ်နှင့် ဘောက်ချာ ထည့်ရန်) နှင့် `<body>` (တကယ့် ကစားစရာများနှင့် လက်ဆောင်များ ထည့်ထားသော အပိုင်း) တို့ ဖြစ်ကြသည်။'
      },
      workedExampleEn: {
        title: 'Your First Complete HTML Document',
        scenario: 'A clean, standards-compliant HTML template.',
        steps: [
          { stepNumber: 1, instruction: '<!DOCTYPE html>', outcome: 'Tells the browser: "This is a modern HTML5 document!"' },
          { stepNumber: 2, instruction: '<html lang="en">', outcome: 'The root container wrapping the entire website.' },
          { stepNumber: 3, instruction: '<head><title>My Adventure</title></head>', outcome: 'Sets the browser tab title text.' },
          { stepNumber: 4, instruction: '<body><h1>Welcome!</h1><p>Hello coder!</p></body>', outcome: 'Displays a large bold heading and friendly text on screen.' }
        ]
      },
      workedExampleMy: {
        title: 'ပထမဆုံး ပြည့်စုံသော HTML စာရွက်စာတမ်း ဥပမာ',
        scenario: 'ခေတ်မီ စံချိန်စံညွှန်းမီ HTML ပုံစံတစ်ခု တည်ဆောက်ခြင်း။',
        steps: [
          { stepNumber: 1, instruction: '<!DOCTYPE html>', outcome: 'Browser အား "ဒါဟာ ခေတ်မီ HTML5 စာမျက်နှာ ဖြစ်တယ်" ဟု အသိပေးသည်။' },
          { stepNumber: 2, instruction: '<html lang="my">', outcome: 'Website တစ်ခုလုံးကို ထွေးပွေ့ထားသော အဓိက အိတ်ကြီး။' },
          { stepNumber: 3, instruction: '<head><title>ကျွန်ုပ်၏ ဝဘ်ဆိုဒ်</title></head>', outcome: 'Browser Tab ပေါ်တွင် ပြသပေးမည့် ခေါင်းစဉ်ကို သတ်မှတ်သည်။' },
          { stepNumber: 4, instruction: '<body><h1>ကြိုဆိုပါတယ်!</h1><p>မင်္ဂလာပါ Coder လေး!</p></body>', outcome: 'ဖန်သားပြင်ပေါ်တွင် ကြီးမားသော ခေါင်းစဉ်ကြီးနှင့် စာပိုဒ် ပေါ်လာသည်။' }
        ]
      },
      activity: {
        type: 'code-sandbox',
        titleEn: 'HTML Sandbox: My First Webpage',
        titleMy: 'HTML စမ်းသပ်ခန်း: ပထမဆုံး စာမျက်နှာ ဖန်တီးပါ',
        instructionsEn: 'Type your own name inside the `<h1>` tag in the editor, click Run, and watch your live webpage update!',
        instructionsMy: '`<h1>` Tag အတွင်း မိမိအမည်ကို ရိုက်ထည့်ပြီး Run ခလုတ်ကို နှိပ်ကာ တိုက်ရိုက် ကြည့်ရှုပါ။',
        initialData: {
          html: '<!DOCTYPE html>\n<html>\n  <head>\n    <title>My First Site</title>\n  </head>\n  <body>\n    <h1>Welcome to My Code Page!</h1>\n    <p>I am learning HTML on Nyan Learn.</p>\n  </body>\n</html>',
          css: 'body { font-family: sans-serif; background: #f0edff; padding: 20px; color: #1e2448; }\nh1 { color: #6c47ff; }',
          js: '// No JavaScript needed yet!'
        }
      },
      quizQuestions: [
        {
          id: 'q-w2-1',
          questionEn: 'What does "HTML" stand for?',
          questionMy: '"HTML" ၏ အပြည့်အစုံမှာ အဘယ်နည်း?',
          options: [
            { id: 'a', textEn: 'HyperText Markup Language', textMy: 'HyperText Markup Language' },
            { id: 'b', textEn: 'High Tech Modern Laptop', textMy: 'High Tech Modern Laptop' },
            { id: 'c', textEn: 'Home Tool Math Level', textMy: 'Home Tool Math Level' },
            { id: 'd', textEn: 'Hyper Transfer Mail Link', textMy: 'Hyper Transfer Mail Link' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Correct! HTML stands for HyperText Markup Language.',
          explanationMy: 'မှန်ကန်ပါတယ်! HTML ၏ အပြည့်အစုံမှာ HyperText Markup Language ဖြစ်သည်။'
        },
        {
          id: 'q-w2-2',
          questionEn: 'How do you correctly write a closing paragraph tag in HTML?',
          questionMy: 'HTML တွင် စာပိုဒ် အပိတ် Tag ကို မည်သို့ မှန်ကန်စွာ ရေးသားရမည်နည်း?',
          options: [
            { id: 'a', textEn: '</p>', textMy: '</p>' },
            { id: 'b', textEn: '<p/>', textMy: '<p/>' },
            { id: 'c', textEn: '<close p>', textMy: '<close p>' },
            { id: 'd', textEn: '[/paragraph]', textMy: '[/paragraph]' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Spot on! Standard closing tags use a forward slash before the tag name: `</p>`.',
          explanationMy: 'မှန်ပါတယ်! အပိတ် Tag များတွင် ရှေ့၌ မျဉ်းစောင်း `/` ထည့်သွင်းရပါသည်: `</p>`။'
        },
        {
          id: 'q-w2-3',
          questionEn: 'Which HTML section contains elements that are visible to the user on the screen?',
          questionMy: 'အသုံးပြုသူက မျက်နှာပြင်ပေါ်တွင် အမှန်တကယ် မြင်တွေ့ရမည့် အရာများကို မည်သည့် HTML အပိုင်းထဲတွင် ထည့်ရသနည်း?',
          options: [
            { id: 'a', textEn: '<body>', textMy: '<body>' },
            { id: 'b', textEn: '<head>', textMy: '<head>' },
            { id: 'c', textEn: '<title>', textMy: '<title>' },
            { id: 'd', textEn: '<meta>', textMy: '<meta>' },
          ],
          correctOptionId: 'a',
          explanationEn: 'Awesome! The `<body>` contains all visual content, while the `<head>` stores backstage metadata.',
          explanationMy: 'အရမ်းတော်တယ်! မြင်တွေ့ရသော အရာအားလုံးသည် `<body>` အတွင်း၌ တည်ရှိသည်။'
        }
      ],
      summaryEn: [
        'HTML provides the universal structure and skeleton for all webpages.',
        'Elements are formed by Opening Tags `<tag>`, Content, and Closing Tags `</tag>`.',
        'Visible page elements live inside `<body>`, while metadata and titles live in `<head>`.'
      ],
      summaryMy: [
        'HTML သည် ဝဘ်စာမျက်နှာအားလုံး၏ အဓိက အရိုးခေါင်းနှင့် ဖွဲ့စည်းပုံ ဖြစ်သည်။',
        'Elements များကို အဖွင့် Tag `<tag>`, အကြောင်းအရာ နှင့် အပိတ် Tag `</tag>` ဖြင့် ဖွဲ့စည်းသည်။',
        'မြင်တွေ့ရမည့် အရာများကို `<body>` ထဲတွင် ထည့်သွင်းပြီး အချက်အလက်များကို `<head>` ထဲတွင် ထားရှိသည်။'
      ]
    },

    // -------------------------------------------------------------------------
    // Lesson 3: Headings, Paragraphs, Links, and Images
    // -------------------------------------------------------------------------
    {
      id: 'web-3',
      lessonNumber: 3,
      titleEn: 'Headings, Paragraphs, Links, and Images',
      titleMy: 'ခေါင်းစဉ်များ၊ စာပိုဒ်များ၊ Links များနှင့် ရုပ်ပုံများ',
      shortIntroEn: 'Turn a blank white screen into a media-rich magazine! Learn how to create headlines, text blocks, clickable hyperlinks, and images.',
      shortIntroMy: 'စာရွက်ဖြူကြီးကို မဂ္ဂဇင်းတစ်စောင်လို လှပအောင် ဖန်တီးကြမယ်! ခေါင်းစဉ်ကြီးများ၊ စာပိုဒ်များ၊ နှိပ်နိုင်သော Link များနှင့် ဓာတ်ပုံများ ထည့်သွင်းနည်းကို လေ့လာကြမယ်။',
      learningObjectivesEn: [
        'Use heading levels `<h1>` through `<h6>` to establish document hierarchy.',
        'Create body paragraphs using `<p>`.',
        'Build hyperlinks using `<a href="...">` and embed images using `<img src="..." alt="...">`.'
      ],
      learningObjectivesMy: [
        '`<h1>` မှ `<h6>` အထိ ခေါင်းစဉ်အဆင့်ဆင့်ကို စနစ်တကျ အသုံးပြုတတ်စေရန်။',
        '`<p>` Tag ဖြင့် စာပိုဒ်များ ရေးသားနိုင်စေရန်။',
        '`<a href="...">` ဖြင့် ချိတ်ဆက်နိုင်သော Link များနှင့် `<img src="..." alt="...">` ဖြင့် ဓာတ်ပုံများ ထည့်သွင်းနိုင်စေရန်။'
      ],
      explanationEn: [
        'Newspapers and textbooks don’t just show walls of tiny text. They have big headlines, medium section titles, small body paragraphs, colorful photographs, and citations. HTML gives you these exact tools!',
        '**Headings**: HTML has six levels: `<h1>` (largest, most important) down to `<h6>` (smallest sub-heading). Each page should typically have only one main `<h1>`.',
        '**Paragraphs**: Wrap regular reading sentences in `<p>...</p>`.',
        '**Hyperlinks**: The superpower of the web is clicking from one page to another! We use the anchor tag `<a>`: `<a href="https://example.com">Visit My Site</a>`. The `href` attribute tells the browser where to jump.',
        '**Images**: We embed pictures using `<img src="cat.jpg" alt="A cute sleeping orange tabby cat">`. Notice that `<img>` is a self-closing tag without a separate end tag!'
      ],
      explanationMy: [
        'သတင်းစာများနှင့် စာအုပ်များတွင် စာသားချည်းသာ မဟုတ်ဘဲ ခေါင်းစဉ်ကြီးများ၊ အခန်းခေါင်းစဉ်ငယ်များ၊ စာပိုဒ်များ၊ ရောင်စုံဓာတ်ပုံများ ပါဝင်လေ့ရှိသည်။ HTML ကလည်း ထိုအရာများကို ပြုလုပ်နိုင်စေပါသည်။',
        '**Headings (ခေါင်းစဉ်များ)**: `<h1>` (အကြီးဆုံး၊ အရေးအကြီးဆုံး) မှ `<h6>` (အသေးဆုံး ခေါင်းစဉ်ငယ်) အထိ အဆင့် ၆ ဆင့် ရှိသည်။ စာမျက်နှာတစ်ခုတွင် ပင်မ `<h1>` တစ်ခုသာ ထားရှိသင့်သည်။',
        '**Paragraphs (စာပိုဒ်များ)**: သာမန် စာဖတ်ရန် စာကြောင်းများကို `<p>...</p>` အတွင်း ထည့်သွင်းရသည်။',
        '**Hyperlinks (လင့်ခ်များ)**: ဝဘ်လောက၏ အစွမ်းအထက်ဆုံးအရာမှာ တစ်မျက်နှာမှ တစ်မျက်နှာသို့ ကူးပြောင်းနိုင်ခြင်း ဖြစ်သည်! `<a href="https://example.com">သွားရောက်ကြည့်ရှုပါ</a>` ဟု ရေးသားရပြီး `href` သည် သွားရမည့် လိပ်စာ ဖြစ်သည်။',
        '**Images (ရုပ်ပုံများ)**: ဓာတ်ပုံများကို `<img src="cat.jpg" alt="ချစ်စရာ ကြောင်ကလေး">` ဟု ထည့်သွင်းသည်။ `<img>` သည် အပိတ် Tag သီးသန့် မလိုသော Self-closing Tag ဖြစ်သည်။'
      ],
      diagram: {
        type: 'html-core-tags-gallery',
        captionEn: 'Headings hierarchy (h1 to h3), Paragraphs (<p>), Hyperlinks (<a>), and Images (<img>)!',
        captionMy: 'ခေါင်းစဉ် အဆင့်ဆင့် (h1 မှ h3)၊ စာပိုဒ်များ (<p>)၊ လင့်ခ်များ (<a>) နှင့် ရုပ်ပုံများ (<img>)!',
        altEn: 'Visual diagram showing rendered examples of h1, p text, blue underlined link, and framed image',
        altMy: 'ခေါင်းစဉ်၊ စာပိုဒ်၊ လင့်ခ်နှင့် ရုပ်ပုံများ ဖန်သားပြင်ပေါ်တွင် ပေါ်လာပုံပြ ပုံ'
      },
      analogyEn: {
        title: 'Designing a School Poster Board',
        description: 'Think of a science fair poster: You write the giant project name in thick bold markers at the top (`<h1>`), pin smaller topic cards for your hypothesis (`<h2>`), tape typed experiment notes (`<p>`), glue real photos (`<img>`), and write reference book links at the bottom (`<a>`)!'
      },
      analogyMy: {
        title: 'သိပ္ပံပြပွဲ ပိုစတာ ဆွဲခြင်း ဥပမာ',
        description: 'သိပ္ပံပြပွဲ ပိုစတာတစ်ခုကို စဉ်းစားကြည့်ပါ: ထိပ်ဆုံးတွင် ပရောဂျက်အမည်ကို စာလုံးကြီးကြီးဖြင့် ရေးသည် (`<h1>`)၊ ခေါင်းစဉ်ခွဲလေးများ ကပ်သည် (`<h2>`)၊ စာစီထားသော စာရွက်များ ကပ်သည် (`<p>`)၊ ဓာတ်ပုံများ ကပ်သည် (`<img>`) နှင့် အောက်ခြေတွင် ကျမ်းကိုး လင့်ခ်များ ထည့်သွင်းသည် (`<a>`)!'
      },
      workedExampleEn: {
        title: 'A Profile Page for Byte the Robot',
        scenario: 'Let us build a mini profile card using headings, text, image, and link.',
        steps: [
          { stepNumber: 1, instruction: '<h1>Byte the Space Explorer</h1>', outcome: 'Displays majestic headline.' },
          { stepNumber: 2, instruction: '<p>Byte loves helping kids learn programming!</p>', outcome: 'Renders clear informative body text.' },
          { stepNumber: 3, instruction: '<img src="robot.png" alt="Friendly metallic robot smiling">', outcome: 'Embeds robot mascot visual with accessible screen-reader alt text.' },
          { stepNumber: 4, instruction: '<a href="https://nyanlearn.org">Visit CodeQuest 🚀</a>', outcome: 'Clickable blue underlined link jumps to the homepage.' }
        ]
      },
      workedExampleMy: {
        title: 'စက်ရုပ် Byte ၏ ကိုယ်ရေးစာမျက်နှာ တည်ဆောက်ခြင်း ဥပမာ',
        scenario: 'ခေါင်းစဉ်၊ စာသား၊ ပုံနှင့် လင့်ခ်များ ပေါင်းစပ်၍ Profile Card တည်ဆောက်ခြင်း။',
        steps: [
          { stepNumber: 1, instruction: '<h1>စက်ရုပ် Byte အကြောင်း</h1>', outcome: 'ခေါင်းစဉ်ကြီး ပေါ်လာသည်။' },
          { stepNumber: 2, instruction: '<p>Byte သည် ကလေးများကို Coding သင်ပေးရသည်ကို သဘောကျသည်။</p>', outcome: 'ရှင်းလင်းသော စာပိုဒ် ပေါ်လာသည်။' },
          { stepNumber: 3, instruction: '<img src="robot.png" alt="ပြုံးနေသော စက်ရုပ်ကလေး">', outcome: 'စက်ရုပ်ရုပ်ပုံကလေး ပေါ်လာသည်။' },
          { stepNumber: 4, instruction: '<a href="https://nyanlearn.org">CodeQuest သို့ သွားမည် 🚀</a>', outcome: 'နှိပ်နိုင်သော အပြာရောင် လင့်ခ်ကလေး ဖြစ်လာသည်။' }
        ]
      },
      activity: {
        type: 'code-sandbox',
        titleEn: 'Interactive Web Authoring Studio',
        titleMy: 'ဝဘ် ရေးသားမှု စမ်းသပ်ခန်း',
        instructionsEn: 'Add an `<h2>` subheading and a link inside the sandbox, click Run, and test the clickable link!',
        instructionsMy: '`<h2>` ခေါင်းစဉ်ခွဲတစ်ခုနှင့် လင့်ခ်တစ်ခုကို ထည့်သွင်းရေးသားပြီး Run နှိပ်ကာ စမ်းသပ်ကြည့်ပါ။',
        initialData: {
          html: '<h1>My Favorite Animal</h1>\n<h2>The Playful Dolphin 🐬</h2>\n<p>Dolphins are super intelligent marine mammals that love leaping through waves!</p>\n<a href="https://wikipedia.org" target="_blank">Learn more on Wikipedia →</a>',
          css: 'body { font-family: sans-serif; padding: 20px; background: #e4f9fc; color: #1e2448; }\nh1 { color: #0088aa; }\nh2 { color: #22c7d9; }\na { color: #6c47ff; font-weight: bold; }',
          js: '// Ready for code!'
        }
      },
      quizQuestions: [
        {
          id: 'q-w3-1',
          questionEn: 'Which HTML heading tag creates the largest, most prominent headline?',
          questionMy: 'အကြီးဆုံးနှင့် အထင်ရှားဆုံး ခေါင်းစဉ်ကို မည်သည့် HTML Tag က ပြုလုပ်ပေးသနည်း?',
          options: [
            { id: 'a', textEn: '<h1>', textMy: '<h1>' },
            { id: 'b', textEn: '<h6>', textMy: '<h6>' },
            { id: 'c', textEn: '<head>', textMy: '<head>' },
            { id: 'd', textEn: '<header>', textMy: '<header>' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Correct! `<h1>` is the top-level headline; `<h6>` is the smallest subheading.',
          explanationMy: 'မှန်ကန်ပါတယ်! `<h1>` သည် အကြီးဆုံးဖြစ်ပြီး `<h6>` သည် အသေးဆုံး ခေါင်းစဉ် ဖြစ်သည်။'
        },
        {
          id: 'q-w3-2',
          questionEn: 'In an image tag `<img src="dog.jpg" alt="A happy puppy">`, what is the purpose of the `alt` attribute?',
          questionMy: '`<img src="dog.jpg" alt="ပျော်ရွှင်နေသော ခွေးလေး">` တွင် `alt` ၏ အဓိက ရည်ရွယ်ချက်မှာ အဘယ်နည်း?',
          options: [
            { id: 'a', textEn: 'It describes the image for screen-readers and displays if the image file fails to load', textMy: 'ပုံမပေါ်နိုင်သောအခါ ပြသရန်နှင့် မျက်မမြင် Screen-reader များအတွက် ပုံကို ဖော်ပြပေးရန်' },
            { id: 'b', textEn: 'It changes the computer volume', textMy: 'ကွန်ပျူတာ အသံအတိုးအကျယ် ပြောင်းရန်' },
            { id: 'c', textEn: 'It makes the image spin in 3D circles', textMy: 'ဓာတ်ပုံကို 3D လှည့်ပေးရန်' },
            { id: 'd', textEn: 'It deletes the photo after 5 seconds', textMy: '၅ စက္ကန့်အကြာတွင် ပုံကို ဖျက်ပစ်ရန်' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Spot on! `alt` text is critical for digital accessibility and fallback rendering.',
          explanationMy: 'မှန်ပါတယ်! `alt` စာသားသည် မသန်စွမ်းသူများအတွက် အထူးအရေးပါပြီး ပုံမပွင့်ပါက စာဖြင့် ဖော်ပြပေးပါသည်။'
        },
        {
          id: 'q-w3-3',
          questionEn: 'Which attribute tells an `<a>` anchor link what web address to jump to?',
          questionMy: '`<a>` Link ကို မည်သည့် ဝဘ်လိပ်စာသို့ သွားရမည်ဟု မည်သည့် Attribute ဖြင့် ညွှန်ကြားသနည်း?',
          options: [
            { id: 'a', textEn: 'href', textMy: 'href' },
            { id: 'b', textEn: 'src', textMy: 'src' },
            { id: 'c', textEn: 'goto', textMy: 'goto' },
            { id: 'd', textEn: 'jump', textMy: 'jump' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Awesome! `href` (Hypertext Reference) specifies the link destination URL.',
          explanationMy: 'အရမ်းတော်တယ်! `href` သည် လင့်ခ်သွားရမည့် ပစ်မှတ်လိပ်စာကို သတ်မှတ်ပေးခြင်း ဖြစ်သည်။'
        }
      ],
      summaryEn: [
        'Use `<h1>` through `<h6>` for a logical hierarchy of headings.',
        'Paragraphs `<p>` hold standard body sentences.',
        'Hyperlinks `<a href="...">` connect the web, and `<img src="..." alt="...">` displays images.'
      ],
      summaryMy: [
        'ခေါင်းစဉ်အဆင့်ဆင့်ကို ဖော်ပြရန် `<h1>` မှ `<h6>` အထိ အသုံးပြုသည်။',
        'သာမန်စာသားများကို `<p>` ဖြင့် ရေးသားသည်။',
        '`<a href="...">` ဖြင့် လင့်ခ်များ ချိတ်ဆက်ပြီး `<img src="..." alt="...">` ဖြင့် ရုပ်ပုံများ ပြသသည်။'
      ]
    },

    // -------------------------------------------------------------------------
    // Lesson 4: CSS and Website Styling
    // -------------------------------------------------------------------------
    {
      id: 'web-4',
      lessonNumber: 4,
      titleEn: 'CSS and Website Styling',
      titleMy: 'CSS နှင့် ဝဘ်ဆိုဒ် အလှဆင်ခြင်း',
      shortIntroEn: 'Without CSS, the web would be black-and-white plain text! Learn how Cascading Style Sheets bring vibrant life, colors, and fonts.',
      shortIntroMy: 'CSS သာမရှိရင် အင်တာနက်ကြီးဟာ အဖြူအမည်း စာလုံးတွေချည်းပဲ ဖြစ်နေမှာပါ! CSS ဖြင့် အရောင်အသွေးနှင့် ဖောင့်လှလှလေးများ ထည့်သွင်းနည်းကို လေ့လာကြမယ်။',
      learningObjectivesEn: [
        'Understand what CSS stands for (Cascading Style Sheets).',
        'Learn CSS rule syntax: Selector, Property, and Value.',
        'Explore how CSS connects to HTML elements to paint backgrounds and text.'
      ],
      learningObjectivesMy: [
        'CSS (Cascading Style Sheets) ၏ အဓိပ္ပာယ်ကို နားလည်စေရန်။',
        'CSS စည်းမျဉ်း ဖွဲ့စည်းပုံ: Selector (ရွေးချယ်မှု)၊ Property (ဂုဏ်သတ္တိ) နှင့် Value (တန်ဖိုး) တို့ကို သိရှိစေရန်။',
        'HTML Element များကို ရွေးချယ်၍ နောက်ခံနှင့် စာလုံးအရောင်များ ခြယ်သပုံကို တတ်မြောက်စေရန်။'
      ],
      explanationEn: [
        'If HTML is the wooden frame of a house, **CSS (Cascading Style Sheets)** is the colorful paint on the walls, the warm glowing lanterns, the carpet, and the cozy curtains.',
        'CSS lets you control the presentation of every element. A CSS rule has 3 parts: 1. **Selector** (Who do you want to style? E.g., `h1`), 2. **Property** (What feature do you want to change? E.g., `color`), and 3. **Value** (What is the new setting? E.g., `purple`).',
        'A CSS rule looks like this: `h1 { color: purple; font-size: 32px; }`. Notice the curly braces `{ ... }` wrapping the declarations, and the semicolons `;` after each instruction. With CSS, you become the digital interior designer of your site!'
      ],
      explanationMy: [
        'HTML သည် အိမ်တစ်လုံး၏ သစ်သားအရိုးခေါင်း ဖြစ်ပါက **CSS (Cascading Style Sheets)** သည် နံရံဆေးရောင်၊ ကော်ဇော၊ လှပသော လိုက်ကာများနှင့် မီးဆိုင်းများ ဖြစ်သည်။',
        'CSS ဖြင့် စာမျက်နှာပေါ်ရှိ အရာအားလုံးကို မိမိစိတ်ကြိုက် အလှဆင်နိုင်သည်။ CSS စည်းမျဉ်းတစ်ခုတွင် အစိတ်အပိုင်း ၃ ခု ပါဝင်သည်: ၁။ **Selector (ရွေးချယ်သူ)** — မည်သည့်အရာကို အလှဆင်မည်နည်း (ဥပမာ `h1`)၊ ၂။ **Property (ဂုဏ်သတ္တိ)** — မည်သည့်အချက်ကို ပြောင်းလဲမည်နည်း (ဥပမာ `color`)၊ ၃။ **Value (တန်ဖိုး)** — မည်သို့ သတ်မှတ်မည်နည်း (ဥပမာ `purple`)။',
        'CSS ကို ဤသို့ ရေးသားသည်: `h1 { color: purple; font-size: 32px; }`။ တွန့်ကွင်း `{ ... }` အတွင်း ရေးသားရပြီး ညွှန်ကြားချက်တစ်ခုစီ၏ အဆုံးတွင် ပုဒ်ဖြတ် Semi-colon `;` ထည့်သွင်းရသည်။ CSS ဖြင့် သင့် Website ၏ ဒီဇိုင်နာကြီး ဖြစ်လာနိုင်ပါသည်။'
      ],
      diagram: {
        type: 'css-rule-anatomy',
        captionEn: 'CSS Rule Anatomy: Selector (h1) -> Property (color) : Value (purple) ; !',
        captionMy: 'CSS စည်းမျဉ်း ဖွဲ့စည်းပုံ: Selector (h1) -> Property (color) : Value (purple) ; !',
        altEn: 'Diagram breaking down a CSS rule into selector, declaration block, property, and value',
        altMy: 'CSS Rule တစ်ခု၏ အစိတ်အပိုင်းများ ခွဲခြမ်းပြသထားသော ပုံ'
      },
      analogyEn: {
        title: 'Coloring Book and Crayons',
        description: 'HTML is the black-and-white outline drawings in a coloring book. CSS is your giant box of 120 colored crayons, glitter pens, and highlighters that fill in the colors and make the artwork dazzle!'
      },
      analogyMy: {
        title: 'ဆေးရောင်ခြယ် စာအုပ်နှင့် ဖယောင်းခဲတံ ဥပမာ',
        description: 'HTML သည် ဆေးရောင်ခြယ်စာအုပ်ထဲက အဖြူအမည်း မျဉ်းကြောင်းပုံများ ဖြစ်ပြီး၊ CSS သည် ရောင်စုံဖယောင်းခဲတံ ၁၂၀ ပါ သေတ္တာကြီးနှင့် တူပါသည်။ လှပသော အရောင်များ ဖြည့်စွက်ကာ အသက်ဝင်စေခြင်း ဖြစ်သည်။'
      },
      workedExampleEn: {
        title: 'Styling a Hero Announcement Card',
        scenario: 'Transforming plain HTML into a sleek purple card.',
        steps: [
          { stepNumber: 1, instruction: 'Target class selector', outcome: '`.announcement-card { ... }` targets all elements with that class.' },
          { stepNumber: 2, instruction: 'background-color: #6c47ff;', outcome: 'Fills the card background with royal purple.' },
          { stepNumber: 3, instruction: 'color: white;', outcome: 'Turns all inner text crisp, readable white.' },
          { stepNumber: 4, instruction: 'border-radius: 16px;', outcome: 'Smooths the four sharp corners into stylish, modern curves!' }
        ]
      },
      workedExampleMy: {
        title: 'ကြေညာချက် Card တစ်ခုကို အလှဆင်ခြင်း ဥပမာ',
        scenario: 'ရိုးရိုး စာသားမှ လှပသော ခရမ်းရောင် Card အဖြစ် ပြောင်းလဲခြင်း။',
        steps: [
          { stepNumber: 1, instruction: 'Class Selector ဖြင့် ရွေးချယ်သည်', outcome: '`.announcement-card { ... }` ဖြင့် အဆိုပါ Card ကို ပစ်မှတ်ထားသည်။' },
          { stepNumber: 2, instruction: 'background-color: #6c47ff;', outcome: 'နောက်ခံကို ခရမ်းရောင် အပြည့် ဖြည့်သွင်းလိုက်သည်။' },
          { stepNumber: 3, instruction: 'color: white;', outcome: 'စာသားအရောင်များကို ဖြူစင်စွာ ထင်ရှားစေသည်။' },
          { stepNumber: 4, instruction: 'border-radius: 16px;', outcome: 'ချွန်ထက်နေသော ထောင့် ၄ ခုကို ဝိုင်းဝိုင်းလေး လှပသွားစေသည်။' }
        ]
      },
      activity: {
        type: 'code-sandbox',
        titleEn: 'CSS Color & Glow Laboratory',
        titleMy: 'CSS အရောင်စုံ စမ်းသပ်ခန်း',
        instructionsEn: 'Change the background color to your favorite color (like `#ff6b6b` coral or `#2ecc71` emerald), click Run, and watch the transformation!',
        instructionsMy: 'နောက်ခံအရောင်ကို မိမိကြိုက်သော အရောင်အဖြစ် ပြောင်းလဲပြီး Run နှိပ်ကာ တိုက်ရိုက် ကြည့်ရှုပါ။',
        initialData: {
          html: '<div class="magic-card">\n  <h2>CSS Magic Box ✨</h2>\n  <p>I am styled with custom colors, rounded corners, and smooth fonts!</p>\n</div>',
          css: '.magic-card {\n  background: #6c47ff;\n  color: white;\n  padding: 24px;\n  border-radius: 20px;\n  text-align: center;\n  box-shadow: 0 10px 25px rgba(108,71,255,0.3);\n}',
          js: '// Pure styling fun!'
        }
      },
      quizQuestions: [
        {
          id: 'q-w4-1',
          questionEn: 'What does "CSS" stand for?',
          questionMy: '"CSS" ၏ အပြည့်အစုံမှာ အဘယ်နည်း?',
          options: [
            { id: 'a', textEn: 'Cascading Style Sheets', textMy: 'Cascading Style Sheets' },
            { id: 'b', textEn: 'Computer Screen System', textMy: 'Computer Screen System' },
            { id: 'c', textEn: 'Creative Sound Selector', textMy: 'Creative Sound Selector' },
            { id: 'd', textEn: 'Color Shape Software', textMy: 'Color Shape Software' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Correct! CSS stands for Cascading Style Sheets.',
          explanationMy: 'မှန်ကန်ပါတယ်! CSS ၏ အပြည့်အစုံမှာ Cascading Style Sheets ဖြစ်သည်။'
        },
        {
          id: 'q-w4-2',
          questionEn: 'In the CSS rule `p { color: red; }`, what is the "Selector"?',
          questionMy: '`p { color: red; }` ဟူသော CSS တွင် "Selector" မှာ မည်သည့်အရာ ဖြစ်သနည်း?',
          options: [
            { id: 'a', textEn: 'p (targeting all paragraph elements)', textMy: 'p (စာပိုဒ် element အားလုံးကို ပစ်မှတ်ထားသော ရွေးချယ်သူ)' },
            { id: 'b', textEn: 'color', textMy: 'color' },
            { id: 'c', textEn: 'red', textMy: 'red' },
            { id: 'd', textEn: '; (the semicolon)', textMy: '; (semi-colon)' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Spot on! The selector points to the HTML element you want to style.',
          explanationMy: 'မှန်ပါတယ်! Selector သည် အလှဆင်လိုသော HTML Element ကို ညွှန်ပြခြင်း ဖြစ်သည်။'
        },
        {
          id: 'q-w4-3',
          questionEn: 'Which CSS property curves the sharp square corners of a box into smooth rounded edges?',
          questionMy: 'လေးထောင့်ကွက်၏ ထောင့်ချွန်များကို ဝိုင်းဝိုင်းလေး ဖြစ်သွားစေရန် မည်သည့် CSS Property ကို သုံးသနည်း?',
          options: [
            { id: 'a', textEn: 'border-radius', textMy: 'border-radius' },
            { id: 'b', textEn: 'corner-circle', textMy: 'corner-circle' },
            { id: 'c', textEn: 'make-round', textMy: 'make-round' },
            { id: 'd', textEn: 'bend-edge', textMy: 'bend-edge' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Awesome! `border-radius: 12px;` rounds corners seamlessly.',
          explanationMy: 'အရမ်းတော်တယ်! `border-radius` သည် အနားထောင့်များကို ဝိုင်းစေသော Property ဖြစ်သည်။'
        }
      ],
      summaryEn: [
        'CSS (Cascading Style Sheets) controls visual design, colors, and typography.',
        'A CSS rule consists of a Selector, a Property, and a Value.',
        'Separating HTML (structure) from CSS (styling) keeps code clean and modular.'
      ],
      summaryMy: [
        'CSS သည် ဝဘ်စာမျက်နှာ၏ ဒီဇိုင်း၊ အရောင်နှင့် စာလုံးပုံစံများကို ထိန်းချုပ်ပေးသည်။',
        'CSS စည်းမျဉ်းတွင် Selector, Property နှင့် Value တို့ ပါဝင်သည်။',
        'ဖွဲ့စည်းပုံ (HTML) နှင့် အလှဆင်မှု (CSS) ကို ခွဲခြားထားခြင်းက Code ကို သန့်ရှင်းစေသည်။'
      ]
    },

    // -------------------------------------------------------------------------
    // Lesson 5: Colors, Fonts, Spacing, and Layout
    // -------------------------------------------------------------------------
    {
      id: 'web-5',
      lessonNumber: 5,
      titleEn: 'Colors, Fonts, Spacing, and Layout',
      titleMy: 'အရောင်များ၊ Fonts များ၊ Spacing နှင့် Box Model',
      shortIntroEn: 'Why do some websites look crowded and clumsy while others look sleek and modern? The secret is the CSS Box Model!',
      shortIntroMy: 'အချို့ဝဘ်ဆိုဒ်တွေက ဘာကြောင့် ရှုပ်ပွနေပြီး အချို့ကကျ သပ်ရပ်လှပနေသလဲ? လျှို့ဝှက်ချက်ကတော့ CSS Box Model ပါပဲ!',
      learningObjectivesEn: [
        'Understand the CSS Box Model: Content, Padding, Border, and Margin.',
        'Use Hex codes, RGB, and HSL colors.',
        'Master typography: `font-family`, `font-size`, `font-weight`, and `line-height`.'
      ],
      learningObjectivesMy: [
        'CSS Box Model ၏ အစိတ်အပိုင်း ၄ ခု: Content, Padding, Border နှင့် Margin တို့ကို နားလည်စေရန်။',
        'Hex codes, RGB နှင့် HSL အရောင်စနစ်များကို အသုံးပြုတတ်စေရန်။',
        'စာလုံးဒီဇိုင်း စည်းမျဉ်းများ: `font-family`, `font-size`, `font-weight`, `line-height` တို့ကို ကျွမ်းကျင်စေရန်။'
      ],
      explanationEn: [
        'Every single element on a webpage — from a headline to a button — is treated by the browser as a rectangular box. This is called the **CSS Box Model**.',
        'The Box Model has 4 nested layers: 1. **Content** (the actual text or image inside), 2. **Padding** (cushion room *inside* the box between content and border), 3. **Border** (the solid, dashed, or colored frame around the box), and 4. **Margin** (the empty breathing room *outside* the box separating it from neighboring elements).',
        'For colors, you can use named words (`red`), **Hex codes** (`#6c47ff`), or **RGB** (`rgb(108, 71, 255)`). Proper padding and margins turn a cramped, unreadable page into an airy, elegant experience!'
      ],
      explanationMy: [
        'ဝဘ်စာမျက်နှာပေါ်ရှိ စာသား သို့မဟုတ် ခလုတ်တိုင်းကို Browser က လေးထောင့်သေတ္တာလေးတစ်ခုအဖြစ် သတ်မှတ်သည်။ ၎င်းကို **CSS Box Model** ဟု ခေါ်သည်။',
        'Box Model တွင် အလွှာ ၄ လွှာ ပါဝင်သည်: ၁။ **Content** (အတွင်းရှိ တကယ့် စာသား သို့မဟုတ် ရုပ်ပုံ)၊ ၂။ **Padding** (စာသားနှင့် အနားသတ်ကြားရှိ *အတွင်းဘက်* နေရာလွတ်)၊ ၃။ **Border** (သေတ္တာကို ကာရံထားသော ဘောင်မျဉ်း)၊ ၄။ **Margin** (အခြား အရာများနှင့် မကပ်စေရန် *အပြင်ဘက်* တွင် ခြားထားသော နေရာလွတ်)။',
        'အရောင်များအတွက် နာမည်များ (`red`)၊ **Hex codes** (`#6c47ff`) သို့မဟုတ် **RGB** တို့ကို သုံးနိုင်သည်။ Padding နှင့် Margin ကို စနစ်တကျ သုံးစွဲခြင်းက ဝဘ်ဆိုဒ်ကို သပ်ရပ်လှပစေပါသည်။'
      ],
      diagram: {
        type: 'css-box-model-layers',
        captionEn: 'The CSS Box Model: Margin (Outside) -> Border -> Padding (Inside cushion) -> Content!',
        captionMy: 'CSS Box Model: Margin (အပြင်ဘက်) -> Border (ဘောင်) -> Padding (အတွင်းနေရာလွတ်) -> Content (အကြောင်းအရာ)!',
        altEn: 'Concentric colored rectangles showing outer Margin, Border, inner Padding, and center Content box',
        altMy: 'Box Model ၏ အလွှာ ၄ လွှာ ပြသထားသော ပုံ'
      },
      analogyEn: {
        title: 'A Framed Painting on a Living Room Wall',
        description: 'Think of a framed painting: The canvas painting is the Content. The white matting border around the painting is the Padding. The wooden frame is the Border. And the empty wall space around the frame before touching another picture is the Margin!'
      },
      analogyMy: {
        title: 'ဧည့်ခန်းနံရံရှိ ပန်းချီကားဘောင် ဥပမာ',
        description: 'ဘောင်သွင်းထားသော ပန်းချီကားကို စဉ်းစားကြည့်ပါ: ပန်းချီကားသည် Content ဖြစ်သည်။ ပန်းချီကားဘေးရှိ ကတ်ထူဖြူ နေရာလွတ်သည် Padding ဖြစ်သည်။ သစ်သားဘောင်သည် Border ဖြစ်သည်။ နောက်ပန်းချီကားတစ်ချပ်နှင့် မကပ်စေရန် နံရံပေါ်ရှိ နေရာလွတ်သည် Margin ဖြစ်သည်။'
      },
      workedExampleEn: {
        title: 'Building a Breathable Card with Spacing',
        scenario: 'Giving a card healthy breathing room using the Box Model.',
        steps: [
          { stepNumber: 1, instruction: 'padding: 20px;', outcome: 'Creates 20 pixels of comfortable inner cushion around the text.' },
          { stepNumber: 2, instruction: 'border: 2px solid #e3e7f8;', outcome: 'Draws a subtle light-blue protective border.' },
          { stepNumber: 3, instruction: 'margin-bottom: 24px;', outcome: 'Pushes the next card down by 24 pixels so they don’t collide.' },
          { stepNumber: 4, instruction: 'font-size: 18px; line-height: 1.6;', outcome: 'Text is legible, relaxed, and easy on the eyes.' }
        ]
      },
      workedExampleMy: {
        title: 'နေရာလွတ်များဖြင့် သပ်ရပ်သော Card ပြုလုပ်ခြင်း ဥပမာ',
        scenario: 'Box Model ကို သုံး၍ ဖတ်ရလွယ်ကူသော Card တစ်ခု တည်ဆောက်ခြင်း။',
        steps: [
          { stepNumber: 1, instruction: 'padding: 20px;', outcome: 'စာသားပတ်လည်တွင် သက်သောင့်သက်သာရှိသော အတွင်းနေရာလွတ် ၂၀px ဖန်တီးသည်။' },
          { stepNumber: 2, instruction: 'border: 2px solid #e3e7f8;', outcome: 'နူးညံ့သော အပြာနုရောင် ဘောင်မျဉ်းလေး တားပေးသည်။' },
          { stepNumber: 3, instruction: 'margin-bottom: 24px;', outcome: 'အောက်က Card နှင့် ကပ်မနေစေရန် အပြင်နေရာလွတ် ၂၄px ခြားပေးသည်။' },
          { stepNumber: 4, instruction: 'font-size: 18px; line-height: 1.6;', outcome: 'စာလုံးအရွယ်အစားနှင့် စာကြောင်းအကွာအဝေး မျှတသဖြင့် ဖတ်ရလွယ်ကူသည်။' }
        ]
      },
      activity: {
        type: 'code-sandbox',
        titleEn: 'Box Model Padding vs Margin Playground',
        titleMy: 'Padding နှင့် Margin စမ်းသပ်ခန်း',
        instructionsEn: 'Adjust the padding and margin values in the CSS editor to see the difference between inside cushion and outside spacing!',
        instructionsMy: 'CSS ထဲတွင် Padding နှင့် Margin တန်ဖိုးများကို ပြောင်းလဲကြည့်ပြီး အတွင်းနှင့် အပြင် နေရာလွတ်များ ကွာခြားပုံကို လေ့လာပါ။',
        initialData: {
          html: '<div class="box-one">Box A (With Padding)</div>\n<div class="box-two">Box B (With Margin)</div>',
          css: '.box-one {\n  background: #ffc436;\n  padding: 30px;\n  border: 3px solid #b8860b;\n  border-radius: 12px;\n  font-weight: bold;\n}\n.box-two {\n  background: #22c7d9;\n  margin-top: 30px;\n  padding: 15px;\n  border-radius: 12px;\n  color: white;\n}',
          js: '// Spacing mastery!'
        }
      },
      quizQuestions: [
        {
          id: 'q-w5-1',
          questionEn: 'In the CSS Box Model, what is "Padding"?',
          questionMy: 'CSS Box Model တွင် "Padding" ဆိုသည်မှာ အဘယ်နည်း?',
          options: [
            { id: 'a', textEn: 'The empty cushion space INSIDE the element, between content and border', textMy: 'Element ၏ အတွင်းဘက် (အကြောင်းအရာနှင့် ဘောင်ကြား) ရှိ နေရာလွတ်' },
            { id: 'b', textEn: 'The space OUTSIDE the border pushing away other elements', textMy: 'အခြားအရာများကို တွန်းထုတ်သော ဘောင်၏ အပြင်ဘက် နေရာလွတ်' },
            { id: 'c', textEn: 'The color of the background wallpaper', textMy: 'နောက်ခံ အရောင်' },
            { id: 'd', textEn: 'The font size of the text', textMy: 'စာလုံး၏ အရွယ်အစား' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Correct! Padding is the internal cushion inside the border.',
          explanationMy: 'မှန်ကန်ပါတယ်! Padding သည် ဘောင်အတွင်းဘက်ရှိ နေရာလွတ် ဖြစ်သည်။'
        },
        {
          id: 'q-w5-2',
          questionEn: 'In the CSS Box Model, what is "Margin"?',
          questionMy: 'CSS Box Model တွင် "Margin" ဆိုသည်မှာ အဘယ်နည်း?',
          options: [
            { id: 'a', textEn: 'The empty breathing space OUTSIDE the border separating it from neighbors', textMy: 'ဘောင်၏ အပြင်ဘက်ရှိ အခြားအရာများနှင့် ခြားထားသော နေရာလွတ်' },
            { id: 'b', textEn: 'The thickness of the text letters', textMy: 'စာလုံးများ၏ အထူ' },
            { id: 'c', textEn: 'The volume of the background music', textMy: 'သီချင်း အသံအတိုးအကျယ်' },
            { id: 'd', textEn: 'A button click sound effect', textMy: 'ခလုတ်နှိပ်သံ' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Spot on! Margin creates external spacing between adjacent elements.',
          explanationMy: 'မှန်ပါတယ်! Margin သည် ဘေးပတ်ဝန်းကျင်ရှိ အရာများနှင့် မကပ်စေရန် အပြင်ဘက်တွင် ခြားပေးသော နေရာလွတ် ဖြစ်သည်။'
        },
        {
          id: 'q-w5-3',
          questionEn: 'What does the CSS property `line-height: 1.6;` do?',
          questionMy: 'CSS Property `line-height: 1.6;` သည် မည်သည့်အရာကို ဆောင်ရွက်ပေးသနည်း?',
          options: [
            { id: 'a', textEn: 'Controls the vertical spacing between lines of text for comfortable reading', textMy: 'စာဖတ်ရ သက်သောင့်သက်သာရှိစေရန် စာကြောင်းများအကြား အထက်အောက် အကွာအဝေးကို သတ်မှတ်ပေးသည်' },
            { id: 'b', textEn: 'Draws a straight horizontal red line across the screen', textMy: 'မျက်နှာပြင်ပေါ်တွင် အနီရောင် မျဉ်းဖြောင့်ဆွဲပေးသည်' },
            { id: 'c', textEn: 'Counts how many lines of code you wrote', textMy: 'Code စာကြောင်း မည်မျှရှိသည်ကို ရေတွက်ပေးသည်' },
            { id: 'd', textEn: 'Deletes every second paragraph', textMy: 'စာပိုဒ်တစ်ခုကျော်တိုင်းကို ဖျက်ပစ်သည်' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Awesome! A generous `line-height` prevents text lines from bumping into each other.',
          explanationMy: 'အရမ်းတော်တယ်! `line-height` သည် စာကြောင်းများ တစ်ကြောင်းနှင့်တစ်ကြောင်း မကပ်စေရန် ထိန်းကျောင်းပေးပါသည်။'
        }
      ],
      summaryEn: [
        'The CSS Box Model consists of Content, Padding, Border, and Margin.',
        'Padding adds inside cushion; Margin adds outside separation.',
        'Generous spacing and clean typography make websites delightful to read.'
      ],
      summaryMy: [
        'CSS Box Model တွင် Content, Padding, Border နှင့် Margin တို့ ပါဝင်သည်။',
        'Padding က အတွင်းနေရာလွတ် ပေးပြီး Margin က အပြင်နေရာလွတ် ပေးသည်။',
        'သင့်တော်သော နေရာလွတ်နှင့် စာလုံးဒီဇိုင်းသည် ဝဘ်ဆိုဒ်ကို ဖတ်ရှုရ အလွန်အဆင်ပြေစေသည်။'
      ]
    },

    // -------------------------------------------------------------------------
    // Lesson 6: Responsive Design
    // -------------------------------------------------------------------------
    {
      id: 'web-6',
      lessonNumber: 6,
      titleEn: 'Responsive Design and Media Queries',
      titleMy: 'Responsive Design (ဖုန်းနှင့် ကွန်ပျူတာ အလိုက်သင့်ပြောင်းလဲမှု)',
      shortIntroEn: 'People view websites on tiny smartwatch screens, smartphones, tablets, and giant 4K monitors! Learn how to make your layout adapt to any screen size.',
      shortIntroMy: 'လူတွေဟာ ဝဘ်ဆိုဒ်တွေကို ဖုန်းလေးတွေကနေ ကွန်ပျူတာ မော်နီတာကြီးတွေအထိ ကြည့်ရှုကြပါတယ်! ဖန်သားပြင်တိုင်းမှာ လှပနေစေမယ့် Responsive Design ကို လေ့လာကြမယ်။',
      learningObjectivesEn: [
        'Understand what "Responsive Web Design" means.',
        'Learn about flexible units: percentages (`%`), viewport units (`vw`, `vh`), and `rem`.',
        'Use CSS Media Queries (`@media`) to adapt layouts for mobile screens.'
      ],
      learningObjectivesMy: [
        '"Responsive Web Design" ၏ အဓိပ္ပာယ်ကို နားလည်စေရန်။',
        'အလိုက်သင့်ပြောင်းလဲနိုင်သော ယူနစ်များ: ရာခိုင်နှုန်း (`%`)၊ `vw`, `vh` နှင့် `rem` တို့ကို သိရှိစေရန်။',
        'ဖုန်းမျက်နှာပြင်များအတွက် ဒီဇိုင်းပြောင်းလဲပေးသော CSS Media Queries (`@media`) ကို အသုံးပြုတတ်စေရန်။'
      ],
      explanationEn: [
        'In the early days of the web, monitors were all the exact same boxy size. But today, more than 60% of all web traffic happens on mobile smartphones! If your website only looks good on a desktop computer, mobile users will have to pinch, zoom, and squint frustratingly.',
        '**Responsive Web Design** means creating pages that automatically shift, shrink, wrap, and restack to look gorgeous on ANY screen size — from an iPhone to a widescreen television.',
        'The secret weapon of responsive design is the **CSS Media Query**: `@media (max-width: 600px) { ... }`. This rule tells the browser: "IF the screen width is 600 pixels or narrower (like a smartphone), switch the multi-column layout into a single vertical column so everything is easy to tap!"'
      ],
      explanationMy: [
        'အရင်ခေတ်က ကွန်ပျူတာ မော်နီတာတွေဟာ အရွယ်အစား အတူတူပဲ ရှိခဲ့ပါတယ်။ ဒါပေမဲ့ ဒီကနေ့ခေတ်မှာ ဝဘ်ဆိုဒ်ကြည့်သူ ၆၀% ကျော်ဟာ စမတ်ဖုန်းတွေကနေ ကြည့်ရှုကြတာ ဖြစ်ပါတယ်! အကယ်၍ သင့်ဆိုဒ်က ကွန်ပျူတာမှာပဲ ကြည့်ကောင်းပြီး ဖုန်းမှာ လက်ဖြင့် ချဲ့ကြည့်နေရပါက အဆင်မပြေနိုင်ပါဘူး။',
        '**Responsive Web Design** ဆိုတာ ဖုန်း၊ Tablet သို့မဟုတ် ကွန်ပျူတာ မည်သည့် ဖန်သားပြင်အရွယ်အစားမှာမဆို အလိုအလျောက် အံဝင်ခွင်ကျ လှပစွာ ပြောင်းလဲပေးနိုင်သော ဒီဇိုင်းဖြစ်ပါတယ်။',
        'အဓိက လျှို့ဝှက်ချက်မှာ **CSS Media Query** ဖြစ်သည်: `@media (max-width: 600px) { ... }`။ ၎င်းက "ဖန်သားပြင် အကျယ်သည် ၆၀၀ px သို့မဟုတ် ထိုထက် ငယ်ပါက (ဖုန်းကဲ့သို့) ဘေးချင်းကပ် အကွက်များကို အထက်အောက် တစ်တန်းတည်း ဖြစ်အောင် ပြောင်းလဲပေးပါ" ဟု ညွှန်ကြားပေးခြင်း ဖြစ်သည်။'
      ],
      diagram: {
        type: 'responsive-device-adapt',
        captionEn: 'Desktop: 3 columns side-by-side -> Mobile Phone: 1 stacked vertical column!',
        captionMy: 'ကွန်ပျူတာ: ဘေးချင်းကပ် ကော်လံ ၃ ခု -> စမတ်ဖုန်း: အထက်အောက် စီတန်းထားသော ကော်လံ ၁ ခု!',
        altEn: 'Illustration showing desktop screen with 3 columns adapting into a vertical single column on a phone',
        altMy: 'Desktop မှ Mobile ဖုန်းသို့ Layout ပြောင်းလဲသွားပုံပြ မျဉ်းကားချပ်'
      },
      analogyEn: {
        title: 'Water Taking the Shape of Its Cup',
        description: 'Bruce Lee famously said: "Be like water. If you put water into a cup, it becomes the cup. You put water into a bottle, it becomes the bottle." A responsive website is like water — it flows and perfectly fills whatever container screen it is poured into!'
      },
      analogyMy: {
        title: 'ခွက်ပုံစံအတိုင်း ပြောင်းလဲသော ရေ ဥပမာ',
        description: 'ရေသည် ခွက်ထဲထည့်ပါက ခွက်ပုံစံဖြစ်သွားပြီး ပုလင်းထဲထည့်ပါက ပုလင်းပုံစံ ပြောင်းလဲသွားသလိုပါပဲ။ Responsive Website တစ်ခုသည်လည်း မည်သည့် ဖန်သားပြင်ထဲ ရောက်ရောက် အံဝင်ခွင်ကျ ဖြစ်အောင် ပုံစံပြောင်းလဲပေးပါသည်။'
      },
      workedExampleEn: {
        title: 'A Simple Media Query in Action',
        scenario: 'Making a card grid adapt from side-by-side on desktop to stacked on mobile.',
        steps: [
          { stepNumber: 1, instruction: 'Desktop default style', outcome: '`.card-container { display: flex; flex-direction: row; }` (3 cards sit horizontally)' },
          { stepNumber: 2, instruction: 'Define mobile breakpoint', outcome: '`@media (max-width: 600px) {` targets mobile screens.' },
          { stepNumber: 3, instruction: 'Override flex direction', outcome: '`  .card-container { flex-direction: column; }` stack cards vertically.' },
          { stepNumber: 4, instruction: 'Seamless mobile comfort', outcome: '`}` Phone users scroll effortlessly with their thumb!' }
        ]
      },
      workedExampleMy: {
        title: 'ရိုးရှင်းသော Media Query အသုံးချပုံ ဥပမာ',
        scenario: 'Desktop တွင် ဘေးတိုက်နှင့် Mobile တွင် အထက်အောက် ပြောင်းလဲပေးခြင်း။',
        steps: [
          { stepNumber: 1, instruction: 'Desktop မူလပုံစံ', outcome: '`.card-container { display: flex; flex-direction: row; }` (Card ၃ ခု ဘေးချင်းယှဉ်ထိုင်သည်)' },
          { stepNumber: 2, instruction: 'Mobile စည်းမျဉ်း သတ်မှတ်သည်', outcome: '`@media (max-width: 600px) {` (ဖုန်းအရွယ်အစားကို ပစ်မှတ်ထားသည်)' },
          { stepNumber: 3, instruction: 'အထက်အောက် အဖြစ် ပြောင်းလဲသည်', outcome: '`  .card-container { flex-direction: column; }` (Card များကို အပေါ်အောက် စီတန်းလိုက်သည်)' },
          { stepNumber: 4, instruction: 'ဖုန်းတွင် သုံးရ လွယ်ကူသွားသည်', outcome: '`}` ဖုန်းအသုံးပြုသူများသည် လက်မဖြင့် အလွယ်တကူ Scroll လုပ်ဖတ်ရှုနိုင်သွားသည်။' }
        ]
      },
      activity: {
        type: 'code-sandbox',
        titleEn: 'Responsive Media Query Simulator',
        titleMy: 'Responsive စမ်းသပ်ခန်း',
        instructionsEn: 'Look at the media query in the CSS. Toggle the preview window size to watch the layout transform from desktop row to mobile column!',
        instructionsMy: 'CSS ထဲရှိ Media Query ကို ကြည့်ရှုပြီး အစမ်းကြည့် ပြတင်းပေါက် အရွယ်အစား ပြောင်းလဲရာတွင် Layout အလိုအလျောက် ပြောင်းသွားပုံကို လေ့လာပါ။',
        initialData: {
          html: '<div class="row">\n  <div class="col">Card 1 🚀</div>\n  <div class="col">Card 2 🌟</div>\n</div>',
          css: '.row {\n  display: flex;\n  gap: 16px;\n}\n.col {\n  flex: 1;\n  background: #6c47ff;\n  color: white;\n  padding: 20px;\n  border-radius: 12px;\n  text-align: center;\n}\n@media (max-width: 500px) {\n  .row {\n    flex-direction: column;\n  }\n}',
          js: '// Responsive fluid magic!'
        }
      },
      quizQuestions: [
        {
          id: 'q-w6-1',
          questionEn: 'What is the goal of Responsive Web Design?',
          questionMy: 'Responsive Web Design ၏ အဓိက ရည်မှန်းချက်မှာ အဘယ်နည်း?',
          options: [
            { id: 'a', textEn: 'To make webpages adapt seamlessly and look great on all screen sizes, from mobile to desktop', textMy: 'ဖုန်းမှသည် ကွန်ပျူတာအထိ ဖန်သားပြင် အရွယ်အစား အားလုံးတွင် အဆင်ပြေပြေ လှပစွာ ပြသနိုင်စေရန်' },
            { id: 'b', textEn: 'To turn off the user’s battery', textMy: 'အသုံးပြုသူ၏ ဘက်ထရီကို ပိတ်ပစ်ရန်' },
            { id: 'c', textEn: 'To force all users to buy identical 30-inch monitors', textMy: 'လူတိုင်းကို ၃၀ လက်မ မော်နီတာ အတူတူ ဝယ်ခိုင်းရန်' },
            { id: 'd', textEn: 'To delete all images from the internet', textMy: 'အင်တာနက်မှ ရုပ်ပုံအားလုံးကို ဖျက်ပစ်ရန်' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Correct! Responsive design provides optimal viewing and interaction on any device.',
          explanationMy: 'မှန်ကန်ပါတယ်! မည်သည့် စက်ပစ္စည်းတွင်မဆို အကောင်းမွန်ဆုံး မြင်တွေ့နိုင်စေရန် ရည်ရွယ်ပါသည်။'
        },
        {
          id: 'q-w6-2',
          questionEn: 'What CSS feature allows you to apply special styles only when a screen is below a certain width?',
          questionMy: 'ဖန်သားပြင်သည် သတ်မှတ်အကျယ်အောက် ရောက်သွားမှသာ အထူးဒီဇိုင်းများ ပြောင်းလဲပေးနိုင်သော CSS နည်းပညာမှာ အဘယ်နည်း?',
          options: [
            { id: 'a', textEn: '@media queries (e.g. `@media (max-width: 600px)`)', textMy: '@media queries (ဥပမာ `@media (max-width: 600px)`)' },
            { id: 'b', textEn: 'The spacebar key', textMy: 'Spacebar ခလုတ်' },
            { id: 'c', textEn: 'Computer volume dial', textMy: 'အသံချိန် ခလုတ်' },
            { id: 'd', textEn: 'Power restart button', textMy: 'စက်ပိတ် ခလုတ်' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Spot on! Media queries inspect the viewport dimensions and trigger conditional styling.',
          explanationMy: 'မှန်ပါတယ်! Media Queries သည် မျက်နှာပြင် အကျယ်ကို စစ်ဆေး၍ သင့်တော်သော ဒီဇိုင်းကို အလုပ်လုပ်စေပါသည်။'
        },
        {
          id: 'q-w6-3',
          questionEn: 'Why should you avoid using fixed widths like `width: 1200px;` for mobile design?',
          questionMy: 'Mobile ဒီဇိုင်းတွင် `width: 1200px;` ကဲ့သို့ ပုံသေ အကျယ်များကို အဘယ်ကြောင့် မသုံးသင့်သနည်း?',
          options: [
            { id: 'a', textEn: 'Because mobile screens are much narrower (375-430px), causing the page to overflow awkwardly', textMy: 'ဖုန်းမျက်နှာပြင်များသည် (375-430px) သာ ကျဉ်းမြောင်းသဖြင့် ဘေးသို့ လျှံထွက်သွားပြီး ကြည့်မကောင်း ဖြစ်စေသောကြောင့်' },
            { id: 'b', textEn: 'Because pixels are illegal on phones', textMy: 'ဖုန်းပေါ်တွင် Pixel သုံးခွင့် မရှိသောကြောင့်' },
            { id: 'c', textEn: 'Because the screen will turn purple', textMy: 'မျက်နှာပြင် ခရမ်းရောင် ပြောင်းသွားမည် ဖြစ်သောကြောင့်' },
            { id: 'd', textEn: 'Because it uses too much Wi-Fi signal', textMy: 'Wi-Fi လိုင်း အလွန်စားသောကြောင့်' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Awesome! Use fluid percentages (like `width: 100%`) or `max-width` to allow natural shrinkage.',
          explanationMy: 'အရမ်းတော်တယ်! ပုံသေ အကျယ်များအစား ရာခိုင်နှုန်း (%) သို့မဟုတ် `max-width` ကို သုံးမှသာ ဖုန်းထဲတွင် သပ်ရပ်စွာ ပေါ်မည် ဖြစ်သည်။'
        }
      ],
      summaryEn: [
        'Responsive Web Design ensures websites render comfortably across phones, tablets, and desktops.',
        'CSS Media Queries apply targeted rules when the screen width hits specific breakpoints.',
        'Always design with flexible layouts and relative units for mobile-first user satisfaction.'
      ],
      summaryMy: [
        'Responsive Design သည် ဖုန်း၊ Tablet နှင့် ကွန်ပျူတာ အားလုံးတွင် အဆင်ပြေစေရန် သေချာစေသည်။',
        'CSS Media Queries သည် ဖန်သားပြင် အရွယ်အစားအလိုက် သင့်တော်သော စည်းမျဉ်းများကို ပြောင်းလဲပေးသည်။',
        'ဖုန်းအသုံးပြုသူများ အဆင်ပြေစေရန် ပုံသေမဟုတ်ဘဲ ပြောင်းလဲလွယ်သော ယူနစ်များကို အသုံးပြုပါ။'
      ]
    },

    // -------------------------------------------------------------------------
    // Lesson 7: JavaScript and Interactivity
    // -------------------------------------------------------------------------
    {
      id: 'web-7',
      lessonNumber: 7,
      titleEn: 'JavaScript and Interactivity',
      titleMy: 'JavaScript နှင့် အပြန်အလှန် လှုပ်ရှားမှုများ',
      shortIntroEn: 'Give your static page a living brain! Discover how JavaScript brings websites alive with real calculations, animations, and game logic.',
      shortIntroMy: 'ငြိမ်သက်နေတဲ့ စာမျက်နှာကို သက်ရှိ ဦးနှောက် ထည့်ပေးလိုက်ကြရအောင်! JavaScript က ဝဘ်ဆိုဒ်တွေကို အသက်ဝင် လှုပ်ရှားစေပုံကို လေ့လာကြမယ်။',
      learningObjectivesEn: [
        'Understand the role of JavaScript as the programming language of the browser.',
        'Learn what the Document Object Model (DOM) is.',
        'Use `document.getElementById()` to find and modify HTML elements dynamically.'
      ],
      learningObjectivesMy: [
        'JavaScript သည် Browser ၏ တကယ့် Programming ဘာသာစကား ဖြစ်ပုံကို နားလည်စေရန်။',
        'Document Object Model (DOM) ဆိုသည်မှာ အဘယ်နည်းကို သိရှိစေရန်။',
        '`document.getElementById()` ဖြင့် HTML Element များကို တိုက်ရိုက် ရှာဖွေ ပြင်ဆင်ပုံကို တတ်မြောက်စေရန်။'
      ],
      explanationEn: [
        'HTML gave us the skeleton, and CSS made it look stunning. But right now, our webpage is like a pretty stone statue — it cannot move, think, or react to user actions. That is why we need **JavaScript**!',
        'JavaScript is the full-fledged programming language that runs directly inside your web browser. It can calculate math, fetch live weather data, validate forms, and animate characters.',
        'How does JavaScript talk to HTML? Through the **DOM (Document Object Model)**! The DOM is a live tree representation of every element on your page. Using commands like `document.getElementById("myTitle").textContent = "New Title!";`, JavaScript can instantly change text, swap colors, or add elements on the fly!'
      ],
      explanationMy: [
        'HTML က အရိုးခေါင်း တည်ဆောက်ပေးပြီး CSS က လှပအောင် ဆေးခြယ်ပေးခဲ့သည်။ သို့သော် လောလောဆယ်တွင် ကျွန်ုပ်တို့၏ ဝဘ်ဆိုဒ်သည် လှပသော ကျောက်ဆစ်ရုပ်တုကြီးကဲ့သို့ ငြိမ်သက်နေဆဲ ဖြစ်သည်။ အသက်ဝင်စေရန် **JavaScript** လိုအပ်ပါသည်။',
        'JavaScript သည် Web Browser အတွင်း တိုက်ရိုက် အလုပ်လုပ်သော တကယ့် Programming ဘာသာစကား ဖြစ်သည်။ ၎င်းသည် သင်္ချာတွက်ချက်ခြင်း၊ မိုးလေဝသ အချက်အလက် ရယူခြင်းနှင့် ကာတွန်းများ လှုပ်ရှားစေခြင်းတို့ကို လုပ်ဆောင်နိုင်သည်။',
        'JavaScript က HTML နှင့် မည်သို့ စကားပြောသနည်း? **DOM (Document Object Model)** မှတစ်ဆင့် ဖြစ်သည်! DOM သည် စာမျက်နှာပေါ်ရှိ Element အားလုံးကို အပင်အခက်အလက်ကဲ့သို့ တိုက်ရိုက် ချိတ်ဆက်ပေးထားသည်။ `document.getElementById("myTitle").textContent = "ခေါင်းစဉ်အသစ်!";` ဟု ရေးသားခြင်းဖြင့် စာသားများကို လျှပ်တစ်ပြက်အတွင်း ပြောင်းလဲပစ်နိုင်ပါသည်။'
      ],
      diagram: {
        type: 'dom-tree-branches',
        captionEn: 'The DOM Tree: document -> html -> body -> h1, p, button. JavaScript can touch any branch!',
        captionMy: 'DOM သစ်ပင်: စာရွက်စာတမ်း -> html -> body -> ခေါင်းစဉ်၊ စာပိုဒ်၊ ခလုတ်။ JS က အကိုင်းအခက်တိုင်းကို ပြင်ဆင်နိုင်သည်!',
        altEn: 'Hierarchical tree diagram showing Document root branching into HTML, then HEAD and BODY, down to P and BUTTON',
        altMy: 'DOM Tree ၏ အဆင့်ဆင့် ဖွဲ့စည်းပုံပြ မျဉ်းကားချပ်'
      },
      analogyEn: {
        title: 'The Electrician and Puppeteer',
        description: 'Think of a wooden puppet: The carved wood is HTML. The painted clothes are CSS. JavaScript is the puppeteer who pulls the strings, making the puppet dance, talk, wink, and jump whenever the audience claps!'
      },
      analogyMy: {
        title: 'ရုပ်သေးကြိုးဆွဲ ဆရာ ဥပမာ',
        description: 'ရုပ်သေးရုပ်လေးတစ်ခုကို စဉ်းစားကြည့်ပါ: ထွင်းထားသော သစ်သားသည် HTML ဖြစ်သည်။ လှပသော အဝတ်အစားသည် CSS ဖြစ်သည်။ JavaScript သည် ပရိသတ်လက်ခုပ်တီးတိုင်း ရုပ်သေးရုပ်ကို ကခုန်၊ စကားပြောအောင် ကြိုးဆွဲလှုပ်ရှားပေးသော ရုပ်သေးဆရာ ဖြစ်ပါသည်။'
      },
      workedExampleEn: {
        title: 'Changing Webpage Text with JavaScript',
        scenario: 'A button changes the headline from "Welcome" to "You unlocked magic!".',
        steps: [
          { stepNumber: 1, instruction: '<h1 id="headline">Welcome</h1>', outcome: 'HTML creates the element with a unique identifier `id="headline"`.' },
          { stepNumber: 2, instruction: '<button id="btn">Cast Spell</button>', outcome: 'HTML creates the interactive button.' },
          { stepNumber: 3, instruction: 'document.getElementById("btn").onclick = function() {', outcome: 'Listens for when the user clicks the button.' },
          { stepNumber: 4, instruction: '  document.getElementById("headline").textContent = "✨ Magic Unlocked!";', outcome: 'Instantly updates the headline text on screen!' }
        ]
      },
      workedExampleMy: {
        title: 'JavaScript ဖြင့် စာသားပြောင်းလဲခြင်း ဥပမာ',
        scenario: 'ခလုတ်နှိပ်လိုက်သည်နှင့် ခေါင်းစဉ်ကို "ကြိုဆိုပါသည်" မှ "မှော်စွမ်းအား ရရှိပြီ!" သို့ ပြောင်းလဲခြင်း။',
        steps: [
          { stepNumber: 1, instruction: '<h1 id="headline">ကြိုဆိုပါသည်</h1>', outcome: '`id="headline"` အမည်တပ်ထားသော ခေါင်းစဉ်ကို HTML ဖြင့် ဖန်တီးသည်။' },
          { stepNumber: 2, instruction: '<button id="btn">မှော်မန်းမှုတ်ပါ</button>', outcome: 'နှိပ်ရန် ခလုတ်ကို ဖန်တီးသည်။' },
          { stepNumber: 3, instruction: 'document.getElementById("btn").onclick = function() {', outcome: 'ခလုတ်နှိပ်မည့်အချိန်ကို JavaScript က စောင့်ကြည့်သည်။' },
          { stepNumber: 4, instruction: '  document.getElementById("headline").textContent = "✨ မှော်စွမ်းအား ပွင့်သွားပါပြီ!";', outcome: 'ခေါင်းစဉ်စာသားကို ချက်ချင်း ပြောင်းလဲပေးလိုက်သည်။' }
        ]
      },
      activity: {
        type: 'code-sandbox',
        titleEn: 'DOM Magic Wand Sandbox',
        titleMy: 'DOM မှော်တုတ်တံ စမ်းသပ်ခန်း',
        instructionsEn: 'Click the "Change Text" button in the preview window to see JavaScript update the DOM live!',
        instructionsMy: 'အစမ်းကြည့် ပြတင်းပေါက်ရှိ ခလုတ်ကို နှိပ်ပြီး JavaScript က စာသားကို ချက်ချင်း ပြောင်းလဲပေးပုံကို ကြည့်ရှုပါ။',
        initialData: {
          html: '<h2 id="msg">JavaScript is waiting... ⏳</h2>\n<button id="magicBtn">Transform Text ✨</button>',
          css: 'body { font-family: sans-serif; padding: 20px; background: #fff8e6; text-align: center; }\nbutton {\n  background: #ffc436;\n  border: none;\n  padding: 12px 24px;\n  font-size: 16px;\n  border-radius: 999px;\n  cursor: pointer;\n  font-weight: bold;\n}',
          js: 'document.getElementById("magicBtn").onclick = function() {\n  const msg = document.getElementById("msg");\n  msg.textContent = "🚀 BOOM! JavaScript transformed the DOM!";\n  msg.style.color = "#6c47ff";\n};'
        }
      },
      quizQuestions: [
        {
          id: 'q-w7-1',
          questionEn: 'What is the primary role of JavaScript in web development?',
          questionMy: 'Web Development တွင် JavaScript ၏ အဓိက အခန်းကဏ္ဍမှာ အဘယ်နည်း?',
          options: [
            { id: 'a', textEn: 'Adding dynamic behavior, interactivity, and logic to webpages', textMy: 'ဝဘ်စာမျက်နှာများသို့ လှုပ်ရှားတုံ့ပြန်မှု၊ အပြန်အလှန်ဆက်သွယ်မှုနှင့် Logic များ ထည့်သွင်းပေးခြင်း' },
            { id: 'b', textEn: 'Turning off the computer screen automatically', textMy: 'မျက်နှာပြင်ကို အလိုအလျောက် ပိတ်ပစ်ခြင်း' },
            { id: 'c', textEn: 'Formatting text documents for physical printers', textMy: 'ပရင်တာ ထုတ်ရန် စာရွက်ပုံစံ ပြင်ဆင်ခြင်း' },
            { id: 'd', textEn: 'Cleaning computer dust', textMy: 'ကွန်ပျူတာ ဖုန်သုတ်ခြင်း' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Correct! JavaScript powers client-side reactivity and dynamic web applications.',
          explanationMy: 'မှန်ကန်ပါတယ်! JavaScript သည် ဝဘ်စာမျက်နှာများကို အသက်ဝင် လှုပ်ရှားစေသော ဘာသာစကား ဖြစ်သည်။'
        },
        {
          id: 'q-w7-2',
          questionEn: 'What does "DOM" stand for in browser web development?',
          questionMy: 'Browser တွင် "DOM" ၏ အပြည့်အစုံမှာ အဘယ်နည်း?',
          options: [
            { id: 'a', textEn: 'Document Object Model', textMy: 'Document Object Model' },
            { id: 'b', textEn: 'Digital Output Machine', textMy: 'Digital Output Machine' },
            { id: 'c', textEn: 'Desktop Operating Mode', textMy: 'Desktop Operating Mode' },
            { id: 'd', textEn: 'Data Online Manager', textMy: 'Data Online Manager' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Spot on! The Document Object Model is the live tree interface that JS interacts with.',
          explanationMy: 'မှန်ပါတယ်! DOM ၏ အပြည့်အစုံမှာ Document Object Model ဖြစ်သည်။'
        },
        {
          id: 'q-w7-3',
          questionEn: 'Which JavaScript method selects an HTML element using its unique ID attribute?',
          questionMy: 'HTML Element တစ်ခုကို ၎င်း၏ သီးသန့် ID အမည်ဖြင့် ရှာဖွေရယူရန် မည်သည့် JavaScript Method ကို သုံးသနည်း?',
          options: [
            { id: 'a', textEn: 'document.getElementById("someId")', textMy: 'document.getElementById("someId")' },
            { id: 'b', textEn: 'findMyBoxNow()', textMy: 'findMyBoxNow()' },
            { id: 'c', textEn: 'search.webpage.please()', textMy: 'search.webpage.please()' },
            { id: 'd', textEn: 'grabElement#id', textMy: 'grabElement#id' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Awesome! `document.getElementById()` is the most common DOM query method.',
          explanationMy: 'အရမ်းတော်တယ်! `document.getElementById()` သည် Element များကို ID ဖြင့် ရှာဖွေသည့် အဓိက နည်းလမ်း ဖြစ်သည်။'
        }
      ],
      summaryEn: [
        'JavaScript is the browser’s native programming language for interactivity.',
        'The DOM (Document Object Model) represents HTML as a live, modifiable tree.',
        'Use `document.getElementById()` to find and dynamically change content and styles.'
      ],
      summaryMy: [
        'JavaScript သည် Browser ၏ မူရင်း အပြန်အလှန် လှုပ်ရှားမှု ဘာသာစကား ဖြစ်သည်။',
        'DOM သည် HTML စာမျက်နှာကို တိုက်ရိုက် ပြင်ဆင်နိုင်သော အပင်သဖွယ် ချိတ်ဆက်ပေးသည်။',
        '`document.getElementById()` ဖြင့် အကြောင်းအရာနှင့် ဒီဇိုင်းများကို တိုက်ရိုက် ပြောင်းလဲနိုင်သည်။'
      ]
    },

    // -------------------------------------------------------------------------
    // Lesson 8: Variables, Conditions, and Functions in JavaScript
    // -------------------------------------------------------------------------
    {
      id: 'web-8',
      lessonNumber: 8,
      titleEn: 'Variables, Conditions, and Functions in JS',
      titleMy: 'JavaScript ထဲက Variables, Conditions နှင့် Functions',
      shortIntroEn: 'Take the core programming superpowers you learned in Course 1 and see how they are written in real JavaScript syntax!',
      shortIntroMy: 'သင်တန်း ၁ မှာ သင်ယူခဲ့တဲ့ Coding စွမ်းအားတွေကို တကယ့် JavaScript Code အနေနဲ့ ဘယ်လို ရေးသားသလဲဆိုတာ လေ့လာကြမယ်!',
      learningObjectivesEn: [
        'Declare variables using `let` and `const`.',
        'Write `if / else` condition statements in JavaScript syntax.',
        'Define and call reusable functions that take parameters and return values.'
      ],
      learningObjectivesMy: [
        '`let` နှင့် `const` တို့ကို သုံး၍ Variables များ သတ်မှတ်တတ်စေရန်။',
        'JavaScript ပုံစံဖြင့် `if / else` ဆုံးဖြတ်ချက်များကို ရေးသားနိုင်စေရန်။',
        'Parameters များနှင့် တန်ဖိုးပြန်ပေးသော Functions များကို တည်ဆောက်ခေါ်ယူနိုင်စေရန်။'
      ],
      explanationEn: [
        'Remember Course 1 when we learned about variables (labeled boxes), conditions (smart choices), and functions (reusable packs of code)? Now you get to see how real-world web developers write them in **JavaScript**!',
        '**Variables**: We use `let` for values that change (like `let score = 0;`), and `const` for values that stay constant (like `const maxLives = 3;`).',
        '**Conditions**: We write: `if (score >= 100) { alert("You Win!"); } else { alert("Keep going!"); }`.',
        '**Functions**: We write: `function addPoints(pts) { score += pts; updateDisplay(); }`. When you call `addPoints(10);`, the computer runs those instructions instantly!'
      ],
      explanationMy: [
        'သင်တန်း ၁ တုန်းက Variables (သေတ္တာများ)၊ Conditions (ဆုံးဖြတ်ချက်များ) နှင့် Functions (ပြန်သုံးနိုင်သော Code) များကို မှတ်မိပါသလား? အခု တကယ့် ဝဘ်ပညာရှင်တွေ **JavaScript** ထဲမှာ ဘယ်လို ရေးကြသလဲ ကြည့်ကြပါမည်!',
        '**Variables**: ပြောင်းလဲမည့် တန်ဖိုးများအတွက် `let` ကို သုံးပြီး (ဥပမာ `let score = 0;`)၊ အမြဲတမ်း ပုံသေဖြစ်နေမည့် အရာများအတွက် `const` ကို သုံးပါသည် (ဥပမာ `const maxLives = 3;`)။',
        '**Conditions**: ဤသို့ ရေးသားသည်: `if (score >= 100) { alert("အနိုင်ရပါပြီ!"); } else { alert("ဆက်ကြိုးစားပါ!"); }`။',
        '**Functions**: ဤသို့ ရေးသားသည်: `function addPoints(pts) { score += pts; updateDisplay(); }`။ `addPoints(10);` ဟု ခေါ်လိုက်သည်နှင့် ရမှတ်များ တိုးသွားမည် ဖြစ်သည်။'
      ],
      diagram: {
        type: 'js-syntax-trio',
        captionEn: 'JavaScript Syntax: const/let (Variables) + if/else (Conditions) + function() (Reusable actions)!',
        captionMy: 'JavaScript ပုံစံ: const/let (Variables) + if/else (Conditions) + function() (Functions)!',
        altEn: 'Three side-by-side code blocks demonstrating JS variable declaration, if/else branch, and function declaration',
        altMy: 'JavaScript syntax ပုံစံ ၃ ခု နှိုင်းယှဉ်ပြသထားသော ပုံ'
      },
      analogyEn: {
        title: 'Grammar in a New Language',
        description: 'In English, you say "The cat is fast". In Burmese, you say "ကြောင်သည် မြန်သည်". The meaning is identical; only the grammar and symbols changed! Similarly, the programming concepts you learned in Course 1 are the exact same — JavaScript is just the browser’s dialect.'
      },
      analogyMy: {
        title: 'ဘာသာစကားအသစ်၏ သဒ္ဒါ ဥပမာ',
        description: 'အင်္ဂလိပ်လို "The cat is fast" ဟု ပြောသလို မြန်မာလို "ကြောင်သည် မြန်သည်" ဟု ပြောကြသည်။ အဓိပ္ပာယ်မှာ အတူတူဖြစ်ပြီး သဒ္ဒါနှင့် စကားလုံးသာ ပြောင်းသွားခြင်း ဖြစ်သည်။ ထိုနည်းတူ သင်တန်း ၁ က အယူအဆများသည် JavaScript ၏ သဒ္ဒါပုံစံအဖြစ် ပြောင်းလဲသွားခြင်းသာ ဖြစ်သည်။'
      },
      workedExampleEn: {
        title: 'A Coin Counter Function in JavaScript',
        scenario: 'Tracking coins and checking if the player unlocked a bonus star.',
        steps: [
          { stepNumber: 1, instruction: 'let coins = 0;', outcome: 'Creates a variable holding the number 0.' },
          { stepNumber: 2, instruction: 'function collectCoin() { coins++; }', outcome: 'Function increments the coin count by 1.' },
          { stepNumber: 3, instruction: 'if (coins >= 5) { unlockStar(); }', outcome: 'Condition triggers bonus when 5 coins are gathered.' },
          { stepNumber: 4, instruction: 'Call: collectCoin();', outcome: 'Coins count updates seamlessly!' }
        ]
      },
      workedExampleMy: {
        title: 'JavaScript ဖြင့် အကြွေစေ့ ရေတွက်ခြင်း ဥပမာ',
        scenario: 'အကြွေစေ့များ ရေတွက်ပြီး ၅ ပြားပြည့်ပါက ကြယ်ပွင့်ဆု ချီးမြှင့်ခြင်း။',
        steps: [
          { stepNumber: 1, instruction: 'let coins = 0;', outcome: 'တန်ဖိုး ၀ ဖြင့် Variable သတ်မှတ်သည်။' },
          { stepNumber: 2, instruction: 'function collectCoin() { coins++; }', outcome: 'Function က အကြွေစေ့ ၁ ပြား တိုးပေးသည်။' },
          { stepNumber: 3, instruction: 'if (coins >= 5) { unlockStar(); }', outcome: '၅ ပြားပြည့်ပါက အပိုဆုကြယ် ပေးမည့် Condition စစ်သည်။' },
          { stepNumber: 4, instruction: 'ခေါ်ယူခြင်း: collectCoin();', outcome: 'အကြွေစေ့ အရေအတွက် အောင်မြင်စွာ တိုးသွားသည်။' }
        ]
      },
      activity: {
        type: 'code-sandbox',
        titleEn: 'JavaScript Interactive Counter',
        titleMy: 'JavaScript ကိန်းဂဏန်း ရေတွက်စက်',
        instructionsEn: 'Click the +1 button to see the variable increment and trigger a special celebration message when you hit 5!',
        instructionsMy: '+1 ခလုတ်ကို နှိပ်ပြီး Variable တိုးလာပုံနှင့် ၅ ပြည့်သည့်အခါ ဂုဏ်ပြုစာ ပေါ်လာပုံကို စမ်းသပ်ပါ။',
        initialData: {
          html: '<h3>Click Counter: <span id="count">0</span></h3>\n<button id="addBtn">+1 Point ⚡</button>\n<p id="reward" style="color: #2ecc71; font-weight: bold;"></p>',
          css: 'body { font-family: sans-serif; padding: 20px; text-align: center; }\nbutton {\n  background: #6c47ff;\n  color: white;\n  padding: 10px 20px;\n  border-radius: 8px;\n  border: none;\n  cursor: pointer;\n}',
          js: 'let score = 0;\ndocument.getElementById("addBtn").onclick = function() {\n  score++;\n  document.getElementById("count").textContent = score;\n  if (score === 5) {\n    document.getElementById("reward").textContent = "🎉 Awesome! You unlocked the 5-Point Badge!";\n  }\n};'
        }
      },
      quizQuestions: [
        {
          id: 'q-w8-1',
          questionEn: 'In modern JavaScript, which keyword is used to declare a variable that CAN be reassigned later?',
          questionMy: 'ခေတ်မီ JavaScript တွင် နောက်မှ တန်ဖိုးပြန်ပြောင်းနိုင်သော Variable ကို မည်သည့် Keyword ဖြင့် သတ်မှတ်သနည်း?',
          options: [
            { id: 'a', textEn: 'let', textMy: 'let' },
            { id: 'b', textEn: 'const', textMy: 'const' },
            { id: 'c', textEn: 'fixed', textMy: 'fixed' },
            { id: 'd', textEn: 'permanent', textMy: 'permanent' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Correct! `let` is used for variables whose values change over time; `const` is for constants.',
          explanationMy: 'မှန်ကန်ပါတယ်! ပြောင်းလဲနိုင်သော တန်ဖိုးများအတွက် `let` ကို အသုံးပြုပြီး ပုံသေများအတွက် `const` ကို သုံးသည်။'
        },
        {
          id: 'q-w8-2',
          questionEn: 'How do you test if a variable `score` is equal to 10 in JavaScript?',
          questionMy: 'JavaScript တွင် `score` တန်ဖိုးသည် ၁၀ နှင့် ညီမျှမှု ရှိမရှိကို မည်သို့ စစ်ဆေးရမည်နည်း?',
          options: [
            { id: 'a', textEn: 'if (score === 10)', textMy: 'if (score === 10)' },
            { id: 'b', textEn: 'if score is 10 please', textMy: 'if score is 10 please' },
            { id: 'c', textEn: 'score = 10 ?', textMy: 'score = 10 ?' },
            { id: 'd', textEn: 'checkIfTen(score)', textMy: 'checkIfTen(score)' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Spot on! The strict equality operator `===` tests for equal value and type.',
          explanationMy: 'မှန်ပါတယ်! တန်ဖိုးတူညီမှု စစ်ဆေးရန် `===` သင်္ကေတကို အသုံးပြုရပါသည်။'
        },
        {
          id: 'q-w8-3',
          questionEn: 'What does a function do when it reaches a `return` statement?',
          questionMy: 'Function တစ်ခုသည် `return` ညွှန်ကြားချက်သို့ ရောက်ရှိသောအခါ ဘာလုပ်ဆောင်သနည်း?',
          options: [
            { id: 'a', textEn: 'It sends back an output value and exits the function', textMy: 'ရလဒ်တန်ဖိုးကို ပြန်လည်ပေးပို့ပြီး Function ထဲမှ ထွက်ခွာသွားသည်' },
            { id: 'b', textEn: 'It restarts your computer', textMy: 'ကွန်ပျူတာကို ပြန်စက်နိုးသည်' },
            { id: 'c', textEn: 'It plays a loud siren', textMy: 'ကျယ်လောင်သော ဥဩသံ မြည်သည်' },
            { id: 'd', textEn: 'It deletes the HTML file', textMy: 'HTML ဖိုင်ကို ဖျက်ပစ်သည်' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Awesome! `return` outputs a computed value back to the caller.',
          explanationMy: 'အရမ်းတော်တယ်! `return` သည် တွက်ချက်ရရှိသော ရလဒ်ကို ခေါ်ယူသူထံသို့ ပြန်ပေးပို့ခြင်း ဖြစ်သည်။'
        }
      ],
      summaryEn: [
        'Use `let` for changeable variables and `const` for unchangeable values.',
        'JavaScript uses `if / else` with curly braces `{}` and parentheses `()`.',
        'Functions organize logic into reusable callable routines that can return values.'
      ],
      summaryMy: [
        'ပြောင်းလဲနိုင်သော တန်ဖိုးအတွက် `let` နှင့် ပုံသေတန်ဖိုးအတွက် `const` ကို သုံးသည်။',
        'JavaScript တွင် `if / else` ကို ကွင်းစကွင်းပိတ် `()` နှင့် တွန့်ကွင်း `{}` ဖြင့် ရေးသည်။',
        'Functions များက Logic များကို စနစ်တကျ ပြန်လည်သုံးနိုင်အောင် စုစည်းပေးသည်။'
      ]
    },

    // -------------------------------------------------------------------------
    // Lesson 9: Events and Button Clicks
    // -------------------------------------------------------------------------
    {
      id: 'web-9',
      lessonNumber: 9,
      titleEn: 'Events and Button Clicks',
      titleMy: 'Events (ဖြစ်ရပ်များ) နှင့် ခလုတ်နှိပ်ခြင်းများ',
      shortIntroEn: 'Make your website listen! Discover how `addEventListener()` lets your code react to clicks, keypresses, mouse hovers, and form inputs.',
      shortIntroMy: 'သင့်ဝဘ်ဆိုဒ်ကို နားစွင့်တတ်အောင် သင်ပေးပါ! `addEventListener()` ဖြင့် Click နှိပ်ခြင်း၊ ကီးနှိပ်ခြင်းနှင့် လှုပ်ရှားမှုများကို တုံ့ပြန်ပုံ လေ့လာကြမယ်။',
      learningObjectivesEn: [
        'Understand event listeners in modern JavaScript.',
        'Use `element.addEventListener("click", callback)` to handle user actions.',
        'Explore common events: `click`, `keydown`, `mouseover`, and `input`.'
      ],
      learningObjectivesMy: [
        'ခေတ်မီ JavaScript ရှိ Event Listeners များကို နားလည်စေရန်။',
        'အသုံးပြုသူ၏ လုပ်ဆောင်ချက်များကို တုံ့ပြန်ရန် `addEventListener("click", ...)` ကို အသုံးပြုတတ်စေရန်။',
        'အဖြစ်များသော Events များ: `click`, `keydown`, `mouseover` နှင့် `input` တို့ကို သိရှိစေရန်။'
      ],
      explanationEn: [
        'In Lesson 4 of Course 1, we learned that events are triggers from the outside world. Now let’s see how professional web developers connect them in code!',
        'The gold standard method is **`addEventListener()`**. You attach a listener to an HTML element, tell it which event to listen for (like `"click"` or `"keydown"`), and provide a function to run when the event occurs.',
        'For example: `button.addEventListener("click", () => { alert("Clicked!"); });`. This keeps your code modular and allows you to attach multiple different event reactions to the same element without cluttering your HTML!'
      ],
      explanationMy: [
        'သင်တန်း ၁ တွင် Event ဆိုသည်မှာ အပြင်လောကမှ အစပျိုးဖြစ်ရပ်များဖြစ်ကြောင်း လေ့လာခဲ့ပြီး ဖြစ်သည်။ အခုအခါ ဝဘ်ပညာရှင်များ Code ဖြင့် မည်သို့ ချိတ်ဆက်ပုံကို ကြည့်ကြပါမည်!',
        'အကောင်းဆုံး စံချိန်မီ နည်းလမ်းမှာ **`addEventListener()`** ဖြစ်သည်။ HTML Element တစ်ခုတွင် Listener ချိတ်ဆွဲလိုက်ပြီး မည်သည့် Event ကို စောင့်ဆိုင်းရမည် (ဥပမာ `"click"` သို့မဟုတ် `"keydown"`) နှင့် ဖြစ်လာပါက မည်သည့် Function လုပ်ရမည်ကို သတ်မှတ်ပေးခြင်း ဖြစ်သည်။',
        'ဥပမာ: `button.addEventListener("click", () => { alert("နှိပ်လိုက်ပါပြီ!"); });`။ ဤနည်းလမ်းသည် Code များကို သန့်ရှင်းစေပြီး ခလုတ်တစ်ခုတည်းတွင် တုံ့ပြန်မှု အမျိုးမျိုးကို အလွယ်တကူ ထည့်သွင်းနိုင်စေပါသည်။'
      ],
      diagram: {
        type: 'event-listener-circuit',
        captionEn: 'User Clicks Button -> Event Fires -> addEventListener triggers Callback Function!',
        captionMy: 'အသုံးပြုသူက ခလုတ်နှိပ်သည် -> Event စတင်သည် -> addEventListener က Function ကို အလုပ်လုပ်စေသည်!',
        altEn: 'Flow diagram showing user mouse clicking button, firing event signal to listener which calls function',
        altMy: 'ခလုတ်နှိပ်ခြင်းမှ Function အလုပ်လုပ်သွားပုံပြ မျဉ်းကားချပ်'
      },
      analogyEn: {
        title: 'The Loyal Security Guard',
        description: 'Think of an event listener like a loyal guard posted at the door: You tell the guard: "If anyone knocks on the door (`"click"`), say welcome and open it (`callback function`)." The guard stands alert 24/7 waiting for that exact knock!'
      },
      analogyMy: {
        title: 'သစ္စာရှိသော တံခါးစောင့် ဥပမာ',
        description: 'Event listener သည် တံခါးဝရှိ သစ္စာရှိသော အစောင့်တစ်ဦးနှင့် တူပါသည်: သင်က "တံခါးခေါက်သံ ကြားပါက (`"click"`), ကြိုဆိုပြီး တံခါးဖွင့်ပေးပါ (`callback function`)" ဟု မှာထားခြင်း ဖြစ်သည်။ အစောင့်သည် တံခါးခေါက်သံ ကြားသည်နှင့် ချက်ချင်း တာဝန်ထမ်းဆောင်ပေးသည်။'
      },
      workedExampleEn: {
        title: 'Dark Mode / Light Mode Toggle Button',
        scenario: 'A button toggles the page between cheerful light mode and nighttime dark mode.',
        steps: [
          { stepNumber: 1, instruction: 'const themeBtn = document.getElementById("themeBtn");', outcome: 'Grabs the button from the DOM.' },
          { stepNumber: 2, instruction: 'themeBtn.addEventListener("click", () => {', outcome: 'Attaches the click event listener.' },
          { stepNumber: 3, instruction: '  document.body.classList.toggle("dark-mode");', outcome: 'Swaps CSS classes on the body element.' },
          { stepNumber: 4, instruction: '});', outcome: 'Background shifts from white to deep midnight blue with one click!' }
        ]
      },
      workedExampleMy: {
        title: 'Dark Mode ပြောင်းလဲသည့် ခလုတ် ဥပမာ',
        scenario: 'ခလုတ်နှိပ်လိုက်သည်နှင့် စာမျက်နှာကို မနက်ခင်းပုံစံမှ ညဘက် Dark Mode သို့ ပြောင်းလဲခြင်း။',
        steps: [
          { stepNumber: 1, instruction: 'const themeBtn = document.getElementById("themeBtn");', outcome: 'DOM မှ ခလုတ်ကို ရယူသည်။' },
          { stepNumber: 2, instruction: 'themeBtn.addEventListener("click", () => {', outcome: 'Click နှိပ်မည့် Event ကို ချိတ်ဆွဲသည်။' },
          { stepNumber: 3, instruction: '  document.body.classList.toggle("dark-mode");', outcome: 'Body ပေါ်တွင် Dark-mode CSS class ကို ဖွင့်/ပိတ် ပြုလုပ်သည်။' },
          { stepNumber: 4, instruction: '});', outcome: 'ခလုတ်တစ်ချက် နှိပ်ရုံဖြင့် နောက်ခံအရောင် မည်းနက်သော အပြာရောင်သို့ ချောမွေ့စွာ ပြောင်းသွားသည်။' }
        ]
      },
      activity: {
        type: 'code-sandbox',
        titleEn: 'Interactive Color Switcher Button',
        titleMy: 'အရောင်ပြောင်းလဲခြင်း စမ်းသပ်ခန်း',
        instructionsEn: 'Click the button in the sandbox to fire the event listener and cycle through fun background colors!',
        instructionsMy: 'စမ်းသပ်ခန်းရှိ ခလုတ်ကို နှိပ်ပြီး Event listener က နောက်ခံအရောင်များကို လှလှပပ ပြောင်းလဲပေးပုံကို ကြည့်ရှုပါ။',
        initialData: {
          html: '<div id="partyBox">\n  <h2>Party Box! 🎉</h2>\n  <button id="colorBtn">Change My Color</button>\n</div>',
          css: '#partyBox {\n  padding: 30px;\n  background: #2ecc71;\n  color: white;\n  border-radius: 16px;\n  text-align: center;\n  transition: background 0.3s ease;\n}\nbutton {\n  padding: 10px 20px;\n  font-size: 16px;\n  border-radius: 8px;\n  border: none;\n  cursor: pointer;\n  background: white;\n  color: #1e2448;\n  font-weight: bold;\n}',
          js: 'const colors = ["#2ecc71", "#6c47ff", "#22c7d9", "#ff6b6b", "#ffc436"];\nlet idx = 0;\ndocument.getElementById("colorBtn").addEventListener("click", function() {\n  idx = (idx + 1) % colors.length;\n  document.getElementById("partyBox").style.background = colors[idx];\n});'
        }
      },
      quizQuestions: [
        {
          id: 'q-w9-1',
          questionEn: 'Which modern JavaScript method attaches an event response to an element?',
          questionMy: 'Element တစ်ခုတွင် Event တုံ့ပြန်မှုကို ချိတ်ဆွဲရန် မည်သည့် ခေတ်မီ JavaScript Method ကို သုံးသနည်း?',
          options: [
            { id: 'a', textEn: 'element.addEventListener("event", callback)', textMy: 'element.addEventListener("event", callback)' },
            { id: 'b', textEn: 'element.attachMyListenerNow()', textMy: 'element.attachMyListenerNow()' },
            { id: 'c', textEn: 'element.listenToUserPlease()', textMy: 'element.listenToUserPlease()' },
            { id: 'd', textEn: 'element.whenUserClicks()', textMy: 'element.whenUserClicks()' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Correct! `addEventListener()` is the web standard for handling all browser events.',
          explanationMy: 'မှန်ကန်ပါတယ်! `addEventListener()` သည် Web စံချိန်မီ Event ချိတ်ဆွဲသည့် နည်းလမ်း ဖြစ်သည်။'
        },
        {
          id: 'q-w9-2',
          questionEn: 'Which event name triggers when a user presses a key down on their keyboard?',
          questionMy: 'အသုံးပြုသူက ကီးဘုတ်ခလုတ်တစ်ခုကို နှိပ်လိုက်သောအခါ မည်သည့် Event အမည် ဖြစ်ပေါ်သနည်း?',
          options: [
            { id: 'a', textEn: 'keydown', textMy: 'keydown' },
            { id: 'b', textEn: 'fingerPress', textMy: 'fingerPress' },
            { id: 'c', textEn: 'keyboardHit', textMy: 'keyboardHit' },
            { id: 'd', textEn: 'typeword', textMy: 'typeword' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Spot on! The `"keydown"` and `"keyup"` events track physical keyboard interactions.',
          explanationMy: 'မှန်ပါတယ်! ကီးဘုတ်နှိပ်ခြင်းများကို `"keydown"` Event ဖြင့် စောင့်ကြည့်ဖမ်းယူနိုင်ပါသည်။'
        },
        {
          id: 'q-w9-3',
          questionEn: 'Can you attach more than one event listener to the same button?',
          questionMy: 'ခလုတ်တစ်ခုတည်းတွင် Event Listener တစ်ခုထက်ပို၍ ချိတ်ဆွဲနိုင်ပါသလား?',
          options: [
            { id: 'a', textEn: 'Yes! You can attach multiple listeners (e.g. one for click, one for mouseover)', textMy: 'ချိတ်ဆွဲနိုင်ပါသည်! နှိပ်ခြင်းအတွက် တစ်ခု၊ မောက်စ်တင်ခြင်းအတွက် တစ်ခု စသဖြင့် အများအပြား ချိတ်ဆွဲနိုင်သည်' },
            { id: 'b', textEn: 'No, computers explode if you have 2 listeners', textMy: 'မရပါ၊ ၂ ခုရှိပါက ကွန်ပျူတာ ပေါက်ကွဲသွားမည်' },
            { id: 'c', textEn: 'Only on Thursdays', textMy: 'ကြာသပတေးနေ့များတွင်သာ ရသည်' },
            { id: 'd', textEn: 'Only if the button is yellow', textMy: 'ခလုတ် အဝါရောင်ဖြစ်မှသာ ရသည်' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Awesome! A major benefit of `addEventListener` is supporting multiple independent callbacks.',
          explanationMy: 'အရမ်းတော်တယ်! `addEventListener` ၏ အဓိက အားသာချက်မှာ Listener မျိုးစုံကို လွတ်လပ်စွာ တွဲစပ်နိုင်ခြင်း ဖြစ်သည်။'
        }
      ],
      summaryEn: [
        '`addEventListener()` connects user actions to JavaScript functions.',
        'Common events include `click`, `keydown`, `mouseover`, and `input`.',
        'Event listeners make websites feel alive, interactive, and fun to explore!'
      ],
      summaryMy: [
        '`addEventListener()` သည် အသုံးပြုသူ၏ လုပ်ဆောင်ချက်များကို JavaScript နှင့် ချိတ်ဆက်ပေးသည်။',
        'အသုံးများသော Events များမှာ `click`, `keydown`, `mouseover`, `input` တို့ ဖြစ်ကြသည်။',
        'Event Listeners များက ဝဘ်ဆိုဒ်ကို သက်ဝင်လှုပ်ရှားပြီး ပျော်ရွှင်စွာ အသုံးပြုနိုင်အောင် ဖန်တီးပေးသည်။'
      ]
    },

    // -------------------------------------------------------------------------
    // Lesson 10: Debugging and Browser Developer Tools
    // -------------------------------------------------------------------------
    {
      id: 'web-10',
      lessonNumber: 10,
      titleEn: 'Debugging and Browser Developer Tools',
      titleMy: 'Debugging နှင့် Browser Developer Tools များ',
      shortIntroEn: 'Every browser has a secret superpowers control panel! Learn how to use DevTools and `console.log()` to inspect and fix web bugs.',
      shortIntroMy: 'Browser တိုင်းမှာ လျှို့ဝှက် စူပါပါဝါ ထိန်းချုပ်ခန်းတစ်ခု ပါရှိပါတယ်! DevTools နှင့် `console.log()` ဖြင့် ဝဘ်အမှားများကို စစ်ဆေးပြင်ဆင်နည်း လေ့လာကြမယ်။',
      learningObjectivesEn: [
        'Open and navigate Browser Developer Tools (Elements tab and Console tab).',
        'Use `console.log()` to print diagnostic variables and trace program execution.',
        'Inspect and temporarily modify HTML/CSS live directly in the browser.'
      ],
      learningObjectivesMy: [
        'Browser Developer Tools (F12) ကို ဖွင့်လှစ်၍ Elements နှင့် Console tabs များကို အသုံးပြုတတ်စေရန်။',
        '`console.log()` ဖြင့် စမ်းသပ်စစ်ဆေးမှု စာသားများကို Console တွင် ထုတ်ပြတတ်စေရန်။',
        'Browser ပေါ်တွင် HTML/CSS များကို တိုက်ရိုက် စမ်းသပ် ပြင်ဆင်ကြည့်တတ်စေရန်။'
      ],
      explanationEn: [
        'Did you know that right now, inside your web browser, there is an invisible professional engineering lab? You can open it by pressing **F12** or right-clicking anywhere and choosing **"Inspect"**! This lab is called **Browser Developer Tools** (DevTools for short).',
        'In DevTools, the **Elements Tab** shows the live HTML and CSS. You can double-click any text or change a background color live on the screen to test ideas!',
        'The **Console Tab** is your JavaScript laboratory. If your code has an error (like a misspelled function name), the Console prints a red error message telling you the exact line number where the bug is hiding. You can also print friendly messages using `console.log("Current score is: " + score);` to inspect your variables as the game plays!'
      ],
      explanationMy: [
        'အခု သင်သုံးနေသော Browser အတွင်းတွင် မမြင်ရသော အင်ဂျင်နီယာ ဓာတ်ခွဲခန်းကြီးတစ်ခု ပါရှိသည်ကို သိပါသလား? **F12** ခလုတ်ကို နှိပ်လိုက်ရုံ သို့မဟုတ် Right-click နှိပ်ပြီး **"Inspect"** ကို ရွေးချယ်ခြင်းဖြင့် ဖွင့်နိုင်ပါသည်။ ၎င်းကို **Browser DevTools** ဟု ခေါ်သည်။',
        'DevTools ထဲရှိ **Elements Tab** တွင် လက်ရှိ HTML နှင့် CSS များကို မြင်တွေ့ရပြီး စာသား သို့မဟုတ် အရောင်များကို ဖန်သားပြင်ပေါ်တွင် တိုက်ရိုက် စမ်းသပ် ပြောင်းလဲကြည့်နိုင်ပါသည်။',
        '**Console Tab** သည် JavaScript အတွက် စမ်းသပ်ခန်း ဖြစ်သည်။ အကယ်၍ Code ထဲတွင် စာလုံးပေါင်းမှားခြင်း စသည့် အမှားများရှိပါက Console တွင် မည်သည့်စာကြောင်း၌ အမှားဖြစ်နေသည်ကို အနီရောင်ဖြင့် တိကျစွာ ပြသပေးသည်။ သင်ကလည်း `console.log("လက်ရှိရမှတ်: " + score);` ဟု ရေးသား၍ ကိန်းဂဏန်းများ မှန်မမှန် အချိန်မရွေး စစ်ဆေးနိုင်ပါသည်။'
      ],
      diagram: {
        type: 'devtools-inspection-split',
        captionEn: 'Browser DevTools: Elements Tab (Inspect HTML/CSS) + Console Tab (Debug JS errors)!',
        captionMy: 'Browser DevTools: Elements Tab (HTML/CSS စစ်ဆေးရန်) + Console Tab (JS အမှားရှာရန်)!',
        altEn: 'Split screenshot showing webpage on the left and Chrome DevTools with Elements and Console on the right',
        altMy: 'ဝဘ်စာမျက်နှာနှင့် DevTools ထိန်းချုပ်ခန်း ယှဉ်တွဲပြသထားသော ပုံ'
      },
      analogyEn: {
        title: 'X-Ray Glasses at the Doctor’s Office',
        description: 'DevTools is like having magical X-Ray glasses: You look through the outer appearance of a webpage, see the underlying HTML skeleton, inspect the CSS muscles, and hear the JavaScript heartbeat in the Console!'
      },
      analogyMy: {
        title: 'ဆရာဝန်၏ ဓာတ်မှန်မျက်မှန် ဥပမာ',
        description: 'DevTools သည် မှော်ဆန်သော ဓာတ်မှန်မျက်မှန်နှင့် တူပါသည်: ဝဘ်ဆိုဒ်၏ အပေါ်ယံ အလှအပကို ထိုးဖောက်ကြည့်ရှုနိုင်ပြီး အတွင်းက HTML အရိုးခေါင်း၊ CSS ကြွက်သားများနှင့် Console ထဲက JavaScript နှလုံးခုန်သံများကို အသေးစိတ် မြင်တွေ့နိုင်စေပါသည်။'
      },
      workedExampleEn: {
        title: 'Debugging a Broken Button with Console',
        scenario: 'A student clicks a button, but nothing happens on screen.',
        steps: [
          { stepNumber: 1, instruction: 'Open DevTools Console', outcome: 'Press F12 and click "Console" tab.' },
          { stepNumber: 2, instruction: 'Read red error message', outcome: '`Uncaught TypeError: document.getElemtById is not a function (app.js:14)`' },
          { stepNumber: 3, instruction: 'Identify typo bug', outcome: 'Notice `getElemtById` is missing the letter "n" (should be `getElementById`).' },
          { stepNumber: 4, instruction: 'Fix code and reload', outcome: 'Correct spelling in editor. Reload page. Button clicks work smoothly!' }
        ]
      },
      workedExampleMy: {
        title: 'Console ဖြင့် အလုပ်မလုပ်သော ခလုတ်ကို ပြင်ဆင်ခြင်း ဥပမာ',
        scenario: 'ခလုတ်နှိပ်သော်လည်း ဖန်သားပြင်ပေါ်တွင် ဘာမှ မဖြစ်လာခြင်း။',
        steps: [
          { stepNumber: 1, instruction: 'DevTools Console ကို ဖွင့်သည်', outcome: 'F12 ကို နှိပ်ပြီး "Console" tab သို့ သွားသည်။' },
          { stepNumber: 2, instruction: 'အနီရောင် အမှားစာသားကို ဖတ်ရှုသည်', outcome: '`Uncaught TypeError: document.getElemtById is not a function (app.js:14)`' },
          { stepNumber: 3, instruction: 'စာလုံးပေါင်း အမှားကို ရှာတွေ့သည်', outcome: '`getElemtById` တွင် "n" စာလုံး ကျန်ခဲ့သည် (မှန်ကန်သည်မှာ `getElementById` ဖြစ်ရမည်)။' },
          { stepNumber: 4, instruction: 'ပြင်ဆင်ပြီး ပြန်လည်စမ်းသပ်သည်', outcome: 'စာလုံးပေါင်း ပြင်လိုက်ပြီးနောက် ခလုတ် ကောင်းမွန်စွာ အလုပ်လုပ်သွားသည်။' }
        ]
      },
      activity: {
        type: 'code-sandbox',
        titleEn: 'Console Logger Studio',
        titleMy: 'Console မှတ်တမ်း စမ်းသပ်ခန်း',
        instructionsEn: 'Click the button in the sandbox to see diagnostic logs printed to the simulated console output box!',
        instructionsMy: 'စမ်းသပ်ခန်းရှိ ခလုတ်ကို နှိပ်ပြီး Console output သေတ္တာထဲတွင် စမ်းသပ်စာသားများ ပေါ်လာပုံကို ကြည့်ရှုပါ။',
        initialData: {
          html: '<h3>Virtual DevTools Terminal</h3>\n<button id="logBtn">Log Debug Message</button>\n<div id="virtualConsole" style="background: #1e2448; color: #2ecc71; padding: 15px; border-radius: 8px; font-family: monospace; margin-top: 15px; min-height: 60px;">[Console Ready...]</div>',
          css: 'body { font-family: sans-serif; padding: 20px; }\nbutton {\n  background: #6c47ff;\n  color: white;\n  padding: 8px 16px;\n  border-radius: 6px;\n  border: none;\n  cursor: pointer;\n}',
          js: 'let count = 0;\ndocument.getElementById("logBtn").onclick = function() {\n  count++;\n  const vCon = document.getElementById("virtualConsole");\n  vCon.innerHTML += "<br>> Click detected! Count is now: " + count;\n  console.log("Debug message: Clicked " + count + " times.");\n};'
        }
      },
      quizQuestions: [
        {
          id: 'q-w10-1',
          questionEn: 'How can you open the Developer Tools control panel in most desktop web browsers?',
          questionMy: 'Desktop Web Browser အများစုတွင် Developer Tools ထိန်းချုပ်ခန်းကို မည်သို့ ဖွင့်နိုင်သနည်း?',
          options: [
            { id: 'a', textEn: 'Press F12 or right-click any element and choose "Inspect"', textMy: 'F12 ခလုတ်ကို နှိပ်ပါ သို့မဟုတ် Right-click နှိပ်ပြီး "Inspect" ကို ရွေးပါ' },
            { id: 'b', textEn: 'Unplug the monitor for 10 seconds', textMy: 'မော်နီတာကြိုးကို ၁၀ စက္ကန့် ဖြုတ်ထားပါ' },
            { id: 'c', textEn: 'Shout into the computer microphone', textMy: 'မိုက်ခရိုဖုန်းထဲသို့ အော်ပြောပါ' },
            { id: 'd', textEn: 'Type the word "browser" 50 times in Word', textMy: 'Word ထဲတွင် "browser" ဟု အကြိမ် ၅၀ ရိုက်ပါ' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Correct! F12 and right-click "Inspect" instantly launch DevTools.',
          explanationMy: 'မှန်ကန်ပါတယ်! F12 သို့မဟုတ် Right-click "Inspect" ဖြင့် DevTools ကို လွယ်ကူစွာ ဖွင့်နိုင်ပါသည်။'
        },
        {
          id: 'q-w10-2',
          questionEn: 'What is the purpose of the `console.log()` command in JavaScript?',
          questionMy: 'JavaScript တွင် `console.log()` ၏ အဓိက ရည်ရွယ်ချက်မှာ အဘယ်နည်း?',
          options: [
            { id: 'a', textEn: 'To print diagnostic messages, calculations, and variable values to the DevTools Console for debugging', textMy: 'အမှားရှာဖွေရန်အတွက် ကိန်းဂဏန်းများနှင့် စမ်းသပ်စာသားများကို DevTools Console တွင် ထုတ်ပြရန်' },
            { id: 'b', textEn: 'To print real paper sheets from your home printer', textMy: 'အိမ်သုံး ပရင်တာမှ စာရွက် အစစ်များ ထုတ်ပေးရန်' },
            { id: 'c', textEn: 'To play a video game on the screen', textMy: 'ဖန်သားပြင်ပေါ်တွင် ဂိမ်းဆော့ရန်' },
            { id: 'd', textEn: 'To delete your browser history', textMy: 'Browser မှတ်တမ်းများကို ဖျက်ပစ်ရန်' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Spot on! `console.log()` is every web developer’s most trusty debugging companion.',
          explanationMy: 'မှန်ပါတယ်! `console.log()` သည် ဝဘ်ပညာရှင်များ အသုံးအများဆုံး အမှားရှာဖွေရေး လက်ထောက် ဖြစ်သည်။'
        },
        {
          id: 'q-w10-3',
          questionEn: 'If you edit HTML text inside the DevTools Elements Tab, does it permanently change the real website on the server?',
          questionMy: 'DevTools Elements Tab ထဲတွင် HTML စာသားများကို ပြင်ဆင်လိုက်ပါက Server ပေါ်ရှိ တကယ့် Website တွင်ပါ အပြီးတိုင် ပြောင်းလဲသွားပါသလား?',
          options: [
            { id: 'a', textEn: 'No! It only changes temporarily on YOUR local screen until you refresh the page', textMy: 'မပြောင်းလဲပါ! စာမျက်နှာကို Refresh မလုပ်မချင်း သင့်ကိုယ်ပိုင် ဖန်သားပြင်ပေါ်တွင်သာ ယာယီ ပြောင်းလဲခြင်း ဖြစ်သည်' },
            { id: 'b', textEn: 'Yes, it rewrites the website for everyone in the world forever', textMy: 'ပြောင်းလဲပါသည်၊ ကမ္ဘာပေါ်ရှိ လူတိုင်းအတွက် အပြီးတိုင် ပြောင်းသွားသည်' },
            { id: 'c', textEn: 'Yes, and it deletes the author’s computer', textMy: 'ရေးသားသူ၏ ကွန်ပျူတာပါ ပျက်စီးသွားသည်' },
            { id: 'd', textEn: 'Only on Sundays', textMy: 'တနင်္ဂနွေနေ့များတွင်သာ ဖြစ်နိုင်သည်' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Awesome! DevTools edits are strictly local and temporary sandbox experiments.',
          explanationMy: 'အရမ်းတော်တယ်! DevTools ထဲက ပြင်ဆင်မှုများသည် သင့်စက်ပေါ်တွင်သာ ယာယီစမ်းသပ်မှု ဖြစ်ပြီး Refresh လုပ်ပါက မူလအတိုင်း ပြန်ဖြစ်သွားပါသည်။'
        }
      ],
      summaryEn: [
        'Browser DevTools provide an interactive laboratory for inspecting HTML, CSS, and JS.',
        'The Console tab displays error stack traces and outputs from `console.log()`.',
        'Use DevTools to test visual ideas and squash bugs fearlessly!'
      ],
      summaryMy: [
        'Browser DevTools သည် HTML, CSS, JS များကို စစ်ဆေးပြင်ဆင်နိုင်သော အပြန်အလှန် ဓာတ်ခွဲခန်း ဖြစ်သည်။',
        'Console tab တွင် အမှားများကို ရှင်းလင်းစွာ ပြသပေးပြီး `console.log()` ဖြင့် စမ်းသပ်နိုင်သည်။',
        'DevTools ကို အသုံးပြု၍ စိတ်ကူးသစ်များကို စမ်းသပ်ပြီး အမှားများကို မကြောက်မရွံ့ ပြင်ဆင်ပါ။'
      ]
    },

    // -------------------------------------------------------------------------
    // Lesson 11: Final Project: Build a Personal Learning Website
    // -------------------------------------------------------------------------
    {
      id: 'web-11',
      lessonNumber: 11,
      titleEn: 'Final Project: Build a Personal Learning Website',
      titleMy: 'နောက်ဆုံး ပရောဂျက်: ကိုယ်ပိုင် သင်ယူမှု ဝဘ်ဆိုဒ်တစ်ခု တည်ဆောက်ခြင်း',
      shortIntroEn: 'Assemble your masterpiece! Combine HTML structure, CSS styling, and JavaScript interactivity into a proud, personal showcase website.',
      shortIntroMy: 'သင့်လက်ရာ လက်ရာမွန်ကို ဖန်တီးလိုက်ကြရအောင်! HTML ဖွဲ့စည်းပုံ၊ CSS ဒီဇိုင်းနှင့် JavaScript အပြန်အလှန်လှုပ်ရှားမှုများကို ပေါင်းစပ်ပြီး ကိုယ်ပိုင် Website တစ်ခုကို တည်ဆောက်ကြမယ်။',
      learningObjectivesEn: [
        'Synthesize HTML, CSS, and JavaScript into a unified multi-section web project.',
        'Implement an interactive feature: A functional dark/light mode toggle or interactive quiz.',
        'Celebrate your graduation as an accredited Junior Web Architect!'
      ],
      learningObjectivesMy: [
        'HTML, CSS, JS ၃ မျိုးလုံးကို ပေါင်းစပ်၍ အပိုင်းစုံလင်သော ကိုယ်ပိုင်ဝဘ်ဆိုဒ်တစ်ခု တည်ဆောက်နိုင်စေရန်။',
        'အပြန်အလှန် လုပ်ဆောင်ချက် ထည့်သွင်းခြင်း: Dark/Light Mode ခလုတ် သို့မဟုတ် အပြန်အလှန် ဉာဏ်စမ်းတစ်ခု ထည့်သွင်းနိုင်စေရန်။',
        'Junior Web Architect အဖြစ် ဂုဏ်ယူစွာ အောင်မြင်တက်လှမ်းနိုင်စေရန်။'
      ],
      explanationEn: [
        'Congratulations on reaching your capstone project! You have completed the journey of web development: understanding the client-server web, structuring documents with HTML, styling with the CSS Box Model, designing responsive layouts with media queries, manipulating the DOM with JavaScript, and debugging with DevTools.',
        'For your final project, you will build a **Personal Learning Showcase Website**. This website will have: 1. A welcoming Header with your nickname and avatar, 2. An "About Me & My Skills" section, 3. A showcase card highlighting your favorite projects, and 4. An interactive JavaScript Dark Mode toggle button!',
        'You have the full playground below with HTML, CSS, and JavaScript editors. Experiment, express yourself, and watch your creation come alive in the live preview!'
      ],
      explanationMy: [
        'နောက်ဆုံး ပရောဂျက်ဆီသို့ ရောက်ရှိလာသည့်အတွက် လှိုက်လှဲစွာ ဂုဏ်ယူပါသည်! သင်သည် ဝဘ်ဖွံ့ဖြိုးရေး ခရီးစဉ်တစ်ခုလုံးကို အောင်မြင်စွာ ဖြတ်သန်းခဲ့ပြီးပါပြီ: Client-Server စနစ်၊ HTML ဖွဲ့စည်းပုံ၊ CSS Box Model အလှဆင်ခြင်း၊ Responsive မိုဘိုင်းဒီဇိုင်း၊ JavaScript DOM လှုပ်ရှားမှုများနှင့် DevTools အမှားရှာဖွေခြင်း။',
        'ဤနောက်ဆုံး ပရောဂျက်တွင် သင်သည် **ကိုယ်ပိုင် သင်ယူမှု ဝဘ်ဆိုဒ် (Showcase Website)** တစ်ခုကို တည်ဆောက်ရမည် ဖြစ်သည်။ ၎င်းတွင်: ၁။ မိမိအမည်ပြောင်ပါသော Header၊ ၂။ "ကျွန်ုပ်၏ ကျွမ်းကျင်မှုများ" အပိုင်း၊ ၃။ နှစ်သက်သော ပရောဂျက်များကို ဖော်ပြထားသော Card များ၊ နှင့် ၄။ JavaScript ဖြင့် အလုပ်လုပ်သော Dark Mode ခလုတ်တို့ ပါဝင်မည် ဖြစ်သည်။',
        'အောက်ပါ စမ်းသပ်ခန်းတွင် HTML, CSS, JS အပြည့်အစုံ ပါဝင်ပါသည်။ စိတ်ကြိုက် ပြင်ဆင်ဖန်တီးပြီး သင့်လက်ရာ အသက်ဝင်လာပုံကို တိုက်ရိုက် ကြည့်ရှုလိုက်ပါ!'
      ],
      diagram: {
        type: 'portfolio-blueprint-diagram',
        captionEn: 'Master Showcase Architecture: Header + Skills Grid + Project Cards + Dark Mode Toggle!',
        captionMy: 'Showcase ဝဘ်ဆိုဒ် ဗိသုကာ: Header + ကျွမ်းကျင်မှုများ + ပရောဂျက် Cards + Dark Mode ခလုတ်!',
        altEn: 'Mockup diagram of a personal website layout with header, two column grid, and interactive footer',
        altMy: 'ကိုယ်ပိုင် ဝဘ်ဆိုဒ် Layout ပုံစံပြ မျဉ်းကားချပ်'
      },
      analogyEn: {
        title: 'Building Your Dream Treehouse',
        description: 'Think of building a dream treehouse: HTML is the sturdy oak wood planks. CSS is the painted blue roof, rope railings, and fairy lights. JavaScript is the pulley basket elevator that brings up snacks when you pull the lever! Together, it is YOUR personalized digital sanctuary.'
      },
      analogyMy: {
        title: 'စိတ်ကူးယဉ် သစ်ပင်ပေါ်က အိမ်ကလေး ဥပမာ',
        description: 'စိတ်ကူးယဉ် သစ်ပင်ပေါ်က အိမ်ကလေးကို ဆောက်လုပ်သလိုပါပဲ: HTML သည် ခိုင်ခံ့သော သစ်သားကြမ်းခင်းများ ဖြစ်သည်။ CSS သည် အပြာရောင် ခေါင်မိုး၊ ကြိုးလက်ရန်းနှင့် မီးပန်းလေးများ ဖြစ်သည်။ JavaScript သည် လီဗာဆွဲလိုက်သည့်အခါ မုန့်များ သယ်ဆောင်ပေးသော စက်သီးဓာတ်လှေကား ဖြစ်ပါသည်။ အားလုံးပေါင်းစပ်လိုက်သောအခါ သင့်ကိုယ်ပိုင် ဒစ်ဂျစ်တယ် ကမ္ဘာလေး ဖြစ်လာပါသည်။'
      },
      workedExampleEn: {
        title: 'The Showcase Code Blueprint',
        scenario: 'A full working showcase with live interactive dark mode switch.',
        steps: [
          { stepNumber: 1, instruction: 'HTML Structure', outcome: 'Header + Main + Sections + Button elements organized semantically.' },
          { stepNumber: 2, instruction: 'CSS Variables & Flexbox', outcome: 'Defines root variables `--bg`, `--text`, and uses flexbox for responsive card layout.' },
          { stepNumber: 3, instruction: 'JavaScript Theme Toggle', outcome: '`themeBtn.addEventListener("click", () => document.body.classList.toggle("dark"));`' },
          { stepNumber: 4, instruction: 'Masterpiece Complete', outcome: 'A real, functional, interactive website built by YOU! 🚀' }
        ]
      },
      workedExampleMy: {
        title: 'Showcase ဝဘ်ဆိုဒ်၏ ပုံစံကြမ်း ဥပမာ',
        scenario: 'Dark Mode ပါဝင်သော အပြည့်အစုံ အလုပ်လုပ်သည့် ဝဘ်ဆိုဒ်တစ်ခု။',
        steps: [
          { stepNumber: 1, instruction: 'HTML ဖွဲ့စည်းပုံ', outcome: 'Header, Main, Sections နှင့် Button များကို စနစ်တကျ ထည့်သွင်းထားသည်။' },
          { stepNumber: 2, instruction: 'CSS Variables နှင့် Flexbox', outcome: 'အရောင်များနှင့် ဘေးတိုက်ကော်လံများကို Flexbox ဖြင့် ခေတ်မီစွာ ချိန်ညှိသည်။' },
          { stepNumber: 3, instruction: 'JavaScript Theme ခလုတ်', outcome: '`themeBtn.addEventListener("click", () => document.body.classList.toggle("dark"));`' },
          { stepNumber: 4, instruction: 'လက်ရာမွန် ပြီးစီးခြင်း', outcome: 'သင်ကိုယ်တိုင် ဖန်တီးထားသော တကယ့် ဝဘ်ဆိုဒ်လေးတစ်ခု ဖြစ်လာသည်! 🚀' }
        ]
      },
      activity: {
        type: 'code-sandbox',
        titleEn: 'Capstone Web Playground: My Showcase',
        titleMy: 'နောက်ဆုံး ပရောဂျက် စမ်းသပ်ခန်း: ကျွန်ုပ်၏ ဝဘ်ဆိုဒ်',
        instructionsEn: 'Explore the full code below. Customize your name, add your own favorite hobby, and test the Dark Mode button in the live preview!',
        instructionsMy: 'အောက်ပါ Code တွင် မိမိအမည်နှင့် ဝါသနာများကို ထည့်သွင်းပြင်ဆင်ပြီး Dark Mode ခလုတ်ကို စမ်းသပ်ကြည့်ပါ။',
        initialData: {
          html: '<div class="site-wrap">\n  <header>\n    <h1>Coder Aisha ✦</h1>\n    <p>Junior Web Developer & AI Explorer</p>\n    <button id="modeBtn">🌙 Toggle Dark Mode</button>\n  </header>\n\n  <section class="skills">\n    <h2>My Superpowers</h2>\n    <div class="tags">\n      <span class="tag">HTML5 뼈대</span>\n      <span class="tag">CSS3 အလှဆင်</span>\n      <span class="tag">JavaScript လှုပ်ရှားမှု</span>\n      <span class="tag">Robot Maze Solver</span>\n    </div>\n  </section>\n</div>',
          css: ':root {\n  --bg: #ffffff;\n  --ink: #1e2448;\n  --card: #f5f7fc;\n}\nbody.dark {\n  --bg: #121629;\n  --ink: #f5f7fc;\n  --card: #1e2448;\n}\nbody {\n  background: var(--bg);\n  color: var(--ink);\n  font-family: sans-serif;\n  padding: 24px;\n  transition: all 0.3s ease;\n}\n.site-wrap { max-width: 600px; margin: 0 auto; }\nheader { text-align: center; margin-bottom: 30px; }\n#modeBtn {\n  background: #6c47ff;\n  color: white;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 999px;\n  cursor: pointer;\n  font-weight: bold;\n  margin-top: 10px;\n}\n.skills { background: var(--card); padding: 20px; border-radius: 16px; }\n.tags { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 10px; }\n.tag { background: #6c47ff; color: white; padding: 6px 12px; border-radius: 8px; font-size: 13px; font-weight: bold; }',
          js: 'const btn = document.getElementById("modeBtn");\nbtn.addEventListener("click", () => {\n  document.body.classList.toggle("dark");\n  if (document.body.classList.contains("dark")) {\n    btn.textContent = "☀️ Toggle Light Mode";\n  } else {\n    btn.textContent = "🌙 Toggle Dark Mode";\n  }\n});'
        }
      },
      quizQuestions: [
        {
          id: 'q-w11-1',
          questionEn: 'How do HTML, CSS, and JavaScript collaborate to form a complete webpage?',
          questionMy: 'HTML, CSS နှင့် JavaScript တို့သည် ပြီးပြည့်စုံသော ဝဘ်ဆိုဒ်တစ်ခုဖြစ်ရန် မည်သို့ ပူးပေါင်းလုပ်ဆောင်ကြသနည်း?',
          options: [
            { id: 'a', textEn: 'HTML builds the structure, CSS styles the appearance, and JavaScript adds interactive logic', textMy: 'HTML က ဖွဲ့စည်းပုံတည်ဆောက်သည်၊ CSS က အသွင်အပြင်ကို အလှဆင်သည်၊ JavaScript က လှုပ်ရှားမှု Logic ထည့်ပေးသည်' },
            { id: 'b', textEn: 'They all do the exact same thing three times', textMy: 'သုံးမျိုးလုံးက အလုပ်တစ်ခုတည်းကို သုံးကြိမ် ထပ်လုပ်ခြင်း ဖြစ်သည်' },
            { id: 'c', textEn: 'HTML deletes CSS, and CSS deletes JavaScript', textMy: 'HTML က CSS ကိုဖျက်ပြီး CSS က JS ကို ဖျက်သည်' },
            { id: 'd', textEn: 'Only JavaScript matters; HTML and CSS are never used', textMy: 'JavaScript တစ်ခုတည်းသာ လိုပြီး ကျန်တာ မလိုပါ' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Correct! The holy trinity of web development divides structure, presentation, and behavior cleanly.',
          explanationMy: 'မှန်ကန်ပါတယ်! HTML (ဖွဲ့စည်းပုံ)၊ CSS (အလှဆင်မှု) နှင့် JavaScript (လှုပ်ရှားမှု) တို့သည် သဟဇာတဖြစ်စွာ ပေါင်းစပ်အလုပ်လုပ်ကြသည်။'
        },
        {
          id: 'q-w11-2',
          questionEn: 'Why are CSS Variables (e.g. `--bg: #ffffff;`) so useful for building Dark Mode themes?',
          questionMy: 'Dark Mode ပြုလုပ်ရာတွင် CSS Variables (ဥပမာ `--bg: #ffffff;`) များသည် အဘယ်ကြောင့် အလွန် အသုံးဝင်သနည်း?',
          options: [
            { id: 'a', textEn: 'You define color values once and can swap entire palettes instantly by changing one class', textMy: 'အရောင်တန်ဖိုးများကို တစ်နေရာတည်းတွင် သတ်မှတ်ထားပြီး Class တစ်ခု ပြောင်းလိုက်ရုံဖြင့် အရောင်စုံကို ချက်ချင်း လဲလှယ်နိုင်သောကြောင့်' },
            { id: 'b', textEn: 'They turn your keyboard into a wireless mouse', textMy: 'ကီးဘုတ်ကို ကြိုးမဲ့ mouse အဖြစ် ပြောင်းပေးသောကြောင့်' },
            { id: 'c', textEn: 'They make the battery charge faster', textMy: 'ဘက်ထရီ အားသွင်း ပိုမြန်စေသောကြောင့်' },
            { id: 'd', textEn: 'They delete all bugs automatically', textMy: 'Bug များကို အလိုအလျောက် ဖျက်ပစ်သောကြောင့်' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Spot on! CSS custom properties allow centralized, dynamic theme management.',
          explanationMy: 'မှန်ပါတယ်! CSS Variables များသည် Theme အရောင်များကို ဗဟိုမှ လွယ်ကူစွာ စီမံပြောင်းလဲနိုင်စေပါသည်။'
        },
        {
          id: 'q-w11-3',
          questionEn: 'What is the greatest superpower you unlocked in this Web Development course?',
          questionMy: 'ဤ Web Development သင်တန်းမှ သင်ရရှိသွားသော အကြီးမားဆုံး စွမ်းအားမှာ အဘယ်နည်း?',
          options: [
            { id: 'a', textEn: 'The ability to turn your own ideas and creativity into real, interactive websites for the whole world to see!', textMy: 'မိမိ၏ စိတ်ကူးများနှင့် တီထွင်ဖန်တီးမှုများကို ကမ္ဘာတစ်ဝှမ်းလုံး မြင်တွေ့နိုင်မည့် တကယ့် ဝဘ်ဆိုဒ်များအဖြစ် ဖန်တီးတည်ဆောက်နိုင်စွမ်း!' },
            { id: 'b', textEn: 'Memorizing the weight of laptop screens', textMy: 'လက်ပ်တော့ မျက်နှာပြင် အလေးချိန်ကို အလွတ်ကျက်နိုင်ခြင်း' },
            { id: 'c', textEn: 'Staring at a blank wall for 4 hours', textMy: 'နံရံအလွတ်ကို ၄ နာရီကြာ စိုက်ကြည့်နိုင်ခြင်း' },
            { id: 'd', textEn: 'Never using a smartphone ever again', textMy: 'စမတ်ဖုန်းကို ဘယ်တော့မှ မသုံးတော့ခြင်း' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Wonderful! You are now an officially accredited Junior Web Architect. You have the tools, skills, and imagination to build the future of the web! 🚀',
          explanationMy: 'အလွန်ထူးချွန်ပါတယ်! သင်သည် တရားဝင် Junior Web Architect တစ်ဦး ဖြစ်လာပါပြီ။ နောင်အနာဂတ် ဝဘ်လောကကြီးကို ဖန်တီးနိုင်မည့် စွမ်းရည်များကို အပြည့်အဝ ပိုင်ဆိုင်သွားပါပြီ! 🚀'
        }
      ],
      summaryEn: [
        'Web development combines HTML (structure), CSS (design), and JavaScript (interactivity).',
        'CSS variables and flexbox enable clean, accessible, modern responsive layouts.',
        'Congratulations on graduating as an accredited Junior Web Architect! 🎓'
      ],
      summaryMy: [
        'Web development သည် HTML (ဖွဲ့စည်းပုံ)၊ CSS (ဒီဇိုင်း) နှင့် JavaScript (လှုပ်ရှားမှု) တို့ကို ပေါင်းစပ်ထားသည်။',
        'CSS Variables နှင့် Flexbox တို့က ခေတ်မီပြီး အလိုက်သင့်ပြောင်းလဲသော Layout ကို ဖြစ်စေသည်။',
        'Junior Web Architect အဖြစ် ဂုဏ်ယူစွာ အောင်မြင်ခဲ့သည့်အတွက် ဝမ်းမြောက်ဂုဏ်ယူပါသည်! 🎓'
      ]
    }
  ],

  // ---------------------------------------------------------------------------
  // Final Course Review & Assessment
  // ---------------------------------------------------------------------------
  finalReview: {
    badgeTitleEn: 'Certified Web Architect',
    badgeTitleMy: 'ဝဘ်တည်ဆောက်သူ ကျွမ်းကျင်လက်မှတ်ရ',
    certificateTitleEn: 'Certificate of Achievement: Basic Web Development',
    certificateTitleMy: 'အောင်လက်မှတ်: အခြေခံ ဝဘ်ဖွံ့ဖြိုးရေး (Web Development) သင်တန်း',
    summaryEn: [
      'You mastered the Client-Server model and discovered how HTTP delivers HTML, CSS, and JS to browsers.',
      'You learned the anatomy of HTML tags, elements, attributes, and page structure (`<html>`, `<head>`, `<body>`).',
      'You authored headings, paragraphs, clickable hyperlinks (`<a>`), and accessible images (`<img>`).',
      'You harnessed CSS styling: selectors, declarations, color palettes, and fonts.',
      'You unraveled the mystery of the CSS Box Model (Content, Padding, Border, Margin).',
      'You mastered mobile-first responsive design using media queries (`@media`).',
      'You brought pages alive with JavaScript and manipulated the live DOM tree.',
      'You applied variables (`let`, `const`), conditions (`if/else`), and reusable functions.',
      'You wired up event listeners (`addEventListener`) to handle clicks and keypresses.',
      'You became an adept debugger using Browser DevTools (F12) and `console.log()`!'
    ],
    summaryMy: [
      'Client-Server စနစ်နှင့် Browser သို့ ဖိုင်များ ပို့ဆောင်ပေးပုံကို ကျွမ်းကျင်စွာ နားလည်ခဲ့သည်။',
      'HTML Tags, Elements, Attributes များနှင့် စာမျက်နှာ ဖွဲ့စည်းပုံ (`<html>`, `<head>`, `<body>`) တို့ကို တတ်မြောက်ခဲ့သည်။',
      'ခေါင်းစဉ်များ၊ စာပိုဒ်များ၊ လင့်ခ်များ (`<a>`) နှင့် ရုပ်ပုံများ (`<img>`) ကို ကိုယ်တိုင် ရေးသားနိုင်ခဲ့သည်။',
      'CSS Selectors, အရောင်များနှင့် စာလုံးဒီဇိုင်း အလှဆင်နည်းများကို တတ်မြောက်ခဲ့သည်။',
      'CSS Box Model (Content, Padding, Border, Margin) ၏ လျှို့ဝှက်ချက်ကို နားလည်ခဲ့သည်။',
      'Media Queries (`@media`) ဖြင့် မိုဘိုင်းဖုန်းများအတွက်ပါ အံဝင်ခွင်ကျဖြစ်သော Responsive ဒီဇိုင်းကို တတ်ကျွမ်းခဲ့သည်။',
      'JavaScript ဖြင့် DOM Tree ကို တိုက်ရိုက် လှုပ်ရှားပြောင်းလဲစေခဲ့သည်။',
      'Variables (`let`, `const`)၊ Conditions (`if/else`) နှင့် Functions များကို အသုံးချခဲ့သည်။',
      '`addEventListener()` ဖြင့် ခလုတ်နှိပ်ခြင်းများကို စမတ်ကျကျ တုံ့ပြန်စေခဲ့သည်။',
      'Browser DevTools (F12) နှင့် `console.log()` ဖြင့် အမှားများကို ကျွမ်းကျင်စွာ စစ်ဆေးပြင်ဆင်နိုင်ခဲ့သည်။'
    ],
    learnedChecklistEn: [
      'I can explain the difference between a client browser and a web server.',
      'I can structure an HTML5 document with doctype, html, head, title, and body.',
      'I know how to write headings (h1-h6), paragraphs, links (href), and images (src, alt).',
      'I understand CSS selectors, properties, values, and hex color codes.',
      'I know the difference between inner padding and outer margin in the Box Model.',
      'I can write a media query to adjust layout for smartphone screens.',
      'I understand how JavaScript accesses and modifies the DOM.',
      'I can write variables with let/const and branching logic with if/else.',
      'I can attach click event listeners using addEventListener().',
      'I can open browser DevTools to inspect elements and debug with console.log().'
    ],
    learnedChecklistMy: [
      'Client Browser နှင့် Web Server တို့၏ ကွာခြားချက်ကို ရှင်းပြနိုင်သည်။',
      'HTML5 စာရွက်စာတမ်းတစ်ခုကို Doctype, html, head, title, body ဖြင့် စနစ်တကျ ဖွဲ့စည်းနိုင်သည်။',
      'ခေါင်းစဉ်များ၊ စာပိုဒ်များ၊ လင့်ခ်များနှင့် ဓာတ်ပုံများကို ရေးသားထည့်သွင်းနိုင်သည်။',
      'CSS Selectors, Properties, Values နှင့် Hex အရောင်စနစ်များကို နားလည်သည်။',
      'Box Model ရှိ အတွင်းဘက် Padding နှင့် အပြင်ဘက် Margin ကွာခြားချက်ကို သိရှိသည်။',
      'ဖုန်းမျက်နှာပြင်များအတွက် Layout ပြောင်းပေးသော Media Query ကို ရေးသားနိုင်သည်။',
      'JavaScript က DOM ကို မည်သို့ ချိတ်ဆက်ပြင်ဆင်သည်ကို နားလည်သည်။',
      'let/const ဖြင့် Variables များနှင့် if/else ဖြင့် ဆုံးဖြတ်ချက်များကို ရေးနိုင်သည်။',
      '`addEventListener()` ဖြင့် ခလုတ်နှိပ်ခြင်း Event များကို ချိတ်ဆွဲနိုင်သည်။',
      'DevTools ကို ဖွင့်လှစ်၍ Elements များကို စစ်ဆေးပြီး `console.log()` ဖြင့် အမှားရှာနိုင်သည်။'
    ],
    vocabulary: [
      {
        term: 'HTML (HyperText Markup Language)',
        pronunciation: 'H-T-M-L',
        definitionEn: 'The standard markup language used to structure and display content on the web.',
        definitionMy: 'ဝဘ်စာမျက်နှာများ၏ ဖွဲ့စည်းပုံနှင့် အကြောင်းအရာများကို တည်ဆောက်ပေးသော စံနှုန်းမီ Markup ဘာသာစကား။',
        exampleEn: 'Every webpage begins with an HTML skeleton.',
        exampleMy: 'ဝဘ်စာမျက်နှာတိုင်းသည် HTML အရိုးခေါင်းဖြင့် စတင်သည်။'
      },
      {
        term: 'CSS (Cascading Style Sheets)',
        pronunciation: 'C-S-S',
        definitionEn: 'A stylesheet language used to describe the presentation, colors, and layout of an HTML document.',
        definitionMy: 'HTML စာမျက်နှာ၏ ဒီဇိုင်း၊ အရောင်အသွေးနှင့် အပြင်အဆင်ကို သတ်မှတ်ပေးသော ဘာသာစကား။',
        exampleEn: 'CSS turns plain text into a colorful, styled webpage.',
        exampleMy: 'CSS သည် ရိုးရိုးစာသားများကို လှပသော ဝဘ်စာမျက်နှာအဖြစ် ပြောင်းလဲပေးသည်။'
      },
      {
        term: 'JavaScript (JS)',
        pronunciation: 'JAV-uh-skript',
        definitionEn: 'A dynamic programming language that enables interactive features, animations, and game logic in browsers.',
        definitionMy: 'Browser အတွင်း အပြန်အလှန် လှုပ်ရှားမှုများ၊ ကာတွန်းများနှင့် Logic များကို လုပ်ဆောင်ပေးသော Programming ဘာသာစကား။',
        exampleEn: 'JavaScript makes buttons clickable and updates scores live.',
        exampleMy: 'JavaScript က ခလုတ်များကို အလုပ်လုပ်စေပြီး ရမှတ်များကို တိုက်ရိုက် ပြောင်းလဲပေးသည်။'
      },
      {
        term: 'DOM (Document Object Model)',
        pronunciation: 'DOM',
        definitionEn: 'A programming interface for web documents that represents HTML elements as a tree of modifiable objects.',
        definitionMy: 'HTML Element များကို JavaScript က တိုက်ရိုက် ချိတ်ဆက်ပြင်ဆင်နိုင်သော အကိုင်းအခက် သစ်ပင်စနစ်။',
        exampleEn: 'JavaScript updates the DOM whenever a new message arrives.',
        exampleMy: 'မက်ဆေ့ခ်ျအသစ် ရောက်လာတိုင်း JavaScript က DOM ကို ပြင်ဆင်ပေးသည်။'
      },
      {
        term: 'Box Model',
        pronunciation: 'BOKS MOD-ul',
        definitionEn: 'The CSS layout framework describing Content, Padding (inner cushion), Border, and Margin (outer spacing).',
        definitionMy: 'Content, Padding (အတွင်းနေရာလွတ်), Border (ဘောင်) နှင့် Margin (အပြင်နေရာလွတ်) တို့ဖြင့် ဖွဲ့စည်းထားသော CSS စနစ်။',
        exampleEn: 'Mastering the Box Model is the key to perfect spacing.',
        exampleMy: 'Box Model ကို ကျွမ်းကျင်ခြင်းသည် နေရာလွတ်များကို သပ်ရပ်စေသည့် သော့ချက် ဖြစ်သည်။'
      },
      {
        term: 'Responsive Design',
        pronunciation: 'rih-SPON-siv dih-ZYN',
        definitionEn: 'An approach to web development that makes web pages look great on all device screens.',
        definitionMy: 'ဖုန်း၊ Tablet နှင့် ကွန်ပျူတာ မည်သည့် ဖန်သားပြင်တွင်မဆို အလိုအလျောက် အံဝင်ခွင်ကျ လှပစေသော ဒီဇိုင်းနည်းပညာ။',
        exampleEn: 'Responsive sites adapt gracefully between mobile phones and laptops.',
        exampleMy: 'Responsive ဝဘ်ဆိုဒ်များသည် ဖုန်းနှင့် ကွန်ပျူတာကြား ချောမွေ့စွာ ပြောင်းလဲပေးသည်။'
      },
      {
        term: 'Media Query',
        pronunciation: 'MEE-dee-uh KWEER-ee',
        definitionEn: 'A CSS feature that applies styles conditionally based on device characteristics like screen width.',
        definitionMy: 'ဖန်သားပြင် အကျယ်အဝန်းပေါ် မူတည်၍ သီးသန့် ဒီဇိုင်းစည်းမျဉ်းများကို ပြောင်းလဲပေးသော CSS နည်းပညာ။',
        exampleEn: '`@media (max-width: 600px)` styles mobile viewports.',
        exampleMy: '`@media (max-width: 600px)` သည် ဖုန်းမျက်နှာပြင်များအတွက် ဒီဇိုင်းပြောင်းပေးသည်။'
      },
      {
        term: 'DevTools (Developer Tools)',
        pronunciation: 'DEV-toolz',
        definitionEn: 'Built-in browser utilities (Elements, Console, Network) for inspecting code, editing styles, and debugging.',
        definitionMy: 'Code များကို စစ်ဆေးရန်၊ ဒီဇိုင်းပြင်ရန်နှင့် အမှားရှာရန် Browser အတွင်း ပါဝင်သော အင်ဂျင်နီယာ ကိရိယာတန်ဆာပလာများ။',
        exampleEn: 'Press F12 to inspect elements in Chrome DevTools.',
        exampleMy: 'Chrome DevTools တွင် စစ်ဆေးရန် F12 ကို နှိပ်ပါ။'
      }
    ],
    finalQuiz: [
      {
        id: 'fq-w1',
        questionEn: 'Which technology provides the structural skeleton of a webpage?',
        questionMy: 'ဝဘ်စာမျက်နှာတစ်ခု၏ အဓိက အရိုးခေါင်း ဖွဲ့စည်းပုံကို မည်သည့် နည်းပညာက တည်ဆောက်ပေးသနည်း?',
        options: [
          { id: 'a', textEn: 'HTML (HyperText Markup Language)', textMy: 'HTML (HyperText Markup Language)' },
          { id: 'b', textEn: 'CSS (Cascading Style Sheets)', textMy: 'CSS (Cascading Style Sheets)' },
          { id: 'c', textEn: 'JavaScript', textMy: 'JavaScript' },
          { id: 'd', textEn: 'SQL Database', textMy: 'SQL Database' }
        ],
        correctOptionId: 'a',
        explanationEn: 'Correct! HTML supplies the semantic structure and content of all webpages.',
        explanationMy: 'မှန်ကန်ပါတယ်! HTML သည် ဝဘ်စာမျက်နှာများ၏ အဓိက ဖွဲ့စည်းပုံ ဖြစ်သည်။'
      },
      {
        id: 'fq-w2',
        questionEn: 'Which technology styles the webpage with colors, layouts, and typography?',
        questionMy: 'ဝဘ်စာမျက်နှာကို အရောင်များ၊ Layout များနှင့် စာလုံးဒီဇိုင်းများဖြင့် မည်သည့်နည်းပညာက အလှဆင်သနည်း?',
        options: [
          { id: 'a', textEn: 'CSS (Cascading Style Sheets)', textMy: 'CSS (Cascading Style Sheets)' },
          { id: 'b', textEn: 'HTML', textMy: 'HTML' },
          { id: 'c', textEn: 'A computer fan', textMy: 'ကွန်ပျူတာ ပန်ကာ' },
          { id: 'd', textEn: 'A USB cable', textMy: 'USB ကြိုး' }
        ],
        correctOptionId: 'a',
        explanationEn: 'Spot on! CSS governs the visual presentation and styling of the web.',
        explanationMy: 'မှန်ပါတယ်! CSS သည် ဝဘ်စာမျက်နှာ၏ အလှအပနှင့် ဒီဇိုင်းကို တာဝန်ယူသည်။'
      },
      {
        id: 'fq-w3',
        questionEn: 'Which technology makes a webpage interactive and handles button clicks?',
        questionMy: 'ဝဘ်စာမျက်နှာကို အပြန်အလှန် လှုပ်ရှားစေပြီး ခလုတ်နှိပ်ခြင်းများကို မည်သည့်နည်းပညာက လုပ်ဆောင်ပေးသနည်း?',
        options: [
          { id: 'a', textEn: 'JavaScript', textMy: 'JavaScript' },
          { id: 'b', textEn: 'HTML', textMy: 'HTML' },
          { id: 'c', textEn: 'CSS', textMy: 'CSS' },
          { id: 'd', textEn: 'A power outlet', textMy: 'လျှပ်စစ် ပလပ်ပေါက်' }
        ],
        correctOptionId: 'a',
        explanationEn: 'Awesome! JavaScript is the programming language that powers web interactivity.',
        explanationMy: 'အရမ်းတော်တယ်! JavaScript သည် ဝဘ်၏ အပြန်အလှန် လှုပ်ရှားမှုများကို စီမံပေးသော ဘာသာစကား ဖြစ်သည်။'
      },
      {
        id: 'fq-w4',
        questionEn: 'In the CSS Box Model, which layer represents the cushion space INSIDE the border?',
        questionMy: 'CSS Box Model တွင် ဘောင်၏ အတွင်းဘက်ရှိ နေရာလွတ် အလွှာကို အဘယ်သို့ ခေါ်သနည်း?',
        options: [
          { id: 'a', textEn: 'Padding', textMy: 'Padding' },
          { id: 'b', textEn: 'Margin', textMy: 'Margin' },
          { id: 'c', textEn: 'Border', textMy: 'Border' },
          { id: 'd', textEn: 'Content', textMy: 'Content' }
        ],
        correctOptionId: 'a',
        explanationEn: 'Correct! Padding is the internal cushion inside the element’s border.',
        explanationMy: 'မှန်ကန်ပါတယ်! Padding သည် ဘောင်အတွင်းဘက်ရှိ နေရာလွတ် ဖြစ်သည်။'
      },
      {
        id: 'fq-w5',
        questionEn: 'Which layer of the CSS Box Model creates outside breathing room between elements?',
        questionMy: 'CSS Box Model တွင် အခြားအရာများနှင့် မကပ်စေရန် အပြင်ဘက်တွင် ခြားပေးသော အလွှာမှာ အဘယ်နည်း?',
        options: [
          { id: 'a', textEn: 'Margin', textMy: 'Margin' },
          { id: 'b', textEn: 'Padding', textMy: 'Padding' },
          { id: 'c', textEn: 'Border', textMy: 'Border' },
          { id: 'd', textEn: 'Content', textMy: 'Content' }
        ],
        correctOptionId: 'a',
        explanationEn: 'Spot on! Margin separates an element from its neighbors externally.',
        explanationMy: 'မှန်ပါတယ်! Margin သည် ဘေးပတ်ဝန်းကျင် အရာများနှင့် မကပ်စေရန် အပြင်ဘက်တွင် ခြားပေးသည်။'
      },
      {
        id: 'fq-w6',
        questionEn: 'What does a CSS Media Query do?',
        questionMy: 'CSS Media Query သည် မည်သည့်အရာကို ဆောင်ရွက်ပေးသနည်း?',
        options: [
          { id: 'a', textEn: 'Applies specific CSS styles conditionally based on screen characteristics like width', textMy: 'ဖန်သားပြင် အကျယ်အဝန်းအလိုက် သီးသန့် CSS ဒီဇိုင်းများကို ပြောင်းလဲပေးသည်' },
          { id: 'b', textEn: 'Plays music through computer speakers', textMy: 'ကွန်ပျူတာ စပီကာမှ သီချင်းဖွင့်ပေးသည်' },
          { id: 'c', textEn: 'Downloads movie trailers automatically', textMy: 'ရုပ်ရှင်နမူနာများကို အလိုအလျောက် ဒေါင်းလုဒ်လုပ်ပေးသည်' },
          { id: 'd', textEn: 'Prints color photos onto paper', textMy: 'စက္ကူပေါ်တွင် ရောင်စုံဓာတ်ပုံ ပရင့်ထုတ်ပေးသည်' }
        ],
        correctOptionId: 'a',
        explanationEn: 'Awesome! Media queries are the cornerstone of responsive web design.',
        explanationMy: 'အရမ်းတော်တယ်! Media Queries သည် Responsive ဒီဇိုင်း၏ အဓိက သော့ချက် ဖြစ်သည်။'
      },
      {
        id: 'fq-w7',
        questionEn: 'What does the DOM represent in the browser?',
        questionMy: 'Browser တွင် DOM သည် မည်သည့်အရာကို ကိုယ်စားပြုသနည်း?',
        options: [
          { id: 'a', textEn: 'A live tree structure of all HTML elements on the page that JavaScript can inspect and change', textMy: 'JavaScript က စစ်ဆေးပြင်ဆင်နိုင်သော စာမျက်နှာပေါ်ရှိ HTML Element များ၏ အပင်သဖွယ် ဖွဲ့စည်းမှု' },
          { id: 'b', textEn: 'A battery charger inside the keyboard', textMy: 'ကီးဘုတ်အတွင်းရှိ ဘက်ထရီအားသွင်းစက်' },
          { id: 'c', textEn: 'A video game console', textMy: 'ဗီဒီယိုဂိမ်းစက်' },
          { id: 'd', textEn: 'An offline PDF document', textMy: 'အင်တာနက်မလိုသော PDF စာရွက်စာတမ်း' }
        ],
        correctOptionId: 'a',
        explanationEn: 'Spot on! The Document Object Model is the programmable object tree of a page.',
        explanationMy: 'မှန်ပါတယ်! DOM သည် စာမျက်နှာပေါ်ရှိ အရာအားလုံးကို JavaScript က ချိတ်ဆက်ပြင်ဆင်နိုင်သော စနစ် ဖြစ်သည်။'
      },
      {
        id: 'fq-w8',
        questionEn: 'Which keyword in JavaScript declares a variable whose value can be updated over time?',
        questionMy: 'JavaScript တွင် တန်ဖိုးပြောင်းလဲနိုင်သော Variable တစ်ခု သတ်မှတ်ရန် မည်သည့် Keyword ကို သုံးသနည်း?',
        options: [
          { id: 'a', textEn: 'let', textMy: 'let' },
          { id: 'b', textEn: 'const', textMy: 'const' },
          { id: 'c', textEn: 'lock', textMy: 'lock' },
          { id: 'd', textEn: 'immutable', textMy: 'immutable' }
        ],
        correctOptionId: 'a',
        explanationEn: 'Correct! `let` declares mutable variables; `const` declares constants.',
        explanationMy: 'မှန်ကန်ပါတယ်! ပြောင်းလဲနိုင်သော Variable များအတွက် `let` ကို သုံးသည်။'
      },
      {
        id: 'fq-w9',
        questionEn: 'Which method connects an event like "click" to a JavaScript function?',
        questionMy: '"click" စသည့် Event တစ်ခုကို JavaScript Function နှင့် မည်သည့် Method ဖြင့် ချိတ်ဆွဲသနည်း?',
        options: [
          { id: 'a', textEn: 'element.addEventListener("click", callback)', textMy: 'element.addEventListener("click", callback)' },
          { id: 'b', textEn: 'element.doClick()', textMy: 'element.doClick()' },
          { id: 'c', textEn: 'element.startClicking()', textMy: 'element.startClicking()' },
          { id: 'd', textEn: 'element.pressKey()', textMy: 'element.pressKey()' }
        ],
        correctOptionId: 'a',
        explanationEn: 'Spot on! `addEventListener` is the modern standard for listening to user input.',
        explanationMy: 'မှန်ပါတယ်! `addEventListener` သည် အသုံးပြုသူ၏ လုပ်ဆောင်ချက်များကို ဖမ်းယူတုံ့ပြန်သည့် စံနှုန်း ဖြစ်သည်။'
      },
      {
        id: 'fq-w10',
        questionEn: 'What happens when you test changes in the Chrome DevTools Elements Tab?',
        questionMy: 'Chrome DevTools ထဲတွင် HTML/CSS များကို စမ်းသပ် ပြင်ဆင်ကြည့်သောအခါ အမှန်တကယ် ဘာဖြစ်သနည်း?',
        options: [
          { id: 'a', textEn: 'The changes update temporarily on your local screen for testing, without altering the real server files', textMy: 'ဆာဗာပေါ်က ဖိုင်များကို မထိခိုက်စေဘဲ သင့်ဖန်သားပြင်ပေါ်တွင်သာ စမ်းသပ်ရန် ယာယီ ပြောင်းလဲပေးသည်' },
          { id: 'b', textEn: 'The website breaks for all users in the world permanently', textMy: 'ကမ္ဘာပေါ်ရှိ အသုံးပြုသူအားလုံးအတွက် ဝဘ်ဆိုဒ် အပြီးတိုင် ပျက်စီးသွားသည်' },
          { id: 'c', textEn: 'The police are alerted to your computer', textMy: 'ရဲစခန်းသို့ သတင်းပို့သွားသည်' },
          { id: 'd', textEn: 'Your computer screen turns upside down forever', textMy: 'မျက်နှာပြင် ဇောက်ထိုး အပြီးတိုင် ဖြစ်သွားသည်' }
        ],
        correctOptionId: 'a',
        explanationEn: 'Outstanding! DevTools is your safe, private sandbox for experimenting and debugging with zero risk.',
        explanationMy: 'အလွန်ထူးချွန်ပါတယ်! DevTools သည် မည်သည့်အန္တရာယ်မှ မရှိဘဲ စိတ်ကြိုက် စမ်းသပ် အမှားရှာနိုင်သော သင်၏ သီးသန့် ဓာတ်ခွဲခန်း ဖြစ်ပါသည်။'
      }
    ]
  }
};
