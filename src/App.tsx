import hero from "./assets/illustration-hero.svg"
import music from "./assets/icon-music.svg"

function App() {

  return (
    <div className="relative min-h-screen bg-primary">
      <img src="/bg-mobile.svg" alt="" className="absolute top-0 left-0 w-full h-auto z-0 lg:hidden" />
      <img src="/bg-desktop.svg" alt="" className="absolute top-0 left-0 w-full h-auto z-0 hidden lg:block" />
      
      <div className=" shadow-xl/30 absolute inset-0 m-6 md:m-auto max-w-[450px] h-fit bg-white z-10 rounded-xl flex flex-col">
        <img src={hero} alt="" className="rounded-t-xl"/>

        <div className="p-12 text-center">
          <h1 className="font-extrabold text-3xl text-highlight mb-5">Order Summary</h1>
          <p className="text-text mb-5">
            You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!
          </p>

          <div className="flex justify-between items-center bg-secondary p-4 rounded-lg mb-8">
            <div className="flex gap-5">
              <img src={music} alt="" />
              <div className="flex flex-col gap-1.5">
                <h2 className="font-black">Annual Plan</h2>
                <p className="text-text">$59.99/year</p>  
              </div>
            </div>
            <a href="#" className="text-action underline font-bold text-sm hover:text-hover">Change</a>
          </div>

          <div className="flex flex-col gap-8">
            <button className="shadow-lg/30 cursor-pointer bg-action hover:bg-hover rounded-md p-3.5 text-white font-bold transition-all ease-in-out duration-300">Proceed to Payment</button>

            <a href="#" className="text-sm font-black text-text hover:text-highlight transition duration-500">Cancel Order</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
