const ContactPage = () => {
    return (
      <div className="grid grid-cols-4 grid-rows-10 gap-0">
        {Array.from({ length: 40 }).map((_, index) => (
          <div
            key={index}
            className={`border-r border-b border-[#9e9e9e] ${index % 4 === 3 ? 'border-r-0' : ''} ${index >= 36 ? 'border-b-0' : ''} aspect-square`}
          />
        ))}
         <div className=" absolute items-center py-24 px-12">
        <h1 className="text-5xl text-center text-black font-semibold ml-48 mt-16 mb-4 dark:text-white ">We’re here When you need us !</h1>
        
        <p className=" absolute text-xl text-black dark:text-white ml-52">
          Please leave us a message. Our team will contact you as soon as possible.
        </p>
        

      </div>

      </div>
    );
  };
  
  export default ContactPage;
  