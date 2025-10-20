import { ArrowRight, Database } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const DBMS = () => {
  const questions = [
    {
      a: (
        <div className="space-y-6">
          {/* Database Definition */}
          <div>
            <h2 className="text-3xl font-bold text-amber-400 mb-2 text-center">Introduction to Database and DBMS</h2>
            <h3 className="text-lg font-semibold mb-2">📘 Database:</h3>
            <p className="text-gray-700">
              A <strong>database</strong> is a collection of related data
              representing some real-world aspect. It is designed to be built,
              stored, and retrieved efficiently for a specific purpose.
            </p>
          </div>

          {/* DBMS Definition */}
          <div>
            <h3 className="text-lg font-semibold mb-2">
              🧠 DBMS (Database Management System):
            </h3>
            <p className="text-gray-700">
              A <strong>DBMS</strong> is software that allows users to store,
              retrieve, and manage data securely and efficiently. It acts as an{" "}
              <strong>interface between the user and the database.</strong>
            </p>
          </div>

          {/* Functions of DBMS */}
          <div>
            <h3 className="text-lg font-semibold mb-2">
              ⚙️ Functions of DBMS:
            </h3>
            <ul className="list-disc ml-6 space-y-1 text-gray-700">
              <li>Data storage, retrieval, and update</li>
              <li>User access control and data security</li>
              <li>Backup and recovery</li>
              <li>Data integrity management</li>
              <li>Concurrency control</li>
            </ul>
          </div>

          {/* Problems with File-Based Systems */}
          <div>
            <h3 className="text-lg font-semibold mb-2 text-red-600">
              🚫 Problems with File-Based Systems:
            </h3>
            <ul className="list-disc ml-6 space-y-1 text-gray-700">
              <li>Data redundancy and inconsistency</li>
              <li>Difficulty in data access</li>
              <li>Data isolation</li>
              <li>Integrity problems</li>
              <li>Atomicity of updates</li>
              <li>Concurrent access by multiple users</li>
              <li>Security issues</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      a: (
        <div className="space-y-8">
          {/* Introduction */}
          <div>
            <h2 className="text-3xl font-bold text-amber-400 mb-2">ER Diagram (Entity-Relationship Model)</h2>
            <p className="text-gray-700 text-lg">
              An{" "}
              <span className="font-semibold text-indigo-600">ER Diagram</span>{" "}
              is a conceptual model representing the logical structure of a
              database using:
            </p>
            <ul className="list-disc ml-8 text-gray-800 mt-3 space-y-1">
              <li>Entities</li>
              <li>Attributes</li>
              <li>Relationships</li>
            </ul>
          </div>

          {/* ER Diagram Image */}
          <div className="flex justify-center">
            <img
              src="https://www.hcbravo.org/IntroDataSci/bookdown-notes/img/er2.png"
              alt="ER Diagram Example"
              className="w-72 md:w-96 rounded-xl shadow-2xl border border-gray-200 hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Entity Set Section */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-2xl transition">
            <h3 className="text-xl font-bold text-indigo-600 mb-4">
              2.1 Entity Set
            </h3>
            <p className="text-gray-700 mb-3">
              <strong>Entity:</strong> A real-world object (e.g.,{" "}
              <em>Student</em>, <em>Teacher</em>).
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Entity Set:</strong> Collection of similar entities.
            </p>

            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-xl border border-indigo-100">
              <h4 className="font-semibold text-indigo-700 mb-2">
                Types of Entities
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2 text-green-600 font-bold">✔</span>
                  <span>
                    <strong>Strong Entity:</strong> Has a primary key (e.g.,{" "}
                    <code className="bg-gray-100 px-1 rounded">
                      Student(Roll_No, Name)
                    </code>
                    )
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-yellow-600 font-bold">★</span>
                  <span>
                    <strong>Weak Entity:</strong> Depends on a strong entity and
                    identified using a discriminator (partial key)
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Attributes Section */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-2xl transition">
            <h3 className="text-xl font-bold text-pink-600 mb-4">
              2.2 Attributes
            </h3>
            <p className="text-gray-700 mb-6">
              Properties that describe an entity.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm uppercase">
                    <th className="py-3 px-4 text-left rounded-tl-lg">Type</th>
                    <th className="py-3 px-4 text-left">Description</th>
                    <th className="py-3 px-4 text-left rounded-tr-lg">
                      Example
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-800">
                  <tr className="border-t border-gray-200 hover:bg-indigo-50">
                    <td className="py-2 px-4 font-semibold">Simple</td>
                    <td className="py-2 px-4">Cannot be divided further</td>
                    <td className="py-2 px-4">Age</td>
                  </tr>
                  <tr className="border-t border-gray-200 hover:bg-indigo-50">
                    <td className="py-2 px-4 font-semibold">Composite</td>
                    <td className="py-2 px-4">Combination of sub-parts</td>
                    <td className="py-2 px-4">Name (First, Last)</td>
                  </tr>
                  <tr className="border-t border-gray-200 hover:bg-indigo-50">
                    <td className="py-2 px-4 font-semibold">Multivalued</td>
                    <td className="py-2 px-4">Multiple values possible</td>
                    <td className="py-2 px-4">Phone Numbers</td>
                  </tr>
                  <tr className="border-t border-gray-200 hover:bg-indigo-50">
                    <td className="py-2 px-4 font-semibold">Derived</td>
                    <td className="py-2 px-4">Derived from another value</td>
                    <td className="py-2 px-4">Age from DOB</td>
                  </tr>
                  <tr className="border-t border-gray-200 hover:bg-indigo-50">
                    <td className="py-2 px-4 font-semibold">Key</td>
                    <td className="py-2 px-4">Uniquely identifies an entity</td>
                    <td className="py-2 px-4">Roll_No</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ),
    },
    {
     
      a: (
        <div className="space-y-8">
          {/* Section Title */}
          <div className="text-center">
             <h2 className="text-3xl font-bold text-amber-400 mb-2">Relationships and Cardinality</h2>
            <p className="text-gray-600 text-sm">
              Understanding how entities connect and interact in a database
              model.
            </p>
          </div>

          {/* Relationship Types */}
          <div className="bg-gray-800/60 backdrop-blur-md border border-gray-700 rounded-2xl p-6 shadow-xl hover:shadow-blue-500/20 transition-all duration-300">
            <h3 className="text-xl font-semibold text-blue-400 mb-4">
              🔸 Types of Relationships
            </h3>
            <ul className="space-y-3 text-gray-200 list-disc list-inside">
              <li>
                <strong>Unary (1 Entity):</strong> An entity relates to itself —
                e.g., <em>Employee supervises Employee</em>.
              </li>
              <li>
                <strong>Binary (2 Entities):</strong> The most common type —
                e.g., <em>Student–Course</em>.
              </li>
              <li>
                <strong>Ternary (3 Entities):</strong> Involves three entities —
                e.g., <em>Doctor–Patient–Medicine</em>.
              </li>
            </ul>
          </div>

          {/* Cardinality Constraints Table */}
          <div className="bg-gray-800/60 backdrop-blur-md border border-gray-700 rounded-2xl p-6 shadow-xl hover:shadow-blue-500/20 transition-all duration-300">
            <h3 className="text-xl font-semibold text-blue-400 mb-4">
              🧮 Cardinality Constraints
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-gray-300 border border-gray-700 rounded-xl overflow-hidden">
                <thead className="bg-blue-600/30 text-blue-200 uppercase text-xs">
                  <tr>
                    <th className="px-4 py-2 text-left">Type</th>
                    <th className="px-4 py-2 text-left">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  <tr className="hover:bg-gray-700/40 transition-colors">
                    <td className="px-4 py-2 font-semibold text-white">
                      One-to-One
                    </td>
                    <td className="px-4 py-2">
                      Each entity in A relates to at most one in B.
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-700/40 transition-colors">
                    <td className="px-4 py-2 font-semibold text-white">
                      One-to-Many
                    </td>
                    <td className="px-4 py-2">
                      One entity in A can relate to multiple entities in B.
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-700/40 transition-colors">
                    <td className="px-4 py-2 font-semibold text-white">
                      Many-to-One
                    </td>
                    <td className="px-4 py-2">
                      Many entities in A can relate to one entity in B.
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-700/40 transition-colors">
                    <td className="px-4 py-2 font-semibold text-white">
                      Many-to-Many
                    </td>
                    <td className="px-4 py-2">
                      Many entities in A can relate to many entities in B.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Illustration Section */}
          <div className="text-center mt-6">
            <img
              src="http://jcsites.juniata.edu/faculty/rhodes/dbms/images/card1.gif"
              alt="ER Diagram Relationship Example"
              className="mx-auto rounded-xl border border-gray-700 shadow-lg hover:scale-105 transition-transform duration-300"
            />
            <p className="text-gray-400 text-xs mt-2 italic">
              Example of cardinality between entities in an ER diagram.
            </p>
          </div>
        </div>
      ),
    },
    {
      a: (
        <div className="space-y-8">
          {/* Section Title */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-amber-400 mb-2">
              🔑 Keys in DBMS
            </h2>
            <p className="text-gray-300 text-sm">
              Keys are attributes that help uniquely identify records in a
              database.
            </p>
          </div>

          {/* Key Table */}
          <div className="bg-gray-800/60 backdrop-blur-md border border-gray-700 rounded-2xl p-6 shadow-xl hover:shadow-amber-400/30 transition-all duration-300">
            <h3 className="text-xl font-semibold text-amber-300 mb-4">
              🧩 Types of Keys
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-gray-300 border border-gray-700 rounded-xl overflow-hidden">
                <thead className="bg-amber-600/30 text-amber-200 uppercase text-xs">
                  <tr>
                    <th className="px-4 py-2 text-left">Key Type</th>
                    <th className="px-4 py-2 text-left">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  <tr className="hover:bg-gray-700/40 transition-colors">
                    <td className="px-4 py-2 font-semibold text-white">
                      Super Key
                    </td>
                    <td className="px-4 py-2">
                      Set of attributes that uniquely identify tuples.
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-700/40 transition-colors">
                    <td className="px-4 py-2 font-semibold text-white">
                      Candidate Key
                    </td>
                    <td className="px-4 py-2">
                      A minimal super key with no redundant attributes.
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-700/40 transition-colors">
                    <td className="px-4 py-2 font-semibold text-white">
                      Primary Key
                    </td>
                    <td className="px-4 py-2">
                      The chosen candidate key that uniquely identifies records
                      and cannot be NULL.
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-700/40 transition-colors">
                    <td className="px-4 py-2 font-semibold text-white">
                      Alternate Key
                    </td>
                    <td className="px-4 py-2">
                      Remaining candidate keys not chosen as the primary key.
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-700/40 transition-colors">
                    <td className="px-4 py-2 font-semibold text-white">
                      Foreign Key
                    </td>
                    <td className="px-4 py-2">
                      Refers to the primary key in another table to maintain
                      relationships.
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-700/40 transition-colors">
                    <td className="px-4 py-2 font-semibold text-white">
                      Composite Key
                    </td>
                    <td className="px-4 py-2">
                      Formed by combining two or more attributes to uniquely
                      identify a record.
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-700/40 transition-colors">
                    <td className="px-4 py-2 font-semibold text-white">
                      Unique Key
                    </td>
                    <td className="px-4 py-2">
                      Ensures all values are unique but allows one or more
                      NULLs.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Visualization */}
          <div className="text-center mt-6">
            <img
              src="https://1.bp.blogspot.com/-dCJDtnW_xc8/YMnY-vxY8II/AAAAAAAAAMY/NHhSqn47Ncog61nlj5wYy7oSGqG1Jy2lQCLcBGAsYHQ/s1148/what%2Bis%2Bprimary%2Bkey%2Bin%2Bdatabase.png"
              alt="Keys in DBMS Diagram"
              className="mx-auto rounded-xl border border-gray-700 shadow-lg hover:scale-105 transition-transform duration-300"
            />
            <p className="text-gray-400 text-xs mt-2 italic">
              Visual representation of different types of keys in a DBMS.
            </p>
          </div>
        </div>
      ),
    },
    {
      // q: "Functional Dependency (FD)",
      a: (
        <div className="space-y-8">
          {/* Title */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-blue-400 mb-2">
              🔹 Functional Dependency (FD)
            </h2>
            <p className="text-gray-300 text-sm">
              A Functional Dependency (FD) expresses a relationship between two
              attributes in a relation.
            </p>
          </div>

          {/* Definition Card */}
          <div className="bg-gray-800/60 backdrop-blur-md border border-gray-700 rounded-2xl p-6 shadow-xl hover:shadow-blue-400/30 transition-all duration-300">
            <p className="text-gray-200 leading-relaxed">
              If two tuples have the same value for attribute{" "}
              <span className="font-semibold text-blue-300">A</span>, they must
              also have the same value for attribute{" "}
              <span className="font-semibold text-blue-300">B</span>.
            </p>
            <p className="text-gray-400 mt-3 italic">
              Represented as:{" "}
              <span className="text-white font-mono bg-gray-900/50 px-2 py-1 rounded-md border border-gray-700">
                A → B
              </span>
            </p>
          </div>

          {/* FD Types */}
          <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
            <h3 className="text-xl font-semibold text-blue-300 mb-4">
              ⚙️ Types of Functional Dependency
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Trivial FD */}
              <div className="border border-gray-700 rounded-xl p-4 bg-gray-800/60 hover:bg-gray-800/80 transition-colors">
                <h4 className="text-lg font-bold text-white mb-2">
                  🌀 Trivial FD
                </h4>
                <p className="text-gray-300">
                  Occurs when the dependent attribute set{" "}
                  <span className="text-blue-300 font-semibold">Y</span> is a
                  subset of the determinant{" "}
                  <span className="text-blue-300 font-semibold">X</span>.
                </p>
                <p className="text-gray-400 mt-1 text-sm italic">
                  Notation: Y ⊆ X
                </p>
              </div>

              {/* Non-Trivial FD */}
              <div className="border border-gray-700 rounded-xl p-4 bg-gray-800/60 hover:bg-gray-800/80 transition-colors">
                <h4 className="text-lg font-bold text-white mb-2">
                  💡 Non-Trivial FD
                </h4>
                <p className="text-gray-300">
                  Occurs when the dependent attribute set{" "}
                  <span className="text-blue-300 font-semibold">Y</span> is not
                  a subset of the determinant{" "}
                  <span className="text-blue-300 font-semibold">X</span>.
                </p>
                <p className="text-gray-400 mt-1 text-sm italic">
                  Notation: Y ⊄ X
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
  a: (
    <div className="space-y-8">
      {/* Title */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-green-400 mb-2">
          🔹 Decomposition & Normalization
        </h2>
        <p className="text-gray-300 text-sm">
          Breaking relations into smaller parts while keeping data consistent.
        </p>
      </div>

      {/* Decomposition Card */}
      <div className="bg-gray-800/60 backdrop-blur-md border border-gray-700 rounded-2xl p-6 shadow-xl hover:shadow-green-400/30 transition-all duration-300">
        <h3 className="text-xl font-semibold text-green-300 mb-2">⚡ Decomposition</h3>
        <p className="text-gray-200 leading-relaxed">
          Breaking a relation into smaller relations to reduce redundancy and improve efficiency.
        </p>
        <ul className="list-disc list-inside mt-3 text-gray-300">
          <li><strong>Lossless Join:</strong> No data loss after decomposition</li>
          <li><strong>Dependency Preservation:</strong> All functional dependencies are maintained</li>
        </ul>
      </div>

      {/* Normalization Forms Table */}
      <div className="overflow-x-auto">
        <table className="table-auto border border-collapse border-gray-300 w-full text-left bg-gray-900/50 rounded-xl shadow-lg">
          <thead className="bg-gray-700">
            <tr>
              <th className="border px-4 py-2 text-green-300">Normal Form</th>
              <th className="border px-4 py-2 text-green-300">Condition</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-800 transition-colors">
              <td className="border px-4 py-2 font-semibold text-white">1NF</td>
              <td className="border px-4 py-2 text-gray-300">Atomic values only</td>
            </tr>
            <tr className="hover:bg-gray-800 transition-colors">
              <td className="border px-4 py-2 font-semibold text-white">2NF</td>
              <td className="border px-4 py-2 text-gray-300">1NF + No Partial Dependency</td>
            </tr>
            <tr className="hover:bg-gray-800 transition-colors">
              <td className="border px-4 py-2 font-semibold text-white">3NF</td>
              <td className="border px-4 py-2 text-gray-300">2NF + No Transitive Dependency</td>
            </tr>
            <tr className="hover:bg-gray-800 transition-colors">
              <td className="border px-4 py-2 font-semibold text-white">BCNF</td>
              <td className="border px-4 py-2 text-gray-300">3NF + Every determinant is a super key</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Visualization */}
      <div className="text-center">
        <img
          src="https://media.geeksforgeeks.org/wp-content/uploads/20230512174919/BCNF-in-DBMS-660.webp"
          className="mx-auto rounded-xl border border-gray-700 shadow-lg hover:scale-105 transition-transform duration-300"
        />
        <p className="text-gray-400 text-xs mt-2 italic">
          Example of decomposition & normalization from 1NF → BCNF
        </p>
      </div>
    </div>
  ),
},
{
  
  a: (
    <div className="space-y-8">
      {/* Title */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-purple-400 mb-2">
          🔹 Transactions in DBMS
        </h2>
        <p className="text-gray-300 text-sm">
          A single logical unit of work in a DBMS ensuring data integrity.
        </p>
      </div>

      {/* Transaction States */}
      <div className="bg-gray-800/60 backdrop-blur-md border border-gray-700 rounded-2xl p-6 shadow-xl hover:shadow-purple-400/30 transition-all duration-300">
        <h3 className="text-xl font-semibold text-purple-300 mb-2">⚡ Transaction States</h3>
        <ul className="list-disc list-inside text-gray-300">
          <li>Active</li>
          <li>Partially Committed</li>
          <li>Committed</li>
          <li>Failed</li>
          <li>Aborted</li>
          <li>Terminated</li>
        </ul>
      </div>

      {/* ACID Properties */}
      <div className="overflow-x-auto">
        <table className="table-auto border border-collapse border-gray-300 w-full text-left bg-gray-900/50 rounded-xl shadow-lg">
          <thead className="bg-gray-700">
            <tr>
              <th className="border px-4 py-2 text-purple-300">Property</th>
              <th className="border px-4 py-2 text-purple-300">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-800 transition-colors">
              <td className="border px-4 py-2 font-semibold text-white">Atomicity</td>
              <td className="border px-4 py-2 text-gray-300">All or none rule</td>
            </tr>
            <tr className="hover:bg-gray-800 transition-colors">
              <td className="border px-4 py-2 font-semibold text-white">Consistency</td>
              <td className="border px-4 py-2 text-gray-300">Maintains integrity constraints</td>
            </tr>
            <tr className="hover:bg-gray-800 transition-colors">
              <td className="border px-4 py-2 font-semibold text-white">Isolation</td>
              <td className="border px-4 py-2 text-gray-300">Transactions execute independently</td>
            </tr>
            <tr className="hover:bg-gray-800 transition-colors">
              <td className="border px-4 py-2 font-semibold text-white">Durability</td>
              <td className="border px-4 py-2 text-gray-300">Results persist after commit</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  ),
},
// 8. Schedules in DBMS
{
  q: "Schedules in DBMS",
  a: (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-purple-400">🔹 Schedules in DBMS</h2>

      <div className="bg-gray-800/60 backdrop-blur-md border border-gray-700 rounded-2xl p-6 shadow-xl hover:shadow-purple-400/30 transition-all duration-300">
        <h3 className="text-xl font-semibold text-purple-300 mb-2">Types</h3>
        <ul className="list-disc list-inside text-gray-300">
          <li>Serial Schedule: Transactions execute one after another</li>
          <li>Non-Serial Schedule: Transactions interleave operations</li>
        </ul>
      </div>

      <div className="bg-gray-800/60 backdrop-blur-md border border-gray-700 rounded-2xl p-6 shadow-xl">
        <h3 className="text-xl font-semibold text-purple-300 mb-2">Serializability</h3>
        <ul className="list-disc list-inside text-gray-300">
          <li>Conflict Serializable: Equivalent to serial schedule by swapping non-conflicting operations</li>
          <li>View Serializable: Equivalent in view to serial schedule</li>
        </ul>
      </div>

      <div className="overflow-x-auto bg-gray-900/50 border border-gray-700 rounded-xl shadow-lg p-4">
        <h3 className="text-xl font-semibold text-purple-300 mb-2">Recoverability</h3>
        <table className="table-auto border border-collapse border-gray-300 w-full text-left">
          <thead className="bg-gray-700">
            <tr>
              <th className="border px-4 py-2 text-purple-300">Type</th>
              <th className="border px-4 py-2 text-purple-300">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-800">
              <td className="border px-4 py-2 font-semibold text-white">Recoverable</td>
              <td className="border px-4 py-2 text-gray-300">Commit depends on prior commit</td>
            </tr>
            <tr className="hover:bg-gray-800">
              <td className="border px-4 py-2 font-semibold text-white">Cascading</td>
              <td className="border px-4 py-2 text-gray-300">Failure causes rollback of others</td>
            </tr>
            <tr className="hover:bg-gray-800">
              <td className="border px-4 py-2 font-semibold text-white">Cascadeless</td>
              <td className="border px-4 py-2 text-gray-300">No read before commit</td>
            </tr>
            <tr className="hover:bg-gray-800">
              <td className="border px-4 py-2 font-semibold text-white">Strict</td>
              <td className="border px-4 py-2 text-gray-300">No read/write before commit</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  ),
},
{
  q: "Relational Algebra Operators",
  a: (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-purple-400">🔹 Relational Algebra Operators</h2>

      <div className="overflow-x-auto bg-gray-900/50 border border-gray-700 rounded-xl shadow-lg p-4">
        <table className="table-auto border border-collapse border-gray-300 w-full text-left">
          <thead className="bg-gray-700">
            <tr>
              <th className="border px-4 py-2 text-purple-300">Operator</th>
              <th className="border px-4 py-2 text-purple-300">Symbol</th>
              <th className="border px-4 py-2 text-purple-300">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-800">
              <td className="border px-4 py-2 font-semibold text-white">Selection</td>
              <td className="border px-4 py-2 text-gray-300">σ</td>
              <td className="border px-4 py-2 text-gray-300">Selects rows</td>
            </tr>
            <tr className="hover:bg-gray-800">
              <td className="border px-4 py-2 font-semibold text-white">Projection</td>
              <td className="border px-4 py-2 text-gray-300">π</td>
              <td className="border px-4 py-2 text-gray-300">Selects columns</td>
            </tr>
            <tr className="hover:bg-gray-800">
              <td className="border px-4 py-2 font-semibold text-white">Union</td>
              <td className="border px-4 py-2 text-gray-300">∪</td>
              <td className="border px-4 py-2 text-gray-300">Combines tuples</td>
            </tr>
            <tr className="hover:bg-gray-800">
              <td className="border px-4 py-2 font-semibold text-white">Set Difference</td>
              <td className="border px-4 py-2 text-gray-300">−</td>
              <td className="border px-4 py-2 text-gray-300">Tuples in R1 not in R2</td>
            </tr>
            <tr className="hover:bg-gray-800">
              <td className="border px-4 py-2 font-semibold text-white">Cartesian Product</td>
              <td className="border px-4 py-2 text-gray-300">×</td>
              <td className="border px-4 py-2 text-gray-300">Combines all tuples</td>
            </tr>
            <tr className="hover:bg-gray-800">
              <td className="border px-4 py-2 font-semibold text-white">Rename</td>
              <td className="border px-4 py-2 text-gray-300">ρ</td>
              <td className="border px-4 py-2 text-gray-300">Renames a relation</td>
            </tr>
            <tr className="hover:bg-gray-800">
              <td className="border px-4 py-2 font-semibold text-white">Join</td>
              <td className="border px-4 py-2 text-gray-300">⋈</td>
              <td className="border px-4 py-2 text-gray-300">Combines based on condition</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-300 mt-2">
        Extended Operators: Intersection (∩), Natural Join (⋈), Outer Join (⟕, ⟖, ⟗), Division (/)
      </p>
    </div>
  ),
},
{
  q: "File Structures & Indexing",
  a: (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-purple-400">🔹 File Structures & Indexing</h2>
      <ul className="list-disc list-inside text-gray-300">
        <li>Primary Index: Built on primary key</li>
        <li>Clustering Index: On non-key fields physically ordered</li>
        <li>Secondary Index: Additional access method</li>
        <li>B-Tree: Keys & data in internal & leaf nodes</li>
        <li>B+ Tree: Data only in leaf nodes → faster search</li>
      </ul>
    </div>
  ),
},
{
  a: (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-purple-400">🔹 SQL Commands</h2>

      <div className="overflow-x-auto">
        <pre className="bg-gray-900 text-green-400 p-4 rounded-xl shadow-lg text-sm font-mono">
{`-- DDL
CREATE TABLE Student (RollNo INT PRIMARY KEY, Name VARCHAR(50), Age INT);
ALTER TABLE Student ADD COLUMN Marks INT;
DROP TABLE Student;
TRUNCATE TABLE Student;
RENAME TABLE Student TO Learner;

-- DML
SELECT * FROM Student WHERE Age > 18;
INSERT INTO Student VALUES (1, 'Sadique', 21);
UPDATE Student SET Name = 'Md Sadique' WHERE RollNo = 1;
DELETE FROM Student WHERE RollNo = 1;

-- DCL
GRANT SELECT ON Student TO User1;
REVOKE SELECT ON Student FROM User1;

-- TCL
COMMIT;
ROLLBACK;
SAVEPOINT sp1;`}
        </pre>
      </div>
    </div>
  ),
},
{
  q: "Important SQL Queries",
  a: (
    <div className="overflow-x-auto">
      <pre className="bg-gray-900 text-green-400 p-4 rounded-xl shadow-lg text-sm font-mono">
{`-- Create Table
CREATE TABLE Student (
  RollNo INT PRIMARY KEY,
  Name VARCHAR(50),
  Age INT
);

-- Insert Data
INSERT INTO Student VALUES (1, 'Sadique', 21);

-- Retrieve Data
SELECT * FROM Student WHERE Age > 18;

-- Update Data
UPDATE Student SET Name = 'Md Sadique' WHERE RollNo = 1;

-- Delete Data
DELETE FROM Student WHERE RollNo = 1;`}
      </pre>
    </div>
  ),
}
,
    {
      q: "What is the difference between DBMS and RDBMS?",
      a: "DBMS stores data as files with no relationships, while RDBMS stores data in tables with relationships defined by primary and foreign keys. RDBMS supports ACID properties and normalization, making it more suitable for complex applications.",
    },
    {
      q: "What are ACID properties?",
      a: "ACID stands for Atomicity (all or nothing), Consistency (data integrity), Isolation (transactions are independent), and Durability (committed changes persist). These properties ensure reliable database transactions.",
    },
    {
      q: "What is normalization and why is it important?",
      a: "Normalization is the process of organizing data to reduce redundancy and dependency. It divides larger tables into smaller ones and defines relationships. This improves data integrity, reduces storage, and makes maintenance easier.",
    },
    {
      q: "Explain the different normal forms (1NF, 2NF, 3NF, BCNF).",
      a: "1NF eliminates repeating groups; 2NF removes partial dependencies; 3NF removes transitive dependencies; BCNF is a stricter version of 3NF where every determinant is a candidate key. Each level reduces redundancy and improves structure.",
    },
    {
      q: "What is a Primary Key and Foreign Key?",
      a: "A Primary Key uniquely identifies each record in a table and cannot be NULL. A Foreign Key is a field in one table that references the Primary Key of another table, establishing relationships between tables.",
    },
    {
      q: "What are Indexes and why are they used?",
      a: "Indexes are data structures that improve query performance by allowing faster data retrieval. They work like a book's index, pointing to data locations. However, they consume additional storage and can slow down insert/update operations.",
    },
    {
      q: "What is the difference between DELETE, TRUNCATE, and DROP?",
      a: "DELETE removes specific rows and can be rolled back; TRUNCATE removes all rows, is faster, and cannot be rolled back; DROP removes the entire table structure and data permanently. Each has different use cases and performance implications.",
    },
    {
      q: "What is a Transaction?",
      a: "A Transaction is a sequence of database operations treated as a single unit of work. It must follow ACID properties and either completes entirely (commit) or has no effect (rollback), ensuring data consistency.",
    },
    {
      q: "Explain different types of JOIN operations.",
      a: "INNER JOIN returns matching rows from both tables; LEFT JOIN returns all left table rows plus matches; RIGHT JOIN returns all right table rows plus matches; FULL OUTER JOIN returns all rows from both tables with NULLs for non-matches.",
    },
    {
      q: "What is Denormalization and when is it used?",
      a: "Denormalization is intentionally introducing redundancy to improve read performance. It's used in data warehousing and when query performance is more critical than storage efficiency, trading normalization for speed.",
    },
    {
      q: "What are Stored Procedures and their advantages?",
      a: "Stored Procedures are precompiled SQL code stored in the database. They improve performance through compilation, enhance security by controlling access, reduce network traffic, and enable code reusability across applications.",
    },
    {
      q: "What is the difference between Clustered and Non-Clustered Index?",
      a: "A Clustered Index determines physical data order and each table can have only one. A Non-Clustered Index creates a separate structure pointing to data and a table can have multiple. Clustered is faster for range queries.",
    },
    {
      q: "What are Database Triggers?",
      a: "Triggers are automatic procedures that execute in response to specific events (INSERT, UPDATE, DELETE) on a table. They enforce business rules, maintain data integrity, audit changes, and automate tasks without application code changes.",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Header */}
        <section className="bg-[#7C3AED] py-16 text-white">
          <div className="container px-4">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
                <Database className="h-10 w-10" />
              </div>
              <h1 className="mb-4 text-4xl font-bold md:text-5xl">
                Database Management Systems
              </h1>
              <p className="text-lg text-blue-50">
                Master DBMS fundamentals and confidently tackle any interview
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
                  <p className="ml-12 text-muted-foreground">{item.a}</p>
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
              <Link to="/cn">
                <Button size="lg" className="gap-2">
                  Next: CN
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
