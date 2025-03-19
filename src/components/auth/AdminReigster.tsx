import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Eye,
  EyeOff,
  CheckCircle,
  AlertCircle,
  User,
  Mail,
  Lock,
  ArrowRight,
  Loader2,
  Building,
  Shield,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function AdminSignupForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    organization: "",
    position: "",
    adminCode: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    phone: "",
    organization: "",
    position: "",
    adminCode: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showAdminCode, setShowAdminCode] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Password strength indicators
  const getPasswordStrength = (password: string) => {
    if (!password) return { score: 0, label: "" };

    let score = 0;

    // Length check
    if (password.length >= 8) score += 1;
    if (password.length >= 12) score += 1;

    // Character variety checks
    if (/[A-Z]/.test(password)) score += 1;
    if (/[a-z]/.test(password)) score += 1;
    if (/[0-9]/.test(password)) score += 1;
    if (/[^A-Za-z0-9]/.test(password)) score += 1;

    let label = "";
    let color = "";

    if (score === 0) {
      label = "";
      color = "";
    } else if (score <= 2) {
      label = "Weak";
      color = "bg-red-500";
    } else if (score <= 4) {
      label = "Moderate";
      color = "bg-yellow-500";
    } else {
      label = "Strong";
      color = "bg-green-500";
    }

    return { score: Math.min(score, 6), label, color };
  };

  const passwordStrength = getPasswordStrength(formData.password);

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // Validate form
  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    // Validate full name
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
      isValid = false;
    }

    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
      isValid = false;
    }

    // Validate phone (optional but must be valid if provided)
    if (formData.phone && !/^\+?[0-9\s\-()]{10,15}$/.test(formData.phone)) {
      newErrors.phone = "Phone number is invalid";
      isValid = false;
    }

    // Validate organization
    if (!formData.organization.trim()) {
      newErrors.organization = "Organization name is required";
      isValid = false;
    }

    // Validate position
    if (!formData.position.trim()) {
      newErrors.position = "Position is required";
      isValid = false;
    }

    // Validate admin code
    if (!formData.adminCode.trim()) {
      newErrors.adminCode = "Admin code is required";
      isValid = false;
    } else if (formData.adminCode !== "ADMIN123") {
      // Example validation
      newErrors.adminCode = "Invalid admin code";
      isValid = false;
    }

    // Validate password
    if (!formData.password) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
      isValid = false;
    } else if (passwordStrength.score < 4) {
      // Stricter for admin
      newErrors.password = "Password is too weak for admin account";
      isValid = false;
    }

    // Validate confirm password
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Success
      setIsSuccess(true);

      // In a real app, you would redirect the user or show a success message
    } catch (error) {
      // Handle error
      console.error("Signup error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animation variants
  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
      },
    },
  };

  const successVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
      },
    },
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <AnimatePresence mode="wait">
        {!isSuccess ? (
          <motion.div
            key="form"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={formVariants}
          >
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold mb-2">Create Admin Account</h1>
              <p className="text-gray-400">Sign up as an administrator</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name Field */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`bg-[#1a1e2e] text-white w-full pl-10 pr-3 py-2 rounded-md border ${
                      errors.fullName ? "border-red-500" : "border-[#3a4055]"
                    } focus:outline-none focus:ring-1 focus:ring-[#5e5ce6] focus:border-[#5e5ce6]`}
                    placeholder="Enter your full name"
                  />
                </div>
                {errors.fullName && (
                  <p className="mt-1 text-sm text-red-500 flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.fullName}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`bg-[#1a1e2e] text-white w-full pl-10 pr-3 py-2 rounded-md border ${
                      errors.email ? "border-red-500" : "border-[#3a4055]"
                    } focus:outline-none focus:ring-1 focus:ring-[#5e5ce6] focus:border-[#5e5ce6]`}
                    placeholder="Enter your email"
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500 flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Phone Field */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Phone Number
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`bg-[#1a1e2e] text-white w-full pl-10 pr-3 py-2 rounded-md border ${
                      errors.phone ? "border-red-500" : "border-[#3a4055]"
                    } focus:outline-none focus:ring-1 focus:ring-[#5e5ce6] focus:border-[#5e5ce6]`}
                    placeholder="Enter your phone number"
                  />
                </div>
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-500 flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* Organization Field */}
              <div>
                <label
                  htmlFor="organization"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Organization
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Building className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className={`bg-[#1a1e2e] text-white w-full pl-10 pr-3 py-2 rounded-md border ${
                      errors.organization
                        ? "border-red-500"
                        : "border-[#3a4055]"
                    } focus:outline-none focus:ring-1 focus:ring-[#5e5ce6] focus:border-[#5e5ce6]`}
                    placeholder="Enter your organization name"
                  />
                </div>
                {errors.organization && (
                  <p className="mt-1 text-sm text-red-500 flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.organization}
                  </p>
                )}
              </div>

              {/* Position Field */}
              <div>
                <label
                  htmlFor="position"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Position
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    className={`bg-[#1a1e2e] text-white w-full pl-10 pr-3 py-2 rounded-md border ${
                      errors.position ? "border-red-500" : "border-[#3a4055]"
                    } focus:outline-none focus:ring-1 focus:ring-[#5e5ce6] focus:border-[#5e5ce6]`}
                    placeholder="Enter your position (e.g., IT Manager)"
                  />
                </div>
                {errors.position && (
                  <p className="mt-1 text-sm text-red-500 flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.position}
                  </p>
                )}
              </div>

              {/* Admin Code Field */}
              <div>
                <label
                  htmlFor="adminCode"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Admin Code
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Shield className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type={showAdminCode ? "text" : "password"}
                    id="adminCode"
                    name="adminCode"
                    value={formData.adminCode}
                    onChange={handleChange}
                    className={`bg-[#1a1e2e] text-white w-full pl-10 pr-10 py-2 rounded-md border ${
                      errors.adminCode ? "border-red-500" : "border-[#3a4055]"
                    } focus:outline-none focus:ring-1 focus:ring-[#5e5ce6] focus:border-[#5e5ce6]`}
                    placeholder="Enter admin verification code"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowAdminCode(!showAdminCode)}
                  >
                    {showAdminCode ? (
                      <EyeOff className="h-5 w-5 text-gray-400" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                </div>
                {errors.adminCode && (
                  <p className="mt-1 text-sm text-red-500 flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.adminCode}
                  </p>
                )}
                <p className="text-xs text-gray-400 mt-1">
                  Enter the admin verification code provided by your system
                  administrator
                </p>
              </div>

              {/* Password Field */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className={`bg-[#1a1e2e] text-white w-full pl-10 pr-10 py-2 rounded-md border ${
                      errors.password ? "border-red-500" : "border-[#3a4055]"
                    } focus:outline-none focus:ring-1 focus:ring-[#5e5ce6] focus:border-[#5e5ce6]`}
                    placeholder="Create a strong password"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="mt-1 text-sm text-red-500 flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.password}
                  </p>
                )}

                {/* Password strength indicator */}
                {formData.password && (
                  <div className="mt-2">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex-1 h-2 bg-[#3a4055] rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full ${passwordStrength.color}`}
                          style={{
                            width: `${(passwordStrength.score / 6) * 100}%`,
                          }}
                        ></motion.div>
                      </div>
                      <span className="text-xs ml-2 min-w-[60px] text-right">
                        {passwordStrength.label}
                      </span>
                    </div>
                    <p className="text-xs text-gray-400">
                      Admin accounts require strong passwords with letters,
                      numbers & symbols
                    </p>
                  </div>
                )}
              </div>

              {/* Confirm Password Field */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Confirm Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className={`bg-[#1a1e2e] text-white w-full pl-10 pr-10 py-2 rounded-md border ${
                      errors.confirmPassword
                        ? "border-red-500"
                        : "border-[#3a4055]"
                    } focus:outline-none focus:ring-1 focus:ring-[#5e5ce6] focus:border-[#5e5ce6]`}
                    placeholder="Confirm your password"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="mt-1 text-sm text-red-500 flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.confirmPassword}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#5e5ce6] hover:bg-[#4b48bf] text-white py-2 px-4 rounded-md transition-colors flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed mt-6"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin mr-2 h-5 w-5" />
                    Creating Admin Account...
                  </>
                ) : (
                  <>
                    Create Admin Account
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </>
                )}
              </button>

              {/* Login Link */}
              <div className="text-center mt-6">
                <p className="text-gray-400">
                  Already have an account?{" "}
                  <Link
                    to="/admin-login"
                    className="text-[#5e5ce6] hover:underline"
                  >
                    Log in
                  </Link>
                </p>
              </div>
            </form>
          </motion.div>
        ) : (
          <motion.div
            key="success"
            initial="hidden"
            animate="visible"
            variants={successVariants}
            className="text-center py-10"
          >
            <div className="bg-[#1a1e2e] p-4 rounded-full inline-flex mb-6">
              <CheckCircle className="h-16 w-16 text-green-500" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Admin Account Created!</h2>
            <p className="text-gray-400 mb-8">
              Your administrator account has been created successfully. You can
              now log in.
            </p>
            <Link
              to="/admin-login"
              className="inline-block bg-[#5e5ce6] hover:bg-[#4b48bf] text-white py-2 px-6 rounded-md transition-colors"
            >
              Go to Login
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
