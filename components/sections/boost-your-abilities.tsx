import { Card, CardBody } from '@heroui/card';
import React from 'react'
import { CheckIcon } from '../icons';

interface CardItem {
  id: number;
  title: string;
  features: string[]
}

const cards: CardItem[] = [
  {
    id: 1,
    title: "Expert Video Courses",
    features: [
      "20+ hours of expert training",
      "Easy-to-follow lessons",
      "Learn at your own pace",
      "Track your progress"
    ]
  },
  {
    id: 2,
    title: "Brain Training Games",
    features: [
      "Diverse cognitive training exercises",
      "Progressive difficulty levels",
      "Enhance 5 core mental skills: Memory, Logical reasoning, problem-solving mastery, focus and concentration."
    ]
  },
  {
    id: 3,
    title: "Puzzles",
    features: [
      "150+ Intelligence-Boosting Puzzles",
      "Smart Difficulty Progression",
      "Master essential brain functions: Pattern Recognition, Strategic Thinking, Analytical Reasoning."
    ]
  }
];

export default function BoostYourAbilitesSection() {
  return (
    <div className='relative w-full z-0 py-6 md:py-8 '>
      <h3 className="text-center text-[28px] font-semibold md:text-[39px]">Boost Your Abilities</h3>
      <p className="pt-1.5 text-center text-base md:pt-8 md:text-[18px]">Unlock your potential with our comprehensive training package</p>
      <div className='flex gap-3 pt-5 max-lg:flex-col md:gap-6 md:pt-8'>
        {cards.map((card) => (
          <Card key={card.id} className='shadow-none rounded-large w-full transition-transform-background motion-reduce:transition-none border-1 border-muted'>
            <CardBody className='h-auto break-words text-left overflow-y-auto gap-3 p-4 antialiased md:py-6'>
              <div className="h-[42px] w-[42px] rounded-full bg-gradient-to-r from-[#007AFF] to-[#7CB7F8] p-[3px]">
                <div className='flex h-full w-full items-center justify-center rounded-full bg-white text-[20px] font-semibold text-[#2B2D42]'>
                  {card.id}
                </div>
              </div>
              <p className='text-[18px] font-semibold'>{card.title}</p>
              <ul className='flex flex-col gap-2 max-md:pt-0.5'>
                {card.features.map((feature, index) => (
                  <li key={index} className='flex items-start gap-1.5'>
                    <div className='p-1'>
                      <CheckIcon />
                    </div>
                    <p className='text-sm'>
                      {feature}
                    </p>
                  </li>
                ))}
              </ul>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  )
}

