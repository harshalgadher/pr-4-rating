import React, { useRef, useState } from 'react'
import { DisplayReviews } from './DisplayReviews';

export const Card = () => {

  const [text, setText] = useState({
    name: "",
    date: "",
    star: "",
    review: "",
  });
  const [error, setError] = useState({});
  const inputRef = useRef(null);
  const [showCard, setShowCard] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    setText({ ...text, [e.target.id]: e.target.value });
    setError({ ...error, [e.target.id]: "" });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    let Obj = {};

    if (!text.name || text.name.trim() === "") {
      Obj.name = "Please enter name...."
    }
    if (!text.date || text.date.trim() === "") {
      Obj.date = "Please enter Date...."
    }
    if (text.star === undefined || text.star === null || text.star === "") {
      Obj.star = "Please enter review...."
    }
    if (!text.review || text.review.trim() === "") {
      Obj.review = "Please enter name...."
    }
    if (text.review.trim().length > 300) {
      Obj.review = "review must be in 300 cheracters..."
    }

    setError(Obj);

    if (Object.keys(Obj).length === 0) {
      if (editIndex != null) {
        const updatedReviews = [...reviews];
        updatedReviews[editIndex] = text;
        setReviews(updatedReviews);
        setEditIndex(null);
      }
      else{
        setReviews([...reviews, text]);
      }
      setText({name:"",date:"",star:"",review:""});
      setShowCard(true);
    }
  }

  const deleteReview = (index) =>{
    const newReview = [...reviews];
    newReview.splice(index, 1);
    setReviews(newReview);
  }

  const editReview = (index) => {
    setText(reviews[index]);
    setEditIndex(index);
    setShowCard(false);
  }

  return (
    <div className="container mx-auto min-h-screen flex items-center justify-center">
      {!showCard ? (

        <div className="w-full max-w-xl p-4 bg-white border border-red-400 rounded-lg shadow-sm sm:p-6 md:p-8 ">
          <div className="w-full flex align-middle justify-center">
            <img src="/images.png" alt="logo" className="w-80 mt-1 mb-12" />
          </div>
          <form ref={inputRef} onSubmit={handleSubmit} className="space-y-6" action="#">
            <h5 className="text-center text-2xl font-bold text-red-500 ">Enter your Review</h5>
            <div className="flex">
              <div className="w-full px-2">
                <label className="block mb-2 text-lg font-medium text-red-500 px-1">Name :-</label>
                <input type="name" value={text.name} onChange={handleChange} date="email" id="name" className="bg-gray-50 border-2 border-red-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 focus:border-green-500 outline-none " placeholder="Enteryour Name"  />
                {error.name && <p className="text-red-500 text-sm mt-1">{error.name}</p>}
              </div>
              <div className="w-full px-2">
                <label className="block mb-2 text-lg font-medium text-red-500">Date :-</label>
                <input type="date"  value={text.date} onChange={handleChange} name="password" id="date" className="bg-gray-50 border-2 border-red-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 focus:border-green-500 outline-none "/>
                {error.date && <p className="text-red-500 text-sm mt-1">{error.date}</p>}
              </div>
            </div>
            <h3 className="text-center text-2xl text-red-500 font-semibold">---Rating---</h3>
            <div className="text-center">
              <select name="star" id="star"  value={text.star}  onChange={handleChange}>
                <option value="">---Rate---</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              {error.star && <p className="text-red-500 text-sm mt-1">{error.star}</p>}
            </div>
            <div>
              
              <textarea name="review"  value={text.review} onChange={handleChange} rows={5} id="review" placeholder="Give Your Feed Back" className="w-full border-2 border-red-500 rounded-lg text-lg  focus:border-green-500 outline-none p-2"></textarea>
            </div>
            <button type="submit" className="w-full text-white bg-red-600 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Submmit your REVIEW..</button>
            <button onClick={() => {
              setShowCard(false);
            }}
              className="w-full text-white bg-green-500 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">See Reviews</button>
          </form>
        </div>
      ) :
        <div>
          <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-6 py-8">
            {reviews.map((review, index) => (
              <DisplayReviews key={index} textObj={review} onDelete={() => deleteReview(index)}
                onEdit={() => editReview(index)} />
            ))}
          </div>

          <div className="w-full flex justify-center pb-3">
            <button
              className="text-2xl text-center p-3 font-semibold bg-blue-100 rounded flex items-center justify-center text-blue-600 cursor-pointer hover:bg-blue-600 hover:text-blue-100 transition-all duration-75"
              onClick={() => {
                setShowCard(false);
              }}
            >
              Back
            </button>
          </div>
        </div>
      }
    </div>
  )
}