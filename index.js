function submitData(name, email) {
    // Create the data object to be sent
  const userData = {
    name: name,
    email: email
};
// Return the fetch chain (Test 4)
  return fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(userData)
  })
  .then(response => {
    // Check if response is ok (Test 2)
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Append the new id to the DOM (Test 2)
    const newId = document.createElement('p');
    newId.textContent = data.id;
    document.body.appendChild(newId);
    return data; // Return data for potential chaining
  })
   .catch(error => {
    // Append error message to the DOM (Test 3)
    const errorMessage = document.createElement('p');
    errorMessage.textContent = error.message;
    document.body.appendChild(errorMessage);
    throw error; // Re-throw to maintain error state in the chain
  });
}