"use client"
import {motion} from "framer-motion"

const MotionHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="overflow-hidden container">
        <motion.div
    className="text-white pb-2 "
    initial={{ opacity: 0, translateY: "100%" }}
    whileInView={{ opacity: 1, translateY: 0  }}
    transition={{ duration: 1 }}
    viewport={{ once: true}}
  >
    { children }
  </motion.div>
  </div>
  )
}

export default MotionHeader