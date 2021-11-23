//importing graphql package
import { gql } from '@apollo/client';

//GET my user information and all of MY listed products (for user/my collection).
export const GET_MY_COLLECTION = gql`
    {
        user {
            _id
            username
            email
            city
            Item {
                _id
                itemName
                description
                price
            }
        }
    }
`;

//get categories
export const GET_CATEGORY = gql`
{
    categories {
        _id
        categoryName
    }
}
`

//GET all items. To be used for browse collection. GET user information as well, to display reviews (can keep used to display or not).
export const GET_BROWSE_COLLECTION = gql`
    {    
        Item {
            _id
            itemName
            description
            price
            image
            Categories
            user {
                username
                userId
                Comment {
                    _id
                    commentText
                    createdAt
                    username
                }
            }
        }
    }
`

//GET order history by user. Include items 
/* export const GET_ORDER_HISTORY = gql`
    {
        query orderHistory($userID: ID!) {
            order(_id: $userID) {
                _id
                user_id
                Item {
                    itemName
                    description
                    price
                    image
                }
            }
        }
    }
`; */

//stripe checkout
export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;