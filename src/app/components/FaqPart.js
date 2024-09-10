"use client";
import { useState } from "react";

const AccordionItem = ({
  title,
  content,
  content2,
  content3,
  index,
  activeIndex,
  handleToggle,
}) => {
  return (
    <>
      <div className="m-0 p-0">
        <div className="flex flex-col">
          <div className="flex justify-between items-center gap-3 my-2">
            <h3
              className={
                activeIndex === index
                  ? "text-demo font-bold text-lg cursor-pointer"
                  : "text-black font-bold text-lg cursor-pointer"
              }
              onClick={() => handleToggle(index)}
            >
              {title}
            </h3>

            <img
              src="./images/down-arrow-svgrepo-com.svg"
              alt="arrow-icon"
              onClick={() => handleToggle(index)}
              className={
                activeIndex === index
                  ? "cursor-pointer w-[17px] h-[15px] rotate-180"
                  : "cursor-pointer w-[17px] h-[15px]"
              }
            />
          </div>
          <hr className="border-b-1 border-LightGrayishBlue relative top-[8px]" />
        </div>

        <div
          onClick={() => handleToggle(index)}
          className={
            activeIndex === index ? "py-5 m-0 cursor-pointer" : "invisible h-5"
          }
        >
          <p>{content}</p>
          <br></br>
          <p>{content2}</p>
          <br></br>
          <p>{content3}</p>
        </div>
      </div>
    </>
  );
};

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      title: "How much does it cost to build an app?",
      content:
        "App development is charged depending on features offered by application designers and the duration taken in designing such applications hence the confusion surrounding its cost. We prefer simple pricing which is why we have two options:",
      content2:
        "Launch Swift Studio: Affordable pre-built apps for common needs like online sales, appointments, and reservations.",
      content3:
        "Customized app development for unique needs or larger projects. Pricing is based on your specific features ensuring you know the cost upfront.",
    },
    {
      title: "How do you create an app without any coding?",
      content:
        "No more complex coding! Launch Swift is an innovative app builder that lets you create powerful apps without writing a single line of code! Unlike other builders with limited customization, it offers both ease of use and full control – just perfect! It’s like having an app-builder’s rapidity and flexibility of a tailored build at once, but all cheaply.",
    },
    {
      title: "Can you create an app for free?",
      content:
        "Nevertheless, free apps are systematically bound by various limitations often rendering basic functionalities only available to users.",
      content2:
        "If you need something simple like a ticketing system or project tracking go for low-cost options such as Google Appsheet",
      content3:
        "Starting from scratch is more cost-effective, although it requires expertise in coding.",
    },
    {
      title: "How can I create my own app?",
      content:
        "An example of a no-code/low-code platform is Launch Swift. These platforms have simple interfaces and pre-built components that allow users to create applications without coding skills.",
      content2:
        "Coding from scratch will take much longer and require advanced programming knowledge. This means you must write the entire code for your application.",
    },
    {
      title: "Is it hard to create an app?",
      content:
        "When using Launch Swift, making an app is just like personalizing delectable meals. Choose the base, then select toppings (login, shopping cart, etc.) – pre-built and ready! Absolutely no coding is needed like joining Lego blocks together. Need assistance? Our team is at your disposal!",
    },
    {
      title: "How do I start an app business?",
      content:
        "Launching apps usually involves charges including $25 for Google Play Store and $99 per year for Apple App Store.",
      content2:
        "Throughout your new project, Launch Swift guides you in every path you choose concerning your application development needs.",
      content3:
        "Starting from scratch is more cost-effective, although it requires expertise in coding.",
    },
  ];

  return (
    <div>
      {faqData.map((faq, index) => (
        <AccordionItem
          key={index}
          title={faq.title}
          content={faq.content}
          content2={faq.content2}
          content3={faq.content3}
          index={index}
          activeIndex={activeIndex}
          handleToggle={handleToggle}
        />
      ))}
    </div>
  );
};

export default Accordion;
// import { useState } from "react";

// const Accordion = ({ title, content, index }) => {
//   const [active, setActive] = useState(null);
//   const handleToggle = (index) => {
//     active === index ? setActive(null) : setActive(index);
//   };

//   return (
//     <>
//       <div className="m-0 p-0">
//         <div className="flex flex-col">
//           <div className="flex justify-between items-center gap-3 my-2">
//             <h3
//               className={
//                 active === index
//                   ? "text-demo font-bold text-lg cursor-pointer"
//                   : " text-black font-bold text-lg cursor-pointer"
//               }
//               onClick={() => handleToggle(index)}
//             >
//               How much does it cost to build an app?
//             </h3>

//             <img
//               src="./images/down-arrow-svgrepo-com.svg"
//               alt="arrow-icon"
//               onClick={() => handleToggle(index)}
//               className={
//                 active === index
//                   ? "cursor-pointer w-[17px] h-[15px] rotate-180"
//                   : "cursor-pointer w-[17px] h-[15px]"
//               }
//             />
//           </div>
//           <hr
//             className={
//               active === index
//                 ? "border-b-1 border-LightGrayishBlue relative top-[8px]"
//                 : "border-b-1 border-LightGrayishBlue relative top-[8px]"
//             }
//           ></hr>
//         </div>

//         <div
//           onClick={() => handleToggle(index)}
//           className={active === index ? "py-5 m-0 cursor-pointer" : "invisible"}
//         >
//           <p>
//             App development is charged depending on features offered by
//             application designers and the duration taken in designing such
//             applications hence the confusion surrounding its cost. We prefer
//             simple pricing which is why we have two options:
//           </p>
//           <br></br>
//           <p>
//             <b>Launch Swift Studio:</b>
//             Affordable pre-built apps for common needs like online sales,
//             appointments, and reservations.
//           </p>
//           <br></br>
//           <p>
//             Customized app development for unique needs or larger projects.
//             Pricing is based on your specific features ensuring you know the
//             cost upfront.
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Accordion;
