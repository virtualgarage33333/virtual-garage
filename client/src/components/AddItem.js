import React, { useState } from 'react';

const AddItem = () => {
  const [formState, setFormState] = useState({ name: '', description: '', price: '', image: '', category: '' });

  const { name, description, price, image, category } = formState;

  const handleChange = (e) => {

    if (e.target.name === 'category') {
      if (e.target.value !== 
        'Automotive' ||
        'Electronics' ||
        'Furniture' ||
        'Kitchenware' ||
        'Books' ||
        'Clothing' ||
        'Fitness' ||
        'Gardening' ||
        'Art') {
          console.log('Enter a valid category')
      } else {
        setFormState({ ...formState, [e.target.name]: e.target.value });
        console.log('Handle Form', formState);  
      }
    }
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submit Form', formState);
  };

  return (
    <section>
      <h1 data-testid="h1tag">List a new item!</h1><br/>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input type="description" name="description" defaultValue={description} onBlur={handleChange} />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input name="price" defaultValue={price} onBlur={handleChange} />
        </div>
        <div>
          <label htmlFor="image">Image:</label>
          <input name="image" defaultValue={image} onBlur={handleChange} />
        </div>
        <div>
          <input list="categories" name="category" defaultValue={category} onBlur={handleChange}></input>
        </div>
        <button data-testid="button" type="submit">Submit</button>
      </form>
    </section>
  );
};

export default AddItem;
