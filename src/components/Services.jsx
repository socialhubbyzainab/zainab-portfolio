function Services() {
  const services = [
    {
      title: "Business Websites",
      desc: "Professional websites that build trust and generate leads.",
    },
    {
      title: "Landing Pages",
      desc: "High-converting pages designed for marketing campaigns.",
    },
    {
      title: "Portfolio Websites",
      desc: "Showcase your work with a premium online presence.",
    },
    {
      title: "Website Redesign",
      desc: "Transform outdated websites into modern experiences.",
    },
  ];

  return (
    <section className="bg-black text-white py-32 px-6">

      <div className="max-w-7xl mx-auto">

        <p className="uppercase tracking-[8px] text-purple-400 mb-4">
          Services
        </p>

        <h2 className="text-5xl md:text-7xl font-black mb-20">
          WHAT I
          <br />
          OFFER
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-white/10 p-10 rounded-3xl hover:border-purple-500 transition"
            >
              <h3 className="text-3xl font-bold mb-4">
                {service.title}
              </h3>

              <p className="text-zinc-400">
                {service.desc}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Services;