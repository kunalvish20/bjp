import type { NewsItem } from '../types/index.ts'

export const newsItems: NewsItem[] = [
  {
    id: 'n1',
    category: 'Governance',
    date: '2026-08-29',
    readTime: '4 min read',
    title: 'AAP Delhi: Welfare Promise Faces Funding and Rollout Questions',
    titleHi: 'AAP दिल्ली: कल्याणकारी वादे पर फंडिंग और अमल के सवाल',
    excerpt:
      'The ₹1,000 monthly women’s assistance plan announced in Delhi’s 2024–25 Budget faced Finance Department concerns over recurring liability; the government said ₹2,000 crore had been allocated.',
    excerptHi:
      'दिल्ली के 2024–25 बजट में घोषित महिलाओं के लिए ₹1,000 मासिक सहायता योजना पर वित्त विभाग ने लगातार बढ़ने वाले खर्च को लेकर सवाल उठाए; सरकार ने कहा कि ₹2,000 करोड़ का प्रावधान किया गया था।',
    body: [
      {
        en: 'The Mukhya Mantri Mahila Samman Rashi Yojna was announced in the Delhi government’s 2024–25 Budget with a proposed payment of ₹1,000 per month to eligible women. Later reporting said the Finance Department raised concerns about the recurring fiscal liability and the risks of expanding such expenditure while the state was also facing borrowing pressures.',
        hi: 'मुख्यमंत्री महिला सम्मान राशि योजना दिल्ली सरकार के 2024–25 बजट में पात्र महिलाओं को ₹1,000 प्रति माह देने के प्रस्ताव के साथ घोषित की गई थी। बाद की रिपोर्टों के अनुसार वित्त विभाग ने इस तरह के लगातार बढ़ने वाले खर्च और राज्य की उधारी पर पड़ने वाले दबाव को लेकर चिंता जताई।',
      },
      {
        en: 'The AAP government disputed suggestions that the scheme lacked financial backing and said ₹2,000 crore had already been allocated. The episode became a wider debate over how quickly welfare promises should be rolled out, how they should be funded, and how clearly implementation timelines should be communicated.',
        hi: 'AAP सरकार ने यह मानने से इनकार किया कि योजना के लिए धन की व्यवस्था नहीं थी और कहा कि ₹2,000 करोड़ पहले ही आवंटित किए जा चुके थे। यह मामला इस व्यापक बहस का हिस्सा बना कि कल्याणकारी वादों को कितनी तेजी से लागू किया जाए, उनकी फंडिंग कैसे हो और अमल की समय-सीमा कितनी स्पष्ट हो।',
      },
    ],
    sources: [
      {
        label: 'The Indian Express',
        url: 'https://indianexpress.com/article/cities/delhi/delhi-govts-scheme-for-women-finance-dept-red-flags-financial-liability-cm-atishi-says-rs-2000-cr-already-allotted-9709241/',
      },
    ],
    image: {
      src: '/AAP Delhi Welfare.webp',
      alt: 'Illustrative image for the AAP Delhi welfare funding explainer',
      credit: 'Illustrative image — not a photo of the specific event',
    },
  },
  {
    id: 'n2',
    category: 'National',
    date: '2026-08-28',
    readTime: '5 min read',
    title: 'BJP-led Centre: Student Protests Spark Debate Over Policing and Outreach',
    titleHi: 'BJP-नेतृत्व वाली केंद्र सरकार: छात्र आंदोलनों पर पुलिसिंग और संवाद को लेकर बहस',
    excerpt:
      'Large student mobilisations around Parliament in July 2026 drew criticism over policing, while the Centre also opened talks, accepted a memorandum and held high-level reviews.',
    excerptHi:
      'जुलाई 2026 में संसद के आसपास बड़े छात्र आंदोलनों के दौरान पुलिस कार्रवाई पर आलोचना हुई, वहीं केंद्र ने बातचीत शुरू की, ज्ञापन स्वीकार किया और उच्च-स्तरीय समीक्षा बैठकें कीं।',
    body: [
      {
        en: 'Student demonstrations in July 2026 triggered a sharp political argument over the government’s handling of protest, crowd control and communication. Opposition leaders criticised the police response and said student grievances should have been met with earlier engagement.',
        hi: 'जुलाई 2026 के छात्र प्रदर्शनों ने सरकार की विरोध-प्रदर्शन प्रबंधन, भीड़ नियंत्रण और संवाद रणनीति को लेकर तीखी राजनीतिक बहस छेड़ दी। विपक्षी नेताओं ने पुलिस कार्रवाई की आलोचना की और कहा कि छात्रों की शिकायतों पर पहले ही संवाद होना चाहिए था।',
      },
      {
        en: 'At the same time, reporting also said the Centre accepted a memorandum from student representatives, opened channels of communication and held senior-level meetings to review the situation. The episode therefore remains a contested case study in how governments balance public order with the right to protest and the need for timely outreach.',
        hi: 'इसी दौरान रिपोर्टों में यह भी बताया गया कि केंद्र ने छात्र प्रतिनिधियों का ज्ञापन स्वीकार किया, बातचीत के रास्ते खोले और स्थिति की समीक्षा के लिए वरिष्ठ स्तर पर बैठकें कीं। इसलिए यह मामला सार्वजनिक व्यवस्था, विरोध के अधिकार और समय पर संवाद के बीच संतुलन की बहस बना हुआ है।',
      },
    ],
    sources: [
      {
        label: 'NDTV Centre response',
        url: 'https://www.ndtv.com/india-news/security-measures-to-talks-how-centre-handled-escalation-of-cjp-protest-11797588',
      },
      {
        label: 'NDTV opposition criticism',
        url: 'https://www.ndtv.com/india-news/cjp-protest-jantar-mantar-neet-modi-government-treating-protesting-students-as-enemies-of-the-nation-sonia-gandhi-11814378',
      },
    ],
    image: {
      src: '/BJP-led.webp',
      alt: 'Illustrative image for the BJP-led Centre student protest explainer',
      credit: 'Illustrative image — not a photo of the specific event',
    },
  },
  {
    id: 'n3',
    category: 'Alliance',
    date: '2026-08-27',
    readTime: '5 min read',
    title: 'Congress–AAP Alliance: Different State Strategies Create Mixed Messaging',
    titleHi: 'कांग्रेस–AAP गठबंधन: अलग-अलग राज्यों की रणनीति से मिला-जुला संदेश',
    excerpt:
      'Congress and AAP cooperated in Delhi for the 2024 Lok Sabha election while remaining direct rivals in Punjab, creating repeated tension over seat-sharing, messaging and local political identity.',
    excerptHi:
      '2024 लोकसभा चुनाव में कांग्रेस और AAP ने दिल्ली में सहयोग किया, जबकि पंजाब में वे सीधे प्रतिद्वंद्वी रहे; इससे सीट-बंटवारे, संदेश और स्थानीय राजनीतिक पहचान को लेकर लगातार तनाव बना।',
    body: [
      {
        en: 'The Congress–AAP relationship during the 2024 Lok Sabha cycle showed the complexity of multi-state alliances. The parties reached a seat-sharing arrangement in Delhi, but their Punjab units remained principal rivals and resisted a comparable pact there.',
        hi: '2024 लोकसभा चुनाव के दौरान कांग्रेस–AAP संबंध ने बहु-राज्यीय गठबंधनों की जटिलता दिखाई। दिल्ली में दोनों दल सीट-बंटवारे पर सहमत हुए, लेकिन पंजाब में उनकी राज्य इकाइयाँ मुख्य प्रतिद्वंद्वी रहीं और वैसा समझौता नहीं हुआ।',
      },
      {
        en: 'That produced a communication challenge: national leaders spoke about opposition unity while local leaders still had to distinguish themselves from one another. Supporters and critics interpreted this differently — as pragmatic federal politics on one hand, and as inconsistent messaging on the other.',
        hi: 'इससे संदेश की चुनौती पैदा हुई: राष्ट्रीय नेतृत्व विपक्षी एकता की बात कर रहा था, जबकि स्थानीय नेताओं को एक-दूसरे से अपनी अलग पहचान भी बनाए रखनी थी। समर्थकों ने इसे व्यावहारिक संघीय राजनीति कहा, जबकि आलोचकों ने इसे असंगत संदेश के रूप में देखा।',
      },
    ],
    sources: [
      {
        label: 'The Indian Express: Congress-AAP ties',
        url: 'https://indianexpress.com/article/political-pulse/congress-arvind-kejriwal-arrest-aap-9230586/',
      },
      {
        label: 'The Indian Express: Delhi alliance talks',
        url: 'https://indianexpress.com/article/cities/delhi/punjab-out-aap-congress-say-lok-sabha-poll-alliance-on-track-in-delhi-9155268/',
      },
    ],
    image: {
      src: '/Congress–AAP Alliance.webp',
      alt: 'Illustrative image for the Congress-AAP alliance explainer',
      credit: 'Illustrative image — not a photo of the specific event',
    },
  },
  {
    id: 'n4',
    category: 'Governance',
    date: '2026-08-26',
    readTime: '6 min read',
    title: 'AAP: Excise-Policy Case, CAG Findings and Political Fallout',
    titleHi: 'AAP: आबकारी नीति मामला, CAG निष्कर्ष और राजनीतिक असर',
    excerpt:
      'The excise-policy controversy drove years of investigations and arrests and later a CAG report on revenue loss; in February 2026, a Delhi court discharged Arvind Kejriwal, Manish Sisodia and others in the CBI case.',
    excerptHi:
      'आबकारी नीति विवाद के कारण कई वर्षों तक जांच और गिरफ्तारियां हुईं और बाद में CAG ने राजस्व नुकसान पर रिपोर्ट दी; फरवरी 2026 में दिल्ली की अदालत ने CBI मामले में अरविंद केजरीवाल, मनीष सिसोदिया और अन्य को आरोपमुक्त कर दिया।',
    body: [
      {
        en: 'The Delhi excise-policy controversy became one of AAP’s biggest political and legal challenges. Investigative agencies alleged wrongdoing, several senior leaders were arrested during the course of the probes, and a CAG report tabled in 2025 said policy decisions and implementation failures caused a substantial loss to the Delhi government.',
        hi: 'दिल्ली आबकारी नीति विवाद AAP की सबसे बड़ी राजनीतिक और कानूनी चुनौतियों में से एक बन गया। जांच एजेंसियों ने अनियमितताओं के आरोप लगाए, जांच के दौरान कई वरिष्ठ नेताओं की गिरफ्तारी हुई और 2025 में विधानसभा में रखी गई CAG रिपोर्ट ने नीति और उसके अमल से दिल्ली सरकार को बड़े राजस्व नुकसान की बात कही।',
      },
      {
        en: 'The legal position changed materially in February 2026, when a Delhi court discharged Arvind Kejriwal, Manish Sisodia and others in the CBI case, saying the evidence did not establish an overarching conspiracy or criminal intent. Political criticism over governance and the CAG findings continued, but allegations should not be presented as proven criminal guilt where a court has not so found.',
        hi: 'फरवरी 2026 में कानूनी स्थिति महत्वपूर्ण रूप से बदली, जब दिल्ली की अदालत ने CBI मामले में अरविंद केजरीवाल, मनीष सिसोदिया और अन्य को आरोपमुक्त करते हुए कहा कि उपलब्ध साक्ष्य व्यापक साजिश या आपराधिक मंशा साबित नहीं करते। शासन और CAG निष्कर्षों पर राजनीतिक आलोचना जारी रही, लेकिन जहां अदालत ने दोष सिद्ध नहीं किया हो वहां आरोपों को सिद्ध अपराध के रूप में प्रस्तुत नहीं किया जाना चाहिए।',
      },
    ],
    sources: [
      {
        label: 'NDTV court-discharge timeline',
        url: 'https://www.ndtv.com/india-news/arvind-kejriwal-manish-sisodia-cleared-of-charges-in-delhi-liquor-policy-case-a-timeline-11143615/amp/1',
      },
      {
        label: 'NDTV CAG report',
        url: 'https://www.ndtv.com/india-news/cag-aap-arvind-kejriwal-rekha-gupta-bjp-liquor-policy-caused-rs-2-002-crore-loss-to-delhi-government-cag-report-7790249',
      },
    ],
    image: {
      src: '/AAP Excise Policy Case.webp',
      alt: 'Illustrative image for the AAP excise-policy case explainer',
      credit: 'Illustrative image — not a photo of the specific event',
    },
  },
  {
    id: 'n5',
    category: 'Alliance',
    date: '2026-08-25',
    readTime: '4 min read',
    title: 'Congress & AAP: Defections and Alliance Tensions in Goa',
    titleHi: 'कांग्रेस और AAP: गोवा में दलबदल और गठबंधन तनाव',
    excerpt:
      'Senior AAP figures moved toward or joined Congress in Goa while alliance talks remained strained, highlighting the difficulty of maintaining local organisation alongside broader opposition coordination.',
    excerptHi:
      'गोवा में AAP के कुछ वरिष्ठ नेता कांग्रेस की ओर गए या उसमें शामिल हुए, जबकि गठबंधन वार्ता तनावपूर्ण रही; इससे स्थानीय संगठन और व्यापक विपक्षी समन्वय के बीच चुनौती सामने आई।',
    body: [
      {
        en: 'Goa politics in 2026 saw visible movement between AAP and Congress. Former AAP Goa leaders, including Rahul Mhambre, joined Congress, while earlier resignations by senior AAP functionaries had already raised questions about internal decision-making and the party’s alliance strategy.',
        hi: '2026 में गोवा की राजनीति में AAP और कांग्रेस के बीच नेताओं की आवाजाही साफ दिखाई दी। पूर्व AAP गोवा नेता राहुल म्हांबरे सहित कुछ वरिष्ठ नेता कांग्रेस में शामिल हुए, जबकि इससे पहले कई AAP पदाधिकारियों के इस्तीफों ने आंतरिक निर्णय-प्रक्रिया और गठबंधन रणनीति पर सवाल खड़े किए थे।',
      },
      {
        en: 'At the same time, Congress and AAP continued discussing possible cooperation against the BJP, but leaders publicly questioned one another’s intentions and activity in key constituencies. The result was a familiar coalition problem: how to build a common front without weakening each party’s local cadre and identity.',
        hi: 'इसी दौरान कांग्रेस और AAP ने BJP के खिलाफ संभावित सहयोग पर बातचीत जारी रखी, लेकिन प्रमुख निर्वाचन क्षेत्रों में गतिविधियों और मंशा को लेकर दोनों पक्षों के नेताओं ने सार्वजनिक रूप से एक-दूसरे पर सवाल उठाए। इससे वही पुरानी गठबंधन चुनौती सामने आई—साझा मोर्चा बनाते हुए स्थानीय कार्यकर्ता आधार और पार्टी की पहचान कैसे बची रहे।',
      },
    ],
    sources: [
      {
        label: 'The Goan',
        url: 'https://www.thegoan.net/goa-inshorts/former-aap-goa-convenor-rahul-mhambre-joins-cong/151463.html',
      },
      {
        label: 'Prudent Media',
        url: 'https://www.prudentmedia.in/politics/congress-aap-gfp-cribbing-where-is-the-alliance-headed/37619.html',
      },
    ],
    image: {
      src: '/Congress & AAP defections.webp',
      alt: 'Illustrative image for the Congress and AAP Goa defections explainer',
      credit: 'Illustrative image — not a photo of the specific event',
    },
  },
]
