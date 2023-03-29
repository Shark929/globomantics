import CurrencyFormatter from "@/helpers/currencyFormatter";
import houseImage from '../helpers/house.jpg';
import Image from "next/image";
import { useContext } from "react";
import { navigationContext } from "./app";
// import Bids from "./bids";

const HouseDetail = () => {
    const { param: house } = useContext(navigationContext);
    return (
        <div className="row">
            <div className="col-6">
                <div className="row">
                    <Image src={houseImage} alt="house" className="img-fluid" />
                </div>
            </div>
            <div className="col-6">
                <div className="row mt-2">
                    <h5 className="col-12">{house.state}</h5>
                </div>
                <div className="mt-10">
                    <h2>{house.address}</h2>
                </div>
                <div className="mt-10 text-warning">
                    <h3>{CurrencyFormatter.format(house.price)}</h3>
                </div>
                <div className="mt-10 text-justify" >
                    <p>{house.description}</p>
                </div>
                {/* <Bids house={house} /> */}
            </div>
        </div>
    );
}

export default HouseDetail;