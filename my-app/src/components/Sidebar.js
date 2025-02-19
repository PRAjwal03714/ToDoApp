export default function sidebar({
  onStart,
  project,
  onSelectProject,
  selectedProject,
}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 uppercase font-bold md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <button
          onClick={onStart}
          className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-800 text-stone-400 hover:bg-stone-600  hover:text-stone-100 "
        >
          + Add project
        </button>
      </div>
      <ul className="mt-6">
        {project.map((val) => {
            let cssClasses = "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";

            if (val.id === selectedProject) {
              cssClasses += ' bg-stone-800 text-stone-200'
            } else {
              cssClasses += ' text-stone-400'
            }
  
          return (
            <li key={val.id}>
              <button
                onClick={() => onSelectProject(val.id)}
                className={cssClasses}
              >
                {val.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
