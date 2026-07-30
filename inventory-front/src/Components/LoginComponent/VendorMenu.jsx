import React, { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../../MenuTheme.css";
import { getSingleUserDetails } from "../../Services/LoginService";
import { getProductsByVendor } from "../../Services/ProductService";

const VendorMenu = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getSingleUserDetails()
      .then((res) => getProductsByVendor(res.data.username))
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="menu-container">
      {/* HEADER */}
      <div className="menu-header vendor-header">
        <h1>Vendor Menu</h1>
      </div>

      {/* NAVBAR */}
      <Navbar expand="lg" className="menu-navbar">
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/ShowSingleUser" className="logout-link">
              <b>Show User Details</b>
            </Nav.Link>
            <Nav.Link href="/" className="logout-link">
              <b>Logout</b>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* MY PRODUCTS */}
      <div style={{ padding: "20px" }}>
        <h3>My Products</h3>
        {products.length === 0 ? (
          <p>No products found for your vendor account.</p>
        ) : (
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={{ border: "1px solid #ccc", padding: "8px" }}>Product ID</th>
                <th style={{ border: "1px solid #ccc", padding: "8px" }}>Name</th>
                <th style={{ border: "1px solid #ccc", padding: "8px" }}>SKU</th>
                <th style={{ border: "1px solid #ccc", padding: "8px" }}>Stock</th>
                <th style={{ border: "1px solid #ccc", padding: "8px" }}>Reorder Level</th>
                <th style={{ border: "1px solid #ccc", padding: "8px" }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p.productId}>
                  <td style={{ border: "1px solid #ccc", padding: "8px" }}>{p.productId}</td>
                  <td style={{ border: "1px solid #ccc", padding: "8px" }}>{p.productName}</td>
                  <td style={{ border: "1px solid #ccc", padding: "8px" }}>{p.sku}</td>
                  <td style={{ border: "1px solid #ccc", padding: "8px" }}>{p.stock}</td>
                  <td style={{ border: "1px solid #ccc", padding: "8px" }}>{p.reorderLevel}</td>
                  <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                    {p.status ? "OK" : "Reorder Needed"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default VendorMenu;