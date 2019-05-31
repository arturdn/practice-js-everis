require('es6-promise');

const userLeft = false
const userWatchingCatMeme = false

function watchTutorialPromise() {
    return new Promise((resolve, reject) => {
        if(userLeft) {
            reject({
                name: 'User Left',
                message: ':('
            })
        } else if (userWatchingCatMeme) {
            reject({
                name: 'User Watching Cat Meme',
                message: ':_)'
            })
        } else {
            resolve('Thumbs up and Subscribe')
        }
    })
}

watchTutorialPromise().then((message) => console.log('Success: ' + message))
                        .then((message) => console.log('Success: ' + message))
                        .catch((error) => console.log(error.name + ' ' + error.message))