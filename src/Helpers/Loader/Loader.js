import styles from './Loader.module.scss';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';

export default function Loader() {
  return createPortal(
    <CSSTransition
      in={true}
      appear={true}
      timeout={400}
      classNames={styles}
      unmountOnExit
    >
      <div className={styles.wrapper}>
        <div className={styles.loader}></div>
      </div>
    </CSSTransition>,
    document.querySelector('#loader'),
  );
}
