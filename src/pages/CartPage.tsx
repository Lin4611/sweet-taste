import p1 from "../assets/img/p-1.png"

const CartPage = ()=>{
    return(
        <>
        <main className="w-full mx-auto lg:max-w-[1024px]">
            <section className="w-full flex flex-col items-center">
                <h2 className="text-title text-primary leading-5 font-semibold bg-soft/100 w-full  flex items-center justify-center py-6">您的購物車</h2>
                <section className="w-full flex flex-col py-[30px] px-[30px] gap-[30px]">
                    <section className="w-full flex flex-col">
                        <div className="w-full flex justify-between pb-2 border-b border-soft">
                            <img src={p1} alt="" className="w-[157px] h-[106px] object-cover" />
                            <div className="flex flex-col justify-between">
                                <h4 className="text-subtitle text-primary font-light leading-5">焦糖馬卡龍</h4>
                                <p className="text-primary">NT$ 450</p>
                                <div className="flex text-primary text-center font-light">
                                    <button type="button" className="py-[13px] px-[19px] border border-soft">-</button>
                                    <button type="button" className="py-[13px] px-[19px] border border-soft">2</button>
                                    <button type="button" className="py-[13px] px-[19px] border border-soft">+</button>
                                </div>
                            </div>
                        </div>
                        <section className="w-full flex justify-end items-center border-b border-soft py-2">
                            <p className="text-subtitle text-primary font-semibold leading-5 ">NT$ 900</p>
                        </section>
                    </section>
                </section>
            </section>
        </main>
        </>
    )
}
export default CartPage