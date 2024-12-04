import CustomCarousel from "../carousel/Carouse1"
import HomeImage1 from "../Images/Image1"
import HomeImage2 from "../Images/Image2"
import HomeImage3 from "../Images/Image3"
import HomeFooter from "./Footer"



const Home=()=>{
    return(
        <>
        <h3 style={{textAlign:"center",marginTop:"22px",color:"#7B189F"}}>BLACK FRIDAY</h3>
       <div>
        
        <div>
          <CustomCarousel/>
          <HomeImage1/>
          <HomeImage2/>
          <HomeImage3/>
          <HomeFooter/>
          
          
        </div>
       </div>
       </>
    )
}
export default Home