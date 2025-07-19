import { useState } from "react"

function AddBookForm({ onAdd }) {
    const [cover, setCover] = useState('')
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (cover.trim() === '' || title.trim() === '' || author.trim() === '') return
        onAdd({ cover, title, author })
        setCover('')
        setTitle('')
        setAuthor('')
    }

    return (
        <div className="mt-30 p-5 flex justify-center">
            <div className="w-full max-w-xl bg-white rounded-xl p-8">
                <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                    <div>
                        <input
                            id="cover"
                            className="w-full px-4 py-2 border rounded-lg border-slate-300 bg-gray-50"
                            type="text"
                            placeholder="Masukkan URL gambar sampul"
                            value={cover}
                            onChange={(e) => setCover(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            id="title"
                            className="w-full px-4 py-2 border rounded-lg border-slate-300 bg-gray-50"
                            type="text"
                            placeholder="Masukkan judul buku"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            id="author"
                            className="w-full px-4 py-2 border rounded-lg border-slate-300 bg-gray-50"
                            type="text"
                            placeholder="Masukkan nama penulis"
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full mt-2 px-5 py-3 cursor-pointer bg-black text-white rounded-lg font-semibold hover:bg-gray-300 hover:text-black transition-all"
                    >
                        Tambah buku
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AddBookForm