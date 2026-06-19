<div align="center">
  <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" alt="JavaScript" width="80" />
  <h1>🛡️ CrimeVision AI</h1>
  <p><strong>Intelligent Conversational Crime Analytics Platform for Law Enforcement</strong></p>
  
  [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
  [![Status](https://img.shields.io/badge/Status-Active-success.svg)]()
  [![Platform](https://img.shields.io/badge/Platform-Web-lightgrey.svg)]()
</div>

---

## 📖 Overview

**CrimeVision AI** is a professional, government-grade law enforcement intelligence command dashboard designed to revolutionize crime analytics. By combining advanced data visualization, conversational AI, and predictive modeling, it provides a unified platform for investigators, analysts, policymakers, and supervisors to combat crime effectively.

The platform is designed as a highly interactive Single-Page Application (SPA) offering an intuitive "cyber-command" aesthetic and real-time operational feedback.

---

## ✨ Key Features

- **🧠 AI Intel Copilot**: An intelligent chat assistant with Voice Recognition, Text-to-Speech (TTS), and Explainable AI (XAI) confidence tracing. Can instantly generate auditable PDF reports of conversations.
- **🗺️ Predictive Crime Analytics**: Real-time geospatial hotspot mapping (powered by Leaflet.js) to track and analyze regional crime density.
- **🕸️ Criminal Network Graphing**: Interactive node-based relationship graphs (via Cytoscape.js) to isolate syndicates, communication cells, and money laundering paths.
- **📊 Visual Statistics & Risk Forecasting**: Advanced predictive charts (via Chart.js) detailing financial crime trends, sociological insights, and predictive risk indicators.
- **🗂️ Offender Profiling**: Comprehensive digital dossiers on known offenders, including biometric records, associates, and risk scoring.
- **🔐 Role-Based Access Control (RBAC)**: Secure multi-tier access profiles (Investigator, Analyst, Supervisor, Policymaker) with automated audit logging for all interactions.
- **🔔 Live Early Warning System**: Background notification poller simulating live secure telecom feeds and predictive threat alerts.

---

## 🛠️ Technology Stack

- **Core**: HTML5, CSS3 (Custom Cyberpunk/Command UI), Vanilla JavaScript (ES6+)
- **Mapping & Geospatial**: [Leaflet.js](https://leafletjs.com/)
- **Data Visualization**: [Chart.js](https://www.chartjs.org/)
- **Network Graphing**: [Cytoscape.js](https://js.cytoscape.org/)
- **Export Utility**: [html2pdf.js](https://ekoopmans.github.io/html2pdf.js/)
- **Hosting / Deployment**: Firebase Hosting Ready

---

## 🧩 Modules & Capabilities

1. **Overview Center (Dashboard)**: Central hub for live statistics, recent alerts, and quick actions.
2. **AI Intel Copilot**: Conversational interface for querying police databases using natural language.
3. **Crime Analytics**: Deep dive into geographical crime distribution.
4. **Criminal Network**: Visualize connections between entities, gangs (e.g., Kalyani Gang), and financial nodes.
5. **Offender Profiling**: Searchable catalog of criminal records and historical data.
6. **Decision Support**: Operational recommendations based on active data feeds.
7. **Financial Intel**: Tracking illicit financial flows and dummy accounts.
8. **Sociological Insights**: Demographic and socioeconomic crime correlations.
9. **Risk Forecasting**: Predictive algorithms highlighting emerging threat vectors.
10. **Security & Governance (Admin)**: System audit trails and role management.

---

## 🚀 Getting Started

### Prerequisites

Since this is a client-side web application, you only need a modern web browser to run it locally. For deployment, standard static hosting or Firebase is recommended.

### Local Execution

1. Clone the repository:
   ```bash
   git clone https://github.com/tejendra9068/CrimeVision-AI.git
   ```
2. Navigate to the directory:
   ```bash
   cd CrimeVision-AI
   ```
3. Run a local development server (Optional but recommended for strict MIME types):
   - Using Python: `python -m http.server 8000`
   - Using Node (npx): `npx serve-lite`
   - Or simply open `index.html` directly in your browser.

### Deployment (Firebase)

The project includes `.firebaserc` and `firebase.json` for rapid deployment to Firebase Hosting.

1. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```
2. Login and initialize:
   ```bash
   firebase login
   firebase init
   ```
3. Deploy to production:
   ```bash
   firebase deploy
   ```

---

## 🔒 Security Notice

This application handles sensitive (mocked) government intelligence data. Ensure that appropriate Content Security Policies (CSP) and Authentication layers are strictly enforced in production environments.

---
Access This Demo :- https://cyber-faaea.web.app/

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! 
Feel free to check [issues page](https://github.com/tejendra9068/CrimeVision-AI/issues).

## 📝 License

This project is [MIT](https://opensource.org/licenses/MIT) licensed.
