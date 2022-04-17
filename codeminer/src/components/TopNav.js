import {Link, Outlet} from 'react-router-dom'
import {Icons} from '../icons/Icons' ;

const topNav = {
  background: '#F1F5F9',
  width: '80%',
  margin: '0 auto',
  borderRadius: '50px'
}

const pill = {
  borderRadius: '50px',
}

const backButton = {
  borderRadius: '50px',
  padding: '0px 30px ',
  height: '42px'
}


const link = {
  color: 'black',
  textDecoration: 'none'
}


const linkPill = {
  borderRadius: '50px',
  color: 'black',
  textDecoration: 'none'
}


function Profile() {
  return (
    <>
<div class="wrap">
    <ul class="nav nav-pills mb-3 nav-fill " id="pills-tab" role="tablist" style={topNav}>
<li class="nav-item "  role="presentation">

  <Link to="/"  class="nav-link"  style={linkPill}> {Icons.architecture()} Архитектура</Link>

</li>
<li class="nav-item " role="presentation">

  <Link to="/code"  style={linkPill} class="nav-link">Код</Link>

</li>
<li class="nav-item " role="presentation">

  <Link to="/documentation" style={linkPill}  class="nav-link">Документация</Link>

</li>
<li class="nav-item " role="presentation">

<Link to="/testing" style={linkPill} class="nav-link">Тестирование</Link>

</li>
<li class="nav-item " role="presentation">

  <Link to="/settings" style={linkPill} class="nav-link">Настройки</Link>

</li>
</ul>
<button type="button" class="btn btn-light" style={backButton}></button>
</div>


<Outlet />

<footer>footer</footer>

    </>
  )
}

export default Profile
