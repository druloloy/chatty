import { useEffect } from 'react';

function useLoadingObserver(isLoading, setMessages){
    useEffect(() => {
        if(isLoading){
            setMessages((messages)=>[
                ...messages,
                {
                    role: 'bot',
                    message: 'Typing...',
                    status: 'loading'
                }
            ])
        }

        if(!isLoading){
            // remove loading message
            setMessages((messages)=>messages.filter(message => message.status !== 'loading'));
        }
    }, [isLoading, setMessages]);
}

export default useLoadingObserver