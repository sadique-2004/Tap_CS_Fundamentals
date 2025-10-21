import { useState } from "react";
import { ArrowRight, Network } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const ComputerNetworks = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const cnContent = [
    {
      q: "Networks Basics",
      a: (
        <div className="space-y-4">
          <p>
            <strong>Network:</strong> Devices (<em>nodes</em>) connected via
            links → share data & resources.
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>
              <strong>Node:</strong> Any device on the network
            </li>
            <li>
              <strong>Link:</strong> Physical/wireless connection
            </li>
            <li>
              <strong>Gateway / Router:</strong> Forward messages between
              networks
            </li>
            <li>
              <strong>Router</strong> → similar networks
            </li>
            <li>
              <strong>Gateway</strong> → dissimilar networks
            </li>
          </ul>
        </div>
      ),
    },
    {
      q: "Network Topology",
      a: (
        <div className="overflow-x-auto">
          <table className="table-auto border border-collapse border-gray-300 w-full text-left">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-4 py-2">Topology</th>
                <th className="border px-4 py-2">Image</th>
                <th className="border px-4 py-2">Layout / Analogy</th>
                <th className="border px-4 py-2">Pros / Cons</th>
                <th className="border px-4 py-2">Use</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">
                  <strong>Star</strong>
                </td>
                <td className="border px-4 py-2">
                  <img
                    src="https://tse4.mm.bing.net/th/id/OIP.emG5fFYSg-79XazCSz7TsAHaDt?pid=Api&P=0&h=220"
                    alt="Star Topology"
                    className="h-16 mx-auto"
                  />
                </td>
                <td className="border px-4 py-2">Hub & spokes</td>
                <td className="border px-4 py-2">
                  Robust, easy management; central device fail → whole network
                  down
                </td>
                <td className="border px-4 py-2">Home/office</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">
                  <strong>Ring</strong>
                </td>
                <td className="border px-4 py-2">
                  <img
                    src="https://tse4.mm.bing.net/th/id/OIP.-iZfdmZnCUnTk8I2-yFUEwHaFP?pid=Api&P=0&h=220"
                    alt="Ring Topology"
                    className="h-16 mx-auto"
                  />
                </td>
                <td className="border px-4 py-2">Necklace</td>
                <td className="border px-4 py-2">
                  Each node → 2 neighbors, no central hub; fail → whole network
                  down
                </td>
                <td className="border px-4 py-2">Rare (SONET, SDH)</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">
                  <strong>Bus</strong>
                </td>
                <td className="border px-4 py-2">
                  <img
                    src="https://images.squarespace-cdn.com/content/v1/540f5515e4b06c4e8629c108/1604312009245-12NSQUPEWGZDAZUP5XA4/bus.jpg"
                    alt="Bus Topology"
                    className="h-16 mx-auto"
                  />
                </td>
                <td className="border px-4 py-2">Street with houses</td>
                <td className="border px-4 py-2">
                  Cheap, easy, small networks; cable break → network down
                </td>
                <td className="border px-4 py-2">Small offices</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">
                  <strong>Mesh</strong>
                </td>
                <td className="border px-4 py-2">
                  <img
                    src="https://tse3.mm.bing.net/th/id/OIP.z2MGwQ9Rh5gmgJzUw3h7IAHaEK?pid=Api&P=0&h=220"
                    alt="Mesh Topology"
                    className="h-16 mx-auto"
                  />
                </td>
                <td className="border px-4 py-2">Spider web</td>
                <td className="border px-4 py-2">
                  Fully/partially connected; robust, high cabling cost, complex
                </td>
                <td className="border px-4 py-2">
                  Rare, high-security networks
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">
                  <strong>Tree</strong>
                </td>
                <td className="border px-4 py-2">
                  <img
                    src="https://tse2.mm.bing.net/th/id/OIP.C_KvOHQYdusNJKtLI2actQHaFK?pid=Api&P=0&h=220"
                    alt="Tree Topology"
                    className="h-16 mx-auto"
                  />
                </td>
                <td className="border px-4 py-2">Forest of stars</td>
                <td className="border px-4 py-2">
                  Hierarchical, segments; main bus fail → network down
                </td>
                <td className="border px-4 py-2">Campus / LANs</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">
                  <strong>Hybrid</strong>
                </td>
                <td className="border px-4 py-2">
                  <img
                    src="https://tse1.mm.bing.net/th/id/OIP.hTfq5XDzGaq1pxBngEcLywHaEK?pid=Api&P=0&h=220"
                    alt="Hybrid Topology"
                    className="h-16 mx-auto"
                  />
                </td>
                <td className="border px-4 py-2">Mix-n-match</td>
                <td className="border px-4 py-2">
                  Combines topologies → flexible
                </td>
                <td className="border px-4 py-2">Large, complex networks</td>
              </tr>
            </tbody>
          </table>
        </div>
      ),
    },
    {
      q: "Types of Networks (By Area)",
      a: (
        <div className="space-y-6">
          <ul className="list-disc ml-6 space-y-2">
            <li>
              <strong>PAN:</strong> ≤10m → personal devices (phones, printers)
            </li>
            <li>
              <strong>LAN:</strong> Small area → offices, schools
            </li>
            <li>
              <strong>HAN:</strong> LAN at home
            </li>
            <li>
              <strong>CAN:</strong> Campus network (link departments)
            </li>
            <li>
              <strong>MAN:</strong> City-wide network
            </li>
            <li>
              <strong>WAN:</strong> Country / world-spanning network
            </li>
            <li>
              <strong>GAN:</strong> Satellite-based global network
            </li>
            <li>
              <strong>VPN:</strong> Private network over internet → secure
              tunnels
              <ul className="list-circle ml-6 space-y-1">
                <li>
                  <strong>Access VPN:</strong> Mobile users
                </li>
                <li>
                  <strong>Site-to-Site VPN:</strong> Office branches
                </li>
              </ul>
            </li>
            <li>
              <strong>Intranet:</strong> Internal connectivity
            </li>
            <li>
              <strong>Extranet:</strong> Partners, suppliers
            </li>
          </ul>
        </div>
      ),
    },
    {
      q: "IP Addressing",
      a: (
        <div className="space-y-6">
          <p>
            <strong>IPv4:</strong> 32-bit → 4 octets (0–255)
          </p>

          <div>
            <strong>Classes:</strong>
            <ul className="list-disc ml-6 space-y-1 mt-2">
              <li>
                <strong>A:</strong> 0–127 → large network
              </li>
              <li>
                <strong>B:</strong> 128–191 → medium network
              </li>
              <li>
                <strong>C:</strong> 192–223 → LAN
              </li>
              <li>
                <strong>D:</strong> 224–239 → multicast
              </li>
              <li>
                <strong>E:</strong> 240–255 → R&D
              </li>
            </ul>
          </div>

          <div className="space-y-1">
            <p>
              <strong>Private vs Public IP:</strong> private → internal, public
              → ISP-provided
            </p>
            <p>
              <strong>MAC vs IP:</strong> MAC → hardware ID; IP → network ID
            </p>
          </div>
        </div>
      ),
    },
    {
      q: "OSI Model (7 Layers)",
      a: (
        <div className="space-y-6">
          {/* OSI Diagram */}
          <div className="text-center">
            <img
              src="https://media.geeksforgeeks.org/wp-content/uploads/computer-network-osi-model-layers.png"
              alt="OSI Model Diagram"
              className="mx-auto h-84 w-full max-w-3xl"
            />
          </div>

          {/* OSI Layers Table */}
          <div className="overflow-x-auto">
            <table className="table-auto border border-collapse border-gray-300 w-full text-left">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border px-4 py-2">Layer</th>
                  <th className="border px-4 py-2">Role</th>
                  <th className="border px-4 py-2">Quick Tip</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">
                    <strong>Application</strong>
                  </td>
                  <td className="border px-4 py-2">User interface</td>
                  <td className="border px-4 py-2">HTTP, SMTP, DNS, FTP</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">
                    <strong>Presentation</strong>
                  </td>
                  <td className="border px-4 py-2">Translate & encode data</td>
                  <td className="border px-4 py-2">
                    Encryption, compression, format
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">
                    <strong>Session</strong>
                  </td>
                  <td className="border px-4 py-2">
                    Start/maintain/end session
                  </td>
                  <td className="border px-4 py-2">
                    Handles upper layer errors
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">
                    <strong>Transport</strong>
                  </td>
                  <td className="border px-4 py-2">
                    Delivery + error checking
                  </td>
                  <td className="border px-4 py-2">
                    TCP → connection-oriented, UDP → connectionless
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">
                    <strong>Network</strong>
                  </td>
                  <td className="border px-4 py-2">Packets, routing</td>
                  <td className="border px-4 py-2">
                    IP address, fragmentation, internetworking
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">
                    <strong>Data Link</strong>
                  </td>
                  <td className="border px-4 py-2">
                    Frames, physical addressing
                  </td>
                  <td className="border px-4 py-2">
                    Error control, flow control
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">
                    <strong>Physical</strong>
                  </td>
                  <td className="border px-4 py-2">Raw bit transmission</td>
                  <td className="border px-4 py-2">Cables, fiber, wireless</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="font-bold">
            Fun way to memorize the 7 OSI layers 😎 <br /> AJJ PHIR SE TEST NAI
            DENA PADEGA{" "}
          </p>

          <div className="space-y-4">
            <p className="font-semibold ">Remember OSI Layers with:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>
                <strong>AJJ → Application Layer ✅</strong>
              </li>
              <li>
                <strong>PHIR → Presentation Layer ✅</strong>
              </li>
              <li>
                <strong>SE → Session Layer ✅</strong>
              </li>
              <li>
                <strong>TEST → Transport Layer ✅</strong>
              </li>
              <li>
                <strong>NAI → Network Layer ✅</strong>
              </li>
              <li>
                <strong>DENA → Data Link Layer ✅</strong>
              </li>
              <li>
                <strong>PADEGA → Physical Layer ✅</strong>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      q: "TCP/IP model = OSI compressed (4 layers)",
      a: (
        <>
          <img
            src="https://tecadmin.net/wp-content/uploads/2023/06/tcp-ip-model.png"
            alt=""
          />
        </>
      ),
    },
    {
      q: "Key Protocols",
      a: (
        <div className="space-y-6">
          <ul className="list-disc ml-6 space-y-2">
            <li>
              <strong>HTTP / HTTPS:</strong> Web page communication
              <ul className="list-circle ml-6 space-y-1">
                <li>HTTP → port 80, stateless</li>
                <li>HTTPS → SSL/TLS, port 443, secure</li>
              </ul>
            </li>
            <li>
              <strong>DNS:</strong> Domain → IP mapping
              <ul className="list-circle ml-6 space-y-1">
                <li>Forwarder → forwards unresolved queries</li>
              </ul>
            </li>
            <li>
              <strong>SMTP:</strong> Email transfer, port 25, always listening
            </li>
            <li>
              <strong>DHCP:</strong> Auto-assign IP/subnet/DNS, port 67
            </li>
            <li>
              <strong>FTP:</strong> File transfer, port 27
            </li>
            <li>
              <strong>ICMP:</strong> Network diagnostics (ping), port 7
            </li>
            <li>
              <strong>ARP:</strong> IP → MAC address resolution
            </li>
            <li>
              <strong>RIP:</strong> Routing via hop-count, small/medium networks
            </li>
          </ul>
        </div>
      ),
    },
    {
      q: "Network Devices",
      a: (
        <div className="space-y-4">
          <ul className="list-disc ml-6 space-y-2">
            <li>
              <strong>Hub:</strong> Physical layer, broadcasts to all ports
            </li>
            <li>
              <strong>Switch:</strong> Data link layer, efficient, full-duplex,
              filters packets
            </li>
            <li>
              <strong>NIC:</strong> Connects PC → network, has unique MAC
              address
            </li>
          </ul>
        </div>
      ),
    },
    {
      q: "Connectivity Concepts",
      a: (
        <div className="space-y-4">
          <ul className="list-disc ml-6 space-y-2">
            <li>
              <strong>Ping / Netstat:</strong> Check connection & TCP/IP status
            </li>
            <li>
              <strong>Subnet:</strong> Network → subnets → better routing &
              security
            </li>
            <li>
              <strong>Unicast:</strong> 1 → 1
            </li>
            <li>
              <strong>Anycast:</strong> 1 → any node
            </li>
            <li>
              <strong>Multicast:</strong> 1 → subset of nodes
            </li>
            <li>
              <strong>Broadcast:</strong> 1 → all nodes (DHCP, ARP)
            </li>
            <li>
              <strong>P2P Processes:</strong> Peer processes on same layer
            </li>
          </ul>
        </div>
      ),
    },
    {
      q: "Network Performance & Reliability",
      a: (
        <div className="space-y-4">
          <ul className="list-disc ml-6 space-y-2">
            <li>
              <strong>Performance:</strong> Transmission / response time
            </li>
            <li>
              <strong>Reliability:</strong> Failure frequency, downtime,
              catastrophe
            </li>
            <li>
              <strong>Robustness:</strong> Strength & stability
            </li>
            <li>
              <strong>Security:</strong> Unauthorized access & virus protection
            </li>
          </ul>
        </div>
      ),
    },
    {
      q: "🚀 What happens when you type google.com?",
      a: (
        <div className="space-y-6">
          <p className="font-semibold text-lg">Step-by-step journey:</p>
          <ol className="list-decimal ml-6 space-y-3">
            <li>
              <span className="font-bold">Browser cache:</span> ✅ Shows fresh
              content if available
            </li>
            <li>
              <span className="font-bold">DNS lookup:</span> 🌐 Resolve domain →
              IP address
            </li>
            <li>
              <span className="font-bold">TCP three-way handshake:</span> 🤝
              Connect to server
            </li>
            <li>
              <span className="font-bold">HTTP request & response:</span> 📤
              Request sent → 📥 Server responds
            </li>
            <li>
              <span className="font-bold">Browser renders:</span> 🖥️ Display
              page & store in cache if needed
            </li>
          </ol>
          <p className="text-sm text-gray-500">
            Super simplified pipeline of what happens behind the scenes ✨
          </p>
        </div>
      ),
    },
    {
      q: "What is DNS and how does it work?",
      a: "DNS (Domain Name System) translates human-readable domain names to IP addresses. When you type a URL, DNS resolver queries DNS servers hierarchically (root → TLD → authoritative) to find the IP address, enabling browser to connect to the website.",
    },
    {
      q: "What are the differences between Hub, Switch, and Router?",
      a: "Hub broadcasts data to all ports (Layer 1), inefficient and insecure. Switch forwards data to specific ports using MAC addresses (Layer 2), more efficient. Router connects different networks using IP addresses (Layer 3), provides routing and security features.",
    },
    {
      q: "What is NAT and why is it used?",
      a: "NAT (Network Address Translation) maps private IP addresses to public IP addresses. It conserves public IPs, enhances security by hiding internal network structure, enables multiple devices to share one public IP, and facilitates communication between private and public networks.",
    },
    {
      q: "What are HTTP and HTTPS? What's the difference?",
      a: "HTTP transfers web data in plain text over port 80. HTTPS adds SSL/TLS encryption for secure communication over port 443. HTTPS protects against eavesdropping, tampering, and authentication, essential for sensitive data like passwords and payments.",
    },
    {
      q: "What is a Firewall and its types?",
      a: "A Firewall monitors and controls network traffic based on security rules. Types include: Packet Filtering (Layer 3/4), Stateful Inspection (tracks connections), Application-Level (Layer 7 inspection), and Next-Gen Firewalls (deep packet inspection, IPS).",
    },
    {
      q: "What is the difference between IPv4 and IPv6?",
      a: "IPv4 uses 32-bit addresses (4.3 billion addresses), facing exhaustion. IPv6 uses 128-bit addresses (340 undecillion addresses), has built-in security (IPsec), no NAT needed, simpler header structure, and better routing efficiency.",
    },
    {
      q: "What is ARP and how does it work?",
      a: "ARP (Address Resolution Protocol) maps IP addresses to MAC addresses in a local network. When a device needs to communicate, it broadcasts an ARP request; the target device responds with its MAC address, enabling Layer 2 communication.",
    },
    {
      q: "Explain the concept of Load Balancing.",
      a: "Load Balancing distributes network traffic across multiple servers to optimize resource use, maximize throughput, minimize response time, and avoid overload. Algorithms include Round Robin, Least Connections, IP Hash, and Weighted methods for efficient distribution.",
    },
    {
      q: "What is a VPN and how does it work?",
      a: "VPN (Virtual Private Network) creates an encrypted tunnel over the internet for secure communication. It masks your IP address, encrypts data, enables secure remote access to private networks, and bypasses geographical restrictions while protecting privacy.",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Header */}
        <section className="bg-[#60A5FA] py-16 text-white">
          <div className="container px-4">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
                <Network className="h-10 w-10" />
              </div>
              <h1 className="mb-4 text-4xl font-bold md:text-5xl">
                Computer Networks
              </h1>
              <p className="text-lg text-indigo-50">
                Master CN fundamentals and confidently tackle any interview
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container px-4">
            <div className="mx-auto max-w-4xl space-y-6">
              {cnContent.map((item, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-card"
                >
                  {/* Question Header */}
                  <div
                    onClick={() => toggleQuestion(index)}
                    className="mb-3 flex cursor-pointer items-start gap-4"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-sm font-bold text-primary">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {item.q}
                    </h3>
                  </div>

                  {/* Answer - show only if active */}
                  {openIndex === index && (
                    <div className="ml-12 text-muted-foreground animate-fadeIn">
                      {item.a}
                    </div>
                  )}
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
              <Link to="/os">
                <Button size="lg" className="gap-2">
                  Next: OS
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
