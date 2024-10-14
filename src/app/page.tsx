import NavBar from "./components/NavBar";

export default function Home(){
  return(
    <div>
      <NavBar/>
      <h1 style={{display:"flex", justifyContent:"space-around", marginTop:"30px", fontWeight:"bold", fontSize:"20px"}}>This is Home Page</h1>
    </div>
  );
}