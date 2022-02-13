import React from 'react'

function Footer() {
    const d = new Date();
    const year = d.getFullYear();

    return (
        <footer className="footer">
            <p className="copyright">@{year} Gamehoarder</p>
        </footer>
    )
}

export default Footer
