'use client'

import React from 'react'
import { Accordion, AccordionItem } from '@heroui/accordion'

interface FaqItem {
  question: string,
  answer: string,
}

const faqs: FaqItem[] = [
  {
    question: "What if I'm not satisfied with the program?",
    answer:
      "We're confident that you'll see the value and benefits of myIQ, but if you're not satisfied or you are experiencing technical issues, you might be eligible for refund. See our Refund Policy to learn more."
  },
  {
    question: "How do I cancel my subscription?",
    answer:
      "Canceling is simple and takes less than a few minutes. Visit our Help Center and follow the instructions. You'll maintain access until the end of your current billing period."
  },
  {
    question: "How long does the IQ test take?",
    answer:
      "Our IQ test takes up to 20 minutes to complete. Each test must be finished in one sitting and cannot be paused, as this ensures the most accurate results. Please plan for uninterrupted time before starting any test."
  },
  {
    question: "Can I retake tests?",
    answer:
      "Yes! You can retake tests after completing recommended training modules to track your progress and improvement over time."
  },
  {
    question: "Can I access myIQ on multiple devices?",
    answer:
      "Yes! Your subscription works across all devices – smartphones, tablets, and computers. Your progress automatically syncs everywhere you log in."
  }
];

export default function FaqSection() {
  return (
    <div className='relative mx-auto w-full gap-6 text-left lg:grid lg:grid-cols-[1fr_4fr] lg:gap-14 pt-14'>
      <h2 className="text-[28px] font-semibold leading-[33px] text-secondary-foreground max-lg:text-center md:mb-8 md:text-[39px] md:leading-[49px] lg:max-w-[200px]"><span className="hinline-block">Frequently Asked Questions</span></h2>
      <Accordion selectionMode="multiple">
        {faqs.map((faq, index) => {
          return (
            <AccordionItem key={index} aria-label={faq.question} title={faq.question} className='border-b-1 border-muted !rounded-none text-left' classNames={{ title: 'text-lg font-medium', }}>
              {faq.answer}
            </AccordionItem>
          )
        })}
      </Accordion>
    </div>
  )
}

