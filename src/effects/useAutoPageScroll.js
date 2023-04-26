import React, { useEffect } from 'react'

function useAutoPageScroll(ref, children) {
  useEffect(() => {
    if(ref.current)
        ref.current.scrollTo(0, ref.current.scrollHeight);
  }, [children, ref]);
}

export default useAutoPageScroll