async function fetchData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const data = await response.json();
      return data;
    }
     catch (error) {
      console.error('Error fetching data:', error.message);
     
      return null;
    }
  }
  

  fetchData()
    .then(data => {
      if (data) {
        console.log('Fetched data:', data);
      } else {
        console.log('Failed to fetch data.');
      }
    });
  