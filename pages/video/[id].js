import { useRouter } from 'next/router';

export async function getServerSideProps(context) {
  const { id } = context.params;
  const res = await fetch(`http://localhost:3000/api/videos/${id}`);
  const video = await res.json();
  return { props: { video } };
}

export default function WatchVideo({ video }) {
  return (
    <div>
      <h1>{video.title}</h1>
      <p>{video.description}</p>
      <video controls width="800">
        <source src={`/videos/${video.file}`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
