import { Database, Network, Cpu } from "lucide-react";
import BookCard from "@/components/BookCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TypeAnimation } from "react-type-animation";

import cn from "@/assets/cn.png";
import dbms from "@/assets/dbms.png";
import os from "@/assets/os.png";

const Home = () => {
  const books = [
    {
      image: dbms,
      href: "/dbms",
    },
    {
      image: cn,
      href: "/computer-networks",
    },
    {
      image: os,
      href: "/operating-system",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}

        <section className="relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-background py-20">
          {/* dotted background */}
          <div className="absolute inset-0 bg-[radial-gradient(gray_1px,transparent_1px)] [background-size:20px_20px] opacity-50 pointer-events-none" />

          <div className="container px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-6xl">
                <span className="text-blue-500">TAP</span>{" "}
                <span className="text-gray-700">CS Fundamentals</span>
              </h1>

              {/* Typing Text Animation */}
              <TypeAnimation
                sequence={[
                  "Master DBMS, OS & CN",
                  1500,
                  "Crack Your Next Interview",
                  1500,
                  "Build Strong CS Fundamentals",
                  1500,
                  "Learn Smart, Not Hard 🎯",
                  1500,
                ]}
                wrapper="span"
                speed={50}
                className="block text-xl md:text-2xl font-medium text-blue-500 mb-6"
                repeat={Infinity}
              />

              <p className="mb-8 text-xl text-muted-foreground">
                Master Computer Science concepts with curated interview
                questions and detailed answers
              </p>

              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <div className="h-1 w-12 rounded-full bg-primary" />
                <span className="text-blue-500">Gamify</span> Learning{" "}
                <span className="text-blue-500">Simplify</span> Employment
                <div className="h-1 w-12 rounded-full bg-primary" />
              </div>
            </div>
          </div>
        </section>

        <div className="h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent mb-8"></div>

        {/* Books Section */}
<section className="py-16 sm:py-20">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-12">
      {books.map((book) => (
        <div
          key={book.href}
          className="w-40 sm:w-48 md:w-56 lg:w-60 xl:w-64 flex justify-center"
        >
          <BookCard href={book.href} image={book.image} />
        </div>
      ))}
    </div>
  </div>
</section>


        {/* Features Section */}
        <section className="bg-muted/30 py-16">
          <div className="container px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-12 text-center text-3xl font-bold text-foreground text-gray-600">
                Why Choose TAP CS Fundamentals?
              </h2>

              <div className="grid gap-8 md:grid-cols-3">
                {/* Questions Per Topic */}
                <div className="text-center">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <span className="text-2xl font-bold text-primary">15+</span>
                  </div>
                  <h3 className="mb-2 font-semibold text-foreground text-gray-800">
                    Questions Per Topic
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Only the <b>most important interview questions</b> from
                    DBMS, OS, and Computer Networks.
                  </p>
                </div>

                {/* Concise Answers */}
                <div className="text-center">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <span className="text-2xl font-bold text-primary">✓</span>
                  </div>
                  <h3 className="mb-2 font-semibold text-foreground text-gray-800">
                    Concise Answers
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    <b>Clear, direct explanations</b> that help you remember
                    fast and answer confidently.
                  </p>
                </div>

                {/* Interview Ready */}
                <div className="text-center">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <span className="text-2xl font-bold text-primary">🚀</span>
                  </div>
                  <h3 className="mb-2 font-semibold text-foreground text-gray-800">
                    Interview Ready
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Focus only on what matters to{" "}
                    <b>crack CS fundamentals questions</b> in any company.
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
