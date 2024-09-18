import { Link } from 'lucide-react';
import React from 'react';

function Spotlight() {
  const posts = [
    {
      title: "India Post to release stamps on Ramayana, Mahabharata",
      description:
        "Government will release stamps on Ramayana, Mahabharata, besides honouring freedom fighters like Batukeshwar Dutt, Sukhdev, Ashfaqulla Khan.",
      imageUrl:
        "https://img.etimg.com/thumb/msid-48775918,width-300,height-225,imgsize-265874,resizemode-75/.jpg", // Use actual image URL
      category: "SPOTLIGHT",
    },
    {
      title: "Britain's Royal Mail celebrates 65 years of Paddington",
      description: "Sept. 5 issue celebrates Paddington.",
      imageUrl: "https://www.linns.com/images/default-source/news/great-britain-2023-paddington-bear-stamps.jpg?sfvrsn=6c070ad1_4",
      category: "SPOTLIGHT",
      link: "https://google.com",
    },
    {
      title: "Britain's Royal Mail celebrates 65 years of Paddington",
      description: "Sept. 5 issue celebrates Paddington.",
      imageUrl: "https://www.linns.com/images/default-source/news/great-britain-2023-paddington-bear-stamps.jpg?sfvrsn=6c070ad1_4",
      category: "SPOTLIGHT",
      link: "https://google.com",
    },
  ];

  return (
    <div className="bg-[#FF7A0014] h-[943px]  p-[48px] w-full flex gap-28">
    {/* <div className="container px-4 py-7 bg-black">  */}
    <div className=" w-[608px] h-[943px]">
        
      <h1 className="text-3xl font-bold mb-8 ml-8 italic" >Spotlight</h1>
        {/* <div className="md:col-span-2 "> */}
          {/* Wrap Image in an <a> tag to make it clickable */}
          <a href="https://economictimes.indiatimes.com/news/politics-and-nation/india-post-to-release-stamps-on-ramayana-mahabharata-ravi-shankar-prasad/articleshow/48775918.cms?from=mdr" target="_blank" rel="noopener noreferrer">
            <img className="rounded-lg w-[608px] h-auto" src={posts[0].imageUrl} alt={posts[0].title} />
          </a>
          <p className="text-sm mt-2 text-[#783A73]">Powered by Stampick</p>
          <h2 className="text-4xl font-bold mt-4">{posts[0].title}</h2>
          <p className="text-gray-300 mt-3">{posts[0].description}</p>
        </div>

        {/* Sidebar Posts */}
        <div className="w-[635px] h-[807px]">
          {posts.slice(1).map((post, index) => (
            <div key={index} className="flex gap-3 mt-6 border-b py-4 border-gray-300 border-opacity-10">
              <div className="text-[#786B3A]">
                <h4 className="text-xl font-semibold">
                  <a href={post.link} target="_blank" rel="noopener noreferrer">
                    {post.title}
                  </a>
                </h4>
              </div>
              <div>
                <img className="h-[115px] w-[240px] rounded-lg object-cover" src={post.imageUrl} alt={post.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Spotlight;
