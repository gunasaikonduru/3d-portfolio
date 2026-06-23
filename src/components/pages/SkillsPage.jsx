import React from "react";
import { FaJava, FaCode, FaDatabase } from "react-icons/fa";
import { SiPython, SiHtml5, SiMysql } from "react-icons/si";

export default function SkillsPage({ language }) {
  const content = {
    en: {
      title: "SKILLS INVENTORY",
      subtitle: "LEVEL: B.TECH CSE (2022-2026)",
      languages: "Languages",
      techStack: "Tech Stack",
      coreConcepts: "Core Concepts",
      javaDesc: "OOP & Systems Dev",
      pythonDesc: "Algorithms & Scripting",
      htmlDesc: "Web Layouts",
      mysqlDesc: "Relational Queries",
    },
    es: {
      title: "INVENTARIO DE HABILIDADES",
      subtitle: "NIVEL: B.TECH CSE (2022-2026)",
      languages: "Lenguajes",
      techStack: "Tecnologías",
      coreConcepts: "Conceptos Clave",
      javaDesc: "OOP y Desarrollo de Sistemas",
      pythonDesc: "Algoritmos y Scripting",
      htmlDesc: "Diseño Web",
      mysqlDesc: "Consultas Relacionales",
    },
  };

  const t = content[language] || content.en;

  const skillsData = {
    languages: [
      { name: "Java", icon: FaJava, level: "85%", desc: t.javaDesc, color: "text-red-500" },
      { name: "Python", icon: SiPython, level: "80%", desc: t.pythonDesc, color: "text-blue-500" },
    ],
    tech: [
      { name: "MySQL", icon: SiMysql, level: "85%", desc: t.mysqlDesc, color: "text-cyan-500" },
      { name: "HTML", icon: SiHtml5, level: "75%", desc: t.htmlDesc, color: "text-orange-500" },
    ],
    concepts: [
      { name: "Object-Oriented Programming (OOP)", score: "High" },
      { name: "Data Structures", score: "Advanced" },
      { name: "Problem Solving", score: "Highly Proficient" },
    ],
  };

  return (
    <div className="w-full h-full relative bg-neutral-900 select-none text-green-400 font-mono p-4 flex flex-col justify-between border-4 border-green-500/30 overflow-hidden">
      {/* CRT Scanline Scan glow overlay */}
      <div className="absolute inset-0 bg-radial-glow pointer-events-none"></div>

      {/* Header */}
      <div className="text-center border-b-2 border-green-500/20 pb-2">
        <h1 className="text-3xl md:text-5xl font-black tracking-widest animate-pulse text-green-400">
          :: {t.title} ::
        </h1>
        <p className="text-sm md:text-lg text-green-500/70 mt-1">{t.subtitle}</p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-2 gap-4 my-2 flex-grow overflow-auto">
        {/* Left Column: Languages & Tech Stack */}
        <div className="flex flex-col gap-4">
          {/* Languages Section */}
          <div className="bg-neutral-950/80 p-3 rounded-xl border border-green-500/20">
            <h2 className="text-xl md:text-2xl font-bold border-b border-green-500/20 mb-2 flex items-center gap-2">
              <FaCode className="text-green-500" /> {t.languages}
            </h2>
            <div className="flex flex-col gap-2">
              {skillsData.languages.map((skill) => (
                <div key={skill.name} className="flex flex-col gap-1">
                  <div className="flex justify-between items-center text-sm md:text-lg">
                    <span className="font-semibold flex items-center gap-1">
                      <skill.icon className={skill.color} /> {skill.name}
                    </span>
                    <span className="text-green-500/80">{skill.level}</span>
                  </div>
                  <div className="w-full bg-neutral-800 rounded-full h-2 overflow-hidden border border-green-500/10">
                    <div
                      className="bg-green-400 h-full rounded-full shadow-glow shadow-green-400"
                      style={{ width: skill.level }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Section */}
          <div className="bg-neutral-950/80 p-3 rounded-xl border border-green-500/20">
            <h2 className="text-xl md:text-2xl font-bold border-b border-green-500/20 mb-2 flex items-center gap-2">
              <FaDatabase className="text-green-500" /> {t.techStack}
            </h2>
            <div className="flex flex-col gap-2">
              {skillsData.tech.map((skill) => (
                <div key={skill.name} className="flex flex-col gap-1">
                  <div className="flex justify-between items-center text-sm md:text-lg">
                    <span className="font-semibold flex items-center gap-1">
                      <skill.icon className={skill.color} /> {skill.name}
                    </span>
                    <span className="text-green-500/80">{skill.level}</span>
                  </div>
                  <div className="w-full bg-neutral-800 rounded-full h-2 overflow-hidden border border-green-500/10">
                    <div
                      className="bg-green-400 h-full rounded-full shadow-glow shadow-green-400"
                      style={{ width: skill.level }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Core Concepts */}
        <div className="bg-neutral-950/80 p-3 rounded-xl border border-green-500/20 flex flex-col justify-between">
          <div>
            <h2 className="text-xl md:text-2xl font-bold border-b border-green-500/20 mb-2">
              &gt; {t.coreConcepts}
            </h2>
            <div className="flex flex-col gap-3 mt-2">
              {skillsData.concepts.map((concept) => (
                <div
                  key={concept.name}
                  className="p-2 border border-green-500/10 rounded-lg hover:bg-green-500/5 transition-colors"
                >
                  <div className="text-sm md:text-lg font-bold">{concept.name}</div>
                  <div className="text-xs md:text-sm text-green-500/60 mt-1 flex justify-between">
                    <span>STATUS:</span>
                    <span className="text-green-400 font-bold animate-pulse">{concept.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Retro Arcade Grid Style Footer */}
          <div className="text-center text-xs md:text-sm text-green-500/50 mt-4 border-t border-green-500/20 pt-2">
            PRESS START TO ENGAGE SYSTEMS
          </div>
        </div>
      </div>
    </div>
  );
}
