import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

// Mock projects data (props copied from each Project{n}/page.tsx)
const projects = [
  {
    id: 1,
    title: "The Essence of Design SPACE, FORM, FUNCTION",
    description:
      "This project explores spatial organization through interconnected modular cubes, integrating built spaces with natural landscapes.",
    technologies: ["Architecture", "Modular Design", "Sustainability"],
    image: "/sem2cov.png",
    slug: "essence-of-design",
    type: "hosted",
    images: [
      "/sem1.png",
      "/sem2.png",
      "/sem3.png",
      "/sem4.png",
    ],
    video: "sem4video",
  },
  {
    id: 2,
    title: "BREATHING NEW LIFE Daman's Heritage",
    description:
      "This renovation transforms a century-old heritage building in Daman, preserving its historic charm while adapting it for modern use. By integrating adjacent plots, the space is expanded without compromising its original structure and facade.",
    technologies: ["Heritage Restoration", "Adaptive Reuse", "Community Space"],
    image: "/sem4cov.png",
    slug: "daman-heritage-renovation",
    type: "hosted",
    images: ["/sem41.png", "/sem42.png", "/sem43.png"],
    video: "sem4video",
  },
  {
    id: 3,
    title: "SEA BREEZE ACADEMY: Learning by the Sea",
    description:
      "This project establishes a contemporary educational institution in Porbandar, Gujarat, inspired by the rhythmic patterns of the Arabian Sea.",
    technologies: ["Sustainable Design", "Wave-Inspired Architecture", "Educational Infrastructure"],
    image: "/p3 cover.jpg",
    slug: "sea-breeze-academy",
    type: "hosted",
    images: ["/p32.png", "/p33.png", "/p31.png"],
    video: "/pro3.mp4",
  },
  {
    id: 4,
    title: "AQUATIC FLIGHT: FIN TO FACADE",
    description:
      "The design uses an undulating, illuminated metallic canopy that creates a strong sense of fluid motion. It is a landmark structure that expresses biomorphic concepts through contrasting materials and dynamic form.",
    technologies: ["Biomorphic Design", "Facade Engineering"],
    image: "/sem3cov.png",
    slug: "aquatic-flight",
    type: "hosted",
    images: ["/sem31.png"],
  },
  {
    id: 5,
    title: "LIVING LIGHT: Shared Life",
    description:
      "This contemporary residential design is conceptualized as an exploration of light and texture, perfectly articulated in this facade view.",
    technologies: ["Residential Design", "Daylighting"],
    image: "/sem6cov.png",
    slug: "living-light",
    type: "hosted",
    images: ["/sem63.png", "/sem62.png", "/sem61.png", "/sem64.png", "/sem65.png"],
    video: "/sem6video.mp4",
  },
  {
    id: 6,
    title: "BEYOND THE WALLS: together of culture and living",
    description:
      "the redevolpment focuses on the comprehensive redevelopment of an existing informal settlement, housing a population of 635 individuals across 127 households (averaging 5 members per family). The core challenge was to provide safe, dignified, and culturally responsive housing while preserving the strong community bonds and supporting the residents' diverse occupational needs.",
    technologies: ["Community Planning", "Affordable Housing"],
    image: "/sem7cov.png",
    slug: "beyond-the-walls",
    type: "hosted",
    images: ["/sem73.png", "/sem72.png", "/sem71.png", "/sem74.png", "/sem75.png"],
  },
  {
    id: 7,
    title: "The Crumpled Canopy:  Translating Ephemeral Form",
    description:
      "This project translates the transient gesture of crumpling paper into an enduring architectural structure. The methodology involved decoding the paper's chaotic wrinkles into a rational system of polyhedral facets and linear struts. The result is a structure defined by Tectonic Fragmentation, where the vibrant, faceted skin acts as both a visual mosaic and the structural system. Functionally, the pavilion is a Programmable Threshold, creating a dynamic, semi-open public space that actively frames the landscape and serves as a flexible venue for community gathering.",
    technologies: ["Parametric Design", "Form-Finding"],
    image: "/sem8cov.jpg",
    slug: "crumpled-canopy",
    type: "hosted",
    images: ["/sem83.jpg", "/sem82.jpg", "/sem81.jpg", "/sem84.jpg", "/sem85.jpg"],
  },
];

export default function ProjectsPage() {
  // Separate hosted and GitHub-only projects
  const hostedProjects = projects.filter((project) => project.type === "hosted")

  return (
    <div className="pt-20">
      <section className="container-custom section-spacing">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="heading-xl mb-6">Projects</h1>
          <p className="body-lg text-muted-foreground">
            A showcase of my work, featuring  architecture, design projects, and experiments.
          </p>
        </div>

        {/* Hosted Projects */}
        <div className="mb-24">


          <div className="grid gap-16 md:gap-24">
            {hostedProjects.map((project, index) => (
              <div key={project.id} className="group">
                <div
                  className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "md:grid-flow-dense" : ""}`}
                >
                  <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
                    <span className="text-8xl font-bold text-muted/30 group-hover:text-muted/50 transition-colors">
                      {(index + 1).toString().padStart(2, "0")}
                    </span>
                    <h2 className="text-4xl font-bold mb-6 -mt-8 group-hover:translate-x-2 transition-transform">
                      {project.title}
                    </h2>
                    <p className="text-xl text-muted-foreground mb-6">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    >
                      <Link href={`/projects/Project${project.id}`}>View Project</Link>
                    </Button>
                  </div>
                  <div className={`overflow-hidden rounded-lg ${index % 2 === 1 ? "md:col-start-1" : ""}`}>
                    <div className="aspect-video bg-muted rounded-lg overflow-hidden transition-transform group-hover:scale-105 duration-500">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={800}
                        height={600}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* GitHub-only Projects */}
        {/* <div>
          <h2 className="heading-lg mb-10 relative">
            Deep CS Projects
            <span className="absolute -z-10 text-[8rem] font-bold text-muted/20 -top-16 -left-6 opacity-80">02</span>
          </h2>

          <p className="text-xl text-muted-foreground mb-10 max-w-3xl">
            These projects focus on computer science fundamentals and systems programming. They&apos;re available on GitHub
            for code review and educational purposes.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {githubProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video bg-muted overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full gap-2 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      <span>View on GitHub</span>
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </section>
    </div>
  )
}

