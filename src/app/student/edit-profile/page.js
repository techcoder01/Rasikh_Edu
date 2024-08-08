import DashboardLayout from "../../../components/layout/StudentLayout";
import EditProfile from "../../../components/student/profile/EditProfie";

const EditProfilePage = () => {
  const initialData = {
    id: '41-9139/BSCS/MSCS/67',
    preferredName: 'Yashir Raza',
    pronouns: 'He/Him',
    location: 'Islamabad, Pakistan',
    bio: '',
    school: 'XYZ School',
    major: 'Computer Science',
    startingYear: '2022',
    graduationYear: '2026',
    portfolio: 'yashir.design',
    linkedin: 'www.linkedin/Yashir-Raza',
    github: 'www.github/Yashir-Raza',
    profileImageUrl: '/user.jpg' // Add this if you have a profile image URL
  };

  return (
    <DashboardLayout>
        <div>
            <EditProfile initialData={initialData}/>
        </div>
    </DashboardLayout>
  );
}

export default EditProfilePage