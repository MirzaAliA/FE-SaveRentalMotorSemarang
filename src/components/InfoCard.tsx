import { CardRequiredProps } from "../types/cardRequiredPropsTypes"
import { Star } from "@phosphor-icons/react";

export default function InfoCard({ id, title, description, img, variant, stars }: CardRequiredProps) {

    return (
        <>
            {variant == 'review' && (<>
                <p>{description}</p>
                <img src={img} alt="" />
                <h3>{title}</h3>
                <div className="card-stars">{typeof stars === 'number' && Array.from({ length: stars }).map((_, i) => (
                    <Star weight="fill" color="#F77F00" key={i} size={16} />
                ))}</div>
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