const knex = require("knex");
const knexConfig = require("../knexfile.js");
const db = knex(knexConfig.development);

module.exports = {
  find,
  findById,
  add,
  findSteps,
  update,
  remove
};

function find() {
  return db("schemes");
}

function findById(id) {
  return db("schemes").where({ id: Number(id) });
}

function add(scheme) {
  return db("schemes")
    .insert(scheme)
    .then(ids => ({ id: ids[0] }));
}

function update(id, scheme) {
  return db("schemes")
    .where("id", Number(id))
    .update(scheme);
}

function remove(id) {
  return db("schemes")
    .where("id", Number(id))
    .del();
}

function findSteps(id) {
  return db("steps")
    .join("schemes", "schemes.id", "scheme_id")
    .select("steps.*", "instructions")
    .where("steps.id", id);
}
