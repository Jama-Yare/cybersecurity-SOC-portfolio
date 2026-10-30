# Cybersecurity Portfolio

**Jama Ali Jama** - Senior Computer Science student, Nugaal University

I am building the skills for a **SOC analyst** role. This repository documents hands-on labs I have completed, each with the evidence (screenshots, command output) and what I learned. Everything here was done on my own machines or in an isolated lab I built myself.

> Contact: [add your LinkedIn URL here]

---

## Labs

| # | Lab | Date | Skills shown |
|---|-----|------|--------------|
| 01 | [Isolated Cybersecurity Lab: Kali, Metasploitable 2, OWASP BWA and Wazuh](labs/01-isolated-lab-setup/) | Oct 29, 2026 | VirtualBox networking, Nmap service scanning, SIEM agent monitoring, troubleshooting |
| 02 | [Windows Security Fundamentals: firewall, permissions, antivirus, encryption, hashing](labs/02-windows-security-fundamentals/) | Sep 27 - Oct 5, 2026 | Windows Defender Firewall rules, NTFS permissions, EICAR detection, VeraCrypt, MD5 password hashing |

## Tools used so far

Kali Linux, Nmap, Wazuh (manager, dashboard and agents), Oracle VirtualBox, Metasploitable 2, OWASP Broken Web Apps, Windows Defender Firewall, Windows Security, VeraCrypt, MySQL / phpMyAdmin, PowerShell.

## Next

- Lab 03: run a controlled scan or login attempt from Kali against a monitored machine, find the resulting alerts in Wazuh, record the rule ID and severity, and map the activity to MITRE ATT&CK in an incident-style write-up.

## How I handle evidence

A SOC analyst has to protect sensitive data, so I apply the same habit to my own portfolio. Screenshots here are cropped or left out when they would show session cookies, account-recovery details, real passwords, other people's names, or anything that exposes my personal accounts or systems. Where I inspected something sensitive (for example browser cookies), I describe what I learned and withhold the screenshot. The only credentials shown are throwaway demo values created for the labs.

## Scope and ethics

All scanning and testing was done only against machines I own, inside a Host-Only virtual network that is not reachable from the internet. Do not use anything in this repository against systems you do not own or have written permission to test.
