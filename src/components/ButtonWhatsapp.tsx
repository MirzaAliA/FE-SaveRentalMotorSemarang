import "../index.css"

type ButtonWhatsappProps = {
    variant?: 'primary' | 'secondary';
    size?: 'x-sm' | 'sm' | 'md' | 'lg';
    children: React.ReactNode;
}

const Button = ({
    variant = 'primary',
    size = 'md',
    children,
}: ButtonWhatsappProps) => {
    const className = `button button-${variant} button-size-${size}`;
    return <a href="https://wa.me/6281227454993?text=Mau%20sewa%20motor%20min"><div><button className={className}>{children}</button></div></a>;
}

export default Button;