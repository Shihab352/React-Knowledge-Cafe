import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <header className='flex justify-between items-center container mx-auto p-4 border-b-2'>
            <h1 className='text-4xl exo-2-bold'>Knowlwdge Cafe</h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;