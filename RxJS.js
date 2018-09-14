
//creating Observable instance which will describe a 
//set of streams and how they are connected together with operations.
let obj = Rx.Observable;

/*I want our observable to create a single stream and push onto that stream a number every second, incremented by 1.*/
let obj1 = Rx.Observable
    .interval(1000);

/* 
    In RxJS operators act on an observable and return an observable 
    with the operator applied, so we can chain operators together creating an Observable Chain, like so:
*/
    let obj2 = Rx.Observable;
  

/*
        This observable is cold, that means it’s not currently pushing out numbers.
        The observable will become hot and start pushing numbers onto it’s first stream, when it gets it’s first subscriber, like so:
        
      */
        let obj4 = Rx.Observable
            .interval(1000);
        
        obj4.subscribe(value => console.log("Subscriber: " + value));
      /*  By calling subscribe onto an observable it:
        Turns the observable hot so it starts producing.
        Lets us pass in a callback function so we react when anything is pushed onto the final stream in the observable chain.
        Our application now starts printing out:*/
