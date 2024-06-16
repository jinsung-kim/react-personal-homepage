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
          <div className='item-title'>{item.title}</div>
          <div className='item-subtitle'>{item.subtitle}</div>
        </a>
      ))}
      <style jsx>{`
        .table-container {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .item-title {
          font-size: 14px;
          font-family: "Roboto", sans-serif;
          color: ${primaryColor ?? "#000"};
        }

        .item-subtitle {
          font-size: 14px;
          font-family: "Roboto", sans-serif;
          color: ${secondaryColor ?? "#c7c7c7"};
          margin-top: 4px;
        }

        .table-container a {
          text-decoration: none;
        }

        .table-item:hover {
          color: #6d712e;
        }
      `}</style>
    </div>
  );
}
