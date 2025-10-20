import { Database, Network, Cpu } from "lucide-react";
import BookCard from "@/components/BookCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Home = () => {
  const books = [
    {
      title: "Database Management Systems",
      description: "Top Interview Questions & Answers",
      icon: Database,
      href: "/dbms",
      gradient: "bg-gradient-to-br from-blue-500 to-blue-600",
    },
    {
      title: "Computer Networks",
      description: "Top Interview Questions & Answers",
      icon: Network,
      href: "/computer-networks",
      gradient: "bg-gradient-to-br from-indigo-500 to-indigo-600",
    },
    {
      title: "Operating System",
      description: "Top Interview Questions & Answers",
      icon: Cpu,
      href: "/operating-system",
      gradient: "bg-gradient-to-br from-purple-500 to-purple-600",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-background py-20">
          <div className="container px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 text-5xl font-bold tracking-tight text-foreground md:text-6xl">
                TAP CS Fundamentals
              </h1>
              <p className="mb-8 text-xl text-muted-foreground">
                Master Computer Science concepts with curated interview questions and detailed answers
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <div className="h-1 w-12 rounded-full bg-primary" />
                <span>Your gateway to technical excellence</span>
                <div className="h-1 w-12 rounded-full bg-primary" />
              </div>
            </div>
          </div>
        </section>

        {/* Books Section */}
        <section className="py-20">
          <div className="container px-4">
            <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
              {books.map((book) => (
                <BookCard key={book.title} {...book} />
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-muted/30 py-16">
          <div className="container px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-12 text-center text-3xl font-bold text-foreground">
                Why Choose TAP CS Fundamentals?
              </h2>
              <div className="grid gap-8 md:grid-cols-3">
                <div className="text-center">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <span className="text-2xl font-bold text-primary">15+</span>
                  </div>
                  <h3 className="mb-2 font-semibold text-foreground">Questions Per Topic</h3>
                  <p className="text-sm text-muted-foreground">
                    Carefully selected interview questions
                  </p>
                </div>
                <div className="text-center">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <span className="text-2xl font-bold text-primary">✓</span>
                  </div>
                  <h3 className="mb-2 font-semibold text-foreground">Concise Answers</h3>
                  <p className="text-sm text-muted-foreground">
                    Clear explanations that stick
                  </p>
                </div>
                <div className="text-center">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <span className="text-2xl font-bold text-primary">📱</span>
                  </div>
                  <h3 className="mb-2 font-semibold text-foreground">Responsive Design</h3>
                  <p className="text-sm text-muted-foreground">
                    Study anywhere, on any device
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
