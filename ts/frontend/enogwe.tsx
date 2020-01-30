
import ReactOnRails from 'react-on-rails';
import { NavBar } from './components/NavBar/NavBar';
// render(
//     (
//         <Fragment>
//             <NavBar />
//             <Router>
//                 <Home path="/" />
//             </Router>

//         </Fragment>
//     ),
//     document.getElementById('enogwe')
// )
const Nav = (props: any) => <NavBar {...props} />

ReactOnRails.register({ Nav });
// render(<NavBar />, document.getElementById('enogwe'))
