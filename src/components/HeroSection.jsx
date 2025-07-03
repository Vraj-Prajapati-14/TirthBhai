import { motion } from "framer-motion";
import { useEffect } from "react";

// Particle Background Component
const ParticleBackground = () => {
  useEffect(() => {
    const canvas = document.getElementById("particle-canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particlesArray = [];
    const numberOfParticles = 50;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width) this.speedX = -this.speedX;
        if (this.y < 0 || this.y > canvas.height) this.speedY = -this.speedY;
      }

      draw() {
        ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new Particle());
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <canvas id="particle-canvas" className="absolute inset-0 z-0" />;
};

// HeroSection Component
const HeroSection = ({ title, subtitle, buttonText, buttonLink, buttonOnClick }) => {
  // Background animation variants
  const backgroundVariants = {
    initial: { opacity: 0.7 },
    animate: {
      opacity: [0.7, 0.9, 0.7],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // Text animation variants with wave effect
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        type: "spring",
        stiffness: 100,
      },
    }),
    wave: {
      y: [0, -10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      className="relative h-[100vh] bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden"
    >
      <ParticleBackground />
      <motion.div
        className="absolute inset-0"
        variants={backgroundVariants}
        initial="initial"
        animate="animate"
      />
      <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
        <div className="text-white z-10">
          <motion.h1
            custom={0}
            initial="hidden"
            animate={["visible", "wave"]}
            variants={textVariants}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            {title}
          </motion.h1>
          <motion.p
            custom={1}
            initial="hidden"
            animate={["visible", "wave"]}
            variants={textVariants}
            className="text-xl mb-8 max-w-2xl"
          >
            {subtitle}
          </motion.p>
          <motion.button
            custom={2}
            initial="hidden"
            animate={["visible", "wave"]}
            variants={textVariants}
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full flex items-center justify-center space-x-2 transition duration-300"
            onClick={buttonOnClick}
          >
            {buttonLink ? (
              <Link
                to={buttonLink}
                smooth={true}
                duration={800}
                className="flex items-center space-x-2"
              >
                <span>{buttonText}</span> <ChevronRight className="w-4 h-4" />
              </Link>
            ) : (
              <span>{buttonText}</span>
            )}
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;