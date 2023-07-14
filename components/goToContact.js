import Image from "next/image";
import Link from "next/link";


export default function GoToContact(){
    return (
        <div className="relative flex items-center justify-center h-screen  overflow-hidden">
           <div class="relative z-30 p-5 text-2xl text-white"> 
            <h1 className=" text-center mb-4">
                Get In Touch
            </h1>
            <p className=" text-center mb-4">Feel free to share your queries, comments, or suggestions! </p>
            <Link href={"/Contact"} className=" flex justify-center mb-4">
       <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Contact Us</button>
      </Link>
           </div> 
            <Image class="absolute z-10 w-auto min-w-full min-h-full max-w-none opacity-30" src={"/beach.jpg"} height={500} width={1000}/>
        </div>
    )
}