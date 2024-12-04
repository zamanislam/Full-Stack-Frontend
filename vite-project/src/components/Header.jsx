import '../styles/Header.css'

const Header=()=>{
   return(
    <div id="header" className="flex flex-row gap-x-96 p-2">
        <div className="pl-11">
           <h3 className="text-md">SHOP BLACK FRIDAY FEAT.SEALY</h3> 
        </div>
        <div className="pl-72">
            <span className="text-md"> Rewards | Financing | Professional | Everything Ships FREE*</span>
        </div>
    </div>
   )
}
export default Header