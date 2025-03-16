import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

// Mock projects data
const projects = [
  {
    id: 1,
    title: "The Essence of Design: SPACE, FORM, FUNCTION",
    description:
      "This project explores the dynamic relationship between space, form, and function. Through an innovative design approach, we have created an interconnected spatial experience that adapts to natural site conditions, promoting fluid movement and interaction within the built environment.",
    technologies: ["Architecture", "Modular Design", "Sustainability"],
    image: "/p1 cover.jpg",
    slug: "essence-of-design",
    type: "hosted",
  },
  {
    id: 2,
    title: "BREATHING NEW LIFE: Daman's Heritage",
    description:
      "Reimagining heritage through adaptive reuse, this project transforms a 100-year-old home in Daman into a vibrant art studio and residence. By preserving historical elements while integrating modern functionality, the design honors tradition while fostering creativity.",
    technologies: ["Heritage Restoration", "Adaptive Reuse", "Community Space"],
    image: "/p2 cover.png",
    slug: "daman-heritage-renovation",
    type: "hosted",
  },
  {
    id: 3,
    title: "SEA BREEZE ACADEMY: Learning by the Sea",
    description:
      "This project establishes a contemporary educational institution in Porbandar, Gujarat, inspired by the rhythmic patterns of the Arabian Sea. Fluid architectural forms, layered spatial organization, and strategic integration of natural light and ventilation create a sustainable, inclusive, and vibrant learning environment for 480 students.",
    technologies: ["Sustainable Design", "Wave-Inspired Architecture", "Educational Infrastructure"],
    image: "/p3 cover.jpg",
    slug: "sea-breeze-academy",
    type: "hosted",
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

