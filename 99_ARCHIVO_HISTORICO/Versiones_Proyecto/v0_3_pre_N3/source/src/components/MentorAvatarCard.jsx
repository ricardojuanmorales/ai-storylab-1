import React from "react";

/**
 * Avatar Mentor card. Shows the mentor avatar and a contextual message.
 * Used across screens to keep the playful, guided experience.
 */
export default function MentorAvatarCard({ message, name = "Mentor IA", compact = false }) {
  return (
    <div className={`mentor-card ${compact ? "mentor-card--compact" : ""}`}>
      <img
        src="/assets/avatar/mentor.svg"
        alt="Avatar Mentor"
        className="mentor-card__avatar"
        width={compact ? 48 : 64}
        height={compact ? 48 : 64}
      />
      <div className="mentor-card__body">
        <span className="mentor-card__name">{name}</span>
        <p className="mentor-card__message">{message}</p>
      </div>
    </div>
  );
}
