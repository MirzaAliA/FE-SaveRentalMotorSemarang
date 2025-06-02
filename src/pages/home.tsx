import { ArrowCircleUpRight } from "@phosphor-icons/react";
import { Link } from "react-router";
import "../index.css"
import Button from "../components/ButtonWhatsapp";
import CardDaftarMotor from "../components/CardDaftarMotor";
import InfoCard from "../components/InfoCard";
import Card from "../components/Card";

import { dataKelebihanSaveRental } from "../hooks/dataKelebihanSaveRentalAPICall";
import { dataReviewPelanggan } from "../hooks/dataReviewPelangganAPICall";
import { dataProsesPemesanan } from "../hooks/dataProsesPemesananAPICall";
import { dataDaftarMotor } from "../hooks/dataDaftarMotorAPICall";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Scrollbar } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';




export default function Home() {
    return (
        <>
            <ContentJudul />
            <ContentKelebihan />
            <ContentDaftarMotor />
            <ContentProsesPemesanan />
            <ContentReview />
        </>
    )
}



function ContentJudul() {
    return (
        <>
            <div className="grid-judul">
                <div className="grid-judul-kiri">
                    <img src="LogoBig.png" alt="" />
                </div>

                <div className="grid-judul-kanan">
                    <h2>Save Rental Motor Semarang</h2>

                    <hr />

                    <p className="paragraf-judul-lg">Sejak berdiri pada tahun 2015, rental motor kami telah menjadi
                        pilihan terpercaya bagi wisatawan, pekerja maupun mahasiswa yang
                        mencari layanan sewa motor yang aman, nyaman, dan terjangkau.
                        Dengan pengalaman lebih dari satu dekade, kami terus berkomitmen
                        menyediakan armada motor yang terawat dengan baik, proses pemesanan
                        yang mudah, serta pelayanan ramah yang mengutamakan kepuasan
                        pelanggan. Kepercayaan yang terus tumbuh dari pelanggan menjadi
                        bukti dedikasi kami dalam memberikan solusi transportasi terbaik
                        untuk kebutuhan harian maupun liburan Anda.</p>

                    <p className="paragraf-judul-sm">Sejak berdiri pada tahun 2015, rental motor kami telah menjadi
                        pilihan terpercaya bagi wisatawan, pekerja maupun mahasiswa yang
                        mencari layanan sewa motor yang aman, nyaman, dan terjangkau.
                    </p>

                    <Button variant="primary" size="lg">Whatsapp<ArrowCircleUpRight size={16} /></Button>
                </div>
            </div>
        </>
    )
}

function ContentKelebihan() {
    return (
        <>
            <div className="grid-kelebihan">
                <div className="grid-kelebihan-atas">
                    <h2>Mengapa harus sewa motor di Save Rental?</h2>
                </div>
                <div className="grid-kelebihan-bawah">
                    <Swiper
                        modules={[Scrollbar]}
                        scrollbar={{ draggable: true }}
                        className="swiper-kelebihan"
                        breakpoints={{
                            0: {
                                slidesPerView: 0.5,
                                spaceBetween: 40,
                            },
                            320: {
                                centeredSlides: true,
                                slidesPerView: 1,
                                spaceBetween: 40,
                            },
                            340: {
                                centeredSlides: true,
                                slidesPerView: 1.2,
                                spaceBetween: 40,
                            },
                            540: {
                                centeredSlides: true,
                                slidesPerView: 1.5,
                                spaceBetween: 40,
                            },
                            870: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                            1150: {
                                slidesPerView: 2.5,
                                spaceBetween: 70
                            },
                            1300: {
                                slidesPerView: 3.5,
                                spaceBetween: 90
                            }
                        }}
                    >
                        {dataKelebihanSaveRental.map((item) => (
                            <SwiperSlide key={item.id}>
                                <Card variant="kelebihan" size="md">
                                    <InfoCard {...item} variant="kelebihan" />
                                </Card>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </>
    )
}
function ContentDaftarMotor() {
    return (
        <>
            <div className="daftarmotor" id="daftar-motor">
                <div className="daftarmotor-atas">
                    <h2>Pilihan Motor</h2>
                    <p>Untuk ketersediaan stok, hubungi <Button variant="primary" size="md">Whatsapp<ArrowCircleUpRight size={16} /></Button></p>
                </div>

                <div className="daftarmotor-bawah">
                    {dataDaftarMotor.slice(0, 2).map((itemDaftarMotor) => (
                        <CardDaftarMotor key={itemDaftarMotor.id} itemDaftarMotor={itemDaftarMotor} />
                    ))}
                </div>

                <div className="button-link button-daftarmotor">
                    <Link to="/daftar-motor">
                        Pilihan Motor Lainnya
                        <ArrowCircleUpRight size={16} />
                    </Link>
                </div>
            </div>
        </>
    )
}

function ContentProsesPemesanan() {
    return (
        <>
            <div className="prosespemesanan">
                <h2>Proses Layanan Pemesanan</h2>
                <div className="card-outer-prosespemesanan">
                    {dataProsesPemesanan.map((item) => (
                        <Card key={item.id} variant="pemesanan" size="md">
                            <InfoCard {...item} variant="pemesanan" />
                        </Card>
                    ))}
                </div>
                <a href="">
                    <h3 className="button-link button-syaratketentuan">
                        Syarat dan Ketentuan Rental <ArrowCircleUpRight size={16} />
                    </h3>
                </a>
            </div>
        </>
    )
}

function ContentReview() {
    return (
        <>
            <div className="review-lg">
                <h2>Apa Kata Para Pelanggan Kami?</h2>
                <div className="card-outer-review">
                    {dataReviewPelanggan.map((item) => (
                        <Card key={item.id} variant="review" size="md">
                            <InfoCard {...item} variant="review" />
                        </Card>
                    ))}
                </div>
                <a href="">
                    <h3 className="button-link button-reviewgooglemaps">Review Google Maps <ArrowCircleUpRight size={16} /></h3>
                </a>
                <h3 className="linkpemesanan">Pemesanan melalui... <Button variant="primary" size="lg">Whatsapp<ArrowCircleUpRight size={16} /></Button></h3>
            </div>

            <div className="review-sm">
                <div className="review-atas">
                    <h2>Apa Kata Para Pelanggan Kami?</h2>
                </div>
                <div className="review-bawah">
                    <div className="card-outer-review">
                        <Swiper
                            modules={[Pagination, Autoplay]}
                            pagination={{ clickable: true }}
                            centeredSlides={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            className="swiper-review"
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                    spaceBetween: 30
                                },
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 30
                                },
                                540: {
                                    slidesPerView: 1,
                                    spaceBetween: 30
                                },
                                680: {
                                    slidesPerView: 1,
                                    spaceBetween: 40
                                },
                            }}
                        >
                            {dataReviewPelanggan.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <Card variant="review" size="md">
                                        <InfoCard {...item} variant="review" />
                                    </Card>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
                <a href="https://maps.app.goo.gl/3jADKew7QAU7Zu5dA">
                    <h3 className="button-link button-reviewgooglemaps">Review Google Maps <ArrowCircleUpRight size={16} /></h3>
                </a>
                <h3 className="linkpemesanan">Pemesanan melalui... <Button variant="primary" size="sm">Whatsapp<ArrowCircleUpRight size={16} /></Button></h3>
            </div>
        </>
    )
}