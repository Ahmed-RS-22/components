import { useState } from "react";
import { Button ,Input ,Card,Modal, Alert } from "./components";
import img from "/image.png"
import { CgHello } from "react-icons/cg";
const App = () => {
	const [isOpen,setIsOpen]=useState(false)
  return (
    <div className="min-h-screen my-10 p-5">
		<h1 className="w-full mx-auto my-5 text-5xl text-center capitalize text-cyan-800"> resuable componenets Libraray </h1>
      <div className=" bg-zinc-900  w-full min-h-[80dvh] grid grid-cols-12 rounded-3xl  p-5 mx-auto shadow-inner border-5 border-cyan-950">
        <div className="col-span-6 flex justify-center items-center"><Button className={"hover:scale-105 rounded-3xl"} type={"submit"} color="green" icon={CgHello}   > hello </Button></div>
        <div className="col-span-6 flex justify-center items-center"><Input placeholder={"text"} className="placeholder:text-gray-600/50"   /></div>
        <div className="col-span-6 flex justify-center items-center"><Card className="w-1/2" variant="outlined" image={img} ><Button onClick={()=>alert("hello")}> hello card</Button> </Card></div>
        <div className="col-span-6 flex justify-center items-center"> <Button onClick={()=> setIsOpen(!isOpen)}> modal</Button><Modal isOpen={isOpen} bgClass={"bg-zinc-400/10"} className={"bg-zinc-900"} title={"Ahmed"} onClose={()=> setIsOpen(false)}   > <div className="w-full h-full bg-blue-800 "> hello</div> </Modal></div>
        <div className="col-span-6 flex justify-center items-center"><Alert message={"hello ahmed"} type="warning" onClose={true} className={"fixed top-10 left-5 "} ><CgHello/></Alert></div>
      

      </div>
    </div>
  );
};

export default App;
