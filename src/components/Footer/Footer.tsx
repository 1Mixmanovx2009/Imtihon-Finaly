import React from 'react'
import SiteLogo from '../../assets/images/SHOP.CO.svg'


function Footer() {
    return (
        <div>
            <footer className='bg-[#F0F0F0] py-[50px]'>
                <div className='container mx-auto flex justify-between items-center'>
                    <div className='flex gap-[24px]'>
                        <div>
                            <img src={SiteLogo} alt="" className='mb-[25px]'/>
                            <p className='text-[#00000066] text-[14px] w-[248px]'>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
                        </div>
                        <div>
                            <h1 className='text-[#000000] font-500 leading-3 text-[16px]'>COMPANY</h1>
                            <ul className='text-[#00000066] text-[14px]'>
                                <li>Shop</li>
                                <li>On Sale</li>
                                <li>New Arrivals</li>
                                <li>Brands</li>
                            </ul>
                        </div>
                        <div>
                            <h1 className='text-[#000000] font-bold text-[24px]'>Contact Us</h1>
                            <p className='text-[#00000066] text-[14px]'>+234 123 456 7890</p>
                            <p className='text-[#00000066] text-[14px]'></p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer