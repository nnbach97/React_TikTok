import Header from './Header';

function HeaderOnly({ children }) {
  return (
    <>
      <div className="wrap">
        <Header />
        <div>{children}</div>
      </div>
    </>
  );
}

export default HeaderOnly;
