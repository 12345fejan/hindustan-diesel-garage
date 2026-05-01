import React from "react";

const images = [
  "https://media.istockphoto.com/id/1291337489/photo/indian-farmer-working-with-tractor-at-field.jpg?s=1024x1024&w=is&k=20&c=FDgi16vZZ4WbcQ00fBq600nHvJMRssEQjEb5UDkfpMo=", // tractor
  "https://media.istockphoto.com/id/1141690656/photo/crane-working-near-sand-quarry.jpg?s=1024x1024&w=is&k=20&c=pgfVm5orJnuKvKjKF_xiQC3ODbbYMWvC6EjkskHfLpc=", // jcb
  "https://sanjayautomotive.in/wp-content/uploads/2025/10/14-580x455.png",
  "https://thumbs.dreamstime.com/b/tractor-engine-17768467.jpg",
  "https://images.unsplash.com/photo-1675640433299-ea7c9d56723c?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJhY3RvciUyMGdlYXIlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2qT64Wl0PfXSqEfHVbDWIcZ3rnN8tjmhXiQ&s"
];

export default function Gallery() {
  return (
    <section className="section">
      <h2>Workshop Gallery</h2>
      <div className="gallery">
        {images.map((src, i) => (
          <img key={i} src={src} alt="Garage work" />
        ))}
      </div>
    </section>
  );
}
