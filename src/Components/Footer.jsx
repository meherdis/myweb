import React from 'react'

const Footer = () => {
    const year =new Date().getFullYear();
    return (
        <>
            <footer  className="bg-light text-center">
                <p> Copyright {year} myweb </p>
            </footer>
        </>
    )
}

export default Footer
