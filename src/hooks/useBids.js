// import { useEffect, useState } from "react";

// const UseBids = (houseId) => {
//     const [bids, setBids] = useState([]);
//     const { get, loadingState } = useGetRequests(`/api/bids/${houseId}`);

//     useEffect(() => {
//         const fetchBids = async () => {
//             const bids = await get();
//             setBids(bids);
//         };
//         fetchBids();
//     }, [get]);
// }

// export default UseBids;