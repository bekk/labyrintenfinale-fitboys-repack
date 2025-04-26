"use client";

import { motion } from "framer-motion";

export default function ResultLoading() {
  return (
    <div className="flex flex-col items-center justify-center py-16 space-y-8">
      <div className="relative w-24 h-24">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-500 border-r-blue-300"
            animate={{
              rotate: 360,
              scale: [1, 1.05, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}

        <motion.div
          className="absolute inset-0 m-auto w-12 h-12 bg-blue-100 rounded-full"
          animate={{
            scale: [0.8, 1.2, 0.8],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-blue-600"
          >
            <rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect>
            <polyline points="17 2 12 7 7 2"></polyline>
          </svg>
        </motion.div>
      </div>

      <div className="text-center space-y-3">
        <h3 className="text-xl font-semibold text-gray-800">
          Genererer TV-program
        </h3>
        <p className="text-gray-600 max-w-md">
          Vi setter sammen det perfekte TV-konseptet basert på dine valg...
        </p>
      </div>

      <div className="flex space-x-2">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="w-2 h-2 bg-blue-500 rounded-full"
            animate={{
              y: [0, -10, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="w-64 h-1 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-400 to-blue-600"
          animate={{
            width: ["0%", "100%"],
            x: ["-100%", "0%"],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
}
