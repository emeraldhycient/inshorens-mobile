import useAuthenticationState from "../states/authentication";

//const locale = 'en-US'; // Use a specific locale, like 'en-US', 'fr-FR', 'de-DE', etc.
const storeData = useAuthenticationState.getState();

export const formatCurrency = ({ amount, locale = `en-${storeData?.authentication?.user?.location?.country_code}` }: { amount: number, locale?: string }) => {
    console.log(locale)
    const currencyCode = locale === 'en-NG' ? 'NGN' :"USD";
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