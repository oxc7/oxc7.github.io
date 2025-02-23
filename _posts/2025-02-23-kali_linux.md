---
layout: single
title: "Useful Tips When Using Kali Linux"
date: 2025-02-23
author: Roy
excerpt: "A collection of practical tips and insights for effectively using Kali Linux for penetration testing and security tasks."
---

# Useful Kali Linux Bash Commands for Penetration Testing

Kali Linux is a powerful distribution widely used for penetration testing and security auditing. Mastering Bash commands in Kali Linux can significantly improve efficiency during security assessments.

## 1. **Network Scanning with Nmap**
Nmap is a crucial tool for discovering hosts and services on a network:
```bash
nmap -sV -p 1-65535 target_ip
```
- `-sV` enables service detection.
- `-p 1-65535` scans all ports.

## 2. **Enumerating Subdomains with Sublist3r**
```bash
sublist3r -d target.com
```
This command helps to discover subdomains using various search engines and brute-force techniques.

## 3. **Brute-Forcing SSH with Hydra**
```bash
hydra -l user -P passwords.txt target_ip ssh
```
- `-l user` specifies the username.
- `-P passwords.txt` is the wordlist for password attempts.

## 4. **Packet Capturing with Tcpdump**
```bash
tcpdump -i eth0 -w capture.pcap
```
- `-i eth0` captures packets on the eth0 interface.
- `-w capture.pcap` saves the output to a file.

## 5. **Checking Open Ports with Netcat**
```bash
nc -zv target_ip 1-1000
```
- `-z` scans without sending data.
- `-v` provides verbose output.

## 6. **Privilege Escalation Checks**
```bash
find / -perm -4000 2>/dev/null
```
This command lists all files with SUID permissions, which may indicate potential privilege escalation vectors.

## Conclusion
Mastering these Bash commands in Kali Linux enhances efficiency in penetration testing workflows. Keeping up with security best practices ensures AI products remain protected against potential threats.

---