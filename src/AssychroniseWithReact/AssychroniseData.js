// a promise function that return sync data to asynch
const getAsyncDataStories  = (initialStories) => {
    // Promise.resolve({data: {stories: initialStories}})
    //make the data asynchronously and not immediately render since server take time 
     return new Promise((resolve, reject) => {
      setTimeout(() => {
         resolve({data: {stories: initialStories}})
      }, 5000)
    })
  }
  
  export default  getAsyncDataStories