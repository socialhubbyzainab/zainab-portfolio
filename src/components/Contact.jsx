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
          SOMETHING GREAT
        </h2>

        <p className="text-zinc-400 text-lg mb-12">
          Looking for a modern website that helps your business grow?
          Let's discuss your project.
        </p>

        <div className="bg-black border border-white/10 rounded-3xl p-10">

          <form className="space-y-6">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-zinc-900 p-4 rounded-xl outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-zinc-900 p-4 rounded-xl outline-none"
            />

            <textarea
              rows="5"
              placeholder="Tell me about your project..."
              className="w-full bg-zinc-900 p-4 rounded-xl outline-none"
            ></textarea>

            <button
              className="w-full bg-purple-600 hover:bg-purple-700 py-4 rounded-xl font-semibold transition"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;