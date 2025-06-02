import { dataDaftarMotor } from "../hooks/dataDaftarMotorAPICall"
import CardDaftarMotor from "../components/CardDaftarMotor"
import Button from "../components/ButtonWhatsapp"
import { ArrowCircleUpRight } from "@phosphor-icons/react";
import { Link } from "react-router";

export default function ContentDaftarMotor() {
    return (
        <>
            <div className="daftarmotor page-daftarmotor" id="daftar-motor">
                <div className="daftarmotor-atas">
                    <h2>Pilihan Motor</h2>
                    <p>Untuk ketersediaan stok, hubungi <Button variant="primary" size="md">Whatsapp<ArrowCircleUpRight size={16} /></Button></p>
                </div>

                <div className="daftarmotor-bawah">
                    {dataDaftarMotor.map((itemDaftarMotor) => (
                        <CardDaftarMotor key={itemDaftarMotor.id} itemDaftarMotor={itemDaftarMotor} />
                    ))}
                </div>

                <div className="button-link button-daftarmotor">
                    <Link to="/daftar-motor">
                        Syarat Rental
                        <ArrowCircleUpRight size={16} />
                    </Link>
                </div>
            </div>
        </>
    )
}