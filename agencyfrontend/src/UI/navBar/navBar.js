import { useContext } from 'react';
import AuthContext from '../../store/authContext';
import NavItem from './NavItem';

const navbar = () => {
  const authContext = useContext(AuthContext);

  return (
    <nav>
      <ul className="flex bg-sky-900 justify-center items-center">
        <NavItem to="/">Home</NavItem>
        <NavItem to="/tours">Tours</NavItem>
        <NavItem to="/Hotels">hotels</NavItem>
        {!authContext.token && <NavItem to="/signin">Sign In</NavItem>}
        {!authContext.token && <NavItem to="/register">Register</NavItem>}
      </ul>
    </nav>
  );
};

export default navbar;
