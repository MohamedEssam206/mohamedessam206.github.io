// ---- Data: projects ----
const projects = [
  {
    title: "Qarar",
    tags: ["Laravel 12", "Passport", "Reverb", "MyFatoorah"],
    desc: "Full-stack Laravel 12 healthcare booking platform with a multilingual admin dashboard and REST API. Dynamic role & permission system, charity committee workflows, video/voice consultations, MyFatoorah payments, and real-time chat via Laravel Reverb.",
    link: "https://qarar.nahrdev.com/"
  },
  {
    title: "Rawnq",
    tags: ["Laravel", "Vue.js 3", "Multi-tenant", "Wallet"],
    desc: "Multi-vendor beauty services marketplace with 35+ independent modules. Wallet system, granular RBAC, multi-language/currency support, real-time scheduling, and multi-gateway payments (Stripe, PayPal, Razorpay, Kashier).",
    link: "https://rawnq.nahrdev.com/"
  },
  {
    title: "KUBA",
    tags: ["Laravel", "Repository Pattern", "Bilingual CMS"],
    desc: "Delivery company website with a fully dynamic admin dashboard driving all front-end content. 18+ CRUD modules, bilingual JSON-based translatable fields, and auto-generated per-action permissions.",
    link: "https://kuba.nahrdev.com/"
  },
  {
    title: "Book Iraq",
    tags: ["Laravel", "Vue.js", "Cron Jobs", "Payments"],
    desc: "Travel and tourism booking platform for hotels, flights, cars, taxis and attractions. Multi-language support, secure payments (Visa/PayPal/Apple Pay/Google Pay), and automated booking-expiration cron jobs.",
    link: "https://booking.nahrdev.com/"
  },
  {
    title: "Trimly",
    tags: ["Laravel", "WebSockets", "Multi-app"],
    desc: "Beauty services marketplace with a responsive website and two mobile apps (User & Freelancer). Real-time notifications, freelancer wallet system, subscription management, and a revenue analytics dashboard.",
    link: "https://trimlydev.nahrdev.com/"
  },
  {
    title: "MoveNow",
    tags: ["Laravel", "Stripe", "WebSockets", "Firebase"],
    desc: "Ride-sharing and delivery platform with a REST API for two mobile apps (User & Provider). Real-time trip management via WebSockets, Stripe payments, and provider onboarding with document verification.",
    link: "https://movenow.nahrdev.com/"
  },
  {
    title: "Motah",
    tags: ["Laravel", "Firebase", "Real-time Tracking"],
    desc: "Real-time service booking platform with two mobile apps and an admin dashboard. Live worker tracking, promo codes, reward points, custom fields for team requests, and mutual user/worker ratings.",
    link: "https://motah.nahrdev.com/"
  },
  {
    title: "Iplace24",
    tags: ["Laravel", "MySQL", "AJAX"],
    desc: "Car maintenance platform with a web dashboard and two mobile apps (User & Vendor). Nearest service-station discovery, car rental during repair time, remote key drop-off, and secure payments.",
    link: "https://Iplace24.nahrdev.com/"
  },
  {
    title: "Nesba",
    tags: ["Laravel", "MySQL", "CRUD"],
    desc: "Educational platform for managing courses and student enrollments — admins create, update and delete courses while tracking student enrollment data.",
    link: "https://Nesba.nahrdev.com/"
  },
  {
    title: "Wawan GYM",
    tags: ["CakePHP", "MySQL", "AJAX"],
    desc: "Gym management dashboard for subscriptions, memberships, coaches, branches and activities, paired with a mobile app offering dynamic, PDF-exportable meal and workout plans for users and coaches.",
    link: null
  },
  {
    title: "HYDRO",
    tags: ["Laravel", "Repository Pattern", "AJAX"],
    desc: "Corporate website for an Egyptian aluminum manufacturer exporting to 40+ countries. Custom admin dashboard with full CRUD over all site content, multilingual system, and dynamic media management.",
    link: "https://hydro-metal.org/"
  }
];

// ---- Render projects + filters ----
const projectsGrid = document.getElementById("projectsGrid");
const filtersWrap = document.getElementById("projectFilters");

function renderProjects(filter) {
  projectsGrid.innerHTML = "";
  const filtered = filter === "all"
    ? projects
    : projects.filter(p => p.tags.includes(filter));

  filtered.forEach(p => {
    const card = document.createElement("article");
    card.className = "project-card";
    card.innerHTML = `
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      <div class="project-tags">${p.tags.map(t => `<span>${t}</span>`).join("")}</div>
      ${p.link ? `<a class="project-link" href="${p.link}" target="_blank" rel="noopener">View Project →</a>` : ""}
    `;
    projectsGrid.appendChild(card);
  });
}

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
renderProjects("all");

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
const roles = [
  "Software Engineer",
  "Laravel Backend Developer",
  "REST API Builder",
  "Real-time Systems Engineer"
];
const typedEl = document.getElementById("typedRole");
let roleIndex = 0, charIndex = 0, deleting = false;

function typeLoop() {
  const current = roles[roleIndex];
  if (!deleting) {
    charIndex++;
    typedEl.textContent = current.slice(0, charIndex);
    if (charIndex === current.length) {
      deleting = true;
      setTimeout(typeLoop, 1400);
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
  setTimeout(typeLoop, deleting ? 40 : 70);
}
typeLoop();

// ---- Back to top ----
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  backToTop.classList.toggle("visible", window.scrollY > 400);
});
backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

// ---- Footer year ----
document.getElementById("year").textContent = new Date().getFullYear();
