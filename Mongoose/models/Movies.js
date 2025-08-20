// import mongoose, { Schema } from "mongoose";

// const movieSchema = new mongoose.Schema({
//   name: { type: String, required: true, trim: true }, // trim is used to remove empty spaces
//   ratings: { type: Number, required: true, min: 1, max: 5 },
//   money: {
//     type: mongoose.Decimal128,
//     required: true,
//     validate: (v) => v >= 10,
//   },
//   genre: { type: Array },
//   isActive: { type: Boolean },
//   comments: [
//     { value: { type: String }, published: { type: Date, default: Date.now } },
//   ],
// });

// const movieModel = mongoose.model("Movie", movieSchema);

// const allDoc = async () => {
//   try {
//     // Creating a Document
//     // const m1 = new movieModel({
//     //   name: "Jumanji",
//     //   ratings: 4,
//     //   money: 1000000,
//     //   genre: ["Adventure", "Action"],
//     //   isActive: true,
//     //   comments: [{ value: "That is a amazing movie" }],
//     // });
//     // const m2 = new movieModel({
//     //   name: "War",
//     //   ratings: 3.5,
//     //   money: 100000,
//     //   genre: ["Action"],
//     //   isActive: true,
//     //   comments: [{ value: "That is a Good movie" }],
//     // });

//     // const result = await movieModel.insertMany([m1, m2, m3, m4]);
//     const result = await movieModel.find(); // findById will give specific data
//     //console.log(result);

//     // Iterating over
//     result.forEach((movie) => {
//       console.log(movie.name);
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// export { allDoc };

import mongoose, { Schema } from "mongoose";

const movieSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true }, // trim is used to remove empty spaces
  ratings: { type: Number, required: true, min: 1, max: 5 },
  money: {
    type: mongoose.Decimal128,
    required: true,
    validate: (v) => v >= 10,
  },
  genre: { type: Array },
  isActive: { type: Boolean },
  comments: [
    { value: { type: String }, published: { type: Date, default: Date.now } },
  ],
});

const movieModel = mongoose.model("Movie", movieSchema);

const updateMany = async () => {
  try {
    // UpdateOne(Filter, what to Update)
    const result = await movieModel.updateMany(
      { money: 100000 },
      { name: "Goated Movies" }
    );
  } catch (error) {
    console.log(error);
  }
};

export { updateMany };
