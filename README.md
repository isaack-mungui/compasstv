##### Prerequisites

The setups steps expect following tools installed on the system.

- Github
- Ruby [2.7.4](https://github.com/ruby/www.ruby-lang.org)
- Rails [7.0.4](https://github.com/rails/rails/tree/7-0-stable)
- Postgresql 12+

##### Check out the repository

```bash
git clone git@github.com:isaack-mungui/compass_tv.git
```

Backend Setup
===============================================================
##### 1. Install Ruby Gems

```ruby
bundle install
```

##### 2. Create and setup the database

Run the following commands to create and setup the database.

```ruby
bundle exec rails db:migrate
```

##### 3. Start the Rails server

You can start the rails server using the command given below.

```ruby
bundle exec rails s
```

Frontend Setup
================================================================
```javascript
npm start --prefix client
```
Find more information on client setup [here](./client)

And now you can visit the site with the URL http://localhost:3000

##### List of endpoints

### API Endpoints
| HTTP Verbs | Endpoints | Action |
| --- | --- | --- |
| GET | /categories | To retrieve all categories |
| POST | /categories | To create a new category record |
| GET | /categories/:id | To retrieve details of a single category |
| PATCH | /categories/:id | To To edit the details of a single category |
| PUT | /categories/:id | To To edit the details of a single category |
| GET | /contents | To retrieve all content |
| POST | /contents | To create a new content record |
| GET | /contents/:id | To retrieve all details of a single content |
| PATCH | /contents/:id | To edit the details of a single content |
| PUT | /contents/:id | To edit the details of a single content |
| DELETE | /contents/:id | To destroy details of a single content |
| GET | /creators | To retrieve all creators |
| POST | /creators | To create a new creator record |
| GET | /creators/:id | To retrieve all details of a single creator |
| PATCH | /creators/:id | To edit the details of a single creator |
| PUT | /creators/:id | To edit the details of a single creator |
| GET | /profiles | To retrieve all profiles |
| POST | /profiles | To create a new profile record |
| GET | /profiles/:id | To retrieve all details of a single profile |
| PATCH | /profiles/:id | To edit the details of a single profile |
| PUT | /profiles/:id | To edit the details of a single profile |
| GET | /users | To retrieve all users |
| POST | /signup | To create a new user record |
| GET | /auth | To retrieve all details of a single user |
| PATCH | /users/:id | To edit the details of a single user |
| PUT | /users/:id | To edit the details of a single profile |
| POST | /login | To create a new user session |
| DELETE | /logout | To destroy details of a user session |
