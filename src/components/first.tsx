import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      className="h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage: `url('/bg.png')`,
      }}
    >
      <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              duration: 2,
              ease: "easeInOut",
            },
          }}
          className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
        >
          {Array.from("Welcome to our website").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.5,
                  ease: "easeInOut",
                  delay: index * 0.05,
                },
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>
      </div>
    </div>
  );
};

export default Hero;
