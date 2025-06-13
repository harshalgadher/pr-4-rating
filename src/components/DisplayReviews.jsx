import React from "react";

export const DisplayReviews = ({ textObj, onDelete, onEdit }) => {
  const { name, date, star, review } = textObj;

  return (
    // <div className="text-blue-400 text-sm">
    //   
      <div className="bg-white  rounded-xl p-10 shadow-md border border-gray-200">
      <div className="mb-3">
        <div className="font-bold">
            <h3 className="text-lg font-bold text-gray-700">{name}</h3>
            {Array.from({ length: parseInt(star) }, (_, i) => (
          <span className="text-2xl" key={i}>★</span>
        ))}
        </div>
        <span className="text-sm text-gray-400 mt-11">{date}</span>
      </div>

      <p className="text-gray-600 text-[15px] italic mb-4">"{review}"</p>

      <div className="flex gap-3 justify-end text-sm">
        <button
          onClick={onEdit}
          className="text-blue-600 hover:underline font-medium"
        >
          Edit
        </button>
        <button
          onClick={onDelete}
          className="text-red-500 hover:underline font-medium"
        >
          Delete
        </button>
      </div>
    </div >
  );
};
