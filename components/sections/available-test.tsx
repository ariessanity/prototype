import { Card, CardBody } from '@heroui/card'
import React from 'react'
import { ArrowIcon, BrainIcon, CheckmarkIcon, ClockIcon, LightbulbIcon, PersonalityIcon, RelationIcon } from '../icons'
import { Button } from '@heroui/button'

const cards = [
  {
    icon: <BrainIcon />,
    title: "IQ / Intelligence Test",
    time: "15 mins",
    question: "25 questions",
    textButton: 'Start IQ Test Now',
    iconButton: <ArrowIcon />,
    isDisabled: false
  },
  {
    icon: <PersonalityIcon />,
    title: "Personality Type",
    time: "20 mins",
    question: "30 questions",
    textButton: 'Coming Soon',
    isDisabled: true
  },
  {
    icon: <LightbulbIcon />,
    title: "Carrer",
    time: "25 mins",
    question: "35 questions",
    textButton: 'Coming Soon',
    isDisabled: true
  },
  {
    icon: <RelationIcon />,
    title: "Relationships",
    time: "20 mins",
    question: "30 questions",
    textButton: 'Coming Soon',
    isDisabled: true
  },
]

export default function AvailableTestSection() {
  return (
    <div className='relative w-full z-0 py-6 md:py-8'>
      <h3 className="text-center text-[28px] font-semibold md:text-[39px]">Available Tests</h3>
      <p className="pt-1.5 text-center text-base md:pt-2.5 md:text-[18px]">Each test reveals a new part of you. Start with intelligence, with more tests coming soon</p>
      <div className='grid grid-rows-4 gap-4 pt-6 max-lg:grid-cols-2 max-lg:grid-rows-2 max-md:grid-cols-1 md:gap-6 md:pt-8 lg:grid-cols-4 lg:grid-rows-1'>
        {cards.map((card, index) => {
          return (
            <Card key={index} className='shadow-none rounded-large w-full border-1 border-muted' >
              <CardBody className='relative flex w-full p-3 flex-auto flex-col place-content-inherit align-items-inherit h-auto break-words text-left overflow-y-auto gap-2.5 px-4 py-6 antialiased max-md:items-center max-xs-l:items-start md:gap-3'>
                {card.icon}
                <p className="text-[18px] font-semibold">{card.title}</p>
                <div className='flex flex-wrap gap-x-4 gap-y-2 text-sm text-secondary-foreground'>
                  <div className="flex items-center gap-1.5">
                    <ClockIcon />
                    <p>{card.time}</p>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckmarkIcon />
                    <p>{card.question}</p>
                  </div>
                </div>
                <Button className='gap-3 bg-primary-default text-primary-foreground text-lg [&_svg]:flex-shrink-0 h-12 w-full rounded-xl px-6 md:px-8 lg:max-w-[306px] [&_svg]:h-3.5 [&_svg]:w-3.5' isDisabled={card.isDisabled} endContent={card?.iconButton}>
                  {card.textButton}
                </Button>
              </CardBody>
            </Card>
          )
        })}
      </div>
      <div className="absolute -left-1/2 top-0 z-[-1] w-[150vw] h-full bg-mint-default"></div>
    </div>
  )
}

