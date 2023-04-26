import React from 'react';
import useAutoPageScroll from '../effects/useAutoPageScroll';

function ChatContents({children}) {
  const chatRef = React.useRef(null)

  useAutoPageScroll(chatRef, children)
  
  return (
    <section ref={chatRef} id="contents" className="flex-1 overflow-y-auto flex flex-col gap-2">
          {children}
    </section>
  )
}
export default ChatContents