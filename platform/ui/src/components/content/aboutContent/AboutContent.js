import React from 'react';
import detect from 'browser-detect';
import { useTranslation } from 'react-i18next';

import './AboutContent.styl';

const AboutContent = () => {
  const { t } = useTranslation('AboutContent');

  const { os, version, name } = detect();
  const capitalize = s =>
    s.substr(0, 1).toUpperCase() + s.substr(1).toLowerCase();

  const itemsPreset = () => {
    return [
      {
        name: t('About neuro42'),
        value: 'https://www.neuro42.ai',
        link: 'https://www.neuro42.ai',
      },
      {
        name: 'Version Number',
        value: process.env.VERSION_NUMBER,
      },
    ];
  };

  const renderTableRow = ({ name, value, link }) => (
    <tr key={name} style={{ backgroundColor: 'transparent' }}>
      <td>{name}</td>
      <td>
        {link ? (
          <a target="_blank" rel="noopener noreferrer" href={link}>
            {value}
          </a>
        ) : (
          value
        )}
      </td>
    </tr>
  );

  return (
    <div className="AboutContent" data-cy="about-modal">
      <div>
        <h3>{t('Version Information')}</h3>
        <table className="table table-responsive">
          <thead>
            <tr>
              <th>{t('Name')}</th>
              <th>{t('Value')}</th>
            </tr>
          </thead>
          <tbody>{itemsPreset().map(item => renderTableRow(item))}</tbody>
        </table>
      </div>
    </div>
  );
};

export { AboutContent };
export default AboutContent;
