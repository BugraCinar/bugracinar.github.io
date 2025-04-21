
document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark');
    updateIconsForTheme();  
  });
  
  
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
          el.textContent = translations[lang][key];
        }
      });
    });
  });
  
  
  function updateIconsForTheme() {
    const isDark = document.body.classList.contains('dark');
    document.querySelectorAll('.icon').forEach(img => {
      const darkSrc = img.dataset.dark;
      const lightSrc = img.dataset.light;
      if (darkSrc && lightSrc) {
        img.src = isDark ? darkSrc : lightSrc;
      }
    });
  
 
    const themeIcon = document.getElementById('theme-icon');
    themeIcon.src = isDark ? themeIcon.dataset.dark : themeIcon.dataset.light;
  }
  
  
  window.addEventListener('DOMContentLoaded', () => {
    updateIconsForTheme();
  });

  const translations = {
    en: {
      about: "About Me",
      projects: "Projects",
      aboutText: "Hello! I'm Buğra, a third-year student at Istanbul Arel University. Here, I share the projects I have worked on during my software development journey. Although I primarily focus on backend development, you can also explore my projects in other areas. ",
      name: "Ahmet Buğrahan Çınar",
      viewRepo: "View on GitHub",
      project1Title: "KAI-BET",
      project1Desc: "A football betting application I developed for the Object-Oriented Programming course.",
      project2Title: "Football Stats",
      project2Desc: "A football statistics database I developed for the Database Management Systems course."
    },
    tr: {
      about: "Hakkımda",
      projects: "Projeler",
      aboutText: "  Merhaba! Ben Buğra, İstanbul Arel Üniversitesi'nin 3. sınıf öğrencisiyim. Burada, yazılım geliştirme yolculuğumda yaptığım projeleri paylaşıyorum. Genellikle backend geliştirme üzerine yoğunlaşsam da, farklı alanlarla ilgili projelerimi de inceleyebilirsiniz. ",
      name: "Ahmet Buğrahan Çınar",
      viewRepo: "GitHub Repo",
      project1Title: "KAI-BET",
      project1Desc: "OOP dersi için yapmış olduğun futbol iddaa uygulaması",
      project2Title: "Football Stats",
      project2Desc: "DBMS dersi için yapmış olduğum futbol istatistik veritabanı"
    }
  };
  