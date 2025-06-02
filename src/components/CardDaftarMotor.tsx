import { ArrowCircleUpRight } from "@phosphor-icons/react";
import { CardDaftarMotorProps } from "../types/cardDataDaftarMotorTypes";
import Button from "./ButtonWhatsapp"

export default function CardDaftarMotor({ itemDaftarMotor }: CardDaftarMotorProps) {
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
                <div className="buttonwhatsapp-sm">
                    <Button variant="primary" size="sm">Whatsapp<ArrowCircleUpRight size={10} /></Button>
                </div>
                <div className="buttonwhatsapp-x-sm">
                    <Button variant="primary" size="x-sm">Whatsapp<ArrowCircleUpRight size={10} /></Button>
                </div>
            </div>
        </>
    )
}