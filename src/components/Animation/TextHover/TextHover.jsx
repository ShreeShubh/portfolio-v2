import { TextHoverEffect } from "../../ui/text-hover-effect"
import React from "react"

export function TextHoverEffectDemo({ text }) {
  return (
    <div className="h-[15rem] flex items-center justify-center">
      <TextHoverEffect text={text} />
    </div>
  )
}
