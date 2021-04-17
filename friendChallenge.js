function returnFriend(input) { 
    let a = input;
    var result;
    var friend=[];
    for (var i = 0; i < a.length; i++) {
        if(a[i].trim().length==4){
        result=a[i];
        friend.push(result);
        }
    }
    return friend;
}  