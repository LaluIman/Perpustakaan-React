function SearchBook({ query, setQuery }) {
    return (
        <div className="p-5 flex justify-center">
            <div className="w-full max-w-xl bg-white rounded-xl p-5">
                <input type="text" className="w-full px-4 py-2 border rounded-lg border-slate-300 bg-gray-50" placeholder="Cari buku" value={query} onChange={(e) => setQuery(e.target.value)} />
            </div>
        </div>
    )
}

export default SearchBook