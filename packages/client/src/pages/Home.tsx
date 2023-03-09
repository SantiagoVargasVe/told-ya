import React from "react";

function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-full ">
      <h1 className="text-3xl font-bold mb-8 text-headline">
        Send Timed Messages to Prove Your Point
      </h1>
      <p className="max-w-lg text-center mb-8 text-paragraph">
        Do you ever find yourself in a situation where someone asks for your
        advice but doesn't follow it, only to come back later and tell you how
        things turned out exactly as you predicted? With our service, you can
        send a timed message to that person and prove your point.
      </p>
      <button className="mb-8 bg-highlight p-2 rounded-md text-main_headline">
        Send a Timed Message
      </button>
      <p className="max-w-lg text-center text-paragraph">
        Let your friends and family know that you're always there to give them
        the advice they need. Try our service today!
      </p>
    </div>
  );
}

export default Home;
