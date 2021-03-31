const db = require("../../data/dbConfig");

module.exports = {
  add(recipe) {
    return db("recipes").insert(recipe);
  },

  getRecipes() {
    return db("recipes");
  },

  addToInstructions(id, instruction) {
    const newInstruction = { recipe_id: id, ...instruction };
    return db("instructions").insert(newInstruction, [
      "recipe_id",
      "instruction_description",
      "instruction_id",
    ]);
  },
  addToIngredients(id, ingredient) {
    const newIngredient = { recipe_id: id, ...ingredient };
    return db("ingredients").insert(newIngredient, [
      "recipe_id",
      "ingredient_amount",
      "ingredient_name",
    ]);
  },
  getInstructions(recipe_id) {
    return db("instructions").where("recipe_id", recipe_id);
  },
  getIngredients(recipe_id) {
    return db("ingredients").where("recipe_id", recipe_id);
  },
  // async addToInstructions(step) {
  //   const [id] = await db("steps")
  //     .select("step_text", "step_order")
  //     .where("recipe_id", id)
  //     .orderBy("step_order")
  //     .insert(step)
  //     .then(([id]) => {
  //       return db("steps").where("id", id).first();
  //     });
  // },

  remove(recipe_id) {
    return db("recipes").where({ recipe_id }).del();
  },

  edit(recipe_id, changes) {
    return db("recipes").where({ recipe_id }).update(changes);
  },

  findById(recipe_id) {
    return db("recipes").where({ recipe_id });
  },

  findBy(filter) {
    return db("recipes").where(filter).orderBy("id");
  },
};
