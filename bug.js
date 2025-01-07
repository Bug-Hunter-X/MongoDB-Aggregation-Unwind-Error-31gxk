```javascript
//Incorrect aggregation pipeline
db.collection.aggregate([
  {
    $match: { /* some filter */ }
  }, 
  {
    $lookup: {
      from: "anotherCollection",
      localField: "someField",
      foreignField: "someOtherField",
      as: "results"
    }
  },
  {
    $unwind: "$results" //Error prone if no match found
  }
]);
```