"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CardContent, Card } from "@/components/ui/card";
import Link from "next/link";
const projects = [
  {
    name: "Addlly Ai",
    type: "Development",
    desc: " Addlly Ai is a cutting-edge project focused on artificial intelligence.",
  },
  {
    name: "Gift-XD",
    type: "Development",
    desc: "Gift-XD is a development project that based on crypto-currency.",
  },
  {
    name: "Embraso",
    type: "Development",
    desc: "Embraso is a development initiative that aims to bring  impactful to the digital landscape.",
  },
];
const ProjectCard = () => {
  return (
    <React.Fragment>
      {projects.map(({ name, desc, type }, idx) => (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Card className="w-full h-64">
            <Link className="inset-0 rounded-lg overflow-hidden" href="#" />
            <CardContent className="flex flex-col items-start">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800 my-5">
                {type}
              </div>
              <h3 className="text-lg font-bold">{name}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{desc}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </React.Fragment>
  );
};

const Projects = () => {
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
      <div className="grid items-center gap-4 sm:gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px] xl:gap-16">
        <div className="space-y-2">
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none relative bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-pink-500"
          >
            My Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400"
          >
            Check out some of my recent work.
          </motion.p>
        </div>
        <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          <ProjectCard />
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
