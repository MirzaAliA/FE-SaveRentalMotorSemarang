import { Triangle } from "@phosphor-icons/react";
import { CardDataRulesRentalProps } from "../types/cardDataRulesRentalTypes";
import { useState } from "react";

export default function CardRulesRental({ dataRulesRental }: CardDataRulesRentalProps) {

    const [dropdown, setDropdown] = useState<boolean>(false)

    return (<>
        <div className="bar-title" onClick={() => setDropdown(!dropdown)}>
            <h3 className="bar-title">
                {dataRulesRental.title}
            </h3>
            <div className={dropdown ? "triangle-rulesrental-close" : "triangle-rulesrental-open"}>
                <Triangle size={28} weight="fill" color="#FCF8F3" />
            </div>
        </div>
        <div className={dropdown ? "bar-content" : "bar-content-hide"}>
            {dataRulesRental.description.map((desc) => (
                <p key={desc.id} className={dropdown ? "bar-content" : "bar-content-hide"}>{desc.id}. {desc.desc}</p>
            ))}
        </div>
    </>)
}