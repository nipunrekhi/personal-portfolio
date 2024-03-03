"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createUser } from "@/app/action";
import ContactForm from "./form";
const Contact = () => {
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
            Get in Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400"
          >
            Have a project in mind? Let's collaborate.
          </motion.p>
        </div>
        <div className="mx-auto w-full max-w-sm space-y-4" ref={ref}>
          <form className="grid gap-2" action={createUser}>
            <motion.div
              className="grid sm:grid-cols-[100px_1fr]"
              variants={containerVariants}
              initial="hidden"
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
            >
              <label
                className="text-sm font-medium sm:text-base/relaxed"
                htmlFor="name"
              >
                Name
              </label>
              <Input
                type="text"
                name="name"
                required
                id="name"
                placeholder="Enter your name"
              />
            </motion.div>
            <motion.div
              className="grid sm:grid-cols-[100px_1fr]"
              variants={containerVariants}
              initial="hidden"
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
            >
              <label
                className="text-sm font-medium sm:text-base/relaxed"
                htmlFor="email"
              >
                Email
              </label>
              <Input
                id="email"
                placeholder="Enter your email"
                required
                name="email"
                type="email"
              />
            </motion.div>
            <motion.div
              className="grid sm:grid-cols-[100px_1fr]"
              variants={containerVariants}
              initial="hidden"
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
            >
              <label
                className="text-sm font-medium sm:text-base/relaxed"
                htmlFor="message"
              >
                Your Message
              </label>
              <Textarea
                className="min-h-[100px] resize-y"
                id="message"
                placeholder="Enter your message"
                name="message"
                required
              />
            </motion.div>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
            >
             <ContactForm/>
            </motion.div>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
