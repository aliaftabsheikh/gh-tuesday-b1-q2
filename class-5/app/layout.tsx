import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}

export default layout;
