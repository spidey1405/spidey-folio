import { nanoid } from 'nanoid';
import { sectionIds } from '../../miscMappings';
import { getIcon, iconsMap } from '../../miscMappings';

const socialHandleSize = { size: 30 };

export const sectionReferences = {
  showSection: true,
  id: sectionIds.sectionReferences_sectionId,
  heading: 'What others have to say about me?',
  headingStyle: { marginTop: '1rem', marginBottom: '1rem' },
  backgroundSpecs: {
    imageGrade1: 'rgba(130,231,242,.8)',
    imageGrade2: 'rgba(100,166,255,.8)',
    backgroundUrl: 'web/images/hero2.jpg',
  },
  userTestimonials: [
    {
      displayUri: 'web/images/referrals/img3.jpg',
      isWebImage: false,
      name: 'JD Chow',
      heading: 'Hardworking and extremely skilled',
      headingStyle: { marginBottom: '1.5rem' },
      socialHandles: [
        {
          href: 'https://in.linkedin.com/',
          id: 'userTestimonials__socialHandle' + nanoid(),
          icon: getIcon(iconsMap.linkedin, {
            ...socialHandleSize,
            color: 'blue',
          }),
        },
      ],
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porta velit nibh, volutpat condimentum ex ornare a. Nam turpis augue, faucibus id ligula ut, rhoncus euismod ipsum. 
			Quisque malesuada velit in ligula blandit, at pellentesque sem elementum. Nulla condimentum ornare leo in porttitor. Donec ut augue porta, vestibulum massa eget.`,
    },

    {
      displayUri: 'web/images/referrals/img2.jpg',
      isWebImage: false,
      name: 'Jonas',
      heading: 'Extremely Hardworking',
      headingStyle: { marginBottom: '1.5rem' },
      socialHandles: [
        {
          href: 'https://www.linkedin.com/',
          id: 'userTestimonials__socialHandle' + nanoid(),
          icon: getIcon(iconsMap.linkedin, {
            ...socialHandleSize,
            color: 'blue',
          }),
        },
        {
          href: 'https://www.linkedin.com/',
          id: 'userTestimonials__socialHandle' + nanoid(),
          icon: getIcon(iconsMap.linkedin, {
            ...socialHandleSize,
            color: 'blue',
          }),
        },
      ],
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porta velit nibh, volutpat condimentum ex ornare a. Nam turpis augue, faucibus id ligula ut, rhoncus euismod ipsum. 
	  Quisque malesuada velit in ligula blandit, at pellentesque sem elementum. Nulla condimentum ornare leo in porttitor. Donec ut augue porta, vestibulum massa eget.`,
    },
  ],
};
