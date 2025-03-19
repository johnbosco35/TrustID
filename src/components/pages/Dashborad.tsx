import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Copy,
  Plus,
  FileText,
  CreditCard,
  GraduationCap,
  X,
  Check,
  Calendar,
} from "lucide-react";

export default function CredentialDashboard() {
  const [copied, setCopied] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [credentials, setCredentials] = useState<
    {
      id: number;
      type: string;
      icon: React.ForwardRefExoticComponent<
        React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> &
          React.RefAttributes<SVGSVGElement>
      >;
      iconColor: string;
      status: string;
      expiry?: string;
      issuer?: string;
    }[]
  >([
    {
      id: 1,
      type: "Passport",
      icon: FileText,
      iconColor: "text-blue-300",
      status: "Verified",
      expiry: "Jan 15, 2028",
    },
    {
      id: 2,
      type: "National ID",
      icon: CreditCard,
      iconColor: "text-teal-300",
      status: "Verified",
      expiry: "Mar 22, 2027",
    },
    {
      id: 3,
      type: "Degree Certificate",
      icon: GraduationCap,
      iconColor: "text-orange-300",
      status: "Pending",
      issuer: "University of Technology",
    },
  ]);

  const [newCredential, setNewCredential] = useState({
    type: "",
    status: "Pending",
    expiry: "",
    issuer: "",
  });

  const copyDID = () => {
    navigator.clipboard.writeText(
      "did:indy:trustid:xK9hy7cAsMjRBOMN5R2E9zLPTYG4H6JuVnYw2DTF"
    );
    setCopied(true);
    setShowToast(true);
    setTimeout(() => {
      setCopied(false);
      setShowToast(false);
    }, 3000);
  };

  const handleAddCredential = () => {
    if (!newCredential.type) return;

    const iconMap = {
      Passport: FileText,
      "National ID": CreditCard,
      "Degree Certificate": GraduationCap,
      "Driver's License": CreditCard,
    };

    const colorMap = {
      Passport: "text-blue-300",
      "National ID": "text-teal-300",
      "Degree Certificate": "text-orange-300",
      "Driver's License": "text-purple-300",
    };

    const newCred = {
      id: credentials.length + 1,
      type: newCredential.type,
      icon: iconMap[newCredential.type as keyof typeof iconMap] || FileText,
      iconColor:
        colorMap[newCredential.type as keyof typeof colorMap] ||
        "text-gray-300",
      status: newCredential.status,
      expiry: newCredential.expiry,
      issuer: newCredential.issuer,
    };

    setCredentials([...credentials, newCred]);
    setNewCredential({
      type: "",
      status: "Pending",
      expiry: "",
      issuer: "",
    });
    setShowModal(false);
  };

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 30,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 30,
      },
    },
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const toastVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
  };

  return (
    <div className=" bg-[#1a1e2e] text-white p-6 relative">
      {/* Stats Section */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemVariants}
          className="bg-[#252a3d] rounded-lg p-4"
        >
          <h3 className="text-gray-400 mb-2">Verified Credentials</h3>
          <div className="text-4xl font-bold mb-2">3</div>
          <div className="text-green-500 text-sm flex items-center">
            <svg
              className="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
            67.81% Compared to last month
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="bg-[#252a3d] rounded-lg p-4"
        >
          <h3 className="text-gray-400 mb-2">Pending Verifications</h3>
          <div className="text-4xl font-bold mb-2">1</div>
          <div className="text-green-500 text-sm flex items-center">
            <svg
              className="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
            67.81% Compared to last month
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="bg-[#252a3d] rounded-lg p-4"
        >
          <h3 className="text-gray-400 mb-2">Shared Credentials</h3>
          <div className="text-4xl font-bold mb-2">2</div>
          <div className="text-green-500 text-sm flex items-center">
            <svg
              className="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
            67.81% Compared to last month
          </div>
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* My Credentials Section */}
        <motion.div
          className="bg-[#252a3d] rounded-lg p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">My Credentials</h2>
            <motion.button
              className="bg-[#5e5ce6] hover:bg-[#4b48bf] text-white rounded-full px-3 py-1 flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowModal(true)}
            >
              <Plus size={16} className="mr-1" /> Add
            </motion.button>
          </div>

          <motion.div
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {credentials.map((credential) => {
              const Icon = credential.icon;
              return (
                <motion.div
                  key={credential.id}
                  variants={itemVariants}
                  className="bg-[#1a1e2e] rounded-lg p-4 flex items-start"
                >
                  <div className="bg-[#2a3047] p-3 rounded-lg mr-4">
                    <Icon
                      className={credential.iconColor}
                      width={24}
                      height={24}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h3 className="font-medium">{credential.type}</h3>
                      <span
                        className={`${
                          credential.status === "Verified"
                            ? "bg-green-500"
                            : "bg-yellow-500"
                        } text-white text-xs px-2 py-1 rounded-md`}
                      >
                        {credential.status}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm">
                      {credential.expiry
                        ? `Expires: ${credential.expiry}`
                        : credential.issuer}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Recent Activity Section */}
        <motion.div
          className="bg-[#252a3d] rounded-lg p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-xl font-bold mb-6">Recent Activity</h2>

          <div className="relative pl-8">
            {/* Timeline line */}
            <div className="absolute left-3 top-2 bottom-0 w-0.5 bg-[#3a4055]"></div>

            {/* Activity items */}
            <motion.div
              className="space-y-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants} className="relative">
                <div className="absolute left-[-28px] top-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <h3 className="font-medium">Passport verified</h3>
                <p className="text-gray-400 text-sm">System • 2 hours ago</p>
              </motion.div>

              <motion.div variants={itemVariants} className="relative">
                <div className="absolute left-[-28px] top-0 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <h3 className="font-medium">Credential shared</h3>
                <p className="text-gray-400 text-sm">
                  Bank of Trust • Yesterday
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="relative">
                <div className="absolute left-[-28px] top-0 w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <h3 className="font-medium">Degree certificate submitted</h3>
                <p className="text-gray-400 text-sm">You • 2 days ago</p>
              </motion.div>

              <motion.div variants={itemVariants} className="relative">
                <div className="absolute left-[-28px] top-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <h3 className="font-medium">National ID verified</h3>
                <p className="text-gray-400 text-sm">System • 3 days ago</p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* DID Section */}
      <motion.div
        className="bg-[#252a3d] rounded-lg p-6 mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <h2 className="text-xl font-bold mb-4">My DID</h2>
        <div className="flex items-center justify-between bg-[#1a1e2e] rounded-lg p-4">
          <code className="text-gray-400 text-sm overflow-x-auto">
            did:indy:trustid:xK9hy7cAsMjRBOMN5R2E9zLPTYG4H6JuVnYw2DTF
          </code>
          <div className="flex space-x-2">
            <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-md">
              Active
            </span>
            <motion.button
              className="bg-[#3a4055] hover:bg-[#4a5065] text-white text-xs px-3 py-1 rounded-md flex items-center"
              onClick={copyDID}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {copied ? "Copied!" : "Copy"}
              {!copied && <Copy size={12} className="ml-1" />}
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Add Credential Modal */}
      <AnimatePresence>
        {showModal && (
          <>
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setShowModal(false)}
            >
              <motion.div
                className="bg-[#252a3d] rounded-lg p-6 w-full max-w-md mx-4"
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold">Add New Credential</h2>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setShowModal(false)}
                  >
                    <X size={20} />
                  </motion.button>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Credential Type
                    </label>
                    <motion.select
                      className="w-full bg-[#1a1e2e] border border-[#3a4055] rounded-md p-2 text-white"
                      value={newCredential.type}
                      onChange={(e) =>
                        setNewCredential({
                          ...newCredential,
                          type: e.target.value,
                        })
                      }
                    >
                      <option value="">Select type</option>
                      <option value="Passport">Passport</option>
                      <option value="National ID">National ID</option>
                      <option value="Degree Certificate">
                        Degree Certificate
                      </option>
                      <option value="Driver's License">Driver's License</option>
                    </motion.select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Status
                    </label>
                    <motion.select
                      className="w-full bg-[#1a1e2e] border border-[#3a4055] rounded-md p-2 text-white"
                      value={newCredential.status}
                      onChange={(e) =>
                        setNewCredential({
                          ...newCredential,
                          status: e.target.value,
                        })
                      }
                    >
                      <option value="Pending">Pending</option>
                      <option value="Verified">Verified</option>
                    </motion.select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Expiry Date
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="e.g., Jan 15, 2028"
                        className="w-full bg-[#1a1e2e] border border-[#3a4055] rounded-md p-2 pl-9 text-white"
                        value={newCredential.expiry}
                        onChange={(e) =>
                          setNewCredential({
                            ...newCredential,
                            expiry: e.target.value,
                          })
                        }
                      />
                      <Calendar
                        className="absolute left-2 top-2.5 text-gray-400"
                        size={16}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Issuer / Institution
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., University of Technology"
                      className="w-full bg-[#1a1e2e] border border-[#3a4055] rounded-md p-2 text-white"
                      value={newCredential.issuer}
                      onChange={(e) =>
                        setNewCredential({
                          ...newCredential,
                          issuer: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div className="flex justify-end space-x-3 pt-4">
                    <motion.button
                      className="bg-[#3a4055] hover:bg-[#4a5065] text-white px-4 py-2 rounded-md"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setShowModal(false)}
                    >
                      Cancel
                    </motion.button>
                    <motion.button
                      className="bg-[#5e5ce6] hover:bg-[#4b48bf] text-white px-4 py-2 rounded-md flex items-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleAddCredential}
                      disabled={!newCredential.type}
                    >
                      <Plus size={16} className="mr-1" /> Add Credential
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Toast Notification for Copy */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md flex items-center shadow-lg"
            variants={toastVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Check size={16} className="mr-2" />
            DID copied to clipboard
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
