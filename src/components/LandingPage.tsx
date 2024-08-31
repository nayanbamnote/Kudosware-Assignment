//@ts-nocheck
'use client'
import React, { useState } from "react";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { useUser, UserButton } from "@clerk/nextjs";
import { motion } from "framer-motion";
import { UploadButton } from "@uploadthing/react";
import { OurFileRouter } from "@/app/api/uploadthing/core";

const LandingPage = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  const [isUploaded, setIsUploaded] = useState(false);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <HeroHighlight className="w-full h-full flex flex-col items-center justify-center p-4 relative">
      {isSignedIn && (
        <div className="absolute top-4 left-4">
          <UserButton afterSignOutUrl="/" />
        </div>
      )}
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
      >
        {isSignedIn
          ? `Welcome back, ${user.firstName || "User"}!   `
          : "With each application, possibilities unfold. Every job is a great chance, "}
        <Highlight className="text-black dark:text-white">
          {isSignedIn ? "Ready to continue your journey?" : "for growth and new starts."}
        </Highlight>
      </motion.h1>

      <div className="flex gap-4 mt-8">
        {!isSignedIn ? (
          <>
            <motion.a
              href="/sign-up"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: [0.8, 1.05, 1] }}
              transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
              className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white font-medium transition duration-200 ease-linear"
            >
              Sign Up
            </motion.a>
            <motion.a
              href="/sign-in"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: [0.8, 1.05, 1] }}
              transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
              className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white font-medium transition duration-200 ease-linear"
            >
              Sign In
            </motion.a>
          </>
        ) : !isUploaded ? (
            <UploadButton<OurFileRouter>
            endpoint="resumeUploader"
            onClientUploadComplete={(res) => {
              console.log("Files: ", res);
              setIsUploaded(true);
            }}
            onUploadError={(error: Error) => {
              alert(`ERROR! ${error.message}`);
            }}
          />
        ) : (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="md:text-2xl lg:text-3xl text-lg text-center mx-auto text-green-600 font-medium"
          >
            Thank you for uploading your resume. We'll be in touch soon!
          </motion.p>
        )}
      </div>
    </HeroHighlight>
  );
};

export default LandingPage;
