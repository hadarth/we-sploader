## Sploader (a spining loader)
A spining loader that changes acording to percent of file/process being counted.
The component <Sploader /> is a progress bar combined with a spinner for loading indication. The component can recieve the precentage prop from its parent component and present the current state of the transfer.

## Motivation
This project is an asignment I got from WeTransfer as a part of their interview process.

## Code style
Coded using ES6

## stand-alone version
https://hadarth.github.io/we-sploader/

## Framework/Libraries used
- [React](https://reactjs.org/)
- [Jest](https://jestjs.io/)
- [Enzyme](https://github.com/airbnb/enzyme)
- [Create React App](https://github.com/facebook/create-react-app)

## Features
- Dynamically changed loader length
- Start and stop the spinner using buttons
- Enter percentage to feed the Sploader

## Usage
1. clone repo
2. go to cloned project directory
3. run 'yarn start'
```
<Sploader />
<Sploader percent={10} />
```
## Tests
To run tests, after cloning the repo, run 'yarn test'


## License
A short snippet describing the license MIT.
This project was bootstrapped with Create React App.

MIT © [Hadarth]()