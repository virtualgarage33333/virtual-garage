//importing graphql package
import { gql } from '@apollo/client';

//GET all of MY listed products (for user/my collection).
export const GET_MY_COLLECTION = gql`
    {
        me {
            _id
            username
            email
            city
            ListedProducts {
                _id
                itemName
                description
                price
                image
                Categories
            }
        }
    }
`

//GET all items. To be used for browse collection.
export const GET_BROWSE_COLLECTION = gql`
    {    
        items {
            _id
            itemName
            description
            price
            image
            Categories
        }
    }
`

//GET order history by user. 
export const GET_ORDER_HISTORY = gql`
    {
        query orderHistory($userID: ID!) {
            order(_id: $userID) {
                _id
                user_id
                item_id {
                    itemName
                    description
                    price
                    image
                }
            }
        }
    }
`