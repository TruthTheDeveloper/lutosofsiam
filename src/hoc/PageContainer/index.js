import Footer from "@/atoms/Footer";
import Navbar from "@/atoms/Navbar";

const PageContainer = ({children}) => {

    return(
        <main className="min-h-screen bg-white text-black w-full">
          <Navbar/>
          {children}
          <Footer/>
    </main>
    )
}

export default PageContainer;