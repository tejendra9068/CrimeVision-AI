// CrimeVision AI Mock Database (Indian Law Enforcement Context)
const mockData = {
  // 1. System Users & Roles
  users: [
    { id: "usr_01", name: "Inspector Rajesh Kumar", role: "investigator", badge: "POL-7749", district: "Bengaluru Central" },
    { id: "usr_02", name: "Dr. Ananya Sen", role: "analyst", badge: "INT-8830", district: "State Intelligence Cell" },
    { id: "usr_03", name: "Commissioner K. Vijay Raghavan", role: "supervisor", badge: "IPS-1994", district: "City HQ" },
    { id: "usr_04", name: "Hon. Minister Suresh Hegde", role: "policymaker", badge: "GOV-0010", district: "Ministry of Home Affairs" }
  ],

  // 2. Dashboard General KPIs
  kpis: {
    activeCases: 1420,
    solvedCasesRate: "78.4%",
    criticalAlerts: 8,
    cybercrimeIncrease: "+12.4% (YTD)",
    prioritySuspectsCount: 45,
    systemIntegrity: "99.98% SECURE"
  },

  // 3. Conversational Copilot Presets
  copilotPresets: {
    en: [
      "Find recent cybercrime trends in South Bengaluru.",
      "Get offender profile and risk rating for Vikram 'Spike' Malhotra.",
      "Visualize financial transaction trail for suspect account AC-99320.",
      "Show emerging gang activities in Cyberabad sector 4."
    ],
    hi: [
      "दक्षिण बेंगलुरु में हालिया साइबर अपराधों के रुझान खोजें।",
      "विक्रम 'स्पाइक' मल्होत्रा की अपराधी प्रोफ़ाइल और जोखिम रेटिंग प्राप्त करें।",
      "संदेहास्पद खाता AC-99320 के वित्तीय लेनदेन का विवरण दिखाएं।",
      "साइबराबाद सेक्टर 4 में उभरते गैंग गतिविधियों को प्रदर्शित करें।"
    ],
    kn: [
      "ದಕ್ಷಿಣ ಬೆಂಗಳೂರಿನ ಇತ್ತೀಚಿನ ಸೈಬರ್ ಅಪರಾಧ ಪ್ರವೃತ್ತಿಗಳನ್ನು ಹುಡುಕಿ.",
      "ವಿಕ್ರಮ್ 'ಸ್ಪೈಕ್' ಮಲ್ಹೋತ್ರಾ ಅವರ ಅಪರಾಧಿ ಪ್ರೊಫೈಲ್ ಮತ್ತು ಅಪಾಯದ ರೇಟಿಂಗ್ ಪಡೆಯಿರಿ.",
      "ಶಂಕಾಸ್ಪದ ಖಾತೆ AC-99320 ರ ಹಣಕಾಸು ವಹಿವಾಟು ಟ್ರಯಲ್ ಅನ್ನು ದೃಶ್ಯೀಕರಿಸಿ.",
      "ಸೈಬರಾಬಾದ್ ಸೆಕ್ಟರ್ 4 ರಲ್ಲಿ ಉದಯೋನ್ಮುಖ ಗ್ಯಾಂಗ್ ಚಟುವಟಿಕೆಗಳನ್ನು ತೋರಿಸಿ."
    ]
  },

  // Copilot Responses Database for simulation
  copilotResponses: {
    "trends": {
      text: {
        en: "Analysis of South Bengaluru shows a 14.8% spike in phishing and UPI frauds over the last quarter. Hotspots are concentrated around Electronic City and HSR Layout, primarily targeting tech professionals between ages 22-35. Seasonal trends indicate a peak during financial year-end and online shopping festivals.",
        hi: "दक्षिण बेंगलुरु के विश्लेषण से पिछली तिमाही में फ़िशिंग और यूपीआई धोखाधड़ी में 14.8% की वृद्धि का पता चलता है। इलेक्ट्रॉनिक सिटी और एचएसआर लेआउट के आसपास हॉटस्पॉट केंद्रित हैं, जो मुख्य रूप से 22-35 वर्ष की आयु के टेक पेशेवरों को लक्षित करते हैं। मौसमी रुझान वित्तीय वर्ष के अंत और ऑनलाइन शॉपिंग त्योहारों के दौरान एक उच्च स्तर का संकेत देते हैं।",
        kn: "ದಕ್ಷಿಣ ಬೆಂಗಳೂರಿನ ವಿಶ್ಲೇಷಣೆಯು ಕಳೆದ ತ್ರೈಮಾಸಿಕದಲ್ಲಿ ಫಿಶಿಂಗ್ ಮತ್ತು ಯುಪಿಐ ವಂಚನೆಗಳಲ್ಲಿ 14.8% ರಷ್ಟು ಹೆಚ್ಚಳವನ್ನು ತೋರಿಸುತ್ತದೆ. ಹಾಟ್‌ಸ್ಪಾಟ್‌ಗಳು ಎಲೆಕ್ಟ್ರಾನಿಕ್ ಸಿಟಿ ಮತ್ತು ಎಚ್‌ಎಸ್‌ಆರ್ ಲೇಔಟ್ ಸುತ್ತಲೂ ಕೇಂದ್ರೀಕೃತವಾಗಿವೆ, ಪ್ರಮುಖವಾಗಿ 22-35 ವಯಸ್ಸಿನ ಟೆಕ್ ವೃತ್ತಿಪರರನ್ನು ಗುರಿಯಾಗಿಸಿಕೊಂಡಿವೆ. ಹಣಕಾಸಿನ ವರ್ಷದ ಅಂತ್ಯ ಮತ್ತು ಆನ್‌ಲೈನ್ ಶಾಪಿಂಗ್ ಹಬ್ಬಗಳ ಸಮಯದಲ್ಲಿ ಗರಿಷ್ಠ ಮಟ್ಟವನ್ನು ಕಾಲೋಚಿತ ಪ್ರವೃತ್ತಿಗಳು ಸೂಚಿಸುತ್ತವೆ."
      },
      confidence: 94,
      sources: [
        { type: "FIR Ledger", ref: "FIR-2026-BLR-883", date: "12-May-2026", status: "Verified" },
        { type: "Bank Fraud Feed", ref: "UPI-BLOCK-ALERT", date: "04-Jun-2026", status: "Verified" },
        { type: "Telecom Logs", ref: "CDR-LOC-8820", date: "15-Jun-2026", status: "Under Review" }
      ],
      reasoning: [
        "Identified keywords: 'cybercrime', 'trends', 'South Bengaluru'",
        "Queried CCPS (Cyber Crime Portal System) database filtered by District = Bengaluru South",
        "Aggregated incident timestamps to trace monthly counts",
        "Cross-referenced IP location logs mapping to HSR Layout & Electronic City cellular towers",
        "Calculated trend vector: +14.8% quarter-on-quarter increase"
      ]
    },
    "vikram": {
      text: {
        en: "Suspect Vikram 'Spike' Malhotra (ID: OFF-8823) has a Critical Risk Score of 88. He is a repeat offender involved in ransomware distribution and card cloning schemes. Modus Operandi involves deploying malware via spoofed government SMS portals. Currently classified under Rank 2 Priority for immediate apprehension.",
        hi: "संदिग्ध विक्रम 'स्पाइक' मल्होत्रा (ID: OFF-8823) का जोखिम स्कोर 88 (गंभीर) है। वह रैनसमवेयर वितरण और कार्ड क्लोनिंग में शामिल आदतन अपराधी है। अपराध का तरीका सरकारी एसएमएस पोर्टलों के स्पूफ के जरिए मैलवेयर फैलाना है। त्वरित गिरफ्तारी हेतु उन्हें वर्तमान में रैंक 2 प्राथमिकता में वर्गीकृत किया गया है।",
        kn: "ಶಂಕಿತ ವಿಕ್ರಮ್ 'ಸ್ಪೈಕ್' ಮಲ್ಹೋತ್ರಾ (ID: OFF-8823) 88 ರ ಅತ್ಯಂತ ಅಪಾಯಕಾರಿ ಸ್ಕೋರ್ ಹೊಂದಿದ್ದಾರೆ. ಇವರು ರಾನ್ಸಮ್‌ವೇರ್ ವಿತರಣೆ ಮತ್ತು ಕಾರ್ಡ್ ಕ್ಲೋನಿಂಗ್ ಯೋಜನೆಗಳಲ್ಲಿ ಭಾಗಿಯಾಗಿರುವ ಪುನರಾವರ್ತಿತ ಅಪರಾಧಿಯಾಗಿದ್ದಾರೆ. ಇವರ ಕಾರ್ಯಾಚರಣೆಯ ವಿಧಾನವು ನಕಲಿ ಸರ್ಕಾರಿ ಎಸ್‌ಎಮ್‌ಎಸ್ ಪೋರ್ಟಲ್‌ಗಳ ಮೂಲಕ ಮಾಲ್‌ವೇರ್ ಅನ್ನು ಹರಡುವುದಾಗಿದೆ. ತಕ್ಷಣದ ಬಂಧನಕ್ಕಾಗಿ ಇವರನ್ನು ಸದ್ಯ 2ನೇ ಆದ್ಯತೆಯ ಶ್ರೇಣಿಗೆ ವರ್ಗೀಕರಿಸಲಾಗಿದೆ."
      },
      confidence: 97,
      sources: [
        { type: "National Criminal Index", ref: "NCI-IND-99238", date: "01-Jan-2026", status: "Verified" },
        { type: "Forensic Report", ref: "FSL-CYBER-8842", date: "18-Apr-2026", status: "Verified" }
      ],
      reasoning: [
        "Matched name 'Vikram Spike Malhotra' with alias index in CCTNS",
        "Retrieved criminal record: 3 active charges under IT Act Sec 66C, 66D",
        "Extracted MO fingerprint: SMS spoofing headers 'MD-GOVTIN'",
        "Calculated Risk Index using recurrent activity indicators and forensic linkage"
      ]
    },
    "financial": {
      text: {
        en: "Account AC-99320 (Registered to Dummy Corp 'Vanguard Logistics') exhibits high-volume shell integration patterns. A fund flow of ₹4.8 Crore was tracked spanning 4 layer hops within 48 hours. Layer 1: Account AC-99320, Layer 2: AC-88122, Layer 3: Split into AC-44211 and AC-44212, Layer 4: ATM withdrawal in Mumbai NCR. Flags: High Velocity, Mismatched KYC.",
        hi: "खाता AC-99320 (डमी फर्म 'वैंगार्ड लॉजिस्टिक्स' के नाम पर पंजीकृत) में उच्च मात्रा में शेल कंपनियों के एकीकरण के पैटर्न दिखाई दे रहे हैं। 48 घंटों के भीतर 4 लेयर होप्स में ₹4.8 करोड़ के फंड फ्लो को ट्रैक किया गया। लेयर 1: खाता AC-99320, लेयर 2: AC-88122, लेयर 3: AC-44211 और AC-44212 में विभाजित, लेयर 4: मुंबई एनसीआर में एटीएम से निकासी। चेतावनी: उच्च वेग, मेल न खाने वाला केवाईसी।",
        kn: "ಖಾತೆ AC-99320 ('ವ್ಯಾನ್‌ಗಾರ್ಡ್ ಲಾಜಿಸ್ಟಿಕ್ಸ್' ಎಂಬ ಡಮ್ಮಿ ಸಂಸ್ಥೆಯ ಹೆಸರಿನಲ್ಲಿ ನೋಂದಾಯಿಸಲಾಗಿದೆ) ಹೆಚ್ಚಿನ ಪ್ರಮಾಣದ ಶೆಲ್ ಏಕೀಕರಣ ಮಾದರಿಗಳನ್ನು ಪ್ರದರ್ಶಿಸುತ್ತದೆ. 48 ಗಂಟೆಗಳ ಒಳಗೆ 4 ಲೇಯರ್ ಹಾಪ್‌ಗಳಲ್ಲಿ ₹4.8 ಕೋಟಿ ಹಣದ ಹರಿವನ್ನು ಪತ್ತೆ ಮಾಡಲಾಗಿದೆ. ಲೇಯರ್ 1: ಖಾತೆ AC-99320, ಲೇಯರ್ 2: AC-88122, ಲೇಯರ್ 3: AC-44211 ಮತ್ತು AC-44212 ಕ್ಕೆ ವಿಭಜನೆ, ಲೇಯರ್ 4: ಮುಂಬೈ NCR ನಲ್ಲಿ ಎಟಿಎಂ ಹಿಂಪಡೆಯುವಿಕೆ. ಎಚ್ಚರಿಕೆಗಳು: ಹೆಚ್ಚಿನ ವಹಿವಾಟು ವೇಗ, ಕೆವೈಸಿ ಅಸಮಂಜಸತೆ."
      },
      confidence: 91,
      sources: [
        { type: "FIU-IND Suspicious Transaction Report", ref: "STR-2026-9801", date: "10-Jun-2026", status: "Verified" },
        { type: "Node Bank Ledger Logs", ref: "TXN-FLOW-VNGD", date: "14-Jun-2026", status: "Verified" }
      ],
      reasoning: [
        "Ingested transaction data feed from corporate registry check",
        "Discovered shell activity signature: Zero employees but monthly transaction volumes > 5 Crores",
        "Mapped money trail using graph flow nodes routing through suspicious gateway endpoints",
        "Calculated correlation coefficient with known laundering topologies: 89%"
      ]
    },
    "gang": {
      text: {
        en: "Alert: Predictive analytics flags a high-probability gang expansion in Cyberabad Sector 4. Relational mapping identifies active communication clusters between parolees from the 'Kalyani Gang' and newly registered SIM cards in Gachibowli. Recommended action: Increase patrol frequency in IT corridor and audit mobile towers.",
        hi: "चेतावनी: पूर्वानुमानित विश्लेषण साइबराबाद सेक्टर 4 में गैंग के विस्तार की उच्च संभावना का संकेत देता है। संबंध मैपिंग 'कल्याणी गिरोह' के पैरोल धारकों और गचीबोवली में नए पंजीकृत सिम कार्डों के बीच सक्रिय संचार समूहों की पहचान करती है। अनुशंसित कार्रवाई: आईटी कॉरिडोर में गश्त बढ़ाएं और मोबाइल टावरों का ऑडिट करें।",
        kn: "ಎಚ್ಚರಿಕೆ: ಮುನ್ಸೂಚಕ ವಿಶ್ಲೇಷಣೆಯು ಸೈಬರಾಬಾದ್ ಸೆಕ್ಟರ್ 4 ರಲ್ಲಿ ಗ್ಯಾಂಗ್ ವಿಸ್ತರಣೆಯ ಹೆಚ್ಚಿನ ಸಂಭವನೀಯತೆಯನ್ನು ಸೂಚಿಸುತ್ತದೆ. ಸಂಬಂಧಿತ ಮ್ಯಾಪಿಂಗ್ 'ಕಲ್ಯಾಣಿ ಗ್ಯಾಂಗ್' ನ ಪೆರೋಲ್ ಪಡೆದವರು ಮತ್ತು ಗಚಿಬೌಲಿಯಲ್ಲಿ ಹೊಸದಾಗಿ ನೋಂದಾಯಿಸಲಾದ ಸಿಮ್ ಕಾರ್ಡ್‌ಗಳ ನಡುವೆ ಸಕ್ರಿಯ ಸಂವಹನ ಕ್ಲಸ್ಟರ್‌ಗಳನ್ನು ಗುರುತಿಸುತ್ತದೆ. ಶಿಫಾರಸು ಮಾಡಲಾದ ಕ್ರಮ: ಐಟಿ ಕಾರಿಡಾರ್‌ನಲ್ಲಿ ಗಸ್ತು ಆವರ್ತನವನ್ನು ಹೆಚ್ಚಿಸಿ ಮತ್ತು ಮೊಬೈಲ್ ಟವರ್‌ಗಳನ್ನು ಆಡಿಟ್ ಮಾಡಿ."
      },
      confidence: 86,
      sources: [
        { type: "Intelligence Bureau Intercepts", ref: "INT-INTCPT-9092", date: "17-Jun-2026", status: "Under Review" },
        { type: "Parole Registry Feed", ref: "PR-2026-CYB", date: "05-Jun-2026", status: "Verified" }
      ],
      reasoning: [
        "Monitored release logs showing 4 key associates of Kalyani Gang exiting prison",
        "Identified geolocation overlap of burner phone IMSIs with registered addresses of the released convicts",
        "Visualized communication bridge between active cell clusters",
        "Generated predictive risk map showing hotspot transition from Sector 2 to Sector 4"
      ]
    }
  },

  // 4. Analytics Data
  analytics: {
    districts: ["Bengaluru Central", "Cyberabad Sector 4", "Mumbai South", "Delhi NCR East", "Kolkata North"],
    // Real-time metrics
    categories: {
      labels: ["Cybercrime", "Theft & Burglary", "Financial Fraud", "Drug Offenses", "Violent Crimes", "Women's Safety Cases"],
      datasets: [320, 245, 198, 92, 115, 140]
    },
    // Historical trends (Last 6 Months)
    trends: {
      months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      cyber: [120, 150, 180, 220, 280, 320],
      theft: [210, 195, 230, 215, 240, 245],
      fraud: [110, 125, 140, 160, 175, 198],
      violent: [130, 120, 125, 110, 118, 115]
    },
    // Seasonal patterns (Q1 - Q4 Average over 3 years)
    seasonal: {
      quarters: ["Q1 (Winter)", "Q2 (Summer)", "Q3 (Monsoon)", "Q4 (Festival Season)"],
      cyber: [15, 22, 28, 35], // In percentage
      theft: [25, 30, 18, 27],
      fraud: [20, 20, 25, 35],
      drugs: [15, 35, 20, 30]
    },
    // Leaflet mock map coordinates for hotspots (Bangalore centered)
    hotspots: [
      { lat: 12.9716, lng: 77.5946, name: "City Center (HQ)", count: 42, intensity: 0.9, type: "General Crime" },
      { lat: 12.9081, lng: 77.6476, name: "HSR Layout", count: 85, intensity: 0.95, type: "Cybercrime / Phishing" },
      { lat: 12.9279, lng: 77.6271, name: "Koramangala", count: 68, intensity: 0.85, type: "Financial Fraud" },
      { lat: 12.8452, lng: 77.6754, name: "Electronic City Phase 1", count: 95, intensity: 0.98, type: "Ransomware Operations" },
      { lat: 13.0285, lng: 77.5896, name: "Hebbal Hub", count: 34, intensity: 0.6, type: "Vehicle Theft" },
      { lat: 12.9784, lng: 77.6408, name: "Indiranagar Metro Corridor", count: 57, intensity: 0.75, type: "Drug Peddling" }
    ]
  },

  // 5. Criminal Networks Database (Cytoscape compatible)
  networks: {
    nodes: [
      // Accused
      { data: { id: "n_vikram", label: "Vikram Malhotra", type: "accused", sub: "Spike / Hacker", risk: "CRITICAL (88)", color: "#ff3355" } },
      { data: { id: "n_kalyani", label: "Devendra Kalyani", type: "accused", sub: "Gang Kingpin", risk: "HIGH (79)", color: "#ff6600" } },
      { data: { id: "n_rohit", label: "Rohit 'Meme' Sharma", type: "accused", sub: "Mule Recruiter", risk: "MEDIUM (52)", color: "#ffcc00" } },
      // Victims
      { data: { id: "n_v1", label: "Aarti Deshmukh", type: "victim", sub: "IT Professional", color: "#10b981" } },
      { data: { id: "n_v2", label: "Suresh Infrastructure Ltd", type: "victim", sub: "Enterprise", color: "#10b981" } },
      // Bank Accounts
      { data: { id: "n_bank1", label: "AC-99320 (Vanguard)", type: "bank", sub: "Shell Account", color: "#00f0ff" } },
      { data: { id: "n_bank2", label: "AC-88122 (Mule Node)", type: "bank", sub: "Co-operative Bank", color: "#00f0ff" } },
      // Vehicles
      { data: { id: "n_veh1", label: "KA-01-MJ-8820", type: "vehicle", sub: "Black SUV", color: "#a855f7" } },
      // Phones
      { data: { id: "n_ph1", label: "+91 98455 00921", type: "phone", sub: "Burner SIM", color: "#ec4899" } },
      { data: { id: "n_ph2", label: "+91 99002 88310", type: "phone", sub: "Spoof Origin", color: "#ec4899" } },
      // Locations
      { data: { id: "n_loc1", label: "Electronic City Hideout", type: "location", sub: "Physical Address", color: "#6b7280" } }
    ],
    edges: [
      { data: { id: "e1", source: "n_vikram", target: "n_bank1", label: "Controls", type: "control" } },
      { data: { id: "e2", source: "n_vikram", target: "n_ph1", label: "Uses", type: "use" } },
      { data: { id: "e3", source: "n_ph1", target: "n_ph2", label: "Calls", type: "call" } },
      { data: { id: "e4", source: "n_ph2", target: "n_v1", label: "Spoofs SMS To", type: "fraud" } },
      { data: { id: "e5", source: "n_vikram", target: "n_v2", label: "Ransomware Attack", type: "attack" } },
      { data: { id: "e6", source: "n_bank1", target: "n_bank2", label: "Transfers ₹4.8Cr", type: "transaction" } },
      { data: { id: "e7", source: "n_rohit", target: "n_bank2", label: "Accesses ATM", type: "access" } },
      { data: { id: "e8", source: "n_kalyani", target: "n_rohit", label: "Recruited By", type: "collaboration" } },
      { data: { id: "e9", source: "n_kalyani", target: "n_veh1", label: "Owns", type: "ownership" } },
      { data: { id: "e10", source: "n_vikram", target: "n_loc1", label: "Last Geolocation", type: "presence" } },
      { data: { id: "e11", source: "n_rohit", target: "n_loc1", label: "Met At", type: "presence" } }
    ]
  },

  // 6. Offender Profiles
  offenders: [
    {
      id: "OFF-8823",
      name: "Vikram Malhotra",
      alias: "Spike / CyberShadow",
      age: 29,
      gender: "Male",
      riskScore: 88,
      riskLevel: "CRITICAL",
      status: "ACTIVE / ABSCONDING",
      priority: 2,
      imageUrl: "vikram.jpg", // UI will render a high-tech silhouette or generated face
      modusOperandi: "Deploys customized ransomware (ShadowLock) via phishing portals and SMS header spoofing (mimicking government communications). Targets tech firms and high-income professionals in metropolitan corridors.",
      timeline: [
        { date: "15-Jan-2024", event: "First arrested in Chennai for credit card cloning. Released on bail.", status: "Arrested" },
        { date: "12-Nov-2024", event: "Identified as core engineer for the 'Vanguard' banking Trojan.", status: "Fugitive" },
        { date: "09-Mar-2025", event: "Ransomware extortion targeting Suresh Infra; ₹1.2 Cr extorted.", status: "Active Case" },
        { date: "14-Jun-2026", event: "Linked to active shell account layer transfer of ₹4.8 Cr.", status: "Suspected" }
      ],
      behavioralProfile: {
        sociopathy: "High",
        intelligence: "Very High",
        recidivismRisk: "92%",
        notes: "Highly adaptable. Quickly changes cellular signatures (IMSIs) and switches to cold hardware wallets when tracked."
      }
    },
    {
      id: "OFF-7041",
      name: "Devendra Kalyani",
      alias: "Bhaiya / Boss",
      age: 48,
      gender: "Male",
      riskScore: 79,
      riskLevel: "HIGH",
      status: "ON PAROLE (MONITORED)",
      priority: 5,
      imageUrl: "kalyani.jpg",
      modusOperandi: "Operates syndicated cargo theft, illegal betting networks, and micro-financing extortion rings. Operates via layers of recruits using burner phones.",
      timeline: [
        { date: "10-Oct-2015", event: "Arrested under MCOCA for organized syndicate extortion.", status: "Imprisoned" },
        { date: "05-May-2025", event: "Granted medical parole with geographical restrictions.", status: "Paroled" },
        { date: "17-Jun-2026", event: "Unusual telecom contact overlap flagged with suspect Rohit Sharma.", status: "Under Watch" }
      ],
      behavioralProfile: {
        sociopathy: "Extreme",
        intelligence: "Medium",
        recidivismRisk: "74%",
        notes: "Exerts heavy influence on juvenile offenders. Known to operate via proxies to maintain plausible deniability."
      }
    },
    {
      id: "OFF-3390",
      name: "Rohit Sharma",
      alias: "Meme / Loader",
      age: 23,
      gender: "Male",
      riskScore: 52,
      riskLevel: "MEDIUM",
      status: "UNDER INVESTIGATION",
      priority: 12,
      imageUrl: "rohit.jpg",
      modusOperandi: "Recruits college students and low-income individuals to open mule bank accounts. Pays flat commission fees and handles ATM cash-out operations.",
      timeline: [
        { date: "03-Feb-2025", event: "First flagged by Cyber Security Cell for multiple UPI cash-outs.", status: "Flagged" },
        { date: "14-Jun-2026", event: "CCTV match at ATM in Mumbai during Vanguard Logistics cash-out.", status: "Identified" }
      ],
      behavioralProfile: {
        sociopathy: "Low",
        intelligence: "Medium",
        recidivismRisk: "45%",
        notes: "Motivated by financial pressures. Cooperates quickly when confronted by law enforcement."
      }
    }
  ],

  // 7. Case Summaries & Investigator Decision Support
  cases: [
    {
      id: "CASE-2026-X88",
      title: "Ransomware Extortion & Fund Layering (Vanguard Case)",
      summary: "Multi-jurisdiction investigation involving digital extortion of Suresh Infrastructure Ltd. The attacker deployed ShadowLock ransomware demanding ₹5 Crore in cryptocurrency. A parallel trail revealed layering of extortion funds through a shell logistics account (AC-99320) which distributed payouts to multiple regional mule networks.",
      timeline: [
        { time: "09-Jun-2026 04:30 AM", event: "Suresh Infrastructure server files encrypted. Ransom note dropped." },
        { time: "10-Jun-2026 11:15 AM", event: "Intermediary shell wallet receives initial token transfer." },
        { time: "12-Jun-2026 09:00 AM", event: "Token liquidated and ₹4.8 Crore deposited into Vanguard Logistics bank node." },
        { time: "14-Jun-2026 02:45 PM", event: "Simultaneous ATM cash-outs logged in Mumbai and Pune. Security alerts triggered." }
      ],
      similarCases: [
        { id: "CASE-2025-C12", title: "Apex Tech Ransomware (88% similarity, MO: ShadowLock, vector: Phished Admin)" },
        { id: "CASE-2024-T09", title: "Deccan Cement Cyber Extortion (74% similarity, MO: ShadowLock, vector: Spoofed SMS)" }
      ],
      suspects: [
        { id: "OFF-8823", name: "Vikram Malhotra", confidence: "94% (Matches malware compiler fingerprint and server logs)" },
        { id: "OFF-3390", name: "Rohit Sharma", confidence: "81% (CCTV match at cash-out location)" }
      ],
      evidenceMatrix: [
        { evidence: "FSL Malware Signature Dump", linkedTo: "Vikram Malhotra (ShadowLock Author)", strength: "Strong" },
        { evidence: "Mule Account KYC Signatures", linkedTo: "Rohit Sharma (Account Custodian)", strength: "Medium" },
        { evidence: "Cell Tower Geo-Overlap", linkedTo: "Electronic City Hideout Location", strength: "Circumstantial" }
      ]
    }
  ],

  // 8. Financial Transactions Ledger
  transactions: [
    { id: "TXN-9023", from: "Vanguard Logistics (AC-99320)", to: "Mule Node West (AC-88122)", amount: "₹1,80,00,000", date: "14-Jun-2026 10:15 AM", status: "Suspicious", flag: "Rapid Layering" },
    { id: "TXN-9024", from: "Vanguard Logistics (AC-99320)", to: "Mule Node East (AC-44211)", amount: "₹1,50,00,000", date: "14-Jun-2026 10:18 AM", status: "Suspicious", flag: "Rapid Layering" },
    { id: "TXN-9025", from: "Vanguard Logistics (AC-99320)", to: "Mule Node South (AC-44212)", amount: "₹1,50,00,000", date: "14-Jun-2026 10:20 AM", status: "Suspicious", flag: "Rapid Layering" },
    { id: "TXN-9031", from: "Mule Node West (AC-88122)", to: "Rohit ATM Cashout", amount: "₹50,000", date: "14-Jun-2026 11:30 AM", status: "Completed", flag: "High Velocity ATM" },
    { id: "TXN-9032", from: "Mule Node West (AC-88122)", to: "Rohit ATM Cashout", amount: "₹50,000", date: "14-Jun-2026 11:32 AM", status: "Completed", flag: "High Velocity ATM" }
  ],

  // 9. Sociological Crime Insights
  sociological: {
    demographics: {
      age: ["18-25", "26-35", "36-50", "50+"],
      counts: [450, 680, 240, 50] // Age representation of offenders in cyber & fraud
    },
    gender: {
      labels: ["Male", "Female", "Other/Corporate Entity"],
      datasets: [1120, 180, 120]
    },
    socioEconomic: {
      labels: ["Low Income (Mule roles)", "Middle Income (Tech Frauds)", "High Income (Sponsors)"],
      datasets: [60, 35, 5] // in percent
    },
    urbanCorrelation: {
      labels: ["Metropolitan Hubs", "Semi-Urban Zones", "Rural Enclaves"],
      crimeRates: [72, 20, 8] // showing concentration of digital fraud
    },
    educationFactors: {
      labels: ["High-Tech Graduates", "Vocational/Dropouts", "Uneducated/Unskilled"],
      cybercrimeShare: [68, 22, 10]
    }
  },

  // 10. Forecasting & Early Warning
  forecasting: {
    riskIndexNextMonth: [
      { area: "Electronic City Sector 1", riskLevel: "92% (CRITICAL)", factor: "Ransomware targeting server clusters", coordinates: { lat: 12.8452, lng: 77.6754 } },
      { area: "HSR Layout Sector 3", riskLevel: "85% (HIGH)", factor: "Phishing call centers activity spikes", coordinates: { lat: 12.9081, lng: 77.6476 } },
      { area: "Gachibowli IT Corridor", riskLevel: "78% (HIGH)", factor: "Burner SIM telemetry registration spike", coordinates: { lat: 17.4483, lng: 78.3488 } }
    ],
    alerts: [
      { id: "AL-109", type: "CRITICAL", title: "Emerging Gang Alliance", msg: "Telemetry overlaps identify Kalyani Gang contacts linked with active ransomware servers in HSR.", time: "10 min ago" },
      { id: "AL-110", type: "WARNING", title: "IP Hopping Detected", msg: "Simultaneous VPN requests from 12 locations targeting Police Command server nodes.", time: "42 min ago" }
    ],
    forecastTrend: {
      months: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      predictedIncidents: [340, 365, 390, 420, 440, 485]
    }
  },

  // 11. Security Audit Ledger
  auditLogs: [
    { time: "2026-06-19 15:30:12", user: "Inspector Rajesh Kumar", role: "Investigator", action: "Queried profile OFF-8823 (Vikram Malhotra)", ip: "10.20.12.94" },
    { time: "2026-06-19 15:35:44", user: "Dr. Ananya Sen", role: "Analyst", action: "Generated cytoscape network graph for Case CASE-2026-X88", ip: "10.20.12.110" },
    { time: "2026-06-19 15:40:01", user: "Commissioner K. Vijay Raghavan", role: "Supervisor", action: "Authorized medical parole audit for OFF-7041", ip: "10.20.10.1" },
    { time: "2026-06-19 15:42:22", user: "Hon. Minister Suresh Hegde", role: "Policymaker", action: "Accessed Sociological Crime Insights Report for Bangalore South", ip: "10.20.100.4" }
  ]
};

// Export to window object for access in frontend prototype
window.mockData = mockData;
