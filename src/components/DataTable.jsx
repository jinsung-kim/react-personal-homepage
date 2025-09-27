import posthog from 'posthog-js';
import React, { useCallback } from 'react';

export default function DataTable({ data, primaryColor, secondaryColor }) {
  const handleTableCellClick = useCallback(link => {
    posthog.capture('TableCellClick', { link });
  }, []);

  return (
    <div className="table-container">
      {data.map((item, index) => (
        <a
          className="table-item"
          key={`table-item-${item.title}-${index}`}
          href={item.redirectTo}
          target="_blank"
          rel="noreferrer"
          onClick={
            item.redirectTo
              ? () => handleTableCellClick(item.redirectTo)
              : undefined
          }
        >
          <div className={`item-title${item.redirectTo ? '-clickable' : ''}`}>
            {item.title}{' '}
            {item.redirectTo && (
                <svg xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     width="14"
                     height="14"
                     viewBox="0 0 24 24"
                     stroke="currentColor"
                     strokeWidth="2"
                     className="external-link-icon">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"/>
                </svg>
            )}
          </div>
          <div
              className={`item-subtitle${item.redirectTo ? '-clickable' : ''}`}
          >
            {item.subtitle}
          </div>
        </a>
      ))}
      <style jsx="true">{`
        .table-container {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .item-title,
        .item-title-clickable {
          font-size: 14px;
          font-family: 'Roboto', sans-serif;
          color: ${primaryColor ?? '#000'};
          display: flex;
          flex-direction: row;
          flex: 1;
          align-items: center;
        }

        .external-link-icon {
          margin-left: 2px;
          align-self: center;
        }

        .item-subtitle,
        .item-subtitle-clickable {
          font-size: 14px;
          font-family: 'Roboto', sans-serif;
          color: ${secondaryColor ?? '#c7c7c7'};
          margin-top: 4px;
        }

        .table-container a {
          text-decoration: none;
        }

        .table-container a:hover .item-title-clickable,
        .table-container a:hover .item-subtitle-clickable {
          color: #6d712e;
        }
      `}</style>
    </div>
  );
}
