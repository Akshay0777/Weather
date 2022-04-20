import React from 'react'

export default function Footer() {
    return (
        <div>
            <footer className="text-center text-lg-start bg-light text-muted">
                
                <section
                    className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
                >
                    
                    <div className="me-5 d-none d-lg-block">
                    <span>Get connected with us on social networks:</span>
                    </div>
                    

                    
                    <div>
                    <a href="https://www.instagram.com/pawar_akshay07/" target="_blank" className="me-4 text-reset">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/akshay-pawar-51061019b/" target="_blank" className="me-4 text-reset">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/Akshay0777" target="_blank" className="me-4 text-reset">
                        <i className="fab fa-github"></i>
                    </a>
                    </div>
                    
                </section>
            </footer>
        </div>
    )
}
