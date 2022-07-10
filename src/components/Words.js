import React, { useEffect } from 'react'
import useWords from '../hooks/useWords';


export default function Words({ solution}) {
  const {currentGuess, handleKeyup} = useWords(solution);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);

    return () => window.removeEventListener("keyup", handleKeyup);
  }, [handleKeyup])

  return (
    <div>Words</div>
  )
}
