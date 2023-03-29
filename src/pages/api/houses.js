export default function handler(req, res) {
    res.status(200).json(
        [
            {
                id: 1,
                address: "Setia Eco Glades, Cyber 1, Setia Eco Glades, 63000 Cyberjaya",
                state: "Selangor",
                price: 1200000,
                description: "Setia Eco Glades is a premium housing development in Cyberjaya, Malaysia, offering luxurious and eco-friendly homes amidst beautiful green surroundings. The gated and guarded community features top-class facilities and amenities including a clubhouse, swimming pool, gym, and parks, providing residents with a tranquil and comfortable living experience.",
            },
            {
                id: 2,
                address: "Elmina Green, 40160 Shah Alam, Selangor",
                state: "Selangor",
                price: 1800000,
                description: "Elmina Green is a residential development located in the township of City of Elmina in Shah Alam, Malaysia. The eco-themed development comprises of modern homes surrounded by lush greenery and parks, with convenient access to amenities such as schools, retail shops, and healthcare facilities."
            },
            {
                id: 3,
                address: "D'Banyan Residence, Sutera Harbour, Kota Kinabalu",
                state: "Sabah",
                price: 3500000,
                description: "D'Banyan Residence is a luxury condominium located in Kota Kinabalu. The development features modern and spacious units with panoramic views of the surrounding area, along with a range of top-notch amenities including a swimming pool, gym, and landscaped gardens. It offers convenient access to major highways and key business areas."
            }
        ]
    )
}