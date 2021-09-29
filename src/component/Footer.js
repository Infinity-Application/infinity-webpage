import React from 'react'
import './Footer.css'

export default function Footer() {
    return (
        <div className='outer-div'>

            <footer class="footer-distributed">

                <div class="footer-right">

                    <a href="#"><i class="fa fa-facebook"></i></a>
                    <a href="#"><i class="fa fa-twitter"></i></a>
                    <a href="#"><i class="fa fa-linkedin"></i></a>
                    <a href="#"><i class="fa fa-github"></i></a>

                </div>

                <div class="footer-left">

                    <p class="footer-links">
                        <a class="link-1" href="#">Home</a>

                        <a href="#">Blog</a>

                        <a href="#">About</a>

                        <a href="#">Faq</a>
                    </p>

                    <p>Infinity app - CodeFellows - ASAC - LTUC &copy; 2021</p>
                </div>

            </footer>
        </div>
    )
}
