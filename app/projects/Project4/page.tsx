import ProjectShowcase from "@/components/ProjectShowcase";

// import ProjectShowcaseee from "@/components/ui/ProjectShowCaseee"
export default function ProjectShowcaseExample() {
  return (
    <ProjectShowcase
      coverImage="/sem3cov.png"
      title="AQUATIC FLIGHT: FIN TO FACADE"
      mainDescription="The design uses an undulating, illuminated metallic canopy that creates a strong sense of fluid 
motion. It is a landmark structure that expresses biomorphic concepts through contrasting 
materials and dynamic form."
   
      images={[
        "/sem31.png",
       
      ]}
    />
  )
}
