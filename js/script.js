// ---- Data: projects (bilingual) ----
const projects = [
  {
    title: "Qarar",
    tags: ["Laravel 12", "Passport", "Reverb", "Agora", "MyFatoorah"],
    descEn: "Full-stack Laravel 12 healthcare booking platform with a multilingual admin dashboard and REST API. Dynamic role & permission system, charity committee workflows, live video/voice consultations via Agora, MyFatoorah payments, and real-time chat via Laravel Reverb.",
    descAr: "منصة حجز مواعيد صحية متكاملة ببنية Laravel 12، بلوحة تحكم متعددة اللغات وREST API. نظام أدوار وصلاحيات ديناميكي، ورش عمل لجان الجمعيات الخيرية، استشارات فيديو وصوت لحظية عبر Agora، مدفوعات MyFatoorah، وشات لحظي عبر Laravel Reverb.",
    link: "https://qarar.nahrdev.com/",
    images: [
      { src: "assets/projects/qarar/login.png", captionEn: "Admin login", captionAr: "تسجيل دخول الأدمن", path: "qarar.nahrdev.com" },
      { src: "assets/projects/qarar/dashboard.png", captionEn: "Dashboard overview", captionAr: "نظرة عامة على لوحة التحكم", path: "qarar.nahrdev.com/admin/home" },
      { src: "assets/projects/qarar/edit-moderator.png", captionEn: "Edit moderator form", captionAr: "فورم تعديل المشرف", path: "qarar.nahrdev.com/admin/moderator/edit/78" },
      { src: "assets/projects/qarar/roles-permissions.png", captionEn: "Roles & permissions", captionAr: "الأدوار والصلاحيات", path: "qarar.nahrdev.com/admin/roles" },
      { src: "assets/projects/qarar/committee-conversation.png", captionEn: "Committee conversation", captionAr: "محادثة اللجنة", path: "qarar.nahrdev.com/admin/committee-conversation/12" }
    ]
  },
  {
    title: "Rawnq",
    tags: ["Laravel", "Vue.js 3", "Multi-tenant", "Wallet"],
    descEn: "Multi-vendor beauty services marketplace with 35+ independent modules. Wallet system, granular RBAC, multi-language/currency support, real-time scheduling, and multi-gateway payments (Stripe, PayPal, Razorpay, Kashier).",
    descAr: "ماركت بليس متعدد البائعين لخدمات التجميل بأكثر من 35 موديول مستقل. نظام محفظة إلكترونية، صلاحيات دقيقة (RBAC)، دعم متعدد اللغات والعملات، جدولة لحظية، ومدفوعات متعددة البوابات (Stripe, PayPal, Razorpay, Kashier).",
    link: "https://rawnq.nahrdev.com/",
    images: [
      { src: "assets/projects/rawnq/landing.jpg", captionEn: "Marketing landing page (full page)", captionAr: "الصفحة الرئيسية التسويقية (كاملة)", path: "rawnq.nahrdev.com" },
      { src: "assets/projects/rawnq/register.png", captionEn: "Vendor registration", captionAr: "تسجيل حساب مزوّد جديد", path: "rawnq.nahrdev.com/register" },
      { src: "assets/projects/rawnq/login.png", captionEn: "Vendor / admin login", captionAr: "تسجيل دخول المزوّد والأدمن", path: "rawnq.nahrdev.com/login-page" },
      { src: "assets/projects/rawnq/dashboard.png", captionEn: "Analytics dashboard", captionAr: "لوحة التحليلات", path: "rawnq.nahrdev.com/apps" },
      { src: "assets/projects/rawnq/bookings-table.png", captionEn: "Bookings table", captionAr: "جدول الحجوزات", path: "rawnq.nahrdev.com/app/bookings-table-view" },
      { src: "assets/projects/rawnq/pricing.png", captionEn: "Vendor pricing plans", captionAr: "خطط أسعار المزوّدين", path: "rawnq.nahrdev.com/pricing" }
    ]
  },
  {
    title: "KUBA",
    tags: ["Laravel", "Repository Pattern", "Bilingual CMS"],
    descEn: "Delivery company website with a fully dynamic admin dashboard driving all front-end content. 18+ CRUD modules, bilingual JSON-based translatable fields, and auto-generated per-action permissions.",
    descAr: "موقع شركة شحن وتوصيل بلوحة تحكم ديناميكية بالكامل. أكثر من 18 موديول CRUD، محتوى ثنائي اللغة مبني على JSON، وصلاحيات مولّدة تلقائيًا لكل إجراء.",
    link: "https://kuba.nahrdev.com/",
    images: [
      { src: "assets/projects/kuba/landing.jpg", captionEn: "Homepage (full page)", captionAr: "الصفحة الرئيسية (كاملة)", path: "kuba.nahrdev.com" },
      { src: "assets/projects/kuba/services.jpg", captionEn: "Services page (full page)", captionAr: "صفحة الخدمات (كاملة)", path: "kuba.nahrdev.com/services" },
      { src: "assets/projects/kuba/contact.jpg", captionEn: "Contact page", captionAr: "صفحة التواصل", path: "kuba.nahrdev.com/contact" },
      { src: "assets/projects/kuba/admin-dashboard.jpg", captionEn: "Admin dashboard", captionAr: "لوحة تحكم الأدمن", path: "kuba.nahrdev.com/admin/home" },
      { src: "assets/projects/kuba/admin-homepage-editor.jpg", captionEn: "Homepage content editor (full page)", captionAr: "محرر محتوى الصفحة الرئيسية (كامل)", path: "kuba.nahrdev.com/admin/homeSetting" },
      { src: "assets/projects/kuba/admin-services.jpg", captionEn: "Services management", captionAr: "إدارة الخدمات", path: "kuba.nahrdev.com/admin/service" }
    ]
  },
  {
    title: "Book Iraq",
    tags: ["Laravel", "Vue.js", "Cron Jobs", "Payments"],
    descEn: "Travel and tourism booking platform for hotels, flights, cars, taxis and attractions. Multi-language support, secure payments (Visa/PayPal/Apple Pay/Google Pay), and automated booking-expiration cron jobs.",
    descAr: "منصة حجز سياحة وسفر للفنادق والطيران والسيارات والتاكسي والمعالم السياحية. دعم متعدد اللغات، مدفوعات آمنة (Visa/PayPal/Apple Pay/Google Pay)، وCron Jobs تلقائية لانتهاء صلاحية الحجوزات.",
    link: "https://booking.nahrdev.com/",
    images: [
      { src: "assets/projects/book-iraq/landing.jpg", captionEn: "Homepage (full page)", captionAr: "الصفحة الرئيسية (كاملة)", path: "booking.nahrdev.com" },
      { src: "assets/projects/book-iraq/hotel-search.jpg", captionEn: "Hotel search results", captionAr: "نتائج البحث عن الفنادق", path: "booking.nahrdev.com/hotel" },
      { src: "assets/projects/book-iraq/admin-dashboard.png", captionEn: "Admin dashboard", captionAr: "لوحة تحكم الأدمن", path: "booking.nahrdev.com/admin" },
      { src: "assets/projects/book-iraq/admin-hotels.png", captionEn: "Hotel management", captionAr: "إدارة الفنادق", path: "booking.nahrdev.com/admin/module/hotel" },
      { src: "assets/projects/book-iraq/admin-pages.png", captionEn: "Page builder", captionAr: "إدارة الصفحات", path: "booking.nahrdev.com/admin/module/page" }
    ]
  },
  {
    title: "Trimly",
    tags: ["Laravel", "WebSockets", "Multi-app"],
    descEn: "Beauty services marketplace with a responsive website and two mobile apps (User & Freelancer). Real-time notifications, freelancer wallet system, subscription management, and a revenue analytics dashboard.",
    descAr: "ماركت بليس لخدمات التجميل بموقع متجاوب وتطبيقين موبايل (مستخدم وفريلانسر). إشعارات لحظية، محفظة إلكترونية للفريلانسرز، إدارة اشتراكات، ولوحة تحليلات أداء.",
    images: [
      { src: "assets/projects/trimly/landing.jpg", captionEn: "Homepage (full page)", captionAr: "الصفحة الرئيسية (كاملة)", path: "trimlydev.nahrdev.com" },
      { src: "assets/projects/trimly/login.jpg", captionEn: "Admin login", captionAr: "تسجيل دخول الأدمن", path: "trimlydev.nahrdev.com/login-page" },
      { src: "assets/projects/trimly/register.png", captionEn: "Vendor registration", captionAr: "تسجيل حساب مزوّد جديد", path: "trimlydev.nahrdev.com/register" },
      { src: "assets/projects/trimly/dashboard.png", captionEn: "Performance analytics dashboard", captionAr: "لوحة تحليلات الأداء", path: "trimlydev.nahrdev.com/apps" },
      { src: "assets/projects/trimly/bookings-calendar.png", captionEn: "Booking calendar", captionAr: "تقويم الحجوزات", path: "trimlydev.nahrdev.com/app/bookings" },
      { src: "assets/projects/trimly/vendors.png", captionEn: "Vendor management", captionAr: "إدارة المزوّدين", path: "trimlydev.nahrdev.com/app/user" }
    ],
    link: "https://trimlydev.nahrdev.com/"
  },
  {
    title: "MoveNow",
    tags: ["Laravel", "Stripe", "WebSockets", "Firebase"],
    descEn: "Ride-sharing and delivery platform with a REST API for two mobile apps (User & Provider). Real-time trip management via WebSockets, Stripe payments, and provider onboarding with document verification.",
    descAr: "منصة نقل ركاب وتوصيل بـ REST API لتطبيقين (مستخدم ومزوّد خدمة). إدارة رحلات لحظية عبر WebSockets، مدفوعات Stripe، وتسجيل مزوّدي خدمة بتوثيق مستندات.",
    link: "https://movenow.nahrdev.com/"
  },
  {
    title: "Motah",
    tags: ["Laravel", "Firebase", "Real-time Tracking"],
    descEn: "Real-time service booking platform with two mobile apps and an admin dashboard. Live worker tracking, promo codes, reward points, custom fields for team requests, and mutual user/worker ratings.",
    descAr: "منصة حجز خدمات لحظية بتطبيقين موبايل ولوحة تحكم. تتبّع عمال لحظي، أكواد خصم، نقاط مكافآت، حقول مخصصة لطلبات الفرق، وتقييم متبادل بين المستخدم والعامل.",
    link: "https://motah.nahrdev.com/"
  },
  {
    title: "Iplace24",
    tags: ["Laravel", "MySQL", "AJAX"],
    descEn: "Car maintenance platform with a web dashboard and two mobile apps (User & Vendor). Nearest service-station discovery, car rental during repair time, remote key drop-off, and secure payments.",
    descAr: "منصة صيانة سيارات بلوحة تحكم وتطبيقين (مستخدم ومزوّد خدمة). اكتشاف أقرب محطات الخدمة، تأجير سيارة وقت الصيانة، تسليم مفاتيح عن بُعد، ومدفوعات آمنة.",
    link: "https://Iplace24.nahrdev.com/"
  },
  {
    title: "Nesba",
    tags: ["Laravel", "MySQL", "CRUD"],
    descEn: "Educational platform for managing courses and student enrollments — admins create, update and delete courses while tracking student enrollment data.",
    descAr: "منصة تعليمية لإدارة الكورسات وتسجيلات الطلاب — يقدر الأدمن يضيف ويعدّل ويحذف الكورسات ويتابع بيانات تسجيل الطلاب.",
    link: "https://Nesba.nahrdev.com/"
  },
  {
    title: "Wawan GYM",
    tags: ["CakePHP", "MySQL", "AJAX"],
    descEn: "Gym management dashboard for subscriptions, memberships, coaches, branches and activities, paired with a mobile app offering dynamic, PDF-exportable meal and workout plans for users and coaches.",
    descAr: "لوحة تحكم لإدارة صالة جيم (اشتراكات، عضويات، مدربين، فروع، أنشطة)، مع تطبيق موبايل بخطط غذائية وتمرينية ديناميكية قابلة للتصدير كـ PDF للمستخدمين والمدربين.",
    link: null
  },
  {
    title: "HYDRO",
    tags: ["Laravel", "Repository Pattern", "AJAX"],
    descEn: "Corporate website for an Egyptian aluminum manufacturer exporting to 40+ countries. Custom admin dashboard with full CRUD over all site content, multilingual system, and dynamic media management.",
    descAr: "موقع شركة تصدير ألومنيوم مصرية بتصدّر لأكثر من 40 دولة. لوحة تحكم مخصصة بصلاحيات CRUD كاملة على كل محتوى الموقع، نظام متعدد اللغات، وإدارة وسائط ديناميكية.",
    link: "https://hydro-metal.org/"
  }
];

// ---- i18n ----
const translations = {
  en: {
    nav_home: "Home", nav_about: "About", nav_services: "Services", nav_experience: "Experience",
    nav_skills: "Skills", nav_projects: "Projects", nav_education: "Education", nav_contact: "Contact",
    hero_available: "Available for Work",
    hero_eyebrow: "Hi, I'm",
    hero_name: "Mohamed Essam",
    hero_lead: `Full-Stack Software Engineer building secure, scalable web platforms with
        <strong>PHP, Laravel &amp; Vue.js</strong> — REST APIs, real-time features, and clean modular architecture
        for booking, marketplace and on-demand service products used across mobile apps and dashboards.`,
    hero_cta_projects: "View Projects",
    hero_cta_contact: "Get In Touch",
    hero_cv_aria: "Download CV",
    stat_projects: "Projects Delivered",
    stat_years: "Years Experience",
    stat_apps: "Mobile Apps Powered",
    stat_gateways: "Payment Gateways",
    about_title: "About Me",
    about_text: `Enthusiastic and dedicated software engineer with a strong foundation in web development and a solid
        understanding of core cloud computing concepts (Amazon EC2, S3, VPC, IAM). I'm passionate about building
        efficient, scalable server-side solutions and keeping up with industry best practices — while collaborating
        effectively in cross-functional teams to ship high-quality, optimized code.`,
    fact_location_label: "Location", fact_location_value: "Cairo, Egypt",
    fact_role_label: "Role", fact_role_value: "Software Engineer",
    fact_focus_label: "Focus", fact_focus_value: "Full-Stack / Laravel & Vue.js",
    fact_experience_label: "Experience", fact_experience_value: "2024 – Present",
    services_title: "What I Do",
    svc1_title: "REST API Development",
    svc1_desc: "Designing secure, well-tested Laravel APIs (Passport/Sanctum auth) that power mobile and web clients.",
    svc2_title: "Database Design",
    svc2_desc: "Modeling and optimizing MySQL schemas — indexing, relationships, and query tuning for scale.",
    svc3_title: "Real-Time Features",
    svc3_desc: "Live chat, notifications and tracking with Laravel Reverb, WebSockets and Firebase.",
    svc4_title: "Payments & Messaging",
    svc4_desc: "Stripe, PayPal, Razorpay, Kashier and MyFatoorah payments, plus Twilio SMS notifications end-to-end.",
    experience_title: "Experience",
    exp_role: "Software Engineer",
    exp_date: "June 2024 – Present",
    exp_company: "Nahr Development Software and Marketing Company — Remote",
    exp_li1: "Developing and maintaining secure, scalable web applications using PHP and Laravel.",
    exp_li2: "Designing and optimizing database schemas for performance and scalability.",
    exp_li3: "Building efficient RESTful APIs and integrating advanced Laravel features.",
    exp_li4: "Applying clean architecture principles to ensure code is reusable, testable, and maintainable.",
    skills_title: "Skills",
    skill_backend_title: "Back-End", skill_frontend_title: "Front-End", skill_tools_title: "Tools & Cloud",
    projects_title: "Projects",
    filter_all: "All",
    education_title: "Education & Certifications",
    edu1_title: "Bachelor of Computer Science",
    edu1_sub: "Higher Technological Institute, 10th of Ramadan City",
    edu2_title: "PHP, OOP, Laravel, MySQL, RESTful API",
    edu2_sub: "CLS Learning Solutions",
    edu3_title: "PHP, OOP, Laravel, MySQL, RESTful API",
    edu3_sub: "Udemy — Piotr Jura",
    contact_title: "Get In Touch",
    contact_text: "Open to full-stack / backend opportunities with Laravel & Vue.js and interesting collaborations. Feel free to reach out.",
    footer_copy: "©",
    footer_text: "Mohamed Essam. Built with HTML, CSS & vanilla JS.",
    view_project: "View Project →"
  },
  ar: {
    nav_home: "الرئيسية", nav_about: "نبذة عني", nav_services: "الخدمات", nav_experience: "الخبرة",
    nav_skills: "المهارات", nav_projects: "المشاريع", nav_education: "التعليم", nav_contact: "تواصل",
    hero_available: "متاح للعمل",
    hero_eyebrow: "أهلاً، أنا",
    hero_name: "محمد عصام",
    hero_lead: `مهندس برمجيات Full-Stack، بأبني منصات ويب آمنة وقابلة للتوسع باستخدام
        <strong>PHP وLaravel وVue.js</strong> — REST APIs، خصائص لحظية، وهيكلة معمارية نظيفة لمنتجات الحجز
        والماركت بليس والخدمات الفورية اللي بتتستخدم في تطبيقات الموبايل ولوحات التحكم.`,
    hero_cta_projects: "شوف المشاريع",
    hero_cta_contact: "تواصل معايا",
    hero_cv_aria: "تحميل السيرة الذاتية",
    stat_projects: "مشروع منجز",
    stat_years: "سنين خبرة",
    stat_apps: "تطبيق موبايل مدعوم",
    stat_gateways: "بوابة دفع",
    about_title: "نبذة عني",
    about_text: `مهندس برمجيات شغوف وطموح، عنده أساس قوي في تطوير الويب وفهم جيد لمفاهيم الحوسبة السحابية
        الأساسية (Amazon EC2, S3, VPC, IAM). بحب أبني حلول Server-side فعّالة وقابلة للتوسع، وبتابع أحدث
        الممارسات في المجال باستمرار — مع القدرة على التعاون الفعّال مع فرق متعددة التخصصات لتسليم كود
        عالي الجودة ومُحسّن الأداء.`,
    fact_location_label: "الموقع", fact_location_value: "القاهرة، مصر",
    fact_role_label: "الدور", fact_role_value: "مهندس برمجيات",
    fact_focus_label: "التخصص", fact_focus_value: "Full-Stack / Laravel وVue.js",
    fact_experience_label: "الخبرة", fact_experience_value: "2024 – حتى الآن",
    services_title: "خدماتي",
    svc1_title: "تطوير REST APIs",
    svc1_desc: "تصميم APIs آمنة ومُختبرة بلارافيل (Passport/Sanctum) بتشغّل تطبيقات الموبايل والويب.",
    svc2_title: "تصميم قواعد البيانات",
    svc2_desc: "تصميم وتحسين قواعد بيانات MySQL — Indexing، العلاقات، وتحسين الاستعلامات لدعم التوسع.",
    svc3_title: "الخصائص اللحظية",
    svc3_desc: "شات لحظي، إشعارات، وتتبّع باستخدام Laravel Reverb وWebSockets وFirebase.",
    svc4_title: "المدفوعات والرسائل",
    svc4_desc: "دمج بوابات دفع Stripe وPayPal وRazorpay وKashier وMyFatoorah، بالإضافة لإشعارات SMS عبر Twilio بشكل كامل.",
    experience_title: "الخبرة العملية",
    exp_role: "مهندس برمجيات",
    exp_date: "يونيو 2024 – حتى الآن",
    exp_company: "شركة نهر للتطوير البرمجي والتسويق — عن بُعد",
    exp_li1: "تطوير وصيانة تطبيقات ويب آمنة وقابلة للتوسع باستخدام PHP وLaravel.",
    exp_li2: "تصميم وتحسين مخططات قواعد البيانات لتحسين الأداء والقابلية للتوسع.",
    exp_li3: "بناء RESTful APIs فعّالة ودمج ميزات Laravel المتقدمة.",
    exp_li4: "تطبيق مبادئ الهيكلة النظيفة لضمان كود قابل لإعادة الاستخدام والاختبار والصيانة.",
    skills_title: "المهارات",
    skill_backend_title: "الباك اند", skill_frontend_title: "الفرونت اند", skill_tools_title: "الأدوات والكلاود",
    projects_title: "المشاريع",
    filter_all: "الكل",
    education_title: "التعليم والشهادات",
    edu1_title: "بكالوريوس علوم حاسب",
    edu1_sub: "المعهد العالي للتكنولوجيا، العاشر من رمضان",
    edu2_title: "PHP, OOP, Laravel, MySQL, RESTful API",
    edu2_sub: "CLS Learning Solutions",
    edu3_title: "PHP, OOP, Laravel, MySQL, RESTful API",
    edu3_sub: "Udemy — Piotr Jura",
    contact_title: "تواصل معايا",
    contact_text: "متاح لفرص عمل Full-Stack / باك اند بـ Laravel وVue.js وأي تعاون مثير للاهتمام. تواصل معايا في أي وقت.",
    footer_copy: "©",
    footer_text: "محمد عصام. الموقع مبني بـ HTML وCSS وJavaScript خالص.",
    view_project: "شوف المشروع",
    lang_toggle_label: "English"
  }
};

const rolesByLang = {
  en: ["Full-Stack Software Engineer", "Laravel & Vue.js Developer", "REST API Builder", "Real-time Systems Engineer"],
  ar: ["مهندس برمجيات Full-Stack", "مطوّر Laravel وVue.js", "مطوّر REST APIs", "مهندس أنظمة لحظية"]
};

let currentLang = localStorage.getItem("lang") || "en";
let roleIndex = 0, charIndex = 0, deleting = false, typingTimer = null;

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  const dict = translations[lang];

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.textContent = dict[key];
  });
  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    const key = el.getAttribute("data-i18n-html");
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });
  document.querySelectorAll("[data-i18n-aria]").forEach(el => {
    const key = el.getAttribute("data-i18n-aria");
    if (dict[key] !== undefined) el.setAttribute("aria-label", dict[key]);
  });

  document.getElementById("langSelect").value = lang;

  renderProjects(currentActiveFilter);

  roleIndex = 0; charIndex = 0; deleting = false;
  if (typingTimer) clearTimeout(typingTimer);
  document.getElementById("typedRole").textContent = "";
  typeLoop();
}

// ---- Render projects + filters ----
const projectsGrid = document.getElementById("projectsGrid");
const filtersWrap = document.getElementById("projectFilters");
let currentActiveFilter = "all";

function renderProjects(filter) {
  currentActiveFilter = filter;
  projectsGrid.innerHTML = "";
  const filtered = filter === "all"
    ? projects
    : projects.filter(p => p.tags.includes(filter));

  filtered.forEach(p => {
    const desc = currentLang === "ar" ? p.descAr : p.descEn;
    const card = document.createElement("article");
    card.className = "project-card";

    const hasGallery = p.images && p.images.length > 0;
    const galleryHtml = hasGallery
      ? `<button type="button" class="project-cover" aria-label="${currentLang === "ar" ? "شوف صور المشروع" : "View project screenshots"}">
           <span class="mockup-chrome mockup-chrome--mini">
             <span class="mockup-dot red"></span>
             <span class="mockup-dot yellow"></span>
             <span class="mockup-dot green"></span>
           </span>
           <img src="${p.images[0].src}" alt="${p.title}" loading="lazy">
           <span class="gallery-badge">🖼 ${p.images.length}</span>
         </button>`
      : "";

    card.innerHTML = `
      ${galleryHtml}
      <h3>${p.title}</h3>
      <p>${desc}</p>
      <div class="project-tags">${p.tags.map(t => `<span>${t}</span>`).join("")}</div>
      ${p.link ? `<a class="project-link" href="${p.link}" target="_blank" rel="noopener">${translations[currentLang].view_project}</a>` : ""}
    `;

    if (hasGallery) {
      card.querySelector(".project-cover").addEventListener("click", () => openLightbox(p.images, 0));
    }

    projectsGrid.appendChild(card);
  });
}

// ---- Lightbox ----
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxCaption = document.getElementById("lightboxCaption");
const lightboxCounter = document.getElementById("lightboxCounter");
const lightboxClose = document.getElementById("lightboxClose");
const lightboxPrev = document.getElementById("lightboxPrev");
const lightboxNext = document.getElementById("lightboxNext");
const lightboxUrl = document.getElementById("lightboxUrl");

let galleryImages = [];
let galleryIndex = 0;

function openLightbox(images, index) {
  galleryImages = images;
  galleryIndex = index;
  updateLightbox();
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function updateLightbox() {
  const img = galleryImages[galleryIndex];
  lightboxImg.src = img.src;
  const caption = currentLang === "ar" ? img.captionAr : img.captionEn;
  lightboxImg.alt = caption;
  lightboxCaption.textContent = caption;
  lightboxUrl.textContent = img.path || "";
  lightboxCounter.textContent = `${galleryIndex + 1} / ${galleryImages.length}`;
  lightboxImg.parentElement.scrollTop = 0;
  const multi = galleryImages.length > 1;
  lightboxPrev.style.display = multi ? "flex" : "none";
  lightboxNext.style.display = multi ? "flex" : "none";
}

function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function showPrevImage() {
  galleryIndex = (galleryIndex - 1 + galleryImages.length) % galleryImages.length;
  updateLightbox();
}

function showNextImage() {
  galleryIndex = (galleryIndex + 1) % galleryImages.length;
  updateLightbox();
}

lightboxClose.addEventListener("click", closeLightbox);
lightboxPrev.addEventListener("click", showPrevImage);
lightboxNext.addEventListener("click", showNextImage);
lightbox.addEventListener("click", (e) => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener("keydown", (e) => {
  if (!lightbox.classList.contains("open")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft") showPrevImage();
  if (e.key === "ArrowRight") showNextImage();
});

function buildFilters() {
  const tagSet = new Set();
  projects.forEach(p => p.tags.forEach(t => tagSet.add(t)));
  const commonTags = ["Laravel", "Vue.js", "Vue.js 3", "WebSockets", "Firebase", "MySQL"].filter(t => tagSet.has(t));

  commonTags.forEach(tag => {
    const btn = document.createElement("button");
    btn.className = "filter-btn";
    btn.dataset.filter = tag;
    btn.textContent = tag;
    filtersWrap.appendChild(btn);
  });

  filtersWrap.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    filtersWrap.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderProjects(btn.dataset.filter);
  });
}

buildFilters();

// ---- Language dropdown ----
document.getElementById("langSelect").addEventListener("change", (e) => {
  applyLanguage(e.target.value);
});

// ---- Mobile nav toggle ----
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
navToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks.querySelectorAll("a").forEach(a => a.addEventListener("click", () => navLinks.classList.remove("open")));

// ---- Active nav link on scroll ----
const sections = document.querySelectorAll("main section[id]");
const navAnchors = document.querySelectorAll(".nav-links a");

function setActiveNav() {
  let current = sections[0].id;
  const scrollPos = window.scrollY + 120;
  sections.forEach(sec => {
    if (scrollPos >= sec.offsetTop) current = sec.id;
  });
  navAnchors.forEach(a => {
    a.classList.toggle("active", a.getAttribute("href") === `#${current}`);
  });
}
window.addEventListener("scroll", setActiveNav);
setActiveNav();

// ---- Scroll reveal ----
const revealEls = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in-view");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => observer.observe(el));

// ---- Typing effect for role ----
function typeLoop() {
  const roles = rolesByLang[currentLang];
  const current = roles[roleIndex];
  const typedEl = document.getElementById("typedRole");
  if (!deleting) {
    charIndex++;
    typedEl.textContent = current.slice(0, charIndex);
    if (charIndex === current.length) {
      deleting = true;
      typingTimer = setTimeout(typeLoop, 1400);
      return;
    }
  } else {
    charIndex--;
    typedEl.textContent = current.slice(0, charIndex);
    if (charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }
  typingTimer = setTimeout(typeLoop, deleting ? 40 : 70);
}

// ---- Back to top ----
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  backToTop.classList.toggle("visible", window.scrollY > 400);
});
backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

// ---- Footer year ----
document.getElementById("year").textContent = new Date().getFullYear();

// ---- Init ----
applyLanguage(currentLang);
