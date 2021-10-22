'use strict';
const express = require(express)
const { clothes } = require('../../models');
const router = express.Router();

async function getClothes(request, response, next) {
  const id = request.params.id;
  const foundClothes = await clothes.findById(id);
  response.status(200);
  response.send(foundClothes);
}

async function getAllClothes(request, response, next) {
  try {

    const foundAllClothes = await clothes.findAll();
    response.status(200);
    response.send(foundAllClothes);
  } catch(e) {
    next(e);
  }
} 
async function createClothes(request, response, next) {
    try {
      const newClothes = await clothes.create({
        name: request.body.name,
        size:response.body.size
      });
      response.status(201);
      response.send(newClothes);

    } catch(e)
  {
    next(e);}


}

async function updateClothes(request, response, next) {
    try {
    const updatedClothes = await clothes.update({
      name: request.body.name,
      size: request.body.size,
    });
    response.status(200);
    response.send(upDatedClothes);

    }catch(e){
    next(e);
  }
}

async function deleteClothes(request, response, next) {
  try {
    const deletedClothes = await clothes.destroy(request.params.id);
    response.status(200);
    response.send(deletedClothes);
  } catch(e) {
    next(e);
  }

}
module exports router