export type DataRulesRental = {
    id: number;
    title: string;
    description: {
        id: number;
        desc: string;
    }[];
};

export type CardDataRulesRentalProps = {
    dataRulesRental: DataRulesRental;
}