import './App.css';
// import Avatar from './Avatar';
import AvatarImg from './AvatarImg.png'

function App() {
  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <span>Monica Valentina M</span>
          </div>
          <ul className="nav-menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#training">Training</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Monica Valentina</span>
            </h1>
            <h2 className="hero-subtitle">Junior Software Developer</h2>
            <p className="hero-description">
              Junior Software Developer with 1+ year of professional experience building and maintaining
              full‑stack web applications. Skilled in React.js, Node.js, SQL, MongoDB, and Firebase;
              experienced developing dashboards, reconciliation systems, and automation workflows for
              large‑scale financial data.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">View My Work</a>
              <a href="#contact" className="btn btn-secondary">Get In Touch</a>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-card">
              <div className="profile-avatar">
                {/* <Avatar /> */}
                <img src={AvatarImg} className="avatar-img"/>
              </div>
              <div className="profile-info">
                <h3>Monica Valentina M</h3>
                <p>Junior Software Developer</p>
                <div className="social-links">
                  <a href="#" className="social-link">LinkedIn</a>
                  <a href="#" className="social-link">Portfolio</a>
                  <a href="mailto:monicavalentina001@gmail.com" className="social-link">Email</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                Junior Software Developer with 1+ year of experience building and maintaining full‑stack web applications.
                I specialize in React.js and Node.js with SQL and MongoDB, and I enjoy building dashboards,
                reconciliation systems, and automation workflows that serve real business operations.
              </p>
              <p>
                At Finkraft.ai, I collaborate with finance, operations, QA, and product teams to deliver production‑ready
                features across 13 interconnected portals. I focus on performance, data consistency, and clear user
                experiences.
              </p>
            </div>
            <div className="about-stats">
              <div className="stat">
                <h3>1+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h3>13+</h3>
                <p>Integrated Portals</p>
              </div>
              <div className="stat">
                <h3>100%</h3>
                <p>Full-Stack</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience">
        <div className="container">
          <h2 className="section-title">Experience</h2>
          <div className="experience-timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>Junior Software Developer</h3>
                  <span className="company">Finkraft.ai — Bangalore</span>
                  <span className="duration">Apr 2023 – Present</span>
                </div>
                <div className="timeline-description">
                  <p>
                    Built and maintained full‑stack modules across Login, Dashboard (ZA dashboard), Credentials,
                    Uploads (Booking & 2B datasets), Workspaces, Members, and Reconciliation Reports for
                    the GST Reconciliation Portal (app.finkraft.ai) and 13 interconnected sub‑portals.
                  </p>
                  
                  <div className="experience-details">
                    <div className="detail-section">
                      <h4>Frontend Development (React.js, AgGridReact)</h4>
                      <ul>
                        <li>Built Login, ZA Dashboard, Credentials, Members, and Workspaces modules</li>
                        <li>Developed Upload module for bulk Booking and 2B datasets with validations</li>
                        <li>Implemented server‑side rendering in AgGrid to handle millions of invoice records efficiently</li>
                      </ul>
                    </div>

                    <div className="detail-section">
                      <h4>Follow‑up Module (Invoice Collection)</h4>
                      <ul>
                        <li>Designed UI for operations to trigger vendor follow‑ups with attachments</li>
                        <li>Integrated SendGrid API and automated Excel report generation via backend</li>
                        <li>Enabled automated mass follow‑ups, reducing manual vendor communication</li>
                      </ul>
                    </div>

                    <div className="detail-section">
                      <h4>Backend Development (Node.js, Express, SQL, MongoDB)</h4>
                      <ul>
                        <li>Designed and developed REST APIs for reconciliation workflows, uploads, reporting, authentication, and user management</li>
                        <li>Optimized SQL/MongoDB queries with server‑side pagination and filtering</li>
                        <li>Ensured data consistency across SQL and MongoDB with validations and audit logs</li>
                      </ul>
                    </div>

                    <div className="detail-section">
                      <h4>Deployment & Collaboration</h4>
                      <ul>
                        <li>Deployed production builds via Firebase Hosting; handled debugging and performance improvements</li>
                        <li>Collaborated with finance, operations, product, and QA in agile sprints across 13 portals</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Frontend</h3>
              <div className="skill-items">
                <span className="skill-item">React.js</span>
                <span className="skill-item">AgGridReact</span>
                <span className="skill-item">JavaScript</span>
                <span className="skill-item">HTML5</span>
                <span className="skill-item">CSS3</span>
                <span className="skill-item">Bootstrap</span>
                <span className="skill-item">Responsive Design</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Backend</h3>
              <div className="skill-items">
                <span className="skill-item">Node.js</span>
                <span className="skill-item">Express.js</span>
                <span className="skill-item">REST APIs</span>
                <span className="skill-item">Authentication</span>
                <span className="skill-item">API Integration</span>
                <span className="skill-item">SendGrid API</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Database</h3>
              <div className="skill-items">
                <span className="skill-item">SQL</span>
                <span className="skill-item">MySQL</span>
                <span className="skill-item">MongoDB</span>
                <span className="skill-item">Query Optimization</span>
                <span className="skill-item">Data Integrity</span>
                <span className="skill-item">Audit Logs</span>
                <span className="skill-item">Server-side Pagination</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Tools & Deployment</h3>
              <div className="skill-items">
                <span className="skill-item">Firebase Hosting</span>
                <span className="skill-item">Git</span>
                <span className="skill-item">GitHub</span>
                <span className="skill-item">Postman</span>
                <span className="skill-item">Agile Development</span>
                <span className="skill-item">Excel Reports</span>
                <span className="skill-item">Email Automation</span>
                <span className="skill-item">Large Data Handling</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="projects">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-header">
                <h3>B.E – Electronics & Communication</h3>
              </div>
              <p className="project-description">
                Sapthagiri College of Engineering (Aug 2019 – Jun 2023) — CGPA: 8.47
              </p>
            </div>
            <div className="project-card">
              <div className="project-header">
                <h3>Pre-University (PUC)</h3>
              </div>
              <p className="project-description">
                Sri Aurobindo Composite PU College (Jun 2018 – May 2019) — 85.56%
              </p>
            </div>
            <div className="project-card">
              <div className="project-header">
                <h3>SSLC</h3>
              </div>
              <p className="project-description">
                Balmohan Vidya Mandir (Jun 2016 – May 2017) — 87%
              </p>
            </div>
          </div>
          <p className="project-description" style={{ marginTop: '1rem' }}>
            Academic Aggregation: Consistently maintained above 80% across SSLC, PUC, and B.E.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Key Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-header">
                <h3>GST Reconciliation Portal</h3>
                <div className="project-links">
                  {/* <a href="#" className="project-link">Live</a>
                  <a href="#" className="project-link">Case Study</a> */}
                </div>
              </div>
              <p className="project-description">
                Core platform integrating 13 sub‑portals for invoice uploads, reconciliation dashboards,
                member/credential management, and reporting.
              </p>
              <div className="project-tech">
                <span>React.js</span>
                <span>Node.js</span>
                <span>MongoDB</span>
                <span>SQL</span>
                <span>AgGrid</span>
              </div>
            </div>

            <div className="project-card">
              <div className="project-header">
                <h3>Follow‑up Automation</h3>
                <div className="project-links">
                  {/* <a href="#" className="project-link">Live</a>
                  <a href="#" className="project-link">Case Study</a> */}
                </div>
              </div>
              <p className="project-description">
                Mass mailing system integrated with SendGrid and Excel reports, enabling automated
                vendor invoice collection and streamlined operations.
              </p>
              <div className="project-tech">
                <span>Node.js</span>
                {/* <span>Express.js</span> */}
                <span>SendGrid API</span>
                <span>Excel Reports</span>
              </div>
            </div>

            <div className="project-card">
              <div className="project-header">
                <h3>Dashboard & Reporting</h3>
                <div className="project-links">
                  {/* <a href="#" className="project-link">Live</a>
                  <a href="#" className="project-link">Case Study</a> */}
                </div>
              </div>
              <p className="project-description">
                Interactive charts and tables providing real‑time reconciliation summaries and discrepancy
                reports using AgGridReact.
              </p>
              <div className="project-tech">
                <span>React.js</span>
                <span>AgGridReact</span>
                <span>Data Visualization</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Projects (Academic) */}
      <section id="training" className="about">
        <div className="container">
          <h2 className="section-title">Training Projects (Academic)</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-header">
                <h3>Instagram-like Component (React)</h3>
              </div>
              <p className="project-description">
                Built liking, commenting, and saving features as a reusable React component.
              </p>
              <div className="project-tech">
                <span>React.js</span>
                <span>JavaScript</span>
                <span>CSS</span>
              </div>
            </div>
            <div className="project-card">
              <div className="project-header">
                <h3>COVID‑19 Vaccination Hub (JS)</h3>
              </div>
              <p className="project-description">
                Portal with form submission and data retrieval features using vanilla JavaScript.
              </p>
              <div className="project-tech">
                <span>JavaScript</span>
                <span>HTML</span>
                <span>CSS</span>
              </div>
            </div>
            <div className="project-card">
              <div className="project-header">
                <h3>Book Management System (MySQL)</h3>
              </div>
              <p className="project-description">
                Simple CRUD app with authentication as an academic project using MySQL.
              </p>
              <div className="project-tech">
                <span>MySQL</span>
                <span>CRUD</span>
                <span>Auth</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Let's work together!</h3>
              <p>
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-label">Email:</span>
                  <span className="contact-value">monicavalentina001@gmail.com</span>
                </div>
                <div className="contact-item">
                  <span className="contact-label">Phone:</span>
                  <span className="contact-value">+91 63625 59929</span>
                </div>
                <div className="contact-item">
                  <span className="contact-label">Location:</span>
                  <span className="contact-value">Bangalore, India</span>
                </div>
                <div className="contact-item">
                  <span className="contact-label">Available:</span>
                  <span className="contact-value">Open to opportunities</span>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <form action="https://formsubmit.co/monicavalentina001@gmail.com" method="POST">
                {/* FormSubmit settings */}
                <input type="hidden" name="_subject" value="New message from Monica's portfolio" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                {/* <input type="hidden" name="_next" value="https://thank-you.example.com" /> */}

                <div className="form-group">
                  <input name="name" type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input name="email" type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <input name="subject" type="text" placeholder="Subject" required />
                </div>
                <div className="form-group">
                  <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p>&copy; 2025 Monica Valentina M. All rights reserved.</p>
            <div className="footer-links">
              <a href="#">LinkedIn</a>
              <a href="#">Portfolio</a>
              <a href="mailto:monicavalentina001@gmail.com">Email</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
