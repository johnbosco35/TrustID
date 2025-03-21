import { motion, AnimatePresence } from "framer-motion";
import { User, Shield, LogIn, UserPlus, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function AuthOptionsPage() {
  // Handle option selection

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
      },
    },
    hover: {
      scale: 1.03,
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
      },
    },
    tap: {
      scale: 0.98,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
      },
    },
  };

  return (
    <div className="min-h-screen bg-[#1a1e2e] text-white flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-4xl">
        <AnimatePresence mode="wait">
          <motion.div
            key="options"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={containerVariants}
            className="space-y-10"
          >
            {/* Header */}
            <motion.div variants={itemVariants} className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-3">
                Welcome to TrustID
              </h1>
              <p className="text-gray-400 text-lg">
                Choose how you want to proceed
              </p>
            </motion.div>

            {/* Sign Up Options */}
            <motion.div variants={itemVariants}>
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <UserPlus className="mr-2 text-[#5e5ce6]" size={24} />
                Sign Up
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link to={"/user-register"}>
                  <motion.div
                    variants={cardVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className="bg-[#252a3d] rounded-xl p-6 cursor-pointer border-2 border-transparent hover:border-[#5e5ce6] transition-colors"
                  >
                    <div className="flex items-start">
                      <div className="bg-[#1a1e2e] p-3 rounded-lg mr-4">
                        <User className="text-[#5e5ce6]" size={24} />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg mb-2">
                          Sign Up as User
                        </h3>
                        <p className="text-gray-400 text-sm mb-4">
                          Create a new account to manage your digital identity
                          and credentials
                        </p>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-500">
                            Personal account
                          </span>
                          <ChevronRight size={18} className="text-[#5e5ce6]" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Link>

                <Link to={"/admin-register"}>
                  <motion.div
                    variants={cardVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className="bg-[#252a3d] rounded-xl p-6 cursor-pointer border-2 border-transparent hover:border-[#5e5ce6] transition-colors"
                  >
                    <div className="flex items-start">
                      <div className="bg-[#1a1e2e] p-3 rounded-lg mr-4">
                        <Shield className="text-[#5e5ce6]" size={24} />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg mb-2">
                          Sign Up as an Organization/Business
                        </h3>
                        <p className="text-gray-400 text-sm mb-4">
                          Create a business account
                        </p>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-500">
                            Administrative access
                          </span>
                          <ChevronRight size={18} className="text-[#5e5ce6]" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </div>
            </motion.div>

            {/* Login Options */}
            <motion.div variants={itemVariants}>
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <LogIn className="mr-2 text-[#5e5ce6]" size={24} />
                Log In
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link to={"/user-login"}>
                  <motion.div
                    variants={cardVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className="bg-[#252a3d] rounded-xl p-6 cursor-pointer border-2 border-transparent hover:border-[#5e5ce6] transition-colors"
                  >
                    <div className="flex items-start">
                      <div className="bg-[#1a1e2e] p-3 rounded-lg mr-4">
                        <User className="text-[#5e5ce6]" size={24} />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg mb-2">
                          Log In as User
                        </h3>
                        <p className="text-gray-400 text-sm mb-4">
                          Access your personal account to manage your identity
                          and credentials
                        </p>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-500">
                            Personal account
                          </span>
                          <ChevronRight size={18} className="text-[#5e5ce6]" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Link>

                <Link to={"/admin-login"}>
                  <motion.div
                    variants={cardVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className="bg-[#252a3d] rounded-xl p-6 cursor-pointer border-2 border-transparent hover:border-[#5e5ce6] transition-colors"
                  >
                    <div className="flex items-start">
                      <div className="bg-[#1a1e2e] p-3 rounded-lg mr-4">
                        <Shield className="text-[#5e5ce6]" size={24} />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg mb-2">
                          Log In as Organization/Business
                        </h3>
                        <p className="text-gray-400 text-sm mb-4">
                          Access your business account
                        </p>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-500">
                            Administrative access
                          </span>
                          <ChevronRight size={18} className="text-[#5e5ce6]" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </div>
            </motion.div>
          </motion.div>

          {/* Additional Info */}
          <motion.div variants={itemVariants} className="text-center mt-8">
            <p className="text-gray-400">
              Need help? Visit our{" "}
              <a
                href="/home/support"
                className="text-[#5e5ce6] hover:underline"
              >
                Support Center
              </a>
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
