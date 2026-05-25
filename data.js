// ============================================================
// data.js — بيانات الأذكار والأدعية الإسلامية
// ============================================================

const ISLAMIC_DATA = {
  azkar: {
    morning: [
      {
        id: "m1",
        title: "دعاء الاستيقاظ",
        arabic: "الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ",
        transliteration: "Alhamdu lillahil-ladhi ahyana ba'da ma amatana wa-ilayhin-nushur",
        translation: "الحمد لله الذي أحيانا بعد أن أماتنا وإليه البعث",
        source: "رواه البخاري",
        repeat: 1,
        benefits: "من قالها عند الاستيقاظ شكر الله على نعمة الحياة",
        category: "morning"
      },
      {
        id: "m2",
        title: "ذكر الصباح الأول",
        arabic: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلاَّ اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
        transliteration: "Asbahna wa asbahal-mulku lillah, walhamdu lillah, la ilaha illallah wahdahu la sharika lah, lahul-mulku walahul-hamd, wahuwa 'ala kulli shay'in qadir",
        translation: "أصبحنا وأصبح الملك لله وحده، لا شريك له، الحمد لله، وهو على كل شيء قدير",
        source: "رواه مسلم",
        repeat: 1,
        benefits: "حماية من الشيطان وبركة في اليوم",
        category: "morning"
      },
      {
        id: "m3",
        title: "سيد الاستغفار صباحاً",
        arabic: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلاَّ أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلاَّ أَنْتَ",
        transliteration: "Allahumma anta rabbi la ilaha illa ant, khalaqtani wa ana 'abduk, wa ana 'ala 'ahdika wa wa'dika mastata't, a'udhu bika min sharri ma sana't, abu'u laka bini'matika 'alayya wa abu'u bidhambri faghfir li fa'innahu la yaghfirudh-dhunuba illa ant",
        translation: "اللهم أنت ربي لا إله إلا أنت، خلقتني وأنا عبدك، وأنا على عهدك ووعدك ما استطعت، أعوذ بك من شر ما صنعت، أقر لك بنعمتك عليّ وأقر بذنبي فاغفر لي فإنه لا يغفر الذنوب إلا أنت",
        source: "رواه البخاري",
        repeat: 1,
        benefits: "من قالها موقناً بها فمات من يومه دخل الجنة",
        category: "morning"
      },
      {
        id: "m4",
        title: "آية الكرسي",
        arabic: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ",
        transliteration: "Allahu la ilaha illa huwal-hayyul-qayyum, la ta'khudhuhu sinatun wa la nawm...",
        translation: "الله لا إله إلا هو الحي القيوم، لا تأخذه سنة ولا نوم...",
        source: "سورة البقرة: ٢٥٥",
        repeat: 1,
        benefits: "من قرأها في الصباح حفظ من الجن حتى المساء",
        category: "morning"
      },
      {
        id: "m5",
        title: "المعوذات صباحاً",
        arabic: "قُلْ هُوَ اللَّهُ أَحَدٌ • قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ • قُلْ أَعُوذُ بِرَبِّ النَّاسِ",
        transliteration: "Qul huwallahu ahad... Qul a'udhu bi rabbil-falaq... Qul a'udhu bi rabbin-nas...",
        translation: "سورة الإخلاص والفلق والناس",
        source: "رواه أبو داود والترمذي",
        repeat: 3,
        benefits: "تكفيك من كل شيء إذا قرأتها ثلاث مرات",
        category: "morning"
      },
      {
        id: "m6",
        title: "ذكر الصباح - الحياء والسمع والبصر",
        arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا",
        transliteration: "Allahumma inni as'aluka 'ilman nafi'a, wa rizqan tayyiba, wa 'amalan mutaqabbala",
        translation: "اللهم إني أسألك علماً نافعاً، ورزقاً طيباً، وعملاً متقبلاً",
        source: "رواه ابن ماجه",
        repeat: 1,
        benefits: "يُقال بعد صلاة الفجر",
        category: "morning"
      },
      {
        id: "m7",
        title: "التعوذ صباحاً",
        arabic: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ",
        transliteration: "A'udhu bikalimatillahit-tammati min sharri ma khalaq",
        translation: "أعوذ بكلمات الله التامات من شر ما خلق",
        source: "رواه مسلم",
        repeat: 3,
        benefits: "لم يضره شيء في تلك الليلة",
        category: "morning"
      },
      {
        id: "m8",
        title: "الدعاء بالعافية",
        arabic: "اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي، لَا إِلَهَ إِلاَّ أَنْتَ",
        transliteration: "Allahumma 'afini fi badani, Allahumma 'afini fi sam'i, Allahumma 'afini fi basari, la ilaha illa ant",
        translation: "اللهم عافني في بدني، اللهم عافني في سمعي، اللهم عافني في بصري، لا إله إلا أنت",
        source: "رواه أبو داود",
        repeat: 3,
        benefits: "العافية في البدن والحواس",
        category: "morning"
      }
    ],
    evening: [
      {
        id: "e1",
        title: "ذكر المساء الأول",
        arabic: "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلاَّ اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
        transliteration: "Amsayna wa amsal-mulku lillah, walhamdu lillah...",
        translation: "أمسينا وأمسى الملك لله وحده لا شريك له",
        source: "رواه مسلم",
        repeat: 1,
        benefits: "حماية وبركة في المساء",
        category: "evening"
      },
      {
        id: "e2",
        title: "سيد الاستغفار مساءً",
        arabic: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلاَّ أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلاَّ أَنْتَ",
        transliteration: "Allahumma anta rabbi la ilaha illa ant...",
        translation: "سيد الاستغفار — من قاله موقناً فمات من ليلته دخل الجنة",
        source: "رواه البخاري",
        repeat: 1,
        benefits: "من قالها مساءً موقناً فمات من ليلته دخل الجنة",
        category: "evening"
      },
      {
        id: "e3",
        title: "آية الكرسي مساءً",
        arabic: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ...",
        transliteration: "Allahu la ilaha illa huwal-hayyul-qayyum...",
        translation: "آية الكرسي — أعظم آية في القرآن",
        source: "البقرة: ٢٥٥",
        repeat: 1,
        benefits: "من قرأها في المساء حفظ من الجن حتى الصباح",
        category: "evening"
      },
      {
        id: "e4",
        title: "التعوذ مساءً",
        arabic: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ",
        transliteration: "A'udhu bikalimatillahit-tammati min sharri ma khalaq",
        translation: "أعوذ بكلمات الله التامات من شر ما خلق",
        source: "رواه مسلم",
        repeat: 3,
        benefits: "حماية من كل شر",
        category: "evening"
      },
      {
        id: "e5",
        title: "الصلاة على النبي مساءً",
        arabic: "اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى نَبِيِّنَا مُحَمَّدٍ",
        transliteration: "Allahumma salli wa sallim 'ala nabiyyina Muhammad",
        translation: "اللهم صل وسلم على نبينا محمد",
        source: "السنة النبوية",
        repeat: 10,
        benefits: "صلاة الله عليك عشراً",
        category: "evening"
      }
    ],
    sleep: [
      {
        id: "s1",
        title: "دعاء النوم",
        arabic: "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا",
        transliteration: "Bismika Allahumma amutu wa ahya",
        translation: "باسمك اللهم أموت وأحيا",
        source: "رواه البخاري",
        repeat: 1,
        benefits: "سنة النبي ﷺ عند النوم",
        category: "sleep"
      },
      {
        id: "s2",
        title: "آية الكرسي قبل النوم",
        arabic: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ...",
        transliteration: "Allahu la ilaha illa huw...",
        translation: "آية الكرسي",
        source: "رواه البخاري",
        repeat: 1,
        benefits: "لم يزل عليك من الله حافظ ولا يقربك شيطان حتى تصبح",
        category: "sleep"
      },
      {
        id: "s3",
        title: "تسبيح النوم",
        arabic: "سُبْحَانَ اللَّهِ • الْحَمْدُ لِلَّهِ • اللَّهُ أَكْبَرُ",
        transliteration: "SubhanAllah × 33... Alhamdulillah × 33... Allahu Akbar × 34",
        translation: "سبحان الله ثلاثاً وثلاثين، والحمد لله ثلاثاً وثلاثين، والله أكبر أربعاً وثلاثين",
        source: "متفق عليه",
        repeat: 33,
        benefits: "خير لك من خادم",
        category: "sleep"
      },
      {
        id: "s4",
        title: "دعاء وضع الجنب",
        arabic: "اللَّهُمَّ قِنِي عَذَابَكَ يَوْمَ تَبْعَثُ عِبَادَكَ",
        transliteration: "Allahumma qini 'adhabaka yawma tab'athu 'ibadak",
        translation: "اللهم قني عذابك يوم تبعث عبادك",
        source: "رواه أبو داود والترمذي",
        repeat: 3,
        benefits: "حماية من عذاب القبر والنار",
        category: "sleep"
      }
    ],
    after_prayer: [
      {
        id: "ap1",
        title: "الأذكار بعد الصلاة — الاستغفار",
        arabic: "أَسْتَغْفِرُ اللَّه",
        transliteration: "Astaghfirullah",
        translation: "أستغفر الله",
        source: "رواه مسلم",
        repeat: 3,
        benefits: "غفران الذنوب",
        category: "after_prayer"
      },
      {
        id: "ap2",
        title: "بعد الصلاة — التسبيح",
        arabic: "سُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ وَاللَّهُ أَكْبَرُ",
        transliteration: "SubhanAllah, Walhamdulillah, Wallahu Akbar",
        translation: "سبحان الله والحمد لله والله أكبر",
        source: "رواه مسلم",
        repeat: 33,
        benefits: "تُكمل مئة ثم تقول لا إله إلا الله وحده",
        category: "after_prayer"
      },
      {
        id: "ap3",
        title: "لا إله إلا الله وحده",
        arabic: "لَا إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
        transliteration: "La ilaha illallah wahdahu la sharika lah, lahul-mulku walahul-hamd, wahuwa 'ala kulli shay'in qadir",
        translation: "لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير",
        source: "رواه مسلم",
        repeat: 1,
        benefits: "غُفرت له ذنوبه وإن كانت مثل زبد البحر",
        category: "after_prayer"
      },
      {
        id: "ap4",
        title: "آية الكرسي بعد الصلاة",
        arabic: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ...",
        transliteration: "Allahu la ilaha illa huw...",
        translation: "آية الكرسي",
        source: "رواه النسائي",
        repeat: 1,
        benefits: "لم يمنعه من دخول الجنة إلا الموت",
        category: "after_prayer"
      }
    ],
    istighfar: [
      {
        id: "i1",
        title: "الاستغفار البسيط",
        arabic: "أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ",
        transliteration: "Astaghfirullaha wa atubu ilayh",
        translation: "أستغفر الله وأتوب إليه",
        source: "رواه البخاري ومسلم",
        repeat: 100,
        benefits: "كان النبي ﷺ يستغفر مئة مرة في اليوم",
        category: "istighfar"
      },
      {
        id: "i2",
        title: "الاستغفار الكامل",
        arabic: "أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لَا إِلَهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ وَأَتُوبُ إِلَيْهِ",
        transliteration: "Astaghfirullaha-l'adheemal-ladhi la ilaha illa huwal-hayyul-qayyumu wa atubu ilayh",
        translation: "أستغفر الله العظيم الذي لا إله إلا هو الحي القيوم وأتوب إليه",
        source: "رواه الترمذي",
        repeat: 3,
        benefits: "غُفر له وإن كان فرّ من الزحف",
        category: "istighfar"
      },
      {
        id: "i3",
        title: "سبحان الله وبحمده",
        arabic: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ",
        transliteration: "SubhanAllahi wa bihamdih",
        translation: "سبحان الله وبحمده",
        source: "رواه مسلم",
        repeat: 100,
        benefits: "من قالها مئة مرة حُطّت خطاياه وإن كانت مثل زبد البحر",
        category: "istighfar"
      }
    ],
    tasbeeh: [
      {
        id: "t1",
        title: "سبحان الله",
        arabic: "سُبْحَانَ اللَّهِ",
        transliteration: "SubhanAllah",
        translation: "سبحان الله",
        source: "القرآن الكريم والسنة",
        repeat: 33,
        benefits: "تنزيه الله عن كل نقص",
        category: "tasbeeh"
      },
      {
        id: "t2",
        title: "الحمد لله",
        arabic: "الْحَمْدُ لِلَّهِ",
        transliteration: "Alhamdulillah",
        translation: "الحمد لله",
        source: "القرآن الكريم والسنة",
        repeat: 33,
        benefits: "تملأ الميزان",
        category: "tasbeeh"
      },
      {
        id: "t3",
        title: "الله أكبر",
        arabic: "اللَّهُ أَكْبَرُ",
        transliteration: "Allahu Akbar",
        translation: "الله أكبر",
        source: "القرآن الكريم والسنة",
        repeat: 34,
        benefits: "تملأ ما بين السماء والأرض",
        category: "tasbeeh"
      }
    ]
  },
  duas: {
    rizq: [
      {
        id: "r1",
        title: "دعاء سعة الرزق",
        arabic: "اللَّهُمَّ اكْفِنِي بِحَلَالِكَ عَنْ حَرَامِكَ، وَأَغْنِنِي بِفَضْلِكَ عَمَّنْ سِوَاكَ",
        transliteration: "Allahumma-kfini bihalalika 'an haramika, wa aghnini bifadlika 'amman siwak",
        translation: "اللهم اكفني بحلالك عن حرامك، وأغنني بفضلك عمن سواك",
        source: "رواه الترمذي",
        repeat: 1,
        benefits: "ذهاب الدين وسعة الرزق الحلال",
        category: "rizq"
      },
      {
        id: "r2",
        title: "دعاء طلب الرزق",
        arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ رِزْقًا وَاسِعًا طَيِّبًا مِنْ رِزْقِكَ",
        transliteration: "Allahumma inni as'aluka rizqan wasi'an tayyiban min rizqik",
        translation: "اللهم إني أسألك رزقاً واسعاً طيباً من رزقك",
        source: "الأدعية المأثورة",
        repeat: 1,
        benefits: "سعة الرزق والبركة",
        category: "rizq"
      },
      {
        id: "r3",
        title: "الاستغفار لفتح الرزق",
        arabic: "فَقُلْتُ اسْتَغْفِرُوا رَبَّكُمْ إِنَّهُ كَانَ غَفَّارًا • يُرْسِلِ السَّمَاءَ عَلَيْكُم مِّدْرَارًا • وَيُمْدِدْكُم بِأَمْوَالٍ وَبَنِينَ وَيَجْعَل لَّكُمْ جَنَّاتٍ وَيَجْعَل لَّكُمْ أَنْهَارًا",
        transliteration: "Faqultu-staghfiru rabbakum innahu kana ghaffara, yursilis-sama'a 'alaykum midrara...",
        translation: "استغفروا ربكم — يُرسل السماء عليكم مدراراً ويمددكم بأموال وبنين",
        source: "سورة نوح: ١٠-١٢",
        repeat: 1,
        benefits: "الاستغفار يفتح أبواب الرزق والمطر والأولاد",
        category: "rizq"
      }
    ],
    anxiety: [
      {
        id: "an1",
        title: "دعاء الهم والحزن",
        arabic: "اللَّهُمَّ إِنِّي عَبْدُكَ وَابْنُ عَبْدِكَ وَابْنُ أَمَتِكَ، نَاصِيَتِي بِيَدِكَ، مَاضٍ فِيَّ حُكْمُكَ، عَدْلٌ فِيَّ قَضَاؤُكَ، أَسْأَلُكَ بِكُلِّ اسْمٍ هُوَ لَكَ سَمَّيْتَ بِهِ نَفْسَكَ، أَوْ أَنْزَلْتَهُ فِي كِتَابِكَ، أَوْ عَلَّمْتَهُ أَحَدًا مِنْ خَلْقِكَ، أَوِ اسْتَأْثَرْتَ بِهِ فِي عِلْمِ الْغَيْبِ عِنْدَكَ، أَنْ تَجْعَلَ الْقُرْآنَ رَبِيعَ قَلْبِي، وَنُورَ صَدْرِي، وَجَلَاءَ حُزْنِي، وَذَهَابَ هَمِّي",
        transliteration: "Allahumma inni 'abduka wabnu 'abdika wabnu amatik, nasiyati biyadik, madin fiyya hukmuk...",
        translation: "اللهم إني عبدك وابن عبدك وابن أمتك، ناصيتي بيدك، ماضٍ فيّ حكمك...",
        source: "رواه أحمد",
        repeat: 1,
        benefits: "أذهب الله همه وحزنه وأبدله فرحاً",
        category: "anxiety"
      },
      {
        id: "an2",
        title: "دعاء الكرب",
        arabic: "لَا إِلَهَ إِلاَّ اللَّهُ الْعَظِيمُ الْحَلِيمُ، لَا إِلَهَ إِلاَّ اللَّهُ رَبُّ الْعَرْشِ الْعَظِيمِ، لَا إِلَهَ إِلاَّ اللَّهُ رَبُّ السَّمَاوَاتِ وَرَبُّ الْأَرْضِ وَرَبُّ الْعَرْشِ الْكَرِيمِ",
        transliteration: "La ilaha illallahul-'adhimul-halim, la ilaha illallah rabbul-'arshil-'adhim...",
        translation: "لا إله إلا الله العظيم الحليم، لا إله إلا الله رب العرش العظيم...",
        source: "رواه البخاري ومسلم",
        repeat: 1,
        benefits: "دعاء الكرب — يفرج الله به الكرب",
        category: "anxiety"
      },
      {
        id: "an3",
        title: "حسبي الله",
        arabic: "حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ، عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ",
        transliteration: "Hasbiyallahu la ilaha illa huw, 'alayhi tawakkaltu wa huwa rabbul-'arshil-'adhim",
        translation: "حسبي الله لا إله إلا هو، عليه توكلت وهو رب العرش العظيم",
        source: "سورة التوبة: ١٢٩",
        repeat: 7,
        benefits: "كفاه الله ما أهمه",
        category: "anxiety"
      }
    ],
    forgiveness: [
      {
        id: "f1",
        title: "دعاء التوبة",
        arabic: "رَبَّنَا ظَلَمْنَا أَنفُسَنَا وَإِن لَّمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ",
        transliteration: "Rabbana dhalamna anfusana wa-in lam taghfir lana wa-tarhamna lanakunanna minal-khassirin",
        translation: "ربنا ظلمنا أنفسنا وإن لم تغفر لنا وترحمنا لنكونن من الخاسرين",
        source: "سورة الأعراف: ٢٣",
        repeat: 1,
        benefits: "دعاء آدم وحواء عليهما السلام",
        category: "forgiveness"
      },
      {
        id: "f2",
        title: "دعاء المغفرة",
        arabic: "اللَّهُمَّ اغْفِرْ لِي مَا قَدَّمْتُ وَمَا أَخَّرْتُ، وَمَا أَسْرَرْتُ وَمَا أَعْلَنْتُ، وَمَا أَسْرَفْتُ وَمَا أَنْتَ أَعْلَمُ بِهِ مِنِّي، أَنْتَ الْمُقَدِّمُ وَأَنْتَ الْمُؤَخِّرُ لَا إِلَهَ إِلاَّ أَنْتَ",
        transliteration: "Allahumma-ghfir li ma qaddamtu wa ma akhkhartu wa ma asrartu wa ma a'lantu...",
        translation: "اللهم اغفر لي ما قدمت وما أخرت، وما أسررت وما أعلنت...",
        source: "رواه مسلم",
        repeat: 1,
        benefits: "مغفرة شاملة لجميع الذنوب",
        category: "forgiveness"
      },
      {
        id: "f3",
        title: "دعاء يونس",
        arabic: "لَّا إِلَٰهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ",
        transliteration: "La ilaha illa anta subhanaka inni kuntu minaz-dhalimin",
        translation: "لا إله إلا أنت سبحانك إني كنت من الظالمين",
        source: "سورة الأنبياء: ٨٧",
        repeat: 1,
        benefits: "ما دعا به مسلم في كربة إلا استجاب الله له",
        category: "forgiveness"
      }
    ],
    parents: [
      {
        id: "p1",
        title: "دعاء للوالدين",
        arabic: "رَّبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا",
        transliteration: "Rabbi-rhamhuma kama rabbayani saghira",
        translation: "ربِّ ارحمهما كما ربياني صغيراً",
        source: "سورة الإسراء: ٢٤",
        repeat: 1,
        benefits: "رحمة الله على الوالدين",
        category: "parents"
      },
      {
        id: "p2",
        title: "دعاء المغفرة للوالدين",
        arabic: "رَبَّنَا اغْفِرْ لِي وَلِوَالِدَيَّ وَلِلْمُؤْمِنِينَ يَوْمَ يَقُومُ الْحِسَابُ",
        transliteration: "Rabbana-ghfir li wa liwali dayya wa lil-mu'minina yawma yaqumul-hisab",
        translation: "ربنا اغفر لي ولوالديّ وللمؤمنين يوم يقوم الحساب",
        source: "سورة إبراهيم: ٤١",
        repeat: 1,
        benefits: "مغفرة للوالدين والمؤمنين",
        category: "parents"
      }
    ],
    knowledge: [
      {
        id: "k1",
        title: "دعاء طلب العلم",
        arabic: "رَّبِّ زِدْنِي عِلْمًا",
        transliteration: "Rabbi zidni 'ilma",
        translation: "ربِّ زدني علماً",
        source: "سورة طه: ١١٤",
        repeat: 1,
        benefits: "زيادة العلم النافع",
        category: "knowledge"
      },
      {
        id: "k2",
        title: "دعاء الفهم والحفظ",
        arabic: "اللَّهُمَّ انْفَعْنِي بِمَا عَلَّمْتَنِي، وَعَلِّمْنِي مَا يَنْفَعُنِي، وَزِدْنِي عِلْمًا",
        transliteration: "Allahumma-nfa'ni bima 'allamtani, wa 'allimni ma yanfa'uni, wa zidni 'ilma",
        translation: "اللهم انفعني بما علمتني وعلمني ما ينفعني وزدني علماً",
        source: "رواه الترمذي وابن ماجه",
        repeat: 1,
        benefits: "علم نافع وفهم مبارك",
        category: "knowledge"
      }
    ],
    protection: [
      {
        id: "pr1",
        title: "دعاء الحفظ من الشر",
        arabic: "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ",
        transliteration: "Bismillahil-ladhi la yadurru ma'asmihi shay'un fil-ardi wa la fis-sama'i wa huwas-sami'ul-'alim",
        translation: "بسم الله الذي لا يضر مع اسمه شيء في الأرض ولا في السماء وهو السميع العليم",
        source: "رواه أبو داود والترمذي",
        repeat: 3,
        benefits: "لم يضره شيء",
        category: "protection"
      },
      {
        id: "pr2",
        title: "دعاء السفر",
        arabic: "اللَّهُمَّ إِنَّا نَسْأَلُكَ فِي سَفَرِنَا هَذَا الْبِرَّ وَالتَّقْوَى، وَمِنَ الْعَمَلِ مَا تَرْضَى، اللَّهُمَّ هَوِّنْ عَلَيْنَا سَفَرَنَا هَذَا وَاطْوِ عَنَّا بُعْدَهُ",
        transliteration: "Allahumma inna nas'aluka fi safarina hadhal-birra wat-taqwa...",
        translation: "اللهم إنا نسألك في سفرنا هذا البرّ والتقوى...",
        source: "رواه مسلم",
        repeat: 1,
        benefits: "بركة وحفظ في السفر",
        category: "protection"
      }
    ],
    illness: [
      {
        id: "il1",
        title: "الرقية الشرعية",
        arabic: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّةِ مِنْ كُلِّ شَيْطَانٍ وَهَامَّةٍ، وَمِنْ كُلِّ عَيْنٍ لَامَّةٍ",
        transliteration: "A'udhu bikalimatillahit-tammati min kulli shaytanin wa hammatin wa min kulli 'aynin lammah",
        translation: "أعوذ بكلمات الله التامة من كل شيطان وهامة، ومن كل عين لامة",
        source: "رواه البخاري",
        repeat: 1,
        benefits: "رقية الحسن والحسين",
        category: "illness"
      },
      {
        id: "il2",
        title: "دعاء الشفاء",
        arabic: "اللَّهُمَّ رَبَّ النَّاسِ، أَذْهِبِ الْبَأْسَ، اشْفِهِ وَأَنْتَ الشَّافِي، لَا شِفَاءَ إِلاَّ شِفَاؤُكَ، شِفَاءً لَا يُغَادِرُ سَقَمًا",
        transliteration: "Allahumma rabban-nas, adhhibil-ba's, ishfihi wa antas-shafi, la shifa'a illa shifa'uk, shifa'an la yughadiru saqama",
        translation: "اللهم رب الناس أذهب البأس، اشفه وأنت الشافي، لا شفاء إلا شفاؤك، شفاءً لا يغادر سقماً",
        source: "رواه البخاري ومسلم",
        repeat: 1,
        benefits: "شفاء من الأمراض والأسقام",
        category: "illness"
      }
    ],
    success: [
      {
        id: "su1",
        title: "دعاء النجاح والتوفيق",
        arabic: "رَبِّ اشْرَحْ لِي صَدْرِي • وَيَسِّرْ لِي أَمْرِي • وَاحْلُلْ عُقْدَةً مِّن لِّسَانِي • يَفْقَهُوا قَوْلِي",
        transliteration: "Rabbi-shrah li sadri, wa yassir li amri, wa-hlul 'uqdatan min lisani, yafqahu qawli",
        translation: "ربِّ اشرح لي صدري ويسر لي أمري واحلل عقدة من لساني يفقهوا قولي",
        source: "سورة طه: ٢٥-٢٨",
        repeat: 1,
        benefits: "دعاء موسى عليه السلام — شرح الصدر وتيسير الأمر",
        category: "success"
      },
      {
        id: "su2",
        title: "دعاء التوفيق",
        arabic: "اللَّهُمَّ لَا سَهْلَ إِلاَّ مَا جَعَلْتَهُ سَهْلًا، وَأَنْتَ تَجْعَلُ الْحَزْنَ إِذَا شِئْتَ سَهْلًا",
        transliteration: "Allahumma la sahla illa ma ja'altahu sahla, wa anta taj'alul-hazna idha shi'ta sahla",
        translation: "اللهم لا سهل إلا ما جعلته سهلاً، وأنت تجعل الحزن إذا شئت سهلاً",
        source: "رواه ابن حبان",
        repeat: 1,
        benefits: "تيسير الأمور الصعبة",
        category: "success"
      }
    ],
    quranic_duas: [
      {
        id: "q1",
        title: "دعاء إبراهيم",
        arabic: "رَبَّنَا تَقَبَّلْ مِنَّا ۖ إِنَّكَ أَنتَ السَّمِيعُ الْعَلِيمُ",
        transliteration: "Rabbana taqabbal minna innaka antas-sami'ul-'alim",
        translation: "ربنا تقبل منا إنك أنت السميع العليم",
        source: "سورة البقرة: ١٢٧",
        repeat: 1,
        benefits: "قبول العمل والعبادات",
        category: "quranic_duas"
      },
      {
        id: "q2",
        title: "دعاء ختم الأمور",
        arabic: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
        transliteration: "Rabbana atina fid-dunya hasanatan wa fil-akhirati hasanatan wa qina 'adhaban-nar",
        translation: "ربنا آتنا في الدنيا حسنة وفي الآخرة حسنة وقنا عذاب النار",
        source: "سورة البقرة: ٢٠١",
        repeat: 1,
        benefits: "خير الدنيا والآخرة",
        category: "quranic_duas"
      },
      {
        id: "q3",
        title: "دعاء الثبات",
        arabic: "رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِن لَّدُنكَ رَحْمَةً ۚ إِنَّكَ أَنتَ الْوَهَّابُ",
        transliteration: "Rabbana la tuzigh qulubana ba'da idh hadaytana wa hab lana milladunka rahmah, innaka antal-wahhab",
        translation: "ربنا لا تزغ قلوبنا بعد إذ هديتنا وهب لنا من لدنك رحمة إنك أنت الوهاب",
        source: "سورة آل عمران: ٨",
        repeat: 1,
        benefits: "الثبات على الحق والهدى",
        category: "quranic_duas"
      },
      {
        id: "q4",
        title: "دعاء المؤمنين",
        arabic: "رَبَّنَا اغْفِرْ لَنَا ذُنُوبَنَا وَإِسْرَافَنَا فِي أَمْرِنَا وَثَبِّتْ أَقْدَامَنَا وَانصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ",
        transliteration: "Rabbana-ghfir lana dhunubana wa israfana fi amrina wa thabbit aqdamana wansurna 'alal-qawmil-kafirin",
        translation: "ربنا اغفر لنا ذنوبنا وإسرافنا في أمرنا وثبت أقدامنا وانصرنا على القوم الكافرين",
        source: "سورة آل عمران: ١٤٧",
        repeat: 1,
        benefits: "المغفرة والثبات والنصر",
        category: "quranic_duas"
      },
      {
        id: "q5",
        title: "دعاء الصبر",
        arabic: "رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا وَانصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ",
        transliteration: "Rabbana afrigh 'alayna sabran wa thabbit aqdamana wansurna 'alal-qawmil-kafirin",
        translation: "ربنا أفرغ علينا صبراً وثبت أقدامنا وانصرنا على القوم الكافرين",
        source: "سورة البقرة: ٢٥٠",
        repeat: 1,
        benefits: "الصبر والثبات والنصر",
        category: "quranic_duas"
      },
      {
        id: "q6",
        title: "دعاء الرحمة",
        arabic: "رَّبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا",
        transliteration: "Rabbi-rhamhuma kama rabbayani saghira",
        translation: "ربِّ ارحمهما كما ربياني صغيراً",
        source: "سورة الإسراء: ٢٤",
        repeat: 1,
        benefits: "رحمة الله على الوالدين",
        category: "quranic_duas"
      }
    ],
    hardship: [
      {
        id: "h1",
        title: "دعاء الفرج",
        arabic: "اللَّهُمَّ لَا تُكَلِّفْنِي فَوْقَ طَاقَتِي، وَلَا تُرَاجِعْنِي فِي أَمْرٍ أَعْجَزُ عَنْهُ، وَاكْشِفْ كَرْبِي يَا كَاشِفَ الْكُرَبِ",
        transliteration: "Allahumma la tukallifni fawqa taqati wa la turaji'ni fi amrin a'jazu 'anh...",
        translation: "اللهم لا تكلفني فوق طاقتي، واكشف كربي يا كاشف الكرب",
        source: "الأدعية المأثورة",
        repeat: 1,
        benefits: "كشف الكرب ورفع المشقة",
        category: "hardship"
      },
      {
        id: "h2",
        title: "إنا لله وإنا إليه راجعون",
        arabic: "إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ • اللَّهُمَّ أْجُرْنِي فِي مُصِيبَتِي وَأَخْلِفْ لِي خَيْرًا مِنْهَا",
        transliteration: "Inna lillahi wa inna ilayhi raji'un, Allahumma-jurni fi musibati wa akhlif li khayran minha",
        translation: "إنا لله وإنا إليه راجعون، اللهم أجرني في مصيبتي وأخلف لي خيراً منها",
        source: "رواه مسلم",
        repeat: 1,
        benefits: "من قالها أجره الله وأبدله خيراً",
        category: "hardship"
      }
    ],
    gratitude: [
      {
        id: "g1",
        title: "دعاء الشكر",
        arabic: "اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ",
        transliteration: "Allahumma a'inni 'ala dhikrika wa shukrika wa husni 'ibadatik",
        translation: "اللهم أعني على ذكرك وشكرك وحسن عبادتك",
        source: "رواه أبو داود والنسائي",
        repeat: 1,
        benefits: "العون على الذكر والشكر والعبادة",
        category: "gratitude"
      },
      {
        id: "g2",
        title: "الحمد الشامل",
        arabic: "الْحَمْدُ لِلَّهِ حَمْدًا كَثِيرًا طَيِّبًا مُبَارَكًا فِيهِ",
        transliteration: "Alhamdu lillahi hamdan kathiran tayyiban mubarakan fih",
        translation: "الحمد لله حمداً كثيراً طيباً مباركاً فيه",
        source: "رواه مسلم",
        repeat: 1,
        benefits: "كلمة أُشكل على الملائكة كتابتها",
        category: "gratitude"
      }
    ]
  }
};

const TASBEEH_OPTIONS = [
  { id: "tb1", arabic: "سُبْحَانَ اللَّهِ", transliteration: "SubhanAllah", translation: "سبحان الله", target: 33 },
  { id: "tb2", arabic: "الْحَمْدُ لِلَّهِ", transliteration: "Alhamdulillah", translation: "الحمد لله", target: 33 },
  { id: "tb3", arabic: "اللَّهُ أَكْبَرُ", transliteration: "Allahu Akbar", translation: "الله أكبر", target: 34 },
  { id: "tb4", arabic: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ", transliteration: "SubhanAllahi wa bihamdih", translation: "سبحان الله وبحمده", target: 100 },
  { id: "tb5", arabic: "لَا إِلَهَ إِلاَّ اللَّهُ", transliteration: "La ilaha illallah", translation: "لا إله إلا الله", target: 100 },
  { id: "tb6", arabic: "أَسْتَغْفِرُ اللَّهَ", transliteration: "Astaghfirullah", translation: "أستغفر الله", target: 100 },
  { id: "tb7", arabic: "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ", transliteration: "Allahumma salli 'ala Muhammad", translation: "الصلاة على النبي", target: 100 },
  { id: "tb8", arabic: "لَا حَوْلَ وَلَا قُوَّةَ إِلاَّ بِاللَّهِ", transliteration: "La hawla wa la quwwata illa billah", translation: "لا حول ولا قوة إلا بالله", target: 100 },
  { id: "tb9", arabic: "حَسْبِيَ اللَّهُ وَنِعْمَ الْوَكِيلُ", transliteration: "Hasbiyallahu wa ni'mal-wakil", translation: "حسبي الله ونعم الوكيل", target: 33 }
];

const DAILY_REMINDERS = [
  { arabic: "وَمَا تَوْفِيقِي إِلَّا بِاللَّهِ", source: "سورة هود: ٨٨", note: "توكّل على الله في كل أمرك" },
  { arabic: "إِنَّ مَعَ الْعُسْرِ يُسْرًا", source: "سورة الشرح: ٦", note: "بعد كل ضيق فرج" },
  { arabic: "وَلَذِكْرُ اللَّهِ أَكْبَرُ", source: "سورة العنكبوت: ٤٥", note: "الذكر أعظم عبادة" },
  { arabic: "فَاذْكُرُونِي أَذْكُرْكُمْ", source: "سورة البقرة: ١٥٢", note: "اذكر الله يذكرك" },
  { arabic: "إِنَّ اللَّهَ مَعَ الصَّابِرِينَ", source: "سورة البقرة: ١٥٣", note: "الصبر مفتاح الفرج" },
  { arabic: "وَتَوَكَّلْ عَلَى اللَّهِ ۚ وَكَفَىٰ بِاللَّهِ وَكِيلًا", source: "سورة الأحزاب: ٣", note: "الله يكفيك" },
  { arabic: "أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ", source: "سورة الرعد: ٢٨", note: "الطمأنينة في ذكر الله" }
];

const CATEGORY_META = {
  azkar: {
    morning:      { label: "أذكار الصباح",     icon: "🌅", color: "#f59e0b" },
    evening:      { label: "أذكار المساء",     icon: "🌙", color: "#8b5cf6" },
    sleep:        { label: "أذكار النوم",       icon: "🌌", color: "#1e40af" },
    after_prayer: { label: "أذكار بعد الصلاة", icon: "🕌", color: "#10b981" },
    istighfar:    { label: "الاستغفار",        icon: "💚", color: "#059669" },
    tasbeeh:      { label: "التسبيح",          icon: "📿", color: "#d97706" }
  },
  duas: {
    rizq:         { label: "دعاء الرزق",        icon: "💰", color: "#d97706" },
    anxiety:      { label: "دعاء الهم والحزن",  icon: "🫀", color: "#7c3aed" },
    forgiveness:  { label: "دعاء المغفرة",      icon: "🤍", color: "#64748b" },
    parents:      { label: "دعاء الوالدين",     icon: "❤️", color: "#dc2626" },
    knowledge:    { label: "دعاء العلم",        icon: "📖", color: "#0891b2" },
    protection:   { label: "دعاء الحفظ",       icon: "🛡️", color: "#16a34a" },
    illness:      { label: "دعاء الشفاء",       icon: "🌿", color: "#15803d" },
    success:      { label: "دعاء النجاح",       icon: "⭐", color: "#ca8a04" },
    hardship:     { label: "دعاء الفرج",        icon: "🌤️", color: "#0284c7" },
    gratitude:    { label: "دعاء الشكر",        icon: "🙏", color: "#c2410c" },
    quranic_duas: { label: "أدعية قرآنية",      icon: "📗", color: "#166534" }
  }
};
