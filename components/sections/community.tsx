import { Button } from '@heroui/button'
import React from 'react'
import { DiscordIcon, GithubIcon, TwitterIcon } from '../icons'

export default function CommunitySection() {
  return (
    <div className='md relative z-0 flex flex-col items-center justify-between gap-3 py-4 w-full md:flex-row md:py-9'>
      <div className='flex flex-col items-center justify-center gap-1 md:items-start lg:items-start'>
        <div className='flex flex-row items-start gap-1'>
          <h3 className="text-[28px] font-semibold leading-[45px] text-secondary-foreground md:text-[39px]">Community</h3>
        </div>
        <p className="hidden text-[17px] text-[#454F69] break-words lg:inline-block">Follow us on social media for daily quizzes, challenges and brain teasers to keep your mind sharp</p>
        <p className="text-sm lg:hidden">Follow us on social media</p>
      </div>
      <div className='w-full xs-l:w-fit'>
        <div className='flex w-full justify-end gap-3'>
          <Button as='a' href='#' className='text-lg [&_svg]:flex-shrink-0 flex h-12 w-full gap-4 rounded-xl border-1 border-[#007AFF] bg-white !px-5 text-[#2C3345] max-md:min-w-max xs-l:!px-6 md:w-[76px] [&_svg]:h-6 [&_svg]:w-6'>
            <TwitterIcon />
          </Button>
          <Button as='a' href='#' className='text-lg [&_svg]:flex-shrink-0 flex h-12 w-full gap-4 rounded-xl border-1 border-[#007AFF] bg-white !px-5 text-[#2C3345] max-md:min-w-max xs-l:!px-6 md:w-[76px] [&_svg]:h-6 [&_svg]:w-6'>
            <DiscordIcon />
          </Button>
          <Button as='a' href='#' className='text-lg [&_svg]:flex-shrink-0 flex h-12 w-full gap-4 rounded-xl border-1 border-[#007AFF] bg-white !px-5 text-[#2C3345] max-md:min-w-max xs-l:!px-6 md:w-[76px] [&_svg]:h-6 [&_svg]:w-6'>
            <GithubIcon />
          </Button>
        </div>
      </div>
      <div className="absolute -left-1/2 top-0 z-[-1] h-full w-[150vw] bg-mint-default"></div>
    </div>
  )
}

