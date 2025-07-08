const ReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      guestName: "Sarah M.",
      rating: 5,
      comment:
        "Amazing place! Everything was exactly as described. The host was super responsive and helpful.",
      date: "2 days ago",
      sentiment: "positive",
      replied: true,
    },
    {
      id: 2,
      guestName: "Mike D.",
      rating: 4,
      comment:
        "Great location and clean space. WiFi was a bit slow but overall excellent stay.",
      date: "5 days ago",
      sentiment: "positive",
      replied: false,
    },
    {
      id: 3,
      guestName: "Emma R.",
      rating: 3,
      comment:
        "Nice place but the check-in process was confusing. Could use clearer instructions.",
      date: "1 week ago",
      sentiment: "neutral",
      replied: false,
    },
  ];

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case "positive":
        return "text-[#6ee7b7] bg-[#6ee7b7]/20 border border-[#6ee7b7]/40";
      case "neutral":
        return "text-[#a594f9] bg-[#a594f9]/20 border border-[#a594f9]/40";
      case "negative":
        return "text-[#ffd6a5] bg-[#ffd6a5]/20 border border-[#ffd6a5]/40";
      default:
        return "text-[#22223b] bg-[#22223b]/10 border border-[#22223b]/10";
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-sm ${
          i < rating ? "text-yellow-400" : "text-gray-300"
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg p-6 border-2 border-[#a594f9]/20">
          <h3 className="text-sm font-medium text-[#22223b]">Average Rating</h3>
          <div className="flex items-center mt-2">
            <span className="text-2xl font-bold text-[#22223b]">4.7</span>
            <div className="ml-2 flex">{renderStars(5)}</div>
          </div>
          <p className="text-sm text-[#a594f9] mt-1">Based on 24 reviews</p>
        </div>

        <div className="bg-white rounded-lg p-6 border-2 border-[#a594f9]/20">
          <h3 className="text-sm font-medium text-[#22223b]">Response Rate</h3>
          <p className="text-2xl font-bold text-[#22223b]">67%</p>
          <p className="text-sm text-[#a594f9] mt-1">2 pending replies</p>
        </div>

        <div className="bg-white rounded-lg p-6 border-2 border-[#a594f9]/20">
          <h3 className="text-sm font-medium text-[#22223b]">This Month</h3>
          <p className="text-2xl font-bold text-[#22223b]">8</p>
          <p className="text-sm text-[#a594f9] mt-1">New reviews</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border-2 border-[#a594f9]/20">
        <div className="p-6 border-b border-[#a594f9]/20">
          <h3 className="text-lg font-semibold text-[#22223b]">
            Recent Reviews
          </h3>
          <p className="text-[#a594f9] mt-1">
            Stay connected with your guests' feedback
          </p>
        </div>

        <div className="divide-y divide-gray-100">
          {reviews.map((review) => (
            <div key={review.id} className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 font-medium text-sm">
                      {review.guestName.split(" ")[0][0]}
                      {review.guestName.split(" ")[1]?.[0] || ""}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">
                      {review.guestName}
                    </h4>
                    <div className="flex items-center space-x-2">
                      <div className="flex">{renderStars(review.rating)}</div>
                      <span className="text-sm text-gray-500">
                        • {review.date}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${getSentimentColor(
                      review.sentiment
                    )}`}
                  >
                    {review.sentiment}
                  </span>
                  {review.replied && (
                    <span className="px-2 py-1 rounded-full text-xs font-medium text-[#6ee7b7] bg-[#6ee7b7]/20 border border-[#6ee7b7]/40">
                      Replied
                    </span>
                  )}
                </div>
              </div>

              <p className="text-[#22223b] mb-4">{review.comment}</p>

              {!review.replied && (
                <div className="flex space-x-2">
                  <button className="px-4 py-2 bg-[#a594f9]/20 border-2 border-[#a594f9] text-[#a594f9] rounded-md text-sm font-medium hover:bg-[#a594f9]/40 transition-colors cursor-pointer">
                    Reply
                  </button>
                  <button className="px-4 py-2 border-2 border-[#a594f9] text-[#a594f9] rounded-md text-sm font-medium hover:bg-[#a594f9]/10 transition-colors cursor-pointer">
                    Auto-Reply
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#a594f9]/10 rounded-lg p-6 border-2 border-[#a594f9]/20">
        <h4 className="font-semibold text-[#22223b] mb-2">Great job! 🌟</h4>
        <p className="text-[#22223b]">
          Your rating is above average. Keep up the excellent hospitality!
        </p>
      </div>
    </div>
  );
};

export default ReviewsSection;
