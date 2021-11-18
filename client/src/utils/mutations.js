import { gql } from '@apollo/client';

// login and generate token 
export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

//create new user and generate token
export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!, city: String!) {
        addUser(username: $username, email: $email, $password: password, city: $city) {
            token
            user {
                _id
                username
            }
        }
    }
`;

//ADD item to your personal for sale collection.
export const ADD_ITEM = gql`
    mutation addItem(
        $itemName: String!, 
        $description: String!, 
        $price: Int!, 
        $image: String!, 
        $category: String!) {
            addItem(itemName: $itemName, description: $description, price: $price, image: $image, category: $category) {
                _id
                description
                price
                category
                user {
                    _id
                    username
                }
            }
        }
`;

//DELETE item.
export const REMOVE_ITEM = gql`
    mutation removeItem($itemId: ID!) {
        removeItem(itemId: $itemId) {
            _id
            username
            email
            savedItems {
                Item {
                    _id
                    description
                    price
                    image
                    category
                }
            }
        }
    }
`

//UPDATE ITEM 
export const EDIT_ITEM = gql`
    mutation editItem(
        $itemId: ID!
        $itemName: String!, 
        $description: String!, 
        $price: Int, $image: String!, 
        $category: String
    ) {
        editItem(
            itemId: $itemId,
            itemName: $itemName, 
            description: $description, 
            price: $price, 
            image: $image, 
            category: $category
        ) {
            _id
            description
            price
            image
            category
        }       
    }
`;