import {
  AiFillLinkedin,
  AiFillFacebook,
  AiFillInstagram,
  AiFillRedditCircle,
  AiOutlineMail,
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineCodepen,
  AiOutlineYoutube,
} from 'react-icons/ai';
import { FaReact, FaDatabase, FaEye, FaWordpressSimple } from 'react-icons/fa';
import { BsTriangle, BsPencilSquare, BsPencil } from 'react-icons/bs';
import { GiRobotHelmet } from 'react-icons/gi';

const uniquePortfolio = '';

export const sectionIds = {
  topHeader_sectionId: uniquePortfolio + 'welcome',
  mainContent_sectionId: uniquePortfolio + 'main-content',
  sectionFeatures_sectionId: uniquePortfolio + 'features-section',
  sectionProjects_sectionId: uniquePortfolio + 'projects-section',
  sectionReferences_sectionId: uniquePortfolio + 'references-section',
  sectionExperiences: uniquePortfolio + 'experiences-section',
};

export const navItemsHeader = {
  topHeader_sectionId: {
    href: sectionIds.topHeader_sectionId,
    display: 'Home',
  },
  mainContent_sectionId: {
    href: sectionIds.mainContent_sectionId,
    display: 'About',
  },
  sectionFeatures_sectionId: {
    href: sectionIds.sectionFeatures_sectionId,
    display: 'SkillSet',
  },
  sectionProjects_sectionId: {
    href: sectionIds.sectionProjects_sectionId,
    display: 'Projects',
  },
  sectionReferences_sectionId: {
    href: sectionIds.sectionReferences_sectionId,
    display: 'Reviews',
  },
};

export const iconsMap = {
  //Refer to https://react-icons.github.io/react-icons/,
  eye: FaEye,
  database: FaDatabase,
  reactjs: FaReact,
  robot: GiRobotHelmet,
  linkedin: AiFillLinkedin,
  facebook: AiFillFacebook,
  instagram: AiFillInstagram,
  reddit: AiFillRedditCircle,
  email: AiOutlineMail,
  github: AiOutlineGithub,
  goTop: BsTriangle,
  twitter: AiOutlineTwitter,
  codepen: AiOutlineCodepen,
  youtube: AiOutlineYoutube,
  wrytin: BsPencilSquare,
  wordpress: FaWordpressSimple,
  pencil: BsPencil,
};

export const getIcon = (IconName, props) => <IconName {...props} />;
export const getIconByName = (IconName, props) => {
  props = props || {};
  const Component = iconsMap[IconName];
  return <Component {...props} />;
};
