import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  Clock,
  Calendar,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Upload,
  Download,
  Share2,
  Eye,
  EyeOff,
  Search,
  Filter,
  Trash2,
  ChevronDown,
  RefreshCw,
} from "lucide-react";

export default function IdentityRecordsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [recordToDelete, setRecordToDelete] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("success");
  const [expandedRecord, setExpandedRecord] = useState(null);

  const [records, setRecords] = useState([
    {
      id: 1,
      type: "Passport",
      documentNumber: "P12345678",
      issuedBy: "Department of State",
      issuedDate: "2020-05-15",
      expiryDate: "2030-05-14",
      status: "verified",
      verifiedDate: "2023-01-10",
      lastShared: "2023-03-15",
      sharedWith: ["Immigration Services", "Bank of Trust"],
      verificationHistory: [
        {
          date: "2023-01-10",
          status: "verified",
          verifier: "TrustID Verification Service",
        },
        {
          date: "2023-01-08",
          status: "pending",
          verifier: "TrustID Verification Service",
        },
        { date: "2023-01-05", status: "submitted", verifier: "Self" },
      ],
    },
    {
      id: 2,
      type: "Driver's License",
      documentNumber: "DL987654321",
      issuedBy: "Department of Motor Vehicles",
      issuedDate: "2022-03-20",
      expiryDate: "2026-03-19",
      status: "verified",
      verifiedDate: "2022-04-05",
      lastShared: "2022-11-22",
      sharedWith: ["Car Rental Service"],
      verificationHistory: [
        {
          date: "2022-04-05",
          status: "verified",
          verifier: "DMV Verification Portal",
        },
        {
          date: "2022-04-01",
          status: "pending",
          verifier: "DMV Verification Portal",
        },
        { date: "2022-03-25", status: "submitted", verifier: "Self" },
      ],
    },
    {
      id: 3,
      type: "Birth Certificate",
      documentNumber: "BC123456789",
      issuedBy: "Department of Health",
      issuedDate: "1988-04-15",
      expiryDate: "",
      status: "pending",
      verifiedDate: null,
      lastShared: null,
      sharedWith: [],
      verificationHistory: [
        {
          date: "2023-03-10",
          status: "pending",
          verifier: "Government Verification Service",
        },
        { date: "2023-03-08", status: "submitted", verifier: "Self" },
      ],
    },
    {
      id: 4,
      type: "Social Security Card",
      documentNumber: "SSN-XXX-XX-1234",
      issuedBy: "Social Security Administration",
      issuedDate: "2005-06-10",
      expiryDate: null,
      status: "rejected",
      verifiedDate: null,
      lastShared: null,
      sharedWith: [],
      verificationHistory: [
        {
          date: "2023-02-15",
          status: "rejected",
          verifier: "Identity Verification Service",
          reason: "Document image unclear",
        },
        {
          date: "2023-02-10",
          status: "pending",
          verifier: "Identity Verification Service",
        },
        { date: "2023-02-05", status: "submitted", verifier: "Self" },
      ],
    },
    {
      id: 5,
      type: "National ID Card",
      documentNumber: "ID87654321",
      issuedBy: "National Identity Authority",
      issuedDate: "2021-08-12",
      expiryDate: "2031-08-11",
      status: "expired",
      verifiedDate: "2021-09-01",
      lastShared: "2022-01-15",
      sharedWith: ["Government Services"],
      verificationHistory: [
        {
          date: "2021-09-01",
          status: "verified",
          verifier: "National ID Verification System",
        },
        {
          date: "2021-08-25",
          status: "pending",
          verifier: "National ID Verification System",
        },
        { date: "2021-08-15", status: "submitted", verifier: "Self" },
      ],
    },
  ]);

  const [newRecord, setNewRecord] = useState<{
    type: string;
    documentNumber: string;
    issuedBy: string;
    issuedDate: string;
    expiryDate: string | null;
  }>({
    type: "",
    documentNumber: "",
    issuedBy: "",
    issuedDate: "",
    expiryDate: null,
  });

  // Filter records based on search query and filters
  const filteredRecords = records.filter((record) => {
    const matchesSearch =
      record.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      record.documentNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      record.issuedBy.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus =
      selectedStatus === "all" || record.status === selectedStatus;
    const matchesType = selectedType === "all" || record.type === selectedType;

    return matchesSearch && matchesStatus && matchesType;
  });

  const documentTypes = [
    "Passport",
    "Driver's License",
    "Birth Certificate",
    "Social Security Card",
    "National ID Card",
    "Visa",
    "Work Permit",
  ];

  type Status = "verified" | "pending" | "rejected" | "expired";

  const statusColors: Record<Status, string> = {
    verified: "bg-green-500",
    pending: "bg-yellow-500",
    rejected: "bg-red-500",
    expired: "bg-gray-500",
  };

  const statusIcons = {
    verified: <CheckCircle size={16} />,
    pending: <Clock size={16} />,
    rejected: <XCircle size={16} />,
    expired: <AlertTriangle size={16} />,
  };

  const handleUploadRecord = () => {
    if (
      !newRecord.type ||
      !newRecord.documentNumber ||
      !newRecord.issuedBy ||
      !newRecord.issuedDate
    ) {
      showToastMessage("Please fill in all required fields", "error");
      return;
    }

    const newId = Math.max(...records.map((r) => r.id)) + 1;

    const recordToAdd = {
      id: newId,
      ...newRecord,
      status: "pending",
      verifiedDate: null,
      lastShared: null,
      sharedWith: [],
      verificationHistory: [
        {
          date: new Date().toISOString().split("T")[0],
          status: "submitted",
          verifier: "Self",
        },
      ],
    };

    setRecords([...records, recordToAdd]);
    setNewRecord({
      type: "",
      documentNumber: "",
      issuedBy: "",
      issuedDate: "",
      expiryDate: null,
    });
    setShowUploadModal(false);
    showToastMessage("Document submitted for verification", "success");
  };

  const confirmDeleteRecord = (id: any) => {
    setRecordToDelete(id);
    setShowDeleteConfirm(true);
  };

  const deleteRecord = () => {
    setRecords(records.filter((record) => record.id !== recordToDelete));
    setShowDeleteConfirm(false);
    showToastMessage("Document deleted successfully", "success");
  };

  const showToastMessage = (message: any, type = "success") => {
    setToastMessage(message);
    setToastType(type);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const toggleRecordExpansion = (id: any) => {
    if (expandedRecord === id) {
      setExpandedRecord(null);
    } else {
      setExpandedRecord(id);
    }
  };

  const shareRecord = (id: number) => {
    showToastMessage(
      `Sharing functionality for document ID ${id} not implemented`,
      "info"
    );
  };

  const downloadRecord = (id: number) => {
    showToastMessage(`Document with ID ${id} download initiated`, "success");
  };

  const refreshVerification = (id: number) => {
    showToastMessage(
      `Verification request for document ID ${id} sent`,
      "success"
    );
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
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

  const expandVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: "auto",
      opacity: 1,
      transition: {
        height: {
          type: "spring",
          stiffness: 100,
          damping: 20,
        },
        opacity: {
          duration: 0.2,
        },
      },
    },
    exit: {
      height: 0,
      opacity: 0,
      transition: {
        height: {
          type: "spring",
          stiffness: 100,
          damping: 20,
        },
        opacity: {
          duration: 0.2,
        },
      },
    },
  };

  return (
    <div className="min-h-screen bg-[#1a1e2e] text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold">Identity Records</h1>
            <p className="text-gray-400">
              Manage and verify your identity documents
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowUploadModal(true)}
            className="bg-[#5e5ce6] hover:bg-[#4b48bf] text-white px-4 py-2 rounded-md flex items-center gap-2"
          >
            <Upload size={16} />
            <span>Upload New Document</span>
          </motion.button>
        </div>

        {/* Search and Filter */}
        <div className="bg-[#252a3d] rounded-lg p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={18}
              />
              <input
                type="text"
                placeholder="Search by document type, number, or issuer..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#1a1e2e] text-white rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-1 focus:ring-[#5e5ce6]"
              />
            </div>

            <div className="relative">
              <button
                onClick={() => setFilterOpen(!filterOpen)}
                className="bg-[#1a1e2e] text-white px-4 py-2 rounded-md flex items-center gap-2"
              >
                <Filter size={18} />
                <span>Filter</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    filterOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {filterOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-2 w-64 bg-[#252a3d] rounded-md shadow-lg z-10 p-4"
                  >
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Status
                      </label>
                      <motion.select
                        value={selectedStatus}
                        onChange={(e) => setSelectedStatus(e.target.value)}
                        className="w-full bg-[#1a1e2e] text-white rounded-md py-2 px-3 focus:outline-none focus:ring-1 focus:ring-[#5e5ce6]"
                      >
                        <option value="all">All Statuses</option>
                        <option value="verified">Verified</option>
                        <option value="pending">Pending</option>
                        <option value="rejected">Rejected</option>
                        <option value="expired">Expired</option>
                      </motion.select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Document Type
                      </label>
                      <motion.select
                        value={selectedType}
                        onChange={(e) => setSelectedType(e.target.value)}
                        className="w-full bg-[#1a1e2e] text-white rounded-md py-2 px-3 focus:outline-none focus:ring-1 focus:ring-[#5e5ce6]"
                      >
                        <option value="all">All Types</option>
                        {documentTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </motion.select>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Records List */}
        {filteredRecords.length > 0 ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-4"
          >
            {filteredRecords.map((record) => (
              <motion.div
                key={record.id}
                variants={itemVariants}
                className="bg-[#252a3d] rounded-lg overflow-hidden"
              >
                {/* Main Record Info */}
                <div className="p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-[#1a1e2e] p-3 rounded-lg">
                      <FileText className="text-[#5e5ce6]" size={24} />
                    </div>

                    <div>
                      <h3 className="font-medium text-lg">{record.type}</h3>
                      <p className="text-gray-400 text-sm">
                        ID: {record.documentNumber}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <div
                      className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs ${
                        statusColors[record.status as Status]
                      } text-white`}
                    >
                      {statusIcons[record.status as Status]}
                      <span className="capitalize">{record.status}</span>
                    </div>

                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Calendar size={14} />
                      <span>
                        {record.expiryDate
                          ? `Expires: ${new Date(
                              record.expiryDate
                            ).toLocaleDateString()}`
                          : "No Expiration"}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 ml-auto">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => toggleRecordExpansion(record.id)}
                        className="text-gray-400 hover:text-white"
                      >
                        {expandedRecord === record.id ? (
                          <EyeOff size={18} />
                        ) : (
                          <Eye size={18} />
                        )}
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => downloadRecord(record.id)}
                        className="text-gray-400 hover:text-white"
                      >
                        <Download size={18} />
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => shareRecord(record.id)}
                        className="text-gray-400 hover:text-white"
                      >
                        <Share2 size={18} />
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => confirmDeleteRecord(record.id)}
                        className="text-red-400 hover:text-red-300"
                      >
                        <Trash2 size={18} />
                      </motion.button>
                    </div>
                  </div>
                </div>

                {/* Expanded Details */}
                <AnimatePresence>
                  {expandedRecord === record.id && (
                    <motion.div
                      variants={expandVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="border-t border-[#3a4055] overflow-hidden"
                    >
                      <div className="p-4 bg-[#1f2436]">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-medium mb-4 text-gray-300">
                              Document Details
                            </h4>
                            <div className="space-y-3">
                              <div className="flex justify-between">
                                <span className="text-gray-400">
                                  Document Type:
                                </span>
                                <span>{record.type}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-400">
                                  Document Number:
                                </span>
                                <span>{record.documentNumber}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-400">
                                  Issued By:
                                </span>
                                <span>{record.issuedBy}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-400">
                                  Issue Date:
                                </span>
                                <span>
                                  {new Date(
                                    record.issuedDate
                                  ).toLocaleDateString()}
                                </span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-400">
                                  Expiry Date:
                                </span>
                                <span>
                                  {record.expiryDate
                                    ? new Date(
                                        record.expiryDate
                                      ).toLocaleDateString()
                                    : "No Expiration"}
                                </span>
                              </div>
                              {record.verifiedDate && (
                                <div className="flex justify-between">
                                  <span className="text-gray-400">
                                    Verified Date:
                                  </span>
                                  <span>
                                    {new Date(
                                      record.verifiedDate
                                    ).toLocaleDateString()}
                                  </span>
                                </div>
                              )}
                            </div>

                            {record.status === "pending" && (
                              <div className="mt-4">
                                <motion.button
                                  whileHover={{ scale: 1.03 }}
                                  whileTap={{ scale: 0.97 }}
                                  onClick={() => refreshVerification(record.id)}
                                  className="bg-[#5e5ce6] hover:bg-[#4b48bf] text-white px-3 py-1.5 rounded-md text-sm flex items-center gap-1.5"
                                >
                                  <RefreshCw size={14} />
                                  <span>Refresh Verification</span>
                                </motion.button>
                              </div>
                            )}
                          </div>

                          <div>
                            <h4 className="font-medium mb-4 text-gray-300">
                              Verification History
                            </h4>
                            <div className="space-y-4">
                              {record.verificationHistory.map(
                                (history, index) => (
                                  <div
                                    key={index}
                                    className="relative pl-6 pb-4"
                                  >
                                    {/* Timeline line */}
                                    {index <
                                      record.verificationHistory.length - 1 && (
                                      <div className="absolute left-2.5 top-2.5 bottom-0 w-0.5 bg-[#3a4055]"></div>
                                    )}

                                    {/* Status dot */}
                                    <div
                                      className={`absolute left-0 top-1 w-5 h-5 rounded-full flex items-center justify-center ${
                                        history.status === "verified"
                                          ? "bg-green-500"
                                          : history.status === "pending"
                                          ? "bg-yellow-500"
                                          : history.status === "rejected"
                                          ? "bg-red-500"
                                          : "bg-blue-500"
                                      }`}
                                    >
                                      <div className="w-2 h-2 bg-white rounded-full"></div>
                                    </div>

                                    <div>
                                      <div className="flex justify-between">
                                        <span className="font-medium capitalize">
                                          {history.status}
                                        </span>
                                        <span className="text-gray-400 text-sm">
                                          {new Date(
                                            history.date
                                          ).toLocaleDateString()}
                                        </span>
                                      </div>
                                      <p className="text-gray-400 text-sm">
                                        {history.verifier}
                                      </p>
                                      {"reason" in history &&
                                        history?.reason?.length && (
                                          <p className="text-red-400 text-sm mt-1">
                                            {`Reason: ${history.reason}`}
                                          </p>
                                        )}
                                    </div>
                                  </div>
                                )
                              )}
                            </div>
                          </div>
                        </div>

                        {record.sharedWith && record.sharedWith.length > 0 && (
                          <div className="mt-6">
                            <h4 className="font-medium mb-4 text-gray-300">
                              Shared With
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {record.sharedWith.map((entity, index) => (
                                <div
                                  key={index}
                                  className="bg-[#3a4055] px-3 py-1 rounded-full text-sm"
                                >
                                  {entity}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="bg-[#252a3d] rounded-lg p-8 text-center">
            <div className="flex justify-center mb-4">
              <FileText className="text-gray-400" size={48} />
            </div>
            <h3 className="text-xl font-medium mb-2">No records found</h3>
            <p className="text-gray-400 mb-6">
              {searchQuery || selectedStatus !== "all" || selectedType !== "all"
                ? "Try adjusting your search or filters"
                : "Upload your first identity document to get started"}
            </p>
            {(searchQuery ||
              selectedStatus !== "all" ||
              selectedType !== "all") && (
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedStatus("all");
                  setSelectedType("all");
                }}
                className="bg-[#3a4055] hover:bg-[#4a5065] text-white px-4 py-2 rounded-md inline-flex items-center gap-2"
              >
                <RefreshCw size={16} />
                <span>Reset Filters</span>
              </button>
            )}
          </div>
        )}
      </div>

      {/* Upload Modal */}
      <AnimatePresence>
        {showUploadModal && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={() => setShowUploadModal(false)}
          >
            <motion.div
              className="bg-[#252a3d] rounded-lg p-6 w-full max-w-md"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-xl font-bold mb-6">Upload New Document</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Document Type*
                  </label>
                  <motion.select
                    value={newRecord.type}
                    onChange={(e) =>
                      setNewRecord({ ...newRecord, type: e.target.value })
                    }
                    className="w-full bg-[#1a1e2e] border border-[#3a4055] rounded-md p-2 text-white"
                    required
                  >
                    <option value="">Select document type</option>
                    {documentTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </motion.select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Document Number*
                  </label>
                  <input
                    type="text"
                    placeholder="Enter document number"
                    value={newRecord.documentNumber}
                    onChange={(e) =>
                      setNewRecord({
                        ...newRecord,
                        documentNumber: e.target.value,
                      })
                    }
                    className="w-full bg-[#1a1e2e] border border-[#3a4055] rounded-md p-2 text-white"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Issuing Authority*
                  </label>
                  <input
                    type="text"
                    placeholder="Enter issuing authority"
                    value={newRecord.issuedBy}
                    onChange={(e) =>
                      setNewRecord({ ...newRecord, issuedBy: e.target.value })
                    }
                    className="w-full bg-[#1a1e2e] border border-[#3a4055] rounded-md p-2 text-white"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Issue Date*
                  </label>
                  <motion.input
                    type="date"
                    value={newRecord.issuedDate}
                    onChange={(e) =>
                      setNewRecord({ ...newRecord, issuedDate: e.target.value })
                    }
                    className="w-full bg-[#1a1e2e] border border-[#3a4055] rounded-md p-2 text-white"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Expiry Date (if applicable)
                  </label>
                  <motion.input
                    type="date"
                    value={newRecord.expiryDate || ""}
                    onChange={(e) =>
                      setNewRecord({ ...newRecord, expiryDate: e.target.value })
                    }
                    className="w-full bg-[#1a1e2e] border border-[#3a4055] rounded-md p-2 text-white"
                  />
                </div>

                <div className="pt-2">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Upload Document Image
                  </label>
                  <div className="border-2 border-dashed border-[#3a4055] rounded-lg p-6 text-center">
                    <Upload className="mx-auto text-gray-400 mb-2" size={24} />
                    <p className="text-gray-400 text-sm mb-2">
                      Drag and drop your file here, or click to browse
                    </p>
                    <button className="bg-[#5e5ce6] hover:bg-[#4b48bf] text-white px-4 py-2 rounded-md text-sm">
                      Browse Files
                    </button>
                    <motion.input type="file" className="hidden" />
                  </div>
                </div>
              </div>

              <div className="flex justify-end space-x-3 mt-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowUploadModal(false)}
                  className="bg-[#3a4055] hover:bg-[#4a5065] text-white px-4 py-2 rounded-md"
                >
                  Cancel
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleUploadRecord}
                  className="bg-[#5e5ce6] hover:bg-[#4b48bf] text-white px-4 py-2 rounded-md flex items-center gap-2"
                >
                  <Upload size={16} />
                  <span>Upload Document</span>
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Delete Confirmation Modal */}
      <AnimatePresence>
        {showDeleteConfirm && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={() => setShowDeleteConfirm(false)}
          >
            <motion.div
              className="bg-[#252a3d] rounded-lg p-6 w-full max-w-md"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-xl font-bold mb-2">Delete Document</h2>
              <p className="text-gray-300 mb-6">
                Are you sure you want to delete this document? This action
                cannot be undone.
              </p>

              <div className="flex justify-end space-x-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowDeleteConfirm(false)}
                  className="bg-[#3a4055] hover:bg-[#4a5065] text-white px-4 py-2 rounded-md"
                >
                  Cancel
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={deleteRecord}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md flex items-center gap-2"
                >
                  <Trash2 size={16} />
                  <span>Delete</span>
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            className={`fixed bottom-4 right-4 ${
              toastType === "success"
                ? "bg-green-500"
                : toastType === "error"
                ? "bg-red-500"
                : toastType === "info"
                ? "bg-blue-500"
                : "bg-yellow-500"
            } text-white px-4 py-2 rounded-md flex items-center shadow-lg`}
            variants={toastVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {toastType === "success" ? (
              <CheckCircle size={16} className="mr-2" />
            ) : toastType === "error" ? (
              <XCircle size={16} className="mr-2" />
            ) : toastType === "info" ? (
              <FileText size={16} className="mr-2" />
            ) : (
              <AlertTriangle size={16} className="mr-2" />
            )}
            {toastMessage}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
