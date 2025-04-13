// Note: Ensure the 'correctAnswer' exactly matches one of the options strings.
// IMPORTANT: Added 'courseCode' to all questions.
const allQuestions = [
    // --- Week 1: COM496 ---
    {
        week: 1,
        courseCode: "COM496",
        question: "Cybersecurity primarily focuses on protecting which of the following?",
        options: ["Physical infrastructure only", "Digital information, computers, mobile devices, servers, and networks", "Business processes and employee training", "Legal compliance and regulations"],
        correctAnswer: "Digital information, computers, mobile devices, servers, and networks"
    },
    {
        week: 1,
        courseCode: "COM496",
        question: "The notes state cybersecurity involves a combination of People, Processes, and what third component?",
        options: ["Data", "Hardware", "Technology", "Policies"],
        correctAnswer: "Technology"
    },
    {
        week: 1,
        courseCode: "COM496",
        question: "The practice of protecting sensitive data from unauthorized access, alteration, or destruction defines:",
        options: ["Network Management", "Information Security", "Data Analysis", "Software Development"],
        correctAnswer: "Information Security"
    },
    {
        week: 1,
        courseCode: "COM496",
        question: "Which component of the CIA triad ensures that data is not altered or tampered with?",
        options: ["Confidentiality", "Integrity", "Availability", "Authenticity"],
        correctAnswer: "Integrity"
    },
    {
        week: 1,
        courseCode: "COM496",
        question: "Ensuring that systems and data are accessible to authorized users when needed relates to which component of the CIA triad?",
        options: ["Confidentiality", "Integrity", "Availability", "Non-repudiation"],
        correctAnswer: "Availability"
    },
    {
        week: 1,
        courseCode: "COM496",
        question: "What term refers to a weakness in a system that can be exploited by a threat?",
        options: ["Risk", "Threat", "Asset", "Vulnerability"],
        correctAnswer: "Vulnerability"
    },
    {
        week: 1,
        courseCode: "COM496",
        question: "The process of verifying the identity of a user or system is known as:",
        options: ["Authorization", "Accountability", "Authentication", "Access Control"],
        correctAnswer: "Authentication"
    },
    {
        week: 1,
        courseCode: "COM496",
        question: "Ensuring that the origin of data is genuine and can be trusted refers to:",
        options: ["Confidentiality", "Authenticity", "Availability", "Integrity"],
        correctAnswer: "Authenticity"
    },
    {
        week: 1,
        courseCode: "COM496",
        question: "According to the notes, information relating to an identified or identifiable natural person (like a name or phone number) is called:",
        options: ["Corporate Data", "Critical Data", "Personal Data", "System Data"],
        correctAnswer: "Personal Data"
    },
    {
        week: 1,
        courseCode: "COM496",
        question: "Compromise of which type of information system could lead to loss of life or major economic damage?",
        options: ["Personal Blogs", "Social Media Networks", "Critical Infrastructure Systems (e.g., energy dams)", "Online Retail Stores"],
        correctAnswer: "Critical Infrastructure Systems (e.g., energy dams)"
    },
    {
        week: 1,
        courseCode: "COM496",
        question: "A person who attempts to breach computer systems is broadly termed a:",
        options: ["Analyst", "Administrator", "Developer", "Hacker"],
        correctAnswer: "Hacker"
    },
    {
        week: 1,
        courseCode: "COM496",
        question: "An ethical hacker who works to improve security is also known as a:",
        options: ["Black Hat", "Gray Hat", "White Hat", "Script Kiddie"],
        correctAnswer: "White Hat"
    },
    {
        week: 1,
        courseCode: "COM496",
        question: "Hackers motivated by political or social causes are referred to as:",
        options: ["State-Sponsored Hackers", "Cyber Terrorists", "Script Kiddies", "Hacktivists"],
        correctAnswer: "Hacktivists"
    },
    {
        week: 1,
        courseCode: "COM496",
        question: "Attackers backed by government entities, often involved in espionage, are known as:",
        options: ["Gray Hats", "Hacktivists", "State-Sponsored Hackers", "Cyber Terrorists"],
        correctAnswer: "State-Sponsored Hackers"
    },
    {
        week: 1,
        courseCode: "COM496",
        question: "What type of attacker is typically inexperienced and uses pre-made tools to launch attacks?",
        options: ["State-Sponsored Hacker", "Hacktivist", "Script Kiddie", "Cyber Terrorist"],
        correctAnswer: "Script Kiddie"
    },
    {
        week: 1,
        courseCode: "COM496",
        question: "Which type of cyber attack involves overwhelming a target system with traffic from a single source to make it unavailable?",
        options: ["Phishing", "Malware", "DoS (Denial of Service)", "MitM (Man-in-the-Middle)"],
        correctAnswer: "DoS (Denial of Service)"
    },
    {
        week: 1,
        courseCode: "COM496",
        question: "A DDoS attack uses what to overwhelm a target?",
        options: ["A single powerful server", "Social engineering techniques", "A network of compromised computers (botnet)", "Encrypted malware"],
        correctAnswer: "A network of compromised computers (botnet)"
    },
    {
        week: 1,
        courseCode: "COM496",
        question: "Tricking users into revealing sensitive information through deceptive emails or websites is known as:",
        options: ["Malware", "DDoS", "Phishing", "Session Hijacking"],
        correctAnswer: "Phishing"
    },
    {
        week: 1,
        courseCode: "COM496",
        question: "Session Hijacking, IP Spoofing, and Replay Attacks fall under which broader category of attack?",
        options: ["DoS", "Malware", "Phishing", "Man-in-the-Middle (MitM)"],
        correctAnswer: "Man-in-the-Middle (MitM)"
    },
    {
        week: 1,
        courseCode: "COM496",
        question: "Which term ensures that a party cannot deny having sent a message or performed an action?",
        options: ["Confidentiality", "Integrity", "Authenticity", "Non-repudiation"],
        correctAnswer: "Non-repudiation"
    },
    {
        week: 1,
        courseCode: "COM496",
        question: "The WannaCry incident from 2017 mentioned in the examples primarily involved what type of malicious software?",
        options: ["Virus", "Worm", "Trojan", "Ransomware"],
        correctAnswer: "Ransomware"
    },
    {
        week: 1,
        courseCode: "COM496",
        question: "Which company suffered a significant data breach in 2021 mentioned in the examples?",
        options: ["Sony", "Epsilon", "Air India", "Yahoo"],
        correctAnswer: "Air India"
    },
    {
        week: 1,
        courseCode: "COM496",
        question: "Which team role focuses on defending systems against attacks?",
        options: ["Red Team", "Blue Team", "Ethical Hacker", "Cybersecurity Guru"],
        correctAnswer: "Blue Team"
    },

    // --- Week 2: COM496 ---
    {
        week: 2,
        courseCode: "COM496",
        question: "Week 2 primarily focuses on understanding common cyber threats, their types, and what other aspect?",
        options: ["Cryptographic algorithms", "Network configuration", "Protection methods", "Career paths"],
        correctAnswer: "Protection methods"
    },
    {
        week: 2,
        courseCode: "COM496",
        question: "Software specifically designed to damage systems or gain unauthorized access is called:",
        options: ["Firmware", "Adware", "Malware", "Middleware"],
        correctAnswer: "Malware"
    },
    {
        week: 2,
        courseCode: "COM496",
        question: "Viruses, Trojans, Worms, and Ransomware are all types of:",
        options: ["Network protocols", "Operating systems", "Malware", "Authentication methods"],
        correctAnswer: "Malware"
    },
    {
        week: 2,
        courseCode: "COM496",
        question: "What is the primary goal of Phishing attacks?",
        options: ["To disable network services", "To encrypt user data for ransom", "To trick users into revealing sensitive information (e.g., passwords)", "To self-replicate across networks"],
        correctAnswer: "To trick users into revealing sensitive information (e.g., passwords)"
    },
    {
        week: 2,
        courseCode: "COM496",
        question: "What is the core purpose of a DoS or DDoS attack?",
        options: ["To steal data silently", "To install hidden backdoors", "To make a service or system unavailable by overwhelming it", "To impersonate a legitimate user"],
        correctAnswer: "To make a service or system unavailable by overwhelming it"
    },
    {
        week: 2,
        courseCode: "COM496",
        question: "According to the notes, how does a virus primarily spread?",
        options: ["By exploiting network vulnerabilities automatically", "By attaching to files/programs and spreading upon execution by a user", "By sending emails from a central server", "By encrypting the boot sector"],
        correctAnswer: "By attaching to files/programs and spreading upon execution by a user"
    },
    {
        week: 2,
        courseCode: "COM496",
        question: "Which sequence represents the typical lifecycle of a virus as per the notes?",
        options: ["Replication -> Infection -> Payload -> Execution", "Infection -> Execution -> Replication -> Payload Execution", "Execution -> Payload -> Infection -> Replication", "Payload -> Replication -> Execution -> Infection"],
        correctAnswer: "Infection -> Execution -> Replication -> Payload Execution"
    },
    {
        week: 2,
        courseCode: "COM496",
        question: "What is the defining characteristic of a Trojan Horse?",
        options: ["It self-replicates rapidly.", "It disguises itself as legitimate software to trick users into running it.", "It always encrypts files.", "It primarily targets network infrastructure."],
        correctAnswer: "It disguises itself as legitimate software to trick users into running it."
    },
    {
        week: 2,
        courseCode: "COM496",
        question: "Backdoor, Banking, and Spyware are mentioned as types of which malware?",
        options: ["Virus", "Worm", "Trojan", "Ransomware"],
        correctAnswer: "Trojan"
    },
    {
        week: 2,
        courseCode: "COM496",
        question: "Unlike viruses, how do worms typically propagate?",
        options: ["They require users to manually copy them to other systems.", "They attach themselves to existing program files.", "They self-replicate and spread across networks, often exploiting vulnerabilities.", "They rely on social engineering deception."],
        correctAnswer: "They self-replicate and spread across networks, often exploiting vulnerabilities."
    },
    {
        week: 2,
        courseCode: "COM496",
        question: "What are the typical steps involved in a ransomware attack, according to the notes?",
        options: ["Deception -> Execution -> Payload Activation", "Infection -> Encryption -> Ransom Demand", "Exploitation -> Replication -> Payload Execution", "Infection -> Execution -> Replication -> Payload Execution"],
        correctAnswer: "Infection -> Encryption -> Ransom Demand"
    },
    {
        week: 2,
        courseCode: "COM496",
        question: "The Phishing process described involves Impersonation, Credential Theft, and what intermediate step?",
        options: ["Encryption", "Replication", "Call to Action", "Network Scan"],
        correctAnswer: "Call to Action"
    },
    {
        week: 2,
        courseCode: "COM496",
        question: "What distinguishes Spear Phishing from regular Phishing?",
        options: ["Spear Phishing uses SMS messages instead of email.", "Spear Phishing targets specific individuals or organizations with personalized messages.", "Spear Phishing only aims to install malware, not steal credentials.", "Spear Phishing uses phone calls instead of electronic messages."],
        correctAnswer: "Spear Phishing targets specific individuals or organizations with personalized messages."
    },
    {
        week: 2,
        courseCode: "COM496",
        question: "Volume-based, Protocol-based, and Application Layer attacks are categories of which threat?",
        options: ["Phishing", "Malware", "DDoS", "Trojan"],
        correctAnswer: "DDoS"
    },
    {
        week: 2,
        courseCode: "COM496",
        question: "A hacker with malicious intent, aiming for personal gain or damage, is categorized as:",
        options: ["White Hat", "Grey Hat", "Black Hat", "Ethical Hacker"],
        correctAnswer: "Black Hat"
    },
    {
        week: 2,
        courseCode: "COM496",
        question: "Stealing state secrets or disrupting national infrastructure are common motivations for which type of threat actor?",
        options: ["Script Kiddies", "Hacktivists", "State-Sponsored Attackers", "Grey Hat Hackers"],
        correctAnswer: "State-Sponsored Attackers"
    },
    {
        week: 2,
        courseCode: "COM496",
        question: "Using strong passwords, performing regular software updates, and implementing firewalls are all examples of:",
        options: ["Attack techniques", "Threat actors", "Prevention and mitigation strategies", "Types of malware"],
        correctAnswer: "Prevention and mitigation strategies"
    },
    {
        week: 2,
        courseCode: "COM496",
        question: "What authentication method is specifically recommended as a defense against phishing?",
        options: ["Single Sign-On (SSO)", "Using the same password everywhere", "Two-Factor Authentication (2FA)", "Password complexity rules only"],
        correctAnswer: "Two-Factor Authentication (2FA)"
    },
    {
        week: 2,
        courseCode: "COM496",
        question: "The Mafiaboy attack in 2000, targeting CNN, eBay, and Yahoo, is cited as an example of which attack type?",
        options: ["Ransomware", "Phishing", "DoS (Denial of Service)", "Virus Outbreak"],
        correctAnswer: "DoS (Denial of Service)"
    },
    {
        week: 2,
        courseCode: "COM496",
        question: "The Mirai botnet attack in 2016, which affected services like Twitter and Spotify, is a notable example of:",
        options: ["Spear Phishing", "Ransomware", "DDoS (Distributed Denial of Service)", "Trojan Infection"],
        correctAnswer: "DDoS (Distributed Denial of Service)"
    },
    {
        week: 2,
        courseCode: "COM496",
        question: "The WannaCry attack was significant because it:",
        options: ["Only targeted financial institutions.", "Was the first recorded computer virus.", "Spread rapidly across more than 150 countries.", "Was purely a DoS attack."],
        correctAnswer: "Spread rapidly across more than 150 countries."
    },
    {
        week: 2,
        courseCode: "COM496",
        question: "The 2016 DDoS attack on Dyn caused major disruption by targeting what type of service provider?",
        options: ["Email provider", "Cloud storage provider", "DNS provider", "Web hosting provider"],
        correctAnswer: "DNS provider"
    },
    {
        week: 2,
        courseCode: "COM496",
        question: "The sophisticated phishing scam against Facebook and Google involved impersonating which Taiwanese company?",
        options: ["Acer", "Asus", "Quanta Computer", "Foxconn"],
        correctAnswer: "Quanta Computer"
    },

    // --- Week 3: COM496 ---
    {
        week: 3,
        courseCode: "COM496",
        question: "Week 3 covers cryptographic concepts ranging from classical methods to what modern applications?",
        options: ["Network routing protocols", "Operating system kernels", "Symmetric/asymmetric encryption and applications like TLS/Blockchain", "Intrusion detection systems"],
        correctAnswer: "Symmetric/asymmetric encryption and applications like TLS/Blockchain"
    },
    {
        week: 3,
        courseCode: "COM496",
        question: "Cryptography provides techniques primarily for ensuring:",
        options: ["Network speed and latency", "Hardware compatibility", "Information security (Confidentiality, Integrity, Authentication, Non-repudiation)", "User interface design"],
        correctAnswer: "Information security (Confidentiality, Integrity, Authentication, Non-repudiation)"
    },
    {
        week: 3,
        courseCode: "COM496",
        question: "The Caesar cipher is an example of what type of simple substitution technique?",
        options: ["Polyalphabetic shift", "Transposition cipher", "Monoalphabetic shift", "Block cipher"],
        correctAnswer: "Monoalphabetic shift"
    },
    {
        week: 3,
        courseCode: "COM496",
        question: "The Caesar Cipher is easily broken using which technique?",
        options: ["Kasiski Test", "Frequency Analysis", "Brute-force attack on the key", "Dictionary attack"],
        correctAnswer: "Frequency Analysis"
    },
    {
        week: 3,
        courseCode: "COM496",
        question: "What makes the Vigenère cipher polyalphabetic?",
        options: ["It uses numbers instead of letters.", "It uses multiple Caesar shifts based on a keyword.", "It encrypts blocks of data.", "It uses public-key cryptography."],
        correctAnswer: "It uses multiple Caesar shifts based on a keyword."
    },
    {
        week: 3,
        courseCode: "COM496",
        question: "The encryption formula for Vigenère is given as Ci = (Pi + Ki) mod 26. What does Ki represent?",
        options: ["The plaintext letter value", "The ciphertext letter value", "The key letter value (from the keyword)", "The alphabet size (26)"],
        correctAnswer: "The key letter value (from the keyword)"
    },
    {
        week: 3,
        courseCode: "COM496",
        question: "Frequency analysis exploits the statistical frequencies of letters in a language to break which type of ciphers?",
        options: ["Modern block ciphers like AES", "Asymmetric ciphers like RSA", "Simple substitution ciphers (like Caesar)", "Hash functions"],
        correctAnswer: "Simple substitution ciphers (like Caesar)"
    },
    {
        week: 3,
        courseCode: "COM496",
        question: "Examining distances between repeated ciphertext segments is part of which cryptanalysis technique used against Vigenère?",
        options: ["Frequency Analysis", "Brute Force Attack", "Kasiski Test", "Chosen Plaintext Attack"],
        correctAnswer: "Kasiski Test"
    },
    {
        week: 3,
        courseCode: "COM496",
        question: "Why is a 56-bit key (like in DES) considered weak in modern cryptography?",
        options: ["It's too complex to implement.", "It's vulnerable to brute-force attacks with modern computers.", "It only works for text data.", "It requires a public key."],
        correctAnswer: "It's vulnerable to brute-force attacks with modern computers."
    },
    {
        week: 3,
        courseCode: "COM496",
        question: "What is the defining characteristic of Symmetric Encryption?",
        options: ["It uses two different keys: one public, one private.", "It uses the same secret key for both encryption and decryption.", "It is primarily used for digital signatures.", "It is much slower than asymmetric encryption."],
        correctAnswer: "It uses the same secret key for both encryption and decryption."
    },
    {
        week: 3,
        courseCode: "COM496",
        question: "Which type of symmetric cipher encrypts data in fixed-size chunks and is generally considered more secure (e.g., AES)?",
        options: ["Stream Cipher", "Block Cipher", "Caesar Cipher", "Vigenère Cipher"],
        correctAnswer: "Block Cipher"
    },
    {
        week: 3,
        courseCode: "COM496",
        question: "Stream ciphers like RC4 or ChaCha20 are often faster and used in what type of applications?",
        options: ["Disk encryption", "Database security", "Real-time communication (streaming, VoIP)", "Digital signatures"],
        correctAnswer: "Real-time communication (streaming, VoIP)"
    },
    {
        week: 3,
        courseCode: "COM496",
        question: "Why is DES (Data Encryption Standard) considered obsolete and insecure?",
        options: ["It uses asymmetric keys.", "Its 56-bit key size is too small and vulnerable to brute-force attacks.", "It was replaced by the Vigenère cipher.", "It can only encrypt text data."],
        correctAnswer: "Its 56-bit key size is too small and vulnerable to brute-force attacks."
    },
    {
        week: 3,
        courseCode: "COM496",
        question: "Triple DES (3DES) applies the DES algorithm three times primarily to:",
        options: ["Increase encryption speed.", "Overcome the small key size limitation of single DES.", "Enable asymmetric encryption.", "Simplify key management."],
        correctAnswer: "Overcome the small key size limitation of single DES."
    },
    {
        week: 3,
        courseCode: "COM496",
        question: "Which of the following is a modern, widely used symmetric block cipher standard?",
        options: ["DES", "RSA", "RC4", "AES"],
        correctAnswer: "AES"
    },
    {
        week: 3,
        courseCode: "COM496",
        question: "AES (Advanced Encryption Standard) supports which key sizes?",
        options: ["56, 112, 168 bits", "64, 128, 256 bits", "128, 192, 256 bits", "1024, 2048, 4096 bits"],
        correctAnswer: "128, 192, 256 bits"
    },
    {
        week: 3,
        courseCode: "COM496",
        question: "What is the fundamental principle of asymmetric (public-key) cryptography?",
        options: ["Using one shared secret key.", "Using a pair of mathematically related keys: one public, one private.", "Encrypting data bit by bit.", "Relying on substitution boxes (S-Boxes)."],
        correctAnswer: "Using a pair of mathematically related keys: one public, one private."
    },
    {
        week: 3,
        courseCode: "COM496",
        question: "The RSA algorithm's security is based on the difficulty of factoring the product of two large what?",
        options: ["Polynomials", "Elliptic curves", "Prime numbers", "Random numbers"],
        correctAnswer: "Prime numbers"
    },
    {
        week: 3,
        courseCode: "COM496",
        question: "What is the primary benefit of Elliptic Curve Cryptography (ECC) compared to RSA?",
        options: ["It's a symmetric algorithm.", "It offers similar security with much smaller key sizes.", "It's simpler to understand mathematically.", "It's inherently resistant to quantum attacks."],
        correctAnswer: "It offers similar security with much smaller key sizes."
    },
    {
        week: 3,
        courseCode: "COM496",
        question: "To create a digital signature, a sender hashes the message and encrypts the hash using their own:",
        options: ["Public Key", "Private Key", "Symmetric Key", "Receiver's Public Key"],
        correctAnswer: "Private Key"
    },
    {
        week: 3,
        courseCode: "COM496",
        question: "A recipient verifies a digital signature using the sender's:",
        options: ["Public Key", "Private Key", "Shared Secret Key", "Session Key"],
        correctAnswer: "Public Key"
    },
    {
        week: 3,
        courseCode: "COM496",
        question: "RSA and what other algorithm based on elliptic curves are common for digital signatures?",
        options: ["AES", "SHA-256", "ECDSA", "DES"],
        correctAnswer: "ECDSA"
    },
    {
        week: 3,
        courseCode: "COM496",
        question: "In a TLS/SSL handshake, asymmetric cryptography is used to securely establish what?",
        options: ["The identity of the client only", "A shared symmetric secret key for bulk data encryption", "The final encrypted message", "The integrity hash of the website content"],
        correctAnswer: "A shared symmetric secret key for bulk data encryption"
    },
    {
        week: 3,
        courseCode: "COM496",
        question: "Blockchains use hash functions like SHA-256 primarily for ensuring data _____?",
        options: ["Confidentiality", "Availability", "Integrity", "Authenticity"],
        correctAnswer: "Integrity"
    },
    {
        week: 3,
        courseCode: "COM496",
        question: "Which algorithm, runnable on quantum computers, threatens RSA and ECC?",
        options: ["AES Algorithm", "Shor's Algorithm", "Kasiski's Algorithm", "Diffie-Hellman Algorithm"],
        correctAnswer: "Shor's Algorithm"
    },
    {
        week: 3,
        courseCode: "COM496",
        question: "Kyber (Lattice-based) and McEliece (Code-based) are examples of what field of research?",
        options: ["Classical Cryptography", "Symmetric Cryptography", "Quantum Key Distribution (QKD)", "Post-Quantum Cryptography (PQC)"],
        correctAnswer: "Post-Quantum Cryptography (PQC)"
    },

    // --- Week 4: COM496 ---
    {
        week: 4,
        courseCode: "COM496",
        question: "Week 4 covers networking fundamentals (TCP/IP, OSI, Wi-Fi, IP, MQTT) and what related security topics?",
        options: ["Cryptographic algorithms", "Operating system hardening", "Network threats and defenses (Firewalls, IDS/IPS, VPNs, Zero Trust)", "Malware analysis techniques"],
        correctAnswer: "Network threats and defenses (Firewalls, IDS/IPS, VPNs, Zero Trust)"
    },
    {
        week: 4,
        courseCode: "COM496",
        question: "A computer network allows interconnected devices to communicate and share what?",
        options: ["Only physical hardware", "Resources (communication, data, security)", "Only electrical power", "Only operating system licenses"],
        correctAnswer: "Resources (communication, data, security)"
    },
    {
        week: 4,
        courseCode: "COM496",
        question: "Which networking model is considered more practical and is the foundation for the modern internet, consisting of 4 layers?",
        options: ["OSI Model", "TCP/IP Model", "Cisco Hierarchical Model", "Flat Network Model"],
        correctAnswer: "TCP/IP Model"
    },
    {
        week: 4,
        courseCode: "COM496",
        question: "Which model is more theoretical with 7 layers and used for teaching/standardization?",
        options: ["TCP/IP Model", "OSI Model", "Hybrid Model", "Internet Model"],
        correctAnswer: "OSI Model"
    },
    {
        week: 4,
        courseCode: "COM496",
        question: "Which layer in the OSI model is responsible for logical addressing (IP addresses) and routing?",
        options: ["Data Link Layer", "Transport Layer", "Network Layer", "Physical Layer"],
        correctAnswer: "Network Layer"
    },
    {
        week: 4,
        courseCode: "COM496",
        question: "The TCP/IP model has 4 layers. Which layer corresponds roughly to the OSI Transport layer?",
        options: ["Network Access Layer", "Internet Layer", "Transport Layer", "Application Layer"],
        correctAnswer: "Transport Layer"
    },
    {
        week: 4,
        courseCode: "COM496",
        question: "What is a key characteristic of TCP (Transmission Control Protocol)?",
        options: ["It is connectionless and unreliable.", "It guarantees ordered delivery using a 3-way handshake.", "It has a smaller header size than UDP.", "It is primarily used for DNS lookups."],
        correctAnswer: "It guarantees ordered delivery using a 3-way handshake."
    },
    {
        week: 4,
        courseCode: "COM496",
        question: "What process does TCP use to establish a connection before data transfer?",
        options: ["Broadcasting", "Multicasting", "3-way handshake (SYN, SYN-ACK, ACK)", "UDP flood"],
        correctAnswer: "3-way handshake (SYN, SYN-ACK, ACK)"
    },
    {
        week: 4,
        courseCode: "COM496",
        question: "UDP (User Datagram Protocol) is preferred over TCP for applications like streaming and online gaming primarily because:",
        options: ["It ensures every packet arrives correctly.", "It is connection-oriented.", "It is faster due to lower overhead (no handshake, no retransmissions).", "It encrypts data by default."],
        correctAnswer: "It is faster due to lower overhead (no handshake, no retransmissions)."
    },
    {
        week: 4,
        courseCode: "COM496",
        question: "Which Wi-Fi standard (also known as Wi-Fi 6) is among the latest, offering higher speeds and efficiency?",
        options: ["802.11b", "802.11g", "802.11n (Wi-Fi 4)", "802.11ax (Wi-Fi 6)"],
        correctAnswer: "802.11ax (Wi-Fi 6)"
    },
    {
        week: 4,
        courseCode: "COM496",
        question: "Which Wi-Fi encryption standard is considered the strongest and most current?",
        options: ["WEP", "WPA", "WPA2", "WPA3"],
        correctAnswer: "WPA3"
    },
    {
        week: 4,
        courseCode: "COM496",
        question: "Which Wi-Fi encryption protocol is now considered insecure and should not be used?",
        options: ["WPA3", "WPA2", "WPA", "WEP"],
        correctAnswer: "WEP"
    },
    {
        week: 4,
        courseCode: "COM496",
        question: "What is the primary advantage of IPv6 over IPv4?",
        options: ["It is easier to configure manually.", "It uses 32-bit addresses.", "It offers a vastly larger address space, essential for IoT growth.", "It is connection-oriented by default."],
        correctAnswer: "It offers a vastly larger address space, essential for IoT growth."
    },
    {
        week: 4,
        courseCode: "COM496",
        question: "IPv4 uses 32-bit addresses, while IPv6 uses addresses of what size?",
        options: ["48-bit", "64-bit", "128-bit", "256-bit"],
        correctAnswer: "128-bit"
    },
    {
        week: 4,
        courseCode: "COM496",
        question: "What is the purpose of subnetting in IP networking?",
        options: ["To increase the total number of available IP addresses globally.", "To combine multiple small networks into one large network.", "To divide a larger network into smaller, manageable subnetworks for efficiency and organization.", "To automatically assign IP addresses to devices."],
        correctAnswer: "To divide a larger network into smaller, manageable subnetworks for efficiency and organization."
    },
    {
        week: 4,
        courseCode: "COM496",
        question: "In subnetting, how many IP addresses are typically unusable within each subnet because they are reserved for network and broadcast addresses?",
        options: ["0", "1", "2", "4"],
        correctAnswer: "2"
    },
    {
        week: 4,
        courseCode: "COM496",
        question: "MQTT is a lightweight protocol commonly used for:",
        options: ["High-bandwidth video streaming.", "Secure web browsing (HTTPS).", "IoT device communication (Publish/Subscribe model).", "Transferring large files between servers."],
        correctAnswer: "IoT device communication (Publish/Subscribe model)."
    },
    {
        week: 4,
        courseCode: "COM496",
        question: "MQTT uses a publish-subscribe model involving Publishers, Subscribers, and what central component?",
        options: ["Router", "Switch", "Broker", "Gateway"],
        correctAnswer: "Broker"
    },
    {
        week: 4,
        courseCode: "COM496",
        question: "The Equifax and Yahoo breaches are cited as examples highlighting the importance of network security for what purpose?",
        options: ["Improving network speed", "Data Protection and Business Continuity", "Reducing hardware costs", "Simplifying user access"],
        correctAnswer: "Data Protection and Business Continuity"
    },
    {
        week: 4,
        courseCode: "COM496",
        question: "A potential danger or risk to a network is a _____, while a weakness that can be exploited is a _____.",
        options: ["Threat, Vulnerability", "Vulnerability, Threat", "Attack, Risk", "Risk, Attack"],
        correctAnswer: "Threat, Vulnerability"
    },
    {
        week: 4,
        courseCode: "COM496",
        question: "Monitoring network traffic without altering it (e.g., Eavesdropping) is classified as what type of attack?",
        options: ["Active Attack", "Passive Attack", "Denial of Service Attack", "Malware Attack"],
        correctAnswer: "Passive Attack"
    },
    {
        week: 4,
        courseCode: "COM496",
        question: "DNS Spoofing (Cache Poisoning) is an attack designed to:",
        options: ["Overwhelm a DNS server with requests.", "Intercept communication between two parties.", "Redirect users to malicious websites by corrupting DNS records.", "Encrypt DNS traffic."],
        correctAnswer: "Redirect users to malicious websites by corrupting DNS records."
    },
    {
        week: 4,
        courseCode: "COM496",
        question: "Using protocols like HTTPS and VPNs helps prevent which type of active attack?",
        options: ["DoS", "Phishing", "Man-in-the-Middle (MitM)", "Malware infection"],
        correctAnswer: "Man-in-the-Middle (MitM)"
    },
    {
        week: 4,
        courseCode: "COM496",
        question: "Which type of firewall inspects the content of traffic (Deep Packet Inspection) and may include IPS capabilities?",
        options: ["Packet Filtering Firewall", "Stateful Inspection Firewall", "Proxy Firewall", "Next-Generation Firewall (NGFW)"],
        correctAnswer: "Next-Generation Firewall (NGFW)"
    },
    {
        week: 4,
        courseCode: "COM496",
        question: "What is the main difference between an IDS (Intrusion Detection System) and an IPS (Intrusion Prevention System)?",
        options: ["IDS operates at the host level, while IPS operates at the network level.", "IDS only detects and alerts on suspicious activity, while IPS can also block malicious traffic.", "IDS uses signature-based detection, while IPS uses anomaly-based detection.", "IDS is a hardware device, while IPS is software."],
        correctAnswer: "IDS only detects and alerts on suspicious activity, while IPS can also block malicious traffic."
    },
    {
        week: 4,
        courseCode: "COM496",
        question: "A VPN (Virtual Private Network) primarily provides security by:",
        options: ["Filtering malicious websites based on a blacklist.", "Creating an encrypted tunnel for traffic over a public network.", "Detecting and blocking network intrusions in real-time.", "Assigning roles and permissions to network users."],
        correctAnswer: "Creating an encrypted tunnel for traffic over a public network."
    },
    {
        week: 4,
        courseCode: "COM496",
        question: "Which VPN protocol is noted as modern, fast, and generally strong?",
        options: ["PPTP", "L2TP/IPSec", "OpenVPN", "WireGuard"],
        correctAnswer: "WireGuard"
    },
    {
        week: 4,
        courseCode: "COM496",
        question: "The core principle of the Zero Trust security model is:",
        options: ["Trust all internal network traffic by default.", "Focus security efforts only on the network perimeter.", "\"Never trust, always verify\" - require strict verification for every user and device.", "Use VPNs for all network access."],
        correctAnswer: "\"Never trust, always verify\" - require strict verification for every user and device."
    },
    {
        week: 4,
        courseCode: "COM496",
        question: "Wireshark is a popular tool used for:",
        options: ["Vulnerability scanning.", "Intrusion detection and prevention.", "Packet sniffing and network traffic analysis.", "Implementing firewall rules."],
        correctAnswer: "Packet sniffing and network traffic analysis."
    },
    {
        week: 4,
        courseCode: "COM496",
        question: "Snort is mentioned as a tool primarily used for what purpose?",
        options: ["Packet Analysis", "Vulnerability Scanning", "Intrusion Detection/Prevention (IDS/IPS)", "Log Management"],
        correctAnswer: "Intrusion Detection/Prevention (IDS/IPS)"
    },

    // --- Week 6: COM496 ---
    {
        week: 6,
        courseCode: "COM496",
        question: "Week 6 focuses on security aspects of Operating Systems, including user management, filesystem protection, and what other key areas?",
        options: ["Network protocols and routing", "Cryptographic key exchange", "Kernel security, boot integrity, malware mitigations, logging", "Web application firewalls"],
        correctAnswer: "Kernel security, boot integrity, malware mitigations, logging"
    },
    {
        week: 6,
        courseCode: "COM496",
        question: "OS Security involves mechanisms and policies to protect the OS from threats like malware and what else?",
        options: ["Network latency", "Hardware failures", "Unauthorized access, privilege escalation, data breaches", "Application compatibility issues"],
        correctAnswer: "Unauthorized access, privilege escalation, data breaches"
    },
    {
        week: 6,
        courseCode: "COM496",
        question: "Which of the following is NOT a primary goal of Operating System Security?",
        options: ["Confidentiality", "Integrity", "Network Routing Efficiency", "Availability"],
        correctAnswer: "Network Routing Efficiency"
    },
    {
        week: 6,
        courseCode: "COM496",
        question: "A type of malware that hides its presence and aims to gain persistent, high-level (root/admin) access to an OS is called a:",
        options: ["Buffer Overflow", "Worm", "Rootkit", "Phishing Kit"],
        correctAnswer: "Rootkit"
    },
    {
        week: 6,
        courseCode: "COM496",
        question: "Gaining higher privileges on a system by exploiting a software flaw is known as:",
        options: ["Privilege Escalation", "Authentication Bypass", "Denial of Service", "Sandboxing"],
        correctAnswer: "Privilege Escalation"
    },
    {
        week: 6,
        courseCode: "COM496",
        question: "The Blaster Worm exploited what type of vulnerability to execute malicious code?",
        options: ["Weak passwords", "Misconfigured firewall", "Buffer Overflow", "Insecure service configuration"],
        correctAnswer: "Buffer Overflow"
    },
    {
        week: 6,
        courseCode: "COM496",
        question: "Verifying who a user is relates to _____, while determining what they are allowed to do relates to _____.",
        options: ["Authorization, Authentication", "Logging, Auditing", "Authentication, Authorization", "Encryption, Hashing"],
        correctAnswer: "Authentication, Authorization"
    },
    {
        week: 6,
        courseCode: "COM496",
        question: "Assigning permissions based on job functions (roles) rather than individual users is known as:",
        options: ["Discretionary Access Control (DAC)", "Mandatory Access Control (MAC)", "Role-Based Access Control (RBAC)", "Access Control Lists (ACLs)"],
        correctAnswer: "Role-Based Access Control (RBAC)"
    },
    {
        week: 6,
        courseCode: "COM496",
        question: "Linux uses Namespaces and cgroups to enable what technology, exemplified by Docker?",
        options: ["Kernel patching", "Filesystem encryption", "Containerization (process isolation)", "Secure Boot"],
        correctAnswer: "Containerization (process isolation)"
    },
    {
        week: 6,
        courseCode: "COM496",
        question: "Which Linux technology allows for fine-grained control over root privileges, granting specific permissions without giving full root access?",
        options: ["Namespaces", "Cgroups", "Capabilities", "SELinux Policies"],
        correctAnswer: "Capabilities"
    },
    {
        week: 6,
        courseCode: "COM496",
        question: "In Linux, assigning permissions using the `rwx` model for user, group, and others is a form of:",
        options: ["Mandatory Access Control (MAC)", "Discretionary Access Control (DAC)", "Role-Based Access Control (RBAC)", "Capability-Based Security"],
        correctAnswer: "Discretionary Access Control (DAC)"
    },
    {
        week: 6,
        courseCode: "COM496",
        question: "Besides the basic rwx permissions, Linux supports more granular permissions using POSIX _____.",
        options: ["Capabilities", "Quotas", "ACLs (Access Control Lists)", "Namespaces"],
        correctAnswer: "ACLs (Access Control Lists)"
    },
    {
        week: 6,
        courseCode: "COM496",
        question: "What is the purpose of an Encrypting File System (EFS) like Windows EFS or LUKS in Linux?",
        options: ["To protect data while it is being transmitted over the network.", "To protect data at rest by encrypting files or entire disks.", "To verify the integrity of system files during boot.", "To prevent buffer overflow attacks."],
        correctAnswer: "To protect data at rest by encrypting files or entire disks."
    },
    {
        week: 6,
        courseCode: "COM496",
        question: "Windows EFS (Encrypting File System) is integrated with which filesystem and provides file-level encryption based on user certificates?",
        options: ["ext4", "FAT32", "NTFS", "HFS+"],
        correctAnswer: "NTFS"
    },
    {
        week: 6,
        courseCode: "COM496",
        question: "LUKS (Linux Unified Key Setup) is commonly used in Linux for what type of encryption?",
        options: ["Network traffic encryption", "File-level encryption per user", "Full-disk encryption", "Email encryption"],
        correctAnswer: "Full-disk encryption"
    },
    {
        week: 6,
        courseCode: "COM496",
        question: "What is a key difference between LUKS (Linux) and EFS (Windows) as described in the notes?",
        options: ["LUKS is file-level encryption, EFS is full-disk.", "LUKS is typically used for full-disk encryption, while EFS is integrated into NTFS for file/folder-level encryption based on user certificates.", "EFS uses symmetric keys, LUKS uses asymmetric keys.", "Only LUKS supports ACLs."],
        correctAnswer: "LUKS is typically used for full-disk encryption, while EFS is integrated into NTFS for file/folder-level encryption based on user certificates."
    },
    {
        week: 6,
        courseCode: "COM496",
        question: "Running applications in restricted, isolated environments using tools like AppArmor, SELinux, or Docker is known as:",
        options: ["Auditing", "Sandboxing", "Subnetting", "Encrypting"],
        correctAnswer: "Sandboxing"
    },
    {
        week: 6,
        courseCode: "COM496",
        question: "Why might standard file deletion be insufficient for security, necessitating tools like `shred` or `sdelete`?",
        options: ["Standard deletion encrypts the file.", "Standard deletion only removes the pointer, leaving data recoverable.", "Standard deletion sends the file to the OS vendor.", "Standard deletion corrupts the entire disk."],
        correctAnswer: "Standard deletion only removes the pointer, leaving data recoverable."
    },
    {
        week: 6,
        courseCode: "COM496",
        question: "Why is the OS kernel a prime target for attackers?",
        options: ["It runs with low privileges.", "It manages user interface elements.", "It operates with the highest privileges, granting full control if compromised.", "It is rarely updated."],
        correctAnswer: "It operates with the highest privileges, granting full control if compromised."
    },
    {
        week: 6,
        courseCode: "COM496",
        question: "Linux `seccomp` is a mechanism for achieving what security measure?",
        options: ["Encrypting system calls", "Restricting the system calls a process is allowed to make", "Logging all system calls to a remote server", "Hiding system calls from user processes"],
        correctAnswer: "Restricting the system calls a process is allowed to make"
    },
    {
        week: 6,
        courseCode: "COM496",
        question: "SELinux and AppArmor are examples of what type of security mechanism in Linux?",
        options: ["Encrypting File Systems", "Syscall Filtering", "Mandatory Access Control (MAC)", "User Authentication Modules"],
        correctAnswer: "Mandatory Access Control (MAC)"
    },
    {
        week: 6,
        courseCode: "COM496",
        question: "KASLR (Kernel Address Space Layout Randomization) is a kernel hardening technique designed to make what more difficult?",
        options: ["Detecting rootkits", "Exploiting memory corruption vulnerabilities", "Managing file permissions", "Authenticating users"],
        correctAnswer: "Exploiting memory corruption vulnerabilities"
    },
    {
        week: 6,
        courseCode: "COM496",
        question: "Which firmware interface is modern, offers more features, and supports security mechanisms like Secure Boot?",
        options: ["BIOS", "UEFI", "CMOS", "MBR"],
        correctAnswer: "UEFI"
    },
    {
        week: 6,
        courseCode: "COM496",
        question: "The UEFI Secure Boot feature is designed to:",
        options: ["Encrypt the entire hard drive.", "Prevent unauthorized users from logging into the OS.", "Ensure that only trusted, signed bootloaders and OS components are loaded during startup.", "Randomize the memory layout of the kernel."],
        correctAnswer: "Ensure that only trusted, signed bootloaders and OS components are loaded during startup."
    },
    {
        week: 6,
        courseCode: "COM496",
        question: "A TPM (Trusted Platform Module) is primarily a _____ component used for secure key storage and integrity measurements.",
        options: ["Software", "Network", "Hardware", "Firmware"],
        correctAnswer: "Hardware"
    },
    {
        week: 6,
        courseCode: "COM496",
        question: "DEP (Data Execution Prevention) is a security feature that helps mitigate which type of attack?",
        options: ["Phishing attacks", "Denial of Service attacks", "Attacks that attempt to execute malicious code from memory regions marked as non-executable (like the stack or heap).", "Rootkit installation."],
        correctAnswer: "Attacks that attempt to execute malicious code from memory regions marked as non-executable (like the stack or heap)."
    },
    {
        week: 6,
        courseCode: "COM496",
        question: "What is the function of ASLR (Address Space Layout Randomization)?",
        options: ["To prevent code execution in data memory segments.", "To restrict the system calls a process can make.", "To randomize the memory locations of key program areas (stack, heap, libraries) to make exploits harder.", "To check the integrity of kernel modules."],
        correctAnswer: "To randomize the memory locations of key program areas (stack, heap, libraries) to make exploits harder."
    },
    {
        week: 6,
        courseCode: "COM496",
        question: "Why is system logging crucial for security?",
        options: ["It prevents attacks from happening.", "It speeds up system performance.", "It provides data for forensics, troubleshooting, and compliance verification.", "It automatically removes malware."],
        correctAnswer: "It provides data for forensics, troubleshooting, and compliance verification."
    },
    {
        week: 6,
        courseCode: "COM496",
        question: "In Linux, system events are typically logged by which system component?",
        options: ["auditd", "journald (part of systemd) or syslog", "AppArmor", "seccomp"],
        correctAnswer: "journald (part of systemd) or syslog"
    },
    {
        week: 6,
        courseCode: "COM496",
        question: "In Windows, system events related to security, applications, etc., are typically viewed using which tool?",
        options: ["Task Manager", "Registry Editor", "Event Viewer", "System Configuration (msconfig)"],
        correctAnswer: "Event Viewer"
    },
    {
        week: 6,
        courseCode: "COM496",
        question: "What is the primary purpose of using auditing frameworks like `auditd` (Linux) or Windows Security Auditing?",
        options: ["To encrypt system logs.", "To automatically fix security vulnerabilities.", "To record detailed information about security-relevant events for analysis and compliance.", "To prevent malware execution in real-time."],
        correctAnswer: "To record detailed information about security-relevant events for analysis and compliance."
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