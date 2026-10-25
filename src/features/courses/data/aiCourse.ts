import { CourseData } from '../../../types/course.types';

export const aiCourse: CourseData = {
  id: 'ai',
  titleEn: 'AI for Kids',
  titleMy: 'ကလေးများအတွက် ဉာဏ်ရည်တု (AI)',
  badgeEmoji: '✨',
  targetAgeEn: 'Ages 8–14',
  targetAgeMy: 'အသက် ၈–၁၄ နှစ်',
  descriptionEn: 'Explore how computers learn from examples, recognize patterns, generate art and stories, and how we can use AI safely, fairly, and responsibly.',
  descriptionMy: 'ကွန်ပျူတာများက ဥပမာများမှတစ်ဆင့် သင်ယူပုံ၊ ပုံစံများကို မှတ်သားပုံ၊ စာနှင့်ပုံများကို ဖန်တီးပုံနှင့် AI ကို ဘေးကင်းလုံခြုံစွာ တာဝန်သိစွာ အသုံးပြုနည်းများကို လေ့လာပါ။',
  category: 'Artificial Intelligence',
  color: '#22c7d9',
  bgLight: '#e4f9fc',
  lessons: [
    // -------------------------------------------------------------------------
    // Lesson 1: What Is Artificial Intelligence?
    // -------------------------------------------------------------------------
    {
      id: 'ai-1',
      lessonNumber: 1,
      titleEn: 'What Is Artificial Intelligence?',
      titleMy: 'Artificial Intelligence (AI) ဆိုတာ ဘာလဲ?',
      shortIntroEn: 'Machines can’t actually think like humans, but they can be trained to solve clever puzzles! Discover what AI really is.',
      shortIntroMy: 'စက်တွေဟာ လူတွေလို တကယ်မတွေးနိုင်ပေမဲ့ ပုစ္ဆာတွေကို စမတ်ကျကျ ဖြေရှင်းနိုင်အောင် သင်ယူနိုင်ပါတယ်။ AI ဆိုတာ ဘာလဲ လေ့လာကြမယ်။',
      learningObjectivesEn: [
        'Define Artificial Intelligence in clear, realistic terms without hype or myths.',
        'Distinguish between natural human intelligence and machine simulations.',
        'Understand that AI is software powered by math, code, and data.'
      ],
      learningObjectivesMy: [
        'Artificial Intelligence ကို စိတ်ကူးယဉ်မှုများ မပါဘဲ လက်တွေ့ကျကျ အဓိပ္ပာယ်ဖွင့်ဆိုနိုင်စေရန်။',
        'လူသားတို့၏ သဘာဝဉာဏ်ရည်နှင့် စက်ပစ္စည်းတို့၏ တုပမှုကြား ကွာခြားချက်ကို သိရှိစေရန်။',
        'AI သည် သင်္ချာ၊ Code နှင့် Data များဖြင့် တည်ဆောက်ထားသော Software ဖြစ်ကြောင်း နားလည်စေရန်။'
      ],
      explanationEn: [
        'Have you ever seen a self-driving car slow down at a pedestrian crossing, or asked a voice assistant to play your favorite song? These technologies use **Artificial Intelligence**, or **AI**.',
        'The word "Artificial" means made by humans (not natural), and "Intelligence" means the ability to learn, think, and make good decisions. So AI refers to computer programs designed to perform tasks that normally require human smarts — such as recognizing faces, translating languages, or playing chess.',
        'It is very important to know: AI does NOT have feelings, consciousness, or a real brain! AI systems are mathematical pattern finders that run on computers. They learn rules by studying thousands of past examples provided by human programmers.'
      ],
      explanationMy: [
        'လူကူးမျဉ်းကြားမှာ အလိုအလျောက် ရပ်ပေးတဲ့ ကားတွေ ဒါမှမဟုတ် သီချင်းဖွင့်ခိုင်းလို့ရတဲ့ Voice Assistant တွေကို ကြုံဖူးပါသလား? ဒါတွေဟာ **Artificial Intelligence (AI)** ကို သုံးထားတာ ဖြစ်ပါတယ်။',
        '"Artificial" ဆိုတာ လူသားတွေ ဖန်တီးထားတာ (သဘာဝမဟုတ်တာ) ဖြစ်ပြီး၊ "Intelligence" ဆိုတာ သင်ယူခြင်း၊ စဉ်းစားခြင်းနှင့် ဆုံးဖြတ်ခြင်း စွမ်းရည်ဖြစ်ပါတယ်။ ဒါကြောင့် AI ဆိုတာ လူသားတွေလို မျက်နှာမှတ်မိခြင်း၊ ဘာသာပြန်ခြင်း၊ စစ်တုရင်ကစားခြင်း စတဲ့ အလုပ်တွေကို လုပ်နိုင်အောင် ဖန်တီးထားတဲ့ ကွန်ပျူတာ ပရိုဂရမ်တွေ ဖြစ်ပါတယ်။',
        'အရေးကြီးဆုံး သတိပြုရမှာကတော့ AI မှာ ခံစားချက်၊ အသိစိတ် ဒါမှမဟုတ် တကယ့်ဦးနှောက် မရှိပါဘူး! AI ဆိုတာ လူသားတွေ ပေးထားတဲ့ ဥပမာထောင်ပေါင်းများစွာကို လေ့လာပြီး သင်္ချာနည်းအရ ပုံစံရှာဖွေပေးတဲ့ Software သာ ဖြစ်ပါတယ်။'
      ],
      diagram: {
        type: 'ai-definition-comparison',
        captionEn: 'Human Intelligence has emotions and common sense. AI uses mathematical pattern recognition.',
        captionMy: 'လူသားဉာဏ်ရည်တွင် ခံစားချက်နှင့် အသိတရားရှိသည်။ AI သည် သင်္ချာပုံစံ မှတ်သားမှုကို သုံးသည်။',
        altEn: 'Comparison diagram between human brain with thoughts/feelings and AI chip processing data points',
        altMy: 'လူ့ဦးနှောက်နှင့် AI စနစ်တို့၏ ကွာခြားချက်ပြ မျဉ်းကားချပ်'
      },
      analogyEn: {
        title: 'The Calculator vs. The Chess Master',
        description: 'A pocket calculator can multiply 9,482 × 7,319 in a microsecond, which is way faster than any human. But that doesn’t mean the calculator is "alive" or "wise" — it is just executing math algorithms. AI works in a similar way, but with more complex math and data patterns!'
      },
      analogyMy: {
        title: 'ဂဏန်းပေါင်းစက်နှင့် စစ်တုရင် ကစားသူ ဥပမာ',
        description: 'ဂဏန်းပေါင်းစက်လေးဟာ လူတွေထက် အဆပေါင်းများစွာ မြန်မြန် တွက်နိုင်ပေမဲ့ သူဟာ သက်ရှိမဟုတ်သလို ဉာဏ်ကြီးရှင်လည်း မဟုတ်ပါဘူး။ သင်္ချာနည်းအရ အလုပ်လုပ်တာသာ ဖြစ်ပါတယ်။ AI လည်း ထိုနည်းတူ သင်္ချာနှင့် Data များကို အခြေခံ၍ ပိုမိုရှုပ်ထွေးသော ပုံစံများကို တွက်ချက်ခြင်း ဖြစ်ပါတယ်။'
      },
      workedExampleEn: {
        title: 'How a Vacuum Robot Finds Its Way',
        scenario: 'A smart cleaning robot navigates around chair legs and avoids falling down stairs.',
        steps: [
          { stepNumber: 1, instruction: 'Sensors scan surroundings', outcome: 'Infrared beams measure distance to walls and stairs.' },
          { stepNumber: 2, instruction: 'AI algorithm checks patterns', outcome: 'Matches pattern: "Floor drops suddenly = STAIRCASE HAZARD".' },
          { stepNumber: 3, instruction: 'Decision made in code', outcome: 'Stop wheels immediately and reverse 180 degrees.' },
          { stepNumber: 4, instruction: 'Safe cleaning continues', outcome: 'The robot cleans the floor without tumbling down the steps.' }
        ]
      },
      workedExampleMy: {
        title: 'ဖုန်စုပ်စက်ရုပ် လမ်းရှာဖွေပုံ ဥပမာ',
        scenario: 'စမတ် ဖုန်စုပ်စက်ရုပ်လေးသည် ကုလားထိုင်ခြေထောက်များကို ရှောင်ပြီး လှေကားမှ မပြုတ်ကျအောင် သွားလာပုံ။',
        steps: [
          { stepNumber: 1, instruction: 'အာရုံခံကိရိယာများက ပတ်ဝန်းကျင်ကို စကင်ဖတ်သည်', outcome: 'အနီအောက်ရောင်ခြည်ဖြင့် နံရံနှင့် လှေကားအကွာအဝေးကို တိုင်းတာသည်။' },
          { stepNumber: 2, instruction: 'AI algorithm က ပုံစံကို စစ်ဆေးသည်', outcome: '"ကြမ်းပြင် ရုတ်တရက် နိမ့်သွားသည် = လှေကားအန္တရာယ်" ဟု မှတ်မိသည်။' },
          { stepNumber: 3, instruction: 'Code ထဲတွင် ဆုံးဖြတ်ချက်ချသည်', outcome: 'ဘီးများကို ချက်ချင်းရပ်ပြီး နောက်သို့ ၁၈၀ ဒီဂရီ လှည့်လိုက်သည်။' },
          { stepNumber: 4, instruction: 'ဘေးကင်းစွာ ဆက်လက် သန့်ရှင်းရေးလုပ်သည်', outcome: 'စက်ရုပ်သည် လှေကားမှ ပြုတ်မကျဘဲ အခန်းကို ဆက်လက် သန့်ရှင်းပေးသည်။' }
        ]
      },
      activity: {
        type: 'classification-sorter',
        titleEn: 'AI or Traditional Program?',
        titleMy: 'AI လား ရိုးရိုး Program လား ခွဲခြားခြင်း',
        instructionsEn: 'Sort each system into either "Learns from Data (AI)" or "Follows Fixed Rules (Traditional)"!',
        instructionsMy: 'အောက်ပါစနစ်များကို "Data မှ သင်ယူသော AI" သို့မဟုတ် "ပုံသေစည်းမျဉ်းအတိုင်းသာ လုပ်သော ရိုးရိုး Program" အဖြစ် ခွဲခြားပေးပါ။',
        initialData: [
          { item: 'Face Unlock on a Smartphone', category: 'ai' },
          { item: 'A digital stopwatch counting seconds', category: 'traditional' },
          { item: 'Spam email filter that adapts to new tricks', category: 'ai' },
          { item: 'A basic handheld flashlight switch', category: 'traditional' }
        ]
      },
      quizQuestions: [
        {
          id: 'q-ai1-1',
          questionEn: 'What does the abbreviation "AI" stand for?',
          questionMy: '"AI" ဆိုသည့် စကားလုံး၏ အပြည့်အစုံမှာ အဘယ်နည်း?',
          options: [
            { id: 'a', textEn: 'Artificial Intelligence', textMy: 'Artificial Intelligence (ဉာဏ်ရည်တု)' },
            { id: 'b', textEn: 'Automated Internet', textMy: 'Automated Internet' },
            { id: 'c', textEn: 'Alien Information', textMy: 'Alien Information' },
            { id: 'd', textEn: 'Apples and Ice cream', textMy: 'Apples and Ice cream' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Correct! AI stands for Artificial Intelligence — human-made software that simulates intelligent tasks.',
          explanationMy: 'မှန်ကန်ပါတယ်! AI ၏ အပြည့်အစုံမှာ Artificial Intelligence ဖြစ်ပါသည်။'
        },
        {
          id: 'q-ai1-2',
          questionEn: 'Does an AI system have real feelings, consciousness, or emotions?',
          questionMy: 'AI စနစ်များတွင် တကယ့်ခံစားချက်၊ အသိစိတ် သို့မဟုတ် စိတ်ခံစားမှုများ ရှိပါသလား?',
          options: [
            { id: 'a', textEn: 'No, AI is computer code running on mathematics and data', textMy: 'မရှိပါ၊ AI သည် သင်္ချာနှင့် Data များဖြင့် အလုပ်လုပ်သော Computer Code သာ ဖြစ်သည်' },
            { id: 'b', textEn: 'Yes, AI gets angry when it loses a game', textMy: 'ရှိပါသည်၊ ဂိမ်းရှုံးပါက AI သည် စိတ်ဆိုးတတ်သည်' },
            { id: 'c', textEn: 'Yes, AI has a human heart inside', textMy: 'ရှိပါသည်၊ AI အတွင်းတွင် လူ့နှလုံးသား ရှိသည်' },
            { id: 'd', textEn: 'Only on birthdays', textMy: 'မွေးနေ့များတွင်သာ ရှိသည်' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Spot on! AI mimics intelligent tasks, but it possesses no feelings, awareness, or life.',
          explanationMy: 'မှန်ပါတယ်! AI သည် ဉာဏ်ရည်ရှိသကဲ့သို့ အလုပ်လုပ်ပြနိုင်သော်လည်း ခံစားချက်နှင့် သက်ရှိအသိတရား မရှိပါ။'
        },
        {
          id: 'q-ai1-3',
          questionEn: 'How does an AI model become capable of recognizing things?',
          questionMy: 'AI Model တစ်ခုသည် အရာဝတ္ထုများကို မည်သို့ မှတ်မိနိုင်လာသနည်း?',
          options: [
            { id: 'a', textEn: 'By analyzing thousands of training examples and discovering patterns', textMy: 'လေ့ကျင့်ရေး ဥပမာ ထောင်ပေါင်းများစွာကို လေ့လာဆန်းစစ်ပြီး ပုံစံများကို ရှာဖွေခြင်းဖြင့်' },
            { id: 'b', textEn: 'By drinking magical potions', textMy: 'မှော်ဆေးရည် သောက်ခြင်းဖြင့်' },
            { id: 'c', textEn: 'By resting under a tree in the afternoon', textMy: 'နေ့လယ်ခင်း သစ်ပင်ရိပ်အောက်တွင် အနားယူခြင်းဖြင့်' },
            { id: 'd', textEn: 'It knows everything instantly when manufactured without any data', textMy: 'စက်ရုံမှ ထုတ်လုပ်လိုက်သည်နှင့် Data မလိုဘဲ အားလုံးကို ချက်ချင်းသိသည်' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Awesome! AI requires massive amounts of curated data and examples to learn patterns.',
          explanationMy: 'အရမ်းတော်တယ်! AI သည် ပုံစံများကို နားလည်နိုင်ရန် ဥပမာ အမြောက်အမြားကို လေ့လာဆန်းစစ်ရပါသည်။'
        }
      ],
      summaryEn: [
        'AI stands for Artificial Intelligence: human-made systems that perform smart tasks.',
        'AI is not magic or alive — it is powered by software, mathematics, and data.',
        'AI learns patterns from examples rather than having conscious thoughts.'
      ],
      summaryMy: [
        'AI ဆိုသည်မှာ လူသားတို့ ဖန်တီးထားသော စမတ်ကျသည့် စနစ် (Artificial Intelligence) ဖြစ်သည်။',
        'AI သည် မှော်အတတ် မဟုတ်သလို သက်ရှိလည်း မဟုတ်ဘဲ Software, သင်္ချာနှင့် Data များဖြင့် အလုပ်လုပ်သည်။',
        'AI သည် ခံစားတွေးခေါ်ခြင်း မရှိဘဲ ဥပမာများမှတစ်ဆင့် ပုံစံများကို သင်ယူမှတ်သားသည်။'
      ]
    },

    // -------------------------------------------------------------------------
    // Lesson 2: AI in Everyday Life
    // -------------------------------------------------------------------------
    {
      id: 'ai-2',
      lessonNumber: 2,
      titleEn: 'AI in Everyday Life',
      titleMy: 'နေ့စဉ်ဘဝထဲက AI နည်းပညာများ',
      shortIntroEn: 'You probably interact with AI every single day without even realizing it! Let’s explore where AI lives around us.',
      shortIntroMy: 'သင် သတိမထားမိဘဲ နေ့တိုင်း AI ကို အသုံးပြုနေကြတာ ဖြစ်နိုင်ပါတယ်! ကျွန်ုပ်တို့ ပတ်ဝန်းကျင်က AI တွေကို ရှာဖွေကြည့်ရအောင်။',
      learningObjectivesEn: [
        'Identify common everyday AI applications in smartphones, homes, and entertainment.',
        'Understand recommendation algorithms (video streaming and music apps).',
        'Recognize the benefits and convenience AI brings to everyday life.'
      ],
      learningObjectivesMy: [
        'စမတ်ဖုန်းများ၊ အိမ်များနှင့် ဖျော်ဖြေရေးများတွင် တွေ့ရသော နေ့စဉ်သုံး AI များကို ခွဲခြားသိရှိစေရန်။',
        'သီချင်းနှင့် ဗီဒီယို အကြံပြုပေးသော Recommendation Algorithms များကို နားလည်စေရန်။',
        'AI သည် နေ့စဉ်ဘဝကို မည်သို့ လွယ်ကူအဆင်ပြေစေသည်ကို သိရှိစေရန်။'
      ],
      explanationEn: [
        'AI isn’t just in sci-fi movies about flying spaceships. It is already quietly working all around you right now!',
        'When you watch videos online, how does the app know which video you might want to watch next? An **AI Recommendation Engine** analyzes the videos you watched before, notices patterns (like "loves funny cat videos"), and recommends similar ones.',
        'Other everyday examples include: **Spam Filters** in email that stop junk mail before you see it, **Navigation Apps** that predict traffic jams and find the fastest route, and **Camera Autofocus** that instantly detects faces to take sharp photos.'
      ],
      explanationMy: [
        'AI ဆိုတာ ရုပ်ရှင်ထဲက အာကာသယာဉ်တွေမှာတင် ရှိတာမဟုတ်ပါဘူး။ အခုချိန်မှာ သင့်ပတ်ဝန်းကျင်မှာ အသံတိတ် အလုပ်လုပ်ပေးနေပါပြီ!',
        'အင်တာနက်မှာ ဗီဒီယို ကြည့်တဲ့အခါ သင် ဘာဗီဒီယို ဆက်ကြည့်ချင်မလဲဆိုတာ App က ဘယ်လိုသိသလဲ? **AI Recommendation Engine** က သင်အရင်က ကြည့်ခဲ့တဲ့ ဗီဒီယိုတွေရဲ့ ပုံစံကို လေ့လာပြီး (ဥပမာ "ကြောင်ကာတွန်း ကြိုက်တယ်")၊ အလားတူ ဗီဒီယိုတွေကို အကြံပြုပေးတာ ဖြစ်ပါတယ်။',
        'အခြား နေ့စဉ်သုံး AI တွေကတော့: မလိုလားအပ်တဲ့ အီးမေးလ်တွေကို ဖယ်ရှားပေးတဲ့ **Spam Filters**၊ ကားပိတ်မည့်လမ်းကို ကြိုတင်ခန့်မှန်းပေးတဲ့ **Google Maps**၊ မျက်နှာကို အလိုအလျောက် ချိန်ပေးတဲ့ **Camera Autofocus** စတာတွေ ဖြစ်ကြပါတယ်။'
      ],
      diagram: {
        type: 'everyday-ai-ecosystem',
        captionEn: 'AI powers maps, music recommendations, speech recognition, and medical imaging.',
        captionMy: 'မြေပုံများ၊ သီချင်းအကြံပြုချက်များ၊ အသံမှတ်သားမှုနှင့် ဆေးဘက်ဆိုင်ရာ ရုပ်ပုံများတွင် AI ပါဝင်သည်။',
        altEn: 'Icons showing smartphone, camera, speaker, and map pin all connected to AI central hub',
        altMy: 'စမတ်ဖုန်း၊ ကင်မရာ၊ စပီကာနှင့် မြေပုံများ AI နှင့် ချိတ်ဆက်နေပုံပြ ပုံ'
      },
      analogyEn: {
        title: 'The Helpful School Librarian',
        description: 'Imagine a friendly librarian who notices: "Every time you visit, you check out books about dinosaurs." Next week, when a brand-new dinosaur book arrives, the librarian places it on your reading desk! That’s exactly what recommendation AI does.'
      },
      analogyMy: {
        title: 'ဖော်ရွေသော စာကြည့်တိုက်မှူး ဥပမာ',
        description: 'စာကြည့်တိုက်ကို သင်လာတိုင်း ဒိုင်နိုဆောစာအုပ်တွေပဲ ငှားဖတ်တာကို သတိထားမိတဲ့ စာကြည့်တိုက်မှူးကြီးလိုပါပဲ။ ဒိုင်နိုဆောစာအုပ် အသစ်ရောက်လာတာနဲ့ သင့်စားပွဲပေါ် ကြိုတင် တင်ပေးထားသလိုမျိုး Recommendation AI ကလည်း သင်ကြိုက်တတ်တာကို မှတ်သားပြီး အကြံပြုပေးတာ ဖြစ်ပါတယ်။'
      },
      workedExampleEn: {
        title: 'How Navigation Maps Predict Traffic',
        scenario: 'Your family is driving to the zoo on a Saturday morning.',
        steps: [
          { stepNumber: 1, instruction: 'Collect road speed data', outcome: 'Map app collects speed data from thousands of vehicles.' },
          { stepNumber: 2, instruction: 'AI recognizes congestion pattern', outcome: 'Main highway is 70% slower than usual due to road work.' },
          { stepNumber: 3, instruction: 'Calculate alternative detour', outcome: 'Finds a clear back road that saves 18 minutes.' },
          { stepNumber: 4, instruction: 'Re-route voice direction', outcome: 'Voice says: "Turn right onto Riverside Drive to save 18 minutes!"' }
        ]
      },
      workedExampleMy: {
        title: 'မြေပုံ App များ ယာဉ်ကြောပိတ်ဆို့မှု တွက်ချက်ပုံ ဥပမာ',
        scenario: 'စနေနေ့မနက်တွင် တိရစ္ဆာန်ရုံသို့ ကားဖြင့် သွားရောက်ခြင်း။',
        steps: [
          { stepNumber: 1, instruction: 'လမ်းပေါ်ရှိ ကားများ၏ အမြန်နှုန်းကို စုဆောင်းသည်', outcome: 'ထောင်ပေါင်းများစွာသော ဖုန်းများမှ အမြန်နှုန်းကို ရယူသည်။' },
          { stepNumber: 2, instruction: 'AI က ကားပိတ်သည့် ပုံစံကို တွေ့ရှိသည်', outcome: 'လမ်းပြင်နေသဖြင့် ပင်မလမ်းမကြီးတွင် ကားများ ၇၀% နှေးကွေးနေသည်။' },
          { stepNumber: 3, instruction: 'အခြား လမ်းလွှဲကို ရှာဖွေတွက်ချက်သည်', outcome: '၁၈ မိနစ် သက်သာစေမည့် အတွင်းလမ်းကို တွေ့ရှိသည်။' },
          { stepNumber: 4, instruction: 'အသံဖြင့် လမ်းညွှန်ပေးသည်', outcome: '"၁၈ မိနစ် သက်သာစေရန် ညာဘက်သို့ ကွေ့ပါ" ဟု ညွှန်ကြားပေးသည်။' }
        ]
      },
      activity: {
        type: 'classification-sorter',
        titleEn: 'Everyday AI Detective Hunt',
        titleMy: 'နေ့စဉ်ဘဝထဲက AI စုံထောက် လိုက်လံရှာဖွေခြင်း',
        instructionsEn: 'Categorize each task into whether it uses AI or simple mechanical switches!',
        instructionsMy: 'အောက်ပါအရာများတွင် AI ပါဝင်သလား သို့မဟုတ် ရိုးရိုး စက်ခလုတ်သာ ဖြစ်သလား ခွဲခြားပါ။',
        initialData: [
          { item: 'Voice Assistant answering "What is the weather?"', category: 'ai' },
          { item: 'A mechanical door latch clicking shut', category: 'traditional' },
          { item: 'Photo app auto-grouping pictures of your dog', category: 'ai' },
          { item: 'An ordinary analog wall clock ticking', category: 'traditional' }
        ]
      },
      quizQuestions: [
        {
          id: 'q-ai2-1',
          questionEn: 'How does a music streaming app know what songs you might like?',
          questionMy: 'သီချင်း App များသည် သင်ကြိုက်နိုင်သော သီချင်းများကို မည်သို့ သိရှိနိုင်သနည်း?',
          options: [
            { id: 'a', textEn: 'An AI analyzes patterns in the songs you listened to and completed', textMy: 'သင်နားထောင်ခဲ့သော သီချင်းများ၏ ပုံစံများကို AI က လေ့လာဆန်းစစ်ပြီး အကြံပြုပေးသည်' },
            { id: 'b', textEn: 'A wizard whispers in the computer’s ear', textMy: 'မှော်ဆရာက ကွန်ပျူတာနားထဲ လာပြောပေးသည်' },
            { id: 'c', textEn: 'It always plays random songs without any logic', textMy: 'မည်သည့်အကြောင်းပြချက်မှ မရှိဘဲ ကျပန်းဖွင့်ပေးသည်' },
            { id: 'd', textEn: 'It reads your school notebook', textMy: 'သင့်ကျောင်းစာအုပ်ကို လာဖတ်သွားသည်' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Correct! Recommendation algorithms study your listening history to find similar tunes.',
          explanationMy: 'မှန်ကန်ပါတယ်! သင်နားထောင်ခဲ့သည့် သမိုင်းကြောင်းကို AI က လေ့လာပြီး အလားတူ သီချင်းများကို အကြံပြုပေးခြင်း ဖြစ်သည်။'
        },
        {
          id: 'q-ai2-2',
          questionEn: 'Which of these everyday tools uses Artificial Intelligence?',
          questionMy: 'အောက်ပါတို့အနက် မည်သည့် နေ့စဉ်သုံး ပစ္စည်းသည် AI ကို အသုံးပြုသနည်း?',
          options: [
            { id: 'a', textEn: 'Speech-to-text voice typing on a smartphone', textMy: 'စမတ်ဖုန်းပေါ်တွင် အသံဖြင့် စာရိုက်ခြင်း (Speech-to-text)' },
            { id: 'b', textEn: 'A wooden ruler measuring centimeters', textMy: 'စင်တီမီတာ တိုင်းသော သစ်သားပေတံ' },
            { id: 'c', textEn: 'A plastic water bottle', textMy: 'ပလတ်စတစ် ရေသန့်ဘူး' },
            { id: 'd', textEn: 'A metal paperclip', textMy: 'စက္ကူညှပ် သံကလစ်' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Spot on! Converting human speech into written words requires complex AI neural networks.',
          explanationMy: 'မှန်ပါတယ်! လူ့အသံကို စာသားအဖြစ် ပြောင်းလဲပေးရာတွင် AI အသံမှတ်သားမှုစနစ်ကို အသုံးပြုရပါသည်။'
        },
        {
          id: 'q-ai2-3',
          questionEn: 'Why do navigation apps use AI traffic predictions?',
          questionMy: 'မြေပုံ App များသည် ယာဉ်ကြောပိတ်ဆို့မှု ခန့်မှန်းရန် AI ကို အဘယ်ကြောင့် သုံးသနည်း?',
          options: [
            { id: 'a', textEn: 'To save drivers time, reduce fuel waste, and suggest clear roads', textMy: 'အချိန်ကုန်သက်သာစေရန်၊ ဆီစားသက်သာစေရန်နှင့် ရှင်းလင်းသော လမ်းများကို ညွှန်ပြရန်' },
            { id: 'b', textEn: 'To make everyone drive in circles', textMy: 'လူတိုင်းကို စက်ဝိုင်းပတ် မောင်းစေရန်' },
            { id: 'c', textEn: 'To turn all stoplights green instantly', textMy: 'မီးနီအားလုံးကို ချက်ချင်း မီးစိမ်းပြောင်းပစ်ရန်' },
            { id: 'd', textEn: 'To play video games while driving', textMy: 'ကားမောင်းရင်း ဂိမ်းဆော့ရန်' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Awesome! Real-time traffic analysis helps millions of people travel efficiently every day.',
          explanationMy: 'အရမ်းတော်တယ်! အချိန်နှင့်တစ်ပြေးညီ လမ်းကြောင်းဆန်းစစ်မှုက ခရီးသည်များကို အဆင်ပြေချောမွေ့စေပါသည်။'
        }
      ],
      summaryEn: [
        'AI is already deeply integrated into maps, cameras, music apps, and email.',
        'Recommendation engines discover patterns in our interests to suggest helpful media.',
        'Everyday AI makes life safer, faster, and more convenient when used thoughtfully.'
      ],
      summaryMy: [
        'AI သည် မြေပုံများ၊ ကင်မရာများ၊ သီချင်း App များနှင့် အီးမေးလ်များတွင် လက်တွေ့ အသုံးချနေပြီ ဖြစ်သည်။',
        'Recommendation Engine များသည် ကျွန်ုပ်တို့ စိတ်ဝင်စားမှုကို လေ့လာပြီး သင့်တော်သည်များကို အကြံပြုပေးသည်။',
        'စနစ်တကျ အသုံးပြုပါက နေ့စဉ်ဘဝကို ပိုမိုမြန်ဆန်၊ ဘေးကင်းပြီး အဆင်ပြေစေပါသည်။'
      ]
    },

    // -------------------------------------------------------------------------
    // Lesson 3: How Machines Learn from Examples
    // -------------------------------------------------------------------------
    {
      id: 'ai-3',
      lessonNumber: 3,
      titleEn: 'How Machines Learn from Examples',
      titleMy: 'စက်ပစ္စည်းများ ဥပမာများမှ သင်ယူပုံ',
      shortIntroEn: 'How does a toddler learn what an "apple" is? By seeing lots of apples! Machines learn the exact same way.',
      shortIntroMy: 'ကလေးငယ်တစ်ယောက်ဟာ "ပန်းသီး" ဆိုတာကို ဘယ်လိုသိလာသလဲ? ပန်းသီးတွေကို အကြိမ်ကြိမ် တွေ့ဖူးလို့ပါ! ကွန်ပျူတာတွေလည်း ဒီအတိုင်းပဲ သင်ယူကြပါတယ်။',
      learningObjectivesEn: [
        'Understand the core difference between rule-based programming and machine learning.',
        'Learn how repetition and positive examples train a computer model.',
        'Recognize the concept of "Features" (color, shape, texture) in learning.'
      ],
      learningObjectivesMy: [
        'စည်းမျဉ်းရေးသားသော Programming နှင့် ဥပမာမှသင်ယူသော Machine Learning တို့၏ ကွာခြားချက်ကို သိရှိစေရန်။',
        'ထပ်ခါတလဲလဲ ဥပမာများက Model တစ်ခုကို မည်သို့ သင်ကြားပေးသည်ကို နားလည်စေရန်။',
        'သင်ယူရာတွင် အသုံးပြုသော "Features" (အရောင်၊ ပုံသဏ္ဌာန်၊ မျက်နှာပြင်) သဘောတရားကို သိရှိစေရန်။'
      ],
      explanationEn: [
        'In traditional programming (which you learned in Course 1), the human programmer writes down every single rule: "If X happens, do Y." But what if you wanted to write rules to recognize a cat in a photo? You would need millions of rules for fur, whiskers, ears, angles, and lighting — it would be impossible to code by hand!',
        'This is where **Machine Learning (ML)** changes the game. Instead of writing rules, programmers feed the computer thousands of photos labeled "CAT" and thousands of photos labeled "NOT A CAT".',
        'The computer inspects the photos, looks at tiny pixels, and figures out the common patterns (called **Features**) on its own — like pointy triangular ears, whisker lines, and almond-shaped eyes. Next time it sees a new cat photo, it checks for those patterns!'
      ],
      explanationMy: [
        'သင်တန်း ၁ မှာ သင်ယူခဲ့တဲ့ ရိုးရိုး Programming မှာ လူသားက စည်းမျဉ်းအားလုံးကို တစ်ခုချင်း ရေးပေးရပါတယ်: "ဒီလိုဖြစ်ရင် ဒါလုပ်"။ ဒါပေမဲ့ ဓာတ်ပုံထဲမှာ ကြောင်တစ်ကောင် ပါမပါ ခွဲခြားဖို့ စည်းမျဉ်းတွေ ရေးမယ်ဆိုရင် အမွေး၊ နှုတ်ခမ်းမွေး၊ နားရွက်၊ ထောင့်အမျိုးမျိုး၊ အလင်းအမှောင် စသဖြင့် စည်းမျဉ်းသန်းပေါင်းများစွာ ရေးရမှာဖြစ်ပြီး လက်ဖြင့်ရေးရန် မဖြစ်နိုင်ပါဘူး!',
        'ဒါကြောင့် **Machine Learning (ML)** ပေါ်ပေါက်လာတာ ဖြစ်ပါတယ်။ စည်းမျဉ်းတွေ ရေးမယ့်အစား ကွန်ပျူတာကို "ကြောင်ပုံ" ထောင်ပေါင်းများစွာနဲ့ "ကြောင်မဟုတ်သောပုံ" ထောင်ပေါင်းများစွာကို ပြသပေးလိုက်ပါတယ်။',
        'ကွန်ပျူတာက ဓာတ်ပုံထဲက Pixel လေးတွေကို စစ်ဆေးပြီး တြိဂံနားရွက်၊ နှုတ်ခမ်းမွေးစတဲ့ ဘုံလက္ခဏာရပ်များ (**Features**) ကို သူ့ဘာသာသူ ရှာဖွေမှတ်သားသွားပါတယ်။ နောက်တစ်ခါ ကြောင်ပုံအသစ် တွေ့တဲ့အခါ အဲဒီလက္ခဏာတွေ ပါမပါ စစ်ဆေးပြီး မှတ်မိသွားတာ ဖြစ်ပါတယ်။'
      ],
      diagram: {
        type: 'traditional-vs-ml-flow',
        captionEn: 'Traditional: Rules + Data = Answers. Machine Learning: Data + Answers = Learned Rules!',
        captionMy: 'ရိုးရိုး Coding: စည်းမျဉ်း + အချက်အလက် = အဖြေ။ Machine Learning: အချက်အလက် + အဖြေ = စည်းမျဉ်းများ ထွက်ပေါ်လာခြင်း!',
        altEn: 'Diagram comparing Traditional Programming flow with Machine Learning training flow',
        altMy: 'ရိုးရိုး Coding နှင့် Machine Learning သင်ယူပုံ နှိုင်းယှဉ်ပြ မျဉ်းကားချပ်'
      },
      analogyEn: {
        title: 'Learning to Ride a Bicycle',
        description: 'Nobody learned to ride a bike just by memorizing a 500-page physics textbook on balance. You got on the bike, wobbled, fell a few times, adjusted your balance from experience, and learned by practicing! Machine learning is computers learning by practicing on data.'
      },
      analogyMy: {
        title: 'စက်ဘီးစီး သင်ယူခြင်း ဥပမာ',
        description: 'မည်သူမျှ စာအုပ်ဖတ်ရုံဖြင့် စက်ဘီးစီး မတတ်နိုင်ပါဘူး။ စက်ဘီးပေါ်တက်စီးတယ်၊ ယိုင်လဲတယ်၊ အကြိမ်ကြိမ် ချိန်ညှိရင်း အတွေ့အကြုံကနေ တတ်မြောက်သွားတာ ဖြစ်ပါတယ်။ Machine Learning ဆိုတာလည်း ကွန်ပျူတာက Data တွေပေါ်မှာ အကြိမ်ကြိမ် လေ့ကျင့်ပြီး တတ်မြောက်သွားခြင်း ဖြစ်ပါတယ်။'
      },
      workedExampleEn: {
        title: 'Training an Apple Classifier',
        scenario: 'We want the computer to recognize apples vs. tennis balls.',
        steps: [
          { stepNumber: 1, instruction: 'Collect training examples', outcome: '100 photos of red/green apples; 100 photos of fuzzy neon tennis balls.' },
          { stepNumber: 2, instruction: 'Extract key features', outcome: 'Apples have smooth skins and stems; tennis balls have white curved seams and fuzzy texture.' },
          { stepNumber: 3, instruction: 'Model builds decision boundary', outcome: 'The algorithm connects features to labels.' },
          { stepNumber: 4, instruction: 'Test with a new picture', outcome: 'Shows a green Granny Smith apple. Model outputs: "96% Apple!"' }
        ]
      },
      workedExampleMy: {
        title: 'ပန်းသီးနှင့် တင်းနစ်ဘောလုံး ခွဲခြားခြင်း ဥပမာ',
        scenario: 'ပန်းသီးနှင့် တင်းနစ်ဘောလုံးတို့ကို ကွန်ပျူတာက ခွဲခြားမှတ်မိစေရန် သင်ကြားခြင်း။',
        steps: [
          { stepNumber: 1, instruction: 'လေ့ကျင့်ရေး ဓာတ်ပုံများ စုဆောင်းသည်', outcome: 'ပန်းသီးပုံ ၁၀၀ နှင့် တင်းနစ်ဘောလုံးပုံ ၁၀၀ ကို ထည့်သွင်းပေးသည်။' },
          { stepNumber: 2, instruction: 'အဓိက လက္ခဏာရပ်များ (Features) ကို ထုတ်ယူသည်', outcome: 'ပန်းသီးတွင် အညှာပါပြီး မျက်နှာပြင်ချောသည်။ တင်းနစ်ဘောလုံးတွင် အဖြူရောင်မျဉ်းကွေးနှင့် အမွေးနုများ ပါသည်။' },
          { stepNumber: 3, instruction: 'Model က ဆုံးဖြတ်ချက်စည်းမျဉ်း တည်ဆောက်သည်', outcome: 'လက္ခဏာများနှင့် အဖြေကို ချိတ်ဆက်မှတ်သားလိုက်သည်။' },
          { stepNumber: 4, instruction: 'ပုံအသစ်ဖြင့် စမ်းသပ်သည်', outcome: 'အစိမ်းရောင် ပန်းသီးပုံ ပြသောအခါ Model က "၉၆% ပန်းသီး ဖြစ်ပါသည်!" ဟု မှန်ကန်စွာ ဖြေဆိုသည်။' }
        ]
      },
      activity: {
        type: 'classification-sorter',
        titleEn: 'Interactive Feature Detective',
        titleMy: 'အသွင်အပြင် လက္ခဏာ (Feature) ခွဲခြားခြင်း စမ်းသပ်ခန်း',
        instructionsEn: 'Pick out the best visual feature that helps a computer tell an orange apart from a lemon!',
        instructionsMy: 'လိမ္မော်သီးနှင့် သံပရာသီးကို ကွန်ပျူတာက ခွဲခြားနိုင်ရန် အကောင်းဆုံး Visual Feature ကို ရွေးချယ်ပါ။',
        initialData: [
          { feature: 'Color & Shape (Round Orange vs Oval Yellow)', isGoodFeature: true },
          { feature: 'The price tag at the store', isGoodFeature: false },
          { feature: 'The name of the farmer', isGoodFeature: false }
        ]
      },
      quizQuestions: [
        {
          id: 'q-ai3-1',
          questionEn: 'How does Machine Learning differ from traditional coding?',
          questionMy: 'Machine Learning သည် ရိုးရိုး Coding နှင့် မည်သို့ ကွာခြားသနည်း?',
          options: [
            { id: 'a', textEn: 'ML learns patterns from examples, whereas traditional code relies on hand-written rules', textMy: 'ML သည် ဥပမာများမှ ပုံစံများကို သင်ယူပြီး ရိုးရိုး Coding က လူရေးထားသော စည်းမျဉ်းများအတိုင်း လုပ်သည်' },
            { id: 'b', textEn: 'ML requires no computers at all', textMy: 'ML တွင် ကွန်ပျူတာ လုံးဝ မလိုအပ်ပါ' },
            { id: 'c', textEn: 'Traditional code is only used for playing music', textMy: 'ရိုးရိုး Coding ကို သီချင်းဖွင့်ရန်သာ သုံးသည်' },
            { id: 'd', textEn: 'They are completely identical with no differences', textMy: 'လုံးဝ အတူတူဖြစ်ပြီး ဘာမှ မကွာခြားပါ' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Correct! ML discovers its own decision rules by processing massive datasets of examples.',
          explanationMy: 'မှန်ကန်ပါတယ်! Machine Learning သည် ဥပမာများစွာကို လေ့လာဆန်းစစ်ပြီး ကိုယ်ပိုင် စည်းမျဉ်းများကို တည်ဆောက်သွားခြင်း ဖြစ်သည်။'
        },
        {
          id: 'q-ai3-2',
          questionEn: 'In machine learning, what do we call distinctive traits like "pointed ears" or "striped fur"?',
          questionMy: 'Machine Learning တွင် "ချွန်သောနားရွက်" သို့မဟုတ် "အစင်းကျားအမွေး" စသည့် ထူးခြားသော အမှတ်အသားများကို အဘယ်သို့ ခေါ်သနည်း?',
          options: [
            { id: 'a', textEn: 'Features', textMy: 'Features (လက္ခဏာရပ်များ)' },
            { id: 'b', textEn: 'Spam', textMy: 'Spam' },
            { id: 'c', textEn: 'Wires', textMy: 'Wires' },
            { id: 'd', textEn: 'Keyboards', textMy: 'Keyboards' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Spot on! Features are measurable properties or characteristics used by models to classify items.',
          explanationMy: 'မှန်ပါတယ်! အရာဝတ္ထုများကို ခွဲခြားမှတ်သားရန် အသုံးပြုသော ထူးခြားချက်များကို Features ဟု ခေါ်ပါသည်။'
        },
        {
          id: 'q-ai3-3',
          questionEn: 'What happens if you only train a computer with photos of white dogs and ask it to recognize a black dog?',
          questionMy: 'ကွန်ပျူတာကို အဖြူရောင်ခွေးပုံများဖြင့်သာ လေ့ကျင့်ပေးထားပြီး အနက်ရောင်ခွေးပုံကို ပြပါက ဘာဖြစ်နိုင်သနည်း?',
          options: [
            { id: 'a', textEn: 'It might get confused or fail because it never saw black dog examples in its data', textMy: 'လေ့ကျင့်ရေးထဲတွင် အနက်ရောင်ခွေး ဥပမာ မပါခဲ့သဖြင့် ရှုပ်ထွေးသွားပြီး ခွေးဟု မမှတ်မိနိုင်ဖြစ်မည်' },
            { id: 'b', textEn: 'It instantly paints the dog white in real life', textMy: 'ပြင်ပရှိ ခွေးကို အဖြူရောင် ချက်ချင်း ဆေးသုတ်လိုက်မည်' },
            { id: 'c', textEn: 'The computer screen turns off forever', textMy: 'မျက်နှာပြင် အပြီးတိုင် ပိတ်သွားမည်' },
            { id: 'd', textEn: 'It turns into a black dog itself', textMy: 'ကွန်ပျူတာကိုယ်တိုင် အနက်ရောင်ခွေး ဖြစ်သွားမည်' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Exactly! Diverse training data is essential. If an AI never sees varied examples, it won’t recognize them later.',
          explanationMy: 'မှန်ပါတယ်! စုံလင်သော ဥပမာများ မပါရှိပါက AI သည် အသစ်အဆန်းများကို ကောင်းစွာ မှတ်မိနိုင်မည် မဟုတ်ပါ။'
        }
      ],
      summaryEn: [
        'Machine Learning lets computers discover patterns from data rather than strict hand-written rules.',
        'Features are the key visual or numerical clues a model uses to distinguish objects.',
        'To be accurate, machine learning models need diverse, balanced training examples.'
      ],
      summaryMy: [
        'Machine Learning သည် ကွန်ပျူတာကို လက်ဖြင့် စည်းမျဉ်းရေးမပေးရဘဲ Data များမှတစ်ဆင့် သင်ယူစေသည်။',
        'Features ဆိုသည်မှာ အရာဝတ္ထုများကို ခွဲခြားရန် Model က အသုံးပြုသော အဓိက လက္ခဏာများ ဖြစ်သည်။',
        'တိကျမှုရှိစေရန် စုံလင်မျှတသော လေ့ကျင့်ရေး ဥပမာများစွာ လိုအပ်ပါသည်။'
      ]
    },

    // -------------------------------------------------------------------------
    // Lesson 4: Machine Learning and Training Data
    // -------------------------------------------------------------------------
    {
      id: 'ai-4',
      lessonNumber: 4,
      titleEn: 'Machine Learning and Training Data',
      titleMy: 'Machine Learning နှင့် လေ့ကျင့်ရေး Data များ',
      shortIntroEn: 'Garbage in, garbage out! Discover why the quality and variety of training data makes or breaks an AI.',
      shortIntroMy: 'အမှိုက်ထည့်ရင် အမှိုက်ထွက်မယ်! လေ့ကျင့်ရေး Data တွေရဲ့ အရည်အသွေးနဲ့ စုံလင်မှုက AI တစ်ခုအတွက် ဘာကြောင့် အသက်တမျှ အရေးကြီးသလဲ လေ့လာကြမယ်။',
      learningObjectivesEn: [
        'Understand what "training data" is and why it forms the foundation of AI.',
        'Learn the difference between training data and testing data.',
        'Understand the famous engineering rule: "Garbage In, Garbage Out".'
      ],
      learningObjectivesMy: [
        '"Training Data" ဆိုသည်မှာ အဘယ်နည်းနှင့် AI ၏ အခြေခံအုတ်မြစ် ဖြစ်ပုံကို သိရှိစေရန်။',
        'လေ့ကျင့်ရေး Data (Training Data) နှင့် စစ်ဆေးရေး Data (Testing Data) တို့၏ ကွာခြားချက်ကို နားလည်စေရန်။',
        '"Garbage In, Garbage Out" (မသန့်ရှင်းသော Data ထည့်ပါက အဖြေမှားထွက်မည်) ဟူသော စည်းမျဉ်းကို သဘောပေါက်စေရန်။'
      ],
      explanationEn: [
        'Imagine studying for a math test, but the textbook you were given was full of wrong answers and misprinted numbers. When you take the exam, you would make mistakes — not because you are silly, but because your study materials were flawed!',
        'An AI model is only as smart as its **Training Data**. Training data is the massive collection of labeled examples (text, audio, images, or sensor numbers) used to teach the algorithm.',
        'Data scientists follow a strict golden rule: **"Garbage In, Garbage Out"**. If you feed an AI blurry photos, mislabeled data, or one-sided examples, it will make foolish mistakes. But if you feed it clean, diverse, high-quality data, it performs brilliantly!'
      ],
      explanationMy: [
        'စာမေးပွဲအတွက် စာကျက်ရာတွင် ဖတ်ရသော စာအုပ်ထဲ၌ အဖြေမှားများ ပြည့်နှက်နေသည်ဆိုပါစို့။ စာမေးပွဲတွင် သင် အမှားဖြေမိမည်မှာ သင် မတော်သောကြောင့်မဟုတ်ဘဲ လေ့လာခဲ့သော စာအုပ် မှားနေသောကြောင့် ဖြစ်သည်။',
        'AI Model တစ်ခုသည်လည်း ၎င်းကို သင်ကြားပေးထားသော **Training Data (လေ့ကျင့်ရေး အချက်အလက်)** ၏ အရည်အသွေးအတိုင်းသာ စမတ်ကျနိုင်ပါသည်။ Training Data ဆိုသည်မှာ အယ်လဂိုရီသမ်ကို သင်ကြားရန် ထည့်သွင်းပေးထားသော အညွှန်းတပ် ဥပမာများ (စာ၊ အသံ၊ ရုပ်ပုံများ) ဖြစ်သည်။',
        'Data Scientist များ၏ ရွှေစည်းမျဉ်းမှာ **"Garbage In, Garbage Out"** ဖြစ်သည်။ မပြည့်စုံသော၊ မှားယွင်းသော Data များ ပေးပါက AI သည် အမှားများသာ ထုတ်ပေးမည်ဖြစ်ပြီး၊ သန့်ရှင်းစုံလင်သော Data ပေးပါက အလွန်တိကျစွာ လုပ်ဆောင်နိုင်မည် ဖြစ်သည်။'
      ],
      diagram: {
        type: 'training-testing-split',
        captionEn: '80% of data is used for Training (learning), and 20% is reserved for Testing (evaluating)!',
        captionMy: 'Data ၏ ၈၀% ကို သင်ယူရန် (Training) သုံးပြီး၊ ၂၀% ကို စစ်ဆေးအကဲဖြတ်ရန် (Testing) သီးသန့်ထားသည်!',
        altEn: 'Pie chart splitting data into 80% Training set and 20% Testing set',
        altMy: 'Data များကို Training နှင့် Testing အဖြစ် ခွဲဝေပြသထားသော ပုံ'
      },
      analogyEn: {
        title: 'Flashcards for a Vocabulary Quiz',
        description: 'Think of 100 flashcards. You use 80 flashcards to practice and study during the week (Training Data). Then on Friday, your teacher tests you using the remaining 20 flashcards you haven’t seen yet (Testing Data). That tests whether you truly learned the words or just memorized them!'
      },
      analogyMy: {
        title: 'ဝေါဟာရ ကတ်ပြားများဖြင့် စာကျက်ခြင်း ဥပမာ',
        description: 'ကတ်ပြား ၁၀၀ ရှိရာတွင် ၈၀ ဖြင့် တစ်ပတ်လုံး လေ့ကျင့်ကျက်မှတ်သည် (Training Data)။ သောကြာနေ့တွင် ဆရာက သင်မမြင်ဖူးသေးသော ကျန်ကတ်ပြား ၂၀ ဖြင့် စာမေးပွဲစစ်သည် (Testing Data)။ ဤနည်းဖြင့် သင် အမှန်တကယ် တတ်မြောက်ခြင်း ရှိမရှိ စစ်ဆေးနိုင်ပါသည်။'
      },
      workedExampleEn: {
        title: 'Preparing Training Data for a Weather Bot',
        scenario: 'We want an AI to predict: "Will it rain this afternoon?"',
        steps: [
          { stepNumber: 1, instruction: 'Gather historical data', outcome: 'Collect temperature, humidity, wind, and rain records for past 5 years.' },
          { stepNumber: 2, instruction: 'Clean the data', outcome: 'Remove corrupted rows with missing thermometer readings.' },
          { stepNumber: 3, instruction: 'Label outcomes', outcome: 'Tag each afternoon as either "RAIN" or "NO RAIN".' },
          { stepNumber: 4, instruction: 'Train the model', outcome: 'Model learns: When humidity > 85% and pressure drops, rain probability is 92%.' }
        ]
      },
      workedExampleMy: {
        title: 'ရာသီဥတု ခန့်မှန်း AI အတွက် Data ပြင်ဆင်ခြင်း ဥပမာ',
        scenario: 'မွန်းလွဲပိုင်းတွင် မိုးရွာမည် မရွာမည်ကို ခန့်မှန်းပေးမည့် AI တည်ဆောက်ခြင်း။',
        steps: [
          { stepNumber: 1, instruction: 'သမိုင်းဝင် Data များကို စုဆောင်းသည်', outcome: 'လွန်ခဲ့သော ၅ နှစ်အတွင်း အပူချိန်၊ စိုထိုင်းဆ၊ လေတိုက်နှုန်းနှင့် မိုးရွာသွန်းမှု မှတ်တမ်းများကို ရယူသည်။' },
          { stepNumber: 2, instruction: 'Data များကို သန့်စင်စစ်ဆေးသည်', outcome: 'ကိန်းဂဏန်းများ ကျန်နေခဲ့သော အမှားပါ မှတ်တမ်းများကို ဖယ်ရှားသည်။' },
          { stepNumber: 3, instruction: 'အဖြေများကို အညွှန်းတပ်သည်', outcome: 'မွန်းလွဲပိုင်းတစ်ခုစီကို "မိုးရွာသည်" သို့မဟုတ် "မိုးမရွာပါ" ဟု Tag တပ်သည်။' },
          { stepNumber: 4, instruction: 'Model ကို လေ့ကျင့်ပေးသည်', outcome: 'စိုထိုင်းဆ ၈၅% ကျော်ပြီး လေဖိအားကျဆင်းပါက မိုးရွာနိုင်ခြေ ၉၂% ရှိကြောင်း AI က သင်ယူမှတ်သားသွားသည်။' }
        ]
      },
      activity: {
        type: 'classification-sorter',
        titleEn: 'Data Quality Inspector',
        titleMy: 'Data အရည်အသွေး စစ်ဆေးခြင်း စမ်းသပ်ခန်း',
        instructionsEn: 'Identify which training examples are "Clean Data" vs "Bad/Corrupt Data"!',
        instructionsMy: 'မည်သည့် ဥပမာများသည် "သန့်ရှင်းသော Data" ဖြစ်ပြီး မည်သည်တို့က "ချို့ယွင်းနေသော Data" ဖြစ်သည်ကို ခွဲခြားပါ။',
        initialData: [
          { sample: 'Sharp, clear photo of a golden retriever labeled "Dog"', isClean: true },
          { sample: 'Completely pitch-black photo labeled "Cat"', isClean: false },
          { sample: 'A banana labeled as "Automobile"', isClean: false },
          { sample: 'Clear recording of bird chirping labeled "Robin"', isClean: true }
        ]
      },
      quizQuestions: [
        {
          id: 'q-ai4-1',
          questionEn: 'What does the computer science phrase "Garbage In, Garbage Out" mean?',
          questionMy: 'Computer Science တွင် "Garbage In, Garbage Out" ဆိုသည်မှာ အဘယ်နည်း?',
          options: [
            { id: 'a', textEn: 'If training data is poor or wrong, the AI’s predictions will also be poor or wrong', textMy: 'ထည့်သွင်းသော Data များ ညံ့ဖျင်းမှားယွင်းနေပါက AI ၏ ခန့်မှန်းချက်များသည်လည်း မှားယွင်းမည်' },
            { id: 'b', textEn: 'Computers should be kept inside garbage cans', textMy: 'ကွန်ပျူတာများကို အမှိုက်ပုံးထဲတွင်သာ ထားသင့်သည်' },
            { id: 'c', textEn: 'All computer programs expire after 2 days', textMy: 'ပရိုဂရမ်အားလုံးသည် ၂ ရက်အကြာတွင် သက်တမ်းကုန်သည်' },
            { id: 'd', textEn: 'Code only runs when eating vegetables', textMy: 'ဟင်းသီးဟင်းရွက် စားမှသာ Code အလုပ်လုပ်သည်' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Correct! The quality of machine learning output depends directly on the quality of the input data.',
          explanationMy: 'မှန်ကန်ပါတယ်! AI ၏ တိကျမှုသည် ထည့်သွင်းပေးလိုက်သော Data အရည်အသွေးပေါ်တွင် တိုက်ရိုက် မူတည်ပါသည်။'
        },
        {
          id: 'q-ai4-2',
          questionEn: 'Why do we keep a separate "Testing Dataset" that the AI never saw during training?',
          questionMy: 'AI လေ့ကျင့်စဉ်က မမြင်ဖူးသေးသော "Testing Dataset" ကို သီးသန့် အဘယ်ကြောင့် ချန်ထားသနည်း?',
          options: [
            { id: 'a', textEn: 'To fairly test if the AI can generalize to brand-new, unseen examples', textMy: 'မမြင်ဖူးသေးသော အသစ်အဆန်းများကို AI က အမှန်တကယ် မှတ်မိနိုင်စွမ်း ရှိမရှိ မျှတစွာ စစ်ဆေးရန်' },
            { id: 'b', textEn: 'To hide secrets from the computer', textMy: 'ကွန်ပျူတာ မသိအောင် လျှို့ဝှက်ချက်များ ဖွက်ထားရန်' },
            { id: 'c', textEn: 'Because hard drives cannot store more than 10 photos', textMy: 'Hard drive တွင် ဓာတ်ပုံ ၁၀ ပုံထက် ပိုမဆံ့သောကြောင့်' },
            { id: 'd', textEn: 'To delete half the internet', textMy: 'အင်တာနက် တစ်ဝက်ကို ဖျက်ပစ်ရန်' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Spot on! Testing with new data ensures the AI didn’t just memorize the training pictures like a parrot.',
          explanationMy: 'မှန်ပါတယ်! အသစ်အဆန်းများဖြင့် စစ်ဆေးမှသာ အလွတ်ကျက်ထားခြင်း မဟုတ်ဘဲ အမှန်တကယ် နားလည်တတ်မြောက်ကြောင်း သေချာစေပါသည်။'
        },
        {
          id: 'q-ai4-3',
          questionEn: 'What is "Data Labeling" in machine learning?',
          questionMy: 'Machine Learning တွင် "Data Labeling" ဆိုသည်မှာ အဘယ်နည်း?',
          options: [
            { id: 'a', textEn: 'Tagging each training example with the correct answer (e.g., photo = "Bicycle")', textMy: 'ဥပမာတစ်ခုစီကို မှန်ကန်သော အဖြေအမည် တပ်ပေးခြင်း (ဥပမာ ဓာတ်ပုံ = "စက်ဘီး")' },
            { id: 'b', textEn: 'Painting the computer box with shiny glitter', textMy: 'ကွန်ပျူတာအိတ်ကို တောက်ပသော ဆေးသုတ်ခြင်း' },
            { id: 'c', textEn: 'Printing physical stickers for your notebook', textMy: 'စာအုပ်အတွက် စတစ်ကာများ ပရင့်ထုတ်ခြင်း' },
            { id: 'd', textEn: 'Renaming your computer login username', textMy: 'ကွန်ပျူတာ အသုံးပြုသူ အမည်ပြောင်းခြင်း' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Awesome! Labeled data guides supervised learning models during training.',
          explanationMy: 'အရမ်းတော်တယ်! Data များကို အမည်မှန် တပ်ပေးခြင်းက AI ကို အမှားအမှန် ခွဲခြားသင်ကြားပေးရာတွင် အခြေခံ ဖြစ်ပါသည်။'
        }
      ],
      summaryEn: [
        'Training data is the fuel that powers all machine learning algorithms.',
        'High quality, balanced, and diverse data produces smart, reliable models.',
        'Always test an AI with separate, unseen testing data to measure true performance.'
      ],
      summaryMy: [
        'Training Data သည် Machine Learning အယ်လဂိုရီသမ်အားလုံး၏ အဓိက လောင်စာဖြစ်သည်။',
        'အရည်အသွေးမြင့်ပြီး စုံလင်သော Data က စမတ်ကျပြီး ယုံကြည်စိတ်ချရသော AI ကို ဖြစ်ပေါ်စေသည်။',
        'အမှန်တကယ် တတ်မြောက်မှု ရှိမရှိကို မမြင်ဖူးသေးသော စစ်ဆေးရေး Data များဖြင့် အကဲဖြတ်ရမည်။'
      ]
    },

    // -------------------------------------------------------------------------
    // Lesson 5: Image Recognition and Classification
    // -------------------------------------------------------------------------
    {
      id: 'ai-5',
      lessonNumber: 5,
      titleEn: 'Image Recognition and Classification',
      titleMy: 'ရုပ်ပုံမှတ်သားခြင်းနှင့် အမျိုးအစားခွဲခြားခြင်း',
      shortIntroEn: 'How does a phone camera know when your dog is smiling? Learn how computers break pictures into pixels and patterns.',
      shortIntroMy: 'ဖုန်းကင်မရာက ခွေးလေးပြုံးနေတာကို ဘယ်လိုသိသလဲ? ကွန်ပျူတာတွေက ဓာတ်ပုံတွေကို Pixel တွေနဲ့ ပုံစံတွေအဖြစ် ဘယ်လိုခွဲခြမ်းစိတ်ဖြာသလဲ လေ့လာကြမယ်။',
      learningObjectivesEn: [
        'Understand how digital images are made of a grid of numbered pixels.',
        'Learn how Convolutional Neural Networks (CNNs) detect edges, shapes, and objects.',
        'Explore classification and confidence scores (e.g., "94% sure this is a Cat").'
      ],
      learningObjectivesMy: [
        'ဒစ်ဂျစ်တယ် ရုပ်ပုံများကို ကိန်းဂဏန်းတန်ဖိုးရှိသော Pixel ကွက်ငယ်များဖြင့် ဖွဲ့စည်းထားပုံကို နားလည်စေရန်။',
        'Neural Networks များသည် အနားသတ်များ၊ ပုံသဏ္ဌာန်များနှင့် အရာဝတ္ထုများကို အဆင့်ဆင့် ရှာဖွေပုံကို သိရှိစေရန်။',
        'အမျိုးအစားခွဲခြားခြင်းနှင့် ယုံကြည်မှု ရာခိုင်နှုန်း (Confidence Score) သဘောတရားကို နားလည်စေရန်။'
      ],
      explanationEn: [
        'To your eyes, a digital photo looks like a beautiful picture of a fluffy bunny. But to a computer, that picture is just a giant grid of tiny colored dots called **Pixels**. Each pixel has numbers representing how much Red, Green, and Blue light it contains.',
        'To recognize what is in the picture, the computer uses an AI system inspired by the visual cortex of the human eye. First, it looks for simple lines and sharp edges. Then, it combines those lines to find shapes (like circles and triangles). Finally, it combines those shapes to recognize parts like ears, eyes, and noses!',
        'When the AI makes a prediction, it doesn’t just say "Rabbit." It provides a **Confidence Score** — for example: "94% Rabbit, 4% Cat, 2% Hamster." If the confidence is high, the system accepts the prediction!'
      ],
      explanationMy: [
        'ကျွန်ုပ်တို့ မျက်စိဖြင့် ကြည့်ပါက ချစ်စရာ ယုန်ကလေးပုံ ဖြစ်သော်လည်း ကွန်ပျူတာအတွက်မူ **Pixels** ဟုခေါ်သော အရောင်အစက် ကွက်ငယ်များသာ ဖြစ်သည်။ Pixel တစ်ခုစီတွင် အနီ၊ အစိမ်း၊ အပြာရောင် ကိန်းဂဏန်းများ ရှိကြသည်။',
        'ရုပ်ပုံကို မှတ်မိရန် AI သည် လူ့မျက်စိကဲ့သို့ အဆင့်ဆင့် စစ်ဆေးသည်။ အရင်ဆုံး ရိုးရှင်းသော မျဉ်းများနှင့် အစွန်းများကို ရှာသည်။ ထို့နောက် ၎င်းမျဉ်းများကို ပေါင်းစပ်၍ ပုံသဏ္ဌာန်များ (စက်ဝိုင်း၊ တြိဂံ) ရှာသည်။ နောက်ဆုံးတွင် နားရွက်၊ မျက်လုံး၊ နှာခေါင်းစသည့် အစိတ်အပိုင်းများကို စုစည်းကာ "ယုန်" ဖြစ်ကြောင်း ခွဲခြားသိရှိလိုက်သည်။',
        'AI သည် ခန့်မှန်းချက် ထုတ်ပေးရာတွင် **Confidence Score (ယုံကြည်မှု ရာခိုင်နှုန်း)** ဖြင့် ဖော်ပြသည် — ဥပမာ: "ယုန် ၉၄%၊ ကြောင် ၄%၊ ကြွက် ၂%" စသဖြင့် ဖြစ်သည်။ ယုံကြည်မှု ရာခိုင်နှုန်း မြင့်မားမှသာ အတည်ပြု လက်ခံလေ့ရှိသည်။'
      ],
      diagram: {
        type: 'pixel-grid-layers',
        captionEn: 'Layers of vision: Pixels -> Edges -> Shapes -> Complex Objects (Face)!',
        captionMy: 'အမြင်အာရုံ အဆင့်ဆင့်: Pixels -> မျဉ်းစွန်းများ -> ပုံသဏ္ဌာန်များ -> အရာဝတ္ထု (မျက်နှာ)!',
        altEn: 'Diagram showing raw pixels feeding into edge detector layer, then shape layer, then recognized face',
        altMy: 'Pixel များမှ မျက်နှာအသွင်အပြင် အဆင့်ဆင့် ပေါ်ပေါက်လာပုံပြ ပုံ'
      },
      analogyEn: {
        title: 'Solving a Jigsaw Puzzle',
        description: 'You don’t solve a 500-piece puzzle by staring at the whole picture at once. First you sort the flat edge pieces, then group similar colors together, then connect small patches, until the full picture suddenly snaps into view!'
      },
      analogyMy: {
        title: 'ရုပ်ပုံဆက် ကစားနည်း (Jigsaw Puzzle) ဥပမာ',
        description: 'အပိုင်း ၅၀၀ ပါ ဂျစ်ဆောပဟေဠိကို တစ်ပြိုင်နက်တည်း မဆက်နိုင်ပါဘူး။ အရင်ဆုံး အနားသတ် အတုံးလေးတွေကို ရွေးတယ်၊ အရောင်တူတာတွေကို အုပ်စုဖွဲ့တယ်၊ ပြီးမှ အစိတ်အပိုင်းလေးတွေ ဆက်ရင်း ကြီးမားတဲ့ ရုပ်ပုံကြီး ပေါ်လာသလိုပါပဲ။'
      },
      workedExampleEn: {
        title: 'Recycling Sorter AI Camera',
        scenario: 'A smart recycling bin camera determines whether a bottle is plastic, glass, or aluminum.',
        steps: [
          { stepNumber: 1, instruction: 'Camera captures 1080p image', outcome: 'Sends pixel matrix to vision model.' },
          { stepNumber: 2, instruction: 'Scan transparency and reflections', outcome: 'Notices high light transmission and cylindrical contour.' },
          { stepNumber: 3, instruction: 'Calculate class probabilities', outcome: 'Plastic Bottle: 92%, Glass Jar: 6%, Soda Can: 2%.' },
          { stepNumber: 4, instruction: 'Actuate mechanical sorter', outcome: 'Flaps open to drop bottle into the Plastic Recycling Bin!' }
        ]
      },
      workedExampleMy: {
        title: 'အမှိုက်ပြန်လည်အသုံးပြုသည့် ကင်မရာ ဥပမာ',
        scenario: 'စမတ် အမှိုက်ပုံးကင်မရာက ပလတ်စတစ်၊ ဖန် သို့မဟုတ် အလူမီနီယမ်ဘူးကို ခွဲခြားခြင်း။',
        steps: [
          { stepNumber: 1, instruction: 'ကင်မရာက ဓာတ်ပုံရိုက်ယူသည်', outcome: 'Pixel တန်ဖိုးများကို Vision Model သို့ ပေးပို့သည်။' },
          { stepNumber: 2, instruction: 'အလင်းပေါက်နိုင်မှုနှင့် ပုံသဏ္ဌာန်ကို စစ်ဆေးသည်', outcome: 'အလင်းဖြတ်သန်းနိုင်ပြီး ဆလင်ဒါပုံစံ ဖြစ်နေသည်ကို တွေ့ရှိသည်။' },
          { stepNumber: 3, instruction: 'ဖြစ်နိုင်ခြေ ရာခိုင်နှုန်းကို တွက်ချက်သည်', outcome: 'ပလတ်စတစ်ဘူး: ၉၂%၊ ဖန်ပုလင်း: ၆%၊ သံဘူး: ၂%။' },
          { stepNumber: 4, instruction: 'စက်ယန္တရားကို ခိုင်းစေသည်', outcome: 'အဖုံးပွင့်သွားပြီး ပလတ်စတစ်ပုံးထဲသို့ ထည့်သွင်းပေးလိုက်သည်။' }
        ]
      },
      activity: {
        type: 'classification-sorter',
        titleEn: 'Interactive Object Sorter Simulation',
        titleMy: 'အရာဝတ္ထု အမျိုးအစား ခွဲခြားခြင်း ကစားနည်း',
        instructionsEn: 'Drag each object into the correct category: Fruit, Vehicle, or Animal! See your classifier accuracy rise.',
        instructionsMy: 'အရာဝတ္ထုများကို မှန်ကန်သော အုပ်စု (သစ်သီး၊ ယာဉ်၊ တိရစ္ဆာန်) ထဲသို့ ထည့်သွင်းပေးပါ။',
        initialData: [
          { name: 'Red Strawberry 🍓', category: 'fruit' },
          { name: 'Yellow School Bus 🚌', category: 'vehicle' },
          { name: 'Fluffy Puppy 🐶', category: 'animal' },
          { name: 'Green Airplane ✈️', category: 'vehicle' },
          { name: 'Sweet Watermelon 🍉', category: 'fruit' }
        ]
      },
      quizQuestions: [
        {
          id: 'q-ai5-1',
          questionEn: 'What does a computer actually "see" when it looks at an image?',
          questionMy: 'ကွန်ပျူတာသည် ဓာတ်ပုံတစ်ပုံကို ကြည့်သောအခါ အမှန်တကယ် မည်သည့်အရာကို တွေ့မြင်ရသနည်း?',
          options: [
            { id: 'a', textEn: 'A grid of pixels containing numbers representing colors (RGB)', textMy: 'အရောင်များကို ကိုယ်စားပြုသော ကိန်းဂဏန်းများပါသည့် Pixel အကွက်များ' },
            { id: 'b', textEn: 'Human feelings and memories', textMy: 'လူသားတို့၏ ခံစားချက်နှင့် အမှတ်တရများ' },
            { id: 'c', textEn: 'Real physical paint drops', textMy: 'တကယ့် ဆေးရောင်စက်များ' },
            { id: 'd', textEn: 'Nothing at all; the screen is blind', textMy: 'ဘာမှမမြင်ရပါ' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Correct! Computers interpret images purely as numerical pixel matrices.',
          explanationMy: 'မှန်ကန်ပါတယ်! ကွန်ပျူတာသည် ရုပ်ပုံများကို ကိန်းဂဏန်း Pixel တန်ဖိုးများအဖြစ်သာ မြင်တွေ့နားလည်သည်။'
        },
        {
          id: 'q-ai5-2',
          questionEn: 'If an AI classifier reports "Confidence: 98% Cat", what does this mean?',
          questionMy: 'AI က "ယုံကြည်မှု: ၉၈% ကြောင်" ဟု ဖော်ပြပါက အဓိပ္ပာယ်မှာ အဘယ်နည်း?',
          options: [
            { id: 'a', textEn: 'The model calculated a very high mathematical probability that the image is a cat', textMy: 'ပုံထဲတွင် ကြောင်ဖြစ်ရန် သင်္ချာနည်းအရ ဖြစ်နိုင်ခြေ အလွန်မြင့်မားကြောင်း တွက်ချက်ရရှိသည်' },
            { id: 'b', textEn: 'The cat is 98 years old', textMy: 'ကြောင်သည် အသက် ၉၈ နှစ် ရှိပြီ' },
            { id: 'c', textEn: '98 cats are in the picture', textMy: 'ပုံထဲတွင် ကြောင် ၉၈ ကောင် ရှိသည်' },
            { id: 'd', textEn: 'The computer battery is at 98%', textMy: 'ကွန်ပျူတာ ဘက်ထရီ ၉၈% ရှိသည်' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Spot on! Confidence scores indicate how closely the extracted features match the training class.',
          explanationMy: 'မှန်ပါတယ်! Confidence Score သည် ပုံထဲက အမှတ်အသားများသည် သင်ယူထားသော ကြောင်လက္ခဏာများနှင့် မည်မျှ ကိုက်ညီကြောင်း ရာခိုင်နှုန်းဖြင့် ပြသခြင်း ဖြစ်သည်။'
        },
        {
          id: 'q-ai5-3',
          questionEn: 'What is a common reason an image classifier might make a mistake?',
          questionMy: 'Image Classifier တစ်ခုသည် မည်သည့်အကြောင်းကြောင့် အမှားဖြစ်နိုင်သနည်း?',
          options: [
            { id: 'a', textEn: 'Poor lighting, unusual angles, motion blur, or confusing background objects', textMy: 'အလင်းအမှောင် ညံ့ဖျင်းခြင်း၊ ပုံမှန်မဟုတ်သော ထောင့်များ၊ လှုပ်ရှားဝါးနေခြင်း သို့မဟုတ် နောက်ခံရှုပ်ထွေးခြင်း' },
            { id: 'b', textEn: 'The camera took too many vitamins', textMy: 'ကင်မရာ ဗီတာမင်ဆေး သောက်လွန်းသောကြောင့်' },
            { id: 'c', textEn: 'Because pixels get sleepy at night', textMy: 'ညဘက်တွင် Pixel များ အိပ်ငိုက်သောကြောင့်' },
            { id: 'd', textEn: 'The photo was printed on green paper', textMy: 'ဓာတ်ပုံကို စက္ကူစိမ်းပေါ် ပရင့်ထုတ်ထားသောကြောင့်' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Awesome! Extreme angles, shadows, and occlusions frequently challenge computer vision systems.',
          explanationMy: 'အရမ်းတော်တယ်! ဓာတ်ပုံ ဝါးနေခြင်း၊ အလင်းမှောင်လွန်းခြင်းနှင့် ရှုပ်ထွေးသော ထောင့်များသည် AI ကို အမှားဖြစ်စေနိုင်ပါသည်။'
        }
      ],
      summaryEn: [
        'Digital images are grids of numbered pixels representing color values.',
        'Vision models detect simple edges first, then combine them into shapes and complete objects.',
        'Classification models assign confidence scores to show how certain they are of an answer.'
      ],
      summaryMy: [
        'ဒစ်ဂျစ်တယ် ရုပ်ပုံများသည် အရောင်တန်ဖိုးများပါသော Pixel အကွက်များ ဖြစ်သည်။',
        'Vision Model များသည် မျဉ်းစွန်းများကို အရင်ရှာပြီး ပုံသဏ္ဌာန်များနှင့် အရာဝတ္ထုများကို အဆင့်ဆင့် တွဲစပ်မှတ်သားသည်။',
        'အမျိုးအစားခွဲရာတွင် အဖြေမည်မျှ သေချာကြောင်းကို Confidence Score ဖြင့် ပြသပေးသည်။'
      ]
    },

    // -------------------------------------------------------------------------
    // Lesson 6: Generative AI: Text and Images
    // -------------------------------------------------------------------------
    {
      id: 'ai-6',
      lessonNumber: 6,
      titleEn: 'Generative AI: Text and Images',
      titleMy: 'Generative AI (စာနှင့် ရုပ်ပုံများ ဖန်တီးသော AI)',
      shortIntroEn: 'Did you know computers can write poetry, compose melodies, and paint imaginary landscapes? Discover how Generative AI creates brand-new things.',
      shortIntroMy: 'ကွန်ပျူတာတွေက ကဗျာစပ်နိုင်တယ်၊ သီချင်းရေးနိုင်တယ်၊ စိတ်ကူးယဉ် ပန်းချီဆွဲနိုင်တယ်ဆိုတာ သိပါသလား? အသစ်အဆန်းတွေ ဖန်တီးပေးတဲ့ Generative AI အကြောင်း လေ့လာကြမယ်။',
      learningObjectivesEn: [
        'Understand what Generative AI means (systems that create new content).',
        'Learn how Large Language Models (LLMs) predict the next likely word.',
        'Explore how image generators turn text descriptions into visual art.'
      ],
      learningObjectivesMy: [
        'Generative AI ဆိုသည်မှာ အသစ်အဆန်းများကို ဖန်တီးပေးသော စနစ်ဖြစ်ကြောင်း သိရှိစေရန်။',
        'Language Models များသည် နောက်ဆက်တွဲ စကားလုံးများကို မည်သို့ ခန့်မှန်းရေးသားပုံကို နားလည်စေရန်။',
        'Image Generator များက စာသားဖော်ပြချက်မှတစ်ဆင့် ရုပ်ပုံများကို ဖန်တီးပုံကို သိရှိစေရန်။'
      ],
      explanationEn: [
        'Most of the AI we looked at earlier was **Discriminative AI** — it sorts or classifies existing things (like "Is this a dog or a cat?"). But recently, a miraculous new technology arrived called **Generative AI**.',
        'Generative AI does not just sort things — it **creates brand-new things that never existed before**! It can write funny stories, generate pictures of a dragon playing guitar on the moon, or compose a lullaby.',
        'How does it write? Large Language Models (LLMs) study billions of sentences. When you write a prompt, the model calculates probabilities to predict the most helpful next word, one word at a time, like the world’s smartest autocomplete!'
      ],
      explanationMy: [
        'အရင်သင်ခန်းစာတွေမှာ လေ့လာခဲ့တာက ရှိပြီးသားအရာတွေကို ခွဲခြားပေးတဲ့ AI ဖြစ်ပါတယ် (ဥပမာ "ခွေးလား ကြောင်လား")။ အခုအခါမှာတော့ အသစ်အဆန်းတွေကို ဖန်တီးပေးနိုင်တဲ့ **Generative AI** ခေတ်ကို ရောက်ရှိလာပါပြီ။',
        'Generative AI ဟာ ခွဲခြားရုံတင်မကဘဲ **ကမ္ဘာပေါ်မှာ အရင်က မရှိခဲ့ဖူးတဲ့ အသစ်အဆန်းတွေကို ဖန်တီးပေးနိုင်ပါတယ်**! ပုံပြင်များ ရေးသားခြင်း၊ လကမ္ဘာပေါ်မှာ ဂစ်တာတီးနေတဲ့ နဂါးပုံဆွဲပေးခြင်း၊ သီချင်းစပ်ပေးခြင်း စတာတွေကို လုပ်ဆောင်နိုင်ပါတယ်။',
        'သူ ဘယ်လိုရေးသလဲ? Language Model တွေဟာ စာကြောင်းဘီလီယံပေါင်းများစွာကို ဖတ်ရှုလေ့လာထားပါတယ်။ သင်က စာတစ်ကြောင်း မေးလိုက်တဲ့အခါ စမတ်ဖုန်းရဲ့ Autocomplete လိုမျိုး နောက်ဆက်တွဲ ဖြစ်နိုင်ခြေအရှိဆုံး စကားလုံးတွေကို တစ်လုံးချင်း ဆက်တိုက် ခန့်မှန်းရေးသားပေးခြင်း ဖြစ်ပါတယ်။'
      ],
      diagram: {
        type: 'generative-prediction-chain',
        captionEn: 'Prompt: "The sky is..." -> AI predicts the most likely next word: "BLUE" (88%)!',
        captionMy: 'Prompt: "ကောင်းကင်ကြီးသည်..." -> AI က နောက်ဆက်တွဲ ဖြစ်နိုင်ခြေအရှိဆုံး စကားလုံး "အပြာရောင်" ကို ရွေးချယ်သည်!',
        altEn: 'Chain of words with percentage bars predicting next probable word in sentence',
        altMy: 'စာကြောင်းထဲတွင် နောက်ဆက်တွဲ စကားလုံးကို ရာခိုင်နှုန်းဖြင့် ခန့်မှန်းပုံပြ ပုံ'
      },
      analogyEn: {
        title: 'Storytelling Around a Campfire',
        description: 'Have you ever played the game where everyone adds just one word to a story around a circle? "Once... upon... a... magical... castle..." Each person listens carefully to what came before, and picks a word that makes sense next. Generative text AI works just like that — at lightning speed!'
      },
      analogyMy: {
        title: 'မီးပုံပွဲ စကားလုံးဆက် ပုံပြင်ပြောခြင်း ဥပမာ',
        description: 'ဝိုင်းဖွဲ့ပြီး လူတစ်ယောက်ကို စကားလုံးတစ်လုံးစီ ဆက်ပြောရတဲ့ ကစားနည်း ဆော့ဖူးပါသလား? "ဟိုး... ရှေးရှေး... တုန်းက... မှော်ဆန်တဲ့... ရဲတိုက်ကြီး... တစ်ခုမှာ..." စသဖြင့် အရင်လူတွေ ပြောခဲ့တာကို နားထောင်ပြီး အဓိပ္ပာယ်ရှိမယ့် နောက်စကားလုံးကို ရွေးချယ်သလိုမျိုး Generative AI ကလည်း လျှပ်တစ်ပြက်အတွင်း စကားလုံး ဆက်စပ်ပေးတာ ဖြစ်ပါတယ်။'
      },
      workedExampleEn: {
        title: 'Generating an Illustration of a Space Hamster',
        scenario: 'A student uses a generative image tool to illustrate a science fiction story.',
        steps: [
          { stepNumber: 1, instruction: 'User enters text prompt', outcome: '"A cute fluffy hamster wearing an astronaut helmet on Mars, cartoon style"' },
          { stepNumber: 2, instruction: 'AI translates words into visual tokens', outcome: 'Connects concepts: hamster face + glass dome helmet + red sandy rocks.' },
          { stepNumber: 3, instruction: 'Diffusion model removes noise', outcome: 'Starts from a random static canvas, shaping pixels into the scene over 30 steps.' },
          { stepNumber: 4, instruction: 'Original artwork rendered', outcome: 'A brand-new, colorful space hamster appears on screen!' }
        ]
      },
      workedExampleMy: {
        title: 'အာကာသ ကြွက်ကလေး ပုံဆွဲခိုင်းခြင်း ဥပမာ',
        scenario: 'ကျောင်းသားတစ်ယောက်က Generative Image စနစ်ဖြင့် သိပ္ပံပုံပြင်အတွက် ပုံဖန်တီးခြင်း။',
        steps: [
          { stepNumber: 1, instruction: 'Prompt စာသားကို ရိုက်ထည့်သည်', outcome: '"အင်္ဂါဂြိုဟ်ပေါ်တွင် အာကာသယာဉ်မှူး ဦးထုပ်ဆောင်းထားသော ချစ်စရာ ကာတွန်းပုံ ကြွက်ကလေး"' },
          { stepNumber: 2, instruction: 'AI က စကားလုံးများကို ရုပ်ပုံအယူအဆအဖြစ် ပြောင်းလဲသည်', outcome: 'ကြွက်မျက်နှာ + ဖန်ဦးထုပ် + အနီရောင်ကျောက်ဆောင်များ ပေါင်းစပ်သည်။' },
          { stepNumber: 3, instruction: 'Diffusion နည်းပညာဖြင့် ပုံဖော်သည်', outcome: 'ဝါးနေသော အစက်အပြောက်များမှတစ်ဆင့် ရှင်းလင်းသော ရုပ်ပုံအဖြစ် အဆင့်ဆင့် ပုံဖော်ပေးသည်။' },
          { stepNumber: 4, instruction: 'မူရင်း ရုပ်ပုံအသစ် ထွက်ပေါ်လာသည်', outcome: 'လှပဆန်းသစ်သော အာကာသကြွက်ကလေး ပုံ ပေါ်လာသည်။' }
        ]
      },
      activity: {
        type: 'prompt-tester',
        titleEn: 'Next-Word Prediction Playground',
        titleMy: 'နောက်ဆက်တွဲ စကားလုံး ခန့်မှန်းခြင်း စမ်းသပ်ခန်း',
        instructionsEn: 'Complete the sentence starter and see the top 3 words the language model predicts!',
        instructionsMy: 'စာကြောင်း အစကို ရွေးချယ်ပြီး AI က မည်သည့် စကားလုံးများကို ဖြစ်နိုင်ခြေအများဆုံးအဖြစ် ခန့်မှန်းသလဲ စမ်းသပ်ပါ။',
        initialData: {
          prompt: 'Every morning, the golden sun rises in the...',
          predictions: [
            { word: 'east', probability: '91%' },
            { word: 'sky', probability: '6%' },
            { word: 'morning', probability: '2%' }
          ]
        }
      },
      quizQuestions: [
        {
          id: 'q-ai6-1',
          questionEn: 'What is the main superpower of Generative AI compared to earlier AI?',
          questionMy: 'အရင် AI များနှင့် နှိုင်းယှဉ်ပါက Generative AI ၏ အဓိက ထူးခြားချက်မှာ အဘယ်နည်း?',
          options: [
            { id: 'a', textEn: 'It can create brand-new text, images, and audio rather than just classifying existing items', textMy: 'ရှိပြီးသားကို ခွဲခြားရုံသာမက စာသား၊ ရုပ်ပုံနှင့် အသံ အသစ်အဆန်းများကိုပါ ဖန်တီးပေးနိုင်ခြင်း' },
            { id: 'b', textEn: 'It runs without using any electricity', textMy: 'လျှပ်စစ်မီး လုံးဝ မသုံးဘဲ အလုပ်လုပ်ခြင်း' },
            { id: 'c', textEn: 'It can fly around the room like a drone', textMy: 'Drone ကဲ့သို့ အခန်းထဲ ပျံသန်းနိုင်ခြင်း' },
            { id: 'd', textEn: 'It makes homework vanish into thin air', textMy: 'အိမ်စာများကို လေထဲ ပျောက်ကွယ်သွားစေခြင်း' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Correct! Generative AI generates novel, creative outputs based on patterns learned from training data.',
          explanationMy: 'မှန်ကန်ပါတယ်! Generative AI သည် သင်ယူထားသော ပုံစံများကို အခြေခံ၍ ဆန်းသစ်သော အရာများကို ဖန်တီးပေးနိုင်ပါသည်။'
        },
        {
          id: 'q-ai6-2',
          questionEn: 'How does a Large Language Model (LLM) write responses to your questions?',
          questionMy: 'Large Language Model (LLM) သည် သင့်မေးခွန်းများကို မည်သို့ ရေးသားဖြေကြားသနည်း?',
          options: [
            { id: 'a', textEn: 'By predicting the most probable and helpful next words based on its training', textMy: 'သင်ယူထားသော Data များအရ ဖြစ်နိုင်ခြေအရှိဆုံး စကားလုံးများကို တစ်လုံးချင်း ဆက်တိုက် ခန့်မှန်းရေးသားခြင်းဖြင့်' },
            { id: 'b', textEn: 'By copying and pasting entire Wikipedia pages word-for-word', textMy: 'Wikipedia စာမျက်နှာများကို တစ်လုံးမကျန် ကူးယူထည့်သွင်းခြင်းဖြင့်' },
            { id: 'c', textEn: 'By having tiny humans type inside the laptop', textMy: 'လက်ပ်တော့အတွင်းမှ လူပုလေးများက စာရိုက်ပေးခြင်းဖြင့်' },
            { id: 'd', textEn: 'It only speaks gibberish and numbers', textMy: 'နားမလည်နိုင်သော စကားများနှင့် ဂဏန်းများသာ ပြောနိုင်သည်' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Spot on! LLMs use probabilistic token prediction to compose natural-sounding text.',
          explanationMy: 'မှန်ပါတယ်! LLM များသည် ဖြစ်နိုင်ခြေအရှိဆုံး စကားလုံးများကို ဆက်စပ်ပြီး သဘာဝကျသော စာကြောင်းများအဖြစ် ရေးဖွဲ့ပေးခြင်း ဖြစ်ပါသည်။'
        },
        {
          id: 'q-ai6-3',
          questionEn: 'Can an image generator create an exact copy of a real photo from your private bedroom?',
          questionMy: 'Image Generator တစ်ခုသည် သင့်အိပ်ခန်းထဲက ကိုယ်ပိုင်ဓာတ်ပုံကို အတိအကျ ပုံတူ ပြန်ဆွဲပေးနိုင်ပါသလား?',
          options: [
            { id: 'a', textEn: 'No, it generates imaginary composite artwork based on general visual patterns, not private cameras', textMy: 'မဆွဲနိုင်ပါ၊ ကိုယ်ပိုင်ကင်မရာများမှ မဟုတ်ဘဲ အထွေထွေ ပုံစံများကို အခြေခံ၍ စိတ်ကူးယဉ် အသစ်ဖန်တီးခြင်းသာ ဖြစ်သည်' },
            { id: 'b', textEn: 'Yes, it has cameras watching everyone sleep', textMy: 'ဆွဲနိုင်သည်၊ လူတိုင်းကို ချောင်းကြည့်နေသော ကင်မရာများ ရှိသည်' },
            { id: 'c', textEn: 'Yes, because AI knows all secrets', textMy: 'ဆွဲနိုင်သည်၊ အဘယ်ကြောင့်ဆိုသော် AI က အရာအားလုံးကို သိသောကြောင့်ဖြစ်သည်' },
            { id: 'd', textEn: 'Only on full moon nights', textMy: 'လပြည့်ညများတွင်သာ ဖြစ်နိုင်သည်' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Awesome! Generative models synthesize generalized patterns from training sets, not private cameras.',
          explanationMy: 'အရမ်းတော်တယ်! Generative Model များသည် လေ့ကျင့်ထားသော ဘုံပုံစံများမှ စိတ်ကူးသစ် ဖန်တီးပေးခြင်းသာ ဖြစ်ပါသည်။'
        }
      ],
      summaryEn: [
        'Generative AI creates new text, images, code, and music from scratch.',
        'Language models predict the most likely next word step-by-step.',
        'Generative tools are creative partners that help humans brainstorm, write, and illustrate!'
      ],
      summaryMy: [
        'Generative AI သည် စာသား၊ ရုပ်ပုံ၊ Code နှင့် သီချင်း အသစ်များကို ဖန်တီးပေးနိုင်သည်။',
        'Language Model များသည် ဖြစ်နိုင်ခြေအရှိဆုံး နောက်စကားလုံးကို တစ်ဆင့်ချင်း ခန့်မှန်းရေးသားသည်။',
        '၎င်းတို့သည် လူသားများ စိတ်ကူးသစ်ဖော်ထုတ်ရန်၊ စာရေးရန်နှင့် ပုံဆွဲရန် အလွန်အသုံးဝင်သော မိတ်ဖက်များ ဖြစ်ကြသည်။'
      ]
    },

    // -------------------------------------------------------------------------
    // Lesson 7: Writing Clear Prompts
    // -------------------------------------------------------------------------
    {
      id: 'ai-7',
      lessonNumber: 7,
      titleEn: 'Writing Clear Prompts',
      titleMy: 'ရှင်းလင်းသော Prompt (ညွှန်ကြားချက်) များ ရေးသားခြင်း',
      shortIntroEn: 'The secret to getting awesome answers from an AI is knowing how to ask! Master the art of prompt engineering.',
      shortIntroMy: 'AI ဆီက အကောင်းဆုံး အဖြေတွေ ရရှိဖို့ လျှို့ဝှက်ချက်ကတော့ ကောင်းမွန်စွာ မေးမြန်းတတ်ဖို့ပါပဲ! Prompt ရေးသားနည်း ပညာကို လေ့လာကြမယ်။',
      learningObjectivesEn: [
        'Understand what a "prompt" is in generative AI.',
        'Learn the 4 ingredients of a great prompt: Role, Task, Context, and Format.',
        'Transform vague prompts into rich, effective instructions.'
      ],
      learningObjectivesMy: [
        'Generative AI တွင် "Prompt" ဆိုသည်မှာ အဘယ်နည်းကို နားလည်စေရန်။',
        'ထိရောက်သော Prompt တစ်ခု၏ အစိတ်အပိုင်း ၄ ခု: အခန်းကဏ္ဍ (Role)၊ တာဝန် (Task)၊ နောက်ခံအကြောင်းအရာ (Context) နှင့် ပုံစံ (Format) တို့ကို သိရှိစေရန်။',
        'မရှင်းလင်းသော Prompt များကို တိကျထိရောက်သော ညွှန်ကြားချက်များအဖြစ် ပြောင်းလဲနိုင်စေရန်။'
      ],
      explanationEn: [
        'When you use a generative AI, the text instruction or question you give it is called a **Prompt**.',
        'If you give a lazy prompt like *"Write a story"*, the AI has to guess: A story about what? For whom? How long? Happy or scary? The result will probably be generic and boring.',
        'Great prompt engineers use the **R-T-C-F Formula**: 1. **Role** (e.g., "Act as a friendly astronomy teacher"), 2. **Task** (e.g., "Explain how black holes work"), 3. **Context** (e.g., "For an 8-year-old child who loves space"), and 4. **Format** (e.g., "In 3 short paragraphs using simple analogies"). When your prompt is clear, the AI’s answer shines!'
      ],
      explanationMy: [
        'Generative AI ကို အသုံးပြုရာတွင် သင်ရိုက်ထည့်လိုက်သော မေးခွန်း သို့မဟုတ် ညွှန်ကြားချက် စာသားကို **Prompt** ဟု ခေါ်ပါသည်။',
        'အကယ်၍ သင်က *"ပုံပြင်တစ်ပုဒ် ရေးပေးပါ"* ဟု မပြည့်မစုံ ရေးလိုက်ပါက AI သည် ဘာအကြောင်းလဲ၊ ဘယ်သူ့အတွက်လဲ၊ ဘယ်လောက်ရှည်ရမလဲ စသဖြင့် မသိနိုင်သဖြင့် သာမန် ပျင်းစရာ ပုံပြင်သာ ရပါလိမ့်မည်။',
        'ကျွမ်းကျင်သူများသည် **R-T-C-F ပုံသေနည်း** ကို အသုံးပြုကြသည်: ၁။ **Role (အခန်းကဏ္ဍ)** (ဥပမာ "ဖော်ရွေသော နက္ခတ္တဆရာတစ်ဦးအဖြစ်")၊ ၂။ **Task (တာဝန်)** (ဥပမာ "Black Hole အကြောင်း ရှင်းပြပါ")၊ ၃။ **Context (နောက်ခံ)** (ဥပမာ "အာကာသကို ချစ်မြတ်နိုးသော ၈ နှစ်အရွယ် ကလေးတစ်ဦးအတွက်")၊ ၄။ **Format (ပုံစံ)** (ဥပမာ "ရိုးရှင်းသော ဥပမာများဖြင့် စာပိုဒ်တို ၃ ပိုဒ်ခွဲ၍")။ Prompt ရှင်းလင်းမှသာ အကောင်းဆုံး အဖြေကို ရရှိမည် ဖြစ်သည်။'
      ],
      diagram: {
        type: 'prompt-formula-blocks',
        captionEn: 'The 4 Pillars of a Super Prompt: Role + Task + Context + Format!',
        captionMy: 'အကောင်းဆုံး Prompt ၏ မဏ္ဍိုင် ၄ ခု: အခန်းကဏ္ဍ + တာဝန် + နောက်ခံ + ပုံစံ!',
        altEn: 'Four interlocking colorful puzzle blocks labeled Role, Task, Context, and Format',
        altMy: 'Role, Task, Context, Format ဆက်စပ်ပြသထားသော ပဟေဠိတုံးပုံ'
      },
      analogyEn: {
        title: 'Ordering at a Restaurant',
        description: 'If you walk into a restaurant and tell the waiter "Bring me food!", they won’t know if you want pizza, soup, or ice cream! But if you say: "Please bring me a small bowl of chicken noodle soup with no onions," you get the exact delicious meal you were dreaming of.'
      },
      analogyMy: {
        title: 'စားသောက်ဆိုင်တွင် အစားအသောက် မှာယူခြင်း ဥပမာ',
        description: 'စားသောက်ဆိုင်ထဲ ဝင်သွားပြီး "အစားအသောက် တစ်ခုခု ယူလာပေးပါ!" ဟု ပြောပါက စားပွဲထိုးသည် ပီဇာလိုချင်သလား၊ စွပ်ပြုတ်လိုချင်သလား မသိနိုင်ပါ။ သို့သော် "ကြက်သွန်နီမပါသော ကြက်သားခေါက်ဆွဲပြုတ် ပန်းကန်သေးတစ်လုံး ယူလာပေးပါ" ဟု တိကျစွာ မှာယူပါက သင်အလိုရှိသော အစားအစာကို အတိအကျ ရရှိမည် ဖြစ်သည်။'
      },
      workedExampleEn: {
        title: 'Transforming a Weak Prompt into a Pro Prompt',
        scenario: 'A student needs help brainstorming a science fair project about plants.',
        steps: [
          { stepNumber: 1, instruction: 'Weak prompt', outcome: '"Give me science ideas"' },
          { stepNumber: 2, instruction: 'Add Role & Task', outcome: '"Act as an encouraging science mentor. Suggest 3 plant biology experiments."' },
          { stepNumber: 3, instruction: 'Add Context & Constraints', outcome: '"For a 5th grader using everyday kitchen items like beans and cups."' },
          { stepNumber: 4, instruction: 'Add Format output', outcome: '"Format as a numbered list with title, required materials, and the hypothesis to test."' }
        ]
      },
      workedExampleMy: {
        title: 'သာမန် Prompt မှ အဆင့်မြင့် Prompt သို့ ပြောင်းလဲခြင်း ဥပမာ',
        scenario: 'သိပ္ပံပြပွဲတွင် အပင်များနှင့် ပတ်သက်သော စမ်းသပ်မှု စိတ်ကူးများ ရယူလိုခြင်း။',
        steps: [
          { stepNumber: 1, instruction: 'မပြည့်စုံသော Prompt', outcome: '"သိပ္ပံ စိတ်ကူးတွေ ပေးပါ"' },
          { stepNumber: 2, instruction: 'Role နှင့် Task ထည့်သွင်းခြင်း', outcome: '"အားပေးကူညီတတ်သော သိပ္ပံဆရာတစ်ဦးအဖြစ် ဆောင်ရွက်ပါ။ အပင်ဇီဝဗေဒ စမ်းသပ်မှု စိတ်ကူး ၃ ခု ပေးပါ။"' },
          { stepNumber: 3, instruction: 'Context နှင့် ကန့်သတ်ချက် ထည့်သွင်းခြင်း', outcome: '"၅ တန်းကျောင်းသားတစ်ဦးအတွက်ဖြစ်ပြီး ပဲစေ့နှင့် ခွက်ကဲ့သို့ မီးဖိုချောင်သုံး ပစ္စည်းများသာ သုံးမည်။"' },
          { stepNumber: 4, instruction: 'Format ထည့်သွင်းခြင်း', outcome: '"ခေါင်းစဉ်၊ လိုအပ်သောပစ္စည်းများနှင့် စမ်းသပ်မည့်အချက်တို့ကို အမှတ်စဉ်ထိုး၍ စာရင်းပြုစုပေးပါ။"' }
        ]
      },
      activity: {
        type: 'prompt-tester',
        titleEn: 'Prompt Fixer Challenge',
        titleMy: 'Prompt ပြင်ဆင်ခြင်း စိန်ခေါ်မှု',
        instructionsEn: 'Review two prompts. Click on the one that will produce the best educational result!',
        instructionsMy: 'Prompt ၂ ခုကို နှိုင်းယှဉ်ပြီး အကောင်းမွန်ဆုံး အဖြေထွက်ပေါ်စေမည့် Prompt ကို ရွေးချယ်ပါ။',
        initialData: {
          badPrompt: 'Tell me about dinosaurs.',
          goodPrompt: 'Act as a paleontologist for an 8-year-old. Describe what a Triceratops ate, its size, and why it had 3 horns, using 3 short bullet points.'
        }
      },
      quizQuestions: [
        {
          id: 'q-ai7-1',
          questionEn: 'What is a "prompt" in generative AI?',
          questionMy: 'Generative AI တွင် "Prompt" ဆိုသည်မှာ အဘယ်နည်း?',
          options: [
            { id: 'a', textEn: 'The instructions, questions, or guidance you provide to the AI model', textMy: 'AI Model ထံ သင်ပေးလိုက်သော ညွှန်ကြားချက်၊ မေးခွန်း သို့မဟုတ် လမ်းညွှန်ချက်' },
            { id: 'b', textEn: 'A hardware cable behind the desk', textMy: 'စားပွဲနောက်က ဟာ့ဒ်ဝဲကြိုး' },
            { id: 'c', textEn: 'The cost of the computer screen', textMy: 'ကွန်ပျူတာ မျက်နှာပြင်၏ တန်ဖိုး' },
            { id: 'd', textEn: 'A secret virus that attacks games', textMy: 'ဂိမ်းများကို တိုက်ခိုက်သော ဗိုင်းရပ်စ်' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Correct! A prompt is the input text that sets the direction for the AI’s generation.',
          explanationMy: 'မှန်ကန်ပါတယ်! Prompt သည် AI က အဖြေထုတ်ပေးရန် သင်ပေးလိုက်သော အစပျိုး ညွှန်ကြားချက် ဖြစ်သည်။'
        },
        {
          id: 'q-ai7-2',
          questionEn: 'Which of the following makes a prompt significantly more effective?',
          questionMy: 'အောက်ပါတို့အနက် မည်သည့်အချက်က Prompt တစ်ခုကို ပိုမိုထိရောက်စေသနည်း?',
          options: [
            { id: 'a', textEn: 'Specifying the role, target audience, format, and clear constraints', textMy: 'အခန်းကဏ္ဍ၊ ပစ်မှတ်ပရိသတ်၊ လိုချင်သောပုံစံနှင့် ကန့်သတ်ချက်များကို တိကျစွာ ထည့်သွင်းခြင်း' },
            { id: 'b', textEn: 'Typing only one single random word in ALL CAPS', textMy: 'စာလုံးအကြီးများဖြင့် စကားလုံးတစ်လုံးတည်းသာ ရိုက်ထည့်ခြင်း' },
            { id: 'c', textEn: 'Unplugging the keyboard halfway through', textMy: 'စာရိုက်နေစဉ် ကီးဘုတ်ကြိုးကို ဆွဲဖြုတ်လိုက်ခြင်း' },
            { id: 'd', textEn: 'Asking the question in complete darkness', textMy: 'အမှောင်ထဲတွင် မေးခွန်းမေးခြင်း' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Spot on! Adding role, context, and format eliminates ambiguity and produces high quality.',
          explanationMy: 'မှန်ပါတယ်! အခန်းကဏ္ဍ၊ နောက်ခံအကြောင်းအရာနှင့် ပုံစံများ ထည့်သွင်းခြင်းက မရေရာမှုများကို ဖယ်ရှားပေးပါသည်။'
        },
        {
          id: 'q-ai7-3',
          questionEn: 'If an AI’s first response is too long and complicated, what should you do?',
          questionMy: 'AI ၏ ပထမဆုံး အဖြေသည် ရှည်လျားပြီး ရှုပ်ထွေးလွန်းနေပါက သင် မည်သို့ ပြုလုပ်သင့်သနည်း?',
          options: [
            { id: 'a', textEn: 'Follow up with a refinement prompt: "Please simplify that and summarize it in 3 bullet points"', textMy: 'နောက်ဆက်တွဲ Prompt ဖြင့်: "ကျေးဇူးပြု၍ ပိုမိုရိုးရှင်းအောင် ပြင်ဆင်ပြီး အချက် ၃ ချက်ဖြင့် အကျဉ်းချုပ်ပေးပါ" ဟု ထပ်မံညွှန်ကြားပါ' },
            { id: 'b', textEn: 'Throw the computer away', textMy: 'ကွန်ပျူတာကို လွှင့်ပစ်လိုက်ပါ' },
            { id: 'c', textEn: 'Accept defeat and never read again', textMy: 'လက်လျှော့လိုက်ပြီး စာမဖတ်တော့ပါ' },
            { id: 'd', textEn: 'Turn the monitor upside down', textMy: 'မော်နီတာကို ဇောက်ထိုးလှန်ထားပါ' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Awesome! Prompting is an interactive conversation. You can continually guide and refine outputs.',
          explanationMy: 'အရမ်းတော်တယ်! Prompt ပေးခြင်းသည် စကားပြောဆိုခြင်းကဲ့သို့ပင် ဖြစ်ပြီး မိမိလိုချင်သလို အချိန်မရွေး ပြန်လည်မွမ်းမံ ညွှန်ကြားနိုင်ပါသည်။'
        }
      ],
      summaryEn: [
        'A prompt is your steering wheel for guiding generative AI models.',
        'Use the RTCF framework (Role, Task, Context, Format) for rich, tailored answers.',
        'Prompting is an iterative conversation — follow up and refine until it is just right!'
      ],
      summaryMy: [
        'Prompt သည် Generative AI ကို မိမိလိုရာ ထိန်းကျောင်းမောင်းနှင်သည့် စတီယာရင် ဖြစ်သည်။',
        'အကောင်းဆုံး အဖြေများ ရရှိရန် RTCF (Role, Task, Context, Format) ကို အသုံးပြုပါ။',
        'မေးမြန်းခြင်းသည် အပြန်အလှန် စကားပြောဆိုမှုဖြစ်သဖြင့် လိုအပ်သလို ထပ်မံမွမ်းမံ ညွှန်ကြားနိုင်သည်။'
      ]
    },

    // -------------------------------------------------------------------------
    // Lesson 8: AI Mistakes and Fact Checking
    // -------------------------------------------------------------------------
    {
      id: 'ai-8',
      lessonNumber: 8,
      titleEn: 'AI Mistakes and Fact Checking',
      titleMy: 'AI ၏ အမှားများနှင့် အချက်အလက် စစ်ဆေးခြင်း',
      shortIntroEn: 'AI sounds super confident, but it can make hilarious or dangerous mistakes! Learn why fact-checking is your superpower.',
      shortIntroMy: 'AI သည် ယုံကြည်မှု အပြည့်ဖြင့် ဖြေကြားတတ်သော်လည်း ရယ်စရာ သို့မဟုတ် အန္တရာယ်ရှိသော အမှားများ ပြုလုပ်တတ်ပါသည်! အချက်အလက် စစ်ဆေးခြင်း၏ အရေးပါပုံကို လေ့လာကြမယ်။',
      learningObjectivesEn: [
        'Understand what an "AI Hallucination" is (inventing false facts with confidence).',
        'Learn why AI is NOT a search engine or an absolute source of truth.',
        'Master the 3-step fact-checking habit: Cross-check, Verify Sources, Ask an Adult.'
      ],
      learningObjectivesMy: [
        '"AI Hallucination" (အမှားများကို အဟုတ်ထင်မှတ်ကာ ယုံကြည်စွာ လုပ်ကြံပြောဆိုခြင်း) ဆိုသည်မှာ အဘယ်နည်းကို နားလည်စေရန်။',
        'AI သည် လုံးဝဥဿုံ မှန်ကန်သော အမှန်တရား ရင်းမြစ် မဟုတ်ကြောင်း သိရှိစေရန်။',
        'အချက်အလက် စစ်ဆေးခြင်း အလေ့အကျင့် ၃ ခု: အခြားရင်းမြစ်နှင့် တိုက်ဆိုင်စစ်ဆေးခြင်း၊ မူရင်းကို ရှာဖွေခြင်း၊ လူကြီးများကို မေးမြန်းခြင်းတို့ကို ကျင့်သုံးနိုင်စေရန်။'
      ],
      explanationEn: [
        'Here is one of the most important lessons in digital literacy: **AI models do NOT actually know what is true or false.** They only know which words sound likely to follow each other based on statistical patterns.',
        'Sometimes an AI will answer a question with complete, polite confidence — but invent completely made-up facts! In computer science, this is called an **AI Hallucination**. For example, an AI might tell you that bananas grow on pine trees, or invent a historical event that never took place.',
        'Because AI can make mistakes, you should **NEVER use AI output for school homework or health questions without fact-checking**! Always verify important dates, numbers, and facts using reputable books, official encyclopedias, or by asking your parents and teachers.'
      ],
      explanationMy: [
        'ဒစ်ဂျစ်တယ်ခေတ်တွင် အရေးအကြီးဆုံး သင်ခန်းစာတစ်ခုမှာ: **AI သည် မည်သည့်အရာက အမှန်၊ မည်သည့်အရာက အမှားဆိုသည်ကို တကယ်တမ်း မသိရှိပါ**။ ကိန်းဂဏန်း ပုံစံများအရ မည်သည့်စကားလုံးနောက်တွင် မည်သည့်စကားလုံး လိုက်သင့်သည်ကိုသာ ခန့်မှန်းပေးခြင်း ဖြစ်သည်။',
        'တစ်ခါတစ်ရံ AI သည် ယဉ်ကျေးယုံကြည်စွာဖြင့် လုံးဝမဟုတ်မမှန်သော အချက်အလက်များကို လုပ်ကြံပြောဆိုတတ်သည်။ ဤအရာကို **AI Hallucination (ယောင်ယမ်းမှားယွင်းခြင်း)** ဟု ခေါ်သည်။ ဥပမာ- ငှက်ပျောသီးသည် ထင်းရှူးပင်တွင် သီးသည်ဟု ပြောဆိုခြင်း သို့မဟုတ် သမိုင်းတွင် မရှိခဲ့သော အဖြစ်အပျက်ကို အဟုတ်လုပ် ပြောဆိုခြင်းမျိုး ဖြစ်သည်။',
        'ထို့ကြောင့် **ကျောင်းစာအိမ်စာများ သို့မဟုတ် ကျန်းမာရေးကိစ္စများတွင် AI ၏ အဖြေကို စစ်ဆေးအတည်မပြုဘဲ ဘယ်သောအခါမှ တိုက်ရိုက် မသုံးစွဲသင့်ပါ**! စာအုပ်ကောင်းများ၊ တရားဝင် စွယ်စုံကျမ်းများနှင့် မိဘဆရာသမားများကို အမြဲ မေးမြန်းအတည်ပြုရပါမည်။'
      ],
      diagram: {
        type: 'hallucination-magnifying-glass',
        captionEn: 'Do not trust blindly! Always inspect AI statements with your Fact-Checking Magnifying Glass.',
        captionMy: 'မျက်စိမှိတ် မယုံပါနှင့်! AI ၏ ပြောဆိုချက်များကို အချက်အလက် စစ်ဆေးသည့် မှန်ဘီလူးဖြင့် အမြဲ စစ်ဆေးပါ။',
        altEn: 'Cartoon detective examining an AI generated statement with a magnifying glass showing question marks',
        altMy: 'AI ၏ ပြောဆိုချက်ကို စုံထောက်မှန်ဘီလူးဖြင့် စစ်ဆေးနေပုံပြ ပုံ'
      },
      analogyEn: {
        title: 'The Confident Storyteller Friend',
        description: 'Think of a friend who tells wild stories with total confidence: "Did you know that dogs can fly if they drink strawberry milk?!" Your friend isn’t trying to be mean; they just have a wild imagination. You wouldn’t put that on your science test without checking a science book first!'
      },
      analogyMy: {
        title: 'ယုံကြည်မှုအပြည့်ဖြင့် ပုံကြီးချဲ့တတ်သော သူငယ်ချင်း ဥပမာ',
        description: '"စတော်ဘယ်ရီနို့ သောက်ရင် ခွေးတွေ ပျံနိုင်တယ်ဆိုတာ မင်းသိလား?!" ဟု လုံးဝ မမှန်သော အရာများကို ယုံကြည်မှု အပြည့်ဖြင့် လာပြောတတ်သော သူငယ်ချင်းတစ်ယောက်လိုပါပဲ။ သူသည် တမင် ရည်ရွယ်ချက်ဆိုး မရှိသော်လည်း စိတ်ကူးယဉ်ပြောဆိုခြင်း ဖြစ်သဖြင့် စာအုပ်ထဲတွင် အရင်မစစ်ဘဲ သိပ္ပံစာမေးပွဲထဲ သွားမရေးသင့်သလိုမျိုး ဖြစ်ပါသည်။'
      },
      workedExampleEn: {
        title: 'Fact-Checking an AI History Claim',
        scenario: 'An AI claims: "Thomas Edison invented the smartphone in 1895."',
        steps: [
          { stepNumber: 1, instruction: 'Identify the specific claim', outcome: '"Edison invented smartphone in 1895."' },
          { stepNumber: 2, instruction: 'Notice red flags', outcome: 'Smartphones need microchips and satellites which did not exist in the 1800s!' },
          { stepNumber: 3, instruction: 'Cross-check trusted encyclopedia', outcome: 'Encyclopedia confirms: The first modern smartphone was released in the 1990s.' },
          { stepNumber: 4, instruction: 'Correct the error', outcome: 'The AI hallucinated a connection between Edison’s early telegraph inventions and phones.' }
        ]
      },
      workedExampleMy: {
        title: 'AI ၏ သမိုင်းဆိုင်ရာ အဆိုကို စစ်ဆေးခြင်း ဥပမာ',
        scenario: 'AI က "သောမတ်စ် အက်ဒီဆင်သည် ၁၈၉၅ တွင် စမတ်ဖုန်းကို တီထွင်ခဲ့သည်" ဟု ပြောဆိုလာခြင်း။',
        steps: [
          { stepNumber: 1, instruction: 'အဆိုပြုချက်ကို မှတ်သားသည်', outcome: '"အက်ဒီဆင်က ၁၈၉၅ တွင် စမတ်ဖုန်း တီထွင်ခဲ့သည်။"' },
          { stepNumber: 2, instruction: 'သံသယဖြစ်ဖွယ် အချက်များကို သတိထားသည်', outcome: '၁၈၀၀ ပြည့်နှစ်များတွင် မိုက်ခရိုချစ်ပ်နှင့် ဂြိုဟ်တုများ မရှိသေးပါ!' },
          { stepNumber: 3, instruction: 'ယုံကြည်စိတ်ချရသော စွယ်စုံကျမ်းတွင် တိုက်ဆိုင်စစ်ဆေးသည်', outcome: 'ပထမဆုံး စမတ်ဖုန်းကို ၁၉၉၀ ပြည့်လွန်နှစ်များတွင်သာ စတင်ထုတ်လုပ်ခဲ့ကြောင်း တွေ့ရှိရသည်။' },
          { stepNumber: 4, instruction: 'အမှားကို ပြုပြင်လိုက်သည်', outcome: 'AI သည် အက်ဒီဆင်၏ ကြေးနန်းတီထွင်မှုများနှင့် ရောထွေးပြီး မှားယွင်းယောင်ယမ်းခဲ့ခြင်း ဖြစ်သည်။' }
        ]
      },
      activity: {
        type: 'phishing-detector',
        titleEn: 'AI Fact-Checker Detective Game',
        titleMy: 'AI အမှားရှာ စုံထောက် ကစားနည်း',
        instructionsEn: 'Read these 3 AI statements. Click the statement that is a clear AI Hallucination!',
        instructionsMy: 'AI ၏ ပြောဆိုချက် ၃ ခုကို ဖတ်ရှုပြီး ထင်ရှားသော အမှား (Hallucination) ကို ရှာဖွေနှိပ်ပါ။',
        initialData: [
          { text: 'Water boils at 100 degrees Celsius under standard sea-level pressure.', isHallucination: false },
          { text: 'Penguins are arctic birds that can fly faster than fighter jets.', isHallucination: true },
          { text: 'The Moon orbits around planet Earth approximately once every 27 days.', isHallucination: false }
        ]
      },
      quizQuestions: [
        {
          id: 'q-ai8-1',
          questionEn: 'What is an "AI Hallucination"?',
          questionMy: '"AI Hallucination" ဆိုသည်မှာ အဘယ်နည်း?',
          options: [
            { id: 'a', textEn: 'When an AI confidently invents incorrect facts that sound plausible', textMy: 'မှန်သယောင်ယောင်နှင့် မမှန်ကန်သော အချက်အလက်များကို AI က ယုံကြည်စွာ လုပ်ကြံပြောဆိုခြင်း' },
            { id: 'b', textEn: 'When a computer screen goes completely black', textMy: 'မျက်နှာပြင် မည်းမှောင်သွားခြင်း' },
            { id: 'c', textEn: 'When the computer fan spins loudly in summer', textMy: 'နွေရာသီတွင် ကွန်ပျူတာ ပန်ကာ ကျယ်လောင်စွာ လည်ခြင်း' },
            { id: 'd', textEn: 'A video game about running in mazes', textMy: 'ဝင်္ကပါထဲ ပြေးရသော ဗီဒီယိုဂိမ်းတစ်ခု' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Correct! Hallucinations occur because models predict plausible words, not verified truths.',
          explanationMy: 'မှန်ကန်ပါတယ်! AI သည် စကားလုံးများ ဆက်စပ်မှုကိုသာ တွက်ချက်သဖြင့် အမှန်တရားမဟုတ်သော အရာများကို မှားယွင်းပြောဆိုတတ်ပါသည်။'
        },
        {
          id: 'q-ai8-2',
          questionEn: 'Should you copy and paste text from an AI directly into your school project without reading it?',
          questionMy: 'AI က ပေးသော စာသားများကို မဖတ်ဘဲ ကျောင်းပရောဂျက်ထဲသို့ တိုက်ရိုက် ကူးယူထည့်သွင်းသင့်ပါသလား?',
          options: [
            { id: 'a', textEn: 'No, always read, verify the facts with trusted sources, and write in your own words', textMy: 'မထည့်သင့်ပါ၊ အမြဲတမ်း သေချာဖတ်ရှုပြီး ယုံကြည်ရသော စာအုပ်များတွင် စစ်ဆေးကာ ကိုယ်ပိုင်စကားဖြင့် ရေးရမည်' },
            { id: 'b', textEn: 'Yes, because computers are never wrong', textMy: 'ထည့်သင့်သည်၊ အဘယ်ကြောင့်ဆိုသော် ကွန်ပျူတာသည် ဘယ်တော့မှ မမှားသောကြောင့်ဖြစ်သည်' },
            { id: 'c', textEn: 'Yes, to save as much time as possible for video games', textMy: 'ဂိမ်းဆော့ရန် အချိန်သက်သာအောင် တိုက်ရိုက်ကူးထည့်သင့်သည်' },
            { id: 'd', textEn: 'Only if the teacher is on vacation', textMy: 'ဆရာမ ခွင့်ယူထားချိန်တွင်သာ ထည့်သင့်သည်' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Spot on! Real learning means understanding ideas, verifying facts, and expressing them in your own voice.',
          explanationMy: 'မှန်ပါတယ်! စစ်မှန်သော ပညာသင်ယူမှုဆိုသည်မှာ အချက်အလက်များကို စစ်ဆေးနားလည်ပြီး ကိုယ်ပိုင် စကားဖြင့် ဖော်ပြတတ်ခြင်း ဖြစ်သည်။'
        },
        {
          id: 'q-ai8-3',
          questionEn: 'Which is the best tool for checking if an AI-generated historical fact is true?',
          questionMy: 'AI ပေးသော သမိုင်းအချက်အလက် မှန်မမှန် စစ်ဆေးရန် အကောင်းဆုံး နည်းလမ်းမှာ အဘယ်နည်း?',
          options: [
            { id: 'a', textEn: 'Consulting reputable library books, verified encyclopedias, or your teacher', textMy: 'စာကြည့်တိုက်ရှိ စာအုပ်များ၊ တရားဝင် စွယ်စုံကျမ်းများ သို့မဟုတ် ဆရာမကို မေးမြန်းစစ်ဆေးခြင်း' },
            { id: 'b', textEn: 'Asking the exact same AI if it was telling the truth', textMy: 'အဆိုပါ AI ကိုပင် သူအမှန်ပြောသလားဟု ပြန်မေးခြင်း' },
            { id: 'c', textEn: 'Flipping a coin in the air', textMy: 'အကြွေစေ့ ခေါင်းပန်းလှန်ခြင်း' },
            { id: 'd', textEn: 'Ignoring the question completely', textMy: 'မေးခွန်းကို လုံးဝ လျစ်လျူရှုထားခြင်း' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Awesome! External, trusted, human-curated resources are the gold standard for fact-checking.',
          explanationMy: 'အရမ်းတော်တယ်! စာကြည့်တိုက်စာအုပ်များနှင့် ကျွမ်းကျင်သော ဆရာသမားများထံတွင် တိုက်ဆိုင်စစ်ဆေးခြင်းသည် အကောင်းဆုံး ဖြစ်ပါသည်။'
        }
      ],
      summaryEn: [
        'AI models do not possess conscious knowledge of truth — they predict likely words.',
        'AI hallucinations are false facts generated with complete confidence.',
        'Always verify important facts with trusted books, authoritative encyclopedias, and teachers.'
      ],
      summaryMy: [
        'AI သည် အမှန်တရားကို အသိစိတ်ဖြင့် မသိရှိဘဲ ဖြစ်နိုင်ခြေရှိသော စကားလုံးများကိုသာ ဆက်စပ်ပေးသည်။',
        'AI Hallucination ဆိုသည်မှာ မမှန်ကန်သော အချက်အလက်များကို ယုံကြည်စွာ လုပ်ကြံပြောဆိုခြင်း ဖြစ်သည်။',
        'အရေးကြီးသော အချက်အလက်များကို စာအုပ်များ၊ တရားဝင် စွယ်စုံကျမ်းများနှင့် ဆရာသမားများထံတွင် အမြဲ အတည်ပြုရမည်။'
      ]
    },

    // -------------------------------------------------------------------------
    // Lesson 9: Privacy, Fairness, and Responsible AI
    // -------------------------------------------------------------------------
    {
      id: 'ai-9',
      lessonNumber: 9,
      titleEn: 'Privacy, Fairness, and Responsible AI',
      titleMy: 'ကိုယ်ရေးလုံခြုံမှု၊ တရားမျှတမှုနှင့် တာဝန်သိ AI',
      shortIntroEn: 'With great power comes great responsibility! Learn how to use AI ethically, protect your personal privacy, and avoid bias.',
      shortIntroMy: 'ကြီးမားသော စွမ်းအားနှင့်အတူ တာဝန်ယူမှုလည်း ပါလာပါသည်! AI ကို ကျင့်ဝတ်နှင့်အညီ သုံးစွဲပုံ၊ ကိုယ်ရေးလုံခြုံမှု ကာကွယ်ပုံနှင့် ဘက်လိုက်မှု ကင်းဝေးအောင် လုပ်ဆောင်ပုံတို့ကို လေ့လာကြမယ်။',
      learningObjectivesEn: [
        'Understand AI Bias (when training data treats certain groups unfairly).',
        'Learn the golden privacy rule: Never share personal private data with public AI chatbots.',
        'Understand what it means to be an ethical, responsible digital citizen.'
      ],
      learningObjectivesMy: [
        'AI Bias (လေ့ကျင့်ရေး Data မညီမျှမှုကြောင့် မမျှတစွာ ဆုံးဖြတ်ခြင်း) ကို နားလည်စေရန်။',
        'အများသုံး AI Chatbot များထံသို့ မိမိ၏ ကိုယ်ရေးအချက်အလက်များကို ဘယ်တော့မှ မထည့်သင့်သည့် စည်းမျဉ်းကို သိရှိစေရန်။',
        'တာဝန်သိပြီး ကျင့်ဝတ်နှင့်ညီသော ဒစ်ဂျစ်တယ် နိုင်ငံသားကောင်းတစ်ဦး ဖြစ်လာစေရန်။'
      ],
      explanationEn: [
        'Because AI is built by humans and trained on human data, it can also inherit human flaws, prejudices, and blind spots. In computer science, this is called **AI Bias**.',
        'For example, if an AI hiring system was trained only on resumes from 50 years ago, it might falsely assume that engineers can only be men! Engineers must work very hard to audit their data, ensure equal representation, and build systems that treat everyone fairly and with respect.',
        'Another critical rule is **Privacy**: When you chat with online AI tools, your conversations may be stored and analyzed to train future models. Never type your real full name, phone number, home address, school name, or passwords into any AI prompt box!'
      ],
      explanationMy: [
        'AI ကို လူသားများက ဖန်တီးပြီး လူသားတို့၏ Data ဖြင့် လေ့ကျင့်ထားသောကြောင့် လူသားတို့၏ အားနည်းချက်များနှင့် ဘက်လိုက်မှုများ ပါသွားတတ်သည်။ ၎င်းကို **AI Bias** ဟု ခေါ်သည်။',
        'ဥပမာ- လွန်ခဲ့သော နှစ် ၅၀ က အချက်အလက်များဖြင့်သာ လေ့ကျင့်ထားသော AI သည် အင်ဂျင်နီယာဆိုသည်မှာ အမျိုးသားများသာ ဖြစ်ရမည်ဟု မှားယွင်းစွာ မှတ်ယူသွားနိုင်ပါသည်။ ထို့ကြောင့် ပညာရှင်များသည် Data များကို အမြဲစစ်ဆေးပြီး လူတိုင်းကို တန်းတူညီမျှ လေးစားစွာ ဆက်ဆံသော AI ဖြစ်အောင် အထူးဂရုစိုက် တည်ဆောက်ရပါသည်။',
        'နောက်ထပ် အရေးကြီးဆုံး စည်းမျဉ်းမှာ **ကိုယ်ရေးလုံခြုံမှု (Privacy)** ဖြစ်သည်: အွန်လိုင်း AI များနှင့် စကားပြောသောအခါ သင့်မေးခွန်းများကို နောက်ပိုင်း လေ့ကျင့်ရန် သိမ်းဆည်းထားတတ်သည်။ ထို့ကြောင့် သင့်နာမည်ရင်း၊ ဖုန်းနံပါတ်၊ နေရပ်လိပ်စာ၊ ကျောင်းအမည်နှင့် Passwords များကို မည်သည့် AI ထဲတွင်မျှ ဘယ်သောအခါမှ မထည့်သွင်းရပါ!'
      ],
      diagram: {
        type: 'responsible-ai-shield',
        captionEn: 'Responsible AI Pillars: Fairness, Privacy Shield, Transparency, and Human Safety.',
        captionMy: 'တာဝန်သိ AI ၏ အခြေခံမူများ: တရားမျှတမှု၊ ကိုယ်ရေးလုံခြုံမှုဒိုင်း၊ ပွင့်လင်းမြင်သာမှုနှင့် လူသားဘေးကင်းရေး။',
        altEn: 'Shield illustration showing icons for privacy lock, balance scale of justice, and human control',
        altMy: 'ကိုယ်ရေးလုံခြုံမှုနှင့် တရားမျှတမှုပြ ဒိုင်းကာပုံ'
      },
      analogyEn: {
        title: 'The Unfair Playground Referee',
        description: 'Imagine a soccer referee who only watched matches played by team Green, and never saw team Blue play. The referee might blow the whistle unfairly against team Blue without meaning to! That’s why training data must represent all teams equally and fairly.'
      },
      analogyMy: {
        title: 'ဘက်လိုက်သော ဘောလုံးဒိုင် ဥပမာ',
        description: 'အစိမ်းရောင်အသင်း ကစားတာကိုပဲ အမြဲကြည့်ခဲ့ပြီး အပြာရောင်အသင်း ကစားတာကို တစ်ခါမှ မမြင်ဖူးသော ဘောလုံးဒိုင်တစ်ယောက်လိုပါပဲ။ မရည်ရွယ်ဘဲ အပြာရောင်အသင်းကို မတရား ဖီစီမှုတ်မိနိုင်ပါသည်။ ထို့ကြောင့် လေ့ကျင့်ရေး Data များသည် အသင်းအားလုံးကို မျှမျှတတ ကိုယ်စားပြုရပါမည်။'
      },
      workedExampleEn: {
        title: 'Protecting Private Information from Prompts',
        scenario: 'A student wants to use an AI to help write a birthday party invitation.',
        steps: [
          { stepNumber: 1, instruction: 'Unsafe prompt draft', outcome: '"Write invite for Su Su living at No. 42 Golden Road, phone 09-12345678, Yangon."' },
          { stepNumber: 2, instruction: 'Identify sensitive private data', outcome: 'Full name, home address, and phone number are exposed!' },
          { stepNumber: 3, instruction: 'Sanitize with placeholders', outcome: '"Write an invitation for [Name], at [Location], RSVP [Phone Number]."' },
          { stepNumber: 4, instruction: 'Safe, private generation', outcome: 'The AI generates a wonderful template without ever seeing private personal details.' }
        ]
      },
      workedExampleMy: {
        title: 'Prompt ထဲရှိ ကိုယ်ရေးအချက်အလက်များကို ကာကွယ်ခြင်း ဥပမာ',
        scenario: 'မွေးနေ့ဖိတ်စာ ရေးသားရန် AI ထံ အကူအညီတောင်းခြင်း။',
        steps: [
          { stepNumber: 1, instruction: 'မလုံခြုံသော မူကြမ်း Prompt', outcome: '"အမှတ် ၄၂၊ ရွှေလမ်း၊ ဖုန်း ၀၉-၁၂၃၄၅၆၇၈၊ ရန်ကုန်နေ စုစု အတွက် ဖိတ်စာရေးပေးပါ"' },
          { stepNumber: 2, instruction: 'စိုးရိမ်ရသော အချက်အလက်များကို ရှာဖွေခြင်း', outcome: 'နာမည်ရင်း၊ နေရပ်လိပ်စာနှင့် ဖုန်းနံပါတ်များ ပေါ်လွင်နေသည်!' },
          { stepNumber: 3, instruction: 'နေရာယူ စာလုံးများဖြင့် အစားထိုးခြင်း', outcome: '"[အမည်]၊ [နေရာ]၊ [ဖုန်းနံပါတ်] အတွက် ကွက်လပ်ချန်၍ မွေးနေ့ဖိတ်စာ ရေးပေးပါ"' },
          { stepNumber: 4, instruction: 'လုံခြုံသော ရလဒ် ထွက်ပေါ်လာခြင်း', outcome: 'AI သည် ကိုယ်ရေးအချက်အလက်များကို လုံးဝမသိရဘဲ လှပသော ဖိတ်စာပုံစံကို ဖန်တီးပေးသည်။' }
        ]
      },
      activity: {
        type: 'privacy-sorter',
        titleEn: 'Safe Sharing vs Keep Private',
        titleMy: 'လုံခြုံစွာ မျှဝေခြင်းနှင့် လျှို့ဝှက်ထားရမည့်အရာများ ခွဲခြားခြင်း',
        instructionsEn: 'Sort these items: Is it SAFE to include in an AI prompt, or should it stay PRIVATE?',
        instructionsMy: 'အောက်ပါအချက်အလက်များကို AI Prompt ထဲတွင် "ထည့်သွင်းရန် ဘေးကင်းသည်" သို့မဟုတ် "လျှို့ဝှက်ထားရမည်" အဖြစ် ခွဲခြားပါ။',
        initialData: [
          { item: 'Your home bedroom address and phone number', isSafe: false },
          { item: 'Asking: "What is the speed of sound in air?"', isSafe: true },
          { item: 'Your school login password', isSafe: false },
          { item: 'Asking: "Give me 5 creative names for a pet dragon"', isSafe: true }
        ]
      },
      quizQuestions: [
        {
          id: 'q-ai9-1',
          questionEn: 'What is "AI Bias"?',
          questionMy: '"AI Bias" ဆိုသည်မှာ အဘယ်နည်း?',
          options: [
            { id: 'a', textEn: 'Unfair treatment or skewed predictions caused by incomplete or unbalanced training data', textMy: 'မပြည့်စုံသော သို့မဟုတ် မညီမျှသော Data ကြောင့် ဖြစ်ပေါ်လာသော မတရားသော ဘက်လိုက်မှု' },
            { id: 'b', textEn: 'A shiny silver sticker on the laptop case', textMy: 'လက်ပ်တော့အိတ်ပေါ်ရှိ ငွေရောင်စတစ်ကာ' },
            { id: 'c', textEn: 'A button that speeds up video games', textMy: 'ဂိမ်းကို မြန်စေသော ခလုတ်' },
            { id: 'd', textEn: 'The brand name of a computer monitor', textMy: 'ကွန်ပျူတာ မျက်နှာပြင် တံဆိပ်တစ်ခု' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Correct! Bias in training data leads directly to unfair real-world decisions by AI.',
          explanationMy: 'မှန်ကန်ပါတယ်! လေ့ကျင့်ရေး Data မညီမျှပါက AI သည်လည်း မတရားသော ဆုံးဖြတ်ချက်များကို ချမှတ်မိတတ်ပါသည်။'
        },
        {
          id: 'q-ai9-2',
          questionEn: 'Which of the following information should you NEVER put into a public AI prompt box?',
          questionMy: 'အောက်ပါတို့အနက် မည်သည့်အချက်အလက်ကို အများသုံး AI Prompt ထဲတွင် ဘယ်သောအခါမျှ မထည့်သင့်သနည်း?',
          options: [
            { id: 'a', textEn: 'Your real full name, home address, phone number, and school passwords', textMy: 'သင့်နာမည်ရင်း၊ နေရပ်လိပ်စာ၊ ဖုန်းနံပါတ်နှင့် ကျောင်း Password များ' },
            { id: 'b', textEn: 'A question about how dolphins swim', textMy: 'လင်းပိုင်များ မည်သို့ ရေကူးသနည်း ဟူသော မေးခွန်း' },
            { id: 'c', textEn: 'Asking for a recipe for chocolate chip cookies', textMy: 'ချောကလက် ကွတ်ကီး မုန့်ဖုတ်နည်း မေးမြန်းခြင်း' },
            { id: 'd', textEn: 'A poem about colorful autumn leaves', textMy: 'ဆောင်းဦးရွက်ကြွေ ကဗျာတစ်ပုဒ်' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Spot on! Never share private identifying data with third-party cloud AI tools.',
          explanationMy: 'မှန်ပါတယ်! မည်သည့် အွန်လိုင်း AI ထဲတွင်မျှ ကိုယ်ရေးကိုယ်တာ လုံခြုံရေး အချက်အလက်များကို မထည့်သွင်းရပါ။'
        },
        {
          id: 'q-ai9-3',
          questionEn: 'What does "Responsible AI" mean?',
          questionMy: '"Responsible AI (တာဝန်သိ AI)" ဆိုသည်မှာ အဘယ်နည်း?',
          options: [
            { id: 'a', textEn: 'Designing and using AI systems that are safe, honest, fair, and respectful of human rights', textMy: 'ဘေးကင်းလုံခြုံပြီး ရိုးသားတရားမျှတကာ လူ့အခွင့်အရေးကို လေးစားသော AI စနစ်များကို တည်ဆောက်အသုံးပြုခြင်း' },
            { id: 'b', textEn: 'Letting robots make all decisions with no human control', textMy: 'လူသားထိန်းချုပ်မှု မပါဘဲ စက်ရုပ်များကို အကုန်ဆုံးဖြတ်ခိုင်းခြင်း' },
            { id: 'c', textEn: 'Turning off all computers in the country', textMy: 'နိုင်ငံရှိ ကွန်ပျူတာအားလုံးကို ပိတ်ပစ်ခြင်း' },
            { id: 'd', textEn: 'Charging money for every single Google search', textMy: 'Google ရှာဖွေမှုတိုင်းအတွက် ငွေကြေးကောက်ခံခြင်း' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Awesome! Responsible AI ensures technology serves all of humanity safely and ethically.',
          explanationMy: 'အရမ်းတော်တယ်! တာဝန်သိ AI ဆိုသည်မှာ နည်းပညာသည် လူသားအားလုံးအတွက် အကျိုးရှိပြီး ဘေးကင်းလုံခြုံစေရန် သေချာစေခြင်း ဖြစ်သည်။'
        }
      ],
      summaryEn: [
        'AI models can reflect societal biases if their training data is one-sided or unvetted.',
        'Protect your privacy: Never enter personal identifiable info into AI chat prompts.',
        'Responsible AI requires fairness, transparency, accountability, and ethical human oversight.'
      ],
      summaryMy: [
        'လေ့ကျင့်ရေး Data မညီမျှပါက AI တွင် ဘက်လိုက်မှုများ ပါဝင်သွားနိုင်သည်။',
        'ကိုယ်ရေးလုံခြုံမှုကို ကာကွယ်ပါ: ကိုယ်ရေးအချက်အလက်များကို AI ထဲသို့ ဘယ်တော့မှ မထည့်ပါနှင့်။',
        'တာဝန်သိ AI ဖြစ်စေရန် တရားမျှတမှု၊ ပွင့်လင်းမြင်သာမှုနှင့် လူသားတို့၏ စနစ်တကျ ကြီးကြပ်မှု လိုအပ်ပါသည်။'
      ]
    },

    // -------------------------------------------------------------------------
    // Lesson 10: Final Project: Design a Simple AI Idea
    // -------------------------------------------------------------------------
    {
      id: 'ai-10',
      lessonNumber: 10,
      titleEn: 'Final Project: Design a Simple AI Idea',
      titleMy: 'နောက်ဆုံး ပရောဂျက်: ရိုးရှင်းသော AI စိတ်ကူးတစ်ခု ရေးဆွဲခြင်း',
      shortIntroEn: 'Become an AI Product Designer! Formulate an inspiring AI invention that helps your school, community, or the planet.',
      shortIntroMy: 'AI Product Designer တစ်ဦး ဖြစ်လာပါပြီ! သင့်ကျောင်း၊ ရပ်ရွာ သို့မဟုတ် ကမ္ဘာမြေကို အကျိုးပြုမည့် အမိုက်စား AI စိတ်ကူးတစ်ခုကို စနစ်တကျ ရေးဆွဲကြမယ်။',
      learningObjectivesEn: [
        'Apply the 4 steps of AI product design: Problem, Data, Model, and Safety Guardrails.',
        'Anticipate edge cases and potential biases in your invention.',
        'Present your AI idea clearly as a certified Junior AI Explorer!'
      ],
      learningObjectivesMy: [
        'AI Product ရေးဆွဲခြင်း အဆင့် ၄ ဆင့်: ပြဿနာသတ်မှတ်ခြင်း၊ Data စုဆောင်းခြင်း၊ Model ရွေးချယ်ခြင်းနှင့် ဘေးကင်းရေး ကာကွယ်မှုများကို အသုံးချနိုင်စေရန်။',
        'မိမိစိတ်ကူးတွင် ဖြစ်ပေါ်နိုင်သော အမှားများနှင့် ဘက်လိုက်မှုများကို ကြိုတင်ခန့်မှန်းနိုင်စေရန်။',
        'Junior AI Explorer အဖြစ် မိမိ၏ AI စိတ်ကူးကို ယုံကြည်မှုရှိစွာ တင်ပြနိုင်စေရန်။'
      ],
      explanationEn: [
        'Congratulations on reaching the capstone project of the AI for Kids course! You now know how computers recognize patterns, how machine learning trains on data, how generative models create text and images, and why fact-checking and privacy are so vital.',
        'For your final project, you will step into the shoes of an **AI Systems Designer**. You don’t need to write complex Python code today — great technology starts with a great human blueprint!',
        'Your blueprint must answer four core questions: 1. **What real-world problem does it solve?** 2. **What training data does it need?** 3. **How does it recognize or generate solutions?** 4. **What safety guardrails and privacy protections are in place?**'
      ],
      explanationMy: [
        'ကလေးများအတွက် AI သင်တန်း၏ နောက်ဆုံးပရောဂျက်သို့ ရောက်ရှိလာသည့်အတွက် ဂုဏ်ယူပါသည်! ကွန်ပျူတာများ ပုံစံမှတ်သားပုံ၊ Data မှ သင်ယူပုံ၊ Generative AI ၏ ဖန်တီးနိုင်စွမ်းနှင့် ကိုယ်ရေးလုံခြုံမှု၊ အချက်အလက် စစ်ဆေးမှုတို့၏ အရေးပါပုံကို ပြည့်စုံစွာ တတ်မြောက်ခဲ့ပြီးပါပြီ။',
        'ဤနောက်ဆုံး ပရောဂျက်တွင် သင်သည် **AI Systems Designer** တစ်ဦးအဖြစ် ဆောင်ရွက်ရမည် ဖြစ်သည်။ ရှုပ်ထွေးသော Code များ မရေးရသေးသော်လည်း ကောင်းမွန်သော နည်းပညာတိုင်းသည် စနစ်ကျသော လူသားတို့၏ စိတ်ကူးပုံကြမ်းမှ စတင်ပါသည်။',
        'သင့်ပုံကြမ်းတွင် အဓိက မေးခွန်း ၄ ခု ဖြေဆိုရမည်: ၁။ **မည်သည့် တကယ့်ပြဿနာကို ဖြေရှင်းပေးမည်နည်း?** ၂။ **မည်သည့် လေ့ကျင့်ရေး Data များ လိုအပ်မည်နည်း?** ၃။ **ပြဿနာကို မည်သို့ ခွဲခြားမှတ်သား ဖြေရှင်းမည်နည်း?** ၄။ **မည်သည့် ဘေးကင်းရေးနှင့် လုံခြုံရေး စည်းမျဉ်းများ ထည့်သွင်းထားမည်နည်း?**'
      ],
      diagram: {
        type: 'ai-blueprint-architecture',
        captionEn: 'The 4-Step AI Design Blueprint: Problem -> Data -> Model -> Safety Guardrails!',
        captionMy: 'AI ရေးဆွဲမှု ပုံကြမ်း အဆင့် ၄ ဆင့်: ပြဿနာ -> Data -> Model -> ဘေးကင်းရေး စည်းမျဉ်းများ!',
        altEn: 'Blueprint layout showing 4 quadrants: Problem Definition, Training Data, Model Logic, and Safety Rules',
        altMy: 'AI ပရောဂျက် ရေးဆွဲမှု ပုံစံပြ မျဉ်းကားချပ်'
      },
      analogyEn: {
        title: 'Architect’s Blueprints Before Construction',
        description: 'Before builders lay a single brick or pour concrete for a bridge, architects draw detailed blueprints showing load capacity, emergency exits, and materials. Designing an AI system carefully before coding saves time and ensures it is safe for the world!'
      },
      analogyMy: {
        title: 'အဆောက်အအုံ မဆောက်မီ ဗိသုကာ ပုံစံထုတ်ခြင်း ဥပမာ',
        description: 'တံတားတစ်စင်း မဆောက်မီ အုတ်တစ်ချပ်မှ မချခင် ဗိသုကာပညာရှင်များသည် ခံနိုင်ရည်ဝန်၊ အရေးပေါ်ထွက်ပေါက်များနှင့် ကုန်ကြမ်းများကို အသေးစိတ် ပုံဆွဲကြရသည်။ AI စနစ်တစ်ခု မတည်ဆောက်မီ စနစ်တကျ ကြိုတင်ရေးဆွဲခြင်းသည် အချိန်ကုန်သက်သာစေပြီး လူသားတို့အတွက် အန္တရာယ်ကင်းစေပါသည်။'
      },
      workedExampleEn: {
        title: 'Example Project: "EcoSort" Smart School Bin',
        scenario: 'Designing an AI camera system to help elementary students sort school trash correctly.',
        steps: [
          { stepNumber: 1, instruction: '1. Problem Definition', outcome: 'Students accidentally toss compostable apple cores and plastic bottles into paper bins.' },
          { stepNumber: 2, instruction: '2. Training Data', outcome: 'Collect 10,000 photos of typical lunchbox waste: milk cartons, fruit peels, sandwich foil, snack wrappers.' },
          { stepNumber: 3, instruction: '3. Machine Learning Model', outcome: 'A vision classifier detects item type in 0.2 seconds and displays a green arrow to the correct bin.' },
          { stepNumber: 4, instruction: '4. Privacy & Safety Guardrail', outcome: 'Camera points strictly down into the bin hopper — it NEVER records students’ faces or identities!' }
        ]
      },
      workedExampleMy: {
        title: 'ဥပမာ ပရောဂျက်: "EcoSort" ကျောင်းသုံး စမတ် အမှိုက်ခွဲခြားစက်',
        scenario: 'ကျောင်းသားများ အမှိုက်ကို မှန်ကန်စွာ ခွဲခြားစွန့်ပစ်နိုင်ရန် ကူညီပေးမည့် AI ကင်မရာ စနစ်တစ်ခု ရေးဆွဲခြင်း။',
        steps: [
          { stepNumber: 1, instruction: '၁။ ပြဿနာ သတ်မှတ်ချက်', outcome: 'ကျောင်းသားများသည် ပန်းသီးအခွံများနှင့် ပလတ်စတစ်ဘူးများကို စက္ကူပုံးထဲသို့ မှားယွင်းထည့်မိနေကြသည်။' },
          { stepNumber: 2, instruction: '၂။ လေ့ကျင့်ရေး Data', outcome: 'မုန့်ဘူးထဲတွင် ပါလေ့ရှိသော အမှိုက်ပုံ ၁၀,၀၀၀ (နို့ဘူး၊ သစ်သီးခွံ၊ မုန့်စက္ကူ) စုဆောင်းသည်။' },
          { stepNumber: 3, instruction: '၃။ Machine Learning Model', outcome: 'Vision Classifier က ၀.၂ စက္ကန့်အတွင်း ပစ္စည်းကို ခွဲခြားသိရှိပြီး မှန်ကန်သော အမှိုက်ပုံးဆီသို့ မြှားစိမ်းပြပေးသည်။' },
          { stepNumber: 4, instruction: '၄။ ကိုယ်ရေးလုံခြုံရေး စည်းမျဉ်း', outcome: 'ကင်မရာသည် အမှိုက်ပုံးအတွင်းဘက်သို့သာ ချိန်ထားပြီး ကျောင်းသားများ၏ မျက်နှာကို လုံးဝ မရိုက်ကူးပါ!' }
        ]
      },
      activity: {
        type: 'classification-sorter',
        titleEn: 'AI Design Blueprint Checklist',
        titleMy: 'AI ရေးဆွဲမှု ပုံကြမ်း စစ်ဆေးချက် ကစားနည်း',
        instructionsEn: 'Review the 4 pillars of the EcoSort invention. Match each component to its proper role!',
        instructionsMy: 'EcoSort စိတ်ကူး၏ အစိတ်အပိုင်း ၄ ခုကို သက်ဆိုင်ရာ အခန်းကဏ္ဍနှင့် တွဲစပ်ပေးပါ။',
        initialData: [
          { item: '10,000 photos of cafeteria food containers', category: 'data' },
          { item: 'Reduce school plastic pollution in landfills', category: 'problem' },
          { item: 'Camera angle never records children faces', category: 'privacy' },
          { item: 'Convolutional neural network for image labels', category: 'model' }
        ]
      },
      quizQuestions: [
        {
          id: 'q-ai10-1',
          questionEn: 'What is the very first step when designing any meaningful AI project?',
          questionMy: 'အကျိုးရှိသော AI ပရောဂျက်တစ်ခု ရေးဆွဲရာတွင် အရေးကြီးဆုံး ပထမအဆင့်မှာ အဘယ်နည်း?',
          options: [
            { id: 'a', textEn: 'Identify a clear real-world problem that humans need help solving', textMy: 'လူသားများ ဖြေရှင်းရန် အမှန်တကယ် လိုအပ်နေသော ပြဿနာတစ်ခုကို ရှင်းလင်းစွာ သတ်မှတ်ခြင်း' },
            { id: 'b', textEn: 'Buy 50 expensive computer screens', textMy: 'ဈေးကြီးသော ကွန်ပျူတာ မျက်နှာပြင် ၅၀ ဝယ်ယူခြင်း' },
            { id: 'c', textEn: 'Post on social media asking for money', textMy: 'လူမှုကွန်ရက်တွင် ငွေကြေးအလှူခံခြင်း' },
            { id: 'd', textEn: 'Choose a catchy brand name before knowing what the product does', textMy: 'ဘာလုပ်မှန်း မသိသေးဘဲ နာမည်အမိုက်စား အရင်ပေးခြင်း' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Correct! Great AI systems always start with human needs and a clear problem statement.',
          explanationMy: 'မှန်ကန်ပါတယ်! ကောင်းမွန်သော AI စနစ်တိုင်းသည် လူသားတို့၏ လိုအပ်ချက်နှင့် ပြဿနာကို အရင်ဆုံး ရှင်းလင်းစွာ သတ်မှတ်ရာမှ စတင်ပါသည်။'
        },
        {
          id: 'q-ai10-2',
          questionEn: 'Why did the EcoSort bin point its camera ONLY inside the bin and never at students’ faces?',
          questionMy: 'EcoSort စက်သည် ကင်မရာကို ကျောင်းသားများ၏ မျက်နှာသို့ မချိန်ဘဲ အမှိုက်ပုံးအတွင်းသို့သာ အဘယ်ကြောင့် ချိန်ထားသနည်း?',
          options: [
            { id: 'a', textEn: 'To protect student privacy and avoid collecting sensitive biometric face data', textMy: 'ကျောင်းသားများ၏ ကိုယ်ရေးလုံခြုံမှုကို ကာကွယ်ရန်နှင့် မျက်နှာအချက်အလက်များကို မစုဆောင်းမိစေရန်' },
            { id: 'b', textEn: 'Because cameras cannot see children', textMy: 'ကင်မရာများသည် ကလေးများကို မမြင်နိုင်သောကြောင့်' },
            { id: 'c', textEn: 'To save camera battery electricity', textMy: 'ကင်မရာ ဘက်ထရီ ချွေတာရန်' },
            { id: 'd', textEn: 'Because trash smells good to cameras', textMy: 'အမှိုက်အနံ့ကို ကင်မရာက ကြိုက်သောကြောင့်' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Spot on! Responsible designers minimize data collection to strictly what is needed (Privacy by Design).',
          explanationMy: 'မှန်ပါတယ်! တာဝန်သိ Designer များသည် လိုအပ်သည်ထက် ပိုသော ကိုယ်ရေးအချက်အလက်များကို လုံးဝ စုဆောင်းခြင်း မပြုလုပ်ကြပါ။'
        },
        {
          id: 'q-ai10-3',
          questionEn: 'What should you do if your AI test reveals it makes mistakes on certain types of objects?',
          questionMy: 'စမ်းသပ်မှုအတွင်း အချို့သော အရာဝတ္ထုများတွင် AI က မှားယွင်းနေကြောင်း တွေ့ရှိပါက မည်သို့ လုပ်ဆောင်သင့်သနည်း?',
          options: [
            { id: 'a', textEn: 'Gather more diverse, high-quality training examples of those tricky objects and retrain', textMy: 'အဆိုပါ အခက်အခဲရှိသော ပစ္စည်းများ၏ စုံလင်သော ဥပမာအသစ်များကို ထပ်မံစုဆောင်း၍ ပြန်လည် လေ့ကျင့်ပေးပါ' },
            { id: 'b', textEn: 'Ignore the mistakes and hope nobody notices', textMy: 'အမှားများကို လျစ်လျူရှုပြီး မည်သူမျှ သတိမထားမိပါစေနှင့်ဟု ဆုတောင်းပါ' },
            { id: 'c', textEn: 'Shout at the computer screen', textMy: 'ကွန်ပျူတာ မျက်နှာပြင်ကို အော်ဟစ်ဆူပူပါ' },
            { id: 'd', textEn: 'Delete the entire project forever', textMy: 'ပရောဂျက်တစ်ခုလုံးကို အပြီးတိုင် ဖျက်ပစ်ပါ' }
          ],
          correctOptionId: 'a',
          explanationEn: 'Awesome! Continuous iteration and supplementing weak training data is how engineering triumphs.',
          explanationMy: 'အရမ်းတော်တယ်! အားနည်းနေသော Data များကို ထပ်မံဖြည့်စွက်ပြီး ပြန်လည်လေ့ကျင့်ခြင်းသည် အောင်မြင်သော အင်ဂျင်နီယာများ၏ နည်းလမ်းဖြစ်ပါသည်။'
        }
      ],
      summaryEn: [
        'AI product design requires 4 pillars: Problem, Data, Model, and Safety.',
        'Always design with Privacy by Design: collect only necessary non-invasive data.',
        'You have graduated as an official Junior AI Explorer! 🎓'
      ],
      summaryMy: [
        'AI ပရောဂျက်တစ်ခု တည်ဆောက်ရာတွင် ပြဿနာ၊ Data၊ Model နှင့် ဘေးကင်းရေး ဟူသော မဏ္ဍိုင် ၄ ခု လိုအပ်သည်။',
        'ကိုယ်ရေးလုံခြုံမှုကို အမြဲ ဦးစားပေးပြီး မလိုအပ်သော အချက်အလက်များကို မစုဆောင်းရပါ။',
        'သင်သည် တရားဝင် Junior AI Explorer အဖြစ် အောင်မြင်စွာ တက်လှမ်းနိုင်ခဲ့ပါပြီ! 🎓'
      ]
    }
  ],

  // ---------------------------------------------------------------------------
  // Final Course Review & Assessment
  // ---------------------------------------------------------------------------
  finalReview: {
    badgeTitleEn: 'Junior AI Explorer',
    badgeTitleMy: 'AI နည်းပညာ ရှေ့ဆောင်သူ',
    certificateTitleEn: 'Certificate of Achievement: AI for Kids',
    certificateTitleMy: 'အောင်လက်မှတ်: ကလေးများအတွက် ဉာဏ်ရည်တု (AI) သင်တန်း',
    summaryEn: [
      'You discovered that AI is human-made software powered by math and pattern recognition, not magic.',
      'You explored everyday AI in video recommendations, maps, cameras, and spam filters.',
      'You learned how machine learning trains on massive datasets rather than hand-coded rules.',
      'You mastered the importance of clean training data: "Garbage In, Garbage Out."',
      'You unraveled how computer vision breaks photos into pixel matrices, edges, and shapes.',
      'You explored Generative AI, LLMs, and probabilistic next-word prediction.',
      'You learned the RTCF prompt engineering framework (Role, Task, Context, Format).',
      'You became a vigilant fact-checker who knows how to spot and debunk AI hallucinations.',
      'You championed privacy, ethical fairness, and responsible technology design.'
    ],
    summaryMy: [
      'AI သည် မှော်အတတ် မဟုတ်ဘဲ လူသားတို့ သင်္ချာနှင့် ပုံစံမှတ်သားမှုဖြင့် တည်ဆောက်ထားသော Software ဖြစ်ကြောင်း သိရှိခဲ့သည်။',
      'ဗီဒီယို အကြံပြုချက်များ၊ မြေပုံများ၊ ကင်မရာများနှင့် အီးမေးလ်များထဲက နေ့စဉ်သုံး AI များကို လေ့လာခဲ့သည်။',
      'Machine Learning သည် စည်းမျဉ်းများ ရေးမည့်အစား Data များမှတစ်ဆင့် သင်ယူပုံကို နားလည်ခဲ့သည်။',
      'သန့်ရှင်းသော Data ၏ အရေးပါပုံကို "Garbage In, Garbage Out" ဖြင့် သဘောပေါက်ခဲ့သည်။',
      'Computer Vision သည် ရုပ်ပုံများကို Pixel များ၊ မျဉ်းစွန်းများနှင့် ပုံသဏ္ဌာန်များအဖြစ် အဆင့်ဆင့် ခွဲခြမ်းပုံကို သိရှိခဲ့သည်။',
      'Generative AI ၏ စာနှင့် ရုပ်ပုံများ ဖန်တီးပေးနိုင်စွမ်းကို လေ့လာခဲ့သည်။',
      'RTCF (Role, Task, Context, Format) ဖြင့် ထိရောက်သော Prompt ရေးသားနည်းကို တတ်မြောက်ခဲ့သည်။',
      'AI Hallucination အမှားများကို စုံထောက်တစ်ဦးလို ရှာဖွေစစ်ဆေးတတ်သော Fact-Checker တစ်ဦး ဖြစ်လာခဲ့သည်။',
      'ကိုယ်ရေးလုံခြုံမှု၊ တရားမျှတမှုနှင့် တာဝန်သိ နည်းပညာအသုံးပြုမှုကို ဦးစားပေးတတ်ခဲ့သည်။'
    ],
    learnedChecklistEn: [
      'I can explain the difference between human intelligence and machine AI.',
      'I can spot AI at work in recommendation algorithms and maps.',
      'I understand how machine learning discovers patterns from training examples.',
      'I know why diverse, clean training data is critical to prevent bias.',
      'I understand how computer vision uses pixels and features to classify images.',
      'I know how Generative AI predicts text and creates original imagery.',
      'I can craft effective prompts using Role, Task, Context, and Format.',
      'I know what an AI hallucination is and how to fact-check statements.',
      'I never share private personal information in public AI prompts.',
      'I can design a responsible AI concept that solves a real community problem.'
    ],
    learnedChecklistMy: [
      'လူသားဉာဏ်ရည်နှင့် စက်ပစ္စည်း AI တို့၏ ကွာခြားချက်ကို ရှင်းပြနိုင်သည်။',
      'မြေပုံများနှင့် ဗီဒီယို App များထဲရှိ AI စနစ်များကို ခွဲခြားသိမြင်နိုင်သည်။',
      'Machine Learning သည် ဥပမာများမှ ပုံစံများကို မည်သို့ သင်ယူသည်ကို နားလည်သည်။',
      'ဘက်လိုက်မှု ကင်းဝေးစေရန် စုံလင်သန့်ရှင်းသော Data အဘယ်ကြောင့် လိုအပ်သည်ကို သိသည်။',
      'Computer Vision က Pixel များနှင့် Features များကို သုံး၍ ပုံခွဲခြားပုံကို နားလည်သည်။',
      'Generative AI က စာသားနှင့် ရုပ်ပုံအသစ်များကို မည်သို့ ဖန်တီးပေးသည်ကို သိသည်။',
      'Role, Task, Context, Format ကို သုံး၍ ကောင်းမွန်သော Prompt များကို ရေးသားနိုင်သည်။',
      'AI Hallucination ဆိုသည်ကို သိရှိပြီး အချက်အလက်များကို စစ်ဆေးနိုင်သည်။',
      'အများသုံး AI ထဲတွင် မိမိ၏ ကိုယ်ရေးအချက်အလက်များကို ဘယ်တော့မှ မထည့်ပါ။',
      'လူ့ဘောင်အဖွဲ့အစည်းကို အကျိုးပြုမည့် တာဝန်သိ AI စိတ်ကူးတစ်ခုကို ရေးဆွဲနိုင်သည်။'
    ],
    vocabulary: [
      {
        term: 'Artificial Intelligence (AI)',
        pronunciation: 'ar-tuh-FISH-ul in-TEL-uh-jens',
        definitionEn: 'Computer systems designed to perform tasks that typically require human intelligence.',
        definitionMy: 'လူသားတို့၏ ဉာဏ်ရည် လိုအပ်သော အလုပ်များကို လုပ်ဆောင်နိုင်ရန် တည်ဆောက်ထားသော ကွန်ပျူတာ စနစ်များ။',
        exampleEn: 'Self-driving cars and voice assistants use AI.',
        exampleMy: 'အလိုအလျောက်မောင်း ကားများနှင့် Voice Assistant များတွင် AI ပါဝင်သည်။'
      },
      {
        term: 'Machine Learning (ML)',
        pronunciation: 'muh-SHEEN LUR-ning',
        definitionEn: 'A branch of AI where computers learn rules and patterns directly from training data.',
        definitionMy: 'ကွန်ပျူတာများက စည်းမျဉ်းများကို Data များမှတစ်ဆင့် တိုက်ရိုက် သင်ယူသော AI ၏ အစိတ်အပိုင်းတစ်ခု။',
        exampleEn: 'Spam filters learn to detect junk emails using machine learning.',
        exampleMy: 'အီးမေးလ် Spam filter များသည် ML ဖြင့် မလိုလားအပ်သော စာများကို ခွဲခြားသင်ယူသည်။'
      },
      {
        term: 'Training Data',
        pronunciation: 'TRAY-ning DAY-tuh',
        definitionEn: 'The labeled examples and information used to train a machine learning model.',
        definitionMy: 'Machine learning model တစ်ခုကို သင်ကြားလေ့ကျင့်ပေးရန် အသုံးပြုသော ဥပမာ အချက်အလက်များ။',
        exampleEn: 'Thousands of cat photos served as training data for the image classifier.',
        exampleMy: 'ကြောင်ဓာတ်ပုံ ထောင်ပေါင်းများစွာသည် Image classifier အတွက် လေ့ကျင့်ရေး Data ဖြစ်သည်။'
      },
      {
        term: 'Pixel',
        pronunciation: 'PIK-sul',
        definitionEn: 'The smallest individual colored dot on a digital screen or in an image matrix.',
        definitionMy: 'ဒစ်ဂျစ်တယ် မျက်နှာပြင် သို့မဟုတ် ရုပ်ပုံတစ်ခုအတွင်းရှိ အသေးငယ်ဆုံး အရောင်အစက် ကွက်ငယ်။',
        exampleEn: 'A 1080p high-definition image contains over 2 million pixels.',
        exampleMy: '1080p ရုပ်ပုံတစ်ခုတွင် Pixel ပေါင်း ၂ သန်းကျော် ပါဝင်သည်။'
      },
      {
        term: 'Generative AI',
        pronunciation: 'JEN-er-uh-tiv AI',
        definitionEn: 'AI systems that generate original content such as text, images, music, or code.',
        definitionMy: 'စာသား၊ ရုပ်ပုံ၊ သီချင်းနှင့် Code အသစ်များကို ဖန်တီးပေးနိုင်သော AI စနစ်များ။',
        exampleEn: 'ChatGPT and Midjourney are popular generative AI tools.',
        exampleMy: 'ChatGPT နှင့် Midjourney တို့သည် လူသိများသော Generative AI များ ဖြစ်ကြသည်။'
      },
      {
        term: 'Prompt',
        pronunciation: 'PROMPT',
        definitionEn: 'The text instructions, questions, or guidelines provided by a human to an AI.',
        definitionMy: 'AI ထံသို့ လူသားက ရိုက်ထည့်ပေးလိုက်သော ညွှန်ကြားချက် သို့မဟုတ် မေးခွန်း စာသား။',
        exampleEn: 'A clear prompt with role and format gets much better AI answers.',
        exampleMy: 'အခန်းကဏ္ဍနှင့် ပုံစံပါသော ရှင်းလင်းသည့် Prompt သည် ပိုမိုကောင်းမွန်သော အဖြေကို ရရှိစေသည်။'
      },
      {
        term: 'Hallucination',
        pronunciation: 'huh-loo-suh-NAY-shun',
        definitionEn: 'When an AI confidently produces incorrect or completely fabricated information.',
        definitionMy: 'AI က မမှန်ကန်သော အချက်အလက်များကို ယုံကြည်မှု အပြည့်ဖြင့် လုပ်ကြံပြောဆိုခြင်း။',
        exampleEn: 'The bot hallucinated that bicycles were invented in ancient Egypt.',
        exampleMy: 'ရှေးခေတ်အီဂျစ်တွင် စက်ဘီးကို တီထွင်ခဲ့သည်ဟု Bot က မှားယွင်းယောင်ယမ်းခဲ့သည်။'
      },
      {
        term: 'AI Bias',
        pronunciation: 'AI BY-us',
        definitionEn: 'Unfair prejudices or systematic errors present in AI results due to skewed training data.',
        definitionMy: 'မညီမျှသော Data ကြောင့် AI ၏ ဆုံးဖြတ်ချက်များတွင် မတရား ဘက်လိုက်မှုများ ပါဝင်နေခြင်း။',
        exampleEn: 'If a medical AI only learns from one age group, it shows bias against others.',
        exampleMy: 'ဆေးဘက်ဆိုင်ရာ AI က အသက်အရွယ်တစ်ခုတည်းကိုသာ လေ့လာထားပါက အခြားသူများအပေါ် ဘက်လိုက်မှု ဖြစ်ပေါ်နိုင်သည်။'
      }
    ],
    finalQuiz: [
      {
        id: 'fq-ai1',
        questionEn: 'What does "AI" stand for?',
        questionMy: '"AI" ဆိုသည့် စကားလုံး၏ အပြည့်အစုံမှာ အဘယ်နည်း?',
        options: [
          { id: 'a', textEn: 'Artificial Intelligence', textMy: 'Artificial Intelligence' },
          { id: 'b', textEn: 'Advanced Internet', textMy: 'Advanced Internet' },
          { id: 'c', textEn: 'Alien Invention', textMy: 'Alien Invention' },
          { id: 'd', textEn: 'Automated Instrument', textMy: 'Automated Instrument' }
        ],
        correctOptionId: 'a',
        explanationEn: 'Correct! AI stands for Artificial Intelligence.',
        explanationMy: 'မှန်ကန်ပါတယ်! AI ၏ အပြည့်အစုံမှာ Artificial Intelligence ဖြစ်သည်။'
      },
      {
        id: 'fq-ai2',
        questionEn: 'Do AI models have feelings, consciousness, or emotions?',
        questionMy: 'AI Model များတွင် ခံစားချက် သို့မဟုတ် အသိစိတ် ရှိပါသလား?',
        options: [
          { id: 'a', textEn: 'No, they are mathematical pattern-matching computer algorithms', textMy: 'မရှိပါ၊ ၎င်းတို့သည် သင်္ချာနည်းအရ ပုံစံရှာဖွေပေးသော Computer Algorithm များသာ ဖြစ်သည်' },
          { id: 'b', textEn: 'Yes, they feel sadness when turned off', textMy: 'ရှိပါသည်၊ စက်ပိတ်လိုက်ပါက ဝမ်းနည်းတတ်သည်' },
          { id: 'c', textEn: 'Yes, they have a biological human heart', textMy: 'ရှိပါသည်၊ သက်ရှိ လူ့နှလုံးသား ရှိသည်' },
          { id: 'd', textEn: 'Only on weekends', textMy: 'စနေ၊ တနင်္ဂနွေတွင်သာ ရှိသည်' }
        ],
        correctOptionId: 'a',
        explanationEn: 'Spot on! AI lacks consciousness, feelings, or inner life.',
        explanationMy: 'မှန်ပါတယ်! AI တွင် ခံစားချက်နှင့် အသိတရား မရှိပါ။'
      },
      {
        id: 'fq-ai3',
        questionEn: 'How does Machine Learning differ from traditional programming?',
        questionMy: 'Machine Learning သည် ရိုးရိုး Programming နှင့် မည်သို့ ကွာသနည်း?',
        options: [
          { id: 'a', textEn: 'ML learns patterns from example data instead of relying on hand-written rules', textMy: 'ML သည် လက်ဖြင့်ရေးသော စည်းမျဉ်းများအစား ဥပမာ Data များမှတစ်ဆင့် ပုံစံများကို သင်ယူသည်' },
          { id: 'b', textEn: 'ML never uses electricity', textMy: 'ML သည် လျှပ်စစ်မီး လုံးဝ မသုံးပါ' },
          { id: 'c', textEn: 'Traditional code is only used for playing cartoons', textMy: 'ရိုးရိုး Code ကို ကာတွန်းပြရန်သာ သုံးသည်' },
          { id: 'd', textEn: 'ML only works on paper notebooks', textMy: 'ML သည် စာအုပ်ပေါ်တွင်သာ အလုပ်လုပ်သည်' }
        ],
        correctOptionId: 'a',
        explanationEn: 'Correct! ML systems discover rules from large datasets of examples.',
        explanationMy: 'မှန်ကန်ပါတယ်! Machine Learning သည် ဥပမာများစွာမှတစ်ဆင့် စည်းမျဉ်းများကို ကိုယ်တိုင် ရှာဖွေသွားခြင်း ဖြစ်သည်။'
      },
      {
        id: 'fq-ai4',
        questionEn: 'What does the rule "Garbage In, Garbage Out" mean in AI?',
        questionMy: 'AI တွင် "Garbage In, Garbage Out" ဆိုသည်မှာ အဘယ်နည်း?',
        options: [
          { id: 'a', textEn: 'Poor, flawed training data produces inaccurate, untrustworthy AI models', textMy: 'ညံ့ဖျင်းမှားယွင်းသော လေ့ကျင့်ရေး Data များသည် မှားယွင်းသော AI ကို ဖြစ်ပေါ်စေသည်' },
          { id: 'b', textEn: 'Computers must be thrown away every morning', textMy: 'ကွန်ပျူတာများကို မနက်တိုင်း အမှိုက်ပုံးထဲ ပစ်ရမည်' },
          { id: 'c', textEn: 'Keyboards must be washed with river water', textMy: 'ကီးဘုတ်ကို မြစ်ရေဖြင့် ဆေးကြောရမည်' },
          { id: 'd', textEn: 'Data science is only about cleaning city trash', textMy: 'Data science သည် မြို့တွင်း အမှိုက်ရှင်းခြင်းသာ ဖြစ်သည်' }
        ],
        correctOptionId: 'a',
        explanationEn: 'Spot on! High-quality data is the essential foundation for reliable AI.',
        explanationMy: 'မှန်ပါတယ်! အရည်အသွေးမြင့် Data သည် ယုံကြည်စိတ်ချရသော AI အတွက် မရှိမဖြစ် အခြေခံ ဖြစ်သည်။'
      },
      {
        id: 'fq-ai5',
        questionEn: 'What is the smallest unit of an image that a computer vision model inspects?',
        questionMy: 'Computer Vision Model က စစ်ဆေးသော ရုပ်ပုံတစ်ခု၏ အသေးငယ်ဆုံး ယူနစ်မှာ အဘယ်နည်း?',
        options: [
          { id: 'a', textEn: 'A Pixel (containing numerical color values)', textMy: 'Pixel (အရောင်တန်ဖိုး ကိန်းဂဏန်းများ ပါဝင်သော အစက်)' },
          { id: 'b', textEn: 'A wooden pencil mark', textMy: 'သစ်သားခဲတံ အရာ' },
          { id: 'c', textEn: 'A drop of liquid paint', textMy: 'ဆေးစက်' },
          { id: 'd', textEn: 'A piece of scotch tape', textMy: 'တိပ်အပိုင်းအစ' }
        ],
        correctOptionId: 'a',
        explanationEn: 'Awesome! Images are composed of matrices of numerical pixels.',
        explanationMy: 'အရမ်းတော်တယ်! ဒစ်ဂျစ်တယ် ရုပ်ပုံများကို ကိန်းဂဏန်း Pixel များဖြင့် ဖွဲ့စည်းထားသည်။'
      },
      {
        id: 'fq-ai6',
        questionEn: 'What is Generative AI capable of doing?',
        questionMy: 'Generative AI သည် မည်သည့်အရာများကို လုပ်ဆောင်နိုင်သနည်း?',
        options: [
          { id: 'a', textEn: 'Creating new text, stories, images, and audio from text prompts', textMy: 'Prompt များမှတစ်ဆင့် စာသား၊ ပုံပြင်၊ ရုပ်ပုံနှင့် အသံ အသစ်များကို ဖန်တီးပေးနိုင်ခြင်း' },
          { id: 'b', textEn: 'Reading minds from a distance of 5 miles', textMy: '၅ မိုင်အကွာမှ စိတ်ကို လာဖတ်နိုင်ခြင်း' },
          { id: 'c', textEn: 'Cooking real hot soup in the kitchen', textMy: 'မီးဖိုချောင်တွင် တကယ့် စွပ်ပြုတ်ပူပူ ချက်ပေးနိုင်ခြင်း' },
          { id: 'd', textEn: 'Making it snow in the summer', textMy: 'နွေရာသီတွင် နှင်းကျစေခြင်း' }
        ],
        correctOptionId: 'a',
        explanationEn: 'Correct! Generative models synthesize brand-new digital content.',
        explanationMy: 'မှန်ကန်ပါတယ်! Generative Model များသည် ဆန်းသစ်သော ဒစ်ဂျစ်တယ် အကြောင်းအရာများကို ဖန်တီးပေးနိုင်သည်။'
      },
      {
        id: 'fq-ai7',
        questionEn: 'Which formula helps you write awesome AI prompts?',
        questionMy: 'အမိုက်စား AI Prompt များကို ရေးသားရာတွင် မည်သည့် ပုံသေနည်းက ကူညီသနည်း?',
        options: [
          { id: 'a', textEn: 'RTCF: Role, Task, Context, Format', textMy: 'RTCF: Role (အခန်းကဏ္ဍ), Task (တာဝန်), Context (နောက်ခံ), Format (ပုံစံ)' },
          { id: 'b', textEn: 'Random single-letter typing', textMy: 'ကျပန်း စာလုံးတစ်လုံးတည်း ရိုက်ခြင်း' },
          { id: 'c', textEn: 'Using only question marks', textMy: 'မေးခွန်းသင်္ကေတများသာ သုံးခြင်း' },
          { id: 'd', textEn: 'Deleting all spaces between words', textMy: 'စကားလုံးများကြား နေရာလွတ်အားလုံးကို ဖျက်ပစ်ခြင်း' }
        ],
        correctOptionId: 'a',
        explanationEn: 'Spot on! The RTCF framework produces clear, tailored, and rich AI outputs.',
        explanationMy: 'မှန်ပါတယ်! RTCF ပုံသေနည်းသည် အကောင်းမွန်ဆုံးနှင့် အတိကျဆုံး အဖြေများကို ရရှိစေသည်။'
      },
      {
        id: 'fq-ai8',
        questionEn: 'What is an "AI Hallucination"?',
        questionMy: '"AI Hallucination" ဆိုသည်မှာ အဘယ်နည်း?',
        options: [
          { id: 'a', textEn: 'When an AI confidently outputs false or invented facts', textMy: 'AI က မမှန်ကန်သော အချက်အလက်များကို ယုံကြည်စွာ လုပ်ကြံပြောဆိုခြင်း' },
          { id: 'b', textEn: 'When the computer screen cracks in half', textMy: 'မျက်နှာပြင် အလယ်မှ အက်ကွဲသွားခြင်း' },
          { id: 'c', textEn: 'When the internet speed becomes 100 times faster', textMy: 'အင်တာနက် အဆ ၁၀၀ မြန်သွားခြင်း' },
          { id: 'd', textEn: 'A magical computer game', textMy: 'မှော်ဆန်သော ကွန်ပျူတာဂိမ်းတစ်ခု' }
        ],
        correctOptionId: 'a',
        explanationEn: 'Correct! AI systems predict text patterns, which can lead to confident factual errors.',
        explanationMy: 'မှန်ကန်ပါတယ်! AI သည် စကားလုံးဆက်စပ်မှုကိုသာ တွက်ချက်သဖြင့် အချက်အလက် အမှားများကို ယုံကြည်စွာ လုပ်ကြံပြောတတ်ပါသည်။'
      },
      {
        id: 'fq-ai9',
        questionEn: 'Why should you NEVER share passwords or your home address in an AI prompt?',
        questionMy: 'AI Prompt ထဲတွင် Passwords သို့မဟုတ် နေရပ်လိပ်စာကို အဘယ်ကြောင့် ဘယ်တော့မှ မထည့်သင့်သနည်း?',
        options: [
          { id: 'a', textEn: 'Prompts can be stored on cloud servers and used to train future systems, exposing your privacy', textMy: 'မေးခွန်းများကို Server ပေါ်တွင် သိမ်းဆည်းပြီး ပြန်လည်လေ့ကျင့်ရာတွင် သုံးနိုင်သဖြင့် ကိုယ်ရေးလုံခြုံမှု ပေါက်ကြားနိုင်သောကြောင့်' },
          { id: 'b', textEn: 'Because computers become heavier in weight', textMy: 'ကွန်ပျူတာ အလေးချိန် ပိုလေးသွားမည် ဖြစ်သောကြောင့်' },
          { id: 'c', textEn: 'Because keyboard buttons will fall off', textMy: 'ကီးဘုတ်ခလုတ်များ ပြုတ်ကျသွားမည် ဖြစ်သောကြောင့်' },
          { id: 'd', textEn: 'It causes the room lights to turn red', textMy: 'အခန်းမီးများ အနီရောင်ပြောင်းသွားမည် ဖြစ်သောကြောင့်' }
        ],
        correctOptionId: 'a',
        explanationEn: 'Spot on! Protect your personal privacy at all times when using online AI tools.',
        explanationMy: 'မှန်ပါတယ်! အွန်လိုင်း AI များကို သုံးစွဲရာတွင် မိမိ၏ ကိုယ်ရေးလုံခြုံမှုကို အမြဲတမ်း ကာကွယ်ရမည်။'
      },
      {
        id: 'fq-ai10',
        questionEn: 'What is the most ethical way to use AI tools for schoolwork?',
        questionMy: 'ကျောင်းစာများတွင် AI ကို အသုံးပြုရာတွင် အကောင်းမွန်ဆုံး ကျင့်ဝတ်နှင့်ညီသော နည်းလမ်းမှာ အဘယ်နည်း?',
        options: [
          { id: 'a', textEn: 'Use AI to brainstorm ideas, explain difficult topics, verify facts, and write the final work yourself', textMy: 'စိတ်ကူးများဖော်ထုတ်ရန်နှင့် ခက်ခဲသောအကြောင်းအရာများကို နားလည်ရန် အကူအညီယူပြီး အချက်အလက်စစ်ဆေးကာ ကိုယ်တိုင်ရေးသားပါ' },
          { id: 'b', textEn: 'Copy and paste the entire AI essay and pretend you wrote it', textMy: 'AI ရေးပေးသော စာစီစာကုံးကို တစ်ခုလုံး ကူးယူပြီး မိမိရေးသည်ဟု လိမ်ညာပါ' },
          { id: 'c', textEn: 'Never read books ever again', textMy: 'စာအုပ်များကို ဘယ်တော့မှ မဖတ်တော့ပါနှင့်' },
          { id: 'd', textEn: 'Ask AI to do all your chores at home', textMy: 'အိမ်မှုကိစ္စအားလုံးကို AI အား ခိုင်းပါ' }
        ],
        correctOptionId: 'a',
        explanationEn: 'Outstanding! AI is a wonderful learning coach, but your own brain, creativity, and integrity are what truly matter.',
        explanationMy: 'အလွန်ထူးချွန်ပါတယ်! AI သည် အလွန်ကောင်းသော သင်ယူရေးလက်ထောက် ဖြစ်သော်လည်း သင့်ကိုယ်ပိုင် ဦးနှောက်၊ တီထွင်ဖန်တီးနိုင်စွမ်းနှင့် ရိုးသားမှုတို့ကသာ အရေးအကြီးဆုံး ဖြစ်ပါသည်။'
      }
    ]
  }
};
