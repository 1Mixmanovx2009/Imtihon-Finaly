// import TopHeader from '../../components/TopHeader/TopHeader'
import BottomHeader from '../../components/BottomHeader/BottomHeader'
import Footer from '../../components/Footer/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <>
            {/* <TopHeader /> */}
            <BottomHeader />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Layout