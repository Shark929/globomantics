import CurrencyFormatter from "@/helpers/currencyFormatter";
import navValues from "@/helpers/navValues";
import React, { useContext } from "react";
import { navigationContext } from "./app";

const HouseRow = ({ house }) => {

    const { navigate } = useContext(navigationContext);
    return (
        <tr onClick={() => navigate(navValues.house, house)}>
            <td>{house.address}</td>
            <td>{house.state}</td>
            {
                house.price && (<td className={`${house.price < 2000000 ? "text-primary" : ""}`}>{CurrencyFormatter.format(house.price)}</td>)
            }
        </tr>
    );
}


export default HouseRow;