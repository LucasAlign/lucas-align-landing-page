const appBasePath = import.meta.env.BASE_URL.endsWith("/")
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

export default function Collab() {
  return (
    <iframe
      title="Collab — A stronger network that pays organizations back"
      src={`${appBasePath}collab/index.html`}
      className="block h-screen w-full border-0 bg-white"
    />
  );
}
