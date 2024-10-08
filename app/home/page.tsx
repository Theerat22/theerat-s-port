import Navbar from "@/components/Navbar";
import Info from "@/components/Info";
import Footer from "@/components/Footer";
export default function Home() {

  return (
    <>

      <Navbar
        navigationType={"single"}
        items={[
          {
            name: "Home",
            path: "#home",
          },
          { name: "Portfolio", path: "#portfolio" },
          {
            name: "Activities",
            path: "#activities",
          },
        ]}
      />
      <div className="lg:min-h-screen px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto max-w-[75rem]">
        <Info />
      </div>
      <Footer/>
    </>
  );
}