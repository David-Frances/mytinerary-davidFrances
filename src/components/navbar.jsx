

import userIcon from '/userIcon.png'
import Button from './button'
function Navbar() {


  return (
    <>
    <navbar className="Navbar">
    <div>
        <h2>MyTinerary</h2>
    </div>
    <div>
        <Button Title="Home"></Button>
        <Button Title="Cities"></Button>
        <button ><img src={userIcon}/>Login</button>
      
    </div>
    </navbar>
    </>
  )
}

export default Navbar
