import { Cpu } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const OperatingSystem = () => {
  const questions = [
    {
      q: "What is an Operating System and its functions?",
      a: "An OS is system software that manages hardware and software resources. Key functions include: process management, memory management, file system management, device management, security, and providing user interface. It acts as an intermediary between users and hardware."
    },
    {
      q: "What is the difference between Process and Thread?",
      a: "A Process is an independent program execution with its own memory space. A Thread is a lightweight subprocess within a process, sharing the same memory. Threads are faster to create and switch between, while processes provide better isolation and security."
    },
    {
      q: "Explain different CPU Scheduling Algorithms.",
      a: "FCFS (First Come First Serve) is simple but may cause waiting. SJF (Shortest Job First) minimizes wait time. Round Robin uses time quantum for fairness. Priority scheduling assigns importance levels. Multilevel Queue handles different process types efficiently."
    },
    {
      q: "What is Deadlock and its necessary conditions?",
      a: "Deadlock occurs when processes wait indefinitely for resources. Four necessary conditions: Mutual Exclusion (exclusive resource access), Hold and Wait (holding while requesting), No Preemption (can't forcibly take resources), and Circular Wait (circular chain of waiting)."
    },
    {
      q: "What are Deadlock Prevention and Avoidance strategies?",
      a: "Prevention eliminates one of the four deadlock conditions. Avoidance uses algorithms like Banker's Algorithm to ensure safe states before allocation. Detection monitors for deadlock cycles. Recovery involves process termination or resource preemption to break the deadlock."
    },
    {
      q: "What is Virtual Memory and Paging?",
      a: "Virtual Memory extends RAM using disk space, allowing larger programs. Paging divides memory into fixed-size pages, enabling non-contiguous allocation. Benefits include isolation, larger address space, and efficient memory use. Page faults occur when accessing pages not in RAM."
    },
    {
      q: "Explain Page Replacement Algorithms.",
      a: "FIFO replaces oldest page (may cause Belady's anomaly). LRU replaces least recently used (optimal but complex). Optimal replaces page not needed longest (theoretical). Clock algorithm approximates LRU efficiently. Each balances performance and implementation complexity."
    },
    {
      q: "What is Thrashing and how to prevent it?",
      a: "Thrashing occurs when a system spends more time swapping pages than executing processes, causing severe performance degradation. Prevention: increase memory, reduce multiprogramming degree, use working set model, improve locality of reference, and implement proper page replacement algorithms."
    },
    {
      q: "What are Semaphores and Mutex?",
      a: "Semaphores are integer variables for process synchronization, supporting wait() and signal() operations. Binary semaphore (0/1) or counting semaphore (multiple resources). Mutex is a binary lock for mutual exclusion. Both prevent race conditions and ensure critical section protection."
    },
    {
      q: "Explain the Producer-Consumer Problem.",
      a: "Classic synchronization problem: producers create data, consumers use it, sharing a bounded buffer. Solutions must prevent race conditions, ensure buffer doesn't overflow or underflow, and allow concurrent operation. Solved using semaphores, monitors, or message passing."
    },
    {
      q: "What is Context Switching?",
      a: "Context Switching is saving the state of a current process and loading the state of another. It involves saving registers, program counter, and memory mappings. High overhead but necessary for multitasking. Frequent switching reduces throughput."
    },
    {
      q: "What is the difference between Internal and External Fragmentation?",
      a: "Internal Fragmentation: wasted space within allocated memory blocks (fixed partitioning). External Fragmentation: free memory scattered in small blocks between allocated regions (variable partitioning). Solutions include paging (internal) and compaction (external)."
    },
    {
      q: "What is a System Call and its types?",
      a: "System Calls are interfaces between user programs and OS kernel. Types: Process Control (fork, exit), File Management (open, read, write), Device Management (request, release), Information Maintenance (time, date), and Communication (pipes, sockets)."
    },
    {
      q: "Explain Inter-Process Communication (IPC) mechanisms.",
      a: "IPC enables processes to communicate and synchronize. Methods include: Shared Memory (fast, requires synchronization), Message Passing (safe, slower), Pipes (unidirectional stream), Sockets (network communication), and Signals (notifications). Choice depends on requirements and architecture."
    },
    {
      q: "What is the difference between Preemptive and Non-Preemptive Scheduling?",
      a: "Preemptive: OS can interrupt running processes (better responsiveness, complex). Non-Preemptive: processes run until completion or voluntary yield (simpler, may cause starvation). Preemptive used in modern OSs for better resource utilization and user experience."
    }
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-to-br from-purple-500 to-purple-600 py-16 text-white">
          <div className="container px-4">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
                <Cpu className="h-10 w-10" />
              </div>
              <h1 className="mb-4 text-4xl font-bold md:text-5xl">
                Operating System
              </h1>
              <p className="text-lg text-purple-50">
                Master OS fundamentals with {questions.length} essential interview questions
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
              <Link to="/computer-networks">
                <Button variant="outline" size="lg">
                  ← Previous: Computer Networks
                </Button>
              </Link>
              <Link to="/">
                <Button size="lg">
                  Back to Home
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

export default OperatingSystem;
