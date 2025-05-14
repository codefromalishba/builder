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
import { initialPhases, sidebarData } from "@/data";
import { auth } from "../firebase";
import { setProfile } from "../store/profileSlice";
import {
  addFeature,
  changeSpeed,
  setCloudAndRange,
  setPhases,
  setSelectedFeature,
  updateInitialPhases,
  updatePlatforms,
  updateRecentBuildCard,
} from "../store/featureSlice";
import { mapFeatureIdsToSidebarData } from "../utils/mapFeatures";

const HeaderLayout = ({ children, lang }) => {
  const user = useSelector((state) => state.profile);
  const [isLoading, setIsLoading] = useState(true);
  //   console.log("user from redux", user);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();
  const db = getFirestore();
  const dispatch = useDispatch();
  const pathname = usePathname();
  const isFeaturePage = pathname.includes("/feature");
  const isSummaryPage = pathname.includes("/summary");
  const sidebarDataToUse = sidebarData;

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      const fetchUserData = async (uid) => {
        try {
          const userDocRef = doc(db, "users", uid);
          const docSnapshot = await getDoc(userDocRef);

          if (!docSnapshot.exists()) {
            console.log("User data not found");
            setIsLoading(false);
            return;
          }

          const userData = docSnapshot.data();
          dispatch(setProfile(userData));

          const incompleteItem = userData.buildCards?.find(
            (item) => item.status === "incomplete"
          );

          if (!incompleteItem) {
            console.log("No incomplete build card");

            if (pathname.endsWith("delivery") || pathname.endsWith("summary")) {
              router.push(`/feature`);
            } else {
              setIsLoading(false);
            }
            return;
          }

          console.log("Incomplete build card found:", incompleteItem);
          dispatch(updateRecentBuildCard(incompleteItem));
          dispatch(changeSpeed(incompleteItem?.speed));

          const defaultPlatforms = incompleteItem.platforms || [];
          const defaultPhases =
            incompleteItem?.phases
              ?.filter((p) => p.selected)
              .map((p) => parseInt(p.id)) || [];

          const updatedInitialPhases = initialPhases.map((phase) => ({
            ...phase,
            platform: defaultPlatforms,
            selected: defaultPhases.includes(parseInt(phase.id)),
          }));

          dispatch(setPhases(defaultPhases));
          dispatch(updatePlatforms(defaultPlatforms));
          dispatch(updateInitialPhases(updatedInitialPhases));
          dispatch(
            setCloudAndRange({
              cloudEnabled: incompleteItem.cloudEnabled,
              cloudRange: incompleteItem.cloudRange,
            })
          );

          const matchedFeatures = mapFeatureIdsToSidebarData(
            incompleteItem.features,
            sidebarData
          );

          matchedFeatures.forEach((feature) => {
            dispatch(addFeature(feature));
          });

          const lastFeatureId = incompleteItem.features?.at(-1);
          const lastFeature = matchedFeatures.find(
            (f) => f.id === lastFeatureId
          );

          if (lastFeature) {
            dispatch(setSelectedFeature(lastFeature));
          }

          dispatch({ type: "setUser", payload: userData });
          setIsLoading(false);
        } catch (error) {
          console.error("Error fetching user data:", error);
          setIsLoading(false);
        }
      };

      if (authUser) {
        fetchUserData(authUser.uid);
      } else {
        router.push("/");
      }
    });

    return () => unsubscribe();
  }, [db, dispatch, router]);

  return (
    <div>
      {!isLoading && (
        <div
          className={`${
            !isFeaturePage ? "fixed top-0 left-0 right-0 z-50" : ""
          }`}
        >
          <DashboardHeader
            dropdownOpen={dropdownOpen}
            setDropdownOpen={setDropdownOpen}
          />
        </div>
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
