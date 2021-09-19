export default class {
    constructor(window) {
        this.window = window
        this.HTML = ''
    }
    render = () => {
        let document = this.window.document
        let myFistElementCreated = document.createElement('h1')
        myFistElementCreated.innerHTML = 'This page contain component(s) was made without express, react only fs, jsdom, http and blood'
        document.body.appendChild(myFistElementCreated);
        this.HTML = document.documentElement.innerHTML
        console.log('page loaded')
    }
}
