import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_ITEM } from '../utils/mutations'; 
import { GET_ITEMS, QUERY_ME } from '../utils/queries';

const AddItem = () => {
  const [formState, setFormState] = useState({ itemName: '', description: '', price: '', category: '' });
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

  const {itemName, description, price, category } = formState;

  const [addItem, { error }] = useMutation(ADD_ITEM, {
    update(cache, { data: { addItem } }) {
      try {
        const { Item } = cache.readQuery({ query: GET_ITEMS});
        cache.writeQuery({
          query: GET_ITEMS,
          data: { Item: [addItem, ...Item] }
        });
      } catch (e) {
        console.error(e);
      }
  
      // update me object's cache, appending new thought to the end of the array
      const { user } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { user: { ...user, Item: [...user.Item, addItem] } }
      });
    }
  });

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submit Form', formState);
    alert("Thank you for submitting a new item!");
    try {
      // add item to database
      await addItem({
        variables: { formState }
        
      });
  
      // clear form value
      setFormState({itemName: '', description: '', price: '', category: ''});
    } catch (e) {
      console.error(e);
    }

  };

  return (
    <section>
      <h1 data-testid="h1tag">List a new item!</h1><br/>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="itemName" defaultValue={itemName} onBlur={handleChange} />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input type="description" name="description" defaultValue={description} onBlur={handleChange} />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input name="price" defaultValue={price} onBlur={handleChange} />
        </div>
        <div class="dropdown">
          <button class="dropbtn">Pick a Category</button>
          <div class="dropdown-content">
            {itemCategories.map((category) => (
              <button 
              className='hoverPointer'
              onClick={(e) => {setCurrentItemCategory(category.name);
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
