'use strict';
const express = require(express)
const { food } = require('../../models');
const router = express.Router();

async function getFood(request, response, next) {
  const id = request.params.id;
  const foundFood = await food.findById(id);
  response.status(200);
  response.send(foundFood);
}

async function getAllFood(request, response, next) {
  try {

    const foundAllFood = await food.findAll();
    response.status(200);
    response.send(foundAllFood);
  } catch(e) {
    next(e);
  }
} 
async function createfood(request, response, next) {
    try {
      const newFood = await food.create({
        name: request.body.name,
        size:response.body.size
      });
      response.status(201);
      response.send(newFood);

    } catch(e)
  {
    next(e);}


}

async function updateFood(request, response, next) {
    try {
    const updatedFood = await food.update({
      name: request.body.name,
      size: request.body.size,
    });
    response.status(200);
    response.send(upDatedFood);

    }catch(e){
    next(e);
  }
}

async function deleteFood(request, response, next) {
  try {
    const deletedFood = await food.destroy(request.params.id);
    response.status(200);
    response.send(deletedFood);
  } catch(e) {
    next(e);
  }

}
module.exports.router