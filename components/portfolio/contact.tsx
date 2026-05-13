import { Github, Linkedin, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "abrillgxmez@gmail.com",
    href: "mailto:abrillgxmez@gmail.com",
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: "La Plata, Buenos Aires",
    href: null,
  },
]

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/abrilgomez",
    href: "https://linkedin.com/in/abrilgomez",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/abrillgomez",
    href: "https://github.com/abrillgomez",
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm uppercase tracking-widest text-primary font-mono mb-4">
          Contacto
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 mt-12">
          {/* Left - CTA */}
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground leading-tight text-balance">
              Si te gustaría hablar sobre un proyecto o simplemente saludar, siempre estoy disponible.
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Estoy abierta a nuevas oportunidades laborales y proyectos freelance. 
              Si tienes una propuesta interesante o simplemente queres conectar, 
              no dudes en contactarme.
            </p>
            <Button 
              asChild 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 mt-4"
            >
              <a href="mailto:abrillgxmez@gmail.com">
                <Mail size={18} className="mr-2" />
                Enviar email
              </a>
            </Button>
          </div>

          {/* Right - Contact Info */}
          <div className="space-y-8">
            {/* Direct Contact */}
            <div>
              <h4 className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
                Contacto directo
              </h4>
              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <ContactItem key={item.label} {...item} />
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
                Redes
              </h4>
              <div className="space-y-4">
                {socialLinks.map((item) => (
                  <ContactItem key={item.label} {...item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactItem({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ElementType
  label: string
  value: string
  href: string | null
}) {
  const content = (
    <div className="flex items-center gap-4 group">
      <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/20 transition-colors">
        <Icon size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
      </div>
      <div>
        <p className="text-xs text-muted-foreground uppercase tracking-wide">
          {label}
        </p>
        <p className="text-foreground group-hover:text-primary transition-colors">
          {value}
        </p>
      </div>
    </div>
  )

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className="block"
      >
        {content}
      </a>
    )
  }

  return content
}
