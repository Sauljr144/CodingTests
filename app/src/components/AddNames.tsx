

const AddNames = () => {
  return (
  <div className="w-96">
  
    <form className="m-5 bg-zinc-100 p-5" style={{borderRadius:'20px'}}>
       <label className="block">
            <span className="block text-sm font-medium text-slate-700 text-base mb-3">Frist Name</span>
            <input type="email" className="mb-5 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Add First Name"/>
        </label>
       <label className="block">
            <span className="block text-sm font-medium text-slate-700 text-base mb-3">Last Name</span>
            <input type="email" className="mb-3 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Add First Name"/>
        </label>
       <label className="block">
            <span className="block text-sm font-medium text-slate-700 text-base mb-3">Phone Number</span>
            <input type="number" className="mb-3 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Add Phone Number"/>
        </label>
        <button className='rounded-full bg-indigo-500 text-indigo-50 font-semibold w-24 py-2 ' >Add</button>
    </form>
  
  
    </div>
  )
}

export default AddNames
