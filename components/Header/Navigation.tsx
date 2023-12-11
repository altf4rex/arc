'use client'
 
import { usePathname } from 'next/navigation'
import {pages} from '@/constants'
import Link from 'next/link'

 const Navigation = () => {
    const pathname = usePathname()
  return (
    <div className='flex max-lg:flex-col max-lg:py-12'>
        {
            pages.map((h) => 
                <Link key={h.page} href={`${h.pageSlug}`} className={`link ${pathname === h.pageSlug ? 'text-primary' : 'text-main'} mr-12 text-mulish text-main text-sm font-normal font-semibold hover:text-primaryHover max-lg:mb-6`}>{h.page}</Link>
            )
        }
    </div>
  )
}

export default Navigation