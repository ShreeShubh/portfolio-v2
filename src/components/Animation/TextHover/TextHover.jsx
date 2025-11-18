import { TextHoverEffect } from '../../ui/text-hover-effect'
import React from 'react'

export function TextHoverEffectDemo({ text }) {
  return (
    <div className="h-[4.5rem] sm:h-[8rem] md:h-[8.5rem] lg:h-[12rem] flex items-center justify-center uppercase">
      <TextHoverEffect text={text} />
    </div>
  )
}
