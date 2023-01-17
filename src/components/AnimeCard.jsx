import React from 'react'

const AnimeCover = (props) => (
  <img src={props.imageSrc} alt="Anime-Cover" className='sm:h-full w-24' style={{aspectRatio: "75/106"}}/>
)

const AnimeTitle = (props) => (
  <h1 className='w-full md:text-2xl text-xl font-semibold' id='anime-title'>{props.title}</h1>
)

const AnimeStudio = (props) => (
  <h2 className='w-full md:text-xl text-lg font-base' id='anime-studio'>{props.studio}</h2>
)

const AnimeRating = (props) => (
  <span className='w-fit flex items-center -translate-x-0.5 bg-slate-900 py-1.5 px-1.5 mt-1 rounded-tl-md rounded-tr-md rounded-br-md' id='anime-rating'><span className="material-icons-round text-yellow-400 mr-0.5">star</span> - {props.rating}</span>
)

const AnimeMembers = (props) => (
  <span className='w-fit flex items-center -translate-x-0.5 bg-slate-900 pb-1.5 px-1.5 rounded-bl-md rounded-br-md'><span className="material-icons-round mr-0.5">person</span> - {props.members}</span>
)

const AnimeSynopsis = (props) => (
  <p className='w-full whitespace-pre-line break-words mt-1.5 md:text-lg' id='anime-synopsis'>{props.synopsis}</p>
)

const AnimeLinks = (props) => (
  <div className='w-full grid grid-cols-2 mt-3 shadow-sm shadow-black rounded-sm'>
    <a href={props.malUrl} className="cursor-pointer hover:bg-blue-700 bg-blue-600 font-medium flex items-center justify-center rounded-tl-sm rounded-bl-sm" target="_blank" rel="noopener noreferrer"><svg role="img" className="fill-white w-8 p-0 m-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>MyAnimeList</title><path d="M8.273 7.247v8.423l-2.103-.003v-5.216l-2.03 2.404-1.989-2.458-.02 5.285H.001L0 7.247h2.203l1.865 2.545 2.015-2.546 2.19.001zm8.628 2.069l.025 6.335h-2.365l-.008-2.871h-2.8c.07.499.21 1.266.417 1.779.155.381.298.751.583 1.128l-1.705 1.125c-.349-.636-.622-1.337-.878-2.082a9.296 9.296 0 0 1-.507-2.179c-.085-.75-.097-1.471.107-2.212a3.908 3.908 0 0 1 1.161-1.866c.313-.293.749-.5 1.1-.687.351-.187.743-.264 1.107-.359a7.405 7.405 0 0 1 1.191-.183c.398-.034 1.107-.066 2.39-.028l.545 1.749H14.51c-.593.008-.878.001-1.341.209a2.236 2.236 0 0 0-1.278 1.92l2.663.033.038-1.81h2.309zm3.992-2.099v6.627l3.107.032-.43 1.775h-4.807V7.187l2.13.03z"/></svg></a>
    <a href={props.ytUrl} className="text-center cursor-pointer hover:bg-red-700 bg-red-600 font-medium flex items-center justify-center rounded-tr-sm rounded-br-sm" target="_blank" rel="noopener noreferrer"><svg role="img" className='fill-white w-6 p-0 m-0' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>YouTube</title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg></a>
  </div>
)

export const AnimeCard = (props) => {
  return (
    <div className='flex flex-row bg-blue-700 text-white overflow-hidden rounded-sm h-80 shadow-lg'>
      <AnimeCover imageSrc={props.imageSrc}/>
      <div className='flex flex-col w-full p-4 overflow-auto' id='anime-details'>
        <AnimeTitle title={props.title}/>
        <AnimeStudio studio={props.studio}/>
        <AnimeRating rating={props.rating}/>
        <AnimeMembers members={props.members}/>
        <AnimeSynopsis synopsis={props.synopsis}/>
        <AnimeLinks ytUrl={props.ytUrl} malUrl={props.malUrl}/>
      </div>
    </div>
  )
}
