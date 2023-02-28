import React from 'react'
import { countries } from '../../data/countries';


export default function CountryService({country,service}) {
  return (
    <div>

{country}

{service}


    </div>
  )
}



CountryService.getInitialProps = async ({
    query
}) => {

    console.log('query' , query)
    const country = query.country;
    const service = query.service;
  
    return {
        country,
        service,
     
    };
};



