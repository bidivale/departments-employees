
import "./Home.css";
import { useEffect, useState } from "react";
import { getDocs, onSnapshot } from 'firebase/firestore';
import { colRef } from './firebase';



function Home() {
    const [profiles, setProfiles] :any = useState([]);

    
       
      //  useEffect(() => {
      //      console.log("useEffect ran")
      //      getDocs(colRef)
      //      .then((snapshot) => {
      //          console.log("this is snapshot", snapshot)
      //          setProfiles(snapshot.docs.map(doc=>
      //           ({id: doc.id,
      //             data: doc.data()
      //           })
      //           ))
      //       })
      //    }, []);
      //    console.log("this is profile outside", profiles)

      useEffect(() => {
        onSnapshot(colRef, (snapshot) => {
          setProfiles(snapshot.docs.map(doc=>
            ({id: doc.id,
            data: doc.data()
            })
          ))
        } )
      }, []);

      console.log("this is profile outside", profiles)

  return (
    
    <div className='home'>
  
        {profiles.map(((profile:any) => {
          <ul className='profiles-preview' key={profile.id}>
             <h2>{profile.data.name}</h2> 
             <p>{profile.data.department}</p>
          </ul>
      } ))}

    </div>
  
    
  )
}



export default Home
