'use client';
import NavBar from "@/app/components/NavBar";
import { useParams } from "next/navigation";
import CountryCard from "@/app/components/CountryCard";

const Countries = [
    {
        name: "Pakistan",
        capital: "Islamabad",
        population: 329500000
    },
    {
        name: "India",
        capital: "New Delhi",
        population: 329500000
    },
    {
        name: "China",
        capital: "Beijing",
        population: 329500000
    },
    {
        name: "Canada",
        capital: "Toronto",
        population: 329500000
    },
    {
        name: "Turkey",
        capital: "Ankara",
        population: 329500000
    }
]

export default function CountryName() {
    const params = useParams();
    const country_name = params.country_name as string;
    const countryData = Countries.find((country) =>
        country.name.toLowerCase() === country_name.toLowerCase()
    )
    if (!countryData){
        return(
            <div>
                <NavBar/>
                <h1>Country Not Found</h1>
            </div>
        );
    }

  return (
    <>
      <NavBar/>
      <CountryCard name={countryData.name} population={countryData.population} capital={countryData.capital}/>
    </>
  );
}