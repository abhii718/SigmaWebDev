// Using the "CrudDb" database, we create a collection named "courses".
db.createCollection("courses");

// Inserting a single document into the "courses" collection.
db.courses.insertOne({
  name: "abby web dev free courses",
  price: 0,
  assignment: 12,
  project: 45,
});

// // Inserting multiple documents into the "courses" collection.
// db.courses.insertMany([
//   {
//     name: "Free Web Dev Basics",
//     price: 0,
//     assignment: 8,
//     project: 15,
//   },
//   {
//     name: "Intro to HTML and CSS",
//     price: 0,
//     assignment: 6,
//     project: 12,
//   },
//   {
//     name: "JavaScript Fundamentals",
//     price: 0,
//     assignment: 10,
//     project: 20,
//   },
//   {
//     name: "Responsive Web Design",
//     price: 0,
//     assignment: 7,
//     project: 18,
//   },
//   {
//     name: "Frontend Frameworks",
//     price: 0,
//     assignment: 9,
//     project: 25,
//   },
//   {
//     name: "Backend Basics",
//     price: 0,
//     assignment: 8,
//     project: 22,
//   },
//   {
//     name: "Database Management",
//     price: 0,
//     assignment: 7,
//     project: 20,
//   },
//   {
//     name: "API Development",
//     price: 0,
//     assignment: 6,
//     project: 15,
//   },
//   {
//     name: "Testing and Debugging",
//     price: 0,
//     assignment: 8,
//     project: 18,
//   },
//   {
//     name: "Deployment Strategies",
//     price: 0,
//     assignment: 7,
//     project: 16,
//   },
// ]);

// Retrieving a single document from the "courses" collection where price is 0.
// let cursor = db.courses.findOne({ price: 0 });
// console.log(cursor);

// UPDATE

db.courses.updateOne({ price: 0 }, { $set: { price: 100 } });

db.courses.updateMany({ price: 0 }, { $set: { price: 100 } });

// DELETE

db.courses.deleteOne({ price: 100 });
db.courses.deleteMany({ price: 1000 });
