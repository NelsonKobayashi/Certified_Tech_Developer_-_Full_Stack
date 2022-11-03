import './style.css';

const Header = ({ empresa }) => {

    return (
        <header>
            <h1>{empresa}</h1>
            <nav>
                <ul>
                    <li><a href="#">Sobre</a></li>
                    <li><a href="#">Portifólio</a></li>
                    <li><a href="#">Contatos</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
