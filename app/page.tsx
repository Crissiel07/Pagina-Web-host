import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, Instagram, Facebook, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { SkillBadge } from "@/components/skill-badge"
import { Timeline } from "@/components/timeline"
import ContactForm from "@/components/contact-form"
// CreativeHero component removed
import { FloatingNav } from "@/components/floating-nav"
import { MouseFollower } from "@/components/mouse-follower"
import { ScrollProgress } from "@/components/scroll-progress"
import { SectionHeading } from "@/components/section-heading"
import { GlassmorphicCard } from "@/components/glassmorphic-card"
import { ResponsiveHero, MobileLogo } from "@/components/responsive-hero"
import { ContactButton } from "@/components/contact-button"
import Image from "next/image"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black text-white overflow-hidden">
      <MouseFollower />
      <ScrollProgress />
      <FloatingNav />

      {/* Hero Section */}
      <section className="relative min-h-[85vh] sm:min-h-[80vh] flex items-center justify-center overflow-hidden pb-4">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
        
        <ResponsiveHero />

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <div className="relative px-3 py-1 text-sm font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4 mt-4">
                <span className="relative z-10">Desarrollo de Software Profesional</span>
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500/20 to-amber-500/20 animate-pulse"></span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="block">Bienvenido a</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-600">
                Protovex
              </span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-[600px]">
              Creamos soluciones digitales innovadoras y personalizadas para impulsar el éxito de tu negocio.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600">
                <Link href="#contact" className="flex items-center gap-2">
                  Contáctanos <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button className="bg-zinc-800/50 border border-orange-500/50 text-white hover:bg-orange-500/20 hover:border-orange-500 backdrop-blur-sm">
                <Link href="#planes" className="flex items-center gap-2">
                  Ver Planes <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="flex gap-4 pt-4">
              <Link href="https://www.instagram.com/protovexx/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="https://www.facebook.com/profile.php?id=61574783052167" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="mailto:soporte.protovex@gmail.com" className="text-zinc-400 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </Link>
            </div>
            
            {/* Logo en móviles debajo del texto y botones */}
            <div className="block md:hidden mt-6 mb-4">
              <MobileLogo />
            </div>
          </div>
          {/* Div vacío eliminado para reducir espacio */}
        </div>

        {/* Indicador de scroll eliminado para reducir espacio */}
      </section>

      {/* About Section */}
      <section id="about" className="pt-16 pb-24 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Nosotros" subtitle="Nuestra historia y misión" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-orange-500/20 to-amber-500/20 blur-xl opacity-70"></div>
              <div className="relative aspect-square rounded-xl overflow-hidden border border-zinc-800">
                <img
                  src="/placeholder.svg?height=600&width=600"
                  alt="Shine Kyaw Kyaw Aung"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-sm font-medium">Available for work</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <GlassmorphicCard>
                <p className="text-lg text-zinc-300">
                En Protovex somos ingenieros en sistemas especializados en el desarrollo de soluciones de software a la medida. Nos enfocamos en resolver necesidades concretas de personas, empresas e instituciones mediante herramientas digitales robustas, escalables y orientadas a resultados.
                </p>
                <p className="text-lg text-zinc-300 mt-4">
                  
                    Contamos con experiencia en desarrollo web, sistemas de gestión, automatización de procesos y plataformas inteligentes, adaptándonos a los desafíos específicos de cada cliente.
                </p>
                <p className="text-lg text-zinc-300 mt-4">
                <b>Entre nuestros proyectos más destacados se encuentran:</b>
                </p>
                <p className="text-lg text-zinc-300 mt-4">
                <b>Estancia Digital:</b> una plataforma integral para la gestión de fincas, que permite registrar ganado, controlar la producción de leche y carne, y administrar la trazabilidad en tiempo real.
                </p>
                <p className="text-lg text-zinc-300 mt-4">
                <b>sistema de barberia:</b> aplicación online para agendar citas, gestionar disponibilidad y mantener el historial de atención, mejorando la organización interna y la experiencia del cliente.
                </p>
                <p className="text-lg text-zinc-300 mt-4">
                <b>sistema de acceso:</b>herramienta de generación de códigos QR para control de acceso, verificación de pagos y validación de identidad, integrada al sistema administrativo de una universidad.
                </p>
              
                
  
              </GlassmorphicCard>
            </div>
          </div>
        </div>
      </section>

      {/* Planes Section */}
      <section id="planes" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Nuestros Planes" subtitle="Soluciones a tu medida" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {/* Columna Izquierda */}
            <div className="space-y-8">
              <div className="border-b border-orange-500/30 pb-6">
                <h3 className="text-2xl font-bold text-orange-500 mb-4">DISEÑO Y DESARROLLO WEB</h3>
                
                <div className="space-y-6">
                  <div className="bg-zinc-800/50 p-6 rounded-lg backdrop-blur-sm border border-zinc-700/50">
                    <h4 className="text-xl font-semibold mb-2">Landing Page Básica</h4>
                    <p className="text-zinc-400 mb-2">Una sola página, responsive, formulario.</p>
                    
                  </div>
                  
                  <div className="bg-zinc-800/50 p-6 rounded-lg backdrop-blur-sm border border-zinc-700/50">
                    <h4 className="text-xl font-semibold mb-2">Sitio Web Corporativo (3-5 páginas)</h4>
                    <p className="text-zinc-400 mb-2">Inicio, Nosotros, Servicios, Contacto, Blog.</p>
                    
                  </div>
                  
                  <div className="bg-zinc-800/50 p-6 rounded-lg backdrop-blur-sm border border-zinc-700/50">
                    <h4 className="text-xl font-semibold mb-2">Sitio con CMS (Next.js)</h4>
                    <p className="text-zinc-400 mb-2">Administrable, rápido y optimizado para SEO.</p>
                    
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-orange-500 mb-4">SOLUCIONES AVANZADAS</h3>
                
                <div className="space-y-6">
                  <div className="bg-zinc-800/50 p-6 rounded-lg backdrop-blur-sm border border-zinc-700/50">
                    <h4 className="text-xl font-semibold mb-2">Bots y Automatizaciones</h4>
                    <p className="text-zinc-400 mb-2">Chatbots, bots para redes sociales y automatización de procesos.</p>
          
                  </div>
                  
                  <div className="bg-zinc-800/50 p-6 rounded-lg backdrop-blur-sm border border-zinc-700/50">
                    <h4 className="text-xl font-semibold mb-2">Soluciones con IA</h4>
                    <p className="text-zinc-400 mb-2">Integración de inteligencia artificial para análisis y automatización.</p>
          
                  </div>
                  
                  <div className="bg-zinc-800/50 p-6 rounded-lg backdrop-blur-sm border border-zinc-700/50">
                    <h4 className="text-xl font-semibold mb-2">Mantenimiento web mensual</h4>
                    <p className="text-zinc-400 mb-2">Actualizaciones, copias de seguridad.</p>
                   
                  </div>
                </div>
              </div>
            </div>
            
            {/* Columna Derecha */}
            <div className="space-y-8">
              <div className="border-b border-orange-500/30 pb-6">
                <h3 className="text-2xl font-bold text-orange-500 mb-4">POSICIONAMIENTO SEO</h3>
                
                <div className="space-y-6">
                  <div className="bg-zinc-800/50 p-6 rounded-lg backdrop-blur-sm border border-zinc-700/50">
                    <h4 className="text-xl font-semibold mb-2">SEO On-Page</h4>
                    <p className="text-zinc-400 mb-2">Optimización teórica + contenido inicial.</p>
                    
                  </div>
                  
                  <div className="bg-zinc-800/50 p-6 rounded-lg backdrop-blur-sm border border-zinc-700/50">
                    <h4 className="text-xl font-semibold mb-2">SEO Mensual (básico)</h4>
                    <p className="text-zinc-400 mb-2">2 artículos / mes + enlaces.</p>
                    
                  </div>
                  
                  <div className="bg-zinc-800/50 p-6 rounded-lg backdrop-blur-sm border border-zinc-700/50">
                    <h4 className="text-xl font-semibold mb-2">Auditoría SEO + Plan de Acción</h4>
                    <p className="text-zinc-400 mb-2">Diagnóstico completo con sugerencias.</p>
                    
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-orange-500 mb-4">PAQUETES</h3>
                
                <div className="space-y-6">
                  <div className="bg-zinc-800/50 p-6 rounded-lg backdrop-blur-sm border border-zinc-700/50">
                    <h4 className="text-xl font-semibold mb-2">Paquete Emprendedor</h4>
                    <p className="text-zinc-400 mb-2">Landing Page + SEO básico</p>
                   
                  </div>
                  
                  <div className="bg-zinc-800/50 p-6 rounded-lg backdrop-blur-sm border border-zinc-700/50">
                    <h4 className="text-xl font-semibold mb-2">Paquete Presencia Pro</h4>
                    <p className="text-zinc-400 mb-2">Sitio web 5 páginas + UX/UI + SEO inicial</p>
                   
                  </div>
                  
                  <div className="bg-zinc-800/50 p-6 rounded-lg backdrop-blur-sm border border-zinc-700/50">
                    <h4 className="text-xl font-semibold mb-2">Paquete Comercio Online</h4>
                    <p className="text-zinc-400 mb-2">Tienda E-commerce personalizada + SEO</p>
                   
                  </div>
                  
                  <div className="bg-zinc-800/50 p-6 rounded-lg backdrop-blur-sm border border-zinc-700/50">
                    <h4 className="text-xl font-semibold mb-2">Sistema simple de gestión (CRUD)</h4>
                    <p className="text-zinc-400 mb-2">Para app o web, hasta 5 pantallas.</p>
                    
                  </div>
                  
                  <div className="bg-zinc-800/50 p-6 rounded-lg backdrop-blur-sm border border-zinc-700/50">
                    <h4 className="text-xl font-semibold mb-2">Prototipo interactivo (React)</h4>
                    <p className="text-zinc-400 mb-2">Maqueta funcional para validar conceptos.</p>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">¿Necesitas más información?</h3>
              <p className="text-lg text-zinc-300 mb-6">Contáctanos para obtener una cotización personalizada según tus necesidades específicas. Estamos listos para ayudarte a crear la solución digital perfecta para tu proyecto.</p>
              <ContactButton />
            </div>
          </div>
        </div>
      </section>
      {/* Projects Section */}
      <section id="projects" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Proyectos Destacados" subtitle="Nuestros mejores proyectos" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <ProjectCard
              title="Sistema de Barbería"
              description="Aplicación web para gestión de citas, control de disponibilidad y seguimiento del historial de clientes. Incluye sistema de pagos y recordatorios automáticos."
              tags={["Next.js", "React", "Node.js", "MongoDB"]}
              image="/placeholder.svg?height=400&width=600"
              demoUrl="#contact"
            />
            <ProjectCard
              title="Estancia Digital"
              description="Plataforma integral para gestión de fincas ganaderas. Control de producción de leche y carne, registro de ganado y trazabilidad en tiempo real."
              tags={["React", "Node.js", "PostgreSQL", "IoT"]}
              image="/placeholder.svg?height=400&width=600"
              demoUrl="#contact"
            />
            <ProjectCard
              title="Sistema de Acceso"
              description="Sistema de control de acceso mediante códigos QR. Integración con sistema administrativo universitario para verificación de pagos y validación de identidad."
              tags={["Next.js", "TypeScript", "QR", "API REST"]}
              image="/placeholder.svg?height=400&width=600"
              demoUrl="#contact"
            />

          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="experience" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Proceso de Desarrollo" subtitle="De la idea a la realidad" />

          <div className="mt-16">
            <div className="space-y-12 relative before:absolute before:inset-0 before:left-1/2 before:ml-0 before:-translate-x-px before:border-l-2 before:border-zinc-700 before:h-full before:z-0">
              
              {/* Contacto Inicial */}
              <div className="relative z-10 flex items-center">
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-zinc-800 border-2 border-orange-500">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 animate-pulse"></div>
                </div>
                <div className="w-full md:w-1/2 md:pr-10">
                  <div className="relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-6 transition-all duration-300 hover:border-orange-500/50">
                    <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/10 to-amber-500/10 rounded-xl blur opacity-25 hover:opacity-100 transition duration-1000 hover:duration-200"></div>
                    <div className="relative">
                      <h3 className="text-xl font-bold">1. Contacto y Consulta</h3>
                      <div className="text-orange-400 mb-4">Primera Fase</div>
                      <p className="text-zinc-300">Reunión inicial para entender tus necesidades. Analizamos objetivos, alcance y requerimientos específicos del proyecto. Evaluación preliminar y propuesta personalizada.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Planificación */}
              <div className="relative z-10 flex items-center md:flex-row-reverse">
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-zinc-800 border-2 border-orange-500">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 animate-pulse"></div>
                </div>
                <div className="w-full md:w-1/2 md:pl-10">
                  <div className="relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-6 transition-all duration-300 hover:border-orange-500/50">
                    <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/10 to-amber-500/10 rounded-xl blur opacity-25 hover:opacity-100 transition duration-1000 hover:duration-200"></div>
                    <div className="relative">
                      <h3 className="text-xl font-bold">2. Planificación y Diseño</h3>
                      <div className="text-orange-400 mb-4">Segunda Fase</div>
                      <p className="text-zinc-300">Desarrollo del plan de proyecto detallado. Diseño de arquitectura técnica, mockups y prototipos. Definición de plazos y entregables específicos.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Desarrollo */}
              <div className="relative z-10 flex items-center">
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-zinc-800 border-2 border-orange-500">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 animate-pulse"></div>
                </div>
                <div className="w-full md:w-1/2 md:pr-10">
                  <div className="relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-6 transition-all duration-300 hover:border-orange-500/50">
                    <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/10 to-amber-500/10 rounded-xl blur opacity-25 hover:opacity-100 transition duration-1000 hover:duration-200"></div>
                    <div className="relative">
                      <h3 className="text-xl font-bold">3. Desarrollo e Implementación</h3>
                      <div className="text-orange-400 mb-4">Tercera Fase</div>
                      <p className="text-zinc-300">Desarrollo ágil con sprints semanales. Reuniones de seguimiento regulares. Pruebas continuas y ajustes según feedback. Control de calidad riguroso.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testing */}
              <div className="relative z-10 flex items-center md:flex-row-reverse">
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-zinc-800 border-2 border-orange-500">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 animate-pulse"></div>
                </div>
                <div className="w-full md:w-1/2 md:pl-10">
                  <div className="relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-6 transition-all duration-300 hover:border-orange-500/50">
                    <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/10 to-amber-500/10 rounded-xl blur opacity-25 hover:opacity-100 transition duration-1000 hover:duration-200"></div>
                    <div className="relative">
                      <h3 className="text-xl font-bold">4. Pruebas y Optimización</h3>
                      <div className="text-orange-400 mb-4">Cuarta Fase</div>
                      <p className="text-zinc-300">Testing exhaustivo de funcionalidades. Optimización de rendimiento y seguridad. Pruebas de usuario y correcciones finales. Preparación para el lanzamiento.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Entrega */}
              <div className="relative z-10 flex items-center">
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-zinc-800 border-2 border-orange-500">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 animate-pulse"></div>
                </div>
                <div className="w-full md:w-1/2 md:pr-10">
                  <div className="relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-6 transition-all duration-300 hover:border-orange-500/50">
                    <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/10 to-amber-500/10 rounded-xl blur opacity-25 hover:opacity-100 transition duration-1000 hover:duration-200"></div>
                    <div className="relative">
                      <h3 className="text-xl font-bold">5. Lanzamiento y Soporte</h3>
                      <div className="text-orange-400 mb-4">Fase Final</div>
                      <p className="text-zinc-300">Despliegue en producción. Capacitación a usuarios. Documentación completa. Soporte técnico continuo y mantenimiento post-lanzamiento.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Nuestro Equipo" subtitle="Los cerebros detrás de Protovex" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {/* Germán Pachano */}
            <div className="relative group">
              <div className="relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-6 transition-all duration-300 hover:border-orange-500/50">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/10 to-amber-500/10 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative">
                  <div className="flex flex-col items-center">
                    <div className="w-32 h-32 rounded-full overflow-hidden mb-4 bg-gradient-to-br from-orange-500 to-amber-500 p-1">
                      <div className="w-full h-full rounded-full overflow-hidden bg-zinc-900">
                        <Image
                          src="https://ui-avatars.com/api/?name=German+Pachano&background=18181B&color=F97316&bold=true&size=128"
                          alt="Germán Pachano"
                          width={128}
                          height={128}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Germán Pachano</h3>
                    <p className="text-orange-400 font-medium mb-4">Director General / CEO</p>
                    <p className="text-zinc-400 text-center text-sm">
                      Visionario tecnológico y estratega principal detrás de Protovex. Tomas de desiciones, Vision global, dirrecion de proyectos.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Cristian Fuenmayor */}
            <div className="relative group">
              <div className="relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-6 transition-all duration-300 hover:border-orange-500/50">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/10 to-amber-500/10 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative">
                  <div className="flex flex-col items-center">
                    <div className="w-32 h-32 rounded-full overflow-hidden mb-4 bg-gradient-to-br from-orange-500 to-amber-500 p-1">
                      <div className="w-full h-full rounded-full overflow-hidden bg-zinc-900">
                        <Image
                          src="https://ui-avatars.com/api/?name=Cristian+Fuenmayor&background=18181B&color=F97316&bold=true&size=128"
                          alt="Cristian Fuenmayor"
                          width={128}
                          height={128}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Cristian Fuenmayor</h3>
                    <p className="text-orange-400 font-medium mb-4">Director de Desarrollo</p>
                    <p className="text-zinc-400 text-center text-sm">
                      Experto en arquitectura de software y desarrollo de aplicaciones. Especialista en crear soluciones robustas y escalables.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Gregoris Vásquez */}
            <div className="relative group">
              <div className="relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-6 transition-all duration-300 hover:border-orange-500/50">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/10 to-amber-500/10 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative">
                  <div className="flex flex-col items-center">
                    <div className="w-32 h-32 rounded-full overflow-hidden mb-4 bg-gradient-to-br from-orange-500 to-amber-500 p-1">
                      <div className="w-full h-full rounded-full overflow-hidden bg-zinc-900">
                        <Image
                          src="https://ui-avatars.com/api/?name=Gregoris+Vasquez&background=18181B&color=F97316&bold=true&size=128"
                          alt="Gregoris Vásquez"
                          width={128}
                          height={128}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Gregoris Vásquez</h3>
                    <p className="text-orange-400 font-medium mb-4">Director de Tecnologia / CTO </p>
                    <p className="text-zinc-400 text-center text-sm">
                      Encargado de arquitectura tecnica, innovacion de desarrollos y supervision de soluciones y escalabre para clientes y usuarios.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Contactanos" subtitle="Trabajemos juntos" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <GlassmorphicCard>
              <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-orange-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">Correo</div>
                    <div className="font-medium">soporte.protovex@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Instagram className="h-5 w-5 text-orange-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">Instagram</div>
                    <div className="font-medium">@protovexx</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Facebook className="h-5 w-5 text-orange-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">Facebook</div>
                    <div className="font-medium">Protovex</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-orange-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">Teléfonos</div>
                    <div className="font-medium">+58 412-3377248</div>
                    <div className="font-medium">+58 424-6093896</div>
                    <div className="font-medium">+58 414-6779048</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-zinc-800">
                <h4 className="text-lg font-medium mb-4">Estado Actual</h4>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <span>Disponibles para nuevos proyectos</span>
                </div>
              </div>
            </GlassmorphicCard>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-12">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <Link href="/" className="flex items-center">
              <Image
                src="/img/logodark.png"
                alt="Logo"
                width={120}
                height={48}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-sm text-zinc-500 mt-2">
              © {new Date().getFullYear()} Protovex. Todos los derechos reservados.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="https://www.instagram.com/protovexx/" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
            </Link>
            <Link href="https://www.facebook.com/profile.php?id=61574783052167" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Button>
            </Link>
            <Link href="mailto:soporte.protovex@gmail.com">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
