import { nanoid } from 'nanoid';
import { sectionIds } from '../../miscMappings';
import { configStyles } from '../constants/cssColors';
import { getIcon, iconsMap } from '../../miscMappings';

const iconStyling = {
  //For styling the React Icons with gradient colors, Read Only
  style: {
    stroke: 'url(#sectionFeatures__sections__0__displayIcon__Blockchain)', // Not to be changed
    fill: 'url(#sectionFeatures__sections__0__displayIcon__Blockchain)', //Not to be changed
  },
};

export const sectionFeatures = {
  showSection: true,
  imageGrade1: 'rgba(126,213,111,.8)', //For the image gradient of second section
  imageGrade2: 'rgba(40,180,133,.8)',
  headImageUrl: 'web/images/hero4.jpg',
  sectionHeading: 'Feathers in my Cap', // The top Display Section
  sectionFeatures_sectionId: sectionIds.sectionFeatures_sectionId,
  sections: [
    {
      displayIconStyle: configStyles.defaults.displayIconStyle,
      id: 'sections__' + nanoid(),
      displayIconId: 'sectionFeatures__sections__0__displayIcon__Blockchain', //This ID must be present in display
      //icon styling in stroke and fill. Make sure to keep it unique in case you're using id. Other wise this
      // property isn't required
      displayIcon: getIcon(iconsMap.reactjs, { ...iconStyling }),
      heading: 'React JS',
      headingStyle: {
        marginBottom: '1.5rem',
      },
      para: 'Buidling this and many more analytics web applications and dashboards from last 18 months.',
    },

    {
      displayIconStyle: configStyles.defaults.displayIconStyle,
      id: 'sections__' + nanoid(),
      displayIconId: 'sectionFeatures__sections__0__displayIcon__Blockchain', //This ID must be present in display
      //icon styling in stroke and fill. Make sure to keep it unique in case you're using id. Other wise this
      // property isn't required
      displayIcon: getIcon(iconsMap.database, { ...iconStyling }),
      heading: 'Blockchain',
      headingStyle: {
        marginBottom: '1.5rem',
      },
      para: 'Built decentralized finance, smart contracts and entire blockchain network using python and flask.',
    },

    {
      displayIconStyle: configStyles.defaults.displayIconStyle,
      id: 'sections__' + nanoid(),
      displayIconId: 'sectionFeatures__sections__0__displayIcon__Blockchain', //This ID must be present in display
      //icon styling in stroke and fill. Make sure to keep it unique in case you're using id. Other wise this
      // property isn't required
      displayIcon: getIcon(iconsMap.robot, { ...iconStyling }),
      heading: 'Robotics',
      headingStyle: {
        marginBottom: '1.5rem',
      },
      para: 'CAD modellnig, rapid manufacturing, microcontroller programming, IoT and socket communication.',
    },

    {
      displayIconStyle: configStyles.defaults.displayIconStyle,
      id: 'sections__' + nanoid(),
      displayIconId: 'sectionFeatures__sections__0__displayIcon__Blockchain', //This ID must be present in display
      //icon styling in stroke and fill. Make sure to keep it unique in case you're using id. Other wise this
      // property isn't required
      displayIcon: getIcon(iconsMap.eye, { ...iconStyling }),
      heading: 'Computer Vision',
      headingStyle: {
        marginBottom: '1.5rem',
      },
      para: 'Background removal, SIFT and SURF Feature extraction, Real time image socket transmission etc.',
    },
    {
      displayIconStyle: configStyles.defaults.displayIconStyle,
      id: 'sections__' + nanoid(),
      displayIconId: 'sectionFeatures__sections__0__displayIcon__Blockchain', //This ID must be present in display
      //icon styling in stroke and fill. Make sure to keep it unique in case you're using id. Other wise this
      // property isn't required
      displayIcon: getIcon(iconsMap.reactjs, { ...iconStyling }),
      heading: 'React JS',
      headingStyle: {
        marginBottom: '1.5rem',
      },
      para: 'Buidling this and many more analytics web applications and dashboards from last 18 months.',
    },

    {
      displayIconStyle: configStyles.defaults.displayIconStyle,
      id: 'sections__' + nanoid(),
      displayIconId: 'sectionFeatures__sections__0__displayIcon__Blockchain', //This ID must be present in display
      //icon styling in stroke and fill. Make sure to keep it unique in case you're using id. Other wise this
      // property isn't required
      displayIcon: getIcon(iconsMap.database, { ...iconStyling }),
      heading: 'Blockchain',
      headingStyle: {
        marginBottom: '1.5rem',
      },
      para: 'Built decentralized finance, smart contracts and entire blockchain network using python and flask.',
    },

    {
      displayIconStyle: configStyles.defaults.displayIconStyle,
      id: 'sections__' + nanoid(),
      displayIconId: 'sectionFeatures__sections__0__displayIcon__Blockchain', //This ID must be present in display
      //icon styling in stroke and fill. Make sure to keep it unique in case you're using id. Other wise this
      // property isn't required
      displayIcon: getIcon(iconsMap.robot, { ...iconStyling }),
      heading: 'Robotics',
      headingStyle: {
        marginBottom: '1.5rem',
      },
      para: 'CAD modellnig, rapid manufacturing, microcontroller programming, IoT and socket communication.',
    },

    {
      displayIconStyle: configStyles.defaults.displayIconStyle,
      id: 'sections__' + nanoid(),
      displayIconId: 'sectionFeatures__sections__0__displayIcon__Blockchain', //This ID must be present in display
      //icon styling in stroke and fill. Make sure to keep it unique in case you're using id. Other wise this
      // property isn't required
      displayIcon: getIcon(iconsMap.eye, { ...iconStyling }),
      heading: 'Computer Vision',
      headingStyle: {
        marginBottom: '1.5rem',
      },
      para: 'Background removal, SIFT and SURF Feature extraction, Real time image socket transmission etc.',
    },
  ],
};
