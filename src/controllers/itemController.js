import { supabase } from "../supabaseClient.js";

export const ItemModel = {
  // Ambil semua data atau filter berdasarkan status
  async getAll(status) {
    let query = supabase.from("items").select("*");

    if (status) {
      // Gunakan ilike agar tidak case-sensitive
      query = query.ilike("status", status);
    }

    const { data, error } = await query;
    if (error) throw new Error(error.message);
    return data;
  },

  // Ambil berdasarkan id
  async getById(id) {
    const { data, error } = await supabase
      .from("items")
      .select("*")
      .eq("id", id)
      .single();

    if (error) throw new Error(error.message);
    return data;
  },

  // Tambah data baru
  async create(itemData) {
    const { data, error } = await supabase
      .from("items")
      .insert(itemData)
      .select();

    if (error) throw new Error(error.message);
    return data;
  },

  // Update data berdasarkan id
  async update(id, itemData) {
    const { data, error } = await supabase
      .from("items")
      .update(itemData)
      .eq("id", id)
      .select();

    if (error) throw new Error(error.message);
    return data;
  },

  // Hapus satu item berdasarkan id
  async remove(id) {
    const { error } = await supabase.from("items").delete().eq("id", id);
    if (error) throw new Error(error.message);
  },

  // Hapus banyak item sekaligus
  async removeMany(ids) {
    const { error } = await supabase.from("items").delete().in("id", ids);
    if (error) throw new Error(error.message);
  },
};
