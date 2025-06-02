export type CardRequiredProps = {
    id?: number;
    img: string;
    title: string;
    description: string;
    stars?: number;
    variant?: 'pemesanan' | 'kelebihan' | 'review';
}