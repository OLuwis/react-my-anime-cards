import React from 'react'

export const AnimeSection = (props) => {
  return (
    <section className='pt-2 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8' id='anime-section'>
      {props.children}
    </section>
  )
}