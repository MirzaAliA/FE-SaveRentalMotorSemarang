import "../index.css"

type ButtonWhatsappProps = {
    variant?: 'primary' | 'secondary';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
}

const Button = ({
    variant = 'primary',
    size = 'md',
    children,
}: ButtonWhatsappProps) => {
    const className = `button button-${variant} button-size-${size}`;
    return <button className={className}>{children}</button>
}

export default Button;