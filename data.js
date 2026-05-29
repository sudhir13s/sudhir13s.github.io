const SECTIONS = [
  {
    id: 'about',
    label: 'About',
    render: () => `
      <h1>About Me</h1>
      <p>I'm Sudhir Singh, a PhD researcher specializing in Artificial Intelligence.
      With 7+ years of industry experience across Healthcare, BioTech, and Retail,
      I bridge applied research and real-world systems.</p>
      <p>My work focuses on machine learning, natural language processing, and
      building intelligent systems that solve meaningful problems.</p>
    `
  },
  {
    id: 'education',
    label: 'Education',
    render: () => `
      <h1>Education</h1>
      <ul class="list">
        <li><strong>PhD — Information Technology (AI Specialization)</strong><span>In Progress</span></li>
        <li><strong>Master's in Computer Science</strong><span>Completed</span></li>
        <li><strong>Bachelor's in Engineering</strong><span>Completed</span></li>
      </ul>
    `
  },
  {
    id: 'experience',
    label: 'Experience',
    render: () => `
      <h1>Experience</h1>
      <ul class="list">
        <li><strong>Walmart</strong><span>Data Scientist / ML Engineer</span></li>
        <li><strong>BioTech Company</strong><span>AI Research Engineer</span></li>
        <li><strong>Healthcare Organization</strong><span>Data Analyst / ML Developer</span></li>
      </ul>
    `
  },
  {
    id: 'projects',
    label: 'Projects',
    render: () => `
      <h1>Projects</h1>
      <ul class="list">
        <li><strong>Fake Review Detection System</strong><span>NLP model to identify inauthentic product reviews at scale</span></li>
        <li><strong>Asthma Prediction Model</strong><span>ML pipeline predicting asthma risk from clinical data</span></li>
        <li><strong>LLM-based Research Assistant</strong><span>RAG system for academic paper Q&A</span></li>
      </ul>
    `
  },
  {
    id: 'skills',
    label: 'Skills',
    render: () => `
      <h1>Skills</h1>
      <div class="skills-grid">
        <div class="skill-group"><h3>Languages</h3><p>Python, SQL, JavaScript</p></div>
        <div class="skill-group"><h3>ML / AI</h3><p>Scikit-learn, PyTorch, TensorFlow, Hugging Face</p></div>
        <div class="skill-group"><h3>NLP</h3><p>LLMs, RAG, Transformers, spaCy, NLTK</p></div>
        <div class="skill-group"><h3>Data</h3><p>Pandas, NumPy, Spark, dbt</p></div>
        <div class="skill-group"><h3>Cloud & Tools</h3><p>AWS, GCP, Docker, Git, Airflow</p></div>
      </div>
    `
  },
  {
    id: 'contact',
    label: 'Contact',
    render: () => `
      <h1>Contact</h1>
      <ul class="list">
        <li><strong>Email</strong><span><a href="mailto:sudhir.13singh@gmail.com">sudhir.13singh@gmail.com</a></span></li>
        <li><strong>GitHub</strong><span><a href="https://github.com/sudhir13s" target="_blank">github.com/sudhir13s</a></span></li>
        <li><strong>Portfolio</strong><span><a href="https://sudhir13s.github.io" target="_blank">sudhir13s.github.io</a></span></li>
      </ul>
    `
  }
];
