"use client"
import {motion} from "framer-motion"
import Image from 'next/image'
import Link from 'next/link'

const NewsCard = ({news}) => {
  return (
    <motion.div 
    className="w-fit h-fit mt-10"
    initial={{opacity: 0, y: 100}}
    whileInView={{opacity: 1, y: 0}}
    viewport={{ once: true}}
    transition={{ ease: [.08,.89,.92,1.02], duration: 1 }}
    >
    <Link href={`${news.slug}`} className='group grid grid-cols-3 gap-x-8 p-5 border-b-2 border-[#535353] hover:border-textGray cursor-pointer duration-300'>
        <Image
            className='group-hover:rounded-2xl duration-700'
            src={news.img}
            alt='news'
            width={400}
            height={267}
        />
        <div>
            <p className="text-2xl text-left text-mulish text-main font-bold">{news.title}</p>
        </div>
        <div>
            <p className="text-base text-sans text-textGray font-normal">{news.description}</p>
            <div></div>
        </div>
    </Link>
    </motion.div>
  )
}

export default NewsCard