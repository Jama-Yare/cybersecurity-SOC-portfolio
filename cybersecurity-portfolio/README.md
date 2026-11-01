# Cybersecurity Portfolio

**Jama Ali Jama** - Senior Computer Science student, Nugaal University

I am building the skills for a **SOC analyst** role. This repository documents hands-on labs I have completed, each with the evidence (screenshots, command output) and what I learned. Everything here was done on my own machines or in an isolated lab I built myself.

> Contact: [linkedin.com/in/jama-ali-jama-6099962b8](https://www.linkedin.com/in/jama-ali-jama-6099962b8/)

---

## Labs

| # | Lab | Date | Skills shown |
|---|-----|------|--------------|
| 01 | [Isolated Cybersecurity Lab: Kali, Metasploitable 2, OWASP BWA and Wazuh](labs/01-isolated-lab-setup/) | Oct 29, 2026 | VirtualBox networking, Nmap service scanning, SIEM agent monitoring, troubleshooting |
| 02 | [Windows Security Fundamentals: firewall, permissions, antivirus, encryption, hashing](labs/02-windows-security-fundamentals/) | Sep 27 - Oct 5, 2026 | Windows Defender Firewall rules, NTFS permissions, EICAR detection, VeraCrypt, MD5 password hashing |
| 03 | [Detecting SSH Brute-Force Attempts with Wazuh and MITRE ATT&CK](labs/03-wazuh-ssh-bruteforce-detection/) | Oct 31, 2026 | Wazuh agent enrolment, SSH failed-login detection, alert triage, MITRE ATT&CK T1110 |
| 04 | [Detecting Failed Windows Logons (Event ID 4625) with Wazuh](labs/04-wazuh-windows-failed-logon-detection/) | Oct 31, 2026 | Windows audit policy, Event ID 4625, Wazuh alert analysis, Windows vs Linux detection |

## Tools used so far

Kali Linux, Nmap, Wazuh (manager, dashboard and agents), Oracle VirtualBox, Metasploitable 2, OWASP Broken Web Apps, Windows Defender Firewall, Windows Security, VeraCrypt, MySQL / phpMyAdmin, PowerShell, Ubuntu Server 24.04, OpenSSH, MITRE ATT&CK, Windows Event Viewer, auditpol.

## Next

- Lab 05: File Integrity Monitoring in Wazuh, then vulnerability detection on the Ubuntu endpoint.
- Then: find out why Windows failed logons stayed at level 5 in Lab 04, and test a Wazuh Active Response rule that blocks a repeatedly failing source IP.

## How I handle evidence

A SOC analyst has to protect sensitive data, so I apply the same habit to my own portfolio. Screenshots here are cropped or left out when they would show session cookies, account-recovery details, real passwords, other people's names, or anything that exposes my personal accounts or systems. Where I inspected something sensitive (for example browser cookies), I describe what I learned and withhold the screenshot. The only credentials shown are throwaway demo values created for the labs.

## Scope and ethics

All scanning and testing was done only against machines I own, inside a Host-Only virtual network that is not reachable from the internet. Do not use anything in this repository against systems you do not own or have written permission to test.
