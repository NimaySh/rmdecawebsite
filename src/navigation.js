import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: ['/']
    },
    
    {
      text: 'About',
      href: ['/about']
    },
    {
      text: 'DECA',
      href: getPermalink('/deca101'),
    },
    {
      text: 'Resources',
      href: ['/resources']
    },
    
    {
      text: 'Contact',
      href: ['/contact']
    },
//    {
//      text: 'Extra',
//      links: [
//        {
//          text: 'SaaS',
//          href: getPermalink('/homes/saas'),
//        },
//        {
//          text: 'Mobile App',
//          href: getPermalink('/homes/mobile-app'),
//        },
//        {
//          text: 'Personal',
//          href: getPermalink('/homes/personal'),
//        },
//        {
//          text: 'Alt Home',
//          href: getPermalink('/alt'),
//        },
//        {
//          text: 'Features (Anchor Link)',
//          href: getPermalink('/#features'),
//        },
//        {
//          text: 'Services',
//          href: getPermalink('/services'),
//        },
//        
//        {
//          text: 'Terms',
//          href: getPermalink('/terms'),
//        },
//        {
//          text: 'Privacy policy',
//          href: getPermalink('/privacy'),
//        },
//        {
//          text: 'Contact',
//          href: getPermalink('/contact'),
//        },
//      ],
//    },
//    {
//      text: 'Extra',
//      links: [
//        {
//          text: 'Lead Generation',
//          href: getPermalink('/landing/lead-generation'),
//        },
//      {
//          text: 'Long-form Sales',
//          href: getPermalink('/landing/sales'),
//        },
//      {
//          text: 'Click-Through',
//          href: getPermalink('/landing/click-through'),
//        },
//        {
//          text: 'Product Details (or Services)',
//          href: getPermalink('/landing/product'),
//        },
//        {
//          text: 'Coming Soon or Pre-Launch',
//          href: getPermalink('/landing/pre-launch'),
//        },
//        {
//          text: 'Subscription',
//          href: getPermalink('/landing/subscription'),
//        },
//        {
//          text: 'Blog List',
//          href: getBlogPermalink(),
//        },
//        {
//          text: 'Article',
//          href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
//        },
//        {
//          text: 'Article (with MDX)',
//          href: getPermalink('markdown-elements-demo-post', 'post'),
//        },
//        {
//          text: 'Category Page',
//          href: getPermalink('tutorials', 'category'),
//        },
//        {
//          text: 'Tag Page',
//          href: getPermalink('astro', 'tag'),
//        },
//      ],
//    },
  ],
 actions: [{ text: 'Join DECA', 
              href: 'https://docs.google.com/forms/d/e/1FAIpQLScon8NKldIHd9s-PYxtfF9g-AVJP51jail6gPO83FaG2rKL3Q/viewform', 
              target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'About',
      links: [
        { text: 'What we do', href: 'about' },
        { text: 'Our Team', href: 'about' },
        { text: 'FAQ', href: 'faq' },
      ],
    },
    {
      title: 'Competitions',
      links: [
        { text: 'Regionals', href: '#' },
        { text: 'States', href: '#' },
        { text: 'Internationals', href: '#' },
      ],
    },
    {
      title: 'Learn',
      links: [
        { text: 'Resources', href: 'resources' },
        { text: 'DECA 101', href: '#' },
      ],
    },
    {
      title: 'Other',
      links: [
        { text: 'Maryland DECA', href: 'https://www.decamaryland.org/' },
        { text: 'National DECA', href: 'https://www.deca.org/' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/') },
    { text: 'Privacy Policy', href: getPermalink('/') },
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/rmhsdeca/' },
    { ariaLabel: 'Discord', icon: 'tabler:brand-discord', href: 'https://discord.gg/Gp3YmpDzQd' },
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/rmhs_deca' },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="src/assets/favicons/apple-touch-icon.png" alt="onWidget logo" loading="lazy"></img>
    Created and maintained by Parim and Nimay of RM DECA`,
};
