const SECTIONS = [
  {
    id: 'about',
    label: 'About',
    html: `
      <h1>About Me</h1>
      <p>Hey, I'm Sudhir &mdash; a technical leader and a software generalist (trying to be one, honestly) who's fascinated by interesting and challenging problems. For the last 12 years I've built and scaled complex platforms across healthcare interoperability, lab robotics, and high-throughput retail microservices, and my curiosity has always ranged wide: security, networks, distributed systems, ML, robotics.</p>

      <p>Lately that curiosity has concentrated hard on AI &mdash; LLMs, multimodal models, agentic systems &mdash; because I genuinely believe this is the most consequential shift of our generation, and I'm focused on building in the middle of it. I'm drawn to the engineering that makes AI actually useful &mdash; fine-tuning, retrieval, and making agents coordinate without becoming a tangled mess. Always happy to chat about LLMs, agentic AI, applied ML research, or backend systems at scale &mdash; <a href="mailto:sudhir.13singh@gmail.com">sudhir.13singh@gmail.com</a>, <a href="https://www.linkedin.com/in/sudhir13s" target="_blank" rel="noreferrer">LinkedIn</a>, <a href="https://github.com/sudhir13s" target="_blank" rel="noreferrer">GitHub</a>.</p>

      <p>Right now I'm heads-down on three projects: <strong>BrainSpace</strong> (agentic second-brain for the stuff you save and forget), <strong>AI Agent Atlas</strong> (continuously-updated hub of everything AI), and <strong><a href="https://github.com/sudhir13s/miniAgent" target="_blank" rel="noreferrer">miniAgent</a></strong> (provider-agnostic orchestration across LangChain, Google ADK, CrewAI, LiteLLM). On the side: fine-tuning Mistral-7B with QLoRA, and RAG chatbots on specific knowledge bases.</p>

      <p><strong>The Journey.</strong> I started my career at <strong>Clinisys</strong> working on MUMPS, Delphi, and .NET, eventually moving to Philips to work on healthcare interoperability (HL7/FHIR). Seeking deeper technical challenges, I moved to the US for a Master's in Computer Science at RIT, focusing on distributed systems, parallel computing, and ML. This led me to Strateos, an automated cloud laboratory startup, where I picked up Java, Spring Boot, AWS, robotics, and computer vision while building control systems for lab automation. When the startup folded, I joined Walmart Global Tech as a Senior Engineer, building high-throughput microservices from scratch using Java 17, Spring WebFlux, Kafka, and Cassandra.</p>

      <p><strong>AI Transition.</strong> I've tracked AI closely since graduating in 2021, but breaking into the space required a dedicated pivot. Relocating back to India gave me the space to commit to it full-time. Drawing on my Master's coursework and math foundation (linear algebra, probability), I've been systematically revisiting classical ML while going deep into LLMs, RAG, fine-tuning, and agentic workflows. I believe the convergence of cloud, AI, and robotics is reshaping the industry faster than expected&mdash;moving from text to multimodal models, and soon to world models and robotic reasoning. Everything I'm building in public right now is my way of preparing to build at this new frontier.</p>
    `
  },
  {
    id: 'education',
    label: 'Education',
    html: `
      <h1>Education</h1>

      <div class="role">
        <h3>Rochester Institute of Technology (RIT)</h3>
        <p class="role-meta">M.S. in Computer Science &middot; Rochester, NY &middot; Aug 2018 &ndash; May 2021</p>

        <p class="course-label">Capstone &amp; Studies</p>
        <ul class="role-bullets">
          <li><strong>Capstone</strong> &mdash; Using IOTA Tangle instead of blockchain in IoT</li>
          <li><strong>Independent Study</strong> &mdash; Distributed Systems</li>
          <li><strong>Self Study</strong> &mdash; Machine Learning</li>
        </ul>

        <p class="course-label">Coursework</p>
        <ul class="role-bullets">
          <li>CSCI 759 &mdash; Topics in Systems: Advanced Cloud Computing</li>
          <li>CSCI 654 &mdash; Parallel Computing</li>
          <li>CSCI 651 &mdash; Foundations of Computer Networks</li>
          <li>CSCI 721 &mdash; Big Data Analytics</li>
          <li>CSCI 641 &mdash; Advanced Programming Skills: Advanced C++</li>
          <li>CSCI 665 &mdash; Foundations of Algorithms</li>
          <li>ENGL 681 &mdash; Introduction to Natural Language Processing</li>
          <li>CSCI 620 &mdash; Introduction to Big Data</li>
          <li>CSCI 603 &mdash; Advanced Object-Oriented Programming Concepts (Java 8)</li>
          <li>CSCI 605 &mdash; Problem Solving Concepts (Python 3)</li>
          <li>CSCI 661 &mdash; Foundations of Computer Science Theory</li>
        </ul>
      </div>

      <div class="role">
        <h3>Bachelor's in Engineering</h3>
        <p class="role-meta">Computer Science / Information Technology</p>
      </div>
    `
  },
  {
    id: 'experience',
    label: 'Experience',
    html: `
      <h1>Experience</h1>

      <div class="role">
        <h3>Walmart Global Tech &mdash; Senior Software Engineer (Eligibility team)</h3>
        <p class="role-meta">Sunnyvale, CA &middot; Nov 2023 &ndash; Oct 2025</p>
        <ul class="role-bullets">
          <li>Built high-throughput microservices responsible for deriving eligibility and restrictions for offers, items, and products at the offer, store, and fulfillment-center levels for global markets. <span class="tech-stack">Java17, WebFlux, Kafka, k8s, cursor</span></li>
          <li>Developed core eligibility infrastructure (including Cassandra integration and configurations) to support multitenant, store-level eligibility across Walmart International markets. <span class="tech-stack">Java17, WebFlux, Cassandra</span></li>
          <li>Architected backend enhancements in partnership with engineering, data science, and product teams to enable unified 1P/3P shipping workflows, improving delivery promise accuracy and reducing late deliveries by ~15%.</li>
          <li>Led architectural and design discussions, drove sprint meetings, code reviews, and engineering standards, mentored junior engineers, and owned reliability improvements across monitoring, availability, and operational support.</li>
        </ul>
      </div>

      <div class="role">
        <h3>Strateos Inc &mdash; Software Engineer III</h3>
        <p class="role-meta">Menlo Park, CA &middot; Jul 2021 &ndash; Jun 2023</p>
        <ul class="role-bullets">
          <li>Designed and deployed Asset-management service components and UI (cloud lab) to remove tedious manual orchestration and management (Ansible scripts) of labs, workcells, and devices. <span class="tech-stack">Java17, Spring Boot, React</span></li>
          <li>Developed components using an event-driven architecture to compile a scientific intent into device commands; coordinating scheduling, execution, and reporting to reduce scientist time by ~90%. <span class="tech-stack">Scala, Akka, RabbitMQ</span></li>
          <li>Led a 2 developer effort and drove the implementation of an automated colony-picking system using a robotic arm and computer vision, achieving ~10&times; higher throughput than manual inspection. <span class="tech-stack">Python, OpenCV</span></li>
          <li>Owned end-to-end delivery of multiple product feature epics, from design through production deployment, collaborating with scientists, product, and platform teams.</li>
          <li>Conducted technical interviews and contributed to engineering hiring decisions to support team growth.</li>
        </ul>
      </div>

      <div class="role">
        <h3>Center On Access Technology, RIT/NTID &mdash; ML Software Engineer (Part-time)</h3>
        <p class="role-meta">Rochester, NY &middot; Jan 2021 &ndash; May 2021</p>
        <ul class="role-bullets">
          <li>Built language and error models on ASR (speech-to-text) data to improve hybrid captioning for hard-of-hearing classrooms; developed UI and backend services to store and serve ML models. <span class="tech-stack">Python, Flask, React, AWS S3, DynamoDB, EB</span></li>
          <li>Experimented with NLP models including transformer-based architectures (Hugging Face, BERT) to improve captioning accuracy on ASR datasets. <span class="tech-stack">PyTorch</span></li>
        </ul>
      </div>

      <div class="role">
        <h3>Advarra &mdash; Software Engineer Co-op</h3>
        <p class="role-meta">Rochester, NY &middot; Jan 2020 &ndash; Apr 2020</p>
        <ul class="role-bullets">
          <li>Improved page load in Clinical Conductor (Clinical Trial Management System) from ~4&ndash;5s to ~1&ndash;2s on ~10% of web pages by optimizing SQL queries (reduced joins, common table expressions) and simplifying core logic. <span class="tech-stack">C#, ASP.NET MVC, MSSQL</span></li>
          <li>Built tools for internal stakeholders to manage client data in Pendo.io via REST APIs. <span class="tech-stack">C#</span></li>
        </ul>
      </div>

      <div class="role">
        <h3>Rochester Institute of Technology &mdash; Graduate Technical Assistant</h3>
        <p class="role-meta">Rochester, NY &middot; Jan 2019 &ndash; Dec 2019</p>
        <ul class="role-bullets">
          <li>Built and deployed a credential management portal enabling CS students to manage their credentials, reducing system-admin workload by ~40%. <span class="tech-stack">Python, Flask, jQuery, Apache2, LDAP, AD</span></li>
          <li>Installed, configured, and maintained CS department computer labs, servers (mail, web), research machines, and Raspberry Pis; supported transition from LDAP to AD accounts.</li>
        </ul>
      </div>

      <div class="role">
        <h3>Philips India Limited &mdash; Senior Software Engineer</h3>
        <p class="role-meta">Bangalore, India &middot; Feb 2015 &ndash; Jul 2018</p>
        <ul class="role-bullets">
          <li>Developed reliable REST APIs for the HealthSuite Digital Platform (HSDP) to enable secure exchange of patient health information between internal and external systems using HL7 and FHIR standards.</li>
          <li>Built a prototype demonstrating HSDP capabilities as SMART on FHIR by integrating with HealthCloud (diabetes app), eCareCoordinator (Salesforce monitoring), EMR systems, and the internal data repository.</li>
          <li>Oversaw a team of 8 developers in the absence of a team architect and led implementation of the Oncology integration project across two major platform releases.</li>
        </ul>
      </div>

      <div class="role">
        <h3>CliniSys Solutions Limited &mdash; Software Engineer</h3>
        <p class="role-meta">Bangalore, India &middot; Jun 2011 &ndash; Feb 2015</p>
        <ul class="role-bullets">
          <li>Owned end-to-end product lifecycles with a 4-developer team &mdash; requirements, design, development, deployment, client interactions &mdash; delivering 3 parallel product releases with zero client-reported issues.</li>
          <li>Developed product features across laboratory and pathology desktop and web solutions, including patient registration, results management, reporting, and HL7 message exchange for inpatient and outpatient workflows. <span class="tech-stack">Delphi, C#.NET, MSSQL, MUMPS</span></li>
          <li>Implemented network interfaces (ADT, Orders, Results, Scheduling) for HL7-over-TCP/IP exchange; built ICD-10 and Meaningful Use 2 features to support US healthcare mandates; created custom patient and financial report templates with SAP Crystal Reports.</li>
        </ul>
      </div>
    `
  },
  {
    id: 'projects',
    label: 'Projects',
    html: `
      <h1>Projects</h1>
      <ul class="list">
        <li><strong>BrainSpace</strong><span>Present &mdash; Agentic second-brain that ingests, organizes, and retrieves links, articles, and notes through natural language, so knowledge you save is knowledge you can actually recall. <span class="tech-stack">Python, FastAPI, LangChain, Vector DB, RAG, Agentic Workflow</span></span></li>
        <li><strong>AI Agent Atlas</strong><span>Present &mdash; One-stop, agent-powered knowledge hub for everything AI: models, frameworks, papers, tools, and tutorials. Agentic workflows continuously ingest, categorize, and summarize the rapidly-evolving AI landscape. <span class="tech-stack">Python, FastAPI, LangChain, Agentic Workflow, RAG</span></span></li>
        <li><strong><a href="https://github.com/sudhir13s/miniAgent" target="_blank" rel="noreferrer">miniAgent</a></strong><span>Jan 2026 &ndash; Present &mdash; Architected a lightweight, provider-agnostic orchestration layer for autonomous AI agents to eliminate vendor lock-in, enabling seamless backend transitions across multiple model providers, supporting both linear pipelines and complex graph workflows with conditional routing and asynchronous tool execution. <span class="tech-stack">Python, FastAPI, Asyncio, LangChain, Google ADK, CrewAI, LiteLLM</span></span></li>
        <li><strong><a href="https://github.com/sudhir13s/HuggingFaceKnowledgeAssistant" target="_blank" rel="noreferrer">HuggingFace Knowledge Assistant</a></strong><span>May 2026 &mdash; Developed a RAG-based chatbot to provide accurate, context-aware answers by ingesting and embedding Hugging Face knowledge sources, leveraging semantic retrieval and LLM-based generation over indexed knowledge sources. <span class="tech-stack">Python, FastAPI, LangChain, FAISS, RAG</span></span></li>
        <li><strong><a href="https://github.com/sudhir13s/Mistral-7B-Instruct-v0.2-CustomerSupport" target="_blank" rel="noreferrer">CustomerSupport Fine-Tuned Model</a></strong><span>Jun 2026 &ndash; Present &mdash; Fine-tuning an LLM for customer support auto-resolution to generate policy-aware, context-grounded responses by applying QLoRA on a 4-bit quantized Mistral-7B model trained on structured instruction datasets. <span class="tech-stack">Mistral-7B, QLoRA, PEFT, Google Colab</span></span></li>
        <li><strong><a href="https://github.com/sudhir13s/NLP-Term-project" target="_blank" rel="noreferrer">Classifying Similar Language Varieties</a></strong><span>May 2019 &mdash; Developed ML models to classify similar languages and language varieties using the DSL dataset, leveraging TF-IDF-based character and word n-gram features with Naive Bayes and SVM models, achieving ~88% accuracy. <span class="tech-stack">Python, scikit-learn, NLP, NLTK, NumPy</span></span></li>
        <li><strong><a href="https://github.com/sudhir13s/RIP-version2" target="_blank" rel="noreferrer">Lunar Rover &mdash; RIPv2 + Custom TCP/IP</a></strong><span>2020 &mdash; Networking course project at RIT. From-scratch implementation of RIPv2 plus a custom router-to-router protocol for distance-vector route exchange &mdash; simulates a small inter-router network with periodic update broadcasts, split-horizon, and route-poisoning to handle convergence and the count-to-infinity problem. As part of the same project, also implemented a custom TCP/IP-style transport protocol with reliable data transfer (sequencing, acknowledgments, retransmission) over the simulated network. <span class="tech-stack">Java</span></span></li>
        <li><strong><a href="https://github.com/sudhir13s/packetanalyzer" target="_blank" rel="noreferrer">Packet Analyzer</a></strong><span>2020 &mdash; Command-line tool that captures and dissects network packets across the protocol stack &mdash; Ethernet, IP, TCP/UDP, ICMP. Parses raw frame bytes, walks header fields layer-by-layer, and prints structured per-packet diagnostics for inspection and debugging. Networks course project at RIT. <span class="tech-stack">Java</span></span></li>
      </ul>
    `
  },
  {
    id: 'skills',
    label: 'Skills',
    html: `
      <h1>Skills</h1>
      <p>Technologies I have worked with so far &mdash; this is not a claim of mastery in any of them. Depth varies: some I've shipped production systems with for years, others I picked up while building the projects listed on this site.</p>
      <div class="skills-grid">
        <div class="skill-group">
          <h3>AI &mdash; Core</h3>
          <p>LLMs, Fine-Tuning, Agentic AI, RAG, MCP, A2A</p>
          <p class="learning-label">Currently learning</p>
          <ul class="learning-list">
            <li><strong>Building from scratch</strong> &mdash; transformer architecture and similar variants, reasoning models, Mixture-of-Experts (MoE)</li>
            <li><strong>Fine-tuning</strong> &mdash; across different model families and tasks (actively building)</li>
            <li><strong>Provider-agnostic frameworks &amp; agentic tooling</strong> &mdash; orchestration patterns, custom tools (extending miniAgent)</li>
            <li><strong>Multimodal models</strong> &mdash; vision-language, audio-language (picking up)</li>
          </ul>
        </div>
        <div class="skill-group"><h3>AI &mdash; Frameworks &amp; Tools</h3><p>PyTorch, NumPy, scikit-learn, LangChain, Hugging Face, FAISS, Cursor, Claude Code</p></div>
        <div class="skill-group"><h3>Programming</h3><p>Python, Flask, FastAPI, Java, Bash, React, Spring Boot, WebFlux</p></div>
        <div class="skill-group"><h3>Database / Tools</h3><p>Vector DB, Postgres, MongoDB, Cassandra, Git, GitHub, Gradle, Maven, Jenkins</p></div>
        <div class="skill-group"><h3>DevOps / Infra</h3><p>AWS, Linux, Docker, Kubernetes, ArgoCD, Kafka, ELK, Splunk, Prometheus, Grafana</p></div>
        <div class="skill-group"><h3>Others</h3><p>Microservices, REST, OpenAPI, Distributed Systems, Jira, Confluence, Agile, HIPAA</p></div>
        <div class="skill-group">
          <h3>Leadership</h3>
          <p>Technical Leadership, Mentoring & Coaching, Cross-functional Collaboration, Agile Delivery</p>
        </div>
      </div>
    `
  },
  {
    id: 'awards',
    label: 'Awards',
    html: `
      <h1>Awards & Achievements</h1>
      <ul class="list">
        <li>
          <strong>Best Innovative App (Android) &mdash; Philips India Limited</strong>
          <span>Feb 2018</span>
          <p>Won the second-best innovative app award for developing a DigitalOPD app as part of the Philips hackathon.</p>
        </li>
        <li>
          <strong>Circle of Excellence '14 &mdash; CliniSys Solutions Limited</strong>
          <span>Jan 2014</span>
          <p>Recognized as one of the top 5 outstanding performers of the company across the global region.</p>
        </li>
      </ul>
    `
  },
  {
    id: 'research',
    label: 'Research',
    html: `
      <h1>Research</h1>
      <p>My interest in AI goes beyond engineering &mdash; I am deeply drawn to the research side. I am focused on conducting deeper research, particularly around world models, diffusion models, agentic workflows, and brain-inspired AI.</p>
      <p>Ultimately, I aspire to contribute directly to this field as a researcher. My goal is to publish original research and white papers detailing the systems and models I explore in these areas, describing what I am trying to achieve and the limits of these architectures.</p>
    `
  },
  {
    id: 'blogs',
    label: 'Blogs',
    html: `
      <h1>Blogs</h1>
      <p>Writing on LLMs, RAG, agentic AI, and the engineering behind applied ML in production.</p>
      <ul class="list">
        <li><strong>Three agentic AI projects I'm building right now</strong><span>BrainSpace, AI Agent Atlas, miniAgent &mdash; and what I'm learning from each. Coming soon.</span></li>
        <li><strong>Fine-tuning Mistral-7B with QLoRA</strong><span>Notes from building a policy-aware customer support model. Coming soon.</span></li>
      </ul>
    `
  },
  {
    id: 'contact',
    label: 'Contact',
    html: `
      <h1>Contact</h1>
      <p>Always up for a good conversation on AI/ML &mdash; LLMs, RAG, agentic systems, fine-tuning, applied research, multimodal models, world models (JEPA), robotics, or backend systems at scale.</p>
      <p>Also, I'm open to opportunities where I can lead AI/ML initiatives end-to-end &mdash; building new products from scratch, transforming existing platforms into AI-native ones, or driving engineering direction across teams.</p>
      <p>Bengaluru, Karnataka.</p>
      <ul class="list">
        <li><strong>Email</strong><span><a href="mailto:sudhir.13singh@gmail.com">sudhir.13singh@gmail.com</a></span></li>
        <li><strong>LinkedIn</strong><span><a href="https://www.linkedin.com/in/sudhir13s" target="_blank" rel="noreferrer">linkedin.com/in/sudhir13s</a></span></li>
        <li><strong>GitHub</strong><span><a href="https://github.com/sudhir13s" target="_blank" rel="noreferrer">github.com/sudhir13s</a></span></li>
      </ul>
    `
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SECTIONS };
}
