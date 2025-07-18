import { RiReplyLine, RiRobot2Line, RiStarLine } from "@remixicon/react";

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
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Reviews</h1>
          <p className="text-gray-600 mt-1">
            Monitor guest feedback and respond to reviews.
          </p>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <RiStarLine size={16} />
          <span>Last updated: {new Date().toLocaleDateString()}</span>
        </div>
      </div>

      <div className="bg-primary/10 rounded-lg p-6 border-2 border-primary/20">
        <h4 className="font-semibold text-primary mb-2">⭐ Review Insights</h4>
        <p className="text-secondary">
          Monitor your guest feedback and maintain high ratings across all
          platforms.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-primary/10 rounded-lg p-6 border-2 border-primary/20">
          <h3 className="text-sm font-medium text-gray-600">Average Rating</h3>
          <p className="text-2xl font-bold text-gray-900">4.8</p>
          <p className="text-sm text-gray-600 mt-1">+0.2 from last month</p>
        </div>

        <div className="bg-primary/10 rounded-lg p-6 border-2 border-primary/20">
          <h3 className="text-sm font-medium text-gray-600">Total Reviews</h3>
          <p className="text-2xl font-bold text-gray-900">247</p>
          <p className="text-sm text-gray-600 mt-1">+12 this month</p>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">
            Recent Reviews
          </h3>
          <p className="text-gray-600 mt-1">
            Stay connected with your guests' feedback
          </p>
        </div>

        <div className="divide-y divide-gray-100">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="p-6 flex flex-col justify-between min-h-[140px]"
            >
              <div className="flex items-center mb-3 gap-6">
                <div className="flex items-center space-x-3 flex-1">
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

                <div className="flex items-center gap-4 min-w-fit">
                  <div className="flex items-center space-x-2">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        review.sentiment === "positive"
                          ? "text-green-700 bg-green-100 border border-green-200"
                          : review.sentiment === "neutral"
                          ? "text-blue-700 bg-blue-100 border border-blue-200"
                          : "text-orange-700 bg-orange-100 border border-orange-200"
                      }`}
                    >
                      {review.sentiment}
                    </span>
                    {review.replied && (
                      <span className="px-2 py-1 rounded-full text-xs font-medium text-green-700 bg-green-100 border border-green-200">
                        Replied
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <p className="text-secondary text-left w-full max-w-md mb-0">
                {review.comment.replace(/'/g, "&apos;")}
              </p>
              {!review.replied && (
                <div className="flex justify-end mt-4 space-x-2">
                  <button className="px-4 py-2 bg-blue-50 border-2 border-blue-500 text-blue-600 rounded-md text-sm font-medium hover:bg-blue-100 transition-colors cursor-pointer flex items-center gap-2">
                    <RiReplyLine size={18} /> Reply
                  </button>
                  <button className="px-4 py-2 border-2 border-gray-300 text-gray-600 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors cursor-pointer flex items-center gap-2">
                    <RiRobot2Line size={18} /> Auto-Reply
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;
