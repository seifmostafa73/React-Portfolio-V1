import { ProjectCardProps } from "../Sections/ProjectsSection";
import SectorImage from "../Images/sectorlogo.png";
import PortfolioSS_1 from "../Images/PortfolioSS1.png";
import PortfolioSS_2 from "../Images/PortfolioSS2.png";
import PortfolioSS_3 from "../Images/PortfolioSS3.png";

import RES_1 from "../Images/RES_1.jpeg";
import RES_2 from "../Images/RES_2.jpeg";
import RES_3 from "../Images/RES_3.jpeg";
import RES_4 from "../Images/RES_4.jpeg";
import RES_5 from "../Images/RES_5.jpeg";
import RES_6 from "../Images/RES_6.jpeg";
import RES_7 from "../Images/RES_7.jpeg";
import RES_8 from "../Images/RES_8.jpeg";
import RES_9 from "../Images/RES_9.jpeg";
import RES_10 from "../Images/RES_10.jpeg";
import RES_11 from "../Images/RES_11.jpeg";
import RES_13 from "../Images/RES_13.jpeg";
import RES_14 from "../Images/RES_14.jpeg";
import RES_15 from "../Images/RES_15.jpeg";
import RES_16 from "../Images/RES_16.jpeg";

import XO_1 from "../Images/XO_1.jpeg";
import XO_2 from "../Images/XO_2.jpeg";
import XO_3 from "../Images/XO_3.jpeg";
import XO_4 from "../Images/XO_4.jpeg";

import FreeLanceLogo from "../Images/freelancer-icon.svg";
import { ExperinceInfo } from "../Sections/ExperienceSection";
import { listItem } from "../Components/InfiniteScrollList";

//#region Images
import ReactIcon from "../Images/react_icon.svg";
import tailwindCSSIcon from "../Images/tailwind-css.svg";
import PyQtIcon from "../Images/PyQt.svg";
import Unity3DIcon from "../Images/unity-svgrepo-com.svg";
import JavaSwingIcon from "../Images/java-swing.svg";
import KerasIcon from "../Images/keras-svgrepo-com.svg";
import PytorchIcon from "../Images/pytorch-svgrepo-com.svg";
import FirebaseIcon from "../Images/firebase-svgrepo-com.svg";
import MQTTIcon from "../Images/Mqtt-hor.svg";
import MySqlIcon from "../Images/mysql-logo-svgrepo-com.svg";
//#endregion

export const profileImage =
  "https://avatars.githubusercontent.com/u/55613060?s=400&u=615b29b033a9397fc09d772f6c4891f1d99bebbf&v=4";

export const socialMediaLinks = {
  github: "https://github.com/seifmostafa73",
  linkedIn: "https://www.linkedin.com/in/seifmostafa/",
  gmail: "mailto:SeifMostafa7347@gmail.com",
};

export const projectsData: ProjectCardProps[] = [
  {
    projectName: "Smart Home Mobile Applications",
    year: 2020,
    description:
      "With a range of impressive features, our project offers voice commands, Google account authentication, location-triggered events, and a chat system (available in project folders). We ensure low-delay hardware communication via MQTT and provide customizable dark/bright themes. Our QR scanning, favorites menu, and dynamic room/device updates make for a streamlined user experience.",
    technologies: [
      "Unity3D",
      "C#",
      "MQTT",
      "JSON ",
      "Https",
      "NoSql DB",
      "Rest API",
      "Firebase",
      "PHP",
    ],
    images: [
      "https://user-images.githubusercontent.com/55613060/157886244-875e97e7-b760-45ba-bd89-6f689cb0f137.jpeg",
      "https://user-images.githubusercontent.com/55613060/157886268-04a2b412-8c6e-4c7a-8227-bab75e2ca75c.jpeg",
      "https://user-images.githubusercontent.com/55613060/157886280-a09126fe-32f7-4d60-a9b8-a492be626b80.jpeg",
      "https://user-images.githubusercontent.com/55613060/157886324-e4e98208-e726-489d-9ff2-7cb9ccbf402c.jpeg",
      "https://user-images.githubusercontent.com/55613060/157886328-5a1b2d1c-f79c-4cb0-90a6-563d91af8b21.jpeg",
    ],
    type: "mobile",
  },
  {
    projectName: "Real Estate Management System",
    type: "desktop",
    year: 2023,
    description:
      "I developed a robust real estate management system that harnessed the power of MySQL for data storage, Python for the backend, and PyQt5 for the frontend. This data-intensive application efficiently handled 40 leads per hour and boasted advanced features such as asynchronous updates, optimized database queries, extensive filtering options, real-time notifications, custom data visualization widgets, location mapping via the Folium API, scalability, and streamlined configuration management. This project highlighted my technical expertise in creating a comprehensive real estate management solution.",
    technologies: [
      "PyQt5",
      "MySQL",
      "Data Visualization",
      "Drive API",
      "Folium API",
      "MQTT",
    ],
    images: [
      RES_15,
      RES_1,
      RES_2,
      RES_3,
      RES_4,
      RES_5,
      RES_6,
      RES_7,
      RES_8,
      RES_9,
      RES_10,
      RES_11,
      RES_13,
      RES_14,
      RES_16,
    ],
  },
  {
    projectName: "XO Game",
    year: 2022,
    description:
      "A simple XO game made with Unit3D , implementing minimax alpha-beta algorithm for the AI",
    technologies: ["Unity3D", "C#", "AI"],
    images: [XO_1, XO_2, XO_3, XO_4],
    type: "desktop",
  },
  {
    projectName: "Museum Applications",
    year: 2022,
    description:
      "This project marks my introduction to Java Swing GUI, focusing on creating a Museum app for a college project. It automates museum database management, ticket booking, event previews, and monument details. Users can book tickets, explore upcoming events, and access information, while administrators can manage visitor and event accounts.",
    technologies: ["Java Swing GUI", "SQL DB", "MySQL", "Software Engineering"],
    images: [
      "https://user-images.githubusercontent.com/55613060/153532863-250387e8-fee6-4f29-a138-ac150cf76192.jpeg",
      "https://user-images.githubusercontent.com/55613060/153532865-e2b3c757-fe12-442b-bfcb-b41a5c18af64.jpeg ",
      "https://user-images.githubusercontent.com/55613060/153532862-22a0f4fc-69f0-457f-8e44-c4a4e21c7ea7.jpeg",
      "https://user-images.githubusercontent.com/55613060/153532563-d4ba267b-d8ef-48bf-95b9-db0837e2ed5d.png",
      "https://user-images.githubusercontent.com/55613060/153532525-682c8a40-0f77-4590-883a-f5f8bf770937.png",
      "https://user-images.githubusercontent.com/55613060/153532857-9a91e7ee-c34e-4a7a-93a4-dcdc5df9d93c.jpeg",
    ],
    type: "desktop",
  },

  {
    projectName: "Crwaler robot",
    description:
      " harnessed Unity's Robotics tools and Nvidia PhysX for virtual training. We custom-built ML algorithms with NumSharp and NumPy.NET. The real-world phase featured an AVR-powered robot, implementing Q-learning and servo motor control for precise joint manipulation",
    year: 2022,
    technologies: [
      "AVR",
      "Embedded Systems",
      "Unity3D",
      "C#",
      "ML",
      "Reinforcement learning",
      "NumSharp",
      "NumPy.NET",
    ],
    videos: [
      "https://user-images.githubusercontent.com/55613060/175782833-ba9e5bd8-0ca3-43d5-b4dc-be0143c89b33.mp4",
    ],
    type: "desktop",
  },
  {
    projectName: "Web Portfolio V1",
    description:
      "Created a web porfolio using React and Tailwind CSS as part of `the odin project`, utilizing numerous react hooks and implmenting custom ones, I managed to implement some complex effects and animations",
    year: 2023,
    technologies: [
      "React",
      "Tailwind CSS",
      "Web development",
      "HTML & CSS",
      "Front-end",
    ],
    images: [PortfolioSS_1, PortfolioSS_2, PortfolioSS_3],
    type: "desktop",
  },
];

export const workExperiences: ExperinceInfo[] = [
  {
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/2/2b/Valeo_Logo.svg",
    company: "Valeo",
    startDate: new Date("2022-07"),
    endDate: new Date("2022-10"),
    title: "Software Engineer Intern",
    description:
      "A two-month internship at CDV team, working on Image-enhancement tool with Wx python. Where I worked on a daily basis to add new functionalities, maintain and fix older code , Generate Test cases and documentation. The internship was extremely helpful to practice my problem-solving skills, Agile, SW engineering skills e.g., Testing, Documentation, Version Control, UML Design.",
    tags: [
      "Software",
      "Internship",
      "Python",
      "wxPython",
      "Image Processing",
      "GUI",
      "tooling",
    ],
    backgroundColor: "white",
  },

  {
    imageUrl: SectorImage,
    company: "Sector B5",
    title: "Software Engineer Intern",
    startDate: new Date("2021-07"),
    endDate: new Date("2021-10"),
    description:
      "During my internship at Sector B5 in Smart Village, I engaged in a comprehensive program covering digital fabrication, electronics, embedded systems, PCB design, IoT, OpenCV, and ethical hacking. This hands-on experience equipped me with a versatile skill set, fostering innovation and a strong grasp of technology and security. I'm excited to apply these skills in a forward-thinking organization.",
    tags: [
      "Software",
      "Internship",
      "IOT",
      "Embedded systems",
      "PCB Design",
      "OpenCV",
      "Ethical Hacking",
    ],
    backgroundColor: "white",
  },

  {
    imageUrl: FreeLanceLogo,
    company: "FreeLancing",
    title: "Desktop Software Engineer",
    startDate: new Date("2023-03"),
    endDate: new Date("2023-05"),
    description:
      "As a Full Stack Freelance Developer, I created an impressive application with a PyQt5 GUI and MySQL data storage. I integrated Google Drive and Folium map APIs, allowing lead registration and real-time updates with a Windows notification system. My work emphasized usability and data visualization, delivering a dynamic user experience.",
    tags: [
      "PyQt5",
      "MySQL",
      "Data Visualization",
      "Drive API",
      "Folium API",
      "MQTT",
    ],
    backgroundColor: "white",
  },
  {
    imageUrl: FreeLanceLogo,
    company: "FreeLancing",
    title: "Software engineer and System Designer",
    startDate: new Date("2022-05"),
    endDate: new Date("2022-07"),
    description:
      "I engineered a dynamic gaming system, complete with a Desktop Console app and a Mobile Controller app for ultimate flexibility. The Console app, powered by Unity3D, featured custom input through MQTT events, while the Controller app seamlessly communicated through MQTT and HTTP. By integrating Firebase, I provided user authentication and multiplayer room codes",
    tags: [
      "Unity 3D",
      "Game Development",
      "Firebase",
      "MQTT",
      "HTTP",
      "Software Engineering",
    ],
    backgroundColor: "white",
  },
];

export const technologyItems: listItem[] = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Microsoft_.NET_logo.svg",
    alt: ".NET",
  },
  {
    src: ReactIcon,
    alt: "React",
  },
  {
    src: tailwindCSSIcon,
    alt: "Tailwind CSS",
  },
  {
    src: PyQtIcon,
    alt: "PYQt5",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/b/bb/WxWidgets.svg",
    alt: "wxPython",
  },
  { src: Unity3DIcon, alt: "Unity3D" },
  {
    src: JavaSwingIcon,
    alt: "Java Swing",
  },
  {
    src: KerasIcon,
    alt: "Keras",
  },
  {
    src: PytorchIcon,
    alt: "Pytorch",
  },
  {
    src: FirebaseIcon,
    alt: "Firebase",
  },
  {
    src: MQTTIcon,
    alt: "MQTT Mosquito",
  },
  {
    src: MySqlIcon,
    alt: "MySql",
  },
];
