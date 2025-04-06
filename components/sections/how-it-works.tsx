import { Card, CardBody } from '@heroui/card'
import React, { ReactNode } from 'react'
import { ReportIcon, RocketIcon, TestIcon } from '../icons'


interface CardItem {
  icon: ReactNode;
  title: string;
  description: string;
}

const cards: CardItem[] = [
  {
    icon: <TestIcon />,
    title: "Take a test",
    description: "Get an unbiased view of yourself"
  },
  {
    icon: <ReportIcon />,
    title: "Get Your Detailed Report",
    description: "Learn your strengths and discover areas for growth"
  },
  {
    icon: <RocketIcon />,
    title: "Begin Your Journey",
    description: "Start improving with expert courses and brain training"
  }
]


export default function HowItWorksSection() {
  return (
    <div className='pt w-full pb-6 pt-[120px] md:pb-10 lg:pt-[174px]'>
      <h3 className='text-center text-[28px] font-semibold md:text-[39px]'>How it Works</h3>
      <div className='flex item-center w-full gap-3 pt-6 max-md:flex-col md:gap-6 md:pt-8'>
        {cards.map((card, index) => {
          return (
            <Card key={index} className='shadow-none rounded-large w-full border-1 border-muted' >
              <CardBody className='h-auto gap-3 p-4 md:px-8 md:py-[42px]'>
                {card.icon}
                <p className='text-[18px] font-semibold'>{card.title}</p>
                <p className='text-sm'>{card.description}</p>
              </CardBody>
            </Card>
          )
        })}
      </div>
    </div>
  );
}
