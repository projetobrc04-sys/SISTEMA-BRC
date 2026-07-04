import { clsx } from "clsx";

const avatarTones = ["onyx", "champagne", "copper", "olive", "plum", "steel"] as const;

const getInitials = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

const getTone = (name: string) => {
  const total = Array.from(name).reduce((sum, char) => sum + char.charCodeAt(0), 0);
  return avatarTones[total % avatarTones.length];
};

export default function Avatar({ name, label, size = "md" }: { name: string; label?: string; size?: "sm" | "md" | "lg" }) {
  return (
    <span className={clsx("avatar", `avatar-${size}`, `avatar-${getTone(name)}`)} aria-label={name}>
      {label ?? getInitials(name)}
    </span>
  );
}