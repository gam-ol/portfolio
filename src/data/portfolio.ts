export interface VideoProject {
  id: string;
  title: string;
  youtubeId: string;
}

export interface ProjectCategory {
  id: string;
  title: string;
  description: string;
  items: VideoProject[];
}

export type MaterialView = 'experiments' | 'tools' | 'templates';
export type Preview =
  | { type: 'lottie'; source: string }
  | { type: 'youtube'; youtubeId: string };

export interface Material {
  id: string;
  title: string;
  views: MaterialView[];
  status: 'Experiment' | 'Finished' | 'In development';
  summary: string;
  description: string;
  technologies: string[];
  preview: Preview;
  links?: Array<{ label: string; href: string }>;
}

export const projectCategories: ProjectCategory[] = [
  {
    id: 'showreel',
    title: 'Showreel',
    description: '“Do what feels right. Don’t wait for it to be perfect.” — Rick Rubin',
    items: [
      {
        id: 'deus-ex-machina',
        title: '“Deus ex machina” and algorithms',
        youtubeId: 'Sx21lNgvkFA',
      },
      {
        id: 'motion-design-explorations',
        title: 'Motion design explorations across styles and tools',
        youtubeId: 'H_yvzxc7sK8',
      },
    ],
  },
  {
    id: 'infographics',
    title: 'Infographics',
    description:
      'Motion-based explainer graphics, information structures, and visual systems that make complex material easier to read and follow.',
    items: [
      { id: 'financial-infographics', title: 'Financial infographics', youtubeId: '7pmdOCI4FkM' },
      { id: 'animated-maps', title: 'Animated maps', youtubeId: 'G-BpqzkKdcE' },
      { id: 'video-tutorial', title: 'Animation for a video tutorial', youtubeId: 'vu89pDkWlTY' },
    ],
  },
  {
    id: 'template-systems',
    title: 'Template Systems',
    description:
      'Reusable motion graphics built for speed and reliability — from lower thirds to flexible broadcast systems that adapt to different formats and content.',
    items: [
      {
        id: 'offline-lower-thirds-video',
        title: 'Offline Lower Thirds Rendering Tool',
        youtubeId: 'K4hIv5HBjFY',
      },
      {
        id: 'multi-output-workflow-video',
        title: 'From After Effects to Premiere and CasparCG',
        youtubeId: 'qNXnPfXFyQs',
      },
    ],
  },
  {
    id: 'advanced-apps',
    title: 'Advanced Apps',
    description:
      'Interactive motion tools and app-based visual systems designed to automate workflows, structure content, and make production faster.',
    items: [
      { id: 'data-visualization-tool', title: 'Data visualization tool', youtubeId: 'zhT6hzbmC20' },
      { id: 'interactive-motion-app', title: 'Interactive motion app', youtubeId: 'gbTYk5rfpKg' },
      { id: 'motion-system-prototype', title: 'Motion system prototype', youtubeId: 'cyu8GfmStKY' },
    ],
  },
  {
    id: 'character-animation',
    title: 'Character Animation',
    description:
      'Character-driven motion focused on personality, timing, and clear visual storytelling — from simple explainers to expressive animated scenes.',
    items: [
      { id: 'jazz-band', title: 'Jazz Band', youtubeId: 'EL2iXLJhboE' },
      { id: 'basketball-player', title: 'Basketball player dribbling', youtubeId: 'jVluWwoVqHo' },
      { id: 'big-brother', title: 'Big Brother: Total Surveillance', youtubeId: 's0Wf7bddUI0' },
    ],
  },
];

export const materials: Material[] = [
  {
    id: 'responsive-lottie-field',
    title: 'Responsive Lottie Field',
    views: ['experiments'],
    status: 'Experiment',
    summary: 'A motion study that responds to pointer movement instead of running continuously.',
    description:
      'The animation becomes active while the pointer moves and pauses when the page is idle. It explores interaction as a pacing tool while keeping the visual language restrained.',
    technologies: ['Lottie', 'JavaScript', 'After Effects'],
    preview: { type: 'lottie', source: '/assets/bg.json' },
    links: [{ label: 'Open experiment', href: '/experiments/' }],
  },
  {
    id: 'procrastination-loop',
    title: 'Procrastination Loop',
    views: ['experiments'],
    status: 'Experiment',
    summary: 'A compact character loop built around timing, repetition, and a familiar feeling.',
    description:
      'A self-contained animation study used to test expressive motion in a small format. The preview is rendered directly from its Lottie source.',
    technologies: ['Lottie', 'Character animation', 'After Effects'],
    preview: { type: 'lottie', source: '/assets/procrastination.json' },
  },
  {
    id: 'offline-lower-thirds',
    title: 'Offline Lower Thirds Rendering Tool',
    views: ['tools', 'templates'],
    status: 'Finished',
    summary: 'A repeatable lower-thirds workflow designed for reliable offline rendering.',
    description:
      'The project treats broadcast graphics as a system rather than a one-off animation: content, layout, and rendering are separated so repeated output is faster and more consistent.',
    technologies: ['After Effects', 'Lower thirds', 'Broadcast graphics'],
    preview: { type: 'youtube', youtubeId: 'K4hIv5HBjFY' },
    links: [{ label: 'Watch on YouTube', href: 'https://www.youtube.com/watch?v=K4hIv5HBjFY' }],
  },
  {
    id: 'multi-output-template-workflow',
    title: 'Multi-output Template Workflow',
    views: ['tools', 'templates'],
    status: 'Finished',
    summary: 'One motion system prepared for Premiere through MOGRT and for CasparCG through JSON.',
    description:
      'A production workflow connecting After Effects, Premiere, and CasparCG. The aim is to keep the visual result consistent while adapting controls and data to different delivery environments.',
    technologies: ['After Effects', 'MOGRT', 'JSON', 'CasparCG'],
    preview: { type: 'youtube', youtubeId: 'qNXnPfXFyQs' },
    links: [{ label: 'Watch on YouTube', href: 'https://www.youtube.com/watch?v=qNXnPfXFyQs' }],
  },
  {
    id: 'motion-data-tool',
    title: 'Motion Data Tool',
    views: ['tools'],
    status: 'In development',
    summary: 'An app-based study for turning structured data into clear motion graphics.',
    description:
      'This study explores how repeatable controls and structured input can reduce manual production work while keeping composition and hierarchy readable.',
    technologies: ['Motion design', 'Data visualization', 'Automation'],
    preview: { type: 'youtube', youtubeId: 'zhT6hzbmC20' },
    links: [{ label: 'Watch on YouTube', href: 'https://www.youtube.com/watch?v=zhT6hzbmC20' }],
  },
];

export const materialsFor = (view: MaterialView) => materials.filter((item) => item.views.includes(view));
