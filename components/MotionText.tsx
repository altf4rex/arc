"use client"
import {easeOut, motion} from "framer-motion"

const MotionText = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container">
        <motion.div
            className="text-white"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ease: easeOut, duration: 1.2 }}
            
        >
            { children }
        </motion.div>
  </div>
  )
}

export default MotionText
