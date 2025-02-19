import nopro from '../OIP.jpeg'
export default function NoProject({onStart})
{
    return <div className="mt-24 text-center w-2/3">
        <img src={nopro} alt='empty task' className='w-16 h16 object-contain mx-auto'/>
        <h2 className='text-xl font-bold text-stone-500 my-4'>No project Selected</h2>
        <p className='text-stone-400 mb-4'>Select a project or create a new one</p>
        <p className='mt-8'>
            <button onClick={onStart} className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-800 text-stone-400 hover:bg-stone-800  hover:text-stone-100 ">Create new project</button>
        </p>
    </div>
}