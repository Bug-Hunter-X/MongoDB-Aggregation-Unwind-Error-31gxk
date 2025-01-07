```javascript
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
    $unwind: {
      path: "$results",
      preserveNullAndEmptyArrays: true
    }
  }
]);
```