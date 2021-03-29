const Footer = () => {
    return (
        <>
            <footer id="site-footer">
                <p>@PetMyPet</p>
            </footer>
            <style jsx>
                {`
                footer {
                    margin-top: auto;
                    text-align: center;
                    background: #234465;
                }

                footer p {
                    padding: 1rem 0;
                    font-weight: bold;
                    margin: 0rem;
                    color: white;
                }
                    
                `}
            </style>
        </>
    )
}

export default Footer;