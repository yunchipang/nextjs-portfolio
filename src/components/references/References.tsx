import { useEffect, useState } from 'react';

import utilStyles from 'styles/utils.module.css';

function References() {
  const [activeTab, setActiveTab] = useState<'supervisors' | 'coworkers'>(
    'supervisors'
  );

  const handleTabClick = (tab: 'supervisors' | 'coworkers') => {
    setActiveTab(tab);
  };

  // debug
  useEffect(() => {
    console.log(activeTab);
  }, [activeTab]);

  return (
    <section className={utilStyles.headingMd}>
      <div className="tab-container">
        <div
          className={`tab ${activeTab === 'supervisors' ? 'active' : ''}`}
          onClick={() => handleTabClick('supervisors')}
        >
          Supervisor
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
          <div>{/* Content for Supervisor Tab */}</div>
        )}
        {activeTab === 'coworkers' && (
          <div>{/* Content for Coworkers Tab */}</div>
        )}
      </div>
    </section>
  );
}

export default References;
