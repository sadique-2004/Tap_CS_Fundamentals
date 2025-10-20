import { ArrowRight, Database } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const DBMS = () => {
  const questions = [
    {
      q: "What is a Database Management System (DBMS)?",
      a: "A DBMS is software that manages databases, providing an interface for users to create, read, update, and delete data. It ensures data integrity, security, and efficient data management through features like transaction control, backup, and recovery."
    },
    {
      q: "What is the difference between DBMS and RDBMS?",
      a: "DBMS stores data as files with no relationships, while RDBMS stores data in tables with relationships defined by primary and foreign keys. RDBMS supports ACID properties and normalization, making it more suitable for complex applications."
    },
    {
      q: "What are ACID properties?",
      a: "ACID stands for Atomicity (all or nothing), Consistency (data integrity), Isolation (transactions are independent), and Durability (committed changes persist). These properties ensure reliable database transactions."
    },
    {
      q: "What is normalization and why is it important?",
      a: "Normalization is the process of organizing data to reduce redundancy and dependency. It divides larger tables into smaller ones and defines relationships. This improves data integrity, reduces storage, and makes maintenance easier."
    },
    {
      q: "Explain the different normal forms (1NF, 2NF, 3NF, BCNF).",
      a: "1NF eliminates repeating groups; 2NF removes partial dependencies; 3NF removes transitive dependencies; BCNF is a stricter version of 3NF where every determinant is a candidate key. Each level reduces redundancy and improves structure."
    },
    {
      q: "What is a Primary Key and Foreign Key?",
      a: "A Primary Key uniquely identifies each record in a table and cannot be NULL. A Foreign Key is a field in one table that references the Primary Key of another table, establishing relationships between tables."
    },
    {
      q: "What are Indexes and why are they used?",
      a: "Indexes are data structures that improve query performance by allowing faster data retrieval. They work like a book's index, pointing to data locations. However, they consume additional storage and can slow down insert/update operations."
    },
    {
      q: "What is the difference between DELETE, TRUNCATE, and DROP?",
      a: "DELETE removes specific rows and can be rolled back; TRUNCATE removes all rows, is faster, and cannot be rolled back; DROP removes the entire table structure and data permanently. Each has different use cases and performance implications."
    },
    {
      q: "What is a Transaction?",
      a: "A Transaction is a sequence of database operations treated as a single unit of work. It must follow ACID properties and either completes entirely (commit) or has no effect (rollback), ensuring data consistency."
    },
    {
      q: "Explain different types of JOIN operations.",
      a: "INNER JOIN returns matching rows from both tables; LEFT JOIN returns all left table rows plus matches; RIGHT JOIN returns all right table rows plus matches; FULL OUTER JOIN returns all rows from both tables with NULLs for non-matches."
    },
    {
      q: "What is Denormalization and when is it used?",
      a: "Denormalization is intentionally introducing redundancy to improve read performance. It's used in data warehousing and when query performance is more critical than storage efficiency, trading normalization for speed."
    },
    {
      q: "What are Stored Procedures and their advantages?",
      a: "Stored Procedures are precompiled SQL code stored in the database. They improve performance through compilation, enhance security by controlling access, reduce network traffic, and enable code reusability across applications."
    },
    {
      q: "What is a Deadlock and how can it be prevented?",
      a: "A Deadlock occurs when two transactions wait for each other to release locks. Prevention strategies include: ordering resources consistently, using timeout mechanisms, implementing deadlock detection algorithms, and keeping transactions short."
    },
    {
      q: "What is the difference between Clustered and Non-Clustered Index?",
      a: "A Clustered Index determines physical data order and each table can have only one. A Non-Clustered Index creates a separate structure pointing to data and a table can have multiple. Clustered is faster for range queries."
    },
    {
      q: "What are Database Triggers?",
      a: "Triggers are automatic procedures that execute in response to specific events (INSERT, UPDATE, DELETE) on a table. They enforce business rules, maintain data integrity, audit changes, and automate tasks without application code changes."
    }
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-to-br from-blue-500 to-blue-600 py-16 text-white">
          <div className="container px-4">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
                <Database className="h-10 w-10" />
              </div>
              <h1 className="mb-4 text-4xl font-bold md:text-5xl">
                Database Management Systems
              </h1>
              <p className="text-lg text-blue-50">
                Master the fundamentals with {questions.length} essential DBMS interview questions
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
              <Link to="/">
                <Button variant="outline" size="lg">
                  ← Back to Home
                </Button>
              </Link>
              <Link to="/computer-networks">
                <Button size="lg" className="gap-2">
                  Next: Computer Networks
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

export default DBMS;
