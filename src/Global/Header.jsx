const Header = () => (
    <header className="bg-base-100 shadow-md">
        <nav className="navbar container mx-auto">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl" href="/">
                    UAC Website
                </a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
);

export default Header;