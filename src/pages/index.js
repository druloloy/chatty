
import useLoadingObserver from '@/effects/useLoadingObserver'
import ChatItem from '@/components/ChatItem'
import ChatContents from '@/components/ChatContents'
import React from 'react'
import Head from 'next/head';

export default function Home() {
  const [messages, setMessages] = React.useState([
    {
      role: 'bot',
      message: 'Aloha! I am Chatty, how may I help you?'
    }
  ]);
  const [input, setInput] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  useLoadingObserver(loading, setMessages);

  const submitMessage = async (e) => {
    e.preventDefault();
    if (input === '') return;

    setLoading(true);

    setMessages([
      ...messages,
      {
        role: 'user',
        message: input
      }
    ]);


    await fetch(`/api/chatty/${input}`)
      .then(res => res.json())
      .then(data => {
        setMessages([
          ...messages,
          {
            role: 'user',
            message: input
          },
          {...data}
        ])

        setInput('');
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        setLoading(false);
      })
  }


  return (
    <>
      <Head>
        <title>ChattyGPT</title>
      </Head>
      <main className="w-full h-screen flex justify-center items-center bg-gradient-radial from-yellow-600 to-slate-900">
        <section className='h-4/6 w-full m-2 p-4 md:w-1/2 flex flex-col rounded-xl bg-white bg-opacity-25 backdrop:blur-lg border border-white'>
          <ChatContents>
            {
              messages.map((message, index) => (
                <ChatItem key={index} role={message.role} message={message.message} />
              ))
            }
          </ChatContents>

          <form onSubmit={submitMessage} id="input" className='flex flex-row p-2 gap-2'>
            <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder="Ask me something." className='w-full h-full px-4 py-2 text-white rounded-full bg-inherit outline-none border border-white transition-all ease-in-out duration-300 focus:bg-white focus:bg-opacity-25' />
            <button type="submit" className='w-1/6 h-full p-2 text-white font-bold rounded-full bg-inherit outline-none border border-white transition-all ease-in-out duration-300 hover:bg-yellow-300 hover:bg-opacity-25'>
              Send
            </button>
          </form>
        </section>
      </main>
    </>
  )
}
