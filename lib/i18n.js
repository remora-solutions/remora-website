// All translated site copy lives here. Structural data (colors, order)
// stays in lib/site.js — this file only holds text.

export const languages = [
  { code: "en", label: "English", dir: "ltr" },
  { code: "ar", label: "العربية", dir: "rtl" },
  { code: "hi", label: "हिन्दी", dir: "ltr" },
  { code: "ml", label: "മലയാളം", dir: "ltr" },
];

export const translations = {
  en: {
    skip: "Skip to content",
    nav: {
      backbone: "The backbone",
      how: "How we work",
      who: "Who we help",
      why: "Why Remora",
      work: "Outcomes",
      contact: "Contact",
      whatsapp: "WhatsApp",
    },
    hero: {
      title: "One backbone for every part of your business.",
      lead: "Remora connects ERP, automation, voice AI and RAG into a single system that runs quietly behind your business — so nothing falls through the cracks.",
      cta1: "Chat on WhatsApp",
      cta2: "See how it connects",
    },
    backbone: {
      heading: "One backbone. Every tool you need.",
      lead: "Not separate tools bolted together — one connected system, built around how your business actually runs.",
      end: "Your business",
      nodes: [
        { title: "ERP", text: "Orders, stock, billing and staff — all in one system you can actually see." },
        { title: "Automation", text: "The apps you already use, wired together so information moves without anyone pushing it." },
        { title: "Voice AI", text: "Answers calls, books slots, never puts anyone on hold." },
        { title: "RAG", text: "Instant, accurate answers pulled straight from your own documents." },
        { title: "Agentic AI", text: "Handles multi-step tasks on its own — not just answering, but acting." },
      ],
    },
    how: {
      heading: "How we work.",
      lead: "Not a list of services — the actual process, from problem to solution.",
      steps: [
        { title: "We find where you're stuck", text: "Drowning in WhatsApp and call messages you can't keep track of? Inventory that's always off, no matter how often you count it? Can't get a clear view of how your whole business actually flows — orders, stock, staff, money — in one place? That's where we start. We look at your day-to-day and find exactly where the friction is, before talking about any tool." },
        { title: "We match the fix to the problem", text: "Once we know where it's stuck, we bring in the right piece of the backbone — not a one-size-fits-all package. Orders, stock, and staff all over the place? Odoo brings it into one system you can actually see. Same questions coming in again and again? A RAG assistant answers instantly from your own documents. Missing calls, losing bookings? Voice AI takes the call and books the slot." },
        { title: "It runs, you don't have to think about it", text: "Once it's live, it keeps working in the background. If something needs adjusting as your business changes, that's on us — not something you have to figure out." },
      ],
    },
    who: {
      heading: "Built for businesses that run on stock, orders and payments.",
      items: [
        { name: "SMBs", text: "Small and mid-sized teams outgrowing spreadsheets, notebooks and scattered chats, and ready for one reliable system." },
        { name: "Retail", text: "Shops and outlets that need billing, stock and online orders to tell the same story." },
        { name: "Trading", text: "Buy-and-sell businesses keeping track of margins, payables and receivables across many parties." },
        { name: "Distribution", text: "Wholesalers and distributors coordinating warehouses, deliveries, schemes and outstanding dues." },
      ],
    },
    why: {
      heading: "We work like part of your team.",
      lead: "You shouldn't need to become a technology expert to run a better business. We handle the technical side and explain every step in plain language.",
      points: [
        { title: "Business first", text: "We learn how your business runs before we suggest any tool." },
        { title: "Plain and honest", text: "Clear answers, realistic timelines and no jargon." },
        { title: "Here after launch", text: "Software only helps once your team is comfortable with it, so we stay available." },
      ],
    },
    outcomes: {
      heading: "What we build toward.",
      lead: "Every project is shaped around a clear outcome. These are the kinds of results we design for.",
      items: [
        { tag: "Distribution", text: "One place for orders, stock and dues, so the day doesn't end with reconciling spreadsheets." },
        { tag: "Retail", text: "Online and in-store stock that agree, so you never sell something you don't have." },
        { tag: "Trading", text: "Invoices and payment reminders that go out on their own instead of being chased by hand." },
        { tag: "SMBs", text: "Routine customer questions answered on WhatsApp, so your team spends its time on real conversations." },
      ],
    },
    contact: {
      heading: "Tell us what's slowing your business down.",
      lead: "The quickest way to reach us is WhatsApp. Prefer to write? Email works too. No jargon and no pressure.",
      wa: "Chat on WhatsApp",
      email: "Send an email",
    },
    footer: { rights: "All rights reserved." },
  },

  ar: {
    skip: "تخطَّ إلى المحتوى",
    nav: {
      backbone: "العمود الفقري",
      how: "كيف نعمل",
      who: "من نساعد",
      why: "لماذا ريمورا",
      work: "نتائجنا",
      contact: "تواصل معنا",
      whatsapp: "واتساب",
    },
    hero: {
      title: "عمود فقري واحد لكل جزء من عملك.",
      lead: "تربط ريمورا أنظمة تخطيط الموارد والأتمتة والذكاء الاصطناعي الصوتي وRAG في نظام واحد يعمل بهدوء خلف عملك — حتى لا يفوتك شيء.",
      cta1: "تحدث معنا عبر واتساب",
      cta2: "شاهد كيف يترابط",
    },
    backbone: {
      heading: "عمود فقري واحد. كل الأدوات التي تحتاجها.",
      lead: "ليست أدوات منفصلة مجمّعة معاً — بل نظام واحد مترابط، مبني حول كيفية سير عملك فعلياً.",
      end: "عملك",
      nodes: [
        { title: "ERP", text: "الطلبات والمخزون والفوترة والموظفون — كلها في نظام واحد تراه بوضوح." },
        { title: "الأتمتة", text: "التطبيقات التي تستخدمها بالفعل، مترابطة بحيث تنتقل المعلومات دون أن يدفعها أحد." },
        { title: "مساعد صوتي", text: "يرد على المكالمات، يحجز المواعيد، ولا يترك أحداً منتظراً." },
        { title: "RAG", text: "إجابات فورية ودقيقة مستخرجة مباشرة من مستنداتك الخاصة." },
        { title: "ذكاء اصطناعي وكيل", text: "ينفذ مهام متعددة الخطوات بمفرده — لا يجيب فقط، بل يتصرف." },
      ],
    },
    how: {
      heading: "كيف نعمل.",
      lead: "ليست قائمة خدمات، بل العملية الفعلية من المشكلة إلى الحل.",
      steps: [
        { title: "نجد أين تكمن المشكلة", text: "رسائل واتساب ومكالمات لا يمكنك متابعتها؟ مخزون دائم الاختلاف مهما أحصيته؟ لا رؤية واضحة لكيفية سير عملك بالكامل — الطلبات والمخزون والموظفون والأموال — في مكان واحد؟ هنا نبدأ. ننظر في يومياتك ونحدد بالضبط أين يكمن الاحتكاك، قبل الحديث عن أي أداة." },
        { title: "نطابق الحل مع المشكلة", text: "بمجرد معرفة موضع المشكلة، نستخدم الجزء المناسب من العمود الفقري — وليس حزمة واحدة تناسب الجميع. الطلبات والمخزون والموظفون في فوضى؟ Odoo يجمعها في نظام واحد تراه بوضوح. نفس الأسئلة تتكرر؟ مساعد RAG يجيب فوراً من مستنداتك الخاصة. مكالمات فائتة وحجوزات ضائعة؟ المساعد الصوتي يستقبل المكالمة ويحجز الموعد." },
        { title: "يعمل من تلقاء نفسه، ولا تحتاج للقلق", text: "بمجرد التشغيل، يستمر العمل في الخلفية. وإذا احتاج أي شيء للتعديل مع تطور عملك، فهذا شأننا نحن — وليس شيئاً عليك معرفته بنفسك." },
      ],
    },
    who: {
      heading: "مصمم للأعمال التي تعتمد على المخزون والطلبات والمدفوعات.",
      items: [
        { name: "الشركات الصغيرة والمتوسطة", text: "فرق صغيرة ومتوسطة تجاوزت جداول البيانات والدفاتر والمحادثات المتناثرة، وأصبحت جاهزة لنظام موثوق واحد." },
        { name: "تجارة التجزئة", text: "محلات ومنافذ بيع تحتاج إلى أن تتفق الفوترة والمخزون والطلبات الإلكترونية على نفس الأرقام." },
        { name: "التجارة", text: "أعمال بيع وشراء تتابع الهوامش والمستحقات والذمم مع أطراف متعددة." },
        { name: "التوزيع", text: "موزعون ينسقون المستودعات والتوصيل والعروض والمستحقات المتأخرة." },
      ],
    },
    why: {
      heading: "نعمل كجزء من فريقك.",
      lead: "لا يجب أن تصبح خبيراً تقنياً لإدارة عمل أفضل. نتولى الجانب التقني ونشرح كل خطوة بلغة بسيطة.",
      points: [
        { title: "الأعمال أولاً", text: "نتعرف على كيفية سير عملك قبل أن نقترح أي أداة." },
        { title: "وضوح وصدق", text: "إجابات واضحة، جداول زمنية واقعية، ودون مصطلحات معقدة." },
        { title: "معك بعد الإطلاق", text: "البرمجيات تفيد فقط عندما يعتاد عليها فريقك، لذا نبقى متاحين." },
      ],
    },
    outcomes: {
      heading: "ما نبنيه من أجله.",
      lead: "كل مشروع مصمم حول نتيجة واضحة. هذه أمثلة على النتائج التي نصممها.",
      items: [
        { tag: "التوزيع", text: "مكان واحد للطلبات والمخزون والمستحقات، فلا ينتهي يومك بمطابقة جداول البيانات." },
        { tag: "تجارة التجزئة", text: "مخزون متطابق بين المتجر الإلكتروني والفعلي، فلا تبيع شيئاً غير موجود." },
        { tag: "التجارة", text: "فواتير وتذكيرات دفع تُرسل تلقائياً بدلاً من متابعتها يدوياً." },
        { tag: "الشركات الصغيرة والمتوسطة", text: "أسئلة العملاء الروتينية تُجاب على واتساب، ليقضي فريقك وقته في محادثات حقيقية." },
      ],
    },
    contact: {
      heading: "أخبرنا بما يعطل عملك.",
      lead: "أسرع طريقة للتواصل معنا هي واتساب. تفضل الكتابة؟ البريد الإلكتروني يعمل أيضاً. دون تعقيد ودون ضغط.",
      wa: "تحدث عبر واتساب",
      email: "أرسل بريداً إلكترونياً",
    },
    footer: { rights: "جميع الحقوق محفوظة." },
  },

  hi: {
    skip: "सामग्री पर जाएं",
    nav: {
      backbone: "बैकबोन",
      how: "हम कैसे काम करते हैं",
      who: "हम किसकी मदद करते हैं",
      why: "Remora क्यों",
      work: "नतीजे",
      contact: "संपर्क करें",
      whatsapp: "व्हाट्सएप",
    },
    hero: {
      title: "आपके व्यवसाय के हर हिस्से के लिए एक बैकबोन।",
      lead: "Remora ERP, ऑटोमेशन, वॉइस AI और RAG को एक ऐसे सिस्टम में जोड़ता है जो आपके व्यवसाय के पीछे चुपचाप चलता रहता है — ताकि कुछ भी छूटे नहीं।",
      cta1: "व्हाट्सएप पर बात करें",
      cta2: "देखें यह कैसे जुड़ता है",
    },
    backbone: {
      heading: "एक बैकबोन। हर वह टूल जो आपको चाहिए।",
      lead: "अलग-अलग जोड़े गए टूल्स नहीं — बल्कि एक जुड़ा हुआ सिस्टम, जो आपके व्यवसाय के असली तरीके के इर्द-गिर्द बनाया गया है।",
      end: "आपका व्यवसाय",
      nodes: [
        { title: "ERP", text: "ऑर्डर, स्टॉक, बिलिंग और स्टाफ — सब कुछ एक सिस्टम में, जिसे आप साफ़ देख सकें।" },
        { title: "ऑटोमेशन", text: "जिन ऐप्स का आप पहले से इस्तेमाल करते हैं, वे आपस में जुड़े हुए ताकि जानकारी बिना किसी के धकेले आगे बढ़े।" },
        { title: "वॉइस AI", text: "कॉल का जवाब देता है, स्लॉट बुक करता है, किसी को होल्ड पर नहीं रखता।" },
        { title: "RAG", text: "आपके अपने दस्तावेज़ों से सीधे, तुरंत और सटीक जवाब।" },
        { title: "एजेंटिक AI", text: "कई चरणों वाले काम खुद संभालता है — सिर्फ जवाब नहीं देता, काम भी करता है।" },
      ],
    },
    how: {
      heading: "हम कैसे काम करते हैं।",
      lead: "सेवाओं की सूची नहीं — बल्कि समस्या से समाधान तक की असली प्रक्रिया।",
      steps: [
        { title: "हम पता लगाते हैं आप कहाँ अटके हैं", text: "व्हाट्सएप और कॉल मैसेज जिन्हें आप ट्रैक नहीं कर पा रहे? इन्वेंटरी जो कितनी भी बार गिनें, हमेशा गड़बड़ रहती है? पूरे बिज़नेस का फ्लो — ऑर्डर, स्टॉक, स्टाफ, पैसा — एक जगह साफ़ नहीं दिखता? यहीं से हम शुरू करते हैं। हम आपके रोज़मर्रा के काम को देखते हैं और बिल्कुल पता लगाते हैं कि दिक्कत कहाँ है, किसी टूल की बात करने से पहले।" },
        { title: "हम समस्या के हिसाब से सही समाधान चुनते हैं", text: "जब पता चल जाए कि दिक्कत कहाँ है, तो हम बैकबोन का सही हिस्सा लाते हैं — कोई एक जैसा पैकेज सबके लिए नहीं। ऑर्डर, स्टॉक और स्टाफ बिखरे हुए हैं? Odoo सब कुछ एक सिस्टम में ले आता है। बार-बार वही सवाल आते हैं? एक RAG असिस्टेंट आपके दस्तावेज़ों से तुरंत जवाब देता है। कॉल छूट रही हैं, बुकिंग गुम हो रही है? वॉइस AI कॉल लेता है और स्लॉट बुक करता है।" },
        { title: "यह चलता रहता है, आपको सोचना नहीं पड़ता", text: "एक बार लाइव होने के बाद, यह पीछे से काम करता रहता है। अगर आपके बिज़नेस के बदलने के साथ कुछ बदलना हो, तो वह हमारी ज़िम्मेदारी है — आपको खुद समझने की ज़रूरत नहीं।" },
      ],
    },
    who: {
      heading: "उन व्यवसायों के लिए जो स्टॉक, ऑर्डर और भुगतान पर चलते हैं।",
      items: [
        { name: "छोटे-मझोले व्यवसाय", text: "छोटी और मझोली टीमें जो स्प्रेडशीट, नोटबुक और बिखरी हुई चैट से आगे बढ़ चुकी हैं और एक भरोसेमंद सिस्टम के लिए तैयार हैं।" },
        { name: "रिटेल", text: "दुकानें और आउटलेट जिन्हें बिलिंग, स्टॉक और ऑनलाइन ऑर्डर की एक ही कहानी चाहिए।" },
        { name: "ट्रेडिंग", text: "खरीद-बिक्री करने वाले व्यवसाय जो कई पक्षों के साथ मार्जिन, देय और प्राप्य का हिसाब रखते हैं।" },
        { name: "डिस्ट्रीब्यूशन", text: "थोक व्यापारी और वितरक जो गोदाम, डिलीवरी, स्कीम और बकाया राशि का समन्वय करते हैं।" },
      ],
    },
    why: {
      heading: "हम आपकी टीम के हिस्से की तरह काम करते हैं।",
      lead: "बेहतर बिज़नेस चलाने के लिए आपको तकनीकी विशेषज्ञ बनने की ज़रूरत नहीं। हम तकनीकी हिस्सा संभालते हैं और हर कदम आसान भाषा में समझाते हैं।",
      points: [
        { title: "पहले बिज़नेस", text: "कोई भी टूल सुझाने से पहले हम समझते हैं कि आपका बिज़नेस कैसे चलता है।" },
        { title: "साफ़ और ईमानदार", text: "स्पष्ट जवाब, सच्ची समय-सीमा, और कोई जटिल शब्दजाल नहीं।" },
        { title: "लॉन्च के बाद भी साथ", text: "सॉफ्टवेयर तभी काम आता है जब आपकी टीम उसमें सहज हो, इसलिए हम उपलब्ध रहते हैं।" },
      ],
    },
    outcomes: {
      heading: "हम किस लिए बनाते हैं।",
      lead: "हर प्रोजेक्ट एक साफ़ नतीजे के इर्द-गिर्द बनाया जाता है। ये कुछ ऐसे नतीजे हैं जिनके लिए हम डिज़ाइन करते हैं।",
      items: [
        { tag: "डिस्ट्रीब्यूशन", text: "ऑर्डर, स्टॉक और बकाया के लिए एक जगह, ताकि दिन स्प्रेडशीट मिलाते हुए खत्म न हो।" },
        { tag: "रिटेल", text: "ऑनलाइन और स्टोर का स्टॉक एक जैसा, ताकि आप कभी ऐसी चीज़ न बेचें जो आपके पास नहीं है।" },
        { tag: "ट्रेडिंग", text: "इनवॉइस और पेमेंट रिमाइंडर अपने आप भेजे जाते हैं, हाथ से पीछा करने की बजाय।" },
        { tag: "छोटे-मझोले व्यवसाय", text: "सामान्य ग्राहक सवालों के जवाब व्हाट्सएप पर मिलते हैं, ताकि आपकी टीम असली बातचीत पर समय लगाए।" },
      ],
    },
    contact: {
      heading: "बताइए आपका बिज़नेस कहाँ धीमा पड़ रहा है।",
      lead: "हमसे संपर्क करने का सबसे तेज़ तरीका व्हाट्सएप है। लिखना पसंद है? ईमेल भी ठीक है। कोई जटिलता नहीं, कोई दबाव नहीं।",
      wa: "व्हाट्सएप पर बात करें",
      email: "ईमेल भेजें",
    },
    footer: { rights: "सर्वाधिकार सुरक्षित।" },
  },

  ml: {
    skip: "ഉള്ളടക്കത്തിലേക്ക് പോകുക",
    nav: {
      backbone: "ബാക്ക്ബോൺ",
      how: "ഞങ്ങൾ എങ്ങനെ പ്രവർത്തിക്കുന്നു",
      who: "ഞങ്ങൾ ആരെ സഹായിക്കുന്നു",
      why: "എന്തുകൊണ്ട് Remora",
      work: "ഫലങ്ങൾ",
      contact: "ബന്ധപ്പെടുക",
      whatsapp: "വാട്‌സ്ആപ്പ്",
    },
    hero: {
      title: "നിങ്ങളുടെ ബിസിനസിന്റെ എല്ലാ ഭാഗത്തിനും ഒരു ബാക്ക്ബോൺ.",
      lead: "ERP, ഓട്ടോമേഷൻ, വോയ്സ് AI, RAG എന്നിവയെ നിങ്ങളുടെ ബിസിനസിന് പിന്നിൽ നിശബ്ദമായി പ്രവർത്തിക്കുന്ന ഒരൊറ്റ സിസ്റ്റത്തിലേക്ക് Remora ബന്ധിപ്പിക്കുന്നു — ഒന്നും നഷ്ടപ്പെടാതിരിക്കാൻ.",
      cta1: "വാട്‌സ്ആപ്പിൽ സംസാരിക്കൂ",
      cta2: "ഇത് എങ്ങനെ ബന്ധിപ്പിക്കുന്നു എന്ന് കാണുക",
    },
    backbone: {
      heading: "ഒരു ബാക്ക്ബോൺ. നിങ്ങൾക്ക് വേണ്ട എല്ലാ ടൂളുകളും.",
      lead: "വെവ്വേറെ ഘടിപ്പിച്ച ടൂളുകളല്ല — നിങ്ങളുടെ ബിസിനസ് യഥാർത്ഥത്തിൽ എങ്ങനെ പ്രവർത്തിക്കുന്നു എന്നതിന് ചുറ്റും നിർമ്മിച്ച ഒരു ബന്ധിത സിസ്റ്റം.",
      end: "നിങ്ങളുടെ ബിസിനസ്",
      nodes: [
        { title: "ERP", text: "ഓർഡറുകൾ, സ്റ്റോക്ക്, ബില്ലിംഗ്, ജീവനക്കാർ — എല്ലാം ഒരു സിസ്റ്റത്തിൽ, നിങ്ങൾക്ക് വ്യക്തമായി കാണാം." },
        { title: "ഓട്ടോമേഷൻ", text: "നിങ്ങൾ ഇതിനകം ഉപയോഗിക്കുന്ന ആപ്പുകൾ പരസ്പരം ബന്ധിപ്പിച്ചിരിക്കുന്നു, ആരും തള്ളാതെ വിവരങ്ങൾ നീങ്ങുന്നു." },
        { title: "വോയ്സ് AI", text: "കോളുകൾക്ക് മറുപടി നൽകുന്നു, സ്ലോട്ടുകൾ ബുക്ക് ചെയ്യുന്നു, ആരെയും കാത്തുനിർത്തുന്നില്ല." },
        { title: "RAG", text: "നിങ്ങളുടെ സ്വന്തം രേഖകളിൽ നിന്ന് നേരിട്ട് തൽക്ഷണവും കൃത്യവുമായ മറുപടികൾ." },
        { title: "ഏജന്റിക് AI", text: "പല ഘട്ടങ്ങളുള്ള ജോലികൾ സ്വയം കൈകാര്യം ചെയ്യുന്നു — മറുപടി മാത്രമല്ല, പ്രവർത്തിക്കുകയും ചെയ്യുന്നു." },
      ],
    },
    how: {
      heading: "ഞങ്ങൾ എങ്ങനെ പ്രവർത്തിക്കുന്നു.",
      lead: "സേവനങ്ങളുടെ ഒരു ലിസ്റ്റ് അല്ല — പ്രശ്നത്തിൽ നിന്ന് പരിഹാരത്തിലേക്കുള്ള യഥാർത്ഥ പ്രക്രിയ.",
      steps: [
        { title: "നിങ്ങൾ എവിടെ കുടുങ്ങിയെന്ന് ഞങ്ങൾ കണ്ടെത്തുന്നു", text: "ട്രാക്ക് ചെയ്യാനാകാത്ത വാട്സ്ആപ്പ്, കോൾ മെസേജുകൾ? എത്ര തവണ എണ്ണിയാലും എപ്പോഴും പൊരുത്തപ്പെടാത്ത ഇൻവെന്ററി? ഓർഡറുകൾ, സ്റ്റോക്ക്, ജീവനക്കാർ, പണം — ബിസിനസ് മുഴുവൻ എങ്ങനെ ഒഴുകുന്നു എന്ന് ഒരിടത്ത് വ്യക്തമായി കാണാൻ കഴിയുന്നില്ലേ? അവിടെയാണ് ഞങ്ങൾ തുടങ്ങുന്നത്. ഏതെങ്കിലും ടൂളിനെക്കുറിച്ച് സംസാരിക്കും മുമ്പ്, നിങ്ങളുടെ ദൈനംദിന പ്രവർത്തനം നോക്കി പ്രശ്നം എവിടെയാണെന്ന് കൃത്യമായി കണ്ടെത്തുന്നു." },
        { title: "പ്രശ്നത്തിനനുസരിച്ച് ശരിയായ പരിഹാരം കണ്ടെത്തുന്നു", text: "പ്രശ്നം എവിടെയെന്ന് അറിഞ്ഞാൽ, ഞങ്ങൾ ബാക്ക്ബോണിന്റെ ശരിയായ ഭാഗം കൊണ്ടുവരും — എല്ലാവർക്കും ഒരേ പാക്കേജ് അല്ല. ഓർഡറുകളും സ്റ്റോക്കും ജീവനക്കാരും ചിതറിക്കിടക്കുന്നോ? Odoo അതെല്ലാം ഒരു സിസ്റ്റത്തിലേക്ക് കൊണ്ടുവരുന്നു. അതേ ചോദ്യങ്ങൾ വീണ്ടും വരുന്നോ? ഒരു RAG അസിസ്റ്റന്റ് നിങ്ങളുടെ രേഖകളിൽ നിന്ന് തൽക്ഷണം മറുപടി നൽകുന്നു. കോളുകൾ നഷ്ടപ്പെടുന്നോ? വോയ്സ് AI കോൾ എടുക്കുകയും സ്ലോട്ട് ബുക്ക് ചെയ്യുകയും ചെയ്യുന്നു." },
        { title: "ഇത് സ്വയം പ്രവർത്തിക്കുന്നു, നിങ്ങൾ ആലോചിക്കേണ്ട", text: "ഒരിക്കൽ ലൈവ് ആയാൽ, ഇത് പശ്ചാത്തലത്തിൽ പ്രവർത്തിച്ചുകൊണ്ടിരിക്കും. നിങ്ങളുടെ ബിസിനസ് മാറുന്നതനുസരിച്ച് എന്തെങ്കിലും ക്രമീകരിക്കേണ്ടി വന്നാൽ, അത് ഞങ്ങളുടെ ഉത്തരവാദിത്തമാണ്." },
      ],
    },
    who: {
      heading: "സ്റ്റോക്ക്, ഓർഡറുകൾ, പേയ്‌മെന്റുകൾ എന്നിവയിൽ പ്രവർത്തിക്കുന്ന ബിസിനസുകൾക്കായി നിർമ്മിച്ചത്.",
      items: [
        { name: "ചെറുകിട-ഇടത്തരം ബിസിനസുകൾ", text: "സ്പ്രെഡ്ഷീറ്റുകളും നോട്ട്ബുക്കുകളും ചിതറിയ ചാറ്റുകളും കടന്ന്, ഒരു വിശ്വസനീയമായ സിസ്റ്റത്തിന് തയ്യാറായ ചെറുതും ഇടത്തരവുമായ ടീമുകൾ." },
        { name: "റീട്ടെയിൽ", text: "ബില്ലിംഗ്, സ്റ്റോക്ക്, ഓൺലൈൻ ഓർഡറുകൾ എന്നിവ ഒരേ കണക്ക് പറയേണ്ട കടകളും ഔട്ട്‌ലെറ്റുകളും." },
        { name: "ട്രേഡിംഗ്", text: "പല കക്ഷികളുമായി മാർജിനും കൊടുക്കൽ-വാങ്ങലുകളും ട്രാക്ക് ചെയ്യുന്ന വാങ്ങൽ-വിൽപ്പന ബിസിനസുകൾ." },
        { name: "ഡിസ്ട്രിബ്യൂഷൻ", text: "വെയർഹൗസുകളും ഡെലിവറികളും സ്കീമുകളും കുടിശ്ശികയും ഏകോപിപ്പിക്കുന്ന മൊത്തക്കച്ചവടക്കാരും വിതരണക്കാരും." },
      ],
    },
    why: {
      heading: "ഞങ്ങൾ നിങ്ങളുടെ ടീമിന്റെ ഭാഗം പോലെ പ്രവർത്തിക്കുന്നു.",
      lead: "മെച്ചപ്പെട്ട ബിസിനസ് നടത്താൻ നിങ്ങൾ ഒരു ടെക്നോളജി വിദഗ്ധനാകേണ്ട ആവശ്യമില്ല. സാങ്കേതിക വശം ഞങ്ങൾ കൈകാര്യം ചെയ്യുകയും ഓരോ ഘട്ടവും ലളിതമായ ഭാഷയിൽ വിശദീകരിക്കുകയും ചെയ്യുന്നു.",
      points: [
        { title: "ബിസിനസ് ആദ്യം", text: "ഏതെങ്കിലും ടൂൾ നിർദ്ദേശിക്കും മുമ്പ് നിങ്ങളുടെ ബിസിനസ് എങ്ങനെ പ്രവർത്തിക്കുന്നു എന്ന് ഞങ്ങൾ പഠിക്കുന്നു." },
        { title: "ലളിതവും സത്യസന്ധവും", text: "വ്യക്തമായ മറുപടികൾ, യാഥാർത്ഥ്യബോധമുള്ള സമയക്രമം, സങ്കീർണ്ണമായ പദപ്രയോഗങ്ങളില്ല." },
        { title: "ലോഞ്ചിനു ശേഷവും കൂടെയുണ്ട്", text: "നിങ്ങളുടെ ടീമിന് പരിചയമായാൽ മാത്രമേ സോഫ്റ്റ്‌വെയർ സഹായകമാകൂ, അതിനാൽ ഞങ്ങൾ ലഭ്യമായിരിക്കും." },
      ],
    },
    outcomes: {
      heading: "ഞങ്ങൾ എന്തിനുവേണ്ടി നിർമ്മിക്കുന്നു.",
      lead: "ഓരോ പ്രോജക്റ്റും ഒരു വ്യക്തമായ ഫലത്തിന് ചുറ്റും രൂപകൽപ്പന ചെയ്തിരിക്കുന്നു. ഞങ്ങൾ രൂപകൽപ്പന ചെയ്യുന്ന ചില ഫലങ്ങൾ ഇവയാണ്.",
      items: [
        { tag: "ഡിസ്ട്രിബ്യൂഷൻ", text: "ഓർഡറുകൾക്കും സ്റ്റോക്കിനും കുടിശ്ശികയ്ക്കും ഒരിടം, അതിനാൽ ദിവസം സ്പ്രെഡ്ഷീറ്റ് ഒത്തുനോക്കി അവസാനിക്കില്ല." },
        { tag: "റീട്ടെയിൽ", text: "ഓൺലൈനിലും കടയിലും ഒരേ സ്റ്റോക്ക്, അതിനാൽ ഇല്ലാത്തത് ഒരിക്കലും വിൽക്കില്ല." },
        { tag: "ട്രേഡിംഗ്", text: "ഇൻവോയ്സുകളും പേയ്‌മെന്റ് റിമൈൻഡറുകളും കൈകൊണ്ട് പിന്തുടരാതെ സ്വയമേവ അയക്കുന്നു." },
        { tag: "ചെറുകിട-ഇടത്തരം ബിസിനസുകൾ", text: "സാധാരണ ഉപഭോക്തൃ ചോദ്യങ്ങൾക്ക് വാട്സ്ആപ്പിൽ മറുപടി, അതിനാൽ നിങ്ങളുടെ ടീം യഥാർത്ഥ സംഭാഷണങ്ങളിൽ സമയം ചെലവഴിക്കുന്നു." },
      ],
    },
    contact: {
      heading: "നിങ്ങളുടെ ബിസിനസിനെ മന്ദഗതിയിലാക്കുന്നത് എന്താണെന്ന് പറയൂ.",
      lead: "ഞങ്ങളെ ബന്ധപ്പെടാനുള്ള ഏറ്റവും വേഗതയേറിയ വഴി വാട്സ്ആപ്പ് ആണ്. എഴുതാനാണോ താൽപ്പര്യം? ഇമെയിലും ശരിയാകും. സങ്കീർണ്ണതയില്ല, സമ്മർദ്ദവുമില്ല.",
      wa: "വാട്‌സ്ആപ്പിൽ സംസാരിക്കൂ",
      email: "ഇമെയിൽ അയക്കൂ",
    },
    footer: { rights: "എല്ലാ അവകാശങ്ങളും സംരക്ഷിതം." },
  },
};
