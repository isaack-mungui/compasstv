import React from "react";

import logo from './mdi_compass-rose.png'

import './Footer.css'

function Footer() {
    return (
        <div>
            <footer class="text-center text-white">
                <div class="container p-4">
                    <section class="mb-4">
                        <img src={logo} id="footer-logo" alt="logo" />
                        <a class="footer-link" href="#!">
                            @chekicompass
                        </a>

                        <a class="footer-link" href="#!">
                            r/compass
                        </a>

                        <a class="footer-link" href="contact">
                            Contact Us
                        </a>

                        <a class="footer-link" href="career">
                            Jobs
                        </a>

                        <a class="footer-link" href="/faq">
                            FAQ
                        </a>

                        <a class="footer-link" href="/terms">
                            Terms of Service
                        </a>

                        <a class="footer-link" href="/privacy">
                            Privacy Policy
                        </a>

                        <a class="footer-link" href="/blogs">
                            Blog
                        </a>
                    </section>
                </div>
            </footer>
        </div>
    )
}

export default Footer