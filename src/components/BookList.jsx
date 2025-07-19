import React from 'react';

function BookList({ books }) {
    return (
        <div className='container mx-auto px-2 py-10'>
            <div className="grid grid-cols-1 md:grid-cols-4">
                {books.map((book, index) => (
                    <div key={index} className="flex flex-row md:flex-col items-center bg-white border border-slate-200 rounded-xl shadow-sm group hover:shadow-lg hover:transform hover:scale-102 transition-all duration-200 p-6 m-3">
                        <div className='bg-gray-50 border border-slate-300 p-5 md:pr-10 rounded-xl transition-all duration-500'>
                            <div className='relative -skew-3 group-hover:skew-0 group-hover:ml-3 transition-all duration-500'>
                                <img draggable={false} src={book.cover} className='w-20 md:w-27 rounded-sm mr-5 md:m-0 md:mb-5 z-40 relative' alt="cover" />
                                <div className='bg-slate-200 w-21 h-30 md:w-28 md:h-42 rounded-sm absolute left-0 top-0 group-hover:w-20 md:group-hover:w-28 z-30 transition-all'></div>
                                <div className='bg-slate-300 w-22 h-30 md:w-30 md:h-42 rounded-sm absolute left-0 top-1 group-hover:w-20 md:group-hover:w-28 z-20 transition-all duration-300'></div>
                                <div className='bg-slate-400 w-22 h-30 md:w-31 md:h-42 rounded-sm absolute left-1 top-2 group-hover:w-20 md:group-hover:w-28 transition-all duration-300'></div>
                            </div>
                        </div>
                        <div className='flex flex-col items-start md:items-center ml-4 md:ml-0 md:mt-5'>
                            <strong className="text-lg text-gray-800 mb-1 text-left md:text-center">{book.title}</strong>
                            <span className="text-gray-500 text-sm md:text-md text-center">by {book.author}</span>
                            {/* <a href={book.link} target='_blank' className='mt-3 text-sm text-black hover:text-blue-500 hover:underline transition-all'>
                                Lihat selengkapnya →
                            </a> */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BookList;