function Header() {
    return (
        <nav className="flex-row">

            <div className="izn2r">

                <div>
                    <button>
                        <a className="rcb9g" href="/">
                            <h1>Logo</h1>
                        </a>
                    </button>
                </div>

                <div className="flex-row">
                    <a className="rcb9g" href="/docs">
                        <span className="n4kd3">Docs</span>
                    </a>
                    <a className="rcb9g" href="/career">
                        <span className="n4kd3">Career</span>
                    </a>
                </div>
            </div>

            <div className="flex-row">
                <a className="rcb9g" href="/login">
                    <span className="n4kd3">Log in</span>
                </a>
                <a className="bjae7" href="/signup">
                    <span className="n4kd3">Sign up</span>
                </a>
            </div>

        </nav>
    );
}

export default Header;