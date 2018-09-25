![N|Solid](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJcAAABaCAMAAACCNzQhAAAAYFBMVEX///8AAAD39/fd3d38/PzFxcXZ2dnAwMCpqal7e3tFRUXs7Ozw8PCOjo6CgoLk5OS2trZqamobGxsqKiqIiIgQEBBLS0slJSU/Pz/Ozs5TU1NiYmI3NzednZ1ycnJYWFhiyuktAAADnElEQVRoge1a6bqqMAxUFtkFXECphfd/y+tBVApJunGX736dn+fYOC3pZBLc7RwcHBwcHBwcHP49eHlW+v5hhO+XZeYFf4tK7odRXCTs1u4RXB9DX/AqumdqJLOw4gkbmoElvApLXULeIeL97XTF6AAET2dWVPeM2mWUtIuILas0uIUMPR8ZTrc4h4Pe6xO8oS5SY5UPpqQmaiG01YZY8agUaAVnO1pPrIj5sq12BymvizWt/dkTQ3KFNbGMlz2t/V54LjlTWnOkad234NXPApY3xUUJyUvlzKUYvmJWql9t/tt5pZ8Ey3Vu0Z3gVWzB6/HRsFRr2R87r6PeOkLHNuHVTLwOmuvOOK94C17DFAyuPARweY224FWb7hFXV38LXpMUadiRCT3Ky9uCFzc9+hueYFvwehVuA1/S4rwoQ6KK0evlBgsJXhv4iXaUVZObneK8NhAKNgbqDVbiea+thQBGy+KZ+EvKhdnzqkzTi9DV3U7VL+EYmyITI0ek/QaO4mWjTfKUNNPWlag33d6J7I0zW14vtde0OD+QNJLaLmABf4ySaK+TdB4mOxUQmPEitGuTBJtMji4v2Wk9Wxg7Xpw89aSG/64yCrCbBLzSC7uP910F2LIEGbaIsCvdUxBEv553zuOd8KdHoThrCm1ovdMX0fvxKQdldelZl6YdS2LfI6gIyG2U4q3ZiAyy79cEnu4ktINjKuGdKR68uZaaKMpg4cG+PTNy8aQDJQIWTdF3+IF0yMvhmBa0xgoC/E8MTAYvFryMpwHXWRDMyKlIKALiQXZVROhbMQuCZilE7BBz+YyV6NYKmvY8Nt4i98sci8cSw3ZSYHudlmKlXTTChDE5zjYQfj5XS3khSXt9bxQRAXEUSc8UuguP46IW5pzyggQPkT+ZEcDftYirfX3krz7AJzVLgAr6/7CMoutMqAnrC94DWDavIdCBrrarK9BSWqB/EkoIUJfP6zKsV9GK1fo11pm/GGqsvxIKq+PlWqUStbpyy8uydB1X8DZpdDHQi7g1lsZudRrL5EEaGuUGV9VpiMUbmGEvZAC7TIo5Rr6GmUOUCuBbA6Fa4VXkoDCDvGpU83kCgVdFmJX50CemDUgFlum8gp9JAVK5ZkdKZ0dOZlmqlvFfYm+9Rpvh8N0MSpPWiyGl/kEiV/kVomPXME49oqpvmhr7EYAIP14ViVuheVS/C1kY80vyxNNNRNq/63BwcHBwcHBw+D/wC/giL+V+4a0aAAAAAElFTkSuQmCC)

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