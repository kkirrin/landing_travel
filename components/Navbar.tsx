import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { NAV_LINKS } from '@/constans'
import Button from './Button'

const Navbar = () => {
  return (
    <nav className=' flexBetween max-container padding-container relative z-30 py-5'>
      <Link href='/'>
        <Image src='/hilink-logo.svg' alt='logo' width={74} height={29} />
      </Link>

      <ul className='hidden h-full gap-12 lg:flex'>
          {NAV_LINKS.map((link) => (
            <Link className='flexCenter cursor-pointer pb-1.5 trasition-all hover:font-bold  regular-16 text-gray-50' href={link.href} key={link.key}>
              {link.label}
            </Link>
          ))}
        </ul>

        <div className='lg:flexCenter hidden '>
            <Button 
              type='submit'
              title='Login' 
              icon='/user.svg' variant='btn_dark_green'
            />
        </div>

        <Image
          src="menu.svg"
          alt='menu'
          width={32}
          height={32}
          className='inline-block cursor-pointer lg:hidden'
        />

    </nav>
  )
}

export default Navbar