import { NavLink } from 'react-router-dom'
import SiteLogo from '../../assets/images/SHOP.CO.svg'
import SearchIcon from '../../assets/images/searchIcon.svg'
import Shop from '../../assets/images/shop.svg'
import User from '../../assets/images/user.svg'
import '../../App.css'

function BottomHeader() {
    return (
        <div className='flex container mx-auto justify-between items-center py-[20px]'>
            <NavLink to='/'>
                <img src={SiteLogo} alt="" />
            </NavLink>
            <div className='gap-[24px] flex'>
                <NavLink to='/'>Shop</NavLink>
                <NavLink to='/Onsale'>On Sale</NavLink>
                <NavLink to='/NewArriwals'>New Arrivals</NavLink>
                <NavLink to='/Brand'>Brands</NavLink>
            </div>
            <div className='w-[577px] bg-[#F0F0F0] px-[52px] py-[14px] rounded-[62px] relative'>
                <img className='absolute left-[20px]' src={SearchIcon} alt="" />
                <input className='w-[451px] bg-[#F0F0F0] placeholder:text-[#00000066] focus:outline-none text-[#00000066]' placeholder='Search for products...' type="text" />
            </div>
            <div className='gap-[24px] flex'>
                <img src={Shop} alt="" />
                <img src={User} alt="" />
            </div>
        </div>
    )
}

export default BottomHeader