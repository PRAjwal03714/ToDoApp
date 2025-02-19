import Input from "./Input.js";
import React from 'react'
import Modal from './Modal.js'

export default function Project({onAdd,onClick}) {
  const modal=React.useRef()
    const title=React.useState()

    const description=React.useState()
    const deadline=React.useState()
    function handleSave()
    {
        const eTitle=title.current.value
        const edescription=description.current.value
        const edeadline=deadline.current.value

        if(eTitle.trim()==='' || edescription.trim()==='' || edeadline.trim()==='')
        {
          modal.current.open()
          return
        }
        onAdd(
        {
            title:eTitle,
            description:edescription,
            deadline:edeadline
        }
        )

    }
  return (
    <>
    <Modal ref={modal}>
      <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
      <p className='text-stone-600 mb-4'>Please fill all the details </p>
      </Modal>
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button  onClick={onClick}className="text-stone-800 hover:text-stone-950">cancel</button>
        </li>
        <li>
          <button onClick={handleSave} className="bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-md">save</button>
        </li>
      </menu>
      <div>
        <Input ref={title} label="Title" />
        <Input ref={description} label="Description" textarea />
        <Input type="date" ref={deadline} label="Deadline" />
      </div>
    </div>
    </>
  );
}


