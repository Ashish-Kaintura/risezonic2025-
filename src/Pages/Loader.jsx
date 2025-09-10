import { motion as Motion } from "framer-motion";
import BlackLogo from "../assets/images/Logo/risezonic logo (1).png";
export default function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-[9999]">
      {/* Animated text logo */}
      <Motion.img
        src={BlackLogo}
        alt="Risezonic Logo"
        className="w-28 md:w-40"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
    </div>
  );
}
