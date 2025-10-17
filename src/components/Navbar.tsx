import type { FC } from 'react'
import logo from '../assets/img/logo/logo-all-dark.svg'
const Navbar:FC = () =>{
    return (
        <header className='w-full mx-auto py-[30px] sticky top-0 z-[100] bg-white'>
                <nav className='max-w-[92%] mx-auto flex items-center'>
                    <img src={logo} alt="" className='h-[40px] object-cover w-auto'/>
                    <div className="max-w-[34%] flex items-center justify-between">
                        <div className="w-full flex items-center justify-between">
                            <span>首頁</span>
                            <span>甜點</span>
                            <span>登入</span>
                        </div>
                    </div>
                </nav>
            </header>
    )
}
export default Navbar