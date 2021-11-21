//import Home from "./pages/Home.jsx";
//import ProductList from "./pages/ProductList";
//import Product from "./pages/Product";
//import Cart from "./pages/Cart";
import AddItem from "./components/AddItem";
{/* <Route exact path="/success" component={Success} />

function Success() {
  const [addOrder] = useMutation(ADD_ORDER);

  useEffect(() => {
    async function saveOrder() {
      const cart = await idbPromise('cart', 'get');
      const items = cart.map(item => item._id);
      
      if (items.length) {
        const { data } = await addOrder({ variables: { items } });
        const itemData = data.addOrder.items;
    
        itemData.forEach((item) => {
          idbPromise('cart', 'delete', item);
        });
      }
        
      setTimeout(() => {
        window.location.assign('/');
      }, 3000);
    }

    saveOrder();
  }, [addOrder]); */}

const App = () => {
  return <AddItem />;
};

export default App;
