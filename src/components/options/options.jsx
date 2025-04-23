import styles from './options.module.css'

const Options = ({ onUpdateFeedback, onResetFeedback }) => {
  return (
    <div className={styles.options}>
      <button className={styles.btn} onClick={() => onUpdateFeedback('good')}>
        Good
      </button>
      <button
        className={styles.btn}
        onClick={() => onUpdateFeedback('neutral')}>
        Neutral
      </button>
      <button className={styles.btn} onClick={() => onUpdateFeedback('bad')}>
        Bad
      </button>
      <button className={styles.btn} onClick={onResetFeedback}>
        Reset
      </button>
    </div>
  )
}

export default Options
