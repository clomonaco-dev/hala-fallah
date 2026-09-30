export function GoogleMap({ address, title }: { address: string; title: string }) {
  const src = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
  const directions = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  return (
    <div className="mapCard">
      <iframe
        title={title}
        src={src}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
      <a className="mapOverlayLink" href={directions} target="_blank" rel="noreferrer">Google Maps ↗</a>
    </div>
  );
}
