import styles from './videoSuggestions.module.css';
import imgHolder from '../assets/imgHolder.jpg';

export function VideoSuggestions() {
  return (
    <div className={styles.videoSuggestions}>
      <div className={styles.videoSuggestion}>
        <img src={imgHolder} className={styles.videoImg}/>
        <div className={styles.videoDescription}>
          <div className={styles.videoTitle}>Title</div>
          <div className={styles.videoUploader}>Uploader</div>
          <div className={styles.videoLength}>00:00</div>
        </div>
      </div>
    </div>
  );
};
