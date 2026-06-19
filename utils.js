// CrimeVision AI System Utilities
const utils = {
  // 1. PDF Report Generation
  exportToPDF: function (elementId, filename = 'CrimeVision_Intelligence_Report.pdf') {
    const element = document.getElementById(elementId);
    if (!element) {
      console.error(`Element with ID ${elementId} not found.`);
      return;
    }

    // Add a temporarily styling wrapper for pdf rendering to look structured and beautiful
    const opt = {
      margin: [10, 10, 10, 10],
      filename: filename,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true, backgroundColor: '#04081c' },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    // Show a loading feedback or alert in audit logs
    utils.addAuditLog("System", "PDF Export", `Triggered PDF export for intelligence report: ${filename}`);

    // Trigger html2pdf
    if (window.html2pdf) {
      window.html2pdf().set(opt).from(element).save();
    } else {
      console.warn("html2pdf library is not loaded. Mocking download action.");
      alert(`Mocking PDF Download: ${filename}. (html2pdf CDN not resolved, downloading simulated text)`);
    }
  },

  // 2. Voice Input (Speech-to-Text Simulation)
  voiceRecognizer: {
    isListening: false,
    recognitionInstance: null,

    start: function (onResult, onStatusChange) {
      this.isListening = true;
      onStatusChange(true, "LISTENING... Speak into police comms channel.");

      // Check if browser supports Web Speech API
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (SpeechRecognition) {
        this.recognitionInstance = new SpeechRecognition();
        this.recognitionInstance.lang = 'en-IN';
        this.recognitionInstance.interimResults = false;
        this.recognitionInstance.maxAlternatives = 1;

        this.recognitionInstance.onresult = (event) => {
          const speechResult = event.results[0][0].transcript;
          console.log("Speech Result:", speechResult);
          onResult(speechResult);
          this.stop(onStatusChange);
        };

        this.recognitionInstance.onerror = (err) => {
          console.error("Speech Error:", err);
          this.stop(onStatusChange);
          // Trigger fallback simulation
          this.simulateVoice(onResult, onStatusChange);
        };

        this.recognitionInstance.onend = () => {
          this.stop(onStatusChange);
        };

        try {
          this.recognitionInstance.start();
        } catch (e) {
          console.warn("Speech recognition already started or blocked.");
        }
      } else {
        // Fallback for browsers that don't support it or are sandboxed
        console.warn("Speech Recognition API not supported in this browser. Running simulation.");
        this.simulateVoice(onResult, onStatusChange);
      }
    },

    stop: function (onStatusChange) {
      this.isListening = false;
      onStatusChange(false, "V-Comms Idle");
      if (this.recognitionInstance) {
        try {
          this.recognitionInstance.stop();
        } catch (e) {}
      }
    },

    simulateVoice: function (onResult, onStatusChange) {
      // Choose a random preset query from mockData based on current app language
      const lang = window.appState ? window.appState.language : 'en';
      const presets = mockData.copilotPresets[lang] || mockData.copilotPresets['en'];
      const randomQuery = presets[Math.floor(Math.random() * presets.length)];

      setTimeout(() => {
        if (this.isListening) {
          onResult(randomQuery);
          this.stop(onStatusChange);
        }
      }, 3000);
    }
  },

  // 3. Voice Output (Text-to-Speech)
  speechSynthesizer: {
    synth: window.speechSynthesis,
    activeUtterance: null,
    isSpeaking: false,

    speak: function (text, langCode = 'en-IN', onStart, onEnd) {
      if (!this.synth) {
        console.warn("Speech Synthesis API not supported.");
        return;
      }

      this.cancel(); // Cancel any ongoing speech

      // Map language code
      let ttsLang = 'en-IN';
      if (langCode === 'hi') ttsLang = 'hi-IN';
      if (langCode === 'kn') ttsLang = 'kn-IN';

      this.activeUtterance = new SpeechSynthesisUtterance(text);
      this.activeUtterance.lang = ttsLang;
      this.activeUtterance.rate = 0.95; // Slightly slower for formal command voice

      this.activeUtterance.onstart = () => {
        this.isSpeaking = true;
        if (onStart) onStart();
      };

      this.activeUtterance.onend = () => {
        this.isSpeaking = false;
        if (onEnd) onEnd();
      };

      this.activeUtterance.onerror = (e) => {
        console.error("Speech Synthesis Error:", e);
        this.isSpeaking = false;
        if (onEnd) onEnd();
      };

      this.synth.speak(this.activeUtterance);
    },

    cancel: function () {
      if (this.synth) {
        this.synth.cancel();
        this.isSpeaking = false;
      }
    }
  },

  // 4. Dynamic Audit Logger
  addAuditLog: function (actor, role, action, ip = "127.0.0.1") {
    const timestamp = new Date().toISOString().replace('T', ' ').substring(0, 19);
    const newLog = { time: timestamp, user: actor, role: role, action: action, ip: ip };
    
    // Add to mockData store
    mockData.auditLogs.unshift(newLog);

    // If audit table is currently visible, refresh it
    const logContainer = document.getElementById('audit-log-tbody');
    if (logContainer) {
      const row = document.createElement('tr');
      row.className = 'cyber-table-row';
      row.innerHTML = `
        <td>${newLog.time}</td>
        <td><span class="user-badge-cell">${newLog.user}</span></td>
        <td><span class="role-badge-cell role-${newLog.role.toLowerCase()}">${newLog.role}</span></td>
        <td>${newLog.action}</td>
        <td class="ip-cell">${newLog.ip}</td>
      `;
      logContainer.insertBefore(row, logContainer.firstChild);

      // Keep maximum 50 rows in UI
      if (logContainer.children.length > 50) {
        logContainer.removeChild(logContainer.lastChild);
      }
    }
  },

  // 5. System Notifications Dispatcher
  dispatchAlert: function (title, message, type = "info") {
    // Show high-tech alert card on screen
    const notificationCenter = document.getElementById('notifications-container');
    if (notificationCenter) {
      const alertCard = document.createElement('div');
      alertCard.className = `alert-card alert-type-${type.toLowerCase()}`;
      alertCard.innerHTML = `
        <div class="alert-icon">${type === 'critical' ? '⚠️' : '⚡'}</div>
        <div class="alert-body">
          <div class="alert-title">${title}</div>
          <div class="alert-desc">${message}</div>
        </div>
        <button class="alert-close-btn" onclick="this.parentElement.remove()">&times;</button>
      `;
      notificationCenter.appendChild(alertCard);
      
      // Auto dismiss after 8 seconds
      setTimeout(() => {
        if (alertCard.parentElement) {
          alertCard.style.opacity = '0';
          setTimeout(() => alertCard.remove(), 500);
        }
      }, 8000);
    }
  }
};

window.utils = utils;
