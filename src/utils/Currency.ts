const Currenccy_Format = new Intl.NumberFormat(undefined,{
    currency:"CZK",style:"currency"});

export function Currency(number:number){

return Currenccy_Format.format(number)

}