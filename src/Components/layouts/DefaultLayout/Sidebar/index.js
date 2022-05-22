import styles from './Sidebar.scss';
import classNames from 'classnames';

const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <>
      <div className={cx('sidebar')}>
        <h2>Sidebar</h2>
      </div>
    </>
  );
}

export default Sidebar;
