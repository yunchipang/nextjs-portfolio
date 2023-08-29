import { useState } from 'react';

import utilStyles from 'styles/utils.module.css';

import Testimonial from './Testimonial';
import testimonialData from './testimonials.json';
import testiStyles from './testimonials.module.css';

interface Testimonial {
  id: number;
  type: 'supervisor' | 'coworker';
  initial: string;
  content: string;
}

function TestimonialsContainer() {
  const [testimonials] = useState<Testimonial[]>(
    testimonialData as Testimonial[]
  );
  const [activeTab, setActiveTab] = useState<'supervisors' | 'coworkers'>(
    'supervisors'
  );

  const handleTabClick = (tab: 'supervisors' | 'coworkers') => {
    setActiveTab(tab);
  };

  return (
    <section className={utilStyles.headingMd}>
      <div className={testiStyles.tabContainer}>
        <div
          className={
            activeTab === 'supervisors'
              ? testiStyles.tabActive
              : testiStyles.tab
          }
          onClick={() => handleTabClick('supervisors')}
        >
          Supervisors
        </div>
        <div
          className={
            activeTab === 'coworkers' ? testiStyles.tabActive : testiStyles.tab
          }
          onClick={() => handleTabClick('coworkers')}
        >
          Coworkers
        </div>
      </div>

      <div className={testiStyles.refBox}>
        {activeTab === 'supervisors' && (
          <div>
            {testimonials
              .filter((testi) => testi.type === 'supervisor')
              .map((testi) => (
                <Testimonial
                  key={testi.id}
                  initial={testi.initial}
                  content={testi.content}
                />
              ))}
          </div>
        )}
        {activeTab === 'coworkers' && (
          <div>
            {testimonials
              .filter((testi) => testi.type === 'coworker')
              .map((testi) => (
                <Testimonial
                  key={testi.id}
                  initial={testi.initial}
                  content={testi.content}
                />
              ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default TestimonialsContainer;
