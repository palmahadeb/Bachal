import React, { useEffect, useState } from 'react'
import Profile from "../assets/profile.png"
import { Button } from '@mui/material'
import { getDatabase, ref, onValue,set,push,remove} from "firebase/database";
import { getAuth } from "firebase/auth";



const UserList = () => {
    const db = getDatabase();
    const auth = getAuth();
     
    let handleFriendRequest =(item)=>{
       
        
        set(push(ref(db, 'friendrequest/')), {

            whosendid: auth.currentUser.uid,
            whosendname:auth.currentUser.displayName,
            whorecieveid : item.id,
            whorecievename : item.username,
           
          });
    }

    let handlePending =(item)=>{
        console.log(item.id);

        remove(ref(db, 'friendrequest/') + item.id)
    }



    let[userList,setUserList] =useState([])
    let[friendRequest,setFriendRequest] =useState([])

        useEffect(()=>{
            const usersRef = ref(db, 'friendrequest/');
            onValue(usersRef, (snapshot) => {
            
                let arr = []
                snapshot.forEach(item=>{

                    arr.push(item.val().whorecieveid +item.val().whosendid);
                })
                setFriendRequest(arr)
    });
        },[])
    

    useEffect(()=>{
        const usersRef = ref(db, 'users/');
        onValue(usersRef, (snapshot) => {
        
            let arr = []
            snapshot.forEach(item=>{

                arr.push({...item.val(),id :item.key})
            })
       setUserList(arr)
});
    },[])
 
  return (
    <div className='box'>
    <h1>User List</h1>
    {userList.map(item=>(
        
        <div className="list">
            <div className="img">
            <img src={Profile}/>
            </div>
            <div className="details">
                <h3>{item.username}</h3>
                <p>{item.email}</p>
            </div>
            <div className="button">
                {friendRequest.includes(item.id +auth.currentUser.uid)
                ?
                <Button onClick={()=>handlePending(item)}  size='small' variant='contained'>Pending</Button>
                :
                <Button onClick={()=>handleFriendRequest(item)} size='small' variant='contained'>+</Button>
                }
                
            </div>
        </div>
    ))}
  
</div>
  )
}

export default UserList