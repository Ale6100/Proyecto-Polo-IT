import { useState } from "react"
import CompaniesList from "../components/CompaniesList"
import { useEffect } from "react";



const CompaniesContanier = () => {
    const [data, setData] = useState([]);

    
    useEffect(() => {
        console.log("hola")
        fetch(import.meta.env.VITE_BACKEND_URL + "/api/companies",
            {headers:{"Content-type" : "application/json","Authorization": "Bearer " + import.meta.env.VITE_ACCESS_TOKEN}}
            ).then(res => res.json()).then(res => setData(res.payload))
            
    },[])

    return(
        <>
        {
            <CompaniesList items={data} />
        }
        </>
    )
}

export default CompaniesContanier;