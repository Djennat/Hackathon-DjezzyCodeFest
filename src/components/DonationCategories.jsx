import React from "react";
import "./DonationCategories.css"; // Make sure to style it

// Donation data
const donationItems = [
  { id: 1, title: "Feed the needy", description: "Provide nutritious meals to families in need through your generous donation.", icon: "🍽️" },
  { id: 2, title: "Clothes", description: "Give warmth and dignity with new or gently used clothing.", icon: "👕" },
  { id: 3, title: "School Supplies", description: "Help children succeed by funding essential learning materials.", icon: "📏" },
  { id: 4, title: "Medical Operations", description: "Fund urgent surgeries and medical care for those in need.", icon: "💉" },
  { id: 5, title: "adahi Eid Al-Adha", description: "Share the joy of Eid by donating for Adahi to support families in need.", icon: "🐏" },
  { id: 6, title: "Homes", description: "Help build or repair shelters for families facing homelessness.", icon: "🏡" },
];

function DonationCategories() {
  return (
    <section className="donation-categories">
      {donationItems.map((item) => (
        <div className="category-card" key={item.id}>
          <span className="itemicon">{item.icon}</span>
          <h3 className="itemtitle">{item.title}</h3>
          <p  className="itemp" >{item.description}</p>
          <span className="arrow">➝</span>
        </div>
      ))}
    </section>
  );
}

export default DonationCategories;
