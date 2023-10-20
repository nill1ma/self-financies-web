import { Outlet } from 'react-router-dom';
import SideBar from '../../components/organisms/side-bar';
import { Container } from './style';

export default function Layout() {
    return (
        <div className='grid grid-cols-5 w-screen text-black'>
            <header className='bg-sky-950 text-white text-2xl col-span-5 pt-5 pb-5'>Header</header>
            <SideBar />
            <Container>
                <Outlet />
            </Container>
        </div>
    )

};
