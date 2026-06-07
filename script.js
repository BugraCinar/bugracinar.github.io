const portfolio = {
  tr: {
    ui: {
      navAbout: "Hakkımda",
      navProjects: "Projeler",
      navExperience: "Deneyim",
      navContact: "İletişim",
      heroName: "Ahmet Buğrahan Çınar",
      eyebrow: "Java Backend Developer",
      heroTitle: "Gerçek zamanlı, güvenli ve ölçeklenebilir backend sistemleri geliştiriyorum.",
      aboutText:
        "Java Spring Boot ile güvenli API mimarileri, gerçek zamanlı WebSocket akışları ve veri odaklı servisler geliştiriyorum. Hastane, fintech ve AI projelerinde backend tarafında problemleri sade, test edilebilir ve sürdürülebilir yapılara dönüştürmeye odaklanıyorum.",
      viewProjects: "Projeler",
      contactMe: "Bana Ulaş",
      profileRole: "Spring Boot, WebSocket, Security, AI entegrasyonları",
      statProjects: "Proje",
      statDomains: "Kurumsal deneyim",
      statFocus: "Ana odak",
      projectsEyebrow: "Öne Çıkan Projeler",
      projectsTitle: "Projeler",
      projectsIntro:
        "Backend ağırlıklı çalışmalarımın yanında AI, admin panel, görüntü işleme, veritabanı ve sistem programlama projeleri.",
      filterAll: "Tümü",
      filterDatabase: "Veritabanı",
      filterSystem: "Sistem",
      experienceEyebrow: "Saha ve kurum deneyimi",
      experienceTitle: "Deneyim",
      experienceIntro:
        "Gerçek kullanıcı akışları, canlı bildirimler ve kurum içi sistemler etrafında şekillenen backend çalışmaları.",
      contactEyebrow: "Contact me",
      contactTitle: "Private projeler ve iş birlikleri için konuşabiliriz.",
      contactText:
        "Detaylarını public paylaşamadığım hastane, fintech ve AI tabanlı projeler hakkında daha fazla bilgi almak istersen bana e-posta veya LinkedIn üzerinden ulaşabilirsin.",
      footerText: "All rights reserved.",
      public: "Public",
      private: "Private",
      github: "GitHub Repo",
      pendingGithub: "GitHub linki eklenecek",
      contactForMore: "Detay için iletişime geç"
    },
    projects: [
      {
        title: "User and Role Management System (RBAC)",
        status: "public",
        category: "backend",
        summary:
          "Spring Security ve JWT ile güvenli, stateless authentication/authorization altyapısı.",
        points: [
          "Dinamik rol ve granular permission yönetimi geliştirdim.",
          "Brute-force koruması, e-posta doğrulama ve güvenli şifre sıfırlama akışları tasarladım.",
          "Swagger/OpenAPI ile frontend tüketimine hazır API dokümantasyonu oluşturdum."
        ],
        tags: ["Java", "Spring Boot", "JWT", "Swagger"],
        repo: "https://github.com/BugraCinar/UserRoleManagement"
      },
      {
        title: "Indoor Navigation System Backend",
        status: "public",
        category: "backend",
        summary:
          "BLE beacon verilerinden konum hesaplayan gerçek zamanlı indoor navigation backend'i.",
        points: [
          "WebSocket ile anlık lokasyon senkronizasyonu kurdum.",
          "RSSI değerleri üzerinden trilateration algoritmaları uyguladım.",
          "H2 In-Memory DB ve Docker ile hızlı test/deploy ortamı hazırladım."
        ],
        tags: ["Java", "WebSocket", "BLE", "Docker"],
        repo: "https://github.com/BugraCinar/Navigation-Backend"
      },
      {
        title: "Blockchain Security Camera Platform",
        status: "public",
        category: "backend",
        summary:
          "Görüntü verisini hash ve custom PoW blockchain ledger ile güvenceye alan dağıtık platform.",
        points: [
          "Node-worker mimarisiyle image processing ve cryptographic hashing işlerini dağıttım.",
          "Worker instance'ları ile ana node arasında çift yönlü WebSocket iletişimi kurdum.",
          "Ledger height, network health ve mining status için admin REST endpointleri geliştirdim."
        ],
        tags: ["Java", "Blockchain", "PoW", "WebSocket"],
        repo: "https://github.com/BugraCinar/BLOCKCHAINSECURITYCAM"
      },
      {
        title: "Retinal Disease Classifier",
        status: "public",
        category: "ai",
        summary:
          "Fundus görüntülerinden 43 retinal durumu tespit eden multi-label deep learning sistemi.",
        points: [
          "ConvNeXt-Tiny mimarisiyle transfer learning ve fine-tuning uyguladım.",
          "Test sürecinde yüzde 98.5 accuracy elde ettim.",
          "Class imbalance için Focal Loss ve Weighted Random Sampler kullandım."
        ],
        tags: ["Python", "PyTorch", "ConvNeXt", "AI"],
        repo: "https://github.com/Enesfreigthinus/retinal-disease-classifier"
      },
      {
        title: "Hospital Emergency Call & Information System",
        status: "private",
        category: "backend",
        summary:
          "Kanuni Sultan Süleyman Hastanesi için acil renk kodu ve hemşire çağrı backend sistemi.",
        points: [
          "REST API ve gerçek zamanlı bildirim servisleri geliştirdim.",
          "Android TV bilgi ekranları ve personel mobil cihazlarıyla entegrasyon sağladım."
        ],
        tags: ["Java", "Spring Boot", "WebSocket", "Healthcare"]
      },
      {
        title: "Tahsilat Agent Backend",
        status: "private",
        category: "backend",
        summary:
          "SME odaklı AI Collection Agent uygulaması için Java REST API tabanlı tahsilat otomasyon backend'i.",
        points: [
          "Kullanıcının yüklediği fatura verilerine göre borçlu arama ve tahsilat sürecini yöneten servis akışları tasarladım.",
          "Invoice, InvoiceCall, CallAnalysis ve CallArtifact gibi modellerle çağrı, fatura ve analiz kayıtlarını takip eden domain yapısı kurdum.",
          "Kimlik doğrulama ve hassas endpoint erişimleri için Argon2, salt ve pepper yaklaşımıyla güvenlik katmanını güçlendirdim."
        ],
        tags: ["Java", "REST API", "AI Agent", "Argon2"]
      },
      {
        title: "Tahsilat Agent Admin Panel",
        status: "private",
        category: "frontend",
        summary:
          "Tahsilat Agent operasyonlarını takip etmek ve yönetmek için tasarlanan admin panel arayüzü.",
        points: [
          "React ve TypeScript ile kullanıcı, fatura, çağrı analizi ve aktivite loglarını izlemeye uygun panel yapısı kurguladım.",
          "Admin, AuthenticationErrorLog, SensitiveEndpointAccessLog ve UserUsage verileri için yönetim ve raporlama ekranları planladım.",
          "Backend REST API'leriyle entegre çalışacak, operasyon ekibinin tahsilat akışlarını hızlıca takip edebileceği dashboard deneyimine odaklandım."
        ],
        tags: ["React", "TypeScript", "Admin Panel", "Dashboard"]
      },
      {
        title: "Fabric Defect Detection System",
        status: "public",
        category: "system",
        summary:
          "Ubuntu üzerinde C++ ile geliştirilen yüksek performanslı kumaş hata tespit aracı.",
        points: [
          "Multiprocessing ve multithreading ile paralel image analysis akışları kurdum.",
          "Büyük görüntü veri setleri için bellek yönetimi ve sistem kaynak erişimini optimize ettim."
        ],
        tags: ["C++", "Ubuntu", "Multithreading", "Image Processing"],
        repo: "https://github.com/BugraCinar/Fabric_Defect_Detection"
      },
      {
        title: "Sign Language to Speech",
        status: "private",
        category: "ai",
        summary:
          "İşaret dilini konuşmaya, konuşmayı işaret diline dönüştürmeyi hedefleyen gerçek zamanlı AI sistemi.",
        points: [
          "Video stream üzerinde landmark detection ile el ve vücut hareketlerini analiz ediyorum.",
          "Proje konsepti ve teknik çerçevesiyle Teknofest fikir şampiyonluğu kazandı."
        ],
        tags: ["Deep Learning", "Computer Vision", "Teknofest", "Realtime"]
      },
      {
        title: "Garage Management System",
        status: "public",
        category: "backend",
        summary:
          "Staj sürecinde Java ve MySQL ile geliştirilen otopark yönetim backend sistemi.",
        points: [
          "Araç kayıtları ve park alanı durumları için CRUD REST API geliştirdim.",
          "Core garage logic ve data consistency için unit testler yazdım."
        ],
        tags: ["Java", "MySQL", "REST API", "Unit Test"],
        repo: "https://github.com/BugraCinar/GarageManagement"
      },
      {
        title: "Football Stats Management System",
        status: "public",
        category: "database",
        summary:
          "Lig, oyuncu, fikstür ve maç detaylarını yöneten kapsamlı MySQL veritabanı projesi.",
        points: [
          "İstatistik güncellemeleri için SQL trigger ve advanced query yapıları geliştirdim.",
          "Referential integrity ve detaylı maç analizi odaklı ilişkisel şema tasarladım."
        ],
        tags: ["MySQL", "SQL", "Triggers", "DBMS"],
        repo: "https://github.com/BugraCinar/footballstats-sql"
      },
      {
        title: "Football Betting Application",
        status: "public",
        category: "backend",
        summary:
          "Java OOP projesi olarak geliştirilen masaüstü spor bahis simülasyonu.",
        points: [
          "Kullanıcı, maç ve bahis geçmişi verilerini File I/O ile yönettim.",
          "Uygulama akışını OOP prensipleriyle modüler şekilde kurguladım."
        ],
        tags: ["Java", "OOP", "Desktop", "File I/O"],
        repo: "https://github.com/BugraCinar/kaibet"
      }
    ],
    experience: [
      {
        role: "Java Backend Developer Student",
        company: "Tam Finans",
        date: "02/2026 - Present",
        bullets: [
          "SME odaklı AI Collection Agent, CivardaBul ve Halleder Quiz Game projeleri için Java Spring Boot, REST API ve WebSocket tabanlı backend mimarileri geliştiriyorum.",
          "AI Collection Agent tarafında sesli arama, SMS hatırlatma, yönetim paneli, takip ve raporlama akışları için API altyapısı tasarlıyorum.",
          "CivardaBul için location-based service ve real-time messaging modülleri; Halleder Quiz Game için gamified psychometric assessment ve scoring süreçleri geliştiriyorum."
        ]
      },
      {
        role: "Java Backend Developer Intern",
        company: "Kafein Technology Solutions",
        date: "07/2025 - 08/2025",
        bullets: [
          "Vodafone Vepaş ekibinde gerçek yazılım geliştirme akışlarına ve ekip içi mühendislik süreçlerine katkı sundum.",
          "Java Spring Boot, REST API ve WebSocket teknolojileriyle backend özellikleri geliştirerek sistem güvenilirliği ve iletişim performansına odaklandım.",
          "Garage Management System, User Role Management framework ve Blockchain tabanlı Camera Security platform modüllerini geliştirdim ve iyileştirdim."
        ]
      },
      {
        role: "Java Backend Developer Student",
        company: "Kanuni Sultan Süleyman Eğitim ve Araştırma Hastanesi",
        date: "03/2024 - 02/2026",
        bullets: [
          "Flutter hasta/personel mobil uygulamaları ve Java Spring Boot admin paneliyle çalışan hastane yönetim ekosisteminin backend geliştirmelerinde yer aldım.",
          "WebSocket ve REST API kullanarak Emergency Color Code, Nurse Call ve real-time staff coordination sistemleri geliştirdim.",
          "BLE Beacon donanımıyla indoor navigation entegrasyonu ve kurum içi güvenli mesajlaşma platformu üzerinde çalıştım."
        ]
      }
    ]
  },
  en: {
    ui: {
      navAbout: "About",
      navProjects: "Projects",
      navExperience: "Experience",
      navContact: "Contact",
      heroName: "Ahmet Buğrahan Çınar",
      eyebrow: "Java Backend Developer",
      heroTitle: "I build real-time, secure and scalable backend systems.",
      aboutText:
        "I develop secure API architectures, real-time WebSocket flows and data-driven services with Java Spring Boot. Across healthcare, fintech and AI projects, I focus on turning backend problems into clean, testable and maintainable systems.",
      viewProjects: "Projects",
      contactMe: "Contact Me",
      profileRole: "Spring Boot, WebSocket, Security, AI integrations",
      statProjects: "Projects",
      statDomains: "Enterprise experience",
      statFocus: "Main focus",
      projectsEyebrow: "Featured Projects",
      projectsTitle: "Projects",
      projectsIntro:
        "Backend-first work alongside AI, admin panel, image processing, database and systems programming projects.",
      filterAll: "All",
      filterDatabase: "Database",
      filterSystem: "System",
      experienceEyebrow: "Field and enterprise experience",
      experienceTitle: "Experience",
      experienceIntro:
        "Backend work shaped around real user flows, live notifications and internal enterprise systems.",
      contactEyebrow: "Contact me",
      contactTitle: "Let's talk about private projects and collaborations.",
      contactText:
        "For more details about hospital, fintech and AI-based projects that I cannot share publicly, you can reach me by email or LinkedIn.",
      footerText: "All rights reserved.",
      public: "Public",
      private: "Private",
      github: "GitHub Repo",
      pendingGithub: "GitHub link pending",
      contactForMore: "Contact for details"
    },
    projects: [
      {
        title: "User and Role Management System (RBAC)",
        status: "public",
        category: "backend",
        summary:
          "A secure, stateless authentication and authorization system built with Spring Security and JWT.",
        points: [
          "Implemented dynamic role and granular permission management.",
          "Designed brute-force protection, email verification and secure password reset workflows.",
          "Documented API endpoints with Swagger/OpenAPI for frontend consumption."
        ],
        tags: ["Java", "Spring Boot", "JWT", "Swagger"],
        repo: "https://github.com/BugraCinar/UserRoleManagement"
      },
      {
        title: "Indoor Navigation System Backend",
        status: "public",
        category: "backend",
        summary:
          "A real-time indoor navigation backend that calculates user coordinates from BLE beacon data.",
        points: [
          "Built live location synchronization with WebSockets.",
          "Implemented trilateration algorithms using processed RSSI values.",
          "Prepared fast testing and deployment environments with H2 In-Memory DB and Docker."
        ],
        tags: ["Java", "WebSocket", "BLE", "Docker"],
        repo: "https://github.com/BugraCinar/Navigation-Backend"
      },
      {
        title: "Blockchain Security Camera Platform",
        status: "public",
        category: "backend",
        summary:
          "A distributed platform that secures image data with cryptographic hashes and a custom PoW blockchain ledger.",
        points: [
          "Distributed image processing and cryptographic hashing with a node-worker architecture.",
          "Established bidirectional WebSocket communication between the main node and worker instances.",
          "Built admin REST endpoints for ledger height, network health and mining status."
        ],
        tags: ["Java", "Blockchain", "PoW", "WebSocket"],
        repo: "https://github.com/BugraCinar/BLOCKCHAINSECURITYCAM"
      },
      {
        title: "Retinal Disease Classifier",
        status: "public",
        category: "ai",
        summary:
          "A multi-label deep learning system that identifies 43 retinal conditions from fundus images.",
        points: [
          "Applied transfer learning and fine-tuning with a ConvNeXt-Tiny architecture.",
          "Reached 98.5 percent test accuracy.",
          "Used Focal Loss and Weighted Random Samplers to handle class imbalance."
        ],
        tags: ["Python", "PyTorch", "ConvNeXt", "AI"],
        repo: "https://github.com/Enesfreigthinus/retinal-disease-classifier"
      },
      {
        title: "Hospital Emergency Call & Information System",
        status: "private",
        category: "backend",
        summary:
          "A backend system for emergency color codes and nurse calls at Kanuni Sultan Süleyman Hospital.",
        points: [
          "Developed REST APIs and real-time notification services.",
          "Integrated Android TV information screens and staff mobile devices."
        ],
        tags: ["Java", "Spring Boot", "WebSocket", "Healthcare"]
      },
      {
        title: "Tahsilat Agent Backend",
        status: "private",
        category: "backend",
        summary:
          "A Java REST API backend for an SME-focused AI Collection Agent application.",
        points: [
          "Designed service flows that use uploaded invoice data to trigger debtor calls and support the debt collection process.",
          "Built a domain structure around models such as Invoice, InvoiceCall, CallAnalysis and CallArtifact to track invoices, calls and analysis records.",
          "Strengthened authentication and sensitive endpoint access with Argon2, salt and pepper based security practices."
        ],
        tags: ["Java", "REST API", "AI Agent", "Argon2"]
      },
      {
        title: "Tahsilat Agent Admin Panel",
        status: "private",
        category: "frontend",
        summary:
          "An admin panel interface for monitoring and managing Tahsilat Agent operations.",
        points: [
          "Structured a React and TypeScript panel for users, invoices, call analysis records and activity logs.",
          "Planned management and reporting screens for Admin, AuthenticationErrorLog, SensitiveEndpointAccessLog and UserUsage data.",
          "Focused on a dashboard experience that integrates with backend REST APIs and helps operations teams track collection flows quickly."
        ],
        tags: ["React", "TypeScript", "Admin Panel", "Dashboard"]
      },
      {
        title: "Fabric Defect Detection System",
        status: "public",
        category: "system",
        summary:
          "A high-performance fabric defect detection tool built in C++ on Ubuntu.",
        points: [
          "Built parallel image analysis flows with multiprocessing and multithreading.",
          "Optimized memory management and system resource access for large image datasets."
        ],
        tags: ["C++", "Ubuntu", "Multithreading", "Image Processing"],
        repo: "https://github.com/BugraCinar/Fabric_Defect_Detection"
      },
      {
        title: "Sign Language to Speech",
        status: "private",
        category: "ai",
        summary:
          "A real-time AI system designed to translate sign language into speech and speech into sign language.",
        points: [
          "Analyzing hand and body movement with landmark detection on video streams.",
          "Recognized as a Teknofest Idea Champion for its conceptual and technical framework."
        ],
        tags: ["Deep Learning", "Computer Vision", "Teknofest", "Realtime"]
      },
      {
        title: "Garage Management System",
        status: "public",
        category: "backend",
        summary:
          "A parking management backend built with Java and MySQL during an internship.",
        points: [
          "Developed CRUD REST APIs for vehicle records and parking space status.",
          "Added unit tests for core garage logic and data consistency."
        ],
        tags: ["Java", "MySQL", "REST API", "Unit Test"],
        repo: "https://github.com/BugraCinar/GarageManagement"
      },
      {
        title: "Football Stats Management System",
        status: "public",
        category: "database",
        summary:
          "A comprehensive MySQL database project for leagues, players, fixtures and match details.",
        points: [
          "Developed SQL triggers and advanced queries to automate statistic updates.",
          "Designed a relational schema focused on referential integrity and detailed match analysis."
        ],
        tags: ["MySQL", "SQL", "Triggers", "DBMS"],
        repo: "https://github.com/BugraCinar/footballstats-sql"
      },
      {
        title: "Football Betting Application",
        status: "public",
        category: "backend",
        summary:
          "A desktop sports betting simulation developed as a Java OOP project.",
        points: [
          "Managed user accounts, match data and betting history with File I/O.",
          "Structured the application logic around core OOP principles."
        ],
        tags: ["Java", "OOP", "Desktop", "File I/O"],
        repo: "https://github.com/BugraCinar/kaibet"
      }
    ],
    experience: [
      {
        role: "Java Backend Developer Student",
        company: "Tam Finans",
        date: "02/2026 - Present",
        bullets: [
          "Developing Java Spring Boot, REST API and WebSocket based backend architectures for SME-focused projects including AI Collection Agent, CivardaBul and Halleder Quiz Game.",
          "Designing API infrastructure for AI Collection Agent voice calls, SMS reminders, management panel tracking and reporting flows.",
          "Building location-based services and real-time messaging for CivardaBul, plus gamified psychometric assessment and scoring processes for Halleder Quiz Game."
        ]
      },
      {
        role: "Java Backend Developer Intern",
        company: "Kafein Technology Solutions",
        date: "07/2025 - 08/2025",
        bullets: [
          "Completed an internship within the Vodafone Vepaş team, contributing to real-world software development workflows and collaborative engineering processes.",
          "Developed backend features using Java Spring Boot, REST APIs and WebSocket technologies, improving system reliability and communication performance.",
          "Built and enhanced modules for a Garage Management System, User Role Management framework and Blockchain-based Camera Security platform."
        ]
      },
      {
        role: "Java Backend Developer Student",
        company: "Kanuni Sultan Süleyman Training and Research Hospital",
        date: "03/2024 - 02/2026",
        bullets: [
          "Worked on backend development for a hospital management ecosystem with Flutter patient/staff apps and a Java Spring Boot admin panel.",
          "Built Emergency Color Code, Nurse Call and real-time staff coordination systems using WebSockets and REST APIs.",
          "Worked on indoor navigation integration with BLE Beacon hardware and a secure internal messaging platform."
        ]
      }
    ]
  }
};

let currentLang = "tr";
let currentFilter = "all";

const setText = (key, value) => {
  document.querySelectorAll(`[data-i18n="${key}"]`).forEach((element) => {
    element.textContent = value;
  });
};

const applyTranslations = () => {
  const { ui } = portfolio[currentLang];

  Object.entries(ui).forEach(([key, value]) => setText(key, value));
  document.documentElement.lang = currentLang;
  document.querySelectorAll(".lang-btn").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === currentLang);
  });

  renderProjects();
  renderExperience();
};

const renderProjects = () => {
  const grid = document.getElementById("project-grid");
  const { projects, ui } = portfolio[currentLang];

  grid.innerHTML = projects
    .map((project) => {
      const isPrivate = project.status === "private";
      const hasRepo = Boolean(project.repo);
      const action = isPrivate
        ? `<a href="#contact" class="project-link secondary">${ui.contactForMore}</a>`
        : hasRepo
          ? `<a href="${project.repo}" target="_blank" rel="noopener noreferrer" class="project-link">${ui.github}</a>`
          : `<span class="project-link pending" aria-disabled="true">${ui.pendingGithub}</span>`;

      return `
        <article class="project-card" data-category="${project.category}">
          <div class="card-top">
            <h3>${project.title}</h3>
            <span class="status-pill ${project.status}">${isPrivate ? ui.private : ui.public}</span>
          </div>
          <p>${project.summary}</p>
          <ul class="project-points">
            ${project.points.map((point) => `<li>${point}</li>`).join("")}
          </ul>
          <div class="tag-list">
            ${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
          </div>
          <div class="card-actions">${action}</div>
        </article>
      `;
    })
    .join("");

  applyProjectFilter();
};

const renderExperience = () => {
  const list = document.getElementById("experience-list");
  const { experience } = portfolio[currentLang];

  list.innerHTML = experience
    .map(
      (item) => `
        <article class="experience-item">
          <div class="experience-meta">
            <strong>${item.company}</strong>
            <span>${item.date}</span>
          </div>
          <div>
            <h3>${item.role}</h3>
            <ul>
              ${item.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}
            </ul>
          </div>
        </article>
      `
    )
    .join("");
};

const applyProjectFilter = () => {
  document.querySelectorAll(".project-card").forEach((card) => {
    const shouldShow = currentFilter === "all" || card.dataset.category === currentFilter;
    card.classList.toggle("hidden", !shouldShow);
  });
};

const updateThemeIcons = () => {
  const isDark = document.body.classList.contains("dark");

  document.querySelectorAll(".theme-icon").forEach((img) => {
    img.src = isDark ? img.dataset.dark : img.dataset.light;
  });

  const themeIcon = document.getElementById("theme-icon");
  themeIcon.src = isDark ? themeIcon.dataset.dark : themeIcon.dataset.light;
};

const setupTerminalReveal = () => {
  const heroMedia = document.querySelector(".hero-media");
  const terminal = document.querySelector(".boot-terminal");

  if (!heroMedia || !terminal) {
    return;
  }

  terminal.addEventListener("click", () => {
    heroMedia.classList.add("show-ataturk");
  });
};

document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
  updateThemeIcons();
});

document.querySelectorAll(".lang-btn").forEach((button) => {
  button.addEventListener("click", () => {
    currentLang = button.dataset.lang;
    localStorage.setItem("lang", currentLang);
    applyTranslations();
  });
});

document.querySelectorAll(".filter-btn").forEach((button) => {
  button.addEventListener("click", () => {
    currentFilter = button.dataset.filter;
    document.querySelectorAll(".filter-btn").forEach((item) => {
      item.classList.toggle("active", item === button);
    });
    applyProjectFilter();
  });
});

window.addEventListener("DOMContentLoaded", () => {
  const storedTheme = localStorage.getItem("theme");
  const storedLang = localStorage.getItem("lang");

  if (storedTheme === "dark") {
    document.body.classList.add("dark");
  }

  if (storedLang && portfolio[storedLang]) {
    currentLang = storedLang;
  }

  document.getElementById("year").textContent = new Date().getFullYear();
  updateThemeIcons();
  applyTranslations();
  setupTerminalReveal();
});
