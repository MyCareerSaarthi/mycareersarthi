"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

const CtaSection = () => {
  return (
    <section className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-3xl p-8 md:p-12 text-center border border-primary/20"
      >
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          Ready to Transform Your Career?
        </h3>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          Join thousands of professionals who have accelerated their careers
          with our platform.
        </p>
        <Button
          asChild
          size="lg"
          className="rounded-full px-8 hover:scale-105 transition-transform duration-300"
        >
          <Link href="/signup">Get Started Today</Link>
        </Button>
      </motion.div>
    </section>
  );
};

export default CtaSection;
