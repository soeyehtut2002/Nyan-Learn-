import { CourseData } from '../../../types/course.types';

export const programmingCourse: CourseData = {
  id: 'programming',
  titleEn: 'Basic Programming for Kids',
  titleMy: 'ကလေးများအတွက် အခြေခံ ပရိုဂရမ်မင်း',
  badgeEmoji: '🚀',
  targetAgeEn: 'Ages 6–12',
  targetAgeMy: 'အသက် ၆–၁၂ နှစ်',
  descriptionEn: 'Discover the superpower of coding! Learn how computers think, build step-by-step algorithms, repeat with loops, make smart decisions with conditions, and program your own robot.',
  descriptionMy: 'Coding ဆိုတဲ့ စွမ်းအားကို လေ့လာလိုက်ကြရအောင်! ကွန်ပျူတာတွေ စဉ်းစားပုံ၊ တစ်ဆင့်ချင်း ညွှန်ကြားချက်များ၊ ထပ်ခါတလဲလဲ ပြုလုပ်ခြင်းနှင့် စမတ်ကျသော ဆုံးဖြတ်ချက်များကို ပျော်ရွှင်စွာ လေ့လာနိုင်ပါသည်။',
  category: 'Fundamentals',
  color: '#6c47ff',
  bgLight: '#f0edff',
  lessons: [
    // -------------------------------------------------------------------------
    // Lesson 1: What Is Programming?
    // -------------------------------------------------------------------------
    {
      id: 'prog-1',
      lessonNumber: 1,
      titleEn: 'What Is Programming?',
      titleMy: 'Programming ဆိုတာ ဘာလဲ?',
      shortIntroEn: 'Welcome to the world of coding! Discover how humans give clear instructions to help computers do magical things.',
      shortIntroMy: 'Coding လောကမှ ကြိုဆိုပါတယ်! လူသားတွေက ကွန်ပျူတာတွေကို အလုပ်လုပ်ခိုင်းဖို့ ရှင်းလင်းတဲ့ ညွှန်ကြားချက်တွေ ဘယ်လိုပေးရလဲဆိုတာ လေ့လာကြမယ်။',
      learningObjectivesEn: [
        'Understand what a computer program is and why computers need instructions.',
        'Learn the difference between a programmer (you!) and a computer.',
        'Recognize that computers do not guess — they follow instructions exactly.'
      ],
      learningObjectivesMy: [
        'Computer Program ဆိုသည်မှာ ဘာလဲနှင့် ကွန်ပျူတာများသည် အဘယ်ကြောင့် ညွှန်ကြားချက်များ လိုအပ်သည်ကို နားလည်စေရန်။',
        'Programmer (သင်!) နှင့် ကွန်ပျူတာတို့၏ ကွာခြားချက်ကို သိရှိစေရန်။',
        'ကွန်ပျူတာများသည် အလိုအလျောက် မှန်းဆခြင်းမရှိဘဲ ပေးထားသော ညွှန်ကြားချက်အတိုင်းသာ တိကျစွာ လုပ်ဆောင်ကြောင်း သိရှိစေရန်။'
      ],
      explanationEn: [
        'Imagine you have a friendly robot friend named Byte. Byte can run super fast, calculate numbers in a blink, and draw colorful shapes. But there is one catch: Byte has no brain of its own! Without your guidance, Byte just sits there quietly waiting.',
        'Programming (also called coding) is the process of writing a list of step-by-step instructions that tell a computer or robot what to do. The person who writes these instructions is called a programmer or coder.',
        'Computers speak special programming languages like Python, JavaScript, and Scratch blocks. Just like you might speak Burmese or English with your friends, we use coding languages to communicate with machines.'
      ],
      explanationMy: [
        'သင့်မှာ Byte လို့ခေါ်တဲ့ စက်ရုပ်သူငယ်ချင်းလေးတစ်ကောင် ရှိတယ်ဆိုပါစို့။ Byte ဟာ အရမ်းမြန်မြန် ပြေးနိုင်တယ်၊ တွက်ချက်နိုင်တယ်၊ အရောင်စုံ ပုံဆွဲနိုင်တယ်။ ဒါပေမဲ့ တစ်ခုတော့ရှိတယ် — Byte မှာ သူ့ကိုယ်ပိုင် ဉာဏ်ရည်မရှိပါဘူး! သင်ညွှန်ကြားချက် မပေးရင် ဘာမှမလုပ်ဘဲ ဒီအတိုင်း ငြိမ်ငြိမ်လေး ထိုင်နေမှာပါ။',
        'Programming (သို့မဟုတ် Coding) ဆိုတာ ကွန်ပျူတာ ဒါမှမဟုတ် စက်ရုပ်ကို ဘာလုပ်ရမလဲဆိုတာ တစ်ဆင့်ချင်း ရှင်းလင်းစွာ ရေးသားညွှန်ကြားတဲ့ လုပ်ငန်းစဉ်ဖြစ်ပါတယ်။ ဒီညွှန်ကြားချက်တွေကို ရေးတဲ့သူကို Programmer လို့ ခေါ်ပါတယ်။',
        'ကွန်ပျူတာတွေနဲ့ စကားပြောဖို့အတွက် Python, JavaScript နဲ့ Block Coding စတဲ့ Coding ဘာသာစကားတွေကို အသုံးပြုရပါတယ်။'
      ],
      diagram: {
        type: 'programmer-computer-bridge',
        captionEn: 'The Programmer writes code, the computer translates it, and the robot performs the action!',
        captionMy: 'Programmer က Code ရေးတယ်၊ ကွန်ပျူတာက နားလည်အောင် ဘာသာပြန်တယ်၊ စက်ရုပ်က အလုပ်လုပ်ပြတယ်!',
        altEn: 'Diagram showing human programmer sending code to a computer processor which controls a robot',
        altMy: 'Programmer မှ ကွန်ပျူတာနှင့် စက်ရုပ်သို့ ညွှန်ကြားချက်ပေးပို့ပုံ မျဉ်းကားချပ်'
      },
      analogyEn: {
        title: 'The Recipe Book Analogy',
        description: 'Think of a program like a delicious baking recipe. If the recipe says "1. Crack 2 eggs, 2. Add 1 cup of flour, 3. Mix well, 4. Bake for 20 minutes", you get a tasty cake! But if the recipe forgets to say "crack the eggs first", you might throw whole eggshells into the bowl! A computer follows your instructions just as strictly as a baker follows a recipe.'
      },
      analogyMy: {
        title: 'မုန့်ဖုတ်နည်း ညွှန်ကြားချက် ဥပမာ',
        description: 'Program တစ်ခုဟာ မုန့်ဖုတ်နည်းစာအုပ်နဲ့ တူပါတယ်။ "၁။ ကြက်ဥ ၂ လုံးခွဲထည့်ပါ၊ ၂။ ဂျုံမှုန့် ၁ ခွက်ထည့်ပါ၊ ၃။ သမအောင် မွှေပါ" လို့ တစ်ဆင့်ချင်း ရေးထားရင် အရသာရှိတဲ့ မုန့်ရမှာပါ။ အကယ်၍ "ကြက်ဥခွဲပါ" လို့ မရေးထားဘဲ မုန့်ဖုတ်ခိုင်းရင် ကြက်ဥခွံကြီးပါ ပါသွားသလိုမျိုး ကွန်ပျူတာကလည်း ပေးထားတဲ့အတိုင်း အတိအကျသာ လုပ်ဆောင်တတ်ပါတယ်။'
      },
      workedExampleEn: {
        title: 'Instructing Byte the Robot to Wave',
        scenario: 'We want Byte to stand up, smile, and wave hello to the class.',
        steps: [
          { stepNumber: 1, instruction: 'Robot.PowerOn()', outcome: 'Byte powers up and eyes glow bright cyan.' },
          { stepNumber: 2, instruction: 'Robot.ShowFace("smile")', outcome: 'A cheerful smile appears on Byte’s digital screen.' },
          { stepNumber: 3, instruction: 'Robot.LiftArm("right")', outcome: 'Byte raises the right metal arm up to shoulder height.' },
          { stepNumber: 4, instruction: 'Robot.WaveHand(3)', outcome: 'Byte waves left and right three times. Hello friends!' }
        ]
      },
      workedExampleMy: {
        title: 'စက်ရုပ် Byte ကို နှုတ်ဆက်ခိုင်းခြင်း ဥပမာ',
        scenario: 'Byte ကို မတ်တပ်ရပ်ပြီး အတန်းဖော်တွေကို လက်ပြနှုတ်ဆက်ခိုင်းပါမည်။',
        steps: [
          { stepNumber: 1, instruction: 'Robot.PowerOn()', outcome: 'Byte စက်နိုးလာပြီး မျက်လုံးများ လင်းလာသည်။' },
          { stepNumber: 2, instruction: 'Robot.ShowFace("smile")', outcome: 'Byte ၏ မျက်နှာပြင်တွင် ပြုံးနေသော မျက်နှာ ပေါ်လာသည်။' },
          { stepNumber: 3, instruction: 'Robot.LiftArm("right")', outcome: 'Byte ညာဘက်လက်ကို ပခုံးအမြင့်အထိ မြှောက်လိုက်သည်။' },
          { stepNumber: 4, instruction: 'Robot.WaveHand(3)', outcome: 'Byte လက်ကို ၃ ကြိမ် ဝှေ့ယမ်းကာ နှုတ်ဆက်လိုက်သည်။' }
        ]
      },
      activity: {
        type: 'sequence-sorter',
        titleEn: 'Mission: Wake Up Byte the Robot',
        titleMy: 'မစ်ရှင်: စက်ရုပ် Byte ကို အိပ်ရာနိုးထစေရန် စီစဉ်ပါ',
        instructionsEn: 'Drag or click the steps into the correct order so Byte can start the day safely!',
        instructionsMy: 'Byte ဘေးကင်းစွာ နိုးထနိုင်စေရန် ညွှန်ကြားချက်များကို မှန်ကန်သော အစီအစဉ်အတိုင်း စီပေးပါ။',
        initialData: [
          { id: 's3', textEn: '3. Step out of charging dock', textMy: '၃။ အားသွင်းခုံပေါ်မှ ဆင်းပါ' },
          { id: 's1', textEn: '1. Power on main battery', textMy: '၁။ အဓိက ဘက်ထရီ စက်နိုးပါ' },
          { id: 's4', textEn: '4. Say "Ready to learn!"', textMy: '၄။ "လေ့လာဖို့ အဆင်သင့်ပါ!" ဟု ပြောပါ' },
          { id: 's2', textEn: '2. Check safety sensors', textMy: '၂။ အာရုံခံကိရိယာများ စစ်ဆေးပါ' }
        ],
        solution: ['s1', 's2', 's3', 's4']
      },
      quizQuestions: [
        {
          id: 'q1-1',
          questionEn: 'What is a computer program?',
          questionMy: 'Computer Program ဆိုတာ ဘာလဲ?',
          options: [
            { id: 'a', textEn: 'A magical spell that fixes everything automatically', textMy: 'အရာအားလုံးကို အလိုအလျောက် ပြုပြင်ပေးသော မှော်အတတ်' },
            { id: 'b', textEn: 'A list of step-by-step instructions for a computer to follow', textMy: 'ကွန်ပျူတာ လိုက်နာလုပ်ဆောင်ရန် တစ်ဆင့်ချင်း ညွှန်ကြားချက်များ' },
            { id: 'c', textEn: 'A physical tool like a screwdriver or hammer', textMy: 'ဝက်အူလှည့် သို့မဟုတ် တူ ကဲ့သို့သော ကိရိယာ' },
            { id: 'd', textEn: 'A video game that can only be played once', textMy: 'တစ်ကြိမ်သာ ကစားနိုင်သော ဂိမ်း' }
          ],
          correctOptionId: 'b',
          explanationEn: 'Correct! A program is an orderly list of instructions that tells the computer exactly what actions to take.',
          explanationMy: 'မှန်ကန်ပါတယ်! Program ဆိုတာ ကွန်ပျူတာ အဆင့်ဆင့် လုပ်ဆောင်ရမယ့် တိကျတဲ့ ညွှန်ကြားချက်များ ဖြစ်ပါတယ်။'
        },
        {
          id: 'q1-2',
          questionEn: 'Who is a programmer?',
          questionMy: 'Programmer ဆိုတာ ဘယ်သူလဲ?',
          options: [
            { id: 'a', textEn: 'The person who writes code and instructions for machines', textMy: 'စက်ပစ္စည်းများအတွက် Code နှင့် ညွှန်ကြားချက်များ ရေးသားသူ' },
            { id: 'b', textEn: 'A robot that lives inside a battery', textMy: 'ဘက်ထရီထဲတွင် နေထိုင်သော စက်ရုပ်' },
            { id: 'c', textEn: 'Someone who only watches TV cartoons', textMy: 'ကာတွန်းသာ ကြည့်နေသောသူ' },
            { id: 'd', textEn: 'A computer screen that lights up', textMy: 'လင်းလက်နေသော ကွန်ပျူတာ မျက်နှာပြင်' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Great job! As you learn with CodeQuest, you are becoming a real programmer who creates code!',
          explanationMy: 'အရမ်းတော်တယ်! CodeQuest မှာ သင်ခန်းစာတွေ လေ့လာရင်း သင်ဟာ ကွန်ပျူတာကို စေခိုင်းနိုင်တဲ့ Programmer တစ်ယောက် ဖြစ်လာပါပြီ!'
        },
        {
          id: 'q1-3',
          questionEn: 'What happens if you give a computer incomplete instructions?',
          questionMy: 'ကွန်ပျူတာကို မပြည့်စုံတဲ့ ညွှန်ကြားချက် ပေးလိုက်ရင် ဘာဖြစ်မလဲ?',
          options: [
            { id: 'a', textEn: 'The computer guesses your mind and does what you wished', textMy: 'ကွန်ပျူတာက သင့်စိတ်ကိုဖတ်ပြီး သင်လိုချင်တာကို မှန်းလုပ်ပေးတယ်' },
            { id: 'b', textEn: 'The computer stops, gets confused, or makes a mistake', textMy: 'ကွန်ပျူတာ ရပ်တန့်သွားမည်၊ ရှုပ်ထွေးသွားမည် သို့မဟုတ် အမှားဖြစ်မည်' },
            { id: 'c', textEn: 'The computer turns into a microwave oven', textMy: 'ကွန်ပျူတာက မိုက်ခရိုဝေ့ဖ်ဖို အဖြစ် ပြောင်းသွားမယ်' },
            { id: 'd', textEn: 'Nothing changes at all in any way', textMy: 'ဘာမှ မပြောင်းလဲပါ' }
          ],
          correctOptionId: 'b',
          explanationEn: 'Exactly. Computers can only follow what you tell them. They cannot guess missing steps, so programmers must be clear and complete!',
          explanationMy: 'မှန်ပါတယ်။ ကွန်ပျူတာတွေဟာ ကိုယ်တိုင် မမှန်းဆနိုင်တဲ့အတွက် ညွှန်ကြားချက် မပြည့်စုံရင် အလုပ်မလုပ်နိုင်ပါဘူး။'
        }
      ],
      summaryEn: [
        'Programming is creating a clear sequence of instructions for computers to follow.',
        'Computers do not guess — they execute our code with extreme precision.',
        'Programmers solve real-world problems and build games, apps, and robots!'
      ],
      summaryMy: [
        'Programming ဆိုသည်မှာ ကွန်ပျူတာများ လိုက်နာလုပ်ဆောင်ရန် ရှင်းလင်းသော ညွှန်ကြားချက်များ ရေးသားခြင်း ဖြစ်သည်။',
        'ကွန်ပျူတာများသည် အလိုအလျောက် မှန်းဆနိုင်စွမ်း မရှိဘဲ ပေးထားသော Code အတိုင်းသာ တိကျစွာ လုပ်ဆောင်သည်။',
        'Programmer များသည် လူသားတို့၏ ပြဿနာများကို ဖြေရှင်းပေးပြီး ဂိမ်းများ၊ App များနှင့် စက်ရုပ်များကို ဖန်တီးကြသည်။'
      ]
    },

    // -------------------------------------------------------------------------
    // Lesson 2: Algorithms and Instructions
    // -------------------------------------------------------------------------
    {
      id: 'prog-2',
      lessonNumber: 2,
      titleEn: 'Algorithms and Instructions',
      titleMy: 'Algorithms နှင့် ညွှန်ကြားချက်များ',
      shortIntroEn: 'An algorithm is just a fancy word for a step-by-step plan to solve a problem or reach a goal!',
      shortIntroMy: 'Algorithm ဆိုတာ ပြဿနာတစ်ခုကို ဖြေရှင်းဖို့ သို့မဟုတ် ပန်းတိုင်ရောက်ဖို့ အဆင့်ဆင့် ရေးဆွဲထားတဲ့ အစီအစဉ်ကောင်းတစ်ခု ဖြစ်ပါတယ်။',
      learningObjectivesEn: [
        'Define an algorithm in simple words.',
        'Break down everyday tasks into clear, individual steps.',
        'Recognize that a good algorithm is unambiguous and achieves the goal.'
      ],
      learningObjectivesMy: [
        'Algorithm ဆိုသည်ကို ရိုးရှင်းသော စကားလုံးများဖြင့် အဓိပ္ပာယ်ဖွင့်ဆိုနိုင်စေရန်။',
        'နေ့စဉ်လုပ်ငန်းဆောင်တာများကို အဆင့်လိုက် သေးငယ်သော အဆင့်များအဖြစ် ခွဲခြမ်းစိတ်ဖြာနိုင်စေရန်။',
        'ကောင်းမွန်သော Algorithm တစ်ခုသည် ရှင်းလင်းပြီး ပန်းတိုင်ကို အမှန်တကယ် ရောက်ရှိစေကြောင်း သိရှိစေရန်။'
      ],
      explanationEn: [
        'Have you ever followed instructions to fold an origami paper frog or assemble a LEGO spaceship? That step-by-step guide is an algorithm!',
        'In computer science, an **algorithm** is a precise set of rules or instructions designed to solve a specific problem or complete a task from start to finish.',
        'A great algorithm must have three special qualities: 1) It starts at a clear beginning, 2) Each step is simple and impossible to misunderstand, and 3) It successfully reaches an end goal.'
      ],
      explanationMy: [
        'စက္ကူလေယာဉ် ခေါက်ဖူးပါသလား? ဒါမှမဟုတ် LEGO အရုပ် ဆင်ဖူးပါသလား? အဲဒီလို အဆင့်ဆင့် လမ်းညွှန်ချက်စာအုပ်ကို Algorithm လို့ ခေါ်ပါတယ်။',
        'Computer Science မှာ **Algorithm** ဆိုတာ ပြဿနာတစ်ခုကို အစမှ အဆုံးအထိ အောင်မြင်စွာ ဖြေရှင်းဖို့ တိတိကျကျ ရေးဆွဲထားတဲ့ နည်းလမ်းစဉ် ဖြစ်ပါတယ်။',
        'ကောင်းမွန်တဲ့ Algorithm တစ်ခုမှာ အင်္ဂါရပ် (၃) ချက် ရှိရပါမယ်: ၁။ ရှင်းလင်းတဲ့ အစရှိရမယ်၊ ၂။ အဆင့်တိုင်းဟာ မရှင်းမလင်း မဖြစ်ဘဲ ရိုးရှင်းရမယ်၊ ၃။ အဆုံးသတ် ပန်းတိုင်ကို တကယ်ရောက်ရပါမယ်။'
      ],
      diagram: {
        type: 'algorithm-steps-flow',
        captionEn: 'Every algorithm has a Start, a series of precise steps, and a Goal!',
        captionMy: 'Algorithm တိုင်းတွင် အစ (Start)၊ တိကျသော အဆင့်များ (Steps) နှင့် ပန်းတိုင် (Goal) ရှိသည်။',
        altEn: 'Flowchart showing Start box leading to Step 1, Step 2, Step 3, and Finish box',
        altMy: 'အစမှ အဆုံးအထိ အဆင့်ဆင့်ပြသထားသော Flowchart ပုံ'
      },
      analogyEn: {
        title: 'Making a Jam Sandwich',
        description: 'If you ask someone "Make me a sandwich!", a robot might put the entire unopened jar of jam on top of a plastic loaf of bread! A true algorithm says: 1. Take two slices of bread. 2. Open jam jar. 3. Use butter knife to scoop 1 spoon of jam. 4. Spread evenly across one slice. 5. Place second slice on top. Done!'
      },
      analogyMy: {
        title: 'ပေါင်မုန့် ယိုသုတ်စားခြင်း ဥပမာ',
        description: 'စက်ရုပ်ကို "ပေါင်မုန့်ယိုသုတ်ပေးပါ" လို့ ဒီအတိုင်းပြောရင် ယိုပုလင်းကြီးကို ပေါင်မုန့်အိတ်ပေါ် တင်ပေးလိုက်နိုင်ပါတယ်။ Algorithm ကောင်းတစ်ခုကတော့: ၁။ ပေါင်မုန့် ၂ ချပ်ထုတ်ပါ၊ ၂။ ယိုပုလင်း အဖုံးဖွင့်ပါ၊ ၃။ ဓားဖြင့် ယို ၁ ဇွန်းကော်ပါ၊ ၄။ ပေါင်မုန့်ပေါ် ညီညာစွာ သုတ်ပါ၊ ၅။ အခြားပေါင်မုန့် ၁ ချပ် အုပ်ပါ။ ပြီးပါပြီ!'
      },
      workedExampleEn: {
        title: 'Algorithm: Walking to the Playground Gate',
        scenario: 'A friend is standing at the school door and needs directions to the slide.',
        steps: [
          { stepNumber: 1, instruction: 'Step forward 5 paces.', outcome: 'Walks down the paved pathway.' },
          { stepNumber: 2, instruction: 'Turn 90 degrees to the right.', outcome: 'Faces the grass field.' },
          { stepNumber: 3, instruction: 'Step forward 8 paces.', outcome: 'Arrives directly in front of the red playground slide.' }
        ]
      },
      workedExampleMy: {
        title: 'ကစားကွင်းသို့ လျှောက်လှမ်းခြင်း ဥပမာ',
        scenario: 'စာသင်ခန်းတံခါးမှ လျှောစီးစင်ဆီသို့ သွားရန် လမ်းညွှန်ချက် ရေးဆွဲခြင်း။',
        steps: [
          { stepNumber: 1, instruction: 'ရှေ့သို့ ၅ လှမ်း လျှောက်ပါ။', outcome: 'ကျောက်ခင်းလမ်းအတိုင်း ရောက်သွားသည်။' },
          { stepNumber: 2, instruction: 'ညာဘက်သို့ ၉၀ ဒီဂရီ လှည့်ပါ။', outcome: 'မြက်ခင်းပြင်ဘက်သို့ မျက်နှာမူသည်။' },
          { stepNumber: 3, instruction: 'ရှေ့သို့ ၈ လှမ်း လျှောက်ပါ။', outcome: 'အနီရောင် လျှောစီးစင်ရှေ့ တည့်တည့်သို့ ရောက်ရှိသွားသည်။' }
        ]
      },
      activity: {
        type: 'sequence-sorter',
        titleEn: 'Mission: Toothbrushing Algorithm',
        titleMy: 'မစ်ရှင်: သွားတိုက်ခြင်း Algorithm စီစဉ်ပါ',
        instructionsEn: 'Put the morning toothbrushing steps into the logical order!',
        instructionsMy: 'မနက်ခင်း သွားတိုက်ခြင်း အဆင့်များကို ယုတ္တိရှိစွာ စီစဉ်ပေးပါ။',
        initialData: [
          { id: 't3', textEn: 'Brush teeth gently in circles for 2 minutes', textMy: 'သွားများကို ၂ မိနစ်ကြာ ဖြည်းညင်းစွာ တိုက်ပါ' },
          { id: 't1', textEn: 'Pick up toothbrush and wet bristles', textMy: 'သွားပွတ်တံကိုယူပြီး ရေစွတ်ပါ' },
          { id: 't4', textEn: 'Rinse mouth with clean water', textMy: 'ပါးစပ်ကို ရေသန့်ဖြင့် ဆေးကြောပါ' },
          { id: 't2', textEn: 'Squeeze pea-sized toothpaste onto brush', textMy: 'သွားတိုက်ဆေး ပဲစေ့ခန့် ညှစ်ထည့်ပါ' }
        ],
        solution: ['t1', 't2', 't3', 't4']
      },
      quizQuestions: [
        {
          id: 'q2-1',
          questionEn: 'What is an algorithm?',
          questionMy: 'Algorithm ဆိုတာ ဘာလဲ?',
          options: [
            { id: 'a', textEn: 'A step-by-step plan or set of rules to achieve a goal', textMy: 'ပန်းတိုင်ရောက်ရန် အဆင့်ဆင့် ရေးဆွဲထားသော အစီအစဉ်' },
            { id: 'b', textEn: 'A type of computer battery', textMy: 'ကွန်ပျူတာ ဘက်ထရီ အမျိုးအစားတစ်ခု' },
            { id: 'c', textEn: 'A keyboard key that deletes words', textMy: 'စာလုံးဖျက်သည့် ကီးဘုတ်ခလုတ်' },
            { id: 'd', textEn: 'A math test with no answers', textMy: 'အဖြေမရှိသော သင်္ချာမေးခွန်း' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Correct! An algorithm is simply a clear recipe of steps that solves a problem.',
          explanationMy: 'မှန်ကန်ပါတယ်! Algorithm ဆိုတာ ပြဿနာတစ်ခုကို ဖြေရှင်းဖို့ တစ်ဆင့်ချင်း ရေးထားတဲ့ အစီအစဉ် ဖြစ်ပါတယ်။'
        },
        {
          id: 'q2-2',
          questionEn: 'Why do algorithms need to be precise and specific?',
          questionMy: 'Algorithm တွေက ဘာကြောင့် တိကျသေချာဖို့ လိုအပ်တာလဲ?',
          options: [
            { id: 'a', textEn: 'So the computer won’t get confused or make wrong assumptions', textMy: 'ကွန်ပျူတာက ရှုပ်ထွေးမသွားစေရန်နှင့် အမှားမဖြစ်စေရန်' },
            { id: 'b', textEn: 'Because long words look cooler', textMy: 'ရှည်လျားသော စာလုံးများက ပိုမိုက်သောကြောင့်' },
            { id: 'c', textEn: 'So the computer can fall asleep faster', textMy: 'ကွန်ပျူတာ အိပ်ပျော်သွားစေရန်' },
            { id: 'd', textEn: 'It doesn’t matter; computers can read our minds', textMy: 'အရေးမကြီးပါ၊ ကွန်ပျူတာက စိတ်ဖတ်နိုင်သည်' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Spot on! Precision avoids misunderstandings and ensures the computer gets the exact desired result.',
          explanationMy: 'အလွန်မှန်ကန်ပါတယ်! တိကျမှုရှိမှသာ ကွန်ပျူတာက နားလည်ပြီး လိုချင်တဲ့ရလဒ်ကို ရရှိမှာဖြစ်ပါတယ်။'
        },
        {
          id: 'q2-3',
          questionEn: 'Which of these is an example of an algorithm in daily life?',
          questionMy: 'အောက်ပါတို့အနက် မည်သည့်အရာသည် နေ့စဉ်ဘဝထဲက Algorithm တစ်ခုဖြစ်သနည်း?',
          options: [
            { id: 'a', textEn: 'A baking recipe with numbered preparation steps', textMy: 'အမှတ်စဉ်ထိုးထားသော မုန့်ဖုတ်နည်း လမ်းညွှန်ချက်' },
            { id: 'b', textEn: 'A blank sheet of white paper', textMy: 'ဘာမှမရေးထားသော စာရွက်ဖြူတစ်ရွက်' },
            { id: 'c', textEn: 'A cloud floating in the sky', textMy: 'ကောင်းကင်ပေါ်က တိမ်တိုက်တစ်ခု' },
            { id: 'd', textEn: 'A sleeping cat', textMy: 'အိပ်ပျော်နေသော ကြောင်ကလေး' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Yes! Recipes, LEGO manuals, and puzzle guides are all real-world algorithms.',
          explanationMy: 'မှန်ပါတယ်! ချက်ပြုတ်နည်း လမ်းညွှန်တွေ၊ အရုပ်ဆင်တဲ့ အဆင့်တွေဟာ နေ့စဉ်ဘဝထဲက Algorithm တွေပဲ ဖြစ်ပါတယ်။'
        }
      ],
      summaryEn: [
        'An algorithm is a step-by-step procedure for solving a problem.',
        'Algorithms must have clear instructions with no missing steps.',
        'We use algorithms every day when cooking, getting dressed, and playing games!'
      ],
      summaryMy: [
        'Algorithm သည် ပြဿနာတစ်ခုကို ဖြေရှင်းရန် အဆင့်လိုက် စနစ်တကျ ရေးဆွဲထားသော နည်းလမ်းဖြစ်သည်။',
        'ညွှန်ကြားချက်များ မပြတ်တောက်ဘဲ ရှင်းလင်းတိကျရမည်။',
        'နေ့စဉ်ဘဝတွင် မုန့်ဖုတ်ခြင်း၊ အဝတ်လဲခြင်းနှင့် ကစားခြင်းတို့တွင် Algorithm များကို သုံးစွဲနေကြသည်။'
      ]
    },

    // -------------------------------------------------------------------------
    // Lesson 3: Sequence and Ordering Steps
    // -------------------------------------------------------------------------
    {
      id: 'prog-3',
      lessonNumber: 3,
      titleEn: 'Sequence and Ordering Steps',
      titleMy: 'Sequence နှင့် အစီအစဉ်ကျနမှု',
      shortIntroEn: 'Order matters! Doing the right things in the wrong order can lead to hilarious or messy mistakes.',
      shortIntroMy: 'အစီအစဉ် မှန်ကန်ဖို့ အလွန်အရေးကြီးပါတယ်! အဆင့်တွေ မှားယွင်းသွားရင် ရလဒ်တွေ ကမောက်ကမ ဖြစ်သွားနိုင်ပါတယ်။',
      learningObjectivesEn: [
        'Explain why sequence is essential in computer programming.',
        'Predict what happens when program instructions are swapped.',
        'Debug a simple sequence error in an algorithm.'
      ],
      learningObjectivesMy: [
        'Programming တွင် Sequence (အစီအစဉ်တကျဖြစ်မှု) အဘယ်ကြောင့် အရေးကြီးသည်ကို ရှင်းပြနိုင်စေရန်။',
        'ညွှန်ကြားချက်များ နေရာမှားယွင်းပါက မည်သို့ဖြစ်မည်ကို ကြိုတင်ခန့်မှန်းနိုင်စေရန်။',
        'ရိုးရှင်းသော Sequence အမှားများကို စစ်ဆေးပြင်ဆင်နိုင်စေရန်။'
      ],
      explanationEn: [
        'In programming, **sequence** means executing instructions one after another, from the very top line to the very bottom line.',
        'Computers do not jump around randomly. They start with Step 1, finish it completely, then proceed to Step 2, then Step 3. If you switch the order of Step 1 and Step 3, the entire program might break!',
        'Think about getting dressed in the morning: What happens if you put on your shoes BEFORE your socks? You will end up with socks stretched over your shoes! The actions were both good, but the sequence was wrong.'
      ],
      explanationMy: [
        'Programming မှာ **Sequence** ဆိုတာ ညွှန်ကြားချက်တွေကို အထက်မှ အောက်သို့ တစ်ဆင့်ပြီးတစ်ဆင့် အစဉ်လိုက် လုပ်ဆောင်သွားခြင်းကို ဆိုလိုပါတယ်။',
        'ကွန်ပျူတာတွေဟာ ဟိုကျော်ဒီကျော် မလုပ်ပါဘူး။ အဆင့် ၁ ကို ပြီးအောင်လုပ်တယ်၊ ပြီးမှ အဆင့် ၂၊ ပြီးမှ အဆင့် ၃ ကို ဆက်လုပ်ပါတယ်။ အကယ်၍ နေရာလွဲသွားရင် တစ်ခုလုံး မှားယွင်းသွားနိုင်ပါတယ်။',
        'မနက်ခင်း ဖိနပ်စီးတာကို စဉ်းစားကြည့်ပါ: ခြေအိတ် မစွပ်ခင် ဖိနပ်ကို အရင်စီးလိုက်ရင် ဘာဖြစ်မလဲ? ဖိနပ်အပေါ်ကမှ ခြေအိတ်စွပ်ရသလို ဟာသဖြစ်သွားမှာပါ။ လုပ်ဆောင်ချက် မှန်ပေမဲ့ အစီအစဉ် မှားသွားလို့ ဖြစ်ပါတယ်။'
      ],
      diagram: {
        type: 'sequence-order-visual',
        captionEn: 'Line 1 executes first, then Line 2, then Line 3. Order is everything!',
        captionMy: 'လိုင်း ၁ ကို အရင်လုပ်တယ်၊ ပြီးမှ လိုင်း ၂၊ ပြီးမှ လိုင်း ၃။ အစီအစဉ်က အဓိကပါ!',
        altEn: 'Illustration showing lines of code numbered 1, 2, 3 executed sequentially downward with arrows',
        altMy: 'အထက်မှအောက်သို့ မြှားများဖြင့် တစ်ဆင့်ချင်း ဆင်းသွားပုံပြ ပုံ'
      },
      analogyEn: {
        title: 'Socks Before Shoes',
        description: 'You cannot put your shoes on first and your socks on second. Similarly, you cannot bake a cake before you mix the batter, and a robot cannot pick up a star before it walks over to the star!'
      },
      analogyMy: {
        title: 'ဖိနပ်နှင့် ခြေအိတ် ဥပမာ',
        description: 'ခြေအိတ်မစွပ်ဘဲ ဖိနပ်အရင်စီး၍ မရသလို၊ မုန့်နှစ်မမွှေဘဲ မုန့်ဖုတ်၍ မရပါ။ စက်ရုပ်သည်လည်း ကြယ်ဆီသို့ မရောက်ဘဲ ကြယ်ကို ကောက်ယူ၍ မရနိုင်ပါ။'
      },
      workedExampleEn: {
        title: 'Drawing a House on the Screen',
        scenario: 'We want the computer to draw a blue square house with a red triangle roof on top.',
        steps: [
          { stepNumber: 1, instruction: 'Draw.Square("blue")', outcome: 'Blue square body appears on canvas.' },
          { stepNumber: 2, instruction: 'MovePenTo(top_of_square)', outcome: 'Drawing pen moves to the top edge.' },
          { stepNumber: 3, instruction: 'Draw.Triangle("red")', outcome: 'Red roof rests snugly on top of the walls. Perfect!' }
        ]
      },
      workedExampleMy: {
        title: 'အိမ်ပုံဆွဲခြင်း ဥပမာ',
        scenario: 'အပြာရောင် လေးထောင့်အိမ်ပေါ်တွင် အနီရောင် တြိဂံခေါင်မိုး တင်ဆွဲပါမည်။',
        steps: [
          { stepNumber: 1, instruction: 'Draw.Square("blue")', outcome: 'အပြာရောင် လေးထောင့် အိမ်ကိုယ်ထည် ပေါ်လာသည်။' },
          { stepNumber: 2, instruction: 'MovePenTo(top_of_square)', outcome: 'ခဲတံသည် အိမ်အပေါ်ဘက် အစွန်းသို့ ရွှေ့သွားသည်။' },
          { stepNumber: 3, instruction: 'Draw.Triangle("red")', outcome: 'အနီရောင် ခေါင်မိုးလေး အိမ်ပေါ်သို့ အံဝင်ခွင်ကျ ရောက်သွားသည်။' }
        ]
      },
      activity: {
        type: 'sequence-sorter',
        titleEn: 'Mission: Plant a Flower Seed',
        titleMy: 'မစ်ရှင်: ပန်းပင် စိုက်ပျိုးခြင်း အစီအစဉ်',
        instructionsEn: 'Arrange the gardening steps in the correct chronological sequence!',
        instructionsMy: 'ပန်းပင် စိုက်ပျိုးသည့် အဆင့်များကို အချိန်နှင့်အမျှ မှန်ကန်စွာ စီတန်းပါ။',
        initialData: [
          { id: 'f2', textEn: 'Place the flower seed in the hole', textMy: 'အစေ့ကို တွင်းထဲသို့ ထည့်ပါ' },
          { id: 'f4', textEn: 'Place the pot in warm sunlight', textMy: 'နေရောင်ရရှိသော နေရာတွင် ထားပါ' },
          { id: 'f1', textEn: 'Dig a small hole in moist soil', textMy: 'မြေဆီလွှာတွင် တွင်းငယ်လေး တူးပါ' },
          { id: 'f3', textEn: 'Cover with soil and water gently', textMy: 'မြေပြန်ဖုံးပြီး ရေအသာအယာ လောင်းပါ' }
        ],
        solution: ['f1', 'f2', 'f3', 'f4']
      },
      quizQuestions: [
        {
          id: 'q3-1',
          questionEn: 'In what direction do computer programs normally read instructions?',
          questionMy: 'ကွန်ပျူတာ ပရိုဂရမ်များသည် ညွှန်ကြားချက်များကို ပုံမှန်အားဖြင့် မည်သို့ဖတ်သနည်း?',
          options: [
            { id: 'a', textEn: 'From top to bottom, one step at a time', textMy: 'အထက်မှ အောက်သို့ တစ်ဆင့်ပြီးတစ်ဆင့်' },
            { id: 'b', textEn: 'From bottom to top backward', textMy: 'အောက်မှ အထက်သို့ နောက်ပြန်' },
            { id: 'c', textEn: 'Randomly jumping anywhere it likes', textMy: 'ကြိုက်သည့်နေရာသို့ ကျပန်း ခုန်ကူးဖတ်သည်' },
            { id: 'd', textEn: 'All lines simultaneously at the exact same millisecond', textMy: 'လိုင်းအားလုံးကို တစ်ပြိုင်နက်တည်း' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Correct! Computers execute instructions in sequence from line 1 downward.',
          explanationMy: 'မှန်ကန်ပါတယ်! ကွန်ပျူတာများသည် အထက်မှ အောက်သို့ တစ်ဆင့်ပြီးတစ်ဆင့် အစီအစဉ်အတိုင်း လုပ်ဆောင်သည်။'
        },
        {
          id: 'q3-2',
          questionEn: 'What is it called when program steps are in the wrong order?',
          questionMy: 'ပရိုဂရမ် အဆင့်များ အစီအစဉ် မှားယွင်းနေခြင်းကို အဘယ်သို့ ခေါ်သနည်း?',
          options: [
            { id: 'a', textEn: 'A sequence bug or logic error', textMy: 'Sequence အမှား သို့မဟုတ် Logic Error' },
            { id: 'b', textEn: 'A battery explosion', textMy: 'ဘက်ထရီ ပေါက်ကွဲခြင်း' },
            { id: 'c', textEn: 'A super upgrade', textMy: 'အဆင့်မြင့် အဆင့်မြှင့်တင်မှု' },
            { id: 'd', textEn: 'A wireless signal', textMy: 'ကြိုးမဲ့ အချက်ပြမှု' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Yes! A sequence error is a common bug where all the steps are valid, but placed in the wrong order.',
          explanationMy: 'မှန်ပါတယ်! အဆင့်တွေ မှန်သော်လည်း နေရာလွဲမှားနေခြင်းကို Sequence Bug ဟု ခေါ်ပါသည်။'
        },
        {
          id: 'q3-3',
          questionEn: 'If a robot has instructions: [1. Open Door, 2. Walk Through, 3. Close Door], what happens if we move Step 2 before Step 1?',
          questionMy: 'စက်ရုပ်တွင် [၁။ တံခါးဖွင့်, ၂။ ဖြတ်လျှောက်, ၃။ တံခါးပိတ်] ဟုရှိရာ အဆင့် ၂ ကို အဆင့် ၁ ရှေ့ထားလိုက်လျှင် ဘာဖြစ်မည်နည်း?',
          options: [
            { id: 'a', textEn: 'The robot bumps directly into the closed door!', textMy: 'စက်ရုပ်သည် ပိတ်ထားသော တံခါးနှင့် တိုက်မိသွားမည်!' },
            { id: 'b', textEn: 'The robot teleports through the wall', textMy: 'စက်ရုပ်သည် နံရံကို ဖောက်ထွက်သွားမည်' },
            { id: 'c', textEn: 'The door turns into water', textMy: 'တံခါးသည် ရေဖြစ်သွားမည်' },
            { id: 'd', textEn: 'The robot grows taller', textMy: 'စက်ရုပ် အရပ်ရှည်သွားမည်' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Exactly! Walking before opening the door results in a crash because sequence was ignored.',
          explanationMy: 'မှန်ပါတယ်! တံခါးမဖွင့်ဘဲ အရင်လျှောက်ပါက တံခါးနှင့် တိုက်မိမည်ဖြစ်သည်။'
        }
      ],
      summaryEn: [
        'Sequence is the chronological order in which code instructions run.',
        'Computers follow instructions strictly line by line.',
        'Swapping instructions can cause bugs, so always test your step order!'
      ],
      summaryMy: [
        'Sequence ဆိုသည်မှာ ညွှန်ကြားချက်များ ဆင့်ကဲလုပ်ဆောင်သော အစီအစဉ်ဖြစ်သည်။',
        'ကွန်ပျူတာများသည် တစ်ကြောင်းချင်း အတိအကျ လိုက်နာသည်။',
        'အစီအစဉ် မှားယွင်းပါက Error ဖြစ်နိုင်သဖြင့် အဆင့်များကို အမြဲပြန်လည်စစ်ဆေးပါ။'
      ]
    },

    // -------------------------------------------------------------------------
    // Lesson 4: Events and Actions
    // -------------------------------------------------------------------------
    {
      id: 'prog-4',
      lessonNumber: 4,
      titleEn: 'Events and Actions',
      titleMy: 'Events (ဖြစ်ရပ်များ) နှင့် Actions (တုံ့ပြန်မှုများ)',
      shortIntroEn: 'How does a video game know when you press the spacebar to jump? Through the magic of Events!',
      shortIntroMy: 'ဂိမ်းဆော့တဲ့အခါ ခလုတ်နှိပ်လိုက်တာနဲ့ ဇာတ်ကောင် ခုန်တက်သွားအောင် ဘယ်လိုလုပ်ထားသလဲ? Events တွေရဲ့ စွမ်းအားကြောင့်ပါ!',
      learningObjectivesEn: [
        'Understand what an "event" is in software (a trigger or signal).',
        'Understand what an "action" or "event handler" does in response.',
        'Recognize common user events like clicks, keypresses, and timer ticks.'
      ],
      learningObjectivesMy: [
        'Software ထဲရှိ "Event" (အစပျိုးဖြစ်ရပ် သို့မဟုတ် အချက်ပြမှု) ဆိုသည်ကို နားလည်စေရန်။',
        'တုံ့ပြန်လုပ်ဆောင်သော "Action" သို့မဟုတ် "Event Handler" ၏ အလုပ်လုပ်ပုံကို သိရှိစေရန်။',
        'Click နှိပ်ခြင်း၊ ခလုတ်နှိပ်ခြင်း၊ အချိန်ပြည့်ခြင်း စသော အဖြစ်များသည့် Event များကို ခွဲခြားသိမြင်စေရန်။'
      ],
      explanationEn: [
        'Imagine you are waiting at home for the delivery person. You don’t stand with your eyes glued to the door for five hours. Instead, you wait until you hear the doorbell ring: *DING DONG!* That sound is an **Event**. When you hear it, you take an **Action**: you walk to the door and open it.',
        'In computer science, an **Event** is an action that happens from the outside world — like clicking a button with your mouse, tapping a phone screen, or pressing an arrow key on your keyboard.',
        'An **Event Handler** is the special block of code that waits patiently for that event to occur, and instantly runs the corresponding action! This is what makes websites and games interactive.'
      ],
      explanationMy: [
        'အိမ်မှာ ပါဆယ်ပို့သမားကို စောင့်နေတယ်ဆိုပါစို့။ တံခါးကို မျက်တောင်မခတ် ကြည့်နေစရာမလိုဘဲ လူခေါ်ခေါင်းလောင်းသံ *တီးတောင်!* ကြားမှ တံခါးသွားဖွင့်ပါမယ်။ ဒီနေရာမှာ ခေါင်းလောင်းသံဟာ **Event (ဖြစ်ရပ်)** ဖြစ်ပြီး၊ တံခါးသွားဖွင့်ခြင်းဟာ **Action (တုံ့ပြန်မှု)** ဖြစ်ပါတယ်။',
        'ကွန်ပျူတာမှာလည်း အသုံးပြုသူက Mouse ဖြင့် နှိပ်ခြင်း၊ ဖုန်း Screen ကို ထိခြင်း၊ Keyboard ကီးနှိပ်ခြင်းတို့ကို **Event** လို့ ခေါ်ပါတယ်။',
        'အဲဒီ Event ဖြစ်လာရင် ဘာလုပ်ရမလဲဆိုတာကို စောင့်ကြည့်လုပ်ဆောင်ပေးတဲ့ Code ကို **Event Handler** လို့ ခေါ်ပါတယ်။ ဒါကြောင့် ဂိမ်းတွေနဲ့ Website တွေက ကျွန်ုပ်တို့ ခလုတ်နှိပ်တိုင်း တုံ့ပြန်လုပ်ဆောင်ပေးနိုင်တာ ဖြစ်ပါတယ်။'
      ],
      diagram: {
        type: 'event-action-pair',
        captionEn: 'When the Green Flag is clicked (Event), Play Music & Jump (Actions)!',
        captionMy: 'အလံစိမ်းကို နှိပ်လိုက်သောအခါ (Event) သီချင်းဖွင့်ပြီး ခုန်ပါ (Actions)!',
        altEn: 'Diagram showing Event trigger connected by lightning bolt to Action response blocks',
        altMy: 'Event မှ Action သို့ ဆက်သွယ်ပြသထားသော ပုံ'
      },
      analogyEn: {
        title: 'Light Switch in Your Bedroom',
        description: 'Flipping the light switch ON is the event. The electricity rushing through and illuminating the bulb is the action. The bulb doesn’t turn on by itself; it waits for the switch event!'
      },
      analogyMy: {
        title: 'မီးခလုတ် ဥပမာ',
        description: 'အခန်းထဲက မီးခလုတ်ကို ဖွင့်လိုက်ခြင်းသည် Event ဖြစ်သည်။ မီးသီးလင်းလာခြင်းသည် Action ဖြစ်သည်။ မီးသီးသည် အလိုအလျောက် မလင်းဘဲ ခလုတ်နှိပ်သည့် Event ကို စောင့်ဆိုင်းနေခြင်း ဖြစ်သည်။'
      },
      workedExampleEn: {
        title: 'Spacebar Jump in a Platformer Game',
        scenario: 'We want our hero, AstroCat, to leap whenever the player presses the Spacebar.',
        steps: [
          { stepNumber: 1, instruction: 'ListenFor("keydown")', outcome: 'The computer is alert, monitoring keyboard signals.' },
          { stepNumber: 2, instruction: 'If (key === "Spacebar")', outcome: 'The player taps the spacebar.' },
          { stepNumber: 3, instruction: 'AstroCat.PlaySound("boing")', outcome: 'A lively bouncy sound effect plays.' },
          { stepNumber: 4, instruction: 'AstroCat.Jump(height: 100)', outcome: 'AstroCat launches into the air over the obstacle!' }
        ]
      },
      workedExampleMy: {
        title: 'ဂိမ်းထဲတွင် Spacebar နှိပ်၍ ခုန်ခြင်း ဥပမာ',
        scenario: 'ကစားသူက Spacebar နှိပ်လိုက်တိုင်း ဇာတ်ကောင် ခုန်တက်စေရန် Code ရေးခြင်း။',
        steps: [
          { stepNumber: 1, instruction: 'ListenFor("keydown")', outcome: 'ကွန်ပျူတာသည် ကီးဘုတ်ခလုတ် နှိပ်မည့်အချိန်ကို စောင့်ကြည့်နေသည်။' },
          { stepNumber: 2, instruction: 'If (key === "Spacebar")', outcome: 'ကစားသူက Spacebar ကို နှိပ်လိုက်သည်။' },
          { stepNumber: 3, instruction: 'AstroCat.PlaySound("boing")', outcome: 'ခုန်သံ အသံထွက်လာသည်။' },
          { stepNumber: 4, instruction: 'AstroCat.Jump(height: 100)', outcome: 'ဇာတ်ကောင်သည် အတားအဆီးပေါ်မှ ခုန်ကျော်သွားသည်။' }
        ]
      },
      activity: {
        type: 'condition-tester',
        titleEn: 'Interactive Event Matcher',
        titleMy: 'Event နှင့် Action တွဲစပ်ခြင်း ကစားနည်း',
        instructionsEn: 'Match each Event with the proper Action response!',
        instructionsMy: 'ဖြစ်ပေါ်လာသော Event တစ်ခုစီအတွက် သင့်တော်သော Action ကို ရွေးချယ်တွဲစပ်ပါ။',
        initialData: [
          { event: 'Click "Mute Sound" Button', action: 'Set volume to 0 (Silence)' },
          { event: 'Battery reaches 5%', action: 'Show "Please recharge" popup' },
          { event: 'Press Right Arrow key', action: 'Move player 10 steps East' }
        ]
      },
      quizQuestions: [
        {
          id: 'q4-1',
          questionEn: 'In programming, what is an "Event"?',
          questionMy: 'Programming တွင် "Event" ဆိုသည်မှာ အဘယ်နည်း?',
          options: [
            { id: 'a', textEn: 'A signal or action triggered by user interaction or system change', textMy: 'အသုံးပြုသူ သို့မဟုတ် စနစ်ကြောင့် ဖြစ်ပေါ်လာသော အချက်ပြမှု/ဖြစ်ရပ်' },
            { id: 'b', textEn: 'A broken screen that cannot be fixed', textMy: 'ပြင်မရတော့သော ကျိုးနေသည့် မျက်နှာပြင်' },
            { id: 'c', textEn: 'The price of a computer mouse', textMy: 'ကွန်ပျူတာ mouse ၏ ဈေးနှုန်း' },
            { id: 'd', textEn: 'A piece of paper inside the printer', textMy: 'ပရင်တာထဲရှိ စာရွက်' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Correct! Events are signals like clicks, keypresses, and timer alarms that trigger code to run.',
          explanationMy: 'မှန်ကန်ပါတယ်! Mouse click နှိပ်ခြင်း၊ ကီးဘုတ်နှိပ်ခြင်း စသည့် အချက်ပြမှုများကို Event ဟု ခေါ်ပါသည်။'
        },
        {
          id: 'q4-2',
          questionEn: 'What is the job of an "Event Handler"?',
          questionMy: '"Event Handler" ၏ တာဝန်မှာ အဘယ်နည်း?',
          options: [
            { id: 'a', textEn: 'To wait for an event and execute the corresponding action', textMy: 'Event ဖြစ်ပေါ်လာသည်ကို စောင့်ဆိုင်းပြီး သတ်မှတ်ထားသော Action ကို လုပ်ဆောင်ရန်' },
            { id: 'b', textEn: 'To turn off the computer completely', textMy: 'ကွန်ပျူတာကို လုံးဝ ပိတ်ပစ်ရန်' },
            { id: 'c', textEn: 'To wash the computer with soap', textMy: 'ကွန်ပျူတာကို ဆပ်ပြာဖြင့် ဆေးကြောရန်' },
            { id: 'd', textEn: 'To change the color of the room walls', textMy: 'အခန်းနံရံဆေးရောင် ပြောင်းပစ်ရန်' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Spot on! The handler runs the code you specified whenever the event fires.',
          explanationMy: 'အလွန်မှန်ကန်ပါတယ်! Event ဖြစ်လာသည်နှင့် သတ်မှတ်ထားသော Code ကို ပြေးဆွဲပေးပါသည်။'
        },
        {
          id: 'q4-3',
          questionEn: 'Which of the following is NOT a user event?',
          questionMy: 'အောက်ပါတို့အနက် မည်သည့်အရာသည် User Event မဟုတ်သနည်း?',
          options: [
            { id: 'a', textEn: 'Tapping a touchscreen icon', textMy: 'Touchscreen ပေါ်ရှိ အိုင်ကွန်ကို လက်ဖြင့်တို့ထိခြင်း' },
            { id: 'b', textEn: 'Pressing the Enter key on a keyboard', textMy: 'ကီးဘုတ်ပေါ်မှ Enter ခလုတ်ကို နှိပ်ခြင်း' },
            { id: 'c', textEn: 'The sun setting in the evening sky', textMy: 'ညနေခင်းတွင် နေဝင်သွားခြင်း' },
            { id: 'd', textEn: 'Clicking a blue Submit button with a mouse', textMy: 'Mouse ဖြင့် Submit ခလုတ်ကို နှိပ်ခြင်း' }
          ],
          correctOptionId: 'c',
          explanationEn: 'Right! The sun setting is a natural event in the real world, not a computer input event.',
          explanationMy: 'မှန်ပါတယ်! နေဝင်ခြင်းသည် သဘာဝဖြစ်ရပ်ဖြစ်ပြီး ကွန်ပျူတာ Input Event မဟုတ်ပါ။'
        }
      ],
      summaryEn: [
        'An event is a trigger like a click, keypress, or timer alarm.',
        'An event handler is code that responds when an event happens.',
        'Events make programs interactive, lively, and responsive to user input.'
      ],
      summaryMy: [
        'Event ဆိုသည်မှာ Click နှိပ်ခြင်း၊ ကီးနှိပ်ခြင်း စသည့် အစပျိုး အချက်ပြမှုဖြစ်သည်။',
        'Event Handler သည် Event ဖြစ်လာပါက တုံ့ပြန်လုပ်ဆောင်ပေးသော Code ဖြစ်သည်။',
        'Events များက ဂိမ်းများနှင့် Website များကို လူသားတို့နှင့် အပြန်အလှန် ချိတ်ဆက်ပေးသည်။'
      ]
    },

    // -------------------------------------------------------------------------
    // Lesson 5: Loops and Repetition
    // -------------------------------------------------------------------------
    {
      id: 'prog-5',
      lessonNumber: 5,
      titleEn: 'Loops and Repetition',
      titleMy: 'Loops (ထပ်ခါတလဲလဲ ပြုလုပ်ခြင်း)',
      shortIntroEn: 'Why write the same instruction 100 times when you can just use a loop? Work smarter, not harder!',
      shortIntroMy: 'ညွှန်ကြားချက်တစ်ခုတည်းကို အကြိမ် ၁၀၀ ရေးမယ့်အစား Loop တစ်ခု သုံးလိုက်ရင် စက္ကန့်ပိုင်းနဲ့ ပြီးသွားနိုင်ပါတယ်!',
      learningObjectivesEn: [
        'Explain why repetition is a computer superpower.',
        'Understand count-controlled loops (e.g., Repeat 4 times).',
        'Understand condition-controlled loops (e.g., Repeat until goal reached).'
      ],
      learningObjectivesMy: [
        'ထပ်ခါတလဲလဲ အလုပ်လုပ်နိုင်ခြင်းသည် ကွန်ပျူတာ၏ ထူးခြားသော စွမ်းအားဖြစ်ကြောင်း နားလည်စေရန်။',
        'အကြိမ်အရေအတွက် သတ်မှတ်ထားသော Count Loop များကို သဘောပေါက်စေရန်။',
        'အခြေအနေအရ ဆက်လက်လုပ်ဆောင်သော Condition Loop များကို နားလည်စေရန်။'
      ],
      explanationEn: [
        'Imagine your teacher asked you to write "I love coding" 1,000 times on a chalkboard. Your hand would get tired and sore! But a computer never gets tired, bored, or distracted.',
        'In programming, a **loop** is a tool that repeats a block of code over and over again until a specific condition is met or a set count is reached.',
        'There are two main types of loops in beginner programming: **Repeat N Times** (like "jump 5 times") and **Repeat Until** (like "keep walking until you touch the finish line"). Using loops makes your code short, clean, and powerful!'
      ],
      explanationMy: [
        'ကျောက်သင်ပုန်းပေါ်မှာ "I love coding" လို့ အကြိမ် ၁၀၀၀ ရေးခိုင်းရင် လက်ညောင်းသွားမှာပါ။ ဒါပေမဲ့ ကွန်ပျူတာတွေဟာ ဘယ်တော့မှ မမောပန်းသလို စိတ်ပျက်မသွားပါဘူး။',
        'Programming မှာ **Loop** ဆိုတာ ညွှန်ကြားချက်တစ်ခုကို အလိုရှိသော အကြိမ်အရေအတွက်အထိ ထပ်ခါတလဲလဲ အလိုအလျောက် ပြုလုပ်ပေးတဲ့ နည်းလမ်းဖြစ်ပါတယ်။',
        'အဓိက Loop (၂) မျိုးရှိပါတယ်: **အကြိမ်ရေသတ်မှတ် Loop** (ဥပမာ "၅ ကြိမ် ခုန်ပါ") နှင့် **ပန်းတိုင်ရောက်သည်အထိ Loop** (ဥပမာ "ပန်းတိုင်မရောက်မချင်း ရှေ့သို့ ဆက်လျှောက်ပါ") တို့ ဖြစ်ကြပါတယ်။'
      ],
      diagram: {
        type: 'loop-circle-flow',
        captionEn: 'Inside a loop, the computer circles back and repeats until the count is done!',
        captionMy: 'Loop ထဲတွင် သတ်မှတ်အကြိမ်ရေ မပြည့်မချင်း စက်ဝိုင်းပုံ ပြန်လည်ပတ်နေသည်!',
        altEn: 'Circular flowchart showing Repeat block executing actions, updating counter, and looping back',
        altMy: 'Loop ပတ်လည်လည်ပတ်ပုံပြ Flowchart'
      },
      analogyEn: {
        title: 'Dance Choreography Routine',
        description: 'Think of a dance instructor saying: "Repeat: Clap right, Clap left, Spin around — 4 times!" Instead of writing that sentence out 4 separate times on the paper, the dancer just listens to the loop instruction and grooves!'
      },
      analogyMy: {
        title: 'အကလေ့ကျင့်ခန်း ဥပမာ',
        description: 'အကဆရာက "လက်ခုပ်ညာတီး၊ လက်ခုပ်ဘယ်တီး၊ တစ်ပတ်လှည့် — ၄ ကြိမ်လုပ်မယ်!" လို့ ပြောသလိုပါပဲ။ တစ်ကြောင်းချင်း ၄ ခါ ပြောမယ့်အစား ၄ ကြိမ် ထပ်လုပ်ခိုင်းလိုက်တာ ဖြစ်ပါတယ်။'
      },
      workedExampleEn: {
        title: 'Drawing a Square with a Loop',
        scenario: 'A square has 4 equal sides. Let us draw it using a repeat loop.',
        steps: [
          { stepNumber: 1, instruction: 'Repeat 4 times:', outcome: 'The computer prepares to loop 4 times.' },
          { stepNumber: 2, instruction: '   MoveForward(100 pixels)', outcome: 'Draws one straight wall.' },
          { stepNumber: 3, instruction: '   TurnRight(90 degrees)', outcome: 'Turns the pen to face the next wall.' },
          { stepNumber: 4, instruction: 'Loop completes 4 rounds', outcome: 'All 4 corners meet neatly to form a perfect square!' }
        ]
      },
      workedExampleMy: {
        title: 'Loop အသုံးပြု၍ လေးထောင့်ပုံ ဆွဲခြင်း ဥပမာ',
        scenario: 'လေးထောင့်ကွက်တစ်ခုတွင် ညီမျှသောအနား ၄ ခု ရှိရာ Loop ဖြင့် အလွယ်တကူ ဆွဲပါမည်။',
        steps: [
          { stepNumber: 1, instruction: '၄ ကြိမ် ထပ်လုပ်ပါ:', outcome: 'ကွန်ပျူတာသည် ၄ ကြိမ် ပတ်ရန် ပြင်ဆင်သည်။' },
          { stepNumber: 2, instruction: '   ရှေ့သို့ ၁၀၀ လျှောက်ပါ', outcome: 'မျဉ်းဖြောင့် အနားတစ်ဖက် ဆွဲလိုက်သည်။' },
          { stepNumber: 3, instruction: '   ညာဘက်သို့ ၉၀ ဒီဂရီ လှည့်ပါ', outcome: 'နောက်အနားဆီသို့ မျက်နှာမူလိုက်သည်။' },
          { stepNumber: 4, instruction: '၄ ကြိမ် ပြည့်သွားသည်', outcome: 'အနား ၄ ဖက်စလုံး ဆက်စပ်သွားပြီး လှပသော လေးထောင့်ကွက် ဖြစ်လာသည်။' }
        ]
      },
      activity: {
        type: 'loop-counter',
        titleEn: 'Loop Savings Calculator',
        titleMy: 'Loop ဖြင့် အချိန်နှင့် Code ချွေတာခြင်း',
        instructionsEn: 'See how many lines of code a loop saves when moving Byte across a 10-step grid!',
        instructionsMy: 'အဆင့် ၁၀ လှမ်း လျှောက်ရာတွင် Loop သုံးခြင်းဖြင့် Code လိုင်းမည်မျှ သက်သာသွားသည်ကို စမ်းသပ်ကြည့်ပါ။',
        initialData: { totalSteps: 10, withoutLoopLines: 10, withLoopLines: 2 }
      },
      quizQuestions: [
        {
          id: 'q5-1',
          questionEn: 'Why do programmers use loops in their code?',
          questionMy: 'Programmer များသည် Code ထဲတွင် Loop များကို အဘယ်ကြောင့် အသုံးပြုကြသနည်း?',
          options: [
            { id: 'a', textEn: 'To repeat actions cleanly without writing the same code over and over', textMy: 'စာကြောင်းများ ထပ်ခါထပ်ခါ မရေးရဘဲ လုပ်ဆောင်ချက်များကို သပ်ရပ်စွာ ထပ်ကျော့နိုင်ရန်' },
            { id: 'b', textEn: 'To make the computer screen turn purple', textMy: 'ကွန်ပျူတာ မျက်နှာပြင် ခရမ်းရောင်ပြောင်းသွားစေရန်' },
            { id: 'c', textEn: 'To erase all files permanently', textMy: 'ဖိုင်အားလုံးကို အပြီးတိုင် ဖျက်ပစ်ရန်' },
            { id: 'd', textEn: 'Because computers cannot count higher than 2', textMy: 'ကွန်ပျူတာသည် ၂ ထက်ပို၍ မရေတွက်နိုင်သောကြောင့်' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Correct! Loops eliminate redundant code and make programs cleaner and easier to maintain.',
          explanationMy: 'မှန်ကန်ပါတယ်! Loop များသည် Code များကို တိုတိုရှင်းရှင်းနှင့် ထိရောက်စွာ ရေးသားနိုင်စေပါသည်။'
        },
        {
          id: 'q5-2',
          questionEn: 'If a loop says "Repeat 3 times: [Wave, Jump]", how many total Jumps happen?',
          questionMy: '"၃ ကြိမ် ထပ်လုပ်ပါ: [လက်ပြပါ, ခုန်ပါ]" ဟု ရေးထားပါက စုစုပေါင်း ခုန်ခြင်း မည်မျှ ဖြစ်ပေါ်မည်နည်း?',
          options: [
            { id: 'a', textEn: '3 jumps', textMy: '၃ ကြိမ်' },
            { id: 'b', textEn: '1 jump', textMy: '၁ ကြိမ်' },
            { id: 'c', textEn: '6 jumps', textMy: '၆ ကြိမ်' },
            { id: 'd', textEn: '0 jumps', textMy: '၀ ကြိမ်' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Spot on! The block inside runs exactly 3 times, producing 3 waves and 3 jumps.',
          explanationMy: 'မှန်ပါတယ်! အတွင်းရှိ ညွှန်ကြားချက်သည် ၃ ကြိမ်တိတိ အလုပ်လုပ်သဖြင့် ၃ ကြိမ် ခုန်ပါမည်။'
        },
        {
          id: 'q5-3',
          questionEn: 'What danger can happen if a loop never reaches its stop condition?',
          questionMy: 'Loop တစ်ခုသည် ရပ်တန့်ရမည့် အခြေအနေသို့ မရောက်နိုင်ပါက မည်သည့်အန္တရာယ် ဖြစ်နိုင်သနည်း?',
          options: [
            { id: 'a', textEn: 'An infinite loop that freezes or crashes the program', textMy: 'မရပ်မနား အဆုံးမရှိ လည်ပတ်နေပြီး Program ရပ်တန့်သွားနိုင်သည် (Infinite Loop)' },
            { id: 'b', textEn: 'The computer prints out real dollar bills', textMy: 'ကွန်ပျူတာမှ ငွေစက္ကူများ ပရင့်ထုတ်ပေးမည်' },
            { id: 'c', textEn: 'The mouse turns into a pet hamster', textMy: 'Mouse သည် ကြွက်ကလေး အစစ်ဖြစ်သွားမည်' },
            { id: 'd', textEn: 'Nothing happens at all', textMy: 'ဘာမှ မဖြစ်ပါ' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Yes! An infinite loop runs forever, so coders always make sure loops have a safe exit condition.',
          explanationMy: 'မှန်ပါတယ်! မရပ်မနား လည်နေသော Infinite Loop ဖြစ်သွားပါက စက်ဟန်းသွားနိုင်သဖြင့် ရပ်မည့်အခြေအနေ အမြဲထည့်ပေးရပါသည်။'
        }
      ],
      summaryEn: [
        'Loops allow computers to repeat instructions effortlessly.',
        'Repeat Count loops run for a specific number of turns.',
        'Repeat Until loops keep going until their goal condition becomes true.'
      ],
      summaryMy: [
        'Loop များသည် ကွန်ပျူတာကို အလုပ်များကို မမောမပန်း အလိုအလျောက် ထပ်ခါတလဲလဲ လုပ်ဆောင်စေသည်။',
        'အကြိမ်ရေသတ်မှတ် Loop သည် သတ်မှတ်ထားသော အကြိမ်အတိုင်း အတိအကျ ပတ်သည်။',
        'အခြေအနေသတ်မှတ် Loop သည် ပန်းတိုင်အခြေအနေ မှန်ကန်သွားသည်အထိ ဆက်လက်ပတ်သည်။'
      ]
    },

    // -------------------------------------------------------------------------
    // Lesson 6: Conditions: If and Else
    // -------------------------------------------------------------------------
    {
      id: 'prog-6',
      lessonNumber: 6,
      titleEn: 'Conditions: If and Else',
      titleMy: 'Conditions (အခြေအနေများ): If နှင့် Else',
      shortIntroEn: 'Teach your code how to make smart choices: "IF it rains, take an umbrella, ELSE wear sunglasses!"',
      shortIntroMy: 'သင့် Code ကို စမတ်ကျကျ ဆုံးဖြတ်ချက်ချတတ်အောင် သင်ပေးပါ: "မိုးရွာလျှင် ထီးယူပါ၊ မရွာလျှင် နေကာမျက်မှန်တပ်ပါ!"',
      learningObjectivesEn: [
        'Understand how computers evaluate True or False conditions.',
        'Write simple IF statements for decision making.',
        'Use ELSE branches to handle alternative paths.'
      ],
      learningObjectivesMy: [
        'ကွန်ပျူတာများသည် အခြေအနေတစ်ခု မှန် (True) သို့မဟုတ် မှား (False) ကို စစ်ဆေးပုံကို နားလည်စေရန်။',
        'ဆုံးဖြတ်ချက်များ ချမှတ်ရန် ရိုးရှင်းသော IF ညွှန်ကြားချက်များကို ရေးသားနိုင်စေရန်။',
        'အခြားရွေးချယ်စရာ လမ်းကြောင်းများအတွက် ELSE များကို အသုံးပြုတတ်စေရန်။'
      ],
      explanationEn: [
        'Every day, you make hundreds of smart choices based on conditions. For example: **IF** your alarm rings, **THEN** you wake up. **IF** you are hungry, **THEN** you eat a snack.',
        'Computers make decisions the exact same way using **Conditionals**. A condition is a question that has only two possible answers: **TRUE** or **FALSE**.',
        'With an **IF-ELSE** statement, you tell the computer: "Check this condition. IF it is TRUE, do Action A. ELSE (if it is FALSE), do Action B instead!" This gives your programs brainpower to react to different situations.'
      ],
      explanationMy: [
        'နေ့တိုင်း ကျွန်ုပ်တို့ဟာ ဆုံးဖြတ်ချက်တွေ အများကြီး ချကြပါတယ်။ ဥပမာ- နှိုးစက်မြည်**လျှင် (IF)** အိပ်ရာထပါမည်။ ဗိုက်ဆာ**လျှင် (IF)** မုန့်စားပါမည်။',
        'ကွန်ပျူတာတွေလည်း ဒီအတိုင်းပဲ **Condition (အခြေအနေစစ်ဆေးချက်)** ကို အသုံးပြုပါတယ်။ Condition တစ်ခုရဲ့ အဖြေဟာ **မှန်ကန်သည် (TRUE)** သို့မဟုတ် **မှားယွင်းသည် (FALSE)** ဆိုတဲ့ အဖြေ ၂ မျိုးပဲ ရှိပါတယ်။',
        '**IF-ELSE** ညွှန်ကြားချက်ဖြင့် "ဒီအခြေအနေကို စစ်ဆေးပါ။ မှန်ကန်လျှင် (IF) လုပ်ဆောင်ချက် A ကို လုပ်ပါ။ မမှန်ကန်လျှင် (ELSE) လုပ်ဆောင်ချက် B ကို လုပ်ပါ!" ဟု ကွန်ပျူတာကို စမတ်ကျကျ ခိုင်းစေနိုင်ပါတယ်။'
      ],
      diagram: {
        type: 'if-else-branch',
        captionEn: 'Condition checkpoint: If TRUE take path A, if FALSE take path B!',
        captionMy: 'အခြေအနေ စစ်ဆေးဂိတ်: မှန်လျှင် လမ်းကြောင်း A သို့သွား၊ မှားလျှင် လမ်းကြောင်း B သို့သွား!',
        altEn: 'Diamond decision box splitting into True branch (green) and False branch (red)',
        altMy: 'စိန်ပုံစံ ဆုံးဖြတ်ချက် အကွက်မှ True နှင့် False ခွဲထွက်သွားပုံပြ ပုံ'
      },
      analogyEn: {
        title: 'Traffic Light Decisions',
        description: 'Think of driving a car toward an intersection: IF the light is GREEN, drive through safely. ELSE IF the light is YELLOW, slow down. ELSE (the light is RED), press the brake and stop!'
      },
      analogyMy: {
        title: 'ယာဉ်ထိန်းမီး ဥပမာ',
        description: 'ကားမောင်းရာတွင် မီးစိမ်းနေလျှင် (IF) ရှေ့သို့ ဆက်မောင်းပါ။ မီးဝါနေလျှင် အရှိန်လျှော့ပါ။ အကယ်၍ မီးနီနေလျှင် (ELSE) ဘရိတ်အုပ်၍ ရပ်တန့်ပါ။'
      },
      workedExampleEn: {
        title: 'Robot Maze Obstacle Avoidance',
        scenario: 'Byte the robot is walking down a hallway and encounters a boulder.',
        steps: [
          { stepNumber: 1, instruction: 'If (pathAhead === "clear")', outcome: 'Is there a rock in front? Answer is FALSE.' },
          { stepNumber: 2, instruction: 'Since False, jump to ELSE branch', outcome: 'The IF block is bypassed.' },
          { stepNumber: 3, instruction: 'Else: TurnLeft(90) and find new route', outcome: 'Byte turns safely away from the boulder!' }
        ]
      },
      workedExampleMy: {
        title: 'စက်ရုပ် လမ်းပိတ်ဆို့မှု ရှောင်လွှဲခြင်း ဥပမာ',
        scenario: 'စက်ရုပ် Byte လျှောက်သွားရာ လမ်းတွင် ကျောက်တုံးကြီးတစ်ခု တွေ့ရသည်။',
        steps: [
          { stepNumber: 1, instruction: 'If (ရှေ့တွင်လမ်းရှင်းသလား)', outcome: 'ကျောက်တုံးရှိနေသဖြင့် အဖြေမှာ FALSE (မရှင်းပါ) ဖြစ်သည်။' },
          { stepNumber: 2, instruction: 'False ဖြစ်သဖြင့် ELSE အပိုင်းသို့ သွားသည်', outcome: 'IF အပိုင်းကို ကျော်သွားသည်။' },
          { stepNumber: 3, instruction: 'Else: ဘယ်ဘက်သို့ ၉၀ ဒီဂရီ လှည့်ပါ', outcome: 'Byte သည် ကျောက်တုံးနှင့် မတိုက်ဘဲ လမ်းလွှဲသို့ လှည့်သွားသည်။' }
        ]
      },
      activity: {
        type: 'condition-tester',
        titleEn: 'Smart Gatekeeper Game',
        titleMy: 'စမတ်ကျသော ဂိတ်စောင့် ကစားနည်း',
        instructionsEn: 'Test different conditions to see whether the Magic Castle Gate opens or stays shut!',
        instructionsMy: 'မှော်ရဲတိုက် တံခါးကြီး ပွင့်မလား၊ ပိတ်မလား အခြေအနေများကို စမ်းသပ်ကြည့်ပါ။',
        initialData: [
          { hasGoldenKey: true, result: 'Door Opens! 🏰' },
          { hasGoldenKey: false, result: 'Door stays Locked! 🔒' }
        ]
      },
      quizQuestions: [
        {
          id: 'q6-1',
          questionEn: 'What are the only two possible answers to a programming condition test?',
          questionMy: 'Programming တွင် Condition တစ်ခုကို စစ်ဆေးရာတွင် ရရှိနိုင်သော အဖြေ ၂ ခုမှာ အဘယ်နည်း?',
          options: [
            { id: 'a', textEn: 'TRUE or FALSE (Yes or No)', textMy: 'TRUE သို့မဟုတ် FALSE (မှန် သို့မဟုတ် မှား)' },
            { id: 'b', textEn: 'BLUE or YELLOW', textMy: 'အပြာ သို့မဟုတ် အဝါ' },
            { id: 'c', textEn: 'MAYBE or SOMETIMES', textMy: 'ဖြစ်နိုင်သည် သို့မဟုတ် ရံဖန်ရံခါ' },
            { id: 'd', textEn: 'YESTERDAY or TOMORROW', textMy: 'မနေ့က သို့မဟုတ် မနက်ဖြန်' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Correct! Computers use Boolean logic: conditions evaluate to either True or False.',
          explanationMy: 'မှန်ကန်ပါတယ်! ကွန်ပျူတာ၏ ဆုံးဖြတ်ချက်များသည် True သို့မဟုတ် False နှစ်မျိုးသာ ရှိပါသည်။'
        },
        {
          id: 'q6-2',
          questionEn: 'When does the code inside an "ELSE" block run?',
          questionMy: '"ELSE" အပိုင်းထဲရှိ Code များသည် မည်သည့်အချိန်တွင် အလုပ်လုပ်သနည်း?',
          options: [
            { id: 'a', textEn: 'Only when the initial IF condition is FALSE', textMy: 'IF အခြေအနေ မမှန်ကန်သောအခါ (FALSE ဖြစ်သောအခါ) မှသာ' },
            { id: 'b', textEn: 'Every single second without stopping', textMy: 'စက္ကန့်တိုင်း မရပ်မနား' },
            { id: 'c', textEn: 'Only on Sunday afternoons', textMy: 'တနင်္ဂနွေနေ့ နေ့လယ်တွင်သာ' },
            { id: 'd', textEn: 'Whenever the computer restarts', textMy: 'ကွန်ပျူတာ စက်ပြန်ပွင့်သောအခါ' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Spot on! The ELSE block is the backup plan when the IF test fails.',
          explanationMy: 'မှန်ပါတယ်! IF အခြေအနေ မမှန်တော့မှသာ အရန်အစီအစဉ်အဖြစ် ELSE ကို လုပ်ဆောင်ပါသည်။'
        },
        {
          id: 'q6-3',
          questionEn: 'Read this code: "IF (score >= 50) THEN print(\'Pass\') ELSE print(\'Try Again\')". If your score is 80, what prints?',
          questionMy: '"IF (ရမှတ် >= 50) THEN print(\'Pass\') ELSE print(\'Try Again\')". သင့်ရမှတ် 80 ဖြစ်လျှင် မည်သည့်စာသား ပေါ်လာမည်နည်း?',
          options: [
            { id: 'a', textEn: 'Pass', textMy: 'Pass' },
            { id: 'b', textEn: 'Try Again', textMy: 'Try Again' },
            { id: 'c', textEn: 'Both words together', textMy: 'စာသား နှစ်ခုလုံး' },
            { id: 'd', textEn: 'Nothing prints', textMy: 'ဘာစာမှ မပေါ်ပါ' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Awesome! Because 80 is greater than or equal to 50, the condition is TRUE and "Pass" is printed.',
          explanationMy: 'အရမ်းတော်တယ်! ၈၀ သည် ၅၀ ထက် ကြီးသောကြောင့် True ဖြစ်ပြီး "Pass" ဟု ပေါ်လာပါမည်။'
        }
      ],
      summaryEn: [
        'Conditions allow software to evaluate situations and make smart decisions.',
        'IF statements run specific code only when the test is True.',
        'ELSE statements handle the alternative path when the test is False.'
      ],
      summaryMy: [
        'Conditions များက ဆော့ဖ်ဝဲလ်များကို အခြေအနေပေါ်မူတည်၍ ဆုံးဖြတ်ချက်ချနိုင်စေသည်။',
        'IF သည် အခြေအနေ မှန်ကန်သည့်အခါတွင် သီးသန့် Code ကို အလုပ်လုပ်စေသည်။',
        'ELSE သည် အခြေအနေ မမှန်ကန်သည့်အခါ အစားထိုးလမ်းကြောင်းကို ဆောင်ရွက်ပေးသည်။'
      ]
    },

    // -------------------------------------------------------------------------
    // Lesson 7: Variables and Data
    // -------------------------------------------------------------------------
    {
      id: 'prog-7',
      lessonNumber: 7,
      titleEn: 'Variables and Data',
      titleMy: 'Variables (ကိန်းရှင်များ) နှင့် အချက်အလက်များ',
      shortIntroEn: 'Think of variables as labeled storage boxes where a computer remembers names, scores, and magic items!',
      shortIntroMy: 'Variable ဆိုတာ ကွန်ပျူတာက နာမည်တွေ၊ ရမှတ်တွေ၊ ပစ္စည်းတွေကို မှတ်သားထားတဲ့ အညွှန်းတပ် သေတ္တာလေးတွေနဲ့ တူပါတယ်!',
      learningObjectivesEn: [
        'Understand what a variable is (a named container for information).',
        'Learn different data types: Numbers, Strings (text), and Booleans (true/false).',
        'See how variables can change value over time (like increasing a game score).'
      ],
      learningObjectivesMy: [
        'Variable ဆိုသည်မှာ အချက်အလက်များ သိမ်းဆည်းသော အမည်တပ် သေတ္တာဖြစ်ကြောင်း သိရှိစေရန်။',
        'ကိန်းဂဏန်း (Numbers)၊ စာသား (Strings) နှင့် အမှန်/အမှား (Booleans) စသည့် Data အမျိုးအစားများကို ခွဲခြားသိစေရန်။',
        'ဂိမ်းရမှတ် တိုးလာသကဲ့သို့ Variable တန်ဖိုးများ အချိန်နှင့်အမျှ ပြောင်းလဲနိုင်ပုံကို နားလည်စေရန်။'
      ],
      explanationEn: [
        'When you play a video game, how does the game remember your high score, your character’s name, or how many lives you have left? It saves them in **Variables**!',
        'A variable is like a storage container with a sticky label on the front. The label is the variable’s **Name** (like `playerScore`), and what’s inside the box is its **Value** (like `150`).',
        'Variables can store different kinds of data: **Numbers** (like `lives = 3`), **Text/Strings** (like `playerName = "Aung Aung"`), and **Booleans** (like `hasShield = true`). As you play, you can update what is inside the box anytime!'
      ],
      explanationMy: [
        'ဂိမ်းတစ်ခု ကစားတဲ့အခါ သင့်ရမှတ်တွေ၊ သင့်နာမည်နဲ့ ကျန်ရှိနေတဲ့ အသက်အရေအတွက်ကို ဂိမ်းက ဘယ်လိုမှတ်ထားသလဲ? **Variable** တွေထဲမှာ သိမ်းထားလို့ ဖြစ်ပါတယ်။',
        'Variable တစ်ခုဟာ ရှေ့မှာ စာတန်းကပ်ထားတဲ့ သေတ္တာလေးတစ်ခုနဲ့ တူပါတယ်။ စာတန်းက Variable ရဲ့ **အမည် (Name)** ဖြစ်ပြီး (ဥပမာ `playerScore`)၊ သေတ္တာထဲက ပစ္စည်းက **တန်ဖိုး (Value)** ဖြစ်ပါတယ် (ဥပမာ `150`)။',
        'သိမ်းဆည်းနိုင်တဲ့ အချက်အလက် အမျိုးအစားတွေကတော့: **ကိန်းဂဏန်း (Numbers)** (ဥပမာ `lives = 3`)၊ **စာသား (Strings)** (ဥပမာ `playerName = "မောင်မောင်"`)၊ နှင့် **အမှန်/အမှား (Booleans)** (ဥပမာ `hasShield = true`) တို့ ဖြစ်ပါတယ်။'
      ],
      diagram: {
        type: 'variable-box-visual',
        captionEn: 'The labeled box "playerScore" holds the value 50. When you earn coins, it updates to 60!',
        captionMy: '"playerScore" အမည်ရှိ သေတ္တာထဲတွင် တန်ဖိုး ၅၀ ရှိသည်။ အကြွေစေ့ရလျှင် ၆၀ သို့ ပြောင်းသွားမည်!',
        altEn: 'Cardboard box labeled playerScore holding number 50 with an arrow updating to 60',
        altMy: 'playerScore အမည်တပ် သေတ္တာထဲသို့ တန်ဖိုး အသစ်ပြောင်းလဲထည့်သွင်းပုံပြ ပုံ'
      },
      analogyEn: {
        title: 'Your School Backpack Pockets',
        description: 'Think of your backpack: the front zipper pocket has a tag "SnackBox". In the morning, it holds an apple. At lunchtime, you eat the apple and put in an orange. The pocket name stays "SnackBox", but its contents changed!'
      },
      analogyMy: {
        title: 'ကျောင်းလွယ်အိတ် အိတ်ကပ် ဥပမာ',
        description: 'သင့်လွယ်အိတ်ရှေ့က အိတ်ကပ်လေးကို "မုန့်ထည့်ရန်" လို့ အမည်ပေးထားတယ်ဆိုပါစို့။ မနက်ပိုင်းမှာ ပန်းသီးထည့်ထားပြီး၊ နေ့လယ်မှာ လိမ္မော်သီး ပြောင်းထည့်နိုင်ပါတယ်။ အိတ်ကပ်နာမည်က မပြောင်းပေမဲ့ အတွင်းက ပစ္စည်းက ပြောင်းလဲသွားပါတယ်။'
      },
      workedExampleEn: {
        title: 'Tracking Stars in CodeQuest Maze',
        scenario: 'Let us see how the code tracks how many stars you collect.',
        steps: [
          { stepNumber: 1, instruction: 'let starsCollected = 0;', outcome: 'Creates a box labeled starsCollected with initial value 0.' },
          { stepNumber: 2, instruction: 'Robot steps on Star tile', outcome: 'The event triggers a pickup action.' },
          { stepNumber: 3, instruction: 'starsCollected = starsCollected + 1;', outcome: 'The value inside the box increases from 0 to 1!' },
          { stepNumber: 4, instruction: 'DisplayOnScreen(starsCollected)', outcome: 'The scoreboard on the screen shows: ⭐ 1' }
        ]
      },
      workedExampleMy: {
        title: 'ကြယ်အရေအတွက် မှတ်သားခြင်း ဥပမာ',
        scenario: 'Robot Maze တွင် သင် ကြယ်မည်မျှ ကောက်ယူရရှိသည်ကို မှတ်သားပုံ။',
        steps: [
          { stepNumber: 1, instruction: 'let starsCollected = 0;', outcome: 'starsCollected အမည်ဖြင့် သေတ္တာဖွင့်ပြီး တန်ဖိုး ၀ ထည့်ထားသည်။' },
          { stepNumber: 2, instruction: 'စက်ရုပ် ကြယ်ပေါ်သို့ ရောက်သွားသည်', outcome: 'ကြယ်ကောက်ယူသည့် Event ဖြစ်ပေါ်သည်။' },
          { stepNumber: 3, instruction: 'starsCollected = starsCollected + 1;', outcome: 'တန်ဖိုးသည် ၀ မှ ၁ သို့ တိုးသွားသည်။' },
          { stepNumber: 4, instruction: 'DisplayOnScreen(starsCollected)', outcome: 'ဖန်သားပြင်ပေါ်တွင် ⭐ 1 ဟု ပြသပေးသည်။' }
        ]
      },
      activity: {
        type: 'condition-tester',
        titleEn: 'Variable Inspector Lab',
        titleMy: 'Variable စစ်ဆေးသည့် ဓာတ်ခွဲခန်း',
        instructionsEn: 'Click to add points, change player name, and watch the variable boxes update live!',
        instructionsMy: 'ရမှတ်တိုးကြည့်ပါ၊ အမည်ပြောင်းကြည့်ပါ၊ Variable သေတ္တာများ တိုက်ရိုက်ပြောင်းလဲပုံကို ကြည့်ရှုပါ။',
        initialData: { playerName: 'ByteCoder', score: 100, isLevelComplete: false }
      },
      quizQuestions: [
        {
          id: 'q7-1',
          questionEn: 'What is a variable in programming?',
          questionMy: 'Programming တွင် Variable ဆိုသည်မှာ အဘယ်နည်း?',
          options: [
            { id: 'a', textEn: 'A named container that holds information in memory', textMy: 'အချက်အလက်များကို မှတ်ဉာဏ်ထဲတွင် သိမ်းဆည်းထားသော အမည်တပ် သေတ္တာ' },
            { id: 'b', textEn: 'A computer fan that blows cold air', textMy: 'လေအေးပေးသော ကွန်ပျူတာ ပန်ကာ' },
            { id: 'c', textEn: 'A cable connecting to the wall outlet', textMy: 'နံရံပလပ်ပေါက်နှင့် ချိတ်ထားသော ကြိုး' },
            { id: 'd', textEn: 'A sticker on the laptop cover', textMy: 'လက်ပ်တော့အဖုံးပေါ်ရှိ စတစ်ကာ' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Correct! A variable stores data that your program can read, use, and update anytime.',
          explanationMy: 'မှန်ကန်ပါတယ်! Variable သည် ပရိုဂရမ်က ဖတ်ရှုအသုံးပြုနိုင်သော အချက်အလက်များကို သိမ်းဆည်းပေးသည်။'
        },
        {
          id: 'q7-2',
          questionEn: 'If a variable starts with "let coins = 5;", and the player picks up 3 coins, what code updates it?',
          questionMy: '"let coins = 5;" ဖြစ်ပြီး ကစားသူက ၃ ပြား ထပ်ကောက်ရရှိပါက မည်သည့် Code ဖြင့် တိုးမြှင့်ရမည်နည်း?',
          options: [
            { id: 'a', textEn: 'coins = coins + 3;', textMy: 'coins = coins + 3;' },
            { id: 'b', textEn: 'coins = 0;', textMy: 'coins = 0;' },
            { id: 'c', textEn: 'coins = coins - 3;', textMy: 'coins = coins - 3;' },
            { id: 'd', textEn: 'coins = "three";', textMy: 'coins = "three";' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Spot on! Adding 3 to the current value of coins makes the new total 8.',
          explanationMy: 'မှန်ပါတယ်! လက်ရှိတန်ဖိုး ၅ ထဲသို့ ၃ ပေါင်းထည့်လိုက်သဖြင့် ၈ ဖြစ်သွားပါမည်။'
        },
        {
          id: 'q7-3',
          questionEn: 'Which of the following data values is a String (text)?',
          questionMy: 'အောက်ပါတို့အနက် မည်သည့်တန်ဖိုးသည် String (စာသား) ဖြစ်သနည်း?',
          options: [
            { id: 'a', textEn: '"Hello World!" (wrapped in quotes)', textMy: '"Hello World!" (မျက်တောင်ဖွင့်ပိတ်အတွင်းရှိ စာသား)' },
            { id: 'b', textEn: '42 (a number)', textMy: '၄၂ (ကိန်းဂဏန်း)' },
            { id: 'c', textEn: 'true (a boolean)', textMy: 'true (အမှန်/အမှား တန်ဖိုး)' },
            { id: 'd', textEn: '-15 (a negative number)', textMy: '-၁၅ (အနုတ်ကိန်း)' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Awesome! Words and text enclosed in quotation marks are Strings in code.',
          explanationMy: 'အရမ်းတော်တယ်! မျက်တောင်အဖွင့်အပိတ် (" ") ထဲတွင် ရေးထားသော စာလုံးများကို String ဟု ခေါ်ပါသည်။'
        }
      ],
      summaryEn: [
        'Variables hold and remember pieces of data inside a computer program.',
        'Common types include Numbers (1, 2, 3), Strings ("hello"), and Booleans (true/false).',
        'Variables can be updated whenever game state or user actions change.'
      ],
      summaryMy: [
        'Variables များသည် အချက်အလက်များကို ပရိုဂရမ်အတွင်း မှတ်သားသိမ်းဆည်းပေးသည်။',
        'အဓိက အမျိုးအစားများမှာ Numbers (၁, ၂, ၃)၊ Strings ("မင်္ဂလာပါ") နှင့် Booleans (true/false) တို့ ဖြစ်သည်။',
        'ဂိမ်းအခြေအနေ သို့မဟုတ် လုပ်ဆောင်ချက်များ ပြောင်းလဲပါက Variable တန်ဖိုးကို အချိန်မရွေး ပြင်ဆင်နိုင်သည်။'
      ]
    },

    // -------------------------------------------------------------------------
    // Lesson 8: Functions and Reusable Instructions
    // -------------------------------------------------------------------------
    {
      id: 'prog-8',
      lessonNumber: 8,
      titleEn: 'Functions and Reusable Instructions',
      titleMy: 'Functions နှင့် ပြန်လည်အသုံးပြုနိုင်သော Code များ',
      shortIntroEn: 'Teach your robot a new custom trick once, give it a name, and call it anytime with a single word!',
      shortIntroMy: 'စက်ရုပ်ကို နည်းလမ်းသစ်တစ်ခု သင်ပေးထားပြီး နာမည်ပေးထားပါ၊ လိုအပ်တဲ့အခါ နာမည်ခေါ်လိုက်ရုံနဲ့ ချက်ချင်းလုပ်ဆောင်ပေးပါလိမ့်မယ်!',
      learningObjectivesEn: [
        'Understand what a function is (a reusable pack of instructions with a name).',
        'Learn the difference between defining a function and calling a function.',
        'See how functions prevent repeating big chunks of code.'
      ],
      learningObjectivesMy: [
        'Function ဆိုသည်မှာ အမည်ပေးထားသော ပြန်လည်သုံးနိုင်သည့် ညွှန်ကြားချက်အစုအဝေး ဖြစ်ကြောင်း နားလည်စေရန်။',
        'Function တည်ဆောက်ခြင်း (Defining) နှင့် ခေါ်ယူအသုံးပြုခြင်း (Calling) တို့၏ ကွာခြားချက်ကို သိရှိစေရန်။',
        'Function များက Code များကို ထပ်ခါထပ်ခါ ရေးစရာမလိုအောင် ကူညီပေးပုံကို နားလည်စေရန်။'
      ],
      explanationEn: [
        'When you tell your dog "Roll over!", you don’t say: "1. Bend front knees, 2. Lower belly to carpet, 3. Push legs sideways, 4. Flip onto back, 5. Complete 360 rotation." You trained the dog beforehand, gave that complex action the name **"rollOver"**, and now you just say that one command!',
        'In programming, a **Function** is a named block of code that performs a specific task. You build it once (Defining), and then whenever you need it, you simply call its name (Calling).',
        'Functions make programs organized, easy to read, and reusable. Instead of 50 lines of cluttered code, you can write clean commands like `celebrateVictory()`, `jumpObstacle()`, or `calculateScore()`.'
      ],
      explanationMy: [
        'ခွေးလေးကို "လူးလှိမ့်ပြပါ!" လို့ ခိုင်းတဲ့အခါ "၁။ ဒူးထောက်ပါ၊ ၂။ ဗိုက်ကို ကြမ်းပေါ်ချပါ၊ ၃။ ဘေးသို့ တွန်းပါ၊ ၄။ ပက်လက်လှန်ပါ" စသဖြင့် အသေးစိတ် အမြဲပြောမနေပါဘူး။ အဲဒီလုပ်ဆောင်ချက် အစုအဝေးကို **"လူးလှိမ့်ပြပါ"** လို့ နာမည်ပေးထားပြီး ခေါ်လိုက်ရုံပါပဲ။',
        'Programming မှာလည်း **Function** ဆိုတာ တိကျတဲ့ အလုပ်တစ်ခုကို လုပ်ဆောင်ပေးတဲ့ အမည်ပေးထားသော Code အစုအဝေး ဖြစ်ပါတယ်။ တစ်ခါပဲ ရေးသားသတ်မှတ် (Define) ရပြီး၊ လိုအပ်တဲ့အခါ နာမည်ခေါ် (Call) ရုံပါပဲ။',
        'Function တွေက Code တွေကို သန့်ရှင်းစေပြီး ဖတ်ရလွယ်ကူစေပါတယ်။ ရှုပ်ထွေးတဲ့ လိုင်း ၅၀ အစား `celebrateVictory()`, `jumpObstacle()` စသဖြင့် ရိုးရှင်းစွာ အသုံးပြုနိုင်ပါတယ်။'
      ],
      diagram: {
        type: 'function-box-flow',
        captionEn: 'Define function jumpObstacle() once. Call it 10 times whenever needed!',
        captionMy: 'jumpObstacle() ကို တစ်ကြိမ်သာ သတ်မှတ်ပါ။ လိုအပ်တိုင်း အကြိမ်ကြိမ် ခေါ်သုံးနိုင်သည်!',
        altEn: 'Diagram showing function definition box called jumpObstacle containing 3 sub-steps',
        altMy: 'Function တစ်ခုအတွင်း အဆင့် ၃ ဆင့်ပါဝင်ပြီး အပြင်မှ ခေါ်သုံးပုံပြ ပုံ'
      },
      analogyEn: {
        title: 'The Shortcut Button on a Microwave',
        description: 'Think of the "Popcorn" button on a microwave. Inside the microwave’s computer, that button has a function: "Power: High, Time: 2 mins 30 secs, Beep at end". You don’t set all those numbers manually every time — you just press the Popcorn function button!'
      },
      analogyMy: {
        title: 'မိုက်ခရိုဝေ့ဖ် မီးဖိုပေါ်ရှိ Popcorn ခလုတ် ဥပမာ',
        description: 'မိုက်ခရိုဝေ့ဖ်ဖိုပေါ်က "Popcorn" ခလုတ်လေးလိုပါပဲ။ အထဲမှာ "အပူချိန်: အမြင့်ဆုံး၊ အချိန်: ၂ မိနစ်ခွဲ၊ ပြီးလျှင် အသံမြည်ပါ" ဆိုပြီး ကြိုတင်ထည့်ထားပါတယ်။ သင်က ခလုတ်တစ်ချက် နှိပ်လိုက်ရုံနဲ့ အားလုံး အလိုအလျောက် အလုပ်လုပ်သွားပါတယ်။'
      },
      workedExampleEn: {
        title: 'Building a "jumpAndSpin" Function',
        scenario: 'We want Byte the robot to perform a victory dance at the maze goal.',
        steps: [
          { stepNumber: 1, instruction: 'function victoryDance() {', outcome: 'We define and name our brand-new function.' },
          { stepNumber: 2, instruction: '   Robot.Jump(50); Robot.TurnRight(360); Robot.Cheer();', outcome: 'We pack 3 cool moves inside the function.' },
          { stepNumber: 3, instruction: '}', outcome: 'Function definition is complete and saved in memory.' },
          { stepNumber: 4, instruction: 'Call: victoryDance();', outcome: 'Byte leaps into the air, spins full 360°, and cheers joyfully!' }
        ]
      },
      workedExampleMy: {
        title: '"victoryDance" Function တည်ဆောက်ခြင်း ဥပမာ',
        scenario: 'ပန်းတိုင်ရောက်သည့်အခါ စက်ရုပ် Byte အောင်ပွဲခံ အက ကစေရန် Function ရေးခြင်း။',
        steps: [
          { stepNumber: 1, instruction: 'function victoryDance() {', outcome: 'Function အသစ်တစ်ခုကို အမည်ပေး၍ စတင်သည်။' },
          { stepNumber: 2, instruction: '   Robot.Jump(50); Robot.TurnRight(360); Robot.Cheer();', outcome: 'အကကွက် ၃ ခုကို Function ထဲသို့ ထည့်သွင်းသည်။' },
          { stepNumber: 3, instruction: '}', outcome: 'Function တည်ဆောက်မှု ပြီးစီးပြီး မှတ်ဉာဏ်ထဲ သိမ်းဆည်းလိုက်သည်။' },
          { stepNumber: 4, instruction: 'ခေါ်ယူခြင်း: victoryDance();', outcome: 'Byte သည် အပေါ်သို့ ခုန်တက်ပြီး ၃၆၀ ဒီဂရီ လှည့်ကာ ပျော်ရွှင်စွာ အော်ဟစ်လိုက်သည်။' }
        ]
      },
      activity: {
        type: 'sequence-sorter',
        titleEn: 'Function Assembly Line',
        titleMy: 'Function တည်ဆောက်သည့် စက်ရုံ',
        instructionsEn: 'Put the function parts in order: Name it, add the instructions, then call it!',
        instructionsMy: 'Function အစိတ်အပိုင်းများကို အစီအစဉ်တကျ စီပါ: အမည်ပေးပါ၊ ညွှန်ကြားချက်ထည့်ပါ၊ ထို့နောက် ခေါ်သုံးပါ!',
        initialData: [
          { id: 'fn2', textEn: 'Pack steps inside curly braces { ... }', textMy: 'တွန့်ကွင်း { ... } အတွင်း ညွှန်ကြားချက်များ ထည့်ပါ' },
          { id: 'fn1', textEn: 'Define function makePancake()', textMy: 'function makePancake() ဟု စတင်သတ်မှတ်ပါ' },
          { id: 'fn3', textEn: 'Call makePancake() to cook whenever hungry', textMy: 'ဗိုက်ဆာသည့်အခါ makePancake() ကို ခေါ်သုံးပါ' }
        ],
        solution: ['fn1', 'fn2', 'fn3']
      },
      quizQuestions: [
        {
          id: 'q8-1',
          questionEn: 'What is the main benefit of writing a function?',
          questionMy: 'Function ရေးသားခြင်း၏ အဓိက အကျိုးကျေးဇူးမှာ အဘယ်နည်း?',
          options: [
            { id: 'a', textEn: 'You write code once and reuse it many times easily', textMy: 'Code ကို တစ်ကြိမ်သာ ရေးပြီး အကြိမ်ကြိမ် အလွယ်တကူ ပြန်သုံးနိုင်ခြင်း' },
            { id: 'b', textEn: 'It makes the computer run out of battery', textMy: 'ကွန်ပျူတာ ဘက်ထရီ အကုန်မြန်စေခြင်း' },
            { id: 'c', textEn: 'It deletes your game saved data', textMy: 'ဂိမ်းမှတ်တမ်းများကို ဖျက်ပစ်ခြင်း' },
            { id: 'd', textEn: 'It locks the screen forever', textMy: 'မျက်နှာပြင်ကို အမြဲတမ်း ပိတ်ထားခြင်း' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Correct! Functions enable reusability, keeping code organized and clean.',
          explanationMy: 'မှန်ကန်ပါတယ်! Function များသည် Code များကို အကြိမ်ကြိမ် ပြန်လည်အသုံးပြုနိုင်စေပါသည်။'
        },
        {
          id: 'q8-2',
          questionEn: 'What is the difference between "defining" and "calling" a function?',
          questionMy: 'Function ကို "သတ်မှတ်ခြင်း (Defining)" နှင့် "ခေါ်သုံးခြင်း (Calling)" တို့ မည်သို့ ကွာသနည်း?',
          options: [
            { id: 'a', textEn: 'Defining teaches the steps; Calling actually runs them', textMy: 'Defining က လုပ်ရမည့်အဆင့်များကို သင်ပေးပြီး Calling က တကယ် ခိုင်းစေခြင်း ဖြစ်သည်' },
            { id: 'b', textEn: 'There is zero difference; they are identical', textMy: 'လုံးဝ ကွာခြားမှုမရှိဘဲ အတူတူဖြစ်သည်' },
            { id: 'c', textEn: 'Defining deletes code; Calling writes code', textMy: 'Defining က ဖျက်ပြီး Calling က ရေးသည်' },
            { id: 'd', textEn: 'Calling happens only when the computer is broken', textMy: 'ကွန်ပျူတာ ပျက်မှသာ Calling လုပ်သည်' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Spot on! Defining creates the recipe; calling is like actually cooking the meal.',
          explanationMy: 'မှန်ပါတယ်! သတ်မှတ်ခြင်းက ဟင်းချက်နည်း ရေးသားခြင်းဖြစ်ပြီး၊ ခေါ်သုံးခြင်းက တကယ် ချက်ပြုတ်ခိုင်းခြင်း ဖြစ်ပါတယ်။'
        },
        {
          id: 'q8-3',
          questionEn: 'Which of the following looks like a proper function call in code?',
          questionMy: 'အောက်ပါတို့အနက် မည်သည့်အရာသည် Code ထဲတွင် Function ခေါ်ယူခြင်း ပုံစံဖြစ်သနည်း?',
          options: [
            { id: 'a', textEn: 'celebrateWin();', textMy: 'celebrateWin();' },
            { id: 'b', textEn: '=== celebrateWin ===', textMy: '=== celebrateWin ===' },
            { id: 'c', textEn: 'celebrateWin $$$ 123', textMy: 'celebrateWin $$$ 123' },
            { id: 'd', textEn: 'function ???', textMy: 'function ???' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Awesome! A function name followed by parentheses `()` triggers the function.',
          explanationMy: 'အရမ်းတော်တယ်! Function အမည်နောက်တွင် ကွင်းစကွင်းပိတ် `()` ပါဝင်ပြီး ခေါ်ယူအသုံးပြုရပါသည်။'
        }
      ],
      summaryEn: [
        'A function is a reusable bundle of code given a descriptive name.',
        'Define a function once, and call it as many times as you like.',
        'Functions help break down huge projects into small, manageable pieces.'
      ],
      summaryMy: [
        'Function သည် နာမည်တစ်ခု ပေးထားသော ပြန်လည်သုံးနိုင်သည့် Code အစုအဝေး ဖြစ်သည်။',
        'တစ်ကြိမ်သာ ရေးသားသတ်မှတ်ပြီး မိမိစိတ်ကြိုက် အကြိမ်ကြိမ် ခေါ်သုံးနိုင်သည်။',
        'ပရောဂျက်ကြီးများကို သေးငယ်ရှင်းလင်းသော အပိုင်းများအဖြစ် ခွဲခြမ်းစီမံရာတွင် အလွန်အသုံးဝင်သည်။'
      ]
    },

    // -------------------------------------------------------------------------
    // Lesson 9: Debugging and Fixing Mistakes
    // -------------------------------------------------------------------------
    {
      id: 'prog-9',
      lessonNumber: 9,
      titleEn: 'Debugging and Fixing Mistakes',
      titleMy: 'Debugging (အမှားရှာဖွေ ပြင်ဆင်ခြင်း)',
      shortIntroEn: 'Every great coder makes mistakes! Learn how to find bugs like a clever detective and fix them with pride.',
      shortIntroMy: 'ထိပ်တန်း Programmer တိုင်း အမှားလုပ်ဖူးကြပါတယ်! စုံထောက်တစ်ယောက်လို Bug တွေကို ရှာဖွေပြီး ဂုဏ်ယူစွာ ပြုပြင်နိုင်ဖို့ လေ့လာကြမယ်။',
      learningObjectivesEn: [
        'Understand what a "bug" is in computer code.',
        'Learn the history of how the first computer bug was an actual moth!',
        'Master the 4-step debugging cycle: Spot, Isolate, Fix, and Test.'
      ],
      learningObjectivesMy: [
        'Computer Code ထဲရှိ "Bug" (အမှား) ဆိုသည်မှာ အဘယ်နည်းကို နားလည်စေရန်။',
        'ပထမဆုံး Computer Bug သည် တကယ့်ပိုးဖလံကောင် အစစ်ဖြစ်ခဲ့သည့် သမိုင်းကို သိရှိစေရန်။',
        'အမှားရှာပြင်ဆင်ခြင်း အဆင့် ၄ ဆင့်: တွေ့ရှိခြင်း၊ အကြောင်းရင်းရှာခြင်း၊ ပြင်ဆင်ခြင်းနှင့် စမ်းသပ်ခြင်းတို့ကို တတ်ကျွမ်းစေရန်။'
      ],
      explanationEn: [
        'When your code doesn’t work the way you expected, don’t feel sad or frustrated! In fact, professional programmers spend over half of their time finding and fixing mistakes. An error in code is called a **Bug**, and finding and removing it is called **Debugging**.',
        'Did you know? In 1947, computer pioneer Grace Hopper and her engineering team found that their giant computer had stopped working. When they opened up the machine, they found an actual moth trapped between the electric relays! They taped the moth into their logbook with the note: "First actual case of bug being found."',
        'To be a great debugger, follow the **4-step Detective Method**: 1. **Spot the Bug** (What went wrong?), 2. **Find the Culprit Line** (Where in the code did it happen?), 3. **Change the Code** (Fix the instruction), and 4. **Test Again** to make sure it works!'
      ],
      explanationMy: [
        'မိမိရေးထားတဲ့ Code က ထင်သလို အလုပ်မလုပ်ရင် စိတ်မညစ်ပါနဲ့! တကယ့် Professional Programmer တွေတောင် အချိန်အများစုကို အမှားရှာပြင်ရင်း ကုန်ဆုံးကြပါတယ်။ Code ထဲက အမှားကို **Bug** လို့ခေါ်ပြီး၊ အမှားရှာပြင်ခြင်းကို **Debugging** လို့ ခေါ်ပါတယ်။',
        '၁၉၄၇ ခုနှစ်တုန်းက Grace Hopper ဆိုတဲ့ ကွန်ပျူတာပညာရှင်မကြီးရဲ့ ကွန်ပျူတာကြီး ရုတ်တရက် ရပ်သွားခဲ့ပါတယ်။ စက်ကို ဖွင့်စစ်ကြည့်တော့ အထဲမှာ ပိုးဖလံကောင်တစ်ကောင် ညပ်နေတာကို တွေ့ခဲ့ရပါတယ်။ အဲဒါကြောင့် ကွန်ပျူတာ အမှားတွေကို "Bug" လို့ ခေါ်ဝေါ်လာကြတာ ဖြစ်ပါတယ်။',
        'အမှားရှာတဲ့ စုံထောက်ကောင်းဖြစ်ဖို့ အဆင့် ၄ ဆင့် လိုပါတယ်: ၁။ **ဘာမှားလဲ စောင့်ကြည့်ပါ**၊ ၂။ **ဘယ် Code လိုင်းမှာ မှားနေလဲ ရှာပါ**၊ ၃။ **Code ကို မှန်အောင် ပြင်ပါ**၊ ၄။ **ပြန်လည် စမ်းသပ် Run ကြည့်ပါ**!'
      ],
      diagram: {
        type: 'debugging-cycle-circle',
        captionEn: 'The 4 Steps of Debugging: Spot -> Isolate -> Fix -> Test!',
        captionMy: 'အမှားရှာပြင်ခြင်း အဆင့် ၄ ဆင့်: တွေ့ရှိ -> သီးသန့်ခွဲ -> ပြင်ဆင် -> ပြန်စမ်းသပ်!',
        altEn: 'Circular cycle showing 4 steps: Spot, Isolate, Fix, and Test with a magnifying glass',
        altMy: 'မှန်ဘီလူးဖြင့် အမှားရှာဖွေပြင်ဆင်ပုံ သရုပ်ပြ ပုံ'
      },
      analogyEn: {
        title: 'Spelling and Grammar Check',
        description: 'When writing an essay for school, you proofread to catch misspelled words or misplaced periods. Debugging is simply proofreading your code instructions so the computer can understand them smoothly!'
      },
      analogyMy: {
        title: 'စာစီစာကုံး သတ်ပုံစစ်ဆေးခြင်း ဥပမာ',
        description: 'ကျောင်းမှာ စာစီစာကုံး ရေးတဲ့အခါ သတ်ပုံမှားတာ၊ ပုဒ်ဖြတ်ပုဒ်ရပ် မှားတာကို ပြန်စစ်ဆေးသလိုပါပဲ။ Debugging ဆိုတာ ကွန်ပျူတာ ကောင်းကောင်း နားလည်အောင် ကိုယ့် Code ကို ပြန်လည် စစ်ဆေးပြင်ဆင်ပေးခြင်း ဖြစ်ပါတယ်။'
      },
      workedExampleEn: {
        title: 'Fixing Byte’s Walking Direction',
        scenario: 'Byte was supposed to turn East to avoid a wall, but turned West and bumped into a rock!',
        steps: [
          { stepNumber: 1, instruction: 'Original code: Robot.TurnLeft(90);', outcome: 'Byte turns West towards the rock. CRASH!' },
          { stepNumber: 2, instruction: 'Spot the issue:', outcome: 'Turning left is West. We actually needed to turn RIGHT for East.' },
          { stepNumber: 3, instruction: 'Fixed code: Robot.TurnRight(90);', outcome: 'We replace the left turn with a right turn.' },
          { stepNumber: 4, instruction: 'Run Test:', outcome: 'Byte turns East, smoothly bypasses the rock, and reaches the star! ⭐' }
        ]
      },
      workedExampleMy: {
        title: 'စက်ရုပ် လမ်းလျှောက်မှု အမှားပြင်ခြင်း ဥပမာ',
        scenario: 'Byte သည် အရှေ့ဘက်သို့ လှည့်ရမည်ဖြစ်သော်လည်း အနောက်ဘက်သို့ လှည့်မိပြီး ကျောက်တုံးနှင့် တိုက်မိသွားသည်။',
        steps: [
          { stepNumber: 1, instruction: 'မူလ Code: Robot.TurnLeft(90);', outcome: 'Byte ဘယ်ဘက်လှည့်သဖြင့် အနောက်ဘက်သို့ သွားတိုက်မိသည်။' },
          { stepNumber: 2, instruction: 'အမှားကို ရှာဖွေခြင်း:', outcome: 'ဘယ်ဘက်လှည့်မိခြင်းကြောင့် ဖြစ်သည်။ အရှေ့ဘက်သွားရန် ညာဘက်လှည့်ရမည်။' },
          { stepNumber: 3, instruction: 'ပြင်ဆင်ထားသော Code: Robot.TurnRight(90);', outcome: 'TurnLeft နေရာတွင် TurnRight ဖြင့် အစားထိုးလိုက်သည်။' },
          { stepNumber: 4, instruction: 'စမ်းသပ် ပြေးဆွဲခြင်း:', outcome: 'Byte သည် အရှေ့ဘက်သို့ လှည့်သွားပြီး ကျောက်တုံးကို ရှောင်ကာ ကြယ်ဆီသို့ ရောက်သွားသည်! ⭐' }
        ]
      },
      activity: {
        type: 'condition-tester',
        titleEn: 'Bug Hunter Interactive Challenge',
        titleMy: 'Bug စုံထောက် အမှားရှာဖွေခြင်း စိန်ခေါ်မှု',
        instructionsEn: 'Look at the 3 code snippets. Click on the one that contains a bug!',
        instructionsMy: 'Code ၃ ခုကို ကြည့်ရှုပြီး အမှား (Bug) ပါဝင်နေသော Code ကို ရှာဖွေနှိပ်ပါ။',
        initialData: [
          { text: 'Robot.MoveForward(3);', isBug: false },
          { text: 'Robot.MoveForwrd(3); // Typo in spelling!', isBug: true },
          { text: 'Robot.TurnRight();', isBug: false }
        ]
      },
      quizQuestions: [
        {
          id: 'q9-1',
          questionEn: 'What is a "bug" in computer programming?',
          questionMy: 'Programming တွင် "Bug" ဆိုသည်မှာ အဘယ်နည်း?',
          options: [
            { id: 'a', textEn: 'An error, mistake, or flaw that causes code to produce wrong results', textMy: 'Code အလုပ်မလုပ်အောင် သို့မဟုတ် ရလဒ်မှားစေသော အမှားအယွင်း' },
            { id: 'b', textEn: 'A fancy feature that earns you 1,000 XP', textMy: 'XP ၁၀၀၀ ရရှိစေသော ထူးခြားသည့် Feature' },
            { id: 'c', textEn: 'A shiny diamond inside the computer screen', textMy: 'ကွန်ပျူတာ မျက်နှာပြင်ထဲရှိ တောက်ပသော စိန်' },
            { id: 'd', textEn: 'The button you press to turn on music', textMy: 'သီချင်းဖွင့်သည့် ခလုတ်' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Correct! A bug is an unexpected glitch or error in your program logic or syntax.',
          explanationMy: 'မှန်ကန်ပါတယ်! Bug ဆိုတာ ပရိုဂရမ်ထဲက ချို့ယွင်းချက် သို့မဟုတ် အမှားအယွင်း ဖြစ်ပါတယ်။'
        },
        {
          id: 'q9-2',
          questionEn: 'What is the correct first step when your program fails?',
          questionMy: 'မိမိရေးထားသော Program အလုပ်မလုပ်သောအခါ အရင်ဆုံး မည်သို့လုပ်ဆောင်သင့်သနည်း?',
          options: [
            { id: 'a', textEn: 'Stay calm, observe what went wrong, and inspect the code carefully', textMy: 'စိတ်အေးအေးထားပြီး ဘာတွေမှားသွားသလဲ သတိထားကြည့်ကာ Code ကို သေချာစစ်ဆေးပါ' },
            { id: 'b', textEn: 'Smash the computer keyboard with a shoe', textMy: 'ကီးဘုတ်ကို ဖိနပ်ဖြင့် ထုရိုက်ပါ' },
            { id: 'c', textEn: 'Give up forever and never touch computers again', textMy: 'လုံးဝ လက်လျှော့လိုက်ပြီး ကွန်ပျူတာကို မထိတော့ပါ' },
            { id: 'd', textEn: 'Delete all files on the internet', textMy: 'အင်တာနက်ပေါ်ရှိ ဖိုင်အားလုံးကို ဖျက်ပစ်ပါ' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Spot on! Great coders are patient problem solvers who treat bugs like fun detective puzzles.',
          explanationMy: 'မှန်ပါတယ်! စိတ်ရှည်လက်ရှည်ဖြင့် အမှားကို စုံထောက်တစ်ယောက်လို စစ်ဆေးရှာဖွေ ပြင်ဆင်ရပါမည်။'
        },
        {
          id: 'q9-3',
          questionEn: 'Where did the famous word "computer bug" originate historically?',
          questionMy: 'သမိုင်းတွင် "Computer Bug" ဟူသော စကားလုံးသည် မည်သည့်အရာမှ အစပြုခဲ့သနည်း?',
          options: [
            { id: 'a', textEn: 'A real moth trapped inside an early mechanical computer in 1947', textMy: '၁၉၄၇ ခုနှစ်တွင် စက်ခလုတ်ကြား ညပ်နေသော တကယ့် ပိုးဖလံကောင် အစစ်မှ' },
            { id: 'b', textEn: 'A cartoon bee drawn on a computer manual', textMy: 'စာအုပ်ပေါ်တွင် ဆွဲထားသော ပျားကာတွန်းပုံမှ' },
            { id: 'c', textEn: 'A computer virus created by space aliens', textMy: 'ဂြိုဟ်သားများ ပြုလုပ်ထားသော ကွန်ပျူတာ ဗိုင်းရပ်စ်မှ' },
            { id: 'd', textEn: 'A chocolate cookie dropped onto a keyboard', textMy: 'ကီးဘုတ်ပေါ် ပြုတ်ကျသွားသော ချောကလက်မုန့်မှ' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Yes! Grace Hopper’s team taped an actual moth into their logbook after retrieving it from the relays.',
          explanationMy: 'မှန်ပါတယ်! စက်အတွင်း ပိုးဖလံကောင် ညပ်နေသည်ကို ဖယ်ရှားခဲ့ရာမှ စတင်ခဲ့ခြင်း ဖြစ်ပါသည်။'
        }
      ],
      summaryEn: [
        'Bugs are normal and happen to every single programmer in the world.',
        'Debugging is the systematic process of finding, understanding, and fixing code errors.',
        'Always test your program again after making a fix to verify the solution works!'
      ],
      summaryMy: [
        'Bug ဆိုသည်မှာ သာမန်သာဖြစ်ပြီး ကမ္ဘာပေါ်ရှိ Programmer တိုင်း ကြုံတွေ့ရသည်။',
        'Debugging သည် အမှားများကို စနစ်တကျ ရှာဖွေ၊ နားလည်ပြီး ပြင်ဆင်သည့် လုပ်ငန်းစဉ်ဖြစ်သည်။',
        'အမှားပြင်ပြီးတိုင်း ပြဿနာပြေလည်သွားပြီလား သေချာစေရန် ပြန်လည်စမ်းသပ် Run ကြည့်ပါ။'
      ]
    },

    // -------------------------------------------------------------------------
    // Lesson 10: Final Project: Program a Robot Maze
    // -------------------------------------------------------------------------
    {
      id: 'prog-10',
      lessonNumber: 10,
      titleEn: 'Final Project: Program a Robot Maze',
      titleMy: 'နောက်ဆုံး ပရောဂျက်: Robot Maze ကို Program ရေးဆွဲပါ',
      shortIntroEn: 'Put all your new superpowers together! Combine sequencing, loops, conditions, and functions to conquer the grand maze challenge.',
      shortIntroMy: 'သင်ယူခဲ့သမျှ စွမ်းအားအားလုံးကို ပေါင်းစပ်လိုက်ကြရအောင်! Sequencing, Loops, Conditions နှင့် Functions များကို အသုံးချပြီး ဝင်္ကပါကြီးကို အောင်နိုင်အောင် လုပ်ကြမယ်။',
      learningObjectivesEn: [
        'Synthesize algorithms, sequences, loops, and conditions into a unified program.',
        'Plan and optimize a complete navigation path from Start to Goal.',
        'Confidently test, debug, and celebrate your graduation as a Junior Coder!'
      ],
      learningObjectivesMy: [
        'Algorithms, Sequences, Loops နှင့် Conditions များကို ပေါင်းစပ်၍ Program တစ်ခုအဖြစ် တည်ဆောက်နိုင်စေရန်။',
        'အစမှ ပန်းတိုင်အထိ အကောင်းဆုံး လမ်းကြောင်းကို စနစ်တကျ စီစဉ်ရေးဆွဲနိုင်စေရန်။',
        'ယုံကြည်မှုအပြည့်ဖြင့် စမ်းသပ်၊ အမှားပြင်ဆင်ပြီး Junior Coder အဖြစ် အောင်မြင်စွာ တက်လှမ်းနိုင်စေရန်။'
      ],
      explanationEn: [
        'Congratulations on reaching your capstone project! Over the last 9 lessons, you learned the fundamental building blocks of all modern software: instructions, sequencing, events, loops, conditions, variables, functions, and debugging.',
        'Now it is time to build a master navigation program for Byte the Robot. Your goal: Guide Byte across a challenging multi-obstacle grid, collect bonus energy batteries, and reach the glowing Golden Star at the exit.',
        'Before writing code, plan your strategy on paper: 1. Break the journey into sections, 2. Look for repetitive movements where you can save code with a **Loop**, 3. Use an **If-Condition** to check for walls, and 4. Wrap complex turns into a **Function**!'
      ],
      explanationMy: [
        'နောက်ဆုံး ပရောဂျက်ဆီကို ရောက်ရှိလာတဲ့အတွက် ဂုဏ်ယူပါတယ်! လွန်ခဲ့တဲ့ သင်ခန်းစာ ၉ ခုမှာ ခေတ်မီဆော့ဖ်ဝဲလ်တွေရဲ့ အခြေခံ အုတ်မြစ်အားလုံးဖြစ်တဲ့ ညွှန်ကြားချက်များ၊ အစီအစဉ်များ၊ Events၊ Loops၊ Conditions၊ Variables၊ Functions တွေနဲ့ Debugging တွေကို အောင်မြင်စွာ လေ့လာခဲ့ပြီးပါပြီ။',
        'အခု စက်ရုပ် Byte အတွက် အဓိက လမ်းကြောင်းရှာ ပရိုဂရမ်တစ်ခုကို အတူတူ ဖန်တီးကြပါမယ်။ ပန်းတိုင်ကတော့ အတားအဆီးများစွာရှိတဲ့ ဝင်္ကပါထဲကနေ စွမ်းအင်ဘက်ထရီတွေ စုဆောင်းပြီး ရွှေရောင်ကြယ်ပွင့်ဆီကို အောင်မြင်စွာ ရောက်ရှိဖို့ပဲ ဖြစ်ပါတယ်။',
        'Code မရေးခင် စက္ကူပေါ်မှာ အစီအစဉ်ဆွဲပါ: ၁။ လမ်းကြောင်းကို အပိုင်းလိုက် ခွဲခြမ်းပါ၊ ၂။ ထပ်ခါတလဲလဲ သွားရမယ့်နေရာတွေမှာ **Loop** သုံးပါ၊ ၃။ အတားအဆီးရှိမရှိ စစ်ဆေးဖို့ **IF** သုံးပါ၊ ၄။ ရှုပ်ထွေးတဲ့ အကွေ့တွေကို **Function** ဖြင့် ဖန်တီးပါ။'
      ],
      diagram: {
        type: 'grand-project-blueprint',
        captionEn: 'Grand Maze Architecture: Combine Loops + Conditions + Functions to reach the Star!',
        captionMy: 'ဝင်္ကပါ အောင်ပွဲခံ ဗိသုကာ: Loops + Conditions + Functions ပေါင်းစပ်၍ ကြယ်ဆီသို့ ချီတက်ပါ!',
        altEn: 'Maze grid with start, goal, loops, and condition checkmarks mapped out',
        altMy: 'ဝင်္ကပါ လမ်းကြောင်းနှင့် အဆင့်ဆင့် အသုံးပြုထားသော Code ပြ ပုံ'
      },
      analogyEn: {
        title: 'Building a Skyscraper with LEGO Bricks',
        description: 'Think of each concept like a special LEGO brick: Sequences are the foundation slabs, Loops are the repeated window floors, Conditions are the automatic sliding doors, and Functions are the pre-built elevator shafts. Together, they create a towering, magnificent building!'
      },
      analogyMy: {
        title: 'LEGO အတုံးများဖြင့် မိုးမျှော်တိုက် ဆောက်လုပ်ခြင်း ဥပမာ',
        description: 'သင်ယူခဲ့တဲ့ သဘောတရားတစ်ခုစီဟာ အထူး LEGO အတုံးလေးတွေလိုပါပဲ: Sequence က အုတ်မြစ်ဖြစ်ပြီး၊ Loop က အလွှာတိုင်းမှာ ထပ်ထည့်ရတဲ့ ပြတင်းပေါက်တွေ၊ Condition က အလိုအလျောက် ပွင့်တဲ့ တံခါး၊ Function က ဓာတ်လှေကားတို့ ဖြစ်ပါတယ်။ အားလုံးပေါင်းစပ်လိုက်တဲ့အခါ ကြီးကျယ်ခမ်းနားတဲ့ မိုးမျှော်တိုက်ကြီး ဖြစ်လာပါတယ်။'
      },
      workedExampleEn: {
        title: 'The Master Robot Navigation Program',
        scenario: 'Guide Byte: Move 3 steps North, turn East, move 2 steps past obstacles, reach the Star.',
        steps: [
          { stepNumber: 1, instruction: 'repeat(3) { moveForward(); }', outcome: 'Byte uses a Loop to stride 3 tiles North smoothly.' },
          { stepNumber: 2, instruction: 'turnRight();', outcome: 'Faces East toward the long corridor.' },
          { stepNumber: 3, instruction: 'if (isPathClear()) { moveForward(); } else { jump(); }', outcome: 'Checks path safety and proceeds forward.' },
          { stepNumber: 4, instruction: 'celebrateVictory();', outcome: 'Touchdown on the golden star! Confetti bursts and +50 XP awarded! 🎉' }
        ]
      },
      workedExampleMy: {
        title: 'အဓိက စက်ရုပ် လမ်းပြ ပရိုဂရမ် ဥပမာ',
        scenario: 'Byte ကို မြောက်ဘက်သို့ ၃ လှမ်း၊ အရှေ့ဘက်လှည့်၍ ၂ လှမ်းသွားကာ ကြယ်ဆီသို့ ရောက်ရှိစေခြင်း။',
        steps: [
          { stepNumber: 1, instruction: 'repeat(3) { moveForward(); }', outcome: 'Loop ကိုသုံးပြီး မြောက်ဘက်သို့ ၃ လှမ်း ညီညီညာညာ လျှောက်သွားသည်။' },
          { stepNumber: 2, instruction: 'turnRight();', outcome: 'အရှေ့ဘက် စင်္ကြံဆီသို့ မျက်နှာမူလိုက်သည်။' },
          { stepNumber: 3, instruction: 'if (isPathClear()) { moveForward(); } else { jump(); }', outcome: 'လမ်းရှင်းမရှင်း စစ်ဆေးပြီး ရှေ့သို့ ဆက်သွားသည်။' },
          { stepNumber: 4, instruction: 'celebrateVictory();', outcome: 'ရွှေရောင်ကြယ်ပေါ် ရောက်ရှိသွားသည်! အောင်ပွဲခံ မီးရှူးမီးပန်းများနှင့်အတူ +50 XP ရရှိသည်! 🎉' }
        ]
      },
      activity: {
        type: 'sequence-sorter',
        titleEn: 'Capstone Challenge: Final Maze Assembly',
        titleMy: 'နောက်ဆုံး စိန်ခေါ်မှု: ဝင်္ကပါ အောင်နိုင်ရေး အစီအစဉ်',
        instructionsEn: 'Organize the complete navigation program from initial power-on to the victory celebration!',
        instructionsMy: 'စက်နိုးချိန်မှစ၍ အောင်ပွဲခံချိန်အထိ ပြီးပြည့်စုံသော ပရိုဂရမ်ကို အစီအစဉ်တကျ စီတန်းပါ။',
        initialData: [
          { id: 'p2', textEn: 'Loop 3 times: Move forward along clear path', textMy: '၃ ကြိမ် Loop ပတ်၍ လမ်းရှင်းသည့်အတိုင်း ရှေ့သို့ လျှောက်ပါ' },
          { id: 'p4', textEn: 'Call celebrateVictory() at the Golden Star', textMy: 'ရွှေကြယ်ပွင့်ပေါ်တွင် celebrateVictory() ခေါ်ပါ' },
          { id: 'p1', textEn: 'Power on robot sensors and check battery', textMy: 'စက်ရုပ် အာရုံခံကိရိယာများ စက်နိုးပြီး ဘက်ထရီ စစ်ပါ' },
          { id: 'p3', textEn: 'Check Condition: If obstacle ahead, turn right', textMy: 'Condition စစ်ပါ: ရှေ့တွင် အတားအဆီးရှိလျှင် ညာဘက်လှည့်ပါ' }
        ],
        solution: ['p1', 'p2', 'p3', 'p4']
      },
      quizQuestions: [
        {
          id: 'q10-1',
          questionEn: 'Which coding concept helps prevent writing the same "step forward" line 20 times in a maze?',
          questionMy: 'ဝင်္ကပါထဲတွင် "ရှေ့သို့လျှောက်ပါ" ဟူသော စာကြောင်းကို အကြိမ် ၂၀ ထပ်မရေးရအောင် မည်သည့် Coding သဘောတရားက ကူညီသနည်း?',
          options: [
            { id: 'a', textEn: 'A Loop (Repeat block)', textMy: 'Loop (ထပ်ခါတလဲလဲ ပြုလုပ်သည့် block)' },
            { id: 'b', textEn: 'A sound effect speaker', textMy: 'အသံထွက် စပီကာ' },
            { id: 'c', textEn: 'Turning off the computer screen', textMy: 'ကွန်ပျူတာ မျက်နှာပြင် ပိတ်ပစ်ခြင်း' },
            { id: 'd', textEn: 'Buying a new mouse', textMy: 'mouse အသစ်တစ်ခု ဝယ်ခြင်း' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Correct! Loops handle repeated navigation commands with elegance and brevity.',
          explanationMy: 'မှန်ကန်ပါတယ်! Loop များက ထပ်ခါတလဲလဲ သွားရသော လမ်းကြောင်းများကို အလွယ်တကူ စီမံပေးပါသည်။'
        },
        {
          id: 'q10-2',
          questionEn: 'How should your robot decide whether to jump or step forward?',
          questionMy: 'ရှေ့သို့ ခြေတစ်လှမ်းတိုးမလား သို့မဟုတ် ခုန်မလားကို စက်ရုပ်က မည်သို့ ဆုံးဖြတ်သင့်သနည်း?',
          options: [
            { id: 'a', textEn: 'Use an IF-ELSE condition: IF (obstacleAhead) jump() ELSE moveForward()', textMy: 'IF-ELSE စစ်ဆေးချက်ကို သုံးပါ: IF (အတားအဆီးရှိလျှင်) jump() ELSE moveForward()' },
            { id: 'b', textEn: 'Guess with eyes closed', textMy: 'မျက်စိမှိတ်ပြီး မှန်းဆခိုင်းပါ' },
            { id: 'c', textEn: 'Walk backward into the wall', textMy: 'နံရံဆီသို့ နောက်ပြန်လျှောက်ပါ' },
            { id: 'd', textEn: 'Wait for rain to fall', textMy: 'မိုးရွာလာသည်အထိ စောင့်ပါ' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Spot on! An IF-ELSE condition evaluates whether an obstacle exists and takes the correct action.',
          explanationMy: 'မှန်ပါတယ်! IF-ELSE ဖြင့် အတားအဆီးရှိမရှိ စစ်ဆေးပြီး သင့်တော်သော လှုပ်ရှားမှုကို ရွေးချယ်စေရပါမည်။'
        },
        {
          id: 'q10-3',
          questionEn: 'What is the most important mindset of a successful programmer?',
          questionMy: 'အောင်မြင်သော Programmer တစ်ယောက်၏ အရေးအကြီးဆုံး စိတ်ဓာတ်မှာ အဘယ်နည်း?',
          options: [
            { id: 'a', textEn: 'Curiosity, patience, learning from bugs, and enjoying problem-solving', textMy: 'စူးစမ်းလိုစိတ်၊ စိတ်ရှည်မှု၊ အမှားများမှ သင်ခန်းစာယူခြင်းနှင့် ပြဿနာဖြေရှင်းရခြင်းကို ပျော်မွေ့ခြင်း' },
            { id: 'b', textEn: 'Never trying anything new', textMy: 'အသစ်အဆန်းများကို ဘယ်တော့မှ မကြိုးစားခြင်း' },
            { id: 'c', textEn: 'Giving up the first time code doesn’t run', textMy: 'Code အလုပ်မလုပ်သည်နှင့် ချက်ချင်း လက်လျှော့ခြင်း' },
            { id: 'd', textEn: 'Believing computers are magical wizards', textMy: 'ကွန်ပျူတာသည် မှော်ဆရာဖြစ်သည်ဟု ယုံကြည်ခြင်း' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Wonderful! You now have the mind of a true programmer: curious, analytical, resilient, and creative!',
          explanationMy: 'အရမ်းတော်တယ်! သင်ဟာ အမှန်တကယ် စူးစမ်းတတ်ပြီး ပြဿနာများကို ဖြေရှင်းနိုင်စွမ်းရှိတဲ့ Programmer စိတ်ဓာတ်ကို ပိုင်ဆိုင်သွားပါပြီ!'
        }
      ],
      summaryEn: [
        'Real-world software combines sequencing, loops, conditions, and functions together.',
        'Planning on paper before typing code saves time and prevents bugs.',
        'You have mastered the foundational core of computer programming! 🎓'
      ],
      summaryMy: [
        'တကယ့်ဆော့ဖ်ဝဲလ်များသည် Sequence, Loops, Conditions နှင့် Functions များကို ပေါင်းစပ်တည်ဆောက်ထားသည်။',
        'Code မရေးမီ စနစ်တကျ ကြိုတင်စဉ်းစားခြင်းက အချိန်ကုန်သက်သာစေပြီး အမှားများကို ကာကွယ်ပေးသည်။',
        'သင်သည် Computer Programming ၏ အဓိက အခြေခံသဘောတရားများကို အောင်မြင်စွာ တတ်ကျွမ်းသွားပါပြီ! 🎓'
      ]
    }
  ],

  // ---------------------------------------------------------------------------
  // Final Course Review & Assessment
  // ---------------------------------------------------------------------------
  finalReview: {
    badgeTitleEn: 'Junior Programming Explorer',
    badgeTitleMy: 'အခြေခံ ပရိုဂရမ်မင်း အောင်မြင်သူ',
    certificateTitleEn: 'Certificate of Achievement: Basic Programming for Kids',
    certificateTitleMy: 'အောင်လက်မှတ်: ကလေးများအတွက် အခြေခံ ပရိုဂရမ်မင်း သင်တန်း',
    summaryEn: [
      'You learned that computers follow exact instructions written in programming languages.',
      'You mastered algorithms and sequences — ordering steps logically to achieve a goal.',
      'You learned how events make programs interactive and responsive to user input.',
      'You harnessed the power of loops to eliminate boring repetition.',
      'You gave your code decision-making ability using Boolean conditions (If & Else).',
      'You stored and modified game scores and player names using variables.',
      'You organized complex code into reusable, modular functions.',
      'You became a fearless debugger, hunting down and squashing bugs like a detective!'
    ],
    summaryMy: [
      'ကွန်ပျူတာများသည် Programming ဘာသာစကားဖြင့် ရေးသားထားသော ညွှန်ကြားချက်များကို တိကျစွာ လိုက်နာကြောင်း သင်ယူခဲ့သည်။',
      'ပန်းတိုင်ရောက်ရန် အဆင့်ဆင့် စနစ်တကျ ရေးဆွဲရသော Algorithms နှင့် Sequence များကို ကျွမ်းကျင်စွာ တတ်မြောက်ခဲ့သည်။',
      'Events များက ဂိမ်းများနှင့် Website များကို လူသားတို့နှင့် အပြန်အလှန် ချိတ်ဆက်ပေးပုံကို သိရှိခဲ့သည်။',
      'Loops များကို သုံး၍ ထပ်ခါတလဲလဲ အလုပ်များကို အလွယ်တကူ စေခိုင်းနိုင်ခဲ့သည်။',
      'If & Else အခြေအနေများဖြင့် Code ကို စမတ်ကျကျ ဆုံးဖြတ်ချက်ချတတ်အောင် သင်ကြားပေးခဲ့သည်။',
      'Variables များကို အသုံးပြု၍ ရမှတ်များနှင့် နာမည်များကို မှတ်သားအသုံးပြုခဲ့သည်။',
      'Functions များကို သုံး၍ Code များကို သပ်ရပ်စွာ စုစည်းပြန်သုံးနိုင်ခဲ့သည်။',
      'စုံထောက်တစ်ယောက်လို အမှား (Bug) များကို မကြောက်မရွံ့ ရှာဖွေပြင်ဆင်နိုင်သော Debugger တစ်ဦး ဖြစ်လာခဲ့သည်။'
    ],
    learnedChecklistEn: [
      'I can explain what an algorithm is to my friends and family.',
      'I know why sequencing and step order is critical in coding.',
      'I can identify user events like clicks and keypresses.',
      'I know when to use a Repeat Loop to save lines of code.',
      'I can write If and Else conditions to guide robot decisions.',
      'I understand variables: Numbers, Strings, and Booleans.',
      'I can define a custom function and call it by name.',
      'I know how to debug mistakes systematically without giving up.'
    ],
    learnedChecklistMy: [
      'Algorithm ဆိုသည်မှာ ဘာလဲဆိုတာကို သူငယ်ချင်းများနှင့် မိသားစုကို ရှင်းပြနိုင်သည်။',
      'Coding တွင် အစီအစဉ်တကျဖြစ်မှု (Sequence) အဘယ်ကြောင့် အရေးကြီးသည်ကို သိရှိသည်။',
      'Click နှိပ်ခြင်း၊ ကီးနှိပ်ခြင်း စသည့် User Events များကို ခွဲခြားသိနိုင်သည်။',
      'Code များ ချွေတာရန် Repeat Loop ကို မည်သည့်အခါ သုံးရမည်ကို သိသည်။',
      'စက်ရုပ် ဆုံးဖြတ်ချက်ချနိုင်ရန် If နှင့် Else အခြေအနေများကို ရေးသားနိုင်သည်။',
      'Variables အမျိုးအစားများ (Numbers, Strings, Booleans) ကို နားလည်သည်။',
      'Function အသစ်တစ်ခုကို သတ်မှတ်ပြီး အမည်ခေါ်ယူ အသုံးပြုနိုင်သည်။',
      'လက်မလျှော့ဘဲ အမှားများကို စနစ်တကျ Debug ပြုလုပ်နိုင်သည်။'
    ],
    vocabulary: [
      {
        term: 'Algorithm',
        pronunciation: 'AL-guh-ri-thum',
        definitionEn: 'A step-by-step set of instructions designed to solve a problem or perform a task.',
        definitionMy: 'ပြဿနာတစ်ခုကို ဖြေရှင်းရန် သို့မဟုတ် အလုပ်တစ်ခု ပြီးမြောက်ရန် အဆင့်ဆင့် ရေးဆွဲထားသော ညွှန်ကြားချက်များ။',
        exampleEn: 'A cake recipe is a real-world algorithm for baking.',
        exampleMy: 'မုန့်ဖုတ်နည်း လမ်းညွှန်ချက်သည် နေ့စဉ်ဘဝထဲက Algorithm တစ်ခုဖြစ်သည်။'
      },
      {
        term: 'Sequence',
        pronunciation: 'SEE-kwens',
        definitionEn: 'The specific order in which instructions are executed, one after another.',
        definitionMy: 'ညွှန်ကြားချက်များကို တစ်ဆင့်ပြီးတစ်ဆင့် အထက်မှ အောက်သို့ လုပ်ဆောင်သွားသော အစီအစဉ်။',
        exampleEn: 'Putting on socks before shoes is the correct sequence.',
        exampleMy: 'ဖိနပ်မစီးမီ ခြေအိတ်အရင်စွပ်ခြင်းသည် မှန်ကန်သော Sequence ဖြစ်သည်။'
      },
      {
        term: 'Event',
        pronunciation: 'ih-VENT',
        definitionEn: 'An action or signal that triggers code to run, such as a mouse click or key press.',
        definitionMy: 'Mouse click နှိပ်ခြင်း၊ ကီးဘုတ်နှိပ်ခြင်း စသည့် Code ကို အလုပ်လုပ်စေသော အချက်ပြဖြစ်ရပ်။',
        exampleEn: 'When the spacebar is pressed, the jump event handler fires.',
        exampleMy: 'Spacebar ကို နှိပ်လိုက်သောအခါ ခုန်တက်စေသော Event အလုပ်လုပ်သည်။'
      },
      {
        term: 'Loop',
        pronunciation: 'LOOP',
        definitionEn: 'A coding construct that repeats a block of instructions multiple times.',
        definitionMy: 'ညွှန်ကြားချက် အစုအဝေးတစ်ခုကို အလိုရှိသော အကြိမ်အရေအတွက်အထိ ထပ်ခါတလဲလဲ လုပ်ဆောင်ပေးသော နည်းလမ်း။',
        exampleEn: 'Repeat 4 times: [Move forward, Turn right].',
        exampleMy: '၄ ကြိမ် ထပ်လုပ်ပါ: [ရှေ့သို့သွားပါ, ညာဘက်လှည့်ပါ]။'
      },
      {
        term: 'Condition',
        pronunciation: 'kun-DISH-un',
        definitionEn: 'A logical statement that evaluates to either True or False.',
        definitionMy: 'မှန် (True) သို့မဟုတ် မှား (False) ဟုသာ အဖြေထွက်သော ယုတ္တိတန် အခြေအနေ စစ်ဆေးချက်။',
        exampleEn: 'IF battery < 10, show recharge warning.',
        exampleMy: 'ဘက်ထရီ ၁၀ အောက် နည်းနေလျှင် အားသွင်းရန် သတိပေးချက် ပြပါ။'
      },
      {
        term: 'Variable',
        pronunciation: 'VAIR-ee-uh-bul',
        definitionEn: 'A named storage location in computer memory that holds changeable data.',
        definitionMy: 'အချက်အလက်များကို မှတ်သားထားပြီး အချိန်မရွေး ပြောင်းလဲနိုင်သော အမည်တပ် မှတ်ဉာဏ်သေတ္တာ။',
        exampleEn: 'let score = 100;',
        exampleMy: 'let score = 100;'
      },
      {
        term: 'Function',
        pronunciation: 'FUNGK-shun',
        definitionEn: 'A reusable, named block of code that carries out a particular action when called.',
        definitionMy: 'အမည်တစ်ခု ပေးထားပြီး လိုအပ်သည့်အခါ အကြိမ်ကြိမ် ခေါ်သုံးနိုင်သော Code အစုအဝေး။',
        exampleEn: 'function jump() { player.y += 50; }',
        exampleMy: 'function jump() { player.y += 50; }'
      },
      {
        term: 'Bug & Debugging',
        pronunciation: 'BUG / dee-BUG-ing',
        definitionEn: 'A bug is an error in code; debugging is finding, understanding, and fixing the bug.',
        definitionMy: 'Bug သည် Code ထဲက အမှားဖြစ်ပြီး Debugging သည် အဆိုပါ အမှားကို ရှာဖွေ ပြုပြင်ခြင်း ဖြစ်သည်။',
        exampleEn: 'Grace Hopper found an actual moth bug inside the Harvard Mark II computer.',
        exampleMy: 'Grace Hopper သည် ကွန်ပျူတာအတွင်း ညပ်နေသော တကယ့် ပိုးဖလံကောင် Bug ကို တွေ့ရှိခဲ့သည်။'
      }
    ],
    finalQuiz: [
      {
        id: 'fq-p1',
        questionEn: 'What is a computer program?',
        questionMy: 'Computer Program ဆိုသည်မှာ အဘယ်နည်း?',
        options: [
          { id: 'a', textEn: 'A set of precise step-by-step instructions for a machine to execute', textMy: 'စက်ပစ္စည်းက လိုက်နာလုပ်ဆောင်ရန် တိကျသော အဆင့်ဆင့် ညွှန်ကြားချက်များ' },
          { id: 'b', textEn: 'A physical hammer used to fix machines', textMy: 'စက်ပြင်ရန် သုံးသော တူ' },
          { id: 'c', textEn: 'A movie that plays in the cinema', textMy: 'ရုပ်ရှင်ရုံတွင် ပြသသော ရုပ်ရှင်' },
          { id: 'd', textEn: 'A type of electric light bulb', textMy: 'လျှပ်စစ် မီးသီး အမျိုးအစားတစ်ခု' }
        ],
        correctOptionId: 'a',
        explanationEn: 'Correct! Programs are orderly lists of instructions written by programmers.',
        explanationMy: 'မှန်ကန်ပါတယ်! ပရိုဂရမ်ဆိုသည်မှာ စက်က အလုပ်လုပ်ရန် တိကျစွာ ရေးသားထားသော ညွှန်ကြားချက်များ ဖြစ်သည်။'
      },
      {
        id: 'fq-p2',
        questionEn: 'Which is the best definition of an algorithm?',
        questionMy: 'အောက်ပါတို့အနက် Algorithm ၏ အကောင်းဆုံး အဓိပ္ပာယ်ဖွင့်ဆိုချက်မှာ အဘယ်နည်း?',
        options: [
          { id: 'a', textEn: 'A step-by-step procedure or plan to solve a problem', textMy: 'ပြဿနာတစ်ခုကို ဖြေရှင်းရန် အဆင့်ဆင့် ရေးဆွဲထားသော အစီအစဉ်' },
          { id: 'b', textEn: 'A computer monitor brand', textMy: 'ကွန်ပျူတာ မျက်နှာပြင် တံဆိပ်တစ်ခု' },
          { id: 'c', textEn: 'A game controller cord', textMy: 'ဂိမ်းလက်ကိုင်ခလုတ် ကြိုး' },
          { id: 'd', textEn: 'A secret code that nobody can read', textMy: 'မည်သူမျှ ဖတ်မရသော လျှို့ဝှက်ကုဒ်' }
        ],
        correctOptionId: 'a',
        explanationEn: 'Spot on! An algorithm is a logical roadmap to solve any given task.',
        explanationMy: 'မှန်ပါတယ်! Algorithm ဆိုသည်မှာ ပြဿနာတစ်ခုကို ဖြေရှင်းရန် အဆင့်ဆင့် လမ်းပြမြေပုံ ဖြစ်သည်။'
      },
      {
        id: 'fq-p3',
        questionEn: 'Why does sequence order matter in code?',
        questionMy: 'Code ထဲတွင် အစီအစဉ် (Sequence) သည် အဘယ်ကြောင့် အရေးကြီးသနည်း?',
        options: [
          { id: 'a', textEn: 'Because computers run code line-by-line; out-of-order steps cause bugs', textMy: 'ကွန်ပျူတာသည် တစ်ကြောင်းချင်း လုပ်ဆောင်သဖြင့် အစီအစဉ် မှားယွင်းပါက Error ဖြစ်နိုင်သောကြောင့်' },
          { id: 'b', textEn: 'It doesn’t matter; computers guess what you meant', textMy: 'အရေးမကြီးပါ၊ ကွန်ပျူတာက သင်ဆိုလိုသည်ကို မှန်းဆပေးနိုင်သည်' },
          { id: 'c', textEn: 'Because code lines must rhyme like poetry', textMy: 'ကဗျာကဲ့သို့ ကာရန်တူရမည် ဖြစ်သောကြောင့်' },
          { id: 'd', textEn: 'To change the desktop wallpaper color', textMy: 'Desktop နောက်ခံ အရောင်ပြောင်းရန်' }
        ],
        correctOptionId: 'a',
        explanationEn: 'Exactly. Line order is strictly followed by processors from top to bottom.',
        explanationMy: 'မှန်ပါတယ်! ကွန်ပျူတာများသည် အထက်မှ အောက်သို့ တိကျစွာ လိုက်နာလုပ်ဆောင်သောကြောင့် ဖြစ်သည်။'
      },
      {
        id: 'fq-p4',
        questionEn: 'Clicking a button with your mouse is an example of what?',
        questionMy: 'Mouse ဖြင့် ခလုတ်တစ်ခုကို နှိပ်လိုက်ခြင်းသည် မည်သည့်အရာ၏ ဥပမာ ဖြစ်သနည်း?',
        options: [
          { id: 'a', textEn: 'A user Event', textMy: 'User Event (အသုံးပြုသူ ဖြစ်ရပ်)' },
          { id: 'b', textEn: 'A broken motherboard', textMy: 'ပျက်စီးနေသော မザーဘုတ်' },
          { id: 'c', textEn: 'A power outage', textMy: 'မီးပျက်သွားခြင်း' },
          { id: 'd', textEn: 'A physical battery leak', textMy: 'ဘက်ထရီ ယိုစိမ့်ခြင်း' }
        ],
        correctOptionId: 'a',
        explanationEn: 'Correct! Clicks, taps, and keypresses are fundamental user events.',
        explanationMy: 'မှန်ကန်ပါတယ်! Mouse click နှိပ်ခြင်းသည် အဓိကကျသော User Event တစ်ခု ဖြစ်သည်။'
      },
      {
        id: 'fq-p5',
        questionEn: 'How many times will "Beep" sound in: "repeat(5) { playBeep(); }"?',
        questionMy: '"repeat(5) { playBeep(); }" တွင် "Beep" အသံ မည်မျှ မြည်မည်နည်း?',
        options: [
          { id: 'a', textEn: '5 times', textMy: '၅ ကြိမ်' },
          { id: 'b', textEn: '1 time', textMy: '၁ ကြိမ်' },
          { id: 'c', textEn: '0 times', textMy: '၀ ကြိမ်' },
          { id: 'd', textEn: '50 times', textMy: '၅၀ ကြိမ်' }
        ],
        correctOptionId: 'a',
        explanationEn: 'Spot on! The loop repeats the instruction exactly 5 times.',
        explanationMy: 'မှန်ပါတယ်! Loop သည် အတွင်းရှိ ညွှန်ကြားချက်ကို ၅ ကြိမ်တိတိ အလုပ်လုပ်စေသည်။'
      },
      {
        id: 'fq-p6',
        questionEn: 'What are the two Boolean values that a condition evaluates to?',
        questionMy: 'Condition စစ်ဆေးချက်တစ်ခုမှ ထွက်ပေါ်လာနိုင်သော Boolean တန်ဖိုး ၂ ခုမှာ အဘယ်နည်း?',
        options: [
          { id: 'a', textEn: 'True or False', textMy: 'True (မှန်) သို့မဟုတ် False (မှား)' },
          { id: 'b', textEn: 'Hot or Cold', textMy: 'ပူ သို့မဟုတ် အေး' },
          { id: 'c', textEn: 'Up or Down', textMy: 'အပေါ် သို့မဟုတ် အောက်' },
          { id: 'd', textEn: 'Cat or Dog', textMy: 'ကြောင် သို့မဟုတ် ခွေး' }
        ],
        correctOptionId: 'a',
        explanationEn: 'Correct! Boolean logic powers all computer condition testing.',
        explanationMy: 'မှန်ကန်ပါတယ်! ကွန်ပျူတာ၏ ဆုံးဖြတ်ချက်များသည် True နှင့် False ပေါ်တွင် အခြေခံသည်။'
      },
      {
        id: 'fq-p7',
        questionEn: 'If `let lives = 3;` and the hero loses 1 life, what is the new value?',
        questionMy: '`let lives = 3;` ဖြစ်ပြီး အသက် ၁ ခု ဆုံးရှုံးသွားပါက တန်ဖိုးအသစ်မှာ မည်မျှဖြစ်မည်နည်း?',
        options: [
          { id: 'a', textEn: '2', textMy: '၂' },
          { id: 'b', textEn: '4', textMy: '၄' },
          { id: 'c', textEn: '0', textMy: '၀' },
          { id: 'd', textEn: '-1', textMy: '-၁' }
        ],
        correctOptionId: 'a',
        explanationEn: 'Great! 3 minus 1 equals 2 remaining lives.',
        explanationMy: 'မှန်ပါတယ်! ၃ ထဲမှ ၁ နှုတ်လိုက်သဖြင့် အသက် ၂ ခု ကျန်ရှိပါမည်။'
      },
      {
        id: 'fq-p8',
        questionEn: 'Why do coders bundle instructions into a named function?',
        questionMy: 'Programmer များသည် ညွှန်ကြားချက်များကို Function အဖြစ် အဘယ်ကြောင့် စုစည်းကြသနည်း?',
        options: [
          { id: 'a', textEn: 'To make code modular, readable, and reusable without rewriting it', textMy: 'ထပ်ခါတလဲလဲ မရေးရဘဲ စနစ်တကျ ပြန်လည်အသုံးပြုနိုင်စေရန်' },
          { id: 'b', textEn: 'To make the program 10 times slower', textMy: 'ပရိုဂရမ်ကို ၁၀ ဆ နှေးကွေးသွားစေရန်' },
          { id: 'c', textEn: 'Because keyboards lack other letters', textMy: 'ကီးဘုတ်တွင် အခြားစာလုံးများ မရှိသောကြောင့်' },
          { id: 'd', textEn: 'To prevent saving the file', textMy: 'ဖိုင်ကို save မရအောင် တားဆီးရန်' }
        ],
        correctOptionId: 'a',
        explanationEn: 'Spot on! Functions make programs clean, organized, and reusable.',
        explanationMy: 'မှန်ပါတယ်! Function များသည် Code များကို သန့်ရှင်း၍ ပြန်လည်သုံးနိုင်အောင် စီစဉ်ပေးသည်။'
      },
      {
        id: 'fq-p9',
        questionEn: 'What is the process of finding and removing errors in code called?',
        questionMy: 'Code ထဲရှိ အမှားများကို ရှာဖွေပြီး ဖယ်ရှားပြင်ဆင်သည့် လုပ်ငန်းစဉ်ကို အဘယ်သို့ ခေါ်သနည်း?',
        options: [
          { id: 'a', textEn: 'Debugging', textMy: 'Debugging' },
          { id: 'b', textEn: 'Downloading', textMy: 'Downloading' },
          { id: 'c', textEn: 'Streaming', textMy: 'Streaming' },
          { id: 'd', textEn: 'Charging', textMy: 'Charging' }
        ],
        correctOptionId: 'a',
        explanationEn: 'Awesome! Debugging is the honored craft of making code work reliably.',
        explanationMy: 'အရမ်းတော်တယ်! အမှားရှာဖွေ ပြင်ဆင်ခြင်းကို Debugging ဟု ခေါ်ပါသည်။'
      },
      {
        id: 'fq-p10',
        questionEn: 'How should you approach writing a big, complex coding project?',
        questionMy: 'ကြီးမားရှုပ်ထွေးသော ပရောဂျက်တစ်ခုကို ရေးသားရာတွင် မည်သို့ ချဉ်းကပ်သင့်သနည်း?',
        options: [
          { id: 'a', textEn: 'Break it into small steps, test incrementally, and use loops and functions', textMy: 'သေးငယ်သော အဆင့်များအဖြစ် ခွဲခြမ်းပါ၊ တစ်ဆင့်ချင်း စမ်းသပ်ပါ၊ Loops နှင့် Functions များကို သုံးပါ' },
          { id: 'b', textEn: 'Type 1,000 lines as fast as possible without ever testing', textMy: 'ဘယ်တော့မှ မစမ်းသပ်ဘဲ စာကြောင်း ၁၀၀၀ ကို အမြန်ဆုံး ရိုက်ထည့်ပါ' },
          { id: 'c', textEn: 'Delete the operating system', textMy: 'ကွန်ပျူတာ OS တစ်ခုလုံးကို ဖျက်ပစ်ပါ' },
          { id: 'd', textEn: 'Ask someone else to do everything while you sleep', textMy: 'အိပ်နေစဉ် အခြားသူကို အကုန်လုပ်ခိုင်းပါ' }
        ],
        correctOptionId: 'a',
        explanationEn: 'Outstanding! Breaking big challenges into smaller bite-sized steps is the true secret of software engineering.',
        explanationMy: 'အလွန်ထူးချွန်ပါတယ်! ကြီးမားသော ပြဿနာများကို သေးငယ်သော အဆင့်များအဖြစ် ခွဲခြမ်းဖြေရှင်းခြင်းသည် အောင်မြင်သော Software Engineer များ၏ လျှို့ဝှက်ချက် ဖြစ်ပါသည်။'
      }
    ]
  }
};
