import loadingStatus from "@/helpers/loadingStatus";
import useHouses from "@/hooks/useHouses";
import HouseRow from "./houseRow";
import LoadingIndicator from "./loadingIndication";

const HouseList = () => {
    const { houses, setHouses, loadingState } = useHouses();

    if (loadingState !== loadingStatus.loaded) {
        return <LoadingIndicator loadingState={loadingState} />
    }
    const addHouse = () => {
        setHouses([
            ...houses,
            {
                id: 3,
                address: "Banyan Valley, Kolombong",
                state: "Sabah",
                price: 1553000
            }
        ]);
    };

    return (
        <>
            <div className="row mb-2">
                <h5 className="themeFontColor text-center">
                    Houses currently on the market
                </h5>
            </div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Address</th>
                        <th>State</th>
                        <th>Asking Price</th>
                    </tr>
                </thead>
                <tbody>
                    {houses.map(h => <HouseRow house={h} key={h.id} />)}
                </tbody>
            </table>
            <button className="btn btn-primary" onClick={addHouse}>
                Add New List
            </button>
        </>
    );
}

export default HouseList;