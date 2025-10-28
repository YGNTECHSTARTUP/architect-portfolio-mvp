import ProjectShowcase from "@/components/ProjectShowcase";

// import ProjectShowcaseee from "@/components/ui/ProjectShowCaseee"
export default function ProjectShowcaseExample() {
  return (
    <ProjectShowcase
      coverImage="/sem8cov.jpg"
      title="The Crumpled Canopy:  Translating Ephemeral Form"
      mainDescription="This project translates the transient gesture of crumpling paper into an enduring architectural structure. The methodology involved decoding the paper's chaotic wrinkles into a rational system of polyhedral facets and linear struts. The result is a structure defined by Tectonic Fragmentation, where the vibrant, faceted skin acts as both a visual mosaic and the structural system. Functionally, the pavilion is a Programmable Threshold, creating a dynamic, semi-open public space that actively frames the landscape and serves as a flexible venue for community gathering."
      images={[
        "/sem83.jpg",
        "/sem82.jpg",
        "/sem81.jpg",
        "/sem84.jpg",
        "/sem85.jpg"
      ]}
    />
  )
}
