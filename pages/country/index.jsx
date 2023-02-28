import React from 'react'
import { countries } from '../../data/countries';
import Banner from '../../components/services/Banner'
import MainComponent from '../../components/services/index'
import Seo from '../../components/common/seo';


export default function CountryService({filterData ,  filteredService}) {
  return (
    <>
    
    <Seo pageTitle="Services Page "  />
    <MainComponent    filteredService={filteredService} />
  </>
  )
}



CountryService.getInitialProps = async ({
    query
}) => {

  //  console.log('query' , query)
    const countryquery =  query.country;
    const service = query.service;

    

    
const filterData = countries.find(country =>
 
  country?.id === parseInt(countryquery)  )


const filtercopuntryitems = filterData?.items?.filter((item) => item?.query === service)

console.log(filtercopuntryitems[0]?.mainImage)
  console.log('filterda'  )
    return {
      
        filterData,
        filteredService:filtercopuntryitems[0]
     
    };

};



