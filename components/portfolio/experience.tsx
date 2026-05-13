import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    period: "Oct 2024 — Dic 2025",
    role: "Frontend Developer",
    company: "Indicum Technology",
    description: [
      "Única referente técnica de frontend en equipo de 3.",
      "Definí la arquitectura y estándares de calidad, liderando el desarrollo de 7 aplicaciones desde cero con React/TypeScript/Redux.",
      "Migré sistemas críticos de jQuery a React/TypeScript, optimizando sustancialmente el rendimiento y mantenibilidad.",
    ],
    technologies: [
      "React.js",
      "TypeScript",
      "Redux Toolkit",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    period: "Feb 2023 — Oct 2024",
    role: "Full Stack Developer",
    company: "Indicum Technology",
    description: [
      "Rediseñé módulos críticos de Logística y Ventas PHP/SQL e implementé un sistema de mails con lógica de roles.",
      "Desarrollé funcionalidades end-to-end e integré APIs REST, logrando una reducción de 10s a 5s en la latencia de respuesta en producción.",
    ],
    technologies: ["PHP", "SQL", "JavaScript", "REST APIs", "jQuery"],
  },
];

const education = [
  {
    period: "Feb 2025 — Actualidad",
    title: "Analista Programador Universitario",
    institution: "Universidad Nacional de La Plata",
    location: "La Plata, Buenos Aires",
  },
];

const certifications = [
  {
    period: "Mayo 2026",
    title: "Claude Code in Action",
    institution: "Anthropic",
    link: "https://verify.skilljar.com/c/24yfpjgotcog",
  },
  {
    period: "Sep 2023 — Oct 2024",
    title: "Frontend Developer",
    institution: "Digital House",
  },
  {
    period: "Feb 2022 — Sep 2023",
    title: "Certified Tech Developer",
    institution: "Digital House",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm uppercase tracking-widest text-primary font-mono mb-12">
          Experiencia
        </h2>

        {/* Work Experience */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>

        {/* Education */}
        <h2 className="text-sm uppercase tracking-widest text-primary font-mono mb-12 mt-24">
          Educación
        </h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="grid md:grid-cols-[200px_1fr] gap-4">
              <span className="text-sm text-muted-foreground font-mono">
                {edu.period}
              </span>
              <div>
                <h3 className="text-lg font-medium text-foreground">
                  {edu.title}
                </h3>
                <p className="text-muted-foreground">{edu.institution}</p>
                <p className="text-sm text-muted-foreground mt-1">
                  {edu.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <h2 className="text-sm uppercase tracking-widest text-primary font-mono mb-12 mt-24">
          Certificaciones
        </h2>
        <div className="space-y-6">
          {certifications.map((cert, index) => (
            <div key={index} className="grid md:grid-cols-[200px_1fr] gap-4">
              <span className="text-sm text-muted-foreground font-mono">
                {cert.period}
              </span>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-foreground font-medium text-base">
                    {cert.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {cert.institution}
                  </p>
                </div>
                {cert.link && (
                  <Link
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-primary hover:underline underline-offset-4 text-sm shrink-0">
                    Ver credencial
                    <ExternalLink size={14} />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({
  period,
  role,
  company,
  description,
  technologies,
}: {
  period: string;
  role: string;
  company: string;
  description: string[];
  technologies: string[];
}) {
  return (
    <div className="grid md:grid-cols-[200px_1fr] gap-4 group">
      <span className="text-sm text-muted-foreground font-mono">{period}</span>
      <div className="space-y-3">
        <div>
          <h3 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
            {role} ·{" "}
            <p
              className="inline-flex items-center gap-1 text-primary hover:underline underline-offset-4">
              {company}
            </p>
          </h3>
        </div>
        <div className="text-muted-foreground leading-relaxed space-y-2">
          {description.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 pt-2">
          {technologies.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="bg-secondary text-secondary-foreground font-mono text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
