"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import profile from "../../public/profile.jpg";
const Main = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      transition={{ duration: 0.8 }}
      className="container px-4 md:px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="grid items-center gap-4 sm:gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px] xl:gap-16"
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-2"
        >
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none relative bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-pink-500"
          >
            Hi, I'm Nipun
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400"
          >
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "I'm a designer.",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "I'm a developer.",
                1000,
              ]}
              wrapper="span"
              speed={20}
              preRenderFirstString={true}
              style={{ fontSize: "2em", display: "inline-block" }}
              repeat={Infinity}
            />
          </motion.p>
          <div className=" relative">
            {/* Gradients */}
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-4/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-4/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

            {/* Radial Gradient to prevent sharp edges */}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mx-auto aspect-square overflow-hidden rounded-full border-4 border-gray-100 dark:border-gray-800"
        >
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            alt="Profile Picture"
            className="rounded-full object-cover object-center"
            height="300"
            src={profile.src}
            style={{
              aspectRatio: "200/250",
              objectFit: "cover",
            }}
            width="300"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Main;
