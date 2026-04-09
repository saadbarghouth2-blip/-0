export interface BlogSection {
  titleAr: string;
  titleEn: string;
  paragraphsAr: string[];
  paragraphsEn: string[];
}

export interface BlogPost {
  slug: string;
  titleAr: string;
  titleEn: string;
  excerptAr: string;
  excerptEn: string;
  authorAr: string;
  authorEn: string;
  readTimeAr: string;
  readTimeEn: string;
  categoryAr: string;
  categoryEn: string;
  coverImage: string;
  publishedAt: string;
  featured?: boolean;
  tagsAr: string[];
  tagsEn: string[];
  bodySections: BlogSection[];
  keyTakeawaysAr: string[];
  keyTakeawaysEn: string[];
}

export interface BlogCategoryOption {
  key: string;
  labelAr: string;
  labelEn: string;
}

const byNewest = (a: BlogPost, b: BlogPost) =>
  new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();

const blogImage = (path: string) => `/images/${path}`;

const rawBlogPosts: BlogPost[] = [
  {
    slug: 'global-user-experiences-websites',
    titleAr: 'كيفية بناء تجربة مستخدم عالمية في المواقع',
    titleEn: 'Building Global User Experiences in Websites',
    excerptAr:
      'استكشاف أفضل الممارسات لبناء مواقع تدعم الثقافات واللغات المختلفة مع الحفاظ على تجربة متماسكة.',
    excerptEn:
      'Exploring best practices for websites that support multiple cultures and languages while keeping the experience cohesive.',
    authorAr: 'فريق نُطق',
    authorEn: 'Notaq Team',
    readTimeAr: '10 دقائق',
    readTimeEn: '10 min',
    categoryAr: 'تجربة المستخدم',
    categoryEn: 'UX Design',
    coverImage: blogImage('projects/global-consulting-firm.png'),
    publishedAt: '2024-12-15',
    tagsAr: ['تجربة المستخدم', 'تعدد اللغات', 'تصميم الويب'],
    tagsEn: ['User Experience', 'Localization', 'Web Design'],
    bodySections: [
      {
        titleAr: 'ابدأ من فهم السياق لا من الترجمة فقط',
        titleEn: 'Start from context, not translation alone',
        paragraphsAr: [
          'المواقع العالمية لا تنجح لأن النص تُرجم حرفيًا، بل لأن الرسالة نفسها أُعيد تقديمها بما يناسب طريقة القراءة والثقة واتخاذ القرار داخل كل سوق. الجملة التي تعمل في سوق ما قد تحتاج بنية مختلفة تمامًا في سوق آخر.',
          'لهذا نبدأ دائمًا بسؤالين: ماذا يريد المستخدم أن يفهم خلال الثواني الأولى؟ وما الذي يجعله يثق في العلامة التجارية داخل هذا السياق الثقافي؟ الإجابة على هذين السؤالين أهم من مجرد تبديل اللغة.',
          'حين تتضح الإجابة، يصبح من الأسهل اتخاذ قرارات أدق في العنوان الرئيسي، ترتيب الأقسام، نبرة الرسائل، وحتى شكل الدعوة إلى الإجراء. ما يبدو تفصيلا لغويا صغيرا قد يكون في الحقيقة نقطة الحسم في فهم الصفحة كلها.',
        ],
        paragraphsEn: [
          'Global websites do not succeed because text was translated word for word. They succeed because the message itself was reintroduced in a way that matches reading habits, trust signals, and decision-making in each market.',
          'That is why we always start with two questions: what should the visitor understand in the first seconds, and what makes the brand feel trustworthy in this specific cultural context? Those answers matter more than language switching alone.',
          'Once those answers are clear, stronger decisions follow in the headline, section order, tone of voice, and even the call to action. What looks like a small language adjustment often changes how the whole page is understood.',
        ],
      },
      {
        titleAr: 'التجربة يجب أن تتكيف مع الإيقاع البصري',
        titleEn: 'The experience must adapt to visual rhythm',
        paragraphsAr: [
          'دعم العربية والإنجليزية لا يعني فقط RTL وLTR، بل يعني أيضًا إعادة التفكير في توازن المسافات، طول العناوين، شكل الأزرار، ومواقع العناصر المهمة داخل كل نسخة. التصميم المتوازن في الإنجليزية قد يبدو مزدحمًا أو متقطعًا في العربية إذا نُقل كما هو.',
          'الواجهة الذكية تبقي الهوية واحدة، لكن تسمح للتفاصيل أن تتغير: المحاذاة، اتجاه الأيقونات، طول العبارات، وحتى ترتيب الكتل داخل الصفحة إذا لزم الأمر.',
          'وهنا تظهر قيمة التصميم المرن. نفس النظام البصري يجب أن يتحمل اختلافات اللغة من غير أن يفقد شخصيته. إذا اضطررنا للاختيار، فالأولوية دائما لوضوح القراءة على حساب التطابق الشكلي الحرفي.',
        ],
        paragraphsEn: [
          'Supporting Arabic and English is not only about RTL and LTR. It also means rethinking spacing, heading length, button sizing, and the placement of important elements in each version. A layout that feels balanced in English can feel crowded in Arabic if copied as-is.',
          'A strong interface keeps one identity, but allows details to shift: alignment, icon direction, phrase length, and even section order when that improves clarity.',
          'This is where a flexible design system matters. The same visual language should absorb language differences without losing character. If a tradeoff is needed, reading clarity should win over strict visual mirroring.',
        ],
      },
      {
        titleAr: 'الثقة عنصر محلي بامتياز',
        titleEn: 'Trust is always local',
        paragraphsAr: [
          'عناصر الثقة ليست ثابتة عالميًا. بعض الأسواق تفضل الشهادات المباشرة، وبعضها يهتم بالاعتمادات الرسمية، وبعضها يقرأ سرعة التفاعل ووضوح الأسعار كإشارة أساسية على الاحتراف. لذلك لا يوجد قالب ثقة واحد يصلح للجميع.',
          'الموقع العالمي الجيد هو الذي يشعر المستخدم أنه كُتب له تحديدًا، حتى لو كانت البنية التقنية واحدة خلف الكواليس.',
          'في بعض الحالات قد يكون ذكر أرقام واضحة، أو توفير وسيلة تواصل محلية، أو إظهار أمثلة قريبة من القطاع نفسه أكثر تأثيرا من أي فقرة تعريفية طويلة. الثقة هنا ليست عنصر تجميلي، بل طبقة بنائية داخل الصفحة.',
        ],
        paragraphsEn: [
          'Trust signals are not universal. Some markets respond more to testimonials, some care about formal credentials, and others read response speed or pricing clarity as the clearest signal of professionalism. There is no single trust template that works everywhere.',
          'A good global website feels intentionally written for the user in front of it, even if the technical foundation behind the scenes is shared.',
          'In some cases, clear numbers, a local contact option, or examples from a familiar industry create more confidence than a long brand paragraph. Trust is not decorative here; it is structural.',
        ],
      },
      {
        titleAr: 'اختبر النسخة داخل السوق المستهدف',
        titleEn: 'Validate the version inside the target market',
        paragraphsAr: [
          'أفضل طريقة لمعرفة ما إذا كانت النسخة العالمية تعمل حقا هي أن تُراجع مع أشخاص قريبين من السوق نفسه. ملاحظاتهم تكشف إن كان المعنى واضحا، وإن كانت النبرة مناسبة، وإن كانت بعض التفاصيل تحتاج تبسيطا أو إعادة ترتيب.',
          'كما أن التحليلات يجب أن تُقرأ لكل لغة أو سوق على حدة. معدل التمرير، النقر، والانتقال بين الصفحات قد يختلف بشكل واضح، وهذا الاختلاف ليس خطأ بل إشارة مهمة تساعدنا على تحسين النسخة المناسبة.',
          'المواقع العالمية القوية لا تتعامل مع الترجمة كخطوة نهائية، بل كنسخة أولى قابلة للتحسين. النجاح الحقيقي يأتي من دورة مستمرة بين التصميم، القياس، والتعديل.',
        ],
        paragraphsEn: [
          'The best way to know whether a global version truly works is to review it with people close to the target market. Their feedback reveals whether the meaning is clear, the tone feels right, and the page order needs refinement.',
          'Analytics should also be read per language or market. Scroll depth, clicks, and navigation behavior often vary, and those differences are not problems by default; they are signals for better localization.',
          'Strong international websites do not treat translation as the final step. They treat it as a first version that improves through an ongoing loop of design, measurement, and iteration.',
        ],
      },
    ],
    keyTakeawaysAr: [
      'التوطين الحقيقي يبدأ من فهم السلوك لا من ترجمة النص فقط.',
      'التصميم متعدد اللغات يحتاج تعديلات بصرية مدروسة لا نسخة مكررة.',
      'الثقة يجب أن تُبنى بحسب السوق المستهدف لا بحسب افتراضات عامة.',
      'قياس الأداء لكل لغة أو سوق جزء أساسي من نجاح التجربة العالمية.',
    ],
    keyTakeawaysEn: [
      'Real localization starts with user behavior, not literal translation.',
      'Multilingual interfaces need visual adaptation, not duplicated layouts.',
      'Trust should be designed for the target market, not generic assumptions.',
      'Measuring performance by language or market is essential to a strong global experience.',
    ],
  },
  {
    slug: 'ecommerce-middle-east-challenges-opportunities',
    titleAr: 'التجارة الإلكترونية في الشرق الأوسط: التحديات والفرص',
    titleEn: 'E-commerce in the Middle East: Challenges and Opportunities',
    excerptAr:
      'تحليل لسوق التجارة الإلكترونية في المنطقة العربية وكيفية بناء منصات ناجحة تلبي احتياجات العملاء المحليين.',
    excerptEn:
      'An analysis of the Middle East e-commerce market and how to build successful platforms that match local customer expectations.',
    authorAr: 'فريق نُطق',
    authorEn: 'Notaq Team',
    readTimeAr: '10 دقائق',
    readTimeEn: '10 min',
    categoryAr: 'التجارة الإلكترونية',
    categoryEn: 'E-commerce',
    coverImage: blogImage('projects/reeq-store.png'),
    publishedAt: '2024-11-28',
    featured: true,
    tagsAr: ['تجارة إلكترونية', 'الشرق الأوسط', 'تحويلات'],
    tagsEn: ['E-commerce', 'Middle East', 'Conversions'],
    bodySections: [
      {
        titleAr: 'الفرصة كبيرة لكن الثقة تحسم اللعبة',
        titleEn: 'The opportunity is large, but trust decides the outcome',
        paragraphsAr: [
          'سوق التجارة الإلكترونية في المنطقة ينمو بسرعة، لكن العميل لا يمنح ثقته بسهولة. كثير من المتاجر تخسر ليس لأن المنتج ضعيف، بل لأن الصفحة لا توصل شعورا بالوضوح والاحتراف والاطمئنان في أول دقيقة.',
          'كلما كان المتجر واضحا في الأسعار، الشحن، الاسترجاع، وطرق الدفع، زادت فرص إتمام الشراء. هذه ليست إضافات جانبية، بل صميم تجربة البيع.',
          'لهذا السبب نرى متاجر بمنتجات ممتازة ولكن بأداء ضعيف، فقط لأن الصفحة الأولى لم تحسم الأسئلة الأساسية مبكرا. في السوق المحلي، الثقة تختصر وقت التفكير وتدفع القرار إلى الأمام بشكل مباشر.',
        ],
        paragraphsEn: [
          'The e-commerce opportunity in the region is growing quickly, but customer trust is still hard-earned. Many stores lose sales not because the product is weak, but because the page does not communicate clarity, professionalism, and confidence in the first minute.',
          'The clearer the store is about pricing, delivery, returns, and payment options, the higher the likelihood of purchase. These are not secondary details; they sit at the core of conversion.',
          'This is why some strong products still underperform online. The first screen does not resolve the buyer questions early enough, and in regional markets, trust often determines how fast the customer moves toward purchase.',
        ],
      },
      {
        titleAr: 'الدفع والشحن جزء من الواجهة لا من العمليات فقط',
        titleEn: 'Payments and shipping are part of the interface, not just operations',
        paragraphsAr: [
          'واحدة من أكثر نقاط الاحتكاك شيوعا في متاجر المنطقة هي أن المستخدم لا يفهم مبكرا كيف سيدفع ومتى سيصله الطلب وما إذا كان يمكنه الإرجاع. حين تُترك هذه الأسئلة للنهاية، يرتفع معدل التردد والتخلي عن السلة.',
          'المتجر الناجح يشرح هذه الأمور قبل أن تُطرح، ويقدمها داخل الرحلة نفسها بطريقة مختصرة ومريحة.',
          'حتى صياغة الرسائل نفسها تصنع فرقا. عبارة قصيرة وواضحة حول زمن التوصيل أو سياسة الاستبدال قد تكون أهم من فقرة تسويقية طويلة، لأنها تزيل الاعتراض في لحظة القرار.',
        ],
        paragraphsEn: [
          'One of the most common friction points in regional stores is that users do not understand early enough how they will pay, when the order will arrive, or whether returns are possible. When those answers are delayed, hesitation and cart abandonment rise.',
          'A successful store answers those questions before they are asked, and integrates them directly into the journey in a concise and reassuring way.',
          'Even the wording matters. A short, clear line about delivery time or exchange policy can do more for conversion than a long promotional paragraph because it removes friction at the decision point.',
        ],
      },
      {
        titleAr: 'التخصيص المحلي يرفع التحويل بوضوح',
        titleEn: 'Local relevance clearly improves conversion',
        paragraphsAr: [
          'المحتوى الذي يذكر المزايا العامة فقط لا يكفي. المتجر يحتاج لغة بيع محلية، صورا مناسبة، رسائل توصيل واضحة، وعروضا يشعر المستخدم أنها تخصه فعلا. الفارق هنا ليس تجميليا، بل مباشر في الأرقام.',
          'حين تبدو المنصة وكأنها بنيت لهذا الجمهور تحديدا، يصبح القرار أسرع والاعتراضات أقل.',
          'الأمثلة المحلية، أسلوب كتابة السعر، وطريقة ترتيب الفئات قد تبدو تفاصيل صغيرة، لكنها تساهم في جعل المتجر مألوفا وسهل الفهم. وكلما زاد هذا الإحساس، زادت احتمالات الاستمرار في الرحلة.',
        ],
        paragraphsEn: [
          'Content that speaks only in generic benefits is not enough. A store needs local sales language, relevant imagery, clear delivery messaging, and offers that feel intentionally made for that audience. The impact here is not cosmetic; it is measurable.',
          'When the platform feels like it was built for this audience specifically, decisions become faster and objections become fewer.',
          'Local references, price presentation, and category structure may feel like minor details, yet they make the store feel familiar and easier to trust. That familiarity often moves conversion in a meaningful way.',
        ],
      },
      {
        titleAr: 'خدمة العميل بعد الضغط لا تقل أهمية عن الصفحة',
        titleEn: 'Customer support after the click matters as much as the page',
        paragraphsAr: [
          'في كثير من الأسواق العربية، التجربة لا تنتهي عند الضغط على زر الشراء أو الاستفسار. سرعة الرد، أسلوب خدمة العملاء، وإمكانية التواصل عبر القنوات المفضلة مثل الهاتف أو واتساب تصبح جزءا من التقييم الكلي للمتجر.',
          'حين يشعر العميل أن هناك متابعة حقيقية بعد الطلب، تزداد فرص إتمام الشراء الأول ثم العودة مجددا. أما إذا كانت الواجهة ممتازة لكن الخدمة بطيئة أو غامضة، فإن الانطباع الإيجابي ينهار بسرعة.',
          'لهذا يجب أن تُصمم تجربة التجارة الإلكترونية باعتبارها رحلة كاملة: صفحة، شراء، متابعة، دعم، وعودة. النجاح لا يأتي من الشاشة وحدها بل من النظام كله.',
        ],
        paragraphsEn: [
          'In many Arabic-speaking markets, the experience does not end when the customer clicks buy or inquire. Response speed, support tone, and access to preferred channels such as phone or WhatsApp become part of the overall store evaluation.',
          'When customers feel there is real follow-through after the order, the first purchase becomes easier and repeat business becomes more likely. If the interface is strong but support is slow or vague, the positive impression fades quickly.',
          'This is why e-commerce should be designed as a complete journey: page, purchase, follow-up, support, and return visit. Success comes from the system, not the screen alone.',
        ],
      },
    ],
    keyTakeawaysAr: [
      'الوضوح في الشحن والدفع والاسترجاع جزء أساسي من التحويل.',
      'الثقة في المتجر تُبنى من أول شاشة لا عند صفحة الدفع فقط.',
      'التخصيص المحلي يخلق فرقا مباشرا في المبيعات وليس مجرد تحسين شكلي.',
      'خدمة ما بعد الطلب واستجابة الدعم تؤثران بقوة على الولاء والشراء المتكرر.',
    ],
    keyTakeawaysEn: [
      'Clear shipping, payment, and return communication directly impacts conversion.',
      'Store trust is built from the first screen, not only at checkout.',
      'Local relevance creates measurable sales impact, not just nicer presentation.',
      'Post-order service and support responsiveness strongly affect loyalty and repeat sales.',
    ],
  },
  {
    slug: 'ai-digital-product-design',
    titleAr: 'الذكاء الاصطناعي في تصميم المنتجات الرقمية',
    titleEn: 'AI in Digital Product Design',
    excerptAr:
      'كيف يمكن للذكاء الاصطناعي تحسين عملية تصميم المنتجات الرقمية وإنشاء تجارب أكثر ذكاءً وتخصيصًا.',
    excerptEn:
      'How artificial intelligence can improve digital product design and create smarter, more personalized experiences.',
    authorAr: 'فريق نُطق',
    authorEn: 'Notaq Team',
    readTimeAr: '9 دقائق',
    readTimeEn: '9 min',
    categoryAr: 'الذكاء الاصطناعي والتقنية',
    categoryEn: 'AI & Technology',
    coverImage: blogImage('Gemini_Generated_Image_nfqqnnfqqnnfqqnn.png'),
    publishedAt: '2024-11-10',
    tagsAr: ['ذكاء اصطناعي', 'تصميم المنتجات', 'تجربة المستخدم'],
    tagsEn: ['AI', 'Product Design', 'User Experience'],
    bodySections: [
      {
        titleAr: 'الذكاء الاصطناعي ليس ميزة إذا كان غامضا',
        titleEn: 'AI is not a feature if it feels unclear',
        paragraphsAr: [
          'كثير من المنتجات تضيف الذكاء الاصطناعي كواجهة تسويقية، لكن المستخدم لا يعرف فعليا ما الذي سيتغير له. النتيجة أن التجربة تبدو مبهرة في العرض الأول، لكنها لا تصنع اعتمادا حقيقيا.',
          'التصميم الجيد يشرح وظيفة الذكاء الاصطناعي بوضوح: ما الذي يفعله؟ متى يعمل؟ وما الذي يبقى تحت سيطرة المستخدم؟',
          'إذا لم يستطع المستخدم أن يشرح خلال دقيقة واحدة كيف تساعده الميزة، فغالبا أن المنتج لم يقدم القيمة بشكل واضح بما يكفي، مهما كانت التقنية نفسها متقدمة.',
        ],
        paragraphsEn: [
          'Many products add AI as a marketing layer, yet the user still does not understand what will actually change for them. The result is a product that looks impressive at first glance but fails to build true adoption.',
          'Good design makes the AI role explicit: what does it do, when does it activate, and what remains under user control?',
          'If users cannot explain in one minute how the feature helps them, the product has probably failed to communicate the value clearly enough, no matter how advanced the underlying model is.',
        ],
      },
      {
        titleAr: 'الثقة أهم من الإبهار',
        titleEn: 'Trust matters more than spectacle',
        paragraphsAr: [
          'حين يقترح النظام شيئا ذكيا، يحتاج المستخدم إلى فهم منطق الاقتراح حتى لا يشعر أن القرار يحدث في صندوق مغلق. لذلك تصبح التوضيحات المصغرة، حالات المراجعة، وخيارات التعديل عناصر تصميم أساسية.',
          'واجهة AI الناجحة لا تقول فقط: لقد فعلنا هذا بدلا منك، بل تقول أيضا: يمكنك فهم النتيجة والتحكم فيها وتعديلها.',
          'هذه النقطة أساسية في المنتجات المهنية على وجه الخصوص. كلما زادت حساسية القرار، زادت الحاجة إلى شرح المصدر، وحدود الثقة، وما إذا كانت النتيجة تحتاج مراجعة بشرية.',
        ],
        paragraphsEn: [
          'When a system generates a smart recommendation, the user still needs to understand enough of the logic to avoid feeling trapped inside a black box. That is why microcopy, review states, and edit controls become core design elements.',
          'A strong AI interface does not only say, "we did this for you." It also says, "you can inspect it, control it, and refine it."',
          'This matters even more in professional workflows. The more sensitive the task, the more the interface must clarify source signals, confidence boundaries, and whether human review is still required.',
        ],
      },
      {
        titleAr: 'التصميم يجب أن يغطي الحالات لا الشاشة فقط',
        titleEn: 'Design should cover states, not just screens',
        paragraphsAr: [
          'منتجات الذكاء الاصطناعي تمر بحالات أكثر من التطبيقات التقليدية: انتظار، توليد، مراجعة، رفض، تحسين، وإعادة إرسال. إذا لم تُصمم هذه الحالات جيدا، يشعر المستخدم بالبطء أو الارتباك حتى لو كانت التقنية قوية.',
          'لذلك نحتاج إلى تصميم يراعي الرحلة الكاملة، لا فقط شكل الصفحة عند نجاح العملية.',
          'الحالة الفاشلة أو غير المكتملة ليست استثناء نادرا في منتجات AI، بل جزء طبيعي من التجربة. المنتج القوي هو الذي يعرف كيف يرافق المستخدم حين لا تكون النتيجة مثالية من أول مرة.',
        ],
        paragraphsEn: [
          'AI products move through more states than traditional interfaces: waiting, generating, reviewing, rejecting, refining, and retrying. If those states are not designed carefully, the product feels slow or confusing even when the underlying system is powerful.',
          'That is why the full journey must be designed, not only the ideal screen that appears when everything goes right.',
          'Failure or partial output is not a rare edge case in AI products. It is a normal part of the experience. The better product is the one that supports users when the first result is incomplete or needs refinement.',
        ],
      },
      {
        titleAr: 'إبقاء الإنسان داخل الحلقة يزيد القيمة',
        titleEn: 'Keeping the human in the loop increases product value',
        paragraphsAr: [
          'في كثير من المنتجات، أفضل استخدام للذكاء الاصطناعي ليس أن يستبدل المستخدم بالكامل، بل أن يختصر عليه البداية، أو يسرع التحليل، أو يقترح مسارا أوليا ثم يترك له قرار الاعتماد النهائي.',
          'هذا الأسلوب يحقق توازنا أفضل بين السرعة والثقة. يحصل المستخدم على فائدة فورية، لكنه لا يشعر أنه فقد السيطرة أو المسؤولية.',
          'وحين يُصمم هذا التوازن بوضوح، تصبح الميزة أكثر قابلية للاعتماد اليومي. المنتج لا يبدو فقط ذكيا، بل يبدو عمليا ويمكن الوثوق به في العمل الحقيقي.',
        ],
        paragraphsEn: [
          'In many products, the best use of AI is not to replace the user completely, but to shorten the first draft, speed up analysis, or suggest a starting direction while leaving the final decision to the human.',
          'That balance creates a better mix of speed and confidence. Users gain immediate value without feeling they have lost ownership or responsibility.',
          'When this balance is designed clearly, the feature becomes easier to trust in day-to-day work. The product does not only look intelligent; it feels dependable in real workflows.',
        ],
      },
    ],
    keyTakeawaysAr: [
      'الذكاء الاصطناعي يحتاج شرحا وظيفيا واضحا داخل الواجهة.',
      'الثقة والتحكم أهم من الإبهار البصري وحده.',
      'تصميم حالات الانتظار والمراجعة جزء أساسي من جودة المنتج.',
      'الحضور البشري داخل الرحلة يجعل ميزة AI أكثر عملية واعتمادا.',
    ],
    keyTakeawaysEn: [
      'AI features need clear functional explanation inside the interface.',
      'Trust and control matter more than surface-level wow factor.',
      'Loading, review, and retry states are central to product quality.',
      'Human involvement in the workflow makes AI features more practical and dependable.',
    ],
  },
  {
    slug: 'seo-best-practices-arabic-websites',
    titleAr: 'أفضل ممارسات تحسين محركات البحث للمواقع العربية',
    titleEn: 'SEO Best Practices for Arabic Websites',
    excerptAr:
      'دليل شامل لتحسين ظهور المواقع العربية في نتائج البحث وجذب المزيد من الزوار المحليين والدوليين.',
    excerptEn:
      'A practical guide for improving the search visibility of Arabic websites and attracting more local and international visitors.',
    authorAr: 'فريق نُطق',
    authorEn: 'Notaq Team',
    readTimeAr: '10 دقائق',
    readTimeEn: '10 min',
    categoryAr: 'تحسين محركات البحث',
    categoryEn: 'SEO',
    coverImage: blogImage('projects/mahrous-esraa.png'),
    publishedAt: '2024-10-22',
    tagsAr: ['SEO', 'محتوى عربي', 'هيكلة الموقع'],
    tagsEn: ['SEO', 'Arabic Content', 'Site Structure'],
    bodySections: [
      {
        titleAr: 'هيكلة المحتوى أهم من كثرة الكلمات',
        titleEn: 'Content structure matters more than word count',
        paragraphsAr: [
          'من أكثر الأخطاء شيوعا في المواقع العربية أن الصفحة تحاول قول كل شيء مرة واحدة. هذا يضعف فهم المستخدم ويجعل محركات البحث أيضا أقل قدرة على قراءة الهدف الرئيسي للصفحة.',
          'الصفحة الأقوى هي التي تملك نية بحث واضحة، عنوانا مباشرا، بنية عناوين منظمة، ومحتوى يخدم سؤالا أساسيا بدل أن يتشتت في اتجاهات كثيرة.',
          'حين تتطابق نية البحث مع بنية الصفحة، يصبح من الأسهل على جوجل أن يفهم الصفحة، وعلى الزائر أن يقرر إن كانت مناسبة له. هذا التوافق هو أساس الصفحات التي ترتب جيدا وتحوّل جيدا في الوقت نفسه.',
        ],
        paragraphsEn: [
          'A common issue in Arabic websites is trying to say everything on one page. That weakens user comprehension and also makes it harder for search engines to understand the main purpose of the page.',
          'The stronger page has a clear search intent, a direct headline, a clean heading structure, and content that serves one core question rather than scattering into multiple directions.',
          'When search intent and page structure align, Google reads the page more confidently and visitors decide faster whether it fits their need. That alignment is the basis of pages that rank well and convert well.',
        ],
      },
      {
        titleAr: 'الجوانب التقنية لا تقل أهمية عن الكتابة',
        titleEn: 'Technical foundations matter as much as writing',
        paragraphsAr: [
          'أداء الصفحة، العناوين الوصفية، الروابط الداخلية، الصور المضغوطة، وسهولة الزحف كلها عوامل تؤثر مباشرة على ترتيب الموقع. أحيانا لا يكون ضعف الظهور بسبب المحتوى، بل بسبب بنية تقنية تبطئ الصفحة أو تربك الفهرسة.',
          'في المواقع الثنائية اللغة، تصبح الأمور أدق: يجب أن تكون المسارات، الروابط، والوصف لكل نسخة واضحة وغير متداخلة.',
          'حتى أبسط التفاصيل مثل عنوان الصفحة، وصف الميتا، ونصوص الروابط الداخلية تؤثر على فهم محركات البحث للمحتوى. حين تُهمل هذه الطبقة التقنية، يضيع جزء كبير من أثر الكتابة الجيدة.',
        ],
        paragraphsEn: [
          'Page performance, metadata, internal linking, compressed images, and crawl clarity all directly affect visibility. Sometimes poor ranking is not a content problem at all, but a technical structure that slows pages down or confuses indexing.',
          'In bilingual websites, precision matters even more: paths, links, and metadata for each version must stay distinct and clearly organized.',
          'Even simple elements such as page titles, meta descriptions, and internal anchor text influence how search engines interpret the content. When that technical layer is neglected, strong writing loses much of its impact.',
        ],
      },
      {
        titleAr: 'المحتوى العربي يحتاج فهما للبحث المحلي',
        titleEn: 'Arabic content needs local search awareness',
        paragraphsAr: [
          'المستخدم العربي لا يعبّر عن نية البحث دائما بنفس الطريقة التي نتوقعها. هناك اختلاف بين لهجات، وبين أسلوب رسمي وآخر يومي، وبين مصطلحات تقنية ومصطلحات تجارية. لذلك لا يكفي ترجمة كلمات مفتاحية جاهزة من الإنجليزية.',
          'أفضل النتائج تأتي حين نكتب صفحة تفهم لغة السوق نفسه، لا فقط لغة المنتج.',
          'وأحيانا يكون الفرق الحقيقي في استخدام تعبير قريب من العميل بدل مصطلح داخلي تستخدمه الشركة. الكتابة التي تنجح في البحث العربي هي التي تلتقط لغة السؤال كما يقال فعلا، لا كما نتخيله داخل الفريق.',
        ],
        paragraphsEn: [
          'Arabic users do not always express search intent in the way teams expect. There are differences in dialect, formal versus everyday phrasing, and technical versus commercial vocabulary. That is why simply translating English keywords is not enough.',
          'The strongest results come when the page understands the language of the market itself, not just the language of the product.',
          'Sometimes the real improvement comes from using the phrase customers would actually type rather than the internal terminology a company prefers. Strong Arabic SEO captures the spoken search intent, not only the formal brand vocabulary.',
        ],
      },
      {
        titleAr: 'الظهور الجيد يجب أن يقود إلى خطوة واضحة',
        titleEn: 'Good visibility should lead to a clear next step',
        paragraphsAr: [
          'النجاح في SEO لا يُقاس بعدد الزيارات فقط. إذا وصلت الصفحة إلى نتائج البحث لكنها لم تساعد الزائر على فهم الخدمة أو اتخاذ خطوة، فإنها تخسر جزءا كبيرا من قيمتها التجارية.',
          'لهذا يجب أن تتكامل عناصر التحسين مع عناصر الإقناع: عنوان واضح، محتوى يجيب، أمثلة تبني الثقة، ودعوة إلى إجراء مناسبة للمرحلة التي وصل إليها الزائر.',
          'الصفحات الأفضل عادة هي التي تفهم أن SEO ليس قناة منفصلة عن تجربة المستخدم، بل مدخل من مداخلها. كلما كان المسار من البحث إلى القرار أوضح، أصبحت الصفحة أقوى من الناحيتين معا.',
        ],
        paragraphsEn: [
          'SEO success should not be measured by traffic alone. If a page ranks well but fails to help visitors understand the service or take the next step, it loses much of its business value.',
          'That is why optimization should work alongside persuasion: a clear headline, content that answers the question, proof that builds trust, and a call to action suited to the visitor stage.',
          'The strongest pages understand that SEO is not separate from user experience. It is one of its entry points. The clearer the path from search to decision, the stronger the page becomes on both fronts.',
        ],
      },
    ],
    keyTakeawaysAr: [
      'صفحات SEO الأقوى هي الصفحات الواضحة في نية البحث والرسالة.',
      'الأداء والهيكلة التقنية جزء مباشر من الظهور في البحث.',
      'المحتوى العربي يحتاج فهما للسوق المحلي لا مجرد ترجمة كلمات مفتاحية.',
      'قيمة الظهور تكتمل فقط حين تقود الصفحة الزائر إلى خطوة مفهومة وواضحة.',
    ],
    keyTakeawaysEn: [
      'Strong SEO pages are clear in both search intent and message.',
      'Performance and technical structure directly affect discoverability.',
      'Arabic SEO requires local market understanding, not just translated keywords.',
      'Visibility matters most when the page also leads visitors toward a clear next step.',
    ],
  },
  {
    slug: 'mobile-ui-design-principles',
    titleAr: 'تصميم واجهات المستخدم للأجهزة المحمولة',
    titleEn: 'Mobile UI Design Principles',
    excerptAr:
      'مبادئ التصميم الأساسية لبناء واجهات محمولة ممتازة تضمن تجربة مستخدم سلسة ومريحة.',
    excerptEn:
      'Core design principles for building strong mobile interfaces that deliver a smooth and comfortable experience.',
    authorAr: 'فريق نُطق',
    authorEn: 'Notaq Team',
    readTimeAr: '9 دقائق',
    readTimeEn: '9 min',
    categoryAr: 'تصميم الموبايل',
    categoryEn: 'Mobile Design',
    coverImage: blogImage('projects/smart-quran.png'),
    publishedAt: '2024-10-05',
    tagsAr: ['تصميم موبايل', 'تجربة الاستخدام', 'واجهات'],
    tagsEn: ['Mobile Design', 'Usability', 'Interfaces'],
    bodySections: [
      {
        titleAr: 'ابدأ بما يراه الإبهام لا بما يعجب الفريق',
        titleEn: 'Start with what the thumb reaches, not what the team prefers',
        paragraphsAr: [
          'التصميم للموبايل ليس تصغير نسخة الديسكتوب. المساحات التفاعلية، ترتيب العناصر، وسرعة الوصول إلى الأزرار المهمة كلها تتغير عندما تصبح الشاشة أصغر وطريقة الاستخدام مختلفة.',
          'أول مبدأ عملي هنا هو أن تكون العناصر الأساسية سهلة الوصول، وأن يُبنى التسلسل البصري بناء على الاستخدام الحقيقي لا على الترتيب النظري للمحتوى.',
          'حين نلاحظ كيف يمسك الناس الهاتف فعليا، نفهم لماذا تفشل بعض الواجهات رغم جمالها. العنصر الأهم ليس أن يبدو كل شيء مرتبا فقط، بل أن يكون مريحا وسريعا في الاستخدام بيد واحدة في كثير من الحالات.',
        ],
        paragraphsEn: [
          'Mobile design is not a reduced version of desktop. Tap targets, element order, and speed of access all change when the screen becomes smaller and the interaction model changes with it.',
          'The first practical principle is to make essential actions easy to reach, and to build hierarchy around actual usage rather than a theoretical content order.',
          'Watching how people actually hold and use a phone quickly explains why some beautiful interfaces still fail. The goal is not only visual order, but comfort and speed during real one-handed use.',
        ],
      },
      {
        titleAr: 'الشاشة الأولى يجب أن تحسم المعنى بسرعة',
        titleEn: 'The first screen must resolve meaning quickly',
        paragraphsAr: [
          'المستخدم المحمول أقل صبرا وأكثر عرضة للمقاطعة، لذلك يجب أن تُفهم القيمة الأساسية للواجهة خلال ثوان. العنوان، الوصف، والزر الرئيسي يجب أن يعملوا معا فورا.',
          'إذا احتاج المستخدم إلى تمرير طويل حتى يفهم لماذا يبقى، فقد خسرنا جزءا كبيرا من الانتباه بالفعل.',
          'هذا لا يعني أن كل شيء يجب أن يكون مختصرا جدا، لكنه يعني أن الطبقة الأولى من الصفحة يجب أن تنقل الرسالة الأساسية بوضوح وتترك التفاصيل لما بعدها. الموبايل يكافئ الحسم المبكر في المعنى.',
        ],
        paragraphsEn: [
          'Mobile users are less patient and more easily interrupted, so the core value of the interface must become clear within seconds. The heading, supporting line, and primary action need to work together immediately.',
          'If the user must scroll for too long just to understand why they should stay, a large part of attention is already lost.',
          'This does not mean everything must be compressed. It means the first layer of the page should communicate the main promise clearly and leave supporting detail for later. Mobile rewards early clarity.',
        ],
      },
      {
        titleAr: 'تقليل الاحتكاك أهم من إضافة المزيد',
        titleEn: 'Reducing friction matters more than adding more',
        paragraphsAr: [
          'النماذج الطويلة، العناصر المتقاربة جدا، والرسائل غير الواضحة تضاعف الإرباك على الهاتف. كل خطوة إضافية يجب أن تبرر نفسها بوضوح.',
          'التجربة الجيدة على الموبايل تبدو بسيطة، لكنها في الحقيقة نتيجة حذف مدروس وترتيب ذكي لما هو ضروري فقط.',
          'كثير من الفرق تضيف خيارات وأقساما بدافع الاكتمال، لكن الهاتف يكشف بسرعة ما إذا كان هذا الاكتمال يفيد المستخدم أو يثقله. البساطة هنا ليست تقليلا في القيمة، بل حماية لها من التشويش.',
        ],
        paragraphsEn: [
          'Long forms, overly dense elements, and unclear messages amplify friction on small screens. Every extra step must justify its presence.',
          'A good mobile experience feels simple, but that simplicity is usually the result of careful removal and strong prioritization.',
          'Many teams add sections and options in the name of completeness, yet mobile quickly exposes whether that completeness helps users or overwhelms them. Simplicity is not less value here; it protects value from noise.',
        ],
      },
      {
        titleAr: 'السرعة والتغذية الراجعة جزء من التصميم',
        titleEn: 'Speed and feedback are part of the design',
        paragraphsAr: [
          'على الهاتف، يتأثر الانطباع بسرعة التحميل وسرعة الاستجابة بقدر تأثره بالشكل. زر لا يستجيب بسرعة، أو حالة انتظار غير مفهومة، قد تدمر الثقة حتى لو كانت الواجهة جميلة.',
          'لذلك يجب أن نعتبر التحميل، حالات النجاح والخطأ، والتغذية الراجعة الفورية جزءا من التصميم نفسه لا من التنفيذ التقني فقط.',
          'حين يشعر المستخدم أن التطبيق سريع وواضح في رد فعله، يصبح أكثر استعدادا للاستمرار وإكمال المهمة. هذا النوع من الثقة الهادئة يصعب ملاحظته مباشرة، لكنه ينعكس بقوة على الأداء العام.',
        ],
        paragraphsEn: [
          'On mobile, perception is shaped by loading speed and response speed as much as by visual quality. A button that feels slow or an unclear waiting state can damage trust even when the interface looks polished.',
          'That is why loading states, success and error feedback, and immediate response cues should be treated as design work, not only technical implementation.',
          'When users feel the product is fast and clear in how it responds, they become far more willing to continue and complete the task. That quiet sense of trust has a strong impact on overall performance.',
        ],
      },
    ],
    keyTakeawaysAr: [
      'تصميم الموبايل يبدأ من أنماط الاستخدام الفعلية لا من نسخة الديسكتوب.',
      'الشاشة الأولى يجب أن توضّح القيمة بسرعة كبيرة.',
      'تقليل الاحتكاك يرفع جودة التجربة أكثر من كثرة العناصر.',
      'السرعة وحالات التغذية الراجعة من صميم جودة الواجهة المحمولة.',
    ],
    keyTakeawaysEn: [
      'Mobile design should begin from real usage patterns, not desktop assumptions.',
      'The first screen needs to communicate value immediately.',
      'Reducing friction improves experience more than adding more features.',
      'Speed and feedback states are central to the quality of a mobile interface.',
    ],
  },
  {
    slug: 'future-ecommerce-emerging-trends',
    titleAr: 'مستقبل التجارة الإلكترونية: الاتجاهات الناشئة',
    titleEn: 'The Future of E-commerce: Emerging Trends',
    excerptAr:
      'استكشاف الاتجاهات الجديدة في عالم التجارة الإلكترونية وكيفية الاستعداد لها في الأسواق العالمية.',
    excerptEn:
      'A look at emerging e-commerce trends and how brands can prepare for them across global markets.',
    authorAr: 'فريق نُطق',
    authorEn: 'Notaq Team',
    readTimeAr: '9 دقائق',
    readTimeEn: '9 min',
    categoryAr: 'التجارة الإلكترونية',
    categoryEn: 'E-commerce',
    coverImage: blogImage('projects/nemora.png'),
    publishedAt: '2024-09-18',
    tagsAr: ['تجارة إلكترونية', 'الاتجاهات', 'المستقبل الرقمي'],
    tagsEn: ['E-commerce', 'Trends', 'Digital Future'],
    bodySections: [
      {
        titleAr: 'التخصيص سيصبح التوقع الأساسي',
        titleEn: 'Personalization will become the baseline expectation',
        paragraphsAr: [
          'المستخدم لم يعد يكتفي بمتجر يعرض كل شيء للجميع. الاتجاه الواضح هو أن تصبح التجربة أكثر قربا من الاهتمام الفردي: منتجات مقترحة بشكل أذكى، رسائل أوضح، ومسارات أقصر بحسب السلوك.',
          'لكن التخصيص الناجح لا يعني الإغراق في البيانات، بل تقديم شيء مفيد في اللحظة المناسبة.',
          'المتاجر التي ستنجح مستقبلا ليست فقط التي تعرف اسم العميل، بل التي تفهم أين يقف داخل الرحلة وما الذي يساعده فعلا على اتخاذ القرار التالي. التخصيص الحقيقي هو اختصار ذكي، لا استعراض للبيانات.',
        ],
        paragraphsEn: [
          'Users are no longer satisfied with stores that show the same thing to everyone. The direction is clear: experiences will feel more personally relevant, with smarter product recommendations, clearer messaging, and shorter journeys based on behavior.',
          'But effective personalization is not about showing more data. It is about delivering something useful at the right moment.',
          'The stores that will win are not only the ones that know the customer name, but the ones that understand where the customer is in the journey and what actually helps the next decision. Real personalization is smart reduction, not data display.',
        ],
      },
      {
        titleAr: 'الشراء سيصبح أكثر حوارية وأقل خطية',
        titleEn: 'Shopping will become more conversational and less linear',
        paragraphsAr: [
          'واجهات البحث، الأسئلة الذكية، والمساعدات التفاعلية ستلعب دورا أكبر في اكتشاف المنتج. بدلا من أن يتنقل المستخدم يدويا بين عشرات الفلاتر، ستساعده الواجهة على الوصول الأسرع لما يناسبه.',
          'هذا لا يلغي التصميم التقليدي، لكنه يضيف طبقة جديدة تجعل التجربة أقرب للحوار منها إلى التصفح الجامد.',
          'كلما زادت الخيارات وتعقدت الفئات، أصبحت الحاجة إلى هذا النمط أكبر. المستقبل هنا ليس مجرد روبوت دردشة، بل مسار اكتشاف أكثر ذكاء يفهم الأسئلة ويعيد ترتيب العرض بناء عليها.',
        ],
        paragraphsEn: [
          'Search interfaces, guided questions, and smart assistants will play a larger role in product discovery. Instead of manually moving through endless filters, users will expect the interface to narrow options more intelligently.',
          'This does not replace traditional e-commerce design, but it adds a new layer that makes the experience feel more conversational than static.',
          'The more options and categories expand, the more valuable this model becomes. The future is not just chat for its own sake, but a smarter discovery layer that understands user questions and restructures the experience around them.',
        ],
      },
      {
        titleAr: 'ما بعد الشراء سيؤثر على العودة أكثر من الخصومات',
        titleEn: 'Post-purchase experience will drive return visits more than discounts',
        paragraphsAr: [
          'التحديثات، التتبع، سهولة الدعم، ورسائل ما بعد الطلب ستصبح من أهم عناصر الولاء. كثير من العلامات التجارية تركز على إغلاق البيع وتنسى أن التجربة بعد الشراء هي ما يصنع العودة.',
          'المتجر الذي يقدّم تجربة ما بعد شراء مرتبة يربح ثقة تتكرر، وهذه أثمن من أي خصم سريع.',
          'في المستقبل، ستُقاس جودة العلامة التجارية بمدى وضوحها بعد الدفع بقدر ما تُقاس بجودة واجهة العرض قبل الدفع. كل رسالة متابعة، وكل تحديث شحنة، وكل نقطة دعم ستكون جزءا من قيمة العلامة نفسها.',
        ],
        paragraphsEn: [
          'Updates, tracking, support access, and post-order communication will become some of the strongest loyalty levers. Many brands focus on closing the sale and forget that the return visit is shaped after payment, not before it.',
          'Stores with a clean post-purchase journey earn repeat trust, and that is often more valuable than a quick discount.',
          'In the future, brand quality will be measured as much by post-payment clarity as by pre-purchase presentation. Follow-up messages, shipment updates, and support touchpoints will all become part of the brand value itself.',
        ],
      },
      {
        titleAr: 'البنية المرنة ستمنح العلامات سرعة أكبر في التطور',
        titleEn: 'Flexible infrastructure will give brands more room to evolve',
        paragraphsAr: [
          'مع تغير سلوك الشراء بسرعة، ستحتاج المتاجر إلى قدرة أكبر على تعديل الصفحات، الرسائل، والعروض من غير إعادة بناء التجربة من الصفر كل مرة. المرونة التقنية ستصبح ميزة تنافسية وليست مجرد اختيار هندسي.',
          'العلامات التي تبني نظاما واضحا للمحتوى، البيانات، والعرض ستستطيع التجريب أسرع والاستجابة أسرع للتغيرات في السوق. هذا النوع من المرونة ينعكس مباشرة على الأداء والنمو.',
          'المستقبل لن يكافئ فقط من لديه متجر جيد اليوم، بل من يستطيع تحسينه باستمرار بدون فوضى. البنية القابلة للتطوير ستصبح جزءا من الجودة الظاهرة للعميل حتى لو لم يرها مباشرة.',
        ],
        paragraphsEn: [
          'As buying behavior shifts faster, stores will need more freedom to adjust pages, messaging, and offers without rebuilding the experience from scratch every time. Technical flexibility will become a competitive advantage, not just an engineering preference.',
          'Brands that structure content, data, and presentation clearly will experiment faster and respond to market change faster. That flexibility translates directly into stronger performance and growth.',
          'The future will not only reward brands with a good store today. It will reward the brands that can keep improving the store without chaos. Scalable infrastructure becomes part of quality even when customers never see it directly.',
        ],
      },
    ],
    keyTakeawaysAr: [
      'التخصيص الذكي سيصبح معيارا أساسيا لا ميزة إضافية.',
      'التجربة الحوارية ستقود اكتشاف المنتجات بشكل أقوى.',
      'رحلة ما بعد الشراء ستؤثر بقوة على الولاء والعودة للشراء.',
      'المرونة التقنية ستصبح جزءا مباشرا من قدرة المتجر على النمو والتطور.',
    ],
    keyTakeawaysEn: [
      'Smart personalization will become a baseline expectation.',
      'Conversational discovery will shape how users find products.',
      'Post-purchase experience will strongly influence loyalty and repeat sales.',
      'Technical flexibility will become a direct advantage in how stores evolve and grow.',
    ],
  },
];

export const blogPosts = [...rawBlogPosts].sort(byNewest);

export const featuredBlogPost =
  blogPosts.find((post) => post.featured) ?? blogPosts[0];

export const blogCategories: BlogCategoryOption[] = [
  { key: 'all', labelAr: 'الكل', labelEn: 'All' },
  { key: 'UX Design', labelAr: 'تجربة المستخدم', labelEn: 'UX Design' },
  { key: 'E-commerce', labelAr: 'التجارة الإلكترونية', labelEn: 'E-commerce' },
  { key: 'AI & Technology', labelAr: 'الذكاء الاصطناعي والتقنية', labelEn: 'AI & Technology' },
  { key: 'SEO', labelAr: 'تحسين محركات البحث', labelEn: 'SEO' },
  { key: 'Mobile Design', labelAr: 'تصميم الموبايل', labelEn: 'Mobile Design' },
];

export const getBlogPostBySlug = (slug?: string) =>
  blogPosts.find((post) => post.slug === slug);

export const getRelatedBlogPosts = (currentPost: BlogPost, limit = 3) =>
  blogPosts
    .filter((post) => post.slug !== currentPost.slug)
    .sort((a, b) => {
      const aSameCategory = a.categoryEn === currentPost.categoryEn ? 1 : 0;
      const bSameCategory = b.categoryEn === currentPost.categoryEn ? 1 : 0;

      if (aSameCategory !== bSameCategory) {
        return bSameCategory - aSameCategory;
      }

      return byNewest(a, b);
    })
    .slice(0, limit);
