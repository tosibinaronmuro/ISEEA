import React from "react";

const AboutStories = () => {
  return (
    <div className="flex flex-col">
      <div>
        <p className="font-garmond text-xl font-bold lg:text-3xl ">IMPACT STORIES</p>
      </div>
      <div className="flex flex-row gap-x-5 lg:py-5">
        <div className="min-h-[10vh] w-auto flex justify-center items-center m-auto min-w-[30%] lg:min-h-[10vh] lg:min-w-[18%]">
          <img
            src="/images/aboutStories.jpg"
            alt=""
            className="w-full rounded-2xl"
          />
        </div>
        <div className="rounded-lg border border-gray-100 bg-black font-Poiret   p-4 shadow-sm transition hover:shadow-lg sm:p-6">
          <p className="mt-2 line-clamp-6 text-sm/relaxed lg:text-lg text-white">
            Hi, my good friends from the self-esteem group. My name is Thabiso
            from South Africa in Pretoria. When I started this group, I was from
            a situation where I come from a drug addiction problem. I used to
            smoke heroin for almost 15 years of my life. When I entered this
            group about 5 months back, I was a broken man who always felt
            rejected and these things are only happening to me I had a low
            self-esteem, always thought I was a looser and I have nowhere to go
            and no one to share my problems with. But I found this group and
            this lady I don't know physically, Rosemary Ochiwu. She gave me a
            warm welcome after telling her my story. She really encouraged me a
            lot only by chatting with her on this group. Her posts made me
            realize that my problem is that I have a low self-esteem. Since
            then, I have been growing day by day until I ended up not blaming
            other people for my wrong decisions but now I am overcoming every
            temptation I come across and it's a victory for me cause my life has
            changed a lot. I'm not perfect but I'm striving for success. Thank
            you
          </p>

          <a
            href="/stories"
            className="group mt-4 hover:animate-waving-hand inline-flex items-center gap-1 text-sm/relaxed lg:text-lg  text-primary"
          >
            Find out more
            <span
              aria-hidden="true"
              className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
            >
              &rarr;
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutStories;
