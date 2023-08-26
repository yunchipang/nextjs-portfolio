import { useState } from 'react';

import utilStyles from 'styles/utils.module.css';

import ReferenceItem from './ReferenceItem';
import refsData from './references.json';
import refStyles from './references.module.css';

interface Reference {
  id: number;
  type: 'supervisor' | 'coworker';
  initial: string;
  content: string;
}

function References() {
  const [refs] = useState<Reference[]>(refsData as Reference[]);
  const [activeTab, setActiveTab] = useState<'supervisors' | 'coworkers'>(
    'supervisors'
  );

  const handleTabClick = (tab: 'supervisors' | 'coworkers') => {
    setActiveTab(tab);
  };

  return (
    <section className={utilStyles.headingMd}>
      <div className={refStyles.tabContainer}>
        <div
          className={`${refStyles.tab} ${
            activeTab === 'supervisors' ? refStyles.tabActive : ''
          }`}
          onClick={() => handleTabClick('supervisors')}
        >
          Supervisors
        </div>
        <div
          className={`${refStyles.tab} ${
            activeTab === 'coworkers' ? refStyles.tabActive : ''
          }`}
          onClick={() => handleTabClick('coworkers')}
        >
          Coworkers
        </div>
      </div>

      <div className={refStyles.refBox}>
        {activeTab === 'supervisors' && (
          <div>
            {refs
              .filter((ref) => ref.type === 'supervisor')
              .map((ref) => (
                <ReferenceItem
                  key={ref.id}
                  initial={ref.initial}
                  content={ref.content}
                />
              ))}
          </div>
        )}
        {activeTab === 'coworkers' && (
          <div>
            {refs
              .filter((ref) => ref.type === 'coworker')
              .map((ref) => (
                <ReferenceItem
                  key={ref.id}
                  initial={ref.initial}
                  content={ref.content}
                />
              ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default References;
