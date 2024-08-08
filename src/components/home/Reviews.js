import Image from 'next/image';

const ReviewCard = ({ name, date, rating, comment, likes, dislikes }) => (
  <div className="bg-[#17191A] rounded-lg p-6 mb-6">
    <div className="flex items-center mb-4">
      <Image src="/user.jpg" alt={name} width={40} height={40} className="rounded-full mr-4" />
      <div>
        <h3 className="text-white font-semibold">{name}</h3>
        <p className="text-gray-400 text-sm">{date}</p>
      </div>
    </div>
    <div className="flex mb-4">
      {[...Array(rating)].map((_, i) => (
        <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
    <p className="text-white mb-4">{comment}</p>
    <div className="flex items-center text-gray-400 space-x-6">
      <div className="flex items-center">
        <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
        </svg>
        <span>{likes}</span>
      </div>
      <div className="flex items-center">
        <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5" />
        </svg>
        <span>{dislikes}</span>
      </div>
    </div>
  </div>
);
const ReviewsSection = () => {
  const reviews = [
    {
      name: "Syed yashir",
      date: "Jul 15, 2022",
      rating: 5,
      comment: "Rasikh has been a game-changer for our students, allowing them to easily manage and share their academic credentials. The platform's use of blockchain technology provides an added layer of security and trust.",
      likes: 14
    },
    {
      name: "Umer Sheikh",
      date: "Jun 28, 2022",
      rating: 5,
      comment: "As an employer, I've been impressed by the instant verification process offered by Rasikh. It has helped us streamline our hiring process and reduce the risk of credential fraud.",
      likes: 12
    },
    {
      name: "mehdi",
      date: "Jun 15, 2022",
      rating: 5,
      comment: "I've found Rasikh to be a user-friendly and efficient solution for managing my academic records. The ability to instantly verify credentials has been particularly valuable for scholarship applications and other purposes.",
      likes: 10
    }
  ];

  return (
    <section className="relative py-16 overflow-hidden">
      <Image
        src="/reviewsbg.png"
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0"
      />
      <div className="relative z-10 container max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-white mb-10">What People Are Saying</h2>
        <div className="space-y-11">
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;