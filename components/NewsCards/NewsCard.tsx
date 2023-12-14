"use client"
import {motion} from "framer-motion"
import Image from 'next/image'
import Link from 'next/link'

const NewsCard = ({news}) => {
  return (
    <motion.div 
    className="w-fit h-fit mt-10 max-lg:mt-14 max-lg:mx-auto"
    initial={{opacity: 0, y: 100}}
    whileInView={{opacity: 1, y: 0}}
    viewport={{ once: true}}
    transition={{ ease: [.08,.89,.92,1.02], duration: 1 }}
    >
    <Link href={`${news.slug}`} className='group grid grid-cols-3 gap-x-8 p-5 border-b-2 border-[#535353] hover:border-textGray cursor-pointer duration-300 max-xl:flex max-lg:flex-col max-lg:max-w-[400px]'>
        <Image
            className='group-hover:rounded-2xl duration-700 '
            src={news.img}
            alt='news'
            width={400}
            height={267}
        />
        <div className="max-xl:min-w-[260px] max-lg:mt-8">
            <p className="text-2xl text-left text-mulish text-main font-bold">{news.title}</p>
        </div>
        <div className="max-xl:min-w-[240px] max-lg:mt-4">
            <p className="text-base text-sans text-textGray font-normal">{news.description}</p>
        </div>
    </Link>
    </motion.div>
  )
}

export default NewsCard