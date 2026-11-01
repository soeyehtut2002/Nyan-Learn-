/**
 * AI Tutor Knowledge Base and Suggested Prompt Starters
 * Provides offline fallback answers and inspiring starter prompts for kids.
 */

export interface PromptStarter {
  id: string;
  category: 'basics' | 'loops' | 'ai' | 'safety' | 'fun';
  icon: string;
  labelEn: string;
  labelMy: string;
  promptEn: string;
  promptMy: string;
}

export const PROMPT_STARTERS: PromptStarter[] = [
  {
    id: 'algo',
    category: 'basics',
    icon: '📋',
    labelEn: 'What is an Algorithm?',
    labelMy: 'Algorithm ဆိုတာ ဘာလဲ?',
    promptEn: 'Can you explain what an algorithm is using a fun everyday example like baking cookies or tying shoes?',
    promptMy: 'Algorithm (အယ်လဂိုရီသမ်) ဆိုတာ ဘာလဲ? နေ့စဉ်ဘဝ ဥပမာလေးတွေနဲ့ ရှင်းပြပေးပါ။'
  },
  {
    id: 'loop',
    category: 'loops',
    icon: '🔁',
    labelEn: 'Explain Loops in Gaming',
    labelMy: 'Game ထဲက Loop များ',
    promptEn: 'How do loops work in computer games? Give me a cool game character example!',
    promptMy: 'Computer Game တွေထဲမှာ Loop (ထပ်ခါထပ်ခါလုပ်ဆောင်ချက်) တွေ ဘယ်လိုအလုပ်လုပ်လဲ ရှင်းပြပေးပါ။'
  },
  {
    id: 'ai-learn',
    category: 'ai',
    icon: '🤖',
    labelEn: 'How does AI learn?',
    labelMy: 'AI က ဘယ်လို သင်ယူသလဲ?',
    promptEn: 'How does Artificial Intelligence learn from examples, and why do humans need to teach it safely?',
    promptMy: 'AI (ဉာဏ်ရည်တု) က အချက်အလက်တွေကနေ ဘယ်လိုသင်ယူသလဲ? လူသားတွေက ဘာကြောင့် စိစစ်ပေးဖို့လိုသလဲ?'
  },
  {
    id: 'bug',
    category: 'basics',
    icon: '🐛',
    labelEn: 'Why do we call it a Bug?',
    labelMy: 'Coding မှာ Bug ဆိုတာ ဘာလဲ?',
    promptEn: 'Why are coding errors called "bugs", and how can I become a great debugging detective?',
    promptMy: 'Code ထဲက အမှားတွေကို ဘာကြောင့် Bug လို့ခေါ်တာလဲ? Debugging ကို ဘယ်လိုလုပ်ရမလဲ?'
  },
  {
    id: 'safety-pass',
    category: 'safety',
    icon: '🛡️',
    labelEn: 'Super Safe Passwords',
    labelMy: 'လုံခြုံတဲ့ Password ဖန်တီးနည်း',
    promptEn: 'What are the top 3 rules for creating a super strong password and keeping my accounts safe online?',
    promptMy: 'အွန်လိုင်းမှာ လုံခြုံစိတ်ချရတဲ့ Password ဖန်တီးဖို့ အဓိကစည်းမျဉ်း ၃ ချက်ကို ပြောပြပေးပါ။'
  },
  {
    id: 'phishing',
    category: 'safety',
    icon: '🎣',
    labelEn: 'Spotting Phishing Scams',
    labelMy: 'Phishing လိမ်လည်မှု ရှောင်နည်း',
    promptEn: 'What is phishing and fake links, and how can young people spot them easily?',
    promptMy: 'အင်တာနက်ပေါ်က Phishing (လိမ်လည်လှည့်ဖြားတဲ့ link များ) ကို ဘယ်လိုသတိထားရှောင်ရှားရမလဲ?'
  },
  {
    id: 'joke',
    category: 'fun',
    icon: '😄',
    labelEn: 'Tell me a Coding Joke!',
    labelMy: 'Coding ဟာသလေး ပြောပြပါ',
    promptEn: 'Tell me a funny, kid-friendly joke about programmers, computers, or robots!',
    promptMy: 'Programmer တွေ ဒါမှမဟုတ် Robot တွေအကြောင်း ကလေးတွေအတွက် ရယ်စရာဟာသလေး တစ်ခုလောက် ပြောပြပေးပါ။'
  },
  {
    id: 'robot-maze',
    category: 'basics',
    icon: '🧩',
    labelEn: 'Help with Robot Maze',
    labelMy: 'Robot Maze အကြံပေးပါ',
    promptEn: 'How should I think ahead to solve maze levels with minimum moves and avoid walls?',
    promptMy: 'Robot Maze ဂိမ်းမှာ နံရံတွေရှောင်ပြီး လှုပ်ရှားမှုအနည်းဆုံးနဲ့ ကြယ်ဆီရောက်ဖို့ ဘယ်လိုစဉ်းစားရမလဲ?'
  }
];

export interface FallbackResponse {
  keywords: string[];
  replyEn: string;
  replyMy: string;
}

export const FALLBACK_KNOWLEDGE_BASE: FallbackResponse[] = [
  {
    keywords: ['algorithm', 'recipe', 'step', 'အယ်လဂိုရီသမ်', 'အဆင့်'],
    replyEn: `🌟 **What is an Algorithm?**\n\nAn **algorithm** is simply a step-by-step recipe or ordered set of instructions that a computer follows to solve a problem!\n\n🍪 **Cookie Baking Analogy:**\n1. Wash hands 🧼\n2. Mix flour, sugar & eggs 🥣\n3. Bake in oven at 180°C for 15 mins ⏰\n4. Enjoy warm cookies! 🍪\n\nIf you skipped step 2, you wouldn't get cookies! In coding, writing steps in the correct order is called **sequencing**. Keep up the great thinking! 🚀`,
    replyMy: `🌟 **Algorithm (အယ်လဂိုရီသမ်) ဆိုတာ ဘာလဲ?**\n\nAlgorithm ဆိုတာ ကွန်ပျူတာတစ်လုံး အလုပ်တစ်ခုကို အောင်မြင်အောင် လုပ်ဆောင်ဖို့ ရေးဆွဲထားတဲ့ **အဆင့်လိုက် ညွှန်ကြားချက်များ** ဖြစ်ပါတယ်။\n\n🍪 **မုန့်ဖုတ်တဲ့ ဥပမာ:**\n၁။ လက်ကို ဆပ်ပြာနဲ့ အရင်ဆေးမယ် 🧼\n၂။ ဂျုံ၊ သကြားနဲ့ ကြက်ဥ ရောမွှေမယ် 🥣\n၃။ Oven ထဲမှာ ၁၅ မိနစ် ဖုတ်မယ် ⏰\n၄။ အရသာရှိတဲ့ မုန့်လေးတွေ စားသုံးမယ်! 🍪\n\nအဆင့် (၂) ကို ကျော်သွားရင် မုန့်မဖြစ်နိုင်သလိုပါပဲ! Coding မှာ အဆင့်ဆင့် တိကျစွာ ရေးသားခြင်းကို **Sequence** လို့ ခေါ်ပါတယ်။ သားတို့သမီးတို့လည်း စဉ်းစားတွေးခေါ်မှုမှာ တော်လိုက်တာ! 🚀`
  },
  {
    keywords: ['loop', 'repeat', 'ထပ်', 'လူးပ်', 'လှည့်'],
    replyEn: `🔁 **What is a Loop?**\n\nA **loop** tells a computer to repeat a set of actions without writing the code over and over.\n\n🎮 **Game Example:**\nInstead of writing:\n- \`step()\`\n- \`step()\`\n- \`step()\`\n- \`step()\`\n- \`step()\`\n\nYou can simply write:\n\`\`\`javascript\nrepeat(5) {\n  step();\n}\n\`\`\`\nLoops save memory, reduce bugs, and give computers their magical superpower of doing billions of calculations in seconds! ⚡`,
    replyMy: `🔁 **Loop ဆိုတာ ဘာလဲ?**\n\nLoop ဆိုတာ တူညီတဲ့ လုပ်ဆောင်ချက်တစ်ခုကို ထပ်ခါထပ်ခါ လုပ်စေဖို့ အသုံးပြုတဲ့ Coding စနစ်ဖြစ်ပါတယ်။\n\n🎮 **Game ဥပမာ:**\nRobot ကို ၅ လှမ်း လျှောက်ခိုင်းဖို့ ၅ ကြိမ် ဆက်တိုက် ရေးနေမယ့်အစား:\n\`\`\`javascript\nrepeat (5 ကြိမ်) {\n  တစ်လှမ်းလျှောက်ပါ();\n}\n\`\`\`\nLoop ကို သုံးခြင်းဖြင့် ကုဒ်ရေးရတာ သက်သာစေပြီး ကွန်ပျူတာကို စက္ကန့်ပိုင်းအတွင်း သန်းပေါင်းများစွာသော အလုပ်တွေကို တိကျစွာ လုပ်ဆောင်စေနိုင်ပါတယ်! ⚡`
  },
  {
    keywords: ['bug', 'debug', 'error', 'အမှား', 'ပိုးကောင်', 'ချို့ယွင်း'],
    replyEn: `🐛 **What is a Bug & Debugging?**\n\nA **bug** is a mistake or glitch in computer code that makes a program behave unexpectedly. Finding and fixing it is called **debugging**!\n\n📜 **Fun History:**\nIn 1947, computer pioneer Grace Hopper found a real moth trapped inside a massive Harvard Mark II computer that was causing errors! She taped the moth into her logbook and wrote: *"First actual case of bug being found."*\n\nRemember: Every great programmer encounters bugs every day. Debugging makes you a true coding detective! 🔍✨`,
    replyMy: `🐛 **Bug နဲ့ Debugging ဆိုတာ ဘာလဲ?**\n\n**Bug** ဆိုတာ ကွန်ပျူတာ Program ထဲမှာ ဖြစ်ပေါ်နေတဲ့ အမှားအယွင်း သို့မဟုတ် ချို့ယွင်းချက်ကို ခေါ်တာပါ။ အဲဒီအမှားကို ရှာဖွေပြင်ဆင်တာကိုတော့ **Debugging** လို့ ခေါ်ပါတယ်။\n\n📜 **ပျော်စရာ သမိုင်းကြောင်း:**\n၁၉၄၇ ခုနှစ်မှာ ပရိုဂရမ်မာ Grace Hopper ဟာ ကွန်ပျူတာကြီးထဲ ညပ်နေတဲ့ ပိုးဖလံကောင် အစစ်တစ်ကောင်ကြောင့် စက်အလုပ်မလုပ်တာကို ရှာတွေ့ခဲ့ပါတယ်။\n\nBug တွေ့တိုင်း စိတ်မပျက်ပါနဲ့! အမှားရှာဖွေပြင်ဆင်တာဟာ စုံထောက်တစ်ယောက်လို စိတ်လှုပ်ရှားစရာ အကောင်းဆုံး ပဟေဠိဖြစ်ပါတယ်! 🔍✨`
  },
  {
    keywords: ['safety', 'safe', 'password', 'private', 'လုံခြုံ', 'ဝှက်နံပါတ်'],
    replyEn: `🛡️ **Golden Rules for Online Safety:**\n\n1. 🔒 **Never Share Private Info:** Keep your real full name, home address, school, phone number, and photos private from strangers.\n2. 🔑 **Super Strong Passwords:** Use a mix of uppercase letters, numbers, and symbols (e.g. \`Nyan*Rocket#2026\`). Never share your passwords with friends!\n3. 🗣️ **Tell a Trusted Adult:** If anyone or anything on the internet ever makes you feel uncomfortable, confused, or scared, always talk to a parent, teacher, or trusted adult immediately.\n\nYou are the captain of your digital spaceship! 🚀`,
    replyMy: `🛡️ **အွန်လိုင်းမှာ လုံခြုံစေဖို့ ရွှေရောင်စည်းမျဉ်း ၃ ချက်:**\n\n၁။ 🔒 **ကိုယ်ရေးအချက်အလက် မမျှဝေပါနဲ့:** နာမည်အပြည့်အစုံ၊ အိမ်လိပ်စာ၊ ကျောင်းအမည်၊ ဖုန်းနံပါတ်နဲ့ ကိုယ်ပိုင်ဓာတ်ပုံတွေကို အင်တာနက်ပေါ်က မသိသူတွေဆီ လုံးဝ မပေးပါနဲ့။\n၂။ 🔑 **ခိုင်မာသော Password သုံးပါ:** စာလုံးကြီး၊ စာလုံးသေး၊ ဂဏန်းနှင့် သင်္ကေတများ ရောနှောအသုံးပြုပါ (ဥပမာ - \`Nyan*Rocket#2026\`)။\n၃။ 🗣️ **လူကြီးမိဘကို ချက်ချင်းပြောပြပါ:** စိတ်မသက်မသာဖြစ်စေတာ ဒါမှမဟုတ် မသင်္ကာစရာ တစ်ခုခုကြုံရင် မိဘ (သို့မဟုတ်) ဆရာ/ဆရာမကို အမြဲ အသိပေးပါ။\n\nကိုယ့်ရဲ့ ဒစ်ဂျစ်တယ်လုံခြုံရေးကို ကိုယ်တိုင်ကာကွယ်စောင့်ရှောက်ကြစို့! 🚀`
  },
  {
    keywords: ['ai', 'learn', 'robot', 'ဉာဏ်ရည်', 'စက်'],
    replyEn: `🤖 **How Does AI Actually Learn?**\n\nArtificial Intelligence (AI) doesn't learn like humans with eyes and a biological brain. Instead, it learns from **thousands of examples**!\n\n🐱 **Cat vs Dog Example:**\nIf you show an AI 10,000 photos of cats and 10,000 photos of dogs, it spots mathematical patterns (ear shapes, whiskers, snout sizes).\n\n⚠️ **Important Lesson:**\nBecause AI only knows the data humans give it, if the data has mistakes, the AI will make mistakes too! That's why smart human supervision is always required. 🧠💡`,
    replyMy: `🤖 **AI (ဉာဏ်ရည်တု) က ဘယ်လို သင်ယူသလဲ?**\n\nAI ဟာ လူသားတွေလို မျက်စိနဲ့ ဦးနှောက်နဲ့ သင်ယူတာမဟုတ်ဘဲ **ဥပမာပေါင်း ထောင်သောင်းများစွာ** ကို လေ့လာပြီး Pattern (ပုံစံတူများ) ကို ရှာဖွေသင်ယူတာ ဖြစ်ပါတယ်။\n\n🐱 **ကြောင်လား ခွေးလား ခွဲခြားနည်း:**\nAI ကို ကြောင်ပုံ ၁၀,၀၀၀ နဲ့ ခွေးပုံ ၁၀,၀၀၀ ပြသပေးလိုက်တဲ့အခါ နားရွက်ပုံစံ၊ နှုတ်ခမ်းမွေး စတဲ့ အချက်အလက် pattern တွေကို ကွန်ပျူတာက မှတ်သားသွားပါတယ်။\n\n⚠️ **သတိပြုရန် အချက်:**\nလူသားတွေ သင်ပေးတဲ့ ဥပမာတွေမှာ အမှားပါရင် AI ကလည်း အမှားလုပ်တတ်ပါတယ်။ ဒါကြောင့် AI ရဲ့ အဖြေတွေကို လူသားတွေက အမြဲ စိစစ်ဆင်ခြင်ပေးဖို့ လိုအပ်ပါတယ်! 🧠💡`
  },
  {
    keywords: ['joke', 'funny', 'laugh', 'ဟာသ', 'ရယ်'],
    replyEn: `😄 **Here is a fun coding joke for you!**\n\n**Question:** Why did the programmer wear glasses? 👓\n**Answer:** Because they couldn't C# (see sharp)! 🎵💻\n\nAnother one:\n**Question:** What is a computer's favorite snack? 🍪\n**Answer:** Micro-chips! 🤖\n\nKeep smiling and coding! What else would you like to know? ✨`,
    replyMy: `😄 **ကလေးတို့အတွက် Coding ဟာသလေးတစ်ခု!**\n\n**မေးခွန်း:** Programmer ကွန်ပျူတာသမားက မျက်မှန် ဘာလို့တပ်ထားသလဲ? 👓\n**အဖြေ:** C# (See Sharp - ရှင်းရှင်းလင်းလင်း) မမြင်ရလို့ပါတဲ့! 🎵💻\n\nနောက်တစ်ခု:\n**မေးခွန်း:** ကွန်ပျူတာ အကြိုက်ဆုံး သရေစာက ဘာလဲ? 🍪\n**အဖြေ:** Micro-chips (အာလူးကြော်လို Microchip ပြားလေးတွေ) ပါတဲ့! 🤖\n\nပျော်ရွှင်စွာနဲ့ Code ရေးကြစို့နော်! ဘာတွေ ထပ်မေးချင်သေးလဲ? ✨`
  }
];

export function getOfflineFallbackAnswer(query: string, language: 'en' | 'my'): string {
  const q = query.toLowerCase().trim();
  for (const item of FALLBACK_KNOWLEDGE_BASE) {
    if (item.keywords.some(kw => q.includes(kw.toLowerCase()))) {
      return language === 'my' ? item.replyMy : item.replyEn;
    }
  }

  if (language === 'my') {
    return `🌟 **မေးခွန်းအတွက် ကျေးဇူးတင်ပါတယ်!**\n\nသင်မေးမြန်းထားသော "${query}" အကြောင်း ပိုမိုပြည့်စုံစွာ ရှင်းပြပေးနိုင်ရန် **OpenRouter API Key** ချိတ်ဆက်နိုင်ပါတယ်။\n\n🔑 **OpenRouter Key ထည့်သွင်းနည်း:**\n၁။ ညာဘက်အပေါ်ရှိ **⚙️ Settings** ခလုတ်ကို နှိပ်ပါ။\n၂။ [openrouter.ai/keys](https://openrouter.ai/keys) မှ အခမဲ့ ရယူထားသော Key ကို ထည့်သွင်းပြီး သိမ်းဆည်းပါ။\n၃။ Gemini 2.0 Flash Lite, Llama 3.3, DeepSeek စသည့် ကမ္ဘာ့အဆင့်မီ AI Model များနှင့် အကန့်အသတ်မရှိ စကားပြောနိုင်ပါပြီ!\n\nအောက်ပါ ခေါင်းစဉ်ခလုတ်လေးများကို နှိပ်ပြီး Coding အခြေခံများကိုလည်း ချက်ချင်း လေ့လာနိုင်ပါတယ်! 🚀`;
  }

  return `🌟 **Great question about "${query}"!**\n\nTo unlock live, in-depth AI answers powered by OpenRouter's state-of-the-art models (like Gemini 2.0, Llama 3.3, DeepSeek R1), you can connect your OpenRouter API key!\n\n🔑 **How to connect in 30 seconds:**\n1. Click the **⚙️ Settings** button at the top right.\n2. Paste your free key from [openrouter.ai/keys](https://openrouter.ai/keys) and tap **Save Key**.\n3. Chat seamlessly with full real-time streaming intelligence!\n\nYou can also tap any of the suggested topic chips below to explore fun coding concepts right away! 🚀`;
}
