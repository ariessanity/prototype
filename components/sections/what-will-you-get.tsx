import { Chip } from '@heroui/chip'
import React from 'react'
import { BlueCheckIcon } from '../icons'
import { ScrollShadow } from '@heroui/scroll-shadow'
import { Card, CardBody } from '@heroui/card'

const cards = [
  {
    description: "Authenticated intelligence certification validated by cognitive science experts"
  },
  {
    description: "Deep-dive analysis revealing your complete cognitive potential and capabilities"
  },
  {
    description: "Scientifically-calibrated training tools designed by neuroscience specialists"
  },
  {
    description: "Authenticated intelligence certification validated by cognitive science experts"
  },
  {
    description: "Expert-crafted educational content based on leading cognitive research"
  },
  {
    description: "Advanced reasoning exercises designed by neural specialists"
  },
]

export default function WhatWillYouGetSection() {
  return (
    <div className='relative z-0 flex flex-col items-center gap-2 py-6 md:py-10 space-y-4'>
      <Chip color="primary" variant="bordered" className='border-medium px-1 h-7 text-small border-blue-600 text-blue-600'>
        BENEFITS
      </Chip>
      <h3 className='text-center text-[28px] font-semibold md:text-[39px]'>What Will You Get</h3>
      <ScrollShadow hideScrollBar={true} orientation={'horizontal'} className='overflow-x-auto scrollbar-hide pt-5 max-lg:w-[calc(100vw-48px)]'>
        <div className='flex gap-6'>
          {cards.map((card, index) => {
            return (
              <Card key={index} className='max-w-[236px] shrink-0 rounded-lg border border-[#D9E7FF] max-lg:w-[236px] shadow-none'>
                <CardBody className='h-auto break-words text-left overflow-y-auto !flex-row items-start gap-4 p-4 antialiased md:py-6'>
                  <div className='p-1'>
                    <BlueCheckIcon />
                  </div>
                  <p className='max-w-[80%] text-sm text-[#2C3345]'>
                    {card.description}
                  </p>
                </CardBody>
              </Card>
            )
          })}
        </div>
      </ScrollShadow>
      <div className="absolute -left-1/2 top-0 z-[-1] w-[150vw] h-full bg-mint-default"></div>
    </div>
  )
}

