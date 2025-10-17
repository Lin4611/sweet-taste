import type { FC } from "react"
import banner from '../assets/img/home-banner.avif'
const HomePage:FC = ()=>{
    return(
        <>
            <main className="w-full">
                <img src={banner} alt="" className="w-full h-auto object-cover" />
            </main>
        </>
    )
}
export default HomePage