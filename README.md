# Share.it
> Share.it is an online news and social networking service for sharing posts and chatting. Greatly inspired by Twitter.  
> Check out deployed product here -> https://share-it-app.herokuapp.com

### Want to install share.it and check it out locally?
(if you aren't using yarn just replace `yarn` with `npm`)  
To start in production mode:
1. run `yarn install`
1. run `cd client && yarn install && yarn build && cd ..`
1. find `.env.example` file in `tests/production_test`
1. rename it to `.env`
1. edit `.env` variables the way it suits you
1. run `yarn run production_test`

### Todos
#### Client
- [ ] Add loading animations to async client buttons
- [ ] Add loading animations for 
- [ ] Pop-up notifications (bootstrap alerts)
- [ ] Finish components: Chat, Wall
- [ ] Modals
- [ ] Custom scroll bars
- [ ] Lost connection notification
- [ ] Chat message response reactions
- [ ] Chat emojis
- [ ] Make some screenshots for repo
#### Server
- [ ] Saving posts
- [ ] Saving chats
#### Client + Server
- [ ] Socket.io chat integration
- [x] Fix heroku deployment crash
