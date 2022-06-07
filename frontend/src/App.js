import { Create } from "./components/Create/Create";
import { Header } from "./components/Header/Header";
import { Navbar } from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import { Users } from "./components/Users";
import { UserDetails } from "./components/UserDetails/UserDetails";
import { Address } from "./components/UserDetails/Address";
import { AddAddress } from "./components/AddAddress/AddAddress";
import { EditUser } from "./components/Create/EditUser";
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
        <Route path="users/:id/edit" element={<EditUser />} />
      </Routes>
    </div>
  );
}

export default App;
