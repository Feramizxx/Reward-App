import React from "react";

function Error() {
  return (
    <div
      data-testid="error-component"
      className="flex justify-center items-center h-[100vh]"
    >
      <div>
        <p className="text-2xl font-mono">
          404 not found!!, The request URL was not found!
        </p>
      </div>
    </div>
  );
}

export default Error;
