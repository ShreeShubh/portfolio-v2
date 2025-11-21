import React, { useState } from 'react'
import { HeroParallax } from '../ui/hero-parallax'
import SectionHeading from '../SectionHeading/SectionHeading'

const Portfolio = () => {
  return (
    <>
      <div id="portfolio" className="bg-neutral-950 min-h-screen pt-24 pb-16">
        <SectionHeading
          t1="PORT"
          t2="FOLIO"
          st1="Projects We"
          st2="Delivered"
        />
        <HeroParallax products={products} />
      </div>
    </>
  )
}

export default Portfolio

export const products = [
  {
    title: 'Moonbeam',
    link: 'https://gomoonbeam.com',
    thumbnail:
      'https://aceternity.com/images/products/thumbnails/new/moonbeam.png',
  },
  {
    title: 'Cursor',
    link: 'https://cursor.so',
    thumbnail:
      'https://aceternity.com/images/products/thumbnails/new/cursor.png',
  },
  {
    title: 'Rogue',
    link: 'https://userogue.com',
    thumbnail:
      'https://aceternity.com/images/products/thumbnails/new/rogue.png',
  },

  {
    title: 'Editorially',
    link: 'https://editorially.org',
    thumbnail:
      'https://aceternity.com/images/products/thumbnails/new/editorially.png',
  },
  {
    title: 'Editrix AI',
    link: 'https://editrix.ai',
    thumbnail:
      'https://aceternity.com/images/products/thumbnails/new/editrix.png',
  },
  {
    title: 'Pixel Perfect',
    link: 'https://app.pixelperfect.quest',
    thumbnail:
      'https://aceternity.com/images/products/thumbnails/new/pixelperfect.png',
  },

  {
    title: 'Algochurn',
    link: 'https://algochurn.com',
    thumbnail:
      'https://aceternity.com/images/products/thumbnails/new/algochurn.png',
  },
  {
    title: 'Aceternity UI',
    link: 'https://ui.aceternity.com',
    thumbnail:
      'https://aceternity.com/images/products/thumbnails/new/aceternityui.png',
  },
  {
    title: 'Tailwind Master Kit',
    link: 'https://tailwindmasterkit.com',
    thumbnail:
      'https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png',
  },
  {
    title: 'SmartBridge',
    link: 'https://smartbridgetech.com',
    thumbnail:
      'https://aceternity.com/images/products/thumbnails/new/smartbridge.png',
  },
  {
    title: 'Renderwork Studio',
    link: 'https://renderwork.studio',
    thumbnail:
      'https://aceternity.com/images/products/thumbnails/new/renderwork.png',
  },

  {
    title: 'Creme Digital',
    link: 'https://cremedigital.com',
    thumbnail:
      'https://aceternity.com/images/products/thumbnails/new/cremedigital.png',
  },
  {
    title: 'Golden Bells Academy',
    link: 'https://goldenbellsacademy.com',
    thumbnail:
      'https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png',
  },
  {
    title: 'Invoker Labs',
    link: 'https://invoker.lol',
    thumbnail:
      'https://aceternity.com/images/products/thumbnails/new/invoker.png',
  },
  {
    title: 'E Free Invoice',
    link: 'https://efreeinvoice.com',
    thumbnail:
      'https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png',
  },
]

{
  /* <div className="min-h-screen px-4 md:px-10 max-w-screen-lg">
        <div className="flex flex-col gap-7 items-center py-7">
          
          <div className="text-center">
            <h2 className="text-secondary-text text-5xl md:text-7xl font-extrabold">
              Portfolio
            </h2>
            <h3 className="text-white font-extrabold text-2xl md:text-3xl">
              Some of my <span className="text-primary-text">Recent Work</span>
            </h3>
          </div>

          
          <PortfolioTabs
            activeTab={activeTab}
            handleActiveTab={handleActiveTab}
          />

          
          <Projects getFilteredProject={getFilteredProject} />
        </div>
      </div> */
}
