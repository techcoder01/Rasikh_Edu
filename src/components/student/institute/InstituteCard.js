import Image from 'next/image';

const InstituteCard = ({ name, description, imageUrl }) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg text-white">
      <div className="relative h-48 sm:h-64 md:h-80">
        <Image
          src={imageUrl}
          alt={name}
          layout="fill"
          className="transition-transform duration-300 max-w-5xl ease-in-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
        <div className="flex justify-between items-end mb-20 max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-bold">{name}</h2>
          <Image
            src="/aws.png"
            alt="Google Icon"
            width={50}
            height={24}
            className="rounded"
          />
        </div>
      </div>
      <p className="relative bottom-3 px-5 text-sm sm:text-base opacity-80 line-clamp-2 sm:line-clamp-3">{description}</p>
    </div>
  );
};

export default InstituteCard;