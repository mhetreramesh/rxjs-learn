import { Observable } from "rxjs";

var observable = Observable.create((observer:any) => {
    try {
    observer.next('Hey guys!')
    observer.next('How are you?')
    observer.complete()
    observer.next('Where are you?')
    } catch(err) {
        observer.error(err)
    }
})

observable.subscribe(
    (x:any) => addItem(x),
    (error:any) => addItem(error),
    () => addItem('Completed')
)

function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}