import { useState } from 'react';

import utilStyles from 'styles/utils.module.css';

import './references.module.css';
import ReferenceItem from './ReferenceItem';
import referencesData from './references.json';

interface Reference {
  id: number;
  type: 'supervisor' | 'coworker';
  initial: string;
  content: string;
}

function References() {
  const [refs] = useState<Reference[]>(referencesData as Reference[]);
  const [activeTab, setActiveTab] = useState<'supervisors' | 'coworkers'>(
    'supervisors'
  );

  const handleTabClick = (tab: 'supervisors' | 'coworkers') => {
    setActiveTab(tab);
  };

  return (
    <section className={utilStyles.headingMd}>
      <div className="tab-container">
        <div
          className={`tab ${activeTab === 'supervisors' ? 'active' : ''}`}
          onClick={() => handleTabClick('supervisors')}
        >
          Supervisors
        </div>
        <div
          className={`tab ${activeTab === 'coworkers' ? 'active' : ''}`}
          onClick={() => handleTabClick('coworkers')}
        >
          Coworkers
        </div>
      </div>

      <div className="tab-content">
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
