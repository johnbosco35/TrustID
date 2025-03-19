import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bell,
  CheckCircle,
  AlertTriangle,
  Info,
  Trash2,
  Check,
  X,
  Filter,
  ChevronDown,
  Settings,
  RefreshCw,
  Search,
  Eye,
  EyeOff,
} from "lucide-react";

export default function NotificationPage() {
  type NotificationType = "alert" | "success" | "info" | "warning";

  const [notifications, setNotifications] = useState<
    Array<{
      id: number;
      type: NotificationType;
      title: string;
      message: string;
      timestamp: string;
      read: boolean;
      actionRequired: boolean;
      category: string;
      source: string;
    }>
  >([
    {
      id: 1,
      type: "alert",
      title: "Passport verification failed",
      message:
        "Your passport verification was unsuccessful. Please check the document and try again.",
      timestamp: new Date(Date.now() - 1000 * 60 * 30).toISOString(), // 30 minutes ago
      read: false,
      actionRequired: true,
      category: "verification",
      source: "Identity Verification Service",
    },
    {
      id: 2,
      type: "success",
      title: "Driver's License verified",
      message:
        "Your driver's license has been successfully verified and added to your credentials.",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 3).toISOString(), // 3 hours ago
      read: false,
      actionRequired: false,
      category: "verification",
      source: "DMV Verification Portal",
    },
    {
      id: 3,
      type: "info",
      title: "Credential shared successfully",
      message:
        "Your National ID was successfully shared with Government Services.",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(), // 1 day ago
      read: true,
      actionRequired: false,
      category: "sharing",
      source: "Credential Sharing Service",
    },
    {
      id: 4,
      type: "warning",
      title: "Passport expiring soon",
      message:
        "Your passport will expire in 30 days. Please renew it to avoid verification issues.",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2).toISOString(), // 2 days ago
      read: true,
      actionRequired: true,
      category: "expiration",
      source: "Document Monitoring System",
    },
    {
      id: 5,
      type: "info",
      title: "New login detected",
      message:
        "A new login was detected from San Francisco, CA using Chrome on macOS.",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3).toISOString(), // 3 days ago
      read: true,
      actionRequired: false,
      category: "security",
      source: "Security Monitoring",
    },
    {
      id: 6,
      type: "success",
      title: "Birth Certificate verification in progress",
      message:
        "Your Birth Certificate verification request has been received and is being processed.",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 4).toISOString(), // 4 days ago
      read: true,
      actionRequired: false,
      category: "verification",
      source: "Government Verification Service",
    },
    {
      id: 7,
      type: "alert",
      title: "Social Security Card verification rejected",
      message:
        "Your Social Security Card verification was rejected. Reason: Document image unclear.",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5).toISOString(), // 5 days ago
      read: true,
      actionRequired: true,
      category: "verification",
      source: "Identity Verification Service",
    },
    {
      id: 8,
      type: "info",
      title: "System maintenance scheduled",
      message:
        "System maintenance is scheduled for March 25, 2025 from 2:00 AM to 4:00 AM UTC. Some services may be unavailable during this time.",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 6).toISOString(), // 6 days ago
      read: true,
      actionRequired: false,
      category: "system",
      source: "System Administrator",
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedType, setSelectedType] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedReadStatus, setSelectedReadStatus] = useState("all");
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("success");
  const [expandedNotification, setExpandedNotification] = useState<
    number | null
  >(null);
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    pushNotifications: true,
    verificationAlerts: true,
    securityAlerts: true,
    expirationReminders: true,
    systemUpdates: false,
  });

  // Count unread notifications
  const unreadCount = notifications.filter(
    (notification) => !notification.read
  ).length;

  // Filter notifications based on search query and filters
  const filteredNotifications = notifications.filter((notification) => {
    const matchesSearch =
      notification.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      notification.message.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesType =
      selectedType === "all" || notification.type === selectedType;
    const matchesCategory =
      selectedCategory === "all" || notification.category === selectedCategory;
    const matchesReadStatus =
      selectedReadStatus === "all" ||
      (selectedReadStatus === "read" && notification.read) ||
      (selectedReadStatus === "unread" && !notification.read);

    return matchesSearch && matchesType && matchesCategory && matchesReadStatus;
  });

  // Sort notifications by timestamp (newest first)
  const sortedNotifications = [...filteredNotifications].sort(
    (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  );

  // Group notifications by date
  const groupedNotifications = sortedNotifications.reduce(
    (groups: { [key: string]: typeof notifications }, notification) => {
      const date = new Date(notification.timestamp);
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

      groups[dateGroup].push(notification);
      return groups;
    },
    {}
  );

  const markAsRead = (id: number) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
    showToastMessage("Notification marked as read", "success");
  };

  const markAsUnread = (id: number) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id ? { ...notification, read: false } : notification
      )
    );
    showToastMessage("Notification marked as unread", "success");
  };

  const deleteNotification = (id: number) => {
    setNotifications(
      notifications.filter((notification) => notification.id !== id)
    );
    showToastMessage("Notification deleted", "success");
  };

  const markAllAsRead = () => {
    setNotifications(
      notifications.map((notification) => ({ ...notification, read: true }))
    );
    showToastMessage("All notifications marked as read", "success");
  };

  const clearAllNotifications = () => {
    setNotifications([]);
    showToastMessage("All notifications cleared", "success");
  };

  const toggleNotificationExpansion = (id: number) => {
    if (expandedNotification === id) {
      setExpandedNotification(null);
    } else {
      setExpandedNotification(id);
      // Mark as read when expanded
      const notification = notifications.find((n) => n.id === id);
      if (notification && !notification.read) {
        markAsRead(id);
      }
    }
  };

  const showToastMessage = (
    message: string,
    type: "success" | "error" | "info" = "success"
  ) => {
    setToastMessage(message);
    setToastType(type);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const saveNotificationSettings = () => {
    setShowSettingsModal(false);
    showToastMessage("Notification settings saved", "success");
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

  // Get icon based on notification type
  const getNotificationIcon = (
    type: "success" | "alert" | "warning" | "info",
    size = 20
  ) => {
    switch (type) {
      case "success":
        return <CheckCircle size={size} className="text-green-500" />;
      case "alert":
        return <X size={size} className="text-red-500" />;
      case "warning":
        return <AlertTriangle size={size} className="text-yellow-500" />;
      case "info":
      default:
        return <Info size={size} className="text-blue-500" />;
    }
  };

  // Get background color based on notification type
  const getNotificationBgColor = (
    type: "success" | "alert" | "warning" | "info",
    read: boolean
  ) => {
    // No need for baseColor as it is unused

    switch (type) {
      case "success":
        return read ? "bg-[#252a3d]" : "bg-[#1e3a2d]";
      case "alert":
        return read ? "bg-[#252a3d]" : "bg-[#3a2d2d]";
      case "warning":
        return read ? "bg-[#252a3d]" : "bg-[#3a352d]";
      case "info":
      default:
        return read ? "bg-[#252a3d]" : "bg-[#2d3250]";
    }
  };

  // Get border color based on notification type
  const getNotificationBorderColor = (type: any) => {
    switch (type) {
      case "success":
        return "border-l-green-500";
      case "alert":
        return "border-l-red-500";
      case "warning":
        return "border-l-yellow-500";
      case "info":
      default:
        return "border-l-blue-500";
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
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="bg-[#252a3d] p-2 rounded-lg">
              <Bell className="text-[#5e5ce6]" size={24} />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Notifications</h1>
              <p className="text-gray-400">
                {unreadCount > 0
                  ? `You have ${unreadCount} unread notification${
                      unreadCount > 1 ? "s" : ""
                    }`
                  : "No new notifications"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={markAllAsRead}
              disabled={unreadCount === 0}
              className={`px-3 py-1.5 rounded-md text-sm flex items-center gap-1.5 ${
                unreadCount === 0
                  ? "bg-[#3a4055] text-gray-400 cursor-not-allowed"
                  : "bg-[#5e5ce6] hover:bg-[#4b48bf] text-white"
              }`}
            >
              <Check size={14} />
              <span>Mark all as read</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowSettingsModal(true)}
              className="bg-[#3a4055] hover:bg-[#4a5065] text-white px-3 py-1.5 rounded-md text-sm flex items-center gap-1.5"
            >
              <Settings size={14} />
              <span>Settings</span>
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
                placeholder="Search notifications..."
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
                        Type
                      </label>
                      <motion.select
                        value={selectedType}
                        onChange={(e) => setSelectedType(e.target.value)}
                        className="w-full bg-[#1a1e2e] text-white rounded-md py-2 px-3 focus:outline-none focus:ring-1 focus:ring-[#5e5ce6]"
                      >
                        <option value="all">All Types</option>
                        <option value="success">Success</option>
                        <option value="info">Information</option>
                        <option value="warning">Warning</option>
                        <option value="alert">Alert</option>
                      </motion.select>
                    </div>

                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Category
                      </label>
                      <motion.select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="w-full bg-[#1a1e2e] text-white rounded-md py-2 px-3 focus:outline-none focus:ring-1 focus:ring-[#5e5ce6]"
                      >
                        <option value="all">All Categories</option>
                        <option value="verification">Verification</option>
                        <option value="security">Security</option>
                        <option value="sharing">Sharing</option>
                        <option value="expiration">Expiration</option>
                        <option value="system">System</option>
                      </motion.select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Status
                      </label>
                      <motion.select
                        value={selectedReadStatus}
                        onChange={(e) => setSelectedReadStatus(e.target.value)}
                        className="w-full bg-[#1a1e2e] text-white rounded-md py-2 px-3 focus:outline-none focus:ring-1 focus:ring-[#5e5ce6]"
                      >
                        <option value="all">All</option>
                        <option value="read">Read</option>
                        <option value="unread">Unread</option>
                      </motion.select>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Notifications List */}
        {Object.keys(groupedNotifications).length > 0 ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {Object.entries(groupedNotifications).map(
              ([date, dateNotifications]) => (
                <div key={date}>
                  <h2 className="text-lg font-medium text-gray-300 mb-3">
                    {date}
                  </h2>
                  <div className="space-y-3">
                    {dateNotifications.map((notification) => (
                      <motion.div
                        key={notification.id}
                        variants={itemVariants}
                        className={`rounded-lg overflow-hidden border-l-4 ${getNotificationBorderColor(
                          notification.type
                        )}`}
                      >
                        {/* Main Notification Info */}
                        <div
                          className={`${getNotificationBgColor(
                            notification.type,
                            notification.read
                          )} p-4 flex items-start gap-4 cursor-pointer`}
                          onClick={() =>
                            toggleNotificationExpansion(notification.id)
                          }
                        >
                          <div className="mt-1">
                            {getNotificationIcon(notification.type)}
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-2">
                              <h3
                                className={`font-medium ${
                                  notification.read
                                    ? "text-gray-200"
                                    : "text-white"
                                }`}
                              >
                                {notification.title}
                              </h3>
                              <div className="flex items-center gap-2 shrink-0">
                                {notification.actionRequired && (
                                  <span className="bg-yellow-500 text-black text-xs px-2 py-0.5 rounded-full">
                                    Action Required
                                  </span>
                                )}
                                <span className="text-gray-400 text-xs whitespace-nowrap">
                                  {formatRelativeTime(notification.timestamp)}
                                </span>
                              </div>
                            </div>
                            <p
                              className={`text-sm mt-1 ${
                                notification.read
                                  ? "text-gray-400"
                                  : "text-gray-300"
                              }`}
                            >
                              {notification.message}
                            </p>
                          </div>
                        </div>

                        {/* Expanded Details */}
                        <AnimatePresence>
                          {expandedNotification === notification.id && (
                            <motion.div
                              variants={expandVariants}
                              initial="hidden"
                              animate="visible"
                              exit="exit"
                              className="border-t border-[#3a4055] overflow-hidden"
                            >
                              <div className="p-4 bg-[#1f2436]">
                                <div className="flex flex-col gap-3">
                                  <div className="flex justify-between">
                                    <span className="text-gray-400">
                                      Source:
                                    </span>
                                    <span className="text-gray-200">
                                      {notification.source}
                                    </span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-gray-400">
                                      Category:
                                    </span>
                                    <span className="capitalize text-gray-200">
                                      {notification.category}
                                    </span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-gray-400">Time:</span>
                                    <span className="text-gray-200">
                                      {new Date(
                                        notification.timestamp
                                      ).toLocaleString()}
                                    </span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-gray-400">
                                      Status:
                                    </span>
                                    <span className="text-gray-200">
                                      {notification.read ? "Read" : "Unread"}
                                    </span>
                                  </div>
                                </div>

                                <div className="flex justify-end gap-2 mt-4">
                                  {notification.read ? (
                                    <motion.button
                                      whileHover={{ scale: 1.05 }}
                                      whileTap={{ scale: 0.95 }}
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        markAsUnread(notification.id);
                                      }}
                                      className="bg-[#3a4055] hover:bg-[#4a5065] text-white px-3 py-1.5 rounded-md text-sm flex items-center gap-1.5"
                                    >
                                      <EyeOff size={14} />
                                      <span>Mark as unread</span>
                                    </motion.button>
                                  ) : (
                                    <motion.button
                                      whileHover={{ scale: 1.05 }}
                                      whileTap={{ scale: 0.95 }}
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        markAsRead(notification.id);
                                      }}
                                      className="bg-[#3a4055] hover:bg-[#4a5065] text-white px-3 py-1.5 rounded-md text-sm flex items-center gap-1.5"
                                    >
                                      <Eye size={14} />
                                      <span>Mark as read</span>
                                    </motion.button>
                                  )}

                                  <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      deleteNotification(notification.id);
                                    }}
                                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded-md text-sm flex items-center gap-1.5"
                                  >
                                    <Trash2 size={14} />
                                    <span>Delete</span>
                                  </motion.button>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )
            )}
          </motion.div>
        ) : (
          <div className="bg-[#252a3d] rounded-lg p-8 text-center">
            <div className="flex justify-center mb-4">
              <Bell className="text-gray-400" size={48} />
            </div>
            <h3 className="text-xl font-medium mb-2">No notifications found</h3>
            <p className="text-gray-400 mb-6">
              {searchQuery ||
              selectedType !== "all" ||
              selectedCategory !== "all" ||
              selectedReadStatus !== "all"
                ? "Try adjusting your search or filters"
                : "You're all caught up!"}
            </p>
            {(searchQuery ||
              selectedType !== "all" ||
              selectedCategory !== "all" ||
              selectedReadStatus !== "all") && (
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedType("all");
                  setSelectedCategory("all");
                  setSelectedReadStatus("all");
                }}
                className="bg-[#3a4055] hover:bg-[#4a5065] text-white px-4 py-2 rounded-md inline-flex items-center gap-2"
              >
                <RefreshCw size={16} />
                <span>Reset Filters</span>
              </button>
            )}
          </div>
        )}

        {/* Clear All Button (only show if there are notifications) */}
        {notifications.length > 0 && (
          <div className="mt-8 text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={clearAllNotifications}
              className="bg-[#3a4055] hover:bg-[#4a5065] text-white px-4 py-2 rounded-md inline-flex items-center gap-2"
            >
              <Trash2 size={16} />
              <span>Clear All Notifications</span>
            </motion.button>
          </div>
        )}
      </div>

      {/* Settings Modal */}
      <AnimatePresence>
        {showSettingsModal && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={() => setShowSettingsModal(false)}
          >
            <motion.div
              className="bg-[#252a3d] rounded-lg p-6 w-full max-w-md"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-xl font-bold mb-6">Notification Settings</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">Delivery Methods</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <label className="flex items-center gap-2">
                        <span>Email Notifications</span>
                      </label>
                      <div className="relative inline-flex items-center cursor-pointer">
                        <motion.input
                          type="checkbox"
                          className="sr-only peer"
                          checked={notificationSettings.emailNotifications}
                          onChange={() =>
                            setNotificationSettings({
                              ...notificationSettings,
                              emailNotifications:
                                !notificationSettings.emailNotifications,
                            })
                          }
                        />
                        <div
                          className={`w-11 h-6 bg-[#3D3E4A] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#5e5ce6]`}
                        ></div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <label className="flex items-center gap-2">
                        <span>Push Notifications</span>
                      </label>
                      <div className="relative inline-flex items-center cursor-pointer">
                        <motion.input
                          type="checkbox"
                          className="sr-only peer"
                          checked={notificationSettings.pushNotifications}
                          onChange={() =>
                            setNotificationSettings({
                              ...notificationSettings,
                              pushNotifications:
                                !notificationSettings.pushNotifications,
                            })
                          }
                        />
                        <div
                          className={`w-11 h-6 bg-[#3D3E4A] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#5e5ce6]`}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">
                    Notification Types
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <label className="flex items-center gap-2">
                        <span>Verification Alerts</span>
                      </label>
                      <div className="relative inline-flex items-center cursor-pointer">
                        <motion.input
                          type="checkbox"
                          className="sr-only peer"
                          checked={notificationSettings.verificationAlerts}
                          onChange={() =>
                            setNotificationSettings({
                              ...notificationSettings,
                              verificationAlerts:
                                !notificationSettings.verificationAlerts,
                            })
                          }
                        />
                        <div
                          className={`w-11 h-6 bg-[#3D3E4A] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#5e5ce6]`}
                        ></div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <label className="flex items-center gap-2">
                        <span>Security Alerts</span>
                      </label>
                      <div className="relative inline-flex items-center cursor-pointer">
                        <motion.input
                          type="checkbox"
                          className="sr-only peer"
                          checked={notificationSettings.securityAlerts}
                          onChange={() =>
                            setNotificationSettings({
                              ...notificationSettings,
                              securityAlerts:
                                !notificationSettings.securityAlerts,
                            })
                          }
                        />
                        <div
                          className={`w-11 h-6 bg-[#3D3E4A] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#5e5ce6]`}
                        ></div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <label className="flex items-center gap-2">
                        <span>Expiration Reminders</span>
                      </label>
                      <div className="relative inline-flex items-center cursor-pointer">
                        <motion.input
                          type="checkbox"
                          className="sr-only peer"
                          checked={notificationSettings.expirationReminders}
                          onChange={() =>
                            setNotificationSettings({
                              ...notificationSettings,
                              expirationReminders:
                                !notificationSettings.expirationReminders,
                            })
                          }
                        />
                        <div
                          className={`w-11 h-6 bg-[#3D3E4A] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#5e5ce6]`}
                        ></div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <label className="flex items-center gap-2">
                        <span>System Updates</span>
                      </label>
                      <div className="relative inline-flex items-center cursor-pointer">
                        <motion.input
                          type="checkbox"
                          className="sr-only peer"
                          checked={notificationSettings.systemUpdates}
                          onChange={() =>
                            setNotificationSettings({
                              ...notificationSettings,
                              systemUpdates:
                                !notificationSettings.systemUpdates,
                            })
                          }
                        />
                        <div
                          className={`w-11 h-6 bg-[#3D3E4A] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#5e5ce6]`}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end space-x-3 mt-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowSettingsModal(false)}
                  className="bg-[#3a4055] hover:bg-[#4a5065] text-white px-4 py-2 rounded-md"
                >
                  Cancel
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={saveNotificationSettings}
                  className="bg-[#5e5ce6] hover:bg-[#4b48bf] text-white px-4 py-2 rounded-md"
                >
                  Save Settings
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
                : "bg-blue-500"
            } text-white px-4 py-2 rounded-md flex items-center shadow-lg`}
            variants={toastVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {toastType === "success" ? (
              <CheckCircle size={16} className="mr-2" />
            ) : toastType === "error" ? (
              <X size={16} className="mr-2" />
            ) : (
              <Info size={16} className="mr-2" />
            )}
            {toastMessage}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
