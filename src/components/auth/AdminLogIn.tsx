import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Eye,
  EyeOff,
  AlertCircle,
  Mail,
  Lock,
  LogIn,
  Loader2,
  Shield,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function AdminLoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    adminCode: "",
    rememberMe: false,
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    adminCode: "",
    general: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showAdminCode, setShowAdminCode] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error when user types
    if (name in errors && errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }

    // Clear general error when user makes any change
    if (errors.general) {
      setErrors((prev) => ({ ...prev, general: "" }));
    }
  };

  // Validate form
  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
      isValid = false;
    }

    // Validate password
    if (!formData.password) {
      newErrors.password = "Password is required";
      isValid = false;
    }

    // Validate admin code
    if (!formData.adminCode) {
      newErrors.adminCode = "Admin code is required";
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

      // For demo purposes, let's simulate a successful login
      // In a real app, you would validate credentials with your backend

      // Simulate admin code validation
      if (formData.adminCode !== "ADMIN123") {
        throw new Error("Invalid admin code");
      }

      // Simulate successful login and redirect
      console.log("Admin login successful", formData);

      // Redirect to admin dashboard (in a real app)
      // router.push('/admin/dashboard')

      // For demo, just log the success
      window.location.href = "/home";
    } catch (error) {
      // Handle error
      console.error("Login error:", error);

      if (error instanceof Error && error.message === "Invalid admin code") {
        setErrors((prev) => ({
          ...prev,
          adminCode: "Invalid admin code. Please try again.",
        }));
      } else {
        setErrors((prev) => ({
          ...prev,
          general: "Invalid credentials. Please try again.",
        }));
      }
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
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <motion.div initial="hidden" animate="visible" variants={formVariants}>
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold mb-2">Admin Login</h1>
          <p className="text-gray-400">Log in to your administrator account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* General Error */}
          <AnimatePresence>
            {errors.general && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-red-500/20 border border-red-500 text-red-500 px-4 py-3 rounded-md flex items-start"
              >
                <AlertCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <span>{errors.general}</span>
              </motion.div>
            )}
          </AnimatePresence>

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
                placeholder="Enter your admin email"
              />
            </div>
            {errors.email && (
              <p className="mt-1 text-sm text-red-500 flex items-center">
                <AlertCircle className="h-4 w-4 mr-1" />
                {errors.email}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-300"
              >
                Password
              </label>
              <Link to={""} className="text-xs text-[#5e5ce6] hover:underline">
                Forgot password?
              </Link>
            </div>
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
                placeholder="Enter your password"
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
          </div>

          {/* Remember Me */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
              className="h-4 w-4 rounded bg-[#1a1e2e] border-[#3a4055] text-[#5e5ce6] focus:ring-[#5e5ce6] focus:ring-offset-[#1a1e2e]"
            />
            <label
              htmlFor="rememberMe"
              className="ml-2 block text-sm text-gray-300"
            >
              Remember me
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#5e5ce6] hover:bg-[#4b48bf] text-white py-2 px-4 rounded-md transition-colors flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed mt-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="animate-spin mr-2 h-5 w-5" />
                Logging in...
              </>
            ) : (
              <>
                <LogIn className="mr-2 h-5 w-5" />
                Admin Log In
              </>
            )}
          </button>

          {/* Sign Up Link */}
          <div className="text-center mt-6">
            <p className="text-gray-400">
              Need an admin account?{" "}
              <Link
                to={"/admin-register"}
                className="text-[#5e5ce6] hover:underline"
              >
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
