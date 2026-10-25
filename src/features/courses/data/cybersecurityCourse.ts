import { CourseData } from '../../../types/course.types';

export const cybersecurityCourse: CourseData = {
  id: 'cybersecurity',
  titleEn: 'Cybersecurity for Kids',
  titleMy: 'ကလေးများအတွက် ဆိုက်ဘာလုံခြုံရေး',
  badgeEmoji: '🛡️',
  targetAgeEn: 'Ages 8–14',
  targetAgeMy: 'အသက် ၈–၁၄ နှစ်',
  descriptionEn: 'Become an online safety hero! Learn how to protect your privacy, craft uncrackable passwords, spot tricky phishing traps, navigate safely, and guard your digital footprint.',
  descriptionMy: 'အွန်လိုင်းလုံခြုံရေး သူရဲကောင်းတစ်ဦး ဖြစ်လာပါစေ! ကိုယ်ရေးလုံခြုံမှု ကာကွယ်ခြင်း၊ မဖောက်ထွင်းနိုင်သော Passwords ဖန်တီးခြင်း၊ လှည့်စားသော Phishing ထောင်ချောက်များကို သိရှိခြင်းနှင့် ဒစ်ဂျစ်တယ်ခြေရာများကို လုံခြုံစွာ ထိန်းသိမ်းခြင်းတို့ကို လေ့လာပါ။',
  category: 'Safety & Security',
  color: '#2ecc71',
  bgLight: '#e9fbf0',
  lessons: [
    // -------------------------------------------------------------------------
    // Lesson 1: What Is Cybersecurity?
    // -------------------------------------------------------------------------
    {
      id: 'cyber-1',
      lessonNumber: 1,
      titleEn: 'What Is Cybersecurity?',
      titleMy: 'Cybersecurity (ဆိုက်ဘာလုံခြုံရေး) ဆိုတာ ဘာလဲ?',
      shortIntroEn: 'Just like we lock our front doors at night, we need digital locks for our computers and phones. Discover the shield of cybersecurity!',
      shortIntroMy: 'ညဘက်မှာ အိမ်တံခါးကို သော့ခတ်သလိုမျိုး ဖုန်းတွေနဲ့ ကွန်ပျူတာတွေအတွက်လည်း ဒစ်ဂျစ်တယ်သော့ခလောက်တွေ လိုအပ်ပါတယ်။ ဆိုက်ဘာလုံခြုံရေး အကာအကွယ်အကြောင်း လေ့လာကြမယ်။',
      learningObjectivesEn: [
        'Understand what cybersecurity means (defending devices, networks, and data).',
        'Learn the difference between physical security and digital security.',
        'Recognize the CIA Triad: Confidentiality, Integrity, and Availability.'
      ],
      learningObjectivesMy: [
        'Cybersecurity ဆိုသည်မှာ စက်ပစ္စည်းများ၊ ကွန်ရက်များနှင့် Data များကို ကာကွယ်ခြင်းဖြစ်ကြောင်း နားလည်စေရန်။',
        'ပြင်ပ ရုပ်ပိုင်းဆိုင်ရာ လုံခြုံရေးနှင့် ဒစ်ဂျစ်တယ် လုံခြုံရေးတို့၏ ကွာခြားချက်ကို သိရှိစေရန်။',
        'CIA Triad အခြေခံမူ ၃ ခု: လျှို့ဝှက်ထိန်းသိမ်းမှု (Confidentiality)၊ ပြည့်စုံမှန်ကန်မှု (Integrity) နှင့် အသုံးပြုနိုင်စွမ်း (Availability) တို့ကို သိရှိစေရန်။'
      ],
      explanationEn: [
        'Think about how you keep your bedroom safe: you close the window when it rains, and lock the front door when your family goes on a trip. These are physical security measures.',
        '**Cybersecurity** is the practice of protecting computers, smartphones, gaming consoles, networks, and private information from digital threats, viruses, and unauthorized snooping.',
        'Cyber defenders protect three important pillars called the **CIA Triad**: 1. **Confidentiality** (only authorized people can see private data), 2. **Integrity** (data cannot be secretly altered or corrupted), and 3. **Availability** (systems are working smoothly whenever people need them).'
      ],
      explanationMy: [
        'သင့်အိမ်ကို ဘေးကင်းအောင် ဘယ်လိုထားသလဲ စဉ်းစားကြည့်ပါ: မိုးရွာရင် ပြတင်းပေါက် ပိတ်တယ်၊ အပြင်သွားရင် အိမ်တံခါးကို သော့ခတ်ပါတယ်။ ဒါတွေဟာ ပြင်ပ ရုပ်ပိုင်းဆိုင်ရာ လုံခြုံရေး ဖြစ်ပါတယ်။',
        '**Cybersecurity (ဆိုက်ဘာလုံခြုံရေး)** ဆိုတာ ကွန်ပျူတာများ၊ စမတ်ဖုန်းများ၊ ဂိမ်းစက်များ၊ ကွန်ရက်များနှင့် ကိုယ်ရေးအချက်အလက်များကို အွန်လိုင်းအန္တရာယ်များ၊ ဗိုင်းရပ်စ်များနှင့် ခွင့်ပြုချက်မရှိဘဲ ခိုးယူကြည့်ရှုမှုများမှ ကာကွယ်ပေးသော နည်းပညာဖြစ်ပါတယ်။',
        'လုံခြုံရေးကျွမ်းကျင်သူများသည် **CIA Triad မဏ္ဍိုင် (၃) ခု** ကို အမြဲကာကွယ်ကြသည်: ၁။ **Confidentiality (လျှို့ဝှက်ထိန်းသိမ်းမှု)** — ခွင့်ပြုထားသူသာ ကြည့်ရှုခွင့်ရှိရမည်၊ ၂။ **Integrity (မှန်ကန်ပြည့်စုံမှု)** — အချက်အလက်များကို မသမာသူက လျှို့ဝှက်မပြင်ဆင်နိုင်ရ၊ ၃။ **Availability (အမြဲအသုံးပြုနိုင်မှု)** — လိုအပ်သည့်အခါ စနစ်များ အမြဲ ကောင်းမွန်စွာ အလုပ်လုပ်နေရမည်။'
      ],
      diagram: {
        type: 'cia-triad-shield',
        captionEn: 'The CIA Triad Shield: Confidentiality + Integrity + Availability protect our digital world!',
        captionMy: 'CIA Triad ဒိုင်းကာ: လျှို့ဝှက်ထိန်းသိမ်းမှု + မှန်ကန်ပြည့်စုံမှု + အမြဲအသုံးပြုနိုင်မှု!',
        altEn: 'Triangle shield displaying Confidentiality, Integrity, and Availability at three corners',
        altMy: 'CIA Triad မဏ္ဍိုင် ၃ ခု ပြသထားသော ဒိုင်းကာပုံ'
      },
      analogyEn: {
        title: 'The Castle Drawbridge and Walls',
        description: 'Think of an ancient stone castle: High stone walls keep unwanted invaders out (Confidentiality). Guards make sure the royal scrolls are not altered or forged (Integrity). And the drawbridge lowers so villagers can come in to market safely (Availability)!'
      },
      analogyMy: {
        title: 'ရှေးခေတ်ရဲတိုက်ကြီးနှင့် ကျုံးတံခါး ဥပမာ',
        description: 'ရှေးခေတ် ကျောက်တုံးရဲတိုက်ကြီးကို စဉ်းစားကြည့်ပါ: မြင့်မားသော တံတိုင်းများက ရန်သူများ မဝင်နိုင်အောင် ကာကွယ်ပေးသည် (Confidentiality)။ အစောင့်စစ်သည်များက ဘုရင့်အမိန့်တော်ပြန်တမ်းများကို မသမာသူများ မပြင်ဆင်နိုင်အောင် စောင့်ကြပ်သည် (Integrity)။ ကျုံးတံခါးဖွင့်ပေး၍ ရွာသားများ လိုအပ်သည့်အခါ လွတ်လပ်စွာ ဝင်ထွက်နိုင်စေသည် (Availability)။'
      },
      workedExampleEn: {
        title: 'Defending a School Quiz Website',
        scenario: 'A school sets up an online portal where students submit math homework.',
        steps: [
          { stepNumber: 1, instruction: 'Confidentiality safeguard', outcome: 'Each student has a private account; nobody else can peek at your test answers.' },
          { stepNumber: 2, instruction: 'Integrity safeguard', outcome: 'System encrypts submitted homework so no one can alter scores.' },
          { stepNumber: 3, instruction: 'Availability safeguard', outcome: 'Servers have backup power so the website stays online during power flickers.' },
          { stepNumber: 4, instruction: 'Safe learning environment', outcome: 'Students and teachers communicate with total peace of mind.' }
        ]
      },
      workedExampleMy: {
        title: 'ကျောင်းသုံး အွန်လိုင်း ပေါ်တယ်ကို ကာကွယ်ခြင်း ဥပမာ',
        scenario: 'ကျောင်းသားများ အိမ်စာတင်သွင်းနိုင်ရန် ကျောင်းမှ Website တစ်ခု ပြုလုပ်ခြင်း။',
        steps: [
          { stepNumber: 1, instruction: 'လျှို့ဝှက်ထိန်းသိမ်းမှု (Confidentiality)', outcome: 'ကျောင်းသားတိုင်းတွင် ကိုယ်ပိုင်အကောင့်ရှိပြီး အခြားသူများက မိမိစာမေးပွဲအဖြေများကို ခိုးမကြည့်နိုင်ပါ။' },
          { stepNumber: 2, instruction: 'မှန်ကန်ပြည့်စုံမှု (Integrity)', outcome: 'တင်သွင်းထားသော အိမ်စာရမှတ်များကို မည်သူမျှ ခိုးပြင်၍ မရအောင် စနစ်က စောင့်ကြပ်သည်။' },
          { stepNumber: 3, instruction: 'အမြဲအသုံးပြုနိုင်မှု (Availability)', outcome: 'မီးခဏပြတ်သွားသော်လည်း Website မကျသွားစေရန် အရန်မီးစက်များ ထားရှိသည်။' },
          { stepNumber: 4, instruction: 'လုံခြုံသော ပညာသင်ကြားရေး', outcome: 'ဆရာများနှင့် ကျောင်းသားများ စိတ်အေးချမ်းသာစွာ အသုံးပြုနိုင်သည်။' }
        ]
      },
      activity: {
        type: 'classification-sorter',
        titleEn: 'Digital Shield Checklist',
        titleMy: 'ဒစ်ဂျစ်တယ် ဒိုင်းကာ စစ်ဆေးခြင်း စမ်းသပ်ခန်း',
        instructionsEn: 'Categorize each defensive measure under Confidentiality, Integrity, or Availability!',
        instructionsMy: 'အောက်ပါလုံခြုံရေး လုပ်ဆောင်ချက်များကို CIA Triad ၏ မည်သည့်မဏ္ဍိုင်ဖြစ်သည်ကို ခွဲခြားပါ။',
        initialData: [
          { measure: 'Locking private notes with a password', category: 'confidentiality' },
          { measure: 'Running automatic antivirus scan to detect modified files', category: 'integrity' },
          { measure: 'Keeping a backup battery so the Wi-Fi router stays on', category: 'availability' },
          { measure: 'Hiding your screen from curious classmates', category: 'confidentiality' }
        ]
      },
      quizQuestions: [
        {
          id: 'q-c1-1',
          questionEn: 'What is the primary goal of cybersecurity?',
          questionMy: 'Cybersecurity ၏ အဓိက ရည်မှန်းချက်မှာ အဘယ်နည်း?',
          options: [
            { id: 'a', textEn: 'To protect devices, networks, and data from attacks, unauthorized access, and damage', textMy: 'စက်ပစ္စည်းများ၊ ကွန်ရက်များနှင့် Data များကို တိုက်ခိုက်မှု၊ ခိုးယူမှုနှင့် ပျက်စီးမှုများမှ ကာကွယ်ရန်' },
            { id: 'b', textEn: 'To make video games load 100 times slower', textMy: 'ဗီဒီယိုဂိမ်းများကို အဆ ၁၀၀ နှေးသွားစေရန်' },
            { id: 'c', textEn: 'To disconnect all electricity across the city', textMy: 'တစ်မြို့လုံးရှိ လျှပ်စစ်မီးများ ဖြတ်တောက်ရန်' },
            { id: 'd', textEn: 'To sell computers at the market', textMy: 'ဈေးထဲတွင် ကွန်ပျူတာများ ရောင်းချရန်' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Correct! Cybersecurity defends digital systems and safeguards user privacy.',
          explanationMy: 'မှန်ကန်ပါတယ်! Cybersecurity သည် ဒစ်ဂျစ်တယ် စနစ်များကို ကာကွယ်ပေးပြီး ကိုယ်ရေးလုံခြုံမှုကို ထိန်းသိမ်းပေးပါသည်။'
        },
        {
          id: 'q-c1-2',
          questionEn: 'In the CIA Triad, what does "Integrity" mean?',
          questionMy: 'CIA Triad တွင် "Integrity" ဆိုသည်မှာ အဘယ်နည်း?',
          options: [
            { id: 'a', textEn: 'Ensuring that information remains accurate, whole, and untouched by unauthorized people', textMy: 'အချက်အလက်များသည် တိကျပြည့်စုံနေပြီး ခွင့်ပြုချက်မရှိဘဲ ခိုးပြင်ခံရခြင်း မရှိစေရန် သေချာစေခြင်း' },
            { id: 'b', textEn: 'Sharing your password with every person in school', textMy: 'ကျောင်းရှိ လူတိုင်းထံသို့ မိမိ Password ပေးဝေခြင်း' },
            { id: 'c', textEn: 'Playing loud music through headphones', textMy: 'နားကြပ်ဖြင့် အသံကျယ်ကျယ် နားထောင်ခြင်း' },
            { id: 'd', textEn: 'Deleting all photos when the battery is low', textMy: 'ဘက်ထရီအားနည်းသောအခါ ဓာတ်ပုံအားလုံး ဖျက်ပစ်ခြင်း' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Spot on! Integrity ensures that data has not been secretly tampered with.',
          explanationMy: 'မှန်ပါတယ်! Integrity သည် အချက်အလက်များ တိကျမှန်ကန်ပြီး ပြင်ဆင်မခံရအောင် ကာကွယ်ပေးခြင်း ဖြစ်သည်။'
        },
        {
          id: 'q-c1-3',
          questionEn: 'Which of the following is a physical security action rather than a cybersecurity action?',
          questionMy: 'အောက်ပါတို့အနက် မည်သည့်အရာသည် Cybersecurity မဟုတ်ဘဲ ရုပ်ပိုင်းဆိုင်ရာ လုံခြုံရေး ဖြစ်သနည်း?',
          options: [
            { id: 'a', textEn: 'Locking your home front door with a metal key', textMy: 'အိမ်တံခါးကို သော့တွဲဖြင့် သော့ခတ်ခြင်း' },
            { id: 'b', textEn: 'Setting a 16-character passphrase on your tablet', textMy: 'Tablet တွင် စာလုံး ၁၆ လုံးပါ Passphrase ထားရှိခြင်း' },
            { id: 'c', textEn: 'Enabling a firewall on your home router', textMy: 'Router ပေါ်တွင် Firewall ဖွင့်ထားခြင်း' },
            { id: 'd', textEn: 'Installing antivirus software on a laptop', textMy: 'လက်ပ်တော့တွင် Antivirus ထည့်သွင်းခြင်း' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Awesome! A physical door lock guards the real world, while cybersecurity guards digital data.',
          explanationMy: 'အရမ်းတော်တယ်! တံခါးသော့ခတ်ခြင်းသည် ပြင်ပလုံခြုံရေးဖြစ်ပြီး၊ ကျန်အရာများသည် ဒစ်ဂျစ်တယ်လုံခြုံရေးများ ဖြစ်ကြသည်။'
        }
      ],
      summaryEn: [
        'Cybersecurity is the digital shield protecting devices, data, and online communication.',
        'The CIA Triad stands for Confidentiality, Integrity, and Availability.',
        'Good security habits keep our digital lives safe, just like locks protect our homes.'
      ],
      summaryMy: [
        'Cybersecurity သည် စက်ပစ္စည်းများနှင့် အချက်အလက်များကို ကာကွယ်ပေးသော ဒစ်ဂျစ်တယ် ဒိုင်းကာဖြစ်သည်။',
        'CIA Triad တွင် Confidentiality (လျှို့ဝှက်မှု)၊ Integrity (မှန်ကန်မှု) နှင့် Availability (အသုံးပြုနိုင်မှု) တို့ ပါဝင်သည်။',
        'ကောင်းမွန်သော လုံခြုံရေး အလေ့အကျင့်များသည် အိမ်တံခါးသော့ခတ်သကဲ့သို့ ကျွန်ုပ်တို့၏ အွန်လိုင်းဘဝကို ဘေးကင်းစေသည်။'
      ]
    },

    // -------------------------------------------------------------------------
    // Lesson 2: Personal Information and Privacy
    // -------------------------------------------------------------------------
    {
      id: 'cyber-2',
      lessonNumber: 2,
      titleEn: 'Personal Information and Privacy',
      titleMy: 'ကိုယ်ရေးအချက်အလက်များနှင့် လုံခြုံမှု',
      shortIntroEn: 'What is safe to share online and what should stay in your secret vault? Learn the golden rules of digital privacy.',
      shortIntroMy: 'အင်တာနက်ပေါ်မှာ ဘယ်အရာတွေကို မျှဝေလို့ရပြီး ဘယ်အရာတွေကို လျှို့ဝှက်သေတ္တာထဲ သိမ်းထားရမလဲ? ဒစ်ဂျစ်တယ် ကိုယ်ရေးလုံခြုံမှု ရွှေစည်းမျဉ်းများကို လေ့လာကြမယ်။',
      learningObjectivesEn: [
        'Understand what Personally Identifiable Information (PII) is.',
        'Distinguish between shareable info (favorite color) and sensitive private info (home address).',
        'Recognize why strangers online should never be given personal details.'
      ],
      learningObjectivesMy: [
        'Personally Identifiable Information (PII - လူတစ်ဦးချင်းစီကို သီးသန့်ဖော်ပြနိုင်သော အချက်အလက်) ဆိုသည်ကို နားလည်စေရန်။',
        'မျှဝေနိုင်သော အချက်အလက် (ကြိုက်သောအရောင်) နှင့် အထိမခံသော ကိုယ်ရေးအချက်အလက် (နေရပ်လိပ်စာ) တို့ကို ခွဲခြားသိစေရန်။',
        'အွန်လိုင်းမှ မသိသော သူစိမ်းများကို ကိုယ်ရေးအချက်အလက်များ ဘာကြောင့် လုံးဝမပေးသင့်သည်ကို သဘောပေါက်စေရန်။'
      ],
      explanationEn: [
        'When you make a new friend on the playground, it’s fun to tell them: "My favorite color is lime green and I love playing soccer!" That is safe, public information.',
        'However, there are special pieces of data called **Personally Identifiable Information (PII)**. PII is any piece of information that can be used to locate, contact, or impersonate you in the real world. This includes: your full real name, home address, phone number, birthday, school name, and photos showing your school uniform badge.',
        'The Golden Privacy Rule: **Never share PII in public game chats, social forums, or with strangers online.** Keep your personal vault locked tight!'
      ],
      explanationMy: [
        'ကစားကွင်းမှာ သူငယ်ချင်းအသစ်ရတဲ့အခါ "ငါ အစိမ်းရောင်ကြိုက်တယ်၊ ဘောလုံးကစားရတာ ဝါသနာပါတယ်" လို့ ပြောတာ အန္တရာယ်မရှိပါဘူး။',
        'ဒါပေမဲ့ ပြင်ပလောကမှာ သင့်ကို ရှာဖွေတွေ့ရှိနိုင်စေတဲ့ အထူးအချက်အလက်တွေကို **Personally Identifiable Information (PII)** လို့ ခေါ်ပါတယ်။ ဥပမာ- သင့်နာမည်ရင်း အပြည့်အစုံ၊ အိမ်လိပ်စာ၊ ဖုန်းနံပါတ်၊ မွေးသက္ကရာဇ်၊ ကျောင်းအမည် နှင့် ကျောင်းတံဆိပ်ပါသော ယူနီဖောင်း ဓာတ်ပုံများ ဖြစ်ကြပါတယ်။',
        'ကိုယ်ရေးလုံခြုံမှု ရွှေစည်းမျဉ်းမှာ: **ဂိမ်း Chat တွေ၊ အများသုံး Forum တွေနဲ့ အွန်လိုင်းက သူစိမ်းတွေဆီကို PII အချက်အလက်တွေကို ဘယ်သောအခါမှ မပြောပြပါနှင့်**။ ကိုယ်ရေးအချက်အလက်များကို အမြဲတမ်း သော့ခတ်ထားပါ။'
      ],
      diagram: {
        type: 'pii-traffic-lights',
        captionEn: 'Red Light (Never Share): Address, Passwords, Full Name. Green Light (Safe): Favorite Game, Favorite Animal!',
        captionMy: 'မီးနီ (လုံးဝမမျှဝေရ): နေရပ်လိပ်စာ၊ Passwords၊ နာမည်ရင်း။ မီးစိမ်း (မျှဝေနိုင်သည်): ကြိုက်သောဂိမ်း၊ ကြိုက်သောတိရစ္ဆာန်!',
        altEn: 'Traffic light diagram showing private PII in red light circle and safe interests in green circle',
        altMy: 'မီးပွိုင့်ပုံစံဖြင့် မျှဝေရန် ဘေးကင်းသောအရာနှင့် လျှို့ဝှက်ရမည့်အရာ ခွဲခြားပြ ပုံ'
      },
      analogyEn: {
        title: 'The T-Shirt in the Park',
        description: 'You wouldn’t walk through a busy city market wearing a big sandwich-board sign that displays your home address, phone number, and bedroom door key! Sharing private info in online game lobbies is just like shouting it through a megaphone to thousands of strangers.'
      },
      analogyMy: {
        title: 'ဈေးထဲတွင် လမ်းလျှောက်ခြင်း ဥပမာ',
        description: 'လူစည်ကားသော ဈေးထဲတွင် သင့်အိမ်လိပ်စာ၊ ဖုန်းနံပါတ်နှင့် သော့တွဲကို ရင်ဘတ်ပေါ်မှာ ချိတ်ပြီး လမ်းမလျှောက်ကြပါဘူး။ အွန်လိုင်းဂိမ်းထဲမှာ ကိုယ်ရေးအချက်အလက်တွေ ပြောပြတာဟာ ထိုနည်းတူ သူစိမ်းထောင်ပေါင်းများစွာကို အော်ပြောပြနေသလို အန္တရာယ်များလှပါတယ်။'
      },
      workedExampleEn: {
        title: 'Creating a Cool, Anonymous Gaming Screen Name',
        scenario: 'A student creates an account on a chess learning platform.',
        steps: [
          { stepNumber: 1, instruction: 'Unsafe username choice', outcome: '"AungMin_Yangon_Born2015" (Exposes real name, city, and birth year!)' },
          { stepNumber: 2, instruction: 'Recognize the privacy risk', outcome: 'Strangers can easily determine Aung Min’s age and hometown.' },
          { stepNumber: 3, instruction: 'Brainstorm creative nickname', outcome: 'Combines favorite animal + cool adjective: "TurboKnight99".' },
          { stepNumber: 4, instruction: 'Safe digital identity', outcome: 'Fun, stylish username that keeps real personal privacy 100% safe!' }
        ]
      },
      workedExampleMy: {
        title: 'လုံခြုံသော ဂိမ်းအမည် (Username) တစ်ခု ဖန်တီးခြင်း ဥပမာ',
        scenario: 'စစ်တုရင် လေ့လာရေး Website တွင် အကောင့်တစ်ခု ပြုလုပ်ခြင်း။',
        steps: [
          { stepNumber: 1, instruction: 'မလုံခြုံသော အမည် ရွေးချယ်မှု', outcome: '"AungMin_Yangon_Born2015" (နာမည်ရင်း၊ မြို့နှင့် မွေးသက္ကရာဇ် ပေါ်လွင်နေသည်!)' },
          { stepNumber: 2, instruction: 'အန္တရာယ်ကို သတိပြုမိခြင်း', outcome: 'သူစိမ်းများက အသက်နှင့် နေရပ်ကို အလွယ်တကူ သိရှိသွားနိုင်သည်။' },
          { stepNumber: 3, instruction: 'တီထွင်ဆန်းသစ်သော အမည်ပြောင် စဉ်းစားခြင်း', outcome: 'ကြိုက်နှစ်သက်သော အရာများကို ပေါင်းစပ်သည်: "TurboKnight99"။' },
          { stepNumber: 4, instruction: 'လုံခြုံသော ဒစ်ဂျစ်တယ် အမည်', outcome: 'လူအများ သဘောကျပြီး ကိုယ်ရေးလုံခြုံမှုကို ၁၀၀% ကာကွယ်ပေးသော အမည်တစ်ခု ဖြစ်လာသည်။' }
        ]
      },
      activity: {
        type: 'privacy-sorter',
        titleEn: 'Safe or Secret Vault Sorter',
        titleMy: 'မျှဝေနိုင်သည် သို့မဟုတ် လျှို့ဝှက်ထားရမည် ခွဲခြားခြင်း',
        instructionsEn: 'Drag each item to either the "Safe to Share" box or the "Secret Vault" box!',
        instructionsMy: 'အချက်အလက်တစ်ခုစီကို "မျှဝေရန် ဘေးကင်းသည်" သို့မဟုတ် "လျှို့ဝှက်သေတ္တာထဲ ထားရမည်" သို့ ခွဲခြားထည့်ပါ။',
        initialData: [
          { item: 'Favorite ice cream flavor (Chocolate)', isSafe: true },
          { item: 'Your family home street address', isSafe: false },
          { item: 'Your private cell phone number', isSafe: false },
          { item: 'Favorite superhero (Spider-Man)', isSafe: true },
          { item: 'Photo showing your school uniform logo', isSafe: false }
        ]
      },
      quizQuestions: [
        {
          id: 'q-c2-1',
          questionEn: 'What does "PII" stand for in cybersecurity?',
          questionMy: 'Cybersecurity တွင် "PII" ၏ အပြည့်အစုံမှာ အဘယ်နည်း?',
          options: [
            { id: 'a', textEn: 'Personally Identifiable Information', textMy: 'Personally Identifiable Information (ကိုယ်ရေးအချက်အလက်)' },
            { id: 'b', textEn: 'Public Internet Information', textMy: 'Public Internet Information' },
            { id: 'c', textEn: 'Phone Island Indicator', textMy: 'Phone Island Indicator' },
            { id: 'd', textEn: 'Password Internet Identifier', textMy: 'Password Internet Identifier' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Correct! PII is any information that could be used to identify, contact, or locate a specific individual.',
          explanationMy: 'မှန်ကန်ပါတယ်! PII ဆိုသည်မှာ လူတစ်ဦးချင်းစီကို သီးသန့် ခွဲခြားသိရှိနိုင်သော ကိုယ်ရေးအချက်အလက်များ ဖြစ်သည်။'
        },
        {
          id: 'q-c2-2',
          questionEn: 'Which of the following is SAFE to share in a public online game lobby?',
          questionMy: 'အောက်ပါတို့အနက် မည်သည့်အရာသည် အွန်လိုင်းဂိမ်းထဲတွင် မျှဝေရန် ဘေးကင်းသနည်း?',
          options: [
            { id: 'a', textEn: 'Your favorite video game genre or favorite color', textMy: 'မိမိနှစ်သက်သော ဂိမ်းအမျိုးအစား သို့မဟုတ် ကြိုက်သောအရောင်' },
            { id: 'b', textEn: 'Your home street address and apartment number', textMy: 'မိမိအိမ်လိပ်စာနှင့် တိုက်ခန်းအမှတ်' },
            { id: 'c', textEn: 'Your mom’s phone number', textMy: 'မိခင်၏ ဖုန်းနံပါတ်' },
            { id: 'd', textEn: 'Your private email login password', textMy: 'အီးမေးလ် Password' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Spot on! Favorite colors and games reveal nothing personal about where you live or who you are.',
          explanationMy: 'မှန်ပါတယ်! ကြိုက်နှစ်သက်သော အရောင်နှင့် ဂိမ်းများသည် မည်သူမည်ဝါဖြစ်ကြောင်း မဖော်ပြသဖြင့် မျှဝေရန် ဘေးကင်းပါသည်။'
        },
        {
          id: 'q-c2-3',
          questionEn: 'A player in an online game asks: "Which elementary school do you go to so we can be friends?" What should you do?',
          questionMy: 'အွန်လိုင်းဂိမ်းထဲမှ ကစားသူတစ်ဦးက "ခင်ရအောင် မင်းဘယ်ကျောင်းမှာ တက်နေတာလဲ?" ဟု မေးလာပါက သင် မည်သို့ ပြုလုပ်သင့်သနည်း?',
          options: [
            { id: 'a', textEn: 'Do not tell them, change the subject, and tell a trusted parent or adult if they keep asking', textMy: 'မပြောပြပါနှင့်၊ စကားလမ်းကြောင်းလွှဲပါ၊ ဆက်မေးနေပါက မိဘ သို့မဟုတ် လူကြီးများကို ပြောပြပါ' },
            { id: 'b', textEn: 'Give them the exact address of your school and classroom number', textMy: 'ကျောင်းလိပ်စာနှင့် စာသင်ခန်းနံပါတ်ကို အတိအကျ ပြောပြပါ' },
            { id: 'c', textEn: 'Send them a selfie wearing your school badge', textMy: 'ကျောင်းတံဆိပ်ပါသော ဆယ်လ်ဖီပုံ ပို့ပေးပါ' },
            { id: 'd', textEn: 'Give them your home front door key', textMy: 'အိမ်တံခါးသော့ ပေးလိုက်ပါ' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Awesome! Never disclose your school or physical location to strangers online.',
          explanationMy: 'အရမ်းတော်တယ်! အွန်လိုင်းသူစိမ်းများကို မိမိကျောင်းနှင့် နေရပ်လိပ်စာကို ဘယ်တော့မှ မပြောပြရပါ။'
        }
      ],
      summaryEn: [
        'Personally Identifiable Information (PII) must be kept strictly private.',
        'Never post addresses, phone numbers, school names, or passwords in public.',
        'Use fun, anonymous usernames that celebrate your hobbies without revealing your identity.'
      ],
      summaryMy: [
        'ကိုယ်ရေးအချက်အလက် (PII) များကို အမြဲတမ်း လျှို့ဝှက်စွာ ထိန်းသိမ်းရမည်။',
        'အိမ်လိပ်စာ၊ ဖုန်းနံပါတ်၊ ကျောင်းအမည်နှင့် Passwords များကို အများမြင်ကွင်းတွင် ဘယ်တော့မှ မတင်ပါနှင့်။',
        'မိမိမည်သူဖြစ်ကြောင်း မပေါ်လွင်စေသော ချစ်စရာ အမည်ပြောင်များကိုသာ အသုံးပြုပါ။'
      ]
    },

    // -------------------------------------------------------------------------
    // Lesson 3: Strong Passwords and Passphrases
    // -------------------------------------------------------------------------
    {
      id: 'cyber-3',
      lessonNumber: 3,
      titleEn: 'Strong Passwords and Passphrases',
      titleMy: 'ခိုင်မာသော Passwords နှင့် Passphrases များ',
      shortIntroEn: 'A weak password like "123456" can be cracked in less than a second! Learn the secret recipe for uncrackable digital locks.',
      shortIntroMy: '"123456" လို လွယ်ကူတဲ့ Password တစ်ခုဟာ တစ်စက္ကန့်တောင် မခံဘဲ ဖောက်ထွင်းခံရနိုင်ပါတယ်! ဖောက်ထွင်းမရသော လျှို့ဝှက်ချက်များကို လေ့လာကြမယ်။',
      learningObjectivesEn: [
        'Understand how automated hacker tools crack simple passwords.',
        'Learn the difference between a short password and a long, memorable "Passphrase".',
        'Master the 4 strength criteria: Length (12+ characters), Uppercase, Numbers, and Symbols.'
      ],
      learningObjectivesMy: [
        'Hacker များ၏ ကွန်ပျူတာ ပရိုဂရမ်များသည် ရိုးရှင်းသော Password များကို မည်သို့ ဖောက်ထွင်းပုံကို နားလည်စေရန်။',
        'တိုတောင်းသော Password နှင့် မှတ်မိလွယ်၍ ရှည်လျားသော "Passphrase" တို့၏ ကွာခြားချက်ကို သိရှိစေရန်။',
        'ခိုင်မာမှု စံနှုန်း ၄ ချက်: အလျား (၁၂ လုံးနှင့်အထက်)၊ စာလုံးကြီး၊ ဂဏန်းများနှင့် သင်္ကေတများ ပါဝင်စေရန်။'
      ],
      explanationEn: [
        'Hacker criminals do not sit at a keyboard guessing passwords one-by-one by hand. Instead, they use automated computer scripts called **Brute-Force Tools** that can test millions of password guesses every single second!',
        'If your password is common or short (like `password`, `123456`, or your pet’s name), an automated tool cracks it in less than a blink of an eye. But if your password is long and complex, cracking it would take a supercomputer hundreds of years!',
        'The modern best practice is using a **Passphrase**: string together 3 or 4 random, memorable words with symbols and numbers. For example: `Purple-Dolphin-Jumps-92!` is easy for you to remember, but practically impossible for computers to guess.'
      ],
      explanationMy: [
        'Hacker များသည် ကီးဘုတ်ပေါ်တွင် တစ်လုံးချင်း လက်ဖြင့် ထိုင်မှန်းနေကြသည် မဟုတ်ပါ။ **Brute-Force Tools** ဟုခေါ်သော ကွန်ပျူတာ ပရိုဂရမ်များဖြင့် တစ်စက္ကန့်အတွင်း ခန့်မှန်းချက် သန်းပေါင်းများစွာကို စမ်းသပ်ဖောက်ထွင်းကြခြင်း ဖြစ်သည်။',
        'အကယ်၍ သင့် Password သည် `password`, `123456` သို့မဟုတ် သင့်အိမ်မွေးတိရစ္ဆာန် အမည်ကဲ့သို့ တိုတောင်းရိုးရှင်းနေပါက မျက်တောင်တစ်ခတ်အတွင်း ဖောက်ထွင်းခံရမည် ဖြစ်သည်။ သို့သော် ရှည်လျားခိုင်မာပါက စူပါကွန်ပျူတာကြီးဖြင့်ပင် နှစ်ပေါင်းရာချီ ကြာမြင့်မည် ဖြစ်သည်။',
        'မျက်မှောက်ခေတ် အကောင်းဆုံး နည်းလမ်းမှာ **Passphrase** ဖြစ်သည်: ကျပန်းစကားလုံး ၃၊ ၄ လုံးကို သင်္ကေတ၊ ဂဏန်းများနှင့် တွဲစပ်ထားခြင်း ဖြစ်သည်။ ဥပမာ- `Purple-Dolphin-Jumps-92!` သည် မိမိအတွက် မှတ်မိလွယ်သော်လည်း ကွန်ပျူတာများ ခန့်မှန်းရန် မဖြစ်နိုင်သလောက် ခက်ခဲပါသည်။'
      ],
      diagram: {
        type: 'password-strength-meter',
        captionEn: 'Weak: "cat" (0.001 sec) vs Strong Passphrase: "Blue-Rocket-Dance-48!" (2,000 years to crack)!',
        captionMy: 'အားနည်းချက်: "cat" (၀.၀၀၁ စက္ကန့်) vs အားကောင်းသော Passphrase: "Blue-Rocket-Dance-48!" (နှစ်ပေါင်း ၂၀၀၀)!',
        altEn: 'Bar chart comparing crack time between short 4 letter word and long 18 character passphrase',
        altMy: 'Password အတိုနှင့် အရှည်တို့၏ ဖောက်ထွင်းခံရနိုင်သည့် အချိန်နှိုင်းယှဉ်ချက်ပြ ပုံ'
      },
      analogyEn: {
        title: 'Toothbrush Rules for Passwords',
        description: 'Treat your passwords like your toothbrush: 1. Pick a good sturdy one. 2. Change it periodically. 3. NEVER share it with your friends, no matter how much you like them!'
      },
      analogyMy: {
        title: 'သွားပွတ်တံ စည်းမျဉ်း ဥပမာ',
        description: 'သင့် Password ကို သွားပွတ်တံလို သဘောထားပါ: ၁။ ခိုင်မာကောင်းမွန်တာကို ရွေးပါ။ ၂။ အချိန်တန်ရင် အသစ်လဲပါ။ ၃။ ဘယ်လောက်ခင်တဲ့ သူငယ်ချင်းဖြစ်ပါစေ ဘယ်တော့မှ ပေးမသုံးပါနှင့်!'
      },
      workedExampleEn: {
        title: 'Crafting an Uncrackable Passphrase',
        scenario: 'Let us transform a weak password into a fortress passphrase.',
        steps: [
          { stepNumber: 1, instruction: 'Start with a simple sentence', outcome: '"I love playing outside in summer"' },
          { stepNumber: 2, instruction: 'Pick 3 vivid keywords', outcome: '"Sunny", "Mango", "Bicycle"' },
          { stepNumber: 3, instruction: 'Join with hyphens', outcome: '"Sunny-Mango-Bicycle"' },
          { stepNumber: 4, instruction: 'Add a number & symbol', outcome: '"Sunny-Mango-Bicycle#88" (21 characters, uncrackable fortress!)' }
        ]
      },
      workedExampleMy: {
        title: 'ဖောက်ထွင်းမရသော Passphrase တစ်ခု တည်ဆောက်ခြင်း ဥပမာ',
        scenario: 'အားနည်းသော Password မှ ခံတပ်ကြီးကဲ့သို့ ခိုင်မာသော Passphrase သို့ ပြောင်းလဲခြင်း။',
        steps: [
          { stepNumber: 1, instruction: 'ရိုးရှင်းသော စာကြောင်းတစ်ကြောင်းမှ စတင်သည်', outcome: '"နွေရာသီမှာ သရက်သီးစားပြီး စက်ဘီးစီးရတာ ကြိုက်တယ်"' },
          { stepNumber: 2, instruction: 'ထင်ရှားသော စကားလုံး ၃ လုံးကို ရွေးသည်', outcome: '"Sunny", "Mango", "Bicycle"' },
          { stepNumber: 3, instruction: 'တုံးတို (-) ဖြင့် တွဲစပ်သည်', outcome: '"Sunny-Mango-Bicycle"' },
          { stepNumber: 4, instruction: 'ဂဏန်းနှင့် သင်္ကေတ ထည့်ပေါင်းသည်', outcome: '"Sunny-Mango-Bicycle#88" (စာလုံး ၂၁ လုံးပါ ခိုင်မာသော စကားဝှက် ဖြစ်သွားသည်!)' }
        ]
      },
      activity: {
        type: 'password-checker',
        titleEn: 'Interactive Password Strength Lab',
        titleMy: 'Password ခိုင်မာမှု စမ်းသပ်ခန်း',
        instructionsEn: 'Test fictional sample passwords and observe how length and variety boost the strength meter to 100%!',
        instructionsMy: 'စိတ်ကူးယဉ် နမူနာ Password များကို စမ်းသပ်ကြည့်ပြီး အလျားနှင့် အမျိုးအစားစုံလင်မှုက ခိုင်မာမှုကို မည်သို့ ၁၀၀% အထိ မြှင့်တင်ပေးသည်ကို ကြည့်ရှုပါ။ (မှတ်ချက်: တကယ့် ကိုယ်ပိုင် password များကို မရိုက်ထည့်ပါနှင့်)',
        initialData: [
          { sample: '123456', strength: 'Very Weak (Cracked in 0.0001 seconds!)', color: '#ff4d4d' },
          { sample: 'supercat', strength: 'Weak (Cracked in 2 minutes)', color: '#ffa500' },
          { sample: 'SuperCat!2024', strength: 'Good (Takes 3 years)', color: '#2ecc71' },
          { sample: 'Green-Elephant-Dance-99!', strength: 'Uncrackable Fortress (Takes 50,000+ years!)', color: '#6c47ff' }
        ]
      },
      quizQuestions: [
        {
          id: 'q-c3-1',
          questionEn: 'Which of the following makes a password the strongest and hardest to crack?',
          questionMy: 'အောက်ပါတို့အနက် မည်သည့်အချက်က Password တစ်ခုကို အခိုင်မာဆုံး ဖြစ်စေသနည်း?',
          options: [
            { id: 'a', textEn: 'Being long (12+ characters) with a mix of words, numbers, and symbols', textMy: 'စာလုံးအလျား ရှည်လျားပြီး (၁၂ လုံးနှင့်အထက်) စာလုံး၊ ဂဏန်းနှင့် သင်္ကေတများ ရောနှောပါဝင်ခြင်း' },
            { id: 'b', textEn: 'Using only the word "password"', textMy: '"password" ဟူသော စကားလုံးကိုသာ သုံးခြင်း' },
            { id: 'c', textEn: 'Using your real birthday date like 2012', textMy: 'မိမိ မွေးသက္ကရာဇ် ၂၀၁၂ ကို သုံးခြင်း' },
            { id: 'd', textEn: 'Using 1 single lowercase letter', textMy: 'စာလုံးအသေး ၁ လုံးတည်းသာ သုံးခြင်း' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Correct! Length is the number one defense against automated brute-force attacks.',
          explanationMy: 'မှန်ကန်ပါတယ်! အလျားရှည်လျားခြင်းသည် ဖောက်ထွင်းခံရမှုမှ အဓိက ကာကွယ်ပေးသော နံပါတ်တစ် အချက် ဖြစ်သည်။'
        },
        {
          id: 'q-c3-2',
          questionEn: 'Why should you NEVER use the same password on every single website?',
          questionMy: 'Website အားလုံးတွင် တူညီသော Password တစ်ခုတည်းကို အဘယ်ကြောင့် ဘယ်တော့မှ မသုံးသင့်သနည်း?',
          options: [
            { id: 'a', textEn: 'If one website gets breached, attackers can unlock all your other accounts instantly', textMy: 'Website တစ်ခု ပေါက်ကြားသွားပါက အခြားသော အကောင့်အားလုံးပါ ချက်ချင်း အဖောက်ခံရနိုင်သောကြောင့်' },
            { id: 'b', textEn: 'Because computers run out of ink', textMy: 'ကွန်ပျူတာ မှင်ကုန်သွားမည် ဖြစ်သောကြောင့်' },
            { id: 'c', textEn: 'Because keyboards get confused', textMy: 'ကီးဘုတ် ရှုပ်ထွေးသွားမည် ဖြစ်သောကြောင့်' },
            { id: 'd', textEn: 'Because you will get too many friend requests', textMy: 'Friend Request များလွန်းသွားမည် ဖြစ်သောကြောင့်' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Spot on! Reusing passwords is like having one master key for your house, car, locker, and safe.',
          explanationMy: 'မှန်ပါတယ်! Password တစ်ခုတည်း တူညီစွာ သုံးပါက အိမ်သော့၊ ကားသော့၊ မီးခံသေတ္တာသော့ အားလုံးကို သော့တစ်ချောင်းတည်း သုံးသကဲ့သို့ အလွန်အန္တရာယ် ကြီးမားပါသည်။'
        },
        {
          id: 'q-c3-3',
          questionEn: 'Who is the ONLY person you should ever share your passwords with?',
          questionMy: 'မိမိ၏ Password များကို မည်သူတစ်ဦးတည်းနှင့်သာ မျှဝေသင့်သနည်း?',
          options: [
            { id: 'a', textEn: 'Your parents or trusted legal guardians', textMy: 'မိမိ၏ မိဘများ သို့မဟုတ် ယုံကြည်စိတ်ချရသော အုပ်ထိန်းသူများ' },
            { id: 'b', textEn: 'Your best friend at school', textMy: 'ကျောင်းက အချစ်ဆုံး သူငယ်ချင်း' },
            { id: 'c', textEn: 'A stranger in an online gaming chat room', textMy: 'အွန်လိုင်းဂိမ်းထဲက သူစိမ်းတစ်ယောက်' },
            { id: 'd', textEn: 'Anyone who asks politely in a comment', textMy: 'ယဉ်ကျေးစွာ လာတောင်းသော မည်သူမဆို' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Awesome! Only parents and trusted guardians should know your credentials to keep you safe.',
          explanationMy: 'အရမ်းတော်တယ်! သင့်ကို ဘေးကင်းအောင် စောင့်ရှောက်ပေးမည့် မိဘနှင့် အုပ်ထိန်းသူများသာ သိရှိခွင့် ရှိသင့်ပါသည်။'
        }
      ],
      summaryEn: [
        'Short passwords can be cracked by automated tools in seconds.',
        'Passphrases (long chains of random words + numbers + symbols) provide maximum security.',
        'Never reuse the same password across multiple websites, and only share with parents.'
      ],
      summaryMy: [
        'တိုတောင်းသော Password များကို ကွန်ပျူတာ ပရိုဂရမ်များက စက္ကန့်ပိုင်းအတွင်း ဖောက်ထွင်းနိုင်သည်။',
        'Passphrase (စကားလုံးရှည် + ဂဏန်း + သင်္ကေတများ) သည် အမြင့်မားဆုံး လုံခြုံရေးကို ပေးသည်။',
        'Website တစ်ခုထက်ပို၍ Password အတူတူ မသုံးပါနှင့်၊ မိဘများနှင့်သာ မျှဝေပါ။'
      ]
    },

    // -------------------------------------------------------------------------
    // Lesson 4: Recognizing Phishing Messages
    // -------------------------------------------------------------------------
    {
      id: 'cyber-4',
      lessonNumber: 4,
      titleEn: 'Recognizing Phishing Messages',
      titleMy: 'လှည့်စားသော Phishing မက်ဆေ့ခ်ျများကို သတိပြုခြင်း',
      shortIntroEn: 'Scammers dangle fake shiny baits like "You won a free iPad!" to trick you. Learn how to spot digital phishing hooks.',
      shortIntroMy: '"iPad အလကား မဲပေါက်သည်!" စတဲ့ သွေးဆောင်ဖြားယောင်းမှုတွေနဲ့ လှည့်စားတတ်ကြပါတယ်။ Phishing ထောင်ချောက်တွေကို ရှာဖွေဖော်ထုတ်ကြမယ်။',
      learningObjectivesEn: [
        'Define "Phishing" (fraudulent messages designed to steal credentials or money).',
        'Identify common red flags: Artificial urgency, fake prizes, spelling errors, and spoofed senders.',
        'Learn the golden action: Stop, do not click, and report to an adult.'
      ],
      learningObjectivesMy: [
        '"Phishing" (အချက်အလက် သို့မဟုတ် ငွေကြေး ခိုးယူရန် လှည့်စားသော မက်ဆေ့ခ်ျများ) ကို နားလည်စေရန်။',
        'သံသယဖြစ်ဖွယ် အချက်များ: အလောတကြီး လုပ်ခိုင်းခြင်း၊ အတုအယောင်ဆုများ၊ စာလုံးပေါင်းအမှားများနှင့် အတုပြုလုပ်ထားသော လိပ်စာများကို ခွဲခြားသိစေရန်။',
        'အဓိက လုပ်ဆောင်ချက်: ရပ်တန့်ပါ၊ လုံးဝ မနှိပ်ပါနှင့်၊ လူကြီးထံ အသိပေးတိုင်ကြားပါ။'
      ],
      explanationEn: [
        'Have you ever seen a fisherman cast a line with a shiny plastic worm into a lake? The fish thinks it’s getting a free snack, but gets caught on a hidden metal hook! In the digital world, scammers do the exact same thing: they go **"Phishing"**.',
        'A **Phishing Message** is a fake email, text message, or game chat designed to look like it came from a real company (like Roblox, YouTube, or your school). It tries to panic or excite you into clicking a dangerous link or typing your password.',
        'Classic Phishing Red Flags: 1. **Fake Urgency** ("Your account will be deleted in 10 minutes!"), 2. **Too Good to Be True** ("You won 1,000,000 free coins! Click here!"), 3. **Spelling errors and weird sender emails** (like `support@r0bl0x-free-gifts.xyz`).'
      ],
      explanationMy: [
        'ငါးမျှားသမားက ငါးစာတုလေးဖြင့် ငါးမျှားတာကို မြင်ဖူးပါသလား? ငါးကလေးက အစာအစစ်ထင်ပြီး ဟပ်လိုက်တဲ့အခါ သံချိတ်မှာ မိသွားသလိုပါပဲ။ ဒစ်ဂျစ်တယ်လောကမှာလည်း လူလိမ်တွေက **"Phishing"** လုပ်ကြပါတယ်။',
        '**Phishing Message** ဆိုတာ တကယ့်ကုမ္ပဏီအစစ် (ဥပမာ YouTube, Roblox သို့မဟုတ် ကျောင်း) က ပို့သယောင် ဟန်ဆောင်ထားတဲ့ အတုအယောင် စာတိုများ ဖြစ်ပါတယ်။ သင့်ကို ထိတ်လန့်စေခြင်း သို့မဟုတ် လောဘတက်စေခြင်းဖြင့် လင့်ခ်များကို နှိပ်ခိုင်းကာ Password များ ခိုးယူရန် ကြိုးစားကြပါတယ်။',
        'သတိထားရမည့် အချက်များ: ၁။ **အလောတကြီး လုပ်ခိုင်းခြင်း** ("၁၀ မိနစ်အတွင်း မနှိပ်ပါက အကောင့်ဖျက်မည်!"), ၂။ **မယုံနိုင်လောက်အောင် ကောင်းလွန်းနေခြင်း** ("ဒေါ်လာ ၁ သန်း မဲပေါက်သည်!"), ၃။ **စာလုံးပေါင်းမှားခြင်းနှင့် မသင်္ကာဖွယ် အီးမေးလ်လိပ်စာများ** (ဥပမာ `support@r0bl0x-free-gifts.xyz`)။'
      ],
      diagram: {
        type: 'phishing-hook-email',
        captionEn: 'Inspect the 3 Red Flags: Fake Urgency, Suspicious Sender URL, and "Click Here to Claim" hook!',
        captionMy: 'သတိပြုရန် အချက် ၃ ချက်: အလောတကြီး ခြိမ်းခြောက်ခြင်း၊ အတုအယောင် လိပ်စာနှင့် ငါးစာလင့်ခ်!',
        altEn: 'Diagram dissecting a phishing email showing fake header, fake countdown timer, and hook link',
        altMy: 'Phishing အီးမေးလ်အတု၏ လှည့်စားထားသော အစိတ်အပိုင်းများ ခွဲခြမ်းပြ ပုံ'
      },
      analogyEn: {
        title: 'The Wolf in Sheep’s Clothing',
        description: 'Think of the classic fable: The big bad wolf puts on a fluffy white sheep fleece so the sheep will let him into the barn. A phishing email puts on a familiar corporate logo so you will unlock your private door!'
      },
      analogyMy: {
        title: 'သိုးရေခြုံထားသော ဝံပုလွေ ဥပမာ',
        description: 'ပုံပြင်ထဲက ဝံပုလွေဆိုးကြီးသည် သိုးခြံထဲ ဝင်နိုင်ရန် သိုးမွေးအဖြူရောင် ခြုံထားသလိုပါပဲ။ Phishing သမားများသည်လည်း သင်ယုံကြည်စေရန် နာမည်ကြီး ကုမ္ပဏီလိုဂိုများကို အတုယူ တပ်ဆင်ထားကြခြင်း ဖြစ်ပါသည်။'
      },
      workedExampleEn: {
        title: 'Spotting a Phishing Attack Step-by-Step',
        scenario: 'A student receives an email claiming their gaming account was hacked.',
        steps: [
          { stepNumber: 1, instruction: 'Read subject line', outcome: '"URGENT: Your account is locked! Click to reset NOW!"' },
          { stepNumber: 2, instruction: 'Inspect sender address', outcome: 'Sender is `security-alert@fast-game-winner99.net` (NOT the official company domain!)' },
          { stepNumber: 3, instruction: 'Notice generic greeting', outcome: 'Says "Dear Customer" instead of your actual username.' },
          { stepNumber: 4, instruction: 'Take safe action', outcome: 'Do NOT click any link. Delete the message and show an adult immediately.' }
        ]
      },
      workedExampleMy: {
        title: 'Phishing အီးမေးလ်ကို အဆင့်ဆင့် စစ်ဆေးခြင်း ဥပမာ',
        scenario: 'ကျောင်းသားတစ်ဦးထံသို့ "ဂိမ်းအကောင့် အဖောက်ခံရပြီ" ဟူသော အီးမေးလ် ရောက်ရှိလာခြင်း။',
        steps: [
          { stepNumber: 1, instruction: 'ခေါင်းစဉ်ကို ဖတ်ရှုသည်', outcome: '"အရေးပေါ်: သင့်အကောင့် ပိတ်သွားပါပြီ! ပြန်ဖွင့်ရန် အခုချက်ချင်း နှိပ်ပါ!"' },
          { stepNumber: 2, instruction: 'ပေးပို့သူ လိပ်စာကို စစ်ဆေးသည်', outcome: 'လိပ်စာမှာ `security-alert@fast-game-winner99.net` ဖြစ်နေသည် (တရားဝင် ကုမ္ပဏီလိပ်စာ မဟုတ်ပါ!)' },
          { stepNumber: 3, instruction: 'နှုတ်ခွန်းဆက်ကို သတိပြုသည်', outcome: 'မိမိအမည် မပါဘဲ "ချစ်လှစွာသော အသုံးပြုသူ" ဟုသာ ယေဘုယျ ရေးထားသည်။' },
          { stepNumber: 4, instruction: 'ဘေးကင်းစွာ ဆောင်ရွက်သည်', outcome: 'လင့်ခ်ကို လုံးဝမနှိပ်ဘဲ ဖျက်ပစ်ပြီး မိဘလူကြီးထံ ချက်ချင်း ပြသတိုင်ပင်သည်။' }
        ]
      },
      activity: {
        type: 'phishing-detector',
        titleEn: 'Phishing Detective Simulator',
        titleMy: 'Phishing စုံထောက် စမ်းသပ်ခန်း',
        instructionsEn: 'Review the 3 incoming messages. Click on the one that is a PHISHING TRAP!',
        instructionsMy: 'ရောက်ရှိလာသော မက်ဆေ့ခ်ျ ၃ ခုကို ဖတ်ရှုပြီး လှည့်စားထားသော PHISHING ထောင်ချောက်ကို ရှာဖွေနှိပ်ပါ။',
        initialData: [
          { text: 'From Mom: "Don’t forget your umbrella today, it looks like rain!"', isPhishing: false },
          { text: 'From GameWinners: "CONGRATS! You won a FREE $500 gift card! Click here in 5 minutes to claim or lose it forever!"', isPhishing: true },
          { text: 'From School Library: "Reminder: The book you borrowed is due next Monday."', isPhishing: false }
        ]
      },
      quizQuestions: [
        {
          id: 'q-c4-1',
          questionEn: 'What is a phishing attack?',
          questionMy: 'Phishing တိုက်ခိုက်မှု ဆိုသည်မှာ အဘယ်နည်း?',
          options: [
            { id: 'a', textEn: 'A fake message that pretends to be trusted to trick you into revealing passwords or clicking bad links', textMy: 'ယုံကြည်ရသယောင် ဟန်ဆောင်ပြီး Password များ ခိုးယူရန် သို့မဟုတ် လင့်ခ်ဆိုးများ နှိပ်စေရန် လှည့်စားသော မက်ဆေ့ခ်ျ' },
            { id: 'b', textEn: 'Catching actual trout in a river with a fishing rod', textMy: 'မြစ်ထဲတွင် ငါးမျှားတံဖြင့် တကယ့်ငါး ဖမ်းခြင်း' },
            { id: 'c', textEn: 'A computer updating its clock automatically', textMy: 'ကွန်ပျူတာ နာရီ အလိုအလျောက် ပြောင်းလဲခြင်း' },
            { id: 'd', textEn: 'Charging your phone with a wall plug', textMy: 'ဖုန်းကို အားသွင်းကြိုးဖြင့် အားသွင်းခြင်း' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Correct! Phishing uses digital impersonation to lure victims into traps.',
          explanationMy: 'မှန်ကန်ပါတယ်! Phishing သည် နာမည်ကြီး ကုမ္ပဏီများအဖြစ် ဟန်ဆောင်၍ လှည့်စားခြင်း ဖြစ်သည်။'
        },
        {
          id: 'q-c4-2',
          questionEn: 'Which phrase in a message is a huge red flag warning of phishing?',
          questionMy: 'အောက်ပါ မက်ဆေ့ခ်ျ စကားစုများအနက် မည်သည့်အရာသည် Phishing ၏ အဓိက သတိပေးချက် ဖြစ်သနည်း?',
          options: [
            { id: 'a', textEn: '"ACT NOW! You won $10,000! Click this link in 60 seconds or lose your prize!"', textMy: '"အခုချက်ချင်းလုပ်ပါ! ဒေါ်လာ ၁၀,၀၀၀ မဲပေါက်သည်! စက္ကန့် ၆၀ အတွင်း နှိပ်ပါ မဟုတ်လျှင် ဆုံးရှုံးမည်!"' },
            { id: 'b', textEn: '"Have a nice weekend with your family"', textMy: '"မိသားစုနှင့်အတူ ပျော်ရွှင်သော စနေ၊ တနင်္ဂနွေ ဖြစ်ပါစေ"' },
            { id: 'c', textEn: '"The library opens at 9:00 AM on Tuesdays"', textMy: '"အင်္ဂါနေ့ မနက် ၉ နာရီတွင် စာကြည့်တိုက် ဖွင့်ပါသည်"' },
            { id: 'd', textEn: '"Chapter 4 homework is due on Friday"', textMy: '"အခန်း ၄ အိမ်စာကို သောကြာနေ့ နောက်ဆုံး တင်ရမည်"' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Spot on! Scammers create fake urgency and wild prizes to stop you from thinking clearly.',
          explanationMy: 'မှန်ပါတယ်! လူလိမ်များသည် စဉ်းစားချိန် မရအောင် အလောတကြီး လုပ်ခိုင်းခြင်းနှင့် ဆုမဲအတုများဖြင့် ဖြားယောင်းတတ်ကြသည်။'
        },
        {
          id: 'q-c4-3',
          questionEn: 'What should you do if you receive a suspicious message asking for your password?',
          questionMy: 'မိမိ Password ကို တောင်းဆိုသော သံသယဖြစ်ဖွယ် မက်ဆေ့ခ်ျ ရောက်လာပါက မည်သို့ ပြုလုပ်ရမည်နည်း?',
          options: [
            { id: 'a', textEn: 'Do NOT click any link, do not reply, and show a parent or teacher immediately', textMy: 'မည်သည့်လင့်ခ်ကိုမျှ မနှိပ်ပါနှင့်၊ ပြန်မပြောပါနှင့်၊ မိဘ သို့မဟုတ် ဆရာထံ ချက်ချင်း ပြသတိုင်ပင်ပါ' },
            { id: 'b', textEn: 'Type your password immediately so your account doesn’t get locked', textMy: 'အကောင့်မပိတ်အောင် Password ကို ချက်ချင်း ရိုက်ထည့်ပေးလိုက်ပါ' },
            { id: 'c', textEn: 'Forward the message to 50 classmates', textMy: 'အတန်းဖော် ၅၀ ထံသို့ စာကို ထပ်ဆင့် ပို့ပေးလိုက်ပါ' },
            { id: 'd', textEn: 'Click the link 10 times quickly', textMy: 'လင့်ခ်ကို အကြိမ်ကြိမ် အမြန် နှိပ်ပါ' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Awesome! Real companies will never ask you for your password via text or email.',
          explanationMy: 'အရမ်းတော်တယ်! တကယ့် ကုမ္ပဏီအစစ်များသည် အီးမေးလ် သို့မဟုတ် Chat ထဲတွင် Password ဘယ်တော့မှ တောင်းလေ့မရှိပါ။'
        }
      ],
      summaryEn: [
        'Phishing messages pretend to be reputable companies to steal passwords and personal data.',
        'Watch for artificial urgency, generic greetings, spelling errors, and fake prize promises.',
        'When in doubt: Stop, do not click links, and verify with a trusted adult.'
      ],
      summaryMy: [
        'Phishing သည် နာမည်ကြီး ကုမ္ပဏီများအဖြစ် ဟန်ဆောင်၍ Passwords များကို ခိုးယူရန် ကြိုးစားခြင်း ဖြစ်သည်။',
        'အလောတကြီး လုပ်ခိုင်းခြင်း၊ ဆုမဲအတုများနှင့် မသင်္ကာဖွယ် လိပ်စာများကို အမြဲ သတိထားပါ။',
        'သံသယရှိပါက လုံးဝ မနှိပ်ဘဲ ရပ်တန့်၍ လူကြီးများထံ ချက်ချင်း အသိပေးတိုင်ကြားပါ။'
      ]
    },

    // -------------------------------------------------------------------------
    // Lesson 5: Safe Links and Downloads
    // -------------------------------------------------------------------------
    {
      id: 'cyber-5',
      lessonNumber: 5,
      titleEn: 'Safe Links and Downloads',
      titleMy: 'ဘေးကင်းသော Links များနှင့် Downloads များ',
      shortIntroEn: 'That "Free Minecraft Skin" download might actually be malware! Learn how to inspect links before clicking.',
      shortIntroMy: '"Minecraft Skin အလကားရမည်" ဆိုတဲ့ Download ထဲမှာ ဗိုင်းရပ်စ်ဆိုးတွေ ပါနေနိုင်ပါတယ်! မနှိပ်ခင် Link တွေကို စစ်ဆေးနည်း လေ့လာကြမယ်။',
      learningObjectivesEn: [
        'Understand what malware, viruses, and trojan horses are.',
        'Learn how to inspect URLs and check for secure HTTPS padlocks.',
        'Practice safe downloading habits: Only download from official verified app stores.'
      ],
      learningObjectivesMy: [
        'Malware, Viruses နှင့် Trojan Horses စသော အန္တရာယ်ရှိ ဆော့ဖ်ဝဲလ်များကို နားလည်စေရန်။',
        'Website လိပ်စာ (URLs) များကို စစ်ဆေးတတ်စေရန်နှင့် လုံခြုံသော HTTPS သော့ခလောက် အမှတ်အသားကို သိရှိစေရန်။',
        'တရားဝင် App Store များမှသာ Download ပြုလုပ်သည့် ဘေးကင်းသော အလေ့အကျင့်ကို ရရှိစေရန်။'
      ],
      explanationEn: [
        'Clicking a link on the web is like opening a door to a new room. Most doors lead to fun, friendly places! But some links lead to dangerous traps designed to sneak **Malware** (malicious software) onto your computer.',
        'Malware can slow down your device, spy on your keystrokes, pop up annoying ads, or damage your files. Sometimes bad files disguise themselves as exciting free video games, movie files, or cheat codes. This trick is called a **Trojan Horse**!',
        'Always inspect a link before clicking! Look at the website address bar: Does it start with **https://** and show a closed padlock 🔒? Is the domain name spelled correctly (e.g., `google.com` instead of `g00gle-download-free.biz`)?'
      ],
      explanationMy: [
        'Web link တစ်ခုကို နှိပ်လိုက်ခြင်းသည် အခန်းအသစ်တစ်ခုထဲသို့ တံခါးဖွင့်ဝင်လိုက်ခြင်းနှင့် တူပါသည်။ အခန်းအများစုမှာ ပျော်စရာကောင်းသော်လည်း အချို့လင့်ခ်များသည် သင့်စက်ထဲသို့ **Malware (အန္တရာယ်ရှိ ဆော့ဖ်ဝဲလ်)** များ ထည့်သွင်းပေးမည့် ထောင်ချောက်များ ဖြစ်ကြသည်။',
        'Malware များသည် စက်ကို နှေးကွေးစေခြင်း၊ သင်ရိုက်သော စာများကို ခိုးကြည့်ခြင်း သို့မဟုတ် ဖိုင်များကို ဖျက်ဆီးပစ်ခြင်းများ ပြုလုပ်နိုင်သည်။ တစ်ခါတစ်ရံ ၎င်းဆိုးကျိုးများသည် အလကားရမည့် ဂိမ်းများ သို့မဟုတ် Hack နည်းများအဖြစ် ဟန်ဆောင်ထားတတ်ကြသည်။ ၎င်းကို **Trojan Horse (ဂျင်ကောင်မြင်း)** ဟု ခေါ်သည်။',
        'မနှိပ်ခင် Link ကို အမြဲစစ်ဆေးပါ! လိပ်စာဘားတွင် **https://** နှင့် သော့ခလောက်ပုံစံ 🔒 ပါရှိသလား? နာမည်စာလုံးပေါင်း မှန်ကန်သလား (ဥပမာ `google.com` အစား `g00gle-download-free.biz` ဖြစ်မနေစေရန်) သေချာစစ်ဆေးပါ။'
      ],
      diagram: {
        type: 'url-anatomy-anatomy',
        captionEn: 'Anatomy of a Safe URL: https:// (Encrypted padlock) + verified domain name (nyanlearn.org)!',
        captionMy: 'လုံခြုံသော URL တစ်ခု၏ ဖွဲ့စည်းပုံ: https:// (သော့ခလောက်) + တရားဝင် ဒိုမိန်းအမည်!',
        altEn: 'URL anatomy diagram highlighting HTTPS, padlock icon, domain name, and suspicious subdomains',
        altMy: 'Website လိပ်စာတစ်ခု၏ အစိတ်အပိုင်းများကို ခွဲခြမ်းပြသထားသော ပုံ'
      },
      analogyEn: {
        title: 'The Trojan Horse of Ancient Greece',
        description: 'In ancient history, Greek soldiers hid inside a giant hollow wooden horse left outside the city of Troy. The Trojans pulled the horse inside as a gift, and at night, the soldiers climbed out! A trojan file looks like a fun game, but hides sneaky malware inside.'
      },
      analogyMy: {
        title: 'ရှေးခေတ် ထရိုဂျင် မြင်းရုပ်ကြီး ဥပမာ',
        description: 'ရှေးခေတ်စစ်ပွဲတွင် စစ်သည်များသည် သစ်သားမြင်းရုပ်ကြီးထဲ ပုန်းခိုပြီး လက်ဆောင်အဖြစ် ဟန်ဆောင်ကာ ရန်သူ့မြို့ရိုးထဲ ဝင်ရောက်ခဲ့ကြသည်။ အွန်လိုင်း Trojan ဖိုင်များသည်လည်း ဂိမ်းအလကားရမည်ဟု ဟန်ဆောင်ပြီး အတွင်း၌ ဗိုင်းရပ်စ်ဆိုးများကို ဝှက်ထားတတ်ကြသည်။'
      },
      workedExampleEn: {
        title: 'Hovering Over a Suspicious Link',
        scenario: 'A student sees a download button saying: "Download Free Minecraft Mod Pack!"',
        steps: [
          { stepNumber: 1, instruction: 'Do not click immediately', outcome: 'Pause and keep hands off the mouse click.' },
          { stepNumber: 2, instruction: 'Hover mouse cursor over link', outcome: 'Browser preview bar appears at bottom left of screen.' },
          { stepNumber: 3, instruction: 'Read real destination URL', outcome: 'URL points to: `http://super-scam-downloads.ru/virus.exe`' },
          { stepNumber: 4, instruction: 'Avoid danger', outcome: 'Notice it is an executable `.exe` file from an unknown domain! Close tab safely.' }
        ]
      },
      workedExampleMy: {
        title: 'မသင်္ကာဖွယ် လင့်ခ်ပေါ်တွင် Mouse တင်၍ စစ်ဆေးခြင်း ဥပမာ',
        scenario: '"Minecraft Mod အလကား ဒေါင်းလုဒ်လုပ်ပါ" ဟူသော ခလုတ်တစ်ခုကို တွေ့ရခြင်း။',
        steps: [
          { stepNumber: 1, instruction: 'ချက်ချင်း မနှိပ်ပါနှင့်', outcome: 'ခဏရပ်တန့်ပြီး သတိထားကြည့်ပါ။' },
          { stepNumber: 2, instruction: 'လင့်ခ်ပေါ်သို့ Mouse တင်ကြည့်သည်', outcome: 'မျက်နှာပြင် အောက်ခြေတွင် အမှန်တကယ် သွားမည့် လိပ်စာ ပေါ်လာသည်။' },
          { stepNumber: 3, instruction: 'အမှန်တကယ် သွားမည့် လိပ်စာကို ဖတ်သည်', outcome: 'လိပ်စာမှာ `http://super-scam-downloads.ru/virus.exe` ဖြစ်နေသည်။' },
          { stepNumber: 4, instruction: 'အန္တရာယ်မှ ရှောင်ရှားသည်', outcome: 'မသိသော နေရာမှ `.exe` ဖိုင်ဖြစ်နေသဖြင့် Website ကို ချက်ချင်း ပိတ်ပစ်လိုက်သည်။' }
        ]
      },
      activity: {
        type: 'phishing-detector',
        titleEn: 'Safe Link Inspector',
        titleMy: 'ဘေးကင်းသော Link စစ်ဆေးခြင်း စမ်းသပ်ခန်း',
        instructionsEn: 'Review these 3 web links. Click on the one that is a SAFE, encrypted official link!',
        instructionsMy: 'Link ၃ ခုကို စစ်ဆေးပြီး လုံခြုံစိတ်ချရသော တရားဝင် Link ကို ရွေးချယ်ပါ။',
        initialData: [
          { text: 'http://roblox-free-robux-hack-999.biz/download', isSafe: false },
          { text: 'https://www.wikipedia.org/wiki/Solar_System', isSafe: true },
          { text: 'http://win-iphone-now.xyz/install_malware.exe', isSafe: false }
        ]
      },
      quizQuestions: [
        {
          id: 'q-c5-1',
          questionEn: 'What does the padlock icon 🔒 and "https://" in your browser address bar indicate?',
          questionMy: 'Browser လိပ်စာဘားရှိ သော့ခလောက်ပုံ 🔒 နှင့် "https://" သည် မည်သည့်အရာကို ဖော်ပြသနည်း?',
          options: [
            { id: 'a', textEn: 'The connection between your browser and the website is encrypted and secure', textMy: 'သင့် Browser နှင့် Website ကြား ဆက်သွယ်မှုသည် လျှို့ဝှက်ကုဒ်ဖြင့် လုံခြုံစွာ ချိတ်ဆက်ထားသည်' },
            { id: 'b', textEn: 'The website is closed for lunch', textMy: 'Website သည် နေ့လယ်စာစားရန် ခေတ္တပိတ်ထားသည်' },
            { id: 'c', textEn: 'You must pay $50 to open the webpage', textMy: 'စာမျက်နှာဖွင့်ရန် ဒေါ်လာ ၅၀ ပေးရမည်' },
            { id: 'd', textEn: 'Your computer battery is locked', textMy: 'ကွန်ပျူတာ ဘက်ထရီ သော့ခတ်ခံထားရသည်' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Correct! HTTPS encrypts traffic, preventing eavesdroppers from intercepting your data.',
          explanationMy: 'မှန်ကန်ပါတယ်! HTTPS သည် ဆက်သွယ်မှုများကို လုံခြုံစွာ Encrypt ပြုလုပ်ပေးထားခြင်း ဖြစ်သည်။'
        },
        {
          id: 'q-c5-2',
          questionEn: 'What is a "Trojan Horse" in cybersecurity?',
          questionMy: 'Cybersecurity တွင် "Trojan Horse" ဆိုသည်မှာ အဘယ်နည်း?',
          options: [
            { id: 'a', textEn: 'Malware disguised as something helpful or fun (like a free game or tool)', textMy: 'အသုံးဝင်သော သို့မဟုတ် ပျော်စရာအရာ (ဂိမ်းအလကားရမည်ဟု) ဟန်ဆောင်ထားသော Malware' },
            { id: 'b', textEn: 'A wooden toy you buy at the souvenir shop', textMy: 'အမှတ်တရပစ္စည်းဆိုင်မှ သစ်သားအရုပ်' },
            { id: 'c', textEn: 'A fast computer processor', textMy: 'မြန်ဆန်သော ကွန်ပျူတာ ပရိုဆက်ဆာ' },
            { id: 'd', textEn: 'A high-speed internet cable', textMy: 'အမြန်နှုန်းမြင့် အင်တာနက်ကြိုး' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Spot on! Trojan malware tricks users into installing it by pretending to be legitimate software.',
          explanationMy: 'မှန်ပါတယ်! Trojan သည် ကောင်းမွန်သော ဆော့ဖ်ဝဲလ်အဖြစ် ဟန်ဆောင်၍ သုံးစွဲသူကို လှည့်စား ထည့်သွင်းစေခြင်း ဖြစ်သည်။'
        },
        {
          id: 'q-c5-3',
          questionEn: 'Where is the safest place to download software, apps, and games?',
          questionMy: 'ဆော့ဖ်ဝဲလ်များ၊ App များနှင့် ဂိမ်းများကို Download ပြုလုပ်ရန် အလုံခြုံဆုံး နေရာမှာ အဘယ်နည်း?',
          options: [
            { id: 'a', textEn: 'Official verified app stores (Google Play, Apple App Store, official game websites)', textMy: 'တရားဝင် စစ်ဆေးထားသော App Store များ (Google Play, Apple App Store, တရားဝင် Website များ)' },
            { id: 'b', textEn: 'A random flashing banner ad promising free coins', textMy: 'အလကားရမည်ဟု မှိတ်တုတ်မှိတ်တုတ် ကြော်ငြာနေသော ပေါ်ပလက် ကြော်ငြာများ' },
            { id: 'c', textEn: 'A strange link sent by an unknown player in game chat', textMy: 'ဂိမ်းထဲတွင် သူစိမ်းတစ်ယောက် ပို့ပေးသော မသင်္ကာဖွယ် လင့်ခ်' },
            { id: 'd', textEn: 'Any website ending in `.scam-download.xyz`', textMy: '`.scam-download.xyz` ဖြင့် ဆုံးသော မည်သည့် Website မဆို' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Awesome! Official app stores test and scan applications for security before making them available.',
          explanationMy: 'အရမ်းတော်တယ်! တရားဝင် App Store များသည် ဆော့ဖ်ဝဲလ်များတွင် ဗိုင်းရပ်စ်ပါမပါ ကြိုတင် စစ်ဆေးပေးထားပါသည်။'
        }
      ],
      summaryEn: [
        'Malware damages systems, steals credentials, and spies on activity.',
        'Always check for "https://" and inspect the actual destination domain before clicking.',
        'Download software only from official, trusted, and verified app stores.'
      ],
      summaryMy: [
        'Malware များသည် စက်ပစ္စည်းများကို ပျက်စီးစေပြီး အချက်အလက်များကို ခိုးယူနိုင်သည်။',
        'မနှိပ်မီ "https://" ပါမပါနှင့် အမှန်တကယ် သွားမည့် လိပ်စာကို အမြဲ စစ်ဆေးပါ။',
        'တရားဝင် စစ်ဆေးထားသော App Store များနှင့် ယုံကြည်ရသော နေရာများမှသာ Download လုပ်ပါ။'
      ]
    },

    // -------------------------------------------------------------------------
    // Lesson 6: Two-Factor Authentication
    // -------------------------------------------------------------------------
    {
      id: 'cyber-6',
      lessonNumber: 6,
      titleEn: 'Two-Factor Authentication (2FA)',
      titleMy: 'Two-Factor Authentication (2FA - အကာအကွယ်နှစ်ထပ်စနစ်)',
      shortIntroEn: 'What happens if someone peeks at your password over your shoulder? With 2FA, they still can’t get in! Discover the double-lock shield.',
      shortIntroMy: 'တစ်ယောက်ယောက်က သင့် Password ကို အနောက်ကနေ ချောင်းကြည့်သွားရင်တောင် 2FA ရှိနေရင် အကောင့်ထဲ ဝင်မရပါဘူး! သော့နှစ်ထပ်စနစ် အကြောင်း လေ့လာကြမယ်။',
      learningObjectivesEn: [
        'Understand what Two-Factor Authentication (2FA) is.',
        'Learn the three factors: Something you KNOW, something you HAVE, and something you ARE.',
        'Explain why 2FA stops the vast majority of account takeovers.'
      ],
      learningObjectivesMy: [
        'Two-Factor Authentication (2FA) ဆိုသည်မှာ အဘယ်နည်းကို နားလည်စေရန်။',
        'အချက် ၃ ချက်: မိမိသိသောအရာ (KNOW)၊ မိမိထံရှိသောအရာ (HAVE) နှင့် မိမိ၏ကိုယ်ပိုင်ခန္ဓာ (ARE) တို့ကို ခွဲခြားသိစေရန်။',
        '2FA သည် အကောင့်အဖောက်ခံရမှု အများစုကို မည်သို့ ဟန့်တားပေးသည်ကို နားလည်စေရန်။'
      ],
      explanationEn: [
        'Imagine your house had a front door with two completely different locks: Lock 1 opens with a metal key. Lock 2 requires a secret fingerprint scan. If a burglar somehow finds your metal key on the sidewalk, they STILL cannot get inside because they don’t have your finger!',
        'This is how **Two-Factor Authentication (2FA)** works. Instead of relying only on a password, 2FA requires two separate pieces of evidence before granting access.',
        'Security factors come in 3 categories: 1. **Something You KNOW** (your password or PIN), 2. **Something You HAVE** (your parent’s phone that receives a 6-digit text code), and 3. **Something You ARE** (your face or fingerprint). Even if a scammer steals your password, without the second factor, they are blocked!'
      ],
      explanationMy: [
        'သင့်အိမ်တံခါးမှာ သော့ခလောက် ၂ မျိုး တပ်ထားတယ်ဆိုပါစို့: ပထမသော့ကို သံသော့ဖြင့် ဖွင့်ရပြီး၊ ဒုတိယသော့ကို လက်ဗွေရာဖြင့် ဖွင့်ရပါတယ်။ သူခိုးက လမ်းပေါ်မှာ သင့်သံသော့ကို ကောက်ရသွားရင်တောင် သင့်လက်ဗွေ မရှိတဲ့အတွက် အိမ်ထဲကို လုံးဝ ဝင်မရပါဘူး!',
        'ဒါဟာ **Two-Factor Authentication (2FA - အကာအကွယ်နှစ်ထပ်စနစ်)** ရဲ့ အလုပ်လုပ်ပုံ ဖြစ်ပါတယ်။ Password တစ်ခုတည်းကိုသာ အားမကိုးဘဲ သက်သေအထောက်အထား ၂ ခု ပြသခိုင်းခြင်း ဖြစ်ပါတယ်။',
        'လုံခြုံရေး အချက် (၃) မျိုး ရှိပါသည်: ၁။ **မိမိသိသောအရာ (Something You KNOW)** — Password သို့မဟုတ် PIN နံပါတ်၊ ၂။ **မိမိထံရှိသောအရာ (Something You HAVE)** — ၆ လုံးပါ ကုဒ်ရောက်လာမည့် မိဘ၏ဖုန်း၊ ၃။ **မိမိ၏ခန္ဓာကိုယ် (Something You ARE)** — မျက်နှာ သို့မဟုတ် လက်ဗွေရာ။ Hacker က Password သိသွားရင်တောင် ဒုတိယအချက် မရှိပါက အကောင့်ထဲ ဝင်မရအောင် တားဆီးပေးပါတယ်။'
      ],
      diagram: {
        type: 'two-factor-double-gate',
        captionEn: 'Two Keys to Open: Password (Something you Know) + Phone Code (Something you Have)!',
        captionMy: 'သော့နှစ်ချောင်းဖြင့် ဖွင့်ရသည်: Password (မိမိသိသောအရာ) + ဖုန်းကုဒ် (မိမိထံရှိသောအရာ)!',
        altEn: 'Diagram showing double locked digital gate requiring both password and mobile phone SMS code',
        altMy: 'Password နှင့် ဖုန်းကုဒ် နှစ်မျိုးလုံး လိုအပ်သော ဒစ်ဂျစ်တယ်တံခါးပုံ'
      },
      analogyEn: {
        title: 'The Bank ATM Card and PIN',
        description: 'When your parents withdraw cash at an ATM, they need TWO things: the physical plastic bank card (Something you HAVE) AND the secret 4-digit PIN number (Something you KNOW). If someone drops their card on the street, nobody can use it without the PIN.'
      },
      analogyMy: {
        title: 'ဘဏ် ATM ကတ်နှင့် PIN နံပါတ် ဥပမာ',
        description: 'ATM စက်မှ ငွေထုတ်ရာတွင် အချက် ၂ ချက် လိုအပ်ပါသည်: ပလတ်စတစ် ဘဏ်ကတ်ပြား (မိမိထံရှိသောအရာ) နှင့် လျှို့ဝှက် ၄ လုံးပါ PIN နံပါတ် (မိမိသိသောအရာ) တို့ ဖြစ်သည်။ လမ်းပေါ်တွင် ကတ်ပြား ကျပျောက်သွားသော်လည်း PIN မသိပါက မည်သူမျှ ငွေထုတ်၍ မရနိုင်ပါ။'
      },
      workedExampleEn: {
        title: 'Logging In with 2FA Enabled',
        scenario: 'A student logs into their school cloud portal from a library computer.',
        steps: [
          { stepNumber: 1, instruction: 'Step 1: Enter credentials', outcome: 'Types username and secret passphrase.' },
          { stepNumber: 2, instruction: 'System requests second factor', outcome: 'Screen says: "Enter the 6-digit verification code sent to your parent’s phone."' },
          { stepNumber: 3, instruction: 'Retrieve one-time code', outcome: 'Parent gets SMS: "Code is 482-915 (expires in 2 minutes)".' },
          { stepNumber: 4, instruction: 'Access granted', outcome: 'Student types `482915` and safely opens their homework.' }
        ]
      },
      workedExampleMy: {
        title: '2FA စနစ်ဖြင့် အကောင့်ဖွင့်ခြင်း ဥပမာ',
        scenario: 'စာကြည့်တိုက် ကွန်ပျူတာမှ ကျောင်း Portal ထဲသို့ ဝင်ရောက်ခြင်း။',
        steps: [
          { stepNumber: 1, instruction: 'အဆင့် ၁: အကောင့်နှင့် Password ရိုက်သည်', outcome: 'Username နှင့် Passphrase ကို ရိုက်ထည့်သည်။' },
          { stepNumber: 2, instruction: 'စနစ်က ဒုတိယအဆင့် တောင်းဆိုသည်', outcome: 'ဖန်သားပြင်တွင် "မိဘ၏ဖုန်းသို့ ပို့ထားသော ၆ လုံးပါ ကုဒ်ကို ရိုက်ထည့်ပါ" ဟု ပေါ်လာသည်။' },
          { stepNumber: 3, instruction: 'တစ်ကြိမ်သုံး ကုဒ်ကို ရယူသည်', outcome: 'မိဘဖုန်းတွင် SMS ရောက်လာသည်: "ကုဒ်နံပါတ်မှာ 482-915 ဖြစ်ပါသည်"။' },
          { stepNumber: 4, instruction: 'အကောင့်ထဲသို့ အောင်မြင်စွာ ဝင်ရောက်သည်', outcome: 'ကျောင်းသားက `482915` ကို ရိုက်ထည့်ပြီး အိမ်စာများကို ဘေးကင်းစွာ ဖွင့်လှစ်သည်။' }
        ]
      },
      activity: {
        type: 'classification-sorter',
        titleEn: 'Authentication Factor Matcher',
        titleMy: 'Authentication အချက် ၃ မျိုး တွဲစပ်ခြင်း',
        instructionsEn: 'Categorize each security check into: Something You Know, Something You Have, or Something You Are!',
        instructionsMy: 'လုံခြုံရေး စစ်ဆေးချက်များကို သက်ဆိုင်ရာ အမျိုးအစားအောက်သို့ ခွဲခြားပေးပါ။',
        initialData: [
          { check: 'A 16-character secret password', category: 'know' },
          { check: 'A thumbprint biometric scanner', category: 'are' },
          { check: 'A temporary 6-digit SMS text code sent to a phone', category: 'have' },
          { check: 'Face ID infrared facial scan', category: 'are' }
        ]
      },
      quizQuestions: [
        {
          id: 'q-c6-1',
          questionEn: 'What does "2FA" stand for in cybersecurity?',
          questionMy: 'Cybersecurity တွင် "2FA" ၏ အပြည့်အစုံမှာ အဘယ်နည်း?',
          options: [
            { id: 'a', textEn: 'Two-Factor Authentication', textMy: 'Two-Factor Authentication (အကာအကွယ်နှစ်ထပ်စနစ်)' },
            { id: 'b', textEn: 'Two Fast Airplanes', textMy: 'Two Fast Airplanes' },
            { id: 'c', textEn: 'Two Free Accounts', textMy: 'Two Free Accounts' },
            { id: 'd', textEn: 'Total File Access', textMy: 'Total File Access' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Correct! 2FA stands for Two-Factor Authentication.',
          explanationMy: 'မှန်ကန်ပါတယ်! 2FA ၏ အပြည့်အစုံမှာ Two-Factor Authentication ဖြစ်သည်။'
        },
        {
          id: 'q-c6-2',
          questionEn: 'How does 2FA protect you if a scammer steals your password?',
          questionMy: 'လူလိမ်တစ်ဦးက သင့် Password ကို သိရှိသွားပါက 2FA က သင့်ကို မည်သို့ ကာကွယ်ပေးသနည်း?',
          options: [
            { id: 'a', textEn: 'The scammer is still locked out because they do not have your physical second factor (like your phone)', textMy: 'သင့်ထံရှိသော ဒုတိယအချက် (ဖုန်း သို့မဟုတ် လက်ဗွေ) မရှိသဖြင့် လူလိမ်သည် အကောင့်ထဲသို့ လုံးဝ ဝင်မရပါ' },
            { id: 'b', textEn: 'It sends a siren sound to the police station automatically', textMy: 'ရဲစခန်းသို့ ဥဩသံ အလိုအလျောက် ပေးပို့ပေးသည်' },
            { id: 'c', textEn: 'It buys you a new laptop', textMy: 'သင့်အတွက် လက်ပ်တော့အသစ် ဝယ်ပေးသည်' },
            { id: 'd', textEn: 'It erases the internet completely', textMy: 'အင်တာနက်တစ်ခုလုံးကို ဖျက်ပစ်သည်' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Spot on! Without the second physical factor, the stolen password is completely useless to the attacker.',
          explanationMy: 'မှန်ပါတယ်! ဒုတိယ သော့မရှိပါက ခိုးယူထားသော Password တစ်ခုတည်းဖြင့် အကောင့်ထဲ ဝင်၍ မရနိုင်ပါ။'
        },
        {
          id: 'q-c6-3',
          questionEn: 'Which of the following is an example of "Something You ARE"?',
          questionMy: 'အောက်ပါတို့အနက် မည်သည့်အရာသည် "Something You ARE (မိမိ၏ ကိုယ်ခန္ဓာ)" အချက် ဖြစ်သနည်း?',
          options: [
            { id: 'a', textEn: 'A fingerprint or Face ID biometric scan', textMy: 'လက်ဗွေရာ သို့မဟုတ် မျက်နှာ စကင်ဖတ်စစ်ဆေးမှု' },
            { id: 'b', textEn: 'A 4-digit PIN number you memorized', textMy: 'အလွတ်ကျက်ထားသော ၄ လုံးပါ PIN နံပါတ်' },
            { id: 'c', textEn: 'A USB security key in your pocket', textMy: 'အိတ်ကပ်ထဲရှိ USB လုံခြုံရေးသော့' },
            { id: 'd', textEn: 'A sticky note on your desk', textMy: 'စားပွဲပေါ်က မှတ်စုစက္ကူ' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Awesome! Biometric identifiers like fingerprints and facial scans belong to "Something You Are".',
          explanationMy: 'အရမ်းတော်တယ်! လက်ဗွေရာနှင့် မျက်နှာစကင် စသော ဇီဝဆိုင်ရာ အမှတ်အသားများသည် "Something You ARE" ဖြစ်ကြသည်။'
        }
      ],
      summaryEn: [
        'Two-Factor Authentication requires two separate locks to open an account.',
        'The three factors are: Something you Know, Something you Have, and Something you Are.',
        'Enabling 2FA blocks over 99% of automated credential-stuffing and account hijacking attacks.'
      ],
      summaryMy: [
        '2FA သည် အကောင့်တစ်ခုဖွင့်ရန် သီးခြားသော့ ၂ ခု လိုအပ်သော စနစ်ဖြစ်သည်။',
        'အချက် ၃ မျိုးမှာ: မိမိသိသောအရာ၊ မိမိထံရှိသောအရာနှင့် မိမိ၏ကိုယ်ခန္ဓာတို့ ဖြစ်သည်။',
        '2FA ဖွင့်ထားခြင်းက အကောင့်အဖောက်ခံရနိုင်ခြေ ၉၉% ကျော်ကို ကြိုတင်ကာကွယ်ပေးနိုင်သည်။'
      ]
    },

    // -------------------------------------------------------------------------
    // Lesson 7: Online Scams and Social Engineering
    // -------------------------------------------------------------------------
    {
      id: 'cyber-7',
      lessonNumber: 7,
      titleEn: 'Online Scams and Social Engineering',
      titleMy: 'အွန်လိုင်း လိမ်လည်မှုများနှင့် Social Engineering',
      shortIntroEn: 'Hackers don’t just attack machines; they try to hack human trust! Learn how to outsmart social engineering tricks.',
      shortIntroMy: 'Hacker များသည် စက်ပစ္စည်းများကိုသာ တိုက်ခိုက်သည် မဟုတ်ဘဲ လူသားတို့၏ ယုံကြည်မှုကိုပါ လှည့်စားတိုက်ခိုက်ကြသည်! Social Engineering အကြောင်း လေ့လာကြမယ်။',
      learningObjectivesEn: [
        'Define "Social Engineering" (manipulating people into handing over secrets).',
        'Understand common scam scenarios: Fake game moderators, free currency generators, and friend impersonation.',
        'Develop the critical habit: Always pause and verify out-of-band before trusting.'
      ],
      learningObjectivesMy: [
        '"Social Engineering" (လူသားတို့၏ စိတ်ခံစားမှုကို အသုံးချ၍ လျှို့ဝှက်ချက်များ လှည့်စားရယူခြင်း) ကို နားလည်စေရန်။',
        'အဖြစ်များသော လိမ်လည်မှုများ: ဂိမ်းအက်ဒမင်အတု၊ အခမဲ့ဂိမ်းငွေပေးမည်ဆိုသော ဝဘ်ဆိုဒ်များနှင့် သူငယ်ချင်းအဖြစ် ဟန်ဆောင်မှုများကို သိရှိစေရန်။',
        'အရေးကြီးသော အလေ့အကျင့်: မယုံကြည်မီ ခေတ္တရပ်တန့်ပြီး အခြားနည်းလမ်းဖြင့် အတည်ပြုစစ်ဆေးတတ်စေရန်။'
      ],
      explanationEn: [
        'Did you know that the easiest way to break into a locked computer is often not high-tech code, but simply tricking a human into opening the door? In cybersecurity, this is called **Social Engineering**.',
        'Social engineering is the art of manipulating human emotions — like greed, curiosity, fear, or sympathy — to trick people into giving up sensitive passwords, money, or download permissions.',
        'Common online scams targeting young players include: **Fake Game Admins** ("I am a moderator, give me your password or you get banned!"), **Free Currency Generators** ("Type your username and password here for 10,000 free coins"), and **Hacked Friend Accounts** ("Hey friend, I need help, send me the code you just got on your phone!"). Always verify directly with your friend in real life!'
      ],
      explanationMy: [
        'ကွန်ပျူတာတစ်ခုကို ဖောက်ထွင်းရန် အလွယ်ကူဆုံးနည်းလမ်းမှာ Code ရေးခြင်းထက် လူတစ်ယောက်ကို လှည့်စားခိုင်းစေခြင်းဖြစ်သည်ကို သိပါသလား? ၎င်းကို **Social Engineering** ဟု ခေါ်သည်။',
        'Social Engineering သည် လူသားတို့၏ လောဘ၊ စူးစမ်းလိုစိတ်၊ ကြောက်ရွံ့မှု သို့မဟုတ် သနားစာနာစိတ် စသည့် ခံစားချက်များကို အသုံးချ၍ Password များ၊ ငွေကြေးများကို လှည့်စားတောင်းယူခြင်း ဖြစ်သည်။',
        'ကလေးငယ်များကို ပစ်မှတ်ထားလေ့ရှိသော လိမ်လည်မှုများမှာ: **ဂိမ်း Admin အတုများ** ("ငါ Moderator ဖြစ်တယ်၊ Password မပေးရင် အကောင့်ပိတ်မယ်!"), **အခမဲ့ ဂိမ်းငွေပေးမည်ဆိုသော ဝဘ်ဆိုဒ်များ** ("ဂိမ်းပိုက်ဆံ ရဖို့ Password ရိုက်ထည့်ပါ"), နှင့် **အဖောက်ခံထားရသော သူငယ်ချင်းအကောင့်များ** ("သူငယ်ချင်း၊ ငါ့ကို ကူညီပါဦး၊ သင့်ဖုန်းထဲရောက်လာတဲ့ ကုဒ် ပို့ပေးပါ") စသည်တို့ ဖြစ်ကြသည်။ အပြင်လောကတွင် သူငယ်ချင်းကို အမြဲတမ်း တိုက်ရိုက် မေးမြန်းအတည်ပြုပါ။'
      ],
      diagram: {
        type: 'social-engineering-mask',
        captionEn: 'Behind the friendly mask: Social engineers pretend to be helpers to steal your secrets!',
        captionMy: 'ဖော်ရွေသော မျက်နှာဖုံးနောက်ကွယ်: Social Engineer များသည် အကူအညီပေးသူအဖြစ် ဟန်ဆောင်လေ့ရှိသည်!',
        altEn: 'Illustration of friendly cartoon mask being lifted to reveal a sly fox scammer underneath',
        altMy: 'ဖော်ရွေသော မျက်နှာဖုံးနောက်တွင် လှည့်စားသူ ပုန်းကွယ်နေပုံပြ ပုံ'
      },
      analogyEn: {
        title: 'The Fake Uniform Inspector',
        description: 'Imagine someone wearing a bright neon vest walks up to your house and says: "I’m the Official Toy Inspector! Hand over all your LEGO sets so I can test them." You wouldn’t just hand over your toys to a stranger with a costume! Always check with your parents first.'
      },
      analogyMy: {
        title: 'ကစားစရာ စစ်ဆေးရေးမှူး အတု ဥပမာ',
        description: 'အင်္ကျီတောက်ပတောက်ပ ဝတ်ထားသော သူစိမ်းတစ်ယောက်က "ငါ ကစားစရာ စစ်ဆေးရေးမှူး ဖြစ်တယ်! မင်းရဲ့ LEGO တွေကို စစ်ဆေးဖို့ အကုန်ပေးပါ" ဟု လာပြောပါက သင် ပေးလိုက်မည် မဟုတ်ပါ! အမြဲတမ်း မိဘများနှင့် အရင်တိုင်ပင်သလိုမျိုး အွန်လိုင်းတွင်လည်း အလားတူ သတိထားရပါမည်။'
      },
      workedExampleEn: {
        title: 'Handling a Fake "Free Robux" Generator',
        scenario: 'A YouTube comment links to a shiny website promising unlimited game coins.',
        steps: [
          { stepNumber: 1, instruction: 'Notice suspicious promise', outcome: '"Generate 50,000 Coins Instantly - 100% Free!"' },
          { stepNumber: 2, instruction: 'Website asks for login credentials', outcome: 'The page prompts for account username and password.' },
          { stepNumber: 3, instruction: 'Think critically', outcome: 'Why would a random website give away free currency? Official games never work this way!' },
          { stepNumber: 4, instruction: 'Refuse & report', outcome: 'Close the page immediately. Never enter passwords on third-party sites.' }
        ]
      },
      workedExampleMy: {
        title: 'ဂိမ်းငွေ အလကားပေးမည်ဆိုသော လိမ်လည်မှုကို တုံ့ပြန်ခြင်း ဥပမာ',
        scenario: 'YouTube Comment တွင် ဂိမ်းငွေ အကန့်အသတ်မရှိ ရမည်ဆိုသော ဝဘ်ဆိုဒ်လင့်ခ်တစ်ခု တွေ့ရခြင်း။',
        steps: [
          { stepNumber: 1, instruction: 'မသင်္ကာဖွယ် ကမ်းလှမ်းချက်ကို သတိပြုသည်', outcome: '"ဂိမ်းငွေ ၅၀,၀၀၀ ချက်ချင်း အလကား ရယူပါ!"' },
          { stepNumber: 2, instruction: 'Website က Password တောင်းဆိုသည်', outcome: 'အကောင့်အမည်နှင့် Password ရိုက်ထည့်ရန် ခိုင်းစေလာသည်။' },
          { stepNumber: 3, instruction: 'ဆင်ခြင်တုံတရားဖြင့် စဉ်းစားသည်', outcome: 'မည်သည့်အရာမျှ အလကား မရနိုင်သလို တရားဝင်ဂိမ်းများသည်လည်း ဤသို့ အလုပ်မလုပ်ပါ!' },
          { stepNumber: 4, instruction: 'ငြင်းပယ်ပြီး ပိတ်ပစ်သည်', outcome: 'စာမျက်နှာကို ချက်ချင်းပိတ်ပြီး မည်သည့်အချက်အလက်မျှ မပေးဘဲ ရှောင်ရှားလိုက်သည်။' }
        ]
      },
      activity: {
        type: 'phishing-detector',
        titleEn: 'Scam Busting Detective',
        titleMy: 'အွန်လိုင်း လိမ်လည်မှု ဖော်ထုတ်ခြင်း',
        instructionsEn: 'Review the 3 gaming chat scenarios. Click on the one that is a SOCIAL ENGINEERING SCAM!',
        instructionsMy: 'ဂိမ်း Chat ၃ ခုကို ဖတ်ရှုပြီး SOCIAL ENGINEERING လိမ်လည်မှုကို ရှာဖွေနှိပ်ပါ။',
        initialData: [
          { text: 'Teammate: "Good game! Let’s group up again tomorrow at 4 PM."', isScam: false },
          { text: 'User99: "I am an official Game Admin. Give me your password right now or I will ban your account permanently!"', isScam: true },
          { text: 'Server Message: "Daily login bonus: +10 Energy added to your inventory."', isScam: false }
        ]
      },
      quizQuestions: [
        {
          id: 'q-c7-1',
          questionEn: 'What is "Social Engineering" in the digital world?',
          questionMy: 'ဒစ်ဂျစ်တယ်လောကတွင် "Social Engineering" ဆိုသည်မှာ အဘယ်နည်း?',
          options: [
            { id: 'a', textEn: 'Manipulating human psychology to trick people into giving away confidential data', textMy: 'လူသားတို့၏ စိတ်ခံစားမှုကို အသုံးချ၍ လျှို့ဝှက်အချက်အလက်များ ပေးမိအောင် လှည့်စားခြင်း' },
            { id: 'b', textEn: 'Building wooden treehouses with friends', textMy: 'သူငယ်ချင်းများနှင့်အတူ သစ်ပင်ပေါ် အိမ်ဆောက်ခြင်း' },
            { id: 'c', textEn: 'Fixing physical bicycle chains', textMy: 'စက်ဘီးကြိုး ပြုပြင်ခြင်း' },
            { id: 'd', textEn: 'Studying animal behavior in the wild', textMy: 'တောရိုင်းတိရစ္ဆာန်များ၏ အပြုအမူကို လေ့လာခြင်း' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Correct! Social engineering targets human psychology rather than software bugs.',
          explanationMy: 'မှန်ကန်ပါတယ်! Social Engineering သည် ကွန်ပျူတာထက် လူသားတို့၏ စိတ်ကို လှည့်စားတိုက်ခိုက်ခြင်း ဖြစ်သည်။'
        },
        {
          id: 'q-c7-2',
          questionEn: 'Do "Free Currency Generator" websites actually give you free game coins?',
          questionMy: '"အခမဲ့ ဂိမ်းငွေ ထုတ်ပေးသည့် ဝဘ်ဆိုဒ်များ" သည် တကယ်ပဲ ဂိမ်းငွေများကို အလကား ပေးပါသလား?',
          options: [
            { id: 'a', textEn: 'No! They are dangerous scams designed to steal your account credentials and passwords', textMy: 'မပေးပါ! ၎င်းတို့သည် သင့်အကောင့်နှင့် Password များကို ခိုးယူရန် ရည်ရွယ်ထားသော လိမ်လည်မှုများ ဖြစ်သည်' },
            { id: 'b', textEn: 'Yes, they have trillions of coins to give away to everyone', textMy: 'ပေးပါသည်၊ လူတိုင်းကို ပေးဝေရန် ဒင်္ဂါးသန်းပေါင်းများစွာ ရှိသည်' },
            { id: 'c', textEn: 'Yes, if you enter your password 5 times', textMy: 'Password ကို ၅ ကြိမ် ရိုက်ထည့်ပါက တကယ်ရသည်' },
            { id: 'd', textEn: 'Only on New Year’s Day', textMy: 'နှစ်သစ်ကူးနေ့တွင်သာ ပေးသည်' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Spot on! There is no such thing as free game currency generators. They are account-stealing traps.',
          explanationMy: 'မှန်ပါတယ်! အခမဲ့ ဂိမ်းငွေပေးသော ဝဘ်ဆိုဒ်ဟူ၍ မရှိဘဲ အကောင့်ခိုးယူသော ထောင်ချောက်များသာ ဖြစ်ကြသည်။'
        },
        {
          id: 'q-c7-3',
          questionEn: 'If someone claiming to be a "Game Moderator" demands your password in chat, what should you do?',
          questionMy: '"ဂိမ်းအက်ဒမင်" ဟု ဟန်ဆောင်ပြီး Chat ထဲတွင် Password တောင်းလာပါက မည်သို့ လုပ်ဆောင်သင့်သနည်း?',
          options: [
            { id: 'a', textEn: 'Never give your password, report the player using the in-game report button, and tell an adult', textMy: 'ဘယ်တော့မှ မပေးပါနှင့်၊ ဂိမ်းထဲရှိ Report ခလုတ်ဖြင့် တိုင်ကြားပြီး မိဘလူကြီးများကို ပြောပြပါ' },
            { id: 'b', textEn: 'Give them your password immediately so you don’t get banned', textMy: 'အကောင့်အပိတ်မခံရစေရန် Password ကို ချက်ချင်း ပေးလိုက်ပါ' },
            { id: 'c', textEn: 'Ask them to give you their password first', textMy: 'သူ့ Password ကို အရင်ပေးရန် ပြန်တောင်းပါ' },
            { id: 'd', textEn: 'Send them your credit card number instead', textMy: 'ကတ်နံပါတ်ကို အစားထိုး ပေးပို့လိုက်ပါ' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Awesome! Real game moderators will NEVER ask for your password in a chat.',
          explanationMy: 'အရမ်းတော်တယ်! တကယ့် ဂိမ်း Moderator အစစ်များသည် Chat ထဲတွင် Password ဘယ်တော့မှ မတောင်းပါ။'
        }
      ],
      summaryEn: [
        'Social engineering manipulates human trust, urgency, greed, or fear to steal data.',
        'Beware of fake moderators, free currency generators, and friend impersonators.',
        'Real staff members will never ask for your password under any circumstances.'
      ],
      summaryMy: [
        'Social Engineering သည် လူသားတို့၏ ယုံကြည်မှုနှင့် လောဘကို အသုံးချ၍ အချက်အလက် ခိုးယူခြင်း ဖြစ်သည်။',
        'ဂိမ်း Admin အတုများနှင့် အခမဲ့ ဂိမ်းငွေပေးမည်ဆိုသော လိမ်လည်မှုများကို သတိထားပါ။',
        'တရားဝင် ဝန်ထမ်းများသည် မည်သည့်အခါတွင်မျှ Password မတောင်းဆိုပါ။'
      ]
    },

    // -------------------------------------------------------------------------
    // Lesson 8: Device Updates and Security
    // -------------------------------------------------------------------------
    {
      id: 'cyber-8',
      lessonNumber: 8,
      titleEn: 'Device Updates and Security',
      titleMy: 'စက်ပစ္စည်းများ Update ပြုလုပ်ခြင်းနှင့် လုံခြုံရေး',
      shortIntroEn: 'Why does your tablet constantly ask to restart for updates? It’s patching secret armor holes! Learn why updates keep you safe.',
      shortIntroMy: 'ဖုန်းနဲ့ Tablet တွေက Update လုပ်ဖို့ ဘာကြောင့် ခဏခဏ တောင်းဆိုနေရသလဲ? ချို့ယွင်းချက် သံချပ်ကာ အပေါက်တွေကို ဖာထေးပေးနေတာပါ! လေ့လာကြမယ်။',
      learningObjectivesEn: [
        'Understand what software updates and security patches do.',
        'Learn what a "Vulnerability" or security hole is.',
        'Develop the healthy habit of updating devices promptly rather than ignoring alerts.'
      ],
      learningObjectivesMy: [
        'Software Updates နှင့် Security Patches များ၏ အလုပ်လုပ်ပုံကို နားလည်စေရန်။',
        '"Vulnerability" (လုံခြုံရေး အားနည်းချက် သို့မဟုတ် အပေါက်) ဆိုသည်မှာ အဘယ်နည်းကို သိရှိစေရန်။',
        'Update သတိပေးချက်များကို လျစ်လျူမရှုဘဲ အချိန်မီ ပြုလုပ်ပေးသည့် အလေ့အကျင့်ကောင်း မွေးမြူနိုင်စေရန်။'
      ],
      explanationEn: [
        'When software engineers build complex operating systems (like Android, iOS, or Windows), millions of lines of code are written. Sometimes, a tiny mistake or hidden loophole slips through. In cybersecurity, this is called a **Vulnerability**.',
        'When bad actors discover a vulnerability, they try to sneak through it to infect devices. But ethical engineers work around the clock to find these flaws and write a repair bandage called a **Security Patch**.',
        'When your phone pops up a message saying: *"System Update Available"*, that update contains digital shields that patch known security holes. Ignoring updates leaves your digital windows unlocked! Always install updates promptly with your parents.'
      ],
      explanationMy: [
        'အင်ဂျင်နီယာများက Android, iOS သို့မဟုတ် Windows ကဲ့သို့သော စနစ်ကြီးများကို ရေးသားရာတွင် Code စာကြောင်း သန်းပေါင်းများစွာ ပါဝင်ပါသည်။ ထို့ကြောင့် တစ်ခါတစ်ရံ မထင်မှတ်သော အားနည်းချက် အပေါက်လေးများ ပါသွားတတ်သည်။ ၎င်းကို **Vulnerability (လုံခြုံရေး အားနည်းချက်)** ဟု ခေါ်သည်။',
        'မသမာသူ Hacker များက ဤအားနည်းချက်ကို တွေ့ရှိပါက စက်ထဲသို့ ခိုးဝင်ရန် ကြိုးစားကြသည်။ သို့သော် လုံခြုံရေး အင်ဂျင်နီယာများကလည်း အဆိုပါ အပေါက်များကို ပိတ်ဆို့ပေးမည့် ဖာထေးချက် **Security Patch** များကို အချိန်နှင့်တစ်ပြေးညီ ရေးသားထုတ်လုပ်ပေးကြသည်။',
        'ဖုန်းတွင် *"System Update ရရှိနိုင်ပါပြီ"* ဟု ပေါ်လာပါက ၎င်းသည် အားနည်းချက် အပေါက်များကို လာရောက် ဖာထေးပေးသော ဒိုင်းကာများ ဖြစ်သည်။ Update မလုပ်ဘဲ ထားခြင်းသည် အိမ်ပြတင်းပေါက်ကို ဖွင့်ထားသကဲ့သို့ အန္တရာယ်ရှိသဖြင့် မိဘများနှင့်အတူ အမြဲတမ်း အချိန်မီ Update ပြုလုပ်ပေးရပါမည်။'
      ],
      diagram: {
        type: 'patch-armor-shield',
        captionEn: 'Security Patches mend cracks in your digital armor before invaders can find them!',
        captionMy: 'Security Patches များသည် သံချပ်ကာအင်္ကျီရှိ အက်ကွဲရာများကို ရန်သူမတွေ့မီ အမြန်ဖာထေးပေးသည်!',
        altEn: 'Illustration of metal armor being repaired with glowing digital patch plate',
        altMy: 'သံချပ်ကာအင်္ကျီကို ဒစ်ဂျစ်တယ် အပြားဖြင့် ဖာထေးပြုပြင်နေပုံပြ ပုံ'
      },
      analogyEn: {
        title: 'Patching a Puncture in a Bicycle Tire',
        description: 'If your bicycle tire runs over a small thorn and starts leaking air, you don’t ignore it and keep riding until the tire is flat! You put on a rubber patch so the tire stays strong and safe for the road. A software update is a patch for your device.'
      },
      analogyMy: {
        title: 'စက်ဘီးဘီး ပေါက်ဖာခြင်း ဥပမာ',
        description: 'စက်ဘီးဘီး ဆူးစူး၍ လေစိမ့်နေပါက လျစ်လျူရှုမထားဘဲ ရာဘာပြားဖြင့် ဖာထေးလိုက်မှသာ ဘေးကင်းစွာ ဆက်လက် စီးနင်းနိုင်သလိုပါပဲ။ Software Update ဆိုတာလည်း သင့်စက်ပစ္စည်းရဲ့ လေလုံအောင် ဖာထေးပေးတဲ့ အကာအကွယ် ဖြစ်ပါတယ်။'
      },
      workedExampleEn: {
        title: 'Updating an Operating System Safely',
        scenario: 'A family tablet shows a notification: "Security Update 15.2 Ready to Install".',
        steps: [
          { stepNumber: 1, instruction: 'Notice system alert', outcome: 'Notification states: "Fixes critical security vulnerabilities in browser engine."' },
          { stepNumber: 2, instruction: 'Prepare the device', outcome: 'Plug tablet into power charger and connect to home Wi-Fi.' },
          { stepNumber: 3, instruction: 'Execute update with adult', outcome: 'Press "Restart and Update Now".' },
          { stepNumber: 4, instruction: 'Fortified protection', outcome: 'Device restarts with fresh security patches in place. Safe to explore!' }
        ]
      },
      workedExampleMy: {
        title: 'စက်ပစ္စည်းကို ဘေးကင်းစွာ Update ပြုလုပ်ခြင်း ဥပမာ',
        scenario: 'မိသားစုသုံး Tablet တွင် "လုံခြုံရေး Update 15.2 ထည့်သွင်းရန် အဆင်သင့်ဖြစ်ပါပြီ" ဟု ပေါ်လာခြင်း။',
        steps: [
          { stepNumber: 1, instruction: 'သတိပေးချက်ကို ဖတ်ရှုသည်', outcome: '"Browser အတွင်းရှိ အရေးကြီးသော လုံခြုံရေး အားနည်းချက်များကို ပြုပြင်ထားသည်"' },
          { stepNumber: 2, instruction: 'စက်ကို ကြိုတင်ပြင်ဆင်သည်', outcome: 'အားသွင်းကြိုး ထိုးထားပြီး အိမ်သုံး Wi-Fi နှင့် ချိတ်ဆက်သည်။' },
          { stepNumber: 3, instruction: 'မိဘနှင့်အတူ Update စတင်သည်', outcome: '"စက်ကို Restart ချပြီး Update ပြုလုပ်ပါ" ကို နှိပ်သည်။' },
          { stepNumber: 4, instruction: 'လုံခြုံစိတ်ချစွာ အသုံးပြုနိုင်သည်', outcome: 'စက်ပြန်ပွင့်လာပြီး လုံခြုံရေး အကာအကွယ်အသစ်များ အပြည့်အစုံ ပါဝင်သွားသည်။' }
        ]
      },
      activity: {
        type: 'classification-sorter',
        titleEn: 'Update Action Matcher',
        titleMy: 'Update ပြုလုပ်မှု အလေ့အကျင့်များ စစ်ဆေးခြင်း',
        instructionsEn: 'Categorize these behaviors as either "Cyber Safe Practice" or "Risky Habit"!',
        instructionsMy: 'အောက်ပါအလေ့အကျင့်များကို "လုံခြုံစိတ်ချရသော အလေ့အကျင့်" သို့မဟုတ် "အန္တရာယ်ရှိသော အလေ့အကျင့်" အဖြစ် ခွဲခြားပါ။',
        initialData: [
          { action: 'Clicking "Remind me in 30 days" on critical security updates forever', isSafe: false },
          { action: 'Installing official updates when connected to home Wi-Fi and charger', isSafe: true },
          { action: 'Keeping automatic updates turned ON for operating systems and apps', isSafe: true },
          { action: 'Using a tablet that has not been updated in 6 years', isSafe: false }
        ]
      },
      quizQuestions: [
        {
          id: 'q-c8-1',
          questionEn: 'What is a "Vulnerability" in computer software?',
          questionMy: 'Software တွင် "Vulnerability" ဆိုသည်မှာ အဘယ်နည်း?',
          options: [
            { id: 'a', textEn: 'A security flaw, bug, or loophole in code that attackers could exploit', textMy: 'တိုက်ခိုက်သူများ အခွင့်ကောင်းယူနိုင်သော Code ထဲရှိ လုံခြုံရေး အားနည်းချက် သို့မဟုတ် အပေါက်' },
            { id: 'b', textEn: 'A sticker placed on the laptop screen', textMy: 'မျက်နှာပြင်ပေါ် ကပ်ထားသော စတစ်ကာ' },
            { id: 'c', textEn: 'A very loud ringtone', textMy: 'ကျယ်လောင်သော ဖုန်းမြည်သံ' },
            { id: 'd', textEn: 'The brand name of the battery', textMy: 'ဘက်ထရီ၏ တံဆိပ်အမည်' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Correct! Vulnerabilities are coding weaknesses that security patches resolve.',
          explanationMy: 'မှန်ကန်ပါတယ်! Vulnerabilities ဆိုသည်မှာ Code အတွင်းရှိ လုံခြုံရေး အားနည်းချက် ချို့ယွင်းချက်များ ဖြစ်သည်။'
        },
        {
          id: 'q-c8-2',
          questionEn: 'Why do operating systems regularly release software updates?',
          questionMy: 'စနစ်များသည် Software Updates များကို အဘယ်ကြောင့် မကြာခဏ ထုတ်ပေးနေရသနည်း?',
          options: [
            { id: 'a', textEn: 'To patch discovered security holes, fix bugs, and introduce better protections', textMy: 'တွေ့ရှိထားသော လုံခြုံရေးအပေါက်များကို ဖာထေးရန်၊ Bug များပြင်ရန်နှင့် ပိုမိုကောင်းမွန်သော အကာအကွယ်များ ပေးရန်' },
            { id: 'b', textEn: 'To change your wallpaper to neon green', textMy: 'နောက်ခံပုံကို အစိမ်းရောင် ပြောင်းပစ်ရန်' },
            { id: 'c', textEn: 'To delete your saved homework assignments', textMy: 'သိမ်းထားသော အိမ်စာများကို ဖျက်ပစ်ရန်' },
            { id: 'd', textEn: 'To make your screen turn upside down', textMy: 'မျက်နှာပြင်ကို ဇောက်ထိုးဖြစ်စေရန်' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Spot on! Updates continuously fortify your digital shields against newly discovered threats.',
          explanationMy: 'မှန်ပါတယ်! Update များသည် အသစ်ပေါ်ပေါက်လာသော အန္တရာယ်များမှ ကာကွယ်ရန် ဒစ်ဂျစ်တယ်ဒိုင်းကို အမြဲ အဆင့်မြှင့်တင်ပေးခြင်း ဖြစ်သည်။'
        },
        {
          id: 'q-c8-3',
          questionEn: 'What is the risk of ignoring system updates for months or years?',
          questionMy: 'System Updates များကို လပေါင်းများစွာ သို့မဟုတ် နှစ်ပေါင်းများစွာ လျစ်လျူရှုထားပါက မည်သည့်အန္တရာယ် ရှိသနည်း?',
          options: [
            { id: 'a', textEn: 'Your device remains vulnerable to known malware that hackers can easily exploit', textMy: 'Hacker များ အလွယ်တကူ အသုံးချနိုင်သော အားနည်းချက်များ ရှိနေဆဲဖြစ်ပြီး အဖောက်ခံရနိုင်ခြေ များသည်' },
            { id: 'b', textEn: 'The tablet turns into a piece of wood', textMy: 'Tablet သည် သစ်သားတုံး ဖြစ်သွားမည်' },
            { id: 'c', textEn: 'The computer starts speaking French', textMy: 'ကွန်ပျူတာက ပြင်သစ်စကား စပြောမည်' },
            { id: 'd', textEn: 'There is zero risk; updates do nothing', textMy: 'ဘာအန္တရာယ်မှ မရှိပါ' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Awesome! Outdated software is one of the most common targets for automated cyberattacks.',
          explanationMy: 'အရမ်းတော်တယ်! ခေတ်မမီတော့သော ဆော့ဖ်ဝဲလ်များသည် အဖောက်ခံရဆုံး ပစ်မှတ်များ ဖြစ်ကြသည်။'
        }
      ],
      summaryEn: [
        'Software vulnerabilities are unintentional coding flaws that attackers look for.',
        'Security patches repair these weaknesses and shield your device.',
        'Keep automatic updates enabled and install system updates promptly.'
      ],
      summaryMy: [
        'Software Vulnerabilities သည် မရည်ရွယ်ဘဲ ပါသွားသော လုံခြုံရေး အားနည်းချက်များ ဖြစ်သည်။',
        'Security Patches များက အဆိုပါ အားနည်းချက်များကို ဖာထေး၍ စက်ကို ကာကွယ်ပေးသည်။',
        'Automatic Updates ကို အမြဲဖွင့်ထားပြီး သတိပေးချက် ပေါ်လာပါက အချိန်မီ ထည့်သွင်းပါ။'
      ]
    },

    // -------------------------------------------------------------------------
    // Lesson 9: Digital Footprints and Online Reputation
    // -------------------------------------------------------------------------
    {
      id: 'cyber-9',
      lessonNumber: 9,
      titleEn: 'Digital Footprints and Online Reputation',
      titleMy: 'ဒစ်ဂျစ်တယ် ခြေရာများနှင့် အွန်လိုင်း ဂုဏ်သတင်း',
      shortIntroEn: 'Whatever you post online can stay forever like footprints in wet cement! Learn how to build a proud, positive digital footprint.',
      shortIntroMy: 'အွန်လိုင်းမှာ တင်လိုက်တဲ့ အရာမှန်သမျှဟာ ဘိလပ်မြေအစိုပေါ်က ခြေရာတွေလို အမြဲ ကျန်နေတတ်ပါတယ်! ဂုဏ်ယူစရာ ဒစ်ဂျစ်တယ် ခြေရာကောင်းများ ချန်ထားနည်းကို လေ့လာကြမယ်။',
      learningObjectivesEn: [
        'Understand what a "Digital Footprint" is (the trail of data you leave behind).',
        'Learn the difference between active footprints (posts, comments) and passive footprints (browsing history).',
        'Apply the "Billboard Test" before posting anything online.'
      ],
      learningObjectivesMy: [
        '"Digital Footprint" (အင်တာနက်ပေါ်တွင် မိမိ ချန်ရစ်ခဲ့သော အချက်အလက် ခြေရာများ) ဆိုသည်မှာ အဘယ်နည်းကို နားလည်စေရန်။',
        'တမင်ချန်ခဲ့သော ခြေရာများ (Post တင်ခြင်း၊ Comment ရေးခြင်း) နှင့် အလိုအလျောက် ကျန်ခဲ့သော ခြေရာများ (Browsing History) တို့ကို သိရှိစေရန်။',
        'အင်တာနက်ပေါ် မတင်မီ "ဆိုင်းဘုတ်ကြီးပေါ် တင်ပြနိုင်သလား (Billboard Test)" စည်းမျဉ်းကို အသုံးချနိုင်စေရန်။'
      ],
      explanationEn: [
        'When you walk along a wet sandy beach, your feet leave clear footprints in the sand. But when the ocean tide rolls in, the waves wash those footprints away.',
        'The internet does NOT work like a sandy beach. The internet is like **wet cement**! Every photo you post, comment you leave, game you play, and video you like leaves a trail called your **Digital Footprint**.',
        'Even if you hit the "Delete" button later, someone may have already taken a screenshot or saved the image. Once something is online, it can live on forever. That’s why thoughtful digital citizens use the **Billboard Test**: "Would I be proud to see this post printed on a giant billboard outside my school for my parents, teachers, and future boss to see?" If not, don’t post it!'
      ],
      explanationMy: [
        'သဲသောင်ပြင်ပေါ် လမ်းလျှောက်ပါက ခြေရာများ ကျန်ခဲ့သော်လည်း ပင်လယ်လှိုင်းလုံးများက အဆိုပါ ခြေရာများကို ပြန်လည် ဆေးကြောပစ်လိုက်နိုင်သည်။',
        'သို့သော် အင်တာနက်သည် သဲသောင်ပြင်နှင့် မတူဘဲ **ဘိလပ်မြေအစို** နှင့် တူပါသည်! သင်တင်လိုက်သော ဓာတ်ပုံ၊ ရေးလိုက်သော Comment၊ ဆော့လိုက်သော ဂိမ်းတိုင်းသည် သင့်နောက်တွင် **Digital Footprint (ဒစ်ဂျစ်တယ် ခြေရာ)** အဖြစ် ကျန်ရစ်ခဲ့သည်။',
        'နောက်မှ "Delete" ခလုတ် နှိပ်ဖျက်လိုက်ရင်တောင် တစ်ယောက်ယောက်က Screenshot ရိုက်ထားပြီး ဖြစ်နိုင်ပါသည်။ ထို့ကြောင့် တာဝန်သိ ဒစ်ဂျစ်တယ် နိုင်ငံသားများသည် **Billboard Test (ဆိုင်းဘုတ်ကြီး စမ်းသပ်ချက်)** ကို သုံးကြသည်: "ဒီစာ သို့မဟုတ် ပုံကို ကျောင်းရှေ့က ဆိုင်းဘုတ်ကြီးပေါ်မှာ မိဘ၊ ဆရာသမားတွေ အားလုံး မြင်အောင် တင်ပြဖို့ ဂုဏ်ယူနိုင်ပါ့မလား?" အကယ်၍ မဂုဏ်ယူနိုင်ပါက လုံးဝ မတင်ပါနှင့်!'
      ],
      diagram: {
        type: 'digital-footprint-trail',
        captionEn: 'Every like, photo, and comment adds to your lifelong digital footprint. Make it positive!',
        captionMy: 'Like လုပ်ခြင်း၊ ဓာတ်ပုံနှင့် Comment တိုင်းသည် သင့် ဒစ်ဂျစ်တယ် ခြေရာများ ဖြစ်လာသည်။ ကောင်းမွန်သောအရာများကိုသာ ချန်ထားပါ!',
        altEn: 'Trail of glowing digital footprints containing icons for likes, comments, photos, and game achievements',
        altMy: 'အွန်လိုင်းလုပ်ဆောင်ချက်များက ဒစ်ဂျစ်တယ် ခြေရာများအဖြစ် စုစည်းနေပုံပြ ပုံ'
      },
      analogyEn: {
        title: 'Permanent Marker on a Whiteboard',
        description: 'Writing with a dry-erase marker is easy to wipe away with an eraser. But writing online is like using a thick black permanent Sharpie marker! It’s extremely difficult or impossible to erase completely, so write with great kindness and wisdom.'
      },
      analogyMy: {
        title: 'ဖျက်မရသော မင်ဖောင်တိန် ဥပမာ',
        description: 'ကျောက်သင်ပုန်းပေါ် ရေးပါက ဖျက်ရလွယ်သော်လည်း အင်တာနက်ပေါ်တွင် ရေးခြင်းသည် ဖျက်မရသော အမြဲတမ်း မင်နက်ဖောင်တိန်နှင့် ရေးသလိုပါပဲ! လုံးဝ ပြန်ဖျက်ရန် အလွန်ခက်ခဲသဖြင့် ကြင်နာမှုနှင့် အသိပညာဖြင့်သာ ရေးသားသင့်ပါသည်။'
      },
      workedExampleEn: {
        title: 'Applying the Billboard Test to a Comment',
        scenario: 'A student gets frustrated in a multiplayer game and wants to type an angry message.',
        steps: [
          { stepNumber: 1, instruction: 'Drafting in anger', outcome: 'Types: "You are the worst player ever, delete your game!"' },
          { stepNumber: 2, instruction: 'Pause before hitting Send', outcome: 'Takes 3 deep breaths and applies the Billboard Test.' },
          { stepNumber: 3, instruction: 'Evaluate reputation impact', outcome: 'Would I want my grandma or principal to see me speaking so meanly? Absolutely not!' },
          { stepNumber: 4, instruction: 'Positive footprint choice', outcome: 'Backspaces the angry words and types: "Good try! We’ll get the win next round! 🚀"' }
        ]
      },
      workedExampleMy: {
        title: 'Comment တစ်ခုတွင် Billboard စည်းမျဉ်းကို အသုံးချခြင်း ဥပမာ',
        scenario: 'ဂိမ်းထဲတွင် စိတ်တိုဒေါသထွက်ပြီး စကားဆိုးတစ်ခု ရေးသားချင်လာခြင်း။',
        steps: [
          { stepNumber: 1, instruction: 'ဒေါသဖြင့် စာရိုက်မိသည်', outcome: '"မင်းက အသုံးမကျဆုံး ကစားသမားပဲ၊ ဂိမ်းကို ဖျက်ပစ်လိုက်!"' },
          { stepNumber: 2, instruction: 'Send မနှိပ်မီ ခဏရပ်တန့်သည်', outcome: 'အသက်ပြင်းပြင်း ၃ ကြိမ်ရှူပြီး Billboard စည်းမျဉ်းကို စဉ်းစားသည်။' },
          { stepNumber: 3, instruction: 'ဂုဏ်သိက္ခာကို အကဲဖြတ်သည်', outcome: 'ဤစကားကို အဘွား သို့မဟုတ် ကျောင်းအုပ်ဆရာကြီး မြင်စေချင်ပါသလား? လုံးဝ မမြင်စေချင်ပါ!' },
          { stepNumber: 4, instruction: 'ကောင်းသော ခြေရာကို ရွေးချယ်သည်', outcome: 'ဒေါသစကားများကို ဖျက်ပစ်ပြီး "ကောင်းကောင်း ကြိုးစားခဲ့တယ်! နောက်ပွဲမှာ နိုင်အောင် ကစားကြမယ်! 🚀" ဟု အားပေးစကား ရေးလိုက်သည်။' }
        ]
      },
      activity: {
        type: 'classification-sorter',
        titleEn: 'Digital Footprint Builder',
        titleMy: 'ဒစ်ဂျစ်တယ် ခြေရာကောင်း တည်ဆောက်ခြင်း',
        instructionsEn: 'Sort these digital actions into: Positive Footprint (Proud!) or Negative Footprint (Regret!)',
        instructionsMy: 'အောက်ပါလုပ်ဆောင်ချက်များကို "အပြုသဘောဆောင်သော ခြေရာကောင်း" သို့မဟုတ် "အပျက်သဘောဆောင်သော ခြေရာဆိုး" အဖြစ် ခွဲခြားပါ။',
        initialData: [
          { action: 'Posting a photo of your science fair robot project', isPositive: true },
          { action: 'Leaving mean, teasing comments on a classmate’s video', isPositive: false },
          { action: 'Sharing a kind message congratulating a school friend', isPositive: true },
          { action: 'Posting an embarrassing photo of someone without their permission', isPositive: false }
        ]
      },
      quizQuestions: [
        {
          id: 'q-c9-1',
          questionEn: 'What is a "Digital Footprint"?',
          questionMy: '"Digital Footprint (ဒစ်ဂျစ်တယ် ခြေရာ)" ဆိုသည်မှာ အဘယ်နည်း?',
          options: [
            { id: 'a', textEn: 'The trail of all the information, posts, photos, and records you leave behind online', textMy: 'အင်တာနက်ပေါ်တွင် သင်ချန်ရစ်ခဲ့သော အချက်အလက်များ၊ ပို့စ်များ၊ ဓာတ်ပုံများနှင့် မှတ်တမ်းများ' },
            { id: 'b', textEn: 'The size of your athletic running shoes', textMy: 'မိမိ အပြေးဖိနပ်၏ အရွယ်အစား' },
            { id: 'c', textEn: 'The brand of the computer mouse pad', textMy: 'Mouse pad ၏ တံဆိပ်အမည်' },
            { id: 'd', textEn: 'A photo of a barefoot astronaut on Mars', textMy: 'အင်္ဂါဂြိုဟ်ပေါ်က ခြေဗလာ အာကာသယာဉ်မှူးပုံ' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Correct! Everything you do online contributes to your digital footprint.',
          explanationMy: 'မှန်ကန်ပါတယ်! အင်တာနက်ပေါ်ရှိ သင်၏ လုပ်ဆောင်ချက် မှတ်တမ်းအားလုံးကို Digital Footprint ဟု ခေါ်ပါသည်။'
        },
        {
          id: 'q-c9-2',
          questionEn: 'What is the "Billboard Test" in internet safety?',
          questionMy: 'အင်တာနက် လုံခြုံရေးတွင် "Billboard Test" ဆိုသည်မှာ အဘယ်နည်း?',
          options: [
            { id: 'a', textEn: 'Asking yourself: Would I be proud if this post was displayed on a giant public billboard?', textMy: '"ဒီပို့စ်ကို အများပြည်သူမြင်ကွင်း ဆိုင်းဘုတ်ကြီးပေါ် တင်ထားပါက ငါဂုဏ်ယူနိုင်ပါ့မလား?" ဟု ကိုယ့်ကိုယ်ကို မေးမြန်းခြင်း' },
            { id: 'b', textEn: 'Measuring how tall highway signs are with a measuring tape', textMy: 'အဝေးပြေးလမ်း ဆိုင်းဘုတ်ကြီးများကို ပေတံဖြင့် တိုင်းတာခြင်း' },
            { id: 'c', textEn: 'Painting advertisements with oil paint', textMy: 'ဆီဆေးဖြင့် ကြော်ငြာဆိုင်းဘုတ် ဆွဲခြင်း' },
            { id: 'd', textEn: 'Singing songs on the street', textMy: 'လမ်းပေါ်တွင် သီချင်းဆိုခြင်း' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Spot on! If you wouldn’t want the whole world to see it, keep it off the internet.',
          explanationMy: 'မှန်ပါတယ်! လူအားလုံး မြင်တွေ့ရန် မသင့်တော်ပါက အင်တာနက်ပေါ်တွင် လုံးဝ မတင်သင့်ပါ။'
        },
        {
          id: 'q-c9-3',
          questionEn: 'Why can deleting an embarrassing post later still leave a permanent trace?',
          questionMy: 'ရှက်စရာ ပို့စ်တစ်ခုကို နောက်မှ ပြန်ဖျက်လိုက်သော်လည်း အဘယ်ကြောင့် အပြီးတိုင် မပျောက်နိုင်သနည်း?',
          options: [
            { id: 'a', textEn: 'Someone may have already taken a screenshot, downloaded it, or servers kept a backup archive', textMy: 'တစ်စုံတစ်ယောက်က Screenshot ရိုက်ထားပြီးဖြစ်နိုင်သလို Server များတွင်လည်း သိမ်းဆည်းထားနိုင်သောကြောင့်' },
            { id: 'b', textEn: 'Because computers write with invisible ink', textMy: 'ကွန်ပျူတာက မမြင်ရသော မင်ဖြင့် ရေးသောကြောင့်' },
            { id: 'c', textEn: 'Because phone screens remember images forever', textMy: 'ဖုန်းမျက်နှာပြင်က ပုံများကို အမြဲမှတ်မိနေသောကြောင့်' },
            { id: 'd', textEn: 'It always vanishes with 100% guarantee', textMy: '၁၀၀% အမြဲတမ်း လုံးဝ ပျောက်ကွယ်သွားပါသည်' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Awesome! Digital content can be captured in milliseconds and reshared endlessly.',
          explanationMy: 'အရမ်းတော်တယ်! ဒစ်ဂျစ်တယ် အကြောင်းအရာများကို စက္ကန့်ပိုင်းအတွင်း မှတ်တမ်းတင် သိမ်းဆည်းနိုင်သဖြင့် ပြန်ဖျက်ရန် အလွန်ခက်ခဲပါသည်။'
        }
      ],
      summaryEn: [
        'Your digital footprint is permanent and represents your online reputation.',
        'Use the Billboard Test: Never post anything you wouldn’t want teachers and family to see.',
        'Build a positive, inspiring footprint by showing kindness, curiosity, and creativity.'
      ],
      summaryMy: [
        'ဒစ်ဂျစ်တယ် ခြေရာများသည် ကြာရှည်ကျန်ရစ်ပြီး သင့်အွန်လိုင်း ဂုဏ်သတင်းကို ဖော်ပြသည်။',
        'Billboard Test ကို သုံးပါ: မိဘ၊ ဆရာများ မမြင်စေချင်သော အရာများကို ဘယ်တော့မှ မတင်ပါနှင့်။',
        'ကြင်နာမှု၊ စူးစမ်းလိုစိတ်နှင့် တီထွင်ဖန်တီးမှုများဖြင့် အပြုသဘောဆောင်သော ခြေရာကောင်းများကို တည်ဆောက်ပါ။'
      ]
    },

    // -------------------------------------------------------------------------
    // Lesson 10: Final Project: Cyber Safety Detective
    // -------------------------------------------------------------------------
    {
      id: 'cyber-10',
      lessonNumber: 10,
      titleEn: 'Final Project: Cyber Safety Detective',
      titleMy: 'နောက်ဆုံး ပရောဂျက်: Cyber Safety စုံထောက်ကြီး',
      shortIntroEn: 'Put on your detective trench coat! Solve 3 mysterious cyber cases: a phishing email, a password breach, and a social engineering trap.',
      shortIntroMy: 'စုံထောက် အင်္ကျီကို ဝတ်ဆင်လိုက်ပါ! Phishing အီးမေးလ်၊ Password ပေါက်ကြားမှုနှင့် Social Engineering ထောင်ချောက် စသည့် ဆိုက်ဘာအမှုကြီး ၃ ခုကို အောင်မြင်စွာ ဖြေရှင်းကြမယ်။',
      learningObjectivesEn: [
        'Synthesize all defensive cybersecurity concepts learned across the course.',
        'Investigate and resolve realistic fictional cyber incidents.',
        'Earn your official certification as an accredited Cyber Guardian!'
      ],
      learningObjectivesMy: [
        'သင်တန်းတစ်လျှောက် သင်ယူခဲ့သော ဆိုက်ဘာလုံခြုံရေး ကာကွယ်မှု သဘောတရား အားလုံးကို ပေါင်းစပ်အသုံးချနိုင်စေရန်။',
        'လက်တွေ့ကျသော စိတ်ကူးယဉ် ဆိုက်ဘာပြဿနာများကို စုံထောက်တစ်ဦးကဲ့သို့ စစ်ဆေးဖြေရှင်းနိုင်စေရန်။',
        'Cyber Guardian အဖြစ် တရားဝင် အောင်လက်မှတ် ရရှိနိုင်စေရန်။'
      ],
      explanationEn: [
        'Welcome to your final capstone trial, Detective! Over the previous 9 lessons, you mastered the shield of cybersecurity: the CIA triad, protecting PII, building fortress passphrases, recognizing phishing hooks, inspecting links, setting up 2FA, resisting social engineering, updating devices, and guarding your digital footprint.',
        'Today, the Nyan Learn Cyber Safety Agency has assigned you to investigate **Three High-Stakes Cases**: 1. **Case A: The Phishing Prize Trap**, 2. **Case B: The Reused Password Heist**, and 3. **Case C: The Imposter Admin in the Game Lobby**.',
        'Inspect each situation carefully. Identify the vulnerability, apply your defensive cybersecurity shield, and keep the community 100% safe!'
      ],
      explanationMy: [
        'နောက်ဆုံး စုံထောက်စစ်ဆေးမှုမှ ကြိုဆိုပါသည်! လွန်ခဲ့သော သင်ခန်းစာ ၉ ခုတွင် သင်သည် ဆိုက်ဘာလုံခြုံရေး ဒိုင်းကာများဖြစ်သည့် CIA Triad၊ ကိုယ်ရေးအချက်အလက် ကာကွယ်မှု၊ ခိုင်မာသော Passphrase၊ Phishing အမှားရှာဖွေမှု၊ လုံခြုံသော လင့်ခ်များ၊ 2FA စနစ်၊ Social Engineering ကို တွန်းလှန်ခြင်း၊ စက်များ Update လုပ်ခြင်းနှင့် ဒစ်ဂျစ်တယ် ခြေရာများကို ထိန်းသိမ်းခြင်းတို့ကို ကျွမ်းကျင်စွာ တတ်မြောက်ခဲ့ပြီးပါပြီ။',
        'ယနေ့တွင် Nyan Learn ဆိုက်ဘာလုံခြုံရေး အေဂျင်စီက သင့်အား **အရေးကြီးသော အမှုကြီး (၃) မှု** ကို စုံစမ်းစစ်ဆေးရန် တာဝန်ပေးအပ်ထားပါသည်: ၁။ **အမှု A: Phishing ဆုမဲထောင်ချောက်**၊ ၂။ **အမှု B: Password အတူတူ သုံးမိခြင်း အန္တရာယ်**၊ ၃။ **အမှု C: ဂိမ်းထဲရှိ အက်ဒမင်အတု၏ လှည့်စားမှု**။',
        'အခြေအနေတစ်ခုစီကို သေချာစစ်ဆေးပါ၊ လုံခြုံရေး ဒိုင်းကာကို အသုံးချပြီး အားလုံးကို ဘေးကင်းအောင် ကာကွယ်ပေးလိုက်ပါ!'
      ],
      diagram: {
        type: 'cyber-detective-badge',
        captionEn: 'Cyber Safety Detective Agency: 3 Cases to Solve for your Master Guardian Badge!',
        captionMy: 'ဆိုက်ဘာလုံခြုံရေး စုံထောက် အေဂျင်စီ: Master Guardian တံဆိပ်ရရှိရန် အမှု ၃ မှုကို ဖြေရှင်းပါ!',
        altEn: 'Golden detective badge with magnifying glass, shield, and padlock symbols',
        altMy: 'မှန်ဘီလူး၊ ဒိုင်းကာနှင့် သော့ခလောက် ပါဝင်သော ရွှေရောင် စုံထောက်တံဆိပ်ပုံ'
      },
      analogyEn: {
        title: 'The Neighborhood Watch Captain',
        description: 'Think of a neighborhood watch captain who walks down the street making sure streetlights work, gates are latched, and strangers with clipboard clip-ons can’t trick residents. You are now the neighborhood watch captain for the entire digital world!'
      },
      analogyMy: {
        title: 'ရပ်ကွက် လုံခြုံရေး တာဝန်ခံ ဥပမာ',
        description: 'ရပ်ကွက်ထဲတွင် လမ်းမီးများ ကောင်းမွန်စွာ လင်းမလင်း၊ ခြံတံခါးများ သော့ခတ်ထားခြင်း ရှိမရှိနှင့် မသင်္ကာဖွယ် သူစိမ်းများ လှည့်စားခြင်း မပြုနိုင်အောင် စောင့်ကြပ်ပေးသော လုံခြုံရေး တာဝန်ခံကဲ့သို့ပင် သင်သည်လည်း ဒစ်ဂျစ်တယ်ကမ္ဘာကြီး၏ လုံခြုံရေး စောင့်ကြပ်သူ ဖြစ်လာပါပြီ!'
      },
      workedExampleEn: {
        title: 'Solving Case A: The Phishing Prize Trap',
        scenario: 'A student is about to click a message promising 1,000 free coins.',
        steps: [
          { stepNumber: 1, instruction: 'Examine the evidence', outcome: 'Message says: "Hurry! Click `http://free-gift-box.ru/claim` or account expires!"' },
          { stepNumber: 2, instruction: 'Detective analysis', outcome: 'Notice HTTP (unencrypted), Russian domain (.ru), fake urgency, and promises of free currency.' },
          { stepNumber: 3, instruction: 'Determine correct protocol', outcome: 'Social engineering phishing attack confirmed.' },
          { stepNumber: 4, instruction: 'Resolve case', outcome: 'Block sender, delete message, and notify school IT coordinator. Case closed! 🛡️' }
        ]
      },
      workedExampleMy: {
        title: 'အမှု A ကို ဖြေရှင်းခြင်း: Phishing ဆုမဲထောင်ချောက်',
        scenario: 'ဂိမ်းငွေ ၁,၀၀၀ အလကားရမည်ဆိုသော မက်ဆေ့ခ်ျကို ကျောင်းသားတစ်ဦး နှိပ်လုနီးပါး ဖြစ်နေခြင်း။',
        steps: [
          { stepNumber: 1, instruction: 'သက်သေအထောက်အထားကို စစ်ဆေးသည်', outcome: 'မက်ဆေ့ခ်ျတွင် "မြန်မြန်လုပ်! `http://free-gift-box.ru/claim` ကို နှိပ်ပါ မဟုတ်လျှင် အကောင့်ပိတ်မည်!" ဟု ပါရှိသည်။' },
          { stepNumber: 2, instruction: 'စုံထောက် ဆန်းစစ်ချက်', outcome: 'HTTP (မလုံခြုံပါ)၊ မသင်္ကာဖွယ် ဒိုမိန်း၊ အလောတကြီး လုပ်ခိုင်းခြင်းနှင့် ဆုမဲအတုများ တွေ့ရှိရသည်။' },
          { stepNumber: 3, instruction: 'မှန်ကန်သော စည်းမျဉ်းကို အသုံးချသည်', outcome: 'Phishing တိုက်ခိုက်မှု ဖြစ်ကြောင်း သေချာသွားသည်။' },
          { stepNumber: 4, instruction: 'အမှုကို အောင်မြင်စွာ ဖြေရှင်းသည်', outcome: 'ပို့သူကို Block လုပ်သည်၊ စာကို ဖျက်ပစ်ပြီး ကျောင်း IT ဌာနသို့ အသိပေးသည်။ အမှုပြီးစီးပါပြီ! 🛡️' }
        ]
      },
      activity: {
        type: 'phishing-detector',
        titleEn: 'Grand Cyber Detective Triad Challenge',
        titleMy: 'ဆိုက်ဘာ စုံထောက်ကြီး၏ နောက်ဆုံး စိန်ခေါ်မှု',
        instructionsEn: 'Review the 3 case files. Click the one case that represents a severe security risk that must be reported immediately!',
        instructionsMy: 'အမှုတွဲ ၃ ခုကို စစ်ဆေးပြီး ချက်ချင်း အရေးယူတိုင်ကြားရမည့် အန္တရာယ်ကြီးမားသော အမှုကို ရှာဖွေနှိပ်ပါ။',
        initialData: [
          { text: 'A family tablet updates automatically overnight with verified patches', isDangerous: false },
          { text: 'An unknown user sends an email: "Click here to verify your bank password or your account will be frozen!"', isDangerous: true },
          { text: 'A student uses a 20-character passphrase with symbols for their school account', isDangerous: false }
        ]
      },
      quizQuestions: [
        {
          id: 'q-c10-1',
          questionEn: 'What is the best defense against phishing links sent via text or email?',
          questionMy: 'အီးမေးလ် သို့မဟုတ် စာတိုဖြင့် ပို့လာသော Phishing လင့်ခ်များကို ကာကွယ်ရန် အကောင်းဆုံး နည်းလမ်းမှာ အဘယ်နည်း?',
          options: [
            { id: 'a', textEn: 'Never click unknown links; verify directly through official websites or ask a parent', textMy: 'မသိသောလင့်ခ်များကို ဘယ်တော့မှ မနှိပ်ပါနှင့်၊ တရားဝင် Website မှ တိုက်ရိုက်သွားပါ သို့မဟုတ် မိဘကို မေးပါ' },
            { id: 'b', textEn: 'Click the link immediately to see what happens', textMy: 'ဘာဖြစ်မလဲ သိရအောင် ချက်ချင်း နှိပ်ကြည့်ပါ' },
            { id: 'c', textEn: 'Type your passwords to test if they work', textMy: 'အလုပ်လုပ်မလုပ် စမ်းသပ်ရန် Passwords ရိုက်ထည့်ကြည့်ပါ' },
            { id: 'd', textEn: 'Turn off the screen brightness to 0%', textMy: 'မျက်နှာပြင် အလင်းရောင်ကို ၀% သို့ လျှော့ချပါ' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Correct! Skepticism, pausing before clicking, and out-of-band verification defeat phishing.',
          explanationMy: 'မှန်ကန်ပါတယ်! မနှိပ်မီ သတိထားခြင်းနှင့် တရားဝင် နေရာများတွင် စစ်ဆေးခြင်းက Phishing ကို အနိုင်ယူနိုင်ပါသည်။'
        },
        {
          id: 'q-c10-2',
          questionEn: 'Why is Two-Factor Authentication (2FA) considered essential security hygiene today?',
          questionMy: 'မျက်မှောက်ခေတ်တွင် Two-Factor Authentication (2FA) သည် အဘယ်ကြောင့် မရှိမဖြစ် လိုအပ်သနည်း?',
          options: [
            { id: 'a', textEn: 'It prevents attackers from accessing your account even if they somehow steal your password', textMy: 'တိုက်ခိုက်သူများက သင့် Password ကို ရရှိသွားသည့်တိုင် အကောင့်ထဲ ဝင်ရောက်ခွင့် မရအောင် ဟန့်တားပေးသောကြောင့်' },
            { id: 'b', textEn: 'It makes all games completely free of charge', textMy: 'ဂိမ်းအားလုံးကို အခမဲ့ ဖြစ်သွားစေသောကြောင့်' },
            { id: 'c', textEn: 'It replaces the need to have a computer', textMy: 'ကွန်ပျူတာ ရှိစရာမလိုအောင် လုပ်ပေးသောကြောင့်' },
            { id: 'd', textEn: 'It automatically does your homework assignments', textMy: 'အိမ်စာများကို အလိုအလျောက် လုပ်ပေးသောကြောင့်' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Spot on! 2FA neutralizes the danger of stolen or leaked passwords.',
          explanationMy: 'မှန်ပါတယ်! 2FA သည် Password ပေါက်ကြားသွားသော်လည်း အကောင့်အဖောက်မခံရအောင် အပြည့်အဝ ကာကွယ်ပေးပါသည်။'
        },
        {
          id: 'q-c10-3',
          questionEn: 'What is the hallmark of a true Cyber Guardian?',
          questionMy: 'စစ်မှန်သော Cyber Guardian တစ်ဦး၏ အဓိက အရည်အချင်းမှာ အဘယ်နည်း?',
          options: [
            { id: 'a', textEn: 'Protecting privacy, thinking before clicking, using strong passphrases, and helping others stay safe online', textMy: 'ကိုယ်ရေးလုံခြုံမှုကို ထိန်းသိမ်းခြင်း၊ မနှိပ်မီ စဉ်းစားခြင်း၊ Passphrase ခိုင်မာစွာ သုံးခြင်းနှင့် အခြားသူများ ဘေးကင်းစေရန် ကူညီခြင်း' },
            { id: 'b', textEn: 'Trying to hack into school computers for fun', textMy: 'ပျော်စရာအဖြစ် ကျောင်းကွန်ပျူတာများကို ဖောက်ထွင်းရန် ကြိုးစားခြင်း' },
            { id: 'c', textEn: 'Shouting passwords loudly in the hallway', textMy: 'စင်္ကြံထဲတွင် Password များကို အသံကျယ်ကျယ် အော်ပြောခြင်း' },
            { id: 'd', textEn: 'Never using the internet ever again', textMy: 'အင်တာနက်ကို ဘယ်တော့မှ မသုံးတော့ခြင်း' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Wonderful! You are now an officially certified Cyber Guardian, prepared to navigate the digital world with wisdom, safety, and confidence!',
          explanationMy: 'အရမ်းတော်တယ်! သင်သည် အသိပညာ၊ ဘေးကင်းမှုနှင့် ယုံကြည်မှုအပြည့်ဖြင့် ဒစ်ဂျစ်တယ်လောကတွင် လျှောက်လှမ်းနိုင်သော တရားဝင် Cyber Guardian တစ်ဦး ဖြစ်လာပါပြီ!'
        }
      ],
      summaryEn: [
        'Defensive cybersecurity protects people, privacy, and community infrastructure.',
        'Apply the complete shield: Long passphrases, 2FA, phishing detection, updates, and privacy.',
        'You have graduated with honors as a certified Cyber Guardian! 🎓'
      ],
      summaryMy: [
        'ကာကွယ်ရေး ဆိုက်ဘာလုံခြုံရေးသည် လူသားများ၊ ကိုယ်ရေးလုံခြုံမှုနှင့် စနစ်များကို ကာကွယ်ပေးသည်။',
        'ဒိုင်းကာ အပြည့်အစုံကို သုံးပါ: ခိုင်မာသော Passphrase၊ 2FA၊ Phishing စစ်ဆေးမှု၊ Updates နှင့် လုံခြုံမှု။',
        'သင်သည် တရားဝင် Cyber Guardian အဖြစ် ဂုဏ်ယူစွာ အောင်မြင်ခဲ့ပါပြီ! 🎓'
      ]
    }
  ],

  // ---------------------------------------------------------------------------
  // Final Course Review & Assessment
  // ---------------------------------------------------------------------------
  finalReview: {
    badgeTitleEn: 'Certified Cyber Guardian',
    badgeTitleMy: 'ဆိုက်ဘာလုံခြုံရေး အကာအကွယ်ကျွမ်းကျင်သူ',
    certificateTitleEn: 'Certificate of Achievement: Cybersecurity for Kids',
    certificateTitleMy: 'အောင်လက်မှတ်: ကလေးများအတွက် ဆိုက်ဘာလုံခြုံရေး သင်တန်း',
    summaryEn: [
      'You mastered the core principles of cybersecurity and the CIA Triad (Confidentiality, Integrity, Availability).',
      'You discovered how to safeguard Personally Identifiable Information (PII) from strangers.',
      'You learned how to build uncrackable, memorable fortress passphrases.',
      'You unlocked the skills to spot phishing traps, fake urgency, and spoofed senders.',
      'You learned how to inspect URLs for HTTPS encryption padlocks and avoid malware downloads.',
      'You discovered why Two-Factor Authentication (2FA) is an unbreakable second lock.',
      'You learned to recognize social engineering manipulations and fake game moderators.',
      'You understood the critical importance of installing software updates promptly.',
      'You mastered the Billboard Test to protect your lifelong digital footprint!'
    ],
    summaryMy: [
      'Cybersecurity နှင့် CIA Triad (လျှို့ဝှက်မှု၊ မှန်ကန်မှု၊ အသုံးပြုနိုင်မှု) အခြေခံမူများကို ကျွမ်းကျင်စွာ တတ်မြောက်ခဲ့သည်။',
      'Personally Identifiable Information (PII) ကို သူစိမ်းများထံမှ ကာကွယ်နည်းကို သိရှိခဲ့သည်။',
      'မဖောက်ထွင်းနိုင်သော ခိုင်မာသည့် Fortress Passphrases များ တည်ဆောက်နည်းကို လေ့လာခဲ့သည်။',
      'Phishing ထောင်ချောက်များ၊ အလောတကြီး ခြိမ်းခြောက်မှုများနှင့် အတုအယောင် လိပ်စာများကို ခွဲခြားသိမြင်ခဲ့သည်။',
      'HTTPS လုံခြုံရေး သော့ခလောက်နှင့် Malware Downloads များ ရှောင်ရှားနည်းကို တတ်ကျွမ်းခဲ့သည်။',
      'Two-Factor Authentication (2FA) ၏ သော့နှစ်ထပ်စနစ် အကာအကွယ်ကို နားလည်ခဲ့သည်။',
      'Social Engineering လှည့်စားမှုများနှင့် ဂိမ်း Admin အတုများကို သတိပြုနိုင်ခဲ့သည်။',
      'စက်ပစ္စည်းများကို အချိန်မီ Update ပြုလုပ်ခြင်း၏ အရေးပါပုံကို သိရှိခဲ့သည်။',
      'Billboard Test ဖြင့် သင့်တစ်သက်တာ ဒစ်ဂျစ်တယ် ခြေရာကောင်းများကို ထိန်းသိမ်းတတ်ခဲ့သည်။'
    ],
    learnedChecklistEn: [
      'I know what the CIA Triad stands for and why it matters.',
      'I can list examples of PII that should never be posted publicly.',
      'I know how to create a 16+ character passphrase using 4 random words.',
      'I can identify at least 3 major phishing red flags in an email or text.',
      'I check for https:// and the padlock before typing on any website.',
      'I understand how Two-Factor Authentication (2FA) keeps accounts safe.',
      'I can spot social engineering scams and fake game currency generators.',
      'I install device and software updates promptly with my parents.',
      'I apply the Billboard Test before posting anything on social media.',
      'I know who to talk to if I encounter an uncomfortable or suspicious online situation.'
    ],
    learnedChecklistMy: [
      'CIA Triad ၏ အဓိပ္ပာယ်နှင့် အရေးပါပုံကို ရှင်းပြနိုင်သည်။',
      'အများမြင်ကွင်းတွင် ဘယ်တော့မှ မတင်သင့်သော PII များကို စာရင်းပြုစုနိုင်သည်။',
      'စကားလုံး ၄ လုံးပါ စာလုံး ၁၆ လုံးအထက် Passphrase တစ်ခုကို တည်ဆောက်နိုင်သည်။',
      'Phishing မက်ဆေ့ခ်ျတစ်ခုတွင် အနည်းဆုံး သတိပေးချက် ၃ ခုကို ဖော်ထုတ်နိုင်သည်။',
      'Website များတွင် စာမရိုက်မီ https:// နှင့် သော့ခလောက် ပါမပါ စစ်ဆေးတတ်သည်။',
      'Two-Factor Authentication (2FA) က အကောင့်ကို မည်သို့ ကာကွယ်ပေးသည်ကို နားလည်သည်။',
      'Social Engineering လိမ်လည်မှုများနှင့် ဂိမ်းငွေ အလကားပေးမည်ဆိုသည်များကို ခွဲခြားသိသည်။',
      'မိဘများနှင့်အတူ စက်ပစ္စည်းများကို အချိန်မီ Update ပြုလုပ်သည်။',
      'Social media ပေါ် မတင်မီ Billboard Test စည်းမျဉ်းကို အမြဲ အသုံးချသည်။',
      'မသင်္ကာဖွယ် အွန်လိုင်းအခြေအနေ ကြုံလာပါက မည်သူ့ထံ တိုင်ပင်ရမည်ကို သိရှိသည်။'
    ],
    vocabulary: [
      {
        term: 'Cybersecurity',
        pronunciation: 'SY-ber-sih-kyoor-ih-tee',
        definitionEn: 'The practice of protecting digital systems, networks, devices, and programs from cyberattacks.',
        definitionMy: 'ဒစ်ဂျစ်တယ် စနစ်များ၊ ကွန်ရက်များနှင့် စက်ပစ္စည်းများကို ဆိုက်ဘာတိုက်ခိုက်မှုများမှ ကာကွယ်ပေးသော နည်းပညာ။',
        exampleEn: 'Cybersecurity prevents bad actors from taking over accounts.',
        exampleMy: 'Cybersecurity သည် မသမာသူများ အကောင့်များကို ခိုးယူခြင်းမှ ကာကွယ်ပေးသည်။'
      },
      {
        term: 'CIA Triad',
        pronunciation: 'C-I-A TRY-ad',
        definitionEn: 'The three core pillars of info security: Confidentiality, Integrity, and Availability.',
        definitionMy: 'သတင်းအချက်အလက် လုံခြုံရေး မဏ္ဍိုင် ၃ ခု: လျှို့ဝှက်မှု၊ မှန်ကန်မှုနှင့် အသုံးပြုနိုင်မှု။',
        exampleEn: 'Every good security architecture is built on the CIA triad.',
        exampleMy: 'ကောင်းမွန်သော လုံခြုံရေးစနစ်တိုင်းသည် CIA Triad ပေါ်တွင် အခြေခံသည်။'
      },
      {
        term: 'PII (Personally Identifiable Information)',
        pronunciation: 'P-I-I',
        definitionEn: 'Any sensitive data that could potentially identify, contact, or locate a specific person.',
        definitionMy: 'လူတစ်ဦးချင်းစီကို သီးသန့် ခွဲခြားသိရှိနိုင်သော ကိုယ်ရေးအချက်အလက်များ။',
        exampleEn: 'Your home street address and phone number are private PII.',
        exampleMy: 'သင့်အိမ်လိပ်စာနှင့် ဖုန်းနံပါတ်တို့သည် လျှို့ဝှက်ရမည့် PII ဖြစ်သည်။'
      },
      {
        term: 'Passphrase',
        pronunciation: 'PASS-frayz',
        definitionEn: 'A sequence of multiple words and symbols used as a memorable, uncrackable password.',
        definitionMy: 'စကားလုံးများ၊ ဂဏန်းများနှင့် သင်္ကေတများ တွဲစပ်ထားသော မှတ်မိလွယ်၍ ခိုင်မာသည့် စကားဝှက်။',
        exampleEn: '`Sunset-Bicycle-Apple-88!` is a secure passphrase.',
        exampleMy: '`Sunset-Bicycle-Apple-88!` သည် လုံခြုံသော Passphrase တစ်ခု ဖြစ်သည်။'
      },
      {
        term: 'Phishing',
        pronunciation: 'FISH-ing',
        definitionEn: 'A scam where fraudulent emails or messages trick victims into revealing sensitive info.',
        definitionMy: 'ယုံကြည်ရသယောင် ဟန်ဆောင်၍ အချက်အလက်များ လှည့်စားခိုးယူသော အွန်လိုင်း လိမ်လည်မှု။',
        exampleEn: 'Beware of phishing emails offering fake gift cards.',
        exampleMy: 'ဆုမဲအတုများ ပေးမည်ဆိုသော Phishing အီးမေးလ်များကို သတိထားပါ။'
      },
      {
        term: 'Two-Factor Authentication (2FA)',
        pronunciation: '2-F-A',
        definitionEn: 'A security process where a user provides two different authentication factors to verify identity.',
        definitionMy: 'အကောင့်ဖွင့်ရန် မတူညီသော သက်သေအထောက်အထား ၂ ခု လိုအပ်သော အကာအကွယ်နှစ်ထပ်စနစ်။',
        exampleEn: 'Entering a password plus a phone code is 2FA.',
        exampleMy: 'Password အပြင် ဖုန်းသို့ပို့သော ကုဒ်ကိုပါ ရိုက်ထည့်ရခြင်းသည် 2FA ဖြစ်သည်။'
      },
      {
        term: 'Social Engineering',
        pronunciation: 'SOH-shul en-jih-NEER-ing',
        definitionEn: 'Psychological manipulation of people into performing actions or divulging confidential information.',
        definitionMy: 'လူသားတို့၏ စိတ်ခံစားမှုကို အသုံးချ၍ လျှို့ဝှက်ချက်များ ပေးမိအောင် လှည့်စားခြင်း။',
        exampleEn: 'The scammer used social engineering by pretending to be a bank employee.',
        exampleMy: 'လူလိမ်သည် ဘဏ်ဝန်ထမ်းအဖြစ် ဟန်ဆောင်ကာ Social engineering ဖြင့် လှည့်စားခဲ့သည်။'
      },
      {
        term: 'Digital Footprint',
        pronunciation: 'DIJ-ih-tul FOOT-print',
        definitionEn: 'The record and trail of all digital activity and content associated with a specific person.',
        definitionMy: 'အင်တာနက်ပေါ်တွင် လူတစ်ဦး ချန်ရစ်ခဲ့သော အွန်လိုင်း လုပ်ဆောင်ချက် မှတ်တမ်းအားလုံး။',
        exampleEn: 'Think before you post to maintain a positive digital footprint.',
        exampleMy: 'ကောင်းမွန်သော ဒစ်ဂျစ်တယ်ခြေရာ ကျန်ရစ်စေရန် မတင်မီ သေချာစဉ်းစားပါ။'
      }
    ],
    finalQuiz: [
      {
        id: 'fq-c1',
        questionEn: 'What does the CIA Triad stand for in cybersecurity?',
        questionMy: 'Cybersecurity တွင် CIA Triad ၏ အဓိပ္ပာယ်မှာ အဘယ်နည်း?',
        options: [
          { id: 'a', textEn: 'Confidentiality, Integrity, and Availability', textMy: 'Confidentiality (လျှို့ဝှက်မှု), Integrity (မှန်ကန်မှု), Availability (အသုံးပြုနိုင်မှု)' },
          { id: 'b', textEn: 'Computers, Internet, and Applications', textMy: 'Computers, Internet, and Applications' },
          { id: 'c', textEn: 'Cables, Inputs, and Audio', textMy: 'Cables, Inputs, and Audio' },
          { id: 'd', textEn: 'Cats, Iguanas, and Alligators', textMy: 'Cats, Iguanas, and Alligators' }
        ],
        correctOptionId: 'a',
        explanationEn: 'Correct! Confidentiality, Integrity, and Availability form the pillars of security.',
        explanationMy: 'မှန်ကန်ပါတယ်! Confidentiality, Integrity, Availability တို့သည် လုံခြုံရေး၏ အဓိက မဏ္ဍိုင် ၃ ခု ဖြစ်သည်။'
      },
      {
        id: 'fq-c2',
        questionEn: 'Which of the following is considered private Personally Identifiable Information (PII)?',
        questionMy: 'အောက်ပါတို့အနက် မည်သည့်အရာသည် လျှို့ဝှက်ရမည့် ကိုယ်ရေးအချက်အလက် (PII) ဖြစ်သနည်း?',
        options: [
          { id: 'a', textEn: 'Your home street address and phone number', textMy: 'မိမိအိမ်လိပ်စာနှင့် ဖုန်းနံပါတ်' },
          { id: 'b', textEn: 'Your favorite pizza topping (Cheese)', textMy: 'မိမိကြိုက်သော ပီဇာအမျိုးအစား' },
          { id: 'c', textEn: 'Your favorite cartoon superhero', textMy: 'မိမိနှစ်သက်သော ကာတွန်းဇာတ်ကောင်' },
          { id: 'd', textEn: 'The color of your socks', textMy: 'မိမိခြေအိတ်၏ အရောင်' }
        ],
        correctOptionId: 'a',
        explanationEn: 'Spot on! Home addresses and phone numbers could be used to locate or contact you.',
        explanationMy: 'မှန်ပါတယ်! အိမ်လိပ်စာနှင့် ဖုန်းနံပါတ်များသည် ပြင်ပတွင် သင့်ကို ရှာဖွေနိုင်သော PII ဖြစ်သည်။'
      },
      {
        id: 'fq-c3',
        questionEn: 'Which password is the strongest against brute-force attacks?',
        questionMy: 'အောက်ပါ Password များအနက် မည်သည့်အရာသည် အခိုင်မာဆုံး ဖြစ်သနည်း?',
        options: [
          { id: 'a', textEn: 'Blue-River-Dolphin#91! (22 characters)', textMy: 'Blue-River-Dolphin#91! (စာလုံး ၂၂ လုံးပါ Passphrase)' },
          { id: 'b', textEn: '123456 (6 numbers)', textMy: '123456 (ဂဏန်း ၆ လုံး)' },
          { id: 'c', textEn: 'qwerty (keyboard row)', textMy: 'qwerty (ကီးဘုတ်လိုင်း)' },
          { id: 'd', textEn: 'admin (common word)', textMy: 'admin (အသုံးများသော စကားလုံး)' }
        ],
        correctOptionId: 'a',
        explanationEn: 'Correct! Long multi-word passphrases with numbers and symbols are virtually uncrackable.',
        explanationMy: 'မှန်ကန်ပါတယ်! စကားလုံး၊ ဂဏန်းနှင့် သင်္ကေတများ ရောနှောထားသော Passphrase အရှည်သည် အခိုင်မာဆုံး ဖြစ်သည်။'
      },
      {
        id: 'fq-c4',
        questionEn: 'What is a major red flag that indicates an email is likely a phishing scam?',
        questionMy: 'အီးမေးလ်တစ်ခုသည် Phishing လိမ်လည်မှုဖြစ်ကြောင်း ပြသနေသော အဓိက သတိပေးချက်မှာ အဘယ်နည်း?',
        options: [
          { id: 'a', textEn: 'Artificial panic: "Your account will be deleted in 5 minutes! Click here immediately!"', textMy: 'အလောတကြီး ခြိမ်းခြောက်ခြင်း: "၅ မိနစ်အတွင်း အကောင့်ပိတ်မည်! အခုချက်ချင်း နှိပ်ပါ!"' },
          { id: 'b', textEn: 'A polite note from your teacher about homework due next Friday', textMy: 'သောကြာနေ့ အိမ်စာတင်ရန် ဆရာမထံမှ ယဉ်ကျေးသော သတိပေးချက်' },
          { id: 'c', textEn: 'An email with correct spelling from a known friend', textMy: 'သိပြီးသား သူငယ်ချင်းထံမှ စာလုံးပေါင်းမှန်သော စာ' },
          { id: 'd', textEn: 'A link pointing strictly to `https://www.wikipedia.org`', textMy: 'တရားဝင် Wikipedia လိပ်စာသို့ သွားသော လင့်ခ်' }
        ],
        correctOptionId: 'a',
        explanationEn: 'Spot on! Fake urgency is designed to stop victims from thinking critically.',
        explanationMy: 'မှန်ပါတယ်! စဉ်းစားချိန်မရအောင် အလောတကြီး လုပ်ခိုင်းခြင်းသည် Phishing ၏ အဓိက လက္ခဏာ ဖြစ်သည်။'
      },
      {
        id: 'fq-c5',
        questionEn: 'What does "https://" and the lock icon in a browser URL mean?',
        questionMy: 'Browser လိပ်စာရှိ "https://" နှင့် သော့ခလောက်ပုံသည် အဘယ်အရာကို ဆိုလိုသနည်း?',
        options: [
          { id: 'a', textEn: 'Traffic between your browser and the website is encrypted and protected from snooping', textMy: 'သင့် Browser နှင့် Website ကြား ဆက်သွယ်မှုသည် လျှို့ဝှက်ကုဒ်ဖြင့် လုံခြုံစွာ ကာကွယ်ထားသည်' },
          { id: 'b', textEn: 'The website is completely full and cannot accept new visitors', textMy: 'Website ပြည့်သွားသဖြင့် ဧည့်သည်အသစ် လက်မခံပါ' },
          { id: 'c', textEn: 'You must call the police immediately', textMy: 'ရဲစခန်းသို့ ချက်ချင်း ဖုန်းခေါ်ရမည်' },
          { id: 'd', textEn: 'Your computer monitor is broken', textMy: 'ကွန်ပျူတာ မျက်နှာပြင် ပျက်နေသည်' }
        ],
        correctOptionId: 'a',
        explanationEn: 'Awesome! HTTPS provides transport layer encryption for safe browsing.',
        explanationMy: 'အရမ်းတော်တယ်! HTTPS သည် ဆက်သွယ်မှုများကို လုံခြုံစွာ Encrypt ပြုလုပ်ပေးထားခြင်း ဖြစ်သည်။'
      },
      {
        id: 'fq-c6',
        questionEn: 'Which of the following describes Two-Factor Authentication (2FA)?',
        questionMy: 'အောက်ပါတို့အနက် မည်သည့်အရာသည် Two-Factor Authentication (2FA) ကို ဖော်ပြသနည်း?',
        options: [
          { id: 'a', textEn: 'Entering your password AND entering a one-time code texted to your phone', textMy: 'Password အပြင် ဖုန်းသို့ ပို့သော တစ်ကြိမ်သုံး ကုဒ်နံပါတ်ကိုပါ ရိုက်ထည့်ရခြင်း' },
          { id: 'b', textEn: 'Typing your password twice on the exact same screen', textMy: 'မျက်နှာပြင်တစ်ခုတည်းတွင် Password ကို နှစ်ကြိမ် ရိုက်ထည့်ခြင်း' },
          { id: 'c', textEn: 'Using two different mouse devices at the same time', textMy: 'Mouse ၂ ခုကို တစ်ပြိုင်နက်တည်း သုံးခြင်း' },
          { id: 'd', textEn: 'Having two people sit in the same chair', textMy: 'ကုလားထိုင်တစ်ခုတည်းတွင် လူနှစ်ယောက် ထိုင်ခြင်း' }
        ],
        correctOptionId: 'a',
        explanationEn: 'Correct! 2FA requires two distinct factors (e.g. something you know + something you have).',
        explanationMy: 'မှန်ကန်ပါတယ်! 2FA သည် မတူညီသော သက်သေအထောက်အထား ၂ ခု (သိသောအရာ + ထံရှိသောအရာ) လိုအပ်သည်။'
      },
      {
        id: 'fq-c7',
        questionEn: 'If an unknown player in game chat asks for your password to give you free game coins, what should you do?',
        questionMy: 'ဂိမ်းငွေ အလကားပေးမည်ဟုဆိုကာ ဂိမ်း Chat ထဲတွင် သူစိမ်းတစ်ယောက်က Password တောင်းလာပါက မည်သို့ လုပ်သင့်သနည်း?',
        options: [
            { id: 'a', textEn: 'Never give your password, report the user, and inform a parent', textMy: 'ဘယ်တော့မှ မပေးပါနှင့်၊ ထိုသူကို Report လုပ်ပြီး မိဘကို အသိပေးပါ' },
            { id: 'b', textEn: 'Give them the password immediately', textMy: 'ချက်ချင်း ပေးလိုက်ပါ' },
            { id: 'c', textEn: 'Ask them to give you their password first', textMy: 'သူ့ Password ကို အရင်တောင်းပါ' },
            { id: 'd', textEn: 'Tell them your home address instead', textMy: 'အိမ်လိပ်စာကို အစားထိုး ပြောပြလိုက်ပါ' }
        ],
        correctOptionId: 'a',
        explanationEn: 'Spot on! Never share credentials. This is a classic social engineering credential harvest.',
        explanationMy: 'မှန်ပါတယ်! Password များကို မည်သူ့ကိုမျှ မပေးရပါ။ ၎င်းသည် အကောင့်ခိုးယူသော ထောင်ချောက် ဖြစ်သည်။'
      },
      {
        id: 'fq-c8',
        questionEn: 'Why are operating system and app updates so critical for security?',
        questionMy: 'စနစ်များနှင့် App Updates များသည် လုံခြုံရေးအတွက် အဘယ်ကြောင့် အလွန်အရေးကြီးသနည်း?',
        options: [
          { id: 'a', textEn: 'They fix and patch discovered security vulnerabilities before attackers can exploit them', textMy: 'တိုက်ခိုက်သူများ အခွင့်ကောင်းမယူနိုင်မီ တွေ့ရှိထားသော လုံခြုံရေး အားနည်းချက် အပေါက်များကို ဖာထေးပေးသောကြောင့်' },
          { id: 'b', textEn: 'They erase all photos from your phone', textMy: 'ဖုန်းထဲရှိ ဓာတ်ပုံအားလုံးကို ဖျက်ပစ်သောကြောင့်' },
          { id: 'c', textEn: 'They make the battery run out in 5 minutes', textMy: 'ဘက်ထရီအား ၅ မိနစ်အတွင်း ကုန်စေသောကြောင့်' },
          { id: 'd', textEn: 'They turn the computer off forever', textMy: 'ကွန်ပျူတာကို အပြီးတိုင် ပိတ်ပစ်သောကြောင့်' }
        ],
        correctOptionId: 'a',
        explanationEn: 'Awesome! Updates deliver security patches that seal loopholes and defend devices.',
        explanationMy: 'အရမ်းတော်တယ်! Update များသည် လုံခြုံရေး အားနည်းချက်များကို ဖာထေးပေးသော အကာအကွယ်များ ဖြစ်ကြသည်။'
      },
      {
        id: 'fq-c9',
        questionEn: 'What is the "Billboard Test" before posting on social media?',
        questionMy: 'Social media ပေါ်တွင် မတင်မီ "Billboard Test" စည်းမျဉ်းမှာ အဘယ်နည်း?',
        options: [
          { id: 'a', textEn: 'Would you feel proud if this post was printed on a giant public billboard for everyone to see?', textMy: 'လူတိုင်းမြင်နိုင်သော ဆိုင်းဘုတ်ကြီးပေါ်တွင် ဤပို့စ်ကို တင်ထားပါက သင် ဂုဏ်ယူနိုင်ပါ့မလား?' },
          { id: 'b', textEn: 'How many billboards can you count on the drive home?', textMy: 'အိမ်ပြန်လမ်းတွင် ဆိုင်းဘုတ်မည်မျှ တွေ့ရသနည်း?' },
          { id: 'c', textEn: 'Can you draw a billboard using crayons?', textMy: 'ဖယောင်းရောင်စုံခဲတံဖြင့် ဆိုင်းဘုတ်ဆွဲနိုင်သလား?' },
          { id: 'd', textEn: 'Does the post contain the word "Billboard"?', textMy: 'ပို့စ်ထဲတွင် "Billboard" ဟူသော စကားလုံး ပါသလား?' }
        ],
        correctOptionId: 'a',
        explanationEn: 'Correct! The Billboard Test ensures you only post things that reflect your best, kindest self.',
        explanationMy: 'မှန်ကန်ပါတယ်! Billboard Test သည် လူတိုင်းရှေ့တွင် ဂုဏ်ယူနိုင်မည့် အရာများကိုသာ တင်မိစေရန် သေချာစေပါသည်။'
      },
      {
        id: 'fq-c10',
        questionEn: 'What makes a digital footprint permanent?',
        questionMy: 'ဒစ်ဂျစ်တယ် ခြေရာများကို မည်သည့်အရာက အမြဲကျန်ရစ်စေသနည်း?',
        options: [
          { id: 'a', textEn: 'Content can be screenshotted, downloaded, or archived in milliseconds by others before you delete it', textMy: 'သင်မဖျက်မီ အခြားသူများက Screenshot ရိုက်ခြင်း၊ ဒေါင်းလုဒ်လုပ်ခြင်း သို့မဟုတ် မှတ်တမ်းတင်ထားနိုင်သောကြောင့်' },
          { id: 'b', textEn: 'Internet servers are carved out of stone', textMy: 'အင်တာနက် Server များကို ကျောက်တုံးဖြင့် ထွင်းထားသောကြောင့်' },
          { id: 'c', textEn: 'Delete buttons never actually work on any computer', textMy: 'Delete ခလုတ်များသည် ကွန်ပျူတာပေါ်တွင် အလုပ်မလုပ်သောကြောင့်' },
          { id: 'd', textEn: 'Wi-Fi signals are stuck to the walls', textMy: 'Wi-Fi လှိုင်းများသည် နံရံတွင် ကပ်နေသောကြောင့်' }
        ],
        correctOptionId: 'a',
        explanationEn: 'Outstanding! Remembering that online content can be preserved permanently helps you make wise, respectful decisions.',
        explanationMy: 'အလွန်ထူးချွန်ပါတယ်! အွန်လိုင်းပေါ်ရှိ အရာများသည် ကြာရှည်ကျန်ရစ်နိုင်ကြောင်း သိရှိထားခြင်းက သင့်အား အမြဲတမ်း ပညာရှိစွာ ဆုံးဖြတ်နိုင်စေပါသည်။'
      }
    ]
  }
};
