import styles from './Header.scss';
import classNames from 'classnames';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Header() {
  return (
    <>
      <div className={cx('wraps')}>
        <div className={cx('inner')}>
          <div className={cx('inner-logo')}>
            <img src={images.logo} alt="tiktok" />
          </div>
          <div className={cx('search')}>
            <input type="text" placeholder="Search Account" />
            <button className={cx('clear')}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <button className={cx('loading')}>
              <FontAwesomeIcon icon={faSpinner} />
            </button>
            <button className={cx('search-btn')}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
          <div className={cx('actions')}>abc</div>
        </div>
      </div>
    </>
  );
}

export default Header;
