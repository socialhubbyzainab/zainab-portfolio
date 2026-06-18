import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden flex items-center">

      {/* Background Websites */}
      <div className="absolute inset-0 opacity-15">
        <img
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/75"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="uppercase tracking-[8px] text-purple-400 mb-6"
        >
          Web Designer & Developer
        </motion.p>

        <motion.h1
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-8xl lg:text-[9rem] font-black leading-none"
        >
          HI, I'M
          <br />
          <span className="bg-gradient-to-r from-white via-purple-300 to-purple-600 bg-clip-text text-transparent">
            ZAINAB
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="max-w-2xl text-zinc-300 text-lg md:text-xl mt-10"
        >
          I design and build modern websites that help brands
          attract customers, establish credibility, and grow
          their business online.
        </motion.p>

        <div className="mt-10 flex gap-4">

          <a href="#Portfolio" className="px-8 py-4 rounded-full bg-purple-600 hover:bg-purple-700 transition">
            View Projects
          </a>

          <a
  href="https://wa.me/917518310418"
  target="_blank"
  rel="noreferrer"
  className="px-8 py-4 rounded-full border border-white/20 hover:bg-white hover:text-black transition inline-block"
>
  Contact Me
</a>

        </div>

      </div>

    </section>
  );
}

export default Hero;