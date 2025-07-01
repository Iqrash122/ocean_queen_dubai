import { LuContact } from "react-icons/lu";
import emailjs from "emailjs-com";
import { useRef, useState } from "react";

export default function ContactForm() {
  const form = useRef();
    const [loading, setLoading] = useState(false);
  

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_iioemug", 
        "template_jnrckdo", 
        form.current,
        "39etYKEgKT8RYyNQS" 
      )
      .then((result) => {
        setLoading(false);
        console.log("Success:", result.text);
        alert("Message Sent Successfully!");
        form.current.reset(); 
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error:", error.text);
        alert("Failed to send message. Please try again.");
      });
  };

  return (
    <>
      <div className="bg-pattern-contact bg-cover bg-no-repeat bg-center py-[90px]">
        <div className="2xl:container xl:container lg:container sm:container container mx-auto ">
          <div className="flex 2xl:flex-row xl:flex-row lg:flex-col md:flex-col sm:flex-col flex-col justify-start py-[2px]   bg-contact-bg bg-contain  bg-no-repeat gap-10">
            <div className="w-full flex flex-col justify-center items-start p-4  ">
              <div className="bg-[#bfa888] p-[10px] mt-52 ">
                <div className="border-[#eed0a5] border-[1px] border-solid 2xl:p-[40px]  xl:p-[40px] lg:p-[20px] md:p-[20px] wm:p-[20px] p-[20px]  ">
                  <div>
                    <LuContact className="text-[40px] text-white" />
                  </div>
                  <div className="text-white font-poppins-reg mt-2">
                    Call us for any Inquiry
                  </div>
                  <div>
                    <a
                      href="tel:+971525252746"
                      className="text-[48px] text-white font-playfair-regular"
                    >
                      +971 52 52 52746
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-8">
              <div>
                <h4 className="uppercase font-poppins-bold text-[#bfa888] tracking-wider text-[14px]">
                  Contact us
                </h4>
                <h2 className="text-[48px] font-playfair-regular">
                  Get in Touch
                </h2>
              </div>
              <form
                ref={form}
                onSubmit={handleSubmit}
                className="w-full 2xl:pr-20 xl:pr-10 lg:pr-0 md:pr-0 sm:pr-0 pr-0 mt-6 flex flex-col gap-4"
              >
                <div className="flex 2xl:flex-row xl:flex-row lg:flex-col md:flex-col sm:flex-col flex-col items-center gap-4 w-full">
                  <label className="input flex items-center w-full rounded-none">
                    <input
                      type="text"
                      name="first_name"
                      id="firstName"
                      className="grow w-full h-full"
                      placeholder="First Name"
                      required
                    />
                  </label>
                  <label className="input flex items-center w-full rounded-none">
                    <input
                      type="text"
                      name="last_name"
                      id="lastName"
                      placeholder="Last Name"
                      className="grow w-full h-full"
                      required
                    />
                  </label>
                </div>
                <div className="flex 2xl:flex-row xl:flex-row lg:flex-col md:flex-col sm:flex-col flex-col items-center gap-4 w-full">
                  <label className="input flex items-center w-full rounded-none">
                    <input
                      type="tel"
                      name="phone_no"
                      id="phone"
                      className="w-full h-full"
                      placeholder="Phone"
                      required
                    />
                  </label>
                  <label className="input flex items-center w-full rounded-none">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="E-mail"
                      className="w-full h-full"
                      required
                    />
                  </label>
                </div>
                <textarea
                  name="message"
                  className="w-full resize-none input rounded-none py-2 h-[200px]"
                  placeholder="Message"
                  cols="10"
                  required
                ></textarea>
               <button
            type="submit" 
            className="w-full rounded-md h-[40px] bg-[#0b1121] hover:bg-[#bfa888] transition-colors duration-200 font-poppins-reg text-white flex justify-center items-center"
            disabled={loading}
          >
            {loading ? (
              <svg
                className="animate-spin h-5 w-5 mr-2 text-white"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                ></path>
              </svg>
            ) : (
              "Submit"
            )}
          </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
