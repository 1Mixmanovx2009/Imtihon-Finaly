import SiteLogo from '../../assets/images/SHOP.CO.svg'
import Twitter from '../../assets/images/twitter.svg'
import Facebook from '../../assets/images/facebook.svg'
import Instagram from '../../assets/images/instagram.svg'
import GitHub from '../../assets/images/github.svg'
import Email from '../../assets/images/email.svg'
import Visa from '../../assets/images/visa.png'
import Hamkor from '../../assets/images/hamkor.png'
import PayPal from '../../assets/images/paypal.png'
import Pay from '../../assets/images/pay.png'
import GPay from '../../assets/images/GPay.png'
import { COMPANY, FAQ, HELP, RESOURCES } from '../../statik'


function Footer() {
    return (
        <div className=' flex flex-col-reverse'>
            <div className='bg-[#F0F0F0]'>
                <footer className='container mx-auto pt-[140px]'>

                    <div className='flex flex-col gap-[113.5px] pb-[50px] justify-between items-center'>
                        <div className='footer container mx-auto flex justify-between items-center'>
                            <div>
                                <img src={SiteLogo} alt="" className='mb-[25px]' />
                                <p className='text-[#00000066] text-[14px] mb-[35px] w-[248px]'>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
                                <div className='flex gap-[12px]'>
                                    <img src={Twitter} alt="" />
                                    <img src={Facebook} alt="" />
                                    <img src={Instagram} alt="" />
                                    <img src={GitHub} alt="" />
                                </div>

                            </div>
                            <div className='columns flex justify-between gap-[113px]'>
                                <div>
                                    <h1 className='text-[#000000] font-[500] leading-3 mb-[26px] text-[16px] tracking-[3px]'>COMPANY</h1>
                                    <ul className='text-[#00000066] text-[14px]'>
                                        {
                                            COMPANY.map(item => (
                                                <li key={item.id}>
                                                    <p className='leading-[19px] text-[#00000099] mb-[20px] hover:cursor-pointer'>{item.title}</p>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                                <div>
                                    <h1 className='text-[#000000] font-[500] leading-3 mb-[26px] text-[16px] tracking-[3px]'>HELP</h1>
                                    <ul className='text-[#00000066] text-[14px]'>
                                        {
                                            HELP.map(item => (
                                                <li key={item.id}>
                                                    <p className='leading-[19px] text-[#00000099] mb-[20px] hover:cursor-pointer'>{item.title}</p>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                                <div>
                                    <h1 className='text-[#000000] font-[500] leading-3 mb-[26px] text-[16px] tracking-[3px]'>FAQ</h1>
                                    <ul className='text-[#00000066] text-[14px]'>
                                        {
                                            FAQ.map(item => (
                                                <li key={item.id}>
                                                    <p className='leading-[19px] text-[#00000099] mb-[20px] hover:cursor-pointer'>{item.title}</p>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                                <div>
                                    <h1 className='text-[#000000] font-[500] leading-3 mb-[26px] text-[16px] tracking-[3px]'>RESOURCES</h1>
                                    <ul className='text-[#00000066] text-[14px]'>
                                        {
                                            RESOURCES.map(item => (
                                                <li key={item.id}>
                                                    <p className='leading-[19px] text-[#00000099] mb-[20px] hover:cursor-pointer'>{item.title}</p>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='footerLine max-w-[1536px] mb-[25px] h-[1px] m-auto bg-[#0000001A] '></div>
                    <div className='bottomFooter flex justify-between items-center mb-[88px]'>
                        <p className=' text-[#00000099]'>Shop.co © 2000-2023, All Rights Reserved</p>
                        <div className='flex gap-[12px]'>
                            <img src={Visa} alt="" />
                            <img src={Hamkor} alt="" />
                            <img src={PayPal} alt="" />
                            <img src={Pay} alt="" />
                            <img src={GPay} alt="" />
                        </div>
                    </div>
                </footer>
            </div>
            <div className='black_footer bg-black mx-auto py-[40px] z-10 px-[64px] rounded-[20px] mb-[-95px] flex justify-between items-center'>
                <p className='w-[551px] font-[700] text-[40px] leading-[45px] text-white'>STAY UPTO DATE ABOUT OUR LATEST OFFERS</p>
                <div className='flex flex-col items-center gap-[20px]'>
                    <div className='w-[349px] bg-white px-[52px] py-[14px] rounded-[62px] relative'>
                        <img className='absolute left-[20px]' src={Email} alt="" />
                        <input className='w-[173px] bg-white placeholder:text-[#00000066] focus:outline-none text-[#00000066]' placeholder='Search for products...' type="text" />
                    </div>
                    <button className='w-[349px] bg-white border-[1px] px-[88.5px] py-[12px] rounded-[62px]  hover:bg-black hover:text-white hover:border-[1px] duration-300'>Subscribe to Newsletter</button>
                </div>
            </div>
        </div>
    )
}

export default Footer