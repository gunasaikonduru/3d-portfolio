import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

export default function AboutMe({ setTarget, language }) {
  const content = {
    en: {
      title: "About Me",
      name: "Konduru Gunasai",
      desc1:
        "Seeking entry-level opportunities to apply Java, Python, and database management skills. Built academic projects demonstrating software development fundamentals and problem-solving abilities.",
      desc2:
        "B.Tech Student (2022 - 2026) at NBKR Institute of Science and Technology, CGPA: 6.5. Completed academic coursework in Java, Python, and Database Management Systems.",
      cv: "Check out my Resume",
      cvFile: "resume.html"
    },
    es: {
      title: "Sobre mí",
      name: "Konduru Gunasai",
      desc1:
        "En búsqueda de oportunidades de nivel inicial para aplicar mis habilidades en Java, Python y gestión de bases de datos. He desarrollado proyectos académicos que demuestran fundamentos de desarrollo de software.",
      desc2:
        "Estudiante de B.Tech (2022 - 2026) en NBKR Institute of Science and Technology, CGPA: 6.5. Curso de programación completado en Java, Python y Sistemas de Gestión de Bases de Datos.",
      cv: "Ver mi Currículum",
      cvFile: "resume.html"
    },
  };

  const t = content[language] || content.en;

  return (
    <div className="h-full w-full relative bg-neutral-200 select-none ">
      <div className="absolute w-full h-full bg-grid"></div>
      <div className="absolute w-full h-full text-sm md:text-xl p-4 flex flex-col items-center justify-between border gap-2 font-mono">
        <div className="w-full text-center items-center justify-between flex ">
          <button onClick={() => setTarget("Contact_Red_Text_Target")}>
            <MdKeyboardArrowLeft className="w-7 h-7 md:w-12 md:h-12" />
          </button>
          <h1 className="text-2xl md:text-4xl">{t.title}</h1>
          <button onClick={() => setTarget("Contact_Red_Text_Target")}>
            <MdKeyboardArrowRight className="w-7 h-7 md:w-12 md:h-12" />
          </button>
        </div>

        <div className="flex object-cover rounded-full shadow-lg shadow-neutral-500 h-28 w-28 md:h-36 md:w-36 border border-neutral-50 bg-neutral-300 items-center justify-center text-4xl text-neutral-600 font-bold">
          KG
        </div>

        <div className="w-full h-full text-center items-center justify-between flex flex-col font-mono p-2 ">
          <p className="font-bold text-2xl md:text-3xl">{t.name}</p>
          <p className="text-neutral-700 text-sm md:text-lg">{t.desc1}</p>
          <p className="text-neutral-600 text-xs md:text-base">{t.desc2}</p>

          <a
            href={t.cvFile}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono flex gap-4 items-center justify-center px-4 py-2 rounded-2xl shadow-md shadow-neutral-500 hover:scale-105 transition-transform bg-neutral-200/80  border border-neutral-50 "
          >
            {t.cv}
          </a>
        </div>
      </div>
    </div>
  );
}
