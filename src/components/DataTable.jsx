import React from "react";

export default function DataTable({ data, primaryColor, secondaryColor }) {
  return (
    <div className='table-container'>
      {data.map((item, index) => (
        <a
          className='table-item'
          key={`table-item-${item.title}-${index}`}
          href={item.redirectTo}
          target='_blank'
          rel='noreferrer'
        >
          <div className={`item-title${item.redirectTo ? "-clickable" : ""}`}>
            {item.title}{" "}
            {item.redirectTo && (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
                className='external-link-icon'
              >
                <line x1='7' y1='17' x2='17' y2='7'></line>
                <polyline points='7 7 17 7 17 17'></polyline>
              </svg>
            )}
          </div>
          <div
            className={`item-subtitle${item.redirectTo ? "-clickable" : ""}`}
          >
            {item.subtitle}
          </div>
        </a>
      ))}
      <style jsx>{`
        .table-container {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .item-title,
        .item-title-clickable {
          font-size: 14px;
          font-family: "Roboto", sans-serif;
          color: ${primaryColor ?? "#000"};
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
          font-family: "Roboto", sans-serif;
          color: ${secondaryColor ?? "#c7c7c7"};
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
