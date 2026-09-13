/**
 * Team members shown on the About page.
 * Replace with real names, roles and bios when supplied by the client.
 */

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  isPlaceholder: boolean;
}

export const team: TeamMember[] = [
  {
    name: "Lead Photographer",
    role: "Founder & Lead Photographer",
    bio: "Bio to be supplied by the client — background, style and approach to wedding photography will appear here.",
    image: "/images/team/IMG_3914.jpeg",
    isPlaceholder: false,
  },
  {
    name: "Lead Videographer",
    role: "Cinematographer",
    bio: "Bio to be supplied by the client — background, style and approach to wedding films will appear here.",
    image: "/images/team/team-2.svg",
    isPlaceholder: true,
  },
  {
    name: "Studio Coordinator",
    role: "Client & Booking Coordinator",
    bio: "Bio to be supplied by the client — role and responsibilities within the studio will appear here.",
    image: "/images/team/team-3.svg",
    isPlaceholder: true,
  },
];
