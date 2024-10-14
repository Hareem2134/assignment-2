type CountryCardProps = {
    name: string,
    population: number,
    capital: string
}

export default function CountryCard({name,population,capital}:CountryCardProps){
    return(
        <div style={{display:"grid", justifyContent:"space-around",fontSize:"20px", marginTop:"30px"}}>

            <h1><strong>Country: </strong>{name}</h1>
            <p><strong>Population: </strong>{population.toLocaleString()}</p>
            <p><strong>Capital: </strong>{capital}</p>

        </div>
    );
}