import { Observable, fromEvent, Subject } from "rxjs"

/*

// Basic Observers
var observable = Observable.create((observer:any) => {
    try {
    observer.next('Hey guys!')
    observer.next('How are you?')
    setInterval(() => {
        observer.next('I am good!')
    }, 2000)
    //observer.complete()
    observer.next('Where are you?')
    } catch(err) {
        observer.error(err)
    }
})

var observer = observable.subscribe(
    (x:any) => addItem(x),
    (error:any) => addItem(error),
    () => addItem('Completed')
)

setTimeout(() => {
    var observer2 = observable.subscribe(
        (x:any) => addItem('Subscriber 2: '+x)
    )
}, 1000)

// fromEvent Observers
var observable = fromEvent(document, 'mousemove')

setTimeout(() => {
    var subscription = observable.subscribe(
        (x:any) => addItem(x)
    )
}, 2000)

*/

var subject = new Subject()

subject.subscribe(
    data => addItem('Observer 1: '+data),
    err => addItem(err),
    () => addItem('Observer 1 Completed')
)

subject.next('The first thing has been sent')

var observer2 = subject.subscribe(
    data => addItem('Observer 2 : '+data)
)
subject.next('The 2nd thing has been sent')
subject.next('The third thing has been sent')

observer2.unsubscribe();

subject.next('A final thing has been sent')

function addItem(val:any) {
    var node = document.createElement("li")
    var textnode = document.createTextNode(val)
    node.appendChild(textnode)
    document.getElementById("output").appendChild(node)
}