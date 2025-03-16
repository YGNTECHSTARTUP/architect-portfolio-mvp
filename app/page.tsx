import Link from "next/link"
import Image from "next/image"
// import { ArrowRight, Calendar, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Timeline from "@/components/Timeline"
import { VerseOnMind } from "@/components/VerseOnMind"
import SendMessage from "@/components/SendMessage"
import Video from "next-video"
const projects = [
  {
    id:1,
    title:"The Essence of Design SPACE, FORM, FUNCTION",
    imgurl:"p1 cover.jpg",
    description:"This project explores the dynamic relationship between space, form, and function. Through an innovative design approach, we have created an interconnected spatial experience that adapts to natural site conditions, promoting fluid movement and interaction within the built environment."
  },
  {
    id: 2,
    title: "BREATHING NEW LIFE Daman's Heritage",
    imgurl:"p2 cover.png",
    description:
      "Reimagining heritage through adaptive reuse, this project transforms a 100-year-old home in Daman into a vibrant art studio and residence. By preserving historical elements while integrating modern functionality, the design honors tradition while fostering creativity.",
  },
  {
    id: 3,
    title: "SEA BREEZE ACADEMY: Learning by the Sea",
    imgurl: "p3 cover.jpg",
    description:
      "This coastal educational institution in Porbandar, Gujarat, draws inspiration from the rhythm of the Arabian Sea. With wave-like architectural forms and sustainable design, it offers a vibrant and inclusive learning environment for 480 students, harmonizing nature, form, and education.",
  
  }
];


// Mock workshops data
const skills = [
  "Sketching",       // Manual Skill
  "SketchUp",        // Technical Skill
  "Drafting",        // Manual Skill
  "AutoCAD",         // Technical Skill
  "Model Making",    // Manual Skill
  "D5 Render",       // Technical Skill
  "Photoshop",       // Technical Skill
  "InDesign"         // Technical Skill
];

// const workshops = [
//   {
//     id: 1,
//     title: "Advanced React Patterns",
//     description: "Learn advanced React patterns and techniques to build scalable applications.",
//     date: "April 15, 2025",
//     time: "10:00 AM - 2:00 PM",
//     location: "Online",
//     image: "/placeholder.svg?height=300&width=500",
//     status: "Upcoming",
//     slug: "advanced-react-patterns",
//   },
//   {
//     id: 2,
//     title: "TypeScript for JavaScript Developers",
//     description: "A comprehensive introduction to TypeScript for experienced JavaScript developers.",
//     date: "May 10, 2025",
//     time: "9:00 AM - 12:00 PM",
//     location: "Tech Hub, San Francisco",
//     image: "/placeholder.svg?height=300&width=500",
//     status: "Upcoming",
//     slug: "typescript-for-javascript-developers",
//   },
//   {
//     id: 3,
//     title: "Building with Next.js",
//     description: "Explore the features of Next.js and learn how to build performant web applications.",
//     date: "March 5, 2025",
//     time: "1:00 PM - 5:00 PM",
//     location: "Online",
//     image: "/placeholder.svg?height=300&width=500",
//     status: "Past",
//     slug: "building-with-nextjs",
//   },
// ]

export default function HomePage() {

  return (
    
    <div className="pt-20">
      {/* Hero Section */}
      <section className="container-custom section-spacing flex flex-col justify-center min-h-[90vh]">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <p className="text-muted-foreground text-lg mb-2 font-medium">Hello, I&apos;m</p>
              <h1 className="heading-xl mb-4">Lohitha Mendu</h1>
              <h2 className="heading-md text-muted-foreground">Architecture Student</h2>
            </div>
            <p className="body-lg text-muted-foreground max-w-md">
            Passionated about sustainable architecture </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="text-lg px-8">
                <Link href="/#contact">Contact Me</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8">
                <Link href="/projects">View Projects</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-muted rounded-full opacity-50"></div>
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-muted rounded-full opacity-50"></div>
            <div className="relative z-10 aspect-square bg-muted rounded-2xl overflow-hidden border border-border">
              <Image
                src="/pic.png"
                alt="John Doe"
                width={1200}
                height={1200}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="mt-4">
        <VerseOnMind/>
        {/* <Video src={"/intro.mp4"} className="aspect-square h-64 w-64"/> */}
        </div>

        {/* <div className="flex justify-center ">
          <a href="#about" className="animate-bounce">
            <ArrowRight className="h-10 w-10 rotate-90 text-muted-foreground" />
          </a>
        </div> */}

      </section>

      {/* About Section */}
      <section id="about" className="container-custom section-spacing mt-10 md:-mt-20">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start relative">
  <h2 className="md:hidden heading-lg mb-6 relative">
  About
  </h2>
    {/* Video Section */}
    <div id="intro" className="flex justify-center md:justify-start">
      <div className="aspect-square w-[250px] md:w-[300px]">
        <Video src="/intro.mp4" height={300} width={300} />
      </div>
    </div>

    {/* Text Content */}
    <div className="md:col-span-2">
      <h2 className="hidden heading-lg mb-6 md:block md:relative">
        About
        <span className="absolute -z-10 text-[6rem] sm:text-[8rem] md:text-[10rem] font-bold text-muted/20 -top-12 sm:-top-16 md:-top-20 -left-4 sm:-left-6 opacity-80">
          01
        </span>
      </h2>

      <p className="body-lg mb-6">
        I&apos;m Lohitha Mendu, an architecture student with a strong passion for sustainable design. My focus is on creating 
        environmentally responsible spaces using natural materials and minimalist principles.
      </p>
      <p className="body-lg mb-6">
        I believe in continuous learning and actively seek opportunities to expand my knowledge, including participation in 
        workshops on sustainable architecture. I am dedicated to exploring and experimenting with materials to find innovative solutions.
      </p>
      <p className="body-lg mb-10">
        I am deeply passionate about environmental sustainability and believe that architecture has a critical role to play in 
        creating a more sustainable future.
      </p>

      {/* Optional Buttons */}
      {/* 
      <div className="flex flex-wrap gap-4">
        <Button asChild variant="outline" size="lg">
          <Link href="/portfolio">View My Work</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/workshops">Explore Workshops</Link>
        </Button>
      </div> 
      */}
    </div>
  </div>
</section>



      <Timeline/>
      <section className="container-custom section-spacing -mt-20">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h2 className="heading-lg mb-6 relative">
              Skills
              <span className="absolute -z-10 text-[10rem] font-bold text-muted/20 -top-20 -left-6 opacity-80">04</span>
            </h2>
          </div>
          <div className="md:col-span-2">

            <div className="grid grid-cols-2 gap-y-8 gap-x-16">
              {skills.map(
                (skill, index) => (
                  <div key={skill} className="border-b border-border pb-2 group">
                    <div className="flex items-baseline">
                      <span className="text-sm text-muted-foreground mr-4 group-hover:text-foreground transition-colors">
                        {(index + 1).toString().padStart(2, "0")}
                      </span>
                      <span className="text-2xl group-hover:translate-x-2 transition-transform">{skill}</span>
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="container-custom section-spacing -mt-20">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16">
          <h2 className="heading-lg relative">
            Featured Projects
            <span className="absolute -z-10 text-[10rem] font-bold text-muted/20 -top-20 -left-6 opacity-80">02</span>
          </h2>
          <Link href="/projects" className="link-underline text-lg text-muted-foreground mt-4 md:mt-0">
            View All Projects
          </Link>
        </div>

        {/* <div className="grid gap-24">
          {[1, 2, 3].map((project) => (
            <div key={project} className="group">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="text-8xl font-bold text-muted/30 group-hover:text-muted/50 transition-colors">
                    0{project}
                  </span>
                  <h3 className="text-4xl font-bold mb-6 -mt-8 group-hover:translate-x-2 transition-transform">
                    Project {project}
                  </h3>
                  <p className="text-xl text-muted-foreground mb-8">
                    A detailed description of this project, including the problem it solves, the technologies used, and
                    the challenges overcome during development.
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    <Link href={`/projects/project-${project}`}>View Project</Link>
                  </Button>
                </div>
                <div className="overflow-hidden rounded-lg">
                  <div className="aspect-video bg-muted rounded-lg overflow-hidden transition-transform group-hover:scale-105 duration-500">
                    <Image
                      src={`/placeholder.svg?height=270&width=480`}
                      alt={`Project ${project}`}
                      width={480}
                      height={270}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div> */}
          <div className="grid gap-24">
      {projects.map((project) => (
        <div key={project.id} className="group">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-8xl font-bold text-muted/30 group-hover:text-muted/50 transition-colors">
                0{project.id}
              </span>
              <h3 className="text-4xl font-bold mb-6 -mt-8 group-hover:translate-x-2 transition-transform">
                {project.title}
              </h3>
              <p className="text-xl text-muted-foreground mb-8">{project.description}</p>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
              >
                <Link href={`/projects/Project${project.id}`}>View Project</Link>
              </Button>
            </div>
            <div className="overflow-hidden rounded-lg">
              <div className="aspect-video bg-muted rounded-lg overflow-hidden transition-transform group-hover:scale-105 duration-500">
                <Image
                  src={`/${project.imgurl}`}
                  alt={project.title}
                  width={480}
                  height={270}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  
      </section>

      {/* Workshops Section */}
      {/* <section className="container-custom section-spacing">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16">
          <h2 className="heading-lg relative">
            Workshops
            <span className="absolute -z-10 text-[10rem] font-bold text-muted/20 -top-20 -left-6 opacity-80">03</span>
          </h2>
          <Link href="/workshops" className="link-underline text-lg text-muted-foreground mt-4 md:mt-0">
            View All Workshops
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workshops.map((workshop) => (
            <Card key={workshop.id} className="group overflow-hidden border border-border bg-card">
              <div className="aspect-video overflow-hidden">
                <Image
                  src={workshop.image || "/placeholder.svg"}
                  alt={workshop.title}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                />
              </div>
              <CardHeader className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <Badge variant={workshop.status === "Upcoming" ? "default" : "secondary"}>{workshop.status}</Badge>
                </div>
                <CardTitle className="text-2xl group-hover:text-primary transition-colors">{workshop.title}</CardTitle>
                <CardDescription className="line-clamp-2">{workshop.description}</CardDescription>
              </CardHeader>
              <CardContent className="p-6 pt-0 space-y-2">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{workshop.date}</span>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Users className="h-4 w-4 mr-2" />
                  <span>{workshop.location}</span>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button
                  asChild
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  <Link href={`/workshops/${workshop.slug}`}>Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section> */}
       
  

      {/* Skills Section */}
     

      {/* Recent Blog Posts */}
      {/* <section className="container-custom section-spacing">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16">
          <h2 className="heading-lg relative">
           My Creativity
            <span className="absolute -z-10 text-[10rem] font-bold text-muted/20 -top-20 -left-6 opacity-80">05</span>
          </h2>
          <Link href="/blog" className="link-underline text-lg text-muted-foreground mt-4 md:mt-0">
            View All Articles
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((post) => (
            <Link
              key={post}
              href={`/blog/post-${post}`}
              className="group block bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video bg-muted overflow-hidden">
                <Image
                  src={`/placeholder.svg?height=200&width=400`}
                  alt={`Blog Post ${post}`}
                  width={400}
                  height={200}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-muted-foreground mb-2">March {post}, 2025</div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                  Typography in Web Design: Best Practices
                </h3>
                <p className="text-muted-foreground">
                  Learn how to use typography effectively to create beautiful and readable web experiences.
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section> */}

      {/* Contact Section */}
      <SendMessage/>
  
    </div>
  )
}

