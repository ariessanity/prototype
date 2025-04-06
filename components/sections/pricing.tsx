import { Card, CardBody, CardFooter, CardHeader } from '@heroui/card'
import { Divider } from '@heroui/divider'
import React from 'react'
import { CheckIcon } from '../icons';
import { Button } from '@heroui/button';

interface CardItem {
  title: string;
  price: string;
  billingCycle: string
  features: string[]
}

const cards: CardItem[] = [
  {
    title: "Weekly Subscription",
    price: "$14.99",
    billingCycle: "/week",
    features: [
      "7-day trial, auto-renews to weekly plan thereafter",
      "Personalised IQ Certificate",
      "Comprehensive Cognitive Analysis",
      "Full Access to Development Tools"
    ],
  },
  {
    title: "Monthly Excellence",
    price: "$39.99",
    billingCycle: "/month",
    features: [
      "Maximum Savings on Long-Term Growth",
      "Complete Cognitive Assessment Suite",
      "20+ Hours of Expert-Led Courses",
      "Personalized Development Path"
    ],
  }
];

export default function PricingSection() {
  return (
    <div className='relative py-6 md:py-10'>
      <div className="mx-auto w-full max-w-[740px]">
        <h3 className="order-4 text-center text-[28px] font-semibold md:text-[39px]">Explore our plans</h3>
      </div>
      <p className="text-center text-base md:pt-8 md:text-[18px]">Discover our flexible offers and choose the one that best suits your learning and personal development journey.</p>
      <div className='flex items-center justify-center gap-3 pt-5 max-lg:flex-col md:gap-6 md:pt-8'>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
          {cards.map((card, index) => {
            return (
              <Card key={index} className='max-w-[362px] border border-gray-100 p-3 transition-transform duration-300 hover:scale-105 hover:shadow-lg'>
                <CardHeader className='p-3 z-10 w-full justify-start shrink-0 overflow-inherit color-inherit subpixel-antialiased rounded-t-large flex flex-col items-start gap-2 pb-6'>
                  <h2 className="text-large font-medium">{card.title}</h2>
                </CardHeader>
                <Divider />
                <CardBody className='h-auto break-words text-left overflow-y-auto subpixel-antialiased gap-8'>
                  <p className="flex items-baseline gap-1 pt-2">
                    <span className="inline bg-clip-text text-4xl font-semibold leading-7 tracking-tight text-foreground">
                      {card.price}*
                    </span>
                    <span className="text-small font-medium text-default-400">{card.billingCycle}</span>
                  </p>
                  <ul className="flex flex-col gap-2">
                    {
                      card.features.map((feature, index) => {
                        return (
                          <li key={index} className="flex items-center gap-2">
                            <CheckIcon />
                            <p className="text-default-500">{feature}</p>
                          </li>
                        )
                      })
                    }
                  </ul>
                </CardBody>
                <CardFooter className='p-3 h-auto flex w-full items-center overflow-hidden color-inherit subpixel-antialiased rounded-b-large'>
                  <Button className="gap-3 bg-primary-default text-lg text-white [&_svg]:flex-shrink-0 h-12 rounded-xl px-6 w-full sm:max-w-[306px] md:px-8 lg:gap-6 [&_svg]:h-3.5 [&_svg]:w-3.5 max-md:[&_svg]:hidden" variant="solid" >
                    Get started
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </div>
      <p className="mt-4 text-center text-[15px] leading-5">*Visit our <a className="underline" href="#">pricing page</a> to find out more details.</p>
    </div>
  )
}

