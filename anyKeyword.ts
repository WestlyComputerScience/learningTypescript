
// any

let iDontKnow;

function getIDontKnow(){
    return "pizza";
}

iDontKnow = getIDontKnow(); // Note: our variable is referred to as any! This is an issue!

// "any" is not a special type you're assigning. It's only used to avoid type checking for your variable
//  -  bad practice since that avoids the entire point of typescript, lol
//  -  can use compiler flag noImplicitAny to flag any implicit "any" as an error


export {}