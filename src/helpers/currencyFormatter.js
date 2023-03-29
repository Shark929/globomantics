const CurrencyFormatter = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "MYR",
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
});

export default CurrencyFormatter;