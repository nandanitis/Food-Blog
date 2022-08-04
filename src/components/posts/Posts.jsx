import "./posts.css";
import Post from "../post/Post";
import { useState, useEffect } from "react";
import BlogList from "../blogList/BlogList";
import useFetch from "../useFetch";

export default function Posts() {

  const { data:blogs, isPedning} = useFetch('https://nandanitis.github.io/jasonapii/dbs.json');


  return (
    <div className="posts">
      <div className="postInfo">
        <div className="posttitle">Basavangudi Bojana Bete</div>
        <hr />
        <span className="postDate">5hr ago</span>

        <p className="postdesc">
          &emsp;&emsp; You must really be thinking: “why in the world would
          someone want to make a food guide for places in and around
          Basvangudi”? Everyone here knows where to go to, to grab a meal or a
          snack? There’s Plan B, Tipsy bull, Onesta, Bob’s, Daddy’s, Chutney
          chang, Brewsky, Elingoes and whole host of other places so close by,
          we really need not worry. Also we can see the display boards of
          McDonalds and KFC (and many other fast food places) beaming right at
          our faces as we walk by Ram Krishna ashram. So what’s the whole point?
          Well It’s undeniable that the burgers and shakes you get in those
          places are great and many think that these are ‘the’, ‘go to’ places
          when we think about ‘food’, but we would like to disagree, we really
          think you’re missing out on something else Basvangudi has to offer. We
          believe you’re really at a loss for not getting to experience the
          authentic flavours of Basvangudi. We aren’t trying to claim we’re
          doing a service to these places by making a website about them because
          these places are already super famous with the locals (these places
          are just filled to the brim with people, all the time).
          <br />
          &emsp;&emsp;This is just our attempt at trying to get people from our
          generation to maybe appreciate these places a little better.
          Basvangudi is an integral part of Bengaluru, it’s a part of old
          Bengaluru and was the hub of activity much before the IT boom, so this
          is a part of Bengaluru where you will find eating establishments which
          were opened long ago not only with the intention to make money but to
          serve the people with great food. Most of these legacy restaurants in
          Basvangudi make south Indian delicacies which are not only pocket
          friendly but super healthy too. You’ve read too much already haven’t
          you? So let’s get to work.
        </p>
      </div>
      <div className="listDisplay">
        {isPedning && <div>is Loading....</div>}
        {blogs && <BlogList blogs={blogs} title="All Blogs!!" />}
      </div>
    </div>
  );
}
