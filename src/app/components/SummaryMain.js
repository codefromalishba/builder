"use client";
import React, { useState, useEffect, useRef } from "react";
import { FaRegBookmark } from "react-icons/fa6";
import { LuPencil } from "react-icons/lu";
import { useSelector } from "react-redux";
import { TfiAndroid } from "react-icons/tfi";
import { FaApple } from "react-icons/fa";
import { MdWeb } from "react-icons/md";
import { IoDesktop } from "react-icons/io5";
import { calculateFeatureTotals } from "../utils/calculateTotal";
import moment from "moment";
import { IoMdPricetags } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const SummaryMain = () => {
  const profile = useSelector((state) => state.profile);

  const { recentBuildCard, initialPhases, speed } = useSelector(
    (state) => state.feature
  );
  const selectedPhases =
    recentBuildCard?.phases?.filter((item) => item.selected) || [];
  const { allFeatures } = useSelector((state) => state.feature);
  const { fixedCost, customizationCost, totalCost, indicativeDurationInWeeks } =
    calculateFeatureTotals(
      allFeatures,
      recentBuildCard,
      selectedPhases,
      initialPhases,
      speed
    );

  const durationLabel = `${indicativeDurationInWeeks} ${
    indicativeDurationInWeeks === 1 ? "week" : "weeks"
  }`;
  const today = moment();
  const deliveryDate = today.clone().add(indicativeDurationInWeeks, "weeks");

  // const [isPromoVisible, setIsPromoVisible] = useState(false);
  // const [promoCode, setPromoCode] = useState("");

  const [enterName, setEnterName] = useState(false);
  const [enterDetails, setEnterDetails] = useState(false);

  const [buildCardName, setBuildCardName] = useState(recentBuildCard.name);
  const [buildCardDetails, setBuildCardDetails] = useState(
    recentBuildCard.details
  );

  const inputRef = useRef(null);
  const detailsRef = useRef(null);

  const [showFeatures, setShowFeatures] = useState(false);
  const [showPhases, setShowPhases] = useState(false);
  useEffect(() => {
    if (enterName) inputRef?.current?.focus();
  }, [enterName]);

  useEffect(() => {
    if (enterDetails) {
      detailsRef?.current?.focus();
      detailsRef?.current?.setSelectionRange(
        buildCardDetails.length,
        buildCardDetails.length
      );
    }
  }, [enterDetails]);

  // const handleApplyPromotionClick = () => {
  //   setIsPromoVisible(!isPromoVisible);
  // };

  // const handleApplyClick = () => {
  //   console.log(`Promo code applied: ${promoCode}`);
  // };

  const [isPromoVisible, setIsPromoVisible] = useState(false);
  const [promoCode, setPromoCode] = useState("");
  const [promoCodeValid, setPromoCodeValid] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const promoRef = useRef(null);

  const handleApplyPromotionClick = () => {
    setIsPromoVisible(true);
  };

  const handleApplyClick = async () => {
    if (!promoCode) return;
    setLoading(true);

    // Simulated API check
    setTimeout(() => {
      const validCodes = ["SAVE20", "LAUNCH10"]; // Replace with actual validation
      const isValid = validCodes.includes(promoCode.toUpperCase());

      setPromoCodeValid(isValid);
      setMessage(isValid ? "valid" : "invalid");
      setLoading(false);
    }, 1000);
  };

  const handleCancelPromoCode = () => {
    setPromoCode("");
    setPromoCodeValid(false);
    setMessage("");
    setIsPromoVisible(false);
  };

  const inputDate = new Date(recentBuildCard?.updatedAt);
  const options = { day: "2-digit", month: "short", year: "numeric" };
  const formattedDate = inputDate.toLocaleDateString("en-US", options);

  return (
    <div className="flex-1 overflow-y-auto mt-[72px] mb-[80px]">
      <div className="grid grid-cols-3">
        <div className="col-span-2">
          <div className="py-5 px-10 flex flex-col">
            <p className="font-medium">Hi, {profile?.email}</p>
            <div className="flex justify-between items-center py-2">
              <p className="font-semibold">Here is your Launch Swift</p>
              <p className="text-gray-900 text-sm">
                Last edited: {formattedDate}
              </p>
            </div>

            <div className="flex gap-10 py-5">
              <div className="w-1/4">
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    setShowFeatures(false);
                    setShowPhases(false);
                  }}
                >
                  <p
                    className={`rounded-md p-2 my-2 ${
                      !showFeatures && !showPhases
                        ? "bg-demo text-white"
                        : "bg-white text-black"
                    }`}
                  >
                    Launch Swift Info
                  </p>
                </div>

                <div
                  className="cursor-pointer"
                  onClick={() => {
                    setShowFeatures(true);
                    setShowPhases(false);
                  }}
                >
                  <p
                    className={`rounded-md p-2 my-2 ${
                      showFeatures
                        ? "bg-demo text-white"
                        : "bg-white text-black"
                    }`}
                  >
                    Features ({allFeatures?.length || 0})
                  </p>
                </div>

                <div
                  className="cursor-pointer"
                  onClick={() => {
                    setShowPhases(true);
                    setShowFeatures(false);
                  }}
                >
                  <p
                    className={`rounded-md p-2 my-2 ${
                      showPhases ? "bg-demo text-white" : "bg-white text-black"
                    }`}
                  >
                    Phases ({selectedPhases?.length || 0})
                  </p>
                </div>
              </div>

              <div className="w-3/4">
                {/* Show Name and Details only if not showing features or phases */}
                {!showFeatures && !showPhases && (
                  <div className="py-2">
                    <p className="text-demo font-semibold pb-5">
                      Launch Swift basic details
                    </p>

                    <div className="flex gap-5">
                      <div className="text-black text-xl">
                        <FaRegBookmark />
                      </div>

                      <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                          <p className="text-black text-sm font-semibold">
                            Name
                          </p>
                          {!enterName && (
                            <LuPencil
                              onClick={() => setEnterName(true)}
                              className="text-secondary cursor-pointer text-sm"
                            />
                          )}
                        </div>

                        {enterName ? (
                          <div className="my-1 gap-2 flex items-center">
                            <input
                              ref={inputRef}
                              className="p-2 border border-gray-300 rounded-md text-black font-medium outline-none"
                              type="text"
                              value={buildCardName}
                              onChange={(e) => setBuildCardName(e.target.value)}
                            />
                            <button
                              onClick={() => setEnterName(false)}
                              className="bg-demo p-2 text-white rounded-md text-sm"
                            >
                              Save
                            </button>
                          </div>
                        ) : (
                          <p className="text-black py-2 font-bold">
                            {buildCardName || "Enter a name"}
                          </p>
                        )}

                        <div className="flex items-center gap-2">
                          <p className="text-black text-sm font-semibold">
                            Details
                          </p>
                          {!enterDetails && (
                            <LuPencil
                              onClick={() => setEnterDetails(true)}
                              className="text-secondary cursor-pointer text-sm"
                            />
                          )}
                        </div>

                        {enterDetails ? (
                          <div className="my-1 gap-2 flex flex-col items-start">
                            <textarea
                              ref={detailsRef}
                              rows={4}
                              cols={30}
                              placeholder="Enter Launch Swift Description"
                              className="p-2 border border-gray-300 rounded-md text-black font-medium outline-none"
                              value={buildCardDetails}
                              onChange={(e) =>
                                setBuildCardDetails(e.target.value)
                              }
                            />
                            <button
                              onClick={() => setEnterDetails(false)}
                              className="bg-demo py-2 px-3 text-white rounded-md text-sm"
                            >
                              Save
                            </button>
                          </div>
                        ) : (
                          <p className="text-black py-2 text-sm">
                            {buildCardDetails || "Click to enter details"}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Show Features Section */}
                {showFeatures && (
                  <div className="py-2">
                    <p className="text-secondary pb-5 font-semibold">
                      Selected Features
                    </p>
                    <ol className="grid grid-cols-2 gap-2">
                      {allFeatures.map((item, index) => (
                        <li
                          key={index}
                          className="text-black text-sm font-medium py-1"
                        >
                          {item.name || "Unnamed Feature"}
                        </li>
                      ))}
                    </ol>
                  </div>
                )}

                {/* Show Phases Section */}
                {showPhases && (
                  <div className="py-2">
                    <p className="text-secondary pb-5 font-semibold">
                      Selected Phases
                    </p>
                    <div className="grid grid-cols-2 gap-5">
                      {selectedPhases.map((item, index) => (
                        <div
                          className="border border-gray-300 rounded-md"
                          key={index}
                        >
                          <div className="rounded-md rounded-b-none p-5 bg-slate-200">
                            <div className="flex p-5 gap-1 py-1">
                              <p className="text-black font-bold text-sm">
                                {item.name}
                              </p>
                            </div>
                          </div>
                          <div className="flex p-5 justify-between pt-5">
                            <p className="text-black text-xs font-bold">
                              Platform
                            </p>
                          </div>
                          <div className="flex px-5 justify-start py-4 gap-4">
                            {recentBuildCard?.platforms?.includes(
                              "android"
                            ) && (
                              <div className="flex flex-col items-center">
                                <TfiAndroid className="text-2xl text-black" />
                                <p className="text-gray-400 pt-2 text-xs">
                                  Android
                                </p>
                              </div>
                            )}
                            {recentBuildCard?.platforms?.includes("ios") && (
                              <div className="flex flex-col items-center">
                                <FaApple className="text-2xl text-black" />
                                <p className="text-gray-400 pt-2 text-xs">
                                  iOS
                                </p>
                              </div>
                            )}
                            {recentBuildCard?.platforms?.includes("web") && (
                              <div className="flex flex-col items-center">
                                <MdWeb className="text-2xl text-black" />
                                <p className="text-gray-400 pt-2 text-xs">
                                  Web
                                </p>
                              </div>
                            )}
                            {recentBuildCard?.platforms?.includes(
                              "desktop"
                            ) && (
                              <div className="flex flex-col items-center">
                                <IoDesktop className="text-2xl text-black" />
                                <p className="text-gray-400 pt-2 text-xs">
                                  Desktop
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1">
          <div className="m-5 flex flex-col border border-gray-300 rounded-md p-5">
            <p className="font-semibold">Payment Summary</p>

            <div className="py-5">
              <div className="flex justify-between py-1 text-sm">
                <p>Customization Cost</p>
                <p>${customizationCost}</p>
              </div>
              <div className="flex justify-between py-1 text-sm">
                <p>Fixed Cost</p>
                <p>${fixedCost}</p>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between py-1 text-sm">
                <p className="font-bold">Total Cost</p>
                <p>${totalCost}</p>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between py-1 text-sm">
                <p>Indicative Development Duration</p>
                <p className="font-bold">{durationLabel}</p>
              </div>
              <div className="flex justify-between py-1 text-sm">
                <p>Estimated Delivery Date</p>
                <p className="font-bold">
                  {" "}
                  <span className="font-bold text-black">
                    {deliveryDate.format("DD-MMM-YYYY")}
                  </span>
                </p>
              </div>
              <hr className="my-2" />

              <>
                <div className="flex justify-between py-1 text-sm">
                  <p className="font-bold">Promo Code</p>
                  {!isPromoVisible && (
                    <p
                      className="text-white p-2 bg-demo rounded-md cursor-pointer"
                      onClick={handleApplyPromotionClick}
                    >
                      Apply Promotion
                    </p>
                  )}
                </div>

                {isPromoVisible && (
                  <>
                    {message && (
                      <div
                        className={`${
                          message === "valid" ? "bg-demo" : "bg-red-400"
                        } px-4 py-2 rounded-md my-3`}
                      >
                        <p className="text-white text-sm">
                          {message === "valid"
                            ? "Promo code is valid!"
                            : "Promo code is invalid"}
                        </p>
                      </div>
                    )}

                    {promoCodeValid ? (
                      <div className="flex w-fit px-3 items-center gap-2 bg-slate-200 rounded-md">
                        <div className="flex items-center gap-1">
                          <IoMdPricetags className="text-black" />
                          <p className="p-2 text-gray-500 rounded-md font-bold">
                            {promoCode}
                          </p>
                        </div>
                        <IoClose
                          onClick={handleCancelPromoCode}
                          className="text-black cursor-pointer"
                        />
                      </div>
                    ) : (
                      <div className="my-1 w-full gap-2 flex items-center">
                        <input
                          ref={promoRef}
                          className="p-2 w-full border border-gray-300 rounded-md font-medium outline-none"
                          type="text"
                          placeholder="Enter Promo Code"
                          value={promoCode}
                          onChange={(e) =>
                            setPromoCode(e.target.value.toUpperCase())
                          }
                          disabled={loading}
                        />
                        <button
                          onClick={handleApplyClick}
                          disabled={!promoCode || loading}
                          className={`${
                            promoCode && !loading ? "bg-demo" : "bg-slate-300"
                          } py-2 px-4 text-white rounded-md text-sm`}
                        >
                          {loading ? "Applying..." : "Apply"}
                        </button>
                      </div>
                    )}
                  </>
                )}
              </>
              {/* <div className="flex justify-between py-1 text-sm">
                <p className="font-bold">Promo Code</p>
                <p
                  className="text-white p-2 bg-demo rounded-md cursor-pointer"
                  onClick={handleApplyPromotionClick}
                >
                  Apply Promotion
                </p>
              </div>
              {isPromoVisible && (
                <div className="my-1 w-full gap-2 flex items-center">
                  <input
                    className="p-2 w-full border border-gray-300 rounded-md font-medium outline-none"
                    type="text"
                    placeholder="Enter Promo Code"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                  />
                  <button
                    className="bg-slate-300 py-2 px-4 text-white rounded-md text-sm"
                    onClick={handleApplyClick}
                  >
                    Apply
                  </button>
                </div>
              )} */}
              <hr className="my-2" />
            </div>

            <button className="w-full text-white p-3 bg-demo rounded-md text-sm">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryMain;

// "use client";
// import React, { useState } from "react";
// import { FaRegBookmark } from "react-icons/fa6";
// import { LuPencil } from "react-icons/lu";
// import { useSelector } from "react-redux";

// const SummaryMain = () => {
//   const [isPromoVisible, setIsPromoVisible] = useState(false);
//   const [promoCode, setPromoCode] = useState("");
//   const profile = useSelector((state) => state.profile);
//   const [enterName, setEnterName] = useState(false);
//   const [enterDetails, setEnterDetails] = useState(false);
//   const [buildCardName, setBuildCardName] = useState(currentBuildCard?.name);
//   const [buildCardDetails, setBuildCardDetails] = useState(
//     currentBuildCard?.details || ""
//   );

//   const updateBuildCard = (type, value) => {
//     if (type === "name") {
//       setEnterName(!enterName);
//     } else if (type === "details") {
//       setEnterDetails(!enterDetails);
//     }
//     const userRef = doc(db, "users", user.uid);

//     getDoc(userRef)
//       .then((docSnapshot) => {
//         if (docSnapshot.exists()) {
//           const userData = docSnapshot.data();

//           userData.buildCards = Array.isArray(userData.buildCards)
//             ? userData.buildCards
//             : [];

//           const buildCardToUpdate = userData.buildCards.find(
//             (buildCard) => buildCard.id === currentBuildCard?.id
//           );

//           if (buildCardToUpdate) {
//             // Update only the name of the build card
//             if (type === "name") {
//               buildCardToUpdate.name = value;
//             } else if (type === "details") {
//               buildCardToUpdate.details = value;
//             }
//             buildCardToUpdate.updatedAt = new Date().toISOString();
//           } else {
//             console.error("Build card with the specified ID not found");
//             return Promise.reject("Build card not found");
//           }
//           dispatch(setRecentBuildCard(buildCardToUpdate));

//           // Update the user document in Firestore
//           return updateDoc(userRef, userData).then(dispatch(setUser(userData)));
//         } else {
//           console.error("User document does not exist");
//           return Promise.reject("User document not found");
//         }
//       })
//       .then(() => {
//         console.log("Build card name ]updated successfully");
//         // Optionally handle success, e.g., display a message
//       })
//       .catch((error) => {
//         console.error("Error updating build card name:", error);
//         // Optionally handle the error, e.g., display an error message
//       });
//   };

//   useEffect(() => {
//     inputRef?.current?.focus();
//   }, [buildCardName, enterName]);

//   useEffect(() => {
//     if (enterDetails) {
//       detailsRef?.current?.focus();
//       detailsRef?.current?.setSelectionRange(
//         buildCardDetails.length,
//         buildCardDetails.length
//       );
//     }
//   }, [buildCardDetails, enterDetails]);

//   const handleTabClick = (tabNumber) => {
//     setActiveTab(tabNumber);
//   };

//   const handleApplyPromotionClick = () => {
//     setIsPromoVisible(!isPromoVisible); // Toggle the visibility
//   };

//   const handleInputChange = (e) => {
//     setPromoCode(e.target.value);
//   };
//   const handleApplyClick = () => {
//     // Logic to apply the promo code goes here
//     console.log(`Promo code applied: ${promoCode}`);
//   };

//   return (
//     <div className="w-full h-[calc(100vh-4.5rem)]">
//       <div className="grid grid-cols-3">
//         <div className="col-span-2">
//           <div className="py-5 px-10 flex flex-col">
//             <p className="font-medium">Hi, {profile?.email}</p>
//             <div className="flex justify-between items-center py-2">
//               <p className="font-semibold">Here is your Launch Swift</p>
//               <p className="text-gray-900 text-sm">Last edited: Oct 01, 2024</p>
//             </div>
//             <div className="flex gap-10 py-5">
//               <div className="w-1/4">
//                 <div className="cursor-pointer">
//                   <p className="rounded-md p-2 my-2 bg-demo text-white">
//                     Launch Swift Info
//                   </p>
//                 </div>
//                 <div className="cursor-pointer">
//                   <p className="rounded-md p-2 my-2">Features (4)</p>
//                 </div>
//                 <div className="cursor-pointer">
//                   <p className="rounded-md p-2 my-2">Phases (5)</p>
//                 </div>
//               </div>
//               <div className="w-3/4">
//                 <div className="py-2">
//                   <p className="text-demo font-semibold pb-5">
//                     Launch Swift basic details
//                   </p>
//                   <div className="flex gap-5">
//                     <div className="text-black text-xl">
//                       <IoBookmarkOutline />
//                     </div>
//                     <div className="flex flex-col">
//                       <div className="flex items-center gap-2">
//                         <p className="text-black text-sm font-thin">Name</p>
//                         {!enterName && (
//                           <LuPencil
//                             onClick={() => setEnterName(!enterName)}
//                             className="text-secondary cursor-pointer text-sm"
//                           />
//                         )}
//                       </div>
//                       {enterName ? (
//                         <div className="my-1 gap-2 flex items-center">
//                           <div className="border-gray-300 border rounded-md my-1">
//                             <input
//                               ref={inputRef}
//                               className="p-2 w-full text-black rounded-md font-medium outline-none"
//                               type="text"
//                               placeholder=""
//                               value={buildCardName}
//                               onChange={(e) => setBuildCardName(e.target.value)}
//                             />
//                           </div>
//                           <p
//                             onClick={() =>
//                               updateBuildCard("name", buildCardName)
//                             }
//                             className="bg-secondary p-2 text-white rounded-md text-sm cursor-pointer"
//                           >
//                             {dictionary.save}
//                           </p>
//                         </div>
//                       ) : (
//                         <p className="text-black py-2 font-bold">
//                           {currentBuildCard?.name}
//                         </p>
//                       )}
//                       <div className="flex items-center gap-2">
//                         <p className="text-black text-sm font-thin">
//                           {dictionary.details}
//                         </p>
//                         {!enterDetails && (
//                           <LuPencil
//                             onClick={() => setEnterDetails(!enterDetails)}
//                             className="text-secondary cursor-pointer text-sm"
//                           />
//                         )}
//                       </div>
//                       {enterDetails ? (
//                         <div className="my-1 gap-2 flex flex-col items-start">
//                           <div className="border-gray-300 border rounded-md my-1">
//                             <textarea
//                               ref={detailsRef}
//                               rows={4}
//                               cols={30}
//                               placeholder="Enter Launch Swift Description"
//                               className="p-2 w-full text-black rounded-md font-medium outline-none"
//                               type="text"
//                               value={buildCardDetails}
//                               onChange={(e) =>
//                                 setBuildCardDetails(e.target.value)
//                               }
//                             />
//                           </div>
//                           <p
//                             onClick={() =>
//                               updateBuildCard("details", buildCardDetails)
//                             }
//                             className="bg-secondary py-2 px-3 text-white rounded-md text-sm cursor-pointer"
//                           >
//                             {dictionary.save}
//                           </p>
//                         </div>
//                       ) : (
//                         <p className="text-black py-2 text-sm">
//                           {currentBuildCard?.details.length > 0
//                             ? currentBuildCard?.details
//                             : `${dictionary.enterDetail}`}
//                         </p>
//                       )}
//                     </div>
//                   </div>
//                   {/* <div className="flex gap-5">
//                     <FaRegBookmark className="mt-1" />
//                     <div className="flex flex-col">
//                       <div className="flex items-center gap-2">
//                         <p className="text-sm font-thin">Name</p>
//                         <LuPencil className="text-demo text-sm" />
//                       </div>
//                       <p className="font-bold py-2">app</p>
//                       <div className="flex items-center gap-2">
//                         <p className="text-sm font-thin">Details</p>
//                         <LuPencil className="text-demo text-sm" />
//                       </div>
//                       <p className="py-2 text-sm">
//                         Enter Launch Swift Description
//                       </p>
//                     </div>
//                   </div> */}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="col-span-1">
//           <div className="m-5 flex flex-col border-[1px] border-gray-300 rounded-md p-5">
//             <p className="font-semibold">Payment Summary</p>
//             <div className="py-5">
//               <div className="flex justify-between items-center py-1 text-sm">
//                 <p>Customization Cost</p>
//                 <p>$428</p>
//               </div>
//               <div className="flex justify-between items-center py-1 text-sm">
//                 <p>Fixed Cost</p>
//                 <p>$2,137</p>
//               </div>
//               <hr className="my-2" />
//               <div className="flex justify-between items-center py-1 text-sm">
//                 <p className="font-bold">Total Cost</p>
//                 <p>$2,565</p>
//               </div>
//               <hr className="my-2" />
//               <div className="flex justify-between items-center py-1 text-sm">
//                 <p>Indicative Development Duration</p>
//                 <p className="font-bold">6 weeks</p>
//               </div>
//               <div className="flex justify-between items-center py-1 text-sm">
//                 <p>Estimated Delivery Date</p>
//                 <p className="font-bold">12-Nov-2024</p>
//               </div>
//               <hr className="my-2" />
//               <div className="flex justify-between items-center py-1 text-sm">
//                 <p className="font-bold">Promo Code</p>
//                 <p
//                   className="text-white p-2 bg-demo rounded-md cursor-pointer"
//                   onClick={handleApplyPromotionClick}
//                 >
//                   Apply Promotion
//                 </p>
//               </div>
//               {isPromoVisible && (
//                 <div className="my-1 w-full gap-2 flex items-center">
//                   <div className="border-gray-300 w-full border rounded-md my-1">
//                     <input
//                       className="p-2 w-full rounded-md font-medium outline-none"
//                       type="text"
//                       placeholder="Enter Promo Code"
//                       value={promoCode}
//                       onChange={handleInputChange}
//                     />
//                   </div>
//                   <p
//                     className="bg-slate-300 py-2 w-[90px] text-center text-white rounded-md text-sm cursor-pointer"
//                     onClick={handleApplyClick}
//                   >
//                     Apply
//                   </p>
//                 </div>
//               )}
//               <hr className="my-2" />
//             </div>
//             <button className="w-full text-white my-1 flex items-center p-3 justify-center bg-demo rounded-md text-sm">
//               Save
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SummaryMain;
