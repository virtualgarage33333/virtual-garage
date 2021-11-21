import React, { useState } from 'react';

const AddItem = () => {
  const [formState, setFormState] = useState({ name: '', description: '', price: '', image: '', category: '' });
  const [itemCategories] = useState([
    { name: 'Automotive', },
    { name: 'Electronics', },
    { name: 'Furniture', },
    { name: 'Kitchenware', },
    { name: 'Books', },
    { name: 'Clothing', },
    { name: 'Fitness', },
    { name: 'Gardening', },
    { name: 'Art', },
  ])
  
  const [currentItemCategory, setCurrentItemCategory] = useState(itemCategories[0]);

  const { name, description, price, image, category } = formState;




  const handleChange = (e) => {
    /* if (e.target.name === 'category') {
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
    } */
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
        <div class="dropdown">
          <button class="dropbtn">Pick a Category</button>
          <div class="dropdown-content">
            {itemCategories.map((category) => (
              <button 
              className='hoverPointer'
              onClick={() => {setCurrentItemCategory(category.name);
                setFormState({ ...formState, category: category.name });}}
                >
                  {category.name}
                </button>
            ))}
          </div>
        </div>
        <p>Your item will be listed under {formState.category}</p>
        <button data-testid="button" type="submit">Submit</button>
      </form>
    </section>
  );
};

export default AddItem;
