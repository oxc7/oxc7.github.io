When technical due diligence includes a hands-on security assessment of a target's infrastructure, a repeatable command-line toolkit makes the work fast and thorough. Kali Linux — a Debian-based distribution built for security testing — bundles the tooling I reach for most. Below are the commands that carry the weight of a typical assessment. Every one of them should only be run against systems you are authorized to test.

## 1. Network scanning with Nmap

Nmap discovers hosts and services on a network:

```bash
nmap -sV -p 1-65535 target_ip
```

- `-sV` enables service-version detection, which is how you identify vulnerable software versions.
- `-p 1-65535` scans all ports so no access point is overlooked.

Reconnaissance is the first step, and Nmap maps the attack surface quickly.

## 2. Enumerating subdomains with Sublist3r

Subdomain discovery surfaces hidden parts of a domain:

```bash
sublist3r -d target.com
```

This uncovers overlooked subdomains and misconfigured servers that never appear in initial recon.

## 3. Brute-forcing SSH with Hydra

Hydra tests credential strength across many protocols, including SSH:

```bash
hydra -l user -P passwords.txt target_ip ssh
```

- `-l user` sets the username to target.
- `-P passwords.txt` points to the password wordlist.

Useful for demonstrating weak-password risk — only in authorized engagements.

## 4. Packet capture with tcpdump

tcpdump intercepts and logs traffic on an interface, which is invaluable for spotting unencrypted data in transit:

```bash
tcpdump -i eth0 -w capture.pcap
```

- `-i eth0` captures on the `eth0` interface.
- `-w capture.pcap` writes packets to a file for offline analysis.

## 5. Checking open ports with Netcat

Netcat is the "Swiss Army knife" of network diagnostics:

```bash
nc -zv target_ip 1-1000
```

- `-z` scans without sending data — fast and quiet.
- `-v` produces verbose output.

## 6. Privilege-escalation checks

Privilege escalation is a common path to root. Find files with SUID permissions, a frequent escalation vector:

```bash
find / -perm -4000 2>/dev/null
```

Misconfigured SUID binaries let unauthorized users execute code with elevated privileges.

## Closing note

These commands turn a security assessment from ad hoc poking into a structured, repeatable process — exactly what diligence demands. Always operate with written authorization; responsible, in-scope use is what separates a security assessment from an intrusion.
