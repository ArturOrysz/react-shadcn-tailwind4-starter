export default function PostCard({ title, excerpt, author, date }) {
  return (
    <div className="bg-white shadow rounded overflow-hidden">
      <div className="h-48 bg-gray-200"></div>
      <div className="p-4">
        <h3 className="text-xl mb-2">{title}</h3>
        <p className="text-sm mb-4">{excerpt}</p>
        <div className="text-xs flex items-center space-x-2">
          <span>{author}</span>
          <span>•</span>
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
}
