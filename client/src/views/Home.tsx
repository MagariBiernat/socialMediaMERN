import React from "react"
import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import homeHeaderSrc from "../assets/images/homeHeader.png"
import { RootState } from "../redux/reducers/rootReducer"
function Home() {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth)
  const history = useHistory()
  const handleButton = () => {
    if (isAuthenticated) {
      history.push("/app")
    } else {
      history.push("/register")
    }
  }
  return (
    <div className="overflow-y-auto">
      <header className=" w-full min-h-1/2 mt-20">
        <div className="flex w-80% justify-evenly items-center flex-col p-5 md:flex-row ">
          <h1 className="text-3xl tracking-wider font-serif leading-10 pb-10 md:pb-0">
            Introducing, <br /> socialMedia in <br />
            <strong style={{ color: "#0099ff" }}>MERN</strong> Stack <br />
            <button
              onClick={handleButton}
              className="py-3 px-6 w-full mt-5 text-white border-transaprent text-2xl  rounded-md  bg-blue-500 hover:bg-blue-700 shadow-2xl"
            >
              {isAuthenticated ? "Go to App" : "Sign up"}
            </button>
          </h1>
          <img
            style={{ maxWidth: "300px" }}
            className="shadow"
            src={homeHeaderSrc}
            alt="Header picture :)"
          />
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 225">
          <path
            fill="#0099ff"
            fill-opacity="1"
            d="M0,64L48,85.3C96,107,192,149,288,170.7C384,192,480,192,576,170.7C672,149,768,107,864,101.3C960,96,1056,128,1152,154.7C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </header>

      <section
        className="flex flex-col h-1/2 justify-center items-center p-10  text-white"
        style={{ backgroundColor: "#0099ff" }}
      >
        <h1 className="text-4xl">Lorem ipsum dolor sit amet.</h1>
        <hr className="w-full height-0 border-gray-200 border-1 my-7 " />
        <h3 className="text-xs my-3 text-center tracking-widest">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          doloremque nam quia totam. Alias, expedita?
        </h3>

        <p className="w-2/4 text-xs my-3 text-justify tracking-wide">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
          necessitatibus quaerat. Magni expedita vitae sapiente atque quos sequi
          quibusdam, blanditiis praesentium voluptatum reiciendis unde corporis
          esse nulla necessitatibus non rem. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit.
        </p>
      </section>
    </div>
  )
}

export default Home
