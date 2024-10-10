import styles from '../styles/Home.module.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faTwitter} from '@fortawesome/free-solid-svg-icons';

function Home() {
  return (
    <div className={styles.contenta}>
          <div className={styles.contentleft}>
          </div>

          <div className={styles.contentright}>

              <div className={styles.twittericon}>
              {/* <FontAwesomeIcon icon={faTwitter} style={{color :"#ffffff"}} rotation={180}/> */}
              </div>

              <div className={styles.contentlog}>
                <h1 className={styles.title}>See what's happening</h1>
                <div className={styles.mainleft}>
                  <h3 className={styles.h3}>Join Hachatweet today.</h3>
                  <button id="register">Sign up</button>
                  <p className={styles.p}>Already have on account?</p>
                  <button id="connection">Sign in</button>
                </div>
              </div>

          </div>
    </div>
  );
}

export default Home;
