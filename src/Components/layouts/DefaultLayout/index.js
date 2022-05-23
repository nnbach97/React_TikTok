import Header from '../components/Header';
import Sidebar from './Sidebar';
import styles from './DefaultLayout.scss';
import classNames from 'classnames';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  return (
    <>
      <div className="wrap">
        <Header />
        <div className={cx('container')}>
          <Sidebar />
          <div className="content">{children}</div>
        </div>
      </div>
    </>
  );
}

export default DefaultLayout;
