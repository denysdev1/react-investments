import styles from "./FormActions.module.css";

export const FormActions = ({ handleReset }) => (
  <p className={styles.actions}>
    <button type="reset" className={styles.buttonAlt} onClick={handleReset}>
      Reset
    </button>
    <button type="submit" className={styles.button}>
      Calculate
    </button>
  </p>
);
