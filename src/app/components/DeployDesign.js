import React from "react";

const DeployDesign = () => {
  return (
    <div
      className="relative lg:h-[1024px] xl:h-[1150px] bg-cover bg-center p-header sm:p-pdeploy"
      style={{
        backgroundImage:
          "url(https://webappbuilder.netlify.app/_next/static/media/banner.c995ec0e.png)",
      }}
    >
      <div className="grid md:grid-cols-2 grid-cols-1 gap-20">
        <div>
          <div className="sm:p-deploy1 sm:text-left text-center">
            <h3 className="text-p font-bold ">
              Create and submit app store-ready builds
            </h3>
            <p className="font-sm py-4">
              Kick off a build. Then well submit it to te App Store and Play
              Store automatically if you like.
            </p>
            <img src="./images/DeployImg2.avif" />
          </div>
          <div className="  pt-7 sm:text-left text-center">
            <h3 className="text-p font-bold ">
              Dashboards to keep your team on track
            </h3>
            <p className="font-sm py-4">
              We keep track of all of your builds, submissions, and deployments,
              organized on web dashboards for your whole team.
            </p>
            <img src="./images/DeployImg3.avif" />
          </div>
        </div>
        <div>
          <div className="sm:p-deploy3 sm:text-left text-center">
            <h3 className="text-p font-bold ">Publish bug fixes in minutes</h3>
            <p className="font-sm py-4">
              Found a typo on your home screen? Don’t sweat: fix it, then
              publish an update that your users will receive the next time they
              launch your app.
            </p>
            <img src="./images/DeployImg4.avif" />
          </div>
          <div className="py-12 sm:text-left text-center">
            <h3 className="text-p font-bold ">Iterate with confidence</h3>
            <p className="font-sm py-4">
              With flexible deployment patterns and the ability to rollback in
              seconds, you can iterate faster than ever before..
            </p>
            <img src="./images/DeployImg5.avif" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeployDesign;
