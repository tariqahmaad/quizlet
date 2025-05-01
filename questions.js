// Note: Ensure the 'correctAnswer' exactly matches one of the options strings.
// IMPORTANT: Added 'courseCode' to all questions.
const allQuestions = [
    // --- Week 1: COM496 ---
    {
        week: 1, // Definition of CIA Triad
        courseCode: "COM496",
        question: "What does the CIA Triad in information security represent?",
        options: ["Confidentiality, Integrity, Accessibility", "Confidentiality, Integrity, Availability", "Confidentiality, Integrity, Authentication", "Control, Integrity, Availability"],
        correctAnswer: "Confidentiality, Integrity, Availability"
    },
    {
        week: 1, // Definition of Asset
        courseCode: "COM496",
        question: "Which term refers to valuable information resources that need to be protected against attacks, such as a national ID number database or credit card database?",
        options: ["Asset", "Vulnerability", "Threat", "Exploit"],
        correctAnswer: "Asset"
    },
    {
        week: 1, // Definition of White Hat Hacker
        courseCode: "COM496",
        question: "Which of the following refers to a professional who is authorized to identify and fix security vulnerabilities in systems to prevent malicious attacks?",
        options: ["Black Hat Hacker", "White Hat Hacker", "Script Kiddie", "Cyber Criminal"],
        correctAnswer: "White Hat Hacker"
    },
    {
        week: 1, // Critical Infrastructure concept (Introductory Scope)
        courseCode: "COM496",
        question: "Which of the following is NOT considered critical infrastructure?",
        options: ["Electrical power grid", "Water supply system", "Social media platform", "Communication network"],
        correctAnswer: "Social media platform"
    },
    {
        week: 1, // Basic definition of DDoS (Overview)
        courseCode: "COM496",
        question: "Which of the following best describes a DDoS (Distributed Denial of Service) attack?",
        options: ["A type of attack where a single computer sends massive traffic to overwhelm a server, causing it to crash.", "A type of attack where multiple computers send a large volume of traffic to a server, overwhelming it and making it unavailable to legitimate users.", "An attack that focuses on stealing sensitive information from a user’s device.", "A type of phishing attack where attackers impersonate a trusted entity to steal login credentials."],
        correctAnswer: "A type of attack where multiple computers send a large volume of traffic to a server, overwhelming it and making it unavailable to legitimate users."
    },
    {
        week: 1, // Basic definition of Ransomware (Overview)
        courseCode: "COM496",
        question: "Which of the following best describes a ransomware attack?",
        options: ["An attack where hackers steal sensitive data and demand money in exchange for not releasing it to the public.", "An attack where malicious software locks or encrypts the victim’s files, and the attacker demands a ransom to restore access.", "An attack that targets network infrastructure to cause a denial of service.", "An attack that impersonates a trusted entity to steal login credentials."],
        correctAnswer: "An attack where malicious software locks or encrypts the victim’s files, and the attacker demands a ransom to restore access."
    },
    {
        week: 1, // Basic definition of MitM (Overview)
        courseCode: "COM496",
        question: "Which of the following best describes a Man-in-the-Middle (MitM) attack?",
        options: ["An attack where a hacker intercepts and alters communication between two parties without their knowledge.", "An attack where a hacker impersonates a trusted entity to steal sensitive information.", "An attack where multiple computers overwhelm a server to make it unavailable to users.", "An attack where a hacker installs malware to monitor user activities on a device."],
        correctAnswer: "An attack where a hacker intercepts and alters communication between two parties without their knowledge."
    },
    {
        week: 1, // Definition of Digital Forensics (Career mentioned)
        courseCode: "COM496",
        question: "Which of the following best describes Digital Forensics?",
        options: ["A process of gathering and analyzing physical evidence to solve crimes.", "A method used to recover deleted files from digital devices for personal use.", "A field of study that involves collecting, analyzing, and preserving digital evidence for legal investigations.", "A technique to encrypt sensitive data for secure communication."],
        correctAnswer: "A field of study that involves collecting, analyzing, and preserving digital evidence for legal investigations."
    },
    {
        week: 1, // Digital Forensics process (Relates to career)
        courseCode: "COM496",
        question: "Which of the following is the correct order of steps in the Digital Forensics process?",
        options: ["Collection → Analysis → Preservation → Reporting", "Preservation → Collection → Analysis → Reporting", "Collection → Preservation → Reporting → Analysis", "Reporting → Collection → Analysis → Preservation"],
        correctAnswer: "Preservation → Collection → Analysis → Reporting"
    },
    {
        week: 1, // Definition of Personal Data
        courseCode: "COM496",
        question: "Which of the following best describes \"personal data\"?",
        options: ["Data that is used only for marketing purposes.", "Any information that relates to an identified or identifiable individual.", "Information that is publicly available on social media.", "Data collected only for scientific research purposes."],
        correctAnswer: "Any information that relates to an identified or identifiable individual."
    },
    {
        week: 1, // Sensitive Personal Data concept
        courseCode: "COM496",
        question: "Which of the following is considered sensitive personal data under data protection laws (e.g., GDPR)?",
        options: ["Name and address", "Email address", "Racial or ethnic origin", "Date of birth"],
        correctAnswer: "Racial or ethnic origin"
    },
    {
        week: 1, // Lawful processing of Personal Data
        courseCode: "COM496",
        question: "Which of the following actions is required to ensure personal data is processed lawfully?",
        options: ["The data must always be kept in the cloud.", "The data must be processed with the consent of the data subject or based on legal grounds.", "The data must be shared with any third party without restrictions.", "The data must be deleted after one month."],
        correctAnswer: "The data must be processed with the consent of the data subject or based on legal grounds."
    },
    {
        week: 1, // Definition of Authenticity
        courseCode: "COM496",
        question: "Which of the following best describes authenticity in the context of information security?",
        options: ["Ensuring that the data is not altered or tampered with during transmission.", "Verifying the identity of the sender or the origin of the data to confirm its legitimacy.", "Ensuring that only authorized users can access the data.", "Preventing the data from being destroyed or lost."],
        correctAnswer: "Verifying the identity of the sender or the origin of the data to confirm its legitimacy."
    },
    {
        week: 1, // Definition of Authentication
        courseCode: "COM496",
        question: "Which of the following processes is used to verify the identity of a user or system before granting access to resources?",
        options: ["Authorization", "Encryption", "Authentication", "Integrity Verification"],
        correctAnswer: "Authentication"
    },
    {
        week: 1, // Definition of Availability (CIA Triad)
        courseCode: "COM496",
        question: "Which of the following refers to ensuring that data and services are accessible and usable when needed?",
        options: ["Integrity", "Confidentiality", "Availability", "Authentication"],
        correctAnswer: "Availability"
    },
    {
        week: 1, // Definition of Vulnerability
        courseCode: "COM496",
        question: "Which of the following refers to a weakness in a system that can be exploited by attackers to gain unauthorized access or cause harm?",
        options: ["Threat", "Risk", "Vulnerability", "Mitigation"],
        correctAnswer: "Vulnerability"
    },
    {
        week: 1, // Definition of Threat
        courseCode: "COM496",
        question: "What term describes a potential danger that can exploit vulnerabilities in a computer system or network to cause harm, such as viruses, hackers, malware, or phishing attacks?",
        options: ["Vulnerability", "Cybersecurity Threat", "Risk Assessment", "Data Breach"],
        correctAnswer: "Cybersecurity Threat"
    },
    {
        week: 2, // Importance of understanding threats (Focus of Week 2)
        courseCode: "COM496",
        question: "Why is it important to understand cybersecurity threats?",
        options: ["To create more complex user interfaces", "To effectively protect systems and data from potential attacks", "To increase internet speed", "To reduce software development time"],
        correctAnswer: "To effectively protect systems and data from potential attacks"
    },
    {
        week: 2, // Benefit of identifying threats (Focus of Week 2)
        courseCode: "COM496",
        question: "What is one key benefit of identifying cybersecurity threats in advance?",
        options: ["It eliminates the need for antivirus software", "It allows for proactive defense measures to prevent damage", "It guarantees that no cyberattacks will ever occur", "It speeds up software installation"],
        correctAnswer: "It allows for proactive defense measures to prevent damage"
    },
    {
        week: 2, // Understanding threats helps organizations (Focus of Week 2)
        courseCode: "COM496",
        question: "Understanding cybersecurity threats helps organizations to:",
        options: ["Build user-friendly websites", "Avoid legal responsibilities", "Develop better defense strategies and incident response plans", "Replace hardware more frequently"],
        correctAnswer: "Develop better defense strategies and incident response plans"
    },
    {
        week: 2, // Phishing as common threat (Detailed in Week 2)
        courseCode: "COM496",
        question: "Which of the following is considered a common cybersecurity threat?",
        options: ["Cloud storage", "Firewall", "Phishing", "Software updates"],
        correctAnswer: "Phishing"
    },
    {
        week: 2, // Encryption is defense, not threat (Covered Week 3, but identifying threats is Week 2)
        courseCode: "COM496",
        question: "Which of the following is NOT a common cybersecurity threat?",
        options: ["Malware", "Ransomware", "Encryption", "Denial of Service (DoS) attacks"],
        correctAnswer: "Encryption"
    },
    {
        week: 2, // Lists common threats (Focus of Week 2)
        courseCode: "COM496",
        question: "Which of the following best lists common cybersecurity threats?",
        options: ["Firewall, antivirus, VPN", "Malware, phishing, ransomware", "Authentication, authorization, auditing", "Backup, restore, replication"],
        correctAnswer: "Malware, phishing, ransomware"
    },
    {
        week: 2, // Good practice - Updates, passwords (General Prevention)
        courseCode: "COM496",
        question: "Which of the following is a good practice to protect against cyber threats?",
        options: ["Using the same password for all accounts", "Ignoring software updates", "Regularly updating software and using strong, unique passwords", "Sharing company credentials via email"],
        correctAnswer: "Regularly updating software and using strong, unique passwords"
    },
    {
        week: 2, // Reducing risk - Training (General Prevention)
        courseCode: "COM496",
        question: "How can companies reduce the risk of cyber attacks?",
        options: ["Disabling firewalls to improve internet speed", "Training employees on cybersecurity awareness and safe practices", "Allowing unrestricted access to all internal systems", "Only using antivirus software without any monitoring"],
        correctAnswer: "Training employees on cybersecurity awareness and safe practices"
    },
    {
        week: 2, // Org measure - MFA (General Prevention)
        courseCode: "COM496",
        question: "Which of the following is an effective organizational measure to protect against cyber threats?",
        options: ["Storing sensitive data in plain text", "Implementing multi-factor authentication (MFA) for all users", "Allowing any device to connect to the corporate network", "Avoiding security audits to save costs"],
        correctAnswer: "Implementing multi-factor authentication (MFA) for all users"
    },
    {
        week: 2, // Types of malware (Detailed in Week 2)
        courseCode: "COM496",
        question: "Which of the following are common types of malware?",
        options: ["Worms, Trojans, Ransomware, Spyware", "Firewalls, Antivirus, Backups, VPN", "HTTP, HTTPS, FTP, TCP", "Authentication, Authorization, Accounting"],
        correctAnswer: "Worms, Trojans, Ransomware, Spyware"
    },
    {
        week: 2, // Phishing vs Spear Phishing (Defined in Week 2)
        courseCode: "COM496",
        question: "What is the main difference between phishing and spear phishing?",
        options: ["Phishing is a targeted attack, while spear phishing is random.", "Phishing attacks are always conducted via phone, spear phishing uses websites.", "Phishing is a broad attack sent to many people, while spear phishing targets a specific individual or organization.", "There is no difference; both terms mean the same thing."],
        correctAnswer: "Phishing is a broad attack sent to many people, while spear phishing targets a specific individual or organization."
    },
    {
        week: 2, // Phishing example analysis (Detailed in Week 2)
        courseCode: "COM496",
        question: "You receive an email that looks like it’s from your bank, saying:\n“Urgent: We detected suspicious activity on your account. Please click the link below to verify your login details immediately.”\nThe sender’s email looks slightly off, like security@b4nk.com.\nWhat is the best explanation for this email?",
        options: ["It is a legitimate security alert from the bank.", "It is a phishing attempt trying to steal your login credentials.", "It is a promotional offer from the bank.", "It is a system-generated error message."],
        correctAnswer: "It is a phishing attempt trying to steal your login credentials."
    },
    {
        week: 2, // Virus mechanism (Detailed in Week 2)
        courseCode: "COM496",
        question: "How does a computer virus typically work?",
        options: ["It creates secure backups of the system.", "It improves the performance of your computer.", "It attaches itself to legitimate programs or files and spreads when they are executed.", "It protects your system from unauthorized access."],
        correctAnswer: "It attaches itself to legitimate programs or files and spreads when they are executed."
    },
    {
        week: 2, // ILOVEYOU virus (Fits Virus discussion)
        courseCode: "COM496",
        question: "Which of the following famous computer viruses spread via email and exploited social engineering by disguising itself as a love letter?",
        options: ["MyDoom", "ILOVEYOU", "WannaCry", "Conficker"],
        correctAnswer: "ILOVEYOU"
    },
    {
        week: 2, // Virus vs Worm vs Trojan comparison (Detailed in Week 2)
        courseCode: "COM496",
        question: "Which of the following correctly describes the key differences between viruses, worms, and trojans?",
        options: ["Viruses spread through email attachments, worms self-replicate and spread on their own, and trojans disguise themselves as legitimate programs to trick users.", "Viruses only affect hardware, worms do not spread, and trojans infect only mobile devices.", "Worms require human interaction to spread, viruses are self-replicating, and trojans provide security for systems.", "Trojans are harmless, viruses are always detected by antivirus software, and worms only target servers."],
        correctAnswer: "Viruses spread through email attachments, worms self-replicate and spread on their own, and trojans disguise themselves as legitimate programs to trick users."
    },
    {
        week: 2, // Ransomware mechanism (Detailed in Week 2)
        courseCode: "COM496",
        question: "How does ransomware typically work?",
        options: ["It encrypts the victim's files and demands a ransom payment to decrypt them.", "It steals sensitive data and sells it to third parties without any user interaction.", "It sends spam emails to the victim's contacts.", "It installs software to increase the system's processing speed."],
        correctAnswer: "It encrypts the victim's files and demands a ransom payment to decrypt them."
    },
    {
        week: 2, // GitHub DDoS (Fits DDoS discussion/examples)
        courseCode: "COM496",
        question: "In 2018, GitHub experienced a massive DDoS attack that reached a peak of 1.35 terabits per second. What made this attack particularly notable?",
        options: ["It used a new type of malware that affected GitHub's source code.", "It was the first attack to utilize the Memcached vulnerability, amplifying the traffic sent to the target.", "The attack targeted GitHub’s cloud storage service, shutting it down for several days.", "It was carried out by a group of hackers claiming political motives."],
        correctAnswer: "It was the first attack to utilize the Memcached vulnerability, amplifying the traffic sent to the target."
    },
    {
        week: 2, // State-sponsored attack purpose (Detailed in Week 2)
        courseCode: "COM496",
        question: "What is the purpose of state-sponsored cyber attacks?",
        options: ["To test new software on a global scale", "To gain political, economic, or military advantage over other nations", "To entertain hackers working for the government", "To assist companies with cybersecurity awareness"],
        correctAnswer: "To gain political, economic, or military advantage over other nations"
    },
    {
        week: 2, // Hacker motivations (Revisited in Week 2)
        courseCode: "COM496",
        question: "What are common motivations for hackers?",
        options: ["Financial gain, political agendas, personal challenge, or revenge", "Always helping companies improve their systems", "Learning how to use computers", "Only spreading harmless jokes"],
        correctAnswer: "Financial gain, political agendas, personal challenge, or revenge"
    },
    {
        week: 2, // Stuxnet example (State-sponsored, fits Week 2)
        courseCode: "COM496",
        question: "Which of the following is a well-known example of a state-sponsored cyber attack?",
        options: ["ILOVEYOU virus", "Stuxnet", "WannaCry", "Melissa virus"],
        correctAnswer: "Stuxnet"
    },
    {
        week: 2, // Strong password characteristic (General Prevention)
        courseCode: "COM496",
        question: "Which of the following is a characteristic of a strong password?",
        options: ["It contains your birthdate and name", "It’s short and easy to remember, like “1234”", "It includes a mix of upper- and lowercase letters, numbers, and special characters", "It is the same for all your accounts"],
        correctAnswer: "It includes a mix of upper- and lowercase letters, numbers, and special characters"
    },
    {
        week: 2, // MFA example (General Prevention)
        courseCode: "COM496",
        question: "Which of the following is an example of multi-factor authentication (MFA)?",
        options: ["Logging in with just a username and password", "Using a password and a fingerprint", "Typing your email address only", "Clicking \"remember me\" on a website"],
        correctAnswer: "Using a password and a fingerprint"
    },
    {
        week: 5, // Biometric authentication (OS Authentication Method)
        courseCode: "COM496",
        question: "Which of the following best describes biometric authentication?",
        options: ["Using an email code to log in", "Using your face or fingerprint to verify your identity", "Logging in from a trusted device", "Choosing a strong password"],
        correctAnswer: "Using your face or fingerprint to verify your identity"
    },
    {
        week: 2, // Software updates importance (General Prevention)
        courseCode: "COM496",
        question: "Why are regular software updates important for cybersecurity?",
        options: ["They slow down the computer to prevent overuse", "They fix bugs and patch security vulnerabilities that hackers could exploit", "They help you reset your password more often", "They delete old files automatically"],
        correctAnswer: "They fix bugs and patch security vulnerabilities that hackers could exploit"
    },
    {
        week: 2, // Firewall purpose (General Prevention)
        courseCode: "COM496",
        question: "What is the main purpose of a firewall in cybersecurity?",
        options: ["To store user passwords", "To scan the hard drive for viruses", "To monitor and control incoming and outgoing network traffic", "To speed up your internet connection"],
        correctAnswer: "To monitor and control incoming and outgoing network traffic"
    },
    {
        week: 5, // Packet-filtering firewall type (Detailed Firewall Types)
        courseCode: "COM496",
        question: "Which type of firewall filters traffic based on predefined rules?",
        options: ["Antivirus software", "Packet-filtering firewall", "Malware detector", "Encryption tool"],
        correctAnswer: "Packet-filtering firewall"
    },
    {
        week: 5, // Firewall action (Firewall Behavior)
        courseCode: "COM496",
        question: "What happens when a firewall detects unauthorized access?",
        options: ["It boosts the internet speed", "It automatically updates the operating system", "It blocks or restricts the suspicious traffic", "It sends spam to the attacker"],
        correctAnswer: "It blocks or restricts the suspicious traffic"
    },
    {
        week: 5, // Firewall types (Detailed Firewall Types)
        courseCode: "COM496",
        question: "Which of the following are valid types of firewalls?",
        options: ["Network-based, Host-based, and Next-Generation", "Hardware, Software, and Password firewalls", "LAN, WAN, and VPN firewalls", "Antivirus, Proxy, and Backup firewalls"],
        correctAnswer: "Network-based, Host-based, and Next-Generation"
    },
    {
        week: 3, // Earliest cryptography - Caesar (Classical Crypto)
        courseCode: "COM496",
        question: "Which of the following is one of the earliest known examples of cryptography in history?",
        options: ["RSA encryption", "The Caesar cipher used in ancient Rome", "Blockchain technology", "Quantum cryptography"],
        correctAnswer: "The Caesar cipher used in ancient Rome"
    },
    {
        week: 3, // Caesar cipher creator (Classical Crypto)
        courseCode: "COM496",
        question: "Who is credited with creating the first known cipher, the Caesar cipher?",
        options: ["Julius Caesar", "Leonardo da Vinci", "Alan Turing", "Augustus Caesar"],
        correctAnswer: "Julius Caesar"
    },
    {
        week: 3, // WWII crypto - Enigma (Crypto History Context)
        courseCode: "COM496",
        question: "Which cryptographic method was widely used in World War II to encode military messages?",
        options: ["RSA encryption", "Enigma machine", "Vigenère cipher", "DES encryption"],
        correctAnswer: "Enigma machine"
    },
    {
        week: 3, // NOT a type of crypto (Crypto Types)
        courseCode: "COM496",
        question: "Which of the following is NOT a type of cryptography?",
        options: ["Symmetric cryptography", "Asymmetric cryptography", "Hash functions", "Quantum cryptography"],
        correctAnswer: "Hash functions"
    },
    {
        week: 3, // Common types of crypto (Crypto Types)
        courseCode: "COM496",
        question: "Which of the following are common types of cryptography used for securing data?",
        options: ["Symmetric cryptography, Asymmetric cryptography, and Hash functions", "Data encryption and decryption", "Compression and decompression algorithms", "Key management and backup solutions"],
        correctAnswer: "Symmetric cryptography, Asymmetric cryptography, and Hash functions"
    },
    {
        week: 3, // Symmetric vs Asymmetric difference (Core Crypto Concepts)
        courseCode: "COM496",
        question: "Which of the following best describes the difference between Symmetric and Asymmetric cryptography?",
        options: ["Symmetric cryptography uses a single key for both encryption and decryption, while Asymmetric uses two different keys.", "Symmetric cryptography uses a private key, while Asymmetric uses a public key.", "Symmetric cryptography is used for hashing, while Asymmetric cryptography is for encryption.", "Symmetric cryptography is faster than Asymmetric cryptography because it uses two keys."],
        correctAnswer: "Symmetric cryptography uses a single key for both encryption and decryption, while Asymmetric uses two different keys."
    },
    {
        week: 3, // Asymmetric key feature (Asymmetric Crypto)
        courseCode: "COM496",
        question: "Which of the following is a key feature of asymmetric cryptography?",
        options: ["It uses the same key for both encryption and decryption", "It uses a pair of keys: a public key for encryption and a private key for decryption", "It only uses a single key for encryption, but the decryption is handled by a different method", "It is used only for hash functions and digital signatures"],
        correctAnswer: "It uses a pair of keys: a public key for encryption and a private key for decryption"
    },
    {
        week: 3, // Public-key algorithm - RSA (Asymmetric Crypto)
        courseCode: "COM496",
        question: "Which cryptographic algorithm is commonly used in public-key encryption?",
        options: ["AES (Advanced Encryption Standard)", "RSA (Rivest-Shamir-Adleman)", "SHA-256", "DES (Data Encryption Standard)"],
        correctAnswer: "RSA (Rivest-Shamir-Adleman)"
    },
    {
        week: 3, // Hash function purpose (Crypto Concepts)
        courseCode: "COM496",
        question: "What is the main purpose of a hash function in cryptography?",
        options: ["To encrypt and decrypt data using a secret key", "To create a fixed-size output (hash value) from input data of any size", "To generate a unique private key for encryption", "To provide the ability to transmit data securely over the internet"],
        correctAnswer: "To create a fixed-size output (hash value) from input data of any size"
    },
    {
        week: 3, // Real-world crypto app - PKI (Crypto Applications)
        courseCode: "COM496",
        question: "Which of the following is a real-world application of cryptography in securing online transactions?",
        options: ["VPN (Virtual Private Network)", "Bitcoin mining", "Public-key infrastructure (PKI)", "HTML5 encryption"],
        correctAnswer: "Public-key infrastructure (PKI)"
    },
    {
        week: 3, // Real-world tech - HTTPS (Crypto Applications)
        courseCode: "COM496",
        question: "Which real-world technology uses cryptographic algorithms to ensure secure communication over the internet?",
        options: ["HTTP", "HTTPS", "FTP", "SMTP"],
        correctAnswer: "HTTPS"
    },
    {
        week: 3, // Password security - Hashing (Crypto Applications)
        courseCode: "COM496",
        question: "Which of the following cryptographic techniques is commonly used to secure passwords in online systems?",
        options: ["RSA encryption", "Digital signatures", "Hashing algorithms", "Symmetric key encryption"],
        correctAnswer: "Hashing algorithms"
    },
    {
        week: 3, // App with E2EE - WhatsApp (Crypto Applications)
        courseCode: "COM496",
        question: "Which of the following apps uses end-to-end encryption to secure messages between users?",
        options: ["Facebook Messenger", "WhatsApp", "Snapchat", "Twitter"],
        correctAnswer: "WhatsApp"
    },
    {
        week: 3, // SSL/TLS purpose (Crypto Applications)
        courseCode: "COM496",
        question: "What is the primary purpose of SSL/TLS in cybersecurity?",
        options: ["To encrypt and secure communications over a network", "To manage user authentication through biometric data", "To prevent unauthorized access to a database", "To detect and prevent phishing attacks"],
        correctAnswer: "To encrypt and secure communications over a network"
    },
    {
        week: 3, // SSL vs TLS difference (Crypto Applications)
        courseCode: "COM496",
        question: "Which of the following is a key difference between SSL and TLS?",
        options: ["TLS is the newer, more secure version of SSL", "SSL is used for email encryption, while TLS is used for web traffic", "SSL requires symmetric encryption, while TLS requires asymmetric encryption", "There is no difference between SSL and TLS; they are the same"],
        correctAnswer: "TLS is the newer, more secure version of SSL"
    },
    {
        week: 4, // HTTPS port (Networking Protocols)
        courseCode: "COM496",
        question: "Which port is commonly used for HTTPS traffic secured by SSL/TLS?",
        options: ["Port 80", "Port 443", "Port 21", "Port 8080"],
        correctAnswer: "Port 443"
    },
    {
        week: 3, // Caesar cipher example (Classical Crypto)
        courseCode: "COM496",
        question: "In the Caesar cipher, if the shift value is 3, what would be the ciphered version of the word \"HELLO\"?",
        options: ["KHOOR", "EBIIL", "GDKKN", "JLNNP"],
        correctAnswer: "KHOOR"
    },
    {
        week: 3, // Vigenère cipher example (Classical Crypto)
        courseCode: "COM496",
        question: "If the keyword for the Vigenère cipher is \"KEY\" and the plaintext is \"HELLO\", what is the resulting ciphertext?",
        options: ["LEBBS", "KHOOR", "RIJVS", "YFYYF"],
        correctAnswer: "RIJVS"
    },
    {
        week: 3, // Simple substitution decryption (Classical Crypto)
        courseCode: "COM496",
        question: "Given the ciphertext \"Wklv lv d whvw phvvdjh\" encrypted using a simple substitution cipher, where each letter has been replaced by another letter a fixed number of positions down the alphabet, what is the plaintext?",
        options: ["This is a simple message", "This is a test message", "We are testing encryption", "Encryption works perfectly"],
        correctAnswer: "This is a test message"
    },
    {
        week: 3, // DES/3DES/AES differences (Symmetric Crypto)
        courseCode: "COM496",
        question: "Which of the following correctly describes the differences between DES, 3DES, and AES encryption algorithms?",
        options: ["DES is considered more secure than AES, while 3DES is the fastest of the three.", "AES is a block cipher with variable key lengths (128, 192, 256 bits) and is considered the most secure among the three. 3DES is a stronger version of DES, using three rounds of encryption with 56-bit keys, making it slower than AES.", "DES and 3DES use the same key size, but AES uses a longer key size and is less secure.", "3DES is no longer used due to its weakness, while AES and DES are still widely used in modern cryptography."],
        correctAnswer: "AES is a block cipher with variable key lengths (128, 192, 256 bits) and is considered the most secure among the three. 3DES is a stronger version of DES, using three rounds of encryption with 56-bit keys, making it slower than AES."
    },
    {
        week: 3, // Block vs Stream ciphers (Symmetric Crypto)
        courseCode: "COM496",
        question: "Which of the following correctly describes the differences between block ciphers and stream ciphers?",
        options: ["Block ciphers encrypt data in fixed-size blocks, while stream ciphers encrypt data one bit or byte at a time. Block ciphers are generally faster than stream ciphers.", "Block ciphers are used for encryption of small data, whereas stream ciphers are used for larger datasets.", "Stream ciphers work with plaintext in fixed-size blocks, while block ciphers encrypt one bit at a time.", "Block ciphers require much less computational power compared to stream ciphers, making them more efficient for large-scale encryption."],
        correctAnswer: "Block ciphers encrypt data in fixed-size blocks, while stream ciphers encrypt data one bit or byte at a time. Block ciphers are generally faster than stream ciphers."
    },
    {
        week: 3, // RSA encryption model (Asymmetric Crypto)
        courseCode: "COM496",
        question: "How does the RSA encryption model work?",
        options: ["RSA uses the same key for both encryption and decryption, making it a symmetric encryption algorithm.", "In RSA, encryption is performed using the public key, and decryption is performed using the private key.", "RSA only works with large symmetric keys, and encryption and decryption are done using the same key.", "In RSA, encryption is done with the private key, and decryption is done with the public key."],
        correctAnswer: "In RSA, encryption is performed using the public key, and decryption is performed using the private key."
    },
    {
        week: 3, // RSA vs ECC differences (Asymmetric Crypto)
        courseCode: "COM496",
        question: "Which of the following correctly describes the differences between RSA and ECC?",
        options: ["RSA is based on the difficulty of factoring large prime numbers, while ECC is based on the difficulty of solving problems related to elliptic curves.", "RSA requires smaller keys for the same level of security as ECC, making ECC more computationally efficient.", "RSA is faster than ECC in terms of encryption and decryption, especially for larger key sizes.", "ECC is considered less secure than RSA and is not used in modern cryptographic protocols."],
        correctAnswer: "RSA is based on the difficulty of factoring large prime numbers, while ECC is based on the difficulty of solving problems related to elliptic curves."
    },
    {
        week: 3, // TLS/SSL works (Crypto Applications)
        courseCode: "COM496",
        question: "How does TLS/SSL (Transport Layer Security / Secure Sockets Layer) work?",
        options: ["TLS/SSL ensures security by encrypting the entire data connection and verifying the identity of the server using a symmetric key.", "TLS/SSL uses asymmetric encryption for the initial handshake to securely exchange keys and then switches to symmetric encryption for data transfer.", "TLS/SSL only encrypts data during transmission and does not provide any server authentication.", "TLS/SSL relies on a single shared secret key to encrypt and decrypt the communication between the client and the server."],
        correctAnswer: "TLS/SSL uses asymmetric encryption for the initial handshake to securely exchange keys and then switches to symmetric encryption for data transfer."
    },
    {
        week: 3, // Quantum cryptography (Future Crypto)
        courseCode: "COM496",
        question: "What is quantum cryptography?",
        options: ["Quantum cryptography uses classical encryption algorithms enhanced by quantum mechanics to improve security.", "Quantum cryptography uses principles of quantum mechanics to secure data by leveraging the quantum key distribution (QKD) method, which ensures that any eavesdropping can be detected.", "Quantum cryptography is based on the idea that it uses the encryption keys to break encryption algorithms, allowing faster and easier data decryption.", "Quantum cryptography is only useful for secure communication over long distances and is not applicable to modern internet communication."],
        correctAnswer: "Quantum cryptography uses principles of quantum mechanics to secure data by leveraging the quantum key distribution (QKD) method, which ensures that any eavesdropping can be detected."
    },
    {
        week: 4, // Threats/Vulns/Attacks relationship (Network Security Intro)
        courseCode: "COM496",
        question: "Which of the following correctly defines the relationship between threats, vulnerabilities, and attacks in cybersecurity?",
        options: ["A threat refers to any weakness in a system, a vulnerability is an event that occurs due to the exploitation of that weakness, and an attack is the process of defending the system.", "A threat is a potential cause of harm to a system, a vulnerability is a weakness that could be exploited by a threat, and an attack is the action taken to exploit that vulnerability.", "A threat is any action or event that causes an attack, a vulnerability is a specific type of threat, and an attack is any weakness in the system.", "A vulnerability is a malicious actor attempting to break into a system, a threat is a defensive measure, and an attack is an automatic response by the system."],
        correctAnswer: "A threat is a potential cause of harm to a system, a vulnerability is a weakness that could be exploited by a threat, and an attack is the action taken to exploit that vulnerability."
    },
    {
        week: 4, // Types of vulnerabilities (Network Security Intro)
        courseCode: "COM496",
        question: "Which of the following are types of vulnerabilities in cybersecurity?",
        options: ["Software vulnerabilities, human vulnerabilities, and hardware vulnerabilities", "SQL injection, buffer overflow, and phishing attacks", "Weak encryption, outdated software, and firewall misconfigurations", "Trojan horse, worm, and virus"],
        correctAnswer: "Weak encryption, outdated software, and firewall misconfigurations"
    },
    {
        week: 4, // Passive vs Active attacks difference (Network Attacks)
        courseCode: "COM496",
        question: "Which of the following describes the difference between passive attacks and active attacks in network security?",
        options: ["Passive attacks involve unauthorized access to a system with the goal of stealing data without altering it, while active attacks actively alter or disrupt the system, such as by injecting malicious code.", "Passive attacks are always detected by security systems, while active attacks cannot be detected by monitoring tools.", "Active attacks only occur in wireless networks, while passive attacks happen only in wired networks.", "Active attacks involve stealing data, while passive attacks involve attacking the network physically."],
        correctAnswer: "Passive attacks involve unauthorized access to a system with the goal of stealing data without altering it, while active attacks actively alter or disrupt the system, such as by injecting malicious code."
    },
    {
        week: 4, // Passive attacks examples (Network Attacks)
        courseCode: "COM496",
        question: "Which of the following is true about passive attacks in network security, and what are some examples?",
        options: ["Passive attacks involve stealing or altering data, but they do not disrupt the operation of the network or system. Examples include eavesdropping, traffic analysis, and packet sniffing.", "Passive attacks always alter data in transit, such as by modifying packets, but they are not detected by monitoring systems. Examples include DoS attacks, man-in-the-middle attacks, and session hijacking.", "Passive attacks involve disrupting the network, causing a system to crash. Examples include DDoS, data injection, and brute-force attacks.", "Passive attacks are never detected by monitoring systems, and they typically involve physical damage to hardware. Examples include physical device theft, cable tapping, and data corruption."],
        correctAnswer: "Passive attacks involve stealing or altering data, but they do not disrupt the operation of the network or system. Examples include eavesdropping, traffic analysis, and packet sniffing."
    },
    {
        week: 4, // Active attacks examples (Network Attacks)
        courseCode: "COM496",
        question: "Which of the following describes active attacks in network security, and what are some examples?",
        options: ["Active attacks aim to interfere with network operations, such as by modifying data, injecting malicious content, or disrupting service. Examples include man-in-the-middle attacks, Denial of Service (DoS), and data modification.", "Active attacks involve listening in on communications without altering the data, examples include packet sniffing, traffic analysis, and eavesdropping.", "Active attacks only involve physical access to network devices, examples include hardware tampering, device theft, and wire tapping.", "Active attacks are always non-destructive and do not affect the network’s performance. Examples include brute force attacks, password cracking, and keylogging."],
        correctAnswer: "Active attacks aim to interfere with network operations, such as by modifying data, injecting malicious content, or disrupting service. Examples include man-in-the-middle attacks, Denial of Service (DoS), and data modification."
    },
    {
        week: 4, // Passive attack mechanism (Network Attacks)
        courseCode: "COM496",
        question: "How does a passive attack work in network security?",
        options: ["A passive attack involves altering or disrupting the flow of data, usually to damage or deny service to a network.", "A passive attack involves monitoring or intercepting data without modifying it, typically to gather sensitive information without the victim's knowledge.", "A passive attack involves injecting malware into the system, which then disrupts operations.", "A passive attack involves brute-force cracking passwords and gaining unauthorized access to systems."],
        correctAnswer: "A passive attack involves monitoring or intercepting data without modifying it, typically to gather sensitive information without the victim's knowledge."
    },
    {
        week: 4, // Passive attack purpose (Network Attacks)
        courseCode: "COM496",
        question: "What is the main purpose of a passive attack in network security?",
        options: ["To disrupt the operation of a network or system by modifying or deleting data.", "To gather sensitive information without altering or interfering with the data, often for future use in other attacks.", "To inject malicious code into a network and steal or destroy data.", "To bypass encryption and decrypt data transmitted over a network."],
        correctAnswer: "To gather sensitive information without altering or interfering with the data, often for future use in other attacks."
    },
    {
        week: 4, // Protect from passive attacks (Network Attack Defense)
        courseCode: "COM496",
        question: "How can we protect ourselves from passive attacks in network security?",
        options: ["By using strong encryption to ensure that intercepted data is unreadable.", "By allowing open communication on insecure channels without any security measures.", "By avoiding the use of firewalls to prevent any data from being filtered.", "By using physical security measures only and ignoring network-level protection."],
        correctAnswer: "By using strong encryption to ensure that intercepted data is unreadable."
    },
    {
        week: 4, // Active attacks mechanism (Network Attacks)
        courseCode: "COM496",
        question: "How do active attacks work in network security?",
        options: ["Active attacks involve modifying data or disrupting services to harm the target system or network, such as Denial of Service (DoS) or man-in-the-middle attacks.", "Active attacks involve monitoring data without altering it, such as packet sniffing or eavesdropping.", "Active attacks only involve physical tampering with network devices, such as device theft or hardware manipulation.", "Active attacks are primarily used for data encryption and securing network traffic, like SSL/TLS encryption."],
        correctAnswer: "Active attacks involve modifying data or disrupting services to harm the target system or network, such as Denial of Service (DoS) or man-in-the-middle attacks."
    },
    {
        week: 4, // ARP poisoning (Network Layer Attack)
        courseCode: "COM496",
        question: "What is ARP poisoning in network security?",
        options: ["A technique where an attacker sends fake ARP messages to associate their MAC address with the IP address of another device, allowing them to intercept, modify, or block network traffic.", "A method used to encrypt network traffic between devices to protect it from eavesdropping.", "A process where an attacker gains unauthorized access to a system by exploiting weak passwords.", "A form of denial of service (DoS) attack where an attacker floods the network with excessive traffic, causing devices to disconnect."],
        correctAnswer: "A technique where an attacker sends fake ARP messages to associate their MAC address with the IP address of another device, allowing them to intercept, modify, or block network traffic."
    },
    {
        week: 4, // DNS Spoofing mechanism (Network Layer Attack)
        courseCode: "COM496",
        question: "How does DNS Spoofing work, step by step?",
        options: ["The attacker sends fake DNS responses with malicious IP addresses to a vulnerable DNS server, causing the server to cache incorrect records and redirect users to fake websites.", "The attacker intercepts encrypted DNS traffic between the client and server, decrypts it, and alters the DNS records to redirect users to a fake website.", "The attacker uses brute-force methods to guess DNS server credentials, gaining control of the server to modify DNS records and redirect traffic.", "The attacker uses a Distributed Denial of Service (DDoS) attack to overwhelm the DNS server, preventing legitimate requests from being processed."],
        correctAnswer: "The attacker sends fake DNS responses with malicious IP addresses to a vulnerable DNS server, causing the server to cache incorrect records and redirect users to fake websites."
    },
    {
        week: 5, // IDS purpose (Network Defense Tools)
        courseCode: "COM496",
        question: "What is the main purpose of an Intrusion Detection System (IDS) in network security?",
        options: ["To prevent unauthorized access by actively blocking suspicious traffic in real-time.", "To detect and alert administrators about potential threats or unauthorized activities on the network.", "To encrypt network traffic to ensure data privacy and security.", "To scan network traffic for malware and viruses."],
        correctAnswer: "To detect and alert administrators about potential threats or unauthorized activities on the network."
    },
    {
        week: 5, // IDS types (Network Defense Tools)
        courseCode: "COM496",
        question: "Which of the following are the two main types of Intrusion Detection Systems (IDS)?",
        options: ["Signature-based IDS and Behavior-based IDS", "Network-based IDS and Host-based IDS", "Active IDS and Passive IDS", "Software-based IDS and Hardware-based IDS"],
        correctAnswer: "Network-based IDS and Host-based IDS"
    },
    {
        week: 5, // Signature-based IDS mechanism (Network Defense Tools)
        courseCode: "COM496",
        question: "How does a Signature-based Intrusion Detection System (IDS) work?",
        options: ["It detects threats by analyzing network traffic patterns and comparing them to known attack signatures.", "It uses machine learning algorithms to detect new and unknown threats in real-time.", "It analyzes user behavior and identifies deviations from normal activities.", "It monitors physical security devices like cameras and locks to detect unauthorized access."],
        correctAnswer: "It detects threats by analyzing network traffic patterns and comparing them to known attack signatures."
    },
    {
        week: 5, // Host-based IDS description (Network Defense Tools)
        courseCode: "COM496",
        question: "Which of the following best describes a Host-based IDS (HIDS)?",
        options: ["An IDS that monitors traffic across an entire network.", "An IDS that is installed on a specific host or device and monitors activities on that host for signs of intrusion.", "An IDS that monitors email communications for phishing attempts.", "An IDS that specifically detects vulnerabilities in web applications."],
        correctAnswer: "An IDS that is installed on a specific host or device and monitors activities on that host for signs of intrusion."
    },
    {
        week: 5, // IPS vs IDS response difference (Network Defense Tools)
        courseCode: "COM496",
        question: "What makes Intrusion Prevention Systems (IPS) different from Intrusion Detection Systems (IDS) in terms of real-time response?",
        options: ["IPS systems only detect and alert, while IDS systems block traffic.", "IPS actively takes action to block malicious traffic as it occurs, while IDS simply alerts administrators without blocking anything.", "Both IPS and IDS provide real-time protection, but IPS requires manual intervention to take action.", "IPS only works in the background and does not impact real-time operations."],
        correctAnswer: "IPS actively takes action to block malicious traffic as it occurs, while IDS simply alerts administrators without blocking anything."
    },
    {
        week: 5, // IPS primary action (Network Defense Tools)
        courseCode: "COM496",
        question: "Which of the following is a primary preventive action of an Intrusion Prevention System (IPS)?",
        options: ["Logging suspicious activity for future analysis.", "Encrypting communication between the attacker and the target system.", "Blocking malicious traffic based on defined rules or signatures.", "Analyzing system logs for vulnerabilities."],
        correctAnswer: "Blocking malicious traffic based on defined rules or signatures."
    },
    {
        week: 5, // False positive IPS concept (Network Defense Tools)
        courseCode: "COM496",
        question: "What is a false positive in the context of an Intrusion Prevention System (IPS)?",
        options: ["An instance where the IPS fails to detect a real attack.", "An instance where the IPS mistakenly identifies legitimate traffic as malicious, blocking it.", "An instance where the IPS successfully blocks an attack without raising an alert.", "An instance where the IPS encrypts network traffic for security."],
        correctAnswer: "An instance where the IPS mistakenly identifies legitimate traffic as malicious, blocking it."
    },
    {
        week: 5, // Signature-based IPS mechanism (Network Defense Tools)
        courseCode: "COM496",
        question: "How does a Signature-based Intrusion Prevention System (IPS) detect threats?",
        options: ["By analyzing the behavior of network traffic and identifying patterns that deviate from the norm.", "By comparing incoming traffic to a database of known attack signatures to identify threats.", "By preventing attacks based on the IP addresses involved in the traffic.", "By applying machine learning techniques to detect unknown threats in real-time."],
        correctAnswer: "By comparing incoming traffic to a database of known attack signatures to identify threats."
    },
    {
        week: 5, // Network-based IPS role (Network Defense Tools)
        courseCode: "COM496",
        question: "What is the role of a Network-based IPS?",
        options: ["It is installed on individual devices to monitor and block attacks targeting that device.", "It monitors network traffic for malicious activity and blocks attacks in real-time, typically at the network perimeter.", "It only works on wireless networks to prevent unauthorized access.", "It analyzes encrypted traffic to prevent data breaches."],
        correctAnswer: "It monitors network traffic for malicious activity and blocks attacks in real-time, typically at the network perimeter."
    },
    {
        week: 5, // IPS main function (Network Defense Tools)
        courseCode: "COM496",
        question: "What is the main function of an Intrusion Prevention System (IPS)?",
        options: ["To detect and log security threats without taking any action.", "To actively block or prevent malicious activity in real-time, stopping attacks before they affect the network.", "To provide network encryption to ensure data privacy.", "To monitor traffic and detect abnormal behavior but without blocking or preventing attacks."],
        correctAnswer: "To actively block or prevent malicious activity in real-time, stopping attacks before they affect the network."
    },
    {
        week: 5, // IPS vs IDS difference (Network Defense Tools)
        courseCode: "COM496",
        question: "What is the primary difference between Intrusion Prevention Systems (IPS) and Intrusion Detection Systems (IDS)?",
        options: ["IPS detects and logs threats, while IDS actively blocks malicious traffic.", "IPS actively prevents attacks in real-time, while IDS only detects and alerts administrators about potential threats.", "IDS works on the application layer, while IPS works on the network layer.", "There is no significant difference between IPS and IDS."],
        correctAnswer: "IPS actively prevents attacks in real-time, while IDS only detects and alerts administrators about potential threats."
    },
    {
        week: 5, // Wireshark purpose (Network Tools)
        courseCode: "COM496",
        question: "What is the main purpose of Wireshark?",
        options: ["To detect and prevent network attacks in real-time.", "To capture and analyze network traffic in order to troubleshoot network issues.", "To encrypt network traffic for enhanced security.", "To provide network-based intrusion detection and prevention."],
        correctAnswer: "To capture and analyze network traffic in order to troubleshoot network issues."
    },
    {
        week: 5, // Wireshark use case (Network Tools)
        courseCode: "COM496",
        question: "Which of the following is a typical use case for Wireshark?",
        options: ["Encrypting network traffic to ensure data privacy.", "Monitoring network traffic to detect malicious activity.", "Capturing and analyzing packet-level data to diagnose network issues.", "Blocking unwanted network traffic based on predefined rules."],
        correctAnswer: "Capturing and analyzing packet-level data to diagnose network issues."
    },
    {
        week: 5, // Wireshark data capture (Network Tools)
        courseCode: "COM496",
        question: "What type of data can Wireshark capture and analyze?",
        options: ["Only HTTP and HTTPS traffic.", "Only traffic related to social media platforms.", "All types of network traffic, including HTTP, TCP, UDP, DNS, and more.", "Only encrypted traffic."],
        correctAnswer: "All types of network traffic, including HTTP, TCP, UDP, DNS, and more."
    },
    {
        week: 5, // Wireshark analysis capabilities (Network Tools)
        courseCode: "COM496",
        question: "Which of the following can you do with Wireshark once you have captured network traffic?",
        options: ["View detailed information about the captured packets, such as source and destination IP addresses, protocol types, and packet contents.", "Automatically block suspicious packets.", "Encrypt the captured packets to enhance network security.", "Modify packets in real-time for testing purposes."],
        correctAnswer: "View detailed information about the captured packets, such as source and destination IP addresses, protocol types, and packet contents."
    },
    {
        week: 5, // Wireshark capture protocol (Network Tools)
        courseCode: "COM496",
        question: "Which protocol does Wireshark commonly use to capture network packets?",
        options: ["FTP", "HTTP", "pcap (Packet Capture)", "DNS"],
        correctAnswer: "pcap (Packet Capture)"
    },
    {
        week: 5, // Snort purpose (Network Tools - NIDS/IPS)
        courseCode: "COM496",
        question: "What is Snort primarily used for?",
        options: ["A tool for encrypting network traffic.", "A network intrusion detection and prevention system (IDS/IPS).", "A malware detection system.", "A firewall configuration tool."],
        correctAnswer: "A network intrusion detection and prevention system (IDS/IPS)."
    },
    {
        week: 5, // Snort protocol analysis (Network Tools)
        courseCode: "COM496",
        question: "Which network protocols can Snort analyze for potential attacks?",
        options: ["Only HTTP and HTTPS.", "Only TCP/IP traffic.", "All network protocols, including TCP, UDP, ICMP, and more.", "Only DNS traffic."],
        correctAnswer: "All network protocols, including TCP, UDP, ICMP, and more."
    },
    {
        week: 5, // Snort logging (Network Tools)
        courseCode: "COM496",
        question: "How does Snort handle network traffic and log the results?",
        options: ["Snort analyzes network traffic and saves the results in PCAP format.", "Snort analyzes network traffic and saves the results in alert files in ASCII format.", "Snort only collects traffic data without analyzing it.", "Snort does not log any data but merely alerts the user in real-time."],
        correctAnswer: "Snort analyzes network traffic and saves the results in alert files in ASCII format."
    },


    // --- Entrepreneurship (GRI403) ---
    // --- Week 1: GRI403 ---
    {
        week: 1,
        courseCode: "GRI403",
        question: "What does competition-based pricing involve?",
        options: [
            "Determining price based on environmental factors",
            "Setting prices according to production costs",
            "Ignoring costs and following market demands",
            "Adjusting prices based on customer demand",
            "None of them is correct"
        ],
        correctAnswer: "INone of them is correct"
    },
    {
        week: 1,
        courseCode: "GRI403",
        question: "What is foresight in the business context?",
        options: [
            "Historical analysis",
            "Market share analysis",
            "Current market conditions",
            "Predicting future events",
            "None of them is correct"
        ],
        correctAnswer: "Predicting future events"
    },
    {
        week: 1,
        courseCode: "GRI403",
        question: "What is the purpose of dividing the market into geographic classifications in marketing plans?",
        options: [
            "To define target markets based on regions",
            "To analyze cultural changes",
            "To focus on direct distribution strategies",
            "To evaluate demographic criteria",
            "All of them are correct"
        ],
        correctAnswer: "To define target markets based on regions"
    },
    {
        week: 1,
        courseCode: "GRI403",
        question: "What does situation analysis in a marketing plan focus on?",
        options: [
            "Product development strategies",
            "Where are we?",
            "All of them are correct",
            "Future market trends",
            "Competitor analysis"
        ],
        correctAnswer: "Where are we?"
    },
    {
        week: 1,
        courseCode: "GRI403",
        question: "What does PEST Analysis stand for in the context of business plans and market analysis?",
        options: [
            "None of them is correct",
            "Political, Environmental, Social, Technological",
            "Public, Economic, Strategic, Technological",
            "Political, Economical, Social, Technological",
            "Personal, Economic, Social, Technological"
        ],
        correctAnswer: "Political, Economical, Social, Technological"
    },
    {
        week: 1,
        courseCode: "GRI403",
        question: "How is demographical environment analyzed in marketing plans?",
        options: [
            "Analyzing population size, age, gender, race, etc.",
            "By assessing global demographics",
            "By analyzing competitors' populations",
            "By evaluating the market's financial structure",
            "All of them are correct"
        ],
        correctAnswer: "Analyzing population size, age, gender, race, etc."
    },
    {
        week: 1,
        courseCode: "GRI403",
        question: "What are the four main criteria used for market classification?",
        options: [
            "Sector, Region, Climate, Population",
            "Geographic, Demographic, Psychographic, Behavioral",
            "Political, Economic, Societal, Technological",
            "Cultural, Economic, Social, Environmental",
            "None of them is correct"
        ],
        correctAnswer: "Geographic, Demographic, Psychographic, Behavioral"
    },
    {
        week: 1,
        courseCode: "GRI403",
        question: "What is the primary purpose of market research phases like gathering primary data sources?",
        options: [
            "Identify competitors' prices",
            "None of them is correct",
            "Gather information directly from the market",
            "Evaluate environmental factors",
            "Analyze political factors"
        ],
        correctAnswer: "Gather information directly from the market"
    },
    {
        week: 1,
        courseCode: "GRI403",
        question: "What does the opportunity represent in marketing terms?",
        options: [
            "A situation where market needs are poorly served",
            "Lower distribution costs",
            "Lower production costs",
            "All of them are correct",
            "Intense effort to widen the general market"
        ],
        correctAnswer: "A situation where market needs are poorly served"
    },
    {
        week: 1,
        courseCode: "GRI403",
        question: "Which factor is NOT part of the changeable macro environment affecting establishments?",
        options: [
            "Demographic environment",
            "All of them are correct",
            "Economical environment",
            "Product popularity",
            "Juridical and political environment"
        ],
        correctAnswer: "Product popularity"
    },
    {
        week: 1,
        courseCode: "GRI403",
        question: "What does SWOT analysis help identify in the context of environmental and establishment relations?",
        options: [
            "Strengths, Weaknesses, Opportunities, Threats",
            "Sector potential",
            "Market share",
            "Market competition",
            "None of them is correct"
        ],
        correctAnswer: "Strengths, Weaknesses, Opportunities, Threats"
    },
    {
        week: 1,
        courseCode: "GRI403",
        question: "What is a benefit of a well-prepared marketing plan for an entrepreneur?",
        options: [
            "Foresight of opportunities and threats",
            "Increased competition",
            "All of them are correct",
            "Higher production costs",
            "Reduction in marketing goals"
        ],
        correctAnswer: "Foresight of opportunities and threats"
    },
    {
        week: 1,
        courseCode: "GRI403",
        question: "What is the primary purpose of a marketing plan?",
        options: [
            "All of them are correct",
            "Analyzing competitors strategies",
            "Outlining marketing aims and planned activities",
            "Defining corporate aims",
            "Documenting daily operations"
        ],
        correctAnswer: "Outlining marketing aims and planned activities"
    },
    {
        week: 1,
        courseCode: "GRI403",
        question: "What fundamental questions does a marketing plan aim to answer?",
        options: [
            "Where are we? Where do we want to go? How can we reach the aims?",
            "All of them are correct",
            "Why do we need a marketing plan? What are the current trends? How much should we invest?",
            "Who are our competitors? What are the market trends? When should we launch new products?",
            "How much profit do we want to make? Who are our target customers? Where should we advertise?"
        ],
        correctAnswer: "Where are we? Where do we want to go? How can we reach the aims?"
    },
    {
        week: 1,
        courseCode: "GRI403",
        question: "What is an example of a behavioral classification in market segmentation?",
        options: [
            "Climate",
            "Age",
            "Social class, personal properties, and consumer behaviors",
            "All of them are correct",
            "Population density"
        ],
        correctAnswer: "Social class, personal properties, and consumer behaviors"
    },
    {
        week: 1,
        courseCode: "GRI403",
        question: "Which of the following is an example of a behavioral criteria in market classification?",
        options: [
            "Age",
            "Population density",
            "None of them is correct",
            "Purchasing habits",
            "Climate"
        ],
        correctAnswer: "Purchasing habits"
    },
    {
        week: 1,
        courseCode: "GRI403",
        question: "According to the provided text, what is the minimum capital required to establish a joint stock company in Turkey?",
        options: [
            "50,000 Rupees",
            "100,000 Turkish Lira",
            "50,000 Turkish Lira",
            "10,000 Euros",
            "No minimum capital required"
        ],
        correctAnswer: "50,000 Turkish Lira"
    },
    {
        week: 1,
        courseCode: "GRI403",
        question: "Based on the text, who is authorized to grant a business license within the 'means-quality border' in Turkey?",
        options: [
            "The National Ministry of Trade",
            "The local Chamber of Commerce",
            "The Metropolitan authority responsible for the area",
            "The central government planning office",
            "Any registered notary public"
        ],
        correctAnswer: "The Metropolitan authority responsible for the area"
    },
    {
        week: 1,
        courseCode: "GRI403",
        question: "Why is work specialization considered important in a company, according to the notes?",
        options: [
            "To decrease the need for management",
            "To increase organization efficiency or enhance organization performance",
            "To ensure all employees have the same skills",
            "To simplify the hiring process",
            "To reduce operational costs directly"
        ],
        correctAnswer: "To increase organization efficiency or enhance organization performance"
    },
    {
        week: 1,
        courseCode: "GRI403",
        question: "What is segmentation according to function in marketing, as described in the text?",
        options: [
            "Grouping customers by geographic location",
            "Dividing the market based on product features",
            "Division of task based on job titles",
            "Classifying consumers by age and gender",
            "Separating marketing activities by channel"
        ],
        correctAnswer: "Division of task based on job titles"
    },
    {
        week: 1,
        courseCode: "GRI403",
        question: "What is the critical role of a work plan when seeking funding from investors or banks?",
        options: [
            "Detailing the company's history",
            "Listing all potential employees",
            "Demonstrating the potential of the project",
            "Providing a five-year tax forecast",
            "Outlining the competitor's weaknesses"
        ],
        correctAnswer: "Demonstrating the potential of the project"
    },
    {
        week: 1,
        courseCode: "GRI403",
        question: "What is the purpose of break-even analysis in financial planning, according to the text?",
        options: [
            "Calculating the company's total market share",
            "Observing the relation between cost, equity, and profit",
            "Determining the optimal advertising budget",
            "Forecasting long-term interest rates",
            "Analyzing employee performance metrics"
        ],
        correctAnswer: "Observing the relation between cost, equity, and profit"
    },
    {
        week: 1,
        courseCode: "GRI403",
        question: "What key aspect makes financial plans different from accounting?",
        options: [
            "Use of numerical data",
            "Focus on historical data only",
            "Emphasis on future outcomes",
            "Requirement for external auditing",
            "Reporting on liabilities"
        ],
        correctAnswer: "Emphasis on future outcomes"
    },
    {
        week: 1,
        courseCode: "GRI403",
        question: "According to the text, why is risk management important for a company?",
        options: [
            "To eliminate all possible risks",
            "To guarantee future profits",
            "To improve perception about risk",
            "To satisfy legal requirements only",
            "To decrease the company's insurance premiums"
        ],
        correctAnswer: "To improve perception about risk"
    },
    {
        week: 1,
        courseCode: "GRI403",
        question: "What is operational risk in risk management?",
        options: [
            "Risk related to changes in interest rates",
            "Risk of competitors entering the market",
            "Risk of monetary loss caused by internal and external events",
            "Risk associated with foreign exchange fluctuations",
            "Risk of customers defaulting on payments"
        ],
        correctAnswer: "Risk of monetary loss caused by internal and external events"
    },
    {
        week: 1,
        courseCode: "GRI403",
        question: "How is risk defined in the context of risk management presented in the text?",
        options: [
            "Only negative events that have already occurred",
            "Any uncertainty in financial markets",
            "As possible chances or threats in the future",
            "The probability of project failure",
            "A situation requiring immediate management intervention"
        ],
        correctAnswer: "As possible chances or threats in the future"
    },
    {
        week: 1,
        courseCode: "GRI403",
        question: "What is liquidity risk in risk management?",
        options: [
            "The risk of assets losing value",
            "The risk of being unable to pay on time due to cash shortage",
            "The risk associated with investing in illiquid markets",
            "The risk of inflation eroding purchasing power",
            "The risk of failing to meet sales targets"
        ],
        correctAnswer: "The risk of being unable to pay on time due to cash shortage"
    },
    {
        week: 1,
        courseCode: "GRI403",
        question: "Which financial aspect does the term 'Starbucks spreadsheet' likely refer to, based on the provided answer?",
        options: [
            "Cost reduction strategies",
            "Employee compensation calculations",
            "Revenue generation",
            "Debt management",
            "Asset allocation"
        ],
        correctAnswer: "Revenue generation"
    },
    {
        week: 1,
        courseCode: "GRI403",
        question: "How does Tesla's financial plan contribute to its intellectual success, according to the text?",
        options: [
            "Through aggressive marketing campaigns",
            "By focusing on short-term profits",
            "Via strategic cost management",
            "By minimizing research and development",
            "Through high dividend payouts"
        ],
        correctAnswer: "Via strategic cost management"
    },
    {
        week: 1,
        courseCode: "GRI403",
        question: "What key difference distinguishes qualitative from quantitative analysis, based on the text's explanation?",
        options: [
            "Quantitative uses numbers, qualitative uses text",
            "Qualitative focuses on past events, quantitative on future predictions",
            "Qualitative involves subjective evaluation, quantitative involves numerical data and past events analysis",
            "Quantitative is used for marketing, qualitative for finance",
            "Qualitative is always cheaper to conduct than quantitative"
        ],
        correctAnswer: "Qualitative involves subjective evaluation, quantitative involves numerical data and past events analysis"
    },
    {
        week: 1,
        courseCode: "GRI403",
        question: "Which of the following is NOT considered one of the basic pillars of management mentioned in the text?",
        options: [
            "Planning",
            "Organizing",
            "Leading",
            "Controlling",
            "Saving"
        ],
        correctAnswer: "Saving"
    },
    {
        week: 1,
        courseCode: "GRI403",
        question: "What is risk, as defined in the provided material?",
        options: [
            "A certainty of loss",
            "Only external factors affecting a business",
            "Possible chances or threats in the future",
            "An accounting discrepancy",
            "A completed negative event"
        ],
        correctAnswer: "Possible chances or threats in the future"
    },
    {
        week: 1,
        courseCode: "GRI403",
        question: "What defines liquidity risk according to the text?",
        options: [
            "The risk of assets becoming obsolete",
            "The risk of being unable to pay on time due to a lack of cash",
            "The risk of losing market share",
            "The risk related to changes in regulations",
            "The risk of damage to brand reputation"
        ],
        correctAnswer: "The risk of being unable to pay on time due to a lack of cash"
    },
    {
        week: 1,
        courseCode: "GRI403",
        question: "What is a sole proprietorship?",
        options: [
            "A company owned by shareholders",
            "A business structure with multiple owners sharing liability",
            "A company type characterized by a single person who owns and operates the business",
            "A non-profit organization",
            "A government-owned entity"
        ],
        correctAnswer: "A company type characterized by a single person who owns and operates the business"
    },
    {
        week: 1,
        courseCode: "GRI403",
        question: "What is a partnership?",
        options: [
            "A company type where a single individual holds all shares",
            "A business owned and operated by the government",
            "A company type where two or more individuals share ownership and operate the business together",
            "A temporary joint venture for a single project",
            "A large corporation listed on the stock exchange"
        ],
        correctAnswer: "A company type where two or more individuals share ownership and operate the business together"
    },
    {
        week: 1,
        courseCode: "GRI403",
        question: "What is a stock corporation?",
        options: [
            "A business owned by one person",
            "An entity where ownership is represented by shares issued to shareholders",
            "A partnership with limited liability for some partners",
            "A cooperative owned by its members",
            "A company funded entirely by debt"
        ],
        correctAnswer: "An entity where ownership is represented by shares issued to shareholders"
    },
    {
        week: 1,
        courseCode: "GRI403",
        question: "What is the primary financial aspect associated with Starbucks mentioned in the text?",
        options: [
            "Debt financing",
            "Cost minimization",
            "Revenue generation",
            "Inventory management",
            "Tax optimization"
        ],
        correctAnswer: "Revenue generation"
    },
    {
        week: 1,
        courseCode: "GRI403",
        question: "According to the text, how does Tesla's financial plan primarily contribute to its intellectual success?",
        options: [
            "Through high profit margins",
            "Through strategic cost management",
            "Through extensive patent litigation",
            "Through venture capital funding rounds",
            "Through diversification into unrelated industries"
        ],
        correctAnswer: "Through strategic cost management"
    },
    {
        week: 1,
        courseCode: "GRI403",
        question: "Which statement best describes the difference between quantitative and qualitative risk management based on the text?",
        options: [
            "Quantitative uses expert opinions, qualitative uses surveys",
            "Qualitative focuses only on financial risks, quantitative on operational risks",
            "Quantitative involves numerical data/past events, qualitative involves subjective evaluation",
            "Qualitative is performed annually, quantitative monthly",
            "There is no significant difference in the approach"
        ],
        correctAnswer: "Quantitative involves numerical data/past events, qualitative involves subjective evaluation"
    },
    {
        week: 1,
        courseCode: "GRI403",
        question: "Which term listed is NOT considered one of the basic pillars of management according to the provided text?",
        options: [
            "Planning",
            "Saving",
            "Organizing",
            "Leading",
            "Controlling"
        ],
        correctAnswer: "Saving"
    },
    {
        week: 1,
        courseCode: "GRI403",
        question: "What is the minimum capital required to establish a joint stock company in Turkey, as stated in the textbook information?",
        options: [
            "10,000 Turkish Lira",
            "25,000 Turkish Lira",
            "50,000 Turkish Lira",
            "100,000 Turkish Lira",
            "50,000 Euros"
        ],
        correctAnswer: "50,000 Turkish Lira"
    },
    {
        week: 1,
        courseCode: "GRI403",
        question: "Who is authorized to grant a business license within the means-quality border in Turkey?",
        options: [
            "The President's Office",
            "The Ministry of Finance",
            "The relevant Metropolitan authority/municipality",
            "The Turkish Standards Institution",
            "The local police department"
        ],
        correctAnswer: "The relevant Metropolitan authority/municipality"
    },

    // Questions from Sayfa 21-23 (Week 2)
    {
        week: 2,
        courseCode: "GRI403",
        question: "Which one below is NOT the common characteristic of a successful entrepreneur?",
        options: [
            "A successful entrepreneur is a person who runs the risk of acceptable ones.",
            "A successful entrepreneur is determined.",
            "A successful entrepreneur is creative.",
            "A successful entrepreneur is a person who applies the decisions of the proprietor (employer), finely.",
            "A successful entrepreneur is the one who uses his/her imagination (vision)."
        ],
        correctAnswer: "A successful entrepreneur is a person who applies the decisions of the proprietor (employer), finely."
    },
    {
        week: 2,
        courseCode: "GRI403",
        question: "Which one below is NOT a kind of entrepreneurship?",
        options: [
            "Intrapreneurship",
            "Women entrepreneurship",
            "Public entrepreneurship",
            "Private enterprise system",
            "Men entrepreneurship"
        ],
        correctAnswer: "Men entrepreneurship"
    },
    {
        week: 2,
        courseCode: "GRI403",
        question: "Which one below is NOT one of the basic concepts of entrepreneurship?",
        options: [
            "Creativity",
            "Ordinariness/Mediocrity",
            "Innovativeness",
            "Risk-taking",
            "Opportunity"
        ],
        correctAnswer: "Ordinariness/Mediocrity"
    },
    {
        week: 2,
        courseCode: "GRI403",
        question: "______ is defined as an occurance of an unwanted and probable damage or loss situation. Which one below complete the sentence?",
        options: [
            "Risk",
            "Threat",
            "Uncertainty",
            "Enterpreneur",
            "Enterprise/Attempt"
        ],
        correctAnswer: "Risk"
    },
    {
        week: 2,
        courseCode: "GRI403",
        question: "______ balances the needs and potentials coherently by correct detection of the society needs. Which one below complete the sentence?",
        options: [
            "Total quality management",
            "Lean management",
            "Entrepreneurship",
            "Management",
            "None"
        ],
        correctAnswer: "Entrepreneurship"
    },
    {
        week: 2,
        courseCode: "GRI403",
        question: "Which one below is one of the factors of production?",
        options: [
            "Manager",
            "Entrepreneur",
            "Business Administrator",
            "Initiative",
            "Business Firm"
        ],
        correctAnswer: "Entrepreneur"
    },
    {
        week: 2,
        courseCode: "GRI403",
        question: "Which one below is an operation of a new idea, an invention or an existing product putting on the market in a profitable way?",
        options: [
            "Making investment",
            "Opportunity Entrepreneurship",
            "Creative Entrepreneurship",
            "Initiative Entrepreneurship",
            "Establishing a new firm"
        ],
        correctAnswer: "Creative Entrepreneurship"
    },
    {
        week: 2,
        courseCode: "GRI403",
        question: "Which one does NOT agree with entrepreneurship?",
        options: [
            "Establishing a new firm",
            "Procuring capital",
            "Innovation and Creativity",
            "Making Oppurtunity",
            "Bound to the old"
        ],
        correctAnswer: "Bound to the old"
    },
    {
        week: 2,
        courseCode: "GRI403",
        question: "Which one is NOT the features of an entrepreneur?",
        options: [
            "Not taking risk",
            "Being conservative",
            "Cannot seeing problems",
            "Being insensible",
            "Seeing opportunities"
        ],
        correctAnswer: "Seeing opportunities" // Based on answer key 9.e
    },
    {
        week: 2,
        courseCode: "GRI403",
        question: "Which one is NOT an element of entrepreneurship?",
        options: [
            "Being disapproved",
            "Giving effort",
            "Creating value",
            "Earning proceeds",
            "Contribution for public."
        ],
        correctAnswer: "Being disapproved"
    },

    // Questions from Sayfa 64-68 (Week 2)
    {
        week: 2,
        courseCode: "GRI403",
        question: "Which one is NOT the factors for materializing creativity?",
        options: [
            "Motivation",
            "Attitude",
            "Behaviour",
            "Environment",
            "Oppressiveness"
        ],
        correctAnswer: "Motivation" // Based on answer key 1.a
    },
    {
        week: 2,
        courseCode: "GRI403",
        question: "Which one is NOT the behaviours and attitudes that occur in individual creativity?",
        options: [
            "Creativity",
            "Encouragement",
            "Mistake and risk",
            "Opinion / Thought",
            "Making concept"
        ],
        correctAnswer: "Mistake and risk" // Based on answer key 2.c
    },
    {
        week: 2,
        courseCode: "GRI403",
        question: "Which one is the behaviours and attitudes of organisational creativity?",
        options: [
            "Challenge",
            "Encouragement",
            "Mistake and risk",
            "Thought/opinion",
            "Making concept"
        ],
        correctAnswer: "Making concept" // Based on answer key 3.e
    },
    {
        week: 2,
        courseCode: "GRI403",
        question: "What is the name of the thoughts that can turn into a product and service, provide value to the customer, profit to the entrepreneur?",
        options: [
            "Creativity",
            "Work opinion",
            "Innovation",
            "Newness",
            "Entrepreneurship"
        ],
        correctAnswer: "Work opinion" // Based on answer key 4.b
    },
    {
        week: 2,
        courseCode: "GRI403",
        question: "While brainstorming, what is the rule that does NOT put a bound to imaginations and thoughts?",
        options: [
            "To criticise",
            "To make up freely",
            "To think as much as you can",
            "To be prepared",
            "To develop an idea"
        ],
        correctAnswer: "To make up freely" // Based on answer key 5.b
    },
    {
        week: 2,
        courseCode: "GRI403",
        question: "Which one continues from the place where brainstorming resumes and is more systematic technic?",
        options: [
            "Control list",
            "Horizontal Thinking",
            "Gordon Method",
            "Map of Thought",
            "Focus Group Discussion"
        ],
        correctAnswer: "Gordon Method" // Based on answer key 6.c
    },
    {
        week: 2,
        courseCode: "GRI403",
        question: "Which one is the term that relates concepts, but hard to understand and explain because it consists of complex symbols?",
        options: [
            "Attitude",
            "Behaviour",
            "Chaus",
            "Intuition",
            "Perspective"
        ],
        correctAnswer: "Behaviour" // Based on answer key 7.b
    },
    {
        week: 2,
        courseCode: "GRI403",
        question: "Which are NOT the features of hot-teams?",
        options: [
            "It consists of different characters",
            "They need to have targets",
            "They should be in solidarity.",
            "They should know the thoughts of each other.",
            "None of them."
        ],
        correctAnswer: "They should know the thoughts of each other." // Based on answer key 8.d
    },
    {
        week: 2,
        courseCode: "GRI403",
        question: "Which one below is NOT the process of creativity?",
        options: [
            "Preparation",
            "To put in Incubation",
            "To expose",
            "To accept",
            "To discuss a problem"
        ],
        correctAnswer: "To discuss a problem" // Based on answer key 9.e
    },
    {
        week: 2,
        courseCode: "GRI403",
        question: "Which one is the creativity technic, related to one product and that puts the important factors of this product into two dimensional chart to reveal the creativity ?",
        options: [
            "Control list",
            "Matris method",
            "Gordon method",
            "Map of thoughts",
            "Focus Group Discussion"
        ],
        correctAnswer: "Matris method" // Based on answer key 10.b
    },
    {
        week: 2,
        courseCode: "GRI403",
        question: "Which term describes implementation of new ideas produced by creativity?",
        options: [
            "Design",
            "Innovation",
            "Production",
            "Intiution",
            "System"
        ],
        correctAnswer: "Innovation" // Based on answer key 11.b
    },
    {
        week: 2,
        courseCode: "GRI403",
        question: "Which innovation type has the highest dependency to market?",
        options: [
            "Technology based innovation",
            "Information based innovation",
            "Organization based innovation",
            "System based innovation",
            "Individual based innovation"
        ],
        correctAnswer: "Information based innovation" // Based on answer key 12.b
    },
    {
        week: 2,
        courseCode: "GRI403",
        question: "Which of the following does NOT take place in innovation principles?",
        options: [
            "Big startups",
            "Being a product of work not intelligence",
            "Reward and admiration",
            "Comprehensive and open communication",
            "Perceiving, questioning and listening"
        ],
        correctAnswer: "Big startups" // Based on answer key 13.a
    },
    {
        week: 2,
        courseCode: "GRI403",
        question: "Which of the following term has a road map attribute for realizing establishments decisions?",
        options: [
            "List",
            "Directive",
            "Regulation",
            "Guide book",
            "Business plan"
        ],
        correctAnswer: "Business plan" // Based on answer key 14.e
    },
    {
        week: 2,
        courseCode: "GRI403",
        question: "Which of the following takes place in innovation types?",
        options: [
            "Structural innovations in consumers",
            "Structural innovations in market",
            "Organizational innovations",
            "Intuitive innovations",
            "Conceptual innovations"
        ],
        correctAnswer: "Organizational innovations" // Based on answer key 15.c
    },
    {
        week: 2,
        courseCode: "GRI403",
        question: "Which of the following does NOT take place in primary group innovation sources?",
        options: [
            "Unexpected evolvements",
            "Inconsistency",
            "Processing needs",
            "Perception changes",
            "Changes in sector and market structures"
        ],
        correctAnswer: "Perception changes" // Based on answer key 16.d
    },
    {
        week: 2,
        courseCode: "GRI403",
        question: "Which of the following point does NOT insist on productivity?",
        options: [
            "Improving product quality",
            "Gaining additional properties for product",
            "Increasing productivity on production",
            "Reaching high automation levels",
            "Increasing products market share"
        ],
        correctAnswer: "Increasing products market share" // Based on answer key 17.e
    },
    {
        week: 2,
        courseCode: "GRI403",
        question: "Which of the following does NOT take place in interactive innovation processes?",
        options: [
            "Creative idea",
            "Usage of technology",
            "Picking proper idea",
            "Turning idea into product and service",
            "Serving product"
        ],
        correctAnswer: "Creative idea" // Based on answer key 18.a
    },
    {
        week: 2,
        courseCode: "GRI403",
        question: "Which of the following does NOT take place in industry regions properties?",
        options: [
            "Unwillingness in venture capital usage",
            "Innovation develops region",
            "Being close to economical and cultural regions",
            "Being a harbor or commercial center",
            "Free academical and continuing education"
        ],
        correctAnswer: "Unwillingness in venture capital usage" // Based on answer key 19.a
    },
    {
        week: 2,
        courseCode: "GRI403",
        question: "Which of the following does NOT take place in basic elements of innovation culture?",
        options: [
            "Stored information",
            "Inter-people knowledge",
            "External environments meeting needs",
            "Activity emerging creativity",
            "Instability between needs and possibilities"
        ],
        correctAnswer: "Instability between needs and possibilities" // Based on answer key 20.e
    },

    // Questions from Sayfa 101-103 (Week 2)
    {
        week: 2,
        courseCode: "GRI403",
        question: "Which of the following innovation types ideas is limited to organizations idea producing?",
        options: [
            "Operational innovation",
            "Devastating innovation",
            "Close innovation",
            "Business model innovation",
            "Reverse innovation"
        ],
        correctAnswer: "Close innovation" // Based on answer key 1.c
    },
    {
        week: 2,
        courseCode: "GRI403",
        question: "In which following phase creativity is used in innovation?",
        options: [
            "Managing ideas",
            "Idea gathering",
            "Picking potentially succesful ideas",
            "Implementation",
            "Budgetting"
        ],
        correctAnswer: "Picking potentially succesful ideas" // Based on answer key 2.c
    },
    {
        week: 2,
        courseCode: "GRI403",
        question: "Which of the innovation type cooperates outer establishment companies or individuals and organizations to gather innovation sources and powers?",
        options: [
            "Radical innovation",
            "Operational innovation",
            "Open innovation",
            "Business model innovation",
            "Close innovation"
        ],
        correctAnswer: "Open innovation" // Based on answer key 3.c
    },
    {
        week: 2,
        courseCode: "GRI403",
        question: "Which of the following answer describes finding a new solution to a problem and having commercial success from it?",
        options: [
            "Production",
            "Innovation",
            "Creativity",
            "Invention",
            "Marketing"
        ],
        correctAnswer: "Innovation" // Based on answer key 4.b
    },
    {
        week: 2,
        courseCode: "GRI403",
        question: "In order to realise innovation which of the following property is NOT needed?",
        options: [
            "Originality",
            "Having definable value",
            "Can be commercialized",
            "Different",
            "Should be brought out by imitating"
        ],
        correctAnswer: "Can be commercialized" // Based on answer key 5.c
    },
    {
        week: 2,
        courseCode: "GRI403",
        question: "Which of the following definition is wrong about innovation term?",
        options: [
            "In order to provide permanent success innovation should be sustainable",
            "Innovation term meets consumers needs and solves their problems",
            "For innovation creativity is not needed",
            "Innovation starts with curiosity and intuition",
            "Innovation includes discovery, invention, research and development"
        ],
        correctAnswer: "For innovation creativity is not needed" // Based on answer key 6.c
    },
    {
        week: 2,
        courseCode: "GRI403",
        question: "Which of the following is NOT a difficulty of innovation?",
        options: [
            "Finding a good idea",
            "Making mistake",
            "Calculating cost",
            "Correct timing",
            "Catching customer"
        ],
        correctAnswer: "Making mistake" // Based on answer key 7.b
    },
    {
        week: 2,
        courseCode: "GRI403",
        question: "Which of the following is NOT wrongly known fact about innovation?",
        options: [
            "Innovation and research and development are same things",
            "Innovation only provides social and economical benefits",
            "Innovation requires long time",
            "Only goal of innovation is profit",
            "Only large establishments can do innovation"
        ],
        correctAnswer: "Innovation requires long time" // Based on answer key 8.c
    },
    {
        week: 2,
        courseCode: "GRI403",
        question: "Which of the following definition describes the difference between innovation and research and development?",
        options: [
            "Research and development can not be reclaimed as a part of innovation",
            "Every finding of research and development turns into innovation",
            "Research and development may not take place in every innovation",
            "Innovation includes everybody in establishment, however research and development only consists of its own department",
            "Research and development is a process that includes innovation"
        ],
        correctAnswer: "Innovation includes everybody in establishment, however research and development only consists of its own department" // Based on answer key 9.d
    },
    {
        week: 2,
        courseCode: "GRI403",
        question: "Which of the following correctly lists innovation processes?",
        options: [
            "Managing ideas-gathering ideas-picking ideas with potential success-implementing",
            "Gathering ideas-managing ideas-picking ideas with potential success-implementing",
            "Picking ideas with potential success-implementing-managing ideas-gathering ideas",
            "Gathering ideas-implementing-picking ideas with potential success-managing ideas",
            "Gathering ideas-picking ideas with potential success-managing ideas and implementing"
        ],
        correctAnswer: "Gathering ideas-managing ideas-picking ideas with potential success-implementing" // Based on answer key 10.b
    },

    // Questions from Sayfa 126-128 (Week 2)
    {
        week: 2,
        courseCode: "GRI403",
        question: "Which of the following term is called ‘business doing type with proven success’?",
        options: [
            "Business idea",
            "Customer value statement",
            "Business model",
            "Entrepreunership processes",
            "Innovative entrepreunership"
        ],
        correctAnswer: "Business model" // Based on answer key 1.c
    },
    {
        week: 2,
        courseCode: "GRI403",
        question: "Which of the following does NOT take place in business ideas key sources?",
        options: [
            "Products",
            "Facilities",
            "Equipments",
            "Administrative process",
            "Brands"
        ],
        correctAnswer: "Administrative process" // Based on answer key 2.d
    },
    {
        week: 2,
        courseCode: "GRI403",
        question: "Which of the process below turns business idea into business?",
        options: [
            "Entrepreunership processes",
            "Administrative processes",
            "Operational processes",
            "Financial processes",
            "Analysis processes"
        ],
        correctAnswer: "Entrepreunership processes" // Based on answer key 3.a
    },
    {
        week: 2,
        courseCode: "GRI403",
        question: "Which of the following technique is NOT needed by managers to search and find business ideas?",
        options: [
            "GZFT analysis",
            "Foresight and road maps",
            "Scenario analysis",
            "Process analysis",
            "Budget analysis"
        ],
        correctAnswer: "Budget analysis" // Based on answer key 4.e
    },
    {
        week: 2,
        courseCode: "GRI403",
        question: "Which of the following research is NOT used in feasibility works?",
        options: [
            "Market researches",
            "Technological researches",
            "Financial researches",
            "Juridical researches",
            "Commercial researches"
        ],
        correctAnswer: "Commercial researches" // Based on answer key 5.e
    },
    {
        week: 2,
        courseCode: "GRI403",
        question: "Which of the following property is NOT used to distinguish succesful business idea from ordinary business idea?",
        options: [
            "Provides benefit to customer",
            "Brings rival advantage",
            "Provides acquisition to share holders and establishment",
            "Presented by establishment",
            "Easy to produce"
        ],
        correctAnswer: "Presented by establishment" // Based on answer key 6.d
    },
    {
        week: 2,
        courseCode: "GRI403",
        question: "Which of the following describes \"ideas which are decided to be introduced according to entrepreuners skills, knowledge and ability levels and foresighted as succesful\"?",
        options: [
            "Business idea",
            "Plan",
            "Program",
            "Thought",
            "Move"
        ],
        correctAnswer: "Business idea" // Based on answer key 7.a
    },
    {
        week: 2,
        courseCode: "GRI403",
        question: "Which of the following is NOT needed while searching to find a business plan?",
        options: [
            "Using personal skills",
            "Being broad-minded",
            "Synthesizing the ideas by brain storming",
            "Doing research",
            "Not to share ideas"
        ],
        correctAnswer: "Not to share ideas" // Based on answer key 8.e
    },
    {
        week: 2,
        courseCode: "GRI403",
        question: "Which of the following method is used for defining a projects economical potential and practicability by researching technical, financial and economical datas?",
        options: [
            "Business plan",
            "Project",
            "Business idea",
            "Feasibility research",
            "Implementation"
        ],
        correctAnswer: "Feasibility research" // Based on answer key 9.d
    },
    {
        week: 2,
        courseCode: "GRI403",
        question: "Which of the following shows the most correct process for developing a new business or project?",
        options: [
            "Starting business- pre-feasibility- feasibility- business plan",
            "Business plan- feasibility- pre-feasibility",
            "Business or project idea- pre-feasibility- feasibility- business plan",
            "Business or project idea- business plan- pre-feasibility- feasibility",
            "Business or project idea- starting business"
        ],
        correctAnswer: "Business or project idea- pre-feasibility- feasibility- business plan" // Based on answer key 10.c
    },

    // Questions from Sayfa 143-148 (Week 2)
    {
        week: 2,
        courseCode: "GRI403",
        question: "Which one below taken into consideration for defining finance need of a business firm?",
        options: [
            "Total resources (equity capital)",
            "Total of short and long term debts",
            "Term structure of the debts",
            "Total current assets",
            "Total fixed and current assets"
        ],
        correctAnswer: "Total fixed and current assets" // Based on answer key 1.e
    },
    {
        week: 2,
        courseCode: "GRI403",
        question: "Which business progress phase is the hardest for entrepreneur?",
        options: [
            "Beginning phase",
            "Growing phase",
            "Maturity phase",
            "Decline phase",
            "Fall phase"
        ],
        correctAnswer: "Beginning phase" // Based on answer key 2.a
    },
    {
        week: 2,
        courseCode: "GRI403",
        question: "Which one below is NOT one of the finance resources for the benefit of entrepreneur in the beginning phase?",
        options: [
            "Personal resources",
            "Merchant banks",
            "Investment banks",
            "Supplier's credits",
            "Friends and relatives"
        ],
        correctAnswer: "Investment banks" // Based on answer key 3.c
    },
    {
        week: 2,
        courseCode: "GRI403",
        question: "In terms of the business firm, in which business progress phase, innovations increase, rivalry rises and profits start to increase?",
        options: [
            "Beginning",
            "Growing",
            "Maturity",
            "Decline",
            "Fall"
        ],
        correctAnswer: "Growing" // Based on answer key 4.b
    },
    {
        week: 2,
        courseCode: "GRI403",
        question: "Which factor below does NOT increase the importance of financial planning period?",
        options: [
            "Manifestation of the target and aim",
            "Defining the risks taken",
            "Defining cash inflow and outflow",
            "Estimating funds needed",
            "Evaluating the previous period results"
        ],
        correctAnswer: "Evaluating the previous period results" // Based on answer key 5.e
    },
    {
        week: 2,
        courseCode: "GRI403",
        question: "Which strategy below is NOT aimed at decreasing the financial risks to minimum level?",
        options: [
            "Shorten the due date of the debts",
            "Becoming indebt from the fixed interest rate",
            "Protected from the risks of Exchange rate",
            "Creating new credit opprtunities",
            "Lowering loan/ equity capital mainstay below 1."
        ],
        correctAnswer: "Shorten the due date of the debts" // Based on answer key 6.a
    },
    {
        week: 2,
        courseCode: "GRI403",
        question: "Which one below is the table that a business firm will attain operating and non operating profit in the future term and endure the budget of the margin for gaining profit ?",
        options: [
            "Proforma balance sheet",
            "Proforma income table",
            "Cash budget",
            "Equity Exchange table",
            "Fund flow table"
        ],
        correctAnswer: "Proforma income table" // Based on answer key 7.b
    },
    {
        week: 2,
        courseCode: "GRI403",
        question: "Which factor below does NOT increase the need of working capital?",
        options: [
            "Capacity",
            "Work load",
            "Liquidity risk",
            "Credit Worth",
            "Revaluation"
        ],
        correctAnswer: "Revaluation" // Based on answer key 8.e
    },
    {
        week: 2,
        courseCode: "GRI403",
        question: "Which one below is NOT brunches of work fund?",
        options: [
            "Cash",
            "Debt owed",
            "Stock",
            "Cash equivalents",
            "Fixed assets"
        ],
        correctAnswer: "Fixed assets" // Based on answer key 9.e
    },
    {
        week: 2,
        courseCode: "GRI403",
        question: "Which one is not a disadvantage of funds provided for family and friends?",
        options: [
            "Interrupting management",
            "Feeling of ownage",
            "Interrupting workers",
            "Guiding operations",
            "Ending operations"
        ],
        correctAnswer: "Ending operations" // Based on answer key 10.e
    },
    {
        week: 2,
        courseCode: "GRI403",
        question: "Which one below is wrong about the working plan?",
        options: [
            "Working plan is a document including the details of a firm thought to be set up or existing",
            "Working plan does not show the future of the firm, but the existing position of it.",
            "In the working plan all the elements of the firm should be defined.",
            "Working plan is the vision reflected written document of the firm thought to be set up.",
            "Working plan is the helping vehicle for an entrepreneur to move on to investment phase."
        ],
        correctAnswer: "Working plan does not show the future of the firm, but the existing position of it." // Based on answer key 11.b
    },
    {
        week: 2,
        courseCode: "GRI403",
        question: "Which of the following below is NOT the benefits of a working plan for an entrepreneur?",
        options: [
            "Enduring an entrepreneur to see the firm from critical and objective point of view.",
            "Giving informations to the funders and financiers about the market potential and planning the protection of the market share.",
            "Helping the assumption formation of the entrepreneur for the success of the firm.",
            "For the evaluation of the aims, setting criterias for the comparision of real results and estimations.",
            "An incomplete working plan carrying out a duty of a working guide for the entrepreneur."
        ],
        correctAnswer: "Giving informations to the funders and financiers about the market potential and planning the protection of the market share." // Based on answer key 12.b
    },
    {
        week: 2,
        courseCode: "GRI403",
        question: "Which one below is a guide prepared during the process of setting up a firm and project being implemented?",
        options: [
            "Charts of accounts",
            "Feasibility analysis",
            "Working plan",
            "Marketing plan",
            "Financing plan"
        ],
        correctAnswer: "Working plan" // Based on answer key 13.c
    },
    {
        week: 2,
        courseCode: "GRI403",
        question: "Which one below is NOT a benefit of the working plan preperation?",
        options: [
            "Working plan provides investor/ entrepreneur the written project of his/her mind.",
            "It saves time and works for the purpose by directing investor/ entrepreneur's attention.",
            "It provides conjecture by being based on the future datas.",
            "It provides the needed researches and planned work done before setting up the firm.",
            "It is useful for the research of which work to be done."
        ],
        correctAnswer: "It is useful for the research of which work to be done." // Based on answer key 14.e
    },
    {
        week: 2,
        courseCode: "GRI403",
        question: "Which one below is NOT a part of working plan?",
        options: [
            "Executive summary",
            "Information about the project/firm to be set up",
            "Aim and purpose of the project/firm",
            "Marketing Plan",
            "Profitability Plan"
        ],
        correctAnswer: "Marketing Plan" // Based on answer key 15.d
    },
    {
        week: 2,
        courseCode: "GRI403",
        question: "Who should prepare the working plan of the firm to be set up?",
        options: [
            "Venture capitalist",
            "Angel investor",
            "Entrepreneurs",
            "Financial advisor",
            "Legal Advisor"
        ],
        correctAnswer: "Entrepreneurs" // Based on answer key 16.c
    },
    {
        week: 2,
        courseCode: "GRI403",
        question: "Which one below is NOT the usage purpose of the working plan?",
        options: [
            "Communication",
            "Planning",
            "Management",
            "Future prediction",
            "Past analysis"
        ],
        correctAnswer: "Past analysis" // Based on answer key 17.e
    },
    {
        week: 2,
        courseCode: "GRI403",
        question: "Which one below is a mistake done while the preprerations of the working plan?",
        options: [
            "The usage of another working plan's assumptions",
            "Shortening the plan",
            "Reflecting all the risks in the plan",
            "Harmonising the future with the plan",
            "Not placing exeggerations in the plan"
        ],
        correctAnswer: "The usage of another working plan's assumptions" // Based on answer key 18.a
    },
    {
        week: 2,
        courseCode: "GRI403",
        question: "Which one below is NOT the mistake done while the preperations of the working plan?",
        options: [
            "Putting unrealistic aims in the plan",
            "Not predicting potential obstacles",
            "Lack of determination or undertaking",
            "Segmentation not being done",
            "Plan being up to date"
        ],
        correctAnswer: "Plan being up to date" // Based on answer key 19.e
    },
    {
        week: 2,
        courseCode: "GRI403",
        question: "Which part below is needed to be demanded for reading the whole plan arousing interest for it?",
        options: [
            "Marketing plan",
            "Input/Executive Summary",
            "Management Plan",
            "Production plan",
            "Enclosure"
        ],
        correctAnswer: "Input/Executive Summary" // Based on answer key 20.b
    },

    // Questions from Sayfa 173-175 (Week 2)
    {
        week: 2,
        courseCode: "GRI403",
        question: "Which of the following parameter does not take place in PEST analysis political factors?",
        options: [
            "Demographical factors",
            "Country regime",
            "Bureaucratic structure",
            "Political stability",
            "Civil war"
        ],
        correctAnswer: "Bureaucratic structure" // Based on answer key 1.c
    },
    {
        week: 2,
        courseCode: "GRI403",
        question: "Which of the following factor does not specify the competition between entrepreuners who are affecting sectors profitableness in sector analysis extent?",
        options: [
            "Differentiation of product or service",
            "Too much entrepreuners in sector",
            "Suppliers with insufficient knowledge about products",
            "Slow growth of industry",
            "Expensiveness of stable costs and storage"
        ],
        correctAnswer: "Suppliers with insufficient knowledge about products" // Based on answer key 2.c
    },
    {
        week: 2,
        courseCode: "GRI403",
        question: "When we consider the factors affecting sectors profitableness, which of the following factor describes usage of plastic bottles instead of glass bottles in water packaging?",
        options: [
            "Substitude products or services threat",
            "Purchasers negotiation power",
            "Suppliers negotiation power",
            "Competition between current competitors",
            "Potential competitors threat"
        ],
        correctAnswer: "Substitude products or services threat" // Based on answer key 3.a
    },
    {
        week: 2,
        courseCode: "GRI403",
        question: "Which of the following analyse shows establishment and environment relation which help us to understand environmental factors such as establishments inner strength and weaknesses and exterior opportunuties and threats?",
        options: [
            "PEST analysis",
            "SWOT analysis",
            "Sector analysis",
            "Demand estimation",
            "Customer differentiation"
        ],
        correctAnswer: "SWOT analysis" // Based on answer key 4.b
    },
    {
        week: 2,
        courseCode: "GRI403",
        question: "When we consider marketing terms while preparing business plan, which of the following shows the ratio of entered markets consumers number and ready markets consumers number?",
        options: [
            "Consumer ratio",
            "Establishment ratio",
            "Input percentage",
            "Market percentage",
            "Profit ratio"
        ],
        correctAnswer: "Market percentage" // Based on answer key 5.d
    },
    {
        week: 2,
        courseCode: "GRI403",
        question: "In order to have a complete market research information, which of the following factor is not used?",
        options: [
            "Certainty",
            "Economy",
            "Practicableness",
            "Correct timing",
            "Understandability"
        ],
        correctAnswer: "Correct timing" // Based on answer key 6.d
    },
    {
        week: 2,
        courseCode: "GRI403",
        question: "Which of the following criteria is not a market classification strategy of an establishment?",
        options: [
            "Geography",
            "Demography",
            "Psychography",
            "Behavioral",
            "Biologic"
        ],
        correctAnswer: "Biologic" // Based on answer key 7.e
    },
    {
        week: 2,
        courseCode: "GRI403",
        question: "Which of the following pricing strategy is based on researching market demand complete and correct?",
        options: [
            "Cost based pricing",
            "Demand based pricing",
            "Competition based pricing",
            "Productivity based pricing",
            "Positioning based pricing"
        ],
        correctAnswer: "Demand based pricing" // Based on answer key 8.b
    },
    {
        week: 2,
        courseCode: "GRI403",
        question: "Which of the following pricing strategy is based on legal regulations such as Value Added Tax (KDV) and Special Consumption Tax (ÖTV)?",
        options: [
            "Cost based pricing",
            "Demand based pricing",
            "Competition based pricing",
            "Productivity based pricing",
            "Environmental factors based pricing"
        ],
        correctAnswer: "Environmental factors based pricing" // Based on answer key 9.e
    },
    {
        week: 2,
        courseCode: "GRI403",
        question: "When we consider PEST analysis used for evaluating environmental factors, which of the following factor describes technology establishments such as Google can not operate in China?",
        options: [
            "Political factors",
            "Economical factors",
            "Social factors",
            "Technological factors",
            "Cultural factors"
        ],
        correctAnswer: "Political factors" // Based on answer key 10.a
    },
    // Chapter 6 Questions (Week 3)
    {
        week: 3,
        courseCode: "GRI403",
        question: "Which of the following parameter does not take place in PEST analysis political factors?",
        options: [
            "Demographical factors",
            "Country regime",
            "Bureaucratic structure",
            "Political stability",
            "Civil war"
        ],
        correctAnswer: "Bureaucratic structure"
    },
    {
        week: 3,
        courseCode: "GRI403",
        question: "Which of the following factor does not specify the competition between entrepreuners who are affecting sectors profitableness in sector analysis extent?",
        options: [
            "Differentiation of product or service",
            "Too much entrepreuners in sector",
            "Suppliers with insufficient knowledge about products",
            "Slow growth of industry",
            "Expensiveness of stable costs and storage"
        ],
        correctAnswer: "Suppliers with insufficient knowledge about products"
    },
    {
        week: 3,
        courseCode: "GRI403",
        question: "When we consider the factors affecting sectors profitableness, which of the following factor describes usage of plastic bottles instead of glass bottles in water packaging?",
        options: [
            "Substitude products or services threat",
            "Purchasers negotiation power",
            "Suppliers negotiation power",
            "Competition between current competitors",
            "Potential competitors threat"
        ],
        correctAnswer: "Substitude products or services threat"
    },
    {
        week: 3,
        courseCode: "GRI403",
        question: "Which of the following analyse shows establishment and environment relation which help us to understand environmental factors such as establishments inner strength and weaknesses and exterior opportunuties and threats?",
        options: [
            "PEST analysis",
            "SWOT analysis",
            "Sector analysis",
            "Demand estimation",
            "Customer differentiation"
        ],
        correctAnswer: "SWOT analysis"
    },
    {
        week: 3,
        courseCode: "GRI403",
        question: "When we consider marketing terms while preparing business plan, which of the following shows the ratio of entered markets consumers number and ready markets consumers number?",
        options: [
            "Consumer ratio",
            "Establishment ratio",
            "Input percentage",
            "Market percentage",
            "Profit ratio"
        ],
        correctAnswer: "Market percentage" // Inferred from answer key 5.d
    },
    {
        week: 3,
        courseCode: "GRI403",
        question: "In order to have a complete market research information, which of the following factor is not used?",
        options: [
            "Certainty",
            "Economy",
            "Practicableness",
            "Correct timing",
            "Understandability"
        ],
        correctAnswer: "Correct timing"
    },
    {
        week: 3,
        courseCode: "GRI403",
        question: "Which of the following criteria is not a market classification strategy of an establishment?",
        options: [
            "Geography",
            "Demography",
            "Psychography",
            "Behavioral",
            "Biologic"
        ],
        correctAnswer: "Biologic"
    },
    {
        week: 3,
        courseCode: "GRI403",
        question: "Which of the following pricing strategy is based on researching market demand complete and correct?",
        options: [
            "Cost based pricing",
            "Demand based pricing",
            "Competition based pricing",
            "Productivity based pricing",
            "Positioning based pricing"
        ],
        correctAnswer: "Demand based pricing"
    },
    {
        week: 3,
        courseCode: "GRI403",
        question: "Which of the following pricing strategy is based on legal regulations such as Value Added Tax (KDV) and Special Consumption Tax (ÖTV)?",
        options: [
            "Cost based pricing",
            "Demand based pricing",
            "Competition based pricing",
            "Productivity based pricing",
            "Environmental factors based pricing"
        ],
        correctAnswer: "Environmental factors based pricing" // Inferred from answer key 9.e
    },
    {
        week: 3,
        courseCode: "GRI403",
        question: "When we consider PEST analysis used for evaluating environmental factors, which of the following factor describes technology establishments such as Google can not operate in China?",
        options: [
            "Political factors",
            "Economical factors",
            "Social factors",
            "Technological factors",
            "Cultural factors"
        ],
        correctAnswer: "Political factors"
    },

    // Chapter 7 Questions (Week 3)
    {
        week: 3,
        courseCode: "GRI403",
        question: "Which of the following document includes an establishments marketing goals and activity plans step by step in a written form?",
        options: [
            "Monthly plan",
            "Management plan",
            "Marketing plan",
            "Financial plan",
            "Opportunity analysis plan"
        ],
        correctAnswer: "Marketing plan"
    },
    {
        week: 3,
        courseCode: "GRI403",
        question: "Which of the following is not one of the property of marketing plan?",
        options: [
            "Competitors strong and weak sides analysis",
            "Flexibility",
            "Includes performance measurements",
            "Based on real informations",
            "Short and simple"
        ],
        correctAnswer: "Competitors strong and weak sides analysis"
    },
    {
        week: 3,
        courseCode: "GRI403",
        question: "Which of the following is not a step of marketing plan?",
        options: [
            "Situation analysis",
            "Implementation and control",
            "Defining opportunuties and threats",
            "Preparing plan simple and understandable",
            "Defining marketing strategies and tactics"
        ],
        correctAnswer: "Preparing plan simple and understandable"
    },
    {
        week: 3,
        courseCode: "GRI403",
        question: "Which of the following is not a parameter forming macro environment?",
        options: [
            "Demographical environment",
            "Legal environment",
            "Social and cultural environment",
            "Political and juridical environment",
            "Strategical environment"
        ],
        correctAnswer: "Strategical environment"
    },
    {
        week: 3,
        courseCode: "GRI403",
        question: "Which of the following method classifies market according to country, region, city and province?",
        options: [
            "Demographical classification",
            "Behavioral classification",
            "Tactical classification",
            "Geographical classification",
            "Strategical classification"
        ],
        correctAnswer: "Geographical classification"
    },
    {
        week: 3,
        courseCode: "GRI403",
        question: "Which of the following describes establishments future planned activities and results to reach?",
        options: [
            "Goal",
            "Strategy",
            "Tactic",
            "Market",
            "Opportunity"
        ],
        correctAnswer: "Goal"
    },
    {
        week: 3,
        courseCode: "GRI403",
        question: "Which of the following strategy describes an establishment trying to reach lowest production and distribution costs?",
        options: [
            "Niche market strategy",
            "Cost leadership strategy",
            "Differentiation strategy",
            "Focussing strategy",
            "Followers strategy"
        ],
        correctAnswer: "Cost leadership strategy"
    },
    {
        week: 3,
        courseCode: "GRI403",
        question: "Which of the following is a product or services value in market?",
        options: [
            "Product",
            "Brand",
            "Price",
            "Distribution",
            "Promotion"
        ],
        correctAnswer: "Price"
    },
    {
        week: 3,
        courseCode: "GRI403",
        question: "Which of the following describes serving and selling product without using mediators by producer?",
        options: [
            "Intense distribution",
            "Selector distribution",
            "Special distribution",
            "Indirect distribution",
            "Direct distribution"
        ],
        correctAnswer: "Direct distribution"
    },
    {
        week: 3,
        courseCode: "GRI403",
        question: "Which of the following works are used for increasing sales directly in a short term?",
        options: [
            "Advertisement",
            "Sales promotion",
            "Public relations",
            "Personal sale",
            "Distribution"
        ],
        correctAnswer: "Sales promotion"
    },

    // Chapter 8 Questions (Week 3)
    {
        week: 3,
        courseCode: "GRI403",
        question: "Which of the following is not a production system input?",
        options: [
            "Raw material",
            "Information",
            "Customer",
            "Capital",
            "Entrepreunership"
        ],
        correctAnswer: "Customer"
    },
    {
        week: 3,
        courseCode: "GRI403",
        question: "In which of the following only unique product is produced according to customers requests?",
        options: [
            "Project type production",
            "Continuous production",
            "Assembly type production",
            "Flow type production",
            "Mass production"
        ],
        correctAnswer: "Project type production"
    },
    {
        week: 3,
        courseCode: "GRI403",
        question: "Which of the following does not take place in production plans extent?",
        options: [
            "Defining production rate",
            "Defining production priorities",
            "Defining production amount to be produced",
            "Defining product to be produced",
            "Defining product to be produced price"
        ],
        correctAnswer: "Defining product to be produced price"
    },
    {
        week: 3,
        courseCode: "GRI403",
        question: "Which of the following is defined by process flow schema?",
        options: [
            "Storage where inputs go",
            "Inputs process orders",
            "List of product parts",
            "Placing of machines",
            "Machines capacity list"
        ],
        correctAnswer: "Inputs process orders"
    },
    {
        week: 3,
        courseCode: "GRI403",
        question: "Which of the following is not a production planning activity?",
        options: [
            "Defining production plans term of involvement",
            "Defining stock level",
            "Making demand estimations",
            "Defining certain orders",
            "Choosing supplier"
        ],
        correctAnswer: "Choosing supplier"
    },
    {
        week: 3,
        courseCode: "GRI403",
        question: "Which of the following shows when and in which amount whole materials to be sold or produced will be supplied?",
        options: [
            "Capacity planning",
            "Material need planning",
            "Capacity need planning",
            "Main production tabulation",
            "Main production planning"
        ],
        correctAnswer: "Main production tabulation"
    },
    {
        week: 3,
        courseCode: "GRI403",
        question: "Which of the following inputs are outputs of main production tabulation?",
        options: [
            "Capacity need planning",
            "Stock control",
            "Material need planning",
            "Capacity planning",
            "Main production planning"
        ],
        correctAnswer: "Material need planning"
    },
    {
        week: 3,
        courseCode: "GRI403",
        question: "Which of the following is not an aim of material need planning?",
        options: [
            "Keeping stock level low",
            "Appointing employees on correct works",
            "Contributing work flows system",
            "Helping deliveries",
            "Minimizing production setbacks"
        ],
        correctAnswer: "Appointing employees on correct works"
    },
    {
        week: 3,
        courseCode: "GRI403",
        question: "Which of the following defines machine-equipment and required work power amount to implement material plan in a short planning term?",
        options: [
            "Capacity need planning",
            "Source need planning",
            "Rough cutting source planning",
            "Stock control",
            "Material need planning"
        ],
        correctAnswer: "Capacity need planning"
    },
    {
        week: 3,
        courseCode: "GRI403",
        question: "Which of the following decision is most difficult to bring back?",
        options: [
            "Supplier selection",
            "Machine selection",
            "Employee selection",
            "Establishment place selection",
            "Raw material selection"
        ],
        correctAnswer: "Establishment place selection"
    },

    // Chapter 9 Questions (Week 3)
    {
        week: 3,
        courseCode: "GRI403",
        question: "Which of the following is incorrect related to management plan?",
        options: [
            "Management plan is concerned with how to create organizational structure",
            "Management plan is concerned with how to create product and services",
            "It should define establishments juridical structure",
            "Authority and responsibility relations should be defined on plan",
            "A good management plan proves that entrepreuner understands factors affecting organizational effectiveness"
        ],
        correctAnswer: "Management plan is concerned with how to create product and services"
    },
    {
        week: 3,
        courseCode: "GRI403",
        question: "Which of the following information is not needed for preparing management plan?",
        options: [
            "Establishments site of establishment",
            "Establishments juridical structure",
            "Establishments organizational structure",
            "Abilities requiered for positions in establishment",
            "Standarts which calculate and evaluate working performance"
        ],
        correctAnswer: "Establishments site of establishment"
    },
    {
        week: 3,
        courseCode: "GRI403",
        question: "Which of the following partnersip is responsible with whole the products without any limitation as collective partners?",
        options: [
            "Commandite",
            "Commanditer",
            "Merchant",
            "Corporative",
            "Limited partnership"
        ],
        correctAnswer: "Commandite" // Assuming this refers to the collective partnership type itself, not a specific partner role.
    },
    {
        week: 3,
        courseCode: "GRI403",
        question: "Which of the following is share holder partnership?",
        options: [
            "Collective partnerships",
            "Commandite partnerships",
            "Limited partnership",
            "Ordinary partnership",
            "Individual partnership"
        ],
        correctAnswer: "Limited partnership" // Often involves shareholders, especially public limited companies.
    },
    {
        week: 3,
        courseCode: "GRI403",
        question: "Which of the following is not a basic step of preparing management plan?",
        options: [
            "Management plan summary",
            "Situational review",
            "Establishments juridical structure",
            "Evaluating outer environment",
            "Management philosophy"
        ],
        correctAnswer: "Management philosophy"
    },
    {
        week: 3,
        courseCode: "GRI403",
        question: "Which of the following is not considered as a basic element of organizational structure?",
        options: [
            "Work division",
            "Matrix structure",
            "Audit field",
            "Classification",
            "Authority"
        ],
        correctAnswer: "Matrix structure" // Matrix is a *type* of structure, not a basic element like work division or authority.
    },
    {
        week: 3,
        courseCode: "GRI403",
        question: "Which of the following classification gathers works and duties according to their qualification?",
        options: [
            "According to product base",
            "According to geographical base",
            "According to functions",
            "According to time base",
            "According to customer base"
        ],
        correctAnswer: "According to functions"
    },
    {
        week: 3,
        courseCode: "GRI403",
        question: "Which of the following defines employee amount a manager can direct?",
        options: [
            "Audit field", // This seems incorrect based on context, likely Span of Control intended
            "Flexibility",
            "Authority-responsibility balance",
            "Classification",
            "Expertation" // Span of Control is the correct term, Audit field is the closest highlighted option.
        ],
        correctAnswer: "Audit field" // Selecting highlighted answer despite potential inaccuracy.
    },
    {
        week: 3,
        courseCode: "GRI403",
        question: "Which of the following question should be answered when an entrepreuner decides organizational structure?",
        options: [
            "How working performance will be evaluated?",
            "Which equipments and materials employees can use?",
            "How to employ qualified work power?",
            "How employees will be protected against environmental changes?",
            "How many sublevel employees can be directed by each manager?" // Relates to Span of Control
        ],
        correctAnswer: "How many sublevel employees can be directed by each manager?"
    },
    {
        week: 3,
        courseCode: "GRI403",
        question: "Which of the following is not related to defining main positions which should be filled in future in management plan?",
        options: [
            "Every positions duties, responsibilites and authorities level",
            "Statements about perquisite and promotion opportunuties",
            "Every positions authority and responsibilites harmony with organizational structure",
            "Every position according to business title",
            "Providing qualified employees to establishment method"
        ],
        correctAnswer: "Statements about perquisite and promotion opportunuties"
    },

    // Chapter 10 Questions (Week 3)
    {
        week: 3,
        courseCode: "GRI403",
        question: "Which of the following is not a question banks or lending companies are looking for in business plan?",
        options: [
            "Will you pay your loan back?",
            "Why do you need this money for?",
            "How much loan you want?",
            "Are you strong enough to pay the interest?",
            "If needed, what types of assurances you can provide?"
        ],
        correctAnswer: "Will you pay your loan back?" // This is implied, but lenders ask the others more directly. Highlighted answer selected.
    },
    {
        week: 3,
        courseCode: "GRI403",
        question: "While making sales budget estimations in the beginning of financial estimation process, for the first year which periods are used for sales estimation?",
        options: [
            "Weekly",
            "Three months",
            "Six months",
            "Yearly",
            "Monthly"
        ],
        correctAnswer: "Monthly"
    },
    {
        week: 3,
        courseCode: "GRI403",
        question: "While budgeting estimated expense and costs, which of the following expenses are reviewed?",
        options: [
            "Beginning and activity expenses",
            "Beginning and finishing expenses",
            "Short and long term expenses",
            "Activity and raw material expenses",
            "Stable and changeable expenses"
        ],
        correctAnswer: "Beginning and activity expenses"
    },
    {
        week: 3,
        courseCode: "GRI403",
        question: "Which of the following is not a type of activity expenses?",
        options: [
            "Salary and wages",
            "Day offs and licenses",
            "Rents",
            "Mortgage debts",
            "Financial rents"
        ],
        correctAnswer: "Day offs and licenses"
    },
    {
        week: 3,
        courseCode: "GRI403",
        question: "Which of the following is not a typical main type of income statement?",
        options: [
            "Incomes",
            "Expenses",
            "Debts",
            "Income tax to be paid",
            "Pure profit"
        ],
        correctAnswer: "Debts" // Debts are typically on the balance sheet, not income statement.
    },
    {
        week: 3,
        courseCode: "GRI403",
        question: "Which of the following is not an inner or outer establishment factor affecting cash flows directly?",
        options: [
            "Delays in raw material supply",
            "Deficient raw material",
            "Deficient product",
            "Suppliers price decrease",
            "Suppliers date shortening"
        ],
        correctAnswer: "Suppliers price decrease" // Price decrease *helps* cash flow, others hurt it.
    },
    {
        week: 3,
        courseCode: "GRI403",
        question: "Which of the following par production amount in a product which have total stable expense of 5000.- TL, unit changeable expense 25.- TL and sales price 50.- TL?",
        options: [
            "500",
            "450",
            "400",
            "300",
            "200" // Break-even = Fixed Costs / (Sales Price per Unit - Variable Cost per Unit) = 5000 / (50 - 25) = 5000 / 25 = 200
        ],
        correctAnswer: "200"
    },

    // Chapter 11 Questions (Week 3)
    {
        week: 3,
        courseCode: "GRI403",
        question: "Which of the following is correct about risk definition?",
        options: [
            "It involves actualized event",
            "It is sparing source for actualized loss",
            "Happens everytime",
            "It is about past",
            "It is based on possibility of actualization"
        ],
        correctAnswer: "It is based on possibility of actualization"
    },
    {
        week: 3,
        courseCode: "GRI403",
        question: "Which of the following risk or risks we take if we are going to take the payment of our sold house in future in foreing currency?",
        options: [
            "Credit risk",
            "Operation risk",
            "Currency and credit risk",
            "Reputation risk",
            "Credit and operation risk"
        ],
        correctAnswer: "Currency and credit risk" // Primarily currency risk, but credit risk (counterparty default) also exists.
    },
    {
        week: 3,
        courseCode: "GRI403",
        question: "Which of the following alternative is more preferable if we presume the risk type is same?",
        options: [
            "Low encountering rate, low loss amount",
            "High encountering rate, low loss amount",
            "Low encountering rate, high loss amount",
            "High encountering rate, high loss amount",
            "Encountering rate unknown, high loss amount"
        ],
        correctAnswer: "Low encountering rate, low loss amount"
    },
    {
        week: 3,
        courseCode: "GRI403",
        question: "Which of the following loss risk is from unsuccesful business processes, people and systems or outer events?",
        options: [
            "Operational",
            "Credit",
            "Market",
            "Interest rate",
            "Liquidity"
        ],
        correctAnswer: "Operational"
    },
    {
        week: 3,
        courseCode: "GRI403",
        question: "Which of the following risk type is realized if we have large amount of receivable debt however we do not have enough money for our daily needs?",
        options: [
            "Operational",
            "Credit",
            "Market",
            "Interest rate",
            "Liquidity"
        ],
        correctAnswer: "Liquidity"
    },
    {
        week: 3,
        courseCode: "GRI403",
        question: "Which of the following is an element affecting success in risk management?",
        options: [
            "Size of establishment",
            "University graduated employees",
            "Establishment being in a centeral area",
            "Being supported by top management",
            "Establishment having high endorsement"
        ],
        correctAnswer: "Being supported by top management"
    },
    {
        week: 3,
        courseCode: "GRI403",
        question: "Which of the following strategy can not be used in risk management?",
        options: [
            "Ignoring risk",
            "Avoiding risk",
            "Transferring risk",
            "Decreasing risks effects",
            "Decreasing risks possibility"
        ],
        correctAnswer: "Ignoring risk" // Ignoring is generally not a valid *strategy*.
    },
    {
        week: 3,
        courseCode: "GRI403",
        question: "Which of the following risk type can be numerically countable?",
        options: [
            "Credit risk",
            "Reputation risk",
            "Juridical risk",
            "Country risk",
            "Active-passive risk"
        ],
        correctAnswer: "Credit risk" // Credit risk often involves quantifiable models (PD, LGD, EAD).
    },
    {
        week: 3,
        courseCode: "GRI403",
        question: "Which of the following risk or risks we take if we are going to take our sold product or services payment in future in foreign currency?",
        options: [
            "Credit risk",
            "Operational risk",
            "Currency or credit risk",
            "Reputation risk",
            "Credit and operational risk"
        ],
        correctAnswer: "Currency or credit risk" // Similar to Q2, involves both currency fluctuation and payment default risk.
    },
    {
        week: 3,
        courseCode: "GRI403",
        question: "Which of the following two analysis type creates simulation analysis?",
        options: [
            "SWOT- possibility",
            "Possibility- qualitative",
            "Qualitative- quantitative",
            "Sensibility- possibility", // Sensibility likely means Sensitivity Analysis
            "SWOT- qualitative"
        ],
        correctAnswer: "Sensibility- possibility" // Sensitivity and Probability/Possibility analyses are often used in simulations.
    },
    {
        "week": 5,
        "courseCode": "GRI403",
        "question": "______ is accepted as a strong expression of transforming human intelligence, ability, creativity and imagination into a product or service.",
        "options": [
            "all of them",
            "projection",
            "None of them is correct",
            "research",
            "creativity"
        ],
        "correctAnswer": "projection"
    },
    {
        "week": 5,
        "courseCode": "GRI403",
        "question": "The features of Entrepreneurs are:",
        "options": [
            "Leadership",
            "None of them is correct",
            "determination",
            "devotion and creativity",
            "All of them are correct"
        ],
        "correctAnswer": "All of them are correct"
    },
    {
        "week": 5,
        "courseCode": "GRI403",
        "question": "As if SUZUKI automobiles company sales are increasing continuously will consider in ______ stage of product life cycle.",
        "options": [
            "Decline Stage",
            "None of them are correct",
            "Maturity Stage",
            "Beginning Stage",
            "Growing Stage"
        ],
        "correctAnswer": "Growing Stage"
    },
    {
        "week": 5,
        "courseCode": "GRI403",
        "question": "Creativity and inventions are carried out in ______ but not all of the inventions can be turned into innovation.",
        "options": [
            "human resource management",
            "social studies",
            "None of them is correct",
            "marketing",
            "research and development"
        ],
        "correctAnswer": "research and development"
    },
    {
        "week": 5,
        "courseCode": "GRI403",
        "question": "Blue Ocean Strategy is implemented when innovative companies stay strong by differentiating from each other instead of ______",
        "options": [
            "All of them are correct",
            "None of them are correct",
            "resembling",
            "fighting",
            "bonding"
        ],
        "correctAnswer": "resembling"
    },
    {
        "week": 5,
        "courseCode": "GRI403",
        "question": "Main components of entrepreneurial thinking ______",
        "options": [
            "Competitive Thinking",
            "All of them are correct ",
            "Taking Risks",
            "Being Inventive and Creative",
            "None of them is correct"
        ],
        "correctAnswer": "All of them are correct "
    },
    {
        "week": 5,
        "courseCode": "GRI403",
        "question": "Decline stage is when research & development and promotion expenses get lower, price competitions continue and as a result sales and profit ____.",
        "options": [
            "Remain constant",
            "None of them",
            "Decrease ",
            "Increase",
            "All of them are correct"
        ],
        "correctAnswer": "Decrease "
    },
    {
        "week": 5,
        "courseCode": "GRI403",
        "question": "______ is supportive to an entrepreneur to decide which business idea to take:",
        "options": [
            "business idea",
            "Shareholders",
            "Feasibility",
            "None of them is correct",
            "Family"
        ],
        "correctAnswer": "Feasibility"
    },
    {
        "week": 5,
        "courseCode": "GRI403",
        "question": "The most important reward of being an entrepreneur is ______",
        "options": [
            "to gain fame.",
            "None of them is correct",
            "all of them are correct",
            "to create value ",
            "to buy a mansion"
        ],
        "correctAnswer": "to create value "
    },
    {
        "week": 5,
        "courseCode": "GRI403",
        "question": "______ appear as entrepreneurship structures which make innovations and inventions.",
        "options": [
            "None of them is correct",
            "Social Entrepreneurship",
            "All of them are correct",
            "Internal Entrepreneurship",
            "Techno-entrepreneurship "
        ],
        "correctAnswer": "Techno-entrepreneurship "
    },
    {
        "week": 5,
        "courseCode": "GRI403",
        "question": "Unemployment and disagreement with management are type of ______",
        "options": [
            "None of them",
            "riveting factors",
            "compeller factors ",
            "revenge factors",
            "all of them"
        ],
        "correctAnswer": "compeller factors "
    },
    {
        "week": 5,
        "courseCode": "GRI403",
        "question": "A Floppy Disk is considered in ______ stage of product life cycle.",
        "options": [
            "Growing Stage",
            "Decline Stage ",
            "Beginning Stage",
            "Maturity Stage",
            "None of them is correct"
        ],
        "correctAnswer": "Decline Stage "
    },
    {
        "week": 5,
        "courseCode": "GRI403",
        "question": "If the ABC company is trying to reduce their product cost and increase product quality is the example of ______",
        "options": [
            "All of them are correct",
            "closed innovation",
            "Open Innovation",
            "Unlimited innovation",
            "Operational innovation "
        ],
        "correctAnswer": "Operational innovation "
    },
    {
        "week": 5,
        "courseCode": "GRI403",
        "question": "In______the establishments finish product development phase and are in need of trading productions and sales activities.",
        "options": [
            "None of them is correct",
            "Business idea investments",
            "First stage investment (early stage investment)",
            "Enlargement Investments",
            "support Investments"
        ],
        "correctAnswer": "First stage investment (early stage investment)"
    },
    {
        "week": 5,
        "courseCode": "GRI403",
        "question": "Being independent and self-richness are type of ______",
        "options": [
            "compeller factors",
            "Gender Factors",
            "riveting factors",
            "all of them",
            "none of them"
        ],
        "correctAnswer": "riveting factors"
    },
    {
        "week": 5,
        "courseCode": "GRI403",
        "question": "A______ innovation process takes place exclusively within the company.",
        "options": [
            "Open",
            "None of them is correct",
            "Operational",
            "Limited",
            "Closed"
        ],
        "correctAnswer": "Closed"
    },
    {
        "week": 5,
        "courseCode": "GRI403",
        "question": "Which of the followings is wrong about Protection of Intellectual and Industrial Property Rights which effects entrepreneurial climate?",
        "options": [
            "It is an incorporeal right that provides the right of production and sale.",
            "These rights are preserved for the right owner against third parties.",
            "These rights can be transferred someone else.",
            "Entrepreneur activities develop rapidly in the countries lack of patent legislation and application.",
            "Patent legislation and application has a place in protection of these rights."
        ],
        "correctAnswer": "Entrepreneur activities develop rapidly in the countries lack of patent legislation and application."
    },
    {
        "week": 5,
        "courseCode": "GRI403",
        "question": "Which of the following is not one of the sources of finance for entrepreneurs?",
        "options": [
            "Capital markets.",
            "Fixed exchange rate. ",
            "Family members.",
            "Banks.",
            "Acquaintances."
        ],
        "correctAnswer": "Fixed exchange rate. "
    },
    {
        "week": 5,
        "courseCode": "GRI403",
        "question": "Which of the following is the most important way of support that an entrepreneur expects from design?",
        "options": [
            "Unsufficient product.",
            "Innovative product. ",
            "Too much expensive products",
            "Unrealistic product.",
            "Too much high investment cost."
        ],
        "correctAnswer": "Innovative product. "
    },
    {
        "week": 5,
        "courseCode": "GRI403",
        "question": "Which one of the following is a feature of an entrepreneurship?",
        "options": [
            "Being conservative",
            "Not undertaking a risk",
            "Apathetic insensible",
            "Picking out the opportunities ",
            "Not being able to see problems"
        ],
        "correctAnswer": "Picking out the opportunities "
    },
    {
        "week": 5,
        "courseCode": "GRI403",
        "question": "What is the name of ideas which provides value to the consumer, profits to the entrepreneur, benefits to the society and is able to turn product and service?",
        "options": [
            "Business expense",
            "Business Control in wrong way",
            "Uneffective distribution",
            "Unsufficient plan",
            "Business idea "
        ],
        "correctAnswer": "Business idea "
    },
    {
        "week": 5,
        "courseCode": "GRI403",
        "question": "Which one of the following is not among the general medium components?",
        "options": [
            "Natural environment",
            "Political/legal environment",
            "Economic environment",
            "Sociocultural environment",
            "Labour environment"
        ],
        "correctAnswer": "Labour environment"
    },
    {
        "week": 5,
        "courseCode": "GRI403",
        "question": "Which of the following is the basic structure of thought which dominated the business world along with the globalization phenomenon?",
        "options": [
            "Innovative manufacturing",
            "Cost efficiency",
            "Protectionism",
            "Competitive market",
            "Productivity of labor"
        ],
        "correctAnswer": "Competitive market"
    },
    {
        "week": 5,
        "courseCode": "GRI403",
        "question": "Which one of the following is the stage that administrative activities that are necessary for profitability and efficiency are carried out within the process of business establishment?",
        "options": [
            "Business development ",
            "Pre assessment",
            "Feasibility research",
            "Thought of starting a business",
            "Business plan"
        ],
        "correctAnswer": "Business development "
    },
    {
        "week": 5,
        "courseCode": "GRI403",
        "question": "Which of the following is the first step that takes part in the entrepreneurial process related to gathering of enterprise factors?",
        "options": [
            "Finding of the required resources in wrong way",
            "Developing of ineffective business plan",
            "Defining and utilizing of opportunities",
            "Management of business in not sufficient way",
            "Preparing of wrong management plan"
        ],
        "correctAnswer": "Defining and utilizing of opportunities"
    },
    {
        "week": 5,
        "courseCode": "GRI403",
        "question": "Which reason of starting business for entrepreneurs is related to the thought of being their own boss?",
        "options": [
            "The desire for working independently",
            "Lacking of opportunity",
            "Heritage or transfer",
            "Social prestige",
            "The desire for earning money"
        ],
        "correctAnswer": "The desire for working independently"
    },
    {
        "week": 5,
        "courseCode": "GRI403",
        "question": "Which one of the below is primary supporting program of the KOSGEB-Technology Development Centre(TEKMER). which is operating in the ground floor of G and H blocks of the university campus. In supporting the entrepreneurs that have business idea and thinking about founding a business?",
        "options": [
            "General Supporting Program.",
            "R&D, Innovations and Industrial Applying Supporting Program.",
            "SME Project Support Program.",
            "Thematic Project Support Program.",
            "Loan interest support."
        ],
        "correctAnswer": "R&D, Innovations and Industrial Applying Supporting Program."
    },
    {
        "week": 5,
        "courseCode": "GRI403",
        "question": "Which of the following includes act and attitudes in organizational creativity?",
        "options": [
            "Unrealistic Difference",
            "Not positive Thought",
            "Forming concept in uncertain way",
            "Mistake and risk",
            "Challenger"
        ],
        "correctAnswer": "Challenger"
    },
    {
        "week": 5,
        "courseCode": "GRI403",
        "question": "Which of the following is the innovation stage where creativity is used?",
        "options": [
            "Managing ideas.",
            "Collecting ideas.",
            "Choosing ideas that have the potential to be successful.",
            "Budgeting.",
            "Execution."
        ],
        "correctAnswer": "Collecting ideas."
    },
    {
        "week": 5,
        "courseCode": "GRI403",
        "question": "Which of the following is not one of the projects that is supported by TTGV (Technology Development Foundation of Turkey)?",
        "options": [
            "Environmental projects.",
            "Risk Sharing Supports.",
            "Initial Capital Supports.",
            "Business Development Support.",
            "Commercialization Support Project."
        ],
        "correctAnswer": "Environmental projects."
    },
    {
        "week": 5,
        "courseCode": "GRI403",
        "question": "Which of the following business plan sections contains information about customer markets?",
        "options": [
            "Management plan",
            "Financial plan",
            "Demand structure and market research",
            "Introduction/Manager summary",
            "Definition of the entrepreneur and the business"
        ],
        "correctAnswer": "Demand structure and market research"
    },
    {
        "week": 5,
        "courseCode": "GRI403",
        "question": "For whom the value should be created according to the principle \"innovation should create value\"?",
        "options": [
            "For the closed friends",
            "For the class fellow",
            "For the neighbour",
            "For the family",
            "For the customers."
        ],
        "correctAnswer": "For the customers."
    },
    {
        "week": 5,
        "courseCode": "GRI403",
        "question": "Which of the following is the name of the analysis that is done by an organization to make self-assessment systematically by using the information gathered to understand and manage the environment in which it operates?",
        "options": [
            "Variance analysis.",
            "SWOT analysis.",
            "Compatibility analysis.",
            "Performance analysis.",
            "Attention analysis."
        ],
        "correctAnswer": "SWOT analysis."
    },
    {
        "week": 5,
        "courseCode": "GRI403",
        "question": "Which one of the following is a feature of an entrepreneurs' \"encouragement\"?",
        "options": [
            "Setting not rational goals",
            "Behaving abnormal",
            "Expressing his/her personal support in wrong way",
            "Proving his/her self-excitement",
            "Influencing and understanding of emotions in wrong way"
        ],
        "correctAnswer": "Proving his/her self-excitement"
    },
    {
        "week": 5,
        "courseCode": "GRI403",
        "question": "Which one of the following is not a personal characteristic of an entrepreneur?",
        "options": [
            "Responsible",
            "Creative",
            "Focused on success",
            "Unable to bear risk ",
            "Patient"
        ],
        "correctAnswer": "Unable to bear risk "
    },

    // Parallel Programming questions

    {
        week: 1,
        courseCode: "COM478",
        question: "According to Section 1.1, which is NOT listed as a level where parallelism is found in modern computer architecture?",
        options: [
            "Processor microarchitecture (executing multiple instructions simultaneously within a core)",
            "Multiple cores within a single processor",
            "Multiple multicore processors within a server",
            "Network interface card speed"
        ],
        correctAnswer: "Network interface card speed"
    },
    {
        week: 1,
        courseCode: "COM478",
        question: "What is cited as a primary reason why increasing processor and memory *frequencies* indefinitely became problematic?",
        options: [
            "It made programming too complex.",
            "It led to increased power consumption and decreased energy efficiency.",
            "It required larger physical computer sizes.",
            "It was limited by operating system capabilities."
        ],
        correctAnswer: "It led to increased power consumption and decreased energy efficiency."
    },
    {
        week: 1,
        courseCode: "COM478",
        question: "Section 1.1 states that even consumer-level computers often contain graphic processors (GPUs). What capability of these GPUs is highlighted in the context of parallelism?",
        options: [
            "Their ability to run the operating system efficiently.",
            "Their low power consumption compared to CPUs.",
            "Their capacity for running hundreds or thousands of threads in parallel.",
            "Their large amount of dedicated memory storage."
        ],
        correctAnswer: "Their capacity for running hundreds or thousands of threads in parallel."
    },
    {
        week: 1,
        courseCode: "COM478",
        question: "Which term refers to the parallelism present *deep within* a single processor core, enabling execution of several instructions simultaneously?",
        options: [
            "Multi-core processing",
            "Distributed computing",
            "Processor microarchitecture",
            "Graphic processing"
        ],
        correctAnswer: "Processor microarchitecture"
    },
    {
        week: 1,
        courseCode: "COM478",
        question: "Besides technological limits (frequency, power), what other reason is mentioned for the prevalence of parallelism in modern computers?",
        options: [
            "Decreased cost of manufacturing parallel chips.",
            "Development of universally easy parallel programming languages.",
            "Mandates from software developers.",
            "Simple inertia: it can be done and it sells well."
        ],
        correctAnswer: "Simple inertia: it can be done and it sells well."
    },
    // Concept 2: Types of Parallel Systems and Programming Models (Section 1.2 & page 15)
    {
        week: 1,
        courseCode: "COM478",
        question: "Which \"prevailing type of parallelism\" (system) described in Section 1.2 consists of multiple processing units attached to a *single* memory?",
        options: [
            "Shared memory systems",
            "Distributed systems",
            "Graphic processor units (GPUs)",
            "Message passing systems"
        ],
        correctAnswer: "Shared memory systems"
    },
    {
        week: 1,
        courseCode: "COM478",
        question: "Distributed systems, as described in Section 1.2, typically consist of:",
        options: [
            "Multiple cores sharing L2 cache.",
            "Many computer units, each with its own processor and physical memory, connected by networks.",
            "A single processor using hyper-threading.",
            "A CPU working together with a GPU co-processor."
        ],
        correctAnswer: "Many computer units, each with its own processor and physical memory, connected by networks."
    },
    {
        week: 1,
        courseCode: "COM478",
        question: "According to page 15, the **message passing model** is one of the three different approaches to parallel programming. Which type of parallel system is it primarily associated with?",
        options: [
            "Shared memory systems",
            "GPUs",
            "Systems using the threads model",
            "Distributed systems"
        ],
        correctAnswer: "Distributed systems"
    },
    {
        week: 1,
        courseCode: "COM478",
        question: "The **threads model** for parallel programming is linked on page 15 to which type of parallel system?",
        options: [
            "Distributed systems",
            "Shared memory systems",
            "Stream-based systems",
            "Systems using message passing"
        ],
        correctAnswer: "Shared memory systems"
    },
    {
        week: 1,
        courseCode: "COM478",
        question: "Graphic Processor Units (GPUs) are mentioned in Section 1.2 primarily as:",
        options: [
            "The main processors in distributed systems.",
            "Replacements for multi-core CPUs in shared memory systems.",
            "Co-processors used for general purpose, numerically intensive problems.",
            "The hardware responsible for managing message passing."
        ],
        correctAnswer: "Co-processors used for general purpose, numerically intensive problems."
    },
    // Concept 3: Goal of Parallelism - Speeding Up Computations (Section 1.3)
    {
        week: 1,
        courseCode: "COM478",
        question: "What is the primary motivation presented in Section 1.3 for using parallel computation?",
        options: [
            "To simplify the underlying mathematical formulas.",
            "To make programs require less memory.",
            "To speed up time-consuming computations.",
            "To standardize computer hardware."
        ],
        correctAnswer: "To speed up time-consuming computations."
    },
    {
        week: 1,
        courseCode: "COM478",
        question: "The classical n-body problem is presented as an example because:",
        options: [
            "It can only be solved using parallel computers.",
            "It represents a computationally demanding problem whose solution time grows significantly with input size (n).",
            "It demonstrates the efficiency of shared memory systems exclusively.",
            "Its solution is always analytic, but parallelism finds it faster."
        ],
        correctAnswer: "It represents a computationally demanding problem whose solution time grows significantly with input size (n)."
    },
    {
        week: 1,
        courseCode: "COM478",
        question: "For the classical n-body problem, the text states that for n > 2, analytic solutions:",
        options: [
            "Always exist but are hard to compute.",
            "Do not exist in general, only for certain initial configurations.",
            "Are less accurate than numerical solutions.",
            "Require the use of Einstein's general relativity."
        ],
        correctAnswer: "Do not exist in general, only for certain initial configurations."
    },
    {
        week: 1,
        courseCode: "COM478",
        question: "Which of the following is listed on page 16 as a \"nontrivial question\" that must be answered when designing a parallel program for a problem like n-body simulation?",
        options: [
            "Which operating system should be used?",
            "How should each processor collaborate with other processors?",
            "What is the optimal clock frequency?",
            "How much will the hardware cost?"
        ],
        correctAnswer: "How should each processor collaborate with other processors?"
    },
    {
        week: 1,
        courseCode: "COM478",
        question: "According to the end of Section 1.4 (page 17), parallel computers help solve problems that are \"virtually intractable\" on sequential computers due to their:",
        options: [
            "Need for graphical user interfaces.",
            "Requirement for specific network protocols.",
            "High computational and/or data complexities.",
            "Incompatibility with standard programming languages."
        ],
        correctAnswer: "High computational and/or data complexities."
    },

    // --- Chapter 2 (Week 2): COM478 ---
    // Concept 1: Performance Metrics & Modeling (Sections 2.1, 2.2 - Pages 19-22)
    {
        week: 2,
        courseCode: "COM478",
        question: "How is Speedup (S) defined for a parallel program P on a parallel computer C(p) with p processing units, relative to its sequential execution?",
        options: [
            "`S = T_par / T_seq`",
            "`S = T_seq / T_par`",
            "`S = p * T_par`",
            "`S = T_seq / p`"
        ],
        correctAnswer: "`S = T_seq / T_par`"
    },
    {
        week: 2,
        courseCode: "COM478",
        question: "The Efficiency (E) of a parallel program P on C(p) is defined as:",
        options: [
            "`E = Speedup / p`",
            "`E = p / Speedup`",
            "`E = T_par / p`",
            "`E = Speedup * p`"
        ],
        correctAnswer: "`E = Speedup / p`"
    },
    {
        week: 2,
        courseCode: "COM478",
        question: "What is the primary purpose of using computational models like the Random Access Machine (RAM) when studying computation, according to Section 2.2?",
        options: [
            "To guarantee execution speed on specific hardware.",
            "To provide a universal programming language.",
            "To abstract the relevant properties of computation from irrelevant ones.",
            "To accurately predict memory usage."
        ],
        correctAnswer: "To abstract the relevant properties of computation from irrelevant ones."
    },
    {
        week: 2,
        courseCode: "COM478",
        question: "Which of the following is a key feature of the sequential Random Access Machine (RAM) model described on page 21?",
        options: [
            "Multiple processing units working in parallel.",
            "Memory access time depends on the location's address.",
            "Each memory location is directly accessible in constant time.",
            "Communication occurs via an interconnection network."
        ],
        correctAnswer: "Each memory location is directly accessible in constant time."
    },
    {
        week: 2,
        courseCode: "COM478",
        question: "Based on the definitions provided on page 20, what is the general relationship between parallel execution time (T_par), sequential execution time (T_seq), and the number of processing units (p)?",
        options: [
            "`T_seq < T_par`",
            "`T_par > T_seq`",
            "`T_par <= T_seq <= p * T_par`",
            "`T_seq = p * T_par`"
        ],
        correctAnswer: "`T_par <= T_seq <= p * T_par`"
    },
    // Concept 2: Multiprocessor Models (PRAM, LMM, MMM) (Section 2.3 - Pages 23-28)
    {
        week: 2,
        courseCode: "COM478",
        question: "The Parallel Random Access Machine (PRAM) model is characterized by:",
        options: [
            "Processors with independent local memories connected by a network.",
            "A single, common unbounded shared memory accessible to all processors.",
            "Memory divided into modules accessed through switches.",
            "Processors communicating solely via message passing."
        ],
        correctAnswer: "A single, common unbounded shared memory accessible to all processors."
    },
    {
        week: 2,
        courseCode: "COM478",
        question: "Which aspect of the PRAM model is described on page 24 as being particularly unrealistic?",
        options: [
            "Having more than one processor.",
            "The use of a shared memory structure.",
            "The assumption that any processor can access any memory location in a single step without delay or conflict.",
            "Modeling processors based on the sequential RAM."
        ],
        correctAnswer: "The assumption that any processor can access any memory location in a single step without delay or conflict."
    },
    {
        week: 2,
        courseCode: "COM478",
        question: "Which PRAM variant imposes the strictest constraints, allowing neither simultaneous reads nor simultaneous writes to the same memory location?",
        options: [
            "CRCW-PRAM",
            "CREW-PRAM",
            "EREW-PRAM",
            "ARBITRARY-CRCW-PRAM"
        ],
        correctAnswer: "EREW-PRAM"
    },
    {
        week: 2,
        courseCode: "COM478",
        question: "The Local-Memory Machine (LMM) model (Section 2.3.2) differs fundamentally from PRAM in that:",
        options: [
            "It assumes instantaneous communication between processors.",
            "Each processing unit has its own private local memory.",
            "All memory access conflicts are automatically resolved by hardware.",
            "It uses only a single processing unit."
        ],
        correctAnswer: "Each processing unit has its own private local memory."
    },
    {
        week: 2,
        courseCode: "COM478",
        question: "In the Memory-Module Machine (MMM) model described in Section 2.3.3:",
        options: [
            "Processors have large local memories in addition to shared modules.",
            "Processors access distinct memory modules via an interconnection network and have no local memories.",
            "Memory access time is always constant, regardless of contention.",
            "Communication relies exclusively on message passing between processors."
        ],
        correctAnswer: "Processors access distinct memory modules via an interconnection network and have no local memories."
    },
    // Concept 3: Communication & Interconnection Networks (Section 2.4 - Pages 29-41)
    {
        week: 2,
        courseCode: "COM478",
        question: "Section 2.4.1 highlights that the performance of modern parallel applications is increasingly influenced by:",
        options: [
            "The speed of the operating system's scheduler.",
            "The compiler's optimization level.",
            "The communication time and the performance of the interconnection network.",
            "The size of the processor's instruction set."
        ],
        correctAnswer: "The communication time and the performance of the interconnection network."
    },
    {
        week: 2,
        courseCode: "COM478",
        question: "What does the \"diameter\" of an interconnection network topology represent (Section 2.4.2)?",
        options: [
            "The physical distance between the farthest nodes.",
            "The average node degree.",
            "The maximum of the minimum hop counts required to get between any pair of nodes.",
            "The bisection bandwidth of the network."
        ],
        correctAnswer: "The maximum of the minimum hop counts required to get between any pair of nodes."
    },
    {
        week: 2,
        courseCode: "COM478",
        question: "Bisection Bandwidth (BBW), as described on page 22, measures:",
        options: [
            "The maximum data rate of a single network channel.",
            "The latency for a packet to cross the entire network.",
            "The total number of links in the network.",
            "The smallest total bandwidth across any cut dividing the network into two equal halves."
        ],
        correctAnswer: "The smallest total bandwidth across any cut dividing the network into two equal halves."
    },
    {
        week: 2,
        courseCode: "COM478",
        question: "According to the classification in Section 2.4.3, \"direct networks\" differ from \"indirect networks\" in that direct networks:",
        options: [
            "Connect nodes through intermediary switches.",
            "Typically feature nodes (processors) directly connected to their neighbors.",
            "Are only used for shared memory systems (MMM).",
            "Always have a diameter of 1."
        ],
        correctAnswer: "Typically feature nodes (processors) directly connected to their neighbors."
    },
    {
        week: 2,
        courseCode: "COM478",
        question: "Which network topology, described in Section 2.4.4, features nodes arranged in a grid where connections wrap around the edges (e.g., top connects to bottom, left connects to right)?",
        options: [
            "Bus",
            "2D-Mesh",
            "Hypercube",
            "2D-Torus"
        ],
        correctAnswer: "2D-Torus"
    },
    // Concept 4: Laws of Parallel Computation (Brent's & Amdahl's) (Section 2.6 - Pages 37-43, 47-53)
    {
        week: 2,
        courseCode: "COM478",
        question: "What is the central message of Amdahl's Law (Section 2.6.2)?",
        options: [
            "Parallel computing eliminates all bottlenecks.",
            "The maximum speedup achievable is primarily limited by the portion of the program that cannot be parallelized.",
            "Network latency is the only factor limiting speedup.",
            "Adding more processors always results in linear speedup."
        ],
        correctAnswer: "The maximum speedup achievable is primarily limited by the portion of the program that cannot be parallelized."
    },
    {
        week: 2,
        courseCode: "COM478",
        question: "According to Amdahl's Law derived on page 41, if `b` is the fraction of a program's sequential execution time that *can* benefit from parallelization, what is the theoretical maximum speedup `S` achievable with an infinite number of processors?",
        options: [
            "`S < 1 / b`",
            "`S < b`",
            "`S < 1 / (1 - b)`",
            "`S < 1 - b`"
        ],
        correctAnswer: "`S < 1 / (1 - b)`"
    },
    {
        week: 2,
        courseCode: "COM478",
        question: "Suppose 70% of a program's execution time can be sped up (b=0.7). If this parallelizable part is run on 16 processing units, achieving an ideal speedup of s=16 for that part, what is the approximate overall speedup S according to the calculation on page 42?",
        options: [
            "16x",
            "3.33x",
            "1.43x",
            "2.91x"
        ],
        correctAnswer: "2.91x"
    },
    {
        week: 2,
        courseCode: "COM478",
        question: "Brent's Theorem (Section 2.6.1) relates the parallel runtime `T_par,R(P)` on a machine R with `p` processors to which two fundamental quantities of the computation P?",
        options: [
            "The program's memory footprint and cache hit rate.",
            "The network topology's diameter and bisection bandwidth.",
            "The total number of operations (Work, W) and the ideal parallel runtime (T_par,M(P)) on a machine with unlimited processors.",
            "The sequential runtime (T_seq) and the efficiency (E)."
        ],
        correctAnswer: "The total number of operations (Work, W) and the ideal parallel runtime (T_par,M(P)) on a machine with unlimited processors."
    },
    {
        week: 2,
        courseCode: "COM478",
        question: "Figure 2.18 (page 39) shows that actual speedup often increases initially with more processors but then levels off. This observation aligns with Amdahl's Law because:",
        options: [
            "Communication overhead eventually dominates computation.",
            "The inherently sequential part of the program becomes the bottleneck, limiting further speedup.",
            "Processors become less reliable as their number increases.",
            "Linear speedup is only possible with distributed memory systems."
        ],
        correctAnswer: "The inherently sequential part of the program becomes the bottleneck, limiting further speedup."
    },

    // --- Chapter 3 (Week 3): COM478 ---
    // Concept 1: Shared Memory Model & Race Conditions (Section 3.1)
    {
        week: 3,
        courseCode: "COM478",
        question: "The shared memory programming model, as described in Section 3.1, assumes that multiple independent processors (or cores) share access to:",
        options: [
            "Separate network interfaces.",
            "A single main memory.",
            "Individual, private caches only.",
            "Distinct peripheral devices."
        ],
        correctAnswer: "A single main memory."
    },
    {
        week: 3,
        courseCode: "COM478",
        question: "What feature allows a single physical CPU core to execute multiple instruction streams (threads) simultaneously, appearing as several \"logical cores\" to the programmer?",
        options: [
            "Memory caching",
            "Simultaneous Multithreading (SMT) / Hyper-Threading",
            "Instruction pipelining",
            "Direct Memory Access (DMA)"
        ],
        correctAnswer: "Simultaneous Multithreading (SMT) / Hyper-Threading"
    },
    {
        week: 3,
        courseCode: "COM478",
        question: "A \"race condition\" (illustrated in Fig 3.3) occurs primarily because:",
        options: [
            "Threads run at different clock speeds.",
            "The operating system assigns priorities incorrectly.",
            "Multiple threads access and modify the same shared memory location without proper synchronization, leading to unpredictable results based on timing.",
            "There are more threads than logical cores available."
        ],
        correctAnswer: "Multiple threads access and modify the same shared memory location without proper synchronization, leading to unpredictable results based on timing."
    },
    {
        week: 3,
        courseCode: "COM478",
        question: "What basic mechanism, illustrated in Fig 3.4, can be used to prevent race conditions by ensuring only one thread can access a specific shared resource (like a memory location) at a time?",
        options: [
            "Increasing processor clock speed.",
            "Using separate variables for each thread.",
            "Applying compiler optimizations.",
            "Locking the resource before access and unlocking it after."
        ],
        correctAnswer: "Locking the resource before access and unlocking it after."
    },
    {
        week: 3,
        courseCode: "COM478",
        question: "Modern multi-core CPUs combined with SMT present a parallel system to the programmer. According to Figure 3.2, how many logical cores would a system with two quad-core CPUs supporting SMT (like hyper-threading, assuming 2 threads per core) provide?",
        options: [
            "4",
            "8",
            "16",
            "32"
        ],
        correctAnswer: "16"
    },
    // Concept 2: Basic OpenMP Structure & Usage (Section 3.2)
    {
        week: 3,
        courseCode: "COM478",
        question: "How are OpenMP directives typically expressed in C/C++ code?",
        options: [
            "As special function calls like `openmp_parallel()`.",
            "Using keywords like `parallel for`.",
            "As compiler pragmas, e.g., `#pragma omp parallel`.",
            "Through external configuration files."
        ],
        correctAnswer: "As compiler pragmas, e.g., `#pragma omp parallel`."
    },
    {
        week: 3,
        courseCode: "COM478",
        question: "Which compiler flag is commonly used with GCC to enable OpenMP support?",
        options: [
            "-omp",
            "-fopenmp",
            "-pthread",
            "-lm"
        ],
        correctAnswer: "-fopenmp"
    },
    {
        week: 3,
        courseCode: "COM478",
        question: "Which environment variable is typically used to specify the number of threads an OpenMP program should use at runtime?",
        options: [
            "OMP_THREADS",
            "NUM_THREADS",
            "OMP_NUM_THREADS",
            "PARALLEL_THREADS"
        ],
        correctAnswer: "OMP_NUM_THREADS"
    },
    {
        week: 3,
        courseCode: "COM478",
        question: "What does the OpenMP function `omp_get_thread_num()` return?",
        options: [
            "The total number of threads available on the system.",
            "The total number of threads in the current team.",
            "The unique ID (starting from 0) of the calling thread within its current team.",
            "The maximum number of threads the program is allowed to use."
        ],
        correctAnswer: "The unique ID (starting from 0) of the calling thread within its current team."
    },
    {
        week: 3,
        courseCode: "COM478",
        question: "What usually happens at the end of an `#pragma omp parallel` region, unless explicitly modified by a clause like `nowait`?",
        options: [
            "All threads continue executing concurrently.",
            "Only the master thread continues; worker threads are terminated immediately.",
            "An implicit barrier: threads wait for all other threads in the team to finish before the master thread continues alone.",
            "The program terminates."
        ],
        correctAnswer: "An implicit barrier: threads wait for all other threads in the team to finish before the master thread continues alone."
    },
    // Concept 3: Parallelizing Loops (`omp for` / Nesting) (Section 3.3 intro, 3.3.1)
    {
        week: 3,
        courseCode: "COM478",
        question: "What is the primary purpose of the `#pragma omp for` directive?",
        options: [
            "To create a new team of threads for each loop iteration.",
            "To specify that loop iterations should be executed sequentially by the master thread.",
            "To divide the iterations of the subsequent `for` loop among the threads in the existing team.",
            "To declare variables used within the loop."
        ],
        correctAnswer: "To divide the iterations of the subsequent `for` loop among the threads in the existing team."
    },
    {
        week: 3,
        courseCode: "COM478",
        question: "The directive `#pragma omp parallel for` is a shorthand for:",
        options: [
            "Creating nested parallel regions.",
            "A `#pragma omp parallel` region immediately containing a `#pragma omp for` directive.",
            "A `#pragma omp for` loop followed by a `#pragma omp barrier`.",
            "Executing the loop sequentially but checking for parallelism opportunities."
        ],
        correctAnswer: "A `#pragma omp parallel` region immediately containing a `#pragma omp for` directive."
    },
    {
        week: 3,
        courseCode: "COM478",
        question: "Which OpenMP clause allows treating multiple perfectly nested loops as a single larger loop for the purpose of dividing iterations among threads?",
        options: [
            "schedule(static)",
            "private(i,j)",
            "reduction(+:sum)",
            "collapse(n)"
        ],
        correctAnswer: "collapse(n)"
    },
    {
        week: 3,
        courseCode: "COM478",
        question: "Consider two nested loops. If only the outer loop is preceded by `#pragma omp parallel for`, how are the iterations executed (assuming default behavior)?",
        options: [
            "Iterations of the outer loop are divided among threads; each thread executes all iterations of the inner loop for its assigned outer iteration(s).",
            "Iterations of the inner loop are divided among threads; the outer loop runs sequentially.",
            "Both loops are automatically collapsed and parallelized together.",
            "Only the master thread executes both loops."
        ],
        correctAnswer: "Iterations of the outer loop are divided among threads; each thread executes all iterations of the inner loop for its assigned outer iteration(s)."
    },
    {
        week: 3,
        courseCode: "COM478",
        question: "For `#pragma omp for` to work correctly in C, the loop must generally adhere to a \"canonical form.\" Which of the following might violate this form?",
        options: [
            "for (int i = 0; i < n; i++)",
            "for (p = list; p != NULL; p = p->next) (where p is a pointer)",
            "for (i = 0; i < n; i = i + 2)",
            "Inside the loop, modifying the loop counter variable `i` based on some condition."
        ],
        correctAnswer: "Inside the loop, modifying the loop counter variable `i` based on some condition."
    },
    // Concept 4: Data Sharing Attributes (Section 3.3.1, page 58)
    {
        week: 3,
        courseCode: "COM478",
        question: "In an OpenMP `parallel` region, what is the default scope for a variable declared *outside* the region?",
        options: [
            "private",
            "shared",
            "firstprivate",
            "Depends on the compiler"
        ],
        correctAnswer: "shared"
    },
    {
        week: 3,
        courseCode: "COM478",
        question: "If a variable `x` is declared as `private(x)` for a parallel loop, what does this mean?",
        options: [
            "Only the master thread can access `x`.",
            "All threads share the same memory location for `x`, but access is atomic.",
            "Each thread gets its own, uninitialized copy of `x`.",
            "The value of `x` from the last iteration is copied back to the original `x`."
        ],
        correctAnswer: "Each thread gets its own, uninitialized copy of `x`."
    },
    {
        week: 3,
        courseCode: "COM478",
        question: "Consider the following code snippet:\n\n```c\nint val = 10;\n#pragma omp parallel for firstprivate(val)\nfor (int i = 0; i < N; i++) {\n    // use val\n}\n```\n\nWhat initial value will the private copy of `val` have inside the loop for each thread?",
        options: [
            "0",
            "10",
            "An undefined value",
            "The thread ID"
        ],
        correctAnswer: "10"
    },
    {
        week: 3,
        courseCode: "COM478",
        question: "Which data sharing clause would you use if you need each thread to have its own copy of a variable during the loop, but the value computed by the thread executing the *sequentially last* iteration needs to be assigned back to the original shared variable after the loop?",
        options: [
            "private",
            "shared",
            "firstprivate",
            "lastprivate"
        ],
        correctAnswer: "lastprivate"
    },
    {
        week: 3,
        courseCode: "COM478",
        question: "In the vector addition example (Listing 3.4), the loop counter `i` is implicitly:",
        options: [
            "shared by all threads.",
            "private to each thread.",
            "firstprivate initialized to 0.",
            "Handled using a `reduction`."
        ],
        correctAnswer: "private to each thread."
    },
    // Concept 5: Handling Loop Dependencies & Reductions (Section 3.3.2)
    {
        week: 3,
        courseCode: "COM478",
        question: "Why is the code in Listing 3.11 (simple summation into a shared `sum`) likely to produce incorrect results when run with multiple threads?",
        options: [
            "Integer overflow.",
            "Incorrect loop bounds.",
            "A race condition occurs when multiple threads read and write `sum` concurrently.",
            "The `printf` statement interferes with the calculation."
        ],
        correctAnswer: "A race condition occurs when multiple threads read and write `sum` concurrently."
    },
    {
        week: 3,
        courseCode: "COM478",
        question: "Which OpenMP directive guarantees that the associated code block is executed by only one thread at a time across the entire team, providing a general way to protect shared updates but potentially causing bottlenecks?",
        options: [
            "#pragma omp atomic",
            "#pragma omp barrier",
            "#pragma omp critical",
            "#pragma omp single"
        ],
        correctAnswer: "#pragma omp critical"
    },
    {
        week: 3,
        courseCode: "COM478",
        question: "For common accumulation operations like summing values or finding the maximum in a loop, what is the *most recommended* and efficient OpenMP approach according to the text?",
        options: [
            "Using `#pragma omp atomic` for each update.",
            "Using `#pragma omp critical` around the update.",
            "Using the `reduction(operator:list)` clause on the `omp for` directive.",
            "Manually creating private copies and summing them after the loop using barriers."
        ],
        correctAnswer: "Using the `reduction(operator:list)` clause on the `omp for` directive."
    },
    {
        week: 3,
        courseCode: "COM478",
        question: "Consider `#pragma omp parallel for reduction(max:largest_val)`. How does OpenMP handle this internally?",
        options: [
            "All threads compare and update the shared `largest_val` using atomic operations.",
            "Each thread gets a private copy of `largest_val`, finds the maximum in its assigned iterations, and then OpenMP combines these private maximums to find the overall maximum.",
            "Only the master thread executes the loop, calculating the maximum sequentially.",
            "Threads use a critical section to update the shared `largest_val`."
        ],
        correctAnswer: "Each thread gets a private copy of `largest_val`, finds the maximum in its assigned iterations, and then OpenMP combines these private maximums to find the overall maximum."
    },
    {
        week: 3,
        courseCode: "COM478",
        question: "Which of the following is NOT listed as a valid reduction operator identifier on page 69?",
        options: [
            "+",
            "min",
            "&&",
            "/" // (division)
        ],
        correctAnswer: "/" // (division)
    },
    // Concept 6: Loop Scheduling (Section 3.3.3)
    {
        week: 3,
        courseCode: "COM478",
        question: "Which `schedule` clause kind divides loop iterations into fixed-size chunks (potentially large if no chunk size is specified) and assigns them to threads before the loop starts?",
        options: [
            "dynamic",
            "guided",
            "static",
            "auto"
        ],
        correctAnswer: "static"
    },
    {
        week: 3,
        courseCode: "COM478",
        question: "If a parallel loop has iterations that take significantly different and unpredictable amounts of time, which scheduling kind is generally best for load balancing, although it might incur more overhead?",
        options: [
            "static",
            "static, 1",
            "dynamic",
            "runtime"
        ],
        correctAnswer: "dynamic"
    },
    {
        week: 3,
        courseCode: "COM478",
        question: "What does `schedule(runtime)` instruct the OpenMP system to do?",
        options: [
            "Use `schedule(static)` by default.",
            "Use `schedule(dynamic, 1)` by default.",
            "Determine the schedule based on the `OMP_SCHEDULE` environment variable set at runtime.",
            "Let the compiler choose the best schedule based on static analysis."
        ],
        correctAnswer: "Determine the schedule based on the `OMP_SCHEDULE` environment variable set at runtime."
    },
    {
        week: 3,
        courseCode: "COM478",
        question: "The Mandelbrot set computation (Listing 3.21) is used as an example where scheduling matters significantly because:",
        options: [
            "The number of iterations is unknown beforehand.",
            "Each iteration performs complex arithmetic.",
            "The number of iterations (and thus time) required varies greatly depending on the specific point (pixel) being calculated.",
            "It requires frequent use of reduction operations."
        ],
        correctAnswer: "The number of iterations (and thus time) required varies greatly depending on the specific point (pixel) being calculated."
    },
    {
        week: 3,
        courseCode: "COM478",
        question: "Consider `schedule(static, 2)` for a loop with 14 iterations assigned to 4 threads (T0, T1, T2, T3). How would the iterations likely be assigned according to the description on page 75?",
        options: [
            "T0={1,2,3,4}, T1={5,6,7,8}, T2={9,10,11}, T3={12,13,14}",
            "T0={1,2}, T1={3,4}, T2={5,6}, T3={7,8}, T0={9,10}, T1={11,12}, T2={13,14}",
            "T0={1,2, 9,10}, T1={3,4, 11,12}, T2={5,6, 13,14}, T3={7,8}",
            "Assignment is unpredictable."
        ],
        correctAnswer: "T0={1,2, 9,10}, T1={3,4, 11,12}, T2={5,6, 13,14}, T3={7,8}"
    },
    // Concept 7: Task Parallelism (`omp task`) (Section 3.4)
    {
        week: 3,
        courseCode: "COM478",
        question: "The `#pragma omp task` directive is typically used to:",
        options: [
            "Define a block of code that represents an independent unit of work to be executed by a thread from the team.",
            "Force immediate execution of a code block by the master thread.",
            "Specify the scheduling strategy for a parallel loop.",
            "Replace the `#pragma omp parallel` directive."
        ],
        correctAnswer: "Define a block of code that represents an independent unit of work to be executed by a thread from the team."
    },
    {
        week: 3,
        courseCode: "COM478",
        question: "In Listing 3.24 (summation using tasks), why is `#pragma omp single` used before the loop that creates tasks?",
        options: [
            "To ensure only one thread allocates the `sum` variable.",
            "To ensure the loop runs faster.",
            "To ensure that only one thread executes the loop and creates the set of tasks, preventing duplicate tasks.",
            "To make the tasks execute in the order they are created."
        ],
        correctAnswer: "To ensure that only one thread executes the loop and creates the set of tasks, preventing duplicate tasks."
    },
    {
        week: 3,
        courseCode: "COM478",
        question: "What is the purpose of the `#pragma omp taskwait` directive?",
        options: [
            "To make a thread wait for a specific amount of time.",
            "To synchronize all threads in the team at a specific point.",
            "To make the encountering task suspend until all child tasks it directly generated have completed.",
            "To signal the operating system that a task is waiting for I/O."
        ],
        correctAnswer: "To make the encountering task suspend until all child tasks it directly generated have completed."
    },
    {
        week: 3,
        courseCode: "COM478",
        question: "In the parallel Quicksort example (Listing 3.27), the `final(expr)` clause on the `#pragma omp task` directives is used to:",
        options: [
            "Mark the final task to be executed.",
            "Ensure the task executes on the master thread only.",
            "Specify the final value for a reduction variable.",
            "Prevent the task from generating further sub-tasks if the expression is true (used as a recursion cutoff)."
        ],
        correctAnswer: "Prevent the task from generating further sub-tasks if the expression is true (used as a recursion cutoff)."
    },
    {
        week: 3,
        courseCode: "COM478",
        question: "When is task parallelism (`omp task`) often more suitable than simple loop parallelism (`omp for`)?",
        options: [
            "When parallelizing simple, regular `for` loops with independent iterations.",
            "When the units of work are irregular, determined dynamically, or involve recursion (like Quicksort).",
            "When only atomic operations are needed for synchronization.",
            "When the number of threads must be fixed at compile time."
        ],
        correctAnswer: "When the units of work are irregular, determined dynamically, or involve recursion (like Quicksort)."
    }

    // console.log(JSON.stringify(allQuestions, null, 2)); // Optional: To print the array nicely formatted
    // console.log("Total questions generated:", allQuestions.length); // Optional: To print the count
]; // End of allQuestions array