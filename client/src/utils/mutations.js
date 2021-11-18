import { gql } from '@apollo/client';

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

export const ADD_ITEM = gql`
    mutation addItem(
        $itemName: String!, 
        $description: String!, 
        $price: Int, $image: String!, 
        $categories: String) {
            addItem(itemName: $itemName, description: $description, price: $price, image: $image, categories: $categories) {
                _id
                description
                price
                categories
                user {
                    _id
                    username
                }
            }
        }
`;

export const REMOVE_ITEM = gql`
    mutation removeItem($itemId: ID!) {
        removeItem(itemId: $itemId) {
            _id
            username
            email
            itemCount
            savedItems {
                itemId
                description
                price
                image
                categories
            }
        }
    }
`

export const EDIT_ITEM = gql`
    mutation editItem(
        $itemId: ID!
        $itemName: String!, 
        $description: String!, 
        $price: Int, $image: String!, 
        $categories: String
    ) {
        editItem(
            itemId: $itemId,
            itemName: $itemName, 
            description: $description, 
            price: $price, 
            image: $image, 
            categories: $categories
        ) {
            _id
            description
            price
            image
            categories
        }       
    }
`;