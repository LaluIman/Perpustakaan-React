import logo from '../assets/book-icon.webp'

function Header() {
    return <header className="bg-white border-2 border-gray-200 text-white fixed z-10 top-4 left-1/2 -translate-x-1/2 w-[95%] md:w-[70%] rounded-2xl">
        <div className="container mx-auto px-3 py-4 flex flex-row items-center">
            <div className='bg-black rounded-full justify-center items-center p-3 mr-2'>
                <img src={logo} draggable={false} className='w-5' alt="logo" />
            </div>
            <div>
                <h1 className="font-semibold text-xl text-black">Perpustakaan</h1>
                <p className="text-sm text-gray-500">kumpulan novel populer</p>
            </div>
        </div>
    </header>
}

export default Header