import { sectionIds } from '../miscMappings';
export const topHeaders = {
  headImageUrl: 'web/images/hero.jpg', // For the Header Image in main Page
  isLogoRequired: true, //Make this false if logo isn't required. It will automatically ignore the logoImageUrl
  logoImageUrl: 'web/images/logo.png', //For top Logo, in case not needed: islogoRequired: false
  headerGrade1: 'rgba(126,213,111,.8)', //Gradient Overlay Image-01
  headerGrade2: 'rgba(40,180,133,.8)', //Gradient Overlay Image-02
  logoAltDescription: 'logo', //Alt description of the logo image
  mainHeading: 'Joseph Pearson', //Main Heading for the display Page
  mainSubHeading: 'Artist by Birth, Engineer by Choice', // Main Sub heading for the display Page
  buttonText: 'Know More', // Text Needed for the main button
  injectMainHeadingStyle: {}, //In case you want to add specific main heading style You may also do it with css modules
  injectSubHeadingStyle: { fontStyle: 'italic', textTransform: 'none' },
  gotoButtonSectionName: sectionIds.mainContent_sectionId, //The section to which you want to goto on button click of knowmore
};
