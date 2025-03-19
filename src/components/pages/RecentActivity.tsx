import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Clock,
  Search,
  Filter,
  ChevronDown,
  RefreshCw,
  LogIn,
  FileText,
  Share2,
  Shield,
  CheckCircle,
  AlertTriangle,
  Upload,
  Download,
  Eye,
  Settings,
  Smartphone,
  Globe,
  ChevronRight,
  Info,
  User,
  Lock,
} from "lucide-react";

export default function RecentActivityPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedType, setSelectedType] = useState("all");
  const [selectedDateRange, setSelectedDateRange] = useState("all");
  const [expandedActivity, setExpandedActivity] = useState<number | null>(null);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [customDateRange, setCustomDateRange] = useState({
    startDate: "",
    endDate: "",
  });

  // Sample activity data
  const [activities] = useState([
    {
      id: 1,
      type: "login",
      title: "Login successful",
      description: "You logged in from Chrome on macOS",
      timestamp: new Date(Date.now() - 1000 * 60 * 30).toISOString(), // 30 minutes ago
      details: {
        device: "Chrome 122.0.6261.112 / macOS",
        location: "San Francisco, CA, USA",
        ipAddress: "192.168.1.1",
        status: "Successful",
      },
    },
    {
      id: 2,
      type: "verification",
      title: "Passport verification completed",
      description: "Your passport was successfully verified",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(), // 2 hours ago
      details: {
        documentType: "Passport",
        documentNumber: "P12345678",
        verifiedBy: "TrustID Verification Service",
        status: "Verified",
      },
    },
    {
      id: 3,
      type: "share",
      title: "Credential shared",
      description: "You shared your National ID with Government Services",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(), // 5 hours ago
      details: {
        documentType: "National ID",
        documentNumber: "ID87654321",
        sharedWith: "Government Services",
        expiresIn: "24 hours",
      },
    },
    {
      id: 4,
      type: "upload",
      title: "Document uploaded",
      description: "You uploaded a Birth Certificate for verification",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(), // 1 day ago
      details: {
        documentType: "Birth Certificate",
        documentNumber: "BC123456789",
        fileSize: "2.4 MB",
        status: "Pending verification",
      },
    },
    {
      id: 5,
      type: "security",
      title: "Password changed",
      description: "You successfully changed your account password",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2).toISOString(), // 2 days ago
      details: {
        device: "Firefox 115.0 / Windows",
        location: "San Francisco, CA, USA",
        ipAddress: "192.168.1.2",
        status: "Successful",
      },
    },
    {
      id: 6,
      type: "verification",
      title: "Driver's License verification completed",
      description: "Your driver's license was successfully verified",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3).toISOString(), // 3 days ago
      details: {
        documentType: "Driver's License",
        documentNumber: "DL987654321",
        verifiedBy: "DMV Verification Portal",
        status: "Verified",
      },
    },
    {
      id: 7,
      type: "login",
      title: "Login successful",
      description: "You logged in from Safari on iOS",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 4).toISOString(), // 4 days ago
      details: {
        device: "Safari / iOS 17.3",
        location: "San Francisco, CA, USA",
        ipAddress: "192.168.1.3",
        status: "Successful",
      },
    },
    {
      id: 8,
      type: "share",
      title: "Credential shared",
      description: "You shared your Driver's License with Car Rental Service",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5).toISOString(), // 5 days ago
      details: {
        documentType: "Driver's License",
        documentNumber: "DL987654321",
        sharedWith: "Car Rental Service",
        expiresIn: "7 days",
      },
    },
    {
      id: 9,
      type: "download",
      title: "Document downloaded",
      description: "You downloaded your verified Passport",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 6).toISOString(), // 6 days ago
      details: {
        documentType: "Passport",
        documentNumber: "P12345678",
        fileFormat: "PDF",
        fileSize: "1.2 MB",
      },
    },
    {
      id: 10,
      type: "security",
      title: "Two-factor authentication enabled",
      description: "You enabled two-factor authentication for your account",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7).toISOString(), // 7 days ago
      details: {
        method: "Authenticator app",
        device: "Chrome / Windows",
        location: "San Francisco, CA, USA",
        status: "Enabled",
      },
    },
    {
      id: 11,
      type: "verification",
      title: "Social Security Card verification failed",
      description: "Your Social Security Card verification was rejected",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 8).toISOString(), // 8 days ago
      details: {
        documentType: "Social Security Card",
        documentNumber: "SSN-XXX-XX-1234",
        verifiedBy: "Identity Verification Service",
        status: "Rejected",
        reason: "Document image unclear",
      },
    },
    {
      id: 12,
      type: "profile",
      title: "Profile updated",
      description: "You updated your profile information",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 9).toISOString(), // 9 days ago
      details: {
        changedFields: ["Phone number", "Address"],
        device: "Chrome / macOS",
        location: "San Francisco, CA, USA",
      },
    },
    {
      id: 13,
      type: "login",
      title: "Login attempt failed",
      description: "Failed login attempt from unknown device",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 10).toISOString(), // 10 days ago
      details: {
        device: "Unknown / Android",
        location: "New York, NY, USA",
        ipAddress: "203.0.113.1",
        status: "Failed",
        reason: "Incorrect password",
      },
    },
    {
      id: 14,
      type: "settings",
      title: "Notification settings updated",
      description: "You updated your notification preferences",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 12).toISOString(), // 12 days ago
      details: {
        changes: ["Disabled email notifications", "Enabled push notifications"],
        device: "Chrome / macOS",
        location: "San Francisco, CA, USA",
      },
    },
    {
      id: 15,
      type: "view",
      title: "Document viewed",
      description: "You viewed your National ID details",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 14).toISOString(), // 14 days ago
      details: {
        documentType: "National ID",
        documentNumber: "ID87654321",
        device: "Chrome / macOS",
        location: "San Francisco, CA, USA",
      },
    },
  ]);

  // Filter activities based on search query and filters
  const filteredActivities = activities.filter((activity) => {
    const matchesSearch =
      activity.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      activity.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesType =
      selectedType === "all" || activity.type === selectedType;

    // Date range filtering
    const activityDate = new Date(activity.timestamp);
    const now = new Date();
    let matchesDateRange = true;

    if (selectedDateRange === "today") {
      const today = new Date();
      matchesDateRange = activityDate.toDateString() === today.toDateString();
    } else if (selectedDateRange === "yesterday") {
      const yesterday = new Date(now);
      yesterday.setDate(yesterday.getDate() - 1);
      matchesDateRange =
        activityDate.toDateString() === yesterday.toDateString();
    } else if (selectedDateRange === "week") {
      const weekAgo = new Date(now);
      weekAgo.setDate(weekAgo.getDate() - 7);
      matchesDateRange = activityDate >= weekAgo;
    } else if (selectedDateRange === "month") {
      const monthAgo = new Date(now);
      monthAgo.setMonth(monthAgo.getMonth() - 1);
      matchesDateRange = activityDate >= monthAgo;
    } else if (
      selectedDateRange === "custom" &&
      customDateRange.startDate &&
      customDateRange.endDate
    ) {
      const startDate = new Date(customDateRange.startDate);
      const endDate = new Date(customDateRange.endDate);
      endDate.setHours(23, 59, 59, 999); // Include the entire end date
      matchesDateRange = activityDate >= startDate && activityDate <= endDate;
    }

    return matchesSearch && matchesType && matchesDateRange;
  });

  // Sort activities by timestamp (newest first)
  const sortedActivities = [...filteredActivities].sort(
    (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  );

  // Group activities by date
  const groupedActivities = sortedActivities.reduce<
    Record<string, typeof activities>
  >((groups, activity) => {
    const date = new Date(activity.timestamp);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    let dateGroup;

    if (date.toDateString() === today.toDateString()) {
      dateGroup = "Today";
    } else if (date.toDateString() === yesterday.toDateString()) {
      dateGroup = "Yesterday";
    } else {
      dateGroup = date.toLocaleDateString(undefined, {
        month: "long",
        day: "numeric",
        year: "numeric",
      });
    }

    if (!groups[dateGroup]) {
      groups[dateGroup] = [];
    }

    groups[dateGroup].push(activity);
    return groups;
  }, {});

  const toggleActivityExpansion = (id: number | null) => {
    if (expandedActivity === id) {
      setExpandedActivity(null);
    } else {
      setExpandedActivity(id);
    }
  };

  const showToastMessage = (message: string) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  // Format relative time
  const formatRelativeTime = (timestamp: string | Date) => {
    const now = new Date();
    const date = new Date(timestamp);
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (diffInSeconds < 60) {
      return "Just now";
    }

    const diffInMinutes = Math.floor(diffInSeconds / 60);
    if (diffInMinutes < 60) {
      return `${diffInMinutes} minute${diffInMinutes > 1 ? "s" : ""} ago`;
    }

    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) {
      return `${diffInHours} hour${diffInHours > 1 ? "s" : ""} ago`;
    }

    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 7) {
      return `${diffInDays} day${diffInDays > 1 ? "s" : ""} ago`;
    }

    return date.toLocaleDateString();
  };

  // Get icon based on activity type
  const getActivityIcon = (type: string, size = 20) => {
    switch (type) {
      case "login":
        return <LogIn size={size} className="text-blue-500" />;
      case "verification":
        return <CheckCircle size={size} className="text-green-500" />;
      case "share":
        return <Share2 size={size} className="text-purple-500" />;
      case "upload":
        return <Upload size={size} className="text-orange-500" />;
      case "download":
        return <Download size={size} className="text-teal-500" />;
      case "security":
        return <Shield size={size} className="text-red-500" />;
      case "profile":
        return <User size={size} className="text-indigo-500" />;
      case "settings":
        return <Settings size={size} className="text-gray-500" />;
      case "view":
        return <Eye size={size} className="text-cyan-500" />;
      default:
        return <FileText size={size} className="text-gray-500" />;
    }
  };

  // Get background color based on activity type
  const getActivityBgColor = (type: string) => {
    switch (type) {
      case "login":
        return "bg-blue-500/10";
      case "verification":
        return "bg-green-500/10";
      case "share":
        return "bg-purple-500/10";
      case "upload":
        return "bg-orange-500/10";
      case "download":
        return "bg-teal-500/10";
      case "security":
        return "bg-red-500/10";
      case "profile":
        return "bg-indigo-500/10";
      case "settings":
        return "bg-gray-500/10";
      case "view":
        return "bg-cyan-500/10";
      default:
        return "bg-gray-500/10";
    }
  };

  // Get border color based on activity type
  const getActivityBorderColor = (type: string) => {
    switch (type) {
      case "login":
        return "border-blue-500";
      case "verification":
        return "border-green-500";
      case "share":
        return "border-purple-500";
      case "upload":
        return "border-orange-500";
      case "download":
        return "border-teal-500";
      case "security":
        return "border-red-500";
      case "profile":
        return "border-indigo-500";
      case "settings":
        return "border-gray-500";
      case "view":
        return "border-cyan-500";
      default:
        return "border-gray-500";
    }
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

  const toastVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
  };

  return (
    <div className="min-h-screen bg-[#1a1e2e] text-white p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="bg-[#252a3d] p-2 rounded-lg">
              <Clock className="text-[#5e5ce6]" size={24} />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Recent Activity</h1>
              <p className="text-gray-400">
                Track all actions and events related to your identity
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                showToastMessage("Activity log exported successfully")
              }
              className="bg-[#3a4055] hover:bg-[#4a5065] text-white px-3 py-1.5 rounded-md text-sm flex items-center gap-1.5"
            >
              <Download size={14} />
              <span>Export Log</span>
            </motion.button>
          </div>
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
                placeholder="Search activities..."
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
                    className="absolute right-0 mt-2 w-72 bg-[#252a3d] rounded-md shadow-lg z-10 p-4"
                  >
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Activity Type
                      </label>
                      <motion.select
                        value={selectedType}
                        onChange={(e) => setSelectedType(e.target.value)}
                        className="w-full bg-[#1a1e2e] text-white rounded-md py-2 px-3 focus:outline-none focus:ring-1 focus:ring-[#5e5ce6]"
                      >
                        <option value="all">All Activities</option>
                        <option value="login">Logins</option>
                        <option value="verification">Verifications</option>
                        <option value="share">Sharing</option>
                        <option value="upload">Uploads</option>
                        <option value="download">Downloads</option>
                        <option value="security">Security</option>
                        <option value="profile">Profile Changes</option>
                        <option value="settings">Settings Changes</option>
                        <option value="view">Document Views</option>
                      </motion.select>
                    </div>

                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Date Range
                      </label>
                      <motion.select
                        value={selectedDateRange}
                        onChange={(e) => setSelectedDateRange(e.target.value)}
                        className="w-full bg-[#1a1e2e] text-white rounded-md py-2 px-3 focus:outline-none focus:ring-1 focus:ring-[#5e5ce6]"
                      >
                        <option value="all">All Time</option>
                        <option value="today">Today</option>
                        <option value="yesterday">Yesterday</option>
                        <option value="week">Last 7 Days</option>
                        <option value="month">Last 30 Days</option>
                        <option value="custom">Custom Range</option>
                      </motion.select>
                    </div>

                    {selectedDateRange === "custom" && (
                      <div className="space-y-3 mb-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Start Date
                          </label>
                          <motion.input
                            type="date"
                            value={customDateRange.startDate}
                            onChange={(e) =>
                              setCustomDateRange({
                                ...customDateRange,
                                startDate: e.target.value,
                              })
                            }
                            className="w-full bg-[#1a1e2e] text-white rounded-md py-2 px-3 focus:outline-none focus:ring-1 focus:ring-[#5e5ce6]"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            End Date
                          </label>
                          <motion.input
                            type="date"
                            value={customDateRange.endDate}
                            onChange={(e) =>
                              setCustomDateRange({
                                ...customDateRange,
                                endDate: e.target.value,
                              })
                            }
                            className="w-full bg-[#1a1e2e] text-white rounded-md py-2 px-3 focus:outline-none focus:ring-1 focus:ring-[#5e5ce6]"
                          />
                        </div>
                      </div>
                    )}

                    <button
                      onClick={() => {
                        setSearchQuery("");
                        setSelectedType("all");
                        setSelectedDateRange("all");
                        setCustomDateRange({ startDate: "", endDate: "" });
                      }}
                      className="w-full bg-[#3a4055] hover:bg-[#4a5065] text-white px-3 py-1.5 rounded-md text-sm flex items-center justify-center gap-1.5"
                    >
                      <RefreshCw size={14} />
                      <span>Reset Filters</span>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Activity Timeline */}
        {Object.keys(groupedActivities).length > 0 ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {Object.entries(groupedActivities).map(([date, dateActivities]) => (
              <div key={date}>
                <h2 className="text-lg font-medium text-gray-300 mb-3">
                  {date}
                </h2>
                <div className="space-y-3">
                  {dateActivities.map((activity) => (
                    <motion.div
                      key={activity.id}
                      variants={itemVariants}
                      className={`rounded-lg overflow-hidden border-l-4 ${getActivityBorderColor(
                        activity.type
                      )}`}
                    >
                      {/* Main Activity Info */}
                      <div
                        className={`bg-[#252a3d] p-4 flex items-start gap-4 cursor-pointer`}
                        onClick={() => toggleActivityExpansion(activity.id)}
                      >
                        <div
                          className={`p-2 rounded-lg ${getActivityBgColor(
                            activity.type
                          )}`}
                        >
                          {getActivityIcon(activity.type)}
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2">
                            <h3 className="font-medium text-white">
                              {activity.title}
                            </h3>
                            <div className="flex items-center gap-2 shrink-0">
                              <span className="text-gray-400 text-xs whitespace-nowrap">
                                {formatRelativeTime(activity.timestamp)}
                              </span>
                              <ChevronRight
                                size={16}
                                className={`text-gray-400 transition-transform ${
                                  expandedActivity === activity.id
                                    ? "rotate-90"
                                    : ""
                                }`}
                              />
                            </div>
                          </div>
                          <p className="text-sm mt-1 text-gray-300">
                            {activity.description}
                          </p>
                        </div>
                      </div>

                      {/* Expanded Details */}
                      <AnimatePresence>
                        {expandedActivity === activity.id && (
                          <motion.div
                            variants={expandVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="border-t border-[#3a4055] overflow-hidden"
                          >
                            <div className="p-4 bg-[#1f2436]">
                              <h4 className="font-medium mb-3 text-gray-200">
                                Activity Details
                              </h4>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                                {activity.type === "login" && (
                                  <>
                                    <div className="flex items-start gap-2">
                                      <Smartphone
                                        size={16}
                                        className="text-gray-400 mt-0.5"
                                      />
                                      <div>
                                        <span className="block text-xs text-gray-400">
                                          Device
                                        </span>
                                        <span className="text-sm text-gray-200">
                                          {activity.details.device}
                                        </span>
                                      </div>
                                    </div>
                                    <div className="flex items-start gap-2">
                                      <Globe
                                        size={16}
                                        className="text-gray-400 mt-0.5"
                                      />
                                      <div>
                                        <span className="block text-xs text-gray-400">
                                          Location
                                        </span>
                                        <span className="text-sm text-gray-200">
                                          {activity.details.location}
                                        </span>
                                      </div>
                                    </div>
                                    <div className="flex items-start gap-2">
                                      <Info
                                        size={16}
                                        className="text-gray-400 mt-0.5"
                                      />
                                      <div>
                                        <span className="block text-xs text-gray-400">
                                          IP Address
                                        </span>
                                        <span className="text-sm text-gray-200">
                                          {activity.details.ipAddress}
                                        </span>
                                      </div>
                                    </div>
                                    <div className="flex items-start gap-2">
                                      <Shield
                                        size={16}
                                        className="text-gray-400 mt-0.5"
                                      />
                                      <div>
                                        <span className="block text-xs text-gray-400">
                                          Status
                                        </span>
                                        <span
                                          className={`text-sm ${
                                            activity.details.status ===
                                            "Successful"
                                              ? "text-green-400"
                                              : "text-red-400"
                                          }`}
                                        >
                                          {activity.details.status}
                                        </span>
                                      </div>
                                    </div>
                                    {activity.details.reason && (
                                      <div className="flex items-start gap-2 col-span-2">
                                        <AlertTriangle
                                          size={16}
                                          className="text-yellow-400 mt-0.5"
                                        />
                                        <div>
                                          <span className="block text-xs text-gray-400">
                                            Reason
                                          </span>
                                          <span className="text-sm text-red-400">
                                            {activity.details.reason}
                                          </span>
                                        </div>
                                      </div>
                                    )}
                                  </>
                                )}

                                {activity.type === "verification" && (
                                  <>
                                    <div className="flex items-start gap-2">
                                      <FileText
                                        size={16}
                                        className="text-gray-400 mt-0.5"
                                      />
                                      <div>
                                        <span className="block text-xs text-gray-400">
                                          Document Type
                                        </span>
                                        <span className="text-sm text-gray-200">
                                          {activity.details.documentType}
                                        </span>
                                      </div>
                                    </div>
                                    <div className="flex items-start gap-2">
                                      <Info
                                        size={16}
                                        className="text-gray-400 mt-0.5"
                                      />
                                      <div>
                                        <span className="block text-xs text-gray-400">
                                          Document Number
                                        </span>
                                        <span className="text-sm text-gray-200">
                                          {activity.details.documentNumber}
                                        </span>
                                      </div>
                                    </div>
                                    <div className="flex items-start gap-2">
                                      <Shield
                                        size={16}
                                        className="text-gray-400 mt-0.5"
                                      />
                                      <div>
                                        <span className="block text-xs text-gray-400">
                                          Verified By
                                        </span>
                                        <span className="text-sm text-gray-200">
                                          {activity.details.verifiedBy}
                                        </span>
                                      </div>
                                    </div>
                                    <div className="flex items-start gap-2">
                                      <CheckCircle
                                        size={16}
                                        className="text-gray-400 mt-0.5"
                                      />
                                      <div>
                                        <span className="block text-xs text-gray-400">
                                          Status
                                        </span>
                                        <span
                                          className={`text-sm ${
                                            activity.details.status ===
                                            "Verified"
                                              ? "text-green-400"
                                              : activity.details.status ===
                                                "Rejected"
                                              ? "text-red-400"
                                              : "text-yellow-400"
                                          }`}
                                        >
                                          {activity.details.status}
                                        </span>
                                      </div>
                                    </div>
                                    {activity.details.reason && (
                                      <div className="flex items-start gap-2 col-span-2">
                                        <AlertTriangle
                                          size={16}
                                          className="text-yellow-400 mt-0.5"
                                        />
                                        <div>
                                          <span className="block text-xs text-gray-400">
                                            Reason
                                          </span>
                                          <span className="text-sm text-red-400">
                                            {activity.details.reason}
                                          </span>
                                        </div>
                                      </div>
                                    )}
                                  </>
                                )}

                                {activity.type === "share" && (
                                  <>
                                    <div className="flex items-start gap-2">
                                      <FileText
                                        size={16}
                                        className="text-gray-400 mt-0.5"
                                      />
                                      <div>
                                        <span className="block text-xs text-gray-400">
                                          Document Type
                                        </span>
                                        <span className="text-sm text-gray-200">
                                          {activity.details.documentType}
                                        </span>
                                      </div>
                                    </div>
                                    <div className="flex items-start gap-2">
                                      <Info
                                        size={16}
                                        className="text-gray-400 mt-0.5"
                                      />
                                      <div>
                                        <span className="block text-xs text-gray-400">
                                          Document Number
                                        </span>
                                        <span className="text-sm text-gray-200">
                                          {activity.details.documentNumber}
                                        </span>
                                      </div>
                                    </div>
                                    <div className="flex items-start gap-2">
                                      <Share2
                                        size={16}
                                        className="text-gray-400 mt-0.5"
                                      />
                                      <div>
                                        <span className="block text-xs text-gray-400">
                                          Shared With
                                        </span>
                                        <span className="text-sm text-gray-200">
                                          {activity.details.sharedWith}
                                        </span>
                                      </div>
                                    </div>
                                    <div className="flex items-start gap-2">
                                      <Clock
                                        size={16}
                                        className="text-gray-400 mt-0.5"
                                      />
                                      <div>
                                        <span className="block text-xs text-gray-400">
                                          Expires In
                                        </span>
                                        <span className="text-sm text-gray-200">
                                          {activity.details.expiresIn}
                                        </span>
                                      </div>
                                    </div>
                                  </>
                                )}

                                {activity.type === "upload" && (
                                  <>
                                    <div className="flex items-start gap-2">
                                      <FileText
                                        size={16}
                                        className="text-gray-400 mt-0.5"
                                      />
                                      <div>
                                        <span className="block text-xs text-gray-400">
                                          Document Type
                                        </span>
                                        <span className="text-sm text-gray-200">
                                          {activity.details.documentType}
                                        </span>
                                      </div>
                                    </div>
                                    <div className="flex items-start gap-2">
                                      <Info
                                        size={16}
                                        className="text-gray-400 mt-0.5"
                                      />
                                      <div>
                                        <span className="block text-xs text-gray-400">
                                          Document Number
                                        </span>
                                        <span className="text-sm text-gray-200">
                                          {activity.details.documentNumber}
                                        </span>
                                      </div>
                                    </div>
                                    <div className="flex items-start gap-2">
                                      <Upload
                                        size={16}
                                        className="text-gray-400 mt-0.5"
                                      />
                                      <div>
                                        <span className="block text-xs text-gray-400">
                                          File Size
                                        </span>
                                        <span className="text-sm text-gray-200">
                                          {activity.details.fileSize}
                                        </span>
                                      </div>
                                    </div>
                                    <div className="flex items-start gap-2">
                                      <CheckCircle
                                        size={16}
                                        className="text-gray-400 mt-0.5"
                                      />
                                      <div>
                                        <span className="block text-xs text-gray-400">
                                          Status
                                        </span>
                                        <span className="text-sm text-yellow-400">
                                          {activity.details.status}
                                        </span>
                                      </div>
                                    </div>
                                  </>
                                )}

                                {activity.type === "download" && (
                                  <>
                                    <div className="flex items-start gap-2">
                                      <FileText
                                        size={16}
                                        className="text-gray-400 mt-0.5"
                                      />
                                      <div>
                                        <span className="block text-xs text-gray-400">
                                          Document Type
                                        </span>
                                        <span className="text-sm text-gray-200">
                                          {activity.details.documentType}
                                        </span>
                                      </div>
                                    </div>
                                    <div className="flex items-start gap-2">
                                      <Info
                                        size={16}
                                        className="text-gray-400 mt-0.5"
                                      />
                                      <div>
                                        <span className="block text-xs text-gray-400">
                                          Document Number
                                        </span>
                                        <span className="text-sm text-gray-200">
                                          {activity.details.documentNumber}
                                        </span>
                                      </div>
                                    </div>
                                    <div className="flex items-start gap-2">
                                      <Download
                                        size={16}
                                        className="text-gray-400 mt-0.5"
                                      />
                                      <div>
                                        <span className="block text-xs text-gray-400">
                                          File Format
                                        </span>
                                        <span className="text-sm text-gray-200">
                                          {activity.details.fileFormat}
                                        </span>
                                      </div>
                                    </div>
                                    <div className="flex items-start gap-2">
                                      <Upload
                                        size={16}
                                        className="text-gray-400 mt-0.5"
                                      />
                                      <div>
                                        <span className="block text-xs text-gray-400">
                                          File Size
                                        </span>
                                        <span className="text-sm text-gray-200">
                                          {activity.details.fileSize}
                                        </span>
                                      </div>
                                    </div>
                                  </>
                                )}

                                {activity.type === "security" && (
                                  <>
                                    {activity.details.method && (
                                      <div className="flex items-start gap-2">
                                        <Lock
                                          size={16}
                                          className="text-gray-400 mt-0.5"
                                        />
                                        <div>
                                          <span className="block text-xs text-gray-400">
                                            Method
                                          </span>
                                          <span className="text-sm text-gray-200">
                                            {activity.details.method}
                                          </span>
                                        </div>
                                      </div>
                                    )}
                                    <div className="flex items-start gap-2">
                                      <Smartphone
                                        size={16}
                                        className="text-gray-400 mt-0.5"
                                      />
                                      <div>
                                        <span className="block text-xs text-gray-400">
                                          Device
                                        </span>
                                        <span className="text-sm text-gray-200">
                                          {activity.details.device}
                                        </span>
                                      </div>
                                    </div>
                                    <div className="flex items-start gap-2">
                                      <Globe
                                        size={16}
                                        className="text-gray-400 mt-0.5"
                                      />
                                      <div>
                                        <span className="block text-xs text-gray-400">
                                          Location
                                        </span>
                                        <span className="text-sm text-gray-200">
                                          {activity.details.location}
                                        </span>
                                      </div>
                                    </div>
                                    <div className="flex items-start gap-2">
                                      <Shield
                                        size={16}
                                        className="text-gray-400 mt-0.5"
                                      />
                                      <div>
                                        <span className="block text-xs text-gray-400">
                                          Status
                                        </span>
                                        <span className="text-sm text-green-400">
                                          {activity.details.status}
                                        </span>
                                      </div>
                                    </div>
                                  </>
                                )}

                                {activity.type === "profile" && (
                                  <>
                                    <div className="flex items-start gap-2 col-span-2">
                                      <User
                                        size={16}
                                        className="text-gray-400 mt-0.5"
                                      />
                                      <div>
                                        <span className="block text-xs text-gray-400">
                                          Changed Fields
                                        </span>
                                        <span className="text-sm text-gray-200">
                                          {(
                                            activity.details.changedFields ?? []
                                          ).join(", ")}
                                        </span>
                                      </div>
                                    </div>
                                    <div className="flex items-start gap-2">
                                      <Smartphone
                                        size={16}
                                        className="text-gray-400 mt-0.5"
                                      />
                                      <div>
                                        <span className="block text-xs text-gray-400">
                                          Device
                                        </span>
                                        <span className="text-sm text-gray-200">
                                          {activity.details.device}
                                        </span>
                                      </div>
                                    </div>
                                    <div className="flex items-start gap-2">
                                      <Globe
                                        size={16}
                                        className="text-gray-400 mt-0.5"
                                      />
                                      <div>
                                        <span className="block text-xs text-gray-400">
                                          Location
                                        </span>
                                        <span className="text-sm text-gray-200">
                                          {activity.details.location}
                                        </span>
                                      </div>
                                    </div>
                                  </>
                                )}

                                {activity.type === "settings" && (
                                  <>
                                    <div className="flex items-start gap-2 col-span-2">
                                      <Settings
                                        size={16}
                                        className="text-gray-400 mt-0.5"
                                      />
                                      <div>
                                        <span className="block text-xs text-gray-400">
                                          Changes
                                        </span>
                                        <span className="text-sm text-gray-200">
                                          {activity.details.changes?.join(
                                            ", "
                                          ) || "No changes available"}
                                        </span>
                                      </div>
                                    </div>
                                    <div className="flex items-start gap-2">
                                      <Smartphone
                                        size={16}
                                        className="text-gray-400 mt-0.5"
                                      />
                                      <div>
                                        <span className="block text-xs text-gray-400">
                                          Device
                                        </span>
                                        <span className="text-sm text-gray-200">
                                          {activity.details.device}
                                        </span>
                                      </div>
                                    </div>
                                    <div className="flex items-start gap-2">
                                      <Globe
                                        size={16}
                                        className="text-gray-400 mt-0.5"
                                      />
                                      <div>
                                        <span className="block text-xs text-gray-400">
                                          Location
                                        </span>
                                        <span className="text-sm text-gray-200">
                                          {activity.details.location}
                                        </span>
                                      </div>
                                    </div>
                                  </>
                                )}

                                {activity.type === "view" && (
                                  <>
                                    <div className="flex items-start gap-2">
                                      <FileText
                                        size={16}
                                        className="text-gray-400 mt-0.5"
                                      />
                                      <div>
                                        <span className="block text-xs text-gray-400">
                                          Document Type
                                        </span>
                                        <span className="text-sm text-gray-200">
                                          {activity.details.documentType}
                                        </span>
                                      </div>
                                    </div>
                                    <div className="flex items-start gap-2">
                                      <Info
                                        size={16}
                                        className="text-gray-400 mt-0.5"
                                      />
                                      <div>
                                        <span className="block text-xs text-gray-400">
                                          Document Number
                                        </span>
                                        <span className="text-sm text-gray-200">
                                          {activity.details.documentNumber}
                                        </span>
                                      </div>
                                    </div>
                                    <div className="flex items-start gap-2">
                                      <Smartphone
                                        size={16}
                                        className="text-gray-400 mt-0.5"
                                      />
                                      <div>
                                        <span className="block text-xs text-gray-400">
                                          Device
                                        </span>
                                        <span className="text-sm text-gray-200">
                                          {activity.details.device}
                                        </span>
                                      </div>
                                    </div>
                                    <div className="flex items-start gap-2">
                                      <Globe
                                        size={16}
                                        className="text-gray-400 mt-0.5"
                                      />
                                      <div>
                                        <span className="block text-xs text-gray-400">
                                          Location
                                        </span>
                                        <span className="text-sm text-gray-200">
                                          {activity.details.location}
                                        </span>
                                      </div>
                                    </div>
                                  </>
                                )}
                              </div>

                              <div className="mt-4 text-xs text-gray-400">
                                Activity ID: {activity.id} •{" "}
                                {new Date(activity.timestamp).toLocaleString()}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        ) : (
          <div className="bg-[#252a3d] rounded-lg p-8 text-center">
            <div className="flex justify-center mb-4">
              <Clock className="text-gray-400" size={48} />
            </div>
            <h3 className="text-xl font-medium mb-2">No activities found</h3>
            <p className="text-gray-400 mb-6">
              {searchQuery ||
              selectedType !== "all" ||
              selectedDateRange !== "all"
                ? "Try adjusting your search or filters"
                : "No recent activities to display"}
            </p>
            {(searchQuery ||
              selectedType !== "all" ||
              selectedDateRange !== "all") && (
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedType("all");
                  setSelectedDateRange("all");
                  setCustomDateRange({ startDate: "", endDate: "" });
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

      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md flex items-center shadow-lg"
            variants={toastVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <CheckCircle size={16} className="mr-2" />
            {toastMessage}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
