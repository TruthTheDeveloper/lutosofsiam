import HomeFeatured from "@/molecules/HomeFeatured/HomeFeatured";
import HomeGallery from "@/molecules/HomeGallery";
import HomeHoursInfo from "@/molecules/HomeHoursInfo";
import HomeNews from "@/molecules/HomeNews";
import HomePageHero from "@/molecules/HomePage/HomePageHero";
import HomeRecognition from "@/molecules/HomeRecognition";
import HomeTestimonial from "@/molecules/HomeTestimonial";
import HomeWine from "@/molecules/HomeWine";
import HomeTestAnimation from "@/molecules/HomeTextAnimation";
import HomeOrder from "@/molecules/HomeOrder";



const HomePage = () => {

    return(
        <section>
            <HomePageHero/>
            <HomeFeatured/>
            <HomeRecognition/>
            <HomeWine/>
            <HomeOrder/>
            <HomeTestimonial/>
            <HomeHoursInfo/>
            {/* <HomeTestAnimation/> */}
            <HomeNews/>  
            <HomeGallery/>
        </section>
    )
}

export default HomePage;