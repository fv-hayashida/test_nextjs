// import {
// 	UserGroupIcon,
// 	HomeIcon,
// 	DocumentDuplicateIcon,
// } from '@heroicons/react/24/outline';
'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  {
    id: 1,
    name: '武器',
    href: '/dashboard/weapon',
  },
  {
    id: 2,
    name: 'お問い合わせ',
    href: '/dashboard/contact',
  },
]

export default function NavLinks() {
  const pathName = usePathname()
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.id}
            className={clsx('text-blue-500', {
              'bg-sky-100 text-blue-600': pathName === link.href,
            })}
            href={link.href}
          >
            {link.name}
          </Link>
        )
      })}
    </>
  )
}
