I need a simple website like this, but on the left-hand side I will have all the tabs one by one:
1. one
2. second
3. third
4. five
5. six
6. seven
They should be developed for the most standard screen resolution that we have.

https://rishimehta.xyz

Below is my profile, but I don't want this kind of profile. You can copy some content from my website, like education, experience, good projects, and some skills like that, and then that can be used for the new website, which should be developed in reference to this Rishi Mehta X/Z website. 

Give me the project code or the description for the project. 
https://sudhir13s.github.io/
************************************************************************************************************************************************************************************************************************

Got it — you want a clean, minimal, left-sidebar navigation website (like Rishi Mehta Website) but using your own content from Sudhir Singh Portfolio Website, and structured with tabs like:

1. One
2. Second
3. Third
4. Five
5. Six
6. Seven

Let me break this into (A) concept + (B) full working project code (ready to deploy) so you can directly use it.

⸻

🧠 A. What you’re building (Simple Explanation)

The site you shared has:

* Minimal design
* Text-first UI
* Clean spacing
* Sidebar-like navigation

We’ll convert that into:

* Left fixed sidebar
* Right content panel
* Each tab → scroll or section switch
* Fully responsive (optimized for standard laptop screens ~1366px–1920px)

⸻

🏗️ B. Project Structure

portfolio-sidebar/
│── index.html
│── styles.css
│── script.js
│── data.js   (optional for dynamic content)

⸻

💻 1. index.html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Sudhir Singh</title>
  <link rel="stylesheet" href="styles.css" />
</head>
<body>
  <!-- Sidebar -->
  <div class="sidebar">
    <h2>Sudhir</h2>
    <ul>
      <li onclick="showSection('one')">One</li>
      <li onclick="showSection('second')">Second</li>
      <li onclick="showSection('third')">Third</li>
      <li onclick="showSection('five')">Five</li>
      <li onclick="showSection('six')">Six</li>
      <li onclick="showSection('seven')">Seven</li>
    </ul>
  </div>
  <!-- Main Content -->
  <div class="content">
    <section id="one" class="section active">
      <h1>About Me</h1>
      <p>I am Sudhir Singh, currently pursuing a PhD in Artificial Intelligence...</p>
    </section>
    <section id="second" class="section">
      <h1>Education</h1>
      <ul>
        <li>PhD in IT (AI Specialization)</li>
        <li>Previous degrees...</li>
      </ul>
    </section>
    <section id="third" class="section">
      <h1>Experience</h1>
      <p>7+ years in Healthcare, BioTech, and Walmart...</p>
    </section>
    <section id="five" class="section">
      <h1>Projects</h1>
      <ul>
        <li>Fake Review Detection System</li>
        <li>Asthma Prediction Model</li>
      </ul>
    </section>
    <section id="six" class="section">
      <h1>Skills</h1>
      <p>Python, ML, NLP, Deep Learning, LLMs...</p>
    </section>
    <section id="seven" class="section">
      <h1>Contact</h1>
      <p>Email: your@email.com</p>
    </section>
  </div>
  <script src="script.js"></script>
</body>
</html>

⸻

🎨 2. styles.css

body {
  margin: 0;
  font-family: Arial, sans-serif;
  display: flex;
}
/* Sidebar */
.sidebar {
  width: 250px;
  height: 100vh;
  background: #111;
  color: white;
  padding: 20px;
  position: fixed;
}
.sidebar h2 {
  margin-bottom: 30px;
}
.sidebar ul {
  list-style: none;
  padding: 0;
}
.sidebar li {
  margin: 15px 0;
  cursor: pointer;
}
.sidebar li:hover {
  color: #00bcd4;
}
/* Content */
.content {
  margin-left: 250px;
  padding: 40px;
  width: 100%;
}
.section {
  display: none;
}
.section.active {
  display: block;
}
/* Responsive */
@media (max-width: 768px) {
  .sidebar {
    width: 200px;
  }
  .content {
    margin-left: 200px;
  }
}

⸻

⚙️ 3. script.js

function showSection(id) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(sec => sec.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

⸻

🧩 Optional (Better UX like Rishi’s site)

Smooth scroll version instead of click switching:

Replace JS with:

function showSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: 'smooth'
  });
}

⸻

🎯 C. How this matches your requirement

Requirement	Covered
Left sidebar tabs	✅
Clean minimal UI like Rishi	✅
Your content reused	✅
Standard screen optimized	✅
Simple code (no framework)	✅

⸻

🚀 D. Upgrade Ideas (Next Level)

If you want this to feel exactly like rishimehta.xyz, add:

* Markdown blog support
* Dark/light toggle
* Keyboard navigation
* Static site generator (Next.js / Astro)

⸻

🔥 E. If you want next step

I can:

* Convert this into Next.js (production ready)
* Auto-pull your GitHub projects
* Add AI-powered resume section
* Generate GitHub repo + deploy link
