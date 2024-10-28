import NavRoutes from './components/NavRoutes';

const Header = () => {
    return (
        <header className='fixed  w-screen top-0 flex items-center justify-center sm:pt-2 z-50'>
            <div className=' header  justify-between grid grid-cols-4 backdrop-blur-2xl '>
                <img src='profile.png' />
                <NavRoutes />
                <button>asd</button>
            </div>
        </header>
    );
};
export default Header;
