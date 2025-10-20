import { ArrowRight, Network } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const ComputerNetworks = () => {
  const questions = [
    {
      q: "What is the OSI Model and its layers?",
      a: "The OSI Model has 7 layers: Physical (hardware), Data Link (MAC addressing), Network (IP routing), Transport (TCP/UDP), Session (connections), Presentation (data format), and Application (user interface). Each layer has specific protocols and functions for network communication."
    },
    {
      q: "What is the difference between TCP and UDP?",
      a: "TCP is connection-oriented, reliable, ensures data delivery in order with error checking. UDP is connectionless, faster, no guaranteed delivery or ordering. TCP is used for web, email; UDP for streaming, gaming where speed matters more than reliability."
    },
    {
      q: "What is an IP Address and its types?",
      a: "An IP Address uniquely identifies devices on a network. IPv4 uses 32-bit addresses (e.g., 192.168.1.1); IPv6 uses 128-bit addresses. Types include: Public (internet-facing), Private (local network), Static (fixed), and Dynamic (DHCP-assigned)."
    },
    {
      q: "Explain Subnetting and its purpose.",
      a: "Subnetting divides a network into smaller sub-networks to improve performance, security, and management. It uses subnet masks to determine network and host portions of an IP address, enabling efficient IP address allocation and reducing broadcast domains."
    },
    {
      q: "What is DNS and how does it work?",
      a: "DNS (Domain Name System) translates human-readable domain names to IP addresses. When you type a URL, DNS resolver queries DNS servers hierarchically (root → TLD → authoritative) to find the IP address, enabling browser to connect to the website."
    },
    {
      q: "What are the differences between Hub, Switch, and Router?",
      a: "Hub broadcasts data to all ports (Layer 1), inefficient and insecure. Switch forwards data to specific ports using MAC addresses (Layer 2), more efficient. Router connects different networks using IP addresses (Layer 3), provides routing and security features."
    },
    {
      q: "What is DHCP and its role?",
      a: "DHCP (Dynamic Host Configuration Protocol) automatically assigns IP addresses and network configuration to devices. It eliminates manual configuration, prevents IP conflicts, efficiently manages IP address pools, and provides centralized network management."
    },
    {
      q: "Explain the Three-Way Handshake in TCP.",
      a: "TCP connection establishment: 1) Client sends SYN to server; 2) Server responds with SYN-ACK; 3) Client sends ACK. This ensures both sides are ready for data transmission and establishes initial sequence numbers for reliable communication."
    },
    {
      q: "What is NAT and why is it used?",
      a: "NAT (Network Address Translation) maps private IP addresses to public IP addresses. It conserves public IPs, enhances security by hiding internal network structure, enables multiple devices to share one public IP, and facilitates communication between private and public networks."
    },
    {
      q: "What are HTTP and HTTPS? What's the difference?",
      a: "HTTP transfers web data in plain text over port 80. HTTPS adds SSL/TLS encryption for secure communication over port 443. HTTPS protects against eavesdropping, tampering, and authentication, essential for sensitive data like passwords and payments."
    },
    {
      q: "What is a Firewall and its types?",
      a: "A Firewall monitors and controls network traffic based on security rules. Types include: Packet Filtering (Layer 3/4), Stateful Inspection (tracks connections), Application-Level (Layer 7 inspection), and Next-Gen Firewalls (deep packet inspection, IPS)."
    },
    {
      q: "What is the difference between IPv4 and IPv6?",
      a: "IPv4 uses 32-bit addresses (4.3 billion addresses), facing exhaustion. IPv6 uses 128-bit addresses (340 undecillion addresses), has built-in security (IPsec), no NAT needed, simpler header structure, and better routing efficiency."
    },
    {
      q: "What is ARP and how does it work?",
      a: "ARP (Address Resolution Protocol) maps IP addresses to MAC addresses in a local network. When a device needs to communicate, it broadcasts an ARP request; the target device responds with its MAC address, enabling Layer 2 communication."
    },
    {
      q: "Explain the concept of Load Balancing.",
      a: "Load Balancing distributes network traffic across multiple servers to optimize resource use, maximize throughput, minimize response time, and avoid overload. Algorithms include Round Robin, Least Connections, IP Hash, and Weighted methods for efficient distribution."
    },
    {
      q: "What is a VPN and how does it work?",
      a: "VPN (Virtual Private Network) creates an encrypted tunnel over the internet for secure communication. It masks your IP address, encrypts data, enables secure remote access to private networks, and bypasses geographical restrictions while protecting privacy."
    }
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-to-br from-indigo-500 to-indigo-600 py-16 text-white">
          <div className="container px-4">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
                <Network className="h-10 w-10" />
              </div>
              <h1 className="mb-4 text-4xl font-bold md:text-5xl">
                Computer Networks
              </h1>
              <p className="text-lg text-indigo-50">
                Master networking concepts with {questions.length} key interview questions
              </p>
            </div>
          </div>
        </section>

        {/* Questions */}
        <section className="py-16">
          <div className="container px-4">
            <div className="mx-auto max-w-4xl space-y-6">
              {questions.map((item, index) => (
                <div 
                  key={index}
                  className="group rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-card"
                >
                  <div className="mb-3 flex items-start gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-sm font-bold text-primary">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {item.q}
                    </h3>
                  </div>
                  <p className="ml-12 text-muted-foreground">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="border-t border-border/40 bg-muted/30 py-12">
          <div className="container px-4">
            <div className="mx-auto flex max-w-4xl items-center justify-between">
              <Link to="/dbms">
                <Button variant="outline" size="lg">
                  ← Previous: DBMS
                </Button>
              </Link>
              <Link to="/operating-system">
                <Button size="lg" className="gap-2">
                  Next: Operating System
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ComputerNetworks;
