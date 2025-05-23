// import { AiOutlineHome } from "react-icons/ai";
// import { TbRefresh } from "react-icons/tb";
// import { BiMessageDetail } from "react-icons/bi";
// import { TfiWorld } from "react-icons/tfi";
// import { LiaLightbulb } from "react-icons/lia";
// import { GiGamepad } from "react-icons/gi";
// import { PiAddressBookTabsThin } from "react-icons/pi";
// import { CiMusicNote1 } from "react-icons/ci";
// import { MdAmpStories } from "react-icons/md";
// import { MdMenuBook } from "react-icons/md";
// import { RiLogoutCircleLine } from "react-icons/ri";
// import { IconType } from "react-icons";
// import { FiltersType } from "./typeDefinations";

/**
 ******** Sidebar filters for News ********
 */
// type FiltersType = {
//   id: number;
//   icon: typeof AiOutlineHome | typeof TbRefresh;
//   name: string;
// };

// export const newsFilters: Array<FiltersType> = [
//   {
//     id: 1,
//     name: "Home",
//     icon: <AiOutlineHome size={16} className="text-gray-500" />,
//   },
//     {
//       id: 2,
//       icon: TbRefresh,
//       name: "Latest News",
//     },
//     {
//       id: 3,
//       icon: BiMessageDetail,
//       name: "Opinion",
//     },
//     {
//       id: 4,
//       icon: TfiWorld,
//       name: "International",
//     },
//     {
//       id: 5,
//       icon: LiaLightbulb,
//       name: "Technology",
//     },
//     {
//       id: 6,
//       icon: GiGamepad,
//       name: "Suports",
//     },
//     {
//       id: 7,
//       icon: PiAddressBookTabsThin,
//       name: "Politics",
//     },
//     {
//       id: 8,
//       icon: CiMusicNote1,
//       name: "Entertainment",
//     },
//     {
//       id: 9,
//       icon: MdAmpStories,
//       name: "Stories",
//     },
//     {
//       id: 10,
//       icon: MdMenuBook,
//       name: "Educational",
//     },
//     {
//       id: 11,
//       icon: RiLogoutCircleLine,
//       name: "Logout",
//     },
// ];

export const newsData = [
  {
    id: 1,
    heading: "ECP notifies 39 MNAs as PTI lawmakers",
    description:
      "The ECP spokesperson clarified that the ECP has not misinterpreted the SC’s verdict and has not declared the intra-party elections as valid. Instead, the commission has held that the PTI’s intra-party elections were not in accordance with the law, and therefore, the candidates who submitted their nomination papers without a party ticket and declaration could not be considered PTI candidates.",
    published: "Published: July 24, 2024, 12:23 pm",
    logo: "https://arynews.tv/wp-content/uploads/2024/02/ary-news-logo-F2E62D53D8-seeklogo.com_-150x150.png",
    image:
      "https://e3.365dm.com/24/07/1600x900/skynews-leon-marchand-simone-biles_6638832.jpg?20240725130335",
  },
  {
    id: 2,
    heading: "New research reveals surprising findings",
    description:
      "Researchers have discovered a new species of marine life deep in the ocean, challenging existing theories about biodiversity in extreme environments.",
    published: "Published: July 25, 2024, 9:45 am",
    logo: "https://dummyimage.com/150x150/cccccc/000000.png&text=Logo+2",
    image: "https://dummyimage.com/1600x900/cccccc/000000.png&text=Image+2",
  },
  {
    id: 3,
    heading: "Technology giants announce collaboration on AI ethics",
    description:
      "Leading tech companies have come together to establish new guidelines for the ethical development and deployment of artificial intelligence technologies.",
    published: "Published: July 25, 2024, 10:30 am",
    logo: "https://dummyimage.com/150x150/cccccc/000000.png&text=Logo+3",
    image: "https://dummyimage.com/1600x900/cccccc/000000.png&text=Image+3",
  },
  {
    id: 4,
    heading: "Global economy faces uncertainty amid trade tensions",
    description:
      "Economists warn of potential slowdowns as trade disputes between major economies escalate, affecting global supply chains and market stability.",
    published: "Published: July 25, 2024, 11:15 am",
    logo: "https://dummyimage.com/150x150/cccccc/000000.png&text=Logo+4",
    image: "https://dummyimage.com/1600x900/cccccc/000000.png&text=Image+4",
  },
  {
    id: 5,
    heading: "SpaceX launches new satellite into orbit",
    description:
      "SpaceX successfully deploys a next-generation communications satellite, marking a milestone in space technology advancements.",
    published: "Published: July 25, 2024, 12:00 pm",
    logo: "https://dummyimage.com/150x150/cccccc/000000.png&text=Logo+5",
    image: "https://dummyimage.com/1600x900/cccccc/000000.png&text=Image+5",
  },
  {
    id: 6,
    heading: "Health officials warn of flu season risks",
    description:
      "Health authorities emphasize the importance of vaccination as flu season approaches, urging the public to take preventive measures.",
    published: "Published: July 25, 2024, 1:00 pm",
    logo: "https://dummyimage.com/150x150/cccccc/000000.png&text=Logo+6",
    image: "https://dummyimage.com/1600x900/cccccc/000000.png&text=Image+6",
  },
  {
    id: 7,
    heading: "New educational reforms announced",
    description:
      "Government officials unveil plans for comprehensive reforms in the education sector, aiming to improve learning outcomes and accessibility.",
    published: "Published: July 25, 2024, 2:00 pm",
    logo: "https://dummyimage.com/150x150/cccccc/000000.png&text=Logo+7",
    image: "https://dummyimage.com/1600x900/cccccc/000000.png&text=Image+7",
  },
  {
    id: 8,
    heading: "Climate change summit concludes with new agreements",
    description:
      "World leaders finalize agreements to address climate change, including new targets for reducing carbon emissions and preserving ecosystems.",
    published: "Published: July 25, 2024, 3:00 pm",
    logo: "https://dummyimage.com/150x150/cccccc/000000.png&text=Logo+8",
    image: "https://dummyimage.com/1600x900/cccccc/000000.png&text=Image+8",
  },
  {
    id: 9,
    heading: "Celebrity chef launches new cooking show",
    description:
      "Renowned chef introduces a new television series showcasing culinary techniques and recipes from around the world.",
    published: "Published: July 25, 2024, 4:00 pm",
    logo: "https://dummyimage.com/150x150/cccccc/000000.png&text=Logo+9",
    image: "https://dummyimage.com/1600x900/cccccc/000000.png&text=Image+9",
  },
  {
    id: 10,
    heading: "Art exhibition highlights emerging artists",
    description:
      "A prestigious art gallery features works by up-and-coming artists, exploring themes of identity and cultural heritage.",
    published: "Published: July 25, 2024, 5:00 pm",
    logo: "https://dummyimage.com/150x150/cccccc/000000.png&text=Logo+10",
    image: "https://dummyimage.com/1600x900/cccccc/000000.png&text=Image+10",
  },
  {
    id: 11,
    heading: "Major sporting event attracts global audience",
    description:
      "Athletes from around the world compete in a highly anticipated sporting event, drawing millions of viewers and fans.",
    published: "Published: July 25, 2024, 6:00 pm",
    logo: "https://dummyimage.com/150x150/cccccc/000000.png&text=Logo+11",
    image: "https://dummyimage.com/1600x900/cccccc/000000.png&text=Image+11",
  },
  {
    id: 12,
    heading: "New breakthrough in medical research announced",
    description:
      "Scientists report a significant advancement in medical research, potentially leading to improved treatments for a range of conditions.",
    published: "Published: July 25, 2024, 7:00 pm",
    logo: "https://dummyimage.com/150x150/cccccc/000000.png&text=Logo+12",
    image: "https://dummyimage.com/1600x900/cccccc/000000.png&text=Image+12",
  },
  {
    id: 13,
    heading: "Tech startup secures record funding round",
    description:
      "A promising tech startup raises a record amount of funding, fueling expansion plans and innovation in the technology sector.",
    published: "Published: July 25, 2024, 8:00 pm",
    logo: "https://dummyimage.com/150x150/cccccc/000000.png&text=Logo+13",
    image: "https://dummyimage.com/1600x900/cccccc/000000.png&text=Image+13",
  },
  {
    id: 14,
    heading: "Fashion industry introduces sustainable practices",
    description:
      "Fashion brands commit to sustainable practices, launching initiatives to reduce environmental impact and promote ethical fashion.",
    published: "Published: July 25, 2024, 9:00 pm",
    logo: "https://dummyimage.com/150x150/cccccc/000000.png&text=Logo+14",
    image: "https://dummyimage.com/1600x900/cccccc/000000.png&text=Image+14",
  },
  {
    id: 15,
    heading: "New transportation infrastructure project announced",
    description:
      "Government announces plans for a major transportation infrastructure project, aimed at improving connectivity and reducing traffic congestion.",
    published: "Published: July 25, 2024, 10:00 pm",
    logo: "https://dummyimage.com/150x150/cccccc/000000.png&text=Logo+15",
    image: "https://dummyimage.com/1600x900/cccccc/000000.png&text=Image+15",
  },
  {
    id: 16,
    heading: "Entertainment industry sees growth in digital streaming",
    description:
      "Streaming platforms report significant growth in subscribers and revenue, reshaping the entertainment industry.",
    published: "Published: July 25, 2024, 11:00 pm",
    logo: "https://dummyimage.com/150x150/cccccc/000000.png&text=Logo+16",
    image: "https://dummyimage.com/1600x900/cccccc/000000.png&text=Image+16",
  },
  {
    id: 17,
    heading: "Renewable energy project receives government support",
    description:
      "Government allocates funding to support a large-scale renewable energy project, aiming to reduce dependence on fossil fuels.",
    published: "Published: July 25, 2024, 11:59 pm",
    logo: "https://dummyimage.com/150x150/cccccc/000000.png&text=Logo+17",
    image: "https://dummyimage.com/1600x900/cccccc/000000.png&text=Image+17",
  },
  {
    id: 18,
    heading: "Artificial intelligence used to predict weather patterns",
    description:
      "Researchers develop AI models capable of predicting weather patterns with higher accuracy, improving forecasts and disaster preparedness.",
    published: "Published: July 26, 2024, 12:01 am",
    logo: "https://dummyimage.com/150x150/cccccc/000000.png&text=Logo+18",
    image: "https://dummyimage.com/1600x900/cccccc/000000.png&text=Image+18",
  },
  {
    id: 19,
    heading: "Investment in cybersecurity technologies on the rise",
    description:
      "Businesses increase investment in cybersecurity technologies amid rising threats of cyber attacks and data breaches.",
    published: "Published: July 26, 2024, 1:00 am",
    logo: "https://dummyimage.com/150x150/cccccc/000000.png&text=Logo+19",
    image: "https://dummyimage.com/1600x900/cccccc/000000.png&text=Image+19",
  },
  {
    id: 20,
    heading: "Cultural festival promotes diversity and unity",
    description:
      "Annual cultural festival celebrates diversity through music, art, and cuisine, fostering unity and understanding among communities.",
    published: "Published: July 26, 2024, 2:00 am",
    logo: "https://dummyimage.com/150x150/cccccc/000000.png&text=Logo+20",
    image: "https://dummyimage.com/1600x900/cccccc/000000.png&text=Image+20",
  },
];
