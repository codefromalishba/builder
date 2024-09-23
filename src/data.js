import { GoChecklist, GoRocket } from "react-icons/go";
import { IoCodeSlashOutline } from "react-icons/io5";
import { PiShootingStarThin } from "react-icons/pi";
import { SiStyledcomponents } from "react-icons/si";
import essentials from "../public/images/icons/essentials.png";
import adminPanel from "../public/images/icons/admin-panel.png";
import content from "../public/images/icons/content.png";
import customerInsight from "../public/images/icons/customer-insight.png";
import financePayments from "../public/images/icons/finance-payments.png";
import photosVideos from "../public/images/icons/photos-videos.png";
import productivity from "../public/images/icons/productivity.png";
import projectManagement from "../public/images/icons/project-management.png";
import securityPrivacy from "../public/images/icons/security-privacy.png";
import socials from "../public/images/icons/socials.png";
import chat from "../public/images/icons/chat.png";
import share from "../public/images/icons/share.png";
import reviews from "../public/images/icons/reviews.png";
import audiovideo from "../public/images/icons/audiovideo.png";
import comnoti from "../public/images/icons/comnoti.png";
import tools from "../public/images/icons/tools.png";
import filemanagement from "../public/images/icons/filemanagement.png";
import camera from "../public/images/icons/camera.png";
import imageIcon from "../public/images/icons/imageIcon.png";
import business from "../public/images/icons/business.png";
import ecommerce from "../public/images/icons/ecommerce.png";

export const sidebarData = [
  {
    name: "Essentials",
    img: essentials,
    dropDown: [
      {
        id: 1,
        name: "Signup/login with email",
        icon: "https://statestreetdebating.site/lauchswift/icons/login-with-google.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/login-with-google.png",
        //web needs fixing
        web: "https://statestreetdebating.site/lauchswift/web/phone-login.png",
        price: "412.84",
        timeline: "2",
        description:
          "Users sign up on the application using their name, email, and password. They can then use these details to log in. Users can also reset passwords through the forgot password function.",
      },
      {
        id: 2,
        name: "Apple Login",
        icon: `https://statestreetdebating.site/lauchswift/icons/login-with-apple.png`,
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/login-with-apple.png",
        //needs fixing on web - fixed for now
        web: "https://statestreetdebating.site/lauchswift/web/phone-login.png",
        price: "120",
        timeline: "1.5",
        description:
          "Users can easily access the application using their Apple account. No need to create an account, with simply a click of button their account would be created using their existing Apple credentials to log in and sign up. Needs a third-party integration, so the final cost depends on their pricing.",
      },
      {
        id: 3,
        name: "Google login",
        icon: `https://statestreetdebating.site/lauchswift/icons/login-with-google.png`,
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/login-with-google.png",
        //needs fixing on web
        web: "https://statestreetdebating.site/lauchswift/web/phone-login.png",
        price: "340.00",
        timeline: "2",
        description:
          "Users can easily access the application using their Google account. No need to create an account, with simply a click of button their account would be created using their existing Google credentials to log in and sign up. Needs a third-party integration, so the final cost depends on their pricing.",
      },
      {
        id: 4,
        name: "Facebook login",
        icon: `https://statestreetdebating.site/lauchswift/icons/login-with-facebook.png`,
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/login-with-facebook.png",
        //needs fixing on web
        web: "https://statestreetdebating.site/lauchswift/web/",
        price: "720.00",
        timeline: "3",
        description:
          "Users can easily access the application using their Facebook account. No need to create an account, with simply a click of button their account would be created using their existing Facebook credentials to log in and sign up. Needs a third-party integration, so the final cost depends on their pricing.",
      },
      {
        id: 5,
        name: "Signup/login with phone number",
        icon: `https://statestreetdebating.site/lauchswift/icons/login-with-phone.png`,
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/login-with-phone.png",
        web: "https://statestreetdebating.site/lauchswift/web/phone-login.png",
        price: "278.00",
        timeline: "1.5",
        description:
          "Users can log in to the product using their mobile phone numbers, removing the need for usernames and passwords. Helpful when product security isn't a priority or to make it easier to log in.",
      },
      {
        id: 6,
        name: "Admin login",
        icon: "https://statestreetdebating.site/lauchswift/icons/admin-dashboard.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/admin-dashboard.png",
        web: "https://statestreetdebating.site/lauchswift/web/admin-dashboard.png",
        price: "350.00",
        timeline: "3",
        description:
          "Admin can login and easily access the application to manage administrative tasks. They can then use these details to log in. Users can also reset passwords through the forgot password function.",
      },
      {
        id: 7,
        name: "Employee login",
        icon: "https://statestreetdebating.site/lauchswift/icons/employee-login.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/employee-login.png",
        web: "https://statestreetdebating.site/lauchswift/web/employee-login.png",
        price: "570.00",
        timeline: "3",
        description:
          "Employees can login and easily access the application to manage tasks assigned to them. They can then use these details to log in. Employees can also reset passwords through the forgot password function.",
      },
      {
        id: 8,
        name: "App feedback",
        icon: "https://statestreetdebating.site/lauchswift/icons/app-feedback.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/app-feedback.png",
        web: "https://statestreetdebating.site/lauchswift/web/app-feedback.png",
        price: "240.00",
        timeline: "1",
        description:
          "Allows users to give and receive feedback on a product, service, or performance. Useful for businesses or individuals looking to improve their offerings or performance by gathering feedback from their customers or peers.",
      },
      {
        id: 9,
        name: "Account creation",
        //needs fixing on web
        icon: "https://statestreetdebating.site/lauchswift/icons/employee-login.png",
        //needs fixing on web
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/login-with-google.png",
        //needs fixing on web
        web: "https://statestreetdebating.site/lauchswift/web/phone-login.png",
        price: "520.00",
        timeline: "2",
        description:
          "Create an account on behalf of users. Provide this information manually or send it automatically with the email notifications feature. Allows for authentication before granting users access.",
      },
      {
        id: 10,
        name: "Splash screens",
        icon: "https://statestreetdebating.site/lauchswift/icons/splash-screen.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/splash-screen.png",
        web: "https://statestreetdebating.site/lauchswift/web/backend-feature.png",
        price: "250.00",
        timeline: "1.5",
        description:
          "This is the first screen a user sees when the product opens up. It reassures them that the app is launching and can give them a short intro to the app too. In most cases, this would be a company logo and loading symbol but animations could be added in here too.",
      },
      {
        id: 11,
        name: "Hamburger menu and drawer",
        icon: "https://statestreetdebating.site/lauchswift/icons/hamburger-menu-and-drawer.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/hamburger-menu-and-drawer.png",
        web: "https://statestreetdebating.site/lauchswift/web/hamburger-menu-drawer.png",
        price: "1481.00",
        timeline: "1.5",
        description:
          "It is a user interface feature that consists of a button with three horizontal lines stacked on top of each other which expands when the user clicks or taps it, revealing app menu and navigation options.",
      },
      {
        id: 12,
        name: "Settings",
        icon: "https://statestreetdebating.site/lauchswift/icons/settings.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/setting.png",
        web: "https://statestreetdebating.site/lauchswift/web/privacy-settings.png",
        price: "768.07",
        timeline: "3",
        description:
          "Allowing users to access and interact with a list of settings of the application. These could include personal settings or settings for how they interact with the product.",
      },
      {
        id: 13,
        name: "Searchbar with fields popup",
        icon: "https://statestreetdebating.site/lauchswift/icons/searchbar-popup.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/searchbar-popup.png",
        web: "https://statestreetdebating.site/lauchswift/web/searchbar-popup.png",
        price: "850.87",
        timeline: "2",
        description:
          "Allowing users the ability to find specific information or content quickly and easily. Once searched, users can select the result that best meets their requirements.",
      },
      // {
      //   id: 14,
      //   name: "Terms and Conditions",
      //   icon: "https://statestreetdebating.site/lauchswift/icons/",
      //   mobile: "https://statestreetdebating.site/lauchswift/mobile/",
      //   web: "https://statestreetdebating.site/lauchswift/web/",
      //   price: "234.44",
      //   timeline: "2",
      //   description:
      //     "Asking the user to confirm they agree with terms and conditions before using the product. This feature is often used for age verification or to explain what is done with user data.",
      // },
      {
        id: 15,
        name: "Breadcrumb navigation",
        icon: "https://statestreetdebating.site/lauchswift/icons/breadcrumb-navigation.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/breadcrumb_navigation.png",
        web: "https://statestreetdebating.site/lauchswift/web/breadcrumb-navigation.png",
        price: "542.00",
        timeline: "2",
        description:
          'Helps users navigate through a website\'s structure. It appears at the top of a page and shows the user their location in the product. Each clickable "crumb" represents a different level of the structure.',
      },
      // {
      //   id: 16,
      //   name: "Landing page",
      //   icon: "https://statestreetdebating.site/lauchswift/icons/",
      //   mobile: "https://statestreetdebating.site/lauchswift/mobile/",
      //   web: "https://statestreetdebating.site/lauchswift/web/",
      //   price: "198.00",
      //   timeline: "2",
      //   description: "",
      // },
      {
        id: 17,
        name: "Logo Design",
        icon: "https://statestreetdebating.site/lauchswift/icons/logo-design.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/logo-design.png",
        web: "https://statestreetdebating.site/lauchswift/web/logo-design.png",
        price: "1,245.00",
        timeline: "2",
        description:
          "Users can select from a library of royalty-free logos in .jpg/.png formats and request customizations. It allows the user to create professional-looking logos without the need to hire a designer. It does requires third-party integration, which may impact the final cost.",
      },
    ],
  },
  {
    name: "Security",
    dropDown: [
      {
        id: 18,
        name: "OTP sending through Twilio",
        icon: "https://statestreetdebating.site/lauchswift/icons/OTP-verification.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/OTP-verification.png",
        web: "https://statestreetdebating.site/lauchswift/web/OTP-verification.png",
        price: "547.00",
        timeline: "2",
        description:
          "User can use thir phone number an One-Time Password to authenticate themselves in the app. This adds an extra layer of security to the product. Useful for products that hold sensitive information.",
      },
      {
        id: 19,
        name: "Two-Factor Authentication",
        icon: "https://statestreetdebating.site/lauchswift/icons/two-factor-auth.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/two-factor-auth.png",
        web: "https://statestreetdebating.site/lauchswift/web/two-factor-auth.png",
        price: "288.00",
        timeline: "2",
        description:
          "Once users have entered their username and password correctly, they enter a One-Time Password (OTP) sent via SMS. This adds an extra layer of security to the product. Useful for products that hold sensitive information.",
      },
      {
        id: 20,
        name: "Know Your Customer (KYC) Verification",
        icon: "https://statestreetdebating.site/lauchswift/icons/kyc-verification.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/kyc-verification.png",
        web: "https://statestreetdebating.site/lauchswift/web/kyc-verification.png",
        price: "623.00",
        timeline: "3",
        description:
          "Allows you to carry out Know Your Customer verification on your users.",
      },
      {
        id: 21,
        name: "Passcode lock",
        icon: "https://statestreetdebating.site/lauchswift/icons/passcode-lock.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/passcode-lock.png",
        web: "https://statestreetdebating.site/lauchswift/web/passcode-lock.png",
        price: "453.00",
        timeline: "2",
        description:
          "A security feature that requires users to enter a passcode or PIN to access the product. Preventing unauthorised access to their account.",
      },
      {
        id: 22,
        name: "FaceID Authentication",
        icon: "https://statestreetdebating.site/lauchswift/icons/face-id.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/face-id.png",
        web: "https://statestreetdebating.site/lauchswift/web/face-id.png",
        price: "698.00",
        timeline: "2",
        description:
          "Offer FaceID authentication as a payment method. Gives users a fast and secure way to checkout without having to login to external platforms. Needs a third-party integration, so the final cost depends on their pricing.",
      },
      {
        id: 23,
        name: "Fingerprint authentication",
        icon: "https://statestreetdebating.site/lauchswift/icons/fingerprint-auth.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/fingerprint-auth.png",
        web: "https://statestreetdebating.site/lauchswift/web/finderprint-auth.png",
        price: "549.00",
        timeline: "2",
        description:
          "Offer fingerprint authentication as a payment method. Gives users a fast and secure way to checkout without having to login to external platforms. Needs a third-party integration, so the final cost depends on their pricing.",
      },
      {
        id: 24,
        name: "Privacy Settings",
        icon: "https://statestreetdebating.site/lauchswift/icons/privacy-setting.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/privacy-setting.png",
        web: "https://statestreetdebating.site/lauchswift/web/privacy-settings.png",
        price: "193.00",
        timeline: "1.5",
        description:
          "Let users control access to their personal information. They can choose who sees their profile and posts, making them feel safer when using the product.",
      },
      {
        id: 25,
        name: "Captcha",
        icon: "https://statestreetdebating.site/lauchswift/icons/captcha.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/captcha.png",
        web: "https://statestreetdebating.site/lauchswift/web/captcha.png",
        price: "352.00",
        timeline: "2",
        description:
          "Request users to complete a simple verification test to prove they're human. It shows a test that's easy for humans to pass but difficult for bots, verifying it's a real person accessing the site. Needs a third-party integration, so the final cost depends on their pricing.",
      },
    ],
    img: securityPrivacy,
  },
  {
    name: "Social",
    img: socials,
    dropDown: [
      {
        id: 26,
        name: "Add friends",
        icon: "https://statestreetdebating.site/lauchswift/icons/",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/add-friend.png",
        web: "https://statestreetdebating.site/lauchswift/web/add-friend.png",
        price: "260.00",
        timeline: "2",
        description:
          "Users can add other users to their networks. Particularly useful for social networking and communication apps, where users want to connect and stay in touch with their friends and contacts.",
      },
      {
        id: 27,
        name: "Friends list",
        icon: "https://statestreetdebating.site/lauchswift/icons/friends-list.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/friends-list.png",
        web: "https://statestreetdebating.site/lauchswift/web/firends-list.png",
        price: "320.00",
        timeline: "2",
        description:
          "Users can add other users to their friend list, allowing them to easily keep track of their connections and quickly access their profiles. They can also see recently added and mutual friends.",
      },
      {
        id: 28,
        name: "List of followers",
        icon: "https://statestreetdebating.site/lauchswift/icons/list-of-followers.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/list-of-followers.png",
        web: "https://statestreetdebating.site/lauchswift/web/list-of-followers.png",
        price: "560.00",
        timeline: "2.5",
        description:
          "Show users a list of their followers and let them track their content, such as new posts or comments. It helps in making the user experiences more tailored and relevant.",
      },
      {
        id: 29,
        name: "Like a post",
        icon: "https://statestreetdebating.site/lauchswift/icons/like-post.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/like-post.png",
        web: "https://statestreetdebating.site/lauchswift/web/activity-feed.png",
        price: "175.00",
        timeline: "1.5",
        description:
          "Users can show they like a piece of content that's been shared inside the product. Helps users display their interests to others, and gives useful insight when it comes to understanding their preferences and motivations.",
      },
      {
        id: 30,
        name: "Repost",
        icon: "https://statestreetdebating.site/lauchswift/icons/repost.png",
        mobile: "https://statestreetdebating.site/lauchswift/mobile/repost.png",
        web: "https://statestreetdebating.site/lauchswift/web/activity-feed.png",
        price: "358.00",
        timeline: "2",
        description:
          "Users can repost content published inside the product on their profile. The feature is commonly used on social media platforms to increase the reach of interesting or relevant content.",
      },
      {
        id: 31,
        name: "Creating a post",
        icon: "https://statestreetdebating.site/lauchswift/icons/create-post.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/create-posts.png",
        web: "https://statestreetdebating.site/lauchswift/web/create-posts.png",
        price: "312.00",
        timeline: "2",
        description:
          "Users can create and publish content. They can customize the format and style of their posts and attach media. An essential tool for users to share their thoughts, ideas and stories with others.",
      },
      {
        id: 32,
        name: "Block Users",
        icon: "https://statestreetdebating.site/lauchswift/icons/block-user.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/block-users.png",
        web: "https://statestreetdebating.site/lauchswift/web/block-users.png",
        price: "249.00",
        timeline: "1.5",
        description:
          "Both users and admins can block users within the product. Admins can control users' access to all content, while users can prevent specific individuals from interacting with them.",
      },
      // {
      //   id: 33,
      //   name: "Invite Friends",
      //   icon: "https://statestreetdebating.site/lauchswift/icons/",
      //   mobile: "https://statestreetdebating.site/lauchswift/mobile/",
      //   web: "https://statestreetdebating.site/lauchswift/web/",
      //   price: "542.00",
      //   timeline: "2",
      //   description:
      //     "Users can invite friends and contacts to join them on the product via social media, email or text message (SMS). Great for increasing the product's visibility and reach.",
      // },
      {
        id: 34,
        name: "Disable ads",
        icon: "https://statestreetdebating.site/lauchswift/icons/disable-ads.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/disable-ads.png",
        web: "https://statestreetdebating.site/lauchswift/web/disable-ads.png",
        price: "347.00",
        timeline: "2",
        description:
          "Users can disable ads from displaying. Use this to manage different levels of offerings inside the product, such as freemium or paid-for, or with audiences of different ages.",
      },
      {
        id: 35,
        name: "Customisable User Profile",
        icon: "https://statestreetdebating.site/lauchswift/icons/customise-user-profile.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/customise-user-profile.png",
        web: "https://statestreetdebating.site/lauchswift/web/custom-user-profile.png",
        price: "230.00",
        timeline: "1",
        description:
          "Users can create customisable profiles with the option to add extra fields to share more information about themselves. Great for letting user share information they believe to be most relevant.",
      },
      {
        id: 36,
        name: "Mention/Tagging",
        icon: "https://statestreetdebating.site/lauchswift/icons/tagging.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/tagging.png",
        web: "https://statestreetdebating.site/lauchswift/web/tagging.png",
        price: "531.00",
        timeline: "2",
        description:
          "Users can tag or mention another user's profile when they create a post or write a comment. Doing so helps to build relationships and encourage conversations within the product.",
      },
      {
        id: 37,
        name: "Advanced search",
        icon: "https://statestreetdebating.site/lauchswift/icons/advanced-search.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/advanced-search.png",
        web: "https://statestreetdebating.site/lauchswift/web/advanced-search.png",
        price: "863.00",
        timeline: "2",
        description:
          "Delivers improved search experience, with filters and keywords to generate relevant results, even when the search does not find an exact match. Also, users can conveniently access their search history for easy reference.",
      },
      {
        id: 38,
        name: "Affiliate URL",
        icon: "https://statestreetdebating.site/lauchswift/icons/affiliate-url.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/affiliate-url.png",
        web: "https://statestreetdebating.site/lauchswift/web/affiliate-url.png",
        price: "390.00",
        timeline: "2",
        description:
          "Monetise your platform by adding affiliate URLs to listed items to generate commission. Users are redirected to the third-party website when they click the displayed link.",
      },
      {
        id: 39,
        name: "Save Search",
        icon: "https://statestreetdebating.site/lauchswift/icons/save-search.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/save-search.png",
        web: "https://statestreetdebating.site/lauchswift/web/save-search.png",
        price: "975.00",
        timeline: "2",
        description:
          "Saving searches makes it more convinent for the user to get to thier previously searched items if they want to search them back again",
      },
    ],
  },
  {
    name: "Chat",
    img: chat,
    dropDown: [
      {
        id: 40,
        name: "Chat",
        icon: "https://statestreetdebating.site/lauchswift/icons/chatscreen.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/chatscreen.png",
        web: "https://statestreetdebating.site/lauchswift/web/conversation-threading.png",
        price: "850.00",
        timeline: "2",
        description:
          "Users can live chat with each other on a 1-on-1 basis. They can write messages, share images and send and receive push notifications. Overall, an efficient way for people to communicate in real-time. Needs a third-party integration, so the final cost depends on their pricing.",
      },
      {
        id: 41,
        name: "Group chat",
        icon: "https://statestreetdebating.site/lauchswift/icons/group-chat.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/group-chat.png",
        web: "https://statestreetdebating.site/lauchswift/web/group-chat.png",
        price: "250.00",
        timeline: "2",
        description:
          "Users can create a group with other users, give that group a name and chat with all users within the group. Great for improving communication. Needs a third-party integration, so the final cost depends on their pricing.",
      },
      {
        id: 42,
        name: "Chat Backup/Restore",
        icon: "https://statestreetdebating.site/lauchswift/icons/chat-backup.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/chat-backup.png",
        web: "https://statestreetdebating.site/lauchswift/web/chat-backup.png",
        price: "670.00",
        timeline: "3",
        description:
          "Allows users to save and restore their chat history. Users can back up their chat messages to a cloud or locally-based storage service. They can then access these from any device they sign in on.",
      },
      {
        id: 43,
        name: "Chatbot",
        icon: "https://statestreetdebating.site/lauchswift/icons/chatbot.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/chatbot.png",
        web: "https://statestreetdebating.site/lauchswift/web/chatbot.png",
        price: "560.00",
        timeline: "3",
        description:
          "The rule-based chatbot automates frequently asked questions, providing quick and consistent responses based on predefined questions. It's an effective tool for streamlining customer service and improving efficiency. Needs a third-party integration, so the final cost depends on their pricing.",
      },
      {
        id: 44,
        name: "Group Video Call",
        icon: "https://statestreetdebating.site/lauchswift/icons/group-video-calls.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/group-video-calls.png",
        web: "https://statestreetdebating.site/lauchswift/web/group-video-call.png",
        price: "431.00",
        timeline: "2",
        description:
          "Users can have a video call in groups of up to 16 others. It facilitates remote meetings, enhances teamwork, and fosters efficient group interactions. Needs a third-party integration, so the final cost depends on their pricing.",
      },
      {
        id: 45,
        name: "Conversation Threading",
        icon: "https://statestreetdebating.site/lauchswift/icons/conversation-threading.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/conversation-threading.png",
        web: "https://statestreetdebating.site/lauchswift/web/conversation-threading.png",
        price: "781.00",
        timeline: "2",
        description:
          "Structure conversations in a way where users can reply to specific messages. Responses are grouped and shown under the original message, making it easier for users to keep track of the discussion.",
      },
      {
        id: 46,
        name: "Audio/video messenger",
        icon: "https://statestreetdebating.site/lauchswift/icons/audio-call.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/audio-video-messenger.png",
        web: "https://statestreetdebating.site/lauchswift/web/audio-video-messenger.png",
        price: "340.00",
        timeline: "2",
        description:
          "Users can instantly send and receive audio and video messages to each other on a 1-2-1 basis. This is often used when users can't or don't want to use text. Needs a third-party integration, so the final cost depends on their pricing.",
      },
      {
        id: 47,
        name: "Webinar",
        icon: "https://statestreetdebating.site/lauchswift/icons//group-video-call.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile//group-video-call.png",
        web: "https://statestreetdebating.site/lauchswift/web/group-video-call.png",
        price: "380.00",
        timeline: "2",
        description:
          "Broadcast a presentation, lecture, workshop, or seminar to an audience from anywhere. The audience can view these live with an internet connection. Needs a third-party integration, so the final cost depends on their pricing.",
      },
    ],
  },
  {
    name: "Share",
    img: share,
    dropDown: [
      {
        id: 48,
        name: "Share contact",
        icon: "https://statestreetdebating.site/lauchswift/icons/share-contact.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/share-contact.png",
        web: "https://statestreetdebating.site/lauchswift/web/share-contact.png",
        price: "541.00",
        timeline: "2",
        description:
          "Let users share their contact information quickly and easily, including phone numbers, email addresses, and social media profiles, promoting efficient communication.",
      },
      {
        id: 49,
        name: "Link share",
        icon: "https://statestreetdebating.site/lauchswift/icons/share-link.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/share-link.png",
        web: "https://statestreetdebating.site/lauchswift/web/link-share.png",
        price: "562.00",
        timeline: "2.5",
        description:
          "Users can share photos, videos and documents hosted inside the product. Each share generates a unique URL for anyone to click on, making it useful for promoting content and reaching new audiences.",
      },
    ],
  },
  {
    name: "Reviews and Feedback",
    img: reviews,
    dropDown: [
      {
        id: 50,
        name: "App review prompt",
        icon: "https://statestreetdebating.site/lauchswift/icons/app-review-prompt.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/app-review-prompt.png",
        web: "https://statestreetdebating.site/lauchswift/web/app-review-prompt.png",
        price: "390.00",
        timeline: "1",
        description:
          "Gather customer feedback, increase ratings and boost rankings in app stores by prompting customers to leave reviews. Customize the message that users see and the frequency of prompts displayed.",
      },
      {
        id: 51,
        name: "Surveys",
        icon: "https://statestreetdebating.site/lauchswift/icons/surveys.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/surveys.png",
        web: "https://statestreetdebating.site/lauchswift/web/surveys.png",
        price: "180.00",
        timeline: "1",
        description:
          "Gather customer insights by asking for their feedback. Users can provide ratings, answer multiple-choice questions and add comments. Use the data to improve customer experience and product offerings.",
      },
      {
        id: 52,
        name: "Feedback dashboard",
        icon: "https://statestreetdebating.site/lauchswift/iconsapp-feedback.png/",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/app-feedback.png",
        web: "https://statestreetdebating.site/lauchswift/web/backend-feature.png",
        price: "275.00",
        timeline: "2",
        description:
          "Customer-facing teams can collect and store feedback from their audiences. Use this to build up customer insight or measure overall sentiment among large segments or groups.",
      },
    ],
  },
  {
    name: "Audio and Videos",
    img: audiovideo,
    dropDown: [
      {
        id: 53,
        name: "Audio Player",
        icon: "https://statestreetdebating.site/lauchswift/icons/audio-player.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/audio-player.png",
        web: "https://statestreetdebating.site/lauchswift/web/audio-player.png",
        price: "657.00",
        timeline: "3",
        description:
          "A central hub where users can manage their audio. They can easily control basic functions like playing, pausing, and controlling the volume. Advanced add-ons features like sound bass boosting and EQ can be added as well if preferred.",
      },
      // {
      //   id: 54,
      //   name: "Video player",
      //   icon: "https://statestreetdebating.site/lauchswift/icons/camera-video-recordin.png",
      //   mobile: "https://statestreetdebating.site/lauchswift/mobile/",
      //   web: "https://statestreetdebating.site/lauchswift/web/",
      //   price: "743.00",
      //   timeline: "3",
      //   description:
      //     "A central hub where users can manage their audio. They can easily control basic functions like playing, pausing, and controlling the volume. Advanced add-ons features like sound bass boosting and EQ can be added as well if preferred.",
      // },
      {
        id: 55,
        name: "Radio Stations",
        icon: "https://statestreetdebating.site/lauchswift/icons/radio-station.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/radio-station.png",
        web: "https://statestreetdebating.site/lauchswift/web/radio-station.png",
        price: "980.00",
        timeline: "2.5",
        description:
          "Users can access radio stations inside the product. These can be accessed with one tap/click. This does require third-party integration, so the final cost depends on their pricing.",
      },
      {
        id: 56,
        name: "Download options",
        icon: "https://statestreetdebating.site/lauchswift/icons/download-options.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/download-options.png",
        web: "https://statestreetdebating.site/lauchswift/web/download-options.png",
        price: "342.00",
        timeline: "2",
        description: "A feature to download documents/media/files to a device.",
      },
      {
        id: 57,
        name: "Archive",
        icon: "https://statestreetdebating.site/lauchswift/icons/archive.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/archive.png",
        web: "https://statestreetdebating.site/lauchswift/web/archive.png",
        price: "287.00",
        timeline: "2",
        description:
          "Users can archive their photos, videos, and documents without deleting them. All content is recoverable for evidence and compliance reasons or if the user wants to restore it.",
      },
      {
        id: 58,
        name: "Video Management",
        icon: "https://statestreetdebating.site/lauchswift/icons/video-management.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/video-management.png",
        web: "https://statestreetdebating.site/lauchswift/web/video-management.png",
        price: "760.00",
        timeline: "1.5",
        description:
          "Users can organize videos stored inside the product. Includes options to add, delete, and find related videos.",
      },
      {
        id: 59,
        name: "Video Editing Tools",
        icon: "https://statestreetdebating.site/lauchswift/icons/video-editing.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/video-editing.png",
        web: "https://statestreetdebating.site/lauchswift/web/video-editing.png",
        price: "1,200.00",
        timeline: "3",
        description:
          "Offer users a video editing suite inside the product. Tools include trimming, splitting, merging clips, and adding effects, transitions, and multimedia elements. They can also reduce video quality to reduce file size. Needs a third-party integration, so the final cost depends on their pricing.",
      },
    ],
  },
  {
    name: "Communications & Notifications",
    dropDown: [
      {
        id: 60,
        name: "Audio Call",
        icon: "https://statestreetdebating.site/lauchswift/icons/audio-call.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/audio-call.png",
        web: "https://statestreetdebating.site/lauchswift/web/audio-call.png",
        price: "280.00",
        timeline: "2",
        description:
          "Users can communicate with each other through voice calls while staying within the product, eliminating the need to use their traditional phone service's call allowance. Needs a third-party integration, so the final cost depends on their pricing.",
      },
      {
        id: 61,
        name: "Audio Library",
        icon: "https://statestreetdebating.site/lauchswift/icons/audio-library.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/audio-library.png",
        web: "https://statestreetdebating.site/lauchswift/web/audio-library.png",
        price: "930.00",
        timeline: "2",
        description:
          "Users can create a library of audio files, such as podcasts or company recordings. Store everything in one place for easy access.",
      },
      {
        id: 62,
        name: "Call Recording",
        icon: "https://statestreetdebating.site/lauchswift/icons/call-recording.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/call-recording.png",
        web: "https://statestreetdebating.site/lauchswift/web/call-recording.png",
        price: "390.00",
        timeline: "1.5",
        description:
          "Provide users with the ability to record calls within the product. They can use this to record the audio from voice calls or meetings. Great for keeping records of important conversations. Needs a third-party integration, so the final cost depends on their pricing.",
      },
      {
        id: 63,
        name: "Voicenotes",
        icon: "https://statestreetdebating.site/lauchswift/icons/voice-notes.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/voice-notes.png",
        web: "https://statestreetdebating.site/lauchswift/web/voice-notes.png",
        price: "780.00",
        timeline: "1.5",
        description:
          "Users can make and store a voice recording inside the product. Voice notes offer a way to make quick recordings that can be accessed via a library and listened to anytime.",
      },
      {
        id: 64,
        name: "Push notifications",
        icon: "https://statestreetdebating.site/lauchswift/icons/push-notification.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/push-notification.png",
        web: "https://statestreetdebating.site/lauchswift/web/push-notifications.png",
        price: "610.00",
        timeline: "2",
        description:
          "Send notifications users can see and read when they are not inside the product. Helpful when you need to send important or new information and is great for increasing engagement.",
      },
      {
        id: 65,
        name: "In app notifications",
        icon: "https://statestreetdebating.site/lauchswift/icons/in-app-notifcations.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/in-app-notifications.png",
        web: "https://statestreetdebating.site/lauchswift/web/in-app-notifications.png",
        price: "540.00",
        timeline: "1.5",
        description:
          "An interface for users to view and manage notifications they receive within the product. From there, they can perform functions such as reply, mark as read and delete. Helpful for keeping users informed.",
      },
      {
        id: 66,
        name: "Automated Email Sending",
        icon: "https://statestreetdebating.site/lauchswift/icons/automated.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/auto-email-sending.png",
        web: "https://statestreetdebating.site/lauchswift/web/auto-email-sending.png",
        price: "765.00",
        timeline: "2",
        description:
          "Send automated emails to users. These can be based on customized rules or actions such as reminders.",
      },
      {
        id: 67,
        name: "Notification sound and haptics",
        icon: "https://statestreetdebating.site/lauchswift/icons/notification-sound-haptics.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/notification-sound-haptics.png",
        web: "https://statestreetdebating.site/lauchswift/web/backend-feature.png",
        price: "189.00",
        timeline: "1.5",
        description:
          "Enables customised sound and haptics in the product to provide a personlied user experience",
      },
      {
        id: 68,
        name: "Schedule Notifications",
        icon: "https://statestreetdebating.site/lauchswift/icons/schedule-notification.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/schedule-notifcation.png",
        web: "https://statestreetdebating.site/lauchswift/web/schedule-notification.png",
        price: "590.00",
        timeline: "2",
        description:
          "Send notifications with daily schedule details. Choose when these are sent, depending on time zone.",
      },
      {
        id: 69,
        name: "Desktop Notifications",
        icon: "https://statestreetdebating.site/lauchswift/icons/desktop-notifications.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/desktop-notifications.png",
        web: "https://statestreetdebating.site/lauchswift/web/desktop-notifications.png",
        price: "741.00",
        timeline: "2.5",
        description:
          "Send push notifications to users' desktops. Useful when sending important messages that users need to see promptly or if your audience is using desktop-based screens rather than mobile.",
      },
      {
        id: 70,
        name: "Automatic Reminders",
        icon: "https://statestreetdebating.site/lauchswift/icons/auto-reminders.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/auto-reminders.png",
        web: "https://statestreetdebating.site/lauchswift/web/auto-reminders.png",
        price: "420.00",
        timeline: "2",
        description:
          "Send automatic reminders to users. Set these up to send based on the required criteria, with time zones in mind. Send these to prompt payments, indicate a task is almost due and more.",
      },
      {
        id: 71,
        name: "Real-time updates",
        icon: "https://statestreetdebating.site/lauchswift/icons/realtime-updates.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/realtime-updates.png",
        web: "https://statestreetdebating.site/lauchswift/web/realtime-updates.png",
        price: "960.00",
        timeline: "3",
        description:
          "Any updates to data inside the product are shown instantly. Constantly update content, ensuring users always have the latest data. This feature can improve efficiency, accuracy, and user experience.",
      },
      {
        id: 72,
        name: "Email Notifications",
        icon: "https://statestreetdebating.site/lauchswift/icons/email-notification.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/email-notifications.png",
        web: "https://statestreetdebating.site/lauchswift/web/email-notifications.png",
        price: "320.00",
        timeline: "2",
        description:
          "Send email notifications to your users. Great for keeping in contact with them from outside the product. They can also unsubscribe from these emails if they wish.",
      },
      {
        id: 73,
        name: "Email Subscriptions",
        icon: "https://statestreetdebating.site/lauchswift/icons/email-subscription.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/email-subscriptions.png",
        web: "https://statestreetdebating.site/lauchswift/web/email-subscriptions.png",
        price: "380.00",
        timeline: "2",
        description:
          "Make a message appear which invites a user to subscribe to your content with an email address. This can be integrated into an admin console or CRM, to manage subscriptions from one place.",
      },
    ],
    img: comnoti,
  },
  {
    name: "Utility & Tools",
    img: tools,
    dropDown: [
      {
        id: 74,
        name: "Background Fetch",
        icon: "https://statestreetdebating.site/lauchswift/icons/background-fetch.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/background-fetch.png",
        web: "https://statestreetdebating.site/lauchswift/web/backend-feature.png",
        price: "351.00",
        timeline: "2",
        description:
          "Utilising task manager we fetch background activities from within the app even when it is not in use at an interval the team would decide.",
      },
      {
        id: 75,
        name: "Document Picker",
        icon: "https://statestreetdebating.site/lauchswift/icons/pdf-scanner.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/pdf-scanner.png",
        web: "https://statestreetdebating.site/lauchswift/web/pdf-scanner.png",
        price: "498.00",
        timeline: "2",
        description:
          "Provides Native UI element to browse and select document from within the device's local and cloud storage to use it within the application.",
      },

      {
        id: 76,
        name: "Haptics",
        icon: "https://statestreetdebating.site/lauchswift/icons/haptics.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/haptics.png",
        web: "https://statestreetdebating.site/lauchswift/web/haptics.png",
        price: "230.00",
        timeline: "1",
        description:
          "Enables customised haptics in the product to provide a personlied user experience on interacting with features in the product.",
      },
      {
        id: 77,
        name: "File access",
        icon: "https://statestreetdebating.site/lauchswift/icons/pdf-scanner.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/pdf-scanner.png",
        web: "https://statestreetdebating.site/lauchswift/web/pdf-scanner.png",
        price: "143.00",
        timeline: "1",
        description:
          "A module that provides user access to local file system on the device.",
      },
      {
        id: 78,
        name: "Data Saver",
        icon: "https://statestreetdebating.site/lauchswift/icons/app-updates.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/data-saving.png",
        web: "https://statestreetdebating.site/lauchswift/web/data-saving.png",
        price: "980.00",
        timeline: "3",
        description:
          "Ensures users only upload/download files and media on metered networks, such as WiFi. Prevents the product from using excessive amounts of users' data allowance.",
      },
      {
        id: 79,
        name: "Display & Theme (light mode/dark mode)",
        icon: "https://statestreetdebating.site/lauchswift/icons/theme.png",
        mobile: "https://statestreetdebating.site/lauchswift/mobile/theme.png",
        web: "https://statestreetdebating.site/lauchswift/web/theme.png",
        price: "1,500.00",
        timeline: "4",
        description:
          "Enables the user to customise the appearance of the product themes to choose from. Enhancing the user experience by providing personalized control over the app's look and feel.",
      },
      {
        id: 80,
        name: "Offline Work",
        icon: "https://statestreetdebating.site/lauchswift/icons/activity-feed.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/apple-maps.png",
        web: "https://statestreetdebating.site/lauchswift/web/backend-feature.png",
        price: "435.00",
        timeline: "2",
        description:
          "Same as analytics with offline highlight at the top somewhere.",
      },
      {
        id: 81,
        name: "Switch Language",
        icon: "https://statestreetdebating.site/lauchswift/icons/switch-language.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/switch-language.png",
        web: "https://statestreetdebating.site/lauchswift/web/switch-language.png",
        price: "120.00",
        timeline: "2",
        description:
          "Switch between multiple languages. Users can select from the language options provided to view the product in their preferred option. Needs a third-party integration, so the final cost depends on their pricing.",
      },
      {
        id: 82,
        name: "Cache",
        icon: "https://statestreetdebating.site/lauchswift/icons/app-update.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/api-integration.png",
        web: "https://statestreetdebating.site/lauchswift/web/backend-feature.png",
        price: "432.00",
        timeline: "2",
        description:
          "Stores and retrieves data, enhancing performance and reducing the need for repetitive processing. Some frequently accessed resources, such as pages or images, are temporarily cached (stored locally) on users' devices.",
      },
      {
        id: 83,
        name: "Google contacts import",
        icon: "https://statestreetdebating.site/lauchswift/icons/google-contacts-import.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/google-contacts-import.png",
        web: "https://statestreetdebating.site/lauchswift/web/google-contacts-import.png",
        price: "447.00",
        timeline: "2.5",
        description:
          "Users can import contacts from their Google account into the product. This feature allows the is useful for users who rely on their Google contacts for communication and need up-to-date contact lists. Needs a third-party integration, so the final cost depends on their pricing.",
      },
      {
        id: 84,
        name: "Bacrcode scanning",
        icon: "https://statestreetdebating.site/lauchswift/icons/barcode-scanning.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/barcode-scanning.png",
        web: "https://statestreetdebating.site/lauchswift/web/backend-feature.png",
        price: "934.00",
        timeline: "2.5",
        description:
          "Scan, read and process a barcode, using the device's camera. The scanned information would be used for inventory management or ecommerce. Thei would require third-party integration, so the final cost depends on their pricing.",
      },
    ],
  },
  {
    name: "File Management",
    dropDown: [
      {
        id: 85,
        name: "File compression",
        icon: "https://statestreetdebating.site/lauchswift/icons/files-manager.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/file-compression.png",
        web: "https://statestreetdebating.site/lauchswift/web/file-compression.png",
        price: "650.00",
        timeline: "1.5",
        description:
          "Compress images (.jpg, .gif, .png) uploaded to the product. Doing so saves server space and means images load faster, improving user experience.",
      },
      {
        id: 86,
        name: "Convert file",
        icon: "https://statestreetdebating.site/lauchswift/icons/convert-files.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/convert-files.png",
        web: "https://statestreetdebating.site/lauchswift/web/convert-files.png",
        price: "537.00",
        timeline: "2.5",
        description:
          "Convert a file to a specific format. Needs a third-party integration, so the final cost depends on their pricing.",
      },
      {
        id: 87,
        name: "Data Storage",
        icon: "https://statestreetdebating.site/lauchswift/icons/data-storage.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/data-storage.png",
        web: "https://statestreetdebating.site/lauchswift/web/data-storage.png",
        price: "458.00",
        timeline: "2",
        description:
          "Offer secure and reliable storage for users' data. Allows easy uploading, organising, and sharing of files, ensuring data integrity and accessibility. Needs a third-party integration, so the final cost depends on their pricing.",
      },
    ],
    img: filemanagement,
  },
  {
    name: "Camera Features",
    dropDown: [
      {
        id: 86,
        name: "Camera access",
        icon: "https://statestreetdebating.site/lauchswift/icons/camera-access.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/camera-access.png",
        web: "https://statestreetdebating.site/lauchswift/web/camera-access.png",
        price: "312.00",
        timeline: "1",
        description:
          "Access the user device camera. Users can take photos and videos and conduct live streaming sessions and video calls via the application.",
      },
      {
        id: 87,
        name: "Face detection",
        icon: "https://statestreetdebating.site/lauchswift/icons/face-detection.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/face-detection.png",
        web: "https://statestreetdebating.site/lauchswift/web/backend-feature.png",
        price: "674.00",
        timeline: "3",
        description:
          "A module that uses machine learning algorithms to detect faces within the app on images (possible using camera components as well if not then we will have it be in Coming Soon section)",
      },
    ],
    img: camera,
  },
  {
    name: "Image",
    dropDown: [
      {
        id: 88,
        name: "Image Module",
        icon: "https://statestreetdebating.site/lauchswift/icons/photo-library.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/photo-library.png",
        web: "https://statestreetdebating.site/lauchswift/web/photo-library.png",
        price: "240.00",
        timeline: "1",
        description:
          "A module that allows to access multiple supported image formats to work effectively within the application including PNG, APNG, JPEG, GIF, SVG, ICO",
      },
      {
        id: 89,
        name: "Annotation",
        icon: "https://statestreetdebating.site/lauchswift/icons/annotation.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/annotation.png",
        web: "https://statestreetdebating.site/lauchswift/web/annotation.png",
        price: "689.00",
        timeline: "2",
        description:
          "Allows users to add text notes to documents that other users can read. Great for collaboration, as users can discuss specific points.",
      },
      {
        id: 90,
        name: "PDF Scanner",
        icon: "https://statestreetdebating.site/lauchswift/icons/pdf_scanner.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/pdf-scanner.png",
        web: "https://statestreetdebating.site/lauchswift/web/pdf-scanner.png",
        price: "459.00",
        timeline: "2",
        description:
          "Users can take an image of a document through their camera, then edit with crop, draw, undo/redo, resize, colour and line options. Needs a third-party integration, so the final cost depends on their pricing.",
      },
      {
        id: 91,
        name: "Screenshot Editor",
        icon: "https://statestreetdebating.site/lauchswift/icons/screenshot-editing.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/screenshot-editing.png",
        web: "https://statestreetdebating.site/lauchswift/web/screenshot-editing.png",
        price: "450.00",
        timeline: "2",
        description:
          "Users can take a screenshot of what's on their screen, then edit with crop, text, draw, undo/redo, resize, colour and line options. Needs a third-party integration, so the final cost depends on their pricing.",
      },
      {
        id: 92,
        name: "360 degree photo viewer",
        icon: "https://statestreetdebating.site/lauchswift/icons/360-photo-viewer.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/360-photo-viewer.png",
        web: "https://statestreetdebating.site/lauchswift/web/360-photo-viewer.png",
        price: "964.00",
        timeline: "3",
        description:
          "View 360-degree photos inside the product. Users can see every detail from every angle, for a fully immersive experience. Needs a third-party integration, so the final cost depends on their pricing.",
      },
    ],
    img: imageIcon,
  },

  {
    name: "Business & Productivity Features",
    dropDown: [
      {
        id: 93,
        name: "Analytics",
        icon: "https://statestreetdebating.site/lauchswift/icons/analytics.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/analytics.png",
        web: "https://statestreetdebating.site/lauchswift/web/analytics.png",
        price: "730.00",
        timeline: "3",
        description:
          "Gain insights into how your customers interact with the product. These insights allow business decisions to be led by data, providing the information needed to improve crucial product factors. Needs a third-party integration, so the final cost depends on their pricing.",
      },
      {
        id: 94,
        name: "Appointment creation",
        icon: "https://statestreetdebating.site/lauchswift/icons/appointment-creation.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/appointment-creation.png",
        web: "https://statestreetdebating.site/lauchswift/web/appointment-creation.png",
        price: "348.00",
        timeline: "2",
        description:
          "Users can set up appointments within the product. Once created, they can send appointment notifications to others via email or SMS. Vital for providing a seamless experience for users.",
      },
      {
        id: 95,
        name: "Performance Tracker",
        icon: "https://statestreetdebating.site/lauchswift/icons/performance-tracker.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/performance-tracker.png",
        web: "https://statestreetdebating.site/lauchswift/web/performance-tracker.png",
        price: "1890.00",
        timeline: "2.5",
        description:
          "Provide users with a way to track performance, appraisals and compensation of employees listed inside the product. Great for gaining an instant overview of trends and patterns.",
      },
      {
        id: 96,
        name: "Pin conversation",
        icon: "https://statestreetdebating.site/lauchswift/icons/pin-conversation.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/pin-conversation.png",
        web: "https://statestreetdebating.site/lauchswift/web/pin-conversation.png",
        price: "641.00",
        timeline: "1.5",
        description:
          "Users can pin conversations to the top of their inbox for easy access. These messages will appear first, meaning they won't need to scroll through to find them.",
      },
      {
        id: 97,
        name: "Recurring Appointments",
        icon: "https://statestreetdebating.site/lauchswift/icons/recurring-appointments.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/recurring-appointments.png",
        web: "https://statestreetdebating.site/lauchswift/web/recurring-appointments.png",
        price: "630.00",
        timeline: "1",
        description:
          "Create a series of appointments that happen at the same time over a specific period. Saves time compared to creating the same appointment multiple times.",
      },
      {
        id: 98,
        name: "Screen sharing",
        icon: "https://statestreetdebating.site/lauchswift/icons/screen-sharing.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/screen-sharing.png",
        web: "https://statestreetdebating.site/lauchswift/web/screen-sharing.png",
        price: "780.00",
        timeline: "3",
        description:
          "Users can share their screen in real-time with others. They also have the option to share a specific window/tab for added privacy and security. It's great for collaboration, technical support, and virtual presentations. Needs a third-party integration, so the final cost depends on their pricing.",
      },
      {
        id: 99,
        name: "Analytics Reporting",
        icon: "https://statestreetdebating.site/lauchswift/icons/analytics-reporting.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/analytics-report.png",
        web: "https://statestreetdebating.site/lauchswift/web/analytics-report.png",
        price: "320.00",
        timeline: "1.5",
        description:
          "Access and analyse historical data within the product. Compare data across different periods in a tabular format for insightful analysis. Gain valuable insights and make informed decisions.",
      },
      {
        id: 100,
        name: "Auction bidding",
        icon: "https://statestreetdebating.site/lauchswift/icons/auction-bidding.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/auction-bidding.png",
        web: "https://statestreetdebating.site/lauchswift/web/auction-bidding.png",
        price: "830.00",
        timeline: "1.5",
        description:
          "Users can participate in online auctions and place bids on items. They can set automatic bids, receive alerts for outbidding and track the status of their bids.",
      },
      {
        id: 101,
        name: "Kanban board",
        icon: "https://statestreetdebating.site/lauchswift/icons/kanban-board.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/kanban-board.png",
        web: "https://statestreetdebating.site/lauchswift/web/kanban-board.png",
        price: "1290.00",
        timeline: "3",
        description:
          "A visual tool for project and task overviews. Tasks are shown as cards and can be moved across columns, reflecting progress towards completion. It offers a flexible approach to managing work.",
      },
    ],
    img: business,
  },

  {
    name: "E-commerce & Financial Transactions",
    dropDown: [
      {
        id: 102,
        name: "Promo Codes",
        icon: "https://statestreetdebating.site/lauchswift/icons/promo-codes.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/promo-codes.png",
        web: "https://statestreetdebating.site/lauchswift/web/promo-codes.png",
        price: "670.00",
        timeline: "2",
        description:
          "Create coupon codes to be used for the product. This feature is often used to attract shoppers wanting a bargain, and to build brand loyalty and improve customer experience.",
      },
      {
        id: 103,
        name: "Checkout",
        icon: "https://statestreetdebating.site/lauchswift/icons/checkout.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/checkout.png",
        web: "https://statestreetdebating.site/lauchswift/web/checkout.png",
        price: "1390.00",
        timeline: "2",
        description:
          "Track and calculate the total cost of items in the shopping cart. The calculation includes taxes, shipping, and discounts, streamlining the checkout process.",
      },
      {
        id: 104,
        name: "Promo codes acceptance",
        icon: "https://statestreetdebating.site/lauchswift/icons/promo-codes.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/promo-codes.png",
        web: "https://statestreetdebating.site/lauchswift/web/promo-codes.png",
        price: "110.00",
        timeline: "1.5",
        description:
          "Accepting Promo codes to be used for the product at checkout. This feature is often used to attract shoppers wanting a bargain, and to build brand loyalty and improve customer experience.",
      },
      {
        id: 105,
        name: "Dashboard",
        icon: "https://statestreetdebating.site/lauchswift/icons/dashboard.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/dashboard.png",
        web: "https://statestreetdebating.site/lauchswift/web/dashboard.png",
        price: "320.00",
        timeline: "1",
        description:
          "An interface to view and digest relevant analytics data in an easy-to-understand visual format. Great for when users need to keep track of important metrics such as sales, cash flow and product performance.",
      },
      {
        id: 106,
        name: "Downloadable products",
        icon: "https://statestreetdebating.site/lauchswift/icons/files-manager.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/download-options.png",
        web: "https://statestreetdebating.site/lauchswift/web/download-options.png",
        price: "782.00",
        timeline: "1",
        description:
          "Offer users the ability to access and download items directly from the product. Distribute files, documents, or media content, triggering downloads based on rules, such as completing a form or making a payment.",
      },
      {
        id: 107,
        name: "Favorite items",
        icon: "https://statestreetdebating.site/lauchswift/icons/favorites-list.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/favorites-list.png",
        web: "https://statestreetdebating.site/lauchswift/web/favorites-list.png",
        price: "209.00",
        timeline: "1.5",
        description:
          "Users can tailor their experience of using the product. They might select specific friends, photos, or posts they want to see more of or refer back to whenever they wish.",
      },
      {
        id: 108,
        name: "Free Credits",
        icon: "https://statestreetdebating.site/lauchswift/icons/free-credits.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/free-credits.png",
        web: "https://statestreetdebating.site/lauchswift/web/free-credits.png",
        price: "302.00",
        timeline: "1.5",
        description:
          "Offer customers a specified amount of free credits for paying towards products or services. Use it to attract new customers and encourage repeat purchases, commonly used to offer discounts.",
      },
      {
        id: 109,
        name: "Guest Login",
        icon: "https://statestreetdebating.site/lauchswift/icons/guest-login.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/guest-login.png",
        web: "https://statestreetdebating.site/lauchswift/web/guest-login.png",
        price: "780.00",
        timeline: "2",
        description:
          "Offer users a guest account to try out the product. They can dive straight in with full access, without adding personal details.",
      },
      {
        id: 110,
        name: "Quick View",
        icon: "https://statestreetdebating.site/lauchswift/icons/quick-view.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/quick-view.png",
        web: "https://statestreetdebating.site/lauchswift/web/quick-view.png",
        price: "250.00",
        timeline: "1.5",
        description:
          "Allows users to view multiple images of a product or item by clicking or swiping through them. They can view from various perspectives providing them with a more immersive experience.",
      },
      {
        id: 111,
        name: "International shippings",
        icon: "https://statestreetdebating.site/lauchswift/icons/",
        mobile: "https://statestreetdebating.site/lauchswift/mobile/",
        web: "https://statestreetdebating.site/lauchswift/web/",
        price: "670.00",
        timeline: "1",
        description:
          "Customers are asked to choose local or international shipping during checkout. You can select which countries to ship to, so customers can see if they're in your target region.",
      },
      {
        id: 112,
        name: "Loyalty System",
        icon: "https://statestreetdebating.site/lauchswift/icons/loyalty-system.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/loyalty-system.png",
        web: "https://statestreetdebating.site/lauchswift/web/loyalty-system.png",
        price: "390.00",
        timeline: "1",
        description:
          "Customers are asked to choose local or international shipping during checkout. You can select which countries to ship to, so customers can see if they're in your target region.",
      },
      {
        id: 113,
        name: "Menu/Ordering",
        icon: "https://statestreetdebating.site/lauchswift/icons/menu.png",
        mobile: "https://statestreetdebating.site/lauchswift/mobile/menu.png",
        web: "https://statestreetdebating.site/lauchswift/web/menu.png",
        price: "290.00",
        timeline: "2",
        description:
          "Display a list or menu of items inside the product. Includes a basic description next to each item for users to refer to.",
      },
      {
        id: 114,
        name: "Print",
        icon: "https://statestreetdebating.site/lauchswift/icons/print.png",
        mobile: "https://statestreetdebating.site/lauchswift/mobile/print.png",
        web: "https://statestreetdebating.site/lauchswift/web/print.png",
        price: "789.00",
        timeline: "3",
        description:
          "Print form inside the product. Once a file is selected, the product locates the printer and offers users options such as quantity, orientation and size.",
      },
      {
        id: 115,
        name: "Product tutorial",
        icon: "https://statestreetdebating.site/lauchswift/icons/product-tutorial.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/product-tutorial.png",
        web: "https://statestreetdebating.site/lauchswift/web/product-tutorial.png",
        price: "698.00",
        timeline: "3",
        description:
          "A swipe-through tutorial showing how the product works. Useful for highlighting features and giving first-time users the confidence to continue using the product.",
      },
      {
        id: 116,
        name: "Shoping cart",
        icon: "https://statestreetdebating.site/lauchswift/icons/shopping-cart.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/shopping-cart.png",
        web: "https://statestreetdebating.site/lauchswift/web/shopping-cart.png",
        price: "590.00",
        timeline: "2",
        description:
          "Users can view and edit items selected while browsing the product, showing all relevant information needed before checking out. Important when users might want to review items before purchasing.",
      },
      {
        id: 117,
        name: "Automatic Renewals",
        icon: "https://statestreetdebating.site/lauchswift/icons/auto-renewals.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/auto-renewals.png",
        web: "https://statestreetdebating.site/lauchswift/web/auto-renewal.png",
        price: "511.00",
        timeline: "2",
        description:
          "Automatically extend subscriptions or services for users, ensuring uninterrupted access. It simplifies the renewal process and enhances customer satisfaction, increasing the chance they renew.",
      },
      {
        id: 118,
        name: "Collect Transaction Fees and Taxes",
        icon: "https://statestreetdebating.site/lauchswift/icons/collect-transactions-and-tax.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/collect-transactions-and-tax.png",
        web: "https://statestreetdebating.site/lauchswift/web/collect-transactions-and-tax.png",
        price: "290.00",
        timeline: "2",
        description:
          "Automate fee collection for secure and transparent financial transactions. It simplifies fee management, helping you generate revenue efficiently.",
      },
      {
        id: 119,
        name: "Digital Signatures",
        icon: "https://statestreetdebating.site/lauchswift/icons/digital-sign.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/digital-sign.png",
        web: "https://statestreetdebating.site/lauchswift/web/digital-sign.png",
        price: "120.00",
        timeline: "2",
        description:
          "Provide users with a secure and efficient way to sign documents electronically. The feature eliminates the need for physical signatures and the associated delay. Needs a third-party integration, so the final cost depends on their pricing.",
      },
      {
        id: 120,
        name: "Donations",
        icon: "https://statestreetdebating.site/lauchswift/icons/donation.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/donation.png",
        web: "https://statestreetdebating.site/lauchswift/web/donations.png",
        price: "320.00",
        timeline: "1",
        description:
          "Users can make a donation at the checkout stage. They only have to enter the amount, so it integrates automatically with the total.",
      },
      {
        id: 121,
        name: "In-app purchases",
        icon: "https://statestreetdebating.site/lauchswift/icons/collect-transactions-and-tax.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/stripe-integraton.png",
        web: "https://statestreetdebating.site/lauchswift/web/checkout.png",
        price: "270.00",
        timeline: "2",
        description:
          "Monetise your product with in-app purchases. Offer users exclusive features for a fee, such as free delivery, premium content and more.",
      },
      {
        id: 122,
        name: "Plan Comparison",
        icon: "https://statestreetdebating.site/lauchswift/icons/plan-comparison.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/plan-comparison.png",
        web: "https://statestreetdebating.site/lauchswift/web/plan-comparison.png",
        price: "560.00",
        timeline: "1.5",
        description:
          "Enables your audience to compare features from different plans. Highlight important features to help them decide which one to choose.",
      },
      {
        id: 123,
        name: "Refund Management",
        icon: "https://statestreetdebating.site/lauchswift/icons/refund-management.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/refund-management.png",
        web: "https://statestreetdebating.site/lauchswift/web/refund-management.png",
        price: "890.00",
        timeline: "2",
        description:
          "Users can request returns or exchanges. Refund the value of the returned item to their account or into a wallet on the product. Or via points that relate to a specified value.",
      },
      {
        id: 124,
        name: "Restore Purchases",
        icon: "https://statestreetdebating.site/lauchswift/icons/restore-purchase.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/restore-purchase.png",
        web: "https://statestreetdebating.site/lauchswift/web/restore-purchase.png",
        price: "780.00",
        timeline: "2",
        description:
          "Let users transfer their in-app purchases to other devices. Improve customer experience, simplify the user experience and provide a hassle-free purchasing journey.",
      },
      {
        id: 125,
        name: "Subscriptions Billing",
        icon: "https://statestreetdebating.site/lauchswift/icons/subscription-billing.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/subscription-billing.png",
        web: "https://statestreetdebating.site/lauchswift/web/subscription-billing.png",
        price: "220.00",
        timeline: "1.5",
        description:
          "Set up recurring billing for users and choose the frequency to match your business model. This is also helpful for users, as automated payments reduce friction around fees.",
      },
    ],
    img: ecommerce,
  },
];

export const sidebarDataArabic = [
  {
    name: "الأساسيات",
    img: essentials,
    dropDown: [
      {
        id: 1,
        name: "التسجيل/تسجيل الدخول باستخدام البريد الإلكتروني",
        icon: "https://statestreetdebating.site/lauchswift/icons/login-with-google.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/login-with-google.png",
        //web needs fixing
        web: "https://statestreetdebating.site/lauchswift/web/phone-login.png",
        price: "412.84",
        timeline: "2",
        description:
          "يقوم المستخدمون بالتسجيل في التطبيق باستخدام اسمهم وعنوان بريدهم الإلكتروني وكلمة مرور. يمكنهم بعد ذلك استخدام هذه التفاصيل لتسجيل الدخول. يمكن للمستخدمين أيضًا إعادة تعيين كلمات المرور من خلال وظيفة نسيت كلمة المرور.",
      },
      {
        id: 2,
        name: "تسجيل الدخول باستخدام Apple",
        icon: `https://statestreetdebating.site/lauchswift/icons/login-with-apple.png`,
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/login-with-apple.png",
        //needs fixing on web - fixed for now
        web: "https://statestreetdebating.site/lauchswift/web/phone-login.png",
        price: "120",
        timeline: "1.5",
        description:
          "يمكن للمستخدمين الوصول بسهولة إلى التطبيق باستخدام حسابهم على Apple. لا حاجة لإنشاء حساب، ببساطة بنقرة واحدة سيتم إنشاء حسابهم باستخدام بيانات اعتماد Apple الحالية لتسجيل الدخول والتسجيل. يتطلب التكامل مع طرف ثالث، لذا يعتمد السعر النهائي على تسعيرهم.",
      },
      {
        id: 3,
        name: "تسجيل الدخول باستخدام Google",
        icon: `https://statestreetdebating.site/lauchswift/icons/login-with-google.png`,
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/login-with-google.png",
        //needs fixing on web
        web: "https://statestreetdebating.site/lauchswift/web/phone-login.png",
        price: "340.00",
        timeline: "2",
        description:
          "يمكن للمستخدمين الوصول بسهولة إلى التطبيق باستخدام حسابهم على Google. لا حاجة لإنشاء حساب، ببساطة بنقرة واحدة سيتم إنشاء حسابهم باستخدام بيانات اعتماد Google الحالية لتسجيل الدخول والتسجيل. يتطلب التكامل مع طرف ثالث، لذا يعتمد السعر النهائي على تسعيرهم.",
      },
      {
        id: 4,
        name: "تسجيل الدخول باستخدام Facebook",
        icon: `https://statestreetdebating.site/lauchswift/icons/login-with-facebook.png`,
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/login-with-facebook.png",
        //needs fixing on web
        web: "https://statestreetdebating.site/lauchswift/web/",
        price: "720.00",
        timeline: "3",
        description:
          "يمكن للمستخدمين الوصول بسهولة إلى التطبيق باستخدام حسابهم على Facebook. لا حاجة لإنشاء حساب، ببساطة بنقرة واحدة سيتم إنشاء حسابهم باستخدام بيانات اعتماد Facebook الحالية لتسجيل الدخول والتسجيل. يتطلب التكامل مع طرف ثالث، لذا يعتمد السعر النهائي على تسعيرهم.",
      },
      {
        id: 5,
        name: "التسجيل/تسجيل الدخول باستخدام رقم الهاتف",
        icon: `https://statestreetdebating.site/lauchswift/icons/login-with-phone.png`,
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/login-with-phone.png",
        web: "https://statestreetdebating.site/lauchswift/web/phone-login.png",
        price: "278.00",
        timeline: "1.5",
        description:
          "يمكن للمستخدمين تسجيل الدخول إلى المنتج باستخدام أرقام هواتفهم المحمولة، مما يلغي الحاجة إلى أسماء مستخدمين وكلمات مرور. مفيد عندما لا يكون أمن المنتج أولوية أو لتسهيل عملية تسجيل الدخول.",
      },
      {
        id: 6,
        name: "تسجيل الدخول للمسؤول",
        icon: "https://statestreetdebating.site/lauchswift/icons/admin-dashboard.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/admin-dashboard.png",
        web: "https://statestreetdebating.site/lauchswift/web/admin-dashboard.png",
        price: "350.00",
        timeline: "3",
        description:
          "يمكن للمسؤول تسجيل الدخول والوصول بسهولة إلى التطبيق لإدارة المهام الإدارية. يمكنهم بعد ذلك استخدام هذه التفاصيل لتسجيل الدخول. يمكن للمستخدمين أيضًا إعادة تعيين كلمات المرور من خلال وظيفة نسيت كلمة المرور.",
      },
      {
        id: 7,
        name: "تسجيل الدخول للموظفين",
        icon: "https://statestreetdebating.site/lauchswift/icons/employee-login.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/employee-login.png",
        web: "https://statestreetdebating.site/lauchswift/web/employee-login.png",
        price: "570.00",
        timeline: "3",
        description:
          "يمكن للموظفين تسجيل الدخول والوصول بسهولة إلى التطبيق لإدارة المهام المسندة إليهم. يمكنهم بعد ذلك استخدام هذه التفاصيل لتسجيل الدخول. يمكن للموظفين أيضًا إعادة تعيين كلمات المرور من خلال وظيفة نسيت كلمة المرور.",
      },

      {
        id: 7,
        name: "الفرز",
        icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd150a88f3ac61106b3074/Online_20backup.png",
        mobile:
          "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_android_image/59fd150a88f3ac61106b3074/Online_20backup.png",
        price: "143.13",
        timeline: "3.0",
        description:
          "فرز المحتوى استنادًا إلى الحرف الذي يختاره المستخدم. يساعد المستخدمين في الوصول بسرعة إلى ما يبحثون عنه. على سبيل المثال: الفرز من 'منخفض' إلى 'مرتفع' تقييمًا، A-Z، السعر.",
      },
      {
        id: 8,
        name: "تقديم ردود فعل على التطبيق",
        icon: "https://statestreetdebating.site/lauchswift/icons/app-feedback.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/app-feedback.png",
        web: "https://statestreetdebating.site/lauchswift/web/app-feedback.png",
        price: "240.00",
        timeline: "1",
        description:
          "يسمح للمستخدمين بإعطاء واستلام الردود على المنتج أو الخدمة أو الأداء. مفيد للشركات أو الأفراد الذين يسعون لتحسين منتجاتهم أو أدائهم من خلال جمع التعليقات من عملائهم أو زملائهم.",
      },
      {
        id: 9,
        name: "إنشاء حساب",
        //needs fixing on web
        icon: "https://statestreetdebating.site/lauchswift/icons/employee-login.png",
        //needs fixing on web
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/login-with-google.png",
        //needs fixing on web
        web: "https://statestreetdebating.site/lauchswift/web/phone-login.png",
        price: "520.00",
        timeline: "2",
        description:
          "إنشاء حساب نيابةً عن المستخدمين. قدم هذه المعلومات يدويًا أو أرسلها تلقائيًا مع ميزة إشعارات البريد الإلكتروني. يتيح التحقق من الهوية قبل منح المستخدمين الوصول.",
      },
      {
        id: 10,
        name: "شاشات ترحيب",
        icon: "https://statestreetdebating.site/lauchswift/icons/splash-screen.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/splash-screen.png",
        web: "https://statestreetdebating.site/lauchswift/web/backend-feature.png",
        price: "250.00",
        timeline: "1.5",
        description:
          "هذه هي الشاشة الأولى التي يراها المستخدم عند فتح المنتج. إنه يطمئنهم بأن التطبيق قيد الفتح ويمكن أن يقدم لهم مقدمة قصيرة للتطبيق أيضًا. في معظم الحالات، ستكون هذه شعار الشركة ورمز التحميل ولكن يمكن إضافة الرسوم المتحركة هنا أيضًا.",
      },
      {
        id: 11,
        name: "قائمة الهامبرغر والدرج",
        icon: "https://statestreetdebating.site/lauchswift/icons/hamburger-menu-and-drawer.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/hamburger-menu-and-drawer.png",
        web: "https://statestreetdebating.site/lauchswift/web/hamburger-menu-drawer.png",
        price: "1481.00",
        timeline: "1.5",
        description:
          "هو ميزة واجهة مستخدم تتكون من زر يحتوي على ثلاثة خطوط أفقية مكدسة فوق بعضها البعض والتي تتوسع عندما ينقر المستخدم عليها أو يضغط عليها، مكشوفة قائمة التطبيق وخيارات الملاحة.",
      },
      {
        id: 12,
        name: "الإعدادات",
        icon: "https://statestreetdebating.site/lauchswift/icons/settings.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/setting.png",
        web: "https://statestreetdebating.site/lauchswift/web/privacy-settings.png",
        price: "768.07",
        timeline: "3",
        description:
          "تمكين المستخدمين من الوصول إلى قائمة الإعدادات والتفاعل معها في التطبيق. يمكن أن تشمل هذه الإعدادات الشخصية أو الإعدادات لكيفية تفاعلهم مع المنتج.",
      },
      {
        id: 13,
        name: "شريط البحث مع ظهور حقول",
        icon: "https://statestreetdebating.site/lauchswift/icons/searchbar-popup.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/searchbar-popup.png",
        web: "https://statestreetdebating.site/lauchswift/web/searchbar-popup.png",
        price: "850.87",
        timeline: "2",
        description:
          "يتيح للمستخدمين القدرة على العثور بسرعة وسهولة على معلومات أو محتوى محدد. بمجرد البحث، يمكن للمستخدمين تحديد النتيجة التي تلبي متطلباتهم بشكل أفضل.",
      },
      // {
      //   id: 14,
      //   name: "الشروط والأحكام",
      //   icon: "https://statestreetdebating.site/lauchswift/icons/",
      //   mobile: "https://statestreetdebating.site/lauchswift/mobile/",
      //   web: "https://statestreetdebating.site/lauchswift/web/",
      //   price: "234.44",
      //   timeline: "2",
      //   description:
      //     "يطلب من المستخدم تأكيد موافقته على الشروط والأحكام قبل استخدام المنتج. يُستخدم هذا الميزة في كثير من الأحيان للتحقق من العمر أو لشرح ما يتم عمله ببيانات المستخدم.",
      // },
      {
        id: 15,
        name: "تصفح الفتات",
        icon: "https://statestreetdebating.site/lauchswift/icons/breadcrumb-navigation.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/breadcrumb_navigation.png",
        web: "https://statestreetdebating.site/lauchswift/web/breadcrumb-navigation.png",
        price: "542.00",
        timeline: "2",
        description:
          'يساعد المستخدمين على التنقل في هيكل موقع الويب. يظهر في أعلى الصفحة ويعرض للمستخدم موقعه في المنتج. يمثل كل "فتات" قابلة للنقر مستوى مختلف من الهيكل.',
      },

      // {
      //   id: 16,
      //   name: "موفر البيانات",
      //   icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd150a88f3ac61106b3074/Online_20backup.png",
      //   mobile:
      //     "https://firebasestorage.googleapis.com/v0/b/app-builder-c776a.appspot.com/o/features%2Fdata-saver-16.png?alt=media&token=02517fbc-1eaa-4db2-bc6c-51a6dfed991e",
      //   price: "1,580.88",
      //   timeline: "3.0",
      //   description:
      //     "يضمن للمستخدمين تحميل وتنزيل الملفات ووسائط الإعلام فقط على شبكات الأمترة، مثل شبكات الواي فاي. يمنع المنتج من استخدام كميات كبيرة من حصة بيانات المستخدمين.",
      // },
      {
        id: 17,
        name: "تصميم الشعار",
        icon: "https://statestreetdebating.site/lauchswift/icons/logo-design.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/logo-design.png",
        web: "https://statestreetdebating.site/lauchswift/web/logo-design.png",
        price: "1,245.00",
        timeline: "2",
        description:
          "يمكن للمستخدمين اختيار شعارات من مكتبة من الشعارات المجانية من حيث الحقوق بصيغ .jpg/.png وطلب تخصيصها. يتيح للمستخدم إنشاء شعارات تبدو احترافية دون الحاجة لتوظيف مصمم. يتطلب التكامل مع طرف ثالث، والذي قد يؤثر على التكلفة النهائية.",
      },
    ],
  },
  {
    name: "الأمان",
    dropDown: [
      {
        id: 18,
        name: "إرسال كلمة مرور مرة واحدة عبر Twilio",
        icon: "https://statestreetdebating.site/lauchswift/icons/OTP-verification.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/OTP-verification.png",
        web: "https://statestreetdebating.site/lauchswift/web/OTP-verification.png",
        price: "547.00",
        timeline: "2",
        description:
          "يمكن للمستخدم استخدام رقم هاتفه وكلمة مرور مرة واحدة للمصادقة على نفسه في التطبيق. يضيف هذا طبقة إضافية من الأمان إلى المنتج. مفيد للمنتجات التي تحمل معلومات حساسة.",
      },
      {
        id: 19,
        name: "المصادقة ثنائية العوامل",
        icon: "https://statestreetdebating.site/lauchswift/icons/two-factor-auth.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/two-factor-auth.png",
        web: "https://statestreetdebating.site/lauchswift/web/two-factor-auth.png",
        price: "288.00",
        timeline: "2",
        description:
          "بمجرد أن يدخل المستخدمون اسم مستخدمهم وكلمة مرورهم بشكل صحيح، يدخلون كلمة مرور مرة واحدة (OTP) تم إرسالها عبر رسالة نصية قصيرة. يضيف هذا طبقة إضافية من الأمان إلى المنتج. مفيد للمنتجات التي تحمل معلومات حساسة.",
      },
      {
        id: 20,
        name: "التحقق من العميل (KYC)",
        icon: "https://statestreetdebating.site/lauchswift/icons/kyc-verification.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/kyc-verification.png",
        web: "https://statestreetdebating.site/lauchswift/web/kyc-verification.png",
        price: "623.00",
        timeline: "3",
        description: "يتيح لك إجراء التحقق من العميل (KYC) على مستخدميك.",
      },
      {
        id: 21,
        name: "قفل الرمز السري",
        icon: "https://statestreetdebating.site/lauchswift/icons/passcode-lock.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/passcode-lock.png",
        web: "https://statestreetdebating.site/lauchswift/web/passcode-lock.png",
        price: "453.00",
        timeline: "2",
        description:
          "ميزة أمان تتطلب من المستخدمين إدخال رمز سري أو رقم سري للوصول إلى المنتج. منع الوصول غير المصرح به إلى حسابهم.",
      },
      {
        id: 22,
        name: "المصادقة بواسطة FaceID",
        icon: "https://statestreetdebating.site/lauchswift/icons/face-id.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/face-id.png",
        web: "https://statestreetdebating.site/lauchswift/web/face-id.png",
        price: "698.00",
        timeline: "2",
        description:
          "تقديم مصادقة FaceID كطريقة دفع. يوفر للمستخدمين طريقة سريعة وآمنة للخروج من دون الحاجة إلى تسجيل الدخول إلى منصات خارجية. يتطلب تكاملًا مع طرف ثالث، لذا تعتمد التكلفة النهائية على تسعيرهم.",
      },
      {
        id: 23,
        name: "المصادقة بواسطة بصمة الإصبع",
        icon: "https://statestreetdebating.site/lauchswift/icons/fingerprint-auth.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/fingerprint-auth.png",
        web: "https://statestreetdebating.site/lauchswift/web/finderprint-auth.png",
        price: "549.00",
        timeline: "2",
        description:
          "تقديم المصادقة بواسطة بصمة الإصبع كطريقة دفع. يوفر للمستخدمين طريقة سريعة وآمنة للخروج من دون الحاجة إلى تسجيل الدخول إلى منصات خارجية. يتطلب تكاملًا مع طرف ثالث، لذا تعتمد التكلفة النهائية على تسعيرهم.",
      },
      {
        id: 24,
        name: "إعدادات الخصوصية",
        icon: "https://statestreetdebating.site/lauchswift/icons/privacy-setting.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/privacy-setting.png",
        web: "https://statestreetdebating.site/lauchswift/web/privacy-settings.png",
        price: "193.00",
        timeline: "1.5",
        description:
          "دع المستخدمين يتحكمون في وصول معلوماتهم الشخصية. يمكنهم اختيار من يرى ملفهم الشخصي ومنشوراتهم، مما يجعلهم يشعرون بالأمان عند استخدام المنتج.",
      },
      {
        id: 25,
        name: "كابتشا",
        icon: "https://statestreetdebating.site/lauchswift/icons/captcha.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/captcha.png",
        web: "https://statestreetdebating.site/lauchswift/web/captcha.png",
        price: "352.00",
        timeline: "2",
        description:
          "يطلب من المستخدمين إكمال اختبار تحقق بسيط لإثبات أنهم بشر. يعرض اختبارًا يسهل على البشر اجتيازه ولكنه يصعب على الروبوتات، مما يتحقق من أن الشخص الذي يستخدم الموقع حقيقي. يتطلب تكاملًا مع طرف ثالث، لذا تعتمد التكلفة النهائية على تسعيرهم.",
      },
    ],
    img: securityPrivacy,
  },
  {
    name: "الاجتماعية",
    img: socials,
    dropDown: [
      {
        id: 26,
        name: "إضافة أصدقاء",
        icon: "https://statestreetdebating.site/lauchswift/icons/",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/add-friend.png",
        web: "https://statestreetdebating.site/lauchswift/web/add-friend.png",
        price: "260.00",
        timeline: "2",
        description:
          "يمكن للمستخدمين إضافة مستخدمين آخرين إلى شبكاتهم. مفيد بشكل خاص لتطبيقات التواصل الاجتماعي والاتصالات، حيث يرغب المستخدمون في الاتصال والبقاء على اتصال بأصدقائهم وجهات الاتصال.",
      },
      {
        id: 27,
        name: "قائمة الأصدقاء",
        icon: "https://statestreetdebating.site/lauchswift/icons/friends-list.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/friends-list.png",
        web: "https://statestreetdebating.site/lauchswift/web/firends-list.png",
        price: "320.00",
        timeline: "2",
        description:
          "يمكن للمستخدمين إضافة مستخدمين آخرين إلى قائمة أصدقائهم، مما يتيح لهم تتبع اتصالاتهم بسهولة والوصول السريع إلى ملفاتهم الشخصية. كما يمكنهم رؤية الأصدقاء المضافين مؤخرًا والأصدقاء المشتركين.",
      },
      {
        id: 28,
        name: "قائمة المتابعين",
        icon: "https://statestreetdebating.site/lauchswift/icons/list-of-followers.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/list-of-followers.png",
        web: "https://statestreetdebating.site/lauchswift/web/list-of-followers.png",
        price: "560.00",
        timeline: "2.5",
        description:
          "عرض قائمة بمتابعيهم للمستخدمين والسماح لهم بتتبع محتواهم، مثل المنشورات الجديدة أو التعليقات. يساعد في جعل تجارب المستخدمين أكثر تخصيصًا وصلة.",
      },
      {
        id: 29,
        name: "إعجاب بمنشور",
        icon: "https://statestreetdebating.site/lauchswift/icons/like-post.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/like-post.png",
        web: "https://statestreetdebating.site/lauchswift/web/activity-feed.png",
        price: "175.00",
        timeline: "1.5",
        description:
          "يمكن للمستخدمين إظهار إعجابهم بقطعة من المحتوى التي تم مشاركتها داخل المنتج. يساعد المستخدمين في عرض اهتماماتهم للآخرين ويقدم رؤية مفيدة عندما يتعلق الأمر بفهم تفضيلاتهم ودوافعهم.",
      },
      {
        id: 30,
        name: "إعادة نشر",
        icon: "https://statestreetdebating.site/lauchswift/icons/repost.png",
        mobile: "https://statestreetdebating.site/lauchswift/mobile/repost.png",
        web: "https://statestreetdebating.site/lauchswift/web/activity-feed.png",
        price: "358.00",
        timeline: "2",
        description:
          "يمكن للمستخدمين إعادة نشر المحتوى الذي تم نشره داخل المنتج على ملفهم الشخصي. يتم استخدام هذه الميزة عادةً على منصات التواصل الاجتماعي لزيادة توجيه المحتوى المثير للاهتمام أو ذو الصلة.",
      },
      {
        id: 31,
        name: "إنشاء منشور",
        icon: "https://statestreetdebating.site/lauchswift/icons/create-post.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/create-posts.png",
        web: "https://statestreetdebating.site/lauchswift/web/create-posts.png",
        price: "312.00",
        timeline: "2",
        description:
          "يمكن للمستخدمين إنشاء ونشر المحتوى. يمكنهم تخصيص شكل ونمط منشوراتهم وإرفاق وسائط. أداة أساسية للمستخدمين لمشاركة أفكارهم وأفكارهم وقصصهم مع الآخرين.",
      },
      {
        id: 32,
        name: "حظر المستخدمين",
        icon: "https://statestreetdebating.site/lauchswift/icons/block-user.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/block-users.png",
        web: "https://statestreetdebating.site/lauchswift/web/block-users.png",
        price: "249.00",
        timeline: "1.5",
        description:
          "يمكن للمستخدمين والمسؤولين حظر المستخدمين داخل المنتج. يمكن للمسؤولين التحكم في وصول المستخدمين إلى جميع المحتويات، بينما يمكن للمستخدمين منع أفراد معينين من التفاعل معهم.",
      },
      {
        id: 34,
        name: "تعطيل الإعلانات",
        icon: "https://statestreetdebating.site/lauchswift/icons/disable-ads.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/disable-ads.png",
        web: "https://statestreetdebating.site/lauchswift/web/disable-ads.png",
        price: "347.00",
        timeline: "2",
        description:
          "يمكن للمستخدمين تعطيل عرض الإعلانات. استخدم هذا لإدارة مستويات مختلفة من العروض داخل المنتج، مثل الإصدار المجاني أو المدفوع، أو مع جمهور مختلف الأعمار.",
      },
      {
        id: 35,
        name: "ملف شخصي قابل للتخصيص",
        icon: "https://statestreetdebating.site/lauchswift/icons/customise-user-profile.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/customise-user-profile.png",
        web: "https://statestreetdebating.site/lauchswift/web/custom-user-profile.png",
        price: "230.00",
        timeline: "1",
        description:
          "يمكن للمستخدمين إنشاء ملفات شخصية قابلة للتخصيص مع إمكانية إضافة حقول إضافية لمشاركة مزيد من المعلومات عن أنفسهم. رائع للسماح للمستخدم بمشاركة المعلومات التي يعتقدون أنها الأكثر صلة.",
      },
      {
        id: 36,
        name: "الإشارة/التسمية",
        icon: "https://statestreetdebating.site/lauchswift/icons/tagging.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/tagging.png",
        web: "https://statestreetdebating.site/lauchswift/web/tagging.png",
        price: "531.00",
        timeline: "2",
        description:
          "يمكن للمستخدمين وسم أو تسمية ملف تعريف مستخدم آخر عند إنشاء منشور أو كتابة تعليق. يساعد ذلك في بناء العلاقات وتشجيع المحادثات داخل المنتج.",
      },
      {
        id: 37,
        name: "بحث متقدم",
        icon: "https://statestreetdebating.site/lauchswift/icons/advanced-search.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/advanced-search.png",
        web: "https://statestreetdebating.site/lauchswift/web/advanced-search.png",
        price: "863.00",
        timeline: "2",
        description:
          "يوفر تجربة بحث محسنة، مع مرشحات وكلمات رئيسية لتوليد نتائج ذات صلة، حتى عندما لا يجد البحث تطابقًا دقيقًا. كما يمكن للمستخدمين الوصول بسهولة إلى سجل بحثهم للرجوع إليه بسهولة.",
      },
      {
        id: 38,
        name: "رابط تابع",
        icon: "https://statestreetdebating.site/lauchswift/icons/affiliate-url.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/affiliate-url.png",
        web: "https://statestreetdebating.site/lauchswift/web/affiliate-url.png",
        price: "390.00",
        timeline: "2",
        description:
          "تحقق منصتك بإضافة روابط تابعة إلى العناصر المدرجة لتوليد عمولة. يتم توجيه المستخدمين إلى موقع الويب الخارجي عند النقر على الرابط المعروض.",
      },
      {
        id: 39,
        name: "حفظ البحث",
        icon: "https://statestreetdebating.site/lauchswift/icons/save-search.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/save-search.png",
        web: "https://statestreetdebating.site/lauchswift/web/save-search.png",
        price: "975.00",
        timeline: "2",
        description:
          "يجعل حفظ البحث أكثر ملاءمة للمستخدم للوصول إلى العناصر التي تم البحث عنها مسبقًا إذا كانوا يرغبون في البحث عنها مرة أخرى.",
      },
    ],
  },
  {
    name: "الدردشة",
    img: chat,
    dropDown: [
      {
        id: 40,
        name: "الدردشة",
        icon: "https://statestreetdebating.site/lauchswift/icons/chatscreen.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/chatscreen.png",
        web: "https://statestreetdebating.site/lauchswift/web/conversation-threading.png",
        price: "850.00",
        timeline: "2",
        description:
          "يمكن للمستخدمين الدردشة مع بعضهم البعض على أساس 1-إلى-1. يمكنهم كتابة الرسائل ومشاركة الصور وإرسال واستقبال إشعارات الدفع. بشكل عام، وسيلة فعالة للتواصل بين الأشخاص في الوقت الحقيقي. يحتاج إلى تكامل مع جهة خارجية، لذلك يعتمد السعر النهائي على تسعيرهم.",
      },
      {
        id: 41,
        name: "الدردشة الجماعية",
        icon: "https://statestreetdebating.site/lauchswift/icons/group-chat.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/group-chat.png",
        web: "https://statestreetdebating.site/lauchswift/web/group-chat.png",
        price: "250.00",
        timeline: "2",
        description:
          "يمكن للمستخدمين إنشاء مجموعة مع مستخدمين آخرين، وإعطاء تلك المجموعة اسمًا والدردشة مع جميع المستخدمين داخل المجموعة. رائع لتحسين التواصل. يحتاج إلى تكامل مع جهة خارجية، لذلك يعتمد السعر النهائي على تسعيرهم.",
      },
      {
        id: 42,
        name: "نسخ/استعادة الدردشة",
        icon: "https://statestreetdebating.site/lauchswift/icons/chat-backup.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/chat-backup.png",
        web: "https://statestreetdebating.site/lauchswift/web/chat-backup.png",
        price: "670.00",
        timeline: "3",
        description:
          "يسمح للمستخدمين بحفظ واستعادة سجل دردشاتهم. يمكن للمستخدمين نسخ رسائل الدردشة الخاصة بهم إلى خدمة تخزين سحابية أو محلية. يمكنهم بعد ذلك الوصول إليها من أي جهاز يقومون بتسجيل الدخول إليه.",
      },
      {
        id: 43,
        name: "الدردشة الآلية",
        icon: "https://statestreetdebating.site/lauchswift/icons/chatbot.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/chatbot.png",
        web: "https://statestreetdebating.site/lauchswift/web/chatbot.png",
        price: "560.00",
        timeline: "3",
        description:
          "يقوم الروبوت الدردشة بتأمين الأسئلة المتكررة تلقائيًا، وتقديم ردود سريعة ومتسقة استنادًا إلى الأسئلة المحددة مسبقًا. إنه أداة فعالة لتبسيط خدمة العملاء وتحسين الكفاءة. يحتاج إلى تكامل مع جهة خارجية، لذلك يعتمد السعر النهائي على تسعيرهم.",
      },
      {
        id: 44,
        name: "مكالمة فيديو جماعية",
        icon: "https://statestreetdebating.site/lauchswift/icons/group-video-calls.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/group-video-calls.png",
        web: "https://statestreetdebating.site/lauchswift/web/group-video-call.png",
        price: "431.00",
        timeline: "2",
        description:
          "يمكن للمستخدمين القيام بمكالمة فيديو في مجموعات تصل إلى 16 شخصًا آخرين. يسهل هذا الاجتماعات عن بُعد ويعزز التعاون ويعزز التفاعلات الجماعية الفعّالة. يحتاج إلى تكامل مع جهة خارجية، لذلك يعتمد السعر النهائي على تسعيرهم.",
      },
      {
        id: 45,
        name: "تسلسل المحادثات",
        icon: "https://statestreetdebating.site/lauchswift/icons/conversation-threading.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/conversation-threading.png",
        web: "https://statestreetdebating.site/lauchswift/web/conversation-threading.png",
        price: "781.00",
        timeline: "2",
        description:
          "ينظم المحادثات بطريقة تمكن المستخدمين من الرد على رسائل محددة. يتم تجميع الردود وعرضها تحت الرسالة الأصلية، مما يجعل من السهل على المستخدمين تتبع النقاش.",
      },
      {
        id: 46,
        name: "رسول صوتي/فيديو",
        icon: "https://statestreetdebating.site/lauchswift/icons/audio-call.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/audio-video-messenger.png",
        web: "https://statestreetdebating.site/lauchswift/web/audio-video-messenger.png",
        price: "340.00",
        timeline: "2",
        description:
          "يمكن للمستخدمين إرسال واستقبال رسائل صوتية وفيديو فورية بين بعضهم البعض على أساس 1-2-1. يستخدم هذا غالبًا عندما لا يمكن للمستخدمين استخدام النص أو لا يرغبون في استخدامه. يحتاج إلى تكامل مع جهة خارجية، لذلك يعتمد السعر النهائي على تسعيرهم.",
      },
      {
        id: 47,
        name: "ندوة عبر الويب",
        icon: "https://statestreetdebating.site/lauchswift/icons//group-video-call.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile//group-video-call.png",
        web: "https://statestreetdebating.site/lauchswift/web/group-video-call.png",
        price: "380.00",
        timeline: "2",
        description:
          "يبث عرض تقديمي أو محاضرة أو ورشة عمل أو ندوة لجمهور من أي مكان. يمكن للجمهور مشاهدة هذه البثوث مباشرة مع اتصال بالإنترنت. يحتاج إلى تكامل مع جهة خارجية، لذلك يعتمد السعر النهائي على تسعيرهم.",
      },
    ],
  },
  {
    name: "مشاركة",
    img: share,
    dropDown: [
      {
        id: 48,
        name: "مشاركة جهة اتصال",
        icon: "https://statestreetdebating.site/lauchswift/icons/share-contact.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/share-contact.png",
        web: "https://statestreetdebating.site/lauchswift/web/share-contact.png",
        price: "541.00",
        timeline: "2",
        description:
          "يتيح للمستخدمين مشاركة معلومات جهات الاتصال الخاصة بهم بسرعة وسهولة، بما في ذلك أرقام الهواتف وعناوين البريد الإلكتروني والملفات الشخصية على وسائل التواصل الاجتماعي، مما يعزز التواصل الفعال.",
      },
      {
        id: 49,
        name: "مشاركة رابط",
        icon: "https://statestreetdebating.site/lauchswift/icons/share-link.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/share-link.png",
        web: "https://statestreetdebating.site/lauchswift/web/link-share.png",
        price: "562.00",
        timeline: "2.5",
        description:
          "يمكن للمستخدمين مشاركة الصور ومقاطع الفيديو والمستندات المستضافة داخل المنتج. يولد كل مشاركة رابطًا فريدًا لأي شخص يمكنه النقر عليه، مما يجعلها مفيدة للترويج للمحتوى والوصول إلى جمهور جديد.",
      },
    ],
  },
  {
    name: "المراجعات والتغذية الراجعة",
    img: reviews,
    dropDown: [
      {
        id: 50,
        name: "دعوة لتقييم التطبيق",
        icon: "https://statestreetdebating.site/lauchswift/icons/app-review-prompt.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/app-review-prompt.png",
        web: "https://statestreetdebating.site/lauchswift/web/app-review-prompt.png",
        price: "390.00",
        timeline: "1",
        description:
          "جمع ملاحظات العملاء، زيادة التقييمات، وتعزيز التصنيفات في متاجر التطبيقات من خلال تشجيع العملاء على ترك المراجعات. قم بتخصيص الرسالة التي يراها المستخدمون وتكرار ظهور الدعوات.",
      },
      {
        id: 51,
        name: "استطلاعات",
        icon: "https://statestreetdebating.site/lauchswift/icons/surveys.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/surveys.png",
        web: "https://statestreetdebating.site/lauchswift/web/surveys.png",
        price: "180.00",
        timeline: "1",
        description:
          "جمع رؤى العملاء من خلال طلب ملاحظاتهم. يمكن للمستخدمين تقديم تقييمات، الإجابة على أسئلة متعددة الاختيارات وإضافة تعليقات. استخدم البيانات لتحسين تجربة العملاء وعروض المنتجات.",
      },
      {
        id: 52,
        name: "لوحة التحكم في التغذية الراجعة",
        icon: "https://statestreetdebating.site/lauchswift/iconsapp-feedback.png/",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/app-feedback.png",
        web: "https://statestreetdebating.site/lauchswift/web/backend-feature.png",
        price: "275.00",
        timeline: "2",
        description:
          "يمكن لفرق العملاء جمع وتخزين التغذية الراجعة من جماهيرهم. استخدم هذا لبناء تحليلات العملاء أو قياس المشاعر العامة بين الفئات أو المجموعات الكبيرة.",
      },
    ],
  },
  {
    name: "الصوت والفيديو",
    img: audiovideo,
    dropDown: [
      {
        id: 53,
        name: "مشغل الصوت",
        icon: "https://statestreetdebating.site/lauchswift/icons/audio-player.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/audio-player.png",
        web: "https://statestreetdebating.site/lauchswift/web/audio-player.png",
        price: "657.00",
        timeline: "3",
        description:
          "مركز رئيسي حيث يمكن للمستخدمين إدارة صوتهم. يمكنهم التحكم بسهولة في الوظائف الأساسية مثل التشغيل والإيقاف المؤقت والتحكم في مستوى الصوت. يمكن إضافة ميزات إضافية مثل تعزيز الباس وتعديل المعادل الصوتي إذا تم تفضيلها.",
      },
      // {
      //   id: 54,
      //   name: "مشغل الفيديو",
      //   icon: "https://statestreetdebating.site/lauchswift/icons/camera-video-recordin.png",
      //   mobile: "https://statestreetdebating.site/lauchswift/mobile/",
      //   web: "https://statestreetdebating.site/lauchswift/web/",
      //   price: "743.00",
      //   timeline: "3",
      //   description:
      //     "مركز رئيسي حيث يمكن للمستخدمين إدارة صوتهم. يمكنهم التحكم بسهولة في الوظائف الأساسية مثل التشغيل والإيقاف المؤقت والتحكم في مستوى الصوت. يمكن إضافة ميزات إضافية مثل تعزيز الباس وتعديل المعادل الصوتي إذا تم تفضيلها.",
      // },
      {
        id: 55,
        name: "محطات الراديو",
        icon: "https://statestreetdebating.site/lauchswift/icons/radio-station.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/radio-station.png",
        web: "https://statestreetdebating.site/lauchswift/web/radio-station.png",
        price: "980.00",
        timeline: "2.5",
        description:
          "يمكن للمستخدمين الوصول إلى محطات الراديو داخل المنتج. يمكن الوصول إليها بنقرة واحدة. هذا يتطلب تكاملًا من الطرف الثالث، لذا يعتمد السعر النهائي على تسعيرهم.",
      },
      {
        id: 56,
        name: "خيارات التنزيل",
        icon: "https://statestreetdebating.site/lauchswift/icons/download-options.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/download-options.png",
        web: "https://statestreetdebating.site/lauchswift/web/download-options.png",
        price: "342.00",
        timeline: "2",
        description: "ميزة لتنزيل المستندات/الوسائط/الملفات إلى الجهاز.",
      },
      {
        id: 57,
        name: "الأرشيف",
        icon: "https://statestreetdebating.site/lauchswift/icons/archive.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/archive.png",
        web: "https://statestreetdebating.site/lauchswift/web/archive.png",
        price: "287.00",
        timeline: "2",
        description:
          "يمكن للمستخدمين أرشفة صورهم ومقاطع الفيديو والمستندات دون حذفها. يمكن استعادة جميع المحتويات لأسباب الأدلة والامتثال أو إذا أراد المستخدم استعادتها.",
      },
      {
        id: 58,
        name: "إدارة الفيديو",
        icon: "https://statestreetdebating.site/lauchswift/icons/video-management.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/video-management.png",
        web: "https://statestreetdebating.site/lauchswift/web/video-management.png",
        price: "760.00",
        timeline: "1.5",
        description:
          "يمكن للمستخدمين تنظيم مقاطع الفيديو المخزنة داخل المنتج. يتضمن خيارات لإضافة وحذف والعثور على مقاطع الفيديو ذات الصلة.",
      },
      {
        id: 59,
        name: "أدوات تحرير الفيديو",
        icon: "https://statestreetdebating.site/lauchswift/icons/video-editing.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/video-editing.png",
        web: "https://statestreetdebating.site/lauchswift/web/video-editing.png",
        price: "1,200.00",
        timeline: "3",
        description:
          "قدم مجموعة أدوات لتحرير الفيديو داخل المنتج. تشمل الأدوات التقليم والانقسام ودمج المقاطع وإضافة التأثيرات والانتقالات والعناصر الوسائط المتعددة. يمكنهم أيضًا تقليل جودة الفيديو لتقليل حجم الملف. يتطلب تكاملًا من الطرف الثالث، لذا يعتمد السعر النهائي على تسعيرهم.",
      },
    ],
  },
  {
    name: "الاتصالات والإشعارات",
    dropDown: [
      {
        id: 60,
        name: "مكالمة صوتية",
        icon: "https://statestreetdebating.site/lauchswift/icons/audio-call.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/audio-call.png",
        web: "https://statestreetdebating.site/lauchswift/web/audio-call.png",
        price: "280.00",
        timeline: "2",
        description:
          "Users can communicate with each other through voice calls while staying within the product, eliminating the need to use their traditional phone service's call allowance. Needs a third-party integration, so the final cost depends on their pricing.",
      },
      {
        id: 61,
        name: "مكتبة الصوتيات",
        icon: "https://statestreetdebating.site/lauchswift/icons/audio-library.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/audio-library.png",
        web: "https://statestreetdebating.site/lauchswift/web/audio-library.png",
        price: "930.00",
        timeline: "2",
        description:
          "Users can create a library of audio files, such as podcasts or company recordings. Store everything in one place for easy access.",
      },
      {
        id: 62,
        name: "تسجيل المكالمات",
        icon: "https://statestreetdebating.site/lauchswift/icons/call-recording.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/call-recording.png",
        web: "https://statestreetdebating.site/lauchswift/web/call-recording.png",
        price: "390.00",
        timeline: "1.5",
        description:
          "Provide users with the ability to record calls within the product. They can use this to record the audio from voice calls or meetings. Great for keeping records of important conversations. Needs a third-party integration, so the final cost depends on their pricing.",
      },
      {
        id: 63,
        name: "الملاحظات الصوتية",
        icon: "https://statestreetdebating.site/lauchswift/icons/voice-notes.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/voice-notes.png",
        web: "https://statestreetdebating.site/lauchswift/web/voice-notes.png",
        price: "780.00",
        timeline: "1.5",
        description:
          "Users can make and store a voice recording inside the product. Voice notes offer a way to make quick recordings that can be accessed via a library and listened to anytime.",
      },
      {
        id: 64,
        name: "إشعارات الدفع",
        icon: "https://statestreetdebating.site/lauchswift/icons/push-notification.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/push-notification.png",
        web: "https://statestreetdebating.site/lauchswift/web/push-notifications.png",
        price: "610.00",
        timeline: "2",
        description:
          "Send notifications users can see and read when they are not inside the product. Helpful when you need to send important or new information and is great for increasing engagement.",
      },
      {
        id: 65,
        name: "إشعارات داخل التطبيق",
        icon: "https://statestreetdebating.site/lauchswift/icons/in-app-notifcations.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/in-app-notifications.png",
        web: "https://statestreetdebating.site/lauchswift/web/in-app-notifications.png",
        price: "540.00",
        timeline: "1.5",
        description:
          "An interface for users to view and manage notifications they receive within the product. From there, they can perform functions such as reply, mark as read and delete. Helpful for keeping users informed.",
      },
      {
        id: 66,
        name: "إرسال البريد الإلكتروني التلقائي",
        icon: "https://statestreetdebating.site/lauchswift/icons/automated.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/auto-email-sending.png",
        web: "https://statestreetdebating.site/lauchswift/web/auto-email-sending.png",
        price: "765.00",
        timeline: "2",
        description:
          "Send automated emails to users. These can be based on customized rules or actions such as reminders.",
      },
      {
        id: 67,
        name: "صوت الإشعار والتنبيهات",
        icon: "https://statestreetdebating.site/lauchswift/icons/notification-sound-haptics.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/notification-sound-haptics.png",
        web: "https://statestreetdebating.site/lauchswift/web/backend-feature.png",
        price: "189.00",
        timeline: "1.5",
        description:
          "Enables customised sound and haptics in the product to provide a personlied user experience",
      },
      {
        id: 68,
        name: "جدولة الإشعارات",
        icon: "https://statestreetdebating.site/lauchswift/icons/schedule-notification.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/schedule-notifcation.png",
        web: "https://statestreetdebating.site/lauchswift/web/schedule-notification.png",
        price: "590.00",
        timeline: "2",
        description:
          "Send notifications with daily schedule details. Choose when these are sent, depending on time zone.",
      },
      {
        id: 69,
        name: "إشعارات سطح المكتب",
        icon: "https://statestreetdebating.site/lauchswift/icons/desktop-notifications.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/desktop-notifications.png",
        web: "https://statestreetdebating.site/lauchswift/web/desktop-notifications.png",
        price: "741.00",
        timeline: "2.5",
        description:
          "Send push notifications to users' desktops. Useful when sending important messages that users need to see promptly or if your audience is using desktop-based screens rather than mobile.",
      },
      {
        id: 70,
        name: "تذكيرات تلقائية",
        icon: "https://statestreetdebating.site/lauchswift/icons/auto-reminders.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/auto-reminders.png",
        web: "https://statestreetdebating.site/lauchswift/web/auto-reminders.png",
        price: "420.00",
        timeline: "2",
        description:
          "Send automatic reminders to users. Set these up to send based on the required criteria, with time zones in mind. Send these to prompt payments, indicate a task is almost due and more.",
      },
      {
        id: 71,
        name: "تحديثات فورية",
        icon: "https://statestreetdebating.site/lauchswift/icons/realtime-updates.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/realtime-updates.png",
        web: "https://statestreetdebating.site/lauchswift/web/realtime-updates.png",
        price: "960.00",
        timeline: "3",
        description:
          "Any updates to data inside the product are shown instantly. Constantly update content, ensuring users always have the latest data. This feature can improve efficiency, accuracy, and user experience.",
      },
      {
        id: 72,
        name: "إشعارات البريد الإلكتروني",
        icon: "https://statestreetdebating.site/lauchswift/icons/email-notification.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/email-notifications.png",
        web: "https://statestreetdebating.site/lauchswift/web/email-notifications.png",
        price: "320.00",
        timeline: "2",
        description:
          "Send email notifications to your users. Great for keeping in contact with them from outside the product. They can also unsubscribe from these emails if they wish.",
      },
      {
        id: 73,
        name: "اشتراكات البريد الإلكتروني",
        icon: "https://statestreetdebating.site/lauchswift/icons/email-subscription.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/email-subscriptions.png",
        web: "https://statestreetdebating.site/lauchswift/web/email-subscriptions.png",
        price: "380.00",
        timeline: "2",
        description:
          "Make a message appear which invites a user to subscribe to your content with an email address. This can be integrated into an admin console or CRM, to manage subscriptions from one place.",
      },
    ],
    img: comnoti,
  },
  {
    name: "الأدوات والمرافق",
    img: tools,
    dropDown: [
      {
        id: 74,
        name: "جلب الخلفية",
        icon: "https://statestreetdebating.site/lauchswift/icons/background-fetch.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/background-fetch.png",
        web: "https://statestreetdebating.site/lauchswift/web/backend-feature.png",
        price: "351.00",
        timeline: "2",
        description:
          "استخدام مدير المهام نقوم بجلب الأنشطة الخلفية من داخل التطبيق حتى عندما لا يكون في الاستخدام بفاصل زمني سيقرره الفريق.",
      },
      {
        id: 75,
        name: "مُختار المستندات",
        icon: "https://statestreetdebating.site/lauchswift/icons/pdf-scanner.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/pdf-scanner.png",
        web: "https://statestreetdebating.site/lauchswift/web/pdf-scanner.png",
        price: "498.00",
        timeline: "2",
        description:
          "يوفر عنصر واجهة المستخدم الأصلي لتصفح واختيار مستند من داخل تخزين الجهاز المحلي وتخزين السحابة لاستخدامه في التطبيق.",
      },

      {
        id: 76,
        name: "التحسيس",
        icon: "https://statestreetdebating.site/lauchswift/icons/haptics.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/haptics.png",
        web: "https://statestreetdebating.site/lauchswift/web/haptics.png",
        price: "230.00",
        timeline: "1",
        description:
          "يمكّن التحسين المخصص في المنتج لتوفير تجربة مستخدم شخصية عند التفاعل مع الميزات في المنتج.",
      },
      {
        id: 77,
        name: "وصول الملفات",
        icon: "https://statestreetdebating.site/lauchswift/icons/pdf-scanner.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/pdf-scanner.png",
        web: "https://statestreetdebating.site/lauchswift/web/pdf-scanner.png",
        price: "143.00",
        timeline: "1",
        description:
          "وحدة توفر وصول المستخدم إلى نظام الملفات المحلي على الجهاز.",
      },
      {
        id: 78,
        name: "موفر البيانات",
        icon: "https://statestreetdebating.site/lauchswift/icons/app-updates.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/data-saving.png",
        web: "https://statestreetdebating.site/lauchswift/web/data-saving.png",
        price: "980.00",
        timeline: "3",
        description:
          "يضمن أن يقوم المستخدمون بتحميل وتنزيل الملفات والوسائط فقط على الشبكات المعدلة، مثل شبكة الواي فاي. يمنع المنتج من استخدام كميات كبيرة من بيانات المستخدمين.",
      },
      {
        id: 79,
        name: "العرض والسمة (وضع النهار/وضع الليل)",
        icon: "https://statestreetdebating.site/lauchswift/icons/theme.png",
        mobile: "https://statestreetdebating.site/lauchswift/mobile/theme.png",
        web: "https://statestreetdebating.site/lauchswift/web/theme.png",
        price: "1,500.00",
        timeline: "4",
        description:
          "يمكن للمستخدم تخصيص مظهر السمات في المنتج للاختيار من بينها. يعزز تجربة المستخدم عن طريق توفير السيطرة الشخصية على مظهر وشعور التطبيق.",
      },
      {
        id: 80,
        name: "العمل دون اتصال",
        icon: "https://statestreetdebating.site/lauchswift/icons/activity-feed.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/apple-maps.png",
        web: "https://statestreetdebating.site/lauchswift/web/backend-feature.png",
        price: "435.00",
        timeline: "2",
        description: "نفس التحليلات مع تمييز دون اتصال في الأعلى في مكان ما.",
      },
      {
        id: 81,
        name: "تبديل اللغة",
        icon: "https://statestreetdebating.site/lauchswift/icons/switch-language.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/switch-language.png",
        web: "https://statestreetdebating.site/lauchswift/web/switch-language.png",
        price: "120.00",
        timeline: "2",
        description:
          "التبديل بين عدة لغات. يمكن للمستخدمين اختيار اللغات المتاحة لعرض المنتج باللغة التي يفضلونها. يحتاج إلى دمج جهة خارجية، لذا يعتمد التكلفة النهائية على تسعيرتهم.",
      },
      {
        id: 82,
        name: "التخزين المؤقت",
        icon: "https://statestreetdebating.site/lauchswift/icons/app-update.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/api-integration.png",
        web: "https://statestreetdebating.site/lauchswift/web/backend-feature.png",
        price: "432.00",
        timeline: "2",
        description:
          "يقوم بتخزين البيانات واسترجاعها، مما يعزز الأداء ويقلل من الحاجة إلى المعالجة المتكررة. يتم تخزين بعض الموارد التي يتم الوصول إليها بانتظام، مثل الصفحات أو الصور، مؤقتًا (يتم تخزينها محليًا) على أجهزة المستخدمين.",
      },
      {
        id: 83,
        name: "استيراد جهات اتصال Google",
        icon: "https://statestreetdebating.site/lauchswift/icons/google-contacts-import.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/google-contacts-import.png",
        web: "https://statestreetdebating.site/lauchswift/web/google-contacts-import.png",
        price: "447.00",
        timeline: "2.5",
        description:
          "يمكن للمستخدمين استيراد جهات الاتصال من حساب Google الخاص بهم إلى المنتج. يعتبر هذا الميزة مفيدًا للمستخدمين الذين يعتمدون على جهات الاتصال الخاصة بهم من Google للتواصل ويحتاجون إلى قوائم جهات اتصال مُحدثة. يحتاج إلى دمج جهة خارجية، لذا يعتمد التكلفة النهائية على تسعيرتهم.",
      },
      {
        id: 84,
        name: "مسح الباركود",
        icon: "https://statestreetdebating.site/lauchswift/icons/barcode-scanning.png",
        mobile:
          "https://statestreetdebating.site/lauchswift/mobile/barcode-scanning.png",
        web: "https://statestreetdebating.site/lauchswift/web/backend-feature.png",
        price: "934.00",
        timeline: "2.5",
        description:
          "مسح، قراءة ومعالجة باركود باستخدام كاميرا الجهاز. سيتم استخدام المعلومات الممسوحة لإدارة المخزون أو التجارة الإلكترونية. سيتطلب هذا التكامل مع جهة خارجية، لذا تعتمد التكلفة النهائية على تسعيرتهم.",
      },
    ],
  },

  {
    name: "الإنتاجية",
    dropDown: [],
    img: productivity,
  },
  {
    name: "الأمان والخصوصية",
    dropDown: [],
    img: securityPrivacy,
  },
  {
    name: "لوحة التحكم الإدارية",
    dropDown: [],
    img: adminPanel,
  },
  {
    name: "المحتوى",
    dropDown: [],
    img: content,
  },
  {
    name: "تحليلات العملاء",
    dropDown: [],
    img: customerInsight,
  },
  {
    name: "المالية والمدفوعات",
    dropDown: [],
    img: financePayments,
  },
  {
    name: "الصور والفيديوهات",
    dropDown: [],
    img: photosVideos,
  },
  {
    name: "إدارة المشاريع",
    dropDown: [],
    img: projectManagement,
  },
];

export const speedLabels = ["Relaxed", "Slow", "Standard", "Fast", "Speedy"];

export const priceDuration = [
  {
    name: "Relaxed",
    duration: 20,
    price: "$ 20,000",
    description: `Our most budget-friendly option for those who aren't in a hurry`,
  },
  {
    name: "Slow",
    duration: 18,
    price: "$ 20,000",
    description: `For those with a fixed long-term plan who want to keep costs down`,
  },
  {
    name: "Standard",
    duration: 16,
    price: "$ 20,000",
    description: `The perfect middle ground for anyone with a modest budget and medium-term deadlines`,
  },
  {
    name: "Fast",
    duration: 14,
    price: "$ 20,000",
    description: `We put your app build on turbo charge for a few extra bucks`,
  },
  {
    name: "Speedy",
    duration: 12,
    price: "$ 20,000",
    description: `We build your app at the speed of light for a premium price`,
  },
];

export const initialPhases = [
  {
    name: "Product Roadmap",
    duration: "---",
    fixedCost: 0,
    customizationCost: 0,
    delivery: "---",
    icon: <GoChecklist className="text-4xl text-black" />,
    selected: false,
    description:
      "Why do you need a product roadmap? Add it and we help you define the use cases for every feature in your Buildcard. If you skip it, you’ll need to know exactly what you expect each feature to do before we can start building your app.It also gives you an in-depth view of where your product is going. Includes a product timeline so everyone can see all the key dates on the way to get you there.",
    more: "Can help you secure funding, improve collaboration and streamline the whole app building process. Also useful for making long-term strategic decisions and planning a successful launch.",
    platform: ["ios"],
    sliderValue: 2,
  },
  {
    name: "Design",
    duration: "---",
    fixedCost: 0,
    customizationCost: 0,
    delivery: "---",
    icon: <SiStyledcomponents className="text-4xl text-black" />,
    selected: true,
    description:
      "Trust us to do the wireframing of your concept and design a seamless experience. Get a fully scalable UI/UX",
    more: "We combine visual principles, data, color psychology, and decades worth of experience to create aesthetic interfaces that will drive the growth of your product. We are experts in creating human-centric designs that allow customers to intuitively use your product and have a great product experience.",
    platform: ["ios"],
    sliderValue: 1,
  },
  {
    name: "Professional Prototype",
    duration: "---",
    fixedCost: 0,
    customizationCost: 0,
    delivery: "---",
    icon: <PiShootingStarThin className="text-4xl text-black" />,
    selected: false,
    description:
      "Get a fully functional design prototype to test the design hypothesis and end-user journey. This includes designs for prototypes.",
    more: "Prototypes are realistic design representations of your ideas. We design interactive prototypes for iPhone, iPad, Android, and Web. Creation of prototypes is more specific, measurable, quick, and intensive than just describing the design. Test how the user will interact with an environment comparable to the final product.",
    platform: ["ios"],
    sliderValue: 3,
  },
  {
    name: "MVP",
    duration: "---",
    fixedCost: 0,
    customizationCost: 0,
    delivery: "---",
    icon: <IoCodeSlashOutline className="text-4xl text-black" />,
    selected: true,
    description:
      "Ship the first build of your idea and get early adopters to try out your product",
    more: "We help design a Minimum Viable Product as a proof of concept to satisfy early customers and provide feedback for future development. It’s an easy way to build a product with a minimum set of features to test the market. Collect the maximum amount of validated learning about your customers with the least effort.",
    platform: ["ios"],
    showPlatform: true,
    features: 0,
    sliderValue: 4,
  },
  {
    name: "Full Build",
    duration: "---",
    fixedCost: 0,
    customizationCost: 0,
    delivery: "---",
    icon: <GoRocket className="text-4xl text-black" />,
    selected: false,
    description:
      "We will do end to end designing and development of your idea. Get a market-ready product",
    more: "We build a full-fledged product based on the product roadmap and the features laid out in the specification document. We will also perfect the product based on user feedback received on the Minimum Viable Product. We will ship a fully mature, responsive, scalable, business-ready and a user-friendly product.",
    platform: ["ios"],
    sliderValue: 5,
  },
];

export const numOfUsers = [
  { users: "0-500", minPrice: 150, maxPrice: 230 },
  { users: "500-5k", minPrice: 225, maxPrice: 340 },
  { users: "5k-50k", minPrice: 490, maxPrice: 735 },
  { users: "50k+", maxPrice: 1000 },
];
