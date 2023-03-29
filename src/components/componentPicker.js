import navValues from "@/helpers/navValues";
import HouseDetail from "./houseDetail";
import HouseList from "./houseList";
import HouseRow from "./houseRow";

const ComponentPicker = ({currentNavLocation}) => {
    switch(currentNavLocation){
        case navValues.home:
            return <HouseList/>
        case navValues.house:
            return <HouseDetail/>
        default:
            return (
                <h3>No component for navigation value {currentNavLocation} found</h3>
            );
    }
}
 
export default ComponentPicker;