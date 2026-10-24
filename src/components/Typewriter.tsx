import { useEffect, useState } from 'react'

type Props = {
  words: string[]
}

export default function Typewriter({ words }: Props) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[index]
    let delay = deleting ? 40 : 90
    if (!deleting && text === current) delay = 1500

    const timeout = setTimeout(() => {
      if (!deleting && text === current) {
        setDeleting(true)
      } else if (deleting && text === '') {
        setDeleting(false)
        setIndex((index + 1) % words.length)
      } else {
        setText(current.slice(0, text.length + (deleting ? -1 : 1)))
      }
    }, delay)

    return () => clearTimeout(timeout)
  }, [text, deleting, index, words])

  return (
    <span>
      {text}
      <span className="animate-blink text-emerald-400">|</span>
    </span>
  )
}