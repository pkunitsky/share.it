# Share.it
> Share.it is an online news and social networking service.
> Check out deployed product here -> https://share-it-app.herokuapp.com

<img style="width: 90%" src="https://user-images.githubusercontent.com/29762363/35476582-81d7e6e6-03c3-11e8-9ae4-b7e5f2fde7a8.png" alt="winner-first" />

<img style="width: 50%" src="https://user-images.githubusercontent.com/29762363/35476584-8230d198-03c3-11e8-91d5-d2aeb348ccec.png" alt="winner-3" />
<img style="width: 50%" src="https://user-images.githubusercontent.com/29762363/35476585-8250d48e-03c3-11e8-9cb2-c337af0810a5.png" alt="winner-4" />

<img style="width: 50%" src="https://user-images.githubusercontent.com/29762363/35476586-826f56f2-03c3-11e8-985e-ad556c29b443.png" alt="winner-5" />
<img style="width: 50%" src="https://user-images.githubusercontent.com/29762363/35476587-828c3da8-03c3-11e8-81fc-88dd519fcb3f.png" alt="winner-6" />

<img style="width: 90%" src="https://user-images.githubusercontent.com/29762363/35476588-82a7e922-03c3-11e8-8b4e-fe8fb6044cb4.png" alt="winner-7" />
<img style="width: 90%" src="https://user-images.githubusercontent.com/29762363/35476583-820b9982-03c3-11e8-98be-f34ad9f71e7f.png" alt="winner-last" />

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
