"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
const skills = [
  "React Js",
  "Node Js",
  "Next Js",
  "Tailwind",
  "Aws lambda",
  "Framer Motion",
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

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
      <div className="grid items-center gap-4 sm:gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px] xl:gap-16">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none relative bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-pink-500">
            My Skills
          </h2>
          <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Let my skills and expertise bring your vision to life.
          </p>
        </div>
        <div className="mx-auto lg:grid gap-4 sm:gap-6 md:gap-8 items-center justify-center shrink-0 flex gap-2 flex-wrap">
          {skills.map((i: string, idx: number) => (
            <motion.div
              key={i + "" + idx}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.8 }}
              className="inline-flex items-center space-x-2"
            >
              <CheckCircleIcon className="w-4 h-4" />
              <span className="text-sm font-medium">{i}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;

function CheckCircleIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}
