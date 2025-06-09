import React from "react";

export const DisplayReviews = ({ textObj, onDelete, onEdit }) => {
  const { name, date, star, review } = textObj;

  return (
    <div className="bg-white rounded-xl p-5 shadow-md border border-gray-200">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <img
            src="https://i.pravatar.cc/40" // random profile image
            alt="avatar"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h3 className="text-lg font-semibold text-gray-700">{name}</h3>
            <div className="text-blue-400 text-sm">
              {Array.from({ length: parseInt(star) }, (_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
          </div>
        </div>
        <span className="text-sm text-gray-400">{date}</span>
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
    </div>
  );
};
