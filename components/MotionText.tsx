"use client"
import { motion} from "framer-motion"

const MotionText = ({text}: {text: string}) => {
  return (
    <motion.div 
              className="container text-3xl font-bold text-mulish text-main" 
              initial={{opacity: 0}} 
              whileInView={{opacity: 1}}
              transition={{ duration: 2 }}
              viewport={{ once: true, amount: 0.3 }}
              >
                {text}
      </motion.div>
  )
}

export default MotionText
