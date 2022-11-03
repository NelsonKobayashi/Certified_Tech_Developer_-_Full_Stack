import './style.scss';

const Header = ({ empresa }) => {

    return (
        <header>
            <h1>{empresa}</h1>
            <nav>
                <ul>
                    <li><a href="#banner">Sobre</a></li>
                    <li><a href="#projetinhos">Portifólio</a></li>
                    <li><a href="#contato">Contatos</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
