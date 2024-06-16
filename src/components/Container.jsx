import React from "react";

export default function Container({ children }) {
  return (
    <div className='container'>
      {children}
      <style jsx>{`
        @media (min-width: 540px) {
          .container {
            max-width: 500px;
            margin-left: 10%;
            margin-top: 10%;
          }
        }

        @media (max-width: 540px) {
          .container {
            margin-top: 32px;
            margin-left: 16px;
            margin-right: 16px;
            padding-bottom: 64px;
          }
        }
      `}</style>
    </div>
  );
}
