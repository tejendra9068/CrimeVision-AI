// CrimeVision AI - Application Core Controller

// 1. Central Application State
window.appState = {
  isAuthenticated: false,
  userRole: "investigator", // default role on load
  userName: "Inspector Rajesh Kumar",
  language: "en",
  currentView: "landing",
  activeOffenderId: "OFF-8823" // default profile loaded
};

const app = {
  // Initialize App
  init: function () {
    console.log("CrimeVision AI Platform initializing...");
    this.bindGlobalEvents();
    this.navigate('landing');
    
    // Periodically send background notifications to mimic live police feeds
    this.startNotificationPoller();
  },

  // Event bindings
  bindGlobalEvents: function () {
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.substring(1);
      if (hash) this.navigate(hash);
    });
  },

  // Single-Page Routing Engine
  navigate: function (view) {
    // Auth Guard
    if (view !== 'landing' && view !== 'login' && !window.appState.isAuthenticated) {
      window.location.hash = 'login';
      view = 'login';
    }

    window.appState.currentView = view;
    
    // Render dynamic wrapper
    const rootEl = document.getElementById('app-root');
    if (!rootEl) return;

    if (view === 'landing') {
      rootEl.innerHTML = components.renderLanding();
      this.bindLandingEvents();
    } else if (view === 'login') {
      rootEl.innerHTML = components.renderLogin();
      this.bindLoginEvents();
    } else {
      // Shell template containing sidebar and top bar
      this.renderAppShell(view);
    }
  },

  // Render main portal frame
  renderAppShell: function (activeView) {
    const user = mockData.users.find(u => u.role === window.appState.userRole) || mockData.users[0];
    
    // Active menu highlights
    const menuItems = [
      { id: "dashboard", label: "Overview Center", icon: svgIcons.dashboard },
      { id: "copilot", label: "AI Intel Copilot", icon: svgIcons.chat },
      { id: "analytics", label: "Crime Analytics", icon: svgIcons.analytics },
      { id: "network", label: "Criminal Network", icon: svgIcons.network },
      { id: "offenders", label: "Offender Profiling", icon: svgIcons.profile },
      { id: "support", label: "Decision Support", icon: svgIcons.support },
      { id: "financial", label: "Financial Intel", icon: svgIcons.finance },
      { id: "sociological", label: "Sociological Insights", icon: svgIcons.social },
      { id: "forecasting", label: "Risk Forecasting", icon: svgIcons.forecast },
      { id: "xai", label: "Explainable AI", icon: svgIcons.xai },
      { id: "admin", label: "Security & Governance", icon: svgIcons.admin }
    ];

    let menuHtml = "";
    menuItems.forEach(item => {
      const activeClass = item.id === activeView ? 'active' : '';
      menuHtml += `
        <li>
          <a href="#${item.id}" class="menu-item-link ${activeClass}">
            ${item.icon}
            <span>${item.label}</span>
          </a>
        </li>
      `;
    });

    const rootEl = document.getElementById('app-root');
    rootEl.innerHTML = `
      <div class="app-shell-container">
        <!-- Sidebar Navigation -->
        <aside class="app-sidebar">
          <div>
            <div class="sidebar-brand-core">
              ${svgIcons.shield}
              <div class="brand-text-core">
                <h3>CRIMEVISION AI</h3>
                <span>GOVERNMENT INTELLIGENCE</span>
              </div>
            </div>
            <ul class="sidebar-menu-list">
              ${menuHtml}
            </ul>
          </div>
          
          <div class="sidebar-footer-profile">
            <div class="user-badge-name" style="font-size: 10px;">
              <div>${user.name}</div>
              <div style="color:var(--text-muted); font-size:8px;">${user.badge}</div>
            </div>
            <button class="logout-icon-btn" onclick="app.logout()" title="Logout secure session">
              ${svgIcons.logout}
            </button>
          </div>
        </aside>

        <!-- Main Viewport Content -->
        <main class="app-main-viewport">
          <header class="app-topbar">
            <div class="topbar-left-breadcrumbs">
              <h2>${activeView.toUpperCase()} MODULE CONTROL</h2>
            </div>
            
            <div class="topbar-right-controls">
              <!-- Live Role Selector -->
              <div class="user-role-badge-pill">
                <span class="user-badge-name">ROLE:</span>
                <select onchange="app.switchRole(this.value)">
                  <option value="investigator" ${window.appState.userRole === 'investigator' ? 'selected' : ''}>Investigator</option>
                  <option value="analyst" ${window.appState.userRole === 'analyst' ? 'selected' : ''}>Analyst</option>
                  <option value="supervisor" ${window.appState.userRole === 'supervisor' ? 'selected' : ''}>Supervisor</option>
                  <option value="policymaker" ${window.appState.userRole === 'policymaker' ? 'selected' : ''}>Policymaker</option>
                </select>
              </div>

              <div class="notification-bell-btn" onclick="utils.dispatchAlert('Live Broadcast', 'Secure telecom feed active on district 4', 'info')">
                🔔
                <span class="notif-badge-dot"></span>
              </div>
            </div>
          </header>

          <div class="app-view-content" id="viewport-body">
            <!-- Dynamic view loads here -->
          </div>
        </main>
      </div>

      <!-- Live Notification Drawer Popup -->
      <div id="notifications-container"></div>
    `;

    // Load active component contents
    const bodyEl = document.getElementById('viewport-body');
    if (activeView === 'dashboard') {
      bodyEl.innerHTML = components.renderDashboard();
      components.initDashboardMap();
      this.bindDashboardEvents();
    } else if (activeView === 'copilot') {
      bodyEl.innerHTML = components.renderAIChat();
      this.bindChatEvents();
    } else if (activeView === 'analytics') {
      bodyEl.innerHTML = components.renderAnalytics();
      components.initAnalyticsCharts();
      this.bindAnalyticsEvents();
    } else if (activeView === 'network') {
      bodyEl.innerHTML = components.renderNetwork();
      components.initNetworkGraph();
      this.bindNetworkEvents();
    } else if (activeView === 'offenders') {
      bodyEl.innerHTML = components.renderOffenderProfile();
      this.loadOffenderProfile(window.appState.activeOffenderId);
      this.bindOffenderEvents();
    } else if (activeView === 'support') {
      bodyEl.innerHTML = components.renderInvestigatorSupport();
    } else if (activeView === 'financial') {
      bodyEl.innerHTML = components.renderFinancialCrime();
    } else if (activeView === 'sociological') {
      bodyEl.innerHTML = components.renderSociologicalInsights();
      components.initSociologicalCharts();
    } else if (activeView === 'forecasting') {
      bodyEl.innerHTML = components.renderForecasting();
      components.initForecastingCharts();
    } else if (activeView === 'xai') {
      bodyEl.innerHTML = components.renderExplainableAI();
    } else if (activeView === 'admin') {
      bodyEl.innerHTML = components.renderAdmin();
    }
  },

  // 3. LANDING PAGE LOGIC
  bindLandingEvents: function () {
    const btnEnter = document.getElementById('btn-enter-gateway');
    if (btnEnter) {
      btnEnter.addEventListener('click', () => {
        window.location.hash = 'login';
      });
    }
  },

  // 4. LOGIN PAGE LOGIC
  bindLoginEvents: function () {
    const btnLogin = document.getElementById('btn-login-submit');
    const fingerprint = document.getElementById('fingerprint-sensor');
    
    const executeLogin = () => {
      const selectedRole = document.getElementById('login-role').value;
      window.appState.isAuthenticated = true;
      window.appState.userRole = selectedRole;
      
      const user = mockData.users.find(u => u.role === selectedRole);
      window.appState.userName = user.name;

      // Add success audit log
      utils.addAuditLog(user.name, selectedRole, "Biometric authentication completed successfully. Session active.");
      
      window.location.hash = 'dashboard';
    };

    if (btnLogin) {
      btnLogin.addEventListener('click', executeLogin);
    }
    if (fingerprint) {
      fingerprint.addEventListener('click', () => {
        // Biometric feedback animation then login
        const text = fingerprint.querySelector('.scanner-text');
        text.innerText = "VERIFYING BIOMETRICS...";
        text.style.color = "var(--color-green)";
        fingerprint.querySelector('.scanner-laser-line').style.stroke = "var(--color-green)";
        
        setTimeout(() => {
          text.innerText = "ACCESS GRANTED";
          setTimeout(executeLogin, 800);
        }, 1200);
      });
    }
  },

  // 5. ROLE MANAGER ENGINE
  switchRole: function (newRole) {
    const prevRole = window.appState.userRole;
    window.appState.userRole = newRole;
    const user = mockData.users.find(u => u.role === newRole);
    window.appState.userName = user.name;

    utils.dispatchAlert("Access Policy Modified", `Role permission switched to ${newRole.toUpperCase()}. View refreshed.`, "info");
    utils.addAuditLog(user.name, newRole, `Role policy updated from ${prevRole} to ${newRole}`);
    
    // Refresh current view to apply RBAC matrix layout rules
    this.navigate(window.appState.currentView);
  },

  logout: function () {
    utils.addAuditLog(window.appState.userName, window.appState.userRole, "User signed out of secure shell session.");
    window.appState.isAuthenticated = false;
    window.location.hash = 'login';
  },

  // 6. DASHBOARD EVENTS
  bindDashboardEvents: function () {
    const btnSend = document.getElementById('dash-quick-chat-send');
    const input = document.getElementById('dash-quick-chat-input');
    
    const handleQuickChat = () => {
      const query = input.value.trim();
      if (!query) return;

      // Cache search query and jump directly to Chat Assistant
      window.quickSearchQuery = query;
      window.location.hash = 'copilot';
    };

    if (btnSend && input) {
      btnSend.addEventListener('click', handleQuickChat);
      input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleQuickChat();
      });
    }
  },

  // 7. COPILOT AI CHAT ASSISTANT LOGIC
  bindChatEvents: function () {
    const btnSend = document.getElementById('btn-chat-send');
    const btnSpeak = document.getElementById('btn-chat-speech-speak');
    const btnMic = document.getElementById('btn-toggle-voice-rec');
    const input = document.getElementById('chat-input-textarea');
    const chatContainer = document.getElementById('chat-messages-container');
    const pdfBtn = document.getElementById('btn-export-chat-pdf');

    // Check if there's a cached search query from the main dashboard dashboard
    if (window.quickSearchQuery) {
      input.value = window.quickSearchQuery;
      window.quickSearchQuery = null;
      setTimeout(() => this.submitChatMessage(), 200);
    }

    if (btnSend) {
      btnSend.addEventListener('click', () => this.submitChatMessage());
    }

    if (input) {
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault();
          this.submitChatMessage();
        }
      });
    }

    if (pdfBtn) {
      pdfBtn.addEventListener('click', () => {
        utils.exportToPDF('chat-messages-container', `CrimeVision_Chat_Audit_${Date.now()}.pdf`);
      });
    }

    // Voice recognition bindings
    if (btnMic) {
      btnMic.addEventListener('click', () => {
        const radar = document.getElementById('voice-radar');
        const status = document.getElementById('voice-status');

        if (utils.voiceRecognizer.isListening) {
          utils.voiceRecognizer.stop((listening, msg) => {
            radar.classList.remove('active');
            status.innerText = msg;
          });
        } else {
          utils.voiceRecognizer.start((resultText) => {
            input.value = resultText;
            this.submitChatMessage();
          }, (listening, msg) => {
            if (listening) radar.classList.add('active');
            else radar.classList.remove('active');
            status.innerText = msg;
          });
        }
      });
    }

    // Speech speak feedback toggle
    if (btnSpeak) {
      btnSpeak.addEventListener('click', () => {
        if (utils.speechSynthesizer.isSpeaking) {
          utils.speechSynthesizer.cancel();
          btnSpeak.classList.remove('active');
        } else {
          // Speak the last bot reply
          const botBubbles = chatContainer.querySelectorAll('.chat-bubble-wrapper.bot .chat-bubble-text');
          if (botBubbles.length > 0) {
            const lastBotMsg = botBubbles[botBubbles.length - 1].innerText;
            btnSpeak.classList.add('active');
            utils.speechSynthesizer.speak(lastBotMsg, window.appState.language, null, () => {
              btnSpeak.classList.remove('active');
            });
          }
        }
      });
    }
  },

  setChatQuery: function (text) {
    const input = document.getElementById('chat-input-textarea');
    if (input) {
      input.value = text;
      this.submitChatMessage();
    }
  },

  setLanguage: function (lang) {
    window.appState.language = lang;
    utils.dispatchAlert("Language Altered", `Cognitive engines loaded translation profiles: ${lang.toUpperCase()}`, "info");
    this.navigate('copilot'); // Reload Chat component layout to update preset lists
  },

  submitChatMessage: function () {
    const input = document.getElementById('chat-input-textarea');
    const chatContainer = document.getElementById('chat-messages-container');
    if (!input || !chatContainer) return;

    const query = input.value.trim();
    if (!query) return;

    // Render User message
    const userWrapper = document.createElement('div');
    userWrapper.className = 'chat-bubble-wrapper user';
    userWrapper.innerHTML = `
      <div class="chat-bubble-avatar">👤</div>
      <div class="chat-bubble-content">
        <div class="chat-bubble-meta">Inspector Rajesh Kumar</div>
        <div class="chat-bubble-text">${query}</div>
      </div>
    `;
    chatContainer.appendChild(userWrapper);
    input.value = "";
    chatContainer.scrollTop = chatContainer.scrollHeight;

    // Log query in audit trails
    utils.addAuditLog(window.appState.userName, window.appState.userRole, `Copilot AI Query: "${query.substring(0, 40)}..."`);

    // Simulated typing response
    const botWrapper = document.createElement('div');
    botWrapper.className = 'chat-bubble-wrapper bot';
    botWrapper.innerHTML = `
      <div class="chat-bubble-avatar">${svgIcons.shield}</div>
      <div class="chat-bubble-content">
        <div class="chat-bubble-meta">CrimeVision AI • Computing...</div>
        <div class="chat-bubble-text">● ● ● Analyzing database registries...</div>
      </div>
    `;
    chatContainer.appendChild(botWrapper);
    chatContainer.scrollTop = chatContainer.scrollHeight;

    // Find match keyword in response databases
    let matchKey = "general";
    const lowerQuery = query.toLowerCase();
    if (lowerQuery.includes("trend") || lowerQuery.includes("phishing") || lowerQuery.includes("cybercrime")) {
      matchKey = "trends";
    } else if (lowerQuery.includes("vikram") || lowerQuery.includes("spike") || lowerQuery.includes("off-8823")) {
      matchKey = "vikram";
    } else if (lowerQuery.includes("financial") || lowerQuery.includes("ac-99320") || lowerQuery.includes("trans")) {
      matchKey = "financial";
    } else if (lowerQuery.includes("gang") || lowerQuery.includes("kalyani") || lowerQuery.includes("sector 4")) {
      matchKey = "gang";
    }

    setTimeout(() => {
      let botResponse = "";
      let responseCores = null;

      if (matchKey !== "general") {
        responseCores = mockData.copilotResponses[matchKey];
        botResponse = responseCores.text[window.appState.language] || responseCores.text['en'];
      } else {
        // General smart response fallback
        botResponse = `Command Query: "${query}" parsed. Ingesting active FIR datasets... No explicit match found in current active nodes. Let me query district indices.`;
      }

      botWrapper.querySelector('.chat-bubble-meta').innerHTML = `CrimeVision AI • System Copilot`;
      botWrapper.querySelector('.chat-bubble-text').innerHTML = botResponse;
      chatContainer.scrollTop = chatContainer.scrollHeight;

      // Speak automatically if TTS active
      const speakBtn = document.getElementById('btn-chat-speech-speak');
      if (speakBtn && speakBtn.classList.contains('active')) {
        utils.speechSynthesizer.speak(botResponse, window.appState.language, null, () => {
          speakBtn.classList.remove('active');
        });
      }

      // Populate evidence panel side menu
      this.populateEvidenceCitations(responseCores);

    }, 1800);
  },

  populateEvidenceCitations: function (responseCores) {
    const pane = document.getElementById('evidence-citations-panel');
    if (!pane) return;

    if (!responseCores) {
      pane.innerHTML = `
        <div class="empty-evidence-hint">
          <p>No verified document indexes associated with general fallbacks.</p>
        </div>
      `;
      return;
    }

    let citationsHtml = `
      <div class="evidence-title-section">AI TRACE CONFIDENCE</div>
      <div class="evidence-list-item" style="text-align:center;">
        <span class="conf-percentage text-neon-cyan" style="font-size:24px; font-weight:900;">${responseCores.confidence}%</span>
        <span class="ev-verif" style="display:block; margin-top:5px;">✓ ETHICALLY VERIFIED</span>
      </div>

      <div class="evidence-title-section">VERIFIED RECORD SOURCES</div>
    `;

    responseCores.sources.forEach(src => {
      citationsHtml += `
        <div class="evidence-list-item">
          <div class="ev-header">
            <span class="ev-ref">${src.ref}</span>
            <span class="ev-verif">${src.status}</span>
          </div>
          <span class="ev-type">${src.type}</span>
          <span class="ev-date">Extracted: ${src.date}</span>
        </div>
      `;
    });

    citationsHtml += `<div class="evidence-title-section">EXPLAINABLE REASONING STEPS</div>`;
    responseCores.reasoning.forEach(step => {
      citationsHtml += `<div class="xai-trail-step">${step}</div>`;
    });

    pane.innerHTML = citationsHtml;
  },

  // 8. CRIME ANALYTICS EVENTS
  bindAnalyticsEvents: function () {
    const citySelector = document.getElementById('analytics-city-select');
    if (citySelector) {
      citySelector.addEventListener('change', (e) => {
        const city = e.target.value;
        utils.dispatchAlert("Map Focus Shifted", `Loading coordinate feeds for metropolitan sector: ${city}`, "info");
        utils.addAuditLog(window.appState.userName, window.appState.userRole, `Shifted map center focus coordinates to ${city}`);
        
        // Re-initialize map to reflect city changes in prototype
        setTimeout(() => components.initAnalyticsCharts(), 200);
      });
    }
  },

  // 9. CRIMINAL NETWORK EVENT BINDINGS
  bindNetworkEvents: function () {
    const btnSearch = document.getElementById('btn-network-search');
    const input = document.getElementById('network-search-input');
    const btnZoomIn = document.getElementById('btn-net-zoomin');
    const btnZoomOut = document.getElementById('btn-net-zoomout');
    const btnReset = document.getElementById('btn-net-reset');

    const triggerNetworkSearch = () => {
      const term = input.value.trim().toLowerCase();
      if (!term || !window.cyInstance) return;

      // Find node that matches label
      const matchedNode = window.cyInstance.nodes().filter(node => {
        return node.data('label').toLowerCase().includes(term);
      });

      if (matchedNode.length > 0) {
        // Highlight node and zoom
        window.cyInstance.nodes().unselect();
        matchedNode.select();
        window.cyInstance.animate({
          zoom: 1.8,
          center: { ele: matchedNode }
        }, { duration: 600 });
      } else {
        utils.dispatchAlert("Search Error", `Entity node match not found in network registries.`, "warning");
      }
    };

    if (btnSearch) btnSearch.addEventListener('click', triggerNetworkSearch);
    if (input) {
      input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') triggerNetworkSearch();
      });
    }

    if (btnZoomIn && window.cyInstance) {
      btnZoomIn.addEventListener('click', () => {
        window.cyInstance.zoom(window.cyInstance.zoom() + 0.15);
      });
    }
    if (btnZoomOut && window.cyInstance) {
      btnZoomOut.addEventListener('click', () => {
        window.cyInstance.zoom(window.cyInstance.zoom() - 0.15);
      });
    }
    if (btnReset && window.cyInstance) {
      btnReset.addEventListener('click', () => {
        window.cyInstance.fit();
        window.cyInstance.nodes().unselect();
      });
    }

    // Gang Pill Buttons
    const btnAllGangs = document.getElementById('btn-gang-all');
    const btnKalyani = document.getElementById('btn-gang-kalyani');
    const btnVanguard = document.getElementById('btn-gang-vanguard');

    const clearGangPillsActive = () => {
      [btnAllGangs, btnKalyani, btnVanguard].forEach(btn => btn.classList.remove('active'));
    };

    if (btnAllGangs) {
      btnAllGangs.addEventListener('click', () => {
        clearGangPillsActive();
        btnAllGangs.classList.add('active');
        components.initNetworkGraph();
      });
    }

    if (btnKalyani) {
      btnKalyani.addEventListener('click', () => {
        clearGangPillsActive();
        btnKalyani.classList.add('active');
        components.initNetworkGraph('all', 'kalyani');
        utils.dispatchAlert("Syndicate Isolated", "Kalyani Gang communication cells highlighted in workspace.", "warning");
      });
    }

    if (btnVanguard) {
      btnVanguard.addEventListener('click', () => {
        clearGangPillsActive();
        btnVanguard.classList.add('active');
        components.initNetworkGraph('all', 'vanguard');
        utils.dispatchAlert("Laundering Chain Isolated", "Vanguard dummy accounts and money paths filtered.", "warning");
      });
    }
  },

  jumpToOffender: function (offenderId) {
    window.appState.activeOffenderId = offenderId;
    window.location.hash = 'offenders';
  },

  // 10. OFFENDER PROFILING DETAILS
  bindOffenderEvents: function () {
    const searchInput = document.getElementById('offender-catalog-search');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        const val = e.target.value.toLowerCase();
        const cards = document.querySelectorAll('.offender-list-card');
        
        cards.forEach(card => {
          const name = card.querySelector('.off-name').innerText.toLowerCase();
          const alias = card.querySelector('.off-alias').innerText.toLowerCase();
          const id = card.querySelector('.off-id').innerText.toLowerCase();
          
          if (name.includes(val) || alias.includes(val) || id.includes(val)) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      });
    }
  },

  loadOffenderProfile: function (id) {
    window.appState.activeOffenderId = id;
    const offender = mockData.offenders.find(o => o.id === id);
    const dossierBody = document.getElementById('offender-dossier-panel');

    if (offender && dossierBody) {
      // Set active status on sidebar cards list
      const cards = document.querySelectorAll('.offender-list-card');
      cards.forEach(c => c.classList.remove('active'));
      const activeCard = document.getElementById(`off-card-${id}`);
      if (activeCard) activeCard.classList.add('active');

      dossierBody.innerHTML = components.renderProfileDossier(offender);
    }
  },

  // 11. BACKGROUND ALERT FEEDSIMULATOR
  startNotificationPoller: function () {
    // Dispatch a dummy warning notification after 15 seconds to demonstrate the real-time early warning capabilities
    setTimeout(() => {
      if (window.appState.isAuthenticated) {
        utils.dispatchAlert(
          "PREDICTIVE FORECAST WARNING",
          "Emerging telecom burner cell cluster detected in Gachibowli sector. Potential gang meet.",
          "critical"
        );
        // Log to audit trails
        utils.addAuditLog("System Engine", "Forecast Warning", "Emergent gang activity early alert generated for sector Cyberabad-Gachibowli.");
      }
    }, 20000);
  }
};

window.app = app;
