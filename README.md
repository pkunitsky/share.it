# Share.it
> Online news and social networking service.  
> Check out deployed product here -> https://share-it-app.herokuapp.com

![social network share.it](https://user-images.githubusercontent.com/29762363/35476582-81d7e6e6-03c3-11e8-9ae4-b7e5f2fde7a8.png)
<br><br><br><br>
![share.it mobile](https://user-images.githubusercontent.com/29762363/35476773-b794837c-03c6-11e8-8418-f07db3572e6e.jpg)
<br><br><br><br>
![social network share.it](https://user-images.githubusercontent.com/29762363/35476583-820b9982-03c3-11e8-98be-f34ad9f71e7f.png)

### Want to install share.it and check it out locally?  
**To start locally in production mode:**

``` bash
# install dependencies
npm install # or yarn

# install client dependencies and build for production
cd client && npm install && npm build && cd ..

# setup .env variables
# find ".env.example" file in "tests/production_test"
# rename it to ".env" and setup variables to suit you

# run server locally in production mode
npm run production_test
```

### Todos
currently working on: Socket.io

#### Client
- [x] Add loading animations to async client buttons
- [ ] Remove "No internet connection" notification as connection returns
- [ ] Finish chat
- [ ] Custom scroll bars
- [ ] Chat message response reactions
- [ ] Chat emojis
- [ ] Make some screenshots for repo
- [ ] Chat input focus faded placeholder
- [ ] vk active tab design
#### Server
- [ ] Saving posts
- [ ] Saving chats
#### Client + Server
- [ ] Socket.io chat integration
- [x] Fix heroku deployment crash
