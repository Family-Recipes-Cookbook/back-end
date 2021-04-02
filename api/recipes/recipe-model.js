const db = require("../../data/dbConfig");

module.exports = {
  async add(recipe) {
    await db("recipes").insert(recipe);
    return db("recipes").where(recipe).first();
    // .then((data) => {
    //   console.log(data)
    //   return db("recipes").where("recipe_id", recipe_id).first();
    // });
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

  remove(recipe_id) {
    return db("recipes").where({ recipe_id }).del();
  },

  edit(recipe_id, changes) {
    return db("recipes")
      .where({ recipe_id })
      .update(changes)
      .then(() => {
        return db("recipes").where("recipe_id", recipe_id);
      });
  },
  editInstruction(recipe_id, changes, instruction_id) {
    return db("instructions")
      .where({ recipe_id })
      .where({ instruction_id })
      .update(changes)
      .then(() => {
        return db("instructions").where("recipe_id", recipe_id);
      });
  },
  editIngredient(recipe_id, changes, ingredient_id) {
    return db("ingredients")
      .where({ recipe_id })
      .where({ ingredient_id })
      .update(changes)
      .then(() => {
        return db("ingredients").where("recipe_id", recipe_id);
      });
  },
  findById(recipe_id) {
    return db("recipes").where({ recipe_id });
  },
  findInstructionById(recipe_id) {
    return db("instructions").where({ recipe_id });
  },
  findIngredientById(recipe_id) {
    return db("ingredients").where({ recipe_id });
  },
  findBy(filter) {
    return db("recipes").where(filter).orderBy("id");
  },
};
