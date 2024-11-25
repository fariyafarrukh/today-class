import Link from "next/link";

export default function Navbar()
{ 
  return (
 
       
    <div className="bg-slate-200 flex justify-between item-" >
   
    <Link href={"/"}>karachi</Link> &nbsp;
    <Link href={"/multan"}>multan</Link> &nbsp;
    <Link href={"/sakkar"}>sakkar</Link> &nbsp;
    <Link href={"/larkana"}>larkana</Link> &nbsp;
    

    </div>
   
    
    
  );

}
