import { Cpu } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const OperatingSystem = () => {
  const osContent = [
    {
      q: "1. OS Introduction",
      a: (
        <p>
          An <strong>Operating System (OS)</strong> is an <strong>interface between user and hardware</strong>. 
          It manages processes, CPU, memory, files, and resources. 
          Its main goal is to provide an environment where programs can run <em>efficiently and conveniently</em>.
        </p>
      ),
    },
    {
      q: "2. Types of Operating Systems",
      a: (
        <ul className="list-disc ml-6 text-muted-foreground">
          <li>
            <strong>Batch OS:</strong> Executes jobs one after another; CPU is assigned after previous job finishes.
          </li>
          <li>
            <strong>Multiprogramming OS:</strong> Keeps multiple jobs in memory; CPU switches when one process waits for I/O.
          </li>
          <li>
            <strong>Multitasking OS:</strong> Quickly switches CPU between tasks; allows user interaction with multiple programs.
          </li>
          <li>
            <strong>Time-Sharing OS:</strong> Interacts with users via input devices (keyboard); provides prompt output.
          </li>
          <li>
            <strong>Real-Time OS:</strong> Designed to complete tasks within strict deadlines; used in dedicated systems.
          </li>
        </ul>
      ),
    },
    {
      q: "3.What is Process ?",
      a: (
        <p>
          A <strong>process</strong> is a program under execution. 
          The <strong>Program Counter (PC)</strong> indicates the next instruction address.
          Each process is represented by a <strong>Process Control Block (PCB)</strong>.
        </p>
      ),
    },
    {
      q: "4. Process Scheduling",
      a: (
        <ul className="list-disc ml-6 text-muted-foreground">
          <li><strong>Arrival Time:</strong> Time process enters the ready queue.</li>
          <li><strong>Completion Time:</strong> Time process finishes execution.</li>
          <li><strong>Burst Time:</strong> CPU time required by a process.</li>
          <li>
            <strong>Turn Around Time (TAT):</strong> Completion Time − Arrival Time
          </li>
          <li>
            <strong>Waiting Time (WT):</strong> Turn Around Time − Burst Time
          </li>
        </ul>
      ),
    },
    {
      q: "5. Thread (Important)",
      a: (
        <p>
          A <strong>thread</strong> is a lightweight process; a process can have multiple threads.
          Threads share <strong>code, data, files, and signals</strong> but have their own <strong>PC, registers, and stack</strong>.
          Use <code>fork()</code> to create child processes. Types: <strong>User Threads</strong> and <strong>Kernel Threads</strong>.
        </p>
      ),
    },
    {
      q: "6. Scheduling Algorithms",
      a: (
        <ul className="list-disc ml-6 text-muted-foreground">
          <li><strong>FCFS:</strong> First Come First Serve.</li>
          <li><strong>SJF:</strong> Shortest Job First.</li>
          <li><strong>SRTF:</strong> Shortest Remaining Time First (preemptive SJF).</li>
          <li><strong>Round Robin (RR):</strong> Fixed time quantum cyclic scheduling.</li>
          <li><strong>Priority Scheduling (Non Preemptive):</strong> Based on process priority.</li>
          <li><strong>HRRN:</strong> Highest Response Ratio Next.</li>
          <li><strong>MLQ & MLFQ:</strong> Multilevel Queue / Feedback Queue scheduling.</li>
        </ul>
      ),
    },
    {
      q: "7. Deadlocks (Important)",
      a: (
        <>
          <p><strong>Deadlock:</strong> Processes wait forever for resources. Necessary conditions:</p>
          <ul className="list-disc ml-6 text-muted-foreground">
            <li>Mutual Exclusion</li>
            <li>Hold and Wait</li>
            <li>No Preemption</li>
            <li>Circular Wait</li>
          </ul>
        </>
      ),
    },
    {
      q: "8. Methods for Handling Deadlocks",
      a: (
        <ul className="list-disc ml-6 text-muted-foreground">
          <li>Prevention / Avoidance (Banker's Algorithm)</li>
          <li>Detection & Recovery</li>
          <li>Ignore (rare; OS reboot)</li>
        </ul>
      ),
    },
    {
      q: "9. Banker's Algorithm",
      a: (
        <p>
          Used in deadlock avoidance. Ensures system never allocates resources that could leave it in an unsafe state.
        </p>
      ),
    },
    {
      q: "10. Memory Management",
      a: (
        <ul className="list-disc ml-6 text-muted-foreground">
          <li><strong>Overlays:</strong> Load only required instructions/data into memory.</li>
          <li><strong>Swapping:</strong> Move processes in/out of memory to optimize CPU use.</li>
          <li>
            <strong>Partitioning:</strong> Single or multiple fixed/variable partitions.
          </li>
          <li><strong>Paging:</strong> Fixed-size pages for non-contiguous allocation.</li>
          <li><strong>Segmentation:</strong> Logical memory divided into segments.</li>
        </ul>
      ),
    },
    {
      q: "11. Page Replacement Algorithms (Important)",
      a: (
        <ul className="list-disc ml-6 text-muted-foreground">
          <li><strong>FIFO:</strong> Replace oldest page first. May cause Belady's anomaly.</li>
          <li><strong>Optimal:</strong> Replace page not needed for the longest future time. Perfect but theoretical.</li>
          <li><strong>LRU:</strong> Replace least recently used page.</li>
        </ul>
      ),
    },
    {
      q: "12. Disk Scheduling",
      a: (
        <p>
          OS schedules I/O requests to the disk efficiently using seek time, rotational latency, and transfer time.
        </p>
      ),
    },
    {
      q: "13. Disk Scheduling Algorithms (Important)",
      a: (
        <ul className="list-disc ml-6 text-muted-foreground">
          <li>FCFS</li>
          <li>SSTF</li>
          <li>SCAN / CSCAN / LOOK / CLOOK</li>
        </ul>
      ),
    },
    {
      q: "Summary & Tips",
      a: (
        <ul className="list-disc ml-6 text-muted-foreground">
          <li>Understand processes, threads, and scheduling clearly.</li>
          <li>Deadlocks and memory management are key interview topics.</li>
          <li>Practice algorithms (CPU & Disk scheduling, page replacement) step by step.</li>
          <li>Use simple examples to remember concepts easily.</li>
          <li>Revise important formulas: TAT, WT, response ratio.</li>
        </ul>
      ),
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Header */}
        <section className="bg-[#059669] py-16 text-white">
          <div className="container px-4">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
                <Cpu className="h-10 w-10" />
              </div>
              <h1 className="mb-4 text-4xl font-bold md:text-5xl">
                Operating System
              </h1>
              <p className="text-lg text-purple-50 font-semibold">
                Easy & Quick OS Guide for Students – Prepare for Interviews!
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container px-4">
            <div className="mx-auto max-w-4xl space-y-6">
              {osContent.map((item, index) => (
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
                  <div className="ml-12 text-muted-foreground">{item.a}</div>
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
                  ← Previous: CN
                </Button>
              </Link>
              <Link to="/">
                <Button size="lg">Back to Home</Button>
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
