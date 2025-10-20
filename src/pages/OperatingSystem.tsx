import { Cpu } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const OperatingSystem = () => {
  const osContent = [
    {
      q: "OS Introduction",
      a: (
        <>
          <p>
            An <strong>Operating System (OS)</strong> is an{" "}
            <strong>interface between user and hardware</strong>. It manages
            processes, CPU, memory, files, and resources. Its main goal is to
            provide an environment where programs can run{" "}
            <em>efficiently and conveniently</em>.
          </p>
          <br />
          <p>
            Think of an <strong>OS</strong> as the boss of your computer:
          </p>
          <br />

          <ul className="list-disc ml-6 text-muted-foreground">
            <li>
              Talks to <strong>hardware</strong> 🤝
            </li>
            <li>
              Talks to you, the <strong>user</strong> 🧑‍💻
            </li>
            <li>Keeps everything running smoothly without crashing</li>
            <li>
              Manages <code>CPU</code>, <code>memory</code>, <code>files</code>,
              and <code>processes</code>
            </li>
          </ul>

          <br />

          <p>
            <strong>One-liner for interviews:</strong> <br />
            <code>
              OS = user-hardware mediator + resource manager + process execution
              coordinator
            </code>
          </p>
        </>
      ),
    },
    {
      q: "Types of Operating Systems",
      a: (
        <table className="table-auto border border-border">
          <thead>
            <tr>
              <th className="border px-4 py-2">Type</th>
              <th className="border px-4 py-2">Quick Idea</th>
              <th className="border px-4 py-2">Real-life Analogy</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">
                <strong>Batch OS</strong>
              </td>
              <td className="border px-4 py-2">
                Jobs queued, executed one by one
              </td>
              <td className="border px-4 py-2">Factory assembly line</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">
                <strong>Multiprogramming OS</strong>
              </td>
              <td className="border px-4 py-2">
                CPU never idle, switches when process waits
              </td>
              <td className="border px-4 py-2">Chef cooking multiple dishes</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">
                <strong>Multitasking OS</strong>
              </td>
              <td className="border px-4 py-2">
                User feels like multiple apps running together
              </td>
              <td className="border px-4 py-2">Juggling balls in air</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">
                <strong>Time-Sharing OS</strong>
              </td>
              <td className="border px-4 py-2">
                Quick switches, user interactive
              </td>
              <td className="border px-4 py-2">Multi-tab web browsing</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">
                <strong>Real-Time OS</strong>
              </td>
              <td className="border px-4 py-2">
                Deadline-focused, dedicated task
              </td>
              <td className="border px-4 py-2">Airplane autopilot</td>
            </tr>
          </tbody>
        </table>
      ),
    },
    {
      q: "Processes & Threads (important)",
      a: (
        <>
          <p>
            <strong>Process:</strong> A running program (like a student doing
            homework)
          </p>
          <br />
          <p>
            <strong>Thread:</strong> Lightweight part of a process (like writing
            one answer while listening to music)
          </p>
          <br />
          <p>
            <strong>Important:</strong> <code>fork()</code> → creates child
            processes → 2<sup>n</sup> - 1 children (mind-blowing!)
          </p>
          <br />
          <p>
            <strong>Thread types:</strong>
          </p>
          <ul className="list-disc ml-6 text-muted-foreground">
            <li>
              <strong>User threads</strong> → you manage
            </li>
            <li>
              <strong>Kernel threads</strong> → OS manages
            </li>
          </ul>
        </>
      ),
    },
    {
      q: "Process Scheduling – CPU Loves to Juggle",
      a: (
        <>
          <p>
            <strong>Key metrics:</strong>
          </p>
          <ul className="list-disc ml-6 text-muted-foreground">
            <li>
              <strong>Arrival Time ⏱</strong> = when process shows up
            </li>
            <li>
              <strong>Burst Time ⚡</strong> = CPU time needed
            </li>
            <li>
              <strong>Completion Time ✅</strong> = finishes execution
            </li>
            <li>
              <strong>Turnaround Time</strong> = Completion - Arrival
            </li>
            <li>
              <strong>Waiting Time</strong> = Turnaround - Burst
            </li>
          </ul>
          <br />

          <p>
            <strong>Algorithms:</strong>
          </p>
          <ul className="list-disc ml-6 text-muted-foreground">
            <li>
              <strong>FCFS</strong> – First come, first served
            </li>
            <li>
              <strong>SJF</strong> – Shortest job first
            </li>
            <li>
              <strong>SRTF</strong> – Preemptive SJF
            </li>
            <li>
              <strong>RR</strong> – Time slice per process, cycle
            </li>
            <li>
              <strong>Priority</strong> – Highest priority first
            </li>
            <li>
              <strong>HRRN</strong> – Highest response ratio next
            </li>
            <li>
              <strong>MLQ</strong> – Multiple queues by priority
            </li>
            <li>
              <strong>MLFQ</strong> – Processes jump between queues
            </li>
          </ul>
        </>
      ),
    },
    {
      q: "Critical Section & Synchronization",
      a: (
        <>
          <p>
            <strong>Critical Section:</strong> Code using shared resources (like
            checking out groceries)
          </p>
          <p>
            <strong>Race Condition:</strong> Chaos if multiple processes access
            it at once
          </p>
          <br />
          <p>
            <strong>Must-follow rules:</strong>
          </p>
          <ul className="list-disc ml-6 text-muted-foreground">
            <li>
              <strong>Mutual Exclusion</strong> – Only 1 at a time
            </li>
            <li>
              <strong>Progress</strong> – Don’t delay selection
            </li>
            <li>
              <strong>Bounded Waiting</strong> – Everyone eventually gets in
            </li>
          </ul>
          <br />

          <p>
            <strong>Tools:</strong>
          </p>
          <ul className="list-disc ml-6 text-muted-foreground">
            <li>
              <strong>Semaphore:</strong> Red light/green light for processes
            </li>
            <li>
              <strong>Mutex:</strong> Only one worker in a section
            </li>
          </ul>
        </>
      ),
    },
    {
      q: "Deadlocks – Don’t Get Stuck (important)",
      a: (
        <>
          <p>
            <strong>Deadlock:</strong> Processes wait forever for resources.{" "}
            <br />
            <strong>4 Must-have conditions:</strong> Mutual Exclusion + Hold &
            Wait + No Preemption + Circular Wait
          </p>
          <br />

          <p>
            <strong>Handling:</strong>
          </p>
          <ul className="list-disc ml-6 text-muted-foreground">
            <li>
              <strong>Prevention/Avoidance</strong> – Stop it before it happens
            </li>
            <li>
              <strong>Detection & Recovery</strong> – Let it happen, then fix
            </li>
            <li>
              <strong>Ignore</strong> – Windows & Linux love this 🤷‍♂️
            </li>
          </ul>

          <p>
            <strong>Banker’s Algorithm:</strong> Avoid deadlock like a smart
            banker refusing risky loans 💰
          </p>
        </>
      ),
    },
    {
      q: "Memory Management – Brain of the OS",
      a: (
        <>
          <p>
            <strong>Basic Techniques:</strong>
          </p>
          <ul className="list-disc ml-6 text-muted-foreground">
            <li>
              <strong>Overlays:</strong> Load only what you need
            </li>
            <li>
              <strong>Swapping:</strong> Multiprogramming → swap processes
              in/out
            </li>
            <li>
              <strong>Partitions:</strong> Memory slices
            </li>
            <ul>
              <li> Fixed / Variable</li>
              <li>Best Fit / Worst Fit / First Fit</li>
            </ul>
          </ul>

          <br />
          <p>
            <strong>Advanced Techniques:</strong>
          </p>
          <ul className="list-disc ml-6 text-muted-foreground">
            <li>
              <strong>Paging:</strong> Memory = frames, program = pages → no
              fragmentation
            </li>
            <li>
              <strong>Segmentation:</strong> Logical view for humans
            </li>
          </ul>
        </>
      ),
    },
    {
      q: "Page Replacement Algorithms (Important)",
      a: (
        <ul className="list-disc ml-6 text-muted-foreground">
          <li>
            <strong>FIFO:</strong> Replace oldest page first. May cause Belady's
            anomaly.
          </li>
          <li>
            <strong>Optimal:</strong> Replace page not needed for the longest
            future time. Perfect but theoretical.
          </li>
          <li>
            <strong>LRU:</strong> Replace least recently used page.
          </li>
        </ul>
      ),
    },
    {
      q: "Disk Scheduling – Speed Up I/O (important)",
      a: (
        <>
          <p>
            OS schedules I/O requests to the disk efficiently using seek time,
            rotational latency, and transfer time.
          </p>
          <br />
          <p>
            <strong>Key Metrics:</strong>
          </p>
          <ul className="list-disc ml-6 text-muted-foreground">
            <li>
              <strong>Seek Time</strong>: Move arm to track
            </li>
            <li>
              <strong>Rotational Latency</strong>: Wait for sector
            </li>
            <li>
              <strong>Transfer Time</strong>: Data transfer
            </li>
            <li>
              <strong>Access Time</strong> = Seek + Latency + Transfer
            </li>
          </ul>
          <br />
          <p>
            <strong>Algorithms:</strong>
          </p>
          <ul className="list-disc ml-6 text-muted-foreground">
            <li>
              <strong>FCFS</strong> → first come
            </li>
            <li>
              <strong>SSTF</strong> → shortest seek first
            </li>
            <li>
              <strong>SCAN</strong> → elevator
            </li>
            <li>
              <strong>C-SCAN</strong> → circular elevator
            </li>
            <li>
              <strong>LOOK</strong> → stops at last request
            </li>
            <li>
              <strong>C-LOOK</strong> → circular LOOK
            </li>
          </ul>
        </>
      ),
    },
    {
      q: "Banker's Algorithm",
      a: (
        <p>
          Used in deadlock avoidance. Ensures system never allocates resources
          that could leave it in an unsafe state.
        </p>
      ),
    },
    {
      q: "Summary & Tips",
      a: (
        <ul className="list-disc ml-6 text-muted-foreground">
          <li>
            <strong>Deadlocks</strong> and <strong>memory management</strong>{" "}
            are key interview topics.
          </li>
          <li>
            Practice <strong>algorithms</strong> step by step (CPU & Disk
            scheduling, page replacement).
          </li>
          <li>Use simple examples to remember concepts easily.</li>
          <li>
            Revise important formulas: <strong>TAT</strong>, <strong>WT</strong>
            , response ratio.
          </li>
        </ul>
      ),
    },
    {
      q: "9. Quick Tip for Interviews",
      a: (
        <>
          <ul className="list-disc ml-6 text-muted-foreground">
            <li>
              Draw mini diagrams for <strong>process states</strong>,{" "}
              <strong>scheduling</strong>, <strong>paging</strong>, and{" "}
              <strong>deadlocks</strong>.
            </li>
            <li>
              Memorize <strong>1-line definitions</strong> +{" "}
              <strong>real-life analogies</strong> → impress the interviewer.
            </li>
          </ul>
        </>
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
                Master OS fundamentals and confidently tackle any interview
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
