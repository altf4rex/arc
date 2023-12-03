"use client"
import {motion} from "framer-motion"

const MotionHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="overflow-hidden pb-2 container">
        <motion.div
    className="text-white"
    initial={{ opacity: 0, translateY: "100%" }}
    animate={{ opacity: 1, translateY: 0  }}
    transition={{ duration: 1 }}
  >
    { children }
  </motion.div>
  </div>
  )
}

export default MotionHeader