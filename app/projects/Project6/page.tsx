import ProjectShowcase from "@/components/ProjectShowcase";

// import ProjectShowcaseee from "@/components/ui/ProjectShowCaseee"
export default function ProjectShowcaseExample() {
  return (
    <ProjectShowcase
      coverImage="/sem7cov.png"
      title="BEYOND THE WALLS: together of culture and living"
      mainDescription="the redevolpment focuses on the comprehensive
 redevelopment of an existing informal settlement, housing
 a population of 635 individuals across 127 households
 (averaging 5 members per family). The core challenge was
 to provide safe, dignified, and culturally responsive 
housing while preserving the strong community bonds
 and supporting the residents' diverse occupational
 needs."
  
      images={[
        "/sem73.png",
        "/sem72.png",
        "/sem71.png",
        "/sem74.png",
        "/sem75.png"
      ]}
    />
  )
}
