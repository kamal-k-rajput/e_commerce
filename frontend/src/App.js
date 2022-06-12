import { Routes, Route } from "react-router-dom";
import { Create } from "./components/Create/Create";
import { Header } from "./components/Header/Header";
import { Navbar } from "./components/Navbar/Navbar";
import { Users } from "./components/Users";
import { UserDetails } from "./components/UserDetails/UserDetails";
import { Address } from "./components/UserDetails/Address";
import { AddAddress } from "./components/AddAddress/AddAddress";
import { EditUser } from "./components/Create/EditUser";
import { EditAddress } from "./components/EditAddress/EditAddress";
import { Brands } from "./components/Brands/Brands/Brands";
import { BrandOne } from "./components/Brands/BrandOne/BrandOne";
import { BrandCreate } from "./components/Brands/Create/BrandCreate";
import { BrandUpdate } from "./components/Brands/Update/BrandUpdate";
import { Products } from "./components/Products/ProductName/Products";
import { ProductCreate } from "./components/Products/ProductCreate/ProductCreate";
import { ProductOne } from "./components/Products/ProductOne/ProductOne";
import { ProductEdit } from "./components/Products/ProductEdit/ProductEdit";
function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route path="users" element={<Users />}></Route>
        <Route path="/users/create" element={<Create />}></Route>
        <Route path="/users/:id" element={<UserDetails />} />
        <Route path="users/:id/addresses" element={<Address />} />
        <Route path="users/:id/addresses/create" element={<AddAddress />} />
        <Route path="users/:id/addresses/:idx/edit" element={<EditAddress />} />
        <Route path="users/:id/edit" element={<EditUser />} />
        <Route path="brands" element={<Brands />}></Route>
        <Route path="brands/create" element={<BrandCreate />}></Route>
        <Route path="brands/:id" element={<BrandOne />}></Route>
        <Route path="brands/:id/edit" element={<BrandUpdate />}></Route>
        <Route path="products" element={<Products />}></Route>
        <Route path="products/create" element={<ProductCreate />}></Route>
        <Route path="products/:id" element={<ProductOne />}></Route>
        <Route path="products/:id/edit" element={<ProductEdit />}></Route>
      </Routes>
    </div>
  );
}

export default App;
