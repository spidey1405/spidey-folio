import { nanoid } from 'nanoid';
import { sectionIds } from '../../miscMappings';

export const sectionExperiences = {
  id: sectionIds.sectionExperiences,
  heading: 'Work Experience and Co-Curicular',
  showSection: true,
  headingStyle: { marginTop: '-12rem' },
  experienceContent: {
    experienceElements: [
      {
        id: nanoid(),
        image: {
          src: 'web/images/experiences/google.png',
          additionalStyling: {},
          alt: 'yoptima',
        },
        companyName: 'Google',
        dates: 'Jan 2020 - Present',
        designation: 'Software Engineer',
        href: 'https://www.google.com/',
      },

      {
        id: nanoid(),
        image: {
          src: 'web/images/experiences/facebook.png',
          additionalStyling: {},
          alt: 'facebook',
        },
        companyName: 'Eckovation',
        dates: 'Jul 2018 - Jan 2020',
        designation: 'Software Engineer',
        href: 'https://www.facebook.com/',
      },

      {
        id: nanoid(),
        image: {
          src: 'web/images/experiences/airindia.png',
          additionalStyling: {},
          alt: 'airindia',
        },
        companyName: 'AirIndia',
        dates: 'May 2017 - June 2018',
        designation: 'Aircraft Engineer',
        href: 'https://www.airindia.in/about-airindia.htm',
      },

      {
        id: nanoid(),
        image: {
          src: 'web/images/experiences/google.png',
          additionalStyling: {},
          alt: 'yoptima',
        },
        companyName: 'Google',
        dates: 'Jan 2020 - Present',
        designation: 'Software Engineer',
        href: 'https://www.google.com/',
      },

      {
        id: nanoid(),
        image: {
          src: 'web/images/experiences/facebook.png',
          additionalStyling: {},
          alt: 'facebook',
        },
        companyName: 'Eckovation',
        dates: 'Jul 2018 - Jan 2020',
        designation: 'Software Engineer',
        href: 'https://www.facebook.com/',
      },

      {
        id: nanoid(),
        image: {
          src: 'web/images/experiences/airindia.png',
          additionalStyling: {},
          alt: 'airindia',
        },
        companyName: 'AirIndia',
        dates: 'May 2017 - June 2018',
        designation: 'Aircraft Engineer',
        href: 'https://www.airindia.in/about-airindia.htm',
      },
    ],
  },
};
