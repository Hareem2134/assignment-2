import Link from "next/link"

export default function NavBar(){
    return(
        <div style={{display:"flex", justifyContent:"center", fontSize:"24px"}}>
            <Link href="/">Home</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
            <Link href="/aboutus">About Us</Link>&nbsp;|&nbsp;&nbsp;
            <Link href="/contactus">Contact Us</Link>&nbsp;|&nbsp;&nbsp;
            <Link href="/country">Country</Link>
        </div>

    );
}