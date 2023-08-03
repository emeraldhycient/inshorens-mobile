const locale = 'en-US'; // Use a specific locale, like 'en-US', 'fr-FR', 'de-DE', etc.

export const formatCurrency = ({ amount, locale = "en-NG" }: { amount: number, locale?: string }) => {
    const currencyCode = 'NGN';
    const currencyStyle = 'symbol'; // Other options: 'code', 'name'
    const minimumFractionDigits = 2;
    const maximumFractionDigits = 2;

    const options = {
        style: 'currency',
        currency: currencyCode,
        currencyDisplay: currencyStyle,
        minimumFractionDigits,
        maximumFractionDigits,
    };

    const formattedCurrency = new Intl.NumberFormat(locale,options).format(amount)
    return formattedCurrency;
}