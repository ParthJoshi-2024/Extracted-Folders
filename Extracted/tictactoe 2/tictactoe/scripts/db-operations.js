import { db } from "./firebase-config.js";
import { addDoc, collection,setDoc, doc, query, where, getDocs, updateDoc } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-firestore.js";
// export const dbOperations = {

    const dbOperations = {
    addGroup(groupName){
        const pr =  addDoc(collection(db, "groups"), {
           'name':groupName
          });
          return pr;
    },
    addFirstPlayerInGroup(id){
            return addDoc(collection(db,'group_player_mapping'),{
                groupid:id,
                firstPlayer:'Player 1',
                secondPlayer:'',
                status : ''
            })
    },
    async joinGroup(id) {

    const q = query(collection(db, "group_player_mapping"), where("groupid", "==", id));

const querySnapshot = await getDocs(q);
querySnapshot.forEach(async (d) => {
  // doc.data() is never undefined for query doc snapshots
  console.log('****Data is ', d.id, " => ", d.data());
    //const e = {...doc.data()};
    const e = d.data();
    console.log('All Data is ', e);
    e.secondPlayer = 'Player2';
    e.status= 'S';
    console.log('After Updation Data ', e);

    await setDoc(doc(db, "group_player_mapping", d.id), e);
    console.log(':::::After Update ');
});


        //const gp = doc(db, 'group_player_mapping', id);
        //return setDoc(gp, { secondPlayer: 'Player2', status:'S' }, { merge: true });
    }
}
export default dbOperations;
