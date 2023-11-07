import React from 'react';
import profile from "./images/profile.jpg";

function ProfilePhoto() {
    // importing profile image from google drive.
    // image file ID from your Google Drive.
    //const imageFileId = '1SdFvm_05jAlTTDlVzKZJLiDGOhQ0yzaI';

    // Construct the URL using the file ID.
   // const imageUrl = `https://drive.google.com/uc?id=${imageFileId}`;

    return (

        <img className='profile-img' src={profile} loading="lazy" alt="profile" />
    );
}


export default ProfilePhoto;
