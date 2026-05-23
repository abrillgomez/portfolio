import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Mood Capsule",
    description:
      "App mobile para registrar el estado de ánimo diario mediante cápsulas de texto. Permite escribir una frase por día, elegir un mood y releer entradas pasadas. Proyecto de aprendizaje de React Native con Expo.",
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "NativeWind",
      "AsyncStorage",
      "Expo Router",
    ],
    github: null,
    demo: null,
    image: null,
    features: [
      "Registro diario de mood con texto libre",
      "Selector de estado de ánimo (feliz / neutro / mal)",
      "Historial de cápsulas con fecha y color según mood",
      "Detalle de cada entrada al tocarla",
      "Persistencia local con AsyncStorage",
    ],
    status: "in-progress",
  },
  {
    title: "Platty",
    description:
      "Plataforma SaaS para restaurantes que reemplaza los menús impresos por menús digitales accesibles vía QR. Permite gestionar platos, precios y stock en tiempo real, con soporte multi-idioma y planes de suscripción.",
    technologies: [
      "Next.js 16",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "NextAuth",
      "Zod",
      "Zustand",
      "AWS S3",
      "Framer Motion",
      "Vitest",
      "Playwright",
    ],
    github: null,
    demo: null,
    image: null,
    features: [
      "Menú digital accesible vía código QR sin app requerida",
      "Gestión de platos, precios y stock en tiempo real",
      "Soporte multi-idioma con next-intl",
      "Sistema de autenticación y roles de equipo",
      "Planes de suscripción Free, Pro y Empresa",
      "Tests E2E con Playwright y unitarios con Vitest",
    ],
    status: "in-progress",
  },
  {
    title: "Digital Money House",
    description:
      "Aplicación de billetera virtual que permite realizar pagos de servicios, gestionar finanzas personales y operar desde cualquier dispositivo. Incluye sistema de autenticación, dashboard con actividad, gestión de medios de pago e historial de transacciones.",
    technologies: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "React Hook Form",
      "Yup",
      "Axios",
      "JWT",
      "Docker",
      "Swagger",
    ],
    github: "https://github.com/abrillgomez/digital-money-house",
    demo: "https://digital-money-house-one.vercel.app/",
    image: "/projects/digital-money.png",
    features: [
      "Autenticación y registro de usuarios",
      "Dashboard con balance y actividad reciente",
      "Gestión de tarjetas y medios de pago",
      "Pago de servicios con búsqueda",
      "Historial de transacciones con filtros",
    ],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm uppercase tracking-widest text-primary font-mono mb-12">
          Proyectos
        </h2>

        <div className="space-y-16">
          {projects.map((project) => (
            <article
              key={project.title}
              className="grid md:grid-cols-2 gap-8 group">
              {/* Project Image */}
              <div className="relative aspect-video rounded-lg overflow-hidden border border-border bg-card flex items-center justify-center">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={`Screenshot de ${project.title}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <span className="text-muted-foreground font-mono text-sm">
                    Coming soon
                  </span>
                )}
              </div>

              {/* Project Info */}
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-medium text-foreground">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-3">
                    {project.status === "in-progress" && (
                      <Badge
                        variant="outline"
                        className="border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors font-mono text-xs py-1.5 px-3">
                        En progreso
                      </Badge>
                    )}
                    {project.github && (
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="Ver repositorio en GitHub">
                        <Github size={20} />
                      </Link>
                    )}
                    {project.demo && (
                      <Link
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="Ver demo en vivo">
                        <ExternalLink size={20} />
                      </Link>
                    )}
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <ul className="space-y-1 text-sm text-muted-foreground">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span className="text-primary mt-1">-</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors font-mono text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
