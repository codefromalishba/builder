import React, { useEffect, useState } from "react";
import Header from "./Header";
import { useRouter } from "next/navigation";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { usePathname } from "next/navigation";
import Image from "next/image";
import spinner from "../../../public/images/spinner1.gif";
// import { setCurrentFeature } from "../store/reducers/features";
// import { setRecentBuildCard } from "../store/reducers/buildcard";
import DashboardHeader from "./DashboardHeader";
import { sidebarData } from "@/data";
import { auth } from "../firebase";
import { setProfile } from "../store/profileSlice";

const HeaderLayout = ({ children, lang }) => {
  const user = useSelector((state) => state.profile);
  const [isLoading, setIsLoading] = useState(true);
  //   console.log("user from redux", user);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();
  const db = getFirestore();
  const dispatch = useDispatch();
  const pathname = usePathname();
  const sidebarDataToUse = sidebarData;

  //   useEffect(() => {
  //     if (pathname != `/${lang}`)
  //       document.body.classNameList.remove("disable-scroll");
  //   }, []);
  // const [refreshed, setRefreshed] = useState(false);

  // useEffect(() => {
  //   if (!refreshed) {
  //     console.log("refreshing");
  //     // Perform any logic needed before refreshing
  //     router.refresh();

  //     // Update state to prevent repeated refresh
  //     setRefreshed(true);
  //   }
  // }, [refreshed, router]);

  //   const updateCostsAndDuration = (buildCard) => {
  //     const selectedPhases = buildCard?.phases.filter((item) => item.selected);

  //     let newFixedCost = 0;
  //     let newCustomizationCost = 0;
  //     let newDuration = 0;

  //     selectedPhases.forEach((phase) => {
  //       let durationFactor, customizationFactor, fixedCostFactor;

  //       switch (phase.name) {
  //         case "Product Roadmap":
  //           durationFactor = 0.1;
  //           customizationFactor = 0.1;
  //           fixedCostFactor = 0.1;
  //           break;
  //         case "Design":
  //           durationFactor = 0.25;
  //           customizationFactor = 0.25;
  //           fixedCostFactor = 0.25;
  //           break;
  //         case "Professional Prototype":
  //           durationFactor = 0.12;
  //           customizationFactor = 0.18;
  //           fixedCostFactor = 0.18;
  //           break;
  //         case "MVP":
  //           durationFactor = 0.75;
  //           customizationFactor = 0.75;
  //           fixedCostFactor = 0.75;
  //           break;
  //         case "Full Build":
  //           durationFactor = 0.15;
  //           customizationFactor = 0.2;
  //           fixedCostFactor = 0.2;
  //           break;
  //         default:
  //           break;
  //       }

  //       const updatedFixedCost = buildCard.fixedCost * fixedCostFactor;
  //       const updatedCustomizationCost =
  //         buildCard.customizationCost * customizationFactor;
  //       const updatedDuration = Math.ceil(buildCard.duration * durationFactor);

  //       newFixedCost += updatedFixedCost;
  //       newCustomizationCost += updatedCustomizationCost;
  //       newDuration += updatedDuration;
  //     });

  //     dispatch({
  //       type: "setFixedCost",
  //       payload: Math.round(newFixedCost),
  //     });
  //     dispatch({
  //       type: "setCustomizationCost",
  //       payload: Math.round(newCustomizationCost),
  //     });
  //     dispatch({
  //       type: "setDuration",
  //       payload: newDuration,
  //     });
  //   };

  //   useEffect(() => {
  //     const unsubscribe = auth.onAuthStateChanged((authUser) => {
  //       if (authUser) {
  //         setIsLoading(false);
  //         console.log("autherized data", authUser);
  //         const userDocRef = doc(db, "users", authUser.uid);

  //         getDoc(userDocRef)
  //           .then(async (docSnapshot) => {
  //             if (docSnapshot.exists()) {
  //               const userData = docSnapshot.data();
  //               const incompleteItem = await userData.buildCards.find(
  //                 (item) => item.status === "incomplete"
  //               );
  //               if (!incompleteItem) {
  //                 console.log("No incomplete build card");

  //                 if (
  //                   pathname.endsWith("delivery") ||
  //                   pathname.endsWith("summary")
  //                 ) {
  //                   router.push(`/features`).then(() => {
  //                     dispatch({ type: "setUser", payload: userData });
  //                   });

  //                   return;
  //                 } else {
  //                   dispatch({ type: "setUser", payload: userData });
  //                 }
  //               } else {
  //                 console.log("incomplete build card found");
  //                 dispatch(setRecentBuildCard(incompleteItem));
  //                 const lastFeatureId =
  //                   incompleteItem.features[incompleteItem.features.length - 1];

  //                 sidebarDataToUse.some((category) => {
  //                   const selectedItem = category.dropDown?.find(
  //                     (item) => item.id === lastFeatureId
  //                   );
  //                   dispatch(setCurrentFeature(selectedItem));
  //                   dispatch({ type: "setUser", payload: userData });
  //                 });

  //                 // console.log(
  //                 //   "inside HeaderLayout",
  //                 //   incompleteItem.fixedCost,
  //                 //   incompleteItem.customizationCost,
  //                 //   incompleteItem.duration
  //                 // );

  //                 dispatch({
  //                   type: "setFeatures",
  //                   payload: incompleteItem.features,
  //                 });
  //                 dispatch({
  //                   type: "setCustomFeatures",
  //                   payload: incompleteItem.customFeatures,
  //                 });
  //                 updateCostsAndDuration(incompleteItem);
  //                 // dispatch({
  //                 //   type: "setFixedCost",
  //                 //   payload: incompleteItem.fixedCost,
  //                 // });
  //                 // dispatch({
  //                 //   type: "setCustomizationCost",
  //                 //   payload: incompleteItem.customizationCost,
  //                 // });
  //                 // dispatch({
  //                 //   type: "setDuration",
  //                 //   payload: incompleteItem.duration,
  //                 // });
  //                 dispatch({ type: "setUser", payload: userData });
  //               }
  //             } else {
  //               console.log("User data not found");
  //             }
  //           })
  //           .catch((error) => {
  //             console.error("Error fetching user data:", error);
  //           });
  //       } else {
  //         router.push("/");
  //       }
  //     });

  //     return () => unsubscribe();
  //   }, [db, dispatch, router]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setIsLoading(false);
        // console.log("autherized data", authUser);
        const userDocRef = doc(db, "users", authUser.uid);
        // console.log("userDocRef", userDocRef);

        getDoc(userDocRef)
          .then(async (docSnapshot) => {
            if (docSnapshot.exists()) {
              const userData = docSnapshot.data();

              console.log("data of user", userData);

              // ✅ Set name/email in profile state
              dispatch(setProfile(userData));

              const incompleteItem = await userData.buildCards.find(
                (item) => item.status === "incomplete"
              );

              if (!incompleteItem) {
                console.log("No incomplete build card");

                if (
                  pathname.endsWith("delivery") ||
                  pathname.endsWith("summary")
                ) {
                  router.push(`/feature`).then(() => {
                    dispatch(setProfile(userData));
                  });
                  return;
                } else {
                  dispatch(setProfile(userData));
                }
              } else {
                console.log("incomplete build card found");
                // dispatch(setRecentBuildCard(incompleteItem));

                const lastFeatureId =
                  incompleteItem.features[incompleteItem.features.length - 1];

                sidebarDataToUse.some((category) => {
                  const selectedItem = category.dropDown?.find(
                    (item) => item.id === lastFeatureId
                  );
                  dispatch(setCurrentFeature(selectedItem));
                  dispatch({ type: "setUser", payload: userData });
                });

                dispatch({
                  type: "setFeatures",
                  payload: incompleteItem.features,
                });
                dispatch({
                  type: "setCustomFeatures",
                  payload: incompleteItem.customFeatures,
                });

                updateCostsAndDuration(incompleteItem);

                dispatch({ type: "setUser", payload: userData });
              }
            } else {
              console.log("User data not found");
            }
          })
          .catch((error) => {
            console.error("Error fetching user data:", error);
          });
      } else {
        router.push("/");
      }
    });

    return () => unsubscribe();
  }, [db, dispatch, router]);

  return (
    <div>
      {!isLoading && (
        <DashboardHeader
          dropdownOpen={dropdownOpen}
          setDropdownOpen={setDropdownOpen}
        />
      )}
      {!isLoading ? (
        <div onClick={() => setDropdownOpen(false)}>{children}</div>
      ) : (
        <div className="flex justify-center items-center h-screen w-screen">
          <Image
            src="/images/spinner.gif"
            alt="loading..."
            width={56}
            height={56}
            className="w-14 h-14"
          />
        </div>
      )}
    </div>
  );
};

export default HeaderLayout;
