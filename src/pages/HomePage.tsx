import type { FC } from "react"
import banner from '../assets/img/home-banner.avif'
import today from '../assets/img/today.avif'
// import popular from '../assets/img/popular.avif'
// import new_product_pic from '../assets/img/new.avif'
const HomePage:FC = ()=>{
    return(
        <>
            <main className="w-full mx-auto lg:px-[42px]">
                <img src={banner} alt="" className="w-full h-auto object-cover lg:h-[496px]" />
                <section className="w-full flex">
                    <section className="w-[125px] h-auto overflow-hidden relative ">
                        <img src={today} alt="" className="w-full h-full object-cover" />
                        <div className="inset-0 absolute bg-accent/80 backdrop-blur-[5px]"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <p className="font-semibold text-subtitle text-primary vertical-text">本日精選</p>
                        </div>
                    </section>
                </section>
            </main>
        </>
    )
}
export default HomePage