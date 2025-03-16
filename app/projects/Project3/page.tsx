import ProjectShowcaseee from "@/components/ui/ProjectShowCaseee"
export default function ProjectShowcaseExample() {
  return (
    <ProjectShowcaseee
      coverImage="/p3 cover.jpg"
      title="SEA BREEZE ACADEMY: Learning by the Sea"
      mainDescription="This project establishes a contemporary educational institution in Porbandar, Gujarat, inspired by the rhythmic patterns of the Arabian Sea."
      concept={[
        "Fluid architectural forms inspired by the dynamic movement of waves, creating a sense of rhythm and flow.",
        "Layered spatial organization that responds to the coastal site’s natural characteristics.",
        "Strategic integration of natural light and ventilation fosters a sustainable and healthy learning environment.",
        "Designed as a functional and inclusive institution for 480 students, this project harmonizes form, environment, and education to create a vibrant learning experience.",
      ]}
      description={[
        "Harmonious integration of architectural form with the dynamic coastal environment.",
        "Design approach inspired by wave movement fosters fluidity, interaction, and connection to the surrounding landscape.",
        "Focus on sustainability, inclusivity, and creating a vibrant educational atmosphere."
      ]}
      images={[
        "/p32.png",
        "/p33.png",
        "/p31.png"
      ]}
    />
  )
}
