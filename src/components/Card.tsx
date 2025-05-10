import '../index.css';

export type CardProps = {
    variant?: 'kelebihan' | 'pemesanan' | 'review';
    size?: 'sm' | 'md' | 'lg';
    children?: React.ReactNode;
}

const Card = ({
    variant,
    size,
    children
}: CardProps) => {
    const className = `card card-${variant} card-size-${size}`;
    const classNameOuter = `card-outer card-outer-${variant}`;
    return <div className={classNameOuter}><div className={className}>{children}</div></div>;
}

export default Card;