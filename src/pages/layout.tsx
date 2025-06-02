import { useState } from "react";
import Button from "../components/ButtonWhatsapp";
import { List, X, ArrowCircleUpRight, WhatsappLogo, InstagramLogo, Envelope, Heart } from "@phosphor-icons/react";
import { Link, Outlet } from "react-router";
import "../index.css"


export default function Layout() {
    return (<>
        <Navbar />
        <Outlet />
        <Footer />
    </>
    )
}


function Navbar() {
    const [menuIcon, setMenuIcon] = useState<boolean>(false);


    return (<>
        <nav className="navbar fixed-top">
            <div className="navbar-logo">
                <a href="#">
                    <img src="Logo.png" alt="" />
                </a>
            </div>

            <div className={`menu-icon ${menuIcon ? "menu-icon-x" : "menu-icon-hamburg"}`} onClick={() => { setMenuIcon(!menuIcon) }}>
                {menuIcon ? <X size={32} /> : <List size={32} />}
            </div>

            <ul className={menuIcon ? "appear" : "hidden"}>
                <li className="navbar-items">
                    <Link to="/">Home</Link>
                </li>
                <li className="navbar-items">
                    <Link to="/daftar-motor">Daftar Motor</Link>
                </li>
                <li className="navbar-items">
                    <Link to="/syarat-rental">Syarat Rental</Link>
                </li>
                <li className="navbar-items">
                    <a href="">FAQ</a>
                </li>
                <li className="navbar-items menu-icon">
                    <Button variant="primary" size="md">Whatsapp<ArrowCircleUpRight size={16} /></Button>
                </li>
            </ul>

            <div className="navbar-button-hamburg">
                <Button variant="primary" size="lg">Whatsapp<ArrowCircleUpRight size={16} /></Button>
            </div>
        </nav>

    </>)
}

function Footer() {
    return (
        <>
            <div className="footer">
                <div className="footer-container">
                    <div className="footer-kiri">
                        <div className="maps-outer">
                            <div className="maps-inner">
                                <iframe className="iframe" loading="lazy" src="https://maps.google.com/maps?q=save+rental+motor&output=embed"></iframe>
                            </div>
                        </div>
                    </div>
                    <div className="footer-kanan">
                        <div className="footer-kanan-judul">
                            <h2>Save Rental Motor Semarang</h2>
                            <p>Sejak berdiri pada tahun 2015, rental motor kami telah menjadi pilihan terpercaya
                                bagi wisatawan, pekerja maupun mahasiswa yang mencari layanan sewa motor yang aman,
                                nyaman, dan terjangkau.
                            </p>
                        </div>
                        <div className="footer-kanan-kontak">
                            <h3>Kontak</h3>
                            <div className="footer-kontak-logo">
                                <a href="">
                                    <WhatsappLogo size={28} />
                                </a>
                                <a href="">
                                    <InstagramLogo size={28} />
                                </a>
                                <a href="">
                                    <Envelope size={28} />
                                </a>
                            </div>
                        </div>
                        <div className="footer-kanan-quicklinks">
                            <h3>Quick Links</h3>
                            <ul className="footer-quiclinks-ul">
                                <li className="footer-quicklinks">
                                    <a href="#">Home</a>
                                </li>
                                <li className="footer-quicklinks">
                                    <a href="#daftar-motor">Daftar Motor</a>
                                </li>
                                <li className="footer-quicklinks">
                                    <a href="">Syarat Rental</a>
                                </li>
                                <li className="footer-quicklinks">
                                    <a href="">FAQ</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-bawah">
                    <hr className="line-footer" />
                    <p className="creator">Created with&ensp; <Heart size={12} fill="red" /> &ensp;by Mirza Ali Abhipraya</p>
                </div>
            </div>
        </>
    )
}