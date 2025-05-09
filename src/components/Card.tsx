import '../index.css';

export type CardProps = {
    variant?: 'kelebihan' | 'pemesanan';
    size?: 'sm' | 'md' | 'lg';
    children?: React.ReactNode;
}

const Card = ({
    variant,
    size,
    children
}: CardProps) => {
    const className = `card card-${variant} card-size-${size}`;
    return <div className={className}>{children}</div>;
}

export default Card;