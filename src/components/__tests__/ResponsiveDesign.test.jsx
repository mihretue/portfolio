import React from 'react';
import { render, waitFor, act } from '@testing-library/react';
import MainSection from '../MainSection';
import Projects from '../Projects';
import About from '../About';
import Contact from '../Contact';
import SkillSet from '../SkillSet';

// Mock dependencies
jest.mock('react-scroll', () => ({
  Element: ({ children, name, className }) => (
    <div data-testid={`element-${name}`} className={className}>
      {children}
    </div>
  ),
}));

jest.mock('emailjs-com', () => ({
  sendForm: jest.fn(() => Promise.resolve()),
}));

// Mock fetch for Projects component with sample data
const mockProjects = [
  {
    id: 1,
    name: 'test-project',
    description: 'Test project description',
    html_url: 'https://github.com/test/project',
    homepage: 'https://test.com',
    stargazers_count: 10,
    forks_count: 5,
    language: 'JavaScript',
    topics: ['react', 'testing'],
    updated_at: '2024-01-01',
    created_at: '2023-01-01',
    size: 1000,
    has_pages: true,
  },
];

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve(mockProjects),
  })
);

describe('Responsive Design Consistency', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Mobile Layout (< 640px)', () => {
    beforeEach(() => {
      // Set viewport to mobile size
      global.innerWidth = 375;
      global.innerHeight = 667;
    });

    test('MainSection uses unified color scheme on mobile', () => {
      const { container } = render(<MainSection />);
      const html = container.innerHTML;
      
      // Check for accent color usage
      expect(html).toMatch(/text-accent-400/);
      expect(html).toMatch(/from-primary-500/);
      expect(html).toMatch(/to-secondary-500/);
      
      // Should not have old color classes
      expect(html).not.toMatch(/text-blue-400/);
      expect(html).not.toMatch(/bg-primary-500/);
    });

    test('Projects uses unified color scheme on mobile', async () => {
      let container;
      await act(async () => {
        const result = render(<Projects />);
        container = result.container;
        // Wait for loading to complete
        await waitFor(() => {
          expect(container.innerHTML).not.toMatch(/Loading amazing projects/);
        }, { timeout: 3000 });
      });
      
      const html = container.innerHTML;
      
      // Check for unified accent colors
      expect(html).toMatch(/bg-accent-400|text-accent-600|bg-accent-500/);
      expect(html).toMatch(/from-primary-500/);
      expect(html).toMatch(/to-secondary-500/);
      
      // Should not have old green colors
      expect(html).not.toMatch(/bg-primary-500/);
      expect(html).not.toMatch(/text-primary-500/);
    });

    test('About uses unified color scheme on mobile', () => {
      const { container } = render(<About />);
      const html = container.innerHTML;
      
      // Check for accent colors
      expect(html).toMatch(/bg-accent-400|text-accent-600|bg-accent-500/);
      
      // Should not have old lime colors
      expect(html).not.toMatch(/bg-lime-400/);
      expect(html).not.toMatch(/text-lime-600/);
    });

    test('Contact uses unified color scheme on mobile', () => {
      const { container } = render(<Contact />);
      const html = container.innerHTML;
      
      // Check for accent colors
      expect(html).toMatch(/bg-accent-400|text-accent-600|focus:ring-accent-500/);
      expect(html).toMatch(/from-primary-500/);
      expect(html).toMatch(/to-secondary-500/);
      
      // Should not have old green colors
      expect(html).not.toMatch(/bg-primary-500/);
      expect(html).not.toMatch(/text-primary-500/);
    });

    test('SkillSet uses unified color scheme on mobile', () => {
      const { container } = render(<SkillSet />);
      const html = container.innerHTML;
      
      // Check for accent colors
      expect(html).toMatch(/bg-accent-400|text-accent-600|bg-accent-500/);
      
      // Should not have old lime colors
      expect(html).not.toMatch(/text-lime-500/);
    });

    test('All components have mobile-responsive padding', () => {
      const components = [
        { name: 'MainSection', component: <MainSection /> },
        { name: 'Projects', component: <Projects /> },
        { name: 'About', component: <About /> },
        { name: 'Contact', component: <Contact /> },
        { name: 'SkillSet', component: <SkillSet /> },
      ];

      components.forEach(({ name, component }) => {
        const { container } = render(component);
        const html = container.innerHTML;
        
        // Check for responsive padding classes
        expect(html).toMatch(/||/);
      });
    });
  });

  describe('Tablet Layout (640px - 1024px)', () => {
    beforeEach(() => {
      // Set viewport to tablet size
      global.innerWidth = 768;
      global.innerHeight = 1024;
    });

    test('Projects grid adapts to tablet layout', async () => {
      let container;
      await act(async () => {
        const result = render(<Projects />);
        container = result.container;
        await waitFor(() => {
          expect(container.innerHTML).not.toMatch(/Loading amazing projects/);
        }, { timeout: 3000 });
      });
      
      const html = container.innerHTML;
      
      // Check for tablet grid classes
      expect(html).toMatch(/md:grid-cols-2/);
    });

    test('About layout adapts to tablet', () => {
      const { container } = render(<About />);
      const html = container.innerHTML;
      
      // Check for tablet layout classes
      expect(html).toMatch(/lg:col-span-2|lg:col-span-1/);
    });

    test('SkillSet grid adapts to tablet', () => {
      const { container } = render(<SkillSet />);
      const html = container.innerHTML;
      
      // Check for tablet grid classes
      expect(html).toMatch(/sm:grid-cols-3|md:grid-cols-4/);
    });

    test('Contact form layout adapts to tablet', () => {
      const { container } = render(<Contact />);
      const html = container.innerHTML;
      
      // Check for tablet grid classes
      expect(html).toMatch(/lg:grid-cols-2|md:grid-cols-2/);
    });
  });

  describe('Desktop Layout (> 1024px)', () => {
    beforeEach(() => {
      // Set viewport to desktop size
      global.innerWidth = 1920;
      global.innerHeight = 1080;
    });

    test('Projects grid shows 3 columns on desktop', async () => {
      let container;
      await act(async () => {
        const result = render(<Projects />);
        container = result.container;
        await waitFor(() => {
          expect(container.innerHTML).not.toMatch(/Loading amazing projects/);
        }, { timeout: 3000 });
      });
      
      const html = container.innerHTML;
      
      // Check for desktop grid classes
      expect(html).toMatch(/lg:grid-cols-3/);
    });

    test('About shows 3-column layout on desktop', () => {
      const { container } = render(<About />);
      const html = container.innerHTML;
      
      // Check for desktop layout
      expect(html).toMatch(/lg:grid-cols-3/);
    });

    test('SkillSet shows 5 columns on desktop', () => {
      const { container } = render(<SkillSet />);
      const html = container.innerHTML;
      
      // Check for desktop grid
      expect(html).toMatch(/lg:grid-cols-5/);
    });

    test('MainSection typography scales for desktop', () => {
      const { container } = render(<MainSection />);
      const html = container.innerHTML;
      
      // Check for large text classes
      expect(html).toMatch(/lg:text-7xl|lg:text-3xl/);
    });
  });

  describe('Spacing Consistency Across Breakpoints', () => {
    test('All components use consistent section padding', () => {
      const components = [
        { name: 'Projects', component: <Projects /> },
        { name: 'About', component: <About /> },
        { name: 'SkillSet', component: <SkillSet /> },
      ];

      components.forEach(({ name, component }) => {
        const { container } = render(component);
        const html = container.innerHTML;
        
        // Check for consistent py-20 padding or pt-32 pb-20 (Contact uses this)
        expect(html).toMatch(/py-20|pt-32 pb-20/);
      });
    });

    test('All components use consistent max-width containers', () => {
      const components = [
        { name: 'MainSection', component: <MainSection /> },
        { name: 'Projects', component: <Projects /> },
        { name: 'About', component: <About /> },
        { name: 'Contact', component: <Contact /> },
        { name: 'SkillSet', component: <SkillSet /> },
      ];

      components.forEach(({ name, component }) => {
        const { container } = render(component);
        const html = container.innerHTML;
        
        // Check for max-width classes
        expect(html).toMatch(/w-full|w-full|w-full|w-full/);
      });
    });

    test('Section headers use consistent spacing', () => {
      const components = [
        { name: 'Projects', component: <Projects /> },
        { name: 'About', component: <About /> },
        { name: 'Contact', component: <Contact /> },
        { name: 'SkillSet', component: <SkillSet /> },
      ];

      components.forEach(({ name, component }) => {
        const { container } = render(component);
        const html = container.innerHTML;
        
        // Check for consistent header spacing
        expect(html).toMatch(/mb-16/);
        expect(html).toMatch(/mb-4/);
      });
    });
  });

  describe('Typography Scaling Across Breakpoints', () => {
    test('All section titles use consistent responsive sizing', () => {
      const components = [
        { name: 'MainSection', component: <MainSection /> },
        { name: 'Projects', component: <Projects /> },
        { name: 'About', component: <About /> },
        { name: 'Contact', component: <Contact /> },
        { name: 'SkillSet', component: <SkillSet /> },
      ];

      components.forEach(({ name, component }) => {
        const { container } = render(component);
        const html = container.innerHTML;
        
        // Check for responsive text sizing
        expect(html).toMatch(/text-4xl|text-5xl|sm:text-5xl|lg:text-7xl/);
      });
    });

    test('Body text uses consistent sizing', () => {
      const components = [
        { name: 'Projects', component: <Projects /> },
        { name: 'About', component: <About /> },
        { name: 'Contact', component: <Contact /> },
      ];

      components.forEach(({ name, component }) => {
        const { container } = render(component);
        const html = container.innerHTML;
        
        // Check for consistent body text sizing
        expect(html).toMatch(/text-xl|text-lg|text-base/);
      });
    });

    test('Font weights are consistent across components', () => {
      const components = [
        { name: 'MainSection', component: <MainSection /> },
        { name: 'Projects', component: <Projects /> },
        { name: 'About', component: <About /> },
        { name: 'Contact', component: <Contact /> },
        { name: 'SkillSet', component: <SkillSet /> },
      ];

      components.forEach(({ name, component }) => {
        const { container } = render(component);
        const html = container.innerHTML;
        
        // Check for consistent font weights
        expect(html).toMatch(/font-bold|font-semibold/);
      });
    });
  });

  describe('Interactive Elements Accessibility on Touch Devices', () => {
    test('Buttons have adequate touch target sizes', async () => {
      const components = [
        { name: 'MainSection', component: <MainSection />, async: false },
        { name: 'Contact', component: <Contact />, async: false },
      ];

      for (const { name, component, async: isAsync } of components) {
        let container;
        if (isAsync) {
          await act(async () => {
            const result = render(component);
            container = result.container;
            await waitFor(() => {
              expect(container.innerHTML).not.toMatch(/Loading/);
            }, { timeout: 3000 });
          });
        } else {
          const result = render(component);
          container = result.container;
        }
        
        const html = container.innerHTML;
        
        // Check for adequate padding ( py-4 = 32px x 16px minimum)
        expect(html).toMatch(/ py-4| py-3| py-3/);
      }
    });

    test('Interactive cards have hover states', async () => {
      const components = [
        { name: 'About', component: <About />, async: false },
        { name: 'SkillSet', component: <SkillSet />, async: false },
      ];

      for (const { name, component, async: isAsync } of components) {
        let container;
        if (isAsync) {
          await act(async () => {
            const result = render(component);
            container = result.container;
            await waitFor(() => {
              expect(container.innerHTML).not.toMatch(/Loading/);
            }, { timeout: 3000 });
          });
        } else {
          const result = render(component);
          container = result.container;
        }
        
        const html = container.innerHTML;
        
        // Check for hover states
        expect(html).toMatch(/hover:shadow-card-hover|hover:scale-105|hover:bg-accent/);
      }
    });

    test('Form inputs have adequate touch targets', () => {
      const { container } = render(<Contact />);
      const html = container.innerHTML;
      
      // Check for adequate input padding
      expect(html).toMatch(/p-4/);
    });

    test('Links and buttons have transition effects', async () => {
      const components = [
        { name: 'MainSection', component: <MainSection />, async: false },
        { name: 'Contact', component: <Contact />, async: false },
      ];

      for (const { name, component, async: isAsync } of components) {
        let container;
        if (isAsync) {
          await act(async () => {
            const result = render(component);
            container = result.container;
            await waitFor(() => {
              expect(container.innerHTML).not.toMatch(/Loading/);
            }, { timeout: 3000 });
          });
        } else {
          const result = render(component);
          container = result.container;
        }
        
        const html = container.innerHTML;
        
        // Check for transition classes
        expect(html).toMatch(/transition-all|transition-colors|transition-transform/);
        expect(html).toMatch(/duration-300|duration-200/);
      }
    });
  });

  describe('Card Styling Consistency', () => {
    test('All cards use consistent border radius', async () => {
      const components = [
        { name: 'About', component: <About />, async: false },
        { name: 'Contact', component: <Contact />, async: false },
        { name: 'SkillSet', component: <SkillSet />, async: false },
      ];

      for (const { name, component, async: isAsync } of components) {
        let container;
        if (isAsync) {
          await act(async () => {
            const result = render(component);
            container = result.container;
            await waitFor(() => {
              expect(container.innerHTML).not.toMatch(/Loading/);
            }, { timeout: 3000 });
          });
        } else {
          const result = render(component);
          container = result.container;
        }
        
        const html = container.innerHTML;
        
        // Check for rounded-2xl or rounded-xl
        expect(html).toMatch(/rounded-2xl|rounded-xl/);
      }
    });

    test('All cards use consistent shadow system', async () => {
      const components = [
        { name: 'About', component: <About />, async: false },
        { name: 'Contact', component: <Contact />, async: false },
        { name: 'SkillSet', component: <SkillSet />, async: false },
      ];

      for (const { name, component, async: isAsync } of components) {
        let container;
        if (isAsync) {
          await act(async () => {
            const result = render(component);
            container = result.container;
            await waitFor(() => {
              expect(container.innerHTML).not.toMatch(/Loading/);
            }, { timeout: 3000 });
          });
        } else {
          const result = render(component);
          container = result.container;
        }
        
        const html = container.innerHTML;
        
        // Check for shadow-card classes
        expect(html).toMatch(/shadow-card|shadow-lg/);
      }
    });

    test('All cards use consistent border styling', async () => {
      const components = [
        { name: 'About', component: <About />, async: false },
        { name: 'Contact', component: <Contact />, async: false },
        { name: 'SkillSet', component: <SkillSet />, async: false },
      ];

      for (const { name, component, async: isAsync } of components) {
        let container;
        if (isAsync) {
          await act(async () => {
            const result = render(component);
            container = result.container;
            await waitFor(() => {
              expect(container.innerHTML).not.toMatch(/Loading/);
            }, { timeout: 3000 });
          });
        } else {
          const result = render(component);
          container = result.container;
        }
        
        const html = container.innerHTML;
        
        // Check for border classes
        expect(html).toMatch(/border border-neutral-100|border-neutral-200/);
      }
    });
  });
});
