import { Github, Linkedin, Mail, MapPin, ArrowDown } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-6xl w-full">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-center">
          {/* Left Column - Navigation & Info */}
          <div className="space-y-8">
            <div>
              <p className="text-primary font-mono text-sm mb-2">Hola, soy</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight">
                Abril
                <br />
                Gómez
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mt-4">
                Full Stack Developer Ssr.
              </p>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Lidero el desarrollo de{" "}
              <span className="text-foreground font-medium">
                arquitecturas end-to-end
              </span>
              , priorizando el{" "}
              <span className="text-foreground font-medium">rendimiento</span>,
              la{" "}
              <span className="text-foreground font-medium">escalabilidad</span>{" "}
              y la{" "}
              <span className="text-foreground font-medium">
                calidad del código
              </span>
              .
            </p>
            {/* Quick Navigation */}
            <nav className="space-y-3 pt-4">
              <NavLink href="#about" active>
                Sobre mí
              </NavLink>
              <NavLink href="#experience">Experiencia</NavLink>
              <NavLink href="#projects">Proyectos</NavLink>
              <NavLink href="#skills">Habilidades</NavLink>
            </nav>
            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              <SocialLink href="https://github.com/abrillgomez" label="GitHub">
                <Github size={20} />
              </SocialLink>
              <SocialLink
                href="https://linkedin.com/in/abrilgomez"
                label="LinkedIn">
                <Linkedin size={20} />
              </SocialLink>
              <SocialLink href="mailto:abrillgxmez@gmail.com" label="Email">
                <Mail size={20} />
              </SocialLink>
            </div>
          </div>

          {/* Right Column - About Text */}
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p className="text-foreground text-lg">
              Enfocada en construir{" "}
              <span className="text-primary font-medium">
                plataformas robustas.
              </span>{" "}
              Utilizo{" "}
              <span className="text-foreground font-medium">
                React, TypeScript y Next.js
              </span>{" "}
              junto a tecnologías de backend para transformar lógicas de negocio
              complejas en sistemas rápidos, eficientes y preparados para
              escalar.
            </p>

            <p>
              <span className="text-foreground font-medium">
                Full Stack Ssr
              </span>{" "}
              con{" "}
              <span className="text-foreground font-medium">
                3 años de experiencia
              </span>
              . En mi paso por{" "}
              <Link
                href="#"
                className="text-primary hover:underline underline-offset-4 font-medium">
                Indicum Technology
              </Link>
              , lideré la arquitectura de aplicaciones desde cero y la migración
              de sistemas legacy. Además, rediseñé módulos críticos de bases de
              datos y logística{" "}
              <span className="text-foreground font-medium">(PHP/SQL)</span>,
              implementando funcionalidades end-to-end que{" "}
              <span className="text-foreground font-medium">
                redujeron a la mitad la latencia
              </span>{" "}
              en producción.
            </p>

            <p>
              Actualmente curso{" "}
              <span className="text-foreground font-medium">
                Analista Programador Universitario
              </span>{" "}
              en la <span className="text-foreground font-medium">UNLP</span>{" "}
              mientras sigo potenciando mi perfil hacia la gestión de bases de
              datos y arquitecturas SaaS.
            </p>

            <div className="flex items-center gap-2 text-sm pt-4">
              <MapPin size={16} className="text-primary" />
              <span>La Plata, Buenos Aires, Argentina</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-16 lg:mt-24">
          <Link
            href="#experience"
            className="text-muted-foreground hover:text-primary transition-colors animate-bounce"
            aria-label="Scroll to experience">
            <ArrowDown size={24} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function NavLink({
  href,
  children,
  active = false,
}: {
  href: string;
  children: React.ReactNode;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 text-sm uppercase tracking-widest transition-colors group ${
        active
          ? "text-foreground"
          : "text-muted-foreground hover:text-foreground"
      }`}>
      <span
        className={`h-px transition-all ${
          active
            ? "w-16 bg-foreground"
            : "w-8 bg-muted-foreground group-hover:w-16 group-hover:bg-foreground"
        }`}
      />
      {children}
    </Link>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-muted-foreground hover:text-primary transition-colors"
      aria-label={label}>
      {children}
    </a>
  );
}
