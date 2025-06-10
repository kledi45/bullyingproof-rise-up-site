import { Book, MessageSquare, Users } from 'lucide-react';
import { useState, useEffect } from 'react';

const ActivitiesSection = () => {
  const [visibleActivities, setVisibleActivities] = useState([0, 1]);

  const activities = [
    {
      title: "Educational Events",
      description: "Interactive workshops and seminars designed to educate children, parents, and educators about cyberbullying prevention and digital citizenship.",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&auto=format&fit=crop&q=60",
      icon: Book,
      iconColor: "text-bp-blue",
      bgColor: "bg-bp-light-blue",
      buttonColor: "bg-bp-blue",
      buttonText: "Learn More"
    },
    {
      title: "Online Support",
      description: "24/7 online support system connecting victims, families, and communities with trained counselors and peer support networks.",
      image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=800&auto=format&fit=crop&q=60",
      icon: MessageSquare,
      iconColor: "text-bp-teal",
      bgColor: "bg-green-100",
      buttonColor: "bg-bp-teal",
      buttonText: "Get Support"
    },
    {
      title: "Community Building",
      description: "Join our growing community of advocates working together to create safer digital spaces for everyone.",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&auto=format&fit=crop&q=60",
      icon: Users,
      iconColor: "text-purple-600",
      bgColor: "bg-purple-100",
      buttonColor: "bg-purple-600",
      buttonText: "Join Community"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleActivities(current => {
        const next = current.map(index => (index + 1) % activities.length);
        return next;
      });
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const ActivityCard = ({ activity }) => {
    const Icon = activity.icon;
    return (
      <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100">
        <div className="w-full h-48 mb-6 rounded-xl overflow-hidden">
          <img
            src={activity.image}
            alt={activity.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className={`flex items-center justify-center w-20 h-20 ${activity.bgColor} rounded-2xl mb-6 mx-auto`}>
          <Icon className={`w-10 h-10 ${activity.iconColor}`} />
        </div>
        <h3 className="text-2xl font-bold text-bp-text-gray mb-4 text-center font-poppins">
          {activity.title}
        </h3>
        <p className="text-bp-text-gray text-center leading-relaxed font-poppins">
          {activity.description}
        </p>
        <div className="mt-6 text-center">
          <button
            className={`${activity.buttonColor} text-white px-6 py-3 rounded-full font-poppins font-medium hover:opacity-90 transition-colors duration-200`}
            style={{
              boxShadow: '-30px -30px 48px 0 rgba(255,255,255,0.7), 30px 30px 48px 0 rgba(0,0,0,0.25)'
            }}
          >
            {activity.buttonText}
          </button>
        </div>
      </div>
    );
  };

  return (
    <section className="py-20 px-6" style={{ background: '#e0e1e3' }}>
      <div className='w-full'>
      {/* <img src="/images/activites-background.jpg" alt="Activities Background" className='object-cover' style={{width: '100%', height: '30% !important'}} /> */}
      </div>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-bp-text-gray font-poppins">
          Our Activities
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {visibleActivities.map((index) => (
            <ActivityCard key={index} activity={activities[index]} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
