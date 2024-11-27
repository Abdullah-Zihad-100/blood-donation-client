// import { useState } from "react";
// import { IoIosCamera } from "react-icons/io";

// const ProfilePictureUploader = () => {
//   const [selectedImage, setSelectedImage] = useState(
//     "https://www.exscribe.com/wp-content/uploads/2021/08/placeholder-image-person-jpg.jpg"
//   );

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = () => {
//         setSelectedImage(reader.result); // Update the image preview
//       };
//       reader.readAsDataURL(file); // Read the file as a data URL
//     }
//   };

//   return (
//     <div className="mx-auto relative w-[80px] h-[80px]">
//       {/* File Input with Label */}
//       <label className="absolute bottom-0 right-0 cursor-pointer">
//         {/* Hidden File Input */}
//         <input
//           type="file"
//           accept="image/*"
//           className="hidden"
//           onChange={handleFileChange}
//         />
//         {/* Camera Icon */}
//         <IoIosCamera className="text-neutral-700 text-xl bg-neutral-300 rounded-full p-1" />
//       </label>

//       {/* Profile Picture */}
//       <img
//         className="rounded-full object-cover w-full h-full bg-red-300 p-[1.5px] border border-neutral-300"
//         src={selectedImage}
//         alt="Profile"
//       />
//     </div>
//   );
// };

// export default ProfilePictureUploader;
