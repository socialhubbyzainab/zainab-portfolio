function Projects() {
  const projects = [
    {
      title: "Luxury Interiors",
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
      description:
        "Premium interior design website focused on luxury aesthetics and lead generation.",
      link: "https://luxury-interiors-ve9f.vercel.app/",
    },

    {
      title: "Fitness Pro",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
      description:
        "Modern fitness coaching website built to attract and convert clients.",
      link: "https://fitness-pro-blond-eta.vercel.app/",
    },

    {
      title: "AI Nexus",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
      description:
        "Futuristic AI SaaS landing page with modern UI and smooth interactions.",
      link: "https://ai-nexus-ty28.vercel.app/",
    },
  ];

  return (
    <section className="bg-zinc-950 text-white py-32 px-6">

      <div className="max-w-7xl mx-auto">

        <p className="uppercase tracking-[8px] text-purple-400 mb-4">
          Projects
        </p>

        <h2 className="text-5xl md:text-7xl font-black mb-20">
          FEATURED
          <br />
          WORK
        </h2>

        <div className="grid lg:grid-cols-3 gap-10">

          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-black rounded-3xl overflow-hidden border border-white/10 hover:border-purple-500 transition"
            >
              <div className="overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-700"
                />

              </div>

              <div className="p-8">

                <h3 className="text-2xl font-bold mb-4">
                  {project.title}
                </h3>

                <p className="text-zinc-400 mb-6">
                  {project.description}
                </p>

                <a
                  href={project.link}
                  target="_blank"
                  className="inline-block px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-700"
                >
                  View Project
                </a>

              </div>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;