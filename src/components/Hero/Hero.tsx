import '../../App.css'
import Star1 from '../../assets/images/yulduz1.svg'
import Star2 from '../../assets/images/yulduz2.svg'
import heroBg from '../../assets/images/Bg.png'
import Animate from '../Animation/Animation'

export const Hero = () => {
    return (
        <div className='mb-[72px]'>
            <div className='bgHero py-[116px] relative'>
                <div className='container mx-auto flex justify-between items-center'>
                    <div className='mb-[48px]'>
                        <h1 className='heroH1 w-[577px] font-[700] text-[64px] mb-[32px] leading-[64px]'>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                        <p className='heroP w-[545px] font-[400] text-[16px] leading-[22px] mb-[32px]'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                        <button className='font-[500] text-[16px] border-[1px] border-black leading-[21.6px] text-white bg-black px-[67.5px] py-[15px] rounded-[62px] hover:bg-white hover:text-[black] duration-300 mb-[48px]'>Shop Now</button>
                        <div>
                            <ul className='flex flex-wrap justify-center numbers'>
                                <li className='border-r-[1px] border-[#00000033] pr-[32px]'>
                                    <p className='font-[700] text-[40px] leading-[54px]'>200+</p>
                                    <p className='font-[400] text-[16px] leading-[22px] text-[#00000099]'>International Brands</p>
                                </li>
                                <li className='numberCenter border-r-[1px] border-[#00000033] pl-[32px] pr-[32px]'>
                                    <p className='font-[700] text-[40px] leading-[54px]'>2,000+</p>
                                    <p className='font-[400] text-[16px] leading-[22px] text-[#00000099]'>High-Quality Products</p>
                                </li>
                                <li className='pl-[32px]'>
                                    <p className='font-[700] text-[40px] leading-[54px]'>30,000+</p>
                                    <p className='font-[400] text-[16px] leading-[22px] text-[#00000099]'>Happy Customers</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                    <img className='star1 absolute top-[86px] right-[100px]' src={Star1} alt="" />
                    <img className='star2 absolute top-[300px] right-[800px]' src={Star2} alt="" />
                    <img className='Bg_img w-full h-full' src={heroBg} alt="" />
            </div>
            <Animate/>
        </div>
    )
}
