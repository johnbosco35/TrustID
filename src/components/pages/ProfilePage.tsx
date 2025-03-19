import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Settings,
  Camera,
  Edit,
  Check,
  X,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Clock,
  Moon,
  Sun,
  Bell,
  LogOut,
  ChevronRight,
} from "lucide-react";

export default function ProfilePage() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const [profile, setProfile] = useState({
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    birthdate: "April 15, 1988",
    bio: "Digital identity specialist with 8+ years of experience in blockchain and decentralized systems.",
    joinDate: "Member since January 2022",
    role: "Administrator",
    notificationsEnabled: true,
  });

  const [editableProfile, setEditableProfile] = useState({ ...profile });

  const saveProfile = () => {
    setProfile(editableProfile);
    setIsEditing(false);
    showToastMessage("Profile updated successfully");
  };

  const showToastMessage = (message: any) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const toggleNotifications = () => {
    const updatedProfile = {
      ...profile,
      notificationsEnabled: !profile.notificationsEnabled,
    };
    setProfile(updatedProfile);
    setEditableProfile(updatedProfile);
    showToastMessage(
      profile.notificationsEnabled
        ? "Notifications disabled"
        : "Notifications enabled"
    );
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    showToastMessage(isDarkMode ? "Light mode enabled" : "Dark mode enabled");
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.4 },
    },
  };

  const slideUp = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const toastVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
  };

  return (
    <div
      className={`min-h-screen ${
        isDarkMode ? "bg-[#121420]" : "bg-gray-100"
      } transition-colors duration-300`}
    >
      {/* Top Navigation */}
      <header
        className={`${
          isDarkMode ? "bg-[#1D1E2C]" : "bg-white"
        } transition-colors duration-300 shadow-md`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1
              className={`text-xl font-bold ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              My Profile
            </h1>
            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleDarkMode}
                className={`p-2 rounded-full ${
                  isDarkMode
                    ? "bg-[#2D2E3A] text-yellow-400"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleNotifications}
                className={`p-2 rounded-full ${
                  isDarkMode ? "bg-[#2D2E3A]" : "bg-gray-200"
                } ${
                  profile.notificationsEnabled
                    ? isDarkMode
                      ? "text-blue-400"
                      : "text-blue-600"
                    : isDarkMode
                    ? "text-gray-500"
                    : "text-gray-400"
                }`}
              >
                <Bell size={20} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`p-2 rounded-full ${
                  isDarkMode
                    ? "bg-[#2D2E3A] text-red-400"
                    : "bg-gray-200 text-red-600"
                }`}
                onClick={() => showToastMessage("Logged out successfully")}
              >
                <LogOut size={20} />
              </motion.button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Left Column - Profile Card */}
          <motion.div variants={slideUp} className="md:col-span-1">
            <div
              className={`rounded-xl shadow-lg overflow-hidden ${
                isDarkMode ? "bg-[#1D1E2C]" : "bg-white"
              } transition-colors duration-300`}
            >
              <div
                className={`h-32 ${
                  isDarkMode
                    ? "bg-gradient-to-r from-purple-800 to-blue-700"
                    : "bg-gradient-to-r from-blue-400 to-indigo-500"
                }`}
              ></div>
              <div className="relative px-6 pb-6">
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full border-4 border-white dark:border-[#1D1E2C] bg-[#2D2E3A] flex items-center justify-center overflow-hidden">
                      <User
                        size={40}
                        className={`${
                          isDarkMode ? "text-gray-300" : "text-gray-600"
                        }`}
                      />
                      {/* If you have a profile image: */}
                      {/* <img src="/profile-image.jpg" alt="Profile" className="w-full h-full object-cover" /> */}
                    </div>
                    <motion.button
                      className={`absolute bottom-0 right-0 p-1.5 rounded-full ${
                        isDarkMode
                          ? "bg-blue-600 text-white"
                          : "bg-blue-500 text-white"
                      }`}
                    >
                      <Camera size={14} />
                    </motion.button>
                  </div>
                </div>

                <div className="mt-14 text-center">
                  <h2
                    className={`text-xl font-bold ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {profile.name}
                  </h2>
                  <p
                    className={`${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    } text-sm`}
                  >
                    {profile.role}
                  </p>
                  <p
                    className={`${
                      isDarkMode ? "text-gray-500" : "text-gray-500"
                    } text-xs mt-1`}
                  >
                    {profile.joinDate}
                  </p>

                  <div className="mt-6">
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => setIsEditing(!isEditing)}
                      className={`w-full py-2 px-4 rounded-md flex items-center justify-center gap-2 ${
                        isEditing
                          ? isDarkMode
                            ? "bg-gray-700 text-white"
                            : "bg-gray-200 text-gray-800"
                          : isDarkMode
                          ? "bg-blue-600 text-white"
                          : "bg-blue-500 text-white"
                      }`}
                    >
                      {isEditing ? (
                        <>
                          <X size={16} />
                          <span>Cancel Editing</span>
                        </>
                      ) : (
                        <>
                          <Edit size={16} />
                          <span>Edit Profile</span>
                        </>
                      )}
                    </motion.button>
                  </div>

                  {isEditing && (
                    <motion.button
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={saveProfile}
                      className={`w-full py-2 px-4 rounded-md flex items-center justify-center gap-2 mt-3 ${
                        isDarkMode
                          ? "bg-green-600 text-white"
                          : "bg-green-500 text-white"
                      }`}
                    >
                      <Check size={16} />
                      <span>Save Changes</span>
                    </motion.button>
                  )}
                </div>
              </div>
            </div>

            {/* Quick Settings */}
            <motion.div
              variants={slideUp}
              className={`mt-6 rounded-xl shadow-lg overflow-hidden ${
                isDarkMode ? "bg-[#1D1E2C]" : "bg-white"
              } transition-colors duration-300`}
            >
              <div className="p-6">
                <h3
                  className={`text-lg font-semibold mb-4 ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Quick Settings
                </h3>

                <motion.div variants={stagger} className="space-y-4">
                  <motion.div
                    variants={slideUp}
                    className={`flex items-center justify-between p-3 rounded-lg ${
                      isDarkMode ? "hover:bg-[#2D2E3A]" : "hover:bg-gray-50"
                    } cursor-pointer transition-colors`}
                    onClick={toggleDarkMode}
                  >
                    <div className="flex items-center gap-3">
                      {isDarkMode ? (
                        <Sun className="text-yellow-400" size={18} />
                      ) : (
                        <Moon className="text-gray-700" size={18} />
                      )}
                      <span
                        className={`${
                          isDarkMode ? "text-gray-200" : "text-gray-700"
                        }`}
                      >
                        {isDarkMode ? "Light Mode" : "Dark Mode"}
                      </span>
                    </div>
                    <ChevronRight
                      size={16}
                      className={`${
                        isDarkMode ? "text-gray-500" : "text-gray-400"
                      }`}
                    />
                  </motion.div>

                  <motion.div
                    variants={slideUp}
                    className={`flex items-center justify-between p-3 rounded-lg ${
                      isDarkMode ? "hover:bg-[#2D2E3A]" : "hover:bg-gray-50"
                    } cursor-pointer transition-colors`}
                    onClick={toggleNotifications}
                  >
                    <div className="flex items-center gap-3">
                      <Bell
                        className={
                          profile.notificationsEnabled
                            ? isDarkMode
                              ? "text-blue-400"
                              : "text-blue-600"
                            : isDarkMode
                            ? "text-gray-500"
                            : "text-gray-400"
                        }
                        size={18}
                      />
                      <span
                        className={`${
                          isDarkMode ? "text-gray-200" : "text-gray-700"
                        }`}
                      >
                        Notifications
                      </span>
                    </div>
                    <div className="relative inline-flex items-center cursor-pointer">
                      <motion.input
                        type="checkbox"
                        className="sr-only peer"
                        checked={profile.notificationsEnabled}
                        onChange={toggleNotifications}
                      />
                      <div
                        className={`w-11 h-6 ${
                          isDarkMode ? "bg-[#3D3E4A]" : "bg-gray-200"
                        } peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all ${
                          isDarkMode
                            ? "peer-checked:bg-blue-600"
                            : "peer-checked:bg-blue-500"
                        }`}
                      ></div>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={slideUp}
                    className={`flex items-center justify-between p-3 rounded-lg ${
                      isDarkMode ? "hover:bg-[#2D2E3A]" : "hover:bg-gray-50"
                    } cursor-pointer transition-colors`}
                    onClick={() =>
                      showToastMessage("Settings page not implemented")
                    }
                  >
                    <div className="flex items-center gap-3">
                      <Settings
                        className={
                          isDarkMode ? "text-gray-400" : "text-gray-600"
                        }
                        size={18}
                      />
                      <span
                        className={`${
                          isDarkMode ? "text-gray-200" : "text-gray-700"
                        }`}
                      >
                        Advanced Settings
                      </span>
                    </div>
                    <ChevronRight
                      size={16}
                      className={`${
                        isDarkMode ? "text-gray-500" : "text-gray-400"
                      }`}
                    />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Details */}
          <motion.div variants={slideUp} className="md:col-span-2">
            <div
              className={`rounded-xl shadow-lg overflow-hidden ${
                isDarkMode ? "bg-[#1D1E2C]" : "bg-white"
              } transition-colors duration-300 p-6`}
            >
              <h2
                className={`text-xl font-bold mb-6 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                {isEditing ? "Edit Profile Information" : "Profile Information"}
              </h2>

              {isEditing ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-6"
                >
                  <div>
                    <label
                      className={`block text-sm font-medium mb-1 ${
                        isDarkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Full Name
                    </label>
                    <motion.input
                      type="text"
                      className={`w-full rounded-md p-2 ${
                        isDarkMode
                          ? "bg-[#2D2E3A] border-[#3D3E4A] text-white focus:border-blue-500"
                          : "bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500"
                      } border focus:ring-1 focus:ring-blue-500 outline-none`}
                      value={editableProfile.name}
                      onChange={(e) =>
                        setEditableProfile({
                          ...editableProfile,
                          name: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div>
                    <label
                      className={`block text-sm font-medium mb-1 ${
                        isDarkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Email
                    </label>
                    <motion.input
                      type="email"
                      className={`w-full rounded-md p-2 ${
                        isDarkMode
                          ? "bg-[#2D2E3A] border-[#3D3E4A] text-white focus:border-blue-500"
                          : "bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500"
                      } border focus:ring-1 focus:ring-blue-500 outline-none`}
                      value={editableProfile.email}
                      onChange={(e) =>
                        setEditableProfile({
                          ...editableProfile,
                          email: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div>
                    <label
                      className={`block text-sm font-medium mb-1 ${
                        isDarkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Phone
                    </label>
                    <motion.input
                      type="tel"
                      className={`w-full rounded-md p-2 ${
                        isDarkMode
                          ? "bg-[#2D2E3A] border-[#3D3E4A] text-white focus:border-blue-500"
                          : "bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500"
                      } border focus:ring-1 focus:ring-blue-500 outline-none`}
                      value={editableProfile.phone}
                      onChange={(e) =>
                        setEditableProfile({
                          ...editableProfile,
                          phone: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div>
                    <label
                      className={`block text-sm font-medium mb-1 ${
                        isDarkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Location
                    </label>
                    <motion.input
                      type="text"
                      className={`w-full rounded-md p-2 ${
                        isDarkMode
                          ? "bg-[#2D2E3A] border-[#3D3E4A] text-white focus:border-blue-500"
                          : "bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500"
                      } border focus:ring-1 focus:ring-blue-500 outline-none`}
                      value={editableProfile.location}
                      onChange={(e) =>
                        setEditableProfile({
                          ...editableProfile,
                          location: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div>
                    <label
                      className={`block text-sm font-medium mb-1 ${
                        isDarkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Birthdate
                    </label>
                    <motion.input
                      type="text"
                      className={`w-full rounded-md p-2 ${
                        isDarkMode
                          ? "bg-[#2D2E3A] border-[#3D3E4A] text-white focus:border-blue-500"
                          : "bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500"
                      } border focus:ring-1 focus:ring-blue-500 outline-none`}
                      value={editableProfile.birthdate}
                      onChange={(e) =>
                        setEditableProfile({
                          ...editableProfile,
                          birthdate: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div>
                    <label
                      className={`block text-sm font-medium mb-1 ${
                        isDarkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Bio
                    </label>
                    <motion.textarea
                      className={`w-full rounded-md p-2 ${
                        isDarkMode
                          ? "bg-[#2D2E3A] border-[#3D3E4A] text-white focus:border-blue-500"
                          : "bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500"
                      } border focus:ring-1 focus:ring-blue-500 outline-none min-h-[100px]`}
                      value={editableProfile.bio}
                      onChange={(e) =>
                        setEditableProfile({
                          ...editableProfile,
                          bio: e.target.value,
                        })
                      }
                    />
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  variants={stagger}
                  initial="hidden"
                  animate="visible"
                  className="space-y-6"
                >
                  <motion.div
                    variants={slideUp}
                    className="flex items-start gap-4"
                  >
                    <div
                      className={`p-2 rounded-lg ${
                        isDarkMode ? "bg-[#2D2E3A]" : "bg-blue-50"
                      }`}
                    >
                      <Mail
                        className={
                          isDarkMode ? "text-blue-400" : "text-blue-500"
                        }
                        size={20}
                      />
                    </div>
                    <div>
                      <h3
                        className={`font-medium ${
                          isDarkMode ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        Email
                      </h3>
                      <p
                        className={`${
                          isDarkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {profile.email}
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={slideUp}
                    className="flex items-start gap-4"
                  >
                    <div
                      className={`p-2 rounded-lg ${
                        isDarkMode ? "bg-[#2D2E3A]" : "bg-green-50"
                      }`}
                    >
                      <Phone
                        className={
                          isDarkMode ? "text-green-400" : "text-green-500"
                        }
                        size={20}
                      />
                    </div>
                    <div>
                      <h3
                        className={`font-medium ${
                          isDarkMode ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        Phone
                      </h3>
                      <p
                        className={`${
                          isDarkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {profile.phone}
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={slideUp}
                    className="flex items-start gap-4"
                  >
                    <div
                      className={`p-2 rounded-lg ${
                        isDarkMode ? "bg-[#2D2E3A]" : "bg-purple-50"
                      }`}
                    >
                      <MapPin
                        className={
                          isDarkMode ? "text-purple-400" : "text-purple-500"
                        }
                        size={20}
                      />
                    </div>
                    <div>
                      <h3
                        className={`font-medium ${
                          isDarkMode ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        Location
                      </h3>
                      <p
                        className={`${
                          isDarkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {profile.location}
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={slideUp}
                    className="flex items-start gap-4"
                  >
                    <div
                      className={`p-2 rounded-lg ${
                        isDarkMode ? "bg-[#2D2E3A]" : "bg-orange-50"
                      }`}
                    >
                      <Calendar
                        className={
                          isDarkMode ? "text-orange-400" : "text-orange-500"
                        }
                        size={20}
                      />
                    </div>
                    <div>
                      <h3
                        className={`font-medium ${
                          isDarkMode ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        Birthdate
                      </h3>
                      <p
                        className={`${
                          isDarkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {profile.birthdate}
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={slideUp}
                    className="flex items-start gap-4"
                  >
                    <div
                      className={`p-2 rounded-lg ${
                        isDarkMode ? "bg-[#2D2E3A]" : "bg-indigo-50"
                      }`}
                    >
                      <User
                        className={
                          isDarkMode ? "text-indigo-400" : "text-indigo-500"
                        }
                        size={20}
                      />
                    </div>
                    <div>
                      <h3
                        className={`font-medium ${
                          isDarkMode ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        Bio
                      </h3>
                      <p
                        className={`${
                          isDarkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {profile.bio}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </div>

            {/* Recent Logins */}
            <motion.div
              variants={slideUp}
              className={`mt-6 rounded-xl shadow-lg overflow-hidden ${
                isDarkMode ? "bg-[#1D1E2C]" : "bg-white"
              } transition-colors duration-300 p-6`}
            >
              <h2
                className={`text-xl font-bold mb-6 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Recent Logins
              </h2>

              <div className="space-y-4">
                {[
                  {
                    device: "Chrome / macOS",
                    location: "San Francisco, CA",
                    time: "Today, 2:45 PM",
                  },
                  {
                    device: "Safari / iOS",
                    location: "San Francisco, CA",
                    time: "Yesterday, 8:30 AM",
                  },
                  {
                    device: "Firefox / Windows",
                    location: "New York, NY",
                    time: "March 15, 2025, 4:12 PM",
                  },
                ].map((login, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: { delay: 0.1 * index },
                    }}
                    className={`p-4 rounded-lg ${
                      isDarkMode ? "bg-[#2D2E3A]" : "bg-gray-50"
                    } flex items-center justify-between`}
                  >
                    <div>
                      <h3
                        className={`font-medium ${
                          isDarkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {login.device}
                      </h3>
                      <p
                        className={`text-sm ${
                          isDarkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {login.location}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock
                        size={14}
                        className={
                          isDarkMode ? "text-gray-500" : "text-gray-400"
                        }
                      />
                      <span
                        className={`text-sm ${
                          isDarkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {login.time}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </main>

      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            className={`fixed bottom-4 right-4 ${
              isDarkMode ? "bg-green-600" : "bg-green-500"
            } text-white px-4 py-2 rounded-md flex items-center shadow-lg`}
            variants={toastVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Check size={16} className="mr-2" />
            {toastMessage}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
