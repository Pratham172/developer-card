import React from 'react';

function ProfilePhoto() {
   // importing profile image from google drive.
  // image file ID from your Google Drive.
  const imageFileId = '1SdFvm_05jAlTTDlVzKZJLiDGOhQ0yzaI';

  // Construct the URL using the file ID.
  const imageUrl = `https://drive.google.com/uc?id=${imageFileId}`;

  return (
    
      <img className='profile-img' src={imageUrl} loading="lazy" alt="profile" />
  );
}


export default ProfilePhoto;
