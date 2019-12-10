# Register API - Delivery APP
API to support the register for Delivery app, created using NodeJs and Sequelize ORM with Postgresql.

## Table of contents
* [Introduction](#introduction)
* [Features](#features)
* [Technologies](#technologies)
* [Setup](#setup)

## Introduction
This app will allow the users to register as owners, register multiple vehicles and create trips, every trip creation uses the google api to suggest locations, calculate distances and, by using the distance, generate an associated price. All this information is send via email with a pdf contract.

## Features
* Register and authenticate with its id document
* Register a new vehicle
* Register a new trip
* See the dashboard with the software information

## Technologies
This project is created with:

* NPM 
* React js

For more details of the packages and dependencies used in this service, please go to the 'package.json' on this repo.

## Setup
* To run this project you will need NPM to install the node dependencies and run the dev environment.
* To install the dependencies you need to run 'npm install' inside the main folder.
* To start the local server on port 3000 you need to run 'npm start'
