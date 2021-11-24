//route to get logged in user's information. require token
export const getMe = (token) => {
    return fetch('/api/users/me', {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    });
  };
  
  export const createUser = (userData) => {
    return fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
  };
  
  export const loginUser = (userData) => {
    return fetch('/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
  };

  //save listen item to collection
  export const saveItem = (itemData, token) => {
      return fetch('/api/users', {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json',
              authorization: `Bearer ${token}`
          },
          body: JSON.stringify(itemData),
      });
  };

  //remove listed item from collection
  export const deleteItem = (itemId, token) => {
      return fetch(`/api/users/items/${itemId}`, {
          method: 'DELETE',
          headers: {
            authorization: `Bearer ${token}`             
          }
      });
  };