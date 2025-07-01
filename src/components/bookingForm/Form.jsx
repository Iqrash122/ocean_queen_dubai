import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import "./Form.css";
export default function BookingForm() {
  const [weekend, setWeekend] = useState(false);
  const [loading, setLoading] = useState(false);
  const [countryCode, setCountryCode] = useState("+1");
  const [emailError, setEmailError] = useState("");
  const validateEmail = (e) => {
    const email = e.target.value;

    if (validator.isEmail(email)) {
      setEmailError("Valid Email :)");
    } else {
      setEmailError("Enter valid Email!");
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    setLoading(true);
    const fullContactNo = `${countryCode} ${data.contact_no}`;

    // **Send Booking Request to Admin**
    emailjs
      .send(
        "service_iioemug", // Your EmailJS service ID
        "template_jnrckdo", // Admin's booking email template
        {
          full_name: data.full_name,
          email: data.email,
          contact_no: fullContactNo,
          bookDays: data.bookDays,
          weekDayNames: data.weekDayNames || "N/A",
          weekTimings: data.weekTimings || "N/A",
          weekendDayNames: data.weekendDayNames || "N/A",
          weekendTimings: data.weekendTimings || "N/A",
          Adults: data.Adults,
          children: data.children,
        },
        "39etYKEgKT8RYyNQS" // Your EmailJS user ID
      )
      .then(() => {
        // **Send Thank You Email to the User**
        emailjs
          .send(
            "service_iioemug", // Your EmailJS service ID
            "template_thankyou", // Thank-you email template (create this in EmailJS)
            {
              to_email: data.email, // User's email (recipient)
              full_name: data.full_name, // User's name
              message: `Dear ${data.full_name}, <body class="body" style="background-color: #ffffff; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
<table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff;" width="100%">
<tbody>
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tbody>
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-radius: 0; color: #000000; width: 600px; margin: 0 auto;" width="600">
<tbody>
<tr>
<td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
<table border="0" cellpadding="0" cellspacing="0" class="image_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="width:100%;">
<div align="center" class="alignment" style="line-height:10px">
<div style="max-width: 427px;"><img alt="" height="auto" src="images/logo1-D8M_y8nF.png" style="display: block; height: auto; border: 0; width: 100%;" title="" width="427"/></div>
</div>
</td>
</tr>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tbody>
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 600px; margin: 0 auto;" width="600">
<tbody>
<tr>
<td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
<table border="0" cellpadding="0" cellspacing="0" class="image_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
<div align="center" class="alignment" style="line-height:10px">
<div style="max-width: 90px;"><img alt="" height="auto" src="https://media2.giphy.com/media/S40Bi2p4jsXGOwzu95/giphy.gif?cid=20eb4e9divfgddmzo1jvgbso39sfysp9efoueyo6aayt8p53&ep=v1_stickers_search&rid=giphy.gif&ct=s" style="display: block; height: auto; border: 0; width: 100%;" title="" width="90"/></div>
</div>
</td>
</tr>
</table>
<table border="0" cellpadding="20" cellspacing="0" class="paragraph_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
<tr>
<td class="pad">
<div style="color:#101112;direction:ltr;font-family:Arial, Helvetica, sans-serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:center;mso-line-height-alt:19.2px;">
<p style="margin: 0;">for you booking. our Team member Contact you are soon as possible.</p>
</div>
</td>
</tr>
</table>
<table border="0" cellpadding="10" cellspacing="0" class="heading_block block-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad">
<h3 style="margin: 0; color: #7747FF; direction: ltr; font-family: Arial, Helvetica, sans-serif; font-size: 18px; font-weight: 700; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0; mso-line-height-alt: 21.599999999999998px;"><span class="tinyMce-placeholder" style="word-break: break-word;">For more details</span></h3>
</td>
</tr>
</table>
<table border="0" cellpadding="0" cellspacing="0" class="html_block block-4" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad">
<div align="center" style="font-family:Arial, Helvetica, sans-serif;text-align:center;"><div class="our-class" style="margin:20px 0;">
<div>
<a href="tel:971525252746">+971 52 52 52746 </a>
</div>
<div style="margin-top:10px;">
<a href="mailto:info@oceanqueencruise.com">info@oceanqueencruise.com</a>
</div>
</div></div>
</td>
</tr>
</table>
<table border="0" cellpadding="10" cellspacing="0" class="social_block block-5" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad">
<div align="center" class="alignment">
<table border="0" cellpadding="0" cellspacing="0" class="social-table" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block;" width="144px">
<tr>
<td style="padding:0 2px 0 2px;"><a href="https://www.facebook.com/" target="_blank"><img alt="Facebook" height="auto" src="images/facebook2x.png" style="display: block; height: auto; border: 0;" title="facebook" width="32"/></a></td>
<td style="padding:0 2px 0 2px;"><a href="https://www.twitter.com/" target="_blank"><img alt="Twitter" height="auto" src="images/twitter2x.png" style="display: block; height: auto; border: 0;" title="twitter" width="32"/></a></td>
<td style="padding:0 2px 0 2px;"><a href="https://www.linkedin.com/" target="_blank"><img alt="Linkedin" height="auto" src="images/linkedin2x.png" style="display: block; height: auto; border: 0;" title="linkedin" width="32"/></a></td>
<td style="padding:0 2px 0 2px;"><a href="https://www.instagram.com/" target="_blank"><img alt="Instagram" height="auto" src="images/instagram2x.png" style="display: block; height: auto; border: 0;" title="instagram" width="32"/></a></td>
</tr>
</table>
</div>
</td>
</tr>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff;" width="100%">
<tbody>
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 600px; margin: 0 auto;" width="600">
<tbody>
<tr>
<td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
<table border="0" cellpadding="0" cellspacing="0" class="icons_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; text-align: center; line-height: 0;" width="100%">
<tr>
<td class="pad" style="vertical-align: middle; color: #1e0e4b; font-family: 'Inter', sans-serif; font-size: 15px; padding-bottom: 5px; padding-top: 5px; text-align: center;"><!--[if vml]><table align="center" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
<!--[if !vml]><!-->
<table cellpadding="0" cellspacing="0" class="icons-inner" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block; padding-left: 0px; padding-right: 0px;"><!--<![endif]-->
<tr>
<td style="vertical-align: middle; text-align: center; padding-top: 5px; padding-bottom: 5px; padding-left: 5px; padding-right: 6px;"><a href="http://designedwithbeefree.com/" style="text-decoration: none;" target="_blank"><img align="center" alt="Beefree Logo" class="icon" height="auto" src="images/Beefree-logo.png" style="display: block; height: auto; margin: 0 auto; border: 0;" width="34"/></a></td>
<td style="font-family: 'Inter', sans-serif; font-size: 15px; font-weight: undefined; color: #1e0e4b; vertical-align: middle; letter-spacing: undefined; text-align: center; line-height: normal;"><a href="http://designedwithbeefree.com/" style="color: #1e0e4b; text-decoration: none;" target="_blank">Designed with Beefree</a></td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table><!-- End -->
</body>`, // Custom message
            },
            "39etYKEgKT8RYyNQS" // Your EmailJS user ID
          )
          .then(() => {
            setLoading(false);
            alert(
              "Booking request sent successfully! A thank-you email has been sent to the user."
            );
            reset();
          })
          .catch((error) => {
            setLoading(false);
            console.error("Error sending thank-you email:", error);
            alert(
              "Booking request sent, but failed to send a thank-you message."
            );
          });
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error sending booking email:", error);
        alert("Failed to send booking request. Please try again.");
      });
  };

  return (
    <div
      className="hidden 2xl:flex xl:flex lg:hidden md:hidden sm:hidden"
      id="bookingForm"
    >
      <div className="absolute top-1/2 translate-y-[-50%] 2xl:right-48 xl:right-20 z-10 rounded-md bg-white/80 p-8 shadow-lg w-[550px]">
        <div className="mb-8">
          <h2 className="text-center leading-none text-[32px] font-playfair-bold">
            Book Your Dream Yacht
          </h2>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-4 font-poppins-reg"
        >
          <div>
            <select
              {...register("bookDays")}
              className="select w-full select-bordered"
              onChange={() => setWeekend(!weekend)}
            >
              <option value="week days">Week Days (Mon - Fri)</option>
              <option value="weekend days">Weekend Days (Sat - Sun)</option>
            </select>
          </div>

          <div>
            {weekend ? (
              <div className="flex flex-col gap-4">
                <select
                  {...register("weekendTimings")}
                  className="select w-full select-bordered"
                >
                  <option>Select Weekend Timings</option>
                  <option value="05:00 PM to 07:00 PM">
                    05:00 PM to 07:00 PM
                  </option>
                  <option value="07:00 PM to 09:00 PM">
                    07:00 PM to 09:00 PM
                  </option>
                  <option value="09:00 PM to 11:00 PM">
                    09:00 PM to 11:00 PM
                  </option>
                </select>
                <select
                  {...register("weekendDayNames")}
                  className="select w-full select-bordered"
                >
                  <option>Select Weekend Days</option>
                  <option value="sat">Saturday</option>
                  <option value="sun">Sunday</option>
                </select>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                <select
                  {...register("weekTimings")}
                  className="select w-full select-bordered"
                >
                  <option>Select Week Timings</option>
                  <option value="06:00 PM to 08:00 PM">
                    06:00 PM to 08:00 PM
                  </option>
                  <option value="08:30 PM to 10:30 PM">
                    08:30 PM to 10:30 PM
                  </option>
                </select>
                <select
                  {...register("weekDayNames")}
                  className="select w-full select-bordered"
                >
                  <option>Select Week Days</option>
                  <option value="mon">Monday</option>
                  <option value="tue">Tuesday</option>
                  <option value="wed">Wednesday</option>
                  <option value="thurs">Thursday</option>
                  <option value="fri">Friday</option>
                </select>
              </div>
            )}
          </div>

          <div>
            <input
              type="text"
              {...register("full_name")}
              className="input w-full h-[43px] input-bordered"
              placeholder="Full Name"
              required
            />
          </div>
          <div>
            <input
              type="email"
              {...register("email")}
              className="input w-full h-[43px] input-bordered"
              placeholder="E-mail Address"
              required
            />
          </div>
          <div className="flex gap-2">
            <select
              className="select w-24 select-bordered"
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
            >
              <option value="+1">+1 </option>
              <option value="+44">+44 </option>
              <option value="+971">+971 </option>
              <option value="+92">+92 </option>
              <option value="+91">+91 </option>
              <option value="+61">+61</option>
            </select>
            <input
              type="number"
              {...register("contact_no")}
              className="input w-full h-auto input-bordered"
              placeholder="Contact Number"
              required
            />
          </div>

          <div className="flex flex-row gap-4">
            <input
              type="number"
              {...register("Adults")}
              placeholder="No. of Adults"
              className="input w-full h-auto p-2 input-bordered"
              required
            />
            <input
              type="number"
              {...register("children")}
              placeholder="No. of Children"
              className="input w-full h-auto p-2 input-bordered"
              required
            />
          </div>

          <div className="flex flex-row gap-4">
            <label className="text-gray-500">
              {" "}
              Sail From
              <input
                type="text"
                placeholder="Al Jaddaf"
                className="input w-full h-auto p-2 text-[15px] text-black input-bordered disabled:placeholder-black"
                disabled
                style={{ "::placeholder": { color: "black" } }}
              />
            </label>
            <label className="text-gray-500">
              {" "}
              Sail To
              <input
                type="text"
                placeholder="Burj Khalifa & Water Canal"
                className="input w-full h-auto p-2 text-[15px] text-black input-bordered disabled:placeholder-black"
                disabled
                style={{ "::placeholder": { color: "black" } }}
              />
            </label>
          </div>

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
              "Book Now"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
