// CrimeVision AI Component Library
const svgIcons = {
  shield: `<svg class="nav-icon-svg" viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`,
  dashboard: `<svg class="nav-icon-svg" viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>`,
  chat: `<svg class="nav-icon-svg" viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>`,
  analytics: `<svg class="nav-icon-svg" viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>`,
  network: `<svg class="nav-icon-svg" viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="3"></circle><circle cx="5" cy="19" r="3"></circle><circle cx="19" cy="19" r="3"></circle><line x1="6.7" y1="17.1" x2="10.3" y2="6.9"></line><line x1="17.3" y1="17.1" x2="13.7" y2="6.9"></line><line x1="8" y1="19" x2="16" y2="19"></line></svg>`,
  profile: `<svg class="nav-icon-svg" viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>`,
  support: `<svg class="nav-icon-svg" viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>`,
  finance: `<svg class="nav-icon-svg" viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>`,
  social: `<svg class="nav-icon-svg" viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
  forecast: `<svg class="nav-icon-svg" viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M23 12a11 11 0 1 1-22 0 11 11 0 0 1 22 0z"></path><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path><path d="M2 12h20"></path></svg>`,
  xai: `<svg class="nav-icon-svg" viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`,
  admin: `<svg class="nav-icon-svg" viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>`,
  mic: `<svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>`,
  speaker: `<svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>`,
  pdf: `<svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`,
  logout: `<svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>`
};

const components = {
  // 1. LANDING PAGE VIEW
  renderLanding: function () {
    return `
      <div class="landing-container">
        <div class="glow-bg-radial"></div>
        <div class="cyber-scanline"></div>
        <div class="landing-crest-box">
          <div class="police-crest-neon">
            ${svgIcons.shield}
            <div class="radar-pulse-ring ring-1"></div>
            <div class="radar-pulse-ring ring-2"></div>
          </div>
          <h1 class="portal-title">CRIMEVISION AI</h1>
          <h3 class="portal-subtitle">Intelligent Conversational Crime Analytics Platform</h3>
          <div class="crest-divider">
            <span class="divider-line"></span>
            <span class="divider-dot"></span>
            <span class="divider-line"></span>
          </div>
          <p class="security-warning-text">
            WARNING: GOVERNMENT INTELLIGENCE NETWORK. RE-ROUTING TO ENCRYPTED CLOUD PORTAL. 
            AUTHORIZED LAW ENFORCEMENT PERSONNEL ONLY. ALL ACTIONS RECORDED BY AUDIT CORE.
          </p>
          <div class="landing-action-box">
            <button class="cyber-btn primary-glowing" id="btn-enter-gateway">
              <span class="btn-glitch-text">ACCESS ENCRYPTED PORTAL</span>
              <span class="btn-border-corner top-left"></span>
              <span class="btn-border-corner bottom-right"></span>
            </button>
          </div>
        </div>
        <div class="landing-footer">
          <span>SECURE SYSTEM: IP:${window.location.hostname || '10.20.10.1'} | PORT: 8443</span>
          <span>ROLE MANAGER: ENGAGED</span>
        </div>
      </div>
    `;
  },

  // 2. LOGIN PAGE VIEW
  renderLogin: function () {
    return `
      <div class="login-container">
        <div class="cyber-grid-overlay"></div>
        <div class="login-card glassmorphic-panel">
          <div class="card-glow-edge"></div>
          <div class="login-header">
            ${svgIcons.shield}
            <h2>CRIMEVISION AI</h2>
            <p>Police Analytics & Intelligence Gateway</p>
          </div>
          
          <div class="login-form-body">
            <div class="input-cyber-group">
              <label for="login-username">INVESTIGATOR ID / CREDITENTIALS</label>
              <div class="input-with-cyber-border">
                <input type="text" id="login-username" placeholder="Enter badge or staff ID..." value="POL-7749" required>
                <div class="active-underline"></div>
              </div>
            </div>

            <div class="input-cyber-group">
              <label for="login-password">SECURE KEYPASS</label>
              <div class="input-with-cyber-border">
                <input type="password" id="login-password" placeholder="••••••••" value="password" required>
                <div class="active-underline"></div>
              </div>
            </div>

            <!-- Role Simulator -->
            <div class="input-cyber-group">
              <label for="login-role">SELECT AUTHORIZED DUTY ROLE</label>
              <div class="custom-select-wrapper">
                <select id="login-role">
                  <option value="investigator" selected>Investigator (Rajesh Kumar)</option>
                  <option value="analyst">Intelligence Analyst (Dr. Sen)</option>
                  <option value="supervisor">Command Supervisor (Comm. Raghavan)</option>
                  <option value="policymaker">Strategic Policymaker (Min. Hegde)</option>
                </select>
                <div class="select-arrow">▼</div>
              </div>
            </div>

            <div class="biometric-mockup-box">
              <div class="fingerprint-scanner-box" id="fingerprint-sensor">
                <svg viewBox="0 0 100 100" class="fingerprint-icon">
                  <path d="M30,40 Q50,15 70,40 T30,80" fill="none" stroke="#00f0ff" stroke-width="2" />
                  <path d="M35,45 Q50,25 65,45 T35,75" fill="none" stroke="#00f0ff" stroke-width="2" />
                  <path d="M40,50 Q50,35 60,50 T40,70" fill="none" stroke="#00f0ff" stroke-width="2" />
                  <path d="M45,55 Q50,45 55,55 T45,65" fill="none" stroke="#00f0ff" stroke-width="2" />
                  <line x1="10" y1="50" x2="90" y2="50" stroke="rgba(255,51,85,0.7)" stroke-width="2" class="scanner-laser-line" />
                </svg>
                <div class="scanner-text">BIOMETRIC SIMULATOR (TOUCH TO SCAN)</div>
              </div>
            </div>

            <button class="cyber-btn primary-glowing w-100" id="btn-login-submit">
              <span>AUTHORIZE CONNECT</span>
              <span class="btn-border-corner top-left"></span>
              <span class="btn-border-corner bottom-right"></span>
            </button>
          </div>
        </div>
      </div>
    `;
  },

  // 3. MAIN DASHBOARD VIEW
  renderDashboard: function () {
    const kpis = mockData.kpis;
    
    // Generate recent logs mockup
    let logRows = "";
    mockData.auditLogs.slice(0, 4).forEach(log => {
      logRows += `
        <div class="quick-audit-item">
          <span class="quick-audit-time">${log.time.split(' ')[1]}</span>
          <span class="quick-audit-user">[${log.role.toUpperCase()}] ${log.user}</span>
          <span class="quick-audit-action">${log.action}</span>
        </div>
      `;
    });

    return `
      <div class="dashboard-viewport">
        <!-- Top Banner warning -->
        <div class="dashboard-alert-banner">
          <div class="banner-glow-neon"></div>
          <span class="banner-tag">SECURE NETWORK</span>
          <marquee class="banner-scroller" scrollamount="4">
            POLICE INTELLIGENCE COMS ACTIVE // CRITICAL ALERT: Emergent ransomware laundering activity tracked in Mumbai North // Heatmap density spike in HSR Sector 2 //
          </marquee>
        </div>

        <div class="dashboard-kpi-grid">
          <div class="kpi-card glassmorphic-panel">
            <div class="kpi-icon-wrapper cyan-neon">${svgIcons.shield}</div>
            <div class="kpi-details">
              <span class="kpi-title">ACTIVE CASES</span>
              <span class="kpi-val count-up" data-val="${kpis.activeCases}">${kpis.activeCases}</span>
            </div>
            <div class="kpi-graph-mock">
              <span class="spark-line" style="clip-path: polygon(0 80%, 20% 50%, 40% 70%, 60% 30%, 80% 60%, 100% 20%, 100% 100%, 0 100%);"></span>
            </div>
          </div>

          <div class="kpi-card glassmorphic-panel">
            <div class="kpi-icon-wrapper red-neon">⚠️</div>
            <div class="kpi-details">
              <span class="kpi-title">CRITICAL ALERTS</span>
              <span class="kpi-val count-up color-red" data-val="${kpis.criticalAlerts}">${kpis.criticalAlerts}</span>
            </div>
            <div class="kpi-graph-mock">
              <span class="spark-line spark-red" style="clip-path: polygon(0 80%, 15% 90%, 30% 20%, 50% 90%, 70% 30%, 100% 10%, 100% 100%, 0 100%);"></span>
            </div>
          </div>

          <div class="kpi-card glassmorphic-panel">
            <div class="kpi-icon-wrapper green-neon">${svgIcons.analytics}</div>
            <div class="kpi-details">
              <span class="kpi-title">SOLVED CASES RATE</span>
              <span class="kpi-val">${kpis.solvedCasesRate}</span>
            </div>
            <div class="kpi-graph-mock">
              <span class="spark-line spark-green" style="clip-path: polygon(0 60%, 20% 55%, 45% 45%, 70% 30%, 85% 25%, 100% 15%, 100% 100%, 0 100%);"></span>
            </div>
          </div>

          <div class="kpi-card glassmorphic-panel">
            <div class="kpi-icon-wrapper gold-neon">${svgIcons.finance}</div>
            <div class="kpi-details">
              <span class="kpi-title">CYBER INTEL TRAFFIC</span>
              <span class="kpi-val color-gold">${kpis.cybercrimeIncrease}</span>
            </div>
            <div class="kpi-graph-mock">
              <span class="spark-line spark-gold" style="clip-path: polygon(0 90%, 20% 70%, 40% 80%, 60% 40%, 80% 30%, 100% 5%, 100% 100%, 0 100%);"></span>
            </div>
          </div>
        </div>

        <div class="dashboard-main-columns">
          <!-- Column 1: Map Preview & Analytics Quicklook -->
          <div class="column-left">
            <div class="content-panel glassmorphic-panel h-350">
              <div class="panel-header">
                <h3>REAL-TIME INCIDENT GEOPLOTTER</h3>
                <span class="panel-badge">LIVE SATELLITE</span>
              </div>
              <div class="panel-body map-preview-container" id="dash-map-preview">
                <!-- Leaflet preview map will load here -->
              </div>
            </div>

            <div class="content-panel glassmorphic-panel mt-20 h-250">
              <div class="panel-header">
                <h3>CASE CATEGORY PROFILE</h3>
                <span class="panel-badge">DISTRIBUTION</span>
              </div>
              <div class="panel-body flex-center-content">
                <canvas id="dash-category-chart" style="max-height: 190px; width: 100%;"></canvas>
              </div>
            </div>
          </div>

          <!-- Column 2: System Logs & Copilot Assistant Quick Access -->
          <div class="column-right">
            <div class="content-panel glassmorphic-panel h-300">
              <div class="panel-header">
                <h3>CRIMEVISION COPILOT ASSISTANT</h3>
                <span class="panel-badge neon-green-pulse">AI CORE ACTIVE</span>
              </div>
              <div class="panel-body copilot-quick-body">
                <p class="quick-hint">Ask CrimeVision AI to search files, run maps, trace money, or profile criminals.</p>
                <div class="quick-chat-bubble">
                  <span class="bubble-bot-tag">COPILOT SYSTEM:</span>
                  "Greetings, ${mockData.users.find(u => u.role === window.appState.userRole).name}. System fully loaded. What investigation query can I solve for you?"
                </div>
                <div class="quick-input-row">
                  <input type="text" id="dash-quick-chat-input" placeholder="Type query (e.g., Phishing trends Bengaluru)...">
                  <button class="cyber-btn primary-glowing btn-square" id="dash-quick-chat-send">➜</button>
                </div>
              </div>
            </div>

            <div class="content-panel glassmorphic-panel mt-20 h-300">
              <div class="panel-header">
                <h3>SECURITY AUDIT LEDGER</h3>
                <span class="panel-badge">LIVE MONITOR</span>
              </div>
              <div class="panel-body">
                <div class="quick-audit-container">
                  ${logRows}
                </div>
                <div class="audit-integrity-bar">
                  <span>SYSTEM STATUS: <b class="color-green">${kpis.systemIntegrity}</b></span>
                  <a href="#admin" class="view-all-link">VIEW DETAILED AUDIT CORES</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  // 4. AI CONVERSATIONAL COGNITIVE ASSISTANT
  renderAIChat: function () {
    const lang = window.appState.language || 'en';
    const presets = mockData.copilotPresets[lang] || mockData.copilotPresets['en'];
    let presetHtml = "";
    presets.forEach(p => {
      presetHtml += `<button class="chat-preset-btn" onclick="app.setChatQuery('${p.replace(/'/g, "\\'")}')">${p}</button>`;
    });

    return `
      <div class="chat-copilot-container">
        <!-- Sidebar Presets -->
        <div class="chat-sidebar-glass">
          <div class="sidebar-header">
            <h4>QUICK INTEL QUERIES</h4>
          </div>
          <div class="preset-queries-box">
            ${presetHtml}
          </div>
          <div class="voice-feedback-panel">
            <div class="mic-radar-circle" id="voice-radar">
              <div class="pulse-ring pr-1"></div>
              <div class="pulse-ring pr-2"></div>
              ${svgIcons.mic}
            </div>
            <span class="voice-status-text" id="voice-status">V-Comms Idle</span>
            <button class="cyber-btn accent-glowing w-100" id="btn-toggle-voice-rec">
              <span>COMM CHANNEL MIC</span>
            </button>
          </div>
        </div>

        <!-- Chat Area -->
        <div class="chat-main-panel">
          <div class="chat-header-bar">
            <div class="chat-agent-badge">
              <div class="pulse-status-dot"></div>
              <div>
                <h3>CRIMEVISION COGNITIVE ASSISTANT</h3>
                <p>Government Secure Intelligence Copilot</p>
              </div>
            </div>
            
            <div class="chat-action-controls">
              <!-- Language Selector -->
              <div class="chat-lang-selector">
                <button class="lang-btn ${lang === 'en' ? 'active' : ''}" onclick="app.setLanguage('en')">EN</button>
                <button class="lang-btn ${lang === 'hi' ? 'active' : ''}" onclick="app.setLanguage('hi')">हिन्दी</button>
                <button class="lang-btn ${lang === 'kn' ? 'active' : ''}" onclick="app.setLanguage('kn')">ಕನ್ನಡ</button>
              </div>

              <!-- Export Button -->
              <button class="cyber-btn-outline" id="btn-export-chat-pdf" title="Export conversation to PDF">
                ${svgIcons.pdf}
                <span>EXPORT PDF</span>
              </button>
            </div>
          </div>

          <!-- Chat logs -->
          <div class="chat-messages-viewport" id="chat-messages-container">
            <!-- Simulated greeting -->
            <div class="chat-bubble-wrapper bot">
              <div class="chat-bubble-avatar">${svgIcons.shield}</div>
              <div class="chat-bubble-content">
                <div class="chat-bubble-meta">CrimeVision AI • System Copilot</div>
                <div class="chat-bubble-text">
                  Welcome back, officer. Platform initialized. Speech engines (English, Hindi, Kannada) ready. 
                  Provide a natural language query or tap the microphone to dictate your case request.
                </div>
              </div>
            </div>
          </div>

          <!-- Input Controls -->
          <div class="chat-input-bar">
            <textarea id="chat-input-textarea" rows="1" placeholder="Inquire cybercrime trends, suspect dossiers, laundering trails..."></textarea>
            <div class="chat-input-actions">
              <button class="input-action-btn" id="btn-chat-speech-speak" title="Speak Response">
                ${svgIcons.speaker}
              </button>
              <button class="cyber-btn primary-glowing btn-square-large" id="btn-chat-send">➜</button>
            </div>
          </div>
        </div>

        <!-- Evidence and References Pane -->
        <div class="chat-evidence-panel">
          <div class="panel-header">
            <h4>EVIDENCE CORES & CITATIONS</h4>
          </div>
          <div class="evidence-panel-body" id="evidence-citations-panel">
            <div class="empty-evidence-hint">
              <p>Execute an AI query to review verified references, source files, and reasoning trails.</p>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  // 5. CRIME ANALYTICS DASHBOARD
  renderAnalytics: function () {
    return `
      <div class="analytics-viewport">
        <!-- Control filtering bar -->
        <div class="analytics-filter-row glassmorphic-panel">
          <div class="filter-item">
            <label>JURISDICTION LEVEL</label>
            <select class="cyber-select">
              <option selected>State Police (Karnataka)</option>
              <option>National Intelligence Agency</option>
            </select>
          </div>
          <div class="filter-item">
            <label>METROPOLITAN AREA</label>
            <select class="cyber-select" id="analytics-city-select">
              <option value="Bangalore" selected>Bengaluru City</option>
              <option value="Cyberabad">Cyberabad Cyber Zone</option>
              <option value="Mumbai">Mumbai Metro</option>
              <option value="Delhi">Delhi NCR East</option>
            </select>
          </div>
          <div class="filter-item">
            <label>TIME RANGE</label>
            <select class="cyber-select">
              <option selected>Last 6 Months (YTD)</option>
              <option>Previous Fiscal Year</option>
              <option>Historical (5 Year Grid)</option>
            </select>
          </div>
          <button class="cyber-btn accent-glowing">
            <span>FILTER GRID</span>
          </button>
        </div>

        <!-- Main Analytics Grid -->
        <div class="analytics-grids-container">
          <!-- Row 1: Hotspot Map and Category Spacing -->
          <div class="analytics-row flex-row">
            <div class="analytics-panel glassmorphic-panel w-60 h-400">
              <div class="panel-header">
                <h3>INTERACTIVE INCIDENT HEATMAP</h3>
                <span class="panel-badge neon-red-pulse">LIVE SATELLITE HOPS</span>
              </div>
              <div class="panel-body p-0 relative">
                <div id="analytics-leaflet-map" class="analytics-map-canvas"></div>
                <div class="map-legend-overlay">
                  <div class="legend-title">Density Legend</div>
                  <div class="legend-row"><span class="legend-color density-critical"></span> Critical Focus (Ransomware)</div>
                  <div class="legend-row"><span class="legend-color density-high"></span> High Focus (UPI / Card Phishing)</div>
                  <div class="legend-row"><span class="legend-color density-medium"></span> General Patrol Areas</div>
                </div>
              </div>
            </div>

            <div class="analytics-panel glassmorphic-panel w-40 h-400">
              <div class="panel-header">
                <h3>CRIME CATEGORY SHARE</h3>
                <span class="panel-badge">POLAR GRAPH</span>
              </div>
              <div class="panel-body flex-center-content">
                <canvas id="chart-category-breakdown" class="canvas-height"></canvas>
              </div>
            </div>
          </div>

          <!-- Row 2: Monthly Trends and Seasonal Vectors -->
          <div class="analytics-row flex-row mt-20">
            <div class="analytics-panel glassmorphic-panel w-50 h-350">
              <div class="panel-header">
                <h3>MONTHLY INCIDENT VOLUMETRIC TRENDS</h3>
                <span class="panel-badge">LINE CHART</span>
              </div>
              <div class="panel-body flex-center-content">
                <canvas id="chart-monthly-trends" class="canvas-height"></canvas>
              </div>
            </div>

            <div class="analytics-panel glassmorphic-panel w-50 h-350">
              <div class="panel-header">
                <h3>SEASONAL PROFILE CORRELATIONS</h3>
                <span class="panel-badge">BAR CHART</span>
              </div>
              <div class="panel-body flex-center-content">
                <canvas id="chart-seasonal-patterns" class="canvas-height"></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  // 6. CRIMINAL RELATIONSHIP NETWORK ANALYSIS
  renderNetwork: function () {
    return `
      <div class="network-viewport">
        <!-- Left Side: Controls & Node Finder -->
        <div class="network-sidebar-controls glassmorphic-panel">
          <div class="panel-header">
            <h4>NETWORK DIALER</h4>
          </div>
          
          <div class="sidebar-block mt-15">
            <label class="control-label">SEARCH ENTITY / ID</label>
            <div class="input-with-cyber-border">
              <input type="text" id="network-search-input" placeholder="Name, Account, Vehicle..." value="Vikram Malhotra">
            </div>
            <button class="cyber-btn primary-glowing w-100 mt-10" id="btn-network-search">
              <span>LOCATE NODE</span>
            </button>
          </div>

          <div class="sidebar-block mt-20">
            <label class="control-label">RELATIONSHIP TYPE FILTERS</label>
            <div class="cyber-checkbox-list">
              <label class="checkbox-container">
                <input type="checkbox" checked id="chk-net-accused"> Accused Node (Red)
                <span class="checkmark chk-accused"></span>
              </label>
              <label class="checkbox-container">
                <input type="checkbox" checked id="chk-net-victim"> Victims (Green)
                <span class="checkmark chk-victim"></span>
              </label>
              <label class="checkbox-container">
                <input type="checkbox" checked id="chk-net-bank"> Bank Nodes (Cyan)
                <span class="checkmark chk-bank"></span>
              </label>
              <label class="checkbox-container">
                <input type="checkbox" checked id="chk-net-phones"> Phone Nodes (Magenta)
                <span class="checkmark chk-phones"></span>
              </label>
              <label class="checkbox-container">
                <input type="checkbox" checked id="chk-net-vehicles"> Vehicles (Purple)
                <span class="checkmark chk-vehicles"></span>
              </label>
            </div>
          </div>

          <div class="sidebar-block mt-20">
            <label class="control-label">GANG DETECTOR & CLUSTERING</label>
            <div class="gang-badge-list">
              <button class="gang-pill-btn active" id="btn-gang-all">ALL CLUSTERS</button>
              <button class="gang-pill-btn color-red-border" id="btn-gang-kalyani">KALYANI SYNDICATE</button>
              <button class="gang-pill-btn color-cyan-border" id="btn-gang-vanguard">VANGUARD SHELL</button>
            </div>
          </div>

          <div class="sidebar-block mt-20">
            <div class="network-action-buttons">
              <button class="cyber-btn-outline w-50" id="btn-net-zoomin">ZOOM +</button>
              <button class="cyber-btn-outline w-50" id="btn-net-zoomout">ZOOM -</button>
              <button class="cyber-btn-outline w-100 mt-10" id="btn-net-reset">RESET VIEWPORT</button>
            </div>
          </div>
        </div>

        <!-- Center: Interactive Cytoscape Canvas -->
        <div class="network-graph-panel glassmorphic-panel">
          <div class="panel-header">
            <h3>ORGANIZED CRIMINAL RELATIONSHIP GRAPH</h3>
            <span class="panel-badge neon-green-pulse">NEO4J SCHEMA INTEGRATED</span>
          </div>
          <div class="panel-body p-0 relative">
            <div id="network-cy-canvas" class="network-cy-canvas"></div>
            
            <div class="graph-help-toast">
              <span>Double-click node to inspect links // Drag to rearrange nodes // Hover for details</span>
            </div>
          </div>
        </div>

        <!-- Right Side: Entity Info Inspector -->
        <div class="network-inspector-panel glassmorphic-panel" id="network-info-inspector">
          <div class="panel-header">
            <h4>ENTITY DOSSIER INSPECTOR</h4>
          </div>
          <div class="panel-body" id="network-node-details">
            <div class="empty-inspector-hint">
              <p>Click a node in the graph map to pull security status, connected files, and risk coefficients.</p>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  // 7. OFFENDER PROFILING MODULE
  renderOffenderProfile: function () {
    // Generate list of offenders
    let listHtml = "";
    mockData.offenders.forEach(off => {
      listHtml += `
        <div class="offender-list-card ${off.riskLevel === 'CRITICAL' ? 'critical-border' : ''}" onclick="app.loadOffenderProfile('${off.id}')" id="off-card-${off.id}">
          <div class="off-card-header">
            <span class="off-id">${off.id}</span>
            <span class="off-risk-pill ${off.riskLevel.toLowerCase()}">${off.riskLevel}</span>
          </div>
          <div class="off-name">${off.name}</div>
          <div class="off-alias">Alias: ${off.alias}</div>
        </div>
      `;
    });

    return `
      <div class="offender-viewport">
        <!-- Left Side: Profile Catalogue -->
        <div class="offender-sidebar glassmorphic-panel">
          <div class="panel-header">
            <h4>OFFENDER DOSSIERS</h4>
          </div>
          <div class="offender-search-bar">
            <div class="input-with-cyber-border">
              <input type="text" id="offender-catalog-search" placeholder="Search profiles...">
            </div>
          </div>
          <div class="offender-list-container" id="offender-list-viewport">
            ${listHtml}
          </div>
        </div>

        <!-- Right Side: Detailed Dossier Panel -->
        <div class="offender-dossier-main glassmorphic-panel" id="offender-dossier-panel">
          <div class="empty-dossier-hint">
            <p>Select a profile from the database registry directory to display criminal timeline, Modus Operandi profiles, and recidivism risk metrics.</p>
          </div>
        </div>
      </div>
    `;
  },

  // Render individual profile dossier
  renderProfileDossier: function (offender) {
    // Draw risk score dial canvas or SVG
    const strokeDash = (2 * Math.PI * 40); // radius 40
    const offset = strokeDash - (offender.riskScore / 100) * strokeDash;

    // Timeline html
    let timelineHtml = "";
    offender.timeline.forEach(event => {
      timelineHtml += `
        <div class="timeline-node-item">
          <div class="node-marker-wrapper">
            <div class="node-line"></div>
            <div class="node-dot"></div>
          </div>
          <div class="node-content-card">
            <div class="node-date">${event.date}</div>
            <div class="node-title">${event.event}</div>
            <div class="node-status">[${event.status.toUpperCase()}]</div>
          </div>
        </div>
      `;
    });

    return `
      <div class="dossier-grid">
        <div class="dossier-column-left">
          <!-- Mugshot & Basic parameters -->
          <div class="profile-header-card glassmorphic-panel">
            <div class="card-glow-edge"></div>
            <div class="profile-photo-avatar">
              <div class="cyber-target-frame top-left"></div>
              <div class="cyber-target-frame top-right"></div>
              <div class="cyber-target-frame bottom-left"></div>
              <div class="cyber-target-frame bottom-right"></div>
              <div class="avatar-photo-mock flex-center-content">
                <svg viewBox="0 0 24 24" width="80" height="80" stroke="rgba(0,240,255,0.4)" stroke-width="1.5" fill="none">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
            </div>
            <h2 class="profile-name">${offender.name}</h2>
            <p class="profile-alias">"${offender.alias}"</p>
            <div class="profile-meta-grid">
              <div class="meta-item"><span class="meta-label">ID:</span> <span class="meta-val">${offender.id}</span></div>
              <div class="meta-item"><span class="meta-label">AGE:</span> <span class="meta-val">${offender.age} (${offender.gender})</span></div>
              <div class="meta-item"><span class="meta-label">STATUS:</span> <span class="meta-val text-neon-red">${offender.status}</span></div>
              <div class="meta-item"><span class="meta-label">PRIORITY:</span> <span class="meta-val text-neon-gold">RANK ${offender.priority}</span></div>
            </div>
          </div>

          <!-- Risk assessment & Behavioral scores -->
          <div class="risk-gauge-card glassmorphic-panel mt-20">
            <div class="panel-header">
              <h4>BEHAVIORAL RISK ASSESSMENT</h4>
            </div>
            <div class="gauge-meter-wrapper">
              <div class="risk-dial-gauge">
                <svg width="100" height="100" class="gauge-svg">
                  <circle cx="50" cy="50" r="40" stroke="rgba(255,255,255,0.05)" stroke-width="6" fill="none" />
                  <circle cx="50" cy="50" r="40" stroke="#00f0ff" stroke-width="6" fill="none" 
                    stroke-dasharray="${strokeDash}" stroke-dashoffset="${offset}" class="gauge-progress-circle" />
                </svg>
                <div class="gauge-text-overlay">
                  <span class="risk-score">${offender.riskScore}</span>
                  <span class="risk-lbl">${offender.riskLevel}</span>
                </div>
              </div>
              <div class="behavioral-progress-bars">
                <div class="progress-bar-item">
                  <div class="bar-lbl">SOCIOPATHY RATIO</div>
                  <div class="bar-track"><div class="bar-fill red" style="width: ${offender.behavioralProfile.sociopathy === 'Extreme' ? '95%' : '80%'};"></div></div>
                </div>
                <div class="progress-bar-item">
                  <div class="bar-lbl">INTELLIGENCE COEFFICIENT</div>
                  <div class="bar-track"><div class="bar-fill blue" style="width: ${offender.behavioralProfile.intelligence === 'Very High' ? '92%' : '60%'};"></div></div>
                </div>
                <div class="progress-bar-item">
                  <div class="bar-lbl">RECIDIVISM RATE</div>
                  <div class="bar-track"><div class="bar-fill gold" style="width: ${offender.behavioralProfile.recidivismRisk};"></div></div>
                </div>
              </div>
            </div>
            <div class="behavior-notes mt-15">
              <span>INVESTIGATOR RECOMMENDATIONS:</span>
              <p>${offender.behavioralProfile.notes}</p>
            </div>
          </div>
        </div>

        <div class="dossier-column-right">
          <!-- Modus Operandi -->
          <div class="modus-operandi-card glassmorphic-panel">
            <div class="panel-header">
              <h4>MODUS OPERANDI (MO) SIGNATURE</h4>
            </div>
            <div class="panel-body">
              <p class="mo-desc">${offender.modusOperandi}</p>
            </div>
          </div>

          <!-- Criminal History Timeline -->
          <div class="criminal-history-card glassmorphic-panel mt-20">
            <div class="panel-header">
              <h4>CRIMINAL LOG TIMELINE</h4>
            </div>
            <div class="panel-body">
              <div class="dossier-timeline">
                ${timelineHtml}
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  // 8. INVESTIGATOR DECISION SUPPORT SYSTEM
  renderInvestigatorSupport: function () {
    const caseData = mockData.cases[0];
    
    // Timeline HTML
    let timelineHtml = "";
    caseData.timeline.forEach(event => {
      const [date, text] = event.split(' ', 2); // Split datetime and action
      timelineHtml += `
        <div class="case-log-item">
          <span class="log-time">${event.substring(0, 16)}</span>
          <span class="log-desc">${event.substring(17)}</span>
        </div>
      `;
    });

    // Similar cases
    let similarHtml = "";
    caseData.similarCases.forEach(sim => {
      similarHtml += `
        <div class="similar-case-card">
          <div class="sim-header">
            <span class="sim-id">${sim.id}</span>
            <span class="sim-title">${sim.title}</span>
          </div>
        </div>
      `;
    });

    // Suspects recommendations
    let suspectHtml = "";
    caseData.suspects.forEach(sus => {
      suspectHtml += `
        <div class="suspect-recommend-card">
          <div class="sus-info">
            <span class="sus-name">${sus.name}</span>
            <span class="sus-conf">${sus.confidence}</span>
          </div>
        </div>
      `;
    });

    // Evidence correlation matrix
    let evidenceHtml = "";
    caseData.evidenceMatrix.forEach(ev => {
      evidenceHtml += `
        <div class="evidence-correlation-row">
          <div class="ev-col ev-title">${ev.evidence}</div>
          <div class="ev-col ev-link">${ev.linkedTo}</div>
          <div class="ev-col ev-strength"><span class="strength-tag tag-${ev.strength.toLowerCase()}">${ev.strength}</span></div>
        </div>
      `;
    });

    return `
      <div class="support-viewport">
        <!-- Left Side: Case Context & Chronology -->
        <div class="support-case-details glassmorphic-panel">
          <div class="panel-header">
            <h3>ACTIVE CASE PROFILE: ${caseData.id}</h3>
            <span class="panel-badge">DIGITAL TWIN DETECTIVE</span>
          </div>
          <div class="panel-body">
            <h4 class="case-sub-title">${caseData.title}</h4>
            
            <div class="support-block mt-15">
              <label class="support-label">AI AUTO-GENERATED SUMMARY Dossier</label>
              <p class="summary-paragraph">${caseData.summary}</p>
            </div>

            <div class="support-block mt-20">
              <label class="support-label">CHRONOLOGY TIMELINE LOG</label>
              <div class="case-log-list">
                ${timelineHtml}
              </div>
            </div>
          </div>
        </div>

        <!-- Right Side: AI Analytics Recommendations -->
        <div class="support-recommendations glassmorphic-panel">
          <div class="panel-header">
            <h3>DECISION MATRIX & RECOMMENDATIONS</h3>
            <span class="panel-badge neon-red-pulse">COGNITIVE SUGGESTIONS</span>
          </div>
          <div class="panel-body">
            
            <!-- Recommendations & Similarity Matrix -->
            <div class="rec-columns-row">
              <div class="rec-col">
                <label class="support-label">SIMILAR CASE RECOMMENDATIONS</label>
                <div class="similar-cases-list">
                  ${similarHtml}
                </div>
              </div>
              
              <div class="rec-col">
                <label class="support-label">POTENTIAL SUSPECT LINKS (AI CONFIDENCE)</label>
                <div class="suspects-recommend-list">
                  ${suspectHtml}
                </div>
              </div>
            </div>

            <!-- Evidence Correlation -->
            <div class="evidence-matrix-block mt-25">
              <label class="support-label">EVIDENCE CORRELATION DASHBOARD</label>
              <div class="evidence-correlation-table">
                <div class="evidence-correlation-header">
                  <div class="ev-col">EVIDENCE SOURCE</div>
                  <div class="ev-col">CORRELATED ENTITY</div>
                  <div class="ev-col">RELATION STRENGTH</div>
                </div>
                <div class="evidence-correlation-body">
                  ${evidenceHtml}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    `;
  },

  // 9. FINANCIAL CRIME INTELLIGENCE
  renderFinancialCrime: function () {
    // Suspect bank account listings
    let listHtml = "";
    mockData.transactions.forEach(tx => {
      listHtml += `
        <div class="financial-transaction-row ${tx.status === 'Suspicious' ? 'flagged-tx' : ''}">
          <div class="tx-cell font-mono">${tx.id}</div>
          <div class="tx-cell font-mono">${tx.from}</div>
          <div class="tx-cell">➜</div>
          <div class="tx-cell font-mono">${tx.to}</div>
          <div class="tx-cell amount-cell font-mono">${tx.amount}</div>
          <div class="tx-cell date-cell">${tx.date.split(' ')[0]}</div>
          <div class="tx-cell"><span class="tx-flag-pill ${tx.status.toLowerCase()}">${tx.flag || 'Completed'}</span></div>
        </div>
      `;
    });

    return `
      <div class="finance-viewport">
        <!-- Money trail topology mapping -->
        <div class="finance-flow-card glassmorphic-panel">
          <div class="panel-header">
            <h3>SUSPICIOUS TRANSACTION money trail FLOW</h3>
            <span class="panel-badge">FRAUD RING IDENTIFICATION</span>
          </div>
          <div class="panel-body">
            <!-- Visual money trail SVG -->
            <div class="money-trail-flow-diagram">
              <div class="flow-step-node source">
                <div class="node-dot-finance bg-red"></div>
                <span class="node-title-finance">Dummy Corp (AC-99320)</span>
                <span class="node-val-finance">₹4.8 Crore Source</span>
              </div>
              
              <div class="flow-arrow-connector">
                <svg viewBox="0 0 100 20" class="flow-arrow-svg">
                  <line x1="0" y1="10" x2="90" y2="10" stroke="#00f0ff" stroke-width="2" stroke-dasharray="5 3" class="flowing-dots" />
                  <polygon points="90,5 100,10 90,15" fill="#00f0ff" />
                </svg>
                <span class="flow-label-finance">Layer 1 Split</span>
              </div>

              <div class="flow-splitter-column">
                <div class="flow-step-node intermediary">
                  <div class="node-dot-finance bg-cyan"></div>
                  <span class="node-title-finance">Mule West (AC-88122)</span>
                  <span class="node-val-finance">₹1.80 Crore</span>
                </div>
                <div class="flow-step-node intermediary mt-10">
                  <div class="node-dot-finance bg-cyan"></div>
                  <span class="node-title-finance">Mule East (AC-44211)</span>
                  <span class="node-val-finance">₹1.50 Crore</span>
                </div>
                <div class="flow-step-node intermediary mt-10">
                  <div class="node-dot-finance bg-cyan"></div>
                  <span class="node-title-finance">Mule South (AC-44212)</span>
                  <span class="node-val-finance">₹1.50 Crore</span>
                </div>
              </div>

              <div class="flow-arrow-connector">
                <svg viewBox="0 0 100 20" class="flow-arrow-svg">
                  <line x1="0" y1="10" x2="90" y2="10" stroke="#ff3355" stroke-width="2" stroke-dasharray="5 3" class="flowing-dots" />
                  <polygon points="90,5 100,10 90,15" fill="#ff3355" />
                </svg>
                <span class="flow-label-finance">Cashout Exit</span>
              </div>

              <div class="flow-step-node destination">
                <div class="node-dot-finance bg-purple"></div>
                <span class="node-title-finance">ATM / Hard Wallets</span>
                <span class="node-val-finance">Mumbai/Pune Terminals</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Ledger transactions table -->
        <div class="finance-ledger-card glassmorphic-panel mt-20">
          <div class="panel-header">
            <h3>TRANSACTION AUDIT LEDGER</h3>
            <span class="panel-badge">SUSPICIOUS FLAGS DISCOVERED</span>
          </div>
          <div class="panel-body p-0">
            <div class="financial-ledger-table">
              <div class="financial-ledger-header">
                <div class="tx-cell">TXID</div>
                <div class="tx-cell">ORIGIN ACCOUNT</div>
                <div class="tx-cell"></div>
                <div class="tx-cell">DESTINATION ACCOUNT</div>
                <div class="tx-cell">VOLUME</div>
                <div class="tx-cell">TIMESTAMP</div>
                <div class="tx-cell">LAUNDERING STATUS</div>
              </div>
              <div class="financial-ledger-body">
                ${listHtml}
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  // 10. SOCIOLOGICAL CRIME INSIGHTS
  renderSociologicalInsights: function () {
    return `
      <div class="sociological-viewport">
        <!-- Row 1: Demographics distribution -->
        <div class="sociological-row flex-row">
          <div class="sociological-panel glassmorphic-panel w-50 h-380">
            <div class="panel-header">
              <h3>AGE-BASED CRIME DISTRIBUTION PROFILE</h3>
              <span class="panel-badge">DEMOGRAPHICS</span>
            </div>
            <div class="panel-body flex-center-content">
              <canvas id="chart-socio-age" class="canvas-height"></canvas>
            </div>
          </div>

          <div class="sociological-panel glassmorphic-panel w-50 h-380">
            <div class="panel-header">
              <h3>GENDER-BASED FRAUD DIVISION</h3>
              <span class="panel-badge">GENDER METRICS</span>
            </div>
            <div class="panel-body flex-center-content">
              <canvas id="chart-socio-gender" class="canvas-height"></canvas>
            </div>
          </div>
        </div>

        <!-- Row 2: Impact variables & employment metrics -->
        <div class="sociological-row flex-row mt-20">
          <div class="sociological-panel glassmorphic-panel w-33 h-320">
            <div class="panel-header">
              <h3>SOCIO-ECONOMIC IMPACT INDEX</h3>
              <span class="panel-badge">INCOME BUCKETS</span>
            </div>
            <div class="panel-body flex-center-content">
              <canvas id="chart-socio-economic" style="max-height: 220px; width: 100%;"></canvas>
            </div>
          </div>

          <div class="sociological-panel glassmorphic-panel w-33 h-320">
            <div class="panel-header">
              <h3>URBANIZATION & CRIME FOCUS CORRELATION</h3>
              <span class="panel-badge">DENSITY SPLITS</span>
            </div>
            <div class="panel-body flex-center-content">
              <canvas id="chart-socio-urban" style="max-height: 220px; width: 100%;"></canvas>
            </div>
          </div>

          <div class="sociological-panel glassmorphic-panel w-34 h-320">
            <div class="panel-header">
              <h3>EDUCATION INDEX SHARE IN CYBER FRAUD</h3>
              <span class="panel-badge">GRADUATION SEGMENTS</span>
            </div>
            <div class="panel-body flex-center-content">
              <canvas id="chart-socio-education" style="max-height: 220px; width: 100%;"></canvas>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  // 11. CRIME FORECASTING & EARLY WARNING
  renderForecasting: function () {
    // Generate risk hotspots panel
    let riskHtml = "";
    mockData.forecasting.riskIndexNextMonth.forEach(risk => {
      riskHtml += `
        <div class="forecast-risk-item">
          <div class="risk-top">
            <span class="risk-area">${risk.area}</span>
            <span class="risk-prob color-red">${risk.riskLevel}</span>
          </div>
          <div class="risk-bottom">
            <span>Primary Driver: ${risk.factor}</span>
          </div>
        </div>
      `;
    });

    // Alert notifications
    let alertHtml = "";
    mockData.forecasting.alerts.forEach(al => {
      alertHtml += `
        <div class="forecast-alert-card border-${al.type.toLowerCase()}">
          <div class="al-header">
            <span class="al-tag tag-${al.type.toLowerCase()}">${al.type}</span>
            <span class="al-title">${al.title}</span>
            <span class="al-time">${al.time}</span>
          </div>
          <div class="al-msg">${al.msg}</div>
        </div>
      `;
    });

    return `
      <div class="forecasting-viewport">
        <!-- Column left: Maps and alerts -->
        <div class="forecast-column-left">
          <div class="forecast-panel glassmorphic-panel h-400">
            <div class="panel-header">
              <h3>PREDICTIVE CRIME HOTSPOT SIMULATION</h3>
              <span class="panel-badge neon-red-pulse">PROBABILITY RADAR</span>
            </div>
            <div class="panel-body p-0 relative">
              <div id="forecast-leaflet-map" class="forecast-map-canvas"></div>
              <div class="map-time-scrubber">
                <span>TIME RESOLUTION: JUL 2026 (FORECAST MODEL V4.2)</span>
              </div>
            </div>
          </div>

          <!-- Alert feed -->
          <div class="forecast-panel glassmorphic-panel mt-20 h-300">
            <div class="panel-header">
              <h3>EARLY WARNING SYSTEM ALERT LOGS</h3>
              <span class="panel-badge">TELEMETRY ANOMALIES</span>
            </div>
            <div class="panel-body">
              <div class="forecast-alerts-list">
                ${alertHtml}
              </div>
            </div>
          </div>
        </div>

        <!-- Column right: Metrics and factors -->
        <div class="forecast-column-right">
          <!-- Next month risk indexes -->
          <div class="forecast-panel glassmorphic-panel h-350">
            <div class="panel-header">
              <h3>HIGH RISK JURISDICTIONS (NEXT 30 DAYS)</h3>
              <span class="panel-badge">PREDICTIONS</span>
            </div>
            <div class="panel-body">
              <div class="forecast-risk-list">
                ${riskHtml}
              </div>
            </div>
          </div>

          <!-- Future trend charts -->
          <div class="forecast-panel glassmorphic-panel mt-20 h-350">
            <div class="panel-header">
              <h3>PREDICTED MONTHLY TRENDS (Q3 - Q4 Forecast)</h3>
              <span class="panel-badge">AUTO-REGRESSIVE LSTM MODEL</span>
            </div>
            <div class="panel-body flex-center-content">
              <canvas id="chart-forecast-trends" class="canvas-height"></canvas>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  // 12. EXPLAINABLE AI (XAI) VIEW
  renderExplainableAI: function () {
    return `
      <div class="xai-viewport">
        <!-- Central reasoning trace card -->
        <div class="xai-left-panel glassmorphic-panel">
          <div class="panel-header">
            <h3>AI LOGICAL REASONING PATHWAY</h3>
            <span class="panel-badge">XAI TRACE REGISTER</span>
          </div>
          <div class="panel-body">
            <p class="xai-intro">
              This panel displays the exact logical sequence, rule activations, and vector query steps
              taken by the neural network layers to generate the case summaries and suspect recommendations.
            </p>

            <div class="xai-reasoning-tree">
              <div class="tree-node parent">
                <div class="tree-badge">QUERY</div>
                <div class="tree-node-content">
                  <h5>Input Query Analysis</h5>
                  <p>System received text query: "Analyze laundering trails on Case-2026-X88."</p>
                </div>
              </div>

              <div class="tree-connector-line"></div>

              <div class="tree-node branch">
                <div class="tree-badge bg-blue">PARSE</div>
                <div class="tree-node-content">
                  <h5>Entity Extraction (Confidence: 99.4%)</h5>
                  <p>Extracted Entity: Account node AC-99320 (Vanguard Logistics).</p>
                </div>
              </div>

              <div class="tree-connector-line"></div>

              <div class="tree-node branch">
                <div class="tree-badge bg-cyan">QUERY GRAPH</div>
                <div class="tree-node-content">
                  <h5>Neo4j Layer Scan (Depth: 4 Hops)</h5>
                  <p>Traversed transactional edges matching transfer volume > ₹1 Crore.</p>
                </div>
              </div>

              <div class="tree-connector-line"></div>

              <div class="tree-node leaf">
                <div class="tree-badge bg-red">DECISION</div>
                <div class="tree-node-content">
                  <h5>Pattern Match Triggered (Confidence: 91.2%)</h5>
                  <p>Matches Shell Integration Topology template. Dispatched warning flag "Rapid Layering".</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right metrics and details -->
        <div class="xai-right-panel glassmorphic-panel">
          <div class="panel-header">
            <h3>TRANSPARENCY & CONFIDENCE SCOREBOARD</h3>
            <span class="panel-badge">MODEL AUDIT</span>
          </div>
          <div class="panel-body">
            <div class="xai-confidence-grid">
              <div class="confidence-meter-card">
                <span class="conf-title">COGNITIVE CONFIDENCE</span>
                <span class="conf-percentage text-neon-cyan">94%</span>
                <p class="conf-lbl">High integrity validation match.</p>
              </div>

              <div class="confidence-meter-card">
                <span class="conf-title">TRANSPARENCY INDEX</span>
                <span class="conf-percentage text-neon-green">98.4%</span>
                <p class="conf-lbl">All weights & reasoning pathways fully inspectable.</p>
              </div>
            </div>

            <!-- Accountability audit ledger summary -->
            <div class="accountability-box mt-20">
              <h4 class="support-label">ACCOUNTABILITY CERTIFICATE</h4>
              <p class="summary-paragraph font-sm">
                CrimeVision AI operates under ethical police AI directive MHA-2026. Every recommendation has been compiled 
                using verifiable legal documents (FIR logs, transaction hashes). The system guarantees no bias targeting age, 
                caste, or location markers. All decision weights are logged for judicial review if demanded.
              </p>
              <div class="security-seal-row mt-15">
                <span class="seal-tag badge-green">FIPS-140-3 COMPLIANT</span>
                <span class="seal-tag badge-cyan">MODEL: Llama-4-CrimeGuard</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  // 13. ADMIN PANEL (SECURITY & GOVERNANCE)
  renderAdmin: function () {
    // Generate full table logs
    let tableRows = "";
    mockData.auditLogs.forEach(log => {
      tableRows += `
        <tr class="cyber-table-row">
          <td>${log.time}</td>
          <td><span class="user-badge-cell">${log.user}</span></td>
          <td><span class="role-badge-cell role-${log.role.toLowerCase()}">${log.role}</span></td>
          <td>${log.action}</td>
          <td class="ip-cell font-mono">${log.ip}</td>
        </tr>
      `;
    });

    // RBAC status block
    const userRole = window.appState.userRole;
    let accessibilityBanner = "";
    if (userRole === "investigator") {
      accessibilityBanner = `<div class="access-level-banner warning">INVESTIGATOR ACCESS MODE: Financial and Admin settings have strict audit overrides.</div>`;
    } else if (userRole === "analyst") {
      accessibilityBanner = `<div class="access-level-banner success">ANALYST ACCESS MODE: All graph nodes and transaction databases editable. Admin panel read-only.</div>`;
    } else if (userRole === "supervisor") {
      accessibilityBanner = `<div class="access-level-banner alert">COMMAND SUPERVISOR ACCESS MODE: All options active. Audit log modification disabled.</div>`;
    } else {
      accessibilityBanner = `<div class="access-level-banner info">STRATEGIC POLICYMAKER MODE: Summary widgets and sociological data prioritised. Node detail queries read-only.</div>`;
    }

    return `
      <div class="admin-viewport">
        <!-- System Access Banner -->
        ${accessibilityBanner}

        <!-- Top row widgets -->
        <div class="admin-top-widgets mt-15">
          <div class="admin-panel glassmorphic-panel w-50 h-300">
            <div class="panel-header">
              <h3>ROLE-BASED PERMISSION POLICY CONFIGURATION</h3>
              <span class="panel-badge">RBAC MATRIX</span>
            </div>
            <div class="panel-body">
              <div class="rbac-grid-table">
                <div class="rbac-header-row">
                  <div class="rbac-cell">MODULE VIEW</div>
                  <div class="rbac-cell">INVESTIGATOR</div>
                  <div class="rbac-cell">ANALYST</div>
                  <div class="rbac-cell">SUPERVISOR</div>
                  <div class="rbac-cell">POLICYMAKER</div>
                </div>
                
                <div class="rbac-body-rows">
                  <div class="rbac-row">
                    <div class="rbac-cell font-bold">Conversational Chat</div>
                    <div class="rbac-cell text-neon-green">FULL</div>
                    <div class="rbac-cell text-neon-green">FULL</div>
                    <div class="rbac-cell text-neon-green">FULL</div>
                    <div class="rbac-cell text-neon-cyan">READ-ONLY</div>
                  </div>
                  <div class="rbac-row">
                    <div class="rbac-cell font-bold">Relational Network</div>
                    <div class="rbac-cell text-neon-cyan">READ-ONLY</div>
                    <div class="rbac-cell text-neon-green">FULL (EDITABLE)</div>
                    <div class="rbac-cell text-neon-green">FULL</div>
                    <div class="rbac-cell text-neon-red">DENIED</div>
                  </div>
                  <div class="rbac-row">
                    <div class="rbac-cell font-bold">Financial Trails</div>
                    <div class="rbac-cell text-neon-red">DENIED</div>
                    <div class="rbac-cell text-neon-green">FULL</div>
                    <div class="rbac-cell text-neon-green">FULL</div>
                    <div class="rbac-cell text-neon-cyan">READ-ONLY</div>
                  </div>
                  <div class="rbac-row">
                    <div class="rbac-cell font-bold">Audit Ledgers</div>
                    <div class="rbac-cell text-neon-red">DENIED</div>
                    <div class="rbac-cell text-neon-red">DENIED</div>
                    <div class="rbac-cell text-neon-green">FULL</div>
                    <div class="rbac-cell text-neon-cyan">READ-ONLY</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="admin-panel glassmorphic-panel w-50 h-300">
            <div class="panel-header">
              <h3>GOVERNANCE POLICY COMPLIANCE STATUS</h3>
              <span class="panel-badge">AUDIT POLICY</span>
            </div>
            <div class="panel-body">
              <div class="policy-status-container">
                <div class="status-item-card">
                  <span class="lbl-status">DATA MINING CONSENT</span>
                  <span class="val-status text-neon-green">VERIFIED COMPLIANT (Sec 43A IT Act)</span>
                </div>
                <div class="status-item-card">
                  <span class="lbl-status">TELECOM TELEMETRY LOGS</span>
                  <span class="val-status text-neon-gold">REQUIRES COURT WARRANT FOR STAGE 3</span>
                </div>
                <div class="status-item-card">
                  <span class="lbl-status">EXPLAINABILITY CONFIDENCE TARGET</span>
                  <span class="val-status text-neon-green">> 90% CONFIDENCE MINIMUM MET</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Audit log ledger table -->
        <div class="admin-audit-panel glassmorphic-panel mt-20">
          <div class="panel-header">
            <h3>DETAILED SECURITY AUDIT LEDGER (GLOBAL SYSTEMS logs)</h3>
            <span class="panel-badge">ENCRYPTED TELEMETRY TRACE</span>
          </div>
          <div class="panel-body p-0">
            <div class="admin-audit-table-wrapper">
              <table class="admin-audit-table">
                <thead>
                  <tr class="cyber-table-hdr">
                    <th>TIMESTAMP</th>
                    <th>USER ACTOR</th>
                    <th>DUTY ROLE</th>
                    <th>ACTION REGISTERED</th>
                    <th>REMOTE GATEWAY IP</th>
                  </tr>
                </thead>
                <tbody id="audit-log-tbody">
                  ${tableRows}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  // 14. INITIALIZE LIBRARY HOOKS post-render
  initAnalyticsCharts: function () {
    // 1. Initialise Leaflet Map
    const mapElement = document.getElementById('analytics-leaflet-map');
    if (mapElement && window.L) {
      const map = L.map('analytics-leaflet-map').setView([12.94, 77.62], 12);
      
      // Load dark-themed CartoDB tiles
      L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; CartoDB',
        subdomains: 'abcd',
        maxZoom: 20
      }).addTo(map);

      // Plot mock hotspot coordinates
      mockData.analytics.hotspots.forEach(spot => {
        const circle = L.circle([spot.lat, spot.lng], {
          color: '#ff3355',
          fillColor: '#ff3355',
          fillOpacity: spot.intensity * 0.4,
          radius: 400 + (spot.count * 8)
        }).addTo(map);

        circle.bindPopup(`<b>${spot.name}</b><br/>Type: ${spot.type}<br/>Incidents logged: ${spot.count}`);
      });
    }

    // 2. Category share Polar Area chart
    const catCanvas = document.getElementById('chart-category-breakdown');
    if (catCanvas && window.Chart) {
      new Chart(catCanvas.getContext('2d'), {
        type: 'polarArea',
        data: {
          labels: mockData.analytics.categories.labels,
          datasets: [{
            data: mockData.analytics.categories.datasets,
            backgroundColor: [
              'rgba(0, 240, 255, 0.6)', // Cyan
              'rgba(255, 51, 85, 0.6)',  // Red
              'rgba(255, 183, 0, 0.6)',  // Gold
              'rgba(168, 85, 247, 0.6)', // Purple
              'rgba(236, 72, 153, 0.6)', // Pink
              'rgba(16, 185, 129, 0.6)'  // Green
            ],
            borderColor: 'rgba(255,255,255,0.1)',
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'right',
              labels: { color: '#ffffff', font: { family: 'Inter', size: 10 } }
            }
          },
          scales: {
            r: {
              grid: { color: 'rgba(255,255,255,0.05)' },
              angleLines: { color: 'rgba(255,255,255,0.05)' },
              ticks: { display: false }
            }
          }
        }
      });
    }

    // 3. Monthly Trends Chart
    const trendCanvas = document.getElementById('chart-monthly-trends');
    if (trendCanvas && window.Chart) {
      new Chart(trendCanvas.getContext('2d'), {
        type: 'line',
        data: {
          labels: mockData.analytics.trends.months,
          datasets: [
            {
              label: 'Cybercrime Spikes',
              data: mockData.analytics.trends.cyber,
              borderColor: '#00f0ff',
              backgroundColor: 'rgba(0, 240, 255, 0.05)',
              tension: 0.3,
              fill: true
            },
            {
              label: 'Thefts & Breakins',
              data: mockData.analytics.trends.theft,
              borderColor: '#a855f7',
              backgroundColor: 'transparent',
              tension: 0.1
            },
            {
              label: 'Financial Fraud',
              data: mockData.analytics.trends.fraud,
              borderColor: '#ffb700',
              backgroundColor: 'transparent',
              tension: 0.2
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { labels: { color: '#ffffff', font: { family: 'Inter', size: 10 } } }
          },
          scales: {
            x: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#ffffff' } },
            y: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#ffffff' } }
          }
        }
      });
    }

    // 4. Seasonal patterns
    const seasonalCanvas = document.getElementById('chart-seasonal-patterns');
    if (seasonalCanvas && window.Chart) {
      new Chart(seasonalCanvas.getContext('2d'), {
        type: 'bar',
        data: {
          labels: mockData.analytics.seasonal.quarters,
          datasets: [
            {
              label: 'Cyber Incidents %',
              data: mockData.analytics.seasonal.cyber,
              backgroundColor: '#00f0ff'
            },
            {
              label: 'Theft Spikes %',
              data: mockData.analytics.seasonal.theft,
              backgroundColor: '#ff3355'
            },
            {
              label: 'Financial Fraud %',
              data: mockData.analytics.seasonal.fraud,
              backgroundColor: '#ffb700'
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { labels: { color: '#ffffff', font: { family: 'Inter', size: 10 } } }
          },
          scales: {
            x: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#ffffff' } },
            y: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#ffffff' } }
          }
        }
      });
    }
  },

  // Network Visualizer using Cytoscape.js
  initNetworkGraph: function (filterType = 'all', gangFilter = 'all') {
    const canvas = document.getElementById('network-cy-canvas');
    if (!canvas || !window.cytoscape) return;

    // Filter nodes and edges based on inputs
    let rawNodes = mockData.networks.nodes;
    let rawEdges = mockData.networks.edges;

    // If checkbox filters are custom (we fetch dynamic status in app.js and call this)
    if (filterType !== 'all') {
      // Custom filters applied
      const activeTypes = filterType; // is an array of types like ['accused', 'victim', 'bank']
      rawNodes = rawNodes.filter(n => activeTypes.includes(n.data.type));
      // Re-map edges to only include nodes that exist
      const activeNodeIds = rawNodes.map(n => n.data.id);
      rawEdges = rawEdges.filter(e => activeNodeIds.includes(e.data.source) && activeNodeIds.includes(e.data.target));
    }

    // Gang filter overlays
    if (gangFilter !== 'all') {
      if (gangFilter === 'kalyani') {
        const kalyaniSubset = ['n_kalyani', 'n_rohit', 'n_bank2', 'n_veh1', 'n_loc1'];
        rawNodes = rawNodes.filter(n => kalyaniSubset.includes(n.data.id));
        const activeNodeIds = rawNodes.map(n => n.data.id);
        rawEdges = rawEdges.filter(e => activeNodeIds.includes(e.data.source) && activeNodeIds.includes(e.data.target));
      } else if (gangFilter === 'vanguard') {
        const vanguardSubset = ['n_vikram', 'n_bank1', 'n_bank2', 'n_v1', 'n_v2', 'n_ph1', 'n_ph2', 'n_loc1'];
        rawNodes = rawNodes.filter(n => vanguardSubset.includes(n.data.id));
        const activeNodeIds = rawNodes.map(n => n.data.id);
        rawEdges = rawEdges.filter(e => activeNodeIds.includes(e.data.source) && activeNodeIds.includes(e.data.target));
      }
    }

    const cy = cytoscape({
      container: canvas,
      elements: {
        nodes: rawNodes,
        edges: rawEdges
      },
      style: [
        {
          selector: 'node',
          style: {
            'background-color': 'data(color)',
            'label': 'data(label)',
            'color': '#ffffff',
            'font-size': '10px',
            'font-family': 'Inter',
            'text-valign': 'bottom',
            'text-margin-y': 4,
            'width': '30px',
            'height': '30px',
            'border-width': '2px',
            'border-color': 'rgba(255,255,255,0.2)',
            'transition-property': 'width height border-color',
            'transition-duration': '0.2s'
          }
        },
        {
          selector: 'edge',
          style: {
            'width': 2,
            'line-color': 'rgba(0, 240, 255, 0.4)',
            'target-arrow-color': 'rgba(0, 240, 255, 0.6)',
            'target-arrow-shape': 'triangle',
            'curve-style': 'bezier',
            'label': 'data(label)',
            'color': '#a0aec0',
            'font-size': '8px',
            'font-family': 'Inter',
            'text-rotation': 'autorotate',
            'text-margin-y': -8
          }
        },
        {
          selector: 'node:selected',
          style: {
            'width': '38px',
            'height': '38px',
            'border-width': '3px',
            'border-color': '#ffffff',
          }
        }
      ],
      layout: {
        name: 'cose',
        idealEdgeLength: 100,
        nodeOverlap: 20,
        refresh: 20,
        fit: true,
        padding: 30,
        randomize: false,
        componentSpacing: 100,
        nodeRepulsion: 400000,
        edgeElasticity: 100,
        nestingFactor: 5,
        gravity: 80,
        numIter: 1000,
        initialTemp: 200,
        coolingFactor: 0.95,
        minTemp: 1.0
      }
    });

    // Node selection inspector callback
    cy.on('tap', 'node', function (evt) {
      const node = evt.target;
      const data = node.data();
      const inspector = document.getElementById('network-node-details');
      
      if (inspector) {
        let detailsHtml = `
          <div class="inspector-card">
            <div class="ins-type role-${data.type}">${data.type.toUpperCase()}</div>
            <h4 class="ins-label">${data.label}</h4>
            <div class="ins-sub">${data.sub}</div>
            
            <div class="ins-meta-list mt-15">
              <div class="ins-meta-item">
                <span class="ins-meta-lbl">RISK COEFFICIENT:</span>
                <span class="ins-meta-val font-bold ${data.risk && data.risk.includes('CRITICAL') ? 'text-neon-red' : 'text-neon-cyan'}">${data.risk || 'N/A'}</span>
              </div>
              <div class="ins-meta-item">
                <span class="ins-meta-lbl">CONNECTIONS COUNT:</span>
                <span class="ins-meta-val">${node.degree()} active links</span>
              </div>
            </div>

            <div class="connected-nodes-box mt-20">
              <span class="support-label">CONNECTED PATHWAYS</span>
              <ul class="connected-list">
        `;

        // Get adjacent nodes and edges
        node.neighborhood().each(function (ele) {
          if (ele.isNode()) {
            detailsHtml += `<li>${ele.data('label')} (${ele.data('type')})</li>`;
          }
        });

        detailsHtml += `
              </ul>
            </div>
            
            <div class="ins-actions mt-25">
              ${data.type === 'accused' ? `<button class="cyber-btn primary-glowing w-100" onclick="app.jumpToOffender('${data.id.replace('n_', 'OFF-')}')">OPEN DOSSIER</button>` : ''}
            </div>
          </div>
        `;
        inspector.innerHTML = detailsHtml;
        
        // Log action in audit table
        utils.addAuditLog(mockData.users.find(u => u.role === window.appState.userRole).name, window.appState.userRole, `Inspected node ${data.label} in relational graph`);
      }
    });

    // Make cytoscape reference accessible globally for zooming
    window.cyInstance = cy;
  },

  // 14. Forecasing graphs
  initForecastingCharts: function () {
    // 1. Predictive map Leaflet
    const mapElement = document.getElementById('forecast-leaflet-map');
    if (mapElement && window.L) {
      const map = L.map('forecast-leaflet-map').setView([12.90, 77.63], 12);
      
      // Load dark-themed CartoDB tiles
      L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; CartoDB',
        subdomains: 'abcd',
        maxZoom: 20
      }).addTo(map);

      // Plot forecast coordinate circles
      mockData.forecasting.riskIndexNextMonth.forEach(risk => {
        if (risk.coordinates) {
          const circle = L.circle([risk.coordinates.lat, risk.coordinates.lng], {
            color: '#ffb700',
            fillColor: '#ffb700',
            fillOpacity: 0.35,
            radius: 900 // Larger circle for forecasted predictive boundaries
          }).addTo(map);

          // Add a pulsing warning wave
          circle.bindPopup(`<b>${risk.area} (PREDICTION ZONE)</b><br/>Risk Level: ${risk.riskLevel}<br/>Driver: ${risk.factor}`);
        }
      });
    }

    // 2. Predicted trendline
    const trendCanvas = document.getElementById('chart-forecast-trends');
    if (trendCanvas && window.Chart) {
      new Chart(trendCanvas.getContext('2d'), {
        type: 'line',
        data: {
          labels: mockData.forecasting.forecastTrend.months,
          datasets: [{
            label: 'Forecasted Cybercrimes (LSTM Prediction)',
            data: mockData.forecasting.forecastTrend.predictedIncidents,
            borderColor: '#ff3355',
            backgroundColor: 'rgba(255, 51, 85, 0.15)',
            borderDash: [5, 5],
            tension: 0.4,
            fill: true
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { labels: { color: '#ffffff', font: { family: 'Inter', size: 10 } } }
          },
          scales: {
            x: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#ffffff' } },
            y: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#ffffff' } }
          }
        }
      });
    }
  },

  // 15. Sociological demographic charts
  initSociologicalCharts: function () {
    const ageCanvas = document.getElementById('chart-socio-age');
    if (ageCanvas && window.Chart) {
      new Chart(ageCanvas.getContext('2d'), {
        type: 'bar',
        data: {
          labels: mockData.sociological.demographics.age,
          datasets: [{
            label: 'Offenders Volume',
            data: mockData.sociological.demographics.counts,
            backgroundColor: 'rgba(0, 240, 255, 0.7)',
            borderColor: '#00f0ff',
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false }
          },
          scales: {
            x: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#ffffff' } },
            y: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#ffffff' } }
          }
        }
      });
    }

    const genCanvas = document.getElementById('chart-socio-gender');
    if (genCanvas && window.Chart) {
      new Chart(genCanvas.getContext('2d'), {
        type: 'doughnut',
        data: {
          labels: mockData.sociological.gender.labels,
          datasets: [{
            data: mockData.sociological.gender.datasets,
            backgroundColor: ['#00f0ff', '#ec4899', '#4b5563'],
            borderWidth: 1,
            borderColor: 'rgba(255,255,255,0.1)'
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'right',
              labels: { color: '#ffffff' }
            }
          }
        }
      });
    }

    const econCanvas = document.getElementById('chart-socio-economic');
    if (econCanvas && window.Chart) {
      new Chart(econCanvas.getContext('2d'), {
        type: 'pie',
        data: {
          labels: mockData.sociological.socioEconomic.labels,
          datasets: [{
            data: mockData.sociological.socioEconomic.datasets,
            backgroundColor: ['#ffb700', '#00f0ff', '#10b981'],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } }
        }
      });
    }

    const urbanCanvas = document.getElementById('chart-socio-urban');
    if (urbanCanvas && window.Chart) {
      new Chart(urbanCanvas.getContext('2d'), {
        type: 'radar',
        data: {
          labels: mockData.sociological.urbanCorrelation.labels,
          datasets: [{
            label: 'Incident Rate Focus',
            data: mockData.sociological.urbanCorrelation.crimeRates,
            borderColor: '#ff3355',
            backgroundColor: 'rgba(255,51,85,0.2)',
            borderWidth: 2
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            r: {
              grid: { color: 'rgba(255,255,255,0.1)' },
              angleLines: { color: 'rgba(255,255,255,0.1)' },
              ticks: { display: false }
            }
          }
        }
      });
    }

    const eduCanvas = document.getElementById('chart-socio-education');
    if (eduCanvas && window.Chart) {
      new Chart(eduCanvas.getContext('2d'), {
        type: 'bar',
        data: {
          labels: mockData.sociological.educationFactors.labels,
          datasets: [{
            label: 'Cybercrime Concentration %',
            data: mockData.sociological.educationFactors.cybercrimeShare,
            backgroundColor: ['#00f0ff', '#a855f7', '#ffb700']
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            x: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#ffffff' } },
            y: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#ffffff' } }
          }
        }
      });
    }
  },

  // Mini preview dashboard map
  initDashboardMap: function () {
    const mapElement = document.getElementById('dash-map-preview');
    if (mapElement && window.L) {
      const map = L.map('dash-map-preview', {
        zoomControl: false,
        attributionControl: false
      }).setView([12.93, 77.62], 12);
      
      L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        maxZoom: 20
      }).addTo(map);

      // Plot just top 3 hotspots as small indicators
      mockData.analytics.hotspots.slice(0, 3).forEach(spot => {
        L.circle([spot.lat, spot.lng], {
          color: '#00f0ff',
          fillColor: '#00f0ff',
          fillOpacity: 0.4,
          radius: 300
        }).addTo(map);
      });
    }

    // Category chart on Dashboard preview
    const catCanvas = document.getElementById('dash-category-chart');
    if (catCanvas && window.Chart) {
      new Chart(catCanvas.getContext('2d'), {
        type: 'bar',
        data: {
          labels: mockData.analytics.categories.labels,
          datasets: [{
            data: mockData.analytics.categories.datasets,
            backgroundColor: 'rgba(0, 240, 255, 0.75)',
            borderWidth: 0
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            x: { display: true, grid: { display: false }, ticks: { color: '#a0aec0', font: { size: 9 } } },
            y: { display: false }
          }
        }
      });
    }
  }
};

window.components = components;
window.svgIcons = svgIcons;
