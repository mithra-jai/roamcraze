import Image from "next/image"
export default function Contact(){
  return(
    <div className="relative flex items-center justify-center h-screen  overflow-hidden contact-main-div">
    <div className="relative z-30  flex flex-col md:flex-row gap-x-10 justify-center items-center m-8 ">
      <div className="">
        <h1 className="text-lg text-center mb-5 ">GET IN TOUCH</h1>
        <h1 className=" text-3xl text-center mb-5">Contact Form</h1>
        <p className="text-center mb-5">Send us your questions, comments, or suggestions!</p>
<p className="text-center mb-5">If you'd like to work with us or you have a question or comment, you can contact us using the form below.</p>
<p className="text-center mb-5">Sometimes We're busy traveling, but We try to respond to any messages!</p>
      </div>
    <div className="w-full max-w-sm p-4 border-slate-950 border-2 rounded-lg shadow sm:p-6 md:p-8  bg-blur backdrop-filter backdrop-blur-lg">
  <form className="space-y-6" action="https://formsubmit.co/roamcraze@gmail.com" method="POST">
    
    <div>
      <label
        for="name"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Your name
      </label>
      <input
        type="text"
        name="name"
        id="name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
        placeholder="Your Name"
        required
      />
    </div>
    <div>
      <label
        for="email"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Your email
      </label>
      <input
        type="email"
        name="email"
        id="email"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
        placeholder="Em@il id"
        required
      />
    </div>
    <div>
      <label
        for="subject"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Subject
      </label>
      <input
        type="text"
        name="subject"
        id="subject"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
        placeholder="Subject"
        required
      />
    </div>
    <div>
      <label
        for="message"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Message
      </label>
      <textarea
        type="textarea"
        name="message"
        id="message"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
        placeholder="Your Message"
        required
      />
    </div>
    <div className="flex justify-center"> 
    <button
    className="form-submit-btn text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      type="submit"
    >
      Submit
    </button>
    </div>
  </form>
</div>
</div>
<Image class="absolute z-10 w-auto min-w-full min-h-full max-w-none opacity-30 hidden md:block" src={"/contact-bg.jpg"} layout="responsive" height={500} width={1000}/>
</div>
  )
}