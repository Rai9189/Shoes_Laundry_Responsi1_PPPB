import { supabase } from "../config/supabaseClient.js";

export const ItemModel = {
  // GET all items, optional filter status, always order by id ascending
  async getAll(status) {
    let query = supabase.from("items").select("*").order("id", { ascending: true });
    if (status) query = query.ilike("status", status); // case-insensitive
    const { data, error } = await query;
    if (error) throw error;
    return data;
  },

  async getById(id) {
    const { data, error } = await supabase.from("items").select("*").eq("id", id).single();
    if (error) throw error;
    return data;
  },

  // Create single or multiple items
  async create(items) {
    const payload = Array.isArray(items) ? items : [items];
    const { data, error } = await supabase.from("items").insert(payload).select();
    if (error) throw error;
    return data;
  },

  async update(id, item) {
    const { data, error } = await supabase.from("items").update(item).eq("id", id).select();
    if (error) throw error;
    return data[0];
  },

  async remove(id) {
    const { error } = await supabase.from("items").delete().eq("id", id);
    if (error) throw error;
    return { success: true };
  },

  // Delete multiple items by array of ids
  async removeMany(ids) {
    const { error } = await supabase.from("items").delete().in("id", ids);
    if (error) throw error;
    return { success: true };
  }
};
