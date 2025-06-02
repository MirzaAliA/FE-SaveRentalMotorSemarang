import "../index.css"
import CardRulesRental from "../components/CardRulesRental";
import { dataRulesRental } from "../hooks/dataRulesRentalAPICall";

export default function RulesRental() {
    return (<>

        <div className="outer-rulesrental">
            <h2>Peraturan Save Rental Motor</h2>
            {dataRulesRental.map((dataRulesRental) => (
                <CardRulesRental key={dataRulesRental.id} dataRulesRental={dataRulesRental}/>
            ))}
        </div>
    </>)
}