import { Button } from '@heroui/button'
import Image from 'next/image'
import React from 'react'
import { ArrowIcon, StarIcon } from '../icons'
import { Avatar, AvatarGroup } from '@heroui/avatar'

export default function HeroSection() {
  return (
    <div className='relative z-0 flex h-full w-full flex-col pt-14 lg:pt-[84px]'>
      <div className='flex h-full w-full flex-col-reverse items-center gap-5 md:flex-row md:justify-between'>
        <div className='flex w-full flex-col gap-3 md:gap-4'>
          <h1 className='text-[32px] font-extrabold leading-[35px] md:text-[48px] md:leading-[57px]'>
            <span className='inline-block bg-gradient-to-r from-[#2C3345] to-[#424D6A] bg-clip-text text-transparent'>
              Want to Know Your
            </span>
            <br className="max-md:hidden" />
            <span className="inline-block bg-gradient-to-r from-[#27415F] via-[#007AFF] to-[#007AFF] bg-clip-text text-transparent">Real IQ Score?</span>
          </h1>
          <p className="text-base leading-[25px] text-[#2B2D42] lg:max-w-[325px] lg:text-[18px]">Take our IQ test and unlock your path to self-discovery and development</p>
          <div className='mt-2 flex gap-3 max-sm:flex-wrap md:mt-4 md:gap-6'>
            <Button className="gap-3 bg-[#0d766e] text-lg text-white [&_svg]:flex-shrink-0 h-12 rounded-xl px-6 max-lg:w-full sm:max-w-[306px] md:px-8 lg:gap-6 [&_svg]:h-3.5 [&_svg]:w-3.5 max-md:[&_svg]:hidden" variant="solid" endContent={<ArrowIcon />}>
              Start IQ Test Now
            </Button>
            <Button className="h-12 gap-3 border-primary-default !px-6 text-medium text-primary-default hover:bg-primary-default hover:text-white max-lg:w-full" variant="bordered">
              How It Works
            </Button>
          </div>
          <div className='mt-[11px] flex md:mt-4'>
            <AvatarGroup isBordered className='pr-12 flex items-center justify-center h-auto w-max'>
              <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" className='ms-0' />
              <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" className='-ms-2' />
              <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" className='-ms-2' />
              <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" className='-ms-2' />
            </AvatarGroup>
            <div className='-ml-4 flex flex-col text-sm text-[#2B2D42] md:-ml-8 md:text-base md:leading-6'>
              <p>Excellent user reviews</p>
              <div className='relative space-x-1 flex text-gray-300'>
                <StarIcon className='text-[#f7b635]' />
                <StarIcon className='text-[#f7b635]' />
                <StarIcon className='text-[#f7b635]' />
                <StarIcon className='text-[#f7b635]' />
                <StarIcon />
              </div>
              <p><span className="font-semibold">9260</span>IQ tests taken today!</p>
            </div>
          </div>
        </div>
        <div className='relative flex h-full w-full scale-[1.2] items-center justify-center max-lg:mt-[-28px] md:max-w-[55%]'>
          <Image alt='graph' src={'/main-graph.png'} width={500} height={292} />
        </div>
      </div >
      <div className="absolute -left-1/2 top-0 z-[-1] h-full bg-gradient-to-b from-white via-[#EBF4FF] to-white"></div>
    </div >
  )
}

