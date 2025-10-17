import type { FC } from 'react'
import logo from '../assets/img/logo/logo-all-dark.svg'
import cart from '../assets/img/icon/shopping_cart.png'
const Navbar:FC = () =>{
    return (
        <header className='w-full mx-auto py-[30px] sticky top-0 z-[100] bg-white'>
                <nav className='max-w-[92%] mx-auto flex items-center justify-between'>
                    <img src={logo} alt="" className='w-auto h-[40px] object-cover '/>
                    <div className="max-w-[34%] w-full flex items-center justify-between">
                        <div className="w-full flex items-center justify-between">
                            <span className='text-primary font-semibold'>首頁</span>
                            <span className='text-primary font-semibold'>甜點</span>
                            <span className='text-primary font-semibold'>登入</span>
                        </div>
                        <img src={cart} alt="" className='h-[24px] w-auto object-cover aspect-square' />
                    </div>
                </nav>
            </header>
    )
}
export default Navbar