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

//note to self: params order must match the router
function update(change, id) {
  return db("schemes")
    .where("id", Number(id))
    .update(change);
}

function remove(id) {
  return db("schemes")
    .where("id", Number(id))
    .del();
}

function findSteps(id) {
  return db("steps").where({ scheme_id: id });
}

function addStep({ instructions, step_number }, id) {
  return db("steps").insert({ instructions, step_number, scheme_id: id });
}
