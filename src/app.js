import React from "react";
import { useState, useEffect } from "react";
import { Navbar, AnimeSection, AnimeCard, AnimeHook } from "./components";

export const App = () => {
    const [data, setData] = useState(null)
    const [url, setUrl] = useState("/seasons/now")
    const [isLoading, setIsLoading] = useState(false)
    const [title, setTitle] = useState("Winter 2023")
    const [menu, setMenu] = useState(window.matchMedia("(max-width: 768px)").matches ? false : true)
    const [pagination, setPagination] = useState([])

    useEffect(() => {
        menu === true && window.matchMedia("(max-width: 768px)").matches ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto"
      }, [menu])

    useEffect(() => {
        setIsLoading(true)
        AnimeHook(url).then(myData => {
            setData(myData)
            const pages = []
            for (let i = 1; i <= myData.pagination.last_visible_page; i++) {
                pages.push(i)
            }
            setPagination(pages)
            setIsLoading(false)
        })
    }, [url])

    return (
        <div>
            <Navbar displayMenu={() => {menu === false ? setMenu(true) : setMenu(false)}}
            showMyMenu={menu === true ? {display: "flex"} : {display: "none"}}
            getSeason={(e) => {
                menu === true && window.matchMedia("(max-width: 768px)").matches && setMenu(false)
                setTitle(`${e.target.id} 2023`)
                e.target.id === "upcoming" ? setUrl(`/seasons/${e.target.id}`) : setUrl(`/seasons/2023/${e.target.id}`)
            }}
            getDay={(e) => {
                menu === true && window.matchMedia("(max-width: 768px)").matches && setMenu(false)
                setTitle(`${e.target.id}`)
                setUrl(`/schedules?filter=${e.target.id}`)
            }}/>
            {isLoading && <svg aria-hidden="true" class="w-12 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600 m-auto mt-10" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>}
            {!isLoading && <main className='w-full max-w-screen-2xl m-auto p-4 pb-8'>
                <h1 className='w-full text-center font-bold text-2xl py-2 pt-1 text-white uppercase' id='page-title'>{title}</h1>
                <AnimeSection>
                    {data !== null && data.data.sort((a, b) => b.members - a.members).map(anime => 
                        anime.approved && <AnimeCard
                            title={anime.title}
                            imageSrc={anime.images.webp.image_url}
                            studio={anime.studios.map(studio => studio.name).join(", ")}
                            rating={anime.score !== null ? `${anime.score} (${Intl.NumberFormat("en", { notation: "compact" }).format(anime.scored_by)})` : `N/A (N/A)`}
                            members={Intl.NumberFormat("en", { notation: "compact" }).format(anime.members)}
                            synopsis={anime.synopsis}
                            malUrl={anime.url !== null ? anime.url : "#"}
                            ytUrl={anime.trailer.url !== null ? anime.trailer.url : "#"}
                        />
                    )}
                </AnimeSection>
                <div className="flex flex-row flex-wrap bg-white w-fit m-auto mt-8 overflow-hidden rounded-md text-lg font-semibold shadow-sm shadow-black cursor-pointer" id="pagination">
                    {data !== null && pagination.map(page => <span className={`py-2 px-4 hover:bg-blue-600 hover:text-white ${data.pagination.current_page === page ? "bg-blue-600 text-white" : ""}`} onClick={() => {url.includes("filter") ? setUrl(`${url}&page=${page}`) : url.includes("page") ? setUrl(url.replace(/\d/, page) ) : setUrl(`${url}?page=${page}`)}}>{page}</span>)}
                </div>
            </main>}
        </div>
    )
}