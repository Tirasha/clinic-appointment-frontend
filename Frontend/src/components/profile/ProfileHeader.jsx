import profileAvatar from '../../assets/profile_avatar.png';

const ProfileHeader = ({ name, avatarUrl }) => {
  return (
    <div className="flex flex-col items-center mb-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">My Profile</h1>
      
      <div className="w-32 h-32 rounded-full overflow-hidden bg-gradient-to-br from-pink-400 via-pink-300 to-rose-300 flex items-center justify-center mb-4 shadow-lg border-4 border-white">
        <img 
          src={avatarUrl || profileAvatar} 
          alt={name} 
          className="w-full h-full object-cover" 
        />
      </div>
      
      <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
    </div>
  );
};

export default ProfileHeader;