import { bold } from "chalk";
import NavBar from "../components/NavBar";
import Link from "next/link";

export default function Country(){
    return(
        <>
            <NavBar/>
            <h1 style={{display:"flex", justifyContent:"space-around", marginTop:"30px", fontSize:"25px"}}><strong>Country List</strong></h1>

            <div style={{display:"flex", justifyContent:"space-around", marginTop:"30px"}}>

                <ul style={{fontSize:'20px', fontWeight:"bold", textDecoration:"underline"}}>

                <li><Link href="/country/pakistan">Pakistan</Link></li>
                <li><Link href="/country/india">India</Link></li>
                <li><Link href="/country/china">China</Link></li>
                <li><Link href="/country/canada">Canada</Link></li>
                <li><Link href="/country/turkey">Turkey</Link></li>

                </ul>
            </div>
        </>
    )
}