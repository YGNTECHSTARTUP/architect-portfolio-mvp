import ProjectShowcaseee from "@/components/ui/ProjectShowCaseee"
export default function ProjectShowcaseExample() {
  return (
    <ProjectShowcaseee
      coverImage="/p3 cover.jpg"
      title="SEA BREEZE ACADEMY: Learning by the Sea"
      mainDescription="This project establishes a contemporary educational institution in Porbandar, Gujarat, inspired by the rhythmic patterns of the Arabian Sea."
      video="/pro3.mp4"
      images={[
        "/p32.png",
        "/p33.png",
        "/p31.png"
      ]}
    />
  )
}
