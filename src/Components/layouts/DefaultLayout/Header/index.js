import styles from './Header.scss';
import classNames from 'classnames';

const cx = classNames.bind(styles);

function Header() {
  return (
    <>
      <div className={cx('wraps')}>
        <div className={cx('inner')}>
          {/* Logo */}
          {/* Menu */}
        </div>
      </div>
    </>
  );
}

export default Header;
