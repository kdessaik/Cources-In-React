export  function Navbar({function1,function2,function3,function4}) {
  
function1=()=>{return console.log('Dessai Kibeho')}
    return (
        
    <nav className="navbar navbar-expand-lg navbar-light bg-light">

        <img src={require('./kdk.jpg')} width='10%' />
    <a className="navbar-brand" href="https://github.com/kdessaik/kdk">Codes</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <a className="nav-link" href="#" onClick={function1()}>Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" onClick={function2}>About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"onClick={function3}>Contacts</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" onClick={function4} href="#">What we do</a>
        </li>
      </ul>
    </div>
  </nav>
      );
}


 

