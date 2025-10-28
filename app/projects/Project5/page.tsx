import ProjectShowcaseee from "@/components/ui/ProjectShowCaseee"
export default function ProjectShowcaseExample() {
  return (
    <ProjectShowcaseee
      coverImage="/sem6cov.png"
      title="LIVING LIGHT: Shared Life"
      mainDescription="This contemporary residential design is conceptualized as an exploration of light and texture, perfectly
 articulated in this facade view."
      video="/sem6video.mp4"
      images={[
        "/sem63.png",
        "/sem62.png",
        "/sem61.png",
        "/sem64.png",
        "/sem65.png"
      ]}
    />
  )
}
