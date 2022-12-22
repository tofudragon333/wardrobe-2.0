#The Better Wardobe

## Summary

This was my phase 5 Flatiron Capstone/final project.
It is a full-stack application that allows users to upload, document, and organize their clothes, donate old clothes, and create and store outfit collages for future use.

This is a WIP as I plan on adding more features, including but not limited to outfit coordination, file uploads, adjustable donation windows, additional donation sites, etc.

## Setup

run:
`npm install --prefix client`
`bundle install`
`rails db:migrate db:seed`
`rails s`
(at this point, the backend should be running on http://localhost:4000)

in a new terminal, run:
`npm start --prefix client`
(this will start the app on https://localhost:3000)

login using:
`username: Tofu`
`password: 123`

## Technologies
The frontend is designed with React, backend with Ruby on Rails; model files and controller methods are handled with Rails Active Record.
SQLite3 was used for the database.
