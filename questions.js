// Note: Ensure the 'correctAnswer' exactly matches one of the options strings.
// IMPORTANT: Added 'courseCode' to all questions.
const allQuestions = [
    // --- Week 1: COM496 ---

        {
            "week": 1,
            "courseCode": "COM496",
            "question": "What does the \"Confidentiality\" aspect of the CIA Triad focus on?",
            "options": ["Ensuring systems are always operational", "Preventing unauthorized access to data", "Allowing public access to networks", "Detecting network attacks", "Making backups of critical files"],
            "correctAnswer": "Preventing unauthorized access to data"
        },
        {
            "week": 4,
            "courseCode": "COM496",
            "question": "Which of the following is a passive attack?",
            "options": ["Ransomware", "Man-in-the-Middle attack", "Session hijacking", "Traffic analysis", "DNS spoofing"],
            "correctAnswer": "Traffic analysis"
        },
        {
            "week": 2,
            "courseCode": "COM496",
            "question": "What is the main goal of a DDoS attack?",
            "options": ["Steal credentials", "Encrypt files", "Gain remote access", "Take down a system or service", "Alter configuration settings"],
            "correctAnswer": "Take down a system or service"
        },
        {
            "week": 4,
            "courseCode": "COM496",
            "question": "Which of the following best defines a vulnerability?",
            "options": ["An action taken to harm a system", "An unauthorized access", "A weakness that can be exploited", "A malicious software", "A failed login attempt"],
            "correctAnswer": "A weakness that can be exploited"
        },
        {
            "week": 4,
            "courseCode": "COM496",
            "question": "Which security measure helps protect against Man-in-the-Middle attacks?",
            "options": ["Open Wi-Fi networks", "Weak encryption", "VPN usage", "Unpatched software", "Default passwords"],
            "correctAnswer": "VPN usage"
        },
        {
            "week": 2,
            "courseCode": "COM496",
            "question": "Which of the following is NOT a method of phishing?",
            "options": ["Email Phishing", "Vishing", "Smishing", "Sniffing", "Spear Phishing"],
            "correctAnswer": "Sniffing"
        },
        {
            "week": 4,
            "courseCode": "COM496",
            "question": "What does ARP Poisoning do?",
            "options": ["Encrypts your files", "Logs your keystrokes", "Maps MAC addresses incorrectly", "Sends spam emails", "Blocks internet access"],
            "correctAnswer": "Maps MAC addresses incorrectly"
        },
        {
            "week": 2,
            "courseCode": "COM496",
            "question": "A worm is different from a virus because it:",
            "options": ["Requires user interaction to spread", "Targets only email systems", "Replicates itself without user action", "Disguises as legitimate software", "Does not harm the host system"],
            "correctAnswer": "Replicates itself without user action"
        },
        {
            "week": 4,
            "courseCode": "COM496",
            "question": "Which of the following attacks involves manipulating DNS records?",
            "options": ["ARP Poisoning", "SQL Injection", "DNS Spoofing", "Buffer Overflow", "Brute Force Attack"],
            "correctAnswer": "DNS Spoofing"
        },
        {
            "week": 1,
            "courseCode": "COM496",
            "question": "What is the primary goal of \"Availability\" in the CIA triad?",
            "options": ["Preventing unauthorized access", "Keeping data unchanged", "Ensuring system uptime and access", "Encrypting sensitive files", "Blocking unknown IPs"],
            "correctAnswer": "Ensuring system uptime and access"
        },
        {
            "week": 2,
            "courseCode": "COM496",
            "question": "Which of the following tools helps prevent spyware?",
            "options": ["VPN", "Keylogger", "Anti-spyware software", "Wireshark", "Port scanner"],
            "correctAnswer": "Anti-spyware software"
        },
        {
            "week": 2,
            "courseCode": "COM496",
            "question": "A Trojan is:",
            "options": ["A self-replicating malware", "Legitimate software with hidden malicious code", "Used in passive attacks only", "Only active during boot time", "A hardware-level threat"],
            "correctAnswer": "Legitimate software with hidden malicious code"
        },
        {
            "week": 2,
            "courseCode": "COM496",
            "question": "What is the most effective way to protect against phishing attacks?",
            "options": ["Using older versions of browsers", "Avoiding all email communication", "User awareness training", "Turning off antivirus software", "Disabling firewalls"],
            "correctAnswer": "User awareness training"
        },
        {
            "week": 2,
            "courseCode": "COM496",
            "question": "What kind of attack is SYN flooding?",
            "options": ["Passive attack", "ARP spoofing", "Phishing", "DoS attack", "Malware infection"],
            "correctAnswer": "DoS attack"
        },
        {
            "week": 2,
            "courseCode": "COM496",
            "question": "Which of the following would most likely be used in a Spear Phishing attack?",
            "options": ["Random spam to all users", "Targeted email with personal information", "Encrypted messages", "Automated password guessing", "DNS redirection"],
            "correctAnswer": "Targeted email with personal information"
        },
        {
            "week": 3,
            "courseCode": "COM496",
            "question": "Which of the following helps ensure data integrity?",
            "options": ["Encryption", "Firewalls", "Checksums and digital signatures", "VPNs", "DNSSEC"],
            "correctAnswer": "Checksums and digital signatures"
        },
        {
            "week": 2,
            "courseCode": "COM496",
            "question": "Which type of malware is designed to secretly collect user information?",
            "options": ["Worm", "Ransomware", "Trojan", "Spyware", "Rootkit"],
            "correctAnswer": "Spyware"
        },
        {
            "week": 4,
            "courseCode": "COM496",
            "question": "What is the purpose of DNSSEC?",
            "options": ["Encrypt web traffic", "Filter spam emails", "Authenticate DNS responses", "Monitor system logs", "Increase browsing speed"],
            "correctAnswer": "Authenticate DNS responses"
        },
        {
            "week": 4,
            "courseCode": "COM496",
            "question": "Which of the following is a common DDoS mitigation technique?",
            "options": ["Weak password enforcement", "Traffic filtering", "Using public Wi-Fi", "Disabling firewalls", "Ignoring suspicious traffic"],
            "correctAnswer": "Traffic filtering"
        },
        {
            "week": 4,
            "courseCode": "COM496",
            "question": "Which of the following would be considered an active attack?",
            "options": ["Network sniffing", "Reading encrypted emails", "Modifying transmitted data", "Analyzing packet headers", "Observing login attempts"],
            "correctAnswer": "Modifying transmitted data"
        },
        {
            "week": 6,
            "courseCode": "COM496",
            "question": "What is the primary purpose of operating system (OS) security?",
            "options": ["Increasing GUI performance", "Supporting gaming applications", "Protecting system resources and data", "Compressing system files", "Updating application software"],
            "correctAnswer": "Protecting system resources and data"
        },
        {
            "week": 1,
            "courseCode": "COM496",
            "question": "Which of the following is not part of the CIA triad?",
            "options": ["Confidentiality", "Integrity", "Availability", "Accountability", "All are part of the CIA triad"],
            "correctAnswer": "Accountability"
        },
        {
            "week": 6,
            "courseCode": "COM496",
            "question": "Why is the operating system considered the foundation of system security?",
            "options": ["It controls the system's graphical user interface", "It provides entertainment software", "It manages low-level hardware and all access control", "It improves battery life", "It boosts internet speed"],
            "correctAnswer": "It manages low-level hardware and all access control"
        },
        {
            "week": 6,
            "courseCode": "COM496",
            "question": "Which component is responsible for verifying user identity?",
            "options": ["File system", "Authorization", "Authentication", "Kernel", "Scheduler"],
            "correctAnswer": "Authentication"
        },
        {
            "week": 6,
            "courseCode": "COM496",
            "question": "What does Role-Based Access Control (RBAC) assign permissions based on?",
            "options": ["File extensions", "User names", "User roles", "Process IDs", "IP addresses"],
            "correctAnswer": "User roles"
        },
        {
            "week": 6,
            "courseCode": "COM496",
            "question": "What is privilege separation?",
            "options": ["Assigning all users the same access level", "Running all processes with root privileges", "Running processes with the least required privileges", "Allowing shared admin passwords", "Preventing file execution"],
            "correctAnswer": "Running processes with the least required privileges"
        },
        {
            "week": 6,
            "courseCode": "COM496",
            "question": "In Linux, which file is often misconfigured and can lead to privilege escalation?",
            "options": ["/etc/fstab", "/etc/hosts", "/etc/passwd", "/etc/sudoers", "/etc/group"],
            "correctAnswer": "/etc/sudoers"
        },
        {
            "week": 6,
            "courseCode": "COM496",
            "question": "What is the main security purpose of file permissions in an OS?",
            "options": ["Compress files", "Speed up access", "Restrict unauthorized access", "Encrypt files", "Enable faster booting"],
            "correctAnswer": "Restrict unauthorized access"
        },
        {
            "week": 6,
            "courseCode": "COM496",
            "question": "What distinguishes Access Control Lists (ACLs) from traditional Unix file permissions?",
            "options": ["ACLs are less secure", "ACLs allow more fine-grained access control", "ACLs only work on FAT32", "ACLs are not compatible with Windows", "ACLs require admin login"],
            "correctAnswer": "ACLs allow more fine-grained access control"
        },
        {
            "week": 6,
            "courseCode": "COM496",
            "question": "Which of the following is a file encryption method used by Linux?",
            "options": ["BitLocker", "LUKS", "EFS", "TPM", "NTFS"],
            "correctAnswer": "LUKS"
        },
        {
            "week": 6,
            "courseCode": "COM496",
            "question": "What does \"sandboxing\" refer to in OS security?",
            "options": ["Cleaning up logs", "Blocking all user access", "Isolating applications to limit damage", "Encrypting file systems", "Deleting temporary files"],
            "correctAnswer": "Isolating applications to limit damage"
        },
        {
            "week": 6,
            "courseCode": "COM496",
            "question": "Which kernel security tool in Linux allows filtering of system calls?",
            "options": ["journalctl", "SELinux", "seccomp", "sudo", "auditd"],
            "correctAnswer": "seccomp"
        },
        {
            "week": 6,
            "courseCode": "COM496",
            "question": "What is the main threat of a kernel-level rootkit?",
            "options": ["Spamming emails", "Slowing down boot time", "Gaining undetected high-level control over the OS", "Encrypting user documents", "Opening too many browser tabs"],
            "correctAnswer": "Gaining undetected high-level control over the OS"
        },
        {
            "week": 6,
            "courseCode": "COM496",
            "question": "What is KASLR designed to do?",
            "options": ["Prevent password reuse", "Randomize memory addresses to prevent exploits", "Encrypt hard disks", "Monitor disk usage", "Stop bootloader manipulation"],
            "correctAnswer": "Randomize memory addresses to prevent exploits"
        },
        {
            "week": 6,
            "courseCode": "COM496",
            "question": "What is the role of Secure Boot in OS security?",
            "options": ["Enables fast startup", "Prevents unsigned code from executing at boot", "Reduces RAM usage", "Encrypts user folders", "Disables USB ports"],
            "correctAnswer": "Prevents unsigned code from executing at boot"
        },
        {
            "week": 6,
            "courseCode": "COM496",
            "question": "What does TPM stand for in system security?",
            "options": ["Trusted Peripheral Manager", "Temporary Partition Management", "Trusted Platform Module", "Terminal Process Monitor", "Test Protection Method"],
            "correctAnswer": "Trusted Platform Module"
        },
        {
            "week": 6,
            "courseCode": "COM496",
            "question": "Which attack was one of the first to exploit OS kernel vulnerabilities via USB?",
            "options": ["WannaCry", "Zeus", "Stuxnet", "NotPetya", "Flame"],
            "correctAnswer": "Stuxnet"
        },
        {
            "week": 6,
            "courseCode": "COM496",
            "question": "Which OS feature helps protect against buffer overflow attacks?",
            "options": ["File ACLs", "Kernel modules", "DEP (Data Execution Prevention)", "Shell scripting", "DNSSEC"],
            "correctAnswer": "DEP (Data Execution Prevention)"
        },
        {
            "week": 6,
            "courseCode": "COM496",
            "question": "What is the main goal of control-flow integrity (CFI)?",
            "options": ["Encrypt all logs", "Ensure the program executes as intended", "Monitor open ports", "Allow user tracking", "Limit file size"],
            "correctAnswer": "Ensure the program executes as intended"
        },
        {
            "week": 6,
            "courseCode": "COM496",
            "question": "Which of the following tools is used in Linux for audit logging?",
            "options": ["Event Viewer", "sysmon", "auditd", "netcat", "bash"],
            "correctAnswer": "auditd"
        },
        {
            "week": 4,
            "courseCode": "COM496",
            "question": "What is the typical structure of a modern web application?",
            "options": ["Single-layer with no database", "Browser -> DNS -> Server only", "Client -> Server -> Database", "API -> DNS -> IoT", "UI -> GPU -> CPU"],
            "correctAnswer": "Client -> Server -> Database"
        },
        {
            "week": 2,
            "courseCode": "COM496",
            "question": "Which of the following is not part of the OWASP Top 10 (2021)?",
            "options": ["Injection", "Broken Access Control", "Insecure Design", "Weak Network Signal", "Security Logging & Monitoring Failures"],
            "correctAnswer": "Weak Network Signal"
        },
        {
            "week": 2,
            "courseCode": "COM496",
            "question": "What makes SQL Injection dangerous?",
            "options": ["It modifies CSS files", "It can allow attackers to execute arbitrary SQL commands", "It only affects the login screen", "It helps optimize database queries", "It slows down the server"],
            "correctAnswer": "It can allow attackers to execute arbitrary SQL commands"
        },
        {
            "week": 2,
            "courseCode": "COM496",
            "question": "What is a common example of a SQL Injection attack?",
            "options": ["alert('XSS')", "../../etc/passwd", "' OR '1'='1", "<script>console.log</script>", "curl -X POST"],
            "correctAnswer": "' OR '1'='1"
        },
        {
            "week": 2,
            "courseCode": "COM496",
            "question": "What technique can prevent SQL Injection attacks?",
            "options": ["Disabling cookies", "Using GET requests", "Prepared statements (parameterized queries)", "Encrypting CSS files", "Increasing server timeout"],
            "correctAnswer": "Prepared statements (parameterized queries)"
        },
        {
            "week": 2,
            "courseCode": "COM496",
            "question": "What is a common sign of a successful login bypass via SQLi?",
            "options": ["404 Error", "Admin panel access without credentials", "CSS not loading", "Image download starts", "Server shutdown"],
            "correctAnswer": "Admin panel access without credentials"
        },
        {
            "week": 2,
            "courseCode": "COM496",
            "question": "What does XSS stand for?",
            "options": ["Cross Site Structure", "Extra Secure Session", "Cross Site Scripting", "XML Secure Syntax", "Execute Secure String"],
            "correctAnswer": "Cross Site Scripting"
        },
        {
            "week": 2,
            "courseCode": "COM496",
            "question": "Which type of XSS is stored in a database and served to multiple users?",
            "options": ["Reflected", "Stored", "DOM-based", "Inline", "Remote"],
            "correctAnswer": "Stored"
        },
        {
            "week": 2,
            "courseCode": "COM496",
            "question": "What is the primary risk of XSS attacks?",
            "options": ["Data deletion", "Server crash", "Stealing user session data or cookies", "Changing font size", "Uploading files"],
            "correctAnswer": "Stealing user session data or cookies"
        },
        {
            "week": 2,
            "courseCode": "COM496",
            "question": "What is a good defense mechanism against XSS?",
            "options": ["Input compression", "Token-based authentication", "Output encoding and Content Security Policy (CSP)", "Using a VPN", "Rate limiting"],
            "correctAnswer": "Output encoding and Content Security Policy (CSP)"
        },
        {
            "week": 2,
            "courseCode": "COM496",
            "question": "What is the purpose of CSRF attacks?",
            "options": ["To flood the network", "To steal the admin password", "To trick a logged-in user into performing unwanted actions", "To encrypt user files", "To modify HTTP headers"],
            "correctAnswer": "To trick a logged-in user into performing unwanted actions"
        },
        {
            "week": 2,
            "courseCode": "COM496",
            "question": "Which of the following is a proper CSRF prevention method?",
            "options": ["CAPTCHA", "JSON parsing", "CSRF token in forms", "File hashing", "URL redirection"],
            "correctAnswer": "CSRF token in forms"
        },
        {
            "week": 2,
            "courseCode": "COM496",
            "question": "What's a key difference between CSRF and XSS?",
            "options": ["XSS targets servers; CSRF targets clients", "CSRF requires no code injection", "XSS can't steal cookies", "CSRF is a server misconfiguration", "Both are unrelated to authentication"],
            "correctAnswer": "CSRF requires no code injection"
        },
        {
            "week": 2,
            "courseCode": "COM496",
            "question": "What risk is associated with allowing unrestricted file uploads?",
            "options": ["CSS overwrite", "SQL injection", "Remote code execution", "Cookie deletion", "Password reuse"],
            "correctAnswer": "Remote code execution"
        },
        {
            "week": 2,
            "courseCode": "COM496",
            "question": "How can command injection vulnerabilities be exploited?",
            "options": ["By using <iframe> tags", "By changing DNS records", "By passing malicious input to system calls", "By using HTTPS", "By brute-force login"],
            "correctAnswer": "By passing malicious input to system calls"
        },
        {
            "week": 2,
            "courseCode": "COM496",
            "question": "Which of the following is a common payload in command injection?",
            "options": ["<script>alert(1)</script>", "' OR '1'='1", "; rm -rf /", "csrf_token=123", "window.location.href"],
            "correctAnswer": "; rm -rf /"
        },
        {
            "week": 2,
            "courseCode": "COM496",
            "question": "What principle helps avoid many coding-related vulnerabilities?",
            "options": ["Use only GET requests", "Obfuscate all HTML", "Input validation and output encoding", "Use large font size", "Run as root"],
            "correctAnswer": "Input validation and output encoding"
        },
        {
            "week": 2,
            "courseCode": "COM496",
            "question": "What are OWASP Secure Coding Guidelines designed to do?",
            "options": ["Speed up JavaScript performance", "Protect server room access", "Prevent common coding errors that lead to security flaws", "Encrypt URLs", "Hide source code"],
            "correctAnswer": "Prevent common coding errors that lead to security flaws"
        },
        {
            "week": 4,
            "courseCode": "COM496",
            "question": "Which tool is commonly used to detect vulnerabilities in web applications?",
            "options": ["Wireshark", "Metasploit", "OWASP ZAP", "Excel", "WinRAR"],
            "correctAnswer": "OWASP ZAP"
        },
        {
            "week": 2,
            "courseCode": "COM496",
            "question": "What is DVWA mainly used for?",
            "options": ["Database replication", "Virtual server hosting", "Practicing web application security testing", "Monitoring HTTP traffic", "Encrypting file systems"],
            "correctAnswer": "Practicing web application security testing"
        },
        {
            "week": 4,
            "courseCode": "COM496",
            "question": "What is the main function of a firewall?",
            "options": ["Encrypt data for secure communication", "Monitor and control network traffic based on rules", "Analyze software bugs in applications", "Scan for physical hardware vulnerabilities", "Log keyboard inputs"],
            "correctAnswer": "Monitor and control network traffic based on rules"
        },
        {
            "week": 4,
            "courseCode": "COM496",
            "question": "Which of the following is an example of endpoint protection?",
            "options": ["Intrusion Prevention System (IPS)", "NAT Gateway", "Antivirus on a workstation", "Load balancer", "DNS resolver"],
            "correctAnswer": "Antivirus on a workstation"
        },
        {
            "week": 4,
            "courseCode": "COM496",
            "question": "What type of firewall monitors the state of active connections?",
            "options": ["Packet Filtering Firewall", "Proxy Firewall", "Stateful Inspection Firewall", "NGFW", "DNS Firewall"],
            "correctAnswer": "Stateful Inspection Firewall"
        },
        {
            "week": 4,
            "courseCode": "COM496",
            "question": "In IDS, which technique compares network activity to known attack patterns?",
            "options": ["AI-based detection", "Behavior modeling", "Signature-based detection", "Zero-Trust filtering", "Deep learning"],
            "correctAnswer": "Signature-based detection"
        },
        {
            "week": 2,
            "courseCode": "COM496",
            "question": "Which attack floods a network with traffic to make services unavailable?",
            "options": ["SQL Injection", "ARP Spoofing", "XSS", "DDoS", "Clickjacking"],
            "correctAnswer": "DDoS"
        },
        {
            "week": 4,
            "courseCode": "COM496",
            "question": "What protocol is considered obsolete due to weak encryption?",
            "options": ["WireGuard", "L2TP/IPSec", "OpenVPN", "PPTP", "TLS 1.3"],
            "correctAnswer": "PPTP"
        },
        {
            "week": 4,
            "courseCode": "COM496",
            "question": "Which of the following best describes a Zero Trust security model?",
            "options": ["All internal users are trusted by default", "Trust only internal IP addresses", "Trust external traffic with proper headers", "Never trust, always verify", "Trust after one-time authentication"],
            "correctAnswer": "Never trust, always verify"
        },
        {
            "week": 2,
            "courseCode": "COM496",
            "question": "Which example is a real-world breach involving third-party vendor access?",
            "options": ["Yahoo 2014", "Target 2013", "Dyn DNS Attack", "Colonial Pipeline", "SolarWinds"],
            "correctAnswer": "Target 2013"
        },
        {
            "week": 4,
            "courseCode": "COM496",
            "question": "What is the role of VPN tunneling protocols?",
            "options": ["Track user activity", "Open ports for remote access", "Create encrypted channels for traffic", "Block access to unsafe URLs", "Install antivirus remotely"],
            "correctAnswer": "Create encrypted channels for traffic"
        },
        {
            "week": 4,
            "courseCode": "COM496",
            "question": "Which type of IDS is installed on individual hosts?",
            "options": ["NIDS", "DLP", "IPS", "HIDS", "NGFW"],
            "correctAnswer": "HIDS"
        },
        {
            "week": 4,
            "courseCode": "COM496",
            "question": "Which firewall type can perform deep packet inspection (DPI)?",
            "options": ["Packet Filtering", "Stateful Inspection", "Next-Generation Firewall", "DNS Firewall", "Reverse Proxy"],
            "correctAnswer": "Next-Generation Firewall"
        },
        {
            "week": 4,
            "courseCode": "COM496",
            "question": "What is a primary advantage of a proxy firewall?",
            "options": ["Automatically blocks all HTTP traffic", "Offers user anonymity and content filtering", "Increases internal LAN speed", "Encrypts packets using VPN", "Requires no configuration"],
            "correctAnswer": "Offers user anonymity and content filtering"
        },
        {
            "week": 4,
            "courseCode": "COM496",
            "question": "Which VPN protocol is open-source and supports strong encryption?",
            "options": ["L2TP", "PPTP", "WireGuard", "IPSec", "OpenVPN"],
            "correctAnswer": "OpenVPN"
        },
        {
            "week": 4,
            "courseCode": "COM496",
            "question": "What is the purpose of segmentation in network security?",
            "options": ["Improve file compression", "Reduce CPU temperature", "Limit attacker movement within a network", "Block outgoing email", "Increase DNS resolution speed"],
            "correctAnswer": "Limit attacker movement within a network"
        },
        {
            "week": 4,
            "courseCode": "COM496",
            "question": "What is one key difference between IDS and IPS?",
            "options": ["IDS actively blocks threats", "IPS can only log events", "IDS detects; IPS detects and blocks", "IDS operates inline", "IPS cannot detect new threats"],
            "correctAnswer": "IDS detects; IPS detects and blocks"
        },
        {
            "week": 3,
            "courseCode": "COM496",
            "question": "Which encryption algorithm is used by OpenVPN for high security?",
            "options": ["DES", "AES-256", "MD5", "RC4", "Base64"],
            "correctAnswer": "AES-256"
        },
        {
            "week": 4,
            "courseCode": "COM496",
            "question": "What real-time action can an IPS take?",
            "options": ["Generate monthly audit reports", "Modify configuration files", "Block malicious packets immediately", "Send firewall logs to the admin", "Encrypt backup files"],
            "correctAnswer": "Block malicious packets immediately"
        },
        {
            "week": 4,
            "courseCode": "COM496",
            "question": "Which of the following is a layer of defense focusing on device-level protection?",
            "options": ["DNS Security", "Access Control", "Endpoint Protection", "SIEM Integration", "IDS Sensor"],
            "correctAnswer": "Endpoint Protection"
        },
        {
            "week": 2,
            "courseCode": "COM496",
            "question": "What is the core principle of MFA (Multi-Factor Authentication)?",
            "options": ["Trust once, verify later", "Only ask for a password", "Require multiple forms of identity verification", "Use a single shared key for all users", "Encrypt browser cookies"],
            "correctAnswer": "Require multiple forms of identity verification"
        },
        {
            "week": 4,
            "courseCode": "COM496",
            "question": "What tool can be used to analyze network traffic for learning or threat detection?",
            "options": ["WordPress", "GitHub", "Wireshark", "Adobe Acrobat", "Oracle"],
            "correctAnswer": "Wireshark"
        },
        {
            "week": 1,
            "courseCode": "COM496",
            "question": "What is the primary goal of penetration testing?",
            "options": ["To permanently disable a target system", "To develop new malware", "To test password strength only", "To find and exploit security weaknesses", "To train system users"],
            "correctAnswer": "To find and exploit security weaknesses"
        },
        {
            "week": 1,
            "courseCode": "COM496",
            "question": "Which of the following best describes a Black-box penetration test?",
            "options": ["The tester has full knowledge of the system", "The tester has partial knowledge", "The tester has no prior knowledge of the system", "The test is conducted internally", "The test is only for physical security"],
            "correctAnswer": "The tester has no prior knowledge of the system"
        },
        {
            "week": 1,
            "courseCode": "COM496",
            "question": "Which tool is commonly used for passive information gathering?",
            "options": ["Burp Suite", "Nessus", "Nmap", "Shodan", "Nikto"],
            "correctAnswer": "Shodan"
        },
        {
            "week": 1,
            "courseCode": "COM496",
            "question": "What is the final stage of the Penetration Testing Execution Standard (PTES)?",
            "options": ["Intelligence Gathering", "Exploitation", "Post-Exploitation", "Reporting", "Threat Modeling"],
            "correctAnswer": "Reporting"
        },
        {
            "week": 1,
            "courseCode": "COM496",
            "question": "What is the main difference between vulnerability scanning and penetration testing?",
            "options": ["Scanning includes exploiting vulnerabilities", "Pentesting is fully automated", "Scanning focuses on social engineering", "Pentesting involves exploitation attempts", "Scanning takes longer than pentesting"],
            "correctAnswer": "Pentesting involves exploitation attempts"
        },
        {
            "week": 2,
            "courseCode": "COM496",
            "question": "Which of the following is an example of a command injection vulnerability?",
            "options": ["<script>alert('XSS')</script>", "' OR 1-1--", "; rm -rf /", "admin@example.com", "192.168.1.1:80"],
            "correctAnswer": "; rm -rf /"
        },
        {
            "week": 1,
            "courseCode": "COM496",
            "question": "What is the role of ethical hackers in cybersecurity?",
            "options": ["Developing zero-day exploits for black markets", "Breaking into systems for fame", "Testing systems legally to find vulnerabilities", "Selling user data for analysis", "Avoiding detection in network traffic"],
            "correctAnswer": "Testing systems legally to find vulnerabilities"
        },
        {
            "week": 4,
            "courseCode": "COM496",
            "question": "Which of the following tools is best suited for web vulnerability scanning?",
            "options": ["OpenVAS", "Metasploit", "Burp Suite", "Shodan", "Whois"],
            "correctAnswer": "Burp Suite"
        },
        {
            "week": 1,
            "courseCode": "COM496",
            "question": "In a grey-box test, the penetration tester has:",
            "options": ["No information at all", "Administrator access", "Full source code access", "Limited internal knowledge", "External user credentials"],
            "correctAnswer": "Limited internal knowledge"
        },
        {
            "week": 1,
            "courseCode": "COM496",
            "question": "Which legal document is crucial before beginning any penetration test?",
            "options": ["Rootkit agreement", "Terms of privacy", "Code of conduct", "Non-disclosure agreement (NDA)", "Rules of engagement"],
            "correctAnswer": "Rules of engagement"
        },
        {
            "week": 4,
            "courseCode": "COM496",
            "question": "Which tool is typically used to identify open ports on a target?",
            "options": ["Metasploit", "NSLookup", "Nessus", "Nmap", "Burp Suite"],
            "correctAnswer": "Nmap"
        },
        {
            "week": 1,
            "courseCode": "COM496",
            "question": "What technique is used to move from one compromised machine to another?",
            "options": ["Enumeration", "Pivoting", "Fuzzing", "Spoofing", "Sniffing"],
            "correctAnswer": "Pivoting"
        },
        {
            "week": 2,
            "courseCode": "COM496",
            "question": "Which attack manipulates SQL queries through user input?",
            "options": ["Cross-Site Request Forgery (CSRF)", "Command Injection", "SQL Injection", "Cross-Site Scripting (XSS)", "Brute Force"],
            "correctAnswer": "SQL Injection"
        },
        {
            "week": 1,
            "courseCode": "COM496",
            "question": "What is the main purpose of post-exploitation?",
            "options": ["Scan other networks", "Bypass login forms", "Escalate local privileges", "Steal credentials", "Maintain access or gather information"],
            "correctAnswer": "Maintain access or gather information"
        },
        {
            "week": 1,
            "courseCode": "COM496",
            "question": "Which of the following is considered an internal penetration test?",
            "options": ["Social engineering of remote employees", "Phishing from a third-party domain", "Attacking the organization from the internet", "Testing network access from within the company", "DNS poisoning from outside the firewall"],
            "correctAnswer": "Testing network access from within the company"
        },
        {
            "week": 4,
            "courseCode": "COM496",
            "question": "Which protocol-related vulnerability is typically found in wireless penetration testing?",
            "options": ["SMB enumeration", "WPA2 handshake cracking", "SQL injection", "SNMP community string brute force", "LDAP injection"],
            "correctAnswer": "WPA2 handshake cracking"
        },
        {
            "week": 6,
            "courseCode": "COM496",
            "question": "What is a common technique for privilege escalation in Windows?",
            "options": ["Setuid binary abuse", "sudo misconfiguration", "Unquoted service path", "SSH key harvesting", "Crontab injection"],
            "correctAnswer": "Unquoted service path"
        },
        {
            "week": 1,
            "courseCode": "COM496",
            "question": "Which tool allows link analysis and visualization for social engineering?",
            "options": ["Nessus", "Nikto", "Recon-ng", "Maltego", "John the Ripper"],
            "correctAnswer": "Maltego"
        },
        {
            "week": 1,
            "courseCode": "COM496",
            "question": "What should NOT be included in a professional pentest report?",
            "options": ["Executive summary", "Risk ratings", "Exploitation logs", "Personal opinions and assumptions", "Proof of concept"],
            "correctAnswer": "Personal opinions and assumptions"
        },
        {
            "week": 1,
            "courseCode": "COM496",
            "question": "What is the purpose of threat modeling in the pentesting lifecycle?",
            "options": ["To simulate malware", "To assign tasks to testers", "To understand assets and attack surfaces", "To write reports", "To test user awareness"],
            "correctAnswer": "To understand assets and attack surfaces"
        },


    // --- Entrepreneurship (GRI403) ---
    // --- Week 1: GRI403 ---


    {
        "week": "1-5",
        "courseCode": "GRI403",
        "question": "Which one below is NOT the common characteristic of a successful entrepreneur?",
        "options": [
            "A successful entrepreneur is a person who runs the risk of acceptable ones.",
            "A successful entrepreneur is determined.",
            "A successful entrepreneur is creative.",
            "A successful entrepreneur is a person who applies the decisions of the proprietor (employer), finely.",
            "A successful entrepreneur is the one who uses his/her imagination (vision)."
        ],
        "correctAnswer": "A successful entrepreneur is a person who applies the decisions of the proprietor (employer), finely."
    },
    {
        "week": "1-5",
        "courseCode": "GRI403",
        "question": "Which one below is NOT a kind of entrepreneurship?",
        "options": [
            "Intrapreneurship",
            "Women entrepreneurship",
            "Public entrepreneurship",
            "Private enterprise system",
            "Men entrepreneurship"
        ],
        "correctAnswer": "Men entrepreneurship"
    },
    {
        "week": "1-5",
        "courseCode": "GRI403",
        "question": "Which one below is NOT one of the basic concepts of entrepreneurship?",
        "options": [
            "Creativity",
            "Ordinariness/Mediocrity",
            "Innovativeness",
            "Risk-taking",
            "Opportunity"
        ],
        "correctAnswer": "Ordinariness/Mediocrity"
    },
    {
        "week": "1-5",
        "courseCode": "GRI403",
        "question": "______ is defined as an occurance of an unwanted and probable damage or loss situation. Which one below complete the sentence?",
        "options": [
            "Risk",
            "Threat",
            "Uncertainty",
            "Enterpreneur",
            "Enterprise/Attempt"
        ],
        "correctAnswer": "Risk"
    },
    {
        "week": "1-5",
        "courseCode": "GRI403",
        "question": "______ balances the needs and potentials coherently by correct detection of the society needs. Which one below complete the sentence?",
        "options": [
            "Total quality management",
            "Lean management",
            "Entrepreneurship",
            "Management",
            "None"
        ],
        "correctAnswer": "Entrepreneurship"
    },
    {
        "week": "1-5",
        "courseCode": "GRI403",
        "question": "Which one below is one of the factors of production?",
        "options": [
            "Manager",
            "Entrepreneur",
            "Business Administrator",
            "Initiative",
            "Business Firm"
        ],
        "correctAnswer": "Entrepreneur"
    },
    {
        "week": "1-5",
        "courseCode": "GRI403",
        "question": "Which one below is an operation of a new idea, an invention or an existing product putting on the market in a profitable way?",
        "options": [
            "Making investment",
            "Opportunity Entrepreneurship",
            "Creative Entrepreneurship",
            "Initiative Entrepreneurship",
            "Establishing a new firm"
        ],
        "correctAnswer": "Creative Entrepreneurship"
    },
    {
        "week": "1-5",
        "courseCode": "GRI403",
        "question": "Which one does NOT agree with entrepreneurship?",
        "options": [
            "Establishing a new firm",
            "Procuring capital",
            "Innovation and Creativity",
            "Making Oppurtunity",
            "Bound to the old"
        ],
        "correctAnswer": "Bound to the old"
    },
    {
        "week": "1-5",
        "courseCode": "GRI403",
        "question": "Which one is NOT the features of an entrepreneur?",
        "options": [
            "Not taking risk",
            "Being conservative",
            "Cannot seeing problems",
            "Being insensible",
            "Seeing opportunities"
        ],
        "correctAnswer": "Seeing opportunities"
    },
    {
        "week": "1-5",
        "courseCode": "GRI403",
        "question": "Which one is NOT an element of entrepreneurship?",
        "options": [
            "Being disapproved",
            "Giving effort",
            "Creating value",
            "Earning proceeds",
            "Contribution for public."
        ],
        "correctAnswer": "Being disapproved"
    },
    {
        "week": "1-5",
        "courseCode": "GRI403",
        "question": "Which one is NOT the factors for materializing creativity?",
        "options": [
            "Motivation",
            "Attitude",
            "Behaviour",
            "Environment",
            "Oppressiveness"
        ],
        "correctAnswer": "Oppressiveness"
    },
    {
        "week": "1-5",
        "courseCode": "GRI403",
        "question": "Which one is NOT the behaviours and attitudes that occur in individual creativity?",
        "options": [
            "Creativity",
            "Encouragement",
            "Mistake and risk",
            "Opinion / Thought",
            "Making concept"
        ],
        "correctAnswer": "Mistake and risk"
    },
    {
        "week": "1-5",
        "courseCode": "GRI403",
        "question": "Which one is the behaviours and attitudes of organisational creativity?",
        "options": [
            "Challenge",
            "Encouragement",
            "Mistake and risk",
            "Thought/opinion",
            "Making concept"
        ],
        "correctAnswer": "Making concept"
    },
    {
        "week": "1-5",
        "courseCode": "GRI403",
        "question": "What is the name of the thoughts that can turn into a product and service, provide value to the customer, profit to the entrepreneur?",
        "options": [
            "Creativity",
            "Work opinion",
            "Innovation",
            "Newness",
            "Entrepreneurship"
        ],
        "correctAnswer": "Work opinion"
    },
    {
        "week": "1-5",
        "courseCode": "GRI403",
        "question": "While brainstorming, what is the rule that does NOT put a bound to imaginations and thoughts?",
        "options": [
            "To criticise",
            "To make up freely",
            "To think as much as you can",
            "To be prepared",
            "To develop an idea"
        ],
        "correctAnswer": "To make up freely"
    },
    {
        "week": "1-5",
        "courseCode": "GRI403",
        "question": "Which one continues from the place where brainstorming resumes and is more systematic technic?",
        "options": [
            "Control list",
            "Horizontal Thinking",
            "Gordon Method",
            "Map of Thought",
            "Focus Group Discussion"
        ],
        "correctAnswer": "Gordon Method"
    },
    {
        "week": "1-5",
        "courseCode": "GRI403",
        "question": "Which one is the term that relates concepts, but hard to understand and explain because it consists of complex symbols?",
        "options": [
            "Attitude",
            "Behaviour",
            "Chaus",
            "Intuition",
            "Perspective"
        ],
        "correctAnswer": "Behaviour"
    },
    {
        "week": "1-5",
        "courseCode": "GRI403",
        "question": "Which are NOT the features of hot-teams?",
        "options": [
            "It consists of different characters",
            "They need to have targets",
            "They should be in solidarity.",
            "They should know the thoughts of each other.",
            "None of them."
        ],
        "correctAnswer": "They should know the thoughts of each other."
    },
    {
        "week": "1-5",
        "courseCode": "GRI403",
        "question": "Which one below is NOT the process of creativity?",
        "options": [
            "Preparation",
            "To put in Incubation",
            "To expose",
            "To accept",
            "To discuss a problem"
        ],
        "correctAnswer": "To discuss a problem"
    },
    {
        "week": "1-5",
        "courseCode": "GRI403",
        "question": "Which one is the creativity technic, related to one product and that puts the important factors of this product into two dimensional chart to reveal the creativity?",
        "options": [
            "Control list",
            "Matris method",
            "Gordon method",
            "Map of thoughts",
            "Focus Group Discussion"
        ],
        "correctAnswer": "Matris method"
    },
    {
        "week": "1-5",
        "courseCode": "GRI403",
        "question": "Which term describes implementation of new ideas produced by creativity?",
        "options": [
            "Design",
            "Innovation",
            "Production",
            "Intiution",
            "System"
        ],
        "correctAnswer": "Innovation"
    },
    {
        "week": "1-5",
        "courseCode": "GRI403",
        "question": "Which innovation type has the highest dependency to market?",
        "options": [
            "Technology based innovation",
            "Information based innovation",
            "Organization based innovation",
            "System based innovation",
            "Individual based innovation"
        ],
        "correctAnswer": "Information based innovation"
    },
    {
        "week": "1-5",
        "courseCode": "GRI403",
        "question": "Which of the following does NOT take place in innovation principles?",
        "options": [
            "Big startups",
            "Being a product of work not intelligence",
            "Reward and admiration",
            "Comprehensive and open communication",
            "Perceiving, questioning and listening"
        ],
        "correctAnswer": "Big startups"
    },
    {
        "week": "1-5",
        "courseCode": "GRI403",
        "question": "Which of the following term has a road map attribute for realizing establishments decisions?",
        "options": [
            "List",
            "Directive",
            "Regulation",
            "Guide book",
            "Business plan"
        ],
        "correctAnswer": "Business plan"
    },
    {
        "week": "1-5",
        "courseCode": "GRI403",
        "question": "Which of the following takes place in innovation types?",
        "options": [
            "Structural innovations in consumers",
            "Structural innovations in market",
            "Organizational innovations",
            "Intuitive innovations",
            "Conceptual innovations"
        ],
        "correctAnswer": "Organizational innovations"
    },
    {
        "week": "1-5",
        "courseCode": "GRI403",
        "question": "Which of the following does NOT take place in primary group innovation sources?",
        "options": [
            "Unexpected evolvements",
            "Inconsistency",
            "Processing needs",
            "Perception changes",
            "Changes in sector and market structures"
        ],
        "correctAnswer": "Perception changes"
    },
    {
        "week": "1-5",
        "courseCode": "GRI403",
        "question": "Which of the following point does NOT insist on productivity?",
        "options": [
            "Improving product quality",
            "Gaining additional properties for product",
            "Increasing productivity on production",
            "Reaching high automation levels",
            "Increasing products market share"
        ],
        "correctAnswer": "Increasing products market share"
    },
    {
        "week": "1-5",
        "courseCode": "GRI403",
        "question": "Which of the following does NOT take place in interactive innovation processes?",
        "options": [
            "Creative idea",
            "Usage of technology",
            "Picking proper idea",
            "Turning idea into product and service",
            "Serving product"
        ],
        "correctAnswer": "Creative idea"
    },
    {
        "week": "1-5",
        "courseCode": "GRI403",
        "question": "Which of the following does NOT take place in industry regions properties?",
        "options": [
            "Unwillingness in venture capital usage",
            "Innovation develops region",
            "Being close to economical and cultural regions",
            "Being a harbor or commercial center",
            "Free academical and continuing education"
        ],
        "correctAnswer": "Unwillingness in venture capital usage"
    },
    {
        "week": "1-5",
        "courseCode": "GRI403",
        "question": "Which of the following does NOT take place in basic elements of innovation culture?",
        "options": [
            "Stored information",
            "Inter-people knowledge",
            "External environments meeting needs",
            "Activity emerging creativity",
            "Instability between needs and possibilities"
        ],
        "correctAnswer": "Instability between needs and possibilities"
    },
    {
        "week": "1-5",
        "courseCode": "GRI403",
        "question": "Which of the following innovation types ideas is limited to organizations idea producing?",
        "options": [
            "Operational innovation",
            "Devastating innovation",
            "Close innovation",
            "Business model innovation",
            "Reverse innovation"
        ],
        "correctAnswer": "Close innovation"
    },
    {
        "week": "1-5",
        "courseCode": "GRI403",
        "question": "In which following phase creativity is used in innovation?",
        "options": [
            "Managing ideas",
            "Idea gathering",
            "Picking potentially succesful ideas",
            "Implementation",
            "Budgetting"
        ],
        "correctAnswer": "Picking potentially succesful ideas"
    },
    {
        "week": "1-5",
        "courseCode": "GRI403",
        "question": "Which of the innovation type cooperates outer establishment companies or individuals and organizations to gather innovation sources and powers?",
        "options": [
            "Radical innovation",
            "Operational innovation",
            "Open innovation",
            "Business model innovation",
            "Close innovation"
        ],
        "correctAnswer": "Open innovation"
    },
    {
        "week": "1-5",
        "courseCode": "GRI403",
        "question": "Which of the following answer describes finding a new solution to a problem and having commercial success from it?",
        "options": [
            "Production",
            "Innovation",
            "Creativity",
            "Invention",
            "Marketing"
        ],
        "correctAnswer": "Innovation"
    },
    {
        "week": "1-5",
        "courseCode": "GRI403",
        "question": "In order to realise innovation which of the following property is NOT needed?",
        "options": [
            "Originality",
            "Having definable value",
            "Can be commercialized",
            "Different",
            "Should be brought out by imitating"
        ],
        "correctAnswer": "Should be brought out by imitating"
    },
    {
        "week": "1-5",
        "courseCode": "GRI403",
        "question": "Which of the following definition is wrong about innovation term?",
        "options": [
            "In order to provide permanent success innovation should be sustainable",
            "Innovation term meets consumers needs and solves their problems",
            "For innovation creativity is not needed",
            "Innovation starts with curiosity and intuition",
            "Innovation includes discovery, invention, research and development"
        ],
        "correctAnswer": "For innovation creativity is not needed"
    },
    {
        "week": "1-5",
        "courseCode": "GRI403",
        "question": "Which of the following is NOT a difficulty of innovation?",
        "options": [
            "Finding a good idea",
            "Making mistake",
            "Calculating cost",
            "Correct timing",
            "Catching customer"
        ],
        "correctAnswer": "Making mistake"
    },
    {
        "week": "1-5",
        "courseCode": "GRI403",
        "question": "Which of the following is NOT wrongly known fact about innovation?",
        "options": [
            "Innovation and research and development are same things",
            "Innovation only provides social and economical benefits",
            "Innovation requires long time",
            "Only goal of innovation is profit",
            "Only large establishments can do innovation"
        ],
        "correctAnswer": "Innovation requires long time"
    },
    {
        "week": "1-5",
        "courseCode": "GRI403",
        "question": "Which of the following definition describes the difference between innovation and research and development?",
        "options": [
            "Research and development can not be reclaimed as a part of innovation",
            "Every finding of research and development turns into innovation",
            "Research and development may not take place in every innovation",
            "Innovation includes everybody in establishment, however research and development only consists of its own department",
            "Research and development is a process that includes innovation"
        ],
        "correctAnswer": "Innovation includes everybody in establishment, however research and development only consists of its own department"
    },
    {
        "week": "1-5",
        "courseCode": "GRI403",
        "question": "Which of the following correctly lists innovation processes?",
        "options": [
            "Managing ideas-gathering ideas-picking ideas with potential success-implementing",
            "Gathering ideas-managing ideas-picking ideas with potential success-implementing",
            "Picking ideas with potential success-implementing-managing ideas-gathering ideas",
            "Gathering ideas-implementing-picking ideas with potential success-managing ideas",
            "Gathering ideas-picking ideas with potential success-managing ideas and implementing"
        ],
        "correctAnswer": "Gathering ideas-managing ideas-picking ideas with potential success-implementing"
    },
    {
        "week": "1-5",
        "courseCode": "GRI403",
        "question": "Which of the following term is called ‘business doing type with proven success’?",
        "options": [
            "Business idea",
            "Customer value statement",
            "Business model",
            "Entrepreunership processes",
            "Innovative entrepreunership"
        ],
        "correctAnswer": "Business model"
    },
    {
        "week": "1-5",
        "courseCode": "GRI403",
        "question": "Which of the following does NOT take place in business ideas key sources?",
        "options": [
            "Products",
            "Facilities",
            "Equipments",
            "Administrative process",
            "Brands"
        ],
        "correctAnswer": "Administrative process"
    },
    {
        "week": "1-5",
        "courseCode": "GRI403",
        "question": "Which of the process below turns business idea into business?",
        "options": [
            "Entrepreunership processes",
            "Administrative processes",
            "Operational processes",
            "Financial processes",
            "Analysis processes"
        ],
        "correctAnswer": "Entrepreunership processes"
    },
    {
        "week": "1-5",
        "courseCode": "GRI403",
        "question": "Which of the following technique is NOT needed by managers to search and find business ideas?",
        "options": [
            "GZFT analysis",
            "Foresight and road maps",
            "Scenario analysis",
            "Process analysis",
            "Budget analysis"
        ],
        "correctAnswer": "Budget analysis"
    },
    {
        "week": "1-5",
        "courseCode": "GRI403",
        "question": "Which of the following research is NOT used in feasibility works?",
        "options": [
            "Market researches",
            "Technological researches",
            "Financial researches",
            "Juridical researches",
            "Commercial researches"
        ],
        "correctAnswer": "Commercial researches"
    },
    {
        "week": "1-5",
        "courseCode": "GRI403",
        "question": "Which of the following property is NOT used to distinguish succesful business idea from ordinary business idea?",
        "options": [
            "Provides benefit to customer",
            "Brings rival advantage",
            "Provides acquisition to share holders and establishment",
            "Presented by establishment",
            "Easy to produce"
        ],
        "correctAnswer": "Presented by establishment"
    },
    {
        "week": "1-5",
        "courseCode": "GRI403",
        "question": "Which of the following describes 'ideas which are decided to be introduced according to entrepreuners skills, knowledge and ability levels and foresighted as succesful'?",
        "options": [
            "Business idea",
            "Plan",
            "Program",
            "Thought",
            "Move"
        ],
        "correctAnswer": "Business idea"
    },
    {
        "week": "1-5",
        "courseCode": "GRI403",
        "question": "Which of the following is NOT needed while searching to find a business plan?",
        "options": [
            "Using personal skills",
            "Being broad-minded",
            "Synthesizing the ideas by brain storming",
            "Doing research",
            "Not to share ideas"
        ],
        "correctAnswer": "Not to share ideas"
    },
    {
        "week": "1-5",
        "courseCode": "GRI403",
        "question": "Which of the following method is used for defining a projects economical potential and practicability by researching technical, financial and economical datas?",
        "options": [
            "Business plan",
            "Project",
            "Business idea",
            "Feasibility research",
            "Implementation"
        ],
        "correctAnswer": "Feasibility research"
    },
    {
        "week": "1-5",
        "courseCode": "GRI403",
        "question": "Which of the following shows the most correct process for developing a new business or project?",
        "options": [
            "Starting business- pre-feasibility- feasibility- business plan",
            "Business plan- feasibility- pre-feasibility",
            "Business or project idea- pre-feasibility- feasibility- business plan",
            "Business or project idea- business plan- pre-feasibility- feasibility",
            "Business or project idea- starting business"
        ],
        "correctAnswer": "Business or project idea- pre-feasibility- feasibility- business plan"
    },
    {
        "week": 6,
        "courseCode": "GRI403",
        "question": "What does competition-based pricing involve?",
        "options": [
            "Determining price based on environmental factors",
            "Setting prices according to production costs",
            "Ignoring costs and following market demands",
            "Adjusting prices based on customer demand",
            "None of them is correct"
        ],
        "correctAnswer": "Ignoring costs and following market demands"
    },
    {
        "week": 6,
        "courseCode": "GRI403",
        "question": "What is foresight in the business context?",
        "options": [
            "Historical analysis",
            "Market share analysis",
            "Current market conditions",
            "Predicting future events",
            "None of them is correct"
        ],
        "correctAnswer": "Predicting future events"
    },
    {
        "week": 6,
        "courseCode": "GRI403",
        "question": "What does PEST Analysis stand for in the context of business plans and market analysis?",
        "options": [
            "None of them is correct",
            "Political, Environmental, Social, Technological",
            "Public, Economic, Strategic, Technological",
            "Political, Economical, Social, Technological",
            "Personal, Economic, Social, Technological"
        ],
        "correctAnswer": "Political, Economical, Social, Technological"
    },
    {
        "week": 6,
        "courseCode": "GRI403",
        "question": "What are the four main criteria used for market classification?",
        "options": [
            "Sector, Region, Climate, Population",
            "Geographic, Demographic, Psychographic, Behavioral",
            "Political, Economic, Societal, Technological",
            "Cultural, Economic, Social, Environmental",
            "None of them is correct"
        ],
        "correctAnswer": "Geographic, Demographic, Psychographic, Behavioral"
    },
    {
        "week": 6,
        "courseCode": "GRI403",
        "question": "What is the primary purpose of market research phases like gathering primary data sources?",
        "options": [
            "Identify competitors' prices",
            "None of them is correct",
            "Gather information directly from the market",
            "Evaluate environmental factors",
            "Analyze political factors"
        ],
        "correctAnswer": "Gather information directly from the market"
    },
    {
        "week": 6,
        "courseCode": "GRI403",
        "question": "What does SWOT analysis help identify in the context of environmental and establishment relations?",
        "options": [
            "Strengths, Weaknesses, Opportunities, Threats",
            "Sector potential",
            "Market share",
            "Market competition",
            "None of them is correct"
        ],
        "correctAnswer": "Strengths, Weaknesses, Opportunities, Threats"
    },
    {
        "week": 6,
        "courseCode": "GRI403",
        "question": "Which of the following is an example of a behavioral criteria in market classification?",
        "options": [
            "Age",
            "Population density",
            "None of them is correct",
            "Purchasing habits",
            "Climate"
        ],
        "correctAnswer": "Purchasing habits"
    },
    {
        "week": 6,
        "courseCode": "GRI403",
        "question": "Which of the following parameter does not take place in PEST analysis political factors?",
        "options": [
            "Demographical factors",
            "Country regime",
            "Bureaucratic structure",
            "Political stability",
            "Civil war"
        ],
        "correctAnswer": "Bureaucratic structure"
    },
    {
        "week": 6,
        "courseCode": "GRI403",
        "question": "Which of the following factor does not specify the competition between entrepreuners who are affecting sectors profitableness in sector analysis extent?",
        "options": [
            "Differentiation of product or service",
            "Too much entrepreuners in sector",
            "Suppliers with insufficient knowledge about products",
            "Slow growth of industry",
            "Expensiveness of stable costs and storage"
        ],
        "correctAnswer": "Suppliers with insufficient knowledge about products"
    },
    {
        "week": 6,
        "courseCode": "GRI403",
        "question": "Which of the following pricing strategy is based on legal regulations such as Value Added Tax (KDV) and Special Consumption Tax (ÖTV)?",
        "options": [
            "Cost based pricing",
            "Demand based pricing",
            "Competition based pricing",
            "Productivity based pricing",
            "Environmental factors based pricing"
        ],
        "correctAnswer": "Environmental factors based pricing"
    },
    {
        "week": 6,
        "courseCode": "GRI403",
        "question": "When we consider PEST analysis used for evaluating environmental factors, which of the following factor describes technology establishments such as Google can not operate in China?",
        "options": [
            "Political factors",
            "Economical factors",
            "Social factors",
            "Technological factors",
            "Cultural factors"
        ],
        "correctAnswer": "Political factors"
    },
    {
        "week": 6,
        "courseCode": "GRI403",
        "question": "Which of the following analyse shows establishment and environment relation which help us to understand environmental factors such as establishments inner strength and weaknesses and exterior opportunuties and threats?",
        "options": [
            "PEST analysis",
            "SWOT analysis",
            "Sector analysis",
            "Demand estimation",
            "Customer differentiation"
        ],
        "correctAnswer": "SWOT analysis"
    },
    {
        "week": 6,
        "courseCode": "GRI403",
        "question": "When we consider the factors affecting sectors profitableness, which of the following factor describes usage of plastic bottles instead of glass bottles in water packaging?",
        "options": [
            "Substitude products or services threat",
            "Purchasers negotiation power",
            "Suppliers negotiation power",
            "Competition between current competitors",
            "Potential competitors threat"
        ],
        "correctAnswer": "Substitude products or services threat"
    },
    {
        "week": 6,
        "courseCode": "GRI403",
        "question": "When we consider marketing terms while preparing business plan, which of the following shows the ratio of entered markets consumers number and ready markets consumers number?",
        "options": [
            "Consumer ratio",
            "Establishment ratio",
            "Input percentage",
            "Market percentage",
            "Profit ratio"
        ],
        "correctAnswer": "Market percentage"
    },
    {
        "week": 6,
        "courseCode": "GRI403",
        "question": "In order to have a complete market research information, which of the following factor is not used?",
        "options": [
            "Certainty",
            "Economy",
            "Practicableness",
            "Correct timing",
            "Understandability"
        ],
        "correctAnswer": "Correct timing"
    },
    {
        "week": 6,
        "courseCode": "GRI403",
        "question": "Which of the following criteria is not a market classification strategy of an establishment?",
        "options": [
            "Geography",
            "Demography",
            "Psychography",
            "Behavioral",
            "Biologic"
        ],
        "correctAnswer": "Biologic"
    },
    {
        "week": 6,
        "courseCode": "GRI403",
        "question": "Which of the following pricing strategy is based on researching market demand complete and correct?",
        "options": [
            "Cost based pricing",
            "Demand based pricing",
            "Competition based pricing",
            "Productivity based pricing",
            "Positioning based pricing"
        ],
        "correctAnswer": "Demand based pricing"
    },
    {
        "week": 7,
        "courseCode": "GRI403",
        "question": "What is the purpose of dividing the market into geographic classifications in marketing plans?",
        "options": [
            "To define target markets based on regions",
            "To analyze cultural changes",
            "To focus on direct distribution strategies",
            "To evaluate demographic criteria",
            "All of them are correct"
        ],
        "correctAnswer": "To define target markets based on regions"
    },
    {
        "week": 7,
        "courseCode": "GRI403",
        "question": "What does situation analysis in a marketing plan focus on?",
        "options": [
            "Product development strategies",
            "Where are we?",
            "All of them are correct",
            "Future market trends",
            "Competitor analysis"
        ],
        "correctAnswer": "Where are we?"
    },
    {
        "week": 7,
        "courseCode": "GRI403",
        "question": "How is demographical environment analyzed in marketing plans?",
        "options": [
            "Analyzing population size, age, gender, race, etc.",
            "By assessing global demographics",
            "By analyzing competitors' populations",
            "By evaluating the market's financial structure",
            "All of them are correct"
        ],
        "correctAnswer": "Analyzing population size, age, gender, race, etc."
    },
    {
        "week": 7,
        "courseCode": "GRI403",
        "question": "What does the opportunity represent in marketing terms?",
        "options": [
            "A situation where market needs are poorly served",
            "Lower distribution costs",
            "Lower production costs",
            "All of them are correct",
            "Intense effort to widen the general market"
        ],
        "correctAnswer": "A situation where market needs are poorly served"
    },
    {
        "week": 7,
        "courseCode": "GRI403",
        "question": "Which factor is NOT part of the changeable macro environment affecting establishments?",
        "options": [
            "Demographic environment",
            "All of them are correct",
            "Economical environment",
            "Product popularity",
            "Juridical and political environment"
        ],
        "correctAnswer": "Product popularity"
    },
    {
        "week": 7,
        "courseCode": "GRI403",
        "question": "What is a benefit of a well-prepared marketing plan for an entrepreneur?",
        "options": [
            "Foresight of opportunities and threats",
            "Increased competition",
            "All of them are correct",
            "Higher production costs",
            "Reduction in marketing goals"
        ],
        "correctAnswer": "Foresight of opportunities and threats"
    },
    {
        "week": 7,
        "courseCode": "GRI403",
        "question": "What is the primary purpose of a marketing plan?",
        "options": [
            "All of them are correct",
            "Analyzing competitors strategies",
            "Outlining marketing aims and planned activities",
            "Defining corporate aims",
            "Documenting daily operations"
        ],
        "correctAnswer": "Outlining marketing aims and planned activities"
    },
    {
        "week": 7,
        "courseCode": "GRI403",
        "question": "What fundamental questions does a marketing plan aim to answer?",
        "options": [
            "Where are we? Where do we want to go? How can we reach the aims?",
            "All of them are correct",
            "Why do we need a marketing plan? What are the current trends? How much should we invest?",
            "Who are our competitors? What are the market trends? When should we launch new products?",
            "How much profit do we want to make? Who are our target customers? Where should we advertise?"
        ],
        "correctAnswer": "Where are we? Where do we want to go? How can we reach the aims?"
    },
    {
        "week": 7,
        "courseCode": "GRI403",
        "question": "What is an example of a behavioral classification in market segmentation?",
        "options": [
            "Climate",
            "Age",
            "Social class, personal properties, and consumer behaviors",
            "All of them are correct",
            "Population density"
        ],
        "correctAnswer": "Social class, personal properties, and consumer behaviors"
    },
    {
        "week": 7,
        "courseCode": "GRI403",
        "question": "Which of the following document includes an establishments marketing goals and activity plans step by step in a written form?",
        "options": [
            "Monthly plan",
            "Management plan",
            "Marketing plan",
            "Financial plan",
            "Opportunity analysis plan"
        ],
        "correctAnswer": "Marketing plan"
    },
    {
        "week": 7,
        "courseCode": "GRI403",
        "question": "Which of the following is not one of the property of marketing plan?",
        "options": [
            "Competitors strong and weak sides analysis",
            "Flexibility",
            "Includes performance measurements",
            "Based on real informations",
            "Short and simple"
        ],
        "correctAnswer": "Competitors strong and weak sides analysis"
    },
    {
        "week": 7,
        "courseCode": "GRI403",
        "question": "Which of the following is not a step of marketing plan?",
        "options": [
            "Situation analysis",
            "Implementation and control",
            "Defining opportunuties and threats",
            "Preparing plan simple and understandable",
            "Defining marketing strategies and tactics"
        ],
        "correctAnswer": "Preparing plan simple and understandable"
    },
    {
        "week": 7,
        "courseCode": "GRI403",
        "question": "Which of the following is not a parameter forming macro environment?",
        "options": [
            "Demographical environment",
            "Legal environment",
            "Social and cultural environment",
            "Political and juridical environment",
            "Strategical environment"
        ],
        "correctAnswer": "Strategical environment"
    },
    {
        "week": 7,
        "courseCode": "GRI403",
        "question": "Which of the following method classifies market according to country, region, city and province?",
        "options": [
            "Demographical classification",
            "Behavioral classification",
            "Tactical classification",
            "Geographical classification",
            "Strategical classification"
        ],
        "correctAnswer": "Geographical classification"
    },
    {
        "week": 7,
        "courseCode": "GRI403",
        "question": "Which of the following describes establishments future planned activities and results to reach?",
        "options": [
            "Goal",
            "Strategy",
            "Tactic",
            "Market",
            "Opportunity"
        ],
        "correctAnswer": "Goal"
    },
    {
        "week": 7,
        "courseCode": "GRI403",
        "question": "Which of the following strategy describes an establishment trying to reach lowest production and distribution costs?",
        "options": [
            "Niche market strategy",
            "Cost leadership strategy",
            "Differentiation strategy",
            "Focussing strategy",
            "Followers strategy"
        ],
        "correctAnswer": "Cost leadership strategy"
    },
    {
        "week": 7,
        "courseCode": "GRI403",
        "question": "Which of the following is a product or services value in market?",
        "options": [
            "Product",
            "Brand",
            "Price",
            "Distribution",
            "Promotion"
        ],
        "correctAnswer": "Price"
    },
    {
        "week": 7,
        "courseCode": "GRI403",
        "question": "Which of the following describes serving and selling product without using mediators by producer?",
        "options": [
            "Intense distribution",
            "Selector distribution",
            "Special distribution",
            "Indirect distribution",
            "Direct distribution"
        ],
        "correctAnswer": "Direct distribution"
    },
    {
        "week": 7,
        "courseCode": "GRI403",
        "question": "Which of the following works are used for increasing sales directly in a short term?",
        "options": [
            "Advertisement",
            "Sales promotion",
            "Public relations",
            "Personal sale",
            "Distribution"
        ],
        "correctAnswer": "Sales promotion"
    },
    {
        "week": 8,
        "courseCode": "GRI403",
        "question": "Which of the following is not a production system input?",
        "options": [
            "Raw material",
            "Information",
            "Customer",
            "Capital",
            "Entrepreunership"
        ],
        "correctAnswer": "Customer"
    },
    {
        "week": 8,
        "courseCode": "GRI403",
        "question": "In which of the following only unique product is produced according to customers requests?",
        "options": [
            "Project type production",
            "Continuous production",
            "Assembly type production",
            "Flow type production",
            "Mass production"
        ],
        "correctAnswer": "Project type production"
    },
    {
        "week": 8,
        "courseCode": "GRI403",
        "question": "Which of the following does not take place in production plans extent?",
        "options": [
            "Defining production rate",
            "Defining production priorities",
            "Defining production amount to be produced",
            "Defining product to be produced",
            "Defining product to be produced price"
        ],
        "correctAnswer": "Defining product to be produced price"
    },
    {
        "week": 8,
        "courseCode": "GRI403",
        "question": "Which of the following is defined by process flow schema?",
        "options": [
            "Storage where inputs go",
            "Inputs process orders",
            "List of product parts",
            "Placing of machines",
            "Machines capacity list"
        ],
        "correctAnswer": "Inputs process orders"
    },
    {
        "week": 8,
        "courseCode": "GRI403",
        "question": "Which of the following is not a production planning activity?",
        "options": [
            "Defining production plans term of involvement",
            "Defining stock level",
            "Making demand estimations",
            "Defining certain orders",
            "Choosing supplier"
        ],
        "correctAnswer": "Choosing supplier"
    },
    {
        "week": 8,
        "courseCode": "GRI403",
        "question": "Which of the following shows when and in which amount whole materials to be sold or produced will be supplied?",
        "options": [
            "Capacity planning",
            "Material need planning",
            "Capacity need planning",
            "Main production tabulation",
            "Main production planning"
        ],
        "correctAnswer": "Main production tabulation"
    },
    {
        "week": 8,
        "courseCode": "GRI403",
        "question": "Which of the following inputs are outputs of main production tabulation?",
        "options": [
            "Capacity need planning",
            "Stock control",
            "Material need planning",
            "Capacity planning",
            "Main production planning"
        ],
        "correctAnswer": "Material need planning"
    },
    {
        "week": 8,
        "courseCode": "GRI403",
        "question": "Which of the following is not an aim of material need planning?",
        "options": [
            "Keeping stock level low",
            "Appointing employees on correct works",
            "Contributing work flows system",
            "Helping deliveries",
            "Minimizing production setbacks"
        ],
        "correctAnswer": "Appointing employees on correct works"
    },
    {
        "week": 8,
        "courseCode": "GRI403",
        "question": "Which of the following defines machine-equipment and required work power amount to implement material plan in a short planning term?",
        "options": [
            "Capacity need planning",
            "Source need planning",
            "Rough cutting source planning",
            "Stock control",
            "Material need planning"
        ],
        "correctAnswer": "Capacity need planning"
    },
    {
        "week": 8,
        "courseCode": "GRI403",
        "question": "Which of the following decision is most difficult to bring back?",
        "options": [
            "Supplier selection",
            "Machine selection",
            "Employee selection",
            "Establishment place selection",
            "Raw material selection"
        ],
        "correctAnswer": "Establishment place selection"
    },
    {
        "week": 9,
        "courseCode": "GRI403",
        "question": "What are the options for financial protection in organizations, companies, businesses, and all of them are correct?",
        "options": [
            "Focusing solely on production plans",
            "Ignoring the management team's experience",
            "A family-focused management plan",
            "Minimizing marketing efforts"
        ],
        "correctAnswer": "A family-focused management plan"
    },
    {
        "week": 9,
        "courseCode": "GRI403",
        "question": "Who is authorized to grant a business license within the metropolitan means-quality border in Turkey?",
        "options": [
            "The District Municipality",
            "The Provincial Administration",
            "The Metropolitan Municipality",
            "The Chamber of Commerce"
        ],
        "correctAnswer": "The Metropolitan Municipality"
    },
    {
        "week": 9,
        "courseCode": "GRI403",
        "question": "Why is work specialization important in a company?",
        "options": [
            "To increase employee salaries",
            "To simplify the company's legal structure",
            "To increase organization efficiency or enhance organization performance",
            "To reduce the need for a marketing plan"
        ],
        "correctAnswer": "To increase organization efficiency or enhance organization performance"
    },
    {
        "week": 9,
        "courseCode": "GRI403",
        "question": "What is segmentation according to function in marketing?",
        "options": [
            "Grouping customers by geographic location",
            "Dividing tasks based on job titles or qualifications",
            "Segmenting the market based on product type",
            "Creating different pricing strategies for different segments"
        ],
        "correctAnswer": "Dividing tasks based on job titles or qualifications"
    },
    {
        "week": 9,
        "courseCode": "GRI403",
        "question": "Which of the following is not considered one of the basic pillars of management?",
        "options": [
            "Planning",
            "Organizing",
            "Leading",
            "Controlling",
            "Saving"
        ],
        "correctAnswer": "Saving"
    },
    {
        "week": 9,
        "courseCode": "GRI403",
        "question": "What is a sole proprietorship?",
        "options": [
            "A company owned by shareholders",
            "A company type where two or more individuals share ownership",
            "A company type characterized by a single person who owns and operates the business",
            "A government-owned entity"
        ],
        "correctAnswer": "A company type characterized by a single person who owns and operates the business"
    },
    {
        "week": 9,
        "courseCode": "GRI403",
        "question": "What is a partnership?",
        "options": [
            "A company type where two or more individuals share ownership and operate the business together",
            "A business owned and operated by one person",
            "An entity where ownership is represented by shares",
            "A non-profit organization"
        ],
        "correctAnswer": "A company type where two or more individuals share ownership and operate the business together"
    },
    {
        "week": 9,
        "courseCode": "GRI403",
        "question": "What is a stock corporation?",
        "options": [
            "A business with unlimited liability for its owners",
            "An entity where ownership is represented by shares, and shares are issued to the shareholders",
            "A company operated by a single individual",
            "A temporary business venture"
        ],
        "correctAnswer": "An entity where ownership is represented by shares, and shares are issued to the shareholders"
    },
    {
        "week": 9,
        "courseCode": "GRI403",
        "question": "Which of the following is incorrect related to management plan?",
        "options": [
            "Management plan is concerned with how to create organizational structure",
            "Management plan is concerned with how to create product and services",
            "It should define establishments juridical structure",
            "Authority and responsibility relations should be defined on plan",
            "A good management plan proves that entrepreuner understands factors affecting organizational effectiveness"
        ],
        "correctAnswer": "Management plan is concerned with how to create product and services"
    },
    {
        "week": 9,
        "courseCode": "GRI403",
        "question": "Which of the following information is not needed for preparing management plan?",
        "options": [
            "Establishments site of establishment",
            "Establishments juridical structure",
            "Establishments organizational structure",
            "Abilities requiered for positions in establishment",
            "Standarts which calculate and evaluate working performance"
        ],
        "correctAnswer": "Establishments site of establishment"
    },
    {
        "week": 9,
        "courseCode": "GRI403",
        "question": "Which of the following partnersip is responsible with whole the products without any limitation as collective partners?",
        "options": [
            "Commandite",
            "Commanditer",
            "Merchant",
            "Corporative",
            "Limited partnership"
        ],
        "correctAnswer": "Commandite"
    },
    {
        "week": 9,
        "courseCode": "GRI403",
        "question": "Which of the following is share holder partnership?",
        "options": [
            "Collective partnerships",
            "Commandite partnerships",
            "Limited partnership",
            "Ordinary partnership",
            "Individual partnership"
        ],
        "correctAnswer": "Limited partnership"
    },
    {
        "week": 9,
        "courseCode": "GRI403",
        "question": "Which of the following is not a basic step of preparing management plan?",
        "options": [
            "Management plan summary",
            "Situational review",
            "Establishments juridical structure",
            "Evaluating outer environment",
            "Management philosophy"
        ],
        "correctAnswer": "Management philosophy"
    },
    {
        "week": 9,
        "courseCode": "GRI403",
        "question": "Which of the following is not considered as a basic element of organizational structure?",
        "options": [
            "Work division",
            "Matrix structure",
            "Audit field",
            "Classification",
            "Authority"
        ],
        "correctAnswer": "Matrix structure"
    },
    {
        "week": 9,
        "courseCode": "GRI403",
        "question": "Which of the following classification gathers works and duties according to their qualification?",
        "options": [
            "According to product base",
            "According to geographical base",
            "According to functions",
            "According to time base",
            "According to customer base"
        ],
        "correctAnswer": "According to functions"
    },
    {
        "week": 9,
        "courseCode": "GRI403",
        "question": "Which of the following defines employee amount a manager can direct?",
        "options": [
            "Audit field",
            "Flexibility",
            "Authority-responsibility balance",
            "Classification",
            "Expertation"
        ],
        "correctAnswer": "Audit field"
    },
    {
        "week": 9,
        "courseCode": "GRI403",
        "question": "Which of the following question should be answered when an entrepreuner decides organizational structure?",
        "options": [
            "How working performance will be evaluated?",
            "Which equipments and materials employees can use?",
            "How to employ qualified work power?",
            "How employees will be protected against environmental changes?",
            "How many sublevel employees can be directed by each manager?"
        ],
        "correctAnswer": "How many sublevel employees can be directed by each manager?"
    },
    {
        "week": 9,
        "courseCode": "GRI403",
        "question": "Which of the following is not related to defining main positions which should be filled in future in management plan?",
        "options": [
            "Every positions duties, responsibilites and authorities level",
            "Statements about perquisite and promotion opportunuties",
            "Every positions authority and responsibilites harmony with organizational structure",
            "Every position according to business title",
            "Providing qualified employees to establishment method"
        ],
        "correctAnswer": "Statements about perquisite and promotion opportunuties"
    },
    {
        "week": 9,
        "courseCode": "GRI403",
        "question": "Which one below is wrong about the working plan?",
        "options": [
            "Working plan is a document including the details of a firm thought to be set up or existing",
            "Working plan does not show the future of the firm, but the existing position of it.",
            "In the working plan all the elements of the firm should be defined.",
            "Working plan is the vision reflected written document of the firm thought to be set up.",
            "Working plan is the helping vehicle for an entrepreneur to move on to investment phase."
        ],
        "correctAnswer": "Working plan does not show the future of the firm, but the existing position of it."
    },
    {
        "week": 9,
        "courseCode": "GRI403",
        "question": "Which of the following below is NOT the benefits of a working plan for an entrepreneur?",
        "options": [
            "Enduring an entrepreneur to see the firm from critical and objective point of view.",
            "Giving informations to the funders and financiers about the market potential and planning the protection of the market share.",
            "Helping the assumption formation of the entrepreneur for the success of the firm.",
            "For the evaluation of the aims, setting criterias for the comparision of real results and estimations.",
            "An incomplete working plan carrying out a duty of a working guide for the entrepreneur."
        ],
        "correctAnswer": "Giving informations to the funders and financiers about the market potential and planning the protection of the market share."
    },
    {
        "week": 9,
        "courseCode": "GRI403",
        "question": "Which one below is a guide prepared during the process of setting up a firm and project being implemented?",
        "options": [
            "Charts of accounts",
            "Feasibility analysis",
            "Working plan",
            "Marketing plan",
            "Financing plan"
        ],
        "correctAnswer": "Working plan"
    },
    {
        "week": 9,
        "courseCode": "GRI403",
        "question": "Which one below is NOT a benefit of the working plan preperation?",
        "options": [
            "Working plan provides investor/ entrepreneur the written project of his/her mind.",
            "It saves time and works for the purpose by directing investor/ entrepreneur's attention.",
            "It provides conjecture by being based on the future datas.",
            "It provides the needed researches and planned work done before setting up the firm.",
            "It is useful for the research of which work to be done."
        ],
        "correctAnswer": "It is useful for the research of which work to be done."
    },
    {
        "week": 9,
        "courseCode": "GRI403",
        "question": "Which one below is NOT a part of working plan?",
        "options": [
            "Executive summary",
            "Information about the project/firm to be set up",
            "Aim and purpose of the project/firm",
            "Marketing Plan",
            "Profitability Plan"
        ],
        "correctAnswer": "Marketing Plan"
    },
    {
        "week": 9,
        "courseCode": "GRI403",
        "question": "Who should prepare the working plan of the firm to be set up?",
        "options": [
            "Venture capitalist",
            "Angel investor",
            "Entrepreneurs",
            "Financial advisor",
            "Legal Advisor"
        ],
        "correctAnswer": "Entrepreneurs"
    },
    {
        "week": 9,
        "courseCode": "GRI403",
        "question": "Which one below is NOT the usage purpose of the working plan?",
        "options": [
            "Communication",
            "Planning",
            "Management",
            "Future prediction",
            "Past analysis"
        ],
        "correctAnswer": "Past analysis"
    },
    {
        "week": 9,
        "courseCode": "GRI403",
        "question": "Which one below is a mistake done while the preprerations of the working plan?",
        "options": [
            "The usage of another working plan's assumptions",
            "Shortening the plan",
            "Reflecting all the risks in the plan",
            "Harmonising the future with the plan",
            "Not placing exeggerations in the plan"
        ],
        "correctAnswer": "The usage of another working plan's assumptions"
    },
    {
        "week": 9,
        "courseCode": "GRI403",
        "question": "Which one below is NOT the mistake done while the preperations of the working plan?",
        "options": [
            "Putting unrealistic aims in the plan",
            "Not predicting potential obstacles",
            "Lack of determination or undertaking",
            "Segmentation not being done",
            "Plan being up to date"
        ],
        "correctAnswer": "Plan being up to date"
    },
    {
        "week": 9,
        "courseCode": "GRI403",
        "question": "Which part below is needed to be demanded for reading the whole plan arousing interest for it?",
        "options": [
            "Marketing plan",
            "Input/Executive Summary",
            "Management Plan",
            "Production plan",
            "Enclosure"
        ],
        "correctAnswer": "Input/Executive Summary"
    },
    {
        "week": 10,
        "courseCode": "GRI403",
        "question": "What is the minimum capital required to establish a joint stock company in Turkey?",
        "options": [
            "10,000 TL",
            "25,000 TL",
            "50,000 TL",
            "100,000 TL"
        ],
        "correctAnswer": "50,000 TL"
    },
    {
        "week": 10,
        "courseCode": "GRI403",
        "question": "What is the critical role of a work plan in seeking funding from investors or banks?",
        "options": [
            "Outlining the company's history",
            "Demonstrating the potential of the project and its profitability",
            "Listing all employees and their salaries",
            "Providing a detailed accounting of past expenses"
        ],
        "correctAnswer": "Demonstrating the potential of the project and its profitability"
    },
    {
        "week": 10,
        "courseCode": "GRI403",
        "question": "What is the purpose of break-even analysis in financial planning?",
        "options": [
            "To calculate the company's total assets",
            "To forecast sales for the next five years",
            "To observe the relation between cost, activity volume, and profit",
            "To determine the company's market share"
        ],
        "correctAnswer": "To observe the relation between cost, activity volume, and profit"
    },
    {
        "week": 10,
        "courseCode": "GRI403",
        "question": "What makes financial plans different from accounting?",
        "options": [
            "Financial plans use more complex formulas",
            "Accounting is only for large corporations",
            "Financial plans have an emphasis on future outcomes, while accounting focuses on the past",
            "There is no difference"
        ],
        "correctAnswer": "Financial plans have an emphasis on future outcomes, while accounting focuses on the past"
    },
    {
        "week": 10,
        "courseCode": "GRI403",
        "question": "Which financial aspect does the term 'Starbucks spreadsheet' likely refer to in a business context?",
        "options": [
            "Cost management",
            "Debt financing",
            "Revenue generation and sales forecasting",
            "Asset allocation"
        ],
        "correctAnswer": "Revenue generation and sales forecasting"
    },
    {
        "week": 10,
        "courseCode": "GRI403",
        "question": "How does Tesla's financial plan contribute to its intellectual success?",
        "options": [
            "By minimizing all research and development costs",
            "Through strategic cost management and investment in innovation",
            "By paying the highest salaries in the industry",
            "By avoiding all forms of debt"
        ],
        "correctAnswer": "Through strategic cost management and investment in innovation"
    },
    {
        "week": 10,
        "courseCode": "GRI403",
        "question": "Which one below taken into consideration for defining finance need of a business firm?",
        "options": [
            "Total resources (equity capital)",
            "Total of short and long term debts",
            "Term structure of the debts",
            "Total current assets",
            "Total fixed and current assets"
        ],
        "correctAnswer": "Total fixed and current assets"
    },
    {
        "week": 10,
        "courseCode": "GRI403",
        "question": "Which business progress phase is the hardest for entrepreneur?",
        "options": [
            "Beginning phase",
            "Growing phase",
            "Maturity phase",
            "Decline phase",
            "Fall phase"
        ],
        "correctAnswer": "Beginning phase"
    },
    {
        "week": 10,
        "courseCode": "GRI403",
        "question": "Which one below is NOT one of the finance resources for the benefit of entrepreneur in the beginning phase?",
        "options": [
            "Personal resources",
            "Merchant banks",
            "Investment banks",
            "Supplier's credits",
            "Friends and relatives"
        ],
        "correctAnswer": "Investment banks"
    },
    {
        "week": 10,
        "courseCode": "GRI403",
        "question": "In terms of the business firm, in which business progress phase, innovations increase, rivalry rises and profits start to increase?",
        "options": [
            "Beginning",
            "Growing",
            "Maturity",
            "Decline",
            "Fall"
        ],
        "correctAnswer": "Growing"
    },
    {
        "week": 10,
        "courseCode": "GRI403",
        "question": "Which factor below does NOT increase the importance of financial planning period?",
        "options": [
            "Manifestation of the target and aim",
            "Defining the risks taken",
            "Defining cash inflow and outflow",
            "Estimating funds needed",
            "Evaluating the previous period results"
        ],
        "correctAnswer": "Evaluating the previous period results"
    },
    {
        "week": 10,
        "courseCode": "GRI403",
        "question": "Which strategy below is NOT aimed at decreasing the financial risks to minimum level?",
        "options": [
            "Shorten the due date of the debts",
            "Becoming indebt from the fixed interest rate",
            "Protected from the risks of Exchange rate",
            "Creating new credit opprtunities",
            "Lowering loan/ equity capital mainstay below 1."
        ],
        "correctAnswer": "Shorten the due date of the debts"
    },
    {
        "week": 10,
        "courseCode": "GRI403",
        "question": "Which one below is the table that a business firm will attain operating and non operating profit in the future term and endure the budget of the margin for gaining profit ?",
        "options": [
            "Proforma balance sheet",
            "Proforma income table",
            "Cass budget",
            "Equity Exchange table",
            "Fund flow table"
        ],
        "correctAnswer": "Proforma income table"
    },
    {
        "week": 10,
        "courseCode": "GRI403",
        "question": "Which factor below does NOT increase the need of working capital?",
        "options": [
            "Capacity",
            "Work load",
            "Liquidity risk",
            "Credit Worth",
            "Revaluation"
        ],
        "correctAnswer": "Revaluation"
    },
    {
        "week": 10,
        "courseCode": "GRI403",
        "question": "Which one below is NOT brunches of work fund?",
        "options": [
            "Cash",
            "Debt owed",
            "Stock",
            "Cash equivalents",
            "Fixed assets"
        ],
        "correctAnswer": "Fixed assets"
    },
    {
        "week": 10,
        "courseCode": "GRI403",
        "question": "Which one is not a disadvantage of funds provided for family and friends?",
        "options": [
            "Interrupting management",
            "Feeling of ownage",
            "Interrupting workers",
            "Guiding operations",
            "Ending operations"
        ],
        "correctAnswer": "Ending operations"
    },
    {
        "week": 10,
        "courseCode": "GRI403",
        "question": "Which of the following is not a question banks or lending companies are looking for in business plan?",
        "options": [
            "Will you pay your loan back?",
            "Why do you need this money for?",
            "How much loan you want?",
            "Are you strong enough to pay the interest?",
            "If needed, what types of assurances you can provide?"
        ],
        "correctAnswer": "Will you pay your loan back?"
    },
    {
        "week": 10,
        "courseCode": "GRI403",
        "question": "While making sales budget estimations in the beginning of financial estimation process, for the first year which periods are used for sales estimation?",
        "options": [
            "Weekly",
            "Three months",
            "Six months",
            "Yearly",
            "Monthly"
        ],
        "correctAnswer": "Monthly"
    },
    {
        "week": 10,
        "courseCode": "GRI403",
        "question": "While budgeting estimated expense and costs, which of the following expenses are reviewed?",
        "options": [
            "Beginning and activity expenses",
            "Beginning and finishing expenses",
            "Short and long term expenses",
            "Activity and raw material expenses",
            "Stable and changeable expenses"
        ],
        "correctAnswer": "Beginning and activity expenses"
    },
    {
        "week": 10,
        "courseCode": "GRI403",
        "question": "Which of the following is not a type of activity expenses?",
        "options": [
            "Salary and wages",
            "Day offs and licenses",
            "Rents",
            "Mortgage debts",
            "Financial rents"
        ],
        "correctAnswer": "Day offs and licenses"
    },
    {
        "week": 10,
        "courseCode": "GRI403",
        "question": "Which of the following is not a typical main type of income statement?",
        "options": [
            "Incomes",
            "Expenses",
            "Debts",
            "Income tax to be paid",
            "Pure profit"
        ],
        "correctAnswer": "Debts"
    },
    {
        "week": 10,
        "courseCode": "GRI403",
        "question": "Which of the following is not an inner or outer establishment factor affecting cash flows directly?",
        "options": [
            "Delays in raw material supply",
            "Deficient raw material",
            "Deficient product",
            "Suppliers price decrease",
            "Suppliers date shortening"
        ],
        "correctAnswer": "Suppliers price decrease"
    },
    {
        "week": 10,
        "courseCode": "GRI403",
        "question": "Which of the following par production amount in a product which have total stable expense of 5000.- TL, unit changeable expense 25.- TL and sales price 50.- TL?",
        "options": [
            "500",
            "450",
            "400",
            "300",
            "200"
        ],
        "correctAnswer": "200"
    },
    {
        "week": 11,
        "courseCode": "GRI403",
        "question": "Why is risk management important for a company?",
        "options": [
            "To eliminate all possible risks completely",
            "To improve perception about risk and develop policies for solutions",
            "To satisfy government regulations only",
            "To increase the company's debt load"
        ],
        "correctAnswer": "To improve perception about risk and develop policies for solutions"
    },
    {
        "week": 11,
        "courseCode": "GRI403",
        "question": "What is operational risk in risk management?",
        "options": [
            "Risk of a debtor defaulting on a loan",
            "Risk of loss from failed internal processes, people, systems, or external events",
            "Risk of negative market price movements",
            "Risk of being unable to meet short-term financial obligations"
        ],
        "correctAnswer": "Risk of loss from failed internal processes, people, systems, or external events"
    },
    {
        "week": 11,
        "courseCode": "GRI403",
        "question": "How is risk defined in risk management?",
        "options": [
            "A certain negative event that has already happened",
            "A guarantee of future profit",
            "As possible chances or threats in the future that could lead to monetary loss",
            "An analysis of past company failures"
        ],
        "correctAnswer": "As possible chances or threats in the future that could lead to monetary loss"
    },
    {
        "week": 11,
        "courseCode": "GRI403",
        "question": "What is liquidity risk in risk management?",
        "options": [
            "The risk of a company's reputation being damaged",
            "The risk of being unable to pay on time due to a shortage of cash",
            "The risk of a foreign country's political instability",
            "The risk of a key supplier going out of business"
        ],
        "correctAnswer": "The risk of being unable to pay on time due to a shortage of cash"
    },
    {
        "week": 11,
        "courseCode": "GRI403",
        "question": "Is qualitative or quantitative risk analysis more different from the other?",
        "options": [
            "Quantitative, because it uses complex math",
            "Qualitative, because it involves subjective evaluation and revelation, while quantitative involves numerical analysis of past events",
            "They are the same, just with different names",
            "Neither, as both focus exclusively on financial data"
        ],
        "correctAnswer": "Qualitative, because it involves subjective evaluation and revelation, while quantitative involves numerical analysis of past events"
    },
    {
        "week": 11,
        "courseCode": "GRI403",
        "question": "Which of the following is correct about risk definition?",
        "options": [
            "It involves actualized event",
            "It is sparing source for actualized loss",
            "Happens everytime",
            "It is about past",
            "It is based on possibility of actualization"
        ],
        "correctAnswer": "It is based on possibility of actualization"
    },
    {
        "week": 11,
        "courseCode": "GRI403",
        "question": "Which of the following risk or risks we take if we are going to take the payment of our sold house in future in foreing currency?",
        "options": [
            "Credit risk",
            "Operation risk",
            "Currency and credit risk",
            "Reputation risk",
            "Credit and operation risk"
        ],
        "correctAnswer": "Currency and credit risk"
    },
    {
        "week": 11,
        "courseCode": "GRI403",
        "question": "Which of the following alternative is more preferable if we presume the risk type is same?",
        "options": [
            "Low encountering rate, low loss amount",
            "High encountering rate, low loss amount",
            "Low encountering rate, high loss amount",
            "High encountering rate, high loss amount",
            "Encountering rate unknown, high loss amount"
        ],
        "correctAnswer": "Low encountering rate, low loss amount"
    },
    {
        "week": 11,
        "courseCode": "GRI403",
        "question": "Which of the following loss risk is from unsuccesful business processes, people and systems or outer events?",
        "options": [
            "Operational",
            "Credit",
            "Market",
            "Interest rate",
            "Liquidity"
        ],
        "correctAnswer": "Operational"
    },
    {
        "week": 11,
        "courseCode": "GRI403",
        "question": "Which of the following risk type is realized if we have large amount of receivable debt however we do not have enough money for our daily needs?",
        "options": [
            "Operational",
            "Credit",
            "Market",
            "Interest rate",
            "Liquidity"
        ],
        "correctAnswer": "Liquidity"
    },
    {
        "week": 11,
        "courseCode": "GRI403",
        "question": "Which of the following is an element affecting success in risk management?",
        "options": [
            "Size of establishment",
            "University graduated employees",
            "Establishment being in a centeral area",
            "Being supported by top management",
            "Establishment having high endorsement"
        ],
        "correctAnswer": "Being supported by top management"
    },
    {
        "week": 11,
        "courseCode": "GRI403",
        "question": "Which of the following strategy can not be used in risk management?",
        "options": [
            "Ignoring risk",
            "Avoiding risk",
            "Transferring risk",
            "Decreasing risks effects",
            "Decreasing risks possibility"
        ],
        "correctAnswer": "Ignoring risk"
    },
    {
        "week": 11,
        "courseCode": "GRI403",
        "question": "Which of the following risk type can be numerically countable?",
        "options": [
            "Credit risk",
            "Reputation risk",
            "Juridical risk",
            "Country risk",
            "Active-passive risk"
        ],
        "correctAnswer": "Credit risk"
    },
    {
        "week": 11,
        "courseCode": "GRI403",
        "question": "Which of the following risk or risks we take if we are going to take our sold product or services payment in future in foreign currency?",
        "options": [
            "Credit risk",
            "Operational risk",
            "Currency or credit risk",
            "Reputation risk",
            "Credit and operational risk"
        ],
        "correctAnswer": "Currency or credit risk"
    },
    {
        "week": 11,
        "courseCode": "GRI403",
        "question": "Which of the following two analysis type creates simulation analysis?",
        "options": [
            "SWOT- possibility",
            "Possibility- qualitative",
            "Qualitative- quantitative",
            "Sensibility- possibility",
            "SWOT- qualitative"
        ],
        "correctAnswer": "Sensibility- possibility"
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