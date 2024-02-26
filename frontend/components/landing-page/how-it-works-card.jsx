const cards = [
  {
    id: 1,
    description: "Freelancer completes a project",
    checkicon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m4.5 12.75 6 6 9-13.5"
        />
      </svg>
    ),
  },
  {
    id: 2,
    description: "Freelancer completes a project",
    subdescription: "Freelancer submits work",
    // checkicon: 
  },
  {
    id: 3,
    subdescription: "Client sends sol tokens",
  },
  {
    id: 4,
    description: "Freelancer completes a project",
  },
  {
    id: 5,
    description: "Freelancer completes a project",
  },
  {
    id: 6,
    description: "Freelancer completes a project",
  },
];

const HowItWorksCard = () => {
  return (
    <>
      {cards.map((card) => (
        <div
          key={card.id}
          className="rounded-md border border-solid border-gray-500 px-4 pt-2 pb-10 w-full "
        >
          <div className="flex flex-col">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
            </div>
            <div className="font-medium">Step {card.id}</div>
            <div className="text-m font-light text-gray-500">{card.description}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default HowItWorksCard;
