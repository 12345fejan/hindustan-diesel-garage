import React from "react";

const parts = [
  {
    title: "Engine Parts",
    desc: "Piston, liner, crankshaft, gasket set & more",
    img: "https://images.unsplash.com/photo-1429772011165-0c2e054367b8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Filters",
    desc: "Oil filter, diesel filter, air filter",
    img: "https://i0.wp.com/narmadamotors.in/wp-content/uploads/2023/09/1__68984.webp?fit=1842%2C846&ssl=1",
  },
  {
    title: "Clutch & Brake",
    desc: "Clutch plate, pressure plate, brake shoe",
    img: "https://media.istockphoto.com/id/2193808212/photo/a-closeup-picture-of-a-clutch-cover-and-clutch-ring-of-car.jpg?s=612x612&w=is&k=20&c=Uxm3JZZfe1d5clR4-5Z0Ch661LReDQqoMXO9uHLHgII=",
  },
  {
    title: "Bearings",
    desc: "All types of tractor & JCB bearings",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR540Y48RDiHckDmArJj1hCKKUNskFa44S0uw&s",
  },
  {
    title: "Oils & Lubricants",
    desc: "Engine oil, hydraulic oil, gear oil",
    img: "https://media.istockphoto.com/id/1187582480/photo/auto-mechanic-showing-5w-30-engine-oil-in-the-auto-repair-shop.jpg?s=612x612&w=is&k=20&c=VWhokZi4FIzJIeo-Uy5NbVNCaXZGEVRZJFfQQxGmkb8=",
  },
  {
    title: "Gear Parts",
    desc: "top gear, counter gear, reverse gear",
    img: "https://media.istockphoto.com/id/959964314/photo/close-up-internal-engine-gear-tractor-engine-walking-tractor.jpg?s=1024x1024&w=is&k=20&c=fJaudukZkP_MR980fMFttIQk6k3nalu_UPQNPjE3OXs=",
  },
];

export default function AutoPartsSection() {
  return (
    <section className="section autoparts">
      <h2>Search By Catagory</h2>

      <div className="autoparts-grid">
        {parts.map((item, index) => (
          <div
            key={index}
            className="autopart-card image-card"
            style={{ backgroundImage: `url(${item.img})` }}
          >
            <div className="autopart-overlay">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}






// import React from "react";

// const parts = [
//   {
//     title: "Engine Parts",
//     desc: "Piston, liner, crankshaft, gasket set & more.",
//     img: "https://plus.unsplash.com/premium_photo-1664392271317-132e491d2e7c?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZW5naW5lJTIwcGFydHN8ZW58MHx8MHx8fDA%3D",
//   },
//   {
//     title: "Filters",
//     desc: "Oil filter, diesel filter, air filter.",
//     img: "https://cdn-icons-png.flaticon.com/512/1048/1048315.png",
//   },
//   {
//     title: "Clutch & Brake",
//     desc: "Clutch plate, pressure plate, brake shoe.",
//     img: "https://cdn-icons-png.flaticon.com/512/1995/1995470.png",
//   },
//   {
//     title: "Bearings",
//     desc: "All types of tractor & JCB bearings.",
//     img: "https://cdn-icons-png.flaticon.com/512/1995/1995508.png",
//   },
//   {
//     title: "Oils & Lubricants",
//     desc: "Engine oil, hydraulic oil, gear oil.",
//     img: "https://cdn-icons-png.flaticon.com/512/2933/2933820.png",
//   },
//   {
//     title: "Electrical Parts",
//     desc: "Self motor, alternator, wiring items.",
//     img: "https://cdn-icons-png.flaticon.com/512/3094/3094916.png",
//   },
// ];

// export default function AutoPartsSection() {
//   return (
//     <section className="section autoparts">
//       <h2>Auto Parts We Deal In</h2>

//       <div className="autoparts-grid">
//         {parts.map((item, index) => (
//           <div className="autopart-card" key={index}>
//             <img src={item.img} alt={item.title} />
//             <h3>{item.title}</h3>
//             <p>{item.desc}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }




