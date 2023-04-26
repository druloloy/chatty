import React from 'react'

function ChatItem({role, message}) {
  return role === 'user' ? (
    <section className='user w-full flex justify-end'>
        <section className=" flex justify-end w-fit max-w-md rounded-lg bg-slate-300 px-6 py-2">
            <p className="leading-tight">{message}</p>
        </section>
    </section>
  ) : (
    <section className='bot w-full flex justify-start'>
        <section className=" flex justify-end w-fit max-w-md rounded-lg bg-yellow-300 px-6 py-2">
            <p className="leading-tight">{message}</p>
        </section>
    </section>
  )

}


export default ChatItem