
import logo from '../../assets/logo.svg';
import './header.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header(){
    const reserveSize = useSelector(state => state.reserve);

    return(
        <header className='conteiner'>
            <Link to="/">
                <img className='logo' src={logo} alt="Logo Reservas" />
            </Link>

            <Link className='reserva' to="/reservas">
                <div>
                    <strong>Minhas reservas</strong>
                    <span>{reserveSize.length} reservas</span>
                </div>
            </Link>
        </header>
    );
}