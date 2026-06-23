import {
  SiThreedotjs,
  SiReact,
  SiTailwindcss,
  SiVite,
  SiBlender,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiKotlin,
  SiMysql,
  SiAndroidstudio,
  SiUnity,
  SiReactrouter,
  SiMui,
  SiArduino,
  SiHtml5,
  SiCss3,
  SiJss,
  SiDocker, 
  SiPytorch,
  SiPython,
  SiNumpy,
  SiScikitlearn,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

export const projects = [
  {
    title: "Java Academic Project",
    can: "images/projects/3dPortfolio/3dPortfolioCan.webp",
    images: [
      { src: "images/projects/3dPortfolio/1.gif", alt: "Java App Demo" }
    ],
    description: {
      en: "Designed and developed a Java-based application implementing core Object-Oriented Programming (OOP) principles. Features a modular structure and MySQL database integration.",
      es: "Diseñado y desarrollado una aplicación basada en Java implementando principios básicos de programación orientada a objetos (OOP). Cuenta con estructura modular e integración con base de datos MySQL."
    },
    tech: [FaJava, SiMysql, SiHtml5],
    features: {
      en: [
        "Designed and developed a Java-based application implementing core OOP principles.",
        "Integrated MySQL database for efficient data storage and retrieval operations.",
        "Implemented modular and reusable code structure to improve maintainability.",
        "Performed testing and debugging to ensure application reliability and performance."
      ],
      es: [
        "Diseñó y desarrolló una aplicación basada en Java implementando principios clave de OOP.",
        "Integró base de datos MySQL para operaciones eficientes de almacenamiento y recuperación.",
        "Implementó estructura de código modular y reutilizable para mejorar mantenibilidad.",
        "Realizó pruebas y depuración para garantizar la confiabilidad y el rendimiento de la aplicación."
      ]
    },
    date: { en: "2024", es: "2024" },
    github: "https://github.com/gunasaikonduru"
  },
  {
    title: "Python Data Analysis",
    can: "images/projects/AIRacingLine/AIRacingLineCan.webp",
    images: [
      { src: "images/projects/AIRacingLine/1.webp", alt: "Python Scripts" }
    ],
    description: {
      en: "Academic projects and algorithms implemented in Python, showcasing core data structures, object-oriented concepts, and computational problem-solving.",
      es: "Proyectos académicos y algoritmos implementados en Python, que muestran estructuras de datos principales, conceptos orientados a objetos y resolución de problemas computacionales."
    },
    tech: [SiPython, SiNumpy, SiScikitlearn],
    features: {
      en: [
        "Wrote clean and optimized Python code following OOP design principles.",
        "Implemented custom searching and sorting algorithms for speed evaluations.",
        "Constructed and analyzed core data structures like lists, trees, and hash maps.",
        "Performed complexity checks and validation testing on various datasets."
      ],
      es: [
        "Escribió código Python limpio y optimizado siguiendo principios de diseño de OOP.",
        "Implementó algoritmos personalizados de búsqueda y ordenación para evaluación de velocidad.",
        "Construyó y analizó estructuras de datos clave como listas, árboles y mapas hash.",
        "Realizó comprobaciones de complejidad y pruebas de validación en varios conjuntos de datos."
      ]
    },
    date: { en: "2023", es: "2023" },
    github: "https://github.com/gunasaikonduru"
  },
  {
    title: "MySQL Schema Design",
    can: "images/projects/AireSano/AireSanoCan.webp",
    images: [
      { src: "images/projects/AireSano/1.webp", alt: "Database Schema" }
    ],
    description: {
      en: "Relational database schema designs and queries in MySQL. Focuses on data normalization, efficient querying, indexing, and transactional security.",
      es: "Diseños de esquemas de bases de datos relacionales y consultas en MySQL. Se centra en normalización de datos, consultas eficientes, indexación y seguridad transaccional."
    },
    tech: [SiMysql, SiHtml5, SiCss3],
    features: {
      en: [
        "Designed normalized database structures (up to 3NF) for multiple schemas.",
        "Wrote optimized SQL queries involving complex joins, views, and subqueries.",
        "Developed index triggers and stored procedures for automated tasks.",
        "Integrated database connections securely with backend logic."
      ],
      es: [
        "Diseñó estructuras de bases de datos normalizadas (hasta 3NF) para múltiples esquemas.",
        "Escribió consultas SQL optimizadas que involucran uniones, vistas y subconsultas complejas.",
        "Desarrolló disparadores de índice y procedimientos almacenados para tareas automatizadas.",
        "Integró conexiones de bases de datos de forma segura con la lógica del backend."
      ]
    },
    date: { en: "2023", es: "2023" },
    github: "https://github.com/gunasaikonduru"
  }
];
