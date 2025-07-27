import { addProfile } from "../../../api";
import Input from "../../UI/Input";

const AddProfile: React.FC<{
  onAddProfile: (profileSelectedId: string) => void;
}> = ({ onAddProfile }) => {
  function handleButtonAddProfileClick() {
    const inputElement = document.getElementById(
      "newProfile"
    ) as HTMLInputElement;
    const newProfileName = inputElement.value.trim();
    if (newProfileName === "") {
      alert("Please enter a profile name.");
      return;
    }

    addProfile(newProfileName)
      .then((response) => {
        if (response) {
          console.log("Profile added successfully:", response);
          const newProfileId = response._id;
          onAddProfile(newProfileId);
        } else {
          console.error("Failed to add profile.");
        }
      })
      .catch((error) => {
        console.error("Error adding profile:", error);
      });

    inputElement.value = ""; // Clear the input field after adding
  }

  return (
    <div
      className='flex items-center 
    justify-between mb-1 mt-2 ml-1'
    >
      <Input id='newProfile' />
      <button
        className='px-3 py-1 ml-1 bg-blue-500 text-white rounded'
        onClick={handleButtonAddProfileClick}
      >
        +
      </button>
    </div>
  );
};

export default AddProfile;
