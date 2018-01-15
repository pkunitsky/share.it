# Share.it
> Share.it is social app for sharing posts and chatting. Greatly inspired by Twitter.  
> Check out deployed product here -> https://share-it-app.herokuapp.com

### Want to install share.it and check it out locally?
To start in production mode (yarn)
1. run `yarn install`
1. run `cd client && yarn install && yarn build && cd ..`
1. find `.env.example` in `tests/production_test`
1. rename it `.env.example` -> `.env`
1. edit `.env` variables the way it suits you
1. run `yarn run production_test`

#### Client todos
- [ ] Add loading animations to async client buttons
- [ ] Add loading animations for 
- [ ] Pop-up notifications (bootstrap alerts)
- [ ] Finish components: Chat, Wall
- [ ] Modals
- [ ] Custom scroll bars
- [ ] Lost connection notification

#### Server todos
- [ ] Saving posts
- [ ] Saving chats

#### Client + Server
- [ ] Socket.io chat integration
- [ ] Fix heroku deployment crash
