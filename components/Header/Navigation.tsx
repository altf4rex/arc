'use client'
 
import { usePathname } from 'next/navigation'
import {pages} from '@/constants'
import Link from 'next/link'

 const Navigation = () => {
    const pathname = usePathname()
  return (
    <div className='flex'>
        {
            pages.map((h) => 
                <Link key={h.page} href={`${h.pageSlug}`} className={`link ${pathname === h.pageSlug ? 'text-primary' : 'text-main'} mr-12 font-mulish text-main text-sm font-normal hover:text-primaryHover`}>{h.page}</Link>
            )
        }
    </div>
  )
}

export default Navigation