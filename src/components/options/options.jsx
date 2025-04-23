import styles from './options.module.css'

const Options = ({ onUpdateFeedback, onResetFeedback, totalFeedback }) => {
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
      {totalFeedback > 0 && (
        <button className={styles.btn} onClick={onResetFeedback}>
          Reset
        </button>
      )}
    </div>
  )
}

export default Options
