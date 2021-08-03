import { nanoid } from 'nanoid';
import { sectionIds } from '../../miscMappings';
import { colors } from '../constants/cssColors';

export const sectionProjects = {
  showSection: true,
  projectsHeader: 'Cool Things I did',
  projectsHeaderStyle: { marginTop: '12rem', marginBottom: '3rem' },
  sectionProjects_sectionId: sectionIds.sectionProjects_sectionId,
  id: 'sectionProjects__' + nanoid(),
  projectComponents: {
    id: 'projectComponents__' + nanoid(),
    components: [
      {
        id: 'projectComponents_components__' + nanoid(),
        display: 'My Water Chain',
        back: {
          display: 'About',
          gradientColor1: colors.color_secondary_light,
          gradientColor2: colors.color_secondary_dark,
          gradientDirection: 'right bottom',
          projectDescription: `My Water Chain is a full stack project integrated with IoT. I designed the entire project architecture using Raspberry Pi as the Brain of hardware control system and water sensors. 
                        Raspberry Pi creates it's local server where it pings to the backend database, that was built on Python (Flask). 
                        It communicates with the server to verify it's identity and then keeps monitoring the data and send the real time updates.`, //Using New Line to break paragraphs
          buttonList: [
            {
              id: 'projectComponents_components_buttonList' + nanoid(),
              href: 'https://github.com/sedhha/my-water-chain',
              buttonText: 'Source Code',
            },

            {
              id: 'projectComponents_components_buttonList' + nanoid(),
              href: 'https://www.youtube.com/watch?v=mFHnrSxknFQ',
              buttonText: 'View',
            },
          ],
        },
        front: {
          imgSource: 'web/images/projects/waterchain.jpg',
          display: 'front',
          gradientColor1: colors.color_white,
          gradientColor2: colors.color_white,
          disableGradientForPhoto: true,
          gradientDirection: 'right bottom',
          featureList: [
            {
              id: 'projectComponents_components__' + nanoid(),
              display: 'Honorable Mention at Spark Blockchain Hack',
            },

            {
              id: 'projectComponents_components__' + nanoid(),
              display: 'IoT to monitor Sensor Reading',
            },

            {
              id: 'projectComponents_components__' + nanoid(),
              display: 'Computer Vision for Virtual Flow Rate',
            },

            {
              id: 'projectComponents_components__' + nanoid(),
              display: 'MongoDB as the database',
            },

            {
              id: 'projectComponents_components__' + nanoid(),
              display: 'Flask as Backend server and React JS as frontend',
            },
          ],
        },
      },

      {
        id: 'projectComponents_components__' + nanoid(),
        display: 'CoviFitness',
        back: {
          display: 'About',
          gradientColor1: colors.color_primary_light,
          gradientColor2: colors.color_primary_dark,
          gradientDirection: 'right bottom',
          projectDescription: `Due to extreme slowdown in the pandemic, we all have been used to staying on our beds all the time. 
                        Covi Fitness is a simple Virtual game that responds to your movements and using computer vision, 
                        it translates it as a virtual joystick to control the character's movement in the game!`, //Using New Line to break paragraphs
          buttonList: [
            {
              id: 'projectComponents_components_buttonList' + nanoid(),
              href: 'https://github.com/sedhha/covifitness',
              buttonText: 'Source Code',
            },

            {
              id: 'projectComponents_components_buttonList' + nanoid(),
              href: 'https://www.youtube.com/watch?v=WAR2-X3veaE',
              buttonText: 'View',
            },
          ],
        },
        front: {
          imgSource: 'web/images/projects/covifitness.jpg',
          display: 'front',
          disableGradientForPhoto: false,
          gradientColor1: colors.color_white,
          gradientColor2: colors.color_white,
          gradientDirection: 'right bottom',
          featureList: [
            {
              id: 'projectComponents_components__' + nanoid(),
              display: 'Pygame Interface for dynamic actions',
            },

            {
              id: 'projectComponents_components__' + nanoid(),
              display: 'Computer Vision for movement detection',
            },

            {
              id: 'projectComponents_components__' + nanoid(),
              display: 'Virtual JoyStick for Jump Height Calibration',
            },

            {
              id: 'projectComponents_components__' + nanoid(),
              display: 'Virtual JoyStick to detect hand gestures',
            },
          ],
        },
      },

      {
        id: 'projectComponents_components__' + nanoid(),
        display: 'GeeCorn',
        back: {
          display: 'About',
          gradientColor1: colors.color_tertiary_light,
          gradientColor2: colors.color_tertiary_dark,
          gradientDirection: 'right bottom',
          projectDescription: `Gee-Corn is a Flutter based mobile app which allows geeks all around the world to discover their partners with common interests and accordingly learn a new skill.
                        At the moment, the application is down due to some bugs and I don't have time to relaunch it. Would love to collaborate and work with
                        someone on this as a hackathon project and maybe we could take it from there.`, //Using New Line to break paragraphs
          buttonList: [
            {
              id: 'projectComponents_components_buttonList' + nanoid(),
              href: 'https://github.com/sedhha/GeeCorn',
              buttonText: 'Source Code',
            },

            {
              id: 'projectComponents_components_buttonList' + nanoid(),
              href: 'https://www.youtube.com/watch?v=Y4PzMjd71GE',
              buttonText: 'View',
            },
          ],
        },
        front: {
          imgSource: 'web/images/projects/geecorn.png',
          display: 'front',
          disableGradientForPhoto: true,
          gradientColor1: colors.color_white,
          gradientColor2: colors.color_white,
          gradientDirection: 'right bottom',
          featureList: [
            {
              id: 'projectComponents_components__' + nanoid(),
              display: 'Category Winner at FlutterThon 2020',
            },

            {
              id: 'projectComponents_components__' + nanoid(),
              display:
                'Tinder for Geeks to meet and learn new things this pandemic',
            },

            {
              id: 'projectComponents_components__' + nanoid(),
              display:
                'Matches users based on their area of expertise and interests',
            },

            {
              id: 'projectComponents_components__' + nanoid(),
              display: 'Fluid UI and Column View',
            },
          ],
        },
      },
    ],
  },
};
