import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Home, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { PiRecordFill } from "react-icons/pi";
import { IoIosNotifications } from "react-icons/io";
import { TbActivity } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";

const DashboardSidebar: React.FC = () => {
  // interface RootState {
  //   vendor: {
  //     token: string;
  //     _id: string;
  //     vendor: {
  //       id: string;
  //     };
  //   };
  // }

  return (
    <aside
      className={`w-64 p-5 h-screen flex flex-col justify-between overflow-y-auto transition-colors bg-[#171D28] text-white
      }`}
    >
      <div>
        <div className="mb-5 text-2xl font-bold text-white">
          <Link to="/">
            {/* <img src={Logo} alt="MbaayLogo" className=" w-14" /> */}
            <p>TrustID</p>
          </Link>
        </div>
        <nav>
          <NavItem title="Dashboard" to="/home" Icon={Home} />
          <NavItem title="Profile" to="profile" Icon={CgProfile} />
          <NavItem
            title="Identity Records"
            to="identity-record"
            Icon={PiRecordFill}
          />
          <NavItem
            title="Notifications"
            to="notification"
            Icon={IoIosNotifications}
          />
          <NavItem
            title="Recent Activity"
            to="recent-activity"
            Icon={TbActivity}
          />
          <NavItem title="Support" to="support" Icon={BiSupport} />
          {/* <NavItem title="LogOut" onClick={handle_logOut} Icon={LogOutIcon} /> */}
        </nav>
      </div>
      <div className="flex items-center gap-3 p-3  rounded-lg bg-[#171D28]">
        {/* <img
          src="/vendor-avatar.png"
          alt="Vendor"
          className="w-12 h-12 rounded-full"
        /> */}
        {/* <div className="bg-orange-500 w-[40px] h-[40px] rounded-full text-white flex items-center justify-center">
          <p>TrustID</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-orange-500">TrustID</p>
          <div className="flex items-center justify-center mt-2">
            <div className="w-[12px] h-[12px] bg-green-500 rounded-full "></div>
            <span className="text-green-500 text-xs rounded ml-[3px]">
              Online
            </span>
          </div>
        </div> */}
      </div>
    </aside>
  );
};

const NavItem = ({
  title,
  to,
  subItems,
  Icon,
  onClick,
}: {
  title: string;
  to?: string;
  onClick?: () => void;
  subItems?: string[];
  Icon?: React.ComponentType<{ className?: string }>;
}) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (subItems) {
      setOpen(!open);
    }
  };

  return (
    <div>
      <div
        className={`p-2 flex items-center justify-between gap-3 cursor-pointer hover:bg-gray-400 rounded ${
          open ? "bg-orange-400 text-white" : ""
        }`}
        onClick={handleClick}
      >
        <div className="flex items-center gap-3">
          {Icon && <Icon className="w-5 h-5" />}
          {to && !subItems ? (
            <NavLink
              to={to}
              className={({ isActive }) =>
                isActive
                  ? "font-semibold text-white"
                  : "text-gray-700 dark:text-gray-300"
              }
            >
              {title}
            </NavLink>
          ) : (
            <span>{title}</span>
          )}
        </div>
        {subItems && (
          <ChevronDown className={`w-5 h-5 ${open && "rotate-180"}`} />
        )}
      </div>
      {subItems && (
        <motion.div
          className="pl-8 overflow-hidden"
          initial={false}
          animate={{ height: open ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
        >
          {subItems.map((item) => (
            <NavLink
              key={item}
              to={item.toLowerCase().replace(/ /g, "-")}
              className={({ isActive }) =>
                `block py-1 ${
                  isActive
                    ? "text-orange-500 font-semibold"
                    : "hover:text-gray-600 dark:hover:text-gray-300"
                }`
              }
            >
              {item}
            </NavLink>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default DashboardSidebar;
