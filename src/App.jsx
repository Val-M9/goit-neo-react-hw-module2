import { useState, useEffect } from 'react'
import { Description, Options, Feedback, Container } from './components'

function App() {
  const [feedback, setFeedback] = useState(
    JSON.parse(localStorage.getItem('feedback')) || {
      good: 0,
      neutral: 0,
      bad: 0,
    }
  )

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback))
  }, [feedback])

  const handleUpdateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }))
  }

  const handleResetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    })
  }

  const totalFeedback = Object.values(feedback).reduce(
    (acc, value) => acc + value,
    0
  )

  const positiveFeedback =
    totalFeedback > 0 ? Math.round((feedback.good / totalFeedback) * 100) : 0

  return (
    <Container>
      <Description />
      <Options
        onUpdateFeedback={handleUpdateFeedback}
        onResetFeedback={handleResetFeedback}
      />
      <Feedback
        feedback={feedback}
        totalFeedback={totalFeedback}
        positiveFeedback={positiveFeedback}
      />
    </Container>
  )
}

export default App
