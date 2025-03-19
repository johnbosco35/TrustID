import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HelpCircle,
  Search,
  ChevronDown,
  FileText,
  Mail,
  Phone,
  CheckCircle,
  AlertTriangle,
  Send,
  X,
  MessageCircle,
  ExternalLink,
  RefreshCw,
  ThumbsUp,
  ThumbsDown,
  Paperclip,
  Info,
} from "lucide-react";

export default function SupportPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [showContactForm, setShowContactForm] = useState(false);
  const [showChatWidget, setShowChatWidget] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("success");
  const [activeTab, setActiveTab] = useState("faq");
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    priority: "normal",
    category: "general",
  });
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      sender: "system",
      message: "Welcome to TrustID Support! How can we help you today?",
      timestamp: new Date(),
    },
  ]);
  const [newChatMessage, setNewChatMessage] = useState("");
  const [ticketSubmitted, setTicketSubmitted] = useState(false);
  const [articleFeedback, setArticleFeedback] = useState({});

  // Sample FAQ data
  const faqs = [
    {
      id: 1,
      question: "How do I verify a new document?",
      answer:
        "To verify a new document, navigate to the Identity Records page and click on 'Upload New Document'. Follow the prompts to upload your document images. Once uploaded, the document will be submitted for verification automatically. You can check the status of your verification on the Recent Activity page.",
      category: "verification",
    },
    {
      id: 2,
      question: "What types of documents can I verify on this platform?",
      answer:
        "Our platform supports verification of various identity documents including passports, driver's licenses, national ID cards, birth certificates, social security cards, and more. Each document type has specific requirements for verification, which will be shown during the upload process.",
      category: "verification",
    },
    {
      id: 3,
      question: "How long does the verification process take?",
      answer:
        "The verification process typically takes 24-48 hours for most documents. Some documents may be verified instantly if they can be automatically validated. You'll receive a notification once the verification is complete, and you can always check the status on your Recent Activity page.",
      category: "verification",
    },
    {
      id: 4,
      question: "How do I share my verified credentials with a third party?",
      answer:
        "To share your verified credentials, go to the Identity Records page, find the document you want to share, and click the 'Share' button. You can specify who you want to share with and set an expiration time for the shared access. The recipient will receive a secure link to view your verified credentials.",
      category: "sharing",
    },
    {
      id: 5,
      question: "Is my data secure on this platform?",
      answer:
        "Yes, security is our top priority. All your data is encrypted both in transit and at rest. We use industry-standard security protocols and regular security audits to ensure your information remains protected. Your documents are only accessible to you and the verification authorities you explicitly grant access to.",
      category: "security",
    },
    {
      id: 6,
      question: "What should I do if my verification is rejected?",
      answer:
        "If your verification is rejected, you'll receive a notification with the reason for rejection. Common reasons include unclear images, expired documents, or missing information. Review the rejection reason, make the necessary corrections, and resubmit your document for verification from the Identity Records page.",
      category: "verification",
    },
    {
      id: 7,
      question: "How do I update my profile information?",
      answer:
        "To update your profile information, navigate to the Profile page and click on 'Edit Profile'. You can update your personal details, contact information, and preferences. Remember to click 'Save Changes' when you're done to apply your updates.",
      category: "account",
    },
    {
      id: 8,
      question: "Can I delete my account and all my data?",
      answer:
        "Yes, you can request account deletion from the Profile page under 'Advanced Settings'. Please note that this action is irreversible and will permanently delete all your documents, verification history, and account information. If you have any active shared credentials, they will also be revoked.",
      category: "account",
    },
    {
      id: 9,
      question: "What happens when my documents expire?",
      answer:
        "You'll receive notifications before your documents expire. Once a document expires, its status will change to 'Expired' in your Identity Records. You'll need to upload an updated version of the document and go through the verification process again to maintain a verified status.",
      category: "verification",
    },
    {
      id: 10,
      question: "How do I enable two-factor authentication?",
      answer:
        "To enable two-factor authentication, go to the Profile page and select 'Security Settings'. Click on 'Enable Two-Factor Authentication' and follow the instructions to set it up with your preferred method (authenticator app or SMS). This adds an extra layer of security to your account.",
      category: "security",
    },
  ];

  // Sample help articles
  const helpArticles = [
    {
      id: 1,
      title: "Getting Started with TrustID",
      description:
        "Learn the basics of using the TrustID platform for managing your digital identity.",
      category: "getting-started",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "Document Verification Guide",
      description:
        "A comprehensive guide to verifying different types of identity documents.",
      category: "verification",
      readTime: "8 min read",
    },
    {
      id: 3,
      title: "Securely Sharing Your Credentials",
      description:
        "Best practices for sharing your verified credentials with third parties.",
      category: "sharing",
      readTime: "6 min read",
    },
    {
      id: 4,
      title: "Understanding Verification Statuses",
      description:
        "Learn what different verification statuses mean and how to resolve issues.",
      category: "verification",
      readTime: "4 min read",
    },
    {
      id: 5,
      title: "Security Best Practices",
      description:
        "Tips to keep your digital identity secure and prevent unauthorized access.",
      category: "security",
      readTime: "7 min read",
    },
    {
      id: 6,
      title: "Troubleshooting Common Issues",
      description:
        "Solutions to frequently encountered problems on the platform.",
      category: "troubleshooting",
      readTime: "10 min read",
    },
  ];

  // System status data
  const systemStatus = [
    {
      service: "Document Verification",
      status: "operational",
      uptime: "99.9%",
    },
    { service: "Identity Sharing", status: "operational", uptime: "99.8%" },
    { service: "User Authentication", status: "operational", uptime: "100%" },
    {
      service: "Notification Service",
      status: "degraded",
      uptime: "95.2%",
      message: "Experiencing delays in email delivery",
    },
    { service: "API Services", status: "operational", uptime: "99.7%" },
  ];

  // Filter FAQs based on search query
  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Filter help articles based on search query
  const filteredArticles = helpArticles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleFaqExpansion = (id: number) => {
    if (expandedFaq === id) {
      setExpandedFaq(null);
    } else {
      setExpandedFaq(id);
    }
  };

  const handleContactFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real app, you would send the form data to your backend
    console.log("Contact form submitted:", contactForm);
    setTicketSubmitted(true);
    showToastMessage("Support ticket submitted successfully", "success");
  };

  const resetContactForm = () => {
    setContactForm({
      name: "",
      email: "",
      subject: "",
      message: "",
      priority: "normal",
      category: "general",
    });
    setTicketSubmitted(false);
  };

  const handleSendChatMessage = () => {
    if (!newChatMessage.trim()) return;

    // Add user message
    const userMessage = {
      id: chatMessages.length + 1,
      sender: "user",
      message: newChatMessage,
      timestamp: new Date(),
    };

    setChatMessages([...chatMessages, userMessage]);
    setNewChatMessage("");

    // Simulate automated response after a short delay
    setTimeout(() => {
      const botMessage = {
        id: chatMessages.length + 2,
        sender: "system",
        message:
          "Thanks for your message. A support agent will respond shortly. In the meantime, you might find an answer in our FAQ section.",
        timestamp: new Date(),
      };
      setChatMessages((prev) => [...prev, botMessage]);
    }, 1000);
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

  const handleArticleFeedback = (articleId: number, isHelpful: boolean) => {
    setArticleFeedback({
      ...articleFeedback,
      [articleId]: isHelpful,
    });
    showToastMessage(`Thank you for your feedback!`, "success");
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

  const chatWidgetVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
      },
    },
    exit: {
      opacity: 0,
      y: 20,
      scale: 0.9,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <div className="min-h-screen bg-[#1a1e2e] text-white p-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="bg-[#252a3d] p-2 rounded-lg">
              <HelpCircle className="text-[#5e5ce6]" size={24} />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Support Center</h1>
              <p className="text-gray-400">
                Find answers and get help with your identity management
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowContactForm(true)}
              className="bg-[#5e5ce6] hover:bg-[#4b48bf] text-white px-4 py-2 rounded-md text-sm flex items-center gap-1.5"
            >
              <Mail size={16} />
              <span>Contact Support</span>
            </motion.button>
          </div>
        </div>

        {/* Search */}
        <div className="bg-[#252a3d] rounded-lg p-4 mb-6">
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search for help, articles, FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#1a1e2e] text-white rounded-md py-3 pl-10 pr-4 focus:outline-none focus:ring-1 focus:ring-[#5e5ce6]"
            />
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-[#3a4055] mb-6">
          <motion.button
            className={`px-4 py-2 font-medium text-sm ${
              activeTab === "faq"
                ? "text-[#5e5ce6] border-b-2 border-[#5e5ce6]"
                : "text-gray-400 hover:text-gray-300"
            }`}
            onClick={() => setActiveTab("faq")}
          >
            Frequently Asked Questions
          </motion.button>
          <button
            className={`px-4 py-2 font-medium text-sm ${
              activeTab === "articles"
                ? "text-[#5e5ce6] border-b-2 border-[#5e5ce6]"
                : "text-gray-400 hover:text-gray-300"
            }`}
            onClick={() => setActiveTab("articles")}
          >
            Help Articles
          </button>
          <button
            className={`px-4 py-2 font-medium text-sm ${
              activeTab === "status"
                ? "text-[#5e5ce6] border-b-2 border-[#5e5ce6]"
                : "text-gray-400 hover:text-gray-300"
            }`}
            onClick={() => setActiveTab("status")}
          >
            System Status
          </button>
        </div>

        {/* FAQ Section */}
        {activeTab === "faq" && (
          <>
            {filteredFaqs.length > 0 ? (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-4"
              >
                {filteredFaqs.map((faq) => (
                  <motion.div
                    key={faq.id}
                    variants={itemVariants}
                    className="bg-[#252a3d] rounded-lg overflow-hidden"
                  >
                    <div
                      className="p-4 flex items-center justify-between cursor-pointer"
                      onClick={() => toggleFaqExpansion(faq.id)}
                    >
                      <div className="flex items-center gap-3">
                        <HelpCircle
                          size={20}
                          className="text-[#5e5ce6] shrink-0"
                        />
                        <h3 className="font-medium">{faq.question}</h3>
                      </div>
                      <ChevronDown
                        size={20}
                        className={`text-gray-400 transition-transform ${
                          expandedFaq === faq.id ? "rotate-180" : ""
                        }`}
                      />
                    </div>

                    <AnimatePresence>
                      {expandedFaq === faq.id && (
                        <motion.div
                          variants={expandVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className="border-t border-[#3a4055]"
                        >
                          <div className="p-4 bg-[#1f2436]">
                            <p className="text-gray-300">{faq.answer}</p>
                            <div className="mt-4 flex justify-between items-center">
                              <span className="text-xs text-gray-400">
                                Category:{" "}
                                {faq.category.charAt(0).toUpperCase() +
                                  faq.category.slice(1)}
                              </span>
                              <div className="flex gap-2">
                                <motion.button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleArticleFeedback(faq.id, true);
                                  }}
                                  className="text-gray-400 hover:text-green-400 p-1"
                                >
                                  <ThumbsUp size={16} />
                                </motion.button>
                                <motion.button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleArticleFeedback(faq.id, false);
                                  }}
                                  className="text-gray-400 hover:text-red-400 p-1"
                                >
                                  <ThumbsDown size={16} />
                                </motion.button>
                              </div>
                            </div>
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
                  <HelpCircle className="text-gray-400" size={48} />
                </div>
                <h3 className="text-xl font-medium mb-2">No FAQs found</h3>
                <p className="text-gray-400 mb-6">
                  {searchQuery
                    ? "Try adjusting your search query"
                    : "No frequently asked questions available"}
                </p>
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="bg-[#3a4055] hover:bg-[#4a5065] text-white px-4 py-2 rounded-md inline-flex items-center gap-2"
                  >
                    <RefreshCw size={16} />
                    <span>Clear Search</span>
                  </button>
                )}
              </div>
            )}
          </>
        )}

        {/* Help Articles Section */}
        {activeTab === "articles" && (
          <>
            {filteredArticles.length > 0 ? (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                {filteredArticles.map((article) => (
                  <motion.div
                    key={article.id}
                    variants={itemVariants}
                    className="bg-[#252a3d] rounded-lg p-4 hover:bg-[#2a304a] transition-colors cursor-pointer"
                    onClick={() =>
                      showToastMessage(
                        "Article viewing is not implemented in this demo",
                        "info"
                      )
                    }
                  >
                    <div className="flex items-start gap-3">
                      <FileText
                        size={20}
                        className="text-[#5e5ce6] shrink-0 mt-1"
                      />
                      <div>
                        <h3 className="font-medium mb-1">{article.title}</h3>
                        <p className="text-sm text-gray-400 mb-3">
                          {article.description}
                        </p>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <span className="text-xs px-2 py-0.5 bg-[#3a4055] rounded-full text-gray-300">
                              {article.category}
                            </span>
                            <span className="text-xs text-gray-400">
                              {article.readTime}
                            </span>
                          </div>
                          <ExternalLink size={14} className="text-gray-400" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <div className="bg-[#252a3d] rounded-lg p-8 text-center">
                <div className="flex justify-center mb-4">
                  <FileText className="text-gray-400" size={48} />
                </div>
                <h3 className="text-xl font-medium mb-2">No articles found</h3>
                <p className="text-gray-400 mb-6">
                  {searchQuery
                    ? "Try adjusting your search query"
                    : "No help articles available"}
                </p>
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="bg-[#3a4055] hover:bg-[#4a5065] text-white px-4 py-2 rounded-md inline-flex items-center gap-2"
                  >
                    <RefreshCw size={16} />
                    <span>Clear Search</span>
                  </button>
                )}
              </div>
            )}
          </>
        )}

        {/* System Status Section */}
        {activeTab === "status" && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="bg-[#252a3d] rounded-lg overflow-hidden"
          >
            <div className="p-4 border-b border-[#3a4055]">
              <h2 className="font-medium">System Status</h2>
            </div>
            <div className="divide-y divide-[#3a4055]">
              {systemStatus.map((service, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="p-4 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    {service.status === "operational" ? (
                      <CheckCircle size={18} className="text-green-500" />
                    ) : service.status === "degraded" ? (
                      <AlertTriangle size={18} className="text-yellow-500" />
                    ) : (
                      <X size={18} className="text-red-500" />
                    )}
                    <div>
                      <h3 className="font-medium">{service.service}</h3>
                      {service.message && (
                        <p className="text-sm text-yellow-400">
                          {service.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span
                      className={`text-sm ${
                        service.status === "operational"
                          ? "text-green-400"
                          : service.status === "degraded"
                          ? "text-yellow-400"
                          : "text-red-400"
                      }`}
                    >
                      {service.status.charAt(0).toUpperCase() +
                        service.status.slice(1)}
                    </span>
                    <span className="text-xs text-gray-400">
                      Uptime: {service.uptime}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="p-4 bg-[#1f2436] text-center text-sm text-gray-400">
              Last updated: {new Date().toLocaleString()}
            </div>
          </motion.div>
        )}

        {/* Contact Methods */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="bg-[#252a3d] rounded-lg p-4 flex flex-col items-center text-center"
          >
            <div className="bg-[#1a1e2e] p-3 rounded-full mb-3">
              <Mail size={24} className="text-[#5e5ce6]" />
            </div>
            <h3 className="font-medium mb-1">Email Support</h3>
            <p className="text-sm text-gray-400 mb-3">
              Get help via email within 24 hours
            </p>
            <button
              onClick={() => setShowContactForm(true)}
              className="text-[#5e5ce6] text-sm hover:underline"
            >
              Send an email
            </button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
            className="bg-[#252a3d] rounded-lg p-4 flex flex-col items-center text-center"
          >
            <div className="bg-[#1a1e2e] p-3 rounded-full mb-3">
              <MessageCircle size={24} className="text-[#5e5ce6]" />
            </div>
            <h3 className="font-medium mb-1">Live Chat</h3>
            <p className="text-sm text-gray-400 mb-3">
              Chat with our support team in real-time
            </p>
            <button
              onClick={() => setShowChatWidget(true)}
              className="text-[#5e5ce6] text-sm hover:underline"
            >
              Start a chat
            </button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="bg-[#252a3d] rounded-lg p-4 flex flex-col items-center text-center"
          >
            <div className="bg-[#1a1e2e] p-3 rounded-full mb-3">
              <Phone size={24} className="text-[#5e5ce6]" />
            </div>
            <h3 className="font-medium mb-1">Phone Support</h3>
            <p className="text-sm text-gray-400 mb-3">
              Available Mon-Fri, 9am-5pm EST
            </p>
            <a
              href="tel:+18005551234"
              className="text-[#5e5ce6] text-sm hover:underline"
            >
              +1 (800) 555-1234
            </a>
          </motion.div>
        </div>
      </div>

      {/* Contact Form Modal */}
      <AnimatePresence>
        {showContactForm && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => !ticketSubmitted && setShowContactForm(false)}
          >
            <motion.div
              className="bg-[#252a3d] rounded-lg w-full max-w-md overflow-hidden"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              {!ticketSubmitted ? (
                <>
                  <div className="p-4 border-b border-[#3a4055] flex justify-between items-center">
                    <h2 className="font-medium text-lg">Contact Support</h2>
                    <motion.button
                      onClick={() => setShowContactForm(false)}
                      className="text-gray-400 hover:text-white"
                    >
                      <X size={20} />
                    </motion.button>
                  </div>
                  <form onSubmit={handleContactFormSubmit} className="p-4">
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">
                          Name
                        </label>
                        <motion.input
                          type="text"
                          value={contactForm.name}
                          onChange={(e) =>
                            setContactForm({
                              ...contactForm,
                              name: e.target.value,
                            })
                          }
                          className="w-full bg-[#1a1e2e] text-white rounded-md p-2 border border-[#3a4055] focus:outline-none focus:ring-1 focus:ring-[#5e5ce6]"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">
                          Email
                        </label>
                        <motion.input
                          type="email"
                          value={contactForm.email}
                          onChange={(e) =>
                            setContactForm({
                              ...contactForm,
                              email: e.target.value,
                            })
                          }
                          className="w-full bg-[#1a1e2e] text-white rounded-md p-2 border border-[#3a4055] focus:outline-none focus:ring-1 focus:ring-[#5e5ce6]"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">
                          Subject
                        </label>
                        <motion.input
                          type="text"
                          value={contactForm.subject}
                          onChange={(e) =>
                            setContactForm({
                              ...contactForm,
                              subject: e.target.value,
                            })
                          }
                          className="w-full bg-[#1a1e2e] text-white rounded-md p-2 border border-[#3a4055] focus:outline-none focus:ring-1 focus:ring-[#5e5ce6]"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">
                          Category
                        </label>
                        <motion.select
                          value={contactForm.category}
                          onChange={(e) =>
                            setContactForm({
                              ...contactForm,
                              category: e.target.value,
                            })
                          }
                          className="w-full bg-[#1a1e2e] text-white rounded-md p-2 border border-[#3a4055] focus:outline-none focus:ring-1 focus:ring-[#5e5ce6]"
                        >
                          <option value="general">General Inquiry</option>
                          <option value="technical">Technical Issue</option>
                          <option value="verification">
                            Verification Problem
                          </option>
                          <option value="account">Account Management</option>
                          <option value="billing">Billing Question</option>
                          <option value="feedback">Feedback</option>
                        </motion.select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">
                          Priority
                        </label>
                        <motion.select
                          value={contactForm.priority}
                          onChange={(e) =>
                            setContactForm({
                              ...contactForm,
                              priority: e.target.value,
                            })
                          }
                          className="w-full bg-[#1a1e2e] text-white rounded-md p-2 border border-[#3a4055] focus:outline-none focus:ring-1 focus:ring-[#5e5ce6]"
                        >
                          <option value="low">Low</option>
                          <option value="normal">Normal</option>
                          <option value="high">High</option>
                          <option value="urgent">Urgent</option>
                        </motion.select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">
                          Message
                        </label>
                        <motion.textarea
                          value={contactForm.message}
                          onChange={(e) =>
                            setContactForm({
                              ...contactForm,
                              message: e.target.value,
                            })
                          }
                          className="w-full bg-[#1a1e2e] text-white rounded-md p-2 border border-[#3a4055] focus:outline-none focus:ring-1 focus:ring-[#5e5ce6] min-h-[120px]"
                          required
                        />
                      </div>

                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <motion.button
                          type="button"
                          className="text-[#5e5ce6] hover:text-[#4b48bf]"
                        >
                          <Paperclip size={16} />
                        </motion.button>
                        <span>Attach files (optional)</span>
                      </div>
                    </div>

                    <div className="mt-6 flex justify-end gap-3">
                      <button
                        type="button"
                        onClick={() => setShowContactForm(false)}
                        className="bg-[#3a4055] hover:bg-[#4a5065] text-white px-4 py-2 rounded-md"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="bg-[#5e5ce6] hover:bg-[#4b48bf] text-white px-4 py-2 rounded-md flex items-center gap-2"
                      >
                        <Send size={16} />
                        <span>Submit Ticket</span>
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                <div className="p-6 text-center">
                  <div className="bg-[#1a1e2e] p-3 rounded-full inline-flex mb-4">
                    <CheckCircle size={32} className="text-green-500" />
                  </div>
                  <h2 className="text-xl font-medium mb-2">Ticket Submitted</h2>
                  <p className="text-gray-300 mb-6">
                    Thank you for contacting us. Your support ticket has been
                    submitted successfully. We'll get back to you as soon as
                    possible.
                  </p>
                  <div className="bg-[#1f2436] rounded-lg p-4 mb-6 text-left">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-400">Ticket ID:</span>
                      <span className="text-white font-mono">
                        #TID-
                        {Math.floor(Math.random() * 10000)
                          .toString()
                          .padStart(4, "0")}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Expected Response:</span>
                      <span className="text-white">Within 24 hours</span>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setShowContactForm(false);
                      resetContactForm();
                    }}
                    className="bg-[#5e5ce6] hover:bg-[#4b48bf] text-white px-4 py-2 rounded-md"
                  >
                    Close
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Widget */}
      <AnimatePresence>
        {showChatWidget ? (
          <motion.div
            className="fixed bottom-4 right-4 w-80 bg-[#252a3d] rounded-lg shadow-lg overflow-hidden z-40"
            variants={chatWidgetVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="p-3 bg-[#1f2436] flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <MessageCircle size={20} className="text-[#5e5ce6]" />
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full"></span>
                </div>
                <h3 className="font-medium text-sm">Support Chat</h3>
              </div>
              <motion.button
                onClick={() => setShowChatWidget(false)}
                className="text-gray-400 hover:text-white"
              >
                <X size={16} />
              </motion.button>
            </div>

            <div className="h-80 overflow-y-auto p-3 bg-[#1a1e2e]">
              {chatMessages.map((msg) => (
                <div
                  key={msg.id}
                  className={`mb-3 max-w-[85%] ${
                    msg.sender === "user" ? "ml-auto" : ""
                  }`}
                >
                  <div
                    className={`rounded-lg p-2 ${
                      msg.sender === "user"
                        ? "bg-[#5e5ce6] text-white"
                        : "bg-[#252a3d] text-gray-200"
                    }`}
                  >
                    {msg.message}
                  </div>
                  <div
                    className={`text-xs text-gray-500 mt-1 ${
                      msg.sender === "user" ? "text-right" : ""
                    }`}
                  >
                    {msg.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-3 border-t border-[#3a4055]">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newChatMessage}
                  onChange={(e) => setNewChatMessage(e.target.value)}
                  onKeyPress={(e) =>
                    e.key === "Enter" && handleSendChatMessage()
                  }
                  placeholder="Type your message..."
                  className="flex-1 bg-[#1a1e2e] text-white rounded-md p-2 border border-[#3a4055] focus:outline-none focus:ring-1 focus:ring-[#5e5ce6]"
                />
                <motion.button
                  onClick={handleSendChatMessage}
                  className="bg-[#5e5ce6] hover:bg-[#4b48bf] text-white p-2 rounded-md"
                >
                  <Send size={16} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.button
            className="fixed bottom-4 right-4 bg-[#5e5ce6] hover:bg-[#4b48bf] text-white p-3 rounded-full shadow-lg z-40"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setShowChatWidget(true)}
          >
            <MessageCircle size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            className={`fixed bottom-4 left-4 ${
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
