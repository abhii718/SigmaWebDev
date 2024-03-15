use("CrudDb");
db.createCollection("courses");
db.courses.insertOne({
  name: "abby web dev free courses",
  price: 0,
  assignment: 12,
  project: 45,
});
