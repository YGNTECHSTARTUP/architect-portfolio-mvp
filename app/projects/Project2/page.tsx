import ProjectShowcase from "@/components/ProjectShowcase"
export default function ProjectShowcaseExample() {

  return <ProjectShowcase
  coverImage="/p2 cover.png"
  title="BREATHING NEW LIFE Daman's Heritage"
  mainDescription="This renovation transforms a century-old heritage building in Daman, preserving its historic charm while adapting it for modern use. By integrating adjacent plots, the space is expanded without compromising its original structure and facade."
  concept={[
    "A retired government officer reimagines his ancestral home as an art studio and residence.",
    "The design fosters pottery and painting workshops for all ages.",
    "Provides a comfortable living space for him and his wife near a local school.",
    "The ground floor is dedicated to an open art studio, fostering community engagement. The upper floor provides a residential space, blending traditional aesthetics with modern comforts.",
    "The project maintains the original structural integrity while expanding its functionality.",

  ]}
  description={[
    "Structural integrity preserved, with enhanced functionality.",
    "Ground floor: Open art studio for community engagement.",
    "Upper floor: A modern yet traditionally inspired residence."
  ]}
  images={[
    "/p4.png",
    "/p2.png",
    "/p3.png"
  ]}
/>

}

