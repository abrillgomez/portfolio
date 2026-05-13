import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Frontend & UI",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Redux Toolkit",
      "Tailwind CSS",
      "shadcn/ui",
      "Material UI",
    ],
  },
  {
    title: "Backend & DB",
    skills: ["PHP", "SQL", "APIs REST"],
  },
  {
    title: "Herramientas",
    skills: [
      "Git",
      "GitHub",
      "Figma",
      "Claude AI",
      "Postman",
      "Docker",
      "Vercel",
      "Vite",
    ],
  },
  {
    title: "Metodologías",
    skills: ["Kanban", "Scrum", "Code Review", "Testing"],
  },
];

const languages = [
  { name: "Español", level: "Nativo" },
  { name: "Inglés", level: "B2 - Intermedio Alto" },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm uppercase tracking-widest text-primary font-mono mb-12">
          Habilidades
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="text-lg font-medium text-foreground mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors font-mono text-sm py-1.5 px-3">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Languages */}
        <h2 className="text-sm uppercase tracking-widest text-primary font-mono mb-12 mt-24">
          Idiomas
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          {languages.map((lang) => (
            <div key={lang.name}>
              <h3 className="text-lg font-medium text-foreground mb-4">
                {lang.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                <Badge
                  variant="outline"
                  className="border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors font-mono text-sm py-1.5 px-3">
                  {lang.level}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
