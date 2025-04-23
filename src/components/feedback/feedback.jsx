import styles from './feedback.module.css'

const Feedback = ({ feedback, totalFeedback, positiveFeedback }) => {
  return (
    <ul>
      {Object.entries(feedback).map(([key, value]) => (
        <li className={styles.feedbackField} key={key}>
          {key}: {value}
        </li>
      ))}
      <li className={styles.feedbackField}>Total: {totalFeedback} </li>
      <li className={styles.feedbackField}>Positive: {positiveFeedback}%</li>
    </ul>
  )
}

export default Feedback
