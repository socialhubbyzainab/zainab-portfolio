function Contact() {
  return (
    <section className="bg-zinc-950 text-white py-32 px-6">

      <div className="max-w-4xl mx-auto text-center">

        <p className="uppercase tracking-[8px] text-purple-400 mb-4">
          Contact
        </p>

        <h2 className="text-5xl md:text-7xl font-black mb-8">
          LET'S BUILD
          <br />
          SOMETHING AMAZING
        </h2>

        <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-16">
          Looking for a modern, professional website that helps your
          business stand out and attract more customers? Let's connect.
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          {/* WhatsApp Card */}
          <div className="bg-black border border-white/10 rounded-3xl p-10 hover:border-green-500 transition">

            <div className="text-5xl mb-6">
              💬
            </div>

            <h3 className="text-3xl font-bold mb-4">
              WhatsApp
            </h3>

            <p className="text-zinc-400 mb-8">
              Send me a message and let's discuss your project requirements.
            </p>

            <a
              href="https://wa.me/7518310418"
              target="_blank"
              rel="noreferrer"
              className="inline-block px-8 py-4 bg-green-500 hover:bg-green-600 rounded-full font-semibold transition"
            >
              Message on WhatsApp
            </a>

          </div>

          {/* Call Card */}
          <div className="bg-black border border-white/10 rounded-3xl p-10 hover:border-purple-500 transition">

            <div className="text-5xl mb-6">
              📞
            </div>

            <h3 className="text-3xl font-bold mb-4">
              Call Me
            </h3>

            <p className="text-zinc-400 mb-8">
              Prefer a direct conversation? Give me a call and let's talk.
            </p>

            <a
              href="tel:+917518310418"
              className="inline-block px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-full font-semibold transition"
            >
              Call Now
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;