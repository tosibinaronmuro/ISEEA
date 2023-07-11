import React from "react";

const Story = ({ story, author }) => {
  return (
    <div className="rounded-t-xl relative bg-secondary p-4  mt-5    lg:p-8">
      <span className="absolute inset-x-0 rounded-b-xl bottom-0 h-1 bg-gradient-to-r from-secondary to-tertiary"></span>
      <div className="absolute right-0 bottom-0 bg-tertiary h-14  flex justify-center items-center p-2 rounded-tl-2xl ">
        <p className="text-sm font-medium font-garmond uppercase tracking-widest text-secondary">
          {author}
        </p>
      </div>
      <div className="flex items-start sm:gap-8">
        <div>
          <p className="mt-1 text-lg text-tertiary  font-Poiret text-justify  pb-6">
            <span className="text-4xl font-garmond text-primary">“</span>
            {story}
            <span className="text-4xl font-garmond text-primary">”</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Story;
