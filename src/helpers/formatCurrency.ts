import useAuthenticationState from "../states/authentication";

//const locale = 'en-US'; // Use a specific locale, like 'en-US', 'fr-FR', 'de-DE', etc.
const storeData = useAuthenticationState.getState();

export const formatCurrency = ({ amount, locale }: { amount: number, locale?: string }) => {
    let locale2 = `en-${storeData?.authentication?.user?.location?.country_code || 'NG'}`
    const currencyCode = locale === 'en-NG' || locale2 === 'en-NG' ? 'NGN' : "USD";
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

    const formattedCurrency = new Intl.NumberFormat(locale ?? locale2,options).format(amount)
    return formattedCurrency;
}