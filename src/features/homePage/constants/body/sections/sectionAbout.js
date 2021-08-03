import { nanoid } from 'nanoid';
import { sectionIds } from '../../miscMappings';
export const sectionAbout = {
  showSection: true,
  mainContent_sectionId: sectionIds.mainContent_sectionId,
  aboutParaHeader: 'Who Am I?', // About Para Header is the Primary header of the main section. This could be anything related to a heading for your about who Am I? What do I do? etc.
  aboutParaStyle: { marginBottom: '5rem' }, //External Para Styling
  mainIntroContents: [
    {
      id: 'mainIntroContents__' + nanoid(),
      heading: 'Professionally',
      headingStyle: {
        marginBottom: '1.5rem',
      },
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porta velit nibh, volutpat condimentum ex ornare a. Nam turpis augue, faucibus id ligula ut, rhoncus euismod ipsum. Quisque malesuada velit in ligula blandit, at pellentesque sem elementum. Nulla condimentum ornare leo in porttitor. Donec ut augue porta, vestibulum massa eget.',
      descriptionStyle: {},
    },

    {
      id: 'mainIntroContents__' + nanoid(),
      heading: 'Personally',
      headingStyle: {
        marginBottom: '1.5rem',
      },
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porta velit nibh, volutpat condimentum ex ornare a. Nam turpis augue, faucibus id ligula ut, rhoncus euismod ipsum. Quisque malesuada velit in ligula blandit, at pellentesque sem elementum. Nulla condimentum ornare leo in porttitor. Donec ut augue porta, vestibulum massa eget.',
      descriptionStyle: {},
    },
  ], //Includes the Header along with the Description

  aboutConnectButtonText: 'Linkedin Connect', //Note that Forward arrow will remain and if you want to replace that, you may directly go to the code snippet
  aboutConnectButtonRedirectLink: 'https://www.linkedin.com/',
  composition: {
    //Images to be displayed in About Section
    img1: 'web/images/composition/cover-3.jpg',
    img2: 'web/images/composition/cover-2.jpg',
    img3: 'web/images/composition/cover-1.jpg',
  },
};
