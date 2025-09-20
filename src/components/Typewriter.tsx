import { useState, useEffect } from 'react'

interface TypewriterProps {
  words: string[]
  typeSpeed?: number
  deleteSpeed?: number
  pauseTime?: number
  className?: string
}

const Typewriter = ({ 
  words, 
  typeSpeed = 100, 
  deleteSpeed = 50, 
  pauseTime = 2000,
  className = ""
}: TypewriterProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[currentWordIndex]
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentText.length < currentWord.length) {
          setCurrentText(currentWord.substring(0, currentText.length + 1))
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => setIsDeleting(true), pauseTime)
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentText.substring(0, currentText.length - 1))
        } else {
          // Finished deleting, move to next word
          setIsDeleting(false)
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length)
        }
      }
    }, isDeleting ? deleteSpeed : typeSpeed)

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentWordIndex, words, typeSpeed, deleteSpeed, pauseTime])

  return (
    <span className={className}>
      {currentText}
      <span className="typewriter-cursor ml-1">|</span>
    </span>
  )
}

export default Typewriter
