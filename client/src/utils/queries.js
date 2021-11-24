//importing graphql package
import { gql } from '@apollo/client';

//GET my user information and all of MY listed products (for user/my collection).
export const GET_MY_COLLECTION = gql`
    {
       query user {
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

export const GET_ITEMS = gql`
{
  items {
    _id
    itemName
    description
    price
    image
    category{
      _id
      categoryName
    }
    user{
      _id
    }
  }

}
`;

export const GET_SINGLE_PRODUCT = gql`
    {
        items {
            _id
            itemName
            description
            price
        }
    }
`

// export const GET_MY_ITEMS = gql`
//     {
//         query myItems($userId: ID!) {
//             myItems(userId: $userId) {
//                 _id
//                 itemName
//                 description
//                 price
//                 category
//                 }
//         }
//     }
// `


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
            categories
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