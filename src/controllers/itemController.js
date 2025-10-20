import { ItemModel } from "../models/itemModel.js";

export const ItemController = {
  async getAll(req, res) {
    try {
      const { status } = req.query;
      const items = await ItemModel.getAll(status);
      res.json(items);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async getById(req, res) {
    try {
      const item = await ItemModel.getById(req.params.id);
      res.json(item);
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  },

  async create(req, res) {
    try {
      const newItems = await ItemModel.create(req.body);
      res.status(201).json(newItems);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async update(req, res) {
    try {
      const updatedItem = await ItemModel.update(req.params.id, req.body);
      res.json(updatedItem);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async remove(req, res) {
    try {
      await ItemModel.remove(req.params.id);
      res.json({ message: "Deleted successfully" });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async removeMany(req, res) {
    try {
      const ids = req.body; // expect array of ids
      await ItemModel.removeMany(ids);
      res.json({ message: "Deleted successfully" });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
};
