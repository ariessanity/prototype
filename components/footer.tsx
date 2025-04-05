import React from 'react'
import { LogoLight } from './icons'
import { Link } from '@heroui/link'

export default function Footer() {
  return (
    <footer className="w-full mt-auto">
      <div className='w-full mt-10 md:mt-16 bg-[#001B36] py-6 lg:py-12'>
        <div className="mx-auto flex w-full max-w-7xl flex-col max-[1320px]:px-6 max-md:px-4">
          <div className='flex flex-col justify-between md:flex-row md:gap-5'>
            <div className='flex flex-col justify-start gap-6'>
              <Link className='w-fit [&_svg]:h-[31px] [&_svg]:w-[108px]'>
                <LogoLight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

