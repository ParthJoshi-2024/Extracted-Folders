import dbOperations from "./db-operations.js";
window.addEventListener('load', bindEvents);
var isGameStart = false;

function bindEvents(){
   
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button=>button.addEventListener('click', printXorZero));
    document.querySelector('#gen-code').removeEventListener('click',printXorZero);
    document.querySelector('#join-code').removeEventListener('click',printXorZero);
    document.querySelector('#gen-code').addEventListener('click', generateCode);
    document.querySelector('#join-code').addEventListener('click', joinWithCode);
    //console.log('All buttons ', buttons, ' Len ', buttons.length);
}



function printXorZero(){
    console.log('Print X or zero called...');
}

function joinWithCode(){
    console.log('Join with Code....');
    const id = prompt("Enter the join code");
    const p = dbOperations.joinGroup(id);
    p.then(d=>console.log('Data ', d)).catch(err=>console.log('Error in Update Join ', err));
}

function generateCode(){
    //console.log('Gen Code');
    // Group Name Ask
    const groupName = prompt("Enter the Group Name");
    alert("Group Name is "+groupName);
    const promise = dbOperations.addGroup(groupName);
    promise.then(doc=>{
        document.querySelector('#joinid').innerText = 'Join Id is '+doc.id;
        const p = dbOperations.addFirstPlayerInGroup(doc.id);
        p.then(d=>{
            alert("First Player Join....  And Waiting for Second to Join...");
            document.querySelector('#joinid').innerText = 
            "First Player Join....  And Waiting for Second to Join... Join id is " +  doc.id;
        }).catch(err=>{
            console.log('Error Joining first Player ', err);
        })
        console.log('Doc is ', doc);
    }).catch(err=>{
        console.log('Error During Add a Group ', err);
    })

}