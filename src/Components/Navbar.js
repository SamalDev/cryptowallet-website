import '../Style/Navbar.css';

function Navbar() {
  return (
    <div className="navbar-container">
      <div className='navbar-left'>
        <h5>Crypto Wallet</h5>
      </div>
      <div className='navbar-right'>
        <h5>Profile</h5>
      </div>
    </div>
  );
}

export default Navbar;