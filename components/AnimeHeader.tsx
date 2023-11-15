"use client"
import {motion} from "framer-motion"

const AnimeHeader = ({header}: {header: string}) => {
  return (
    <div className="overflow-hidden pb-2 container">
        <motion.div
    className="h1 text-left text-mulish text-main font-bold"
    initial={{ opacity: 0, translateY: "100%" }}
    animate={{ opacity: 1, translateY: 0  }}
    transition={{ duration: 1 }}
  >
    {header}
  </motion.div>
  </div>
  )
}

export default AnimeHeader