export type DataDaftarMotor = {
    id: number;
    titleMotor: string;
    hargaMotor: number;
    imgMotor: string;
    tahunMotor: string;
    fasilitas: {
        jumlahHelm: number;
        jumlahJasHujan: number;
    };
};

export type CardDaftarMotorProps = {
    itemDaftarMotor: DataDaftarMotor;
};
