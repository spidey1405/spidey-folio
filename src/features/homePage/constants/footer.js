import { nanoid } from 'nanoid';
export const footerData = {
  copyrightDetails: { name: 'Shivam Sahil' },
  networks: [
    {
      id: 'networks__' + nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/',
    },
    {
      id: 'networks__' + nanoid(),
      name: 'codepen',
      url: 'https://devpost.com/',
    },
    {
      id: 'networks__' + nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/',
    },
    {
      id: 'networks__' + nanoid(),
      name: 'github',
      url: 'https://github.com/',
    },
    {
      id: 'networks__' + nanoid(),
      name: 'youtube',
      url: 'https://www.youtube.com/channel/',
    },
    {
      id: 'networks__' + nanoid(),
      name: 'email',
      url: 'mailto:fakeemail@fakeemail.com',
    },
    {
      id: 'networks__' + nanoid(),
      name: 'wordpress',
      url: 'https://wordpress.com/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
