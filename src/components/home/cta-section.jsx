"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { SignedIn, SignedOut } from "@clerk/nextjs";

const CtaSection = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-8 md:p-12 text-center">
              <motion.h3
                className="text-2xl md:text-3xl font-bold mb-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Ready to Transform Your Career?
              </motion.h3>
              <motion.p
                className="text-muted-foreground max-w-2xl mx-auto mb-6 text-lg"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Join experienced professionals who have accelerated their
                careers with our comprehensive LinkedIn optimization and resume
                creation services. {/* Removed "and personal branding" */}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <SignedOut>
                  <Button
                    asChild
                    size="lg"
                    className="px-8 py-6 text-lg hover:bg-primary/90 transition-colors duration-300"
                  >
                    <Link href="/signup">
                      Get Started Today
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </SignedOut>
                <SignedIn>
                  <Button
                    asChild
                    size="lg"
                    className="px-8 py-6 text-lg hover:bg-primary/90 transition-colors duration-300"
                  >
                    <Link href="/dashboard">
                      Go to Dashboard
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </SignedIn>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
