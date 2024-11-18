import Link from 'next/link';

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/videos');
  const videos = await res.json();
  return { props: { videos } };
}

export default function Home({ videos }) {
  return (
    <div>
      <h1>Video Library</h1>
      <div className="video-grid">
        {videos.map((video) => (
          <div key={video.id}>
            <h3>{video.title}</h3>
            <Link href={`/video/${video.id}`}>
              <a>Watch</a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
