import { useState } from "react";
import { List, X, ArrowCircleUpRight, WhatsappLogo, InstagramLogo, ArrowArcRight, Star } from "@phosphor-icons/react";
import "./index.css"
import Button from "./components/ButtonWhatsapp";
import Card from "./components/Card";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';


type CardRequiredProps = {
  id?: number;
  img: string;
  title: string;
  description: string;
  variant?: 'pemesanan' | 'kelebihan' | 'review';
}

type CardsProps = {
  item: CardRequiredProps;
}

// mock data kelebihan save rental
const dataKelebihanSaveRental: CardRequiredProps[] = [
  {
    id: 1,
    title: 'Jaminan Harga Termurah',
    img: 'JaminanHargaTermurah.png',
    description: 'Dapatkan jaminan harga termurah kalau sewa motor di Save Rental Semarang.'
  },
  {
    id: 2,
    title: 'Unit Bersih dan Terawat',
    img: 'UnitBersihdanTerawat.png',
    description: 'Sewa di Save Rental Semarang akan mendapatkan unit dan fasilitas yang bersih dan terawat.'
  },
  {
    id: 3,
    title: 'Keamanan Terjaga',
    img: 'KeamananTerjaga.png',
    description: 'Kamu tidak perlu khawatir, keamanan data pelanggan kami jamin kerahasiannya dan tidak akan disalahgunakan.'
  },
  {
    id: 4,
    title: 'Respon Cepat',
    img: 'ResponCepat.png',
    description: 'Chat kamu akan dibalas as fast as possible alias ASAP oleh admin kami.'
  },
]

// mock data proses pemesanan
const dataProsesPemesanan: CardRequiredProps[] = [
  {
    id: 1,
    title: 'Pesan melalui Whatsapp',
    img: 'PesanMelaluiWhatsapp.png',
    description: 'Pelanggan dapat menghubungi admin Save Rental Motor Semarang melalui Whatsapp 081227454993 atau bisa klik link berikut untuk dapat menanyakan ketersediaan stok dan menyewa motor. Save Rental hanya melayani melalui Whatsapp.'
  },
  {
    id: 2,
    title: 'Terjadi Persetujuan Sewa',
    img: 'TerjadiPersetujuanSewa.png',
    description: 'Ketika pelanggan sudah mendapatkan calon motor yang akan disewa dan pemilik rental menyetujui. Maka terjadi persetujuan sewa menyewa antar kedua belah pihak.'
  },
  {
    id: 3,
    title: 'Pelanggan Menerima Motor',
    img: 'PelangganMenerimaMotor.png',
    description: 'Ketika telah terjadi persetujuan sewa menyewa antara penyewa dan pemilik rental, maka penyewa menerima motor dan dapat menggunakannya sesuai dengan syarat dan ketentuan yang telah disepakati.'
  },
]

//mock data review pelanggan
const dataReviewPelanggan: CardRequiredProps[] = [
  {
    id: 1,
    title: 'Andi Fajar',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    img: 'AndiFajar.jpg'
  },
  {
    id: 2,
    title: 'Joko Susanto',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    img: 'JokoSusanto.jpg'
  },
  {
    id: 3,
    title: 'Franklin Amotey',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    img: 'FranklinAmotey.jpg'
  }
]

//mock data daftar motor
type DataDaftarMotor = {
  id: number;
  titleMotor: string;
  hargaMotor: number;
  imgMotor: string;
  tahunMotor: string;
  fasilitas: {
    jumlahHelm: number;
    jumlahJasHujan: number;
  }
}

const dataDaftarMotor: DataDaftarMotor[] = [
  {
    id: 1,
    titleMotor: 'Honda Beat',
    hargaMotor: 65,
    imgMotor: 'BeatLama.png',
    tahunMotor: '<2016',
    fasilitas: {
      jumlahHelm: 2,
      jumlahJasHujan: 2
    }
  },
  {
    id: 2,
    titleMotor: 'Honda Beat',
    hargaMotor: 70,
    imgMotor: 'BeatBaru.png',
    tahunMotor: '>2017',
    fasilitas: {
      jumlahHelm: 2,
      jumlahJasHujan: 2
    }
  },
  {
    id: 3,
    titleMotor: 'Yamaha Mio',
    hargaMotor: 65,
    imgMotor: 'MioM3.png',
    tahunMotor: '<2017',
    fasilitas: {
      jumlahHelm: 2,
      jumlahJasHujan: 2
    }
  },
  {
    id: 4,
    titleMotor: 'Honda Vario',
    hargaMotor: 75,
    imgMotor: 'VarioLama.png',
    tahunMotor: '<2016',
    fasilitas: {
      jumlahHelm: 2,
      jumlahJasHujan: 2
    }
  },
  {
    id: 5,
    titleMotor: 'Honda Vario',
    hargaMotor: 80,
    imgMotor: 'VarioBaru.png',
    tahunMotor: '>2018',
    fasilitas: {
      jumlahHelm: 2,
      jumlahJasHujan: 2
    }
  },
  {
    id: 6,
    titleMotor: 'Yamaha Nmax',
    hargaMotor: 100,
    imgMotor: 'NmaxLama.png',
    tahunMotor: '2016',
    fasilitas: {
      jumlahHelm: 2,
      jumlahJasHujan: 2
    }
  },
  {
    id: 7,
    titleMotor: 'Yamaha Nmax',
    hargaMotor: 125,
    imgMotor: 'NmaxBaru.png',
    tahunMotor: '2020',
    fasilitas: {
      jumlahHelm: 2,
      jumlahJasHujan: 2
    }
  },
  {
    id: 8,
    titleMotor: 'Honda PCX',
    hargaMotor: 125,
    imgMotor: 'Pcx.png',
    tahunMotor: '2022',
    fasilitas: {
      jumlahHelm: 2,
      jumlahJasHujan: 2
    }
  },
]

type CardDaftarMotorProps = {
  itemDaftarMotor: DataDaftarMotor;
}

export default function App() {


  return (<>
    <Navbar />
    <ContentJudul />
    <ContentKelebihan />
    <ContentDaftarMotor />
    <ContentProsesPemesanan />
    <ContentReview />
  </>)
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
          <a href="#">Home</a>
        </li>
        <li className="navbar-items">
          <a href="#daftar-motor">Daftar Motor</a>
        </li>
        <li className="navbar-items">
          <a href="">Syarat Rental</a>
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
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 40
              },
              320: {
                slidesPerView: 1.2,
                spaceBetween: 40
              },
              540: {
                slidesPerView: 1.5,
                spaceBetween: 40
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
          {dataDaftarMotor.map((itemDaftarMotor) => (
            <CardDaftarMotor key={itemDaftarMotor.id} itemDaftarMotor={itemDaftarMotor} />
          ))}
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
          <h3 className="button-syaratketentuan">
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
      <div className="review">
        <h2>Apa Kata Para Pelanggan Kami?</h2>
        <div className="card-outer-review">
          {dataReviewPelanggan.map(( item ) => (
            <Card key={item.id}>
              <InfoCard {...item} variant="review" />
            </Card>
          ))}
        </div>
      </div>
    </>
  )
}

function InfoCard({ id, title, description, img, variant }: CardRequiredProps) {
  return (
    <>
      {variant == 'review' && (<>
        <p>{description}</p>
        <img src={img} alt="" />
        <h3>{title}</h3>
        <div className="card-stars"><Star size={16} /></div>
      </>)}

      {variant == 'pemesanan' && (<>
        <img src={img} alt="" />
        <h3>{variant == 'pemesanan' && id + '. '}{title}</h3>
        <p>{description}</p>
      </>)}

      {variant == 'kelebihan' && (<>
        <img src={img} alt="" />
        <h3>{title}</h3>
        <p>{description}</p>
      </>)}

    </>
  )
}

function CardDaftarMotor({ itemDaftarMotor }: CardDaftarMotorProps) {
  return (
    <>
      <div className="card-daftarmotor">
        <div className="image-motor">
          <img src={itemDaftarMotor.imgMotor} alt="" />
          <p className="tahun-motor">Tahun {itemDaftarMotor.tahunMotor}</p>
        </div>
        <div className="desc-motor">
          <h3>{itemDaftarMotor.titleMotor}</h3>
          <p>{itemDaftarMotor.hargaMotor}k/hari <br></br> Helm {itemDaftarMotor.fasilitas.jumlahHelm} Jas Hujan {itemDaftarMotor.fasilitas.jumlahJasHujan}</p>
        </div>
        <div className="buttonwhatsapp">
          <Button variant="primary" size="sm">Whatsapp<ArrowCircleUpRight size={16} /></Button>
        </div>
      </div>
    </>
  )
}



