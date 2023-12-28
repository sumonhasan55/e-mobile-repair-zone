import VideoPlayer from "@/components/VideoPlayer";

const VideoPage = () => {
    const youtubeVideoUrl = 'CLKf21AqZnc'; // Extract the video ID from the URL

    return (
      <div>
        <h1 className=" text-center text-5xl text-primary font-extrabold my-5">Videos</h1>
       <div className=" grid grid-cols-2 gap-5">
        <div className=" "><VideoPlayer videoUrl={youtubeVideoUrl} /></div>
        <div> <VideoPlayer videoUrl={youtubeVideoUrl} /></div>
        <div> <VideoPlayer videoUrl={youtubeVideoUrl} /></div>
        <div> <VideoPlayer videoUrl={youtubeVideoUrl} /></div>
       
      
      
      
       </div>
      </div>
    );
};
  
  export default VideoPage;



  