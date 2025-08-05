<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Siddarth S Mallik | Portfolio</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" crossorigin="anonymous" />
<style>
  body, html {
    transition: background 0.4s ease, color 0.4s ease;
  }
  section {
    transition: background 0.4s ease, color 0.4s ease;
  }
  .hero {
    background: linear-gradient(135deg, #00bcd4, #008c9e);
    background-size: 400% 400%;
    animation: gradientShift 10s ease infinite;
  }
  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  .dark-mode {
    background: #1e1e1e !important;
    color: #e0e0e0 !important;
  }
  .dark-mode section {
  background-color: #181818 !important;
  color: #ffffff !important;
  border-radius: 8px;
  box-shadow: 0 0 30px rgba(255, 255, 255, 0.05);
}
  .dark-mode a {
    color: #00e0ff !important;
  }
.dark-mode .scale {
  background-color: #1f1f1f !important;
  border-left: 4px solid #00e0ff !important;
  color: #ffffff !important;
  box-shadow: 0 0 15px rgba(0, 224, 255, 0.3) !important;
}
.dark-mode .section-title { color: #ffffff !important; font-weight: bold; }
.dark-mode .section-title {
  color: #ffffff !important;
}
.dark-mode .section-title {
  color: #ffffff !important;
  font-weight: bold;
}
</style>
<script>
  function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    const theme = body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    updateIcon(theme);
  }
  function updateIcon(theme) {
    const icon = document.getElementById('theme-icon');
    icon.innerText = theme === 'dark' ? '🌙' : '🌞';
  }
  document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-mode');
    }
    updateIcon(savedTheme || 'light');
  });
</script>
</head>
<body style="margin:0;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;scroll-behavior:smooth;background:#fcfcfc;color:#333;">
  <header style="position:sticky;top:0;background:#111;color:#fff;padding:1rem 2rem;display:grid;grid-template-columns:auto 1fr;align-items:center;z-index:1000;">
    <div style="position:fixed;top:20px;left:20px;z-index:1000;display:flex;align-items:center;gap:0.5rem;"><span style="color:white;font-weight:bold;">Dark Mode</span><label style="position:relative;display:inline-block;width:60px;height:30px;cursor:pointer;">
  <input type="checkbox" onchange="toggleTheme()" id="themeToggle" style="opacity:0;width:0;height:0;">
  <span style="position:absolute;top:0;left:0;right:0;bottom:0;background-color:#ccc;border-radius:34px;transition:0.4s;"></span>
  <span style="position:absolute;height:24px;width:24px;left:3px;bottom:3px;background-color:white;border-radius:50%;transition:0.4s;"></span>
</label></div>
<script>
  const toggle = document.getElementById('themeToggle');
  function toggleTheme() {
    const body = document.body;
    const isDark = body.classList.toggle('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateToggle(isDark);
  }
  function updateToggle(isDark) {
    const thumb = document.querySelector('label span:last-child');
    const track = document.querySelector('label span:first-child');
    if (isDark) {
      thumb.style.transform = 'translateX(30px)';
      track.style.backgroundColor = '#00bcd4';
    } else {
      thumb.style.transform = 'translateX(0px)';
      track.style.backgroundColor = '#ccc';
    }
  }
  document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    const isDark = savedTheme === 'dark';
    document.body.classList.toggle('dark-mode', isDark);
    updateToggle(isDark);
    document.getElementById('themeToggle').checked = isDark;
  });
</script>
    <h1 style="font-size:2rem;">Siddarth S Mallik</h1>
    <ul style="display:grid;grid-auto-flow:column;gap:1.5rem;justify-content:end;list-style:none;margin:0;">
      <li><a href="#about" style="color:white;text-decoration:none;">About</a></li>
      <li><a href="#skills" style="color:white;text-decoration:none;">Skills</a></li>
      <li><a href="#projects" style="color:white;text-decoration:none;">Projects</a></li>
      <li><a href="#contact" style="color:white;text-decoration:none;">Contact</a></li>
    </ul>
  </header>

  <section class="hero" style="display:grid;place-items:center;text-align:center;padding:6rem 2rem;background:linear-gradient(135deg,#00bcd4,#008c9e);color:white;">
    <h2 class="section-title"><span id="typed-text"></span><span id="cursor">|</span></h2>
    <p>"Looking for a challenging position to apply my web development and security skills."</p>
    <a class="scale" href="siddarth_resume.pdf" download style="display:inline-block;background:#008c9e;color:#fff;padding:0.7rem 1.2rem;text-decoration:none;border-radius:30px;margin-top:1rem;box-shadow:0 2px 6px rgba(0,0,0,0.2);"><i class="fas fa-download"></i> Download Resume</a>
  </section>

  <section id="about" class="fade-up" style="background:#f7fafd;padding:1rem 2rem;max-width:1200px;margin:auto;" style="padding:1rem 2rem;max-width:1200px;margin:auto;">
    <h2 class="section-title" style="font-size:2rem;color:#222;margin-bottom:1rem;border-bottom:2px solid #00bcd4;display:inline-flex;align-items:center;gap:0.5rem;padding-bottom:0.3rem;"><i class="fas fa-user"></i> About Me</h2>
    <p>
      I am a Computer Science student at Malnad College of Engineering with internship experience in Web Development and Cyber Security. I have hands-on experience in designing websites, developing secure applications, and working with cloud tools.
    </p>
  </section>

  <section id="skills" class="fade-up" style="background:#fffdf5;padding:1rem 2rem;max-width:1200px;margin:auto;" style="padding:1rem 2rem;max-width:1200px;margin:auto;">
    <h2 class="section-title" style="font-size:2rem;color:#222;margin-bottom:1rem;border-bottom:2px solid #00bcd4;display:inline-flex;align-items:center;gap:0.5rem;padding-bottom:0.3rem;"><i class="fas fa-code"></i> Technical Skills</h2>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:2rem;margin-top:1.5rem;">
      <style>
.scale {transform: scale(1); transition: transform 0.5s ease, box-shadow 0.5s ease;}
.scale:hover {
  transform: scale(1.05);
  box-shadow: 0 0 15px rgba(0, 188, 212, 0.6);
  border: 1px solid #00bcd4;
}
.fade-up {opacity: 0; transform: translateY(40px); transition: all 0.6s ease-in-out;}
.fade-up.visible {opacity: 1; transform: translateY(0);}
</style>
<script>
window.addEventListener('scroll', () => {
  document.querySelectorAll('.fade-up').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
});
</script>
      <div class="scale" style="background:white;padding:1rem;border-left:4px solid #00bcd4;border-radius:0.5rem;box-shadow:0 4px 10px rgba(0,0,0,0.1);">
        <h3>Languages</h3>
        <p>Java, C, SQL, Linux</p>
      </div>
      <div class="scale" style="background:white;padding:1rem;border-left:4px solid #00bcd4;border-radius:0.5rem;box-shadow:0 4px 10px rgba(0,0,0,0.1);">
        <h3>Web Technologies</h3>
        <p>HTML, CSS, JavaScript, React.js</p>
      </div>
      <div class="scale" style="background:white;padding:1rem;border-left:4px solid #00bcd4;border-radius:0.5rem;box-shadow:0 4px 10px rgba(0,0,0,0.1);">
        <h3>Tools</h3>
        <p>GitHub, VS Code, PyCharm, Android Studio, Figma, AWS</p>
      </div>
      <div class="scale" style="background:white;padding:1rem;border-left:4px solid #00bcd4;border-radius:0.5rem;box-shadow:0 4px 10px rgba(0,0,0,0.1);">
        <h3>Soft Skills</h3>
        <p>Problem Solving, Time Management, Work Ethic, Adaptability</p>
      </div>
    </div>
  </section>

  <section id="projects" class="fade-up" style="background:#f6fff9;padding:1rem 2rem;max-width:1200px;margin:auto;" style="padding:1rem 2rem;max-width:1200px;margin:auto;">
    <h2 class="section-title" style="font-size:2rem;color:#222;margin-bottom:1rem;border-bottom:2px solid #00bcd4;display:inline-flex;align-items:center;gap:0.5rem;padding-bottom:0.3rem;"><i class="fas fa-project-diagram"></i> Projects</h2>
    <ul style="display:grid;gap:1.5rem;padding-left:1rem;list-style:none;">
      <li class="scale" style="background:white;padding:1rem 1.5rem;border-left:4px solid #00bcd4;border-radius:0.5rem;box-shadow:0 4px 10px rgba(0,0,0,0.1);">
        <strong>Aspect Based Sentimental Analysis with Codemix</strong><br />
        A comparative ML project analyzing sentiment and aspects using LLMs, BERT, and Naive Bayes.
      </li>
      <li class="scale" style="background:white;padding:1rem 1.5rem;border-left:4px solid #00bcd4;border-radius:0.5rem;box-shadow:0 4px 10px rgba(0,0,0,0.1);">
        <strong>Online College Canteen Website</strong><br />
        Full-stack platform with online ordering, real-time tracking, admin dashboard, and digital payment.
      </li>
      <li class="scale" style="background:white;padding:1rem 1.5rem;border-left:4px solid #00bcd4;border-radius:0.5rem;box-shadow:0 4px 10px rgba(0,0,0,0.1);">
        <strong>Smart IoT Fan</strong><br />
        A temperature-controlled fan using Arduino and LM35 sensor, controllable via PC/mobile.
      </li>
    </ul>
  </section>

  <section id="contact" class="fade-up" style="background:#fff5f8;padding:1rem 2rem;max-width:1200px;margin:auto;" style="padding:1rem 2rem;max-width:1200px;margin:auto;">
    <h2 class="section-title" style="font-size:2rem;color:#222;margin-bottom:1rem;border-bottom:2px solid #00bcd4;display:inline-flex;align-items:center;gap:0.5rem;padding-bottom:0.3rem;"><i class="fas fa-envelope"></i> Contact</h2>
    <p>Email: siddarthsmalliksiddusmallik@gmail.com</p>
    <p>Phone: +91 7483780500</p>
  </section>

  <footer style="background:#111;color:white;text-align:center;padding:1.2rem;margin-top:2rem;">
    <p>&copy; 2025 Siddarth S Mallik</p>
  </footer>

  <div style="position:fixed;bottom:20px;right:20px;display:flex;flex-direction:column;gap:1rem;z-index:1000;">
    <a href="https://wa.me/917483780500" target="_blank" style="background:#00bcd4;color:#fff;padding:0.7rem 1rem;border-radius:50px;text-decoration:none;font-size:1.2rem;display:flex;align-items:center;gap:0.5rem;box-shadow:0 4px 8px rgba(0,0,0,0.2);"><i class="fab fa-whatsapp"></i> Chat</a>
    <a href="mailto:siddarthsmalliksiddusmallik@gmail.com" style="background:#00bcd4;color:#fff;padding:0.7rem 1rem;border-radius:50px;text-decoration:none;font-size:1.2rem;display:flex;align-items:center;gap:0.5rem;box-shadow:0 4px 8px rgba(0,0,0,0.2);"><i class="fas fa-envelope"></i> Email</a>
    <a href="#" style="background:#00bcd4;color:#fff;padding:0.7rem 1rem;border-radius:50px;text-decoration:none;font-size:1.2rem;display:flex;align-items:center;gap:0.5rem;box-shadow:0 4px 8px rgba(0,0,0,0.2);"><i class="fas fa-arrow-up"></i> Top</a>
  </div>
<script>
const texts = [
  "Computer Science Engineer",
  "Web Developer",
  "Cyber Security Enthusiast"
];
let i = 0, j = 0;
let currentText = "";
let isDeleting = false;
const typedText = document.getElementById("typed-text");
const cursor = document.getElementById("cursor");

function type() {
  if (i < texts.length) {
    if (!isDeleting && j <= texts[i].length) {
      currentText = texts[i].substring(0, j++);
    } else if (isDeleting && j >= 0) {
      currentText = texts[i].substring(0, j--);
    }
    typedText.innerHTML = currentText;
    if (j === texts[i].length) isDeleting = true;
    if (j === 0 && isDeleting) {
      isDeleting = false;
      i = (i + 1) % texts.length;
    }
  }
  setTimeout(type, isDeleting ? 50 : 100);
}
type();
</script>
</body>
</html>

