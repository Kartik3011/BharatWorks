import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { categories } from "../../data";
import { useAuth } from "../../context/AuthContext";
import { useData } from "../../context/DataContext";
import "./Add.scss";

const empty = {
  title: "",
  category: categories[0].id,
  description: "",
  price: "",
  deliveryDays: "",
  city: "",
  features: "",
};

function Add() {
  const { currentUser } = useAuth();
  const { addGig } = useData();
  const navigate = useNavigate();
  const [form, setForm] = useState(empty);
  const [error, setError] = useState("");

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    if (!form.title.trim() || !form.description.trim() || !form.price || !form.deliveryDays) {
      setError("Please fill in the title, description, price, and delivery time.");
      return;
    }

    const gig = addGig({
      title: form.title.trim(),
      category: form.category,
      description: form.description.trim(),
      price: Number(form.price),
      deliveryDays: Number(form.deliveryDays),
      city: form.city.trim() || "Remote",
      seller: currentUser.username,
      features: form.features
        .split(",")
        .map((f) => f.trim())
        .filter(Boolean),
    });

    navigate(`/gig/${gig.id}`);
  };

  return (
    <div className="add">
      <div className="container">
        <div className="page-heading">
          <h1>Post a New Job</h1>
          <p>Fill in the details below — it'll be live on BharatWorks immediately.</p>
        </div>

        <form className="addForm card" onSubmit={submit}>
          {error && <div className="form-error">{error}</div>}

          <div className="field">
            <label htmlFor="title">Gig title</label>
            <input
              id="title"
              className="input"
              placeholder="I will ..."
              value={form.title}
              onChange={update("title")}
            />
          </div>

          <div className="row">
            <div className="field">
              <label htmlFor="category">Category</label>
              <select id="category" className="select" value={form.category} onChange={update("category")}>
                {categories.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.title}
                  </option>
                ))}
              </select>
            </div>
            <div className="field">
              <label htmlFor="city">City</label>
              <input
                id="city"
                className="input"
                placeholder="e.g. Mumbai"
                value={form.city}
                onChange={update("city")}
              />
            </div>
          </div>

          <div className="field">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              className="textarea"
              placeholder="Describe exactly what you'll deliver..."
              value={form.description}
              onChange={update("description")}
            />
          </div>

          <div className="row">
            <div className="field">
              <label htmlFor="price">Starting price (₹)</label>
              <input
                id="price"
                type="number"
                min="1"
                className="input"
                placeholder="2500"
                value={form.price}
                onChange={update("price")}
              />
            </div>
            <div className="field">
              <label htmlFor="delivery">Delivery time (days)</label>
              <input
                id="delivery"
                type="number"
                min="1"
                className="input"
                placeholder="5"
                value={form.deliveryDays}
                onChange={update("deliveryDays")}
              />
            </div>
          </div>

          <div className="field">
            <label htmlFor="features">What's included</label>
            <input
              id="features"
              className="input"
              placeholder="Comma-separated, e.g. 2 revisions, Source files, Fast delivery"
              value={form.features}
              onChange={update("features")}
            />
            <span className="hint">Separate each item with a comma.</span>
          </div>

          <button type="submit" className="btn btn-gold btn-block">
            Publish Job
          </button>
        </form>
      </div>
    </div>
  );
}

export default Add;
